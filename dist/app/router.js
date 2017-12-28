'use strict';

module.exports = function (app) {
  app.get('/', app.controller.home.index);
  app.post('/api/v1/register', app.controller.user.register);
  app.post('/api/v1/login', app.controller.user.login);
  app.post('/api/v1/books/top250', app.controller.books.top250);
};
//# sourceMappingURL=router.js.map