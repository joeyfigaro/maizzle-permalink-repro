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

// since the base config is merged in with this during production builds
// *and* our base config uses env vars for configuring, we don't need overrides for production
module.exports = {};
