variable "AWS_REGION" {
    default = "us-east-1"
}

variable "DOMAIN_NAME"{
    default = "wildgamecooking.ca"
}

variable "ENV" {
    type = map
    default = {
        "USER" = "enlight.mentorship@gmail.com"
        "PASS" = "etfaetrevbzzvqdv"
        "CERT" = "arn:aws:acm:us-east-1:299559919936:certificate/f3553f76-7219-4b56-abd4-4ff5532ba2e6"
    }
}