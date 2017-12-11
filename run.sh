#/bin/bash

## -- check if the environment variables have been set.
if [ ! -z $DP_LIBRARIES ]; then
    npm i ${DP_LIBRARIES}
fi

cd  /usr/src/app

node ./index.js