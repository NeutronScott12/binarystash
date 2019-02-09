#!/usr/bin/env sh

npm run build
npm run copy-graphql

docker build -t binarystashcommence .
