'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1510575058297_6232';

  config.security = {
    ignore: '/',
    csrf: {
      ignoreJSON: true,
    },
  };

  return config;
};
