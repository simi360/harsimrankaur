const webpackMerge = require("webpack-merge");

//permet de rajouter les presets en fonction du script lancé
const applypresets = (env) => {
    const {presets} = env;
    /** @type {string[]} */
    const mergedPresets = [].concat(...[presets]);
    const mergedConfig = mergedPresets.map(
        presetName => require(`./presets/webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...mergedConfig);
};

module.exports = applypresets;