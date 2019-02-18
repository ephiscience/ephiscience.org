FROM node:dubnium-alpine

ADD . /app
WORKDIR app
RUN yarn && yarn run build --prod


FROM abiosoft/caddy:no-stats
ADD Caddyfile /etc/Caddyfile
COPY --from=0 /app/dist/ngweb/* .

