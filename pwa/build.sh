#!/bin/sh
docker build --platform linux/amd64 -t gcr.io/tldrecipe/pwa . && docker push gcr.io/tldrecipe/pwa
