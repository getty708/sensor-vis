const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// constants
const root_path = '/root/client-side/';
const src  = root_path + 'src';
const dist = root_path + 'public';


module.exports = merge(common, {
    mode: 'development',
});
