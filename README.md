# sensor-vis
Visualization tool for time series sensor data


## Install
```
# Build container
docker-compose build
# Install requirerituies
docker-compose exec webpack npm install
# Webpack watch
docker-compose exec webpack -d --watch
```

### npm 
新たにパッケージをインストールしたらcontainer内の`package.json`と同期する.
```
docker-compose exec webpack cp /app/package.json /app/webpack/package.json.cp
```


## Refs.
### Docker+React
+ [Docker+webpackを用いたReact.js開発環境の構築](https://qiita.com/shunsuke_i_anotelia/items/877008651565978d1fca)
+ [Webpack4が来たので使ってみた](https://qiita.com/mimikun/items/860bad42c9b5bd10c7f4)


