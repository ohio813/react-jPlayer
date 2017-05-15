var ReactJPlayer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(97)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(96)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_OPTION: 'SET_JPLAYER_OPTION',
  SET_MEDIA: 'SET_MEDIA',
  CLEAR_MEDIA: 'CLEAR_MEDIA',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  PLAY_HEAD: 'PLAY_HEAD',
  VOLUME: 'VOLUME',
  MUTE: 'MUTE',
  FOCUS: 'FOCUS'
};

var errors = exports.errors = {
  FORMAT_NO_SUPPORT: 'It is not possible to play any media format ' + 'provided on this browser using your current defaultOptions.',
  URL_NO_SUPPORT: 'The media URL could not be loaded.',
  URL_NOT_SET: 'Attempted to issue media playback commands while no media url is set.',
  INVALID_GLOBAL_METHOD: 'You passed an invalid jPlayer method to the global array'
};

var hints = exports.hints = {
  FORMAT_NO_SUPPORT: 'The browser may not support these file types.',
  URL_NO_SUPPORT: 'Check the media URL is valid.',
  URL_NOT_SET: 'Pass the media through the defaultOptions or use the setMedia()' + 'action that is passed into the component props.',
  INVALID_GLOBAL_METHOD: 'Remove the invalid method from the "global" option'
};

var classes = exports.classes = {
  MEDIA: 'jp-media',
  JPLAYER: 'jp-jplayer',
  MUTE: 'jp-mute',
  DOWNLOAD: 'jp-download',
  VOLUME_BAR: 'jp-volume-bar',
  VOLUME_BAR_VALUE: 'jp-volume-bar-value',
  PLAYBACK_RATE_BAR: 'jp-playback-rate-bar',
  PLAYBACK_RATE_BAR_VALUE: 'jp-playback-rate-bar-value',
  BUFFER_BAR: 'jp-buffer-bar',
  PROGRESS: 'jp-progress',
  SEEK_BAR: 'jp-seek-bar',
  PLAY_BAR: 'jp-play-bar',
  SEEKING: 'jp-seeking-bg',
  GUI: 'jp-gui',
  NO_BROWSER_SUPPORT: 'jp-no-browser-support',
  PLAY: 'jp-play',
  PAUSE: 'jp-pause',
  STOP: 'jp-stop',
  REPEAT: 'jp-repeat',
  FULL_SCREEN: 'jp-full-screen',
  CURRENT_TIME: 'jp-current-time',
  DURATION: 'jp-duration',
  DETAILS: 'jp-details',
  TITLE: 'jp-title',
  SHUFFLE: 'jp-shuffle',
  PREVIOUS: 'jp-previous',
  NEXT: 'jp-next',
  POSTER: 'jp-poster',
  states: {
    AUDIO: 'jp-state-audio',
    VIDEO: 'jp-state-video',
    PLAYING: 'jp-state-playing',
    IDLE: 'jp-state-idle',
    SEEKING: 'jp-state-seeking',
    MUTED: 'jp-state-muted',
    VOLUME_LOW: 'jp-state-volume-low',
    VOLUME_HIGH: 'jp-state-volume-high',
    LOOPED: 'jp-state-looped',
    FULL_SCREEN: 'jp-state-full-screen',
    SHUFFLED: 'jp-state-shuffled',
    NO_BROWSER_SUPPORT: 'jp-state-no-browser-support',
    NO_VOLUME_SUPPORT: 'jp-state-no-volume-support'
  }
};

var formats = exports.formats = {
  mp3: {
    CODEC: 'audio/mpeg',
    MEDIA: 'audio'
  },
  m4a: { // AAC / MP4
    CODEC: 'audio/mp4; codecs="mp4a.40.2"',
    MEDIA: 'audio'
  },
  m3u8a: { // AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
    MEDIA: 'audio'
  },
  m3ua: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'audio'
  },
  oga: { // OGG
    CODEC: 'audio/ogg; codecs="vorbis, opus"',
    MEDIA: 'audio'
  },
  flac: { // FLAC
    CODEC: 'audio/x-flac',
    MEDIA: 'audio'
  },
  wav: { // PCM
    CODEC: 'audio/wav; codecs="1"',
    MEDIA: 'audio'
  },
  webma: { // WEBM
    CODEC: 'audio/webm; codecs="vorbis"',
    MEDIA: 'audio'
  },
  fla: { // FLV / F4A
    CODEC: 'audio/x-flv',
    MEDIA: 'audio'
  },
  rtmpa: { // RTMP AUDIO
    CODEC: 'audio/rtmp; codecs="rtmp"',
    MEDIA: 'audio'
  },
  m4v: { // H.264 / MP4
    CODEC: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video'
  },
  m3u8v: { // H.264 / AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video'
  },
  m3uv: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'video'
  },
  ogv: { // OGG
    CODEC: 'video/ogg; codecs="theora, vorbis"',
    MEDIA: 'video'
  },
  webmv: { // WEBM
    CODEC: 'video/webm; codecs="vorbis, vp8"',
    MEDIA: 'video'
  },
  flv: { // FLV / F4V
    CODEC: 'video/x-flv',
    MEDIA: 'video'
  },
  rtmpv: { // RTMP VIDEO
    CODEC: 'video/rtmp; codecs="rtmp"',
    MEDIA: 'video'
  }
};

var defaultStatus = exports.defaultStatus = {
  newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
  guiFadeOut: false,
  playHeadPercent: 0,
  mediaSettings: {
    video: false,
    foundSupported: false,
    formats: []
  },
  paused: true,
  seeking: false,
  src: '',
  currentTimeText: '0:00',
  durationText: '',
  seekPercent: 0,
  currentPercentRelative: 0,
  currentPercentAbsolute: 0,
  currentTime: 0,
  duration: 0,
  bufferedTimeRanges: [],
  focused: false
};

