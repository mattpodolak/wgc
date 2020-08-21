# module "acm" {
#   source  = "terraform-aws-modules/acm/aws"
#   version = "~> v2.0"

#   domain_name  = var.DOMAIN_NAME
#   zone_id      = aws_route53_zone.main.zone_id

#   subject_alternative_names = [
#     "*.${var.DOMAIN_NAME}",
#     "shop.${var.DOMAIN_NAME}",
#   ]

#   wait_for_validation = false

#   tags = {
#     Name = var.DOMAIN_NAME
#   }
# }

# resource "aws_acm_certificate" "cert" {
#   domain_name       = var.DOMAIN_NAME
#   validation_method = "DNS"

#   tags = {
#     Environment = "production"
#     Project = "wgc"
#   }

#   lifecycle {
#     create_before_destroy = true
#   }
# }