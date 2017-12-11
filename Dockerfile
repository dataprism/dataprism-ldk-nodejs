FROM node:alpine

RUN npm i @dataprism/ldk && apk update && apk add bash

ADD run.sh .

CMD [ "./run.sh" ]