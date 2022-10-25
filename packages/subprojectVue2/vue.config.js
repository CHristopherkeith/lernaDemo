module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/assets/theme.scss" as *;`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        // {
        //   test: /\.mjs$/,
        //   include: /node_modules/,
        //   type: "javascript/auto",
        // },
      ],
    },
  },
};