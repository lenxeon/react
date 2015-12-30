webpackJsonp([3],{

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(200);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(198);

	var _widget = __webpack_require__(216);

	__webpack_require__(348);

	var classnames = __webpack_require__(211);
	var Menu = __webpack_require__(350);

	var _global$uiRequire = global.uiRequire();

	var ButtonGroup = _global$uiRequire.ButtonGroup;
	var Button = _global$uiRequire.Button;
	var Modal = _global$uiRequire.Modal;
	var FormControl = _global$uiRequire.FormControl;
	var Grid = _global$uiRequire.Grid;
	var Message = _global$uiRequire.Message;
	var Overlay = _global$uiRequire.Overlay;
	var Form = _global$uiRequire.Form;
	var Select = _global$uiRequire.Select;

	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);

	  function Calendar(props) {
	    _classCallCheck(this, Calendar);

	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      foo: "bar"
	    };
	  }

	  _createClass(Calendar, [{
	    key: 'clickHandler',
	    value: function clickHandler() {
	      var _this = this;

	      var country = __webpack_require__(351);
	      var countryJson = country.factory();
	      var openOptions = {
	        header: '一个弹出表单',
	        content: _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            Form,
	            { layout: 'aligned', ref: 'form' },
	            _react2['default'].createElement(FormControl, { name: 'name', required: true, label: '姓名', type: 'text' }),
	            _react2['default'].createElement(FormControl, { name: 'birthday', required: true, label: '生日', type: 'date' }),
	            _react2['default'].createElement(FormControl, { name: 'description', label: '简介', type: 'textarea', width: 20, rows: 6 })
	          )
	        ),
	        width: 700,
	        buttons: {
	          '取消': true,
	          '重置': function _() {
	            var form = _this.refs.form;
	            form.setData({});
	          },
	          '确定': function _() {
	            var form = _this.refs.form;
	            var suc = form.validate();
	            if (suc) {
	              alert(JSON.stringify(form.getValue()));
	              return true;
	            }
	          }
	        }
	      };
	      Modal.open(openOptions);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var items = [];
	      for (var i = 0; i < 50; i++) {
	        items.push({
	          id: i,
	          day: '2015-11-09',
	          time: '14:00-14:30',
	          creatorName: '冷馨',
	          name: '我的任务' + i
	        });
	      }
	      var list = items.map(function (task) {
	        var checked = task.id % 2 == 0 ? "fa fa-circle" : "fa fa-dot-circle-o";
	        var star = task.id % 3 == 0 ? "fa fa-star" : "fa fa-star-o";
	        var now = new Date();
	        return _react2['default'].createElement(
	          'div',
	          { className: 'item pure-g' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-2-24 pl-15' },
	            _react2['default'].createElement('i', { className: checked })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-4-24' },
	            task.day
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-4-24' },
	            task.time
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-4-24' },
	            task.creatorName
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-6-24' },
	            _react2['default'].createElement(
	              'span',
	              { onClick: _this2.clickHandler.bind(_this2) },
	              task.name
	            )
	          )
	        );
	      });
	      return _react2['default'].createElement(
	        'div',
	        { className: 'has-menu body-wrap' },
	        _react2['default'].createElement(Menu, null),
	        _react2['default'].createElement(
	          'div',
	          { className: 'calendar-main' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'page-header-layout clear' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'lft' },
	              _react2['default'].createElement(
	                Button,
	                { status: 'primary' },
	                '今天'
	              ),
	              _react2['default'].createElement(
	                ButtonGroup,
	                { className: 'cal-button-groups clear ml-10 direction' },
	                _react2['default'].createElement(
	                  Button,
	                  { status: 'primary' },
	                  _react2['default'].createElement('i', { className: 'fa fa-angle-left' })
	                ),
	                _react2['default'].createElement(
	                  Button,
	                  { status: 'primary' },
	                  _react2['default'].createElement('i', { className: 'fa fa-angle-right' })
	                )
	              ),
	              _react2['default'].createElement(
	                'span',
	                { className: 'ml-10 day' },
	                '2015 年 10月7日 星期三'
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'rgt' },
	              _react2['default'].createElement(
	                Button,
	                { status: 'primary' },
	                _react2['default'].createElement('i', { className: 'fa fa-plus mr-10' }),
	                '新建日程'
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'center' },
	              _react2['default'].createElement(
	                ButtonGroup,
	                { className: 'cal-button-groups', active: true },
	                _react2['default'].createElement(
	                  Button,
	                  { status: 'primary' },
	                  '日'
	                ),
	                _react2['default'].createElement(
	                  Button,
	                  { status: 'primary' },
	                  '周'
	                ),
	                _react2['default'].createElement(
	                  Button,
	                  { status: 'primary' },
	                  '月'
	                ),
	                _react2['default'].createElement(
	                  Button,
	                  { status: 'primary' },
	                  '列表'
	                )
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'cal-body pure-grid shadow mt-20' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'item pure-g' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'pure-u-2-24 pl-15' },
	                '分类'
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'pure-u-4-24' },
	                '日期'
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'pure-u-4-24' },
	                '时间'
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'pure-u-4-24' },
	                '发起人'
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'pure-u-6-24' },
	                '事件'
	              )
	            ),
	            list
	          )
	        )
	      );
	    }
	  }]);

	  return Calendar;
	})(_react2['default'].Component);

	;

	exports['default'] = Calendar;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(349);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(206)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?localIdentName=[path][name]---[local]---[hash:base64:5]!./../../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?localIdentName=[path][name]---[local]---[hash:base64:5]!./../../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(205)();
	// imports


	// module
	exports.push([module.id, ".cal-button-groups button {\n  background: white !important;\n}\n.calendar-main {\n  font-size: 12px;\n  padding: 20px;\n}\n.calendar-main .cal-body {\n  background-color: white;\n}\n.cal-header {\n  line-height: 30px;\n}\n.cal-header .lft .direction button {\n  padding: 8px 13px;\n}\n.cal-header .lft .day {\n  font-size: 14px;\n  margin-top: 2px;\n}\n.cal-header .center {\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n}\n", ""]);

	// exports


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(200);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(324);

	var Menu = (function (_React$Component) {
	  _inherits(Menu, _React$Component);

	  function Menu(props) {
	    _classCallCheck(this, Menu);

	    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      open: false
	    };
	  }

	  _createClass(Menu, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { id: 'menu' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'pure-menu' },
	          _react2['default'].createElement(
	            'a',
	            { className: 'pure-menu-heading', href: '#' },
	            '任务'
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { className: 'pure-menu-list' },
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item pure-menu-selected' },
	              _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }),
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                '我负责的任务'
	              ),
	              _react2['default'].createElement(
	                'span',
	                null,
	                '0'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement('i', { className: 'fa fa-dot-circle-o' }),
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                '我参与的任务'
	              ),
	              _react2['default'].createElement(
	                'span',
	                null,
	                '0'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement('i', { className: 'fa fa-check-square' }),
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                '已完成的任务'
	              ),
	              _react2['default'].createElement(
	                'span',
	                null,
	                '0'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item menu-item-divided' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Grids'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Forms'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Buttons'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Tables'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Menus'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item menu-item-divided' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Tools'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Customize'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Extend'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Blog'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { href: '#', className: 'pure-menu-link' },
	                'Releases'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Menu;
	})(_react2['default'].Component);

	;

	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },

