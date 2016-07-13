1) install docker

    https://docs.docker.com/docker-for-mac/

2) run the basic setup script

    bash run.sh

3) build and run the app with docker

    docker build -t iccmoble .
    docker run -it -p 8080:8080 iccmobile
