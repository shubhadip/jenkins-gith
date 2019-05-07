#!/bin/bash

TEST_DIRECTORY='/'
TEMPDIR="$PWD$TEST_DIRECTORY"
cd $TEMPDIR
yarn
npm run test:unit

# exec bash 'bash <(curl -s https://codecov.io/bash) -t 7d998c9d-a489-4246-ad85-d94a2abfccee'
# echo $DATA

# curl -s https://codecov.io/bash -t 7d998c9d-a489-4246-ad85-d94a2abfccee

CT="7d998c9d-a489-4246-ad85-d94a2abfccee"

# TEST="curl -s https://codecov.io/bash -t $CT"
# echo $TEST

# RESPONSE=`$TEST`
# echo $RESPONSE

# curlCmd="curl -s 'https://codecov.io/bash' -t $CT > ~/fb.txt"
# eval $curlCmd


response=$(curl -s -o /dev/null -w "%{http_code}\n" https://codecov.io/bash -t $CT)
if [ "$response" != "200" ]
echo $response
then
 exit 1
fi