var defaultOptions = exports.defaultOptions = {
  preload: 'metadata',
  minPlaybackRate: 0.5,
  maxPlaybackRate: 4,
  playbackRate: 1.0,
  defaultPlaybackRate: 1.0,
  bufferColour: '#ddd',
  volume: 0.8,
  barDrag: true,
  pauseOthersOnPlay: true,
  guiFadeHoldTime: 3000,
  media: {
    sources: {},
    title: '',
    artist: '',
    poster: '',
    free: false
  },
  keyBindings: {},
  showRemainingDuration: false,
  muted: false,
  loop: false,
  autoplay: false,
  smoothPlayBar: false,
  fullScreen: false,
  verticalPlaybackRate: false,
  verticalVolume: false,
  keyEnabled: true,
  timeFormats: {
    showHour: false,
    showMin: true,
    showSec: true,
    padHour: false,
    padMin: true,
    padSec: true,
    sepHour: ':',
    sepMin: ':',
    sepSec: ''
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getElementOffset = exports.traverseParentsUntilClassName = exports.toRelativePercentage = exports.toPercentage = exports.KeyControl = exports.classes = exports.formatArtistAndTitle = exports.updateObject = exports.initialState = exports.passWithIndex = exports.connectWithIndex = exports.connectWithId = exports.connect = undefined;

var _connect = __webpack_require__(50);

var _connect2 = _interopRequireDefault(_connect);

var _connectWithId = __webpack_require__(16);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _connectWithIndex = __webpack_require__(51);

var _connectWithIndex2 = _interopRequireDefault(_connectWithIndex);

var _passWithIndex = __webpack_require__(58);

var _passWithIndex2 = _interopRequireDefault(_passWithIndex);

var _initialState = __webpack_require__(55);

var _initialState2 = _interopRequireDefault(_initialState);

var _updateObject = __webpack_require__(62);

var _updateObject2 = _interopRequireDefault(_updateObject);

var _formatArtistAndTitle = __webpack_require__(53);

var _formatArtistAndTitle2 = _interopRequireDefault(_formatArtistAndTitle);

var _classes = __webpack_require__(48);

var _classes2 = _interopRequireDefault(_classes);

var _keyControl = __webpack_require__(49);

var _keyControl2 = _interopRequireDefault(_keyControl);

var _toPercentage = __webpack_require__(59);

var _toPercentage2 = _interopRequireDefault(_toPercentage);

var _toRelativePercentage = __webpack_require__(60);

var _toRelativePercentage2 = _interopRequireDefault(_toRelativePercentage);

var _traverseParentsUntilClassName = __webpack_require__(61);

var _traverseParentsUntilClassName2 = _interopRequireDefault(_traverseParentsUntilClassName);

var _getElementOffset = __webpack_require__(54);

var _getElementOffset2 = _interopRequireDefault(_getElementOffset);

var _limitValue = __webpack_require__(57);

var _limitValue2 = _interopRequireDefault(_limitValue);

var _canSetVolume = __webpack_require__(47);

var _canSetVolume2 = _interopRequireDefault(_canSetVolume);

var _convertTime = __webpack_require__(52);

var _convertTime2 = _interopRequireDefault(_convertTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.connectWithId = _connectWithId2.default;
exports.connectWithIndex = _connectWithIndex2.default;
exports.passWithIndex = _passWithIndex2.default;
exports.initialState = _initialState2.default;
exports.updateObject = _updateObject2.default;
exports.formatArtistAndTitle = _formatArtistAndTitle2.default;
exports.classes = _classes2.default;
exports.KeyControl = _keyControl2.default;
exports.toPercentage = _toPercentage2.default;
exports.toRelativePercentage = _toRelativePercentage2.default;
exports.traverseParentsUntilClassName = _traverseParentsUntilClassName2.default;
exports.getElementOffset = _getElementOffset2.default;
exports.limitValue = _limitValue2.default;
exports.canSetVolume = _canSetVolume2.default;
exports.convertTime = _convertTime2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focus = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.setOption = undefined;

var _constants = __webpack_require__(2);

var setOption = exports.setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};
var setMedia = exports.setMedia = function setMedia(id, media) {
  return {
    type: _constants.actionNames.SET_MEDIA,
    id: id,
    media: media
  };
};
var clearMedia = exports.clearMedia = function clearMedia(id) {
  return {
    type: _constants.actionNames.CLEAR_MEDIA,
    id: id
  };
};
var play = exports.play = function play(id, time) {
  return {
    type: _constants.actionNames.PLAY,
    id: id,
    time: time
  };
};
var pause = exports.pause = function pause(id, time) {
  return {
    type: _constants.actionNames.PAUSE,
    id: id,
    time: time
  };
};
var setPlayHead = exports.setPlayHead = function setPlayHead(id, percent) {
  return {
    type: _constants.actionNames.PLAY_HEAD,
    id: id,
    percent: percent
  };
};
var setVolume = exports.setVolume = function setVolume(id, volume) {
  return {
    type: _constants.actionNames.VOLUME,
    id: id,
    volume: volume
  };
};
var setMute = exports.setMute = function setMute(id, mute) {
  return {
    type: _constants.actionNames.MUTE,
    id: id,
    mute: mute
  };
};
var focus = exports.focus = function focus(id) {
  return {
    type: _constants.actionNames.FOCUS,
    id: id
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(65)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(64)();
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(104);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    barDrag: jPlayers[id].barDrag
  };
};

var Bar = function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref3, [this].concat(args))), _this), _this.onClick = function (e) {
      return _this.props.clickMoveBar(_this.bar, e);
    }, _this.onTouchStart = function () {
      _this.dragging = true;
    }, _this.onTouchMove = function (e) {
      return _this.props.barDrag && _this.dragging ? _this.props.touchMoveBar(_this.bar, e) : null;
    }, _this.onTouchEnd = function () {
      _this.dragging = false;
    }, _this.onMouseMove = function (e) {
      return _this.props.barDrag && _this.dragging ? _this.props.clickMoveBar(_this.bar, e) : null;
    }, _this.onMouseDown = function () {
      _this.dragging = true;
    }, _this.onMouseUp = function () {
      _this.dragging = false;
    }, _this.setBar = function (ref) {
      return _this.bar = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove, { passive: false });
      document.addEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        onClick: this.onClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        setBar: this.setBar
      });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        clickMoveBar: _propTypes2.default.func.isRequired,
        touchMoveBar: _propTypes2.default.func.isRequired,
        barDrag: _propTypes2.default.bool.isRequired,
        children: _propTypes2.default.node.isRequired
      };
    }
  }]);

  return Bar;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(Bar);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = Recompose;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _playbackRateBarValue = __webpack_require__(78);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_playbackRateBarValue2.default);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _volumeBarValue = __webpack_require__(85);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    verticalVolume: jPlayers[id].verticalVolume,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_volumeBarValue2.default);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _recompose = __webpack_require__(13);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({ id: _propTypes2.default.string }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(7);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _urlNotSupportedError = __webpack_require__(90);

var _urlNotSupportedError2 = _interopRequireDefault(_urlNotSupportedError);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    loop: jPlayers[id].loop,
    showRemainingDuration: jPlayers[id].showRemainingDuration,
    src: jPlayers[id].src,
    currentTime: jPlayers[id].currentTime,
    playHeadPercent: jPlayers[id].playHeadPercent,
    paused: jPlayers[id].paused,
    defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    preload: jPlayers[id].preload,
    volume: jPlayers[id].volume,
    muted: jPlayers[id].muted,
    autoplay: jPlayers[id].autoplay,
    newTime: jPlayers[id].newTime,
    timeFormats: jPlayers[id].timeFormats,
    mediaId: jPlayers[id].media.id,
    otherJPlayerIds: Object.keys(jPlayers).filter(function (key) {
      return key !== id;
    }),
    pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
    children: children
  };
};

var mapDispatchToProps = {
  setOption: _actions.setOption,
  pause: _actions.pause
};

