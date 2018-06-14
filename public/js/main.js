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

        console.log('init grid');

        this.$els = {
            body: document.querySelector('body')
        };

        this.baseValues = {
            colNumber: 9,
            gutWidth: 20,
            maxWidth: 1024,
            margin: '50px'
        };

        // base col number is 9
        this.colNumber = params.colNumber > 0 ? params.colNumber : this.baseValues.colNumber;
        this.gutNumber = this.colNumber - 1;
        this.gutWidth = params.gutWidth > 0 ? params.gutWidth : this.baseValues.gutWidth;

        this.maxWidth = params.maxWidth > 0 ? params.maxWidth : this.baseValues.maxWidth;
        this.margin = params.margin > 0 ? params.margin : this.baseValues.margin;

        this.isOpen = false;

        this.createElements();
        this.bindEvents();
    }

    _createClass(CS_grid, [{
        key: 'createElements',
        value: function createElements() {
            this.gridCtn = document.createElement('div');
            this.gridCtn.classList.add('grid-container');
            // grid CTN style
            this.gridCtn.style.display = 'flex';
            this.gridCtn.style.justifyContent = 'space-between';
            this.gridCtn.style.paddingLeft = this.margin;
            this.gridCtn.style.paddingRight = this.margin;
            this.gridCtn.style.maxWidth = this.maxWidth + 'px';
            this.gridCtn.style.width = '100vw';
            this.gridCtn.style.height = '100vh';
            this.gridCtn.style.position = 'fixed';
            this.gridCtn.style.top = '0';
            this.gridCtn.style.left = '50%';
            this.gridCtn.style.transformOrigin = 'top center';
            this.gridCtn.style.transform = 'translateX(-50%) scaleY(0)';
            this.gridCtn.style.pointerEvents = 'none';
            this.gridCtn.style.background = 'rgba(186, 218, 85, .3)';
            this.gridCtn.style.transition = 'all .3s ease-out';

            this.gridCols = [];
            for (var i = 0; i < this.colNumber; i += 1) {
                var col = document.createElement('span');
                col.classList.add('grid-column');
                // grid COL style
                col.style.display = 'block';
                col.style.width = this.maxWidth / this.colNumber - this.gutWidth + 'px';
                col.style.height = '100%';
                col.style.background = 'rgba(0, 255, 0, .5)';

                this.gridCtn.appendChild(col);
            }
            // Appends grid to DOM
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
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.gridCtn.style.transform = 'translateX(-50%) scaleY(1)';
            } else {
                this.gridCtn.style.transform = 'translateX(-50%) scaleY(0)';
            }
        }
    }]);

    return CS_grid;
}();

exports.default = CS_grid;

},{}],2:[function(require,module,exports){
'use strict';

var _CS_grid = require('./imports/CS_grid');

var _CS_grid2 = _interopRequireDefault(_CS_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = new _CS_grid2.default({
    colNumber: 9,
    gutWidth: 20,
    maxWidth: 1024,
    margin: '50px'
});

},{"./imports/CS_grid":1}]},{},[2]);

//# sourceMappingURL=main-bundle.js.map

//# sourceMappingURL=main.js.map
