#!/bin/bash

if [ -z $GUEST_PORT ]; then
    echo "Please source scripts/setenv first!"
fi

docker run \
-d -i -t \
-e PORT=$GUEST_PORT \
-e DB_USER=$DB_USER \
-e DB_PW=$DB_PW \
-e DB_URI=$DB_URI \
-p $HOST_PORT:$GUEST_PORT \
--name api \
zcohn93/webapp-gateway-api:0.9
