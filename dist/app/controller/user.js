'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var crypto = require('../../utils/crypto');
var Controller = require('egg').Controller;

var UserController = function (_Controller) {
  _inherits(UserController, _Controller);

  function UserController() {
    _classCallCheck(this, UserController);

    return _possibleConstructorReturn(this, (UserController.__proto__ || Object.getPrototypeOf(UserController)).apply(this, arguments));
  }

  _createClass(UserController, [{
    key: 'register',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var req, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = this.ctx.request.body;
                res = void 0;
                _context.prev = 2;
                _context.next = 5;
                return this.ctx.service.user.register(req);

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

                res = 'error';

              case 11:

                this.ctx.body = res;

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function register() {
        return _ref.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var req, res, user, enc;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = this.ctx.request.body;

                console.log(req);
                res = {};
                _context2.prev = 3;
                _context2.next = 6;
                return this.ctx.service.user.login(req.name, req.pass);

              case 6:
                user = _context2.sent;
                enc = crypto.encrypt(req.pass);

                if (user[0].pass === enc) {
                  res = {
                    token: 'dvewhjdkqwedqwkdjqwdjqwdlkqwdwq'
                  };
                }
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](3);

                res = {
                  token: ''
                };

              case 14:

                this.ctx.body = res;

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function login() {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return UserController;
}(Controller);

module.exports = UserController;
//# sourceMappingURL=user.js.map