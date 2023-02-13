HOST_PORT=4000
GUEST_PORT=4000

docker run \
-d -i -t \
-e PORT=$GUEST_PORT \
-p $HOST_PORT:$GUEST_PORT \
--name api \
zcohn93/webapp-gateway-api:0.6
