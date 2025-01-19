target "ephiscience" {
    dockerfile = "Dockerfile"
    contexts = {
        src = "./dist/ephiscience-web"
    }

    tags = [
        "registry.gkny.fr/ephiscience/web:next"
    ]
}

group "default" {
    targets = ["ephiscience"]
}
