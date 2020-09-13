## Development
Run Docker Containers: `docker-compose -f dev-docker-compose.yml up --build`

## Deployment
- Update version in `package.json` files
- Update version variables in `vars.tf` to point to latest version of images.
- Update image versions in `./scripts/deploy.sh`

### Run Deploy Script
`./scripts/deploy.sh`

## TODO:
- Add CD with GitHub Actions
- Add testing with Jest and Enzyme for Client
