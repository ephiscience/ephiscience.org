FROM node:24.21.0-alpine

RUN <<EOF
  set -e

  apk add --no-cache tini
  mkdir /app
EOF
WORKDIR /app
ENTRYPOINT ["/sbin/tini", "--"]

COPY --from=src . /app

CMD ["node", "/app/server/server.mjs"]
