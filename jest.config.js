const { TextDecoder, TextEncoder } = require('util')

module.exports = {
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "verbose": true,
    "roots": [
      "./__tests__"
    ],
    "transform": {
      "^.+\\.js?$": "babel-jest"
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/css.mock.js",
        "\\.(css|less|scss|sass)$": "<rootDir>/css.mock.js"
      },
      "testEnvironment": "jest-environment-jsdom",
      "globals": {
        "TextDecoder": TextDecoder,
        "TextEncoder": TextEncoder,
      }
  }