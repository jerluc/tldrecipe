#!/bin/sh
gcloud functions deploy fetchRecipe --runtime=nodejs16 --trigger-http --region us-west1 --allow-unauthenticated