var MediaContainer = function (_React$Component) {
  _inherits(MediaContainer, _React$Component);

  _createClass(MediaContainer, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        onAbort: _propTypes2.default.func,
        onCanPlay: _propTypes2.default.func,
        onCanPlayThrough: _propTypes2.default.func,
        onDurationChange: _propTypes2.default.func,
        onEmptied: _propTypes2.default.func,
        onEncrypted: _propTypes2.default.func,
        onEnded: _propTypes2.default.func,
        onError: _propTypes2.default.func,
        onLoadedData: _propTypes2.default.func,
        onLoadedMetadata: _propTypes2.default.func,
        onLoadStart: _propTypes2.default.func,
        onPause: _propTypes2.default.func,
        onPlay: _propTypes2.default.func,
        onPlaying: _propTypes2.default.func,
        onProgress: _propTypes2.default.func,
        onRateChange: _propTypes2.default.func,
        onSeeked: _propTypes2.default.func,
        onSeeking: _propTypes2.default.func,
        onStalled: _propTypes2.default.func,
        onSuspend: _propTypes2.default.func,
        onTimeUpdate: _propTypes2.default.func,
        onVolumeChange: _propTypes2.default.func,
        onWaiting: _propTypes2.default.func,
        showRemainingDuration: _propTypes2.default.bool.isRequired,
        src: _propTypes2.default.string.isRequired,
        playHeadPercent: _propTypes2.default.number.isRequired,
        paused: _propTypes2.default.bool.isRequired,
        setOption: _propTypes2.default.func.isRequired,
        pause: _propTypes2.default.func.isRequired,
        id: _propTypes2.default.string.isRequired,
        mediaId: _propTypes2.default.string,
        pauseOthersOnPlay: _propTypes2.default.bool.isRequired,
        otherJPlayerIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
        timeFormats: _propTypes2.default.shape({
          showHour: _propTypes2.default.bool.isRequired,
          showMin: _propTypes2.default.bool.isRequired,
          showSec: _propTypes2.default.bool.isRequired,
          padHour: _propTypes2.default.bool.isRequired,
          padMin: _propTypes2.default.bool.isRequired,
          padSec: _propTypes2.default.bool.isRequired,
          sepHour: _propTypes2.default.string.isRequired,
          sepMin: _propTypes2.default.string.isRequired,
          sepSec: _propTypes2.default.string.isRequired
        }).isRequired,
        /* eslint-disable react/no-unused-prop-types */
        newTime: _propTypes2.default.number,
        loop: _propTypes2.default.bool.isRequired,
        autoplay: _propTypes2.default.bool.isRequired,
        defaultPlaybackRate: _propTypes2.default.number.isRequired,
        muted: _propTypes2.default.bool.isRequired,
        playbackRate: _propTypes2.default.number.isRequired,
        preload: _propTypes2.default.string.isRequired,
        volume: _propTypes2.default.number.isRequired,
        /* eslint-enable react/no-unused-prop-types */
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        onAbort: Function.prototype,
        onCanPlay: Function.prototype,
        onCanPlayThrough: Function.prototype,
        onDurationChange: Function.prototype,
        onEmptied: Function.prototype,
        onEncrypted: Function.prototype,
        onEnded: Function.prototype,
        onError: Function.prototype,
        onLoadedData: Function.prototype,
        onLoadedMetadata: Function.prototype,
        onLoadStart: Function.prototype,
        onPause: Function.prototype,
        onPlay: Function.prototype,
        onPlaying: Function.prototype,
        onProgress: Function.prototype,
        onRateChange: Function.prototype,
        onSeeked: Function.prototype,
        onSeeking: Function.prototype,
        onStalled: Function.prototype,
        onSuspend: Function.prototype,
        onTimeUpdate: Function.prototype,
        onVolumeChange: Function.prototype,
        onWaiting: Function.prototype,
        newTime: null,
        mediaId: null
      };
    }
  }]);

  function MediaContainer(props) {
    _classCallCheck(this, MediaContainer);

    var _this = _possibleConstructorReturn(this, (MediaContainer.__proto__ || Object.getPrototypeOf(MediaContainer)).call(this, props));

    _this.getCurrentPercentRelative = function () {
      var currentPercentRelative = 0;

      if (_this.currentMedia.seekable.length > 0) {
        currentPercentRelative = (0, _reactJplayerUtils.toPercentage)(_this.currentMedia.currentTime, _this.getSeekableEnd());
      }
      return currentPercentRelative;
    };

    _this.setCurrentMedia = function (ref) {
      _this.currentMedia = ref;
    };

    _this.getSeekableEnd = function () {
      return _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
    };

    _this.setDurationText = function () {
      var durationText = '';

      if (_this.props.showRemainingDuration) {
        var timeRemaining = _this.currentMedia.duration - _this.currentMedia.currentTime;

        durationText = (timeRemaining > 0 ? '-' : '') + (0, _reactJplayerUtils.convertTime)(timeRemaining, _this.props.timeFormats);
      } else {
        durationText = (0, _reactJplayerUtils.convertTime)(_this.currentMedia.duration, _this.props.timeFormats);
      }

      _this.props.setOption(_this.props.id, 'durationText', durationText);
    };

    _this.setCurrentTimeText = function () {
      var currentTimeText = (0, _reactJplayerUtils.convertTime)(_this.currentMedia.currentTime, _this.props.timeFormats);

      _this.props.setOption(_this.props.id, 'currentTimeText', currentTimeText);
    };

    _this.pauseOthers = function () {
      _this.props.otherJPlayerIds.forEach(function (id) {
        return _this.props.pause(id);
      });
    };

    _this.updateMediaStatus = function () {
      var seekPercent = 0;

      var currentPercentAbsolute = (0, _reactJplayerUtils.toPercentage)(_this.currentMedia.currentTime, _this.currentMedia.duration);

      if (_this.currentMedia.seekable.length > 0) {
        seekPercent = (0, _reactJplayerUtils.toPercentage)(_this.getSeekableEnd(), _this.currentMedia.duration);
      }

      _this.setDurationText();
      _this.setCurrentTimeText();

      _this.props.setOption(_this.props.id, 'seekPercent', seekPercent);
      _this.props.setOption(_this.props.id, 'currentPercentRelative', _this.getCurrentPercentRelative());
      _this.props.setOption(_this.props.id, 'currentPercentAbsolute', currentPercentAbsolute);
      _this.props.setOption(_this.props.id, 'currentTime', _this.currentMedia.currentTime);
      _this.props.setOption(_this.props.id, 'duration', _this.currentMedia.duration);
      _this.props.setOption(_this.props.id, 'playbackRate', _this.currentMedia.playbackRate);
    };

    _this.updateCurrentMedia = function (_ref3) {
      var defaultPlaybackRate = _ref3.defaultPlaybackRate,
          playbackRate = _ref3.playbackRate,
          preload = _ref3.preload,
          volume = _ref3.volume,
          muted = _ref3.muted,
          autoplay = _ref3.autoplay,
          loop = _ref3.loop;

      _this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
      _this.currentMedia.playbackRate = playbackRate;
      _this.currentMedia.preload = preload;
      _this.currentMedia.volume = volume;
      _this.currentMedia.muted = muted;
      _this.currentMedia.autoplay = autoplay;
      _this.currentMedia.loop = loop;
    };

    _this.state = {};

    _this.events = {
      onAbort: _this.props.onAbort,
      onCanPlay: _this.props.onCanPlay,
      onCanPlayThrough: _this.props.onCanPlayThrough,
      onDurationChange: function onDurationChange() {
        _this.updateMediaStatus();
        _this.props.onDurationChange();
      },
      onEmptied: _this.props.onEmptied,
      onEncrypted: _this.props.onEncrypted,
      onEnded: function onEnded() {
        // Pause so that the play/pause button resets and the poster is shown again
        _this.props.pause(_this.props.id, 0);
        _this.updateMediaStatus();
        _this.props.onEnded();
      },
      onError: function onError() {
        _this.props.setOption(_this.props.id, 'error', (0, _urlNotSupportedError2.default)(_this.props.src));
        _this.props.onError();
      },
      onLoadedData: _this.props.onLoadedData,
      onLoadedMetadata: _this.props.onLoadedMetadata,
      onLoadStart: _this.props.onLoadStart,
      onPause: _this.props.onPause,
      onPlay: function onPlay() {
        _this.props.setOption(_this.props.id, 'paused', false);

        if (_this.props.pauseOthersOnPlay) {
          _this.pauseOthers();
        }

        _this.props.onPlay();
      },
      onPlaying: _this.props.onPlaying,
      onProgress: function onProgress() {
        var bufferedTimeRanges = [];

        for (var i = 0; i < _this.currentMedia.buffered.length; i += 1) {
          bufferedTimeRanges.push({
            start: _this.currentMedia.buffered.start(i),
            end: _this.currentMedia.buffered.end(i)
          });
        }
        _this.updateMediaStatus();
        _this.props.setOption(_this.props.id, 'bufferedTimeRanges', bufferedTimeRanges);
        _this.props.onProgress();
      },
      onRateChange: _this.props.onRateChange,
      onSeeked: function onSeeked() {
        _this.props.setOption(_this.props.id, 'seeking', false);
        _this.props.onSeeked();
      },
      onSeeking: function onSeeking() {
        _this.props.setOption(_this.props.id, 'seeking', true);
        _this.props.onSeeking();
      },
      onStalled: _this.props.onStalled,
      onSuspend: _this.props.onSuspend,
      onTimeUpdate: function onTimeUpdate() {
        _this.updateMediaStatus();
        _this.props.onTimeUpdate();
      },
      onVolumeChange: _this.props.onVolumeChange,
      onWaiting: _this.props.onWaiting
    };
    return _this;
  }

  _createClass(MediaContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.currentMedia.src = this.props.src;
      this.props.setOption(this.props.id, 'volumeSupported', (0, _reactJplayerUtils.canSetVolume)());

      this.updateCurrentMedia(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateCurrentMedia(nextProps);

      if (nextProps.mediaId !== this.props.mediaId && nextProps.src !== '') {
        this.currentMedia.src = nextProps.src;
      }

      if (nextProps.newTime !== null) {
        this.currentMedia.currentTime = nextProps.newTime;
        this.props.setOption(this.props.id, 'newTime', null);
      }

      if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
        // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
        // Hasn't fully loaded the song????
        if (this.currentMedia.seekable.length > 0) {
          var seekableEnd = this.getSeekableEnd();

          if (isFinite(seekableEnd)) {
            this.currentMedia.currentTime = (0, _reactJplayerUtils.toRelativePercentage)(nextProps.playHeadPercent, seekableEnd);
            /* Media events don't fire fast enough to give a smooth animation
              when dragging so we update it here as well, same problem as above? */
            this.props.setOption(this.props.id, 'currentPercentRelative', this.getCurrentPercentRelative());
          }
        }
      }

      if (nextProps.paused !== this.props.paused) {
        if (nextProps.paused) {
          this.currentMedia.pause();
        } else {
          this.currentMedia.play();
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
        this.setDurationText();
      }
      if (prevProps.timeFormats !== this.props.timeFormats) {
        this.setCurrentTimeText();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), _extends({}, this.events, {
        ref: this.setCurrentMedia
      }));
    }
  }]);

  return MediaContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(MediaContainer);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(10);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(103);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = ReactMotion;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = _.merge;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _audio = __webpack_require__(66);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: !jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_audio2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _browserUnsupported = __webpack_require__(67);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    foundSupported: jPlayers[id].mediaSettings.foundSupported
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_browserUnsupported2.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _bufferBar = __webpack_require__(68);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
    duration: jPlayers[id].duration,
    bufferColour: jPlayers[id].bufferColour,
    attributes: attributes
  };
};

var BufferBarContainer = function (_React$Component) {
  _inherits(BufferBarContainer, _React$Component);

  function BufferBarContainer() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, BufferBarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = BufferBarContainer.__proto__ || Object.getPrototypeOf(BufferBarContainer)).call.apply(_ref3, [this].concat(args))), _this), _this.setCanvas = function (ref) {
      _this.canvas = ref;
    }, _this.clearBuffer = function () {
      _this.canvas.getContext('2d').clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    }, _this.fillBufferPartially = function () {
      var modifier = _this.canvas.width / _this.props.duration;
      var context = _this.canvas.getContext('2d');

      _this.props.bufferedTimeRanges.forEach(function (bufferedTimeRange) {
        var startX = bufferedTimeRange.start * modifier;
        var endX = bufferedTimeRange.end * modifier;
        var width = endX - startX;

        context.fillStyle = _this.props.bufferColour;
        context.fillRect(startX, 0, width, _this.canvas.height);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BufferBarContainer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
        if (this.props.bufferedTimeRanges.length === 0) {
          this.clearBuffer();
        }
        this.fillBufferPartially();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_bufferBar2.default, { setCanvas: this.setCanvas, attributes: this.props.attributes });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _propTypes2.default.object.isRequired,
        bufferedTimeRanges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
          start: _propTypes2.default.number.isRequired,
          end: _propTypes2.default.number.isRequired
        })).isRequired,
        bufferColour: _propTypes2.default.string.isRequired,
        duration: _propTypes2.default.number.isRequired
      };
    }
  }]);

  return BufferBarContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(BufferBarContainer);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _currentTime = __webpack_require__(69);

