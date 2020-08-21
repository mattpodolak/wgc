# Providing a reference to our default VPC
resource "aws_default_vpc" "default_vpc" {

  tags = {
    Project = "wgc"
  }
}

# Providing a reference to our default subnets
resource "aws_default_subnet" "default_subnet_a" {
  availability_zone = "${var.AWS_REGION}a"

  tags = {
    Project = "wgc"
  }
}

resource "aws_default_subnet" "default_subnet_b" {
  availability_zone = "${var.AWS_REGION}b"

  tags = {
    Project = "wgc"
  }
}

resource "aws_default_subnet" "default_subnet_c" {
  availability_zone = "${var.AWS_REGION}c"

  tags = {
    Project = "wgc"
  }
}