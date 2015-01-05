#!/usr/bin/env zsh

# Color Variables
r='\033[0;31m'  # Red
g='\033[0;32m'  # Green
y='\033[0;33m'  # Yellow
nc='\033[0m'    # No Color

# String Variables
yep='✔'
nope='✘'
success="${g}${yep} Success!\n"
fail="${r}${nope} Fail.\n"


browserify ./src/app.js -d -o ./app/js/bundle.js && printf "${success}"
