var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '');
var fs = require('fs');


const cssloaders = [
    'style-loader',
    'css-loader?modules&importLoaders=1',
    'postcss-loader?includePaths[]=' + path.resolve(assetsPath+"/src")
];

module.exports = {
    entry :  {
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
            path.resolve(assetsPath,'./src/index.js')],
        vendor :['react','react-dom','redux','react-redux','redux','redux-devtools','redux-devtools-dock-monitor','redux-devtools-log-monitor']
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js', //
        publicPath: 'http://localhost:8080/assets/'
    },
    postcss: function (webpack) {
        return [
            require("postcss-import")({ addDependencyTo: webpack }),
            require("postcss-url")(),
            require("postcss-cssnext")(),
            // add your "plugins" here
            // ...
            // and if you want to compress,
            // just use css-loader option that already use cssnano under the hood
            require("postcss-browser-reporter")(),
            require("postcss-reporter")(),
        ];
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot','babel'],
                include: [path.resolve(assetsPath+'/src')]

            },{
                test: /\.css$/,
                loader: cssloaders.join("!")
            },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"}
        ]
    },
    quiet: true,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : '#source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),

    ]

};


// var webpack = require("webpack");
// module.exports = {
//   entry : ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
//             'webpack/hot/only-dev-server',
//             './src/index.js'],
//   output : {
//       filename : 'bundle.js',
//       publicPath : 'http://localhost:8080/assets/'
//   },
//   module : {
//     loaders  : [
//       {
//           test : /.jsx?$/,
//           exclude: /node_modules/,
//           loaders : ['react-hot','babel']
//       }
//     ]
//   },
//   devtool : "#source-map",
//   plugins : [
//     new webpack.HotModuleReplacementPlugin(),
//   ]
// };
