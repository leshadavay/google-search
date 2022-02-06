//craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: (plugins) =>
        [(require("tailwindcss"), require("autoprefixer"))].concat(plugins),
    },
  },
};
