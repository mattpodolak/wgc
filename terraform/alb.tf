resource "aws_alb" "application_load_balancer" {
  name               = "wgc-lb-tf"
  load_balancer_type = "application"
  subnets = [
    aws_default_subnet.default_subnet_a.id,
    aws_default_subnet.default_subnet_b.id,
    aws_default_subnet.default_subnet_c.id
  ]
  # Referencing the security group
  security_groups = [aws_security_group.load_balancer_security_group.id]

  tags = {
    Project = "wgc"
  }

}

# resource "aws_lb_target_group" "target_group" {
#   name        = "wgc-target-group"
#   port        = 80
#   protocol    = "HTTP"
#   target_type = "ip"
#   vpc_id      = aws_default_vpc.default_vpc.id 
  
#   health_check {
#     matcher = "200,301,302"
#     path = "/"
#     interval = 60
#     port = 80
#   }

#   tags = {
#     Project = "wgc"
#   }
# }

# resource "aws_lb_listener" "http_listener" {
#   load_balancer_arn = aws_alb.application_load_balancer.arn
#   port              = "80"
#   protocol          = "HTTP"
#   default_action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.target_group.arn
#   }
# }

resource "aws_lb_target_group" "target_group" {
  name        = "wgc-target-group"
  port        = 443
  protocol    = "HTTPS"
  target_type = "ip"
  vpc_id      = aws_default_vpc.default_vpc.id 
  
  health_check {
    matcher = "200,301,302"
    path = "/"
    interval = 60
    port = 443
    protocol = "HTTPS"
  }

  tags = {
    Project = "wgc"
  }
}

resource "aws_lb_listener" "http_listener" {
  load_balancer_arn = aws_alb.application_load_balancer.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "https_listener" {
  load_balancer_arn = aws_alb.application_load_balancer.arn
  port              = "443"
  protocol          = "HTTPS"
  certificate_arn   = var.ENV["CERT"]
  
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.target_group.arn
  }
}

output "alb_hostname" {
  value = "${aws_alb.application_load_balancer.dns_name}"
}