To run the client app with ember-cli

1) install nodeJS

    https://nodejs.org/en/download/

2) build and run the app with ember-cli

```bash
cd iowacodecamp-mobile
yarn
ember s
```

To run the app locally with docker

1) install docker

    https://docs.docker.com/docker-for-mac/

2) build and run the app with docker

```bash
docker build -t iccmobile .
docker run -it -p 80:8080 iccmobile
```

To deploy via heroku

    heroku plugins:install heroku-container-registry
    heroku container:login
    heroku container:push web --app iccmobile
    heroku ps:scale web=1 --app iccmobile
    heroku open --app iccmobile

Heroku Settings: add `Config Variable` PORT with a value of 80
