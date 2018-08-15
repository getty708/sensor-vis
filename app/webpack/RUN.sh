root="/Users/naoya/code708/sensor-vis"


docker run \
       -v ${root}/app:/app:z \
       --name sviz-webpack \
       --rm -it sviz-webpack:mac bash
