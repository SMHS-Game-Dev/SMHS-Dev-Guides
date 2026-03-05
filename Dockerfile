FROM docker.io/library/node:20-alpine AS builder

WORKDIR /app

# note for spark - we do this so my CI can cache
# the dependencies. makes my runs faster.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM docker.io/nginxinc/nginx-unprivileged:alpine

WORKDIR /usr/share/nginx/html

USER root

RUN rm -rf ./*

COPY --from=builder /app/dist .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# make sure nginx user has access to the files
# (we do not run nginx as root that's not awesomesauce)
RUN chown -R nginx:nginx /usr/share/nginx/html
USER nginx
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

LABEL "org.opencontainers.image.title"="SMHS-Dev-Guides" \
    "org.opencontainers.image.description"="Documentation on Git, GitHub, and Godot for SMHS club members." \
    "org.opencontainers.image.source"="https://github.com/SMHS-Game-Dev/SMHS-Dev-Guides" \
    "org.opencontainers.image.vendor"="SMHS-Game-Dev" \
    "org.opencontainers.image.authors"="Ripley White <ripley@ripples.gay>"
