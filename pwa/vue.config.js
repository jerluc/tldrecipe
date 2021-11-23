module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pwa: {
    name: "TL;DRecipe",
    themeColor: "#fffd87",
    msTileColor: "#fffd87",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // configure the workbox plugin
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: "dev/sw.js",
    //   // ...other Workbox options...
    // },
    manifestOptions: {
      share_target: {
        action: "/recipe",
        method: "GET",
        params: {
          title: "title",
          text: "text",
          url: "url",
        },
      },
    },
  },
};
