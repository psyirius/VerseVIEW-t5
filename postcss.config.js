/** @type {import('postcss-load-config').Config} */
const config = {
    map: false,
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-alias'),
        require("postcss-preset-env")({
            stage: 0,
            features: {
                'custom-properties': false, // Disable custom properties support if not needed
            },
        }),
        require('stylelint')(require('./.stylelintrc')),
        // require('cssnano'),
    ]
}

module.exports = config