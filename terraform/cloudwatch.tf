resource "aws_cloudwatch_log_group" "wgc_react" {
  name = "ecs-group/wgc-react"
}

resource "aws_cloudwatch_log_group" "wgc_express" {
  name = "ecs-group/wgc-express"
}