/***/ 351:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.factory = factory;

	function factory() {

	  var data = [{
	    "code": "ae",
	    "en": "United Arab Emirates",
	    "country": "阿联酋",
	    "continent": "亚洲"
	  }, {
	    "code": "af",
	    "en": "Afghanistan",
	    "country": "阿富汗",
	    "continent": "亚洲"
	  }, {
	    "code": "al",
	    "en": "Albania",
	    "country": "阿尔巴尼亚",
	    "continent": "亚洲"
	  }, {
	    "code": "ao",
	    "en": "Angola",
	    "country": "安哥拉",
	    "continent": "非洲"
	  }, {
	    "code": "ar",
	    "en": "Argentina",
	    "country": "阿根廷",
	    "continent": "南美洲"
	  }, {
	    "code": "at",
	    "en": "Austria",
	    "country": "奥地利",
	    "continent": "欧洲"
	  }, {
	    "code": "au",
	    "en": "Australia",
	    "country": "澳大利亚",
	    "continent": "大洋洲"
	  }, {
	    "code": "az",
	    "en": "Azerbaijan",
	    "country": "阿塞拜疆",
	    "continent": "亚洲"
	  }, {
	    "code": "bd",
	    "en": "Bangladesh",
	    "country": "孟加拉",
	    "continent": "亚洲"
	  }, {
	    "code": "be",
	    "en": "Belgium",
	    "country": "比利时",
	    "continent": "欧洲"
	  }, {
	    "code": "bg",
	    "en": "Bulgaria",
	    "country": "保加利亚",
	    "continent": "欧洲"
	  }, {
	    "code": "bh",
	    "en": "Bahrain",
	    "country": "巴林",
	    "continent": "亚洲"
	  }, {
	    "code": "bi",
	    "en": "Burundi",
	    "country": "布隆迪",
	    "continent": "非洲"
	  }, {
	    "code": "bj",
	    "en": "Benin",
	    "country": "贝宁",
	    "continent": "非洲"
	  }, {
	    "code": "bm",
	    "en": "Bermuda",
	    "country": "百慕大",
	    "continent": "北美洲"
	  }, {
	    "code": "bn",
	    "en": "Brunei",
	    "country": "文莱",
	    "continent": "亚洲"
	  }, {
	    "code": "bo",
	    "en": "Bolivia",
	    "country": "玻利维亚",
	    "continent": "南美洲"
	  }, {
	    "code": "br",
	    "en": "Brazil",
	    "country": "巴西",
	    "continent": "南美洲"
	  }, {
	    "code": "bs",
	    "en": "Bahamas",
	    "country": "巴哈马",
	    "continent": "北美洲"
	  }, {
	    "code": "bt",
	    "en": "Bhutan",
	    "country": "不丹",
	    "continent": "亚洲"
	  }, {
	    "code": "bw",
	    "en": "Botswana",
	    "country": "博茨瓦纳",
	    "continent": "非洲"
	  }, {
	    "code": "ca",
	    "en": "Canada",
	    "country": "加拿大",
	    "continent": "北美洲"
	  }, {
	    "code": "cf",
	    "en": "Central Africa",
	    "country": "中非共和国",
	    "continent": "非洲"
	  }, {
	    "code": "cg",
	    "en": "Congo",
	    "country": "刚果",
	    "continent": "非洲"
	  }, {
	    "code": "ch",
	    "en": "Switzerland",
	    "country": "瑞士",
	    "continent": "欧洲"
	  }, {
	    "code": "ck",
	    "en": "Cook Is.",
	    "country": "库克群岛",
	    "continent": "大洋洲"
	  }, {
	    "code": "cl",
	    "en": "Chile",
	    "country": "智利",
	    "continent": "南美洲"
	  }, {
	    "code": "cm",
	    "en": "Cameroon",
	    "country": "喀麦隆",
	    "continent": "非洲"
	  }, {
	    "code": "cn",
	    "en": "China",
	    "country": "中国",
	    "continent": "亚洲"
	  }, {
	    "code": "co",
	    "en": "Colombia",
	    "country": "哥伦比亚",
	    "continent": "南美洲"
	  }, {
	    "code": "cr",
	    "en": "Costa Rica",
	    "country": "哥斯达黎加",
	    "continent": "北美洲"
	  }, {
	    "code": "cu",
	    "en": "Cuba",
	    "country": "古巴",
	    "continent": "北美洲"
	  }, {
	    "code": "cv",
	    "en": "Cape Verde Is.",
	    "country": "佛得角群岛",
	    "continent": "非洲"
	  }, {
	    "code": "cy",
	    "en": "Cyprus",
	    "country": "塞浦路斯",
	    "continent": "亚洲"
	  }, {
	    "code": "cz",
	    "en": "Czech",
	    "country": "捷克共和国",
	    "continent": "欧洲"
	  }, {
	    "code": "de",
	    "en": "Germany",
	    "country": "德国",
	    "continent": "欧洲"
	  }, {
	    "code": "dk",
	    "en": "Denmark",
	    "country": "丹麦",
	    "continent": "欧洲"
	  }, {
	    "code": "dz",
	    "en": "Algeria",
	    "country": "阿尔及利亚",
	    "continent": "非洲"
	  }, {
	    "code": "ec",
	    "en": "Ecuador",
	    "country": "厄瓜多尔",
	    "continent": "南美洲"
	  }, {
	    "code": "ee",
	    "en": "Estonia",
	    "country": "爱沙尼亚",
	    "continent": "欧洲"
	  }, {
	    "code": "eg",
	    "en": "Egypt",
	    "country": "埃及",
	    "continent": "非洲"
	  }, {
	    "code": "es",
	    "en": "Spain",
	    "country": "西班牙",
	    "continent": "欧洲"
	  }, {
	    "code": "et",
	    "en": "Ethiopia",
	    "country": "埃塞俄比亚",
	    "continent": "非洲"
	  }, {
	    "code": "fi",
	    "en": "Finland",
	    "country": "芬兰",
	    "continent": "欧洲"
	  }, {
	    "code": "fj",
	    "en": "Fiji",
	    "country": "斐济",
	    "continent": "大洋洲"
	  }, {
	    "code": "fr",
	    "en": "France",
	    "country": "法国",
	    "continent": "欧洲"
	  }, {
	    "code": "ga",
	    "en": "Gabon",
	    "country": "加蓬",
	    "continent": "非洲"
	  }, {
	    "code": "gb",
	    "en": "Great Britain",
	    "country": "英国",
	    "continent": "欧洲"
	  }, {
	    "code": "gd",
	    "en": "Grenada",
	    "country": "格林纳达",
	    "continent": "北美洲"
	  }, {
	    "code": "gh",
	    "en": "Ghana",
	    "country": "加纳",
	    "continent": "非洲"
	  }, {
	    "code": "gm",
	    "en": "Gambia",
	    "country": "冈比亚",
	    "continent": "非洲"
	  }, {
	    "code": "gn",
	    "en": "Guinea-Bissau",
	    "country": "几内亚",
	    "continent": "非洲"
	  }, {
	    "code": "gq",
	    "en": "Equatorial Guinea",
	    "country": "赤道几内亚",
	    "continent": "非洲"
	  }, {
	    "code": "gr",
	    "en": "Greece",
	    "country": "希腊",
	    "continent": "欧洲"
	  }, {
	    "code": "gt",
	    "en": "Guatemala",
	    "country": "危地马拉",
	    "continent": "北美洲"
	  }, {
	    "code": "gu",
	    "en": "Guam",
	    "country": "关岛",
	    "continent": "大洋洲"
	  }, {
	    "code": "gy",
	    "en": "Guyana",
	    "country": "圭亚那",
	    "continent": "南美洲"
	  }, {
	    "code": "hk",
	    "en": "Hong kong",
	    "country": "中国香港",
	    "continent": "亚洲"
	  }, {
	    "code": "hn",
	    "en": "Honduras",
	    "country": "洪都拉斯",
	    "continent": "北美洲"
	  }, {
	    "code": "hr",
	    "en": "Croatia",
	    "country": "克罗地亚",
	    "continent": "欧洲"
	  }, {
	    "code": "ht",
	    "en": "Haiti",
	    "country": "海地",
	    "continent": "北美洲"
	  }, {
	    "code": "hu",
	    "en": "Hungary",
	    "country": "匈牙利",
	    "continent": "欧洲"
	  }, {
	    "code": "id",
	    "en": "Indonesia",
	    "country": "印度尼西亚",
	    "continent": "亚洲"
	  }, {
	    "code": "ie",
	    "en": "Ireland",
	    "country": "爱尔兰",
	    "continent": "欧洲"
	  }, {
	    "code": "il",
	    "en": "Israel",
	    "country": "以色列",
	    "continent": "亚洲"
	  }, {
	    "code": "in",
	    "en": "India",
	    "country": "印度",
	    "continent": "亚洲"
	  }, {
	    "code": "iq",
	    "en": "Iraq",
	    "country": "伊拉克",
	    "continent": "亚洲"
	  }, {
	    "code": "ir",
	    "en": "Iran",
	    "country": "伊朗",
	    "continent": "亚洲"
	  }, {
	    "code": "is",
	    "en": "Iceland",
	    "country": "冰岛",
	    "continent": "欧洲"
	  }, {
	    "code": "it",
	    "en": "Italy",
	    "country": "意大利",
	    "continent": "欧洲"
	  }, {
	    "code": "jm",
	    "en": "Jamaica",
	    "country": "牙买加",
	    "continent": "北美洲"
	  }, {
	    "code": "jo",
	    "en": "Jordan",
	    "country": "约旦",
	    "continent": "亚洲"
	  }, {
	    "code": "jp",
	    "en": "Japan",
	    "country": "日本",
	    "continent": "亚洲"
	  }, {
	    "code": "ke",
	    "en": "Kenya",
	    "country": "肯尼亚",
	    "continent": "非洲"
	  }, {
	    "code": "kh",
	    "en": "Cambodia",
	    "country": "柬埔寨",
	    "continent": "亚洲"
	  }, {
	    "code": "kp",
	    "en": "R.O.Korea",
	    "country": "韩国",
	    "continent": "亚洲"
	  }, {
	    "code": "kr",
	    "en": "D.P.R.Korea",
	    "country": "北朝鲜",
	    "continent": "亚洲"
	  }, {
	    "code": "kw",
	    "en": "Kuwait",
	    "country": "科威特",
	    "continent": "亚洲"
	  }, {
	    "code": "kz",
	    "en": "Kazakhstan",
	    "country": "哈萨克斯坦",
	    "continent": "亚洲"
	  }, {
	    "code": "la",
	    "en": "Laos",
	    "country": "老挝",
	    "continent": "亚洲"
	  }, {
	    "code": "lb",
	    "en": "Lebanon",
	    "country": "黎巴嫩",
	    "continent": "亚洲"
	  }, {
	    "code": "lt",
	    "en": "Lithuania",
	    "country": "立陶宛",
	    "continent": "欧洲"
	  }, {
	    "code": "lu",
	    "en": "Luxembourg",
	    "country": "卢森堡",
	    "continent": "亚洲"
	  }, {
	    "code": "lv",
	    "en": "Latvia",
	    "country": "拉托维亚",
	    "continent": "欧洲"
	  }, {
	    "code": "ly",
	    "en": "Libya",
	    "country": "利比亚",
	    "continent": "非洲"
	  }, {
	    "code": "ma",
	    "en": "Morocco",
	    "country": "摩洛哥",
	    "continent": "非洲"
	  }, {
	    "code": "mc",
	    "en": "Monaco",
	    "country": "摩纳哥",
	    "continent": "欧洲"
	  }, {
	    "code": "md",
	    "en": "Moldova",
	    "country": "摩尔多瓦",
	    "continent": "欧洲"
	  }, {
	    "code": "mg",
	    "en": "Madagascar",
	    "country": "马达加斯加",
	    "continent": "非洲"
	  }, {
	    "code": "ml",
	    "en": "Mali",
	    "country": "马里",
	    "continent": "非洲"
	  }, {
	    "code": "mn",
	    "en": "Mongolia",
	    "country": "蒙古",
	    "continent": "亚洲"
	  }, {
	    "code": "mo",
	    "en": "Macao",
	    "country": "中国澳门",
	    "continent": "亚洲"
	  }, {
	    "code": "mr",
	    "en": "Mauritania",
	    "country": "毛里塔尼亚",
	    "continent": "非洲"
	  }, {
	    "code": "mt",
	    "en": "Malta",
	    "country": "马耳他",
	    "continent": "欧洲"
	  }, {
	    "code": "mu",
	    "en": "Mauritius",
	    "country": "毛里求斯",
	    "continent": "非洲"
	  }, {
	    "code": "mv",
	    "en": "Maldives",
	    "country": "马尔代夫",
	    "continent": "亚洲"
	  }, {
	    "code": "mx",
	    "en": "Mexico",
	    "country": "墨西哥",
	    "continent": "北美洲"
	  }, {
	    "code": "my",
	    "en": "Malaysia",
	    "country": "马来西亚",
	    "continent": "亚洲"
	  }, {
	    "code": "mz",
	    "en": "Mozambique",
	    "country": "莫桑比克",
	    "continent": "非洲"
	  }, {
	    "code": "na",
	    "en": "Namibia",
	    "country": "纳米比亚",
	    "continent": "非洲"
	  }, {
	    "code": "ne",
	    "en": "Niger",
	    "country": "尼日尔",
	    "continent": "非洲"
	  }, {
	    "code": "ng",
	    "en": "Nigeria",
	    "country": "尼日利亚",
	    "continent": "非洲"
	  }, {
	    "code": "ni",
	    "en": "Nicaragua",
	    "country": "尼加拉瓜",
	    "continent": "北美洲"
	  }, {
	    "code": "nl",
	    "en": "Netherlands",
	    "country": "荷兰",
	    "continent": "欧洲"
	  }, {
	    "code": "no",
	    "en": "Norway",
	    "country": "挪威",
	    "continent": "欧洲"
	  }, {
	    "code": "np",
	    "en": "Nepal",
	    "country": "尼泊尔",
	    "continent": "亚洲"
	  }, {
	    "code": "nz",
	    "en": "New Zealand",
	    "country": "新西兰",
	    "continent": "大洋洲"
	  }, {
	    "code": "om",
	    "en": "Oman",
	    "country": "阿曼",
	    "continent": "亚洲"
	  }, {
	    "code": "pa",
	    "en": "Panama",
	    "country": "巴拿马",
	    "continent": "北美洲"
	  }, {
	    "code": "pe",
	    "en": "Peru",
	    "country": "秘鲁",
	    "continent": "南美洲"
	  }, {
	    "code": "pg",
	    "en": "Papua New Guinea",
	    "country": "巴布亚新几内亚",
	    "continent": "大洋洲"
	  }, {
	    "code": "ph",
	    "en": "Philippines",
	    "country": "菲律宾",
	    "continent": "亚洲"
	  }, {
	    "code": "pk",
	    "en": "Pakistan",
	    "country": "巴基斯坦",
	    "continent": "亚洲"
	  }, {
	    "code": "pl",
	    "en": "Poland",
	    "country": "波兰",
	    "continent": "欧洲"
	  }, {
	    "code": "pt",
	    "en": "Portugal",
	    "country": "葡萄牙",
	    "continent": "欧洲"
	  }, {
	    "code": "py",
	    "en": "Paraguay",
	    "country": "巴拉圭",
	    "continent": "南美洲"
	  }, {
	    "code": "qa",
	    "en": "Qatar",
	    "country": "卡塔尔",
	    "continent": "亚洲"
	  }, {
	    "code": "ro",
	    "en": "Romania",
	    "country": "罗马尼亚",
	    "continent": "欧洲"
	  }, {
	    "code": "ru",
	    "en": "Russia",
	    "country": "俄罗斯",
	    "continent": "欧洲"
	  }, {
	    "code": "rw",
	    "en": "Rwanda",
	    "country": "卢旺达",
	    "continent": "非洲"
	  }, {
	    "code": "sa",
	    "en": "Saudi Arabia",
	    "country": "沙特阿拉伯",
	    "continent": "亚洲"
	  }, {
	    "code": "sd",
	    "en": "Sudan",
	    "country": "苏丹",
	    "continent": "非洲"
	  }, {
	    "code": "se",
	    "en": "Sweden",
	    "country": "瑞典",
	    "continent": "欧洲"
	  }, {
	    "code": "sg",
	    "en": "Singapore",
	    "country": "新加坡",
	    "continent": "亚洲"
	  }, {
	    "code": "sk",
	    "en": "Slovakia",
	    "country": "斯洛伐克",
	    "continent": "欧洲"
	  }, {
	    "code": "sm",
	    "en": "San Marino",
	    "country": "圣马力诺",
	    "continent": "欧洲"
	  }, {
	    "code": "sn",
	    "en": "Senegal",
	    "country": "塞内加尔",
	    "continent": "非洲"
	  }, {
	    "code": "so",
	    "en": "Somalia",
	    "country": "索马里",
	    "continent": "非洲"
	  }, {
	    "code": "sy",
	    "en": "Syria",
	    "country": "叙利亚",
	    "continent": "亚洲"
	  }, {
	    "code": "th",
	    "en": "Thailand",
	    "country": "泰国",
	    "continent": "亚洲"
	  }, {
	    "code": "tj",
	    "en": "Tadzhikistan",
	    "country": "塔吉克斯坦",
	    "continent": "亚洲"
	  }, {
	    "code": "tm",
	    "en": "Turkmenistan",
	    "country": "土库曼斯坦",
	    "continent": "亚洲"
	  }, {
	    "code": "tn",
	    "en": "Tunisia",
	    "country": "突尼斯",
	    "continent": "非洲"
	  }, {
	    "code": "to",
	    "en": "Tonga",
	    "country": "汤加",
	    "continent": "大洋洲"
	  }, {
	    "code": "tw",
	    "en": "Taiwan",
	    "country": "中国台湾",
	    "continent": "亚洲"
	  }, {
	    "code": "tz",
	    "en": "Tanzania",
	    "country": "坦桑尼亚",
	    "continent": "非洲"
	  }, {
	    "code": "ua",
	    "en": "Ukraine",
	    "country": "乌克兰",
	    "continent": "欧洲"
	  }, {
	    "code": "ug",
	    "en": "Uganda",
	    "country": "乌干达",
	    "continent": "非洲"
	  }, {
	    "code": "us",
	    "en": "United States",
	    "country": "美国",
	    "continent": "北美洲"
	  }, {
	    "code": "uy",
	    "en": "Uruguay",
	    "country": "乌拉圭",
	    "continent": "南美洲"
	  }, {
	    "code": "uz",
	    "en": "Uzbekistan",
	    "country": "乌兹别克斯坦",
	    "continent": "亚洲"
	  }, {
	    "code": "va",
	    "en": "Vatican City",
	    "country": "梵蒂冈",
	    "continent": "欧洲"
	  }, {
	    "code": "ve",
	    "en": "Venezuela",
	    "country": "委内瑞拉",
	    "continent": "北美洲"
	  }, {
	    "code": "vn",
	    "en": "Viet Nam",
	    "country": "越南",
	    "continent": "亚洲"
	  }, {
	    "code": "ye",
	    "en": "Yemen",
	    "country": "也门",
	    "continent": "亚洲"
	  }, {
	    "code": "za",
	    "en": "South Africa",
	    "country": "南非",
	    "continent": "非洲"
	  }, {
	    "code": "zm",
	    "en": "Zambia",
	    "country": "赞比亚",
	    "continent": "非洲"
	  }, {
	    "code": "zw",
	    "en": "Zimbabwe",
	    "country": "津巴布韦",
	    "continent": "非洲"
	  }];

	  return data;
	}

/***/ }

});