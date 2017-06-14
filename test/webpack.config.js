/**
 * Created by wuerchang on 2017/6/14.
 */
let path = require('path');

module.exports = {
    entry: {
        index: './index'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}