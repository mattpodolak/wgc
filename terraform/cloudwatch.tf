resource "aws_cloudwatch_log_group" "wgc_react" {
  name = "ecs-group/wgc-react"

  tags = {
    Project = "wgc"
  }
}

resource "aws_cloudwatch_log_group" "wgc_express" {
  name = "ecs-group/wgc-express"

  tags = {
    Project = "wgc"
  }
}