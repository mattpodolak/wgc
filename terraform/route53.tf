# resource "aws_route53_zone" "main" {
#   name = var.DOMAIN_NAME

#   tags = {
#     Project = "wgc"
#   }
# }

# resource "aws_route53_record" "www" {
#   zone_id = aws_route53_zone.main.zone_id
#   name    = "www.${var.DOMAIN_NAME}"
#   type    = "A"

#   alias {
#     name                   = aws_alb.application_load_balancer.dns_name
#     zone_id                = aws_alb.application_load_balancer.zone_id
#     evaluate_target_health = true
#   }
# }

# resource "aws_route53_zone" "shop" {
#   name = "shop.${var.DOMAIN_NAME}"

#   tags = {
#     Environment = "shop"
#   }
# }

# resource "aws_route53_record" "shop-ns" {
#   zone_id = aws_route53_zone.main.zone_id
#   name    = "shop.${var.DOMAIN_NAME}"
#   type    = "NS"
#   ttl     = "30"
#   records = aws_route53_zone.shop.name_servers
# }