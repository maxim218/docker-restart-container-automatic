FROM ubuntu:16.04

USER root

ENV APP /root/app
ADD ./ $APP
WORKDIR $APP

RUN apt-get -y update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN npm install

EXPOSE 5000

# CMD bash code.sh

CMD npm start
