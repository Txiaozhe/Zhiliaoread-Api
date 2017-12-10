'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.post('/api/v1/register', app.controller.user.register);
  app.post('/api/v1/login', app.controller.user.login);
};
