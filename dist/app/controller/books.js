'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = require('egg').Controller;

var BooksController = function (_Controller) {
  _inherits(BooksController, _Controller);

  function BooksController() {
    _classCallCheck(this, BooksController);

    return _possibleConstructorReturn(this, (BooksController.__proto__ || Object.getPrototypeOf(BooksController)).apply(this, arguments));
  }

  _createClass(BooksController, [{
    key: 'top250',
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
                return this.ctx.service.books.top250(req);

              case 5:
                _context.t0 = _context.sent;
                res = {
                  code: 0,
                  data: _context.t0
                };
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t1 = _context['catch'](2);

                res = {
                  code: 500,
                  data: _context.t1.toString()
                };

              case 12:

                this.ctx.body = res;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function top250() {
        return _ref.apply(this, arguments);
      }

      return top250;
    }()
  }]);

  return BooksController;
}(Controller);

module.exports = BooksController;
//# sourceMappingURL=books.js.map