// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        library: {
            name: 'phue',
            type: 'umd'
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        }),
    ],
}