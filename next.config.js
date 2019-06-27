const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
    getLocalIdent: (loaderContext, localIdentName, localName, options) => {
      return loaderContext.resourcePath.includes("jl-ui-kit")
        ? getLocalIdent(loaderContext, localIdentName, localName, options)
        : localName;
    }
  }
});
