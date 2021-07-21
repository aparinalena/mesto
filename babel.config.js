const presets = [
  [
    "@babel/env", //tren.yandex
    {
      targets: {
        edge: "17",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },

      useBuiltIns: "entry",
      corejs: "^3.15.2", //?
    },
  ],
];

module.exports = { presets };