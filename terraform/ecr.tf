provider "aws" {
  version = "~> 2.0"
  region  = var.AWS_REGION 
}

resource "aws_ecr_repository" "wgc_client" {
  name = "wgc-client"

  tags = {
    Project = "wgc"
  }
}

resource "aws_ecr_repository" "wgc_server" {
  name = "wgc-server"

  tags = {
    Project = "wgc"
  }
}

output "ecr-urls" {
    value = [
        "${aws_ecr_repository.wgc_client.*.repository_url}",
        "${aws_ecr_repository.wgc_server.*.repository_url}"
    ]
}