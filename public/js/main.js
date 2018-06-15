(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CS_grid = function () {
    function CS_grid(params) {
        _classCallCheck(this, CS_grid);

        this.$els = {
            body: document.querySelector('body')
        };

        this.baseValues = {
            colNumber: 9
        };

        // base col number is 9
        this.colNumber = params.colNumber > 0 ? params.colNumber : this.baseValues.colNumber;

        this.createElements();
        this.bindEvents();
    }

    _createClass(CS_grid, [{
        key: 'createElements',
        value: function createElements() {
            this.gridCtn = document.createElement('div');
            this.gridCtn.classList.add('grid-container');
            this.gridCols = [];
            for (var i = 0; i < this.colNumber; i += 1) {
                var col = document.createElement('span');
                col.classList.add('grid-column');

                this.gridCtn.appendChild(col);
            }
            this.$els.body.appendChild(this.gridCtn);
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            window.addEventListener('keydown', function (e) {
                if (e.key == 'g') {
                    _this.onKeyPressed();
                }
            });
        }
    }, {
        key: 'onKeyPressed',
        value: function onKeyPressed() {
            this.gridCtn.classList.toggle('is-open');
        }
    }]);

    return CS_grid;
}();

exports.default = CS_grid;

},{}],2:[function(require,module,exports){
'use strict';

var _CS_grid = require('./imports/CS_grid');

var _CS_grid2 = _interopRequireDefault(_CS_grid);

var _Home = require('./pages/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grid = new _CS_grid2.default({
    colNumber: 9
});

var home = new _Home2.default();

},{"./imports/CS_grid":1,"./pages/Home":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ---------------------------------------
// HOME
// ----------------------------------------


var Home = function () {
    function Home() {
        _classCallCheck(this, Home);

        this.canvas = document.querySelector('.header__canvas');
        this.setupCanvas();
        this.createFlakes();

        this.render();
    }

    _createClass(Home, [{
        key: 'setupCanvas',
        value: function setupCanvas() {
            this.ctx = this.canvas.getContext('2d');

            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;

            this.tempCanvas = document.createElement('canvas');
            this.tempCtx = this.tempCanvas.getContext('2d');
            this.flakeSize = 20;
            this.tempCanvas.width = this.flakeSize / 2;
            this.tempCanvas.height = this.flakeSize / 2;
            this.tempCtx.arc(this.flakeSize / 4, this.flakeSize / 4, this.flakeSize / 4, 0, Math.PI * 2);
            this.tempCtx.fill();
        }
    }, {
        key: 'createFlakes',
        value: function createFlakes() {
            function Flake() {
                var _this = this;

                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.scale = Math.random();
                this.opacity = Math.random();
                this.size = 10;
                this.velocity = {
                    x: (Math.random() - 0.5) * 2,
                    y: Math.random() + 0.1
                };
                this.update = function (context, tempCanvas) {
                    context.globalAlpha = _this.opacity;
                    _this.x += _this.velocity.x;
                    _this.y -= _this.velocity.y;

                    context.drawImage(tempCanvas, _this.x, _this.y, _this.scale * tempCanvas.width, _this.scale * tempCanvas.height);

                    if (_this.y < -_this.size) {
                        _this.y = window.innerHeight - _this.size;
                    }
                    if (_this.x > window.innerWidth) {
                        _this.x = -_this.size;
                    }
                    if (_this.x < -_this.size) {
                        _this.x = window.innerWidth - _this.size;
                    }
                };
            }

            this.flakeArray = [];
            this.flakeNumber = 125;
            for (var i = 0; i < this.flakeNumber; i += 1) {
                this.flakeArray.push(new Flake());
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (var i = 0; i < this.flakeArray.length; i += 1) {
                this.flakeArray[i].update(this.ctx, this.tempCanvas);
            }

            setTimeout(function () {
                _this2.render();
            }, 1000 / 60);
        }
    }]);

    return Home;
}();

exports.default = Home;

},{}]},{},[2]);

//# sourceMappingURL=main-bundle.js.map

//# sourceMappingURL=main.js.map
