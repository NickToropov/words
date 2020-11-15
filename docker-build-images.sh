./gradlew build -x test

cd ./words-service
echo "$PWD"
docker build --rm -t str1313/words-service .
docker build --rm -f Db.Dockerfile -t str1313/db-words .

cd ../gateway-service
echo "$PWD"
docker build --rm -t str1313/gateway-service .
