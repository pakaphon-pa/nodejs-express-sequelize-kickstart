#!/bin/bash

echo "RUN MIGRATE:"
yarn db:migrate

echo "API START"
yarn dev
