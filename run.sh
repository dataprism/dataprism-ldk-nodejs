#/bin/sh

## -- check if the environment variables have been set.
if [ ! -z $DP_LIBRARIES ]; then {
    npm i ${DP_LIBRARIES}
}

./index.js