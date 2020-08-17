module.exports = (env) => ({
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        writeToDisk: true,
    },
});
