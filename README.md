To run the client app with ember-cli

1) install node and bower

    https://nodejs.org/en/download/

2) update the session data so you can use the app

    cd iowacodecamp-mobile
    open app/index.html and replace the text/preload
    script tag with what exists in tests/index.html

3) build and run the app with ember-cli

    cd iowacodecamp-mobile
    npm i && bower i
    ember s

To run the app locally with docker

1) install docker

    https://docs.docker.com/docker-for-mac/

2) build and run the app with docker

    docker build -t iccmobile .
    docker run -it -p 80:8080 iccmobile

To deploy via heroku

    heroku plugins:install heroku-container-registry
    heroku container:login
    heroku container:push web --app iccmobile
    heroku ps:scale web=1 --app iccmobile
    heroku open --app iccmobile

Heroku Settings: add `Config Variable` PORT with a value of 80