var _currentTime2 = _interopRequireDefault(_currentTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    children: children || jPlayers[id].currentTimeText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_currentTime2.default);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _download = __webpack_require__(70);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    free: jPlayers[id].media.free,
    url: jPlayers[id].src
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_download2.default);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _duration = __webpack_require__(71);

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    children: children || jPlayers[id].durationText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_duration2.default);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _fullScreen = __webpack_require__(72);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var mapDispatchToProps = {
  setFullScreen: function setFullScreen(id, fullScreen) {
    return (0, _actions.setOption)(id, 'fullScreen', fullScreen);
  }
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_fullScreen2.default);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _gui = __webpack_require__(73);

var _gui2 = _interopRequireDefault(_gui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    guiFadeOut: jPlayers[id].guiFadeOut,
    guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout
  };
};

var mergeProps = function mergeProps(stateProps, _ref4, _ref3) {
  var dispatch = _ref4.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onMouseMove: function onMouseMove() {
      if (stateProps.fullScreen && !stateProps.paused) {
        dispatch((0, _actions.setOption)(id, 'guiFadeOut', false));
        clearTimeout(stateProps.guiFadeHoldTimeout);
      }
    },
    fullScreen: stateProps.fullScreen,
    guiFadeOut: stateProps.guiFadeOut
  }, attributes);
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(_gui2.default);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _screenfull = __webpack_require__(107);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _classnames = __webpack_require__(92);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(24);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactJplayerUtils = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formatPropTypes = __webpack_require__(91);

var _formatPropTypes2 = _interopRequireDefault(_formatPropTypes);

var _constants = __webpack_require__(2);

var _jPlayer = __webpack_require__(74);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var _extends2;

  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      customStates = _ref.customStates,
      children = _ref.children,
      keyBindings = _ref.keyBindings,
      attributes = _objectWithoutProperties(_ref, ['id', 'customStates', 'children', 'keyBindings']);

  return {
    media: jPlayers[id].media,
    error: jPlayers[id].error,
    fullScreen: jPlayers[id].fullScreen,
    keyEnabled: jPlayers[id].keyEnabled,
    paused: jPlayers[id].paused,
    guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
    guiFadeHoldTime: jPlayers[id].guiFadeHoldTime,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    loop: jPlayers[id].loop,
    keyBindings: keyBindings,
    id: id,
    children: children,
    attributes: _extends({}, attributes, {
      className: (0, _classnames2.default)(attributes.className, _constants.classes.JPLAYER, _extends((_extends2 = {}, _defineProperty(_extends2, _constants.classes.states.AUDIO, !jPlayers[id].mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.VIDEO, jPlayers[id].mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.PLAYING, !jPlayers[id].paused), _defineProperty(_extends2, _constants.classes.states.IDLE, jPlayers[id].currentTime === 0), _defineProperty(_extends2, _constants.classes.states.FULL_SCREEN, jPlayers[id].fullScreen), _defineProperty(_extends2, _constants.classes.states.MUTED, jPlayers[id].muted), _defineProperty(_extends2, _constants.classes.states.VOLUME_LOW, !jPlayers[id].muted && jPlayers[id].volume < 0.5), _defineProperty(_extends2, _constants.classes.states.VOLUME_HIGH, !jPlayers[id].muted && jPlayers[id].volume >= 0.5), _defineProperty(_extends2, _constants.classes.states.SEEKING, jPlayers[id].seeking), _defineProperty(_extends2, _constants.classes.states.LOOPED, jPlayers[id].loop), _defineProperty(_extends2, _constants.classes.states.NO_BROWSER_SUPPORT, !jPlayers[id].mediaSettings.foundSupported), _defineProperty(_extends2, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayers[id].volumeSupported), _extends2), customStates))
    })
  };
};

var mergeProps = function mergeProps(stateProps, _ref3) {
  var dispatch = _ref3.dispatch;
  return _extends({}, stateProps, {
    dispatch: dispatch,
    keyBindings: (0, _lodash2.default)({}, {
      play: {
        key: 80, // p
        fn: function fn() {
          return stateProps.paused ? dispatch((0, _actions.play)(stateProps.id)) : dispatch((0, _actions.pause)(stateProps.id));
        }
      },
      fullScreen: {
        key: 70, // f
        fn: function fn() {
          return dispatch((0, _actions.setOption)(stateProps.id, 'fullScreen', !stateProps.fullScreen));
        }
      },
      mute: {
        key: 77, // m
        fn: function fn() {
          return dispatch((0, _actions.setMute)(stateProps.id, !stateProps.muted));
        }
      },
      volumeUp: {
        key: 190, // .
        fn: function fn() {
          dispatch((0, _actions.setVolume)(stateProps.id, stateProps.volume + 0.1));
        }
      },
      volumeDown: {
        key: 188, // ,
        fn: function fn() {
          return dispatch((0, _actions.setVolume)(stateProps.id, stateProps.volume - 0.1));
        }
      },
      loop: {
        key: 76, // l
        fn: function fn() {
          return dispatch((0, _actions.setOption)(stateProps.id, 'loop', !stateProps.loop));
        }
      }
    }, stateProps.keyBindings)
  });
};

var JPlayerContainer = function (_React$Component) {
  _inherits(JPlayerContainer, _React$Component);

  function JPlayerContainer() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, JPlayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = JPlayerContainer.__proto__ || Object.getPrototypeOf(JPlayerContainer)).call.apply(_ref4, [this].concat(args))), _this), _this.onMouseMove = function (e) {
      if (_this.props.fullScreen) {
        if (_this.props.paused) {
          if ((0, _reactJplayerUtils.traverseParentsUntilClassName)(e.target, _constants.classes.GUI)) {
            return;
          }
        }
        _this.startGuiFadeOutTimer();
      }
    }, _this.setJPlayer = function (ref) {
      return _this.jPlayer = ref;
    }, _this.requestFullScreen = function () {
      if (_this.props.fullScreen) {
        if (_screenfull2.default.enabled) {
          _screenfull2.default.request(_this.jPlayer);
        }
        // Legacy browsers don't implement full screen api
        // Safari 5.1 doesn't hide the other elements even with fullscreen api
        document.body.style.visibility = 'hidden';
      }
    }, _this.exitFullScreen = function () {
      if (!_this.props.fullScreen) {
        if (_screenfull2.default.enabled) {
          _screenfull2.default.exit();
        }
        document.body.style.visibility = 'visible';
      }
    }, _this.startGuiFadeOutTimer = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        clearTimeout(_this.props.guiFadeHoldTimeout);
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'guiFadeOut', false));
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'guiFadeHoldTimeout', setTimeout(_this.startGuiFadeOut, _this.props.guiFadeHoldTime)));
      }
    }, _this.startGuiFadeOut = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'guiFadeOut', true));
      }
    }, _this.closeFullScreen = function () {
      if (!_screenfull2.default.isFullscreen) {
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'fullScreen', false));
      }
    }, _this.logError = function (_ref5) {
      var error = _ref5.error;
      return console.error(error);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(JPlayerContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_screenfull2.default.enabled) {
        document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);
      }
      this.props.dispatch((0, _actions.setMedia)(this.props.id, this.props.media));
      this.requestFullScreen();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.error !== this.props.error) {
        this.logError(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.paused !== this.props.paused) {
        this.startGuiFadeOutTimer();
      }
      if (prevProps.fullScreen !== this.props.fullScreen) {
        this.requestFullScreen();
        this.exitFullScreen();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_screenfull2.default.enabled) {
        document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);
      }
    }
    // eslint-disable-next-line no-console

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _jPlayer2.default,
        _extends({
          setJPlayer: this.setJPlayer, onMouseMove: this.onMouseMove
        }, _extends({ id: this.props.id }, this.props.attributes)),
        _react2.default.createElement(_reactJplayerUtils.KeyControl, { keyBindings: this.props.keyBindings }),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _propTypes2.default.object,
        media: _propTypes2.default.shape({
          title: _propTypes2.default.string,
          artist: _propTypes2.default.string,
          sources: _propTypes2.default.shape(_formatPropTypes2.default).isRequired,
          poster: _propTypes2.default.string,
          free: _propTypes2.default.bool,
          id: _propTypes2.default.string
        }).isRequired,
        keyBindings: _propTypes2.default.object.isRequired,
        id: _propTypes2.default.string.isRequired,
        dispatch: _propTypes2.default.func.isRequired,
        error: _propTypes2.default.shape({
          context: _propTypes2.default.string,
          message: _propTypes2.default.string,
          hint: _propTypes2.default.string
        }),
        fullScreen: _propTypes2.default.bool.isRequired,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
        paused: _propTypes2.default.bool.isRequired,
        guiFadeHoldTime: _propTypes2.default.number.isRequired,
        guiFadeHoldTimeout: _propTypes2.default.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        attributes: null,
        guiFadeHoldTimeout: null,
        error: null
      };
    }
  }]);

  return JPlayerContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(JPlayerContainer);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _mute = __webpack_require__(75);

var _mute2 = _interopRequireDefault(_mute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    muted: jPlayers[id].muted
  };
};

var mapDispatchToProps = {
  setMute: _actions.setMute
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_mute2.default);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _playBar = __webpack_require__(76);

var _playBar2 = _interopRequireDefault(_playBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    smoothPlayBar: jPlayers[id].smoothPlayBar,
    currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
    currentPercentRelative: jPlayers[id].currentPercentRelative
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_playBar2.default);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _play2 = __webpack_require__(77);

var _play3 = _interopRequireDefault(_play2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    play: function play(id, paused) {
      return paused ? dispatch((0, _actions.play)(id)) : dispatch((0, _actions.pause)(id));
    }
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_play3.default);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

var _playbackRateBar = __webpack_require__(79);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

var _playbackRateBarValueContainer = __webpack_require__(14);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    movePlaybackRate: function movePlaybackRate(bar, dispatch, e) {
      var _jPlayers$id = jPlayers[id],
          verticalPlaybackRate = _jPlayers$id.verticalPlaybackRate,
          minPlaybackRate = _jPlayers$id.minPlaybackRate,
          maxPlaybackRate = _jPlayers$id.maxPlaybackRate;

      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var x = e.pageX - offset.left;
      var y = h - e.pageY + offset.top;
      var ratio = void 0;

      if (verticalPlaybackRate) {
        ratio = y / h;
      } else {
        ratio = x / w;
      }

      var playbackRateValue = ratio * (maxPlaybackRate - minPlaybackRate) + minPlaybackRate;

      dispatch((0, _actions.setOption)(id, 'playbackRate', playbackRateValue));
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlaybackRate = _ref3.movePlaybackRate,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlaybackRate(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlaybackRate(bar, dispatch, e.touches[0]);
    },
    children: children,
    attributes: attributes
  };
};

var PlaybackRateBarContainer = function PlaybackRateBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    {
      clickMoveBar: onClick,
      touchMoveBar: onTouchMove
    },
    _react2.default.createElement(
      _playbackRateBar2.default,
      attributes,
      children
    )
  );
};

PlaybackRateBarContainer.defaultProps = {
  children: _react2.default.createElement(_playbackRateBarValueContainer2.default, null)
};

PlaybackRateBarContainer.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func.isRequired,
  onTouchMove: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _poster = __webpack_require__(80);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].media.poster
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_poster2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _repeat = __webpack_require__(81);

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop
  };
};

var mapDispatchToProps = {
  setLoop: function setLoop(id, loop) {
    return (0, _actions.setOption)(id, 'loop', !loop);
  }
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_repeat2.default);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

var _seekBar = __webpack_require__(82);

var _seekBar2 = _interopRequireDefault(_seekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    seekPercent: jPlayers[id].seekPercent,
    movePlayHead: function movePlayHead(bar, dispatch, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var x = e.pageX - offset.left;
      var w = bar.getBoundingClientRect().width;
      var percentage = 100 * (x / w);

      dispatch((0, _actions.setPlayHead)(id, percentage));
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlayHead = _ref3.movePlayHead,
      seekPercent = _ref3.seekPercent,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlayHead(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlayHead(bar, dispatch, e.touches[0]);
    },
    seekPercent: seekPercent,
    children: children,
    attributes: attributes
  };
};

var SeekBarContainer = function SeekBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      seekPercent = _ref5.seekPercent,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouchMove },
    _react2.default.createElement(
      _seekBar2.default,
      _extends({ seekPercent: seekPercent }, attributes),
      children
    )
  );
};

SeekBarContainer.defaultProps = {
  children: null
};

SeekBarContainer.propTypes = {
  children: _propTypes2.default.node,
  attributes: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onTouchMove: _propTypes2.default.func.isRequired,
  seekPercent: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(SeekBarContainer);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _title = __webpack_require__(83);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    children: children || (0, _reactJplayerUtils.formatArtistAndTitle)(jPlayers[id].media.artist, jPlayers[id].media.title),
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_title2.default);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _video = __webpack_require__(84);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_video2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

var _volumeBar = __webpack_require__(86);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

var _volumeBarValueContainer = __webpack_require__(15);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    moveVolumeBar: function moveVolumeBar(bar, dispatch, e) {
      var verticalVolume = jPlayers[id].verticalVolume;

      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var y = h - e.pageY + offset.top;
      var x = e.pageX - offset.left;

      if (verticalVolume) {
        dispatch((0, _actions.setVolume)(id, y / h));
      } else {
        dispatch((0, _actions.setVolume)(id, x / w));
      }
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var moveVolumeBar = _ref3.moveVolumeBar,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return moveVolumeBar(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      moveVolumeBar(bar, dispatch, e.touches[0]);
    },
    children: children,
    attributes: attributes
  };
};

var VolumeBarContainer = function VolumeBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouchMove },
    _react2.default.createElement(
      _volumeBar2.default,
      attributes,
      children
    )
  );
};

VolumeBarContainer.defaultProps = {
  children: _react2.default.createElement(_volumeBarValueContainer2.default, null)
};

VolumeBarContainer.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func.isRequired,
  onTouchMove: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(VolumeBarContainer);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(12);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Connect = function Connect(jPlayer, options) {
  var ConnectedPlayer = (0, _reactRedux.connect)(function (state) {
    return state;
  }, _extends({}, actions))(jPlayer);

  return (0, _reactJplayerUtils.connect)(jPlayer, { options: options }, ConnectedPlayer);
};

exports.default = Connect;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(3);

var _constants = __webpack_require__(2);

exports.default = function (connectedJPlayers) {
  var jPlayers = (0, _reactJplayerUtils.initialState)(connectedJPlayers, _extends({}, _constants.defaultStatus, _constants.defaultOptions), 'options');

  return jPlayers;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shortid = __webpack_require__(98);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactJplayerUtils = __webpack_require__(3);

var _constants = __webpack_require__(2);

var _urlNotSetError = __webpack_require__(89);

var _urlNotSetError2 = _interopRequireDefault(_urlNotSetError);

var _noFormatSupportedError = __webpack_require__(88);

var _noFormatSupportedError2 = _interopRequireDefault(_noFormatSupportedError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateFormats = function updateFormats(jPlayer, media) {
  var newMediaSettings = _extends({}, jPlayer.mediaSettings);
  var newFormats = [];

  Object.keys(media.sources).forEach(function (supplied) {
    var canPlayType = void 0;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(_constants.formats[supplied].MEDIA).canPlayType(_constants.formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    newFormats.push({
      supplied: supplied,
      supported: canPlayType
    });
  });

  newMediaSettings.formats = newFormats;

  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    mediaSettings: newMediaSettings
  });
};

var clearMedia = function clearMedia(jPlayer) {
  return (0, _reactJplayerUtils.updateObject)(jPlayer, _extends({}, _constants.defaultStatus, {
    media: _constants.defaultOptions.media
  }));
};

var setMedia = function setMedia(jPlayer, _ref) {
  var _ref$media = _ref.media,
      media = _ref$media === undefined ? { sources: [] } : _ref$media;

  var newJPlayer = _extends({}, clearMedia(jPlayer), {
    mediaSettings: _constants.defaultStatus.mediaSettings
  });

  newJPlayer = updateFormats(newJPlayer, media);

  newJPlayer.mediaSettings.formats.forEach(function (format) {
    if (format.supported && !newJPlayer.mediaSettings.foundSupported) {
      newJPlayer.mediaSettings.video = _constants.formats[format.supplied].MEDIA === 'video';
      newJPlayer.src = media.sources[format.supplied];
      newJPlayer.paused = true;
      newJPlayer.mediaSettings.foundSupported = true;
    }
  });

  if (!newJPlayer.mediaSettings.foundSupported) {
    newJPlayer.error = (0, _noFormatSupportedError2.default)('{ media.sources: \'' + Object.keys(media.sources).join(', ') + '\' }');
  }
  newJPlayer.media = (0, _reactJplayerUtils.updateObject)(_constants.defaultOptions.media, _extends({}, media, {
    id: _shortid2.default.generate()
  }));

  return newJPlayer;
};

var play = function play(jPlayer, _ref2) {
  var time = _ref2.time;

  if (jPlayer.src) {
    return (0, _reactJplayerUtils.updateObject)(jPlayer, {
      paused: false,
      newTime: !isNaN(time) ? time : jPlayer.newTime
    });
  }
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    error: (0, _urlNotSetError2.default)(play.name)
  });
};

var pause = function pause(jPlayer, _ref3) {
  var time = _ref3.time;

  if (jPlayer.src) {
    return (0, _reactJplayerUtils.updateObject)(jPlayer, {
      paused: true,
      newTime: !isNaN(time) ? time : jPlayer.newTime
    });
  }
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    error: (0, _urlNotSetError2.default)(pause.name)
  });
};

var setPlayHead = function setPlayHead(jPlayer, _ref4) {
  var percent = _ref4.percent;

  var limitedPercent = (0, _reactJplayerUtils.limitValue)(percent, 0, 100);

  if (jPlayer.src) {
    return (0, _reactJplayerUtils.updateObject)(jPlayer, {
      playHeadPercent: limitedPercent
    });
  }
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    error: (0, _urlNotSetError2.default)(setPlayHead.name)
  });
};

var setVolume = function setVolume(jPlayer, _ref5) {
  var volume = _ref5.volume;
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    volume: (0, _reactJplayerUtils.limitValue)(volume, 0, 1),
    muted: volume <= 0
  });
};

var setMute = function setMute(jPlayer, _ref6) {
  var mute = _ref6.mute;
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    muted: mute
  });
};

var focus = function focus(jPlayer, _ref7) {
  var id = _ref7.id;

  var newJPlayer = _extends({}, jPlayer);
  var firstKeyEnabledPlayer = Object.keys(newJPlayer).filter(function (key) {
    return newJPlayer[key].keyEnabled;
  }).shift();

  if (newJPlayer[id].keyEnabled) {
    Object.keys(newJPlayer).forEach(function (key) {
      if (key === id) {
        newJPlayer[key] = (0, _reactJplayerUtils.updateObject)(newJPlayer[key], { focused: true });
      } else {
        newJPlayer[key] = (0, _reactJplayerUtils.updateObject)(newJPlayer[key], { focused: false });
      }
    });
  } else if (newJPlayer[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = (0, _reactJplayerUtils.updateObject)(newJPlayer[firstKeyEnabledPlayer], { focused: true });
    return (0, _reactJplayerUtils.updateObject)(newJPlayer, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }
  return newJPlayer;
};

var updatePlayer = function updatePlayer(jPlayer, action) {
  switch (action.type) {
    case _constants.actionNames.SET_OPTION:
      switch (action.key) {
        case 'media':
          {
            var media = action.value;
            if (Object.keys(media).some(function (v) {
              return v;
            })) {
              return setMedia(jPlayer, { media: media });
            }
            return clearMedia(jPlayer);
          }
        case 'playHeadPercent':
          return setPlayHead(jPlayer, { percent: action.value });
        case 'volume':
          return setVolume(jPlayer, { volume: action.value });
        case 'muted':
          return setMute(jPlayer, { mute: action.value });
        default:
          return (0, _reactJplayerUtils.updateObject)(jPlayer, _defineProperty({}, action.key, action.value));
      }
    case _constants.actionNames.SET_MEDIA:
      return setMedia(jPlayer, action);
    case _constants.actionNames.CLEAR_MEDIA:
      return clearMedia(jPlayer);
    case _constants.actionNames.PLAY:
      return play(jPlayer, action);
    case _constants.actionNames.PAUSE:
      return pause(jPlayer, action);
    case _constants.actionNames.PLAY_HEAD:
      return setPlayHead(jPlayer, action);
    case _constants.actionNames.VOLUME:
      return setVolume(jPlayer, action);
    case _constants.actionNames.MUTE:
      return setMute(jPlayer, action);
    default:
      return null;
  }
};

var jPlayerReducer = function jPlayerReducer(state, action) {
  var newState = _extends({}, state);
  var jPlayer = updatePlayer(newState[action.id], action);

  if (jPlayer !== null) {
    newState = (0, _reactJplayerUtils.updateObject)(newState, _defineProperty({}, action.id, jPlayer));

    return jPlayerReducer(newState, {
      type: _constants.actionNames.FOCUS,
      id: action.id
    });
  }

  if (action.type === _constants.actionNames.FOCUS) {
    return (0, _reactJplayerUtils.updateObject)(newState, focus(newState, action));
  }
  return newState;
};

exports.default = jPlayerReducer;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Some IOS versions don't allow manually changing volume or mute
exports.default = function () {
  var audio = new window.Audio();
  audio.volume = 0.5;

  return audio.volume === 0.5;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  HIDDEN: 'jp-hidden'
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _connectWithId = __webpack_require__(16);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _keyIgnoredElementNames = __webpack_require__(56);

var _keyIgnoredElementNames2 = _interopRequireDefault(_keyIgnoredElementNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onKeyDown = function onKeyDown(keyEnabled, focused, keyBindings, event) {
  if (_keyIgnoredElementNames2.default.some(function (name) {
    return name.toUpperCase() === event.target.nodeName.toUpperCase();
  }) || !focused || !keyEnabled) {
    return;
  }

  Object.keys(keyBindings).forEach(function (key) {
    var keyBinding = keyBindings[key];

    if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
      event.preventDefault();
      keyBinding.fn();
    }
  });
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers,
      jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    keyEnabled: jPlayers[id].keyEnabled,
    focused: jPlayers[id].focused
  };
};

var KeyControl = function (_React$Component) {
  _inherits(KeyControl, _React$Component);

  function KeyControl() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = KeyControl.__proto__ || Object.getPrototypeOf(KeyControl)).call.apply(_ref3, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      return onKeyDown(_this.props.keyEnabled, _this.props.focused, _this.props.keyBindings, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return KeyControl;
}(_react2.default.Component);

KeyControl.propTypes = {
  keyEnabled: _propTypes2.default.bool.isRequired,
  focused: _propTypes2.default.bool.isRequired,
  keyBindings: _propTypes2.default.object.isRequired
};

exports.default = (0, _connectWithId2.default)(mapStateToProps)(KeyControl);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Connect = function Connect(jPlayer, _ref, ConnectedPlayer) {
  var options = _ref.options,
      jPlaylistOptions = _ref.jPlaylistOptions;
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref2, [this].concat(args))), _this), _this.getChildContext = function () {
        return {
          id: options.id
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ConnectedPlayer, _extends({ id: options.id }, this.props));
      }
    }], [{
      key: 'jPlayer',
      get: function get() {
        return jPlayer;
      }
    }, {
      key: 'options',
      get: function get() {
        return options;
      }
    }, {
      key: 'jPlaylistOptions',
      get: function get() {
        return jPlaylistOptions;
      }
    }, {
      key: 'childContextTypes',
      get: function get() {
        return {
          id: _propTypes2.default.string
        };
      }
    }]);

    return _class2;
  }(_react2.default.Component);
};

exports.default = Connect;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _recompose = __webpack_require__(13);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({
    id: _propTypes2.default.string,
    index: _propTypes2.default.number
  }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (seconds, timeFormats) {
  if (isNaN(seconds)) {
    return '';
  }
  var myTime = new Date(seconds * 1000);

  var hour = myTime.getUTCHours();
  var min = timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60;
  var sec = timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60;
  var strHour = timeFormats.padHour && hour < 10 ? '0' + hour : hour;
  var strMin = timeFormats.padMin && min < 10 ? '0' + min : min;
  var strSec = timeFormats.padSec && sec < 10 ? '0' + sec : sec;

  var strTime = '';
  strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : '';
  strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : '';
  strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : '';

  return strTime;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (artist, title) {
  var titleText = '';

  if (artist !== '') {
    titleText += '' + artist;
  }

  if (title !== '') {
    if (artist !== '') {
      titleText += ' - ';
    }
    titleText += '' + title;
  }

  return titleText;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  return {
    top: el.getBoundingClientRect().top + document.body.scrollTop,
    left: el.getBoundingClientRect().left + document.body.scrollLeft
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(24);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = function initialState(connectedJPlayers, defaultValues, optionsName) {
  var jPlayers = {};
  var newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [newConnectedJPlayers];
  }

  newConnectedJPlayers.forEach(function (connectedJPlayer) {
    jPlayers[connectedJPlayer.options.id] = (0, _lodash2.default)({}, _extends({}, defaultValues), connectedJPlayer[optionsName]);
  });

  return jPlayers;
};

exports.default = initialState;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['INPUT', 'TEXTAREA', 'SELECT'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }
  return value;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(13);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  return (0, _recompose.compose)((0, _recompose.withContext)({
    index: _propTypes2.default.number
  }, function (_ref) {
    var index = _ref.index;
    return { index: index };
  })(component));
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return 100 * (number / max);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return number * (max / 100);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (currentElement, className) {
  var element = currentElement;

  while (element.parentNode) {
    element = element.parentNode;

    if (element.className !== undefined && element.className.includes(className)) {
      return element;
    }
  }
  return false;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (existingObject, newValues) {
  return _extends({}, existingObject, newValues);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(8);
  var warning = __webpack_require__(17);
  var ReactPropTypesSecret = __webpack_require__(18);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);

module.exports = function() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var warning = __webpack_require__(17);

var ReactPropTypesSecret = __webpack_require__(18);
var checkPropTypes = __webpack_require__(63);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mediaContainer = __webpack_require__(19);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Audio = function Audio(_ref) {
  var require = _ref.require,
      events = _ref.events,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['require', 'events', 'children']);

  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement(
      'audio',
      attributes,
      children
    )
  ) : null;
};

Audio.defaultProps = {
  events: null,
  children: null
};

Audio.propTypes = {
  children: _propTypes2.default.node,
  require: _propTypes2.default.bool.isRequired,
  events: _propTypes2.default.shape({
    onAbort: _propTypes2.default.func,
    onCanPlay: _propTypes2.default.func,
    onCanPlayThrough: _propTypes2.default.func,
    onDurationChange: _propTypes2.default.func,
    onEmptied: _propTypes2.default.func,
    onEncrypted: _propTypes2.default.func,
    onEnded: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onLoadedData: _propTypes2.default.func,
    onLoadedMetadata: _propTypes2.default.func,
    onLoadStart: _propTypes2.default.func,
    onPause: _propTypes2.default.func,
    onPlay: _propTypes2.default.func,
    onPlaying: _propTypes2.default.func,
    onProgress: _propTypes2.default.func,
    onRateChange: _propTypes2.default.func,
    onSeeked: _propTypes2.default.func,
    onSeeking: _propTypes2.default.func,
    onStalled: _propTypes2.default.func,
    onSuspend: _propTypes2.default.func,
    onTimeUpdate: _propTypes2.default.func,
    onVolumeChange: _propTypes2.default.func,
    onWaiting: _propTypes2.default.func
  })
};

exports.default = Audio;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BrowserUnsupported = function BrowserUnsupported(_ref) {
  var foundSupported = _ref.foundSupported,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['foundSupported', 'children']);

  return foundSupported ? null : _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.NO_BROWSER_SUPPORT }, attributes),
    children
  );
};

