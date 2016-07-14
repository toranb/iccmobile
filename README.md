1) install docker

    https://docs.docker.com/docker-for-mac/

2) run the basic setup script

    bash run.sh

3) build and run the app with docker

    docker build -t iccmobile .
    docker run -it -p 80:8080 iccmobile

To deploy via heroku

    heroku plugins:install heroku-container-registry
    heroku container:login
    heroku container:push web --app iccmobile
    heroku ps:scale web=1 --app iccmobile
    heroku open --app iccmobile

Heroku Settings: add `Config Variable` PORT with a value of 80
