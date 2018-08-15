root="/Users/naoya/code708/sensor-vis"
data="/Users/naoya/code708/dataStore_upconversion/AccSR3/POSE"
conf="/Users/naoya/code708/sensor-vis/nginx"

#
# Build Nginx
#
volume=${root}/app/dist
echo ${volume}

# docker run  \
#        --name nginx-sviz \
#        -p 3030:8080 \
#        -v ${volume}:/wwwroot/app:ro \
#        -v ${data}:/wwwroot/data:ro \
# -v ${conf}/nginx.conf:/etc/nginx/nginx.conf:ro \       
#        --rm -it sviz-nginx:mac bash

docker run  \
       --name nginx-sviz \
       -p 8080:80 \
       -v ${volume}:/usr/share/nginx/html/app:ro \
       --rm -i -t nginx




