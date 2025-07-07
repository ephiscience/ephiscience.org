variable "DOCKER_FQ_IMAGE_NAME" {
    default = "ghcr.io/ephiscience/ephiscience.org"
}

target "ephiscience" {
    dockerfile = "Dockerfile"
    contexts = {
        src = "./dist/ephiscience-web"
    }

    cache-from = [
        main_branch_cache_from(DOCKER_FQ_IMAGE_NAME),
        pr_cache_from(DOCKER_FQ_IMAGE_NAME)
    ]

    cache-to = [
        main_branch_cache_to(DOCKER_FQ_IMAGE_NAME),
        pr_cache_to(DOCKER_FQ_IMAGE_NAME)
    ]

    tags = [
        local_tag(DOCKER_FQ_IMAGE_NAME),
        pr_tag(DOCKER_FQ_IMAGE_NAME),
        main_branch_tag(DOCKER_FQ_IMAGE_NAME)
    ]

    output = [
        ci_main_branch_output(DOCKER_FQ_IMAGE_NAME),
        ci_pr_output(DOCKER_FQ_IMAGE_NAME)
    ]
}

group "default" {
    targets = ["ephiscience"]
}
