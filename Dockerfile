FROM node:dubnium-alpine

WORKDIR app

COPY package.json yarn.lock /app/
RUN yarn
ADD . /app
RUN yarn run build --prod


FROM abiosoft/caddy:no-stats
ADD Caddyfile /etc/Caddyfile
COPY --from=0 /app/dist/ngweb/ ./
