/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

/** @type {import('@maizzle/framework').Config} */
module.exports = {
  inlineCSS: true,
  prettify: true,
  minify: {
    removeCSSComments: true,
    removeHTMLComments: true,
    removeLineBreaks: true,
    removeIndentations: true,
  },
  build: {
    posthtml: {
      options: {
        decodeEntities: true,
        replaceQuote: false,
      },
    },
    browsersync: {},
    templates: {
      source: "src/templates",
      plaintext: {
        skipHtmlDecoding: true,
        destination: {
          path: "build_local",
          extension: "txt",
        },
      },
      destination: {
        path: "build_local",
      },
      omit: ["src/**/.archive/*"],
      assets: [
        {
          destination: "images",
          source: "src/images",
        },
      ],
    },
  },
};
