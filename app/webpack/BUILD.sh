root="/Users/naoya/code708/sensor-vis"

# Moce package.json tmprary
cp ../package.json  .

echo `ls -la`

# BUILD
docker build . -t sviz-webpack:mac
       
# Remove package.json
rm ./package.json
