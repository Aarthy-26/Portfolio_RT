module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/', // Image output directory
                        },
                    },
                ],
            },
        ],
    },
};
