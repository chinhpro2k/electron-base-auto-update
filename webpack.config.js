module.exports = [
    {
        mode: 'development',
        entry: './src/electron.ts',
        target: 'electron-main',
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/src',
            filename: 'electron.js'
        },
        resolve: {
            fallback: { 'path': require.resolve('path-browserify') },
            extensions: ['.jsx', '.js', 'ts'],
        },
    }
];