FROM nginx:latest

ADD ./dist /app
ADD ./nginx.conf /etc/nginx/nginx.conf

ENV PORT 80

EXPOSE $PORT
CMD ["nginx"]
