#/bin/sh

## -- check if the environment variables have been set.
if [ ! -z $DP_LIBRARIES ]; then {
    npm i ${DP_LIBRARIES}
}

cd  /usr/src/app

node ./index.js