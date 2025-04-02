#!/bin/bash

echo "Cloning repository from: $GIT_REPOSITORY__URL"

export GIT_REPOSITORY__URL="$GIT_REPOSITORY__URL"

git clone "$GIT_REPOSITORY__URL" /home/app/output

echo "Repository cloned successfully."

exec node script.mjs
