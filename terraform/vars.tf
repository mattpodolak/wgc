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
    }
}