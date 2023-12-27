#!/bin/sh
gcloud functions deploy fetchRecipe --runtime=nodejs18 --trigger-http --region us-west1 --allow-unauthenticated $@
