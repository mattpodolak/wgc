terraform {
  backend "s3" {
    bucket = "wgc-node-aws-jenkins-terraform"
    key = "wgc-terraform.tfstate"
    region = "us-east-1"
  }
}