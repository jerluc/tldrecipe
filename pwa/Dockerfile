FROM node:lts as builder

ADD . /app

WORKDIR /app

RUN npm install && npm run build

FROM nginx:latest

COPY --from=builder /app/dist /etc/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

ENV PORT 80

EXPOSE $PORT
CMD ["nginx"]
