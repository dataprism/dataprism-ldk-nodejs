FROM node:alpine

RUN npm i @dataprism/ldk && apk update && apk add bash

WORKDIR /usr/src/app

ADD run.sh .

CMD [ "./run.sh" ]