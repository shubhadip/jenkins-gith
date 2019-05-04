
TEST_DIRECTORY='/'
TEMPDIR="$PWD$TEST_DIRECTORY"
cd $TEMPDIR
yarn
npm run test:unit
curl -s https://codecov.io/bash