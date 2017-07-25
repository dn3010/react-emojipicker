'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: ', ';\n  opacity: ', ';\n  transition: opacity 300ms linear;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n  width: 340px;\n  height: 350px;\n  overflow-y: scroll;\n  z-index: 100;\n'], ['\n  position: ', ';\n  opacity: ', ';\n  transition: opacity 300ms linear;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n  width: 340px;\n  height: 350px;\n  overflow-y: scroll;\n  z-index: 100;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  border: 1px solid #eee;\n  padding: 0.4rem 0.8rem;\n  margin: 0;\n  border-radius: 2px;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n'], ['\n  cursor: pointer;\n  border: 1px solid #eee;\n  padding: 0.4rem 0.8rem;\n  margin: 0;\n  border-radius: 2px;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.8rem;\n  padding-right: 0;\n  border-radius: 2px;\n  align-items: baseline;\n  float: left;\n  width: 75%;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.8rem;\n  padding-right: 0;\n  border-radius: 2px;\n  align-items: baseline;\n  float: left;\n  width: 75%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n  img {\n    height: 16px !important;\n    width: 16px !important;\n  }\n'], ['\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n  img {\n    height: 16px !important;\n    width: 16px !important;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex-direction: column;\n  float: left;\n  width: 15%;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n'], ['\n  flex-direction: column;\n  float: left;\n  width: 15%;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding-left: 0.35rem;\n  padding: 0.8rem\n  margin: 0;\n  cursor: pointer;\n\n  img {\n    opacity: ', ';\n    height: 24px !important;\n    width: 24px !important;\n  }\n'], ['\n  padding-left: 0.35rem;\n  padding: 0.8rem\n  margin: 0;\n  cursor: pointer;\n\n  img {\n    opacity: ', ';\n    height: 24px !important;\n    width: 24px !important;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _emojione = require('emojione');

var _emojione2 = _interopRequireDefault(_emojione);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emojiByName = require('./emoji.json');

/* list of emoji's sourced from http://getemoji.com */
var PEOPLE_EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😇', '🤣', '☺️', '😊', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢', '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🤳', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '👗', '👠', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '☂️'];
var ANIMALS_NATURE_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙊', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞', '🐜', '🕷', '🕸', '🐢', '🐍', '🦎', '🦂', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🦌', '🐪', '🐫', '🐘', '🦏', '🦍', '🐎', '🐖', '🐐', '🐏', '🐑', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌻', '🌼', '🌸', '🌺', '🌎', '🌍', '🌏', '🌕', '🌖', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '💫', '⭐️', '🌟', '✨', '⚡️', '🔥', '💥', '☄️', '☀️', '🌤', '⛅️', '🌥', '🌦', '🌈', '☁️', '🌧', '⛈', '🌩', '🌨', '☃️', '⛄️', '❄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '☔️'];
var FOOD_SPORTS_EMOJIS = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥝', '🥑', '🍅', '🍆', '🥒', '🥕', '🌽', '🌶', '🥔', '🍠', '🌰', '🥜', '🍯', '🥐', '🍞', '🥖', '🧀', '🥚', '🍳', '🥓', '🥞', '🍤', '🍗', '🍖', '🍕', '🌭', '🍔', '🍟', '🥙', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍚', '🍙', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥛', '🍼', '☕️', '🍵', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🍾', '🥄', '🍴', '🍽', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '⛳️', '🏹', '🎣', '🥊', '🥋', '⛸', '🎿', '⛷', '🏂', '🏋', '🤺', '⛹️', '🏌', '🏄', '🏊', '🤽', '🚣', '🏇', '🚴', '🚵', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🏳', '🏴', '🏁', '🚩', '🎽', '🥇', '🥈', '🥉', '🏆'];
var TRAVEL_PLACES_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈️', '🛫', '🛬', '🚀', '🛰', '💺', '🛶', '⛵️', '🛥', '🚤', '🛳', '⛴', '🚢', '⚓️', '🚧', '⛽️', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '⛲️', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛱', '🏖', '🏝', '⛰', '🏔', '🗻', '🌋', '🏜', '🏕', '⛺️', '🛤', '🛣', '🏗', '🏭', '🏠', '🏡', '🏘', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🕋', '⛩', '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁', '🎭', '🎨'];
var OBJECTS_EMOJIS = ['🆓', '📗', '📕', '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🗑', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒', '⛏', '⚙️', '💣', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '💈', '⚗️', '🔭', '🔬', '🕳', '💊', '💉', '🌡', '🚽', '🚰', '🚿', '🛁', '🛀', '🛎', '🔑', '🗝', '🚪', '🛋', '🛏', '🖼', '🛍', '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📪', '📮', '📯', '📜', '📃', '📄', '📑', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '📇', '🗃', '🗳', '🗄', '📋', '🗞', '📰', '📘', '📚', '📖', '🔖', '🔗', '📎', '📐', '📏', '📍', '📌', '🖊', '🖌', '🖍', '📝', '✏️', '🔍', '🔓'];
var SYMBOLS_FLAGS_EMOJIS = ['❤️', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❕', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🚺', '🚼', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '✔️', '☑️', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '🗨', '💬', '💭', '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄'];

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      emojis: PEOPLE_EMOJIS,
      emojiCategory: 'PEOPLE_EMOJIS'
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleEmojis',
    value: function toggleEmojis(emoji) {
      switch (emoji) {
        case 'PEOPLE_EMOJIS':
          this.setState({ emojis: PEOPLE_EMOJIS, emojiCategory: 'PEOPLE_EMOJIS' });
          break;
        case 'ANIMALS_NATURE_EMOJIS':
          this.setState({ emojis: ANIMALS_NATURE_EMOJIS, emojiCategory: 'ANIMALS_NATURE_EMOJIS' });
          break;
        case 'FOOD_SPORTS_EMOJIS':
          this.setState({ emojis: FOOD_SPORTS_EMOJIS, emojiCategory: 'FOOD_SPORTS_EMOJIS' });
          break;
        case 'TRAVEL_PLACES_EMOJIS':
          this.setState({ emojis: TRAVEL_PLACES_EMOJIS, emojiCategory: 'TRAVEL_PLACES_EMOJIS' });
          break;
        case 'OBJECTS_EMOJIS':
          this.setState({ emojis: OBJECTS_EMOJIS, emojiCategory: 'OBJECTS_EMOJIS' });
          break;
        case 'SYMBOLS_FLAGS_EMOJIS':
          this.setState({ emojis: SYMBOLS_FLAGS_EMOJIS, emojiCategory: 'SYMBOLS_FLAGS_EMOJIS' });
          break;
        default:
          this.setState({ emojis: PEOPLE_EMOJIS, emojiCategory: 'PEOPLE_EMOJIS' });
      }
    }
  }, {
    key: 'onEmojiSelect',
    value: function onEmojiSelect(e) {
      e ? this.props.onEmojiSelected(e) : null;
    }
  }, {
    key: 'stripColons',
    value: function stripColons(str) {
      var colonIndex = str.indexOf(':');
      if (colonIndex > -1) {
        if (colonIndex === str.length - 1) {
          str = str.substring(0, colonIndex);
          return this.stripColons(str);
        } else {
          str = str.substr(colonIndex + 1);
          return this.stripColons(str);
        }
      }

      return str;
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this2 = this;

      var emojiCategory = this.state.emojiCategory;

      return _react2.default.createElement(
        Tabs,
        null,
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'PEOPLE_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('PEOPLE_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('😀') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'ANIMALS_NATURE_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('ANIMALS_NATURE_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('🦊') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'FOOD_SPORTS_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('FOOD_SPORTS_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('🍏') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'TRAVEL_PLACES_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('TRAVEL_PLACES_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('🚗') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'OBJECTS_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('OBJECTS_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('💎') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'SYMBOLS_FLAGS_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('SYMBOLS_FLAGS_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('❤️') } })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var emojis = this.state.emojis;
      var _props = this.props,
          visible = _props.visible,
          modal = _props.modal;

      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          EmojiPickerWrapper,
          { visible: visible, modal: modal },
          this.renderTabs(),
          _react2.default.createElement(
            EmojiWrapper,
            null,
            emojis.map(function (emoji, index) {
              return emojiByName[_this3.stripColons(_emojione2.default.toShort(emoji))] ? _react2.default.createElement(Emoji, {
                className: 'ld-emoji',
                key: index,
                role: 'presentation',
                onClick: _this3.onEmojiSelect.bind(_this3, _emojione2.default.toShort(emoji)),
                dangerouslySetInnerHTML: { __html: emoji } }) : null;
            })
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        onEmojiSelected: _react2.default.PropTypes.func.isRequired,
        visible: _react2.default.PropTypes.bool,
        modal: _react2.default.PropTypes.bool
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        visible: true,
        modal: false
      };
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;


var Wrapper = _styledComponents2.default.div(_templateObject);

var EmojiPickerWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.modal ? 'absolute' : 'static';
}, function (props) {
  return props.visible ? 1 : 0;
});

var EmojiPicker = _styledComponents2.default.div(_templateObject3);

var EmojiWrapper = _styledComponents2.default.div(_templateObject4);

var Emoji = _styledComponents2.default.span(_templateObject5);

var Tabs = _styledComponents2.default.div(_templateObject6);

var Title = _styledComponents2.default.p(_templateObject7, function (props) {
  return props.selected ? '1' : '0.5';
});