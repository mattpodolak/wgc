data "template_file" "wgc" {
  template = "${file("${path.module}/ecs_tasks.json")}"

  vars = {
    client_image_url = "${aws_ecr_repository.wgc_client.repository_url}"
    server_image_url = "${aws_ecr_repository.wgc_server.repository_url}"
    log_group_react = "${aws_cloudwatch_log_group.wgc_react.name}"
    log_group_express = "${aws_cloudwatch_log_group.wgc_express.name}"
    log_group_region = var.AWS_REGION
    USER = var.ENV["USER"]
    PASS = var.ENV["PASS"]
  }
}

resource "aws_ecs_cluster" "wgc_cluster" {
  name = "wgc-cluster"
}

# TODO: add code to incorporate docker-compose?
resource "aws_ecs_task_definition" "wgc_task" {
  family                   = "wgc-task"
  container_definitions    = data.template_file.wgc.rendered
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"    
  memory                   = 1024
  cpu                      = 512
  execution_role_arn       = aws_iam_role.ecsTaskExecutionRole.arn
  depends_on = [
    aws_ecr_repository.wgc_client,
    aws_ecr_repository.wgc_server
  ]
}

resource "aws_ecs_service" "wgc_service" {
  name            = "wgc-service"                             
  cluster         = aws_ecs_cluster.wgc_cluster.id           
  task_definition = aws_ecs_task_definition.wgc_task.arn
  launch_type     = "FARGATE"
  desired_count   = 3 # number of tasks we want deploy

  network_configuration {
    subnets          = [aws_default_subnet.default_subnet_a.id, aws_default_subnet.default_subnet_b.id, aws_default_subnet.default_subnet_c.id]
    assign_public_ip = true
    security_groups  = ["${aws_security_group.service_security_group.id}"]
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.target_group.arn
    container_name   = "wgc-client"
    container_port   = 80
  }

  depends_on = [
    aws_lb_listener.http_listener,
    aws_lb_listener.https_listener
  ]
}