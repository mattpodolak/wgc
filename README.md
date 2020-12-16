## TODO:

- Add testing with Jest and Enzyme for Client
- improve SEO with React-Helmet
- Migrate to Next.js
- update episode summaries
- recipes pages

# Previous Deployment

Previously Terraform was leveraged to deploy and maintain containers in ECS, this has been deprecated in favour of GitHub Actions and Heroku. A future state may see the use of AWS Lightsail.

## Deprecated Development

Run Docker Containers: `docker-compose -f dev-docker-compose.yml up --build`

## Deployment

- Update version in `package.json` files
- Update version variables in `vars.tf` to point to latest version of images.
- Update image versions in `./scripts/deploy.sh`

### Run Deploy Script

`./scripts/deploy.sh`
