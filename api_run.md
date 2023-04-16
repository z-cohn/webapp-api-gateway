HOST_PORT=4000
GUEST_PORT=4000
DB_USER=zcohn
DB_PW=arteckMusicDB

docker run \
-d -i -t \
-e PORT=$GUEST_PORT \
-e DB_USER=$DB_USER \
-e DB_PW=$DB_PW \
-p $HOST_PORT:$GUEST_PORT \
--name api \
zcohn93/webapp-gateway-api:0.7
