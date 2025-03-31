FROM ubuntu:focal

RUN apt-get update 
RUN apt-get install -y curl 
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

RUN apt-get upgrade -y
RUN apt-get install -y nodejs
RUN apt-get install -y git


WORKDIR /home/app

COPY main.sh main.sh
COPY script.mjs script.mjs
COPY package*.json package.json
COPY .env .env

RUN npm install


RUN chmod +x /home/app/main.sh
RUN chmod +x /home/app/script.mjs

ENTRYPOINT [ "/home/app/main.sh" ]




    