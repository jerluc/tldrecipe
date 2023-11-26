#!/bin/sh
gcloud run deploy --image=gcr.io/tldrecipe/pwa:latest \
  --port=80 --region=us-west1 --allow-unauthenticated --platform=managed \
    tldrecipe-pwa
