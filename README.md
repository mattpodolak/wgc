# Getting Started

## Development

Run Docker Containers: `docker-compose -f dev-docker-compose.yml up --build`

## Deployment

### Test Deployment

Create docker image: `docker build -t wgc:1.0.0 .`
Run docker image: `docker run -p 5000:5000 wgc:1.0.0`

### Staging

Create a PR to `master` and merge to deploy to the staging environment on Heroku.

### Production

Once the staging release is ready for production create a PR from `master` to `release`, this will deploy to the production environment on Heroku.

## TODO:

- Add testing with Jest and Enzyme for Client
- improve SEO with React-Helmet
- Migrate to Next.js
- update episode summaries
- recipes pages

# Previous Deployment

Previously Terraform was leveraged to deploy and maintain containers in ECS, this has been deprecated in favour of GitHub Actions and Heroku. A future state may see the use of AWS Lightsail.

# Deprecated

## Deployment

- Update version in `package.json` files
- Update version variables in `vars.tf` to point to latest version of images.
- Update image versions in `./scripts/deploy.sh`

### Run Deploy Script

`./scripts/deploy.sh`