BrowserUnsupported.defaultProps = {
  children: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Browser Unsupported'
    ),
    'Your browser does not support this media file. To play the media you will need to update your browser to a more recent version.'
  )
};

BrowserUnsupported.propTypes = {
  children: _propTypes2.default.node,
  foundSupported: _propTypes2.default.bool.isRequired
};

exports.default = BrowserUnsupported;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas,
      attributes = _ref.attributes;
  return _react2.default.createElement('canvas', _extends({
    ref: setCanvas, className: _constants.classes.BUFFER_BAR
  }, attributes));
};

BufferBar.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  setCanvas: _propTypes2.default.func.isRequired
};

exports.default = BufferBar;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CurrentTime = function CurrentTime(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.CURRENT_TIME }, attributes),
    children
  );
};

CurrentTime.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = CurrentTime;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Download = function Download(_ref) {
  var free = _ref.free,
      url = _ref.url,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['free', 'url', 'children']);

  return free ? _react2.default.createElement(
    'a',
    _extends({
      className: _constants.classes.DOWNLOAD, href: url,
      download: true, target: '_blank', rel: 'noopener noreferrer'
    }, attributes),
    children
  ) : null;
};

Download.propTypes = {
  children: _propTypes2.default.node.isRequired,
  url: _propTypes2.default.string.isRequired,
  free: _propTypes2.default.bool.isRequired
};

exports.default = Download;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Duration = function Duration(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['children']);

  return children !== '' ? _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.DURATION }, attributes),
    children
  ) : null;
};

Duration.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = Duration;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FullScreen = function FullScreen(_ref) {
  var setFullScreen = _ref.setFullScreen,
      id = _ref.id,
      fullScreen = _ref.fullScreen,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setFullScreen', 'id', 'fullScreen', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.FULL_SCREEN,
      onClick: function onClick() {
        return setFullScreen(id, !fullScreen);
      }
    }, attributes),
    children
  );
};

FullScreen.propTypes = {
  children: _propTypes2.default.node.isRequired,
  setFullScreen: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = FullScreen;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(23);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var motion = function motion(values, onMouseMove, attributes) {
  return _react2.default.createElement('div', _extends({
    className: _constants.classes.GUI, onMouseMove: onMouseMove,
    style: {
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : ''
    }
  }, attributes));
};

var Gui = function Gui(_ref) {
  var fullScreen = _ref.fullScreen,
      guiFadeOut = _ref.guiFadeOut,
      onMouseMove = _ref.onMouseMove,
      attributes = _objectWithoutProperties(_ref, ['fullScreen', 'guiFadeOut', 'onMouseMove']);

  return _react2.default.createElement(
    _reactMotion.Motion,
    {
      defaultStyle: { opacity: 1 },
      style: { opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1 }
    },
    function (values) {
      return motion(values, onMouseMove, attributes);
    }
  );
};

Gui.propTypes = {
  onMouseMove: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
  guiFadeOut: _propTypes2.default.bool.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = Gui;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var JPlayer = function JPlayer(_ref) {
  var setJPlayer = _ref.setJPlayer,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setJPlayer', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({ ref: setJPlayer, draggable: false }, attributes),
    children
  );
};

JPlayer.defaultProps = {
  setJPlayer: null
};

JPlayer.propTypes = {
  setJPlayer: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = JPlayer;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Mute = function Mute(_ref) {
  var setMute = _ref.setMute,
      id = _ref.id,
      muted = _ref.muted,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setMute', 'id', 'muted', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.MUTE, onClick: function onClick() {
        return setMute(id, !muted);
      } }, attributes),
    children
  );
};

Mute.propTypes = {
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  setMute: _propTypes2.default.func.isRequired,
  muted: _propTypes2.default.bool.isRequired
};

exports.default = Mute;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(23);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlayBar = function PlayBar(_ref) {
  var currentPercentAbsolute = _ref.currentPercentAbsolute,
      currentPercentRelative = _ref.currentPercentRelative,
      smoothPlayBar = _ref.smoothPlayBar,
      attributes = _objectWithoutProperties(_ref, ['currentPercentAbsolute', 'currentPercentRelative', 'smoothPlayBar']);

  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: { smoothWidth: (0, _reactMotion.spring)(currentPercentAbsolute, [250]) } },
    function (values) {
      return _react2.default.createElement('div', _extends({
        className: _constants.classes.PLAY_BAR,
        style: { width: smoothPlayBar ? values.smoothWidth + '%' : currentPercentRelative + '%' }
      }, attributes));
    }
  );
};

PlayBar.propTypes = {
  currentPercentRelative: _propTypes2.default.number.isRequired,
  currentPercentAbsolute: _propTypes2.default.number.isRequired,
  smoothPlayBar: _propTypes2.default.bool.isRequired
};

exports.default = PlayBar;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Play = function Play(_ref) {
  var play = _ref.play,
      id = _ref.id,
      paused = _ref.paused,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['play', 'id', 'paused', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.PLAY, onClick: function onClick() {
        return play(id, paused);
      } }, attributes),
    children
  );
};

Play.propTypes = {
  children: _propTypes2.default.node.isRequired,
  play: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  paused: _propTypes2.default.bool.isRequired
};

exports.default = Play;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBarValue = function PlaybackRateBarValue(_ref) {
  var playbackRate = _ref.playbackRate,
      minPlaybackRate = _ref.minPlaybackRate,
      maxPlaybackRate = _ref.maxPlaybackRate,
      verticalPlaybackRate = _ref.verticalPlaybackRate,
      attributes = _ref.attributes;

  var style = function style() {
    var ratio = (playbackRate - minPlaybackRate) / (maxPlaybackRate - minPlaybackRate);
    var playbackRateBarPercentage = ratio * 100 + '%';

    return {
      width: !verticalPlaybackRate ? playbackRateBarPercentage : null,
      height: verticalPlaybackRate ? playbackRateBarPercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({
    className: _constants.classes.PLAYBACK_RATE_BAR_VALUE, style: style()
  }, attributes));
};

PlaybackRateBarValue.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  verticalPlaybackRate: _propTypes2.default.bool.isRequired,
  minPlaybackRate: _propTypes2.default.number.isRequired,
  maxPlaybackRate: _propTypes2.default.number.isRequired,
  playbackRate: _propTypes2.default.number.isRequired
};

exports.default = PlaybackRateBarValue;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlaybackRateBar = function PlaybackRateBar(_ref) {
  var onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      setBar = _ref.setBar,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['onClick', 'onMouseDown', 'onTouchStart', 'setBar', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({
      ref: setBar, className: _constants.classes.PLAYBACK_RATE_BAR,
      onClick: onClick, onMouseDown: onMouseDown,
      onTouchStart: onTouchStart }, attributes),
    children
  );
};

PlaybackRateBar.defaultProps = {
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
  setBar: null
};

PlaybackRateBar.propTypes = {
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  setBar: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = PlaybackRateBar;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      attributes = _objectWithoutProperties(_ref, ['src', 'alt']);

  return src !== '' ? _react2.default.createElement('img', _extends({ className: _constants.classes.POSTER, alt: alt, src: src }, attributes)) : null;
};

Poster.defaultProps = {
  alt: null,
  src: null
};

Poster.propTypes = {
  src: _propTypes2.default.string,
  alt: _propTypes2.default.string
};

