const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');
const isProd = (process.env.NODE_ENV || 'production') === 'production'

// const assetPrefix = isProd ? '/eulerthedestroyer' : ''
const assetPrefix = ''
module.exports = withPreact({
  experimental: {
    modern: true,
  },
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
});
