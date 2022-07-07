module.exports = {
    presets: [
        ["@babel/preset-env",
            {
                targets: {
                    ie: 10
                },
                // useBuiltIns: "usage",
                // corejs: 3,
                debug: true
            }
        ]
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime", {
                corejs: 3
            }
        ]
    ]
};