exports.default = Poster;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Repeat = function Repeat(_ref) {
  var setLoop = _ref.setLoop,
      id = _ref.id,
      loop = _ref.loop,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setLoop', 'id', 'loop', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.REPEAT, onClick: function onClick() {
        return setLoop(id, loop);
      } }, attributes),
    children
  );
};

Repeat.propTypes = {
  loop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]).isRequired,
  children: _propTypes2.default.node.isRequired,
  id: _propTypes2.default.string.isRequired,
  setLoop: _propTypes2.default.func.isRequired
};

exports.default = Repeat;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SeekBar = function SeekBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      seekPercent = _ref.seekPercent,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart', 'seekPercent']);

  return _react2.default.createElement('div', _extends({
    ref: setBar, className: _constants.classes.SEEK_BAR,
    style: { width: seekPercent + '%' }, onClick: onClick,
    onTouchStart: onTouchStart, onMouseDown: onMouseDown
  }, attributes));
};

SeekBar.defaultProps = {
  setBar: null,
  onClick: null,
  onMouseDown: null,
  onTouchStart: null
};

SeekBar.propTypes = {
  seekPercent: _propTypes2.default.number.isRequired,
  setBar: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = SeekBar;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return children !== '' ? _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.TITLE }, attributes),
    children
  ) : null;
};

Title.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

exports.default = Title;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mediaContainer = __webpack_require__(19);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Video = function Video(_ref) {
  var require = _ref.require,
      events = _ref.events,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['require', 'events', 'children']);

  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement(
      'video',
      attributes,
      children
    )
  ) : null;
};

Video.defaultProps = {
  events: null,
  children: null
};

Video.propTypes = {
  children: _propTypes2.default.node,
  require: _propTypes2.default.bool.isRequired,
  events: _propTypes2.default.shape({
    onAbort: _propTypes2.default.func,
    onCanPlay: _propTypes2.default.func,
    onCanPlayThrough: _propTypes2.default.func,
    onDurationChange: _propTypes2.default.func,
    onEmptied: _propTypes2.default.func,
    onEncrypted: _propTypes2.default.func,
    onEnded: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onLoadedData: _propTypes2.default.func,
    onLoadedMetadata: _propTypes2.default.func,
    onLoadStart: _propTypes2.default.func,
    onPause: _propTypes2.default.func,
    onPlay: _propTypes2.default.func,
    onPlaying: _propTypes2.default.func,
    onProgress: _propTypes2.default.func,
    onRateChange: _propTypes2.default.func,
    onSeeked: _propTypes2.default.func,
    onSeeking: _propTypes2.default.func,
    onStalled: _propTypes2.default.func,
    onSuspend: _propTypes2.default.func,
    onTimeUpdate: _propTypes2.default.func,
    onVolumeChange: _propTypes2.default.func,
    onWaiting: _propTypes2.default.func
  })
};

exports.default = Video;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume,
      attributes = _ref.attributes;

  var style = function style() {
    var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';

    return {
      width: !verticalVolume ? volumeBarValuePercentage : null,
      height: verticalVolume ? volumeBarValuePercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({ className: _constants.classes.VOLUME_BAR_VALUE, style: style() }, attributes));
};

VolumeBarValue.defaultProps = {
  verticalVolume: _constants.defaultOptions.verticalVolume
};

VolumeBarValue.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  muted: _propTypes2.default.bool.isRequired,
  volume: _propTypes2.default.number.isRequired,
  verticalVolume: _propTypes2.default.bool
};

exports.default = VolumeBarValue;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var VolumeBar = function VolumeBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart']);

  return _react2.default.createElement('div', _extends({
    ref: setBar, className: _constants.classes.VOLUME_BAR,
    onClick: onClick, onMouseDown: onMouseDown, onTouchStart: onTouchStart
  }, attributes));
};

VolumeBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null
};

VolumeBar.propTypes = {
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  setBar: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = VolumeBar;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.Gui = exports.connect = exports.actions = exports.reducer = exports.initialState = exports.constants = undefined;

var _initialState = __webpack_require__(45);

var _initialState2 = _interopRequireDefault(_initialState);

var _reducer = __webpack_require__(46);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _connect = __webpack_require__(44);

var _connect2 = _interopRequireDefault(_connect);

var _guiContainer = __webpack_require__(32);

var _guiContainer2 = _interopRequireDefault(_guiContainer);

var _videoContainer = __webpack_require__(42);

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _audioContainer = __webpack_require__(25);

var _audioContainer2 = _interopRequireDefault(_audioContainer);

var _jPlayerContainer = __webpack_require__(33);

var _jPlayerContainer2 = _interopRequireDefault(_jPlayerContainer);

var _playBarContainer = __webpack_require__(35);

var _playBarContainer2 = _interopRequireDefault(_playBarContainer);

var _bufferBarContainer = __webpack_require__(27);

var _bufferBarContainer2 = _interopRequireDefault(_bufferBarContainer);

var _posterContainer = __webpack_require__(38);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(41);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _fullScreenContainer = __webpack_require__(31);

var _fullScreenContainer2 = _interopRequireDefault(_fullScreenContainer);

var _muteContainer = __webpack_require__(34);

var _muteContainer2 = _interopRequireDefault(_muteContainer);

var _playContainer = __webpack_require__(36);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _repeatContainer = __webpack_require__(39);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _seekBarContainer = __webpack_require__(40);

var _seekBarContainer2 = _interopRequireDefault(_seekBarContainer);

var _playbackRateBarContainer = __webpack_require__(37);

var _playbackRateBarContainer2 = _interopRequireDefault(_playbackRateBarContainer);

var _playbackRateBarValueContainer = __webpack_require__(14);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _volumeBarContainer = __webpack_require__(43);

var _volumeBarContainer2 = _interopRequireDefault(_volumeBarContainer);

var _volumeBarValueContainer = __webpack_require__(15);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _downloadContainer = __webpack_require__(29);

var _downloadContainer2 = _interopRequireDefault(_downloadContainer);

var _durationContainer = __webpack_require__(30);

var _durationContainer2 = _interopRequireDefault(_durationContainer);

var _currentTimeContainer = __webpack_require__(28);

var _currentTimeContainer2 = _interopRequireDefault(_currentTimeContainer);

var _browserUnsupportedContainer = __webpack_require__(26);

var _browserUnsupportedContainer2 = _interopRequireDefault(_browserUnsupportedContainer);

var _constants = __webpack_require__(2);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */

exports.default = _jPlayerContainer2.default;
exports.constants = constants;
exports.initialState = _initialState2.default;
exports.reducer = _reducer2.default;
exports.actions = actions;
exports.connect = _connect2.default;
exports.Gui = _guiContainer2.default;
exports.SeekBar = _seekBarContainer2.default;
exports.PlayBar = _playBarContainer2.default;
exports.BufferBar = _bufferBarContainer2.default;
exports.Poster = _posterContainer2.default;
exports.Video = _videoContainer2.default;
exports.Audio = _audioContainer2.default;
exports.Title = _titleContainer2.default;
exports.FullScreen = _fullScreenContainer2.default;
exports.Mute = _muteContainer2.default;
exports.Play = _playContainer2.default;
exports.Repeat = _repeatContainer2.default;
exports.PlaybackRateBar = _playbackRateBarContainer2.default;
exports.PlaybackRateBarValue = _playbackRateBarValueContainer2.default;
exports.VolumeBar = _volumeBarContainer2.default;
exports.VolumeBarValue = _volumeBarValueContainer2.default;
exports.Download = _downloadContainer2.default;
exports.Duration = _durationContainer2.default;
exports.CurrentTime = _currentTimeContainer2.default;
exports.BrowserUnsupported = _browserUnsupportedContainer2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.FORMAT_NO_SUPPORT,
    hint: _constants.hints.FORMAT_NO_SUPPORT
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NOT_SET,
    hint: _constants.hints.URL_NOT_SET
  };
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NO_SUPPORT,
    hint: _constants.hints.URL_NO_SUPPORT
  };
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatPropTypes = {};

Object.keys(_constants.formats).forEach(function (key) {
  formatPropTypes[key] = _propTypes2.default.string;
});

exports.default = formatPropTypes;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(11);
  var warning = __webpack_require__(20);
  var ReactPropTypesSecret = __webpack_require__(21);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);

module.exports = function() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var warning = __webpack_require__(20);

var ReactPropTypesSecret = __webpack_require__(21);
var checkPropTypes = __webpack_require__(95);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(101);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(22);
var alphabet = __webpack_require__(6);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(6);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(6);
var encode = __webpack_require__(22);
var decode = __webpack_require__(100);
var build = __webpack_require__(99);
var isValid = __webpack_require__(102);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(105) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(6);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = __webpack_require__(106);
var randomBytes = crypto.randomBytes;

function randomByte() {
    return randomBytes(1)[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parseInt(process.env.NODE_UNIQUE_ID || 0, 10);


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = screenfull;

/***/ })
/******/ ]);