/**
 * Stackla is made available under a commercial licence
 * and is subject to Stackla's Terms of Service.
 *
 * Refer to https://stackla.com/terms-of-service/ 
 * or contact support@stackla.com for further clarification.
 *
 * Built on 2018-05-14 16:05:13
 */

webpackJsonp([2],Array(50).concat([
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var $ = $tackla;

	'use strict';

	__webpack_require__(51);

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _importsLoader$$tacklaTagla = __webpack_require__(52);

	var _importsLoader$$tacklaTagla2 = _interopRequireDefault(_importsLoader$$tacklaTagla);

	var _expandedTileCallbacks = __webpack_require__(58);

	var _expandedTileCallbacks2 = _interopRequireDefault(_expandedTileCallbacks);

	var _util = __webpack_require__(18);

	var _util2 = __webpack_require__(35);

	var _shopspotFlyout = __webpack_require__(59);

	var _shopspotFlyout2 = _interopRequireDefault(_shopspotFlyout);

	var _shopspotFlyout3 = __webpack_require__(60);

	var _shopspotFlyout4 = _interopRequireDefault(_shopspotFlyout3);

	var _product = __webpack_require__(61);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Decorator = __webpack_require__(63); /* global $, StacklaFluidWidget, Stackla */
	/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers, requireDollarBeforejQueryAssignment */
	/* jshint maxparams: 11, scripturl: true, maxdepth: 4 */

	//============
	// Constants
	//============
	var SHOPSPOT_BTN_BACKGROUND = '0198cf';
	var SHOPSPOT_BTN_TEXT_COLOR = 'ffffff';
	var TEMPLATE = void 0,

	//============
	// Variables
	//============
	isIE8 = navigator.appVersion.indexOf('MSIE 8.') !== -1,
	    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
	    currentExpandedTileUniqueId = void 0,
	    shopSpots = void 0,
	    videoId = 0,
	    widgetNodes = [],

	/**
	 * @see STAC-6145, STAC-5923.
	 * Keeps the current tile, used in Magnific-popup. It is only needed in changing the content on a already opened
	 * popup. This variable is needed because we cannot hot replace a change function within Magnific-popup if the popup
	 * is already open, we have to have outer scope variable to hold the dynamic data.
	 */
	currentPopupParams = void 0,

	//============
	// Methods
	//============
	bind = void 0,
	    setMediaMaxSize = void 0,
	    getWidgetInstanceByUniqueId = void 0,
	    getWidgetInstanceByWidgetId = void 0,
	    getSharingUrl = void 0,
	    getShortUrl = void 0,
	    getComments = void 0,
	    show = void 0,
	    render = void 0,
	    renderShopspots = void 0,
	    renderShopspotsInner = void 0;

	//============
	// Templates
	//============
	TEMPLATE = {
	  // TODO - Figure out how to on-demand load
	  portrait: __webpack_require__(72),
	  landscape: __webpack_require__(73),
	  'base-portrait': __webpack_require__(74),
	  'base-landscape': __webpack_require__(75),
	  base_slider: __webpack_require__(76),
	  quadrant: __webpack_require__(77),
	  base_nightfall: __webpack_require__(78)
	};

	//============
	// Methods
	//============
	bind = function bind($tile, tileData, widgetId, filterId, widgetSetting) {
	  var widgetStyleName = _lodash2.default.get(widgetSetting, 'style.style');
	  var classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName);
	  var $link = $('.' + classPrefix + '-interaction-link-share, .js-' + classPrefix + '-share-button');

	  // only for slier widget
	  if (widgetStyleName === 'base_slider') {
	    (0, _product2.default)(tileData);
	  }

	  // Expand Sharing
	  $link.on('click', function (e) {
	    var $btn = $link,
	        $icon = $btn.find('.' + classPrefix + '-share-icon, .stacklapopup-shreicon'),
	        $list = $('.' + classPrefix + '-share-list');

	    $btn.toggleClass('on');
	    $list.toggleClass('on');

	    // Gen 1.0 only
	    if ($btn.hasClass('on')) {
	      $btn.find('span').html('Close');
	      $icon.removeClass('share').addClass('close');
	    } else {
	      $btn.find('span').html('Share');
	      $icon.addClass('share').removeClass('close');
	    }
	    resizePopupBackground();
	  });

	  var $openCommentBtn = $('.' + classPrefix + '-interaction-comment, .js-stacklapopup-comment-button');
	  $openCommentBtn.on('click', function () {
	    $('.' + classPrefix + '-comments-wrap').addClass('on').fadeIn();

	    // For Nightfall widget
	    $('.no-border').removeClass('no-border');
	    $openCommentBtn.hide().addClass('on');
	  });
	  $('.' + classPrefix + '-comments-close-button, .js-stacklapopup-comment-close-button').on('click', function () {
	    $('.' + classPrefix + '-comments-wrap').removeClass('on').fadeOut();
	    $openCommentBtn.show().removeClass('on');
	  });
	  $('.' + classPrefix + '-comments-user-textarea').parents('form').on('submit', function (e) {
	    e.preventDefault();
	    StacklaFluidWidget.postComment($('.' + classPrefix + '-comments-user-button')[0]);
	  });
	  $('.' + classPrefix + '-comments-user-textarea').on('input keyup', function () {
	    if ($(this).val()) {
	      $('.' + classPrefix + '-comments-user-input').fadeIn();
	      $('.' + classPrefix + '-comments-user-button').fadeIn();
	    } else {
	      $('.' + classPrefix + '-comments-user-input').fadeOut();
	      $('.' + classPrefix + '-comments-user-button').fadeOut();
	    }

	    // Resize the textarea to fit as you type.
	    var defaultHeight = $(this).data('default-height');
	    var height = $(this)[0].scrollHeight;

	    if (defaultHeight) {
	      height = height < defaultHeight ? defaultHeight : height;
	    }
	    $(this).css('height', height);
	  });
	  $(window).resize(function () {
	    resizeCommentFields();
	    //resizePopupBackground();
	  });
	  resizeCommentFields();
	  //resizePopupBackground();

	  function resizeCommentFields() {
	    // Avoid comment resizing for new widgets
	    if (classPrefix !== 'stacklapopup') {
	      return;
	    }

	    var $window = $(window);
	    var $form = $('.' + classPrefix + '-comments-user form');
	    var $button = $('.' + classPrefix + '-comments-user-button');
	    var $input = $('.' + classPrefix + '-comments-user-input');
	    var $textarea = $('.' + classPrefix + '-comments-user-textarea');
	    var $avatar = $('.' + classPrefix + '-comments-user .' + classPrefix + '-comments-avatar');

	    var inputWidth = void 0;
	    if ($window > 320) {
	      inputWidth = $form.width() - $avatar.width() - $button.outerWidth() - 2 * parseInt($avatar.css('margin-right'));

	      $input.css('width', inputWidth);
	      $textarea.css('width', inputWidth);
	    } else {
	      inputWidth = $form.width() - $avatar.width() - parseInt($avatar.css('margin-right'));

	      $input.css('width', inputWidth);
	      $textarea.css('width', '100%');
	    }
	  }

	  function resizePopupBackground() {
	    if ($('.stacklapopup-bg').css('position') === 'absolute') {
	      // The widget has a height transition time of 1s, so wait for that.
	      setTimeout(function () {
	        $('.stacklapopup-bg.stacklapopup-ready').css('height', $(document).height() + 'px');
	      }, 1100);
	    }
	  }

	  $('.' + classPrefix + '-products-item-button').on('click', function (e) {
	    var tagId = $(e.currentTarget).parents('.' + classPrefix + '-products-item').data('tagId'),
	        productTag = _lodash2.default.find(tileData.tags_extended, { id: tagId }),
	        widgetNode = getWidgetInstanceByUniqueId(currentExpandedTileUniqueId);

	    widgetNode.emit('productActionClick', {
	      productTag: productTag,
	      tileData: tileData,
	      filterId: filterId,
	      widgetId: widgetId
	    });
	  });
	};
	setMediaMaxSize = function setMediaMaxSize() {
	  var $wrap = currentPopupParams.$el,
	      widgetStyleName = _lodash2.default.get(currentPopupParams, 'widgetSetting.style.style'),
	      classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName),
	      $userInfo = $('.' + classPrefix + '-user-info'),
	      $inner = $wrap.find(['.' + classPrefix + '-video-wrapper-inner', '.' + classPrefix + '-image-wrapper-inner'].join(', ')),
	      $img = $inner.find('img'),
	      isImage = $wrap.hasClass('image'),
	      isVideo = $wrap.hasClass('video'),
	      maxWidth,
	      maxHeight,
	      ratio;

	  // Only needs to adjust for image or video tile.
	  if (!isImage && !isVideo) {
	    return;
	  }

	  // Give offset of the top margin, as well as user info if it's visible,
	  // and then 50px to add a little space for the bottom.
	  maxHeight = $(window).height() - parseInt($wrap.css('padding-top')) - parseInt($wrap.css('margin-top')) - $userInfo.outerHeight() - 50;

	  // Get the ratio
	  ratio = isVideo ? $inner.width() / $inner.height() : $img.attr('data-max-width') / $img.attr('data-max-height');

	  // And get the corresponded width
	  maxWidth = maxHeight * ratio;

	  // Set the media dimensions
	  if (isVideo) {
	    $inner.css('max-width', maxWidth);
	    $inner.css('max-height', maxHeight);
	  }

	  if ($wrap.hasClass(classPrefix + '-solo')) {
	    $inner.css('max-width', Math.min(maxWidth, 644)).attr('data-max-width', Math.min(maxWidth, 644));
	  }

	  if ($('.' + classPrefix + '-has-products').length && $('.' + classPrefix + '-horizontal').length && !$('.' + classPrefix + '-landscape').length // Only for Gen 1.0 widgets
	  ) {
	      $('.' + classPrefix + '-panel-right').height($('.' + classPrefix + '-panel-left').height());
	    }
	};
	getWidgetInstanceByUniqueId = function getWidgetInstanceByUniqueId(uniqueId) {
	  // unique ID
	  for (var i = 0; i < widgetNodes.length; i++) {
	    var widgetNode = widgetNodes[i];
	    if (parseInt(uniqueId, 10) === widgetNode.uniqueId) {
	      return widgetNode;
	    }
	  }
	  return null;
	};
	getWidgetInstanceByWidgetId = function getWidgetInstanceByWidgetId(widgetId) {
	  var i, widgetNode;
	  for (i = 0; i < widgetNodes.length; i++) {
	    widgetNode = widgetNodes[i];
	    if (parseInt(widgetId, 10) === parseInt(widgetNode.widgetId, 10)) {
	      return widgetNode;
	    }
	  }
	  return null;
	};
	getSharingUrl = function getSharingUrl(tileId) {
	  return Stackla.WidgetManager.getSharingRedirectUrl(tileId);
	};
	getShortUrl = function getShortUrl(frameId, url, tileId) {
	  var widgetNode = getWidgetInstanceByUniqueId(currentExpandedTileUniqueId);
	  if (widgetNode) {
	    widgetNode.performAction('getShortUrl', {
	      widgetId: frameId,
	      url: url,
	      tileId: tileId
	    });
	  }
	};
	getComments = function getComments(frameId, tileId, lastCommentID, howMany) {
	  if (_lodash2.default.isNull(lastCommentID) || _lodash2.default.isUndefined(lastCommentID)) {
	    lastCommentID = 0;
	  }
	  if (_lodash2.default.isNull(howMany) || _lodash2.default.isUndefined(howMany)) {
	    howMany = 5;
	  }
	  // call widget to retrieve comments, result will be available in getCommentsCallback...
	  var widgetNode = getWidgetInstanceByUniqueId(currentExpandedTileUniqueId);
	  if (widgetNode) {
	    widgetNode.performAction('getComments', {
	      tileId: tileId,
	      lastCommentId: lastCommentID,
	      howMany: howMany
	    });
	  }
	};
	show = function show($el, options, t, widgetId, appearance, filterId, widgetSetting) {
	  var timer,
	      config,
	      widgetStyleName = _lodash2.default.get(widgetSetting, 'style.style'),
	      classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName);

	  currentPopupParams = {
	    $el: $el,
	    filterId: filterId,
	    options: options,
	    src: $el, // This is only used in config.items
	    t: t,
	    widgetId: widgetId,
	    widgetSetting: widgetSetting
	  };

	  config = {
	    type: 'inline',
	    items: currentPopupParams,
	    callbacks: {
	      change: function change() {
	        var t = currentPopupParams.t,
	            options = currentPopupParams.options,
	            widgetId = currentPopupParams.widgetId,
	            widgetNode = getWidgetInstanceByWidgetId(widgetId),
	            widgetSetting = currentPopupParams.widgetSetting,
	            appearances = currentPopupParams.appearances,
	            filterId = currentPopupParams.filterId,
	            $el = currentPopupParams.$el,
	            widgetStyleName = _lodash2.default.get(widgetSetting, 'style.style'),
	            classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName),
	            $wrapper = $el.find('.' + classPrefix + '-image-loading'),
	            $image = $wrapper.find('img'),
	            $leftPane = $el.find(classPrefix + '-panel-left'),
	            hasImage = t.media === 'image' && !t.embedly,
	            hasVideo = t.media === 'video' && !t.embedly;

	        if (hasImage && $image[0]) {
	          $image[0].onload = function () {
	            if (options.show_shopspots) {
	              shopSpots = renderShopspots($wrapper, t, widgetId, appearance, filterId, widgetSetting);
	            }
	            setMediaMaxSize();
	            _expandedTileCallbacks2.default.onAfterExpandedTileImageLoad(widgetId, $image, $el);
	            widgetNode.emit('expandedTileImageLoad', {
	              el: $image[0],
	              tileEl: $el[0],
	              filterId: filterId,
	              tileData: t
	            });
	          };
	        } else if (hasVideo) {
	          setTimeout(function () {
	            setMediaMaxSize();
	          }, 300);
	        }

	        $el.on('click', '.' + classPrefix + '-avatar-link, .' + classPrefix + '-user-link', function (e) {
	          var widgetNode = getWidgetInstanceByWidgetId(widgetId);
	          widgetNode.emit('userClick', { tileData: t, filterId: filterId });
	        });
	        $el.on('click', '.' + classPrefix + '-share-button', function (e) {
	          var widgetNode = getWidgetInstanceByWidgetId(widgetId),
	              $target = $(e.currentTarget),
	              shareNetwork = $target.hasClass('facebook') && 'facebook' || $target.hasClass('twitter') && 'twitter' || $target.hasClass('pinterest') && 'pinterest' || $target.hasClass('gplus') && 'gplus' || $target.hasClass('linkedin') && 'linkedin' || $target.hasClass('email') && 'email';
	          if (!shareNetwork) {
	            return;
	          }
	          widgetNode.emit('shareClick', {
	            shareNetwork: shareNetwork,
	            filterId: filterId,
	            tileData: t
	          });
	        });
	        if (hasImage && options.layout === 'landscape') {
	          $wrapper.on('mouseenter', function (e) {
	            $leftPane.addClass(classPrefix + '-panel-left-hover');
	          }).on('mouseleave', function (e) {
	            $leftPane.removeClass(classPrefix + '-panel-left-hover');
	          });
	        }

	        // Need to destroy the LinkedIn JS SDK or the next expanded tile won't show its badge.
	        if (window.IN) {
	          delete window.IN;
	        }
	      },
	      resize: function resize() {
	        var $el = currentPopupParams.$el,
	            widgetId = currentPopupParams.widgetId,
	            widgetNode = getWidgetInstanceByWidgetId(widgetId),
	            widgetStyleName = _lodash2.default.get(currentPopupParams, 'widgetSetting.style.style'),
	            classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName),
	            $wrapper = $el.find('.' + classPrefix + '-image-loading, .' + classPrefix + '-quadrant-image-wrapper'),
	            $image = $wrapper.length ? $wrapper.find('img') : null,
	            options = {},
	            sizes;

	        options.prevented = false;
	        _expandedTileCallbacks2.default.onBeforeExpandedTileImageResize(widgetId, $wrapper, $image, options);
	        if (options.prevented || !$image) {
	          return;
	        }

	        widgetNode.emit('beforeExpandedTileImageResize', {
	          sizes: [$image.data('max-width'), $image.data('max-height')],
	          el: $image[0],
	          tileData: currentPopupParams.t,
	          tileEl: $el[0]
	        }, function () {
	          if (timer) {
	            clearTimeout(timer);
	          }
	          timer = setTimeout(function () {
	            setMediaMaxSize();
	            sizes = [$image.width(), $image.height()];
	            _expandedTileCallbacks2.default.onAfterExpandedTileImageResize(widgetId, sizes, $image, $el);
	            widgetNode.emit('expandedTileImageResize', {
	              sizes: sizes,
	              el: $image[0],
	              tileData: currentPopupParams.t,
	              tileEl: $el[0],
	              filterId: filterId
	            });

	            if (shopSpots) {
	              shopSpots.sync();
	            }
	          }, 1000);
	        });
	      },
	      beforeClose: function beforeClose() {
	        var $el = currentPopupParams.$el,
	            tileData = currentPopupParams.t,
	            widgetId = currentPopupParams.widgetId,
	            widgetNode = getWidgetInstanceByWidgetId(widgetId);

	        widgetNode.emit('beforeExpandedTileClose', {
	          el: $el[0],
	          tileData: tileData,
	          filterId: filterId
	        });
	      },
	      close: function close() {
	        var $el = currentPopupParams.$el,
	            tileData = currentPopupParams.t,
	            widgetId = currentPopupParams.widgetId,
	            widgetNode = getWidgetInstanceByWidgetId(widgetId);

	        $el.find('video').each(function () {
	          var el = this;
	          el.pause();
	          // Hack to solve memory leak in iOS (http://d.pr/bLmc)
	          el.src = '';
	          $(el).remove();
	        });
	        if (shopSpots) {
	          shopSpots.destroy();
	          shopSpots = null;
	        }
	        widgetNode.emit('expandedTileClose', {
	          el: $el[0],
	          tileData: tileData,
	          filterId: filterId
	        });
	      }
	    }
	  };

	  if (isMobile) {
	    config.mainClass = config.mainClass || '';
	    config.mainClass += ' ' + classPrefix + '-mobile';
	    config.removalDelay = 300; // George and Joseph don't know why the delay is set
	    config.closeMarkup = '<button title="Close (Esc)" type="button" class="' + classPrefix + '-close">' + '&#8592;</button>';
	  }

	  if (widgetSetting.style.style === 'base_quadrant') {
	    config.mainClass = config.mainClass || '';
	    config.mainClass += ' ' + classPrefix + '-main';
	    config.closeMarkup = '<a href="javascript:void(0);" class="stacklapopup-close ' + classPrefix + '-close">' + 'Close &#10005;</a>';
	  }
	  if (widgetSetting.style.style === 'base_slider') {
	    config.mainClass = config.mainClass || '';
	    config.mainClass += ' ' + classPrefix + '-bg';
	  }

	  $.magnificPopup.open(config);
	};
	render = function render($el, data, widgetId, widgetSetting) {
	  var widgetStyleName = _lodash2.default.get(widgetSetting, 'style.style');
	  var classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName);
	  var globalClassPrefix = 'stacklapopup';
	  var sharingUrl;

	  // Render Comments
	  getComments(data.widget_id, data.id);

	  // Render Sharing
	  if (data.show_sharing) {
	    renderSharingAttrs(data);
	  }

	  // Sharing
	  sharingUrl = getSharingUrl(data.id);
	  getShortUrl(widgetId, sharingUrl, data.id);

	  renderNavs($el, data, data.widget_id, widgetSetting);

	  var $popup = $('.' + classPrefix + '-landscape');
	  if ($popup.length) {
	    if ($popup.hasClass('image') || $popup.hasClass('video')) {
	      $('.' + globalClassPrefix + '-content').css('max-width', '800px');
	    } else {
	      $('.' + globalClassPrefix + '-content').css('max-width', '644px');
	    }
	  }

	  if (widgetSetting.style.style === 'base_nightfall') {
	    var $wrapper = $('.' + classPrefix + '-wrapper');
	    var $innerWrapper = $('.' + classPrefix + '-inner-wrapper');
	    var children = $('.' + classPrefix + '-content-wrapper').children();
	    var isLastChildComment = children.last().hasClass(classPrefix + '-comments-wrap');

	    if ($innerWrapper.height() + 100 > $(window).height()) {
	      $wrapper.addClass('align-top');
	    }
	    if (isLastChildComment) {
	      children.eq(children.length - 2).addClass('no-border');
	    }
	    $wrapper.on('click', function (e) {
	      if (e.target === $wrapper[0]) {
	        $.magnificPopup.close();
	      }
	    });
	  }

	  var ua = window.navigator.userAgent.toLowerCase(),
	      version = window.navigator.appVersion,
	      $content = $('.' + globalClassPrefix + '-content');

	  isMobile && $content.addClass(globalClassPrefix + '-mobile');
	  (ua.indexOf('MSIE') >= 0 || version.indexOf('Trident/') > 0) && $content.addClass(globalClassPrefix + '-modern-ie');
	  ua.indexOf('android') >= 0 && $content.addClass(globalClassPrefix + '-android');
	  ua.indexOf('firefox') >= 0 && $content.addClass(globalClassPrefix + '-firefox');
	  ua.indexOf('chrome') >= 0 && $content.addClass(globalClassPrefix + '-chrome');
	  ua.indexOf('chrome') >= 0 && ua.indexOf('version/1.5') >= 0 && $content.addClass(globalClassPrefix + '-legend-chrome');
	  ua.indexOf('chrome') >= 0 && ua.indexOf('version/1.5') === -1 && $content.addClass(globalClassPrefix + '-modern-chrome');
	};
	/**
	 * Prev/Next Buttons
	 *
	 * @param {{}} $parent JQuery DOM into insert the prev and next button
	 * @param {{}} tile
	 * @param {Number} widgetId
	 */
	function renderNavs($parent, tile, widgetId, widgetSetting) {
	  var widget = getWidgetInstanceByWidgetId(widgetId);
	  var widgetStyleName = _lodash2.default.get(widgetSetting, 'style.style');
	  var classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName);

	  function preview(id) {
	    if (id) {
	      widget.performAction('initComplete', {
	        lightbox_id: 'ct_' + id
	      });
	    }
	  }

	  var $btnPrev = $parent.find('.' + classPrefix + '-arrow-left');
	  if (!tile.isFirstTile) {
	    $parent.find('.' + classPrefix + '-arrow-left').on('click', function () {
	      widget.getPreviousTileIdByCurrentTileId(tile.id).then(preview);
	    });
	  } else {
	    $btnPrev.hide();
	  }
	  var $btnNext = $parent.find('.' + classPrefix + '-arrow-right');
	  if (!tile.isLastTile) {
	    $btnNext.on('click', function () {
	      widget.getNextTileIdByCurrentTileId(tile.id).then(function (nextTileId) {
	        if (!nextTileId) {
	          $btnNext.hide();
	        } else {
	          preview(nextTileId);
	        }
	      });
	    });
	  } else {
	    $btnNext.hide();
	  }
	}
	function renderSharingAttrs(data) {
	  var attrs = {
	    'data-id': data.id,
	    'widget-id': data.widget_id
	  };
	  if (data.title) {
	    attrs['data-title'] = (0, _util.stripHtmlTags)(data.title);
	  }

	  var title = data.title || '';
	  if (data.apply_custom_sharing_title_on_miss_title) {
	    title = title || data.sharing_title;
	  } else {
	    title = data.sharing_title || title;
	  }
	  attrs['data-title'] = (0, _util.stripHtmlTags)(title);

	  if (data.image) {
	    attrs['data-image'] = data.image.replace(/^https:/, 'http:');
	  }
	  if (data.message) {
	    attrs['data-message'] = (0, _util.stripHtmlTags)(data.message);
	  }
	  if (data.sharing_text !== 'undefined' && data.sharing_text) {
	    attrs['data-message'] = (0, _util.stripHtmlTags)(data.sharing_text.replace('{{message}}', data.message));
	  }
	  if (data.share_text) {
	    attrs['data-message'] = (0, _util.stripHtmlTags)(data.share_text);
	  }
	  $('body').data('shareLinkAttributes', attrs);
	}
	renderShopspots = function renderShopspots($wrapper, t, widgetId, appearance, filterId, widgetSetting) {
	  var styleName = _lodash2.default.get(widgetSetting, 'style.style');
	  var classPrefix = (0, _util2.getClassNamePrefix)(styleName);
	  var shopspotFlyoutTemplate = {
	    base_quadrant: _shopspotFlyout2.default,
	    base_slider: _shopspotFlyout4.default
	  };

	  var tagla = new _importsLoader$$tacklaTagla2.default($('.' + classPrefix + '-image-loading'), {
	    debug: true,
	    editor: false,
	    data: t.shopspots,
	    unit: 'percent',
	    namespace: classPrefix,
	    tagTemplate: shopspotFlyoutTemplate[styleName],
	    term: 'shopspot'
	  });

	  tagla.render();

	  renderShopspotsInner($wrapper, appearance, classPrefix, widgetSetting);

	  // Bind Events
	  $wrapper.on('click', '.' + classPrefix + '-shopspot-flyout-button', function (e) {
	    var $el = $(e.currentTarget),
	        data = $el.parents('.' + classPrefix + '-shopspot').data('tagData'),
	        widgetNode = getWidgetInstanceByWidgetId(widgetId);

	    widgetNode.emit('shopspotActionClick', {
	      productTag: data.product,
	      tileData: currentPopupParams.t,
	      filterId: filterId,
	      widgetId: widgetId
	    });
	  });

	  tagla.on('hover', function (e, $el) {
	    var data = $el.data('tagData'),
	        widgetNode = getWidgetInstanceByWidgetId(widgetId);

	    data = {
	      productTag: data.product,
	      tileData: currentPopupParams.t,
	      filterId: filterId,
	      widgetId: widgetId
	    };

	    widgetNode.emit('shopspotFlyoutExpand', data);
	  });

	  return tagla;
	};
	// Render the Appearance Setting style for shopspot icon and flyout
	renderShopspotsInner = function renderShopspotsInner($wrapper, appearance, classPrefix, widgetSetting) {
	  var $shopspot = $wrapper.find('.' + classPrefix + '-shopspot'),
	      $icon = $wrapper.find('.' + classPrefix + '-shopspot-icon'),
	      $button = $wrapper.find('.' + classPrefix + '-shopspot-flyout-button'),
	      $text = $wrapper.find('.' + classPrefix + '-shopspot-flyout-button-text'),
	      bgcolor = appearance.shopspot_btn_background || SHOPSPOT_BTN_BACKGROUND,
	      color = appearance.shopspot_btn_font_color || SHOPSPOT_BTN_TEXT_COLOR,
	      image = appearance.shopspot_icon;

	  // Trim color
	  bgcolor = bgcolor.replace('#', '');
	  color = color.replace('#', '');

	  var isImage = !!image;
	  var widgetType = _lodash2.default.get(widgetSetting, 'style.style');

	  if (isImage) {
	    $shopspot.addClass('image');
	    $icon.addClass('image');
	  }

	  if (widgetType === 'base_nightfall') {
	    if (!isImage) {
	      $icon.css({
	        'box-shadow': '0 0 0 10px #' + bgcolor,
	        'background-color': '#' + color
	      });
	      return;
	    }

	    if (isImage) {
	      $shopspot.css({
	        'background-color': 'transparent',
	        'box-shadow': 'none',
	        'border-radius': '0',
	        padding: 0
	      });
	      $icon.css({
	        background: 'transparent url(' + image + ') center no-repeat',
	        'background-size': 'contain',
	        'border-radius': '0',
	        'box-shadow': 'none',
	        animation: 'none',
	        transform: 'none',
	        padding: '0',
	        width: '100%',
	        height: '100%'
	      });
	    }
	    return;
	  }

	  // Shopspot icon image
	  if (image) {
	    $shopspot.css({
	      'background-color': 'transparent',
	      'box-shadow': 'none',
	      'border-radius': '0',
	      padding: 0
	    });
	    $icon.css({
	      background: 'transparent url(' + image + ') center no-repeat',
	      'background-size': 'contain',
	      'border-radius': '0',
	      padding: '0',
	      width: '100%',
	      height: '100%'
	    });
	    $shopspot.addClass('image');
	    $icon.addClass('image');
	  }
	};

	module.exports = function () {
	  var create = function create(t, options, widgetId, tileId, videoHtml, permission, productsHtml, shopspotsEnabled, uniqueId, widgetNodeList, styleName, appearance, filterId, focusOn, widgetSetting) {
	    // Assign to global variable
	    currentExpandedTileUniqueId = uniqueId;
	    widgetNodes = widgetNodeList;

	    var data = Decorator.decorate.apply(null, arguments),
	        widgetNode = getWidgetInstanceByWidgetId(widgetId),
	        ratio,
	        $el;

	    if (!widgetNode) {
	      return;
	    }

	    if (data.source === 'instagram' && data.media === 'video') {
	      // business account's video won't expire
	      if (!data.term_meta.find(function (term) {
	        return term.type === 'business';
	      })) {
	        data.show_facebook_video = true; // nightfall's implemetation
	        data.is_unknown_video = true;
	        data.dimensions = undefined;
	        data.embedly = undefined;
	        data.show_video = true;
	        data.show_embed = false;
	        data.is_mp4 = false;
	        data.embed_html = '';
	        data.embed_data = undefined;
	      }
	    }

	    // Get image wrapper max width
	    if (data.media === 'image') {
	      ratio = data.max_image_width / data.max_image_height;
	      data.max_image_wrapper_width = $(window).height() * ratio;
	    }

	    // Save P3P information
	    if (widgetNode && widgetNode.dataUserName) {
	      data.comment_username = widgetNode.dataUserName;
	      data.has_comment_permission = permission && !permission.parent_page_ext_username ? false : true;
	    }

	    // Slider Widget only data
	    if (data.template_name === 'base_slider') {
	      data.products_count_minus_3 = data.products.length - 3;
	      data.products_count_more_then_4 = data.products.length > 4;
	    }
	    // Create Tile DOM
	    $el = $(TEMPLATE[data.template_name](data));

	    // Trigger BEFORE callback
	    _expandedTileCallbacks2.default.onBeforeExpandedTileOpen(widgetId, $el, data);

	    widgetNode.emit('beforeExpandedTileOpen', {
	      el: $el[0],
	      tileData: data
	    }, function () {
	      var styleName = _lodash2.default.get(widgetSetting, 'style.style');
	      var classPrefix = (0, _util2.getClassNamePrefix)(styleName);

	      // Open MagnificPopup
	      show($el, options, data, widgetId, appearance, filterId, widgetSetting);

	      // Bind events
	      bind($el, data, widgetId, filterId, widgetSetting);

	      // Render
	      render($el, data, widgetId, widgetSetting);

	      if (focusOn === 'comment') {
	        $el.find(['.' + classPrefix + '-interaction-comment', '.' + classPrefix + '-interaction-comment .' + classPrefix + '-interaction-link'].join(',')).click();

	        setTimeout(function () {
	          $el.find('.' + classPrefix + '-comments-user-textarea').focus();
	        }, 300);
	      }

	      // Trigger the AFTER callback
	      _expandedTileCallbacks2.default.onAfterExpandedTileOpen(widgetId);

	      widgetNode.emit('expandedTileOpen', {
	        el: $el[0],
	        tileData: data
	      });
	    });
	  };

	  return $.extend({
	    create: create,
	    getComments: getComments,
	    popupFunctions: bind,
	    showPopup: show,
	    bind: bind,
	    render: render,
	    open: show
	  }, _expandedTileCallbacks2.default);
	}();


/***/ },
/* 51 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var $ = $tackla;

	// Magnific Popup v0.9.9 by Dmitry Semenov
	// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick
	(function (a) {
	    var b = "Close",
	        c = "BeforeClose",
	        d = "AfterClose",
	        e = "BeforeAppend",
	        f = "MarkupParse",
	        g = "Open",
	        h = "Change",
	        i = "stacklapopup",
	        j = "." + i,
	        k = "stacklapopup-ready",
	        l = "stacklapopup-removing",
	        m = "stacklapopup-prevent-close",
	        n, o = function () {},
	        p = !!window.jQuery,
	        q, r = a(window),
	        s, t, u, v, w, x = function (a, b) {
	            n.ev.on(i + a + j, b)
	        },
	        y = function (b, c, d, e) {
	            var f = document.createElement("div");
	            return f.className = "stacklapopup-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
	        },
	        z = function (b, c) {
	            n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
	        },
	        A = function (b) {
	            if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
	            return n.currTemplate.closeBtn
	        },
	        B = function () {
	            a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
	        },
	        C = function () {
	            var a = document.createElement("p").style,
	                b = ["ms", "O", "Moz", "Webkit"];
	            if (a.transition !== undefined) return !0;
	            while (b.length)
	                if (b.pop() + "Transition" in a) return !0;
	            return !1
	        };
	    o.prototype = {
	        constructor: o,
	        init: function () {
	            var b = navigator.appVersion;
	            n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), s = a(document.body), t = a(document), n.popupsCache = {}
	        },
	        open: function (b) {
	            var c;
	            if (b.isObj === !1) {
	                n.items = b.items.toArray(), n.index = 0;
	                var d = b.items,
	                    e;
	                for (c = 0; c < d.length; c++) {
	                    e = d[c], e.parsed && (e = e.el[0]);
	                    if (e === b.el[0]) {
	                        n.index = c;
	                        break
	                    }
	                }
	            } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0; if (n.isOpen) {
	                n.updateItemHTML();
	                return
	            }
	            n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function () {
	                n.close()
	            }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function (a) {
	                n._checkIfClose(a.target) && n.close()
	            }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
	            var h = a.magnificPopup.modules;
	            for (c = 0; c < h.length; c++) {
	                var i = h[c];
	                i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
	            }
	            z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function (a, b, c, d) {
	                c.close_replaceWith = A(d.type)
	            }), v += " stacklapopup-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " stacklapopup-align-top"), n.fixedContentPos ? n.wrap.css({
	                overflow: n.st.overflowY,
	                overflowX: "hidden",
	                overflowY: n.st.overflowY
	            }) : n.wrap.css({
	                top: r.scrollTop(),
	                position: "absolute"
	            }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
	                height: t.height(),
	                position: "absolute"
	            }), n.st.enableEscapeKey && t.on("keyup" + j, function (a) {
	                a.keyCode === 27 && n.close()
	            }), r.on("resize" + j, function () {
	                n.updateSize()
	            }), n.st.closeOnContentClick || (v += " stacklapopup-auto-cursor"), v && n.wrap.addClass(v);
	            var l = n.wH = r.height(),
	                m = {};
	            if (n.fixedContentPos && n._hasScrollBar(l)) {
	                var o = n._getScrollbarSize();
	                o && (m.marginRight = o)
	            }
	            n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
	            var p = n.st.mainClass;
	            return n.isIE7 && (p += " stacklapopup-ie7"), p && n._addClassTostacklapopup(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(document.body), n._lastFocusedEl = document.activeElement, setTimeout(function () {
	                n.content ? (n._addClassTostacklapopup(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
	            }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
	        },
	        close: function () {
	            if (!n.isOpen) return;
	            z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassTostacklapopup(l), setTimeout(function () {
	                n._close()
	            }, n.st.removalDelay)) : n._close()
	        },
	        _close: function () {
	            z(b);
	            var c = l + " " + k + " ";
	            n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromstacklapopup(c);
	            if (n.fixedContentPos) {
	                var e = {
	                    marginRight: ""
	                };
	                n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
	            }
	            t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "stacklapopup-wrap").removeAttr("style"), n.bgOverlay.attr("class", "stacklapopup-bg"), n.container.attr("class", "stacklapopup-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
	        },
	        updateSize: function (a) {
	            if (n.isIOS) {
	                var b = document.documentElement.clientWidth / window.innerWidth,
	                    c = window.innerHeight * b;
	                n.wrap.css("height", c), n.wH = c
	            } else n.wH = a || r.height();
	            n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
	        },
	        updateItemHTML: function () {
	            var b = n.items[n.index];
	            n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
	            var c = b.type;
	            z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
	            if (!n.currTemplate[c]) {
	                var d = n.st[c] ? n.st[c].markup : !1;
	                z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
	            }
	            u && u !== b.type && n.container.removeClass("stacklapopup-" + u + "-holder");
	            var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
	            n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
	        },
	        appendContent: function (a, b) {
	            n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".stacklapopup-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("stacklapopup-" + b + "-holder"), n.contentContainer.append(n.content)
	        },
	        parseEl: function (b) {
	            var c = n.items[b],
	                d = c.type;
	            c.tagName ? c = {
	                el: a(c)
	            } : c = {
	                data: c,
	                src: c.src
	            };
	            if (c.el) {
	                var e = n.types;
	                for (var f = 0; f < e.length; f++)
	                    if (c.el.hasClass("stacklapopup-" + e[f])) {
	                        d = e[f];
	                        break
	                    }
	                c.src = c.el.attr("data-stacklapopup-src"), c.src || (c.src = c.el.attr("href"))
	            }
	            return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
	        },
	        addGroup: function (a, b) {
	            var c = function (c) {
	                c.stacklapopupEl = this, n._openClick(c, a, b)
	            };
	            b || (b = {});
	            var d = "click.magnificPopup";
	            b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
	        },
	        _openClick: function (b, c, d) {
	            var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
	            if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return;
	            var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
	            if (f)
	                if (a.isFunction(f)) {
	                    if (!f.call(n)) return !0
	                } else if (r.width() < f) return !0;
	            b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.stacklapopupEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
	        },
	        updateStatus: function (a, b) {
	            if (n.preloader) {
	                q !== a && n.container.removeClass("stacklapopup-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
	                var c = {
	                    status: a,
	                    text: b
	                };
	                z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) {
	                    a.stopImmediatePropagation()
	                }), n.container.addClass("stacklapopup-s-" + a), q = a
	            }
	        },
	        _checkIfClose: function (b) {
	            if (a(b).hasClass(m)) return;
	            var c = n.st.closeOnContentClick,
	                d = n.st.closeOnBgClick;
	            if (c && d) return !0;
	            if (!n.content || a(b).hasClass("stacklapopup-close") || n.preloader && b === n.preloader[0]) return !0;
	            if (b !== n.content[0] && !a.contains(n.content[0], b)) {
	                if (d && a.contains(document, b)) return !0
	            } else if (c) return !0;
	            return !1
	        },
	        _addClassTostacklapopup: function (a) {
	            n.bgOverlay.addClass(a), n.wrap.addClass(a)
	        },
	        _removeClassFromstacklapopup: function (a) {
	            this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
	        },
	        _hasScrollBar: function (a) {
	            return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
	        },
	        _setFocus: function () {
	            (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
	        },
	        _onFocusIn: function (b) {
	            if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1
	        },
	        _parseMarkup: function (b, c, d) {
	            var e;
	            d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function (a, c) {
	                if (c === undefined || c === !1) return !0;
	                e = a.split("_");
	                if (e.length > 1) {
	                    var d = b.find(j + "-" + e[0]);
	                    if (d.length > 0) {
	                        var f = e[1];
	                        f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
	                    }
	                } else b.find(j + "-" + a).html(c)
	            })
	        },
	        _getScrollbarSize: function () {
	            if (n.scrollbarSize === undefined) {
	                var a = document.createElement("div");
	                a.id = "stacklapopup-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
	            }
	            return n.scrollbarSize
	        }
	    }, a.magnificPopup = {
	        instance: null,
	        proto: o.prototype,
	        modules: [],
	        open: function (b, c) {
	            return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
	        },
	        close: function () {
	            return a.magnificPopup.instance && a.magnificPopup.instance.close()
	        },
	        registerModule: function (b, c) {
	            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
	        },
	        defaults: {
	            disableOn: 0,
	            key: null,
	            midClick: !1,
	            mainClass: "",
	            preloader: !0,
	            focus: "",
	            closeOnContentClick: !1,
	            closeOnBgClick: !0,
	            closeBtnInside: !0,
	            showCloseBtn: !0,
	            enableEscapeKey: !0,
	            modal: !1,
	            alignTop: !1,
	            removalDelay: 0,
	            fixedContentPos: "auto",
	            fixedBgPos: "auto",
	            overflowY: "auto",
	            closeMarkup: '<button title="%title%" type="button" class="stacklapopup-close">&times;</button>',
	            tClose: "Close (Esc)",
	            tLoading: "Loading..."
	        }
	    }, a.fn.magnificPopup = function (b) {
	        B();
	        var c = a(this);
	        if (typeof b == "string")
	            if (b === "open") {
	                var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup,
	                    f = parseInt(arguments[1], 10) || 0;
	                e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({
	                    stacklapopupEl: d
	                }, c, e)
	            } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
	        else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
	        return c
	    };
	    var D = "inline",
	        E, F, G, H = function () {
	            G && (F.after(G.addClass(E)).detach(), G = null)
	        };
	    a.magnificPopup.registerModule(D, {
	        options: {
	            hiddenClass: "hide",
	            markup: "",
	            tNotFound: "Content not found"
	        },
	        proto: {
	            initInline: function () {
	                n.types.push(D), x(b + "." + D, function () {
	                    H()
	                })
	            },
	            getInline: function (b, c) {
	                H();
	                if (b.src) {
	                    var d = n.st.inline,
	                        e = a(b.src);
	                    if (e.length) {
	                        var f = e[0].parentNode;
	                        f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "stacklapopup-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready")
	                    } else n.updateStatus("error", d.tNotFound), e = a("<div>");
	                    return b.inlineElement = e, e
	                }
	                return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
	            }
	        }
	    });
	    var I = "ajax",
	        J, K = function () {
	            J && s.removeClass(J)
	        },
	        L = function () {
	            K(), n.req && n.req.abort()
	        };
	    a.magnificPopup.registerModule(I, {
	        options: {
	            settings: null,
	            cursor: "stacklapopup-ajax-cur",
	            tError: '<a href="%url%">The content</a> could not be loaded.'
	        },
	        proto: {
	            initAjax: function () {
	                n.types.push(I), J = n.st.ajax.cursor, x(b + "." + I, L), x("BeforeChange." + I, L)
	            },
	            getAjax: function (b) {
	                J && s.addClass(J), n.updateStatus("loading");
	                var c = a.extend({
	                    url: b.src,
	                    success: function (c, d, e) {
	                        var f = {
	                            data: c,
	                            xhr: e
	                        };
	                        z("ParseAjax", f), n.appendContent(a(f.data), I), b.finished = !0, K(), n._setFocus(), setTimeout(function () {
	                            n.wrap.addClass(k)
	                        }, 16), n.updateStatus("ready"), z("AjaxContentAdded")
	                    },
	                    error: function () {
	                        K(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
	                    }
	                }, n.st.ajax.settings);
	                return n.req = a.ajax(c), ""
	            }
	        }
	    });
	    var M, N = function (b) {
	        if (b.data && b.data.title !== undefined) return b.data.title;
	        var c = n.st.image.titleSrc;
	        if (c) {
	            if (a.isFunction(c)) return c.call(n, b);
	            if (b.el) return b.el.attr(c) || ""
	        }
	        return ""
	    };
	    a.magnificPopup.registerModule("image", {
	        options: {
	            markup: '<div class="stacklapopup-figure"><div class="stacklapopup-close"></div><figure><div class="stacklapopup-img"></div><figcaption><div class="stacklapopup-bottom-bar"><div class="stacklapopup-title"></div><div class="stacklapopup-counter"></div></div></figcaption></figure></div>',
	            cursor: "stacklapopup-zoom-out-cur",
	            titleSrc: "title",
	            verticalFit: !0,
	            tError: '<a href="%url%">The image</a> could not be loaded.'
	        },
	        proto: {
	            initImage: function () {
	                var a = n.st.image,
	                    c = ".image";
	                n.types.push("image"), x(g + c, function () {
	                    n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
	                }), x(b + c, function () {
	                    a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
	                }), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
	            },
	            resizeImage: function () {
	                var a = n.currItem;
	                if (!a || !a.img) return;
	                if (n.st.image.verticalFit) {
	                    var b = 0;
	                    n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
	                }
	            },
	            _onImageHasSize: function (a) {
	                a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("stacklapopup-loading"), a.imgHidden = !1))
	            },
	            findImageSize: function (a) {
	                var b = 0,
	                    c = a.img[0],
	                    d = function (e) {
	                        M && clearInterval(M), M = setInterval(function () {
	                            if (c.naturalWidth > 0) {
	                                n._onImageHasSize(a);
	                                return
	                            }
	                            b > 200 && clearInterval(M), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
	                        }, e)
	                    };
	                d(1)
	            },
	            getImage: function (b, c) {
	                var d = 0,
	                    e = function () {
	                        b && (b.img[0].complete ? (b.img.off(".stacklapopuploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
	                    },
	                    f = function () {
	                        b && (b.img.off(".stacklapopuploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
	                    },
	                    g = n.st.image,
	                    h = c.find(".stacklapopup-img");
	                if (h.length) {
	                    var i = document.createElement("img");
	                    i.className = "stacklapopup-img", b.img = a(i).on("load.stacklapopuploader", e).on("error.stacklapopuploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), b.img[0].naturalWidth > 0 && (b.hasSize = !0)
	                }
	                return n._parseMarkup(c, {
	                    title: N(b),
	                    img_replaceWith: b.img
	                }, b), n.resizeImage(), b.hasSize ? (M && clearInterval(M), b.loadError ? (c.addClass("stacklapopup-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("stacklapopup-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("stacklapopup-loading"), n.findImageSize(b)), c)
	            }
	        }
	    });
	    var O, P = function () {
	        return O === undefined && (O = document.createElement("p").style.MozTransform !== undefined), O
	    };
	    a.magnificPopup.registerModule("zoom", {
	        options: {
	            enabled: !1,
	            easing: "ease-in-out",
	            duration: 300,
	            opener: function (a) {
	                return a.is("img") ? a : a.find("img")
	            }
	        },
	        proto: {
	            initZoom: function () {
	                var a = n.st.zoom,
	                    d = ".zoom",
	                    e;
	                if (!a.enabled || !n.supportsTransition) return;
	                var f = a.duration,
	                    g = function (b) {
	                        var c = b.clone().removeAttr("style").removeAttr("class").addClass("stacklapopup-animated-image"),
	                            d = "all " + a.duration / 1e3 + "s " + a.easing,
	                            e = {
	                                position: "fixed",
	                                zIndex: 9999,
	                                left: 0,
	                                top: 0,
	                                "-webkit-backface-visibility": "hidden"
	                            },
	                            f = "transition";
	                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
	                    },
	                    h = function () {
	                        n.content.css("visibility", "visible")
	                    },
	                    i, j;
	                x("BuildControls" + d, function () {
	                    if (n._allowZoom()) {
	                        clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
	                        if (!e) {
	                            h();
	                            return
	                        }
	                        j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {
	                            j.css(n._getOffset(!0)), i = setTimeout(function () {
	                                h(), setTimeout(function () {
	                                    j.remove(), e = j = null, z("ZoomAnimationEnded")
	                                }, 16)
	                            }, f)
	                        }, 16)
	                    }
	                }), x(c + d, function () {
	                    if (n._allowZoom()) {
	                        clearTimeout(i), n.st.removalDelay = f;
	                        if (!e) {
	                            e = n._getItemToZoom();
	                            if (!e) return;
	                            j = g(e)
	                        }
	                        j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () {
	                            j.css(n._getOffset())
	                        }, 16)
	                    }
	                }), x(b + d, function () {
	                    n._allowZoom() && (h(), j && j.remove(), e = null)
	                })
	            },
	            _allowZoom: function () {
	                return n.currItem.type === "image"
	            },
	            _getItemToZoom: function () {
	                return n.currItem.hasSize ? n.currItem.img : !1
	            },
	            _getOffset: function (b) {
	                var c;
	                b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
	                var d = c.offset(),
	                    e = parseInt(c.css("padding-top"), 10),
	                    f = parseInt(c.css("padding-bottom"), 10);
	                d.top -= a(window).scrollTop() - e;
	                var g = {
	                    width: c.width(),
	                    height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e
	                };
	                return P() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
	            }
	        }
	    });
	    var Q = "iframe",
	        R = "//about:blank",
	        S = function (a) {
	            if (n.currTemplate[Q]) {
	                var b = n.currTemplate[Q].find("iframe");
	                b.length && (a || (b[0].src = R), n.isIE8 && b.css("display", a ? "block" : "none"))
	            }
	        };
	    a.magnificPopup.registerModule(Q, {
	        options: {
	            markup: '<div class="stacklapopup-iframe-scaler"><div class="stacklapopup-close"></div><iframe class="stacklapopup-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
	            srcAction: "iframe_src",
	            patterns: {
	                gmaps: {
	                    index: "//maps.google.",
	                    src: "%id%&output=embed"
	                }
	            }
	        },
	        proto: {
	            initIframe: function () {
	                n.types.push(Q), x("BeforeChange", function (a, b, c) {
	                    b !== c && (b === Q ? S() : c === Q && S(!0))
	                }), x(b + "." + Q, function () {
	                    S()
	                })
	            },
	            getIframe: function (b, c) {
	                var d = b.src,
	                    e = n.st.iframe;
	                a.each(e.patterns, function () {
	                    if (d.indexOf(this.index) > -1) return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
	                });
	                var f = {};
	                return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
	            }
	        }
	    });
	    var T = function (a) {
	            var b = n.items.length;
	            return a > b - 1 ? a - b : a < 0 ? b + a : a
	        },
	        U = function (a, b, c) {
	            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
	        };
	    a.magnificPopup.registerModule("gallery", {
	        options: {
	            enabled: !1,
	            arrowMarkup: '<button title="%title%" type="button" class="stacklapopup-arrow stacklapopup-arrow-%dir%"></button>',
	            preload: [0, 2],
	            navigateByImgClick: !0,
	            arrows: !0,
	            tPrev: "Previous (Left arrow key)",
	            tNext: "Next (Right arrow key)",
	            tCounter: "%curr% of %total%"
	        },
	        proto: {
	            initGallery: function () {
	                var c = n.st.gallery,
	                    d = ".stacklapopup-gallery",
	                    e = Boolean(a.fn.stacklapopupFastClick);
	                n.direction = !0;
	                if (!c || !c.enabled) return !1;
	                v += " stacklapopup-gallery", x(g + d, function () {
	                    c.navigateByImgClick && n.wrap.on("click" + d, ".stacklapopup-img", function () {
	                        if (n.items.length > 1) return n.next(), !1
	                    }), t.on("keydown" + d, function (a) {
	                        a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
	                    })
	                }), x("UpdateStatus" + d, function (a, b) {
	                    b.text && (b.text = U(b.text, n.currItem.index, n.items.length))
	                }), x(f + d, function (a, b, d, e) {
	                    var f = n.items.length;
	                    d.counter = f > 1 ? U(c.tCounter, e.index, f) : ""
	                }), x("BuildControls" + d, function () {
	                    if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
	                        var b = c.arrowMarkup,
	                            d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m),
	                            f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m),
	                            g = e ? "stacklapopupFastClick" : "click";
	                        d[g](function () {
	                            n.prev()
	                        }), f[g](function () {
	                            n.next()
	                        }), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
	                    }
	                }), x(h + d, function () {
	                    n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {
	                        n.preloadNearbyImages(), n._preloadTimeout = null
	                    }, 16)
	                }), x(b + d, function () {
	                    t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroystacklapopupFastClick(), n.arrowRight = n.arrowLeft = null
	                })
	            },
	            next: function () {
	                n.direction = !0, n.index = T(n.index + 1), n.updateItemHTML()
	            },
	            prev: function () {
	                n.direction = !1, n.index = T(n.index - 1), n.updateItemHTML()
	            },
	            goTo: function (a) {
	                n.direction = a >= n.index, n.index = a, n.updateItemHTML()
	            },
	            preloadNearbyImages: function () {
	                var a = n.st.gallery.preload,
	                    b = Math.min(a[0], n.items.length),
	                    c = Math.min(a[1], n.items.length),
	                    d;
	                for (d = 1; d <= (n.direction ? c : b); d++) n._preloadItem(n.index + d);
	                for (d = 1; d <= (n.direction ? b : c); d++) n._preloadItem(n.index - d)
	            },
	            _preloadItem: function (b) {
	                b = T(b);
	                if (n.items[b].preloaded) return;
	                var c = n.items[b];
	                c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="stacklapopup-img" />').on("load.stacklapopuploader", function () {
	                    c.hasSize = !0
	                }).on("error.stacklapopuploader", function () {
	                    c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
	                }).attr("src", c.src)), c.preloaded = !0
	            }
	        }
	    });
	    var V = "retina";
	    a.magnificPopup.registerModule(V, {
	        options: {
	            replaceSrc: function (a) {
	                return a.src.replace(/\.\w+$/, function (a) {
	                    return "@2x" + a
	                })
	            },
	            ratio: 1
	        },
	        proto: {
	            initRetina: function () {
	                if (window.devicePixelRatio > 1) {
	                    var a = n.st.retina,
	                        b = a.ratio;
	                    b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + V, function (a, c) {
	                        c.img.css({
	                            "max-width": c.img[0].naturalWidth / b,
	                            width: "100%"
	                        })
	                    }), x("ElementParse." + V, function (c, d) {
	                        d.src = a.replaceSrc(d, b)
	                    }))
	                }
	            }
	        }
	    }),
	    function () {
	        var b = 1e3,
	            c = "ontouchstart" in window,
	            d = function () {
	                r.off("touchmove" + f + " touchend" + f)
	            },
	            e = "stacklapopupFastClick",
	            f = "." + e;
	        a.fn.stacklapopupFastClick = function (e) {
	            return a(this).each(function () {
	                var g = a(this),
	                    h;
	                if (c) {
	                    var i, j, k, l, m, n;
	                    g.on("touchstart" + f, function (a) {
	                        l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function (a) {
	                            m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
	                            if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) l = !0, d()
	                        }).on("touchend" + f, function (a) {
	                            d();
	                            if (l || n > 1) return;
	                            h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
	                                h = !1
	                            }, b), e()
	                        })
	                    })
	                }
	                g.on("click" + f, function () {
	                    h || e()
	                })
	            })
	        }, a.fn.destroystacklapopupFastClick = function () {
	            a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
	        }
	    }(), B()
	})(window.$tackla || window.Zepto);




/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	var $ = $tackla;

	/* global $, Draggabilly, define */
	'use strict';

	var Mustache = __webpack_require__(53),
	  AlignMe = __webpack_require__(54),
	  Stackla = __webpack_require__(55),
	  Base = __webpack_require__(56),
	  ImageSize = __webpack_require__(57),
	  Tagla,
	  ATTRS;

	ATTRS = {
	  NAME: 'Tagla',
	  FORM_TEMPLATE: [
	    '<div class="{{tag_class_name}}-form-wrapper">',
	    '    <form class="{{tag_class_name}}-form">',
	    '        <div class="{{tag_class_name}}-form-title">',
	    '            Select Your Product',
	    '            <a href="javascript:void(0);" class="{{tag_class_name}}-form-close">×</a>',
	    '        </div>',
	    '        {{#has_product_tags}}',
	    '        <input type="hidden" name="x">',
	    '        <input type="hidden" name="y">',
	    '        <select class="{{tag_class_name}}-select"',
	    '            data-uikit="xelect2"',
	    '            data-category="tag"',
	    '            data-type="product"',
	    '            data-stack="{{stack}}"',
	    '            data-search-placeholder="Search...">',
	    '            <option></option>',
	    '        </select>',
	    '        {{/has_product_tags}}',
	    '        {{^has_product_tags}}',
	    '        <div class="{{tag_class_name}}-form-empty">',
	    '            <div class="st-title st-title-h5">No Product Tags available </div>',
	    '            Go to <a href="/{{stack_short_name}}/admin/ecommerce" target="_blank">Social Commerce</a>',
	    '            and tap "Create Product Tag" to get started',
	    '        </div>',
	    '        {{/has_product_tags}}',
	    '    </form>',
	    '</div>'
	  ].join('\n'),
	  TAG_TEMPLATE: [
	    '<div class="{{tag_class_name}}">',
	    '    <i class="{{tag_class_name}}-icon fs fs-tag2"></i>',
	    '    <div class="{{tag_class_name}}-flyout">',
	    '    {{#product}}',
	    '        {{#image_small_url}}',
	    '        <div class="{{tag_class_name}}-flyout-image">',
	    '          <img src="{{image_small_url}}">',
	    '        </div>',
	    '        {{/image_small_url}}',
	    '        <div class="{{tag_class_name}}-flyout-text">',
	    '          <div class="{{tag_class_name}}-flyout-actions">',
	    '            <a href="javascript:void(0)"',
	    '               class="{{tag_class_name}}-flyout-link {{tag_class_name}}-flyout-edit-link">',
	    '              <i class="{{tag_class_name}}-flyout-delete-icon fs fs-pencil"></i> Edit',
	    '            </a>',
	    '            <a href="javascript:void(0)"',
	    '               class="{{tag_class_name}}-flyout-link {{tag_class_name}}-flyout-delete-link">',
	    '              <i class="{{tag_class_name}}-flyout-delete-icon fs fs-cross3"></i> Delete',
	    '            </a>',
	    '          </div>',
	    '          <h2 class="{{tag_class_name}}-flyout-title">{{tag}}</h2>',
	    '          {{#price}}',
	    '          <div class="{{tag_class_name}}-flyout-price">{{price}}</div>',
	    '          {{/price}}',
	    '          {{#description}}',
	    '          <p class="{{tag_class_name}}-flyout-description">{{description}}</p>',
	    '          {{/description}}',
	    '          {{#custom_url}}',
	    '          <a href="{{custom_url}}" class="{{tag_class_name}}-flyout-button"',
	    '              target="{{target}}">',
	    '              <i class="{{tag_class_name}}-flyout-button-icon fs fs-cart"></i>',
	    '              <span class="{{tag_class_name}}-flyout-button-text">{{cta_text}}</span>',
	    '          </a>',
	    '          {{/custom_url}}',
	    '        </div>',
	    '        <a class="{{tag_class_name}}-flyout-close-link" href="javascript:void(0);">&#8592;</a>',
	    '    {{/product}}',
	    '    </div>',
	    '    {{{form_html}}}',
	    '</div>'
	  ].join('\n'),
	  NEW_TAG_TEMPLATE: [
	    '<div class="{{tag_class_name}}">',
	    '    <i class="{{tag_class_name}}-icon fs fs-tag2"></i>',
	    '</div>'
	  ].join('\n')
	};

	Tagla = Stackla.createClass(
	  Base,
	  {
	    toString: function() {
	      return 'Tagla';
	    },
	    //===================
	    // Lifecycle Methods
	    //===================
	    initializer: function($wrapper, options) {
	      var that = this;

	      options = options || {};

	      that.$wrapper = $($wrapper);
	      that.init(options);
	      that.bind();
	    },
	    init: function(options) {
	      var that = this;

	      that.log('init() is executed');

	      // [{id: "556d29448ead0e9d348b4569", label: 'adidas', product: {}, value: 0, x: 0, y: 0}]
	      that.data = options.data || [];
	      that.editor = options.editor === true ? true : false; // editable
	      that.formHtml = options.form ? $(options.form) : $(Tagla.FORM_TEMPLATE);
	      that.formHtml = that.formHtml.html();
	      that.formHtml = options.editor ? that.formHtml : '';
	      that.tagTemplate = options.tagTemplate
	        ? options.tagTemplate
	        : Tagla.TAG_TEMPLATE; // Includes form
	      that.unit = options.unit === 'percent' ? 'percent' : 'pixel';
	      that.imageSize = null; // Current image dimension
	      that.image = that.$wrapper.find('img');
	      that.lastDragTime = new Date();
	      that.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	        navigator.userAgent
	      );

	      if (!that.image.length) {
	        console.error(that.$wrapper, that.image);
	        return;
	      }

	      // .tagla-tag
	      that.namespace = options.namespace || 'tagla';
	      that.term = options.term || 'tag';
	      that.wrapperClass = [that.namespace, that.term, 'wrapper'].join('-');
	      that.tagClass = that.namespace + '-' + that.term;
	      that.tagPrefix = that.tagClass + '-';
	    },
	    bind: function() {
	      var that = this;

	      that.log('bind() is executed');

	      if (that.isMobile) {
	        that.$wrapper
	          .on(
	            'touchstart',
	            '.' + that.tagClass,
	            $.proxy(that.handleTagTouch, that)
	          )
	          .on(
	            'touchstart',
	            '.' + that.tagPrefix + 'flyout-edit-link',
	            $.proxy(that.handleTagEdit, that)
	          )
	          .on(
	            'touchstart',
	            '.' + that.tagPrefix + 'flyout-delete-link',
	            $.proxy(that.handleTagDelete, that)
	          );
	        $(window).on('orientationchange', function(e) {
	          that.mobileOrientation = e.orientation;
	          that.$wrapper
	            .removeClass(
	              that.tagPrefix +
	                'mobile-landscape ' +
	                that.tagPrefix +
	                'mobile-portrait'
	            )
	            .addClass(that.tagPrefix + 'mobile-' + that.mobileOrientation);
	        });
	      } else {
	        that.$wrapper
	          .on('click', $.proxy(that.handleWrapperClick, that))
	          .on(
	            'click',
	            '.' + that.tagPrefix + 'flyout-edit-link',
	            $.proxy(that.handleTagEdit, that)
	          )
	          .on(
	            'click',
	            '.' + that.tagPrefix + 'flyout-delete-link',
	            $.proxy(that.handleTagDelete, that)
	          )
	          .on(
	            'mouseenter',
	            '.' + that.tagClass,
	            $.proxy(that.handleTagMouseEnter, that)
	          )
	          .on(
	            'mouseleave',
	            '.' + that.tagClass,
	            $.proxy(that.handleTagMouseLeave, that)
	          );
	      }
	    },
	    render: function() {
	      var that = this;

	      that.log('render() is executed');

	      that.imageSize = ImageSize.get(that.image, $.proxy(that._renderFn, that));
	      that.imageSize.on('change', $.proxy(that.handleImageResize, that));
	    },
	    // The real reander method which invoked after image being loaded
	    _renderFn: function(success, data) {
	      var that = this,
	        i;

	      that.log('_renderFn() is executed');

	      // Stop when it fails to load image
	      if (!success) {
	        that.log('Failed to load image: ' + that.image.attr('src'), 'error');
	        that.destroy();
	        return;
	      }

	      // Update image size infomation
	      that._saveImageSize(data);

	      // Prevent image being dragged
	      that.image.attr('draggable', false);

	      // Add wrapper classses
	      that.$wrapper.addClass(that.wrapperClass);

	      // Safari has styling issue, adding class for that
	      if (
	        /Safari/.test(navigator.userAgent) &&
	        /Apple Computer/.test(navigator.vendor)
	      ) {
	        that.$wrapper.addClass(that.wrapperClass + '-safari');
	      }

	      // Add tags onto page
	      for (i in that.data) {
	        if (that.data.hasOwnProperty(i)) {
	          that.addTag(that.data[i]);
	        }
	      }

	      // Delay for CSS3 transition animation
	      setTimeout(function() {
	        if (that.editor) {
	          that.$wrapper.addClass(that.wrapperClass + '-editing');
	        }
	        that.emit('ready', [that]);
	      }, 500);
	    },
	    destroy: function() {
	      var that = this;

	      that.log('destroy() is executed');

	      that.$wrapper.removeClass(
	        that.wrapperClass + ' ' + that.wrapperClass + '-editing'
	      );
	      that.$wrapper.find('.' + that.tagClass).each(function() {
	        var $tag = $(this),
	          $select = $tag.find('.' + that.tagClass + '-select');

	        if ($select.data('xelect2')) {
	          $select.xelect2('destroy');
	        }
	        if ($tag.data('draggabilly')) {
	          $tag.data('draggabilly').destroy();
	        }
	        $tag.remove();
	      });
	    },
	    //===================
	    // Private Methods
	    //===================
	    _applyTools: function($tag) {
	      var that = this,
	        $form = $tag.find('.' + that.tagClass + '-form'),
	        tag = $tag.data('tag-data'),
	        drag;

	      that.log('_applyTools() is executed');

	      // Apply dragndrop
	      drag = new Draggabilly($tag[0], {
	        containment: '.' + that.wrapperClass,
	        handle: '.' + that.tagPrefix + 'icon'
	      });

	      drag.on('dragEnd', $.proxy(that.handleTagMove, that));
	      $tag.data('draggabilly', drag);

	      // Save the form value
	      $form.find('[name=x]').val(tag.x);
	      $form.find('[name=y]').val(tag.y);
	      $form
	        .find('[name=tag] option[value=' + tag.value + ']')
	        .attr('selected', 'selected');
	    },
	    _applyChooser: function($tag) {
	      var that = this,
	        $form = $tag.find('.' + that.tagClass + '-form'),
	        $select = $tag.find('.' + that.tagClass + '-select'),
	        tag = $tag.data('tag-data');

	      // Create AJAX dropdown
	      $select.xelect2({
	        dropdownParent: $form,
	        selectedValues: tag.value,
	        selectionCssClass: that.namespace + '-select2-selection',
	        containerCssClass: that.namespace + '-select2-container',
	        dropdownCssClass: that.namespace + '-select2-dropdown'
	      });

	      $select.on('xelect2:build', function() {
	        setTimeout(function() {
	          // FIXME
	          $select.select2('open');
	        }, 100);
	      });

	      // Bind select2 events
	      // It's fine if it hasn't rendered yet.
	      $select
	        .on('change', $.proxy(that.handleTagChange, that))
	        .on('select2:close', function() {
	          $select.select2('open'); // Keep open
	        });
	    },
	    _removeChooser: function($tag) {
	      var that = this,
	        $select = $tag.find('.' + that.tagClass + '-select');

	      that.log('_removeChooser() is executed');

	      if ($select.data('xelect2')) {
	        $select.xelect2('destroy');
	        $select.html('<option></option>');
	      }
	    },
	    // Disable dragdrop feature from all tags (except $except)
	    _disableDrag: function($except) {
	      var that = this;

	      if (!that.editor) {
	        return;
	      }

	      that.log('_disableDrag() is executed');

	      $except = $($except);
	      $('.' + that.tagClass).each(function(i, el) {
	        if ($except[0] === el) {
	          return;
	        }
	        $(el)
	          .data('draggabilly')
	          .disable();
	      });
	    },
	    // Enable dragdrop feature to all tags (except $except)
	    _enableDrag: function($except) {
	      var that = this;

	      if (that.editor === false) {
	        return;
	      }

	      that.log('_enableDrag() is executed');

	      $except = $($except);
	      $('.' + that.tagClass).each(function(i, el) {
	        if ($except[0] === el) {
	          return;
	        }
	        $(el)
	          .data('draggabilly')
	          .enable();
	      });
	    },
	    _removeTools: function($tag) {
	      var that = this,
	        $select;

	      that.log('_removeTools() is executed');

	      if ($tag.data('draggabilly')) {
	        $tag.data('draggabilly').destroy();
	      }
	      $select = $tag.find('.' + that.tagClass + '-select');
	      that._removeChooser($tag);
	    },
	    _getPosition: function($tag) {
	      var that = this,
	        pos,
	        x,
	        y;

	      that.log('_getPosition() is executed');

	      pos = $tag.position();
	      x = (pos.left + $tag.width() / 2) / that.currentWidth * that.naturalWidth;
	      y =
	        (pos.top + $tag.height() / 2) / that.currentHeight * that.naturalHeight;
	      if (that.unit === 'percent') {
	        x = x / that.naturalWidth * 100;
	        y = y / that.naturalHeight * 100;
	      }
	      return [x, y];
	    },
	    _saveImageSize: function(data) {
	      var that = this;

	      that.log('_saveImageSize() is executed');

	      that.naturalWidth = data.naturalWidth;
	      that.naturalHeight = data.naturalHeight;
	      that.currentWidth = data.width;
	      that.currentHeight = data.height;
	      that.widthRatio = data.widthRatio;
	      that.heightRatio = data.heightRatio;
	    },
	    //================
	    // Event Handlers
	    //================
	    handleTagChange: function(e) {
	      var that = this,
	        $select,
	        $tag,
	        data,
	        isNew,
	        serialize;

	      that.log('handleTagChange() is executed');

	      $select = $(e.target);
	      $tag = $select.parents('.' + that.tagClass);
	      isNew = $tag.hasClass(that.tagPrefix + 'new');
	      $tag.removeClass(that.tagPrefix + 'choose ' + that.tagPrefix + 'new');
	      data = $.extend({}, $tag.data('tag-data'));
	      data.label = $select.find('option:selected').text();
	      data.value = $select.val() || data.label;
	      serialize = $tag.find('.' + that.tagPrefix + 'form').serialize();
	      $tag.data('align-flyout').align();
	      if ($tag.data('align-form')) {
	        $tag.data('align-form').align();
	      }

	      that.$wrapper.removeClass(that.wrapperClass + '-editing-selecting');

	      if (isNew) {
	        that.emit('add', [data, serialize, $tag]);
	      } else {
	        that.emit('change', [data, serialize, $tag]);
	      }

	      that._removeChooser($tag);
	    },
	    handleTagDelete: function(e) {
	      var that = this,
	        $tag,
	        data;

	      that.log('handleTagDelete() is executed');

	      e.preventDefault();

	      $tag = $(e.currentTarget).parents('.' + that.tagClass);
	      data = $.extend({}, $tag.data('tag-data'));

	      $tag.fadeOut(function() {
	        that._removeTools($tag);
	        $tag.remove();
	        that.emit('delete', [data]);
	      });
	    },
	    handleTagEdit: function(e) {
	      var that = this,
	        $tag = $(e.currentTarget).parents('.' + that.tagClass),
	        data = $.extend({}, $tag.data('tag-data'));

	      that.log('handleTagEdit() is executed');

	      e.preventDefault();
	      e.stopPropagation();

	      $tag.addClass(that.tagPrefix + 'choose');
	      that.$wrapper.addClass(that.wrapperClass + '-editing-selecting');
	      that._disableDrag($tag);
	      that._applyChooser($tag);

	      that.emit('edit', [data, $tag]);
	    },
	    handleTagMove: function(instance) {
	      var that = this,
	        $tag = $(instance.element),
	        $form = $tag.find('.' + that.tagPrefix + '-form'),
	        data = $tag.data('tag-data'),
	        pos = that._getPosition($tag),
	        serialize,
	        isNew;

	      that.log('handleTagMove() is executed');

	      data.x = pos[0];
	      data.y = pos[1];

	      $form.find('[name=x]').val(data.x);
	      $form.find('[name=y]').val(data.y);
	      serialize = $form.serialize();

	      that.lastDragTime = new Date();
	      data = $.extend({}, data);
	      isNew = data.id ? false : true;

	      $tag.data('align-flyout').align();
	      if ($tag.data('align-form')) {
	        $tag.data('align-form').align();
	      }

	      if (data.id) {
	        that.emit('move', [data, serialize, $tag, isNew]);
	      }
	    },
	    handleTagMouseEnter: function(e) {
	      var that = this,
	        $tag,
	        timer;

	      // FIXME - This triggers multiple times for unknown reason...
	      if ($(e.target).hasClass('select2-results__option')) {
	        return;
	      }

	      $tag = $(e.currentTarget);

	      that.log('handleTagMouseEnter');

	      timer = $tag.data('timer');
	      if (timer) {
	        clearTimeout(timer);
	      }
	      $tag.removeData('timer');
	      $tag.addClass(that.tagPrefix + 'hover');
	      $tag.data('align-flyout').align();
	      if ($tag.data('align-form')) {
	        $tag.data('align-form').align();
	      }

	      that.emit('hover', [$tag]);
	    },
	    handleTagMouseLeave: function(e) {
	      var that = this,
	        $tag = $(e.currentTarget),
	        $dialogs = $tag.find(
	          ['.' + that.tagPrefix + 'flyout', '.' + that.tagPrefix + 'form'].join(
	            ','
	          )
	        ),
	        timer = $tag.data('timer');

	      that.log('handleTagMouseLeave');

	      if (timer) {
	        clearTimeout(timer);
	      }
	      $tag.removeData('timer');
	      timer = setTimeout(function() {
	        $tag.removeClass(that.tagPrefix + 'hover');
	        if (!$tag.hasClass(that.tagPrefix + 'choose')) {
	          $dialogs.removeAttr('style');
	        }
	      }, 300);
	      return $tag.data('timer', timer);
	    },
	    handleTagTouch: function(e) {
	      var that = this,
	        $target = $(e.target),
	        $tag = $(e.currentTarget),
	        $wrapper = that.$wrapper;

	      that.log('handleTagTouch() is executed');

	      if ($tag.hasClass(that.tagPrefix + 'hover')) {
	        // Hide
	        if ($target.is('.' + that.tagPrefix + 'flyout-close-link')) {
	          e.preventDefault();
	          e.stopPropagation();
	          $tag.find('.' + that.tagPrefix + 'navbar').remove();
	          $tag.find('.' + that.tagPrefix + 'flyout').css({
	            position: 'fixed',
	            top: 0,
	            bottom: 0,
	            left: '100%',
	            width: $(window).outerWidth() + 'px'
	          });
	          setTimeout(function() {
	            $tag.find('.' + that.tagPrefix + 'flyout').css({
	              position: 'absolute'
	            });
	            $tag.removeClass(that.tagPrefix + 'hover');
	            $wrapper.parents('.stacklapopup-image-wrapper').css('z-index', '2');
	          }, 300);
	        }
	      } else {
	        // Show
	        e.preventDefault();
	        e.stopPropagation();
	        $tag.find('.' + that.tagPrefix + 'flyout').css({
	          position: 'fixed',
	          left: '100%',
	          width: $(window).outerWidth() + 'px'
	        });
	        setTimeout(function() {
	          var $momImHereDiv = $(
	            '\
	                    <div class="' +
	              that.tagPrefix +
	              'navbar">\
	                        <div class="' +
	              that.tagPrefix +
	              'flyout-close-link">\
	                            Back\
	                        </div>\
	                    </div>\
	                '
	          );

	          $tag.addClass(that.tagPrefix + 'hover');
	          $tag
	            .find('.' + that.tagPrefix + 'flyout')
	            .css({
	              position: 'fixed',
	              top: 0,
	              bottom: 0,
	              left: 0,
	              width: $(window).outerWidth() + 'px',
	              'margin-top': 0,
	              'padding-top': 64,
	              overflow: 'auto'
	            })
	            .append($momImHereDiv);
	          $('.stacklapopup-image-wrapper').css('z-index', '3');
	        }, 300);
	      }
	    },
	    handleWrapperClick: function(e) {
	      var that = this,
	        $target = $(e.target);

	      that.log('handleWrapperClick() is executed');

	      if ($target.hasClass('select2-search__field')) {
	        return;
	      }
	      if (new Date() - that.lastDragTime > 10) {
	        that.shrink();
	      }
	    },
	    // Change position of all tags relatively
	    handleImageResize: function(e) {
	      var that = this;

	      that.log('handleImageResize() is executed');

	      that.sync();
	    },
	    // Append a tag into wrapper
	    addTag: function(tag) {
	      var that = this,
	        $dialog,
	        $form,
	        $select,
	        $tag,
	        attrs,
	        isNew,
	        offsetX,
	        offsetY,
	        x,
	        y;

	      that.log('addTag() is executed');

	      // Render tag
	      tag = tag || {};
	      tag = $.extend({}, tag);
	      tag.form_html = that.formHtml;
	      tag.tag_class_name = that.tagClass;
	      if (tag.product) {
	        tag.product.cta_text = tag.product.cta_text || 'Buy Now';
	      }
	      $tag = $(Mustache.render(that.tagTemplate, tag));
	      isNew = !tag.x && !tag.y;

	      // Shouldn't have other undefined new tags, just remove it.
	      if (isNew) {
	        $('.' + that.tagClass).each(function() {
	          var $tag = $(this);
	          if (
	            $tag.hasClass(that.tagPrefix + 'new') &&
	            !$tag.find('[name=tag]').val()
	          ) {
	            $tag.fadeOut(function() {
	              that._removeTools($tag);
	              $tag.remove();
	            });
	          }
	        });
	      }

	      // Append tag
	      that.$wrapper.append($tag);

	      // Set tag position
	      if (isNew) {
	        tag.x = 50;
	        tag.y = 50;
	      }
	      if (that.unit === 'percent') {
	        x = that.currentWidth * (tag.x / 100);
	        y = that.currentHeight * (tag.y / 100);
	      } else {
	        x = tag.x * that.widthRatio;
	        y = tag.y * that.heightRatio;
	      }
	      offsetX = $tag.outerWidth() / 2;
	      offsetY = $tag.outerHeight() / 2;
	      $tag.css({
	        left: x - offsetX + 'px',
	        top: y - offsetY + 'px'
	      });

	      // Save tag information
	      $tag.data('tag-data', tag);

	      // Set alignment for both form and flyout elements
	      attrs = {
	        relateTo: $tag,
	        constrainBy: that.$wrapper,
	        skipViewport: false
	      };
	      $dialog = $tag.find('.' + that.tagPrefix + 'flyout');
	      $tag.data('align-flyout', new AlignMe($dialog, attrs));
	      $tag.data('align-flyout').align();

	      // Apply draggable and ajax dropdown when it's in editor mode
	      if (!that.editor) {
	        return;
	      }
	      $form = $tag.find('.' + that.tagPrefix + 'form');
	      $tag.data('align-form', new AlignMe($form, attrs));
	      if ($tag.data('align-form')) {
	        $tag.data('align-form').align();
	      }
	      that._applyTools($tag);

	      // Display dropdown immediately for new tag
	      if (isNew) {
	        $tag.addClass(
	          [that.tagPrefix + 'new', that.tagPrefix + 'choose'].join(' ')
	        );
	        $tag.data('draggabilly').enable();
	        that.$wrapper.addClass(that.wrapperClass + '-editing-selecting');
	        $select = $tag.find('.' + that.tagClass + '-select');
	        that._applyChooser($tag);
	        that._disableDrag($tag);
	        that.emit('new', [$tag]);
	      }
	    },
	    getTags: function() {
	      var that = this,
	        tags = [];

	      that.log('getTags() is executed');

	      $('.' + that.tagClass).each(function(i, el) {
	        var data;
	        data = $.extend({}, $(el).data('tag-data'));
	        tags.push($(el).data('tag-data'));
	      });

	      return tags;
	    },
	    shrink: function($except) {
	      var that = this;

	      if (!that.editor) {
	        return;
	      }

	      that.log('shrink() is executed');

	      $except = $($except);
	      $('.' + that.tagClass).each(function(i, el) {
	        var $tag = $(el),
	          $dialogs = $tag.find(
	            [
	              '.' + that.tagPrefix + 'flyout',
	              '.' + that.tagPrefix + 'form'
	            ].join(',')
	          );

	        if ($except[0] === el) {
	          return;
	        }
	        if (
	          $tag.hasClass(that.tagPrefix + 'new') &&
	          !$tag.find('[name=tag]').val()
	        ) {
	          $tag.fadeOut(function() {
	            that._removeTools($tag);
	            that._removeChooser($tag);
	            $tag.remove();
	          });
	        } else {
	          that._removeChooser($tag);
	          $tag.removeClass(that.tagPrefix + 'choose');
	          if (!$tag.hasClass(that.tagPrefix + 'hover')) {
	            $dialogs.removeAttr('style');
	          }
	        }
	      });
	      that.$wrapper.removeClass(that.wrapperClass + '-editing-selecting');
	      that._enableDrag();
	    },
	    sync: function() {
	      var that = this,
	        data = that.data,
	        $img = that.image,
	        x,
	        y;

	      that.log('sync() is executed');

	      data.width = $img.width();
	      data.height = $img.height();

	      $('.' + that.tagClass).each(function() {
	        var $tag = $(this),
	          tag = $tag.data('tagData');

	        if (that.unit === 'percent') {
	          x = data.width * (tag.x / 100);
	          y = data.height * (tag.y / 100);
	        } else {
	          x = tag.x * that.widthRatio;
	          y = tag.y * that.heightRatio;
	        }

	        var offsetX = $tag.outerWidth() / 2;
	        var offsetY = $tag.outerHeight() / 2;
	        $tag.css({
	          left: x - offsetX + 'px',
	          top: y - offsetY + 'px'
	        });
	      });

	      that._saveImageSize(data);
	    },
	    updateDialog: function($tag, data) {
	      var that = this,
	        $template,
	        html,
	        $momImHereDiv = $(
	          '\
	                <div class="' +
	            that.tagPrefix +
	            'navbar">\
	                    <div class="' +
	            that.tagPrefix +
	            'flyout-close-link">\
	                        Back\
	                    </div>\
	                </div>\
	            '
	        );

	      that.log('updateDialog() is executed');

	      data = $.extend({}, $tag.data('tag-data'), data);
	      data.form_html = that.formHtml;
	      data.tag_class_name = that.tagClass;
	      $template = $(Mustache.render(that.tagTemplate, data));
	      html = $template.find('.' + that.tagPrefix + 'flyout').html();

	      $tag
	        .find('.' + that.tagPrefix + 'flyout')
	        .html(html)
	        .append($momImHereDiv)
	        .css('overflow', 'auto');
	      $tag.data('tag-data', data);
	    }
	  },
	  ATTRS.NAME
	);

	$.extend(Tagla, ATTRS);

	window.Tagla = Tagla;

	if (window.Stackla) {
	  window.Stackla.Tagla = Tagla;
	}

	if (typeof exports === 'object' && exports) {
	  module.exports = Tagla;
	} else if (true) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (Tagla), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



/***/ },
/* 53 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (typeof define === 'function' && define.amd) {
	    define(['exports'], factory); // AMD
	  } else {
	    global.Mustache = {};
	    factory(Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	      case '#':
	      case '^':
	        collector.push(token);
	        sections.push(token);
	        collector = token[4] = [];
	        break;
	      case '/':
	        section = sections.pop();
	        section[5] = token[2];
	        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	        break;
	      default:
	        collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	    case -1:
	      match = this.tail;
	      this.tail = '';
	      break;
	    case 0:
	      match = '';
	      break;
	    default:
	      match = this.tail.substring(0, index);
	      this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.1.3';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));



/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global window, define, document */
	'use strict';

	var jQuery,
	  $ = window.$;

	// Hack to make it work in both UI Kit and Widget
	jQuery = $ = window.$tackla || $;

	/*! jQuery UI - v1.11.4 - 2016-07-07
	* http://jqueryui.com
	* Includes: position.js
	* Copyright jQuery Foundation and other contributors; Licensed MIT */

	// I WANT TO CHANGE IT
	(function(t) {
	  t(jQuery);
	})(function(t) {
	  (function() {
	    function e(t, e, i) {
	      return [
	        parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
	        parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)
	      ];
	    }
	    function i(e, i) {
	      return parseInt(t.css(e, i), 10) || 0;
	    }
	    function s(e) {
	      var i = e[0];
	      return 9 === i.nodeType
	        ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
	        : t.isWindow(i)
	          ? {
	              width: e.width(),
	              height: e.height(),
	              offset: { top: e.scrollTop(), left: e.scrollLeft() }
	            }
	          : i.preventDefault
	            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
	            : {
	                width: e.outerWidth(),
	                height: e.outerHeight(),
	                offset: e.offset()
	              };
	    }
	    t.ui = t.ui || {};
	    var n,
	      a,
	      o = Math.max,
	      r = Math.abs,
	      h = Math.round,
	      l = /left|center|right/,
	      u = /top|center|bottom/,
	      c = /[\+\-]\d+(\.[\d]+)?%?/,
	      d = /^\w+/,
	      p = /%$/,
	      f = t.fn.position;
	    (t.position = {
	      scrollbarWidth: function() {
	        if (void 0 !== n) return n;
	        var e,
	          i,
	          s = t(
	            "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
	          ),
	          a = s.children()[0];
	        return (
	          t('body').append(s),
	          (e = a.offsetWidth),
	          s.css('overflow', 'scroll'),
	          (i = a.offsetWidth),
	          e === i && (i = s[0].clientWidth),
	          s.remove(),
	          (n = e - i)
	        );
	      },
	      getScrollInfo: function(e) {
	        var i = e.isWindow || e.isDocument ? '' : e.element.css('overflow-x'),
	          s = e.isWindow || e.isDocument ? '' : e.element.css('overflow-y'),
	          n =
	            'scroll' === i ||
	            ('auto' === i && e.width < e.element[0].scrollWidth),
	          a =
	            'scroll' === s ||
	            ('auto' === s && e.height < e.element[0].scrollHeight);
	        return {
	          width: a ? t.position.scrollbarWidth() : 0,
	          height: n ? t.position.scrollbarWidth() : 0
	        };
	      },
	      getWithinInfo: function(e) {
	        var i = t(e || window),
	          s = t.isWindow(i[0]),
	          n = !!i[0] && 9 === i[0].nodeType;
	        return {
	          element: i,
	          isWindow: s,
	          isDocument: n,
	          offset: i.offset() || { left: 0, top: 0 },
	          scrollLeft: i.scrollLeft(),
	          scrollTop: i.scrollTop(),
	          width: s || n ? i.width() : i.outerWidth(),
	          height: s || n ? i.height() : i.outerHeight()
	        };
	      }
	    }),
	      (t.fn.position = function(n) {
	        if (!n || !n.of) return f.apply(this, arguments);
	        n = t.extend({}, n);
	        var p,
	          m,
	          g,
	          v,
	          _,
	          b,
	          y = t(n.of),
	          x = t.position.getWithinInfo(n.within),
	          w = t.position.getScrollInfo(x),
	          k = (n.collision || 'flip').split(' '),
	          D = {};
	        return (
	          (b = s(y)),
	          y[0].preventDefault && (n.at = 'left top'),
	          (m = b.width),
	          (g = b.height),
	          (v = b.offset),
	          (_ = t.extend({}, v)),
	          t.each(['my', 'at'], function() {
	            var t,
	              e,
	              i = (n[this] || '').split(' ');
	            1 === i.length &&
	              (i = l.test(i[0])
	                ? i.concat(['center'])
	                : u.test(i[0]) ? ['center'].concat(i) : ['center', 'center']),
	              (i[0] = l.test(i[0]) ? i[0] : 'center'),
	              (i[1] = u.test(i[1]) ? i[1] : 'center'),
	              (t = c.exec(i[0])),
	              (e = c.exec(i[1])),
	              (D[this] = [t ? t[0] : 0, e ? e[0] : 0]),
	              (n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]);
	          }),
	          1 === k.length && (k[1] = k[0]),
	          'right' === n.at[0]
	            ? (_.left += m)
	            : 'center' === n.at[0] && (_.left += m / 2),
	          'bottom' === n.at[1]
	            ? (_.top += g)
	            : 'center' === n.at[1] && (_.top += g / 2),
	          (p = e(D.at, m, g)),
	          (_.left += p[0]),
	          (_.top += p[1]),
	          this.each(function() {
	            var s,
	              l,
	              u = t(this),
	              c = u.outerWidth(),
	              d = u.outerHeight(),
	              f = i(this, 'marginLeft'),
	              b = i(this, 'marginTop'),
	              T = c + f + i(this, 'marginRight') + w.width,
	              S = d + b + i(this, 'marginBottom') + w.height,
	              C = t.extend({}, _),
	              M = e(D.my, u.outerWidth(), u.outerHeight());
	            'right' === n.my[0]
	              ? (C.left -= c)
	              : 'center' === n.my[0] && (C.left -= c / 2),
	              'bottom' === n.my[1]
	                ? (C.top -= d)
	                : 'center' === n.my[1] && (C.top -= d / 2),
	              (C.left += M[0]),
	              (C.top += M[1]),
	              a || ((C.left = h(C.left)), (C.top = h(C.top))),
	              (s = { marginLeft: f, marginTop: b }),
	              t.each(['left', 'top'], function(e, i) {
	                t.ui.position[k[e]] &&
	                  t.ui.position[k[e]][i](C, {
	                    targetWidth: m,
	                    targetHeight: g,
	                    elemWidth: c,
	                    elemHeight: d,
	                    collisionPosition: s,
	                    collisionWidth: T,
	                    collisionHeight: S,
	                    offset: [p[0] + M[0], p[1] + M[1]],
	                    my: n.my,
	                    at: n.at,
	                    within: x,
	                    elem: u
	                  });
	              }),
	              n.using &&
	                (l = function(t) {
	                  var e = v.left - C.left,
	                    i = e + m - c,
	                    s = v.top - C.top,
	                    a = s + g - d,
	                    h = {
	                      target: {
	                        element: y,
	                        left: v.left,
	                        top: v.top,
	                        width: m,
	                        height: g
	                      },
	                      element: {
	                        element: u,
	                        left: C.left,
	                        top: C.top,
	                        width: c,
	                        height: d
	                      },
	                      horizontal: 0 > i ? 'left' : e > 0 ? 'right' : 'center',
	                      vertical: 0 > a ? 'top' : s > 0 ? 'bottom' : 'middle'
	                    };
	                  c > m && m > r(e + i) && (h.horizontal = 'center'),
	                    d > g && g > r(s + a) && (h.vertical = 'middle'),
	                    (h.important =
	                      o(r(e), r(i)) > o(r(s), r(a))
	                        ? 'horizontal'
	                        : 'vertical'),
	                    n.using.call(this, t, h);
	                }),
	              u.offset(t.extend(C, { using: l }));
	          })
	        );
	      }),
	      (t.ui.position = {
	        fit: {
	          left: function(t, e) {
	            var i,
	              s = e.within,
	              n = s.isWindow ? s.scrollLeft : s.offset.left,
	              a = s.width,
	              r = t.left - e.collisionPosition.marginLeft,
	              h = n - r,
	              l = r + e.collisionWidth - a - n;
	            e.collisionWidth > a
	              ? h > 0 && 0 >= l
	                ? ((i = t.left + h + e.collisionWidth - a - n),
	                  (t.left += h - i))
	                : (t.left =
	                    l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n)
	              : h > 0
	                ? (t.left += h)
	                : l > 0 ? (t.left -= l) : (t.left = o(t.left - r, t.left));
	          },
	          top: function(t, e) {
	            var i,
	              s = e.within,
	              n = s.isWindow ? s.scrollTop : s.offset.top,
	              a = e.within.height,
	              r = t.top - e.collisionPosition.marginTop,
	              h = n - r,
	              l = r + e.collisionHeight - a - n;
	            e.collisionHeight > a
	              ? h > 0 && 0 >= l
	                ? ((i = t.top + h + e.collisionHeight - a - n),
	                  (t.top += h - i))
	                : (t.top =
	                    l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n)
	              : h > 0
	                ? (t.top += h)
	                : l > 0 ? (t.top -= l) : (t.top = o(t.top - r, t.top));
	          }
	        },
	        flip: {
	          left: function(t, e) {
	            var i,
	              s,
	              n = e.within,
	              a = n.offset.left + n.scrollLeft,
	              o = n.width,
	              h = n.isWindow ? n.scrollLeft : n.offset.left,
	              l = t.left - e.collisionPosition.marginLeft,
	              u = l - h,
	              c = l + e.collisionWidth - o - h,
	              d =
	                'left' === e.my[0]
	                  ? -e.elemWidth
	                  : 'right' === e.my[0] ? e.elemWidth : 0,
	              p =
	                'left' === e.at[0]
	                  ? e.targetWidth
	                  : 'right' === e.at[0] ? -e.targetWidth : 0,
	              f = -2 * e.offset[0];
	            0 > u
	              ? ((i = t.left + d + p + f + e.collisionWidth - o - a),
	                (0 > i || r(u) > i) && (t.left += d + p + f))
	              : c > 0 &&
	                ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h),
	                (s > 0 || c > r(s)) && (t.left += d + p + f));
	          },
	          top: function(t, e) {
	            var i,
	              s,
	              n = e.within,
	              a = n.offset.top + n.scrollTop,
	              o = n.height,
	              h = n.isWindow ? n.scrollTop : n.offset.top,
	              l = t.top - e.collisionPosition.marginTop,
	              u = l - h,
	              c = l + e.collisionHeight - o - h,
	              d = 'top' === e.my[1],
	              p = d ? -e.elemHeight : 'bottom' === e.my[1] ? e.elemHeight : 0,
	              f =
	                'top' === e.at[1]
	                  ? e.targetHeight
	                  : 'bottom' === e.at[1] ? -e.targetHeight : 0,
	              m = -2 * e.offset[1];
	            0 > u
	              ? ((s = t.top + p + f + m + e.collisionHeight - o - a),
	                (0 > s || r(u) > s) && (t.top += p + f + m))
	              : c > 0 &&
	                ((i = t.top - e.collisionPosition.marginTop + p + f + m - h),
	                (i > 0 || c > r(i)) && (t.top += p + f + m));
	          }
	        },
	        flipfit: {
	          left: function() {
	            t.ui.position.flip.left.apply(this, arguments),
	              t.ui.position.fit.left.apply(this, arguments);
	          },
	          top: function() {
	            t.ui.position.flip.top.apply(this, arguments),
	              t.ui.position.fit.top.apply(this, arguments);
	          }
	        }
	      }),
	      (function() {
	        var e,
	          i,
	          s,
	          n,
	          o,
	          r = document.getElementsByTagName('body')[0],
	          h = document.createElement('div');
	        (e = document.createElement(r ? 'div' : 'body')),
	          (s = {
	            visibility: 'hidden',
	            width: 0,
	            height: 0,
	            border: 0,
	            margin: 0,
	            background: 'none'
	          }),
	          r &&
	            t.extend(s, {
	              position: 'absolute',
	              left: '-1000px',
	              top: '-1000px'
	            });
	        for (o in s) e.style[o] = s[o];
	        e.appendChild(h),
	          (i = r || document.documentElement),
	          i.insertBefore(e, i.firstChild),
	          (h.style.cssText = 'position: absolute; left: 10.7432222px;'),
	          (n = t(h).offset().left),
	          (a = n > 10 && 11 > n),
	          (e.innerHTML = ''),
	          i.removeChild(e);
	      })();
	  })(),
	    t.ui.position;
	});

	/**
	 * A JavaScript utility which automatically aligns position of an overlay.
	 *
	 *      @example
	 *      var alignMe = new AlignMe($overlay, {
	 *          relateTo: '.draggable',
	 *          constrainBy: '.parent',
	 *          skipViewport: false
	 *      });
	 *      alignMe.align();
	 *
	 * @class AlignMe
	 * @param {HTMLElement} overlay Overlay element
	 * @param {Object} options Configurable options
	 */
	function AlignMe(overlay, options) {
	  var that = this;

	  that.overlay = $(overlay);
	  //======================
	  // Config Options
	  //======================
	  /**
	   * @cfg {HTMLElement} relateTo (required)
	   * The reference element
	   */
	  that.relateTo = $(options.relateTo) || null;
	  /**
	   * @cfg {HTMLElement} relateTo
	   * The reference element
	   */
	  that.constrainBy = $(options.constrainBy) || null;
	  /**
	   * @cfg {HTMLElement} [skipViewport=true]
	   * Ignore window as another constrain element
	   */
	  that.skipViewport = options.skipViewport === false ? false : true;

	  // Stop if overlay or options.relatedTo arent provided
	  if (!that.overlay) {
	    throw new Error('`overlay` element is required');
	  }
	  if (!that.relateTo) {
	    throw new Error('`relateTo` option is required');
	  }
	}

	/**
	 * Align overlay automatically
	 *
	 * @method align
	 */
	AlignMe.prototype.align = function() {
	  var that = this;

	  $(that.overlay).position({
	    of: that.relateTo,
	    my: 'right top',
	    at: 'left top',
	    collision: 'flipfit'
	  });
	};

	if (window.Stackla) {
	  // Vanilla JS
	  window.Stackla.AlignMe = AlignMe;
	} else {
	  window.AlignMe = AlignMe;
	}

	if (typeof exports === 'object' && exports) {
	  // CommonJS
	  module.exports = AlignMe;
	} else if (true) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (AlignMe), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/*global $, document */
	/**
	 * @class Stackla
	 * @static
	 *
	 * Helps to create class under Stackla namespace.

	 * Usage:
	 *
	 *      // Create a brand new class
	 *      var Animal = Stackla.createClass({run: function () {}});
	 *
	 *      // Extend from other class
	 *      var Person = Stackla.createClass(Animal, {say: function () {}});
	 *
	 *      // Mount created class to Stackla.Organization.Employee
	 *      Stackla.createClass(Person, {work: function () {}}, 'Orgnization.Employee');
	 *
	 */

	var _ = __webpack_require__(9),
	  Stackla = {};

	if (!window.Stackla) {
	  window.Stackla = {};
	}

	/**
	 * A factory method to create or extend a class quickly.
	 *
	 * @method createClass
	 * @param {Function} class Extend an existing class
	 * @param {Object} methods Methods belonging to this class
	 * @param {String} [name] The class name
	 */
	Stackla.createClass = function() {
	  var parent,
	    methods,
	    klass,
	    extend,
	    arg,
	    namespace,
	    segments,
	    mountpoint,
	    mountpoint2;

	  klass = function() {
	    var that = this,
	      ancestor = this,
	      initializers = [],
	      destructors = [],
	      i,
	      destroy;

	    while (ancestor) {
	      if (ancestor.initializer) {
	        initializers.push(ancestor.initializer);
	      }
	      if (ancestor.destructor) {
	        destructors.push(ancestor.destructor);
	      }
	      ancestor = ancestor.$parent;
	    }

	    // TODO - Figure out why it causes error when using _.eachRight
	    for (i = initializers.length - 1; i >= 0; i--) {
	      initializers[i].apply(this, arguments);
	    }

	    if (!that.destroy) {
	      that.destroy = function() {
	        for (i = destructors.length - 1; i >= 0; i--) {
	          destructors[i].apply(this, arguments);
	        }
	      };
	    } else {
	      destroy = that.destroy;
	      that.destroy = function() {
	        for (i = destructors.length - 1; i >= 0; i--) {
	          destructors[i].apply(this, arguments);
	        }
	        destroy.call(this);
	      };
	    }
	  };

	  extend = function(destination, source) {
	    var objMethods, i, j;

	    // Attach parent methods to child
	    for (i in source) {
	      if (source.hasOwnProperty(i)) {
	        destination[i] = source[i];
	      }
	    }

	    // IE 8 Bug: Native Object methods are only accessible directly
	    // and do not come up in for loops. ("DontEnum Bug")
	    if (!Object.getOwnPropertyNames) {
	      objMethods = [
	        'toString',
	        'valueOf',
	        'toLocaleString',
	        'isPrototypeOf',
	        'propertyIsEnumerable',
	        'hasOwnProperty'
	      ];
	      for (i = 0, j = objMethods.length; i < j; i++) {
	        if (
	          typeof source[objMethods[i]] === 'function' &&
	          source[objMethods[i]].toString().indexOf('[native code]') === -1
	        ) {
	          destination[objMethods[i]] = source[objMethods[i]];
	        }
	      }
	    }

	    destination.$super = function(method) {
	      return this.$parent[method].apply(
	        this.$parent,
	        Array.prototype.slice.call(arguments, 1)
	      );
	    };

	    return destination;
	  };

	  if (!arguments.length) {
	    throw new Error(
	      'You need to specify either parent class or methods object'
	    );
	  }

	  // Deal arguments
	  if (typeof arguments[0] === 'function') {
	    parent = arguments[0];
	    methods = arguments[1];
	  } else {
	    methods = arguments[0];
	  }

	  // Extend parent class
	  if (parent) {
	    extend(klass.prototype, parent.prototype);
	    klass.prototype.$parent = parent.prototype;
	  }

	  // Attach methods to this class
	  extend(klass.prototype, methods);
	  klass.prototype.constructor = klass;

	  if (!klass.prototype.initializer) {
	    klass.prototype.initializer = function() {};
	  }
	  if (!klass.prototype.destructor) {
	    klass.prototype.destructor = function() {};
	  }

	  if (_.isString(arguments[arguments.length - 1])) {
	    namespace = arguments[arguments.length - 1];
	    segments = namespace.split('.');
	    if (segments[0] === 'Stackla') {
	      segments.shift();
	    }
	    mountpoint = Stackla;
	    mountpoint2 = window.Stackla;
	    _.each(segments, function(segment, i) {
	      if (i === segments.length - 1) {
	        mountpoint[segment] = klass;
	        mountpoint2[segment] = klass;
	      } else {
	        if (_.isUndefined(mountpoint[segment])) {
	          mountpoint[segment] = {};
	        }
	        if (_.isUndefined(mountpoint2[segment])) {
	          mountpoint2[segment] = {};
	        }
	      }
	      mountpoint = mountpoint[segment];
	      mountpoint2 = mountpoint2[segment];
	    });
	  }

	  return klass;
	};

	Stackla.getInstanceOrCreate = function($el, dataAttrName, classFn, options) {
	  var instance;
	  options = $.isPlainObject(options) ? options : {};

	  $el = $($el);
	  instance = $el.data(dataAttrName);
	  if (!instance) {
	    options = $.extend({}, $el.data(), options);
	    delete options[dataAttrName];
	    instance = new classFn($el, options);
	    instance.render();
	    $el.data(dataAttrName, instance);
	  }
	  return instance;
	};

	// Create jquery plugin, trigger by click, and passive bind
	Stackla.smartBind = function(pluginName, selector, classFn, autoBind) {
	  // Config options
	  if (typeof pluginName === 'object') {
	    var options = $.extend({}, pluginName);
	    pluginName = options.pluginName;
	    selector = options.selector;
	    classFn = options.classFn;
	    autoBind = options.autoBind ? true : false;
	  }

	  // Create jquery plugin
	  $.fn[pluginName] = function(option, value) {
	    var firstResult;
	    this.each(function() {
	      var instance = Stackla.getInstanceOrCreate(
	        $(this),
	        pluginName,
	        classFn,
	        option
	      );
	      if (typeof option === 'string' && instance[option]) {
	        firstResult = firstResult || instance[option].call(instance, value);
	      }
	    });
	    return firstResult;
	  };
	  $.fn[pluginName].Constructor = classFn;

	  // Lazy bind by user clicking
	  $(document).on('click', selector, function(e) {
	    Stackla.getInstanceOrCreate($(e.currentTarget), pluginName, classFn);
	  });

	  // Passive bind
	  $(function() {
	    var $items;
	    if (autoBind) {
	      $items = $(selector);
	    } else {
	      $items = $(selector + '[data-autobind=true]');
	    }
	    if (!$items.length) {
	      return;
	    }
	    $items.each(function(i, el) {
	      var $el = $(el);
	      $el[pluginName]();
	    });
	  });
	};

	module.exports = Stackla;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/*global window */
	/**
	 * All Stackla class should extends Base class.
	 * It provides several useful methods.
	 *
	 *     @example
	 *     // Extends Base to create a new class, e.g. Stackla.Shopspots
	 *     Stackla.createClass(Base, {
	 *          // Always create a initializer which executes after parents' ones
	 *          initializer: function (attrs) { }
	 *          bind: function () { },
	 *          render: function () { }
	 *     }, 'Shopspots');
	 *
	 *     var shopspots = new Stackla.Shopspots(attrs);
	 *
	 *     // 'on' is default method provide by Base class
	 *     shopspots.on('click', function (e) {
	 *         alert(e.type);
	 *     });
	 *
	 *     // Execute method you create
	 *     shopspots.render();
	 *
	 * @class Stackla.Base
	 */
	var Stackla = __webpack_require__(55),
	  _ = __webpack_require__(9);

	var Base = Stackla.createClass({
	  /**
	   * Creates new Data instance.
	   *
	   * @constructor Stackla.Base
	   * @param {Object} attr The config attribute
	   */
	  initializer: function(attrs) {
	    var that = this,
	      debug = that.getParams('debug');

	    attrs = attrs || {};
	    /**
	     * @property {Boolean} [debug=false]
	     * Set debug to true to see logging.
	     */
	    if (debug) {
	      that.debug = debug === 'true' || debug === '1' ? true : false;
	    } else if (attrs.debug) {
	      that.debug = attrs.debug === true ? true : false;
	    } else {
	      that.debug = false;
	    }
	    that._listeners = [];
	  },
	  /**
	   * Displays class short name.
	   *
	   * @method toString
	   */
	  toString: function() {
	    return 'Base';
	  },
	  /**
	   * Outputs debugging message.
	   * It only shows when the debug config is set to true.
	   *
	   * @method log
	   * @param {String} msg Log message
	   * @type {String} [type='info'] Log type
	   */
	  log: function(msg, type) {
	    var that = this;
	    if (!that.debug) {
	      return;
	    }
	    type = type || 'info';
	    if (window.console && window.console[type]) {
	      window.console[type]('[' + that.toString() + '] ' + msg);
	    }
	  },
	  /**
	   * Subscribes a custom event, which only takes effect with instance scope.
	   *
	   * @method on
	   * @param {String} type Event name
	   * @param {Function} handler Event handler
	   */
	  on: function(type, callback) {
	    var that = this;
	    if (!type || !callback) {
	      throw new Error('Both event type and callback are required parameters');
	    }
	    that.log("on() - event '" + type + "' is subscribed");
	    if (!that._listeners[type]) {
	      that._listeners[type] = [];
	    }
	    callback.instance = that;
	    that._listeners[type].push(callback);
	    return callback;
	  },
	  /**
	   * Triggers a custom event, which only takes effect with instance scope.
	   *
	   * @method emit
	   * @param {String} type Event name
	   * @param {Object} [data] Provide data to subscribers
	   * @param {Function} [callback] Callback function
	   */
	  emit: function(type, data, callback) {
	    var that = this,
	      i,
	      args,
	      total = 0,
	      moduleName;
	    that.log("emit() - event '" + type + "' is triggered");
	    data = data || [];
	    data.unshift({ type: type, target: this });
	    if (!type) {
	      throw new Error('Lacks of type parameter');
	    }
	    if (that._listeners[type] && that._listeners[type].length) {
	      for (i in that._listeners[type]) {
	        if (that._listeners[type].hasOwnProperty(i)) {
	          that._listeners[type][i].apply(this, data);
	          total += 1;
	        }
	      }
	    }
	    if (that.$el) {
	      moduleName = that.toString().toLowerCase();
	      that.$el.trigger(moduleName + ':' + type, [data]);
	    }
	    return total !== 0;
	  },
	  /**
	   * Gets a specific parameter value from current URL query string.
	   *
	   * @method getParams
	   * @param {String} key Parameter name
	   * @return {String} Parameter value
	   */
	  getParams: function(key) {
	    var that = this,
	      href = this.getUrl(),
	      params = {},
	      pos = href.indexOf('?'),
	      hash,
	      hashes,
	      i;

	    that.log('getParams() is executed');

	    if (href.indexOf('#') !== -1) {
	      hashes = href.slice(pos + 1, href.indexOf('#')).split('&');
	    } else {
	      hashes = href.slice(pos + 1).split('&');
	    }

	    for (i in hashes) {
	      if (hashes.hasOwnProperty(i)) {
	        hash = hashes[i].split('=');
	        params[hash[0]] = hash[1];
	      }
	    }
	    return key ? params[key] : params;
	  },
	  /**
	   * Just a alias for location.href
	   *
	   * @method getUrl
	   * @return {String} Current URL
	   */
	  getUrl: function() {
	    return window.location.href;
	  },
	  /**
	   * Destroys current instance. Also removes all event listeners.
	   *
	   * @method destroy
	   */
	  destroy: function() {
	    var that = this;
	    _.each(that._listeners, function(type) {
	      _.eachRight(type, function(callback, i) {
	        if (callback.instance === that) {
	          type.splice(i, 1);
	        }
	      });
	    });
	  }
	});

	module.exports = Base;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = window.$,
	  Stackla = __webpack_require__(55),
	  Base = __webpack_require__(56),
	  ImageSize;

	// Hack to make it work in both UI Kit and Widget
	$ = window.$tackla || $;

	ImageSize = Stackla.createClass(
	  Base,
	  {
	    initializer: function(el, callback) {
	      var that = this;

	      that.init(el);
	      that.bind();
	      that.render(callback);
	    },
	    toString: function() {
	      return 'ImageSize';
	    },
	    init: function(el) {
	      var that = this;

	      that.el = $(el)[0];
	      that.complete = that.el.complete;
	      that.data = {};
	      that._timer = null;
	      that.data.width = that.el.width;
	      that.data.height = that.el.height;
	    },
	    bind: function() {
	      var that = this;

	      that.log('bind() is executed');

	      return $(window).resize(
	        (function(_this) {
	          return function(e) {
	            var isEqual;
	            isEqual =
	              _this.el.width === _this.data.width &&
	              _this.el.height === _this.data.height;
	            if (isEqual) {
	              return;
	            }
	            $.extend(_this.data, {
	              width: _this.el.width,
	              height: _this.el.height,
	              widthRatio: _this.el.width / _this.data.naturalWidth,
	              heightRatio: _this.el.height / _this.data.naturalHeight
	            });
	            _this.log('handleResize() is executed');
	            return _this.emit('change', [_this.data]);
	          };
	        })(this)
	      );
	    },
	    render: function(callback) {
	      var that = this,
	        img;

	      that.log('render() is executed');
	      if (that.complete) {
	        img = new Image();
	        img.src = that.el.src;
	        that.log("Image '" + that.el.src + "' is loaded");
	        that.data.naturalWidth = img.width;
	        that.data.naturalHeight = img.height;
	        return callback(true, that.data);
	      } else {
	        that.log("Image '" + that.el.src + "' is NOT ready");
	        img = new Image();
	        img.src = that.el.src;
	        img.onload = (function(_that) {
	          return function(e) {
	            _that.log("Image '" + img.src + "' is loaded");
	            _that.data.naturalWidth = img.width;
	            _that.data.naturalHeight = img.height;
	            return callback(true, _that.data);
	          };
	        })(that);
	        return (img.onerror = (function(_that) {
	          return function(e) {
	            _that.log("Image '" + img.src + "' is failed to load");
	            return callback(false, _that.data);
	          };
	        })(that));
	      }
	    }
	  },
	  'ImageSize'
	);

	if (!window.Stackla) {
	  window.Stackla = {};
	}
	Stackla.getImageSize = function(el, callback) {
	  return new ImageSize(el, callback);
	};

	module.exports = {
	  get: function(el, callback) {
	    return new ImageSize(el, callback);
	  }
	};


/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	  var StacklaFluidWidgetProperties = window.StacklaFluidWidgetProperties || {},
	      listeners = [];

	  return {
	    on: function on(type, callback) {
	      if (!type || !callback) {
	        throw new Error('Both event type and callback are required parameters');
	      }
	      if (!listeners[type]) {
	        listeners[type] = [];
	      }
	      listeners[type].push(callback);
	      return callback;
	    },
	    emit: function emit(type, data, callback) {
	      var i,
	          args,
	          total = 0;
	      data = data || [];
	      data.unshift({ type: type, target: this });
	      if (!type) {
	        throw new Error('Lacks of type parameter');
	      }
	      if (listeners[type] && listeners[type].length) {
	        for (i in listeners[type]) {
	          if (listeners[type].hasOwnProperty(i)) {
	            listeners[type][i].apply(this, data);
	            total += 1;
	          }
	        }
	      }
	      return total !== 0;
	    },
	    onBeforeExpandedTileOpen: function onBeforeExpandedTileOpen(widgetId, tile, data) {
	      var that = this,
	          props = StacklaFluidWidgetProperties[widgetId] || {},
	          callbacks = props.callbacks || {};
	      if (typeof callbacks.onBeforeExpandedTileOpen === 'function') {
	        tile = callbacks.onBeforeExpandedTileOpen(tile, data);
	      }
	      that.emit('beforeExpandedTileOpen', [widgetId, tile, data]);
	      return tile;
	    },
	    onAfterExpandedTileOpen: function onAfterExpandedTileOpen(widgetId) {
	      var that = this,
	          props = StacklaFluidWidgetProperties[widgetId] || {},
	          callbacks = props.callbacks || {};
	      if (typeof callbacks.onAfterExpandedTileOpen === 'function') {
	        callbacks.onAfterExpandedTileOpen();
	      }
	      that.emit('afterExpandedTileOpen', [widgetId]);
	    },
	    onBeforeExpandedTileImageResize: function onBeforeExpandedTileImageResize(widgetId, $image, $el, options) {
	      var that = this,
	          props = StacklaFluidWidgetProperties[widgetId] || {},
	          callbacks = props.callbacks || {};
	      if (typeof callbacks.onBeforeExpandedTileImageResize === 'function') {
	        callbacks.onBeforeExpandedTileImageResize.call(this, $image, $el, options);
	      }
	      that.emit('beforeExpandedTileImageResize', [widgetId, $image, $el, options]);
	    },
	    onAfterExpandedTileImageResize: function onAfterExpandedTileImageResize(widgetId, sizes, $image, $el) {
	      var that = this,
	          props = StacklaFluidWidgetProperties[widgetId] || {},
	          callbacks = props.callbacks || {};

	      if (typeof callbacks.onAfterExpandedTileImageResize === 'function') {
	        callbacks.onAfterExpandedTileImageResize.call(this, sizes, $image, $el);
	      }
	      that.emit('afterExpandedTileImageResize', [widgetId, sizes, $image, $el]);
	    },
	    onAfterExpandedTileImageLoad: function onAfterExpandedTileImageLoad(widgetId, $image, $el) {
	      var that = this,
	          props = StacklaFluidWidgetProperties[widgetId] || {},
	          callbacks = props.callbacks || {};
	      if (typeof callbacks.onAfterExpandedTileImageLoad === 'function') {
	        callbacks.onAfterExpandedTileImageLoad.call(this, $image, $el);
	      }
	      that.emit('afterExpandedTileImageLoad', [widgetId, $image, $el]);
	    }
	  };
	}();

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{tag_class_name}}\">\n    <i class=\"{{tag_class_name}}-icon fs fs-tag2\"></i>\n    <div class=\"{{tag_class_name}}-flyout\">\n    {{#product}}\n        {{#image_small_url}}\n        <div class=\"{{tag_class_name}}-flyout-image\">\n          <img src=\"{{image_small_url}}\">\n        </div>\n        {{/image_small_url}}\n        <div class=\"{{tag_class_name}}-flyout-text\">\n          <div class=\"{{tag_class_name}}-flyout-actions\">\n            <a href=\"javascript:void(0)\"\n               class=\"{{tag_class_name}}-flyout-link {{tag_class_name}}-flyout-edit-link\">\n              <i class=\"{{tag_class_name}}-flyout-delete-icon fs fs-pencil\"></i> Edit\n            </a>\n            <a href=\"javascript:void(0)\"\n               class=\"{{tag_class_name}}-flyout-link {{tag_class_name}}-flyout-delete-link\">\n              <i class=\"{{tag_class_name}}-flyout-delete-icon fs fs-cross3\"></i> Delete\n            </a>\n          </div>\n          <h2 class=\"{{tag_class_name}}-flyout-title\">{{tag}}</h2>\n          {{#description}}\n          <p class=\"{{tag_class_name}}-flyout-description\">{{description}}</p>\n          {{/description}}\n          {{#custom_url}}\n          <a href=\"{{custom_url}}\" class=\"{{tag_class_name}}-flyout-button\"\n              target=\"{{target}}\">\n              <i class=\"{{tag_class_name}}-flyout-button-icon fs fs-cart\"></i>\n              <span class=\"{{tag_class_name}}-flyout-button-text\">{{cta_text}}</span>\n          </a>\n          {{/custom_url}}\n          {{#price}}\n          <span class=\"{{tag_class_name}}-flyout-price\">{{price}}</span>\n          {{/price}}\n        </div>\n        <a class=\"{{tag_class_name}}-flyout-close-link\" href=\"javascript:void(0);\">&#8592;</a>\n    {{/product}}\n    </div>\n    {{{form_html}}}\n</div>\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{tag_class_name}}\">\n    <i class=\"{{tag_class_name}}-icon fs fs-tag2\"></i>\n    <div class=\"{{tag_class_name}}-flyout\">\n    {{#product}}\n        <div class=\"{{tag_class_name}}-flyout-card\">\n            {{#image_small_url}}\n            <div class=\"{{tag_class_name}}-flyout-image\">\n            <img src=\"{{image_small_url}}\">\n            </div>\n            {{/image_small_url}}\n            <div class=\"{{tag_class_name}}-flyout-text\">\n            <div class=\"{{tag_class_name}}-flyout-actions\">\n                <a href=\"javascript:void(0)\"\n                class=\"{{tag_class_name}}-flyout-link {{tag_class_name}}-flyout-edit-link\">\n                <i class=\"{{tag_class_name}}-flyout-delete-icon fs fs-pencil\"></i> Edit\n                </a>\n                <a href=\"javascript:void(0)\"\n                class=\"{{tag_class_name}}-flyout-link {{tag_class_name}}-flyout-delete-link\">\n                <i class=\"{{tag_class_name}}-flyout-delete-icon fs fs-cross3\"></i> Delete\n                </a>\n            </div>\n            <h2 class=\"{{tag_class_name}}-flyout-title\">{{tag}}</h2>\n            {{#custom_url}}\n            <a href=\"{{custom_url}}\" class=\"{{tag_class_name}}-flyout-button\"\n                target=\"{{target}}\">\n                <i class=\"{{tag_class_name}}-flyout-button-icon fs fs-cart\"></i>\n                <span class=\"{{tag_class_name}}-flyout-button-text\">{{cta_text}}</span>\n            </a>\n            {{/custom_url}}\n            {{#description}}\n            <p class=\"{{tag_class_name}}-flyout-description\">{{description}}</p>\n            {{/description}}\n\n            {{#price}}\n            <span class=\"{{tag_class_name}}-flyout-price\">{{price}}</span>\n            {{/price}}\n            </div>\n            <a class=\"{{tag_class_name}}-flyout-close-link\" href=\"javascript:void(0);\">&#8592;</a>\n        </div>\n    {{/product}}\n    </div>\n    {{{form_html}}}\n</div>\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var $ = $tackla;

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _product = __webpack_require__(62);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sliderProduct(tileData) {
	  var $view = $((0, _product2.default)(tileData));
	  $('.stacklapopup-slider-text-wrapper').append($view.hide());

	  var state = {
	    activeSlide: 0
	  };

	  function updateUI() {
	    $view.find('.stacklapopup-slider-products-slideshow-content').removeClass('active before after').each(function (index) {
	      if (index === state.activeSlide) {
	        $(this).addClass('active');
	      }
	      if (index < state.activeSlide) {
	        $(this).addClass('before');
	      }
	      if (index > state.activeSlide) {
	        $(this).addClass('after');
	      }
	    });

	    $view.find('.stacklapopup-slider-products-slideshow-thumbnail').removeClass('active').eq(state.activeSlide).addClass('active');

	    $view.find('.stacklapopup-slider-products-slideshow-thumbnails').width(tileData.products.length * 125).css({
	      transform: 'translate(' + Math.max(state.activeSlide - 2, 0) * -125 + 'px, 0)'
	    });

	    if (state.activeSlide === 0) {
	      $view.find('.stacklapopup-slider-products-slideshow-nav-prev').hide();
	    } else {
	      $view.find('.stacklapopup-slider-products-slideshow-nav-prev').show();
	    }

	    if (state.activeSlide === tileData.products.length - 1) {
	      $view.find('.stacklapopup-slider-products-slideshow-nav-next').hide();
	    } else {
	      $view.find('.stacklapopup-slider-products-slideshow-nav-next').show();
	    }
	  }
	  updateUI();

	  // parent actions
	  $('.stacklapopup-slider-products-item').on('click', function () {
	    state.activeSlide = $(this).index();
	    $view.fadeIn(300);
	    updateUI();
	  });

	  // local actions
	  $view.find('.stacklapopup-slider-products-slideshow-close-button').on('click', function () {
	    $view.fadeOut(300);
	  });
	  $view.find('.stacklapopup-slider-products-slideshow-thumbnail').on('click', function () {
	    state.activeSlide = $(this).index();
	    updateUI();
	  });
	  $view.find('.stacklapopup-slider-products-slideshow-nav-prev').on('click', function () {
	    state.activeSlide = Math.max(state.activeSlide - 1, 0);
	    updateUI();
	  });
	  $view.find('.stacklapopup-slider-products-slideshow-nav-next').on('click', function () {
	    state.activeSlide = Math.min(state.activeSlide + 1, tileData.products.length - 1);
	    updateUI();
	  });
	} /* global $ */

	exports.default = sliderProduct;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow\">");t.b("\n" + i);t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-close-wrapper\">");t.b("\n" + i);t.b("        <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-close-button\"><i class=\"fs fs-arrow-left5\"></i> Back</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-main stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("products",c,p,1),c,p,0,342,1396,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-content stacklapopup-clearfix\">");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-image\">");t.b("\n" + i);t.b("                <img src=\"");t.b(t.v(t.f("image_small_url",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-text\">");t.b("\n" + i);if(t.s(t.f("tag",c,p,1),c,p,0,637,766,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-title\">");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("tag",c,p,0)));t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("custom_url",c,p,1),c,p,0,807,977,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-cta\" href=\"");t.b(t.v(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("cta_text",c,p,0)));t.b("\n" + i);t.b("                </a>");t.b("\n" + i);});c.pop();}if(t.s(t.f("price",c,p,1),c,p,0,1019,1151,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-price\">");t.b("\n" + i);t.b("                    $");t.b(t.v(t.f("price",c,p,0)));t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("description",c,p,1),c,p,0,1194,1337,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-description\">");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("description",c,p,0)));t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-thumbnails-wrapper stacklapopup-clearfix\">");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-nav-prev\">");t.b("\n" + i);t.b("                <i class=\"fs fs-arrow-left5\"></i>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-thumbnails\">");t.b("\n" + i);if(t.s(t.f("products",c,p,1),c,p,0,1759,1916,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-thumbnail\" style=\"background-image: url('");t.b(t.v(t.f("image_small_url",c,p,0)));t.b("')\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-slideshow-nav-next\">");t.b("\n" + i);t.b("                <i class=\"fs fs-arrow-right5\"></i>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{class_prefix}}-products-slideshow\">\n    <div class=\"{{class_prefix}}-products-slideshow-close-wrapper\">\n        <a class=\"{{class_prefix}}-products-slideshow-close-button\"><i class=\"fs fs-arrow-left5\"></i> Back</a>\n    </div>\n    <div class=\"{{class_prefix}}-products-slideshow-main stacklapopup-clearfix\">\n        {{#products}}\n        <div class=\"{{class_prefix}}-products-slideshow-content stacklapopup-clearfix\">\n            <div class=\"{{class_prefix}}-product-image\">\n                <img src=\"{{image_small_url}}\" />\n            </div>\n            <div class=\"{{class_prefix}}-product-text\">\n                {{#tag}}\n                <div class=\"{{class_prefix}}-product-title\">\n                    {{tag}}\n                </div>\n                {{/tag}}\n\n                {{#custom_url}}\n                <a class=\"{{class_prefix}}-product-cta\" href=\"{{custom_url}}\" target=\"{{target}}\">\n                    {{cta_text}}\n                </a>\n                {{/custom_url}}\n                {{#price}}\n                <div class=\"{{class_prefix}}-product-price\">\n                    ${{price}}\n                </div>\n                {{/price}}\n                {{#description}}\n                <div class=\"{{class_prefix}}-product-description\">\n                    {{description}}\n                </div>\n                {{/description}}\n            </div>\n        </div>\n        {{/products}}\n    </div>\n\n        <div class=\"{{class_prefix}}-products-slideshow-thumbnails-wrapper stacklapopup-clearfix\">\n            <div class=\"{{class_prefix}}-products-slideshow-nav-prev\">\n                <i class=\"fs fs-arrow-left5\"></i>\n            </div>\n            <div class=\"{{class_prefix}}-products-slideshow-thumbnails\">\n            {{#products}}\n            <div class=\"{{class_prefix}}-products-slideshow-thumbnail\" style=\"background-image: url('{{image_small_url}}')\">\n            </div>\n            {{/products}}\n            </div>\n            <div class=\"{{class_prefix}}-products-slideshow-nav-next\">\n                <i class=\"fs fs-arrow-right5\"></i>\n            </div>\n        </div>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var $ = $tackla;

	/* global $, stacklaXSSFilter */
	/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers, requireDollarBeforejQueryAssignment */
	/* jshint maxparams: 11, scripturl: true, maxdepth: 4 */
	'use strict';

	/**
	 * Extend tile data with extra fields for rendering HTML with Mustache template.
	 *
	 * @class Decorator
	 * @static
	 * @usage
	 *
	 *     var Decorator = require('./decorator');
	 *     var data = Decorator.decorate(tile);
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(18);

	var _util2 = __webpack_require__(35);

	var _interaction = __webpack_require__(64);

	var cx = __webpack_require__(65),
	    _ = __webpack_require__(9),
	    S = __webpack_require__(66),
	    twemoji = __webpack_require__(70),
	    twttr = __webpack_require__(71),
	    Hogan = __webpack_require__(37),
	    Decorator;

	function stripTags(str) {
	  return str.replace(/(<([^>]+)>)/gi, '');
	}

	// FIXME - Workaround
	// https://github.com/twitter/hogan.js/issues/199#issuecomment-93456083
	var renderer = function renderer(self) {
	  return function (text) {
	    return Hogan.compile(text).render(self);
	  };
	};
	var createLambda = function createLambda(lambda) {
	  return function () {
	    return function (text) {
	      return lambda.call(this, text, renderer(this));
	    };
	  };
	};

	Decorator = {
	  parseMessage: function parseMessage(source, message, entities, media) {
	    //stackla html post, xss sanitize html
	    if ((source === 'stackla' || source === 'sta_feed') && typeof media !== 'undefined' && media && media === 'html') {
	      return stacklaXSSFilter(message);
	    }

	    if (source === 'twitter') {
	      if (!entities) {
	        return message;
	      }

	      // Convert Twitter entities to links
	      message = twttr.autoLink(message, {
	        urlEntities: entities,
	        targetBlank: true
	      });

	      return message;
	    } else {
	      var regexp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
	          newMessage = $.trim(message);

	      if (newMessage) {
	        // strip tags
	        newMessage = $('<div>').html(newMessage).text();

	        //remove leading or ending new line characters
	        newMessage = newMessage.replace(/^[\n\r]*/, '');
	        newMessage = newMessage.replace(/[\n\r]*$/, '');
	        newMessage = newMessage.replace(regexp, "<a href='$1' target='_new'>$1</a>");
	        newMessage = newMessage.replace(/[\n]+/g, '<br />');

	        // facebook @follows
	        if (source === 'facebook') {
	          var followReg = /@\[[^\]]*\]/g;
	          var matches = newMessage.match(followReg);
	          if (matches && (typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches.length) {
	            var linkReg = /@\[([^:\]]*):([^:\]]*):([^:\]]*)\]/;
	            matches.forEach(function (link, i) {
	              link = link.replace(linkReg, "<a href='http://www.facebook.com/$1' target='_new'>$3</a>");
	              newMessage = newMessage.replace(matches[i], link);
	            });
	          }
	        }

	        return newMessage;
	      } else {
	        return '';
	      }
	    }
	  },
	  getAvatar: function getAvatar(data) {
	    var imagePath = 'https://web-assets.stackla.com/app.stackla.com/media/images/';
	    if ((data.source === 'stackla' || data.source === 'sta_feed') && !data.avatar) {
	      data.avatar = imagePath + 'stackla-logo-80x80.20141013.png';
	      data.show_stackla_logo = true;
	    }

	    return data.avatar;
	  },
	  getCaption: function getCaption(data) {
	    var caption, message, entities;
	    if (data.message) {
	      message = stripTags(data.message);
	      entities = data.entitlements;
	      caption = Decorator.parseMessage(data.source, message, entities, data.media);
	    }
	    return caption;
	  },
	  getClassNames: function getClassNames(data, widgetStyleName) {
	    var classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName),
	        classNames = [classPrefix + '-content-wrap', data.source, data.media],
	        options = data.options,
	        showAdditionalInfo = options.show_additional_info,
	        authorEnabled;

	    // Move close button if no author module.
	    authorEnabled = showAdditionalInfo;
	    if (!authorEnabled || data.anonymous === true || data.content_only === true || data.source === 'stackla' && data.media === 'html') {
	      if (!data.show_products) {
	        classNames.push(classPrefix + '-bare');
	      }
	    }

	    if (navigator.appVersion.indexOf('MSIE 8.') !== -1) {
	      classNames.push('ie8');
	    }

	    if (options.layout === 'portrait') {
	      classNames.push(classPrefix + '-vertical', classPrefix + '-portrait');
	    } else if (options.layout === 'landscape') {
	      classNames.push(classPrefix + '-horizontal', classPrefix + '-landscape');
	    } else if (options.layout === 'auto') {
	      classNames.push(classPrefix + '-auto');
	    }

	    var priority = 10000,
	        tagData = data.allTagData ? data.allTagData : [];

	    if (data.tags && data.tags.length) {
	      for (var i in tagData) {
	        if (!tagData.hasOwnProperty(i)) {
	          continue;
	        }
	        var tid = tagData[i].id,
	            tileClassName = tagData[i].type === 'product' ? 'contains-product-' + tagData[i].slug : 'contains-tag-' + tagData[i].slug,
	            found = false;

	        for (var k in data.tags) {
	          if (data.tags[k] === tid) {
	            found = true;
	          }
	        }

	        if (!found) {
	          continue;
	        }
	        classNames.push(tileClassName);

	        if (tagData[i].priority && tagData[i].priority < priority) {
	          priority = tagData[i].priority;
	        }

	        if (options.show_tags && tagData[i].publicly_visible === '1') {
	          data.show_tags = true;
	        }
	      }
	    }

	    classNames = cx(classNames, data.show_author && classPrefix + '-has-author', data.show_title && classPrefix + '-has-title', data.show_html && classPrefix + '-has-html', data.show_timestamp && classPrefix + '-has-timestamp', data.show_tags && classPrefix + '-has-tags', data.show_products && classPrefix + '-has-products', data.show_caption && classPrefix + '-has-caption', data.show_reply && classPrefix + '-has-reply', data.show_interactions && classPrefix + '-has-interactions', data.show_twitter_intent && classPrefix + '-has-twitter-intent', data.show_interactions && !data.show_content && !data.show_timestamp && classPrefix + '-interactions-solo', priority !== 10000 && 'priority-' + priority, !data.show_author && !data.show_title && !data.show_caption && !data.show_html && !data.show_timestamp && !data.show_tags && !data.show_interactions && !data.show_products && classPrefix + '-solo');

	    return classNames;
	  },
	  getEmbedData: function getEmbedData(data) {
	    var isVisible, html, width, height;

	    if (!data.embedly || !data.embedly.length) {
	      return null;
	    }

	    isVisible = data.embedly.some(function (embed) {
	      if (embed.type !== 'original_url') {
	        return false;
	      }

	      width = 644;
	      height = parseInt(embed.data.height * (644 / embed.data.width), 10);

	      html = embed.data.html;
	      if (html) {
	        html = html.replace(/class="[^"]+"/, 'class="stacklapopup-embed"');
	        html = html.replace(/width="[^"]+"/, 'width="100%"');
	        html = html.replace(/height="[^"]+"/, 'height="' + height + '"');
	      } else if (embed.data.thumbnail_url) {
	        html = '<img src="' + embed.data.thumbnail_url + '" width="100%"/>';
	      } else {
	        return false;
	      }

	      return true;
	    });

	    if (!isVisible) {
	      return null;
	    }

	    return {
	      height: height,
	      html: html,
	      width: width
	    };
	  },
	  getEmojiParser: createLambda(function (text, render) {
	    return twemoji.parse(render(text), { className: 'stacklapopup-emoji' });
	  }),
	  getImageDimension: function getImageDimension(data) {
	    var width = '',
	        height = '',
	        hasStandardImage = data.imageWidth && data.imageHeight ? true : false,
	        hasSmallImage = data.image_width_s && data.image_height_s ? true : false;

	    if (data.image) {
	      width = hasStandardImage ? data.imageWidth : '';
	      height = hasStandardImage ? data.imageHeight : '';
	    } else if (data.image_s) {
	      width = hasSmallImage ? data.image_width_s : '';
	      height = hasSmallImage ? data.image_height_s : '';
	    }

	    return [width, height];
	  },
	  getProducts: function getProducts(data) {
	    var products = [],
	        tags = data.tags_extended,
	        tag,
	        i;

	    if (!tags) {
	      return [];
	    }

	    for (i in tags) {
	      if (tags.hasOwnProperty(i) && tags[i].type === 'product' && tags[i].publicly_visible !== 0 && tags[i].publicly_visible !== '0' // API not consistent
	      ) {
	          tag = tags[i];
	          tag.cta_text = tag.cta_text || 'Buy Now';
	          tag.image_small_width = tag.image_small_width || null;
	          tag.image_small_height = tag.image_small_height || null;
	          products.push(tag);
	        }
	    }

	    return products;
	  },
	  getShopspots: function getShopspots(data) {
	    var shopspots = [];
	    _.each(data.hotspots, function (shopspot) {
	      if (!shopspot.tag || !shopspot.tag.tag) {
	        return;
	      }
	      shopspots.push({
	        id: shopspot._id,
	        label: shopspot.tag.tag,
	        value: shopspot.tag.id,
	        x: shopspot.coords[0],
	        y: shopspot.coords[1],
	        product: shopspot.tag
	      });
	    });

	    return shopspots;
	  },
	  getTags: function getTags(data) {
	    var tags = _.filter(data.tags_extended, { publicly_visible: 1 });
	    return _.map(tags, function (tag) {
	      return {
	        class_names: ['stacklapopup-tag', tag.type, 'tag-' + tag.slug, 'priority-' + tag.priority].join(' '),
	        slug: tag.slug,
	        target: tag.target,
	        text: tag.tag.replace(/\\/g, ''),
	        type: tag.type === 'product' ? 'product' : 'tag',
	        href: tag.custom_url,
	        is_product: tag.type === 'product'
	      };
	    });
	  },
	  getTitle: function getTitle(data) {
	    if (data.source !== 'rss') {
	      return data.title;
	    }
	    return S(data.title).decodeHTMLEntities().s.replace(/(<([^>]+)>)/gi, '');
	  },
	  getUserHandle: function getUserHandle(data) {
	    var source = data.source,
	        user = data.user;

	    if ((source === 'twitter' || source === 'instagram') && user) {
	      return '@' + user;
	    }

	    if (source === 'facebook' && data.to_facebook_name) {
	      return 'via ' + data.to_facebook_name;
	    }

	    return null;
	  },
	  getTemplateName: function getTemplateName(data) {
	    var layout = data.options.layout,
	        style = data.style;

	    if (style === 'base_quadrant') {
	      return 'quadrant';
	    }

	    if (layout === 'portrait') {
	      if (style === 'fluid' || style === 'horizontal-fluid') {
	        return 'portrait';
	      } else if (style === 'base_waterfall' || style === 'base_carousel' || style === 'base_blankcanvas' || style === 'base_grid' || style === 'base_masonry') {
	        return 'base-portrait';
	      }
	    } else if (layout === 'landscape') {
	      if (style === 'fluid' || style === 'horizontal-fluid') {
	        //return (showProducts) ? 'landscape-products' : 'landscape';
	        return 'landscape';
	      } else if (style === 'base_waterfall' || style === 'base_carousel' || style === 'base_blankcanvas' || style === 'base_grid' || style === 'base_masonry') {
	        return 'base-landscape';
	      }
	    }
	    return style;
	  },
	  decorate: function decorate(
	  // jshint ignore:line
	  t, options, widgetId, tileId, videoHtml, permission, productsHtml, shopspotsEnabled, uniqueId, widgetNodeList, styleName, appearance, filterId, focusOn, widgetSetting) {
	    var data = {},
	        textContentEnabled = options.show_additional_info,
	        dimension,
	        show_powered_by_stackla = options.show_powered_by_stackla ? options.show_powered_by_stackla : 0,
	        ecalData = t.ecalData ? $.parseJSON(t.ecalData) : false;

	    var widgetStyleName = _.get(widgetSetting, 'style.style');
	    var classPrefix = (0, _util2.getClassNamePrefix)(widgetStyleName);

	    // Check if P3P being configured properly
	    data.has_permission_configured = true;
	    if (permission && permission.on) {
	      if (!permission.userId || !permission.userHash) {
	        data.has_permission_configured = false;
	      }
	    }

	    data.show_vote = (options.tile_show_votes || options.show_votes && (0, _interaction.checkVote)(t, widgetSetting.competition)) && data.has_permission_configured;

	    $.extend(data, {
	      author_link: t.original_url || 'javascript:void(0)',
	      caption: Decorator.getCaption(t),
	      claimed: t.claimed ? true : false,
	      class_prefix: classPrefix,
	      ecal_data: ecalData,
	      emoji: Decorator.getEmojiParser,
	      id: tileId,
	      is_stackla: t.source === 'stackla' || t.source === 'sta_feed',
	      in_reply_to_avatar: t.in_reply_to_avatar || '//assetscdn.stackla.com/media/images/avatar-mask.png',
	      in_reply_to_usename: t.in_reply_to_name || t.in_reply_to_user,
	      in_reply_to_timephrase: (0, _util.getTimeAgo)(t.in_reply_to_source_created_at, false),
	      options: options,
	      permission: permission,
	      powered_by_stackla_url: window.POWERED_BY_STACKLA_URL,
	      share_text: t.share_text ? t.share_text.replace(/["']/g, '\\$&') : '',
	      sharing_title: options.sharing_title,
	      apply_custom_sharing_title_on_miss_title: options.apply_custom_sharing_title_on_miss_title,
	      sharing_text: options.sharing_text,
	      show_actions: (options.show_likes || options.show_dislikes || options.show_sharing || options.tile_show_votes || t.tile_show_votes || data.show_vote || options.show_comments) && !t.content_only,
	      show_author: options.show_additional_info && !t.anonymous && !t.content_only && (t.user || t.name),
	      show_quote: textContentEnabled && t.message,
	      show_caption: textContentEnabled && t.message,
	      show_claim: !t.content_only && options.claimEnabled ? true : false,
	      show_comments: options.show_comments && t.enable_comments,
	      show_content: textContentEnabled,
	      show_dislikes: !t.content_only && options.show_dislikes,
	      show_html: t.html ? true : false,
	      show_likes: !t.content_only && options.show_likes,
	      show_nav: options.show_nav,
	      show_nav_left: !!(options.show_nav && t.prevLightboxId), // only show previous when there is previous
	      show_nav_right: !!options.show_nav, // always show next
	      show_products: options.show_products && t.productsHtml ? true : false,
	      show_reply: t.in_reply_to_message,
	      show_shopspots: shopspotsEnabled === 1 && t.media === 'image' && t.hotspots && t.hotspots.length,
	      show_sharing: !t.content_only && options.show_sharing ? true : false,
	      show_timestamp: options.show_additional_info && t.content_only === false,
	      show_title: t.title ? true : false,
	      show_twitter_intent: t.source === 'twitter',
	      show_powered_by_stackla: show_powered_by_stackla,
	      show_video: t.media === 'video',
	      show_image: t.media === 'image',
	      show_audio: t.media === 'audio',
	      style: styleName,
	      timephrase: (0, _util.getTimeAgo)(t.source_created_at, true),
	      title: t.title ? t.title : ecalData.name ? ecalData.name : false,
	      unique_id: uniqueId,
	      user_name: t.name || t.user,
	      video_html: videoHtml,
	      widget_id: widgetId
	    }, t);

	    data.avatar = Decorator.getAvatar(data);
	    data.shopspots = Decorator.getShopspots(data);
	    data.products = Decorator.getProducts(data);
	    data.tags = Decorator.getTags(data);
	    data.user_handle = Decorator.getUserHandle(data);
	    data.show_footer = data.show_timestamp || data.show_twitter_intent;
	    data.show_interactions = data.show_vote || data.show_claim || data.show_actions || data.show_sharing;
	    data.show_products = options.show_products && data.products.length;
	    data.show_tags = options.show_tags && data.tags.length > 0;
	    data.show_footer = data.show_timestamp || data.show_twitter_intent;
	    data.show_sharing = !data.content_only && options.show_sharing ? true : false;
	    data.classnames = Decorator.getClassNames(data, widgetSetting.style.style);
	    data.show_comments = options.show_comments && data.enable_comments;
	    data.template_name = Decorator.getTemplateName(data);
	    data.disallow_comment = permission && !permission.parent_page_ext_username;
	    data.title = Decorator.getTitle(data);

	    // Keep original image size
	    dimension = Decorator.getImageDimension(data);
	    if (t.media === 'image' && dimension[0] && dimension[1]) {
	      data.max_image_width = dimension[0];
	      data.max_image_height = dimension[1];
	      data.image_classname = classPrefix + '-lazyload';
	      data.image_padding_bottom_percent = 100 * dimension[1] / dimension[0] + '%';
	    }

	    // Add interactionData.comment
	    data.interactionData = data.interactionData || {};
	    data.interactionData.comments = data.interactionData.comments || {};
	    if (typeof data.numComments !== 'undefined' && typeof data.numQueuedComments !== 'undefined') {
	      data.interactionData.comments.count = data.numComments - data.numQueuedComments;
	      data.interactionData.comments.on = data.interactionData.comments.count > 0;
	    }

	    // required by the sharing button. Facebook does not allow repost to Facebook.
	    data.allow_share_to_facebook = true; //t.source !== 'facebook';
	    // required by the sharing button. Pinterest only accepts image posts.
	    data.allow_share_to_pinterest = t.media === 'image';

	    data.embed_data = Decorator.getEmbedData(data);
	    data.show_embed = _.isObject(data.embed_data);
	    data.show_video = data.show_embed ? false : data.show_video;
	    data.show_image = data.show_embed ? false : data.show_image;
	    data.show_media = !!(data.media !== 'text' && data.media !== 'html');
	    data.show_audio = data.show_embed ? false : data.show_audio;
	    data.embed_html = data.show_embed ? data.embed_data.html : '';
	    if (data.show_audio && !data.image) {
	      data.image = 'https://assetscdn.stackla.com/media/images/common/audio-fallback.png';
	    }
	    data.show_likes = !t.content_only && options.show_likes;
	    data.show_dislikes = !t.content_only && options.show_dislikes;
	    data.show_votes = options.show_votes && (0, _interaction.checkVote)(t, widgetSetting.competition);
	    return data;
	  }
	};

	module.exports = Decorator;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*** IMPORTS FROM imports-loader ***/
	var _ = __webpack_require__(9);

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*global $, _, getUrlVars, CryptoJS */
	/**
	 * Interaction module contains functions for like, dislike, and vote.
	 *
	 * Usage:
	 *
	 * // ES5
	 * var Interaction = _.get(window, 'Stackla.Widget.Interaction', {});
	 * // ES6
	 * // import Interaction from 'widget/common/interaction';
	 *
	 * // Bind inline tile elements
	 * Interaction.bindLikeDislike(
	 *     $track,
	 *     '.tile-interaction-like, .tile-interaction-dislike',
	 *     function () {return that.dataProvider.data},
	 *     widgetSetting
	 * );
	 *
	 * Interaction.bindVote(
	 *     $track,
	 *     '.tile-interaction-vote',
	 *     function () {return that.dataProvider.data},
	 *     widgetSetting
	 * );
	 *
	 * // Trigger it programmatically
	 * Interaction.likeDislike(tileData, actionType, widgetSetting, callback).then();
	 * Interaction.vote(tileData, actionType, widgetSetting, callback).then();
	 */
	(function (root, factory) {
	  'use strict';

	  if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	    module.exports = factory();
	  } else {
	    _.set(root, 'Stackla.Widget.Interaction', factory());
	  }
	})(undefined, function () {
	  'use strict';

	  /**
	   * Add or remove the interaction cookie.
	   *
	   * @method addCookie
	   * @param {String} actionType Interaction action type including 'like', 'dislike', and 'vote'.
	   * @param {Object} tileData Tile data
	   * @param {Boolean} isOn Add or remove the cookie
	   * @param {Object} widgetSetting Widget setting object
	   */

	  function addCookie(actionType, tileData, isOn, widgetSetting) {
	    var id = tileData._id ? tileData._id.$id : null,
	        key = getCookieKey(actionType),
	        cookieValues = $.cookie(key);

	    if (!key) {
	      return;
	    }

	    id = actionType === 'vote' ? getVoteId(id, widgetSetting) : id;
	    cookieValues = _.isString(cookieValues) ? cookieValues.split(',') : [];
	    cookieValues = isOn ? _.union(cookieValues, [id]) : _.without(cookieValues, id);

	    var anHourLater = new Date(new Date().getTime() + 3600000);
	    $.cookie(key, cookieValues.join(','), {
	      expires: anHourLater,
	      path: '/'
	    });
	  }

	  function bindLikeDislike($container, selector, dataFn, widgetSetting) {
	    var isLocked = false,
	        clickHandler;

	    clickHandler = function clickHandler(e) {
	      var $link = $(e.currentTarget),
	          id = $link.data('id'),
	          action = $link.data('action'),
	          allTileData = dataFn(),
	          tileData = _.find(allTileData, { id: id });

	      e.stopPropagation();

	      if (action !== 'like' && action !== 'dislike') {
	        return;
	      }

	      if (isLocked) {
	        return;
	      }

	      isLocked = true;
	      likeDislike(tileData, action, widgetSetting).then(function () {
	        $(document).trigger('tileLike', [{ _id: id }]);
	      }, function (error, revert) {
	        window.alert(error);
	        if (revert) {
	          revert(error === 'You have voted.');
	        }
	      }).always(function () {
	        isLocked = false;
	      });
	    };

	    $($container).on('click', selector, clickHandler);
	  }

	  function bindVote($container, selector, dataFn, widgetSetting) {
	    var isLocked = false,
	        clickHandler;

	    clickHandler = function clickHandler(e) {
	      var $link = $(e.currentTarget),
	          id = $link.data('id'),
	          action = $link.data('action'),
	          allTileData = dataFn(),
	          tileData = _.find(allTileData, { id: id });

	      e.stopPropagation();

	      if (action !== 'vote') {
	        return;
	      }

	      if (isLocked) {
	        return;
	      }

	      isLocked = true;

	      vote(tileData, widgetSetting).then(function () {
	        $(document).trigger('tileVote', [{ _id: id }]);
	      }, function (error, revert) {
	        window.alert(error);
	        if (revert) {
	          revert(error === 'You have voted.');
	        }
	      }).always(function () {
	        isLocked = false;
	      });
	    };

	    $($container).on('click', selector, clickHandler);
	  }

	  /**
	   * Check if the tile is available for vote.
	   *
	   * @method checkVote
	   * @param {Object} tile Tile data
	   * @param {Object} competitions Competitions data
	   * @return {Boolean} return true if this tile is available for vote
	   */
	  function checkVote(tile, competitions) {
	    if (!tile || !competitions) {
	      return false;
	    }

	    return _.some(competitions, function (competition) {
	      var matched = _.intersection(tile.tags, competition.voting_tags);

	      return matched.length > 0;
	    });
	  }

	  /**
	   * Creates a function that when executed, perform the given action
	   * to the given tile and update the count.
	   *
	   * When the given delta is 0, it creates a revert function that
	   * always revert the values to its original state.
	   *
	   * @param {String} tileId
	   * @param {String} actionType Enum in 'like' or 'dislike'
	   * @param {Number} delta Enum in -1, 0 or +1
	   * @param {Array} allTileData
	   * @param {Object} widgetSetting
	   * @returns {Function}
	   */
	  function fnUpdateLikeDislike(tileData, actionType, delta, widgetSetting) {
	    var tileId = tileData.id,
	        propKey = actionType === 'like' ? 'numUps' : 'numDowns',
	        newCount = tileData[propKey] + delta,
	        isActive = false,
	        $link = $('.tile[data-id=' + tileId + '] .tile-interaction-' + actionType);

	    if (!tileData) {
	      return $.noop;
	    }

	    isActive = hasCookie(actionType, tileData, widgetSetting);
	    if (delta > 0) {
	      isActive = true;
	    } else if (delta < 0) {
	      isActive = false;
	    }

	    // For revert, we need to keep the newCount and isActive in original value by returning a function.
	    return function (textOnly) {
	      isActive = textOnly ? hasCookie(actionType, tileData, widgetSetting) : isActive;
	      isActive = !newCount ? false : isActive;
	      tileData[propKey] = newCount;

	      if ($link.length) {
	        $link.toggleClass('on', isActive);
	        $link.find('.tile-interaction-count').text(newCount ? newCount : '');
	      }

	      addCookie(actionType, tileData, isActive, widgetSetting);
	    };
	  }

	  function getCookieKey(actionType) {
	    var key = null;

	    switch (actionType) {
	      case 'up':
	      case 'like':
	        key = 'votedUp';
	        break;
	      case 'down':
	      case 'dislike':
	        key = 'votedDown';
	        break;
	      case 'vote':
	        key = 'votedCompetitionStac9392';
	        break;
	    }

	    return key;
	  }

	  function getVoteId(id, widgetSetting) {
	    var enabled = _.get(widgetSetting, 'style.parent_page_permission');

	    if (!enabled) {
	      return id;
	    }

	    id = [getUrlVars().data_user_id, widgetSetting.stack_id, id].join(',');

	    return CryptoJS.MD5(id).toString().substr(0, 6);
	  }

	  function likeDislike(tileData, action, widgetSetting, callback) {
	    var $deferred = $.Deferred(),
	        reverseAction = action === 'like' ? 'dislike' : 'like',
	        revertThis = fnUpdateLikeDislike(tileData, action, 0, widgetSetting),
	        revertThat = fnUpdateLikeDislike(tileData, reverseAction, 0, widgetSetting),
	        hasInteraction = hasCookie(action, tileData, widgetSetting),
	        isAdd = !hasInteraction,
	        revert;

	    fnUpdateLikeDislike(tileData, action, hasInteraction ? -1 : 1, widgetSetting)();
	    if (hasCookie(reverseAction, tileData, widgetSetting)) {
	      // Move count from reverse action
	      fnUpdateLikeDislike(tileData, reverseAction, -1, widgetSetting)();
	      revert = function revert(textOnly) {
	        revertThis(textOnly);
	        revertThat(textOnly);
	      };
	    } else {
	      revert = function revert(textOnly) {
	        revertThis(textOnly);
	      };
	    }

	    sync(tileData.id, action, isAdd, widgetSetting).then(function (data) {
	      if (data.success) {
	        $deferred.resolve(data);
	      } else {
	        $deferred.reject(data.error, revert);
	      }
	    }, function (xhr, status, error) {
	      $deferred.reject(error, revert);
	    }).always(function () {
	      if (!_.isFunction(callback)) {
	        return;
	      }

	      var data = {};
	      data[action] = {
	        on: hasCookie(action, tileData, widgetSetting),
	        count: tileData[getPropKey(action)]
	      };
	      data[reverseAction] = {
	        on: hasCookie(reverseAction, tileData, widgetSetting),
	        count: tileData[getPropKey(reverseAction)]
	      };

	      callback(data);
	    });

	    return $deferred;
	  }

	  function getPropKey(actionType) {
	    return actionType === 'like' ? 'numUps' : 'numDowns';
	  }

	  function getVoteId(id, widgetSetting) {
	    var enabled = _.get(widgetSetting, 'style.parent_page_permission');

	    if (!enabled) {
	      return id;
	    }

	    id = [getUrlVars().data_user_id, widgetSetting.stack_id, id].join(',');

	    return CryptoJS.MD5(id).toString().substr(0, 6);
	  }

	  function hasCookie(actionType, tileData, widgetSetting) {
	    var key = getCookieKey(actionType),
	        id = tileData._id ? tileData._id.$id : null,
	        cookieValues = $.cookie(key);

	    if (!key) {
	      return false;
	    }

	    id = actionType === 'vote' ? getVoteId(id, widgetSetting) : id;
	    cookieValues = _.isString(cookieValues) ? cookieValues.split(',') : [];

	    return _.contains(cookieValues, id);
	  }

	  function fnUpdateVote(tileData, delta, widgetSetting) {
	    var tileId = tileData.id,
	        newCount = tileData.numVotes + delta,
	        $link = $('.tile[data-id=' + tileId + '] .tile-interaction-vote'),
	        isActive;

	    if (!tileData) {
	      return $.noop;
	    }

	    isActive = hasCookie('vote', tileData, widgetSetting);

	    // For revert, we need to keep the newCount and isActive in original value by returning a function.
	    return function () {
	      tileData.vote = newCount;

	      isActive = delta === 1 ? true : isActive;
	      if ($link.length) {
	        $link.toggleClass('on', isActive);
	        $link.find('.tile-interaction-count').text(newCount ? newCount : '');
	      }

	      addCookie('vote', tileData, isActive, widgetSetting);
	    };
	  }

	  function sync(tileId, action, isAdd, widgetSetting) {
	    var params = $.param({
	      wid: widgetSetting.guid,
	      tile: tileId,
	      up: action === 'like' ? 'up' : 'down',
	      add: isAdd ? 1 : 0
	    });

	    return $.ajax({
	      url: '/widget/like_dislike/' + widgetSetting.id,
	      data: params,
	      type: 'POST'
	    });
	  }

	  function vote(tileData, widgetSetting, callback) {
	    var tileId = tileData.id,
	        widgetId = widgetSetting.id,
	        $deferred = $.Deferred(),
	        isP3PEnabled = widgetSetting.style.parent_page_permissions,
	        hasVoted = hasCookie('vote', tileData, widgetSetting),
	        totalVote = tileData.numVotes ? parseInt(tileData.numVotes) : 0,
	        params = getUrlVars(),
	        url,
	        query,
	        revert;

	    if (hasVoted) {
	      return $deferred.reject('A vote has already been registered from this IP address.');
	    }

	    url = '/widget/competition_vote/' + widgetId;
	    query = ['wid=' + widgetSetting.guid, 'tile_id=' + tileId, 'addordelete=1'];

	    if (isP3PEnabled && (!params.data_user_id || !params.data_user_hash)) {
	      return $deferred.reject('Oops, an error occurred with the vote interaction: ' + 'Invalid user ID and hash combination.');
	    }

	    if (isP3PEnabled) {
	      query.push('data_user_id=' + params.data_user_id);
	      query.push('data_user_hash=' + params.data_user_hash);
	      query.push('data_user_name=' + (params.data_user_name || ''));
	    }

	    revert = fnUpdateVote(tileData, 0, widgetSetting);
	    fnUpdateVote(tileData, 1, widgetSetting)();

	    $.ajax({
	      url: url,
	      type: 'POST',
	      data: query.join('&')
	    }).then(function (data) {
	      if (data.success) {
	        $deferred.resolve(data);
	      } else {
	        $deferred.reject(data.error, revert);
	      }
	    }, function (xhr, status, error) {
	      $deferred.reject(error, revert);
	    }).always(function () {
	      if (!_.isFunction(callback)) {
	        return;
	      }
	      callback({
	        vote: {
	          on: true,
	          count: totalVote + 1
	        }
	      });
	    });

	    return $deferred;
	  }

	  return {
	    addCookie: addCookie,
	    bindLikeDislike: bindLikeDislike,
	    bindVote: bindVote,
	    checkVote: checkVote,
	    fnUpdateLikeDislike: fnUpdateLikeDislike,
	    getCookieKey: getCookieKey,
	    getVoteId: getVoteId,
	    hasCookie: hasCookie,
	    likeDislike: likeDislike,
	    sync: sync,
	    vote: vote
	  };
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
			// AMD. Register as an anonymous module.
			define(function () {
				return classNames;
			});
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}

	}());



/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*
	string.js - Copyright (C) 2012-2014, JP Richardson <jprichardson@gmail.com>
	*/

	!(function() {
	  "use strict";

	  var VERSION = '3.3.3';

	  var ENTITIES = {};

	  // from http://semplicewebsites.com/removing-accents-javascript
	  var latin_map={"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","ẞ":"SS","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ß":"ss","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"};

	//******************************************************************************
	// Added an initialize function which is essentially the code from the S
	// constructor.  Now, the S constructor calls this and a new method named
	// setValue calls it as well.  The setValue function allows constructors for
	// modules that extend string.js to set the initial value of an object without
	// knowing the internal workings of string.js.
	//
	// Also, all methods which return a new S object now call:
	//
	//      return new this.constructor(s);
	//
	// instead of:
	//
	//      return new S(s);
	//
	// This allows extended objects to keep their proper instanceOf and constructor.
	//******************************************************************************

	  function initialize (object, s) {
	    if (s !== null && s !== undefined) {
	      if (typeof s === 'string')
	        object.s = s;
	      else
	        object.s = s.toString();
	    } else {
	      object.s = s; //null or undefined
	    }

	    object.orig = s; //original object, currently only used by toCSV() and toBoolean()

	    if (s !== null && s !== undefined) {
	      if (object.__defineGetter__) {
	        object.__defineGetter__('length', function() {
	          return object.s.length;
	        })
	      } else {
	        object.length = s.length;
	      }
	    } else {
	      object.length = -1;
	    }
	  }

	  function S(s) {
	  	initialize(this, s);
	  }

	  var __nsp = String.prototype;
	  var __sp = S.prototype = {

	    between: function(left, right) {
	      var s = this.s;
	      var startPos = s.indexOf(left);
	      var endPos = s.indexOf(right, startPos + left.length);
	      if (endPos == -1 && right != null)
	        return new this.constructor('')
	      else if (endPos == -1 && right == null)
	        return new this.constructor(s.substring(startPos + left.length))
	      else
	        return new this.constructor(s.slice(startPos + left.length, endPos));
	    },

	    //# modified slightly from https://github.com/epeli/underscore.string
	    camelize: function() {
	      var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) {
	        return (c ? c.toUpperCase() : '');
	      });
	      return new this.constructor(s);
	    },

	    capitalize: function() {
	      return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
	    },

	    charAt: function(index) {
	      return this.s.charAt(index);
	    },

	    chompLeft: function(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	         s = s.slice(prefix.length);
	         return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },

	    chompRight: function(suffix) {
	      if (this.endsWith(suffix)) {
	        var s = this.s;
	        s = s.slice(0, s.length - suffix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },

	    //#thanks Google
	    collapseWhitespace: function() {
	      var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
	      return new this.constructor(s);
	    },

	    contains: function(ss) {
	      return this.s.indexOf(ss) >= 0;
	    },

	    count: function(ss) {
	      return __webpack_require__(67)(this.s, ss)
	    },

	    //#modified from https://github.com/epeli/underscore.string
	    dasherize: function() {
	      var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
	      return new this.constructor(s);
	    },
	    
	    equalsIgnoreCase: function(prefix) {
	      var s = this.s;
	      return s.toLowerCase() == prefix.toLowerCase()
	    },

	    latinise: function() {
	      var s = this.replace(/[^A-Za-z0-9\[\] ]/g, function(x) { return latin_map[x] || x; });
	      return new this.constructor(s);
	    },

	    decodeHtmlEntities: function() { //https://github.com/substack/node-ent/blob/master/index.js
	      var s = this.s;
	      s = s.replace(/&#(\d+);?/g, function (_, code) {
	        return String.fromCharCode(code);
	      })
	      .replace(/&#[xX]([A-Fa-f0-9]+);?/g, function (_, hex) {
	        return String.fromCharCode(parseInt(hex, 16));
	      })
	      .replace(/&([^;\W]+;?)/g, function (m, e) {
	        var ee = e.replace(/;$/, '');
	        var target = ENTITIES[e] || (e.match(/;$/) && ENTITIES[ee]);

	        if (typeof target === 'number') {
	          return String.fromCharCode(target);
	        }
	        else if (typeof target === 'string') {
	          return target;
	        }
	        else {
	          return m;
	        }
	      })

	      return new this.constructor(s);
	    },

	    endsWith: function() {
	      var suffixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < suffixes.length; ++i) {
	        var l  = this.s.length - suffixes[i].length;
	        if (l >= 0 && this.s.indexOf(suffixes[i], l) === l) return true;
	      }
	      return false;
	    },

	    escapeHTML: function() { //from underscore.string
	      return new this.constructor(this.s.replace(/[&<>"']/g, function(m){ return '&' + reversedEscapeChars[m] + ';'; }));
	    },

	    ensureLeft: function(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        return this;
	      } else {
	        return new this.constructor(prefix + s);
	      }
	    },

	    ensureRight: function(suffix) {
	      var s = this.s;
	      if (this.endsWith(suffix))  {
	        return this;
	      } else {
	        return new this.constructor(s + suffix);
	      }
	    },

	    humanize: function() { //modified from underscore.string
	      if (this.s === null || this.s === undefined)
	        return new this.constructor('')
	      var s = this.underscore().replace(/_id$/,'').replace(/_/g, ' ').trim().capitalize()
	      return new this.constructor(s)
	    },

	    isAlpha: function() {
	      return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase());
	    },

	    isAlphaNumeric: function() {
	      return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase());
	    },

	    isEmpty: function() {
	      return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
	    },

	    isLower: function() {
	      return this.isAlpha() && this.s.toLowerCase() === this.s;
	    },

	    isNumeric: function() {
	      return !/[^0-9]/.test(this.s);
	    },

	    isUpper: function() {
	      return this.isAlpha() && this.s.toUpperCase() === this.s;
	    },

	    left: function(N) {
	      if (N >= 0) {
	        var s = this.s.substr(0, N);
	        return new this.constructor(s);
	      } else {
	        return this.right(-N);
	      }
	    },

	    lines: function() { //convert windows newlines to unix newlines then convert to an Array of lines
	      return this.replaceAll('\r\n', '\n').s.split('\n');
	    },

	    pad: function(len, ch) { //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      len = len - this.s.length;
	      var left = Array(Math.ceil(len / 2) + 1).join(ch);
	      var right = Array(Math.floor(len / 2) + 1).join(ch);
	      return new this.constructor(left + this.s + right);
	    },

	    padLeft: function(len, ch) { //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
	    },

	    padRight: function(len, ch) { //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
	    },

	    parseCSV: function(delimiter, qualifier, escape, lineDelimiter) { //try to parse no matter what
	      delimiter = delimiter || ',';
	      escape = escape || '\\'
	      if (typeof qualifier == 'undefined')
	        qualifier = '"';

	      var i = 0, fieldBuffer = [], fields = [], len = this.s.length, inField = false, inUnqualifiedString = false, self = this;
	      var ca = function(i){return self.s.charAt(i)};
	      if (typeof lineDelimiter !== 'undefined') var rows = [];

	      if (!qualifier)
	        inField = true;

	      while (i < len) {
	        var current = ca(i);
	        switch (current) {
	          case escape:
	            //fix for issues #32 and #35
	            if (inField && ((escape !== qualifier) || ca(i+1) === qualifier)) {
	              i += 1;
	              fieldBuffer.push(ca(i));
	              break;
	            }
	            if (escape !== qualifier) break;
	          case qualifier:
	            inField = !inField;
	            break;
	          case delimiter:
	            if(inUnqualifiedString) {
	              inField=false;
	              inUnqualifiedString=false;
	            }
	            if (inField && qualifier)
	              fieldBuffer.push(current);
	            else {
	              fields.push(fieldBuffer.join(''))
	              fieldBuffer.length = 0;
	            }
	            break;
	          case lineDelimiter:
	            if(inUnqualifiedString) {
	              inField=false;
	              inUnqualifiedString=false;
	              fields.push(fieldBuffer.join(''))
	              rows.push(fields);
	              fields = [];
	              fieldBuffer.length = 0;
	            }
	            else if (inField) {
	              fieldBuffer.push(current);
	            } else {
	              if (rows) {
	                fields.push(fieldBuffer.join(''))
	                rows.push(fields);
	                fields = [];
	                fieldBuffer.length = 0;
	              }
	            }
	            break;
	          case ' ':
	            if (inField)
	              fieldBuffer.push(current);
	            break;
	          default:
	            if (inField)
	              fieldBuffer.push(current);
	            else if(current!==qualifier) {
	              fieldBuffer.push(current);
	              inField=true;
	              inUnqualifiedString=true;
	            }
	            break;
	        }
	        i += 1;
	      }

	      fields.push(fieldBuffer.join(''));
	      if (rows) {
	        rows.push(fields);
	        return rows;
	      }
	      return fields;
	    },

	    replaceAll: function(ss, r) {
	      //var s = this.s.replace(new RegExp(ss, 'g'), r);
	      var s = this.s.split(ss).join(r)
	      return new this.constructor(s);
	    },

	    splitLeft: function(sep, maxSplit, limit) {
	      return __webpack_require__(68)(this.s, sep, maxSplit, limit)
	    },

	    splitRight: function(sep, maxSplit, limit) {
	      return __webpack_require__(69)(this.s, sep, maxSplit, limit)
	    },

	    strip: function() {
	      var ss = this.s;
	      for(var i= 0, n=arguments.length; i<n; i++) {
	        ss = ss.split(arguments[i]).join('');
	      }
	      return new this.constructor(ss);
	    },

	    stripLeft: function (chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);

	      if (chars === undefined) {
	        pattern = /^\s+/g;
	      }
	      else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("^[" + regex + "]+", "g");
	      }

	      return new this.constructor(ss.replace(pattern, ""));
	    },

	    stripRight: function (chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);

	      if (chars === undefined) {
	        pattern = /\s+$/g;
	      }
	      else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("[" + regex + "]+$", "g");
	      }

	      return new this.constructor(ss.replace(pattern, ""));
	    },

	    right: function(N) {
	      if (N >= 0) {
	        var s = this.s.substr(this.s.length - N, N);
	        return new this.constructor(s);
	      } else {
	        return this.left(-N);
	      }
	    },

	    setValue: function (s) {
		  initialize(this, s);
		  return this;
	    },

	    slugify: function() {
	      var sl = (new S(new S(this.s).latinise().s.replace(/[^\w\s-]/g, '').toLowerCase())).dasherize().s;
	      if (sl.charAt(0) === '-')
	        sl = sl.substr(1);
	      return new this.constructor(sl);
	    },

	    startsWith: function() {
	      var prefixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < prefixes.length; ++i) {
	        if (this.s.lastIndexOf(prefixes[i], 0) === 0) return true;
	      }
	      return false;
	    },

	    stripPunctuation: function() {
	      //return new this.constructor(this.s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
	      return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
	    },

	    stripTags: function() { //from sugar.js
	      var s = this.s, args = arguments.length > 0 ? arguments : [''];
	      multiArgs(args, function(tag) {
	        s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
	      });
	      return new this.constructor(s);
	    },

	    template: function(values, opening, closing) {
	      var s = this.s
	      var opening = opening || Export.TMPL_OPEN
	      var closing = closing || Export.TMPL_CLOSE

	      var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
	      var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
	      var r = new RegExp(open + '(.+?)' + close, 'g')
	        //, r = /\{\{(.+?)\}\}/g
	      var matches = s.match(r) || [];

	      matches.forEach(function(match) {
	        var key = match.substring(opening.length, match.length - closing.length).trim();//chop {{ and }}
	        var value = typeof values[key] == 'undefined' ? '' : values[key];
	        s = s.replace(match, value);
	      });
	      return new this.constructor(s);
	    },

	    times: function(n) {
	      return new this.constructor(new Array(n + 1).join(this.s));
	    },

	    titleCase: function() {
	      var s = this.s;
	      if (s) {
	        s = s.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g,
	          function($1){
	            return $1.toUpperCase();
	          }
	        );
	      }
	      return new this.constructor(s);
	    },

	    toBoolean: function() {
	      if (typeof this.orig === 'string') {
	        var s = this.s.toLowerCase();
	        return s === 'true' || s === 'yes' || s === 'on' || s === '1';
	      } else
	        return this.orig === true || this.orig === 1;
	    },

	    toFloat: function(precision) {
	      var num = parseFloat(this.s)
	      if (precision)
	        return parseFloat(num.toFixed(precision))
	      else
	        return num
	    },

	    toInt: function() { //thanks Google
	      // If the string starts with '0x' or '-0x', parse as hex.
	      return /^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10)
	    },

	    trim: function() {
	      var s;
	      if (typeof __nsp.trim === 'undefined')
	        s = this.s.replace(/(^\s*|\s*$)/g, '')
	      else
	        s = this.s.trim()
	      return new this.constructor(s);
	    },

	    trimLeft: function() {
	      var s;
	      if (__nsp.trimLeft)
	        s = this.s.trimLeft();
	      else
	        s = this.s.replace(/(^\s*)/g, '');
	      return new this.constructor(s);
	    },

	    trimRight: function() {
	      var s;
	      if (__nsp.trimRight)
	        s = this.s.trimRight();
	      else
	        s = this.s.replace(/\s+$/, '');
	      return new this.constructor(s);
	    },

	    truncate: function(length, pruneStr) { //from underscore.string, author: github.com/rwz
	      var str = this.s;

	      length = ~~length;
	      pruneStr = pruneStr || '...';

	      if (str.length <= length) return new this.constructor(str);

	      var tmpl = function(c){ return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' '; },
	        template = str.slice(0, length+1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

	      if (template.slice(template.length-2).match(/\w\w/))
	        template = template.replace(/\s*\S+$/, '');
	      else
	        template = new S(template.slice(0, template.length-1)).trimRight().s;

	      return (template+pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length)+pruneStr);
	    },

	    toCSV: function() {
	      var delim = ',', qualifier = '"', escape = '\\', encloseNumbers = true, keys = false;
	      var dataArray = [];

	      function hasVal(it) {
	        return it !== null && it !== '';
	      }

	      if (typeof arguments[0] === 'object') {
	        delim = arguments[0].delimiter || delim;
	        delim = arguments[0].separator || delim;
	        qualifier = arguments[0].qualifier || qualifier;
	        encloseNumbers = !!arguments[0].encloseNumbers;
	        escape = arguments[0].escape || escape;
	        keys = !!arguments[0].keys;
	      } else if (typeof arguments[0] === 'string') {
	        delim = arguments[0];
	      }

	      if (typeof arguments[1] === 'string')
	        qualifier = arguments[1];

	      if (arguments[1] === null)
	        qualifier = null;

	       if (this.orig instanceof Array)
	        dataArray  = this.orig;
	      else { //object
	        for (var key in this.orig)
	          if (this.orig.hasOwnProperty(key))
	            if (keys)
	              dataArray.push(key);
	            else
	              dataArray.push(this.orig[key]);
	      }

	      var rep = escape + qualifier;
	      var buildString = [];
	      for (var i = 0; i < dataArray.length; ++i) {
	        var shouldQualify = hasVal(qualifier)
	        if (typeof dataArray[i] == 'number')
	          shouldQualify &= encloseNumbers;

	        if (shouldQualify)
	          buildString.push(qualifier);

	        if (dataArray[i] !== null && dataArray[i] !== undefined) {
	          var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
	          buildString.push(d);
	        } else
	          buildString.push('')

	        if (shouldQualify)
	          buildString.push(qualifier);

	        if (delim)
	          buildString.push(delim);
	      }

	      //chop last delim
	      //console.log(buildString.length)
	      buildString.length = buildString.length - 1;
	      return new this.constructor(buildString.join(''));
	    },

	    toString: function() {
	      return this.s;
	    },

	    //#modified from https://github.com/epeli/underscore.string
	    underscore: function() {
	      var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/([A-Z\d]+)([A-Z][a-z])/g,'$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	      return new this.constructor(s);
	    },

	    unescapeHTML: function() { //from underscore.string
	      return new this.constructor(this.s.replace(/\&([^;]+);/g, function(entity, entityCode){
	        var match;

	        if (entityCode in escapeChars) {
	          return escapeChars[entityCode];
	        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
	          return String.fromCharCode(parseInt(match[1], 16));
	        } else if (match = entityCode.match(/^#(\d+)$/)) {
	          return String.fromCharCode(~~match[1]);
	        } else {
	          return entity;
	        }
	      }));
	    },

	    valueOf: function() {
	      return this.s.valueOf();
	    },

	    //#Added a New Function called wrapHTML.
	    wrapHTML: function (tagName, tagAttrs) {
	      var s = this.s, el = (tagName == null) ? 'span' : tagName, elAttr = '', wrapped = '';
	      if(typeof tagAttrs == 'object') for(var prop in tagAttrs) elAttr += ' ' + prop + '="' +(new this.constructor(tagAttrs[prop])).escapeHTML() + '"';
	      s = wrapped.concat('<', el, elAttr, '>', this, '</', el, '>');
	      return new this.constructor(s);
	    }
	  }

	  var methodsAdded = [];
	  function extendPrototype() {
	    for (var name in __sp) {
	      (function(name){
	        var func = __sp[name];
	        if (!__nsp.hasOwnProperty(name)) {
	          methodsAdded.push(name);
	          __nsp[name] = function() {
	            String.prototype.s = this;
	            return func.apply(this, arguments);
	          }
	        }
	      })(name);
	    }
	  }

	  function restorePrototype() {
	    for (var i = 0; i < methodsAdded.length; ++i)
	      delete String.prototype[methodsAdded[i]];
	    methodsAdded.length = 0;
	  }


	/*************************************
	/* Attach Native JavaScript String Properties
	/*************************************/

	  var nativeProperties = getNativeStringProperties();
	  for (var name in nativeProperties) {
	    (function(name) {
	      var stringProp = __nsp[name];
	      if (typeof stringProp == 'function') {
	        //console.log(stringProp)
	        if (!__sp[name]) {
	          if (nativeProperties[name] === 'string') {
	            __sp[name] = function() {
	              //console.log(name)
	              return new this.constructor(stringProp.apply(this, arguments));
	            }
	          } else {
	            __sp[name] = stringProp;
	          }
	        }
	      }
	    })(name);
	  }


	/*************************************
	/* Function Aliases
	/*************************************/

	  __sp.repeat = __sp.times;
	  __sp.include = __sp.contains;
	  __sp.toInteger = __sp.toInt;
	  __sp.toBool = __sp.toBoolean;
	  __sp.decodeHTMLEntities = __sp.decodeHtmlEntities //ensure consistent casing scheme of 'HTML'


	//******************************************************************************
	// Set the constructor.  Without this, string.js objects are instances of
	// Object instead of S.
	//******************************************************************************

	  __sp.constructor = S;


	/*************************************
	/* Private Functions
	/*************************************/

	  function getNativeStringProperties() {
	    var names = getNativeStringPropertyNames();
	    var retObj = {};

	    for (var i = 0; i < names.length; ++i) {
	      var name = names[i];
	      if (name === 'to' || name === 'toEnd') continue;       // get rid of the shelljs prototype messup
	      var func = __nsp[name];
	      try {
	        var type = typeof func.apply('teststring');
	        retObj[name] = type;
	      } catch (e) {}
	    }
	    return retObj;
	  }

	  function getNativeStringPropertyNames() {
	    var results = [];
	    if (Object.getOwnPropertyNames) {
	      results = Object.getOwnPropertyNames(__nsp);
	      results.splice(results.indexOf('valueOf'), 1);
	      results.splice(results.indexOf('toString'), 1);
	      return results;
	    } else { //meant for legacy cruft, this could probably be made more efficient
	      var stringNames = {};
	      var objectNames = [];
	      for (var name in String.prototype)
	        stringNames[name] = name;

	      for (var name in Object.prototype)
	        delete stringNames[name];

	      //stringNames['toString'] = 'toString'; //this was deleted with the rest of the object names
	      for (var name in stringNames) {
	        results.push(name);
	      }
	      return results;
	    }
	  }

	  function Export(str) {
	    return new S(str);
	  };

	  //attach exports to StringJSWrapper
	  Export.extendPrototype = extendPrototype;
	  Export.restorePrototype = restorePrototype;
	  Export.VERSION = VERSION;
	  Export.TMPL_OPEN = '{{';
	  Export.TMPL_CLOSE = '}}';
	  Export.ENTITIES = ENTITIES;



	/*************************************
	/* Exports
	/*************************************/

	  if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
	    module.exports = Export;

	  } else {

	    if(typeof define === "function" && define.amd) {
	      define([], function() {
	        return Export;
	      });
	    } else {
	      window.S = Export;
	    }
	  }


	/*************************************
	/* 3rd Party Private Functions
	/*************************************/

	  //from sugar.js
	  function multiArgs(args, fn) {
	    var result = [], i;
	    for(i = 0; i < args.length; i++) {
	      result.push(args[i]);
	      if(fn) fn.call(args, args[i], i);
	    }
	    return result;
	  }

	  //from underscore.string
	  var escapeChars = {
	    lt: '<',
	    gt: '>',
	    quot: '"',
	    apos: "'",
	    amp: '&'
	  };

	  function escapeRegExp (s) {
	    // most part from https://github.com/skulpt/skulpt/blob/ecaf75e69c2e539eff124b2ab45df0b01eaf2295/src/str.js#L242
	    var c;
	    var i;
	    var ret = [];
	    var re = /^[A-Za-z0-9]+$/;
	    s = ensureString(s);
	    for (i = 0; i < s.length; ++i) {
	      c = s.charAt(i);

	      if (re.test(c)) {
	        ret.push(c);
	      }
	      else {
	        if (c === "\\000") {
	          ret.push("\\000");
	        }
	        else {
	          ret.push("\\" + c);
	        }
	      }
	    }
	    return ret.join("");
	  }

	  function ensureString(string) {
	    return string == null ? '' : '' + string;
	  }

	  //from underscore.string
	  var reversedEscapeChars = {};
	  for(var key in escapeChars){ reversedEscapeChars[escapeChars[key]] = key; }

	  ENTITIES = {
	    "amp" : "&",
	    "gt" : ">",
	    "lt" : "<",
	    "quot" : "\"",
	    "apos" : "'",
	    "AElig" : 198,
	    "Aacute" : 193,
	    "Acirc" : 194,
	    "Agrave" : 192,
	    "Aring" : 197,
	    "Atilde" : 195,
	    "Auml" : 196,
	    "Ccedil" : 199,
	    "ETH" : 208,
	    "Eacute" : 201,
	    "Ecirc" : 202,
	    "Egrave" : 200,
	    "Euml" : 203,
	    "Iacute" : 205,
	    "Icirc" : 206,
	    "Igrave" : 204,
	    "Iuml" : 207,
	    "Ntilde" : 209,
	    "Oacute" : 211,
	    "Ocirc" : 212,
	    "Ograve" : 210,
	    "Oslash" : 216,
	    "Otilde" : 213,
	    "Ouml" : 214,
	    "THORN" : 222,
	    "Uacute" : 218,
	    "Ucirc" : 219,
	    "Ugrave" : 217,
	    "Uuml" : 220,
	    "Yacute" : 221,
	    "aacute" : 225,
	    "acirc" : 226,
	    "aelig" : 230,
	    "agrave" : 224,
	    "aring" : 229,
	    "atilde" : 227,
	    "auml" : 228,
	    "ccedil" : 231,
	    "eacute" : 233,
	    "ecirc" : 234,
	    "egrave" : 232,
	    "eth" : 240,
	    "euml" : 235,
	    "iacute" : 237,
	    "icirc" : 238,
	    "igrave" : 236,
	    "iuml" : 239,
	    "ntilde" : 241,
	    "oacute" : 243,
	    "ocirc" : 244,
	    "ograve" : 242,
	    "oslash" : 248,
	    "otilde" : 245,
	    "ouml" : 246,
	    "szlig" : 223,
	    "thorn" : 254,
	    "uacute" : 250,
	    "ucirc" : 251,
	    "ugrave" : 249,
	    "uuml" : 252,
	    "yacute" : 253,
	    "yuml" : 255,
	    "copy" : 169,
	    "reg" : 174,
	    "nbsp" : 160,
	    "iexcl" : 161,
	    "cent" : 162,
	    "pound" : 163,
	    "curren" : 164,
	    "yen" : 165,
	    "brvbar" : 166,
	    "sect" : 167,
	    "uml" : 168,
	    "ordf" : 170,
	    "laquo" : 171,
	    "not" : 172,
	    "shy" : 173,
	    "macr" : 175,
	    "deg" : 176,
	    "plusmn" : 177,
	    "sup1" : 185,
	    "sup2" : 178,
	    "sup3" : 179,
	    "acute" : 180,
	    "micro" : 181,
	    "para" : 182,
	    "middot" : 183,
	    "cedil" : 184,
	    "ordm" : 186,
	    "raquo" : 187,
	    "frac14" : 188,
	    "frac12" : 189,
	    "frac34" : 190,
	    "iquest" : 191,
	    "times" : 215,
	    "divide" : 247,
	    "OElig;" : 338,
	    "oelig;" : 339,
	    "Scaron;" : 352,
	    "scaron;" : 353,
	    "Yuml;" : 376,
	    "fnof;" : 402,
	    "circ;" : 710,
	    "tilde;" : 732,
	    "Alpha;" : 913,
	    "Beta;" : 914,
	    "Gamma;" : 915,
	    "Delta;" : 916,
	    "Epsilon;" : 917,
	    "Zeta;" : 918,
	    "Eta;" : 919,
	    "Theta;" : 920,
	    "Iota;" : 921,
	    "Kappa;" : 922,
	    "Lambda;" : 923,
	    "Mu;" : 924,
	    "Nu;" : 925,
	    "Xi;" : 926,
	    "Omicron;" : 927,
	    "Pi;" : 928,
	    "Rho;" : 929,
	    "Sigma;" : 931,
	    "Tau;" : 932,
	    "Upsilon;" : 933,
	    "Phi;" : 934,
	    "Chi;" : 935,
	    "Psi;" : 936,
	    "Omega;" : 937,
	    "alpha;" : 945,
	    "beta;" : 946,
	    "gamma;" : 947,
	    "delta;" : 948,
	    "epsilon;" : 949,
	    "zeta;" : 950,
	    "eta;" : 951,
	    "theta;" : 952,
	    "iota;" : 953,
	    "kappa;" : 954,
	    "lambda;" : 955,
	    "mu;" : 956,
	    "nu;" : 957,
	    "xi;" : 958,
	    "omicron;" : 959,
	    "pi;" : 960,
	    "rho;" : 961,
	    "sigmaf;" : 962,
	    "sigma;" : 963,
	    "tau;" : 964,
	    "upsilon;" : 965,
	    "phi;" : 966,
	    "chi;" : 967,
	    "psi;" : 968,
	    "omega;" : 969,
	    "thetasym;" : 977,
	    "upsih;" : 978,
	    "piv;" : 982,
	    "ensp;" : 8194,
	    "emsp;" : 8195,
	    "thinsp;" : 8201,
	    "zwnj;" : 8204,
	    "zwj;" : 8205,
	    "lrm;" : 8206,
	    "rlm;" : 8207,
	    "ndash;" : 8211,
	    "mdash;" : 8212,
	    "lsquo;" : 8216,
	    "rsquo;" : 8217,
	    "sbquo;" : 8218,
	    "ldquo;" : 8220,
	    "rdquo;" : 8221,
	    "bdquo;" : 8222,
	    "dagger;" : 8224,
	    "Dagger;" : 8225,
	    "bull;" : 8226,
	    "hellip;" : 8230,
	    "permil;" : 8240,
	    "prime;" : 8242,
	    "Prime;" : 8243,
	    "lsaquo;" : 8249,
	    "rsaquo;" : 8250,
	    "oline;" : 8254,
	    "frasl;" : 8260,
	    "euro;" : 8364,
	    "image;" : 8465,
	    "weierp;" : 8472,
	    "real;" : 8476,
	    "trade;" : 8482,
	    "alefsym;" : 8501,
	    "larr;" : 8592,
	    "uarr;" : 8593,
	    "rarr;" : 8594,
	    "darr;" : 8595,
	    "harr;" : 8596,
	    "crarr;" : 8629,
	    "lArr;" : 8656,
	    "uArr;" : 8657,
	    "rArr;" : 8658,
	    "dArr;" : 8659,
	    "hArr;" : 8660,
	    "forall;" : 8704,
	    "part;" : 8706,
	    "exist;" : 8707,
	    "empty;" : 8709,
	    "nabla;" : 8711,
	    "isin;" : 8712,
	    "notin;" : 8713,
	    "ni;" : 8715,
	    "prod;" : 8719,
	    "sum;" : 8721,
	    "minus;" : 8722,
	    "lowast;" : 8727,
	    "radic;" : 8730,
	    "prop;" : 8733,
	    "infin;" : 8734,
	    "ang;" : 8736,
	    "and;" : 8743,
	    "or;" : 8744,
	    "cap;" : 8745,
	    "cup;" : 8746,
	    "int;" : 8747,
	    "there4;" : 8756,
	    "sim;" : 8764,
	    "cong;" : 8773,
	    "asymp;" : 8776,
	    "ne;" : 8800,
	    "equiv;" : 8801,
	    "le;" : 8804,
	    "ge;" : 8805,
	    "sub;" : 8834,
	    "sup;" : 8835,
	    "nsub;" : 8836,
	    "sube;" : 8838,
	    "supe;" : 8839,
	    "oplus;" : 8853,
	    "otimes;" : 8855,
	    "perp;" : 8869,
	    "sdot;" : 8901,
	    "lceil;" : 8968,
	    "rceil;" : 8969,
	    "lfloor;" : 8970,
	    "rfloor;" : 8971,
	    "lang;" : 9001,
	    "rang;" : 9002,
	    "loz;" : 9674,
	    "spades;" : 9824,
	    "clubs;" : 9827,
	    "hearts;" : 9829,
	    "diams;" : 9830
	  }


	}).call(this);



/***/ },
/* 67 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	function count(self, substr) {
	  var count = 0
	  var pos = self.indexOf(substr)

	  while (pos >= 0) {
	    count += 1
	    pos = self.indexOf(substr, pos + 1)
	  }

	  return count
	}

	module.exports = count


/***/ },
/* 68 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	function splitLeft(self, sep, maxSplit, limit) {

	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }

	  var splitResult = self.split(sep);
	  var splitPart1 = splitResult.slice(0, maxSplit);
	  var splitPart2 = splitResult.slice(maxSplit);

	  if (splitPart2.length === 0) {
	    splitResult = splitPart1;
	  } else {
	    splitResult = splitPart1.concat(splitPart2.join(sep));
	  }

	  if (typeof limit === 'undefined') {
	    return splitResult;
	  } else if (limit < 0) {
	    return splitResult.slice(limit);
	  } else {
	    return splitResult.slice(0, limit);
	  }

	}

	module.exports = splitLeft;



/***/ },
/* 69 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	function splitRight(self, sep, maxSplit, limit) {

	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }
	  if (typeof limit === 'undefined') {
	    var limit = 0;
	  }

	  var splitResult = [self];

	  for (var i = self.length-1; i >= 0; i--) {

	    if (
	      splitResult[0].slice(i).indexOf(sep) === 0 &&
	      (splitResult.length <= maxSplit || maxSplit === -1)
	    ) {
	      splitResult.splice(1, 0, splitResult[0].slice(i+sep.length)); // insert
	      splitResult[0] = splitResult[0].slice(0, i)
	    }
	  }

	  if (limit >= 0) {
	    return splitResult.slice(-limit);
	  } else {
	    return splitResult.slice(0, -limit);
	  }

	}

	module.exports = splitRight;



/***/ },
/* 70 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var location = global.location || {};
	/*jslint indent: 2, browser: true, bitwise: true, plusplus: true */
	var twemoji = (function (
	  /*! Copyright Twitter Inc. and other contributors. Licensed under MIT *//*
	    https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
	  */

	  // WARNING:   this file is generated automatically via
	  //            `node twemoji-generator.js`
	  //            please update its `createTwemoji` function
	  //            at the bottom of the same file instead.

	) {
	  'use strict';

	  /*jshint maxparams:4 */

	  var
	    // the exported module object
	    twemoji = {


	    /////////////////////////
	    //      properties     //
	    /////////////////////////

	      // default assets url, by default will be Twitter Inc. CDN
	      base: 'https://twemoji.maxcdn.com/2/',

	      // default assets file extensions, by default '.png'
	      ext: '.png',

	      // default assets/folder size, by default "72x72"
	      // available via Twitter CDN: 72
	      size: '72x72',

	      // default class name, by default 'emoji'
	      className: 'emoji',

	      // basic utilities / helpers to convert code points
	      // to JavaScript surrogates and vice versa
	      convert: {

	        /**
	         * Given an HEX codepoint, returns UTF16 surrogate pairs.
	         *
	         * @param   string  generic codepoint, i.e. '1F4A9'
	         * @return  string  codepoint transformed into utf16 surrogates pair,
	         *          i.e. \uD83D\uDCA9
	         *
	         * @example
	         *  twemoji.convert.fromCodePoint('1f1e8');
	         *  // "\ud83c\udde8"
	         *
	         *  '1f1e8-1f1f3'.split('-').map(twemoji.convert.fromCodePoint).join('')
	         *  // "\ud83c\udde8\ud83c\uddf3"
	         */
	        fromCodePoint: fromCodePoint,

	        /**
	         * Given UTF16 surrogate pairs, returns the equivalent HEX codepoint.
	         *
	         * @param   string  generic utf16 surrogates pair, i.e. \uD83D\uDCA9
	         * @param   string  optional separator for double code points, default='-'
	         * @return  string  utf16 transformed into codepoint, i.e. '1F4A9'
	         *
	         * @example
	         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');
	         *  // "1f1e8-1f1f3"
	         *
	         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3', '~');
	         *  // "1f1e8~1f1f3"
	         */
	        toCodePoint: toCodePoint
	      },


	    /////////////////////////
	    //       methods       //
	    /////////////////////////

	      /**
	       * User first: used to remove missing images
	       * preserving the original text intent when
	       * a fallback for network problems is desired.
	       * Automatically added to Image nodes via DOM
	       * It could be recycled for string operations via:
	       *  $('img.emoji').on('error', twemoji.onerror)
	       */
	      onerror: function onerror() {
	        if (this.parentNode) {
	          this.parentNode.replaceChild(createText(this.alt, false), this);
	        }
	      },

	      /**
	       * Main method/logic to generate either <img> tags or HTMLImage nodes.
	       *  "emojify" a generic text or DOM Element.
	       *
	       * @overloads
	       *
	       * String replacement for `innerHTML` or server side operations
	       *  twemoji.parse(string);
	       *  twemoji.parse(string, Function);
	       *  twemoji.parse(string, Object);
	       *
	       * HTMLElement tree parsing for safer operations over existing DOM
	       *  twemoji.parse(HTMLElement);
	       *  twemoji.parse(HTMLElement, Function);
	       *  twemoji.parse(HTMLElement, Object);
	       *
	       * @param   string|HTMLElement  the source to parse and enrich with emoji.
	       *
	       *          string              replace emoji matches with <img> tags.
	       *                              Mainly used to inject emoji via `innerHTML`
	       *                              It does **not** parse the string or validate it,
	       *                              it simply replaces found emoji with a tag.
	       *                              NOTE: be sure this won't affect security.
	       *
	       *          HTMLElement         walk through the DOM tree and find emoji
	       *                              that are inside **text node only** (nodeType === 3)
	       *                              Mainly used to put emoji in already generated DOM
	       *                              without compromising surrounding nodes and
	       *                              **avoiding** the usage of `innerHTML`.
	       *                              NOTE: Using DOM elements instead of strings should
	       *                              improve security without compromising too much
	       *                              performance compared with a less safe `innerHTML`.
	       *
	       * @param   Function|Object  [optional]
	       *                              either the callback that will be invoked or an object
	       *                              with all properties to use per each found emoji.
	       *
	       *          Function            if specified, this will be invoked per each emoji
	       *                              that has been found through the RegExp except
	       *                              those follwed by the invariant \uFE0E ("as text").
	       *                              Once invoked, parameters will be:
	       *
	       *                                iconId:string     the lower case HEX code point
	       *                                                  i.e. "1f4a9"
	       *
	       *                                options:Object    all info for this parsing operation
	       *
	       *                                variant:char      the optional \uFE0F ("as image")
	       *                                                  variant, in case this info
	       *                                                  is anyhow meaningful.
	       *                                                  By default this is ignored.
	       *
	       *                              If such callback will return a falsy value instead
	       *                              of a valid `src` to use for the image, nothing will
	       *                              actually change for that specific emoji.
	       *
	       *
	       *          Object              if specified, an object containing the following properties
	       *
	       *            callback   Function  the callback to invoke per each found emoji.
	       *            base       string    the base url, by default twemoji.base
	       *            ext        string    the image extension, by default twemoji.ext
	       *            size       string    the assets size, by default twemoji.size
	       *
	       * @example
	       *
	       *  twemoji.parse("I \u2764\uFE0F emoji!");
	       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"/> emoji!
	       *
	       *
	       *  twemoji.parse("I \u2764\uFE0F emoji!", function(iconId, options) {
	       *    return '/assets/' + iconId + '.gif';
	       *  });
	       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"/> emoji!
	       *
	       *
	       * twemoji.parse("I \u2764\uFE0F emoji!", {
	       *   size: 72,
	       *   callback: function(iconId, options) {
	       *     return '/assets/' + options.size + '/' + iconId + options.ext;
	       *   }
	       * });
	       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/72x72/2764.png"/> emoji!
	       *
	       */
	      parse: parse,

	      /**
	       * Given a string, invokes the callback argument
	       *  per each emoji found in such string.
	       * This is the most raw version used by
	       *  the .parse(string) method itself.
	       *
	       * @param   string    generic string to parse
	       * @param   Function  a generic callback that will be
	       *                    invoked to replace the content.
	       *                    This calback wil receive standard
	       *                    String.prototype.replace(str, callback)
	       *                    arguments such:
	       *  callback(
	       *    rawText,  // the emoji match
	       *  );
	       *
	       *                    and others commonly received via replace.
	       */
	      replace: replace,

	      /**
	       * Simplify string tests against emoji.
	       *
	       * @param   string  some text that might contain emoji
	       * @return  boolean true if any emoji was found, false otherwise.
	       *
	       * @example
	       *
	       *  if (twemoji.test(someContent)) {
	       *    console.log("emoji All The Things!");
	       *  }
	       */
	      test: test
	    },

	    // used to escape HTML special chars in attributes
	    escaper = {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      "'": '&#39;',
	      '"': '&quot;'
	    },

	    // RegExp based on emoji's official Unicode standards
	    // http://www.unicode.org/Public/UNIDATA/EmojiSources.txt
	    re = /\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d\udd75|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:[\u0023\u002a\u0030-\u0039])\ufe0f?\u20e3|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u270a\u270b])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud800\udc00|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u23e9-\u23ec\u23f0\u23f3\u2640\u2642\u2695\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a]|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2694\u2696\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))/g,

	    // avoid runtime RegExp creation for not so smart,
	    // not JIT based, and old browsers / engines
	    UFE0Fg = /\uFE0F/g,

	    // avoid using a string literal like '\u200D' here because minifiers expand it inline
	    U200D = String.fromCharCode(0x200D),

	    // used to find HTML special chars in attributes
	    rescaper = /[&<>'"]/g,

	    // nodes with type 1 which should **not** be parsed
	    shouldntBeParsed = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,

	    // just a private shortcut
	    fromCharCode = String.fromCharCode;

	  return twemoji;


	  /////////////////////////
	  //  private functions  //
	  //     declaration     //
	  /////////////////////////

	  /**
	   * Shortcut to create text nodes
	   * @param   string  text used to create DOM text node
	   * @return  Node  a DOM node with that text
	   */
	  function createText(text, clean) {
	    return document.createTextNode(clean ? text.replace(UFE0Fg, '') : text);
	  }

	  /**
	   * Utility function to escape html attribute text
	   * @param   string  text use in HTML attribute
	   * @return  string  text encoded to use in HTML attribute
	   */
	  function escapeHTML(s) {
	    return s.replace(rescaper, replacer);
	  }

	  /**
	   * Default callback used to generate emoji src
	   *  based on Twitter CDN
	   * @param   string    the emoji codepoint string
	   * @param   string    the default size to use, i.e. "36x36"
	   * @return  string    the image source to use
	   */
	  function defaultImageSrcGenerator(icon, options) {
	    return ''.concat(options.base, options.size, '/', icon, options.ext);
	  }

	  /**
	   * Given a generic DOM nodeType 1, walk through all children
	   * and store every nodeType 3 (#text) found in the tree.
	   * @param   Element a DOM Element with probably some text in it
	   * @param   Array the list of previously discovered text nodes
	   * @return  Array same list with new discovered nodes, if any
	   */
	  function grabAllTextNodes(node, allText) {
	    var
	      childNodes = node.childNodes,
	      length = childNodes.length,
	      subnode,
	      nodeType;
	    while (length--) {
	      subnode = childNodes[length];
	      nodeType = subnode.nodeType;
	      // parse emoji only in text nodes
	      if (nodeType === 3) {
	        // collect them to process emoji later
	        allText.push(subnode);
	      }
	      // ignore all nodes that are not type 1, that are svg, or that
	      // should not be parsed as script, style, and others
	      else if (nodeType === 1 && !('ownerSVGElement' in subnode) &&
	          !shouldntBeParsed.test(subnode.nodeName.toLowerCase())) {
	        grabAllTextNodes(subnode, allText);
	      }
	    }
	    return allText;
	  }

	  /**
	   * Used to both remove the possible variant
	   *  and to convert utf16 into code points.
	   *  If there is a zero-width-joiner (U+200D), leave the variants in.
	   * @param   string    the raw text of the emoji match
	   * @return  string    the code point
	   */
	  function grabTheRightIcon(rawText) {
	    // if variant is present as \uFE0F
	    return toCodePoint(rawText.indexOf(U200D) < 0 ?
	      rawText.replace(UFE0Fg, '') :
	      rawText
	    );
	  }

	  /**
	   * DOM version of the same logic / parser:
	   *  emojify all found sub-text nodes placing images node instead.
	   * @param   Element   generic DOM node with some text in some child node
	   * @param   Object    options  containing info about how to parse
	    *
	    *            .callback   Function  the callback to invoke per each found emoji.
	    *            .base       string    the base url, by default twemoji.base
	    *            .ext        string    the image extension, by default twemoji.ext
	    *            .size       string    the assets size, by default twemoji.size
	    *
	   * @return  Element same generic node with emoji in place, if any.
	   */
	  function parseNode(node, options) {
	    var
	      allText = grabAllTextNodes(node, []),
	      length = allText.length,
	      attrib,
	      attrname,
	      modified,
	      fragment,
	      subnode,
	      text,
	      match,
	      i,
	      index,
	      img,
	      rawText,
	      iconId,
	      src;
	    while (length--) {
	      modified = false;
	      fragment = document.createDocumentFragment();
	      subnode = allText[length];
	      text = subnode.nodeValue;
	      i = 0;
	      while ((match = re.exec(text))) {
	        index = match.index;
	        if (index !== i) {
	          fragment.appendChild(
	            createText(text.slice(i, index), true)
	          );
	        }
	        rawText = match[0];
	        iconId = grabTheRightIcon(rawText);
	        i = index + rawText.length;
	        src = options.callback(iconId, options);
	        if (src) {
	          img = new Image();
	          img.onerror = options.onerror;
	          img.setAttribute('draggable', 'false');
	          attrib = options.attributes(rawText, iconId);
	          for (attrname in attrib) {
	            if (
	              attrib.hasOwnProperty(attrname) &&
	              // don't allow any handlers to be set + don't allow overrides
	              attrname.indexOf('on') !== 0 &&
	              !img.hasAttribute(attrname)
	            ) {
	              img.setAttribute(attrname, attrib[attrname]);
	            }
	          }
	          img.className = options.className;
	          img.alt = rawText;
	          img.src = src;
	          modified = true;
	          fragment.appendChild(img);
	        }
	        if (!img) fragment.appendChild(createText(rawText, false));
	        img = null;
	      }
	      // is there actually anything to replace in here ?
	      if (modified) {
	        // any text left to be added ?
	        if (i < text.length) {
	          fragment.appendChild(
	            createText(text.slice(i), true)
	          );
	        }
	        // replace the text node only, leave intact
	        // anything else surrounding such text
	        subnode.parentNode.replaceChild(fragment, subnode);
	      }
	    }
	    return node;
	  }

	  /**
	   * String/HTML version of the same logic / parser:
	   *  emojify a generic text placing images tags instead of surrogates pair.
	   * @param   string    generic string with possibly some emoji in it
	   * @param   Object    options  containing info about how to parse
	   *
	   *            .callback   Function  the callback to invoke per each found emoji.
	   *            .base       string    the base url, by default twemoji.base
	   *            .ext        string    the image extension, by default twemoji.ext
	   *            .size       string    the assets size, by default twemoji.size
	   *
	   * @return  the string with <img tags> replacing all found and parsed emoji
	   */
	  function parseString(str, options) {
	    return replace(str, function (rawText) {
	      var
	        ret = rawText,
	        iconId = grabTheRightIcon(rawText),
	        src = options.callback(iconId, options),
	        attrib,
	        attrname;
	      if (src) {
	        // recycle the match string replacing the emoji
	        // with its image counter part
	        ret = '<img '.concat(
	          'class="', options.className, '" ',
	          'draggable="false" ',
	          // needs to preserve user original intent
	          // when variants should be copied and pasted too
	          'alt="',
	          rawText,
	          '"',
	          ' src="',
	          src,
	          '"'
	        );
	        attrib = options.attributes(rawText, iconId);
	        for (attrname in attrib) {
	          if (
	            attrib.hasOwnProperty(attrname) &&
	            // don't allow any handlers to be set + don't allow overrides
	            attrname.indexOf('on') !== 0 &&
	            ret.indexOf(' ' + attrname + '=') === -1
	          ) {
	            ret = ret.concat(' ', attrname, '="', escapeHTML(attrib[attrname]), '"');
	          }
	        }
	        ret = ret.concat('/>');
	      }
	      return ret;
	    });
	  }

	  /**
	   * Function used to actually replace HTML special chars
	   * @param   string  HTML special char
	   * @return  string  encoded HTML special char
	   */
	  function replacer(m) {
	    return escaper[m];
	  }

	  /**
	   * Default options.attribute callback
	   * @return  null
	   */
	  function returnNull() {
	    return null;
	  }

	  /**
	   * Given a generic value, creates its squared counterpart if it's a number.
	   *  As example, number 36 will return '36x36'.
	   * @param   any     a generic value.
	   * @return  any     a string representing asset size, i.e. "36x36"
	   *                  only in case the value was a number.
	   *                  Returns initial value otherwise.
	   */
	  function toSizeSquaredAsset(value) {
	    return typeof value === 'number' ?
	      value + 'x' + value :
	      value;
	  }


	  /////////////////////////
	  //  exported functions //
	  //     declaration     //
	  /////////////////////////

	  function fromCodePoint(codepoint) {
	    var code = typeof codepoint === 'string' ?
	          parseInt(codepoint, 16) : codepoint;
	    if (code < 0x10000) {
	      return fromCharCode(code);
	    }
	    code -= 0x10000;
	    return fromCharCode(
	      0xD800 + (code >> 10),
	      0xDC00 + (code & 0x3FF)
	    );
	  }

	  function parse(what, how) {
	    if (!how || typeof how === 'function') {
	      how = {callback: how};
	    }
	    // if first argument is string, inject html <img> tags
	    // otherwise use the DOM tree and parse text nodes only
	    return (typeof what === 'string' ? parseString : parseNode)(what, {
	      callback:   how.callback || defaultImageSrcGenerator,
	      attributes: typeof how.attributes === 'function' ? how.attributes : returnNull,
	      base:       typeof how.base === 'string' ? how.base : twemoji.base,
	      ext:        how.ext || twemoji.ext,
	      size:       how.folder || toSizeSquaredAsset(how.size || twemoji.size),
	      className:  how.className || twemoji.className,
	      onerror:    how.onerror || twemoji.onerror
	    });
	  }

	  function replace(text, callback) {
	    return String(text).replace(re, callback);
	  }

	  function test(text) {
	    // IE6 needs a reset before too
	    re.lastIndex = 0;
	    var result = re.test(text);
	    re.lastIndex = 0;
	    return result;
	  }

	  function toCodePoint(unicodeSurrogates, sep) {
	    var
	      r = [],
	      c = 0,
	      p = 0,
	      i = 0;
	    while (i < unicodeSurrogates.length) {
	      c = unicodeSurrogates.charCodeAt(i++);
	      if (p) {
	        r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
	        p = 0;
	      } else if (0xD800 <= c && c <= 0xDBFF) {
	        p = c;
	      } else {
	        r.push(c.toString(16));
	      }
	    }
	    return r.join(sep || '-');
	  }

	}());
	if (!location.protocol) {
	  twemoji.base = twemoji.base.replace(/^http:/, "");
	}
	module.exports = twemoji;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  if (typeof twttr === "undefined" || twttr === null) {
	    var twttr = {};
	  }

	  twttr.txt = {};
	  twttr.txt.regexen = {};

	  var HTML_ENTITIES = {
	    '&': '&amp;',
	    '>': '&gt;',
	    '<': '&lt;',
	    '"': '&quot;',
	    "'": '&#39;'
	  };

	  // HTML escaping
	  twttr.txt.htmlEscape = function(text) {
	    return text && text.replace(/[&"'><]/g, function(character) {
	      return HTML_ENTITIES[character];
	    });
	  };

	  // Builds a RegExp
	  function regexSupplant(regex, flags) {
	    flags = flags || "";
	    if (typeof regex !== "string") {
	      if (regex.global && flags.indexOf("g") < 0) {
	        flags += "g";
	      }
	      if (regex.ignoreCase && flags.indexOf("i") < 0) {
	        flags += "i";
	      }
	      if (regex.multiline && flags.indexOf("m") < 0) {
	        flags += "m";
	      }

	      regex = regex.source;
	    }

	    return new RegExp(regex.replace(/#\{(\w+)\}/g, function(match, name) {
	      var newRegex = twttr.txt.regexen[name] || "";
	      if (typeof newRegex !== "string") {
	        newRegex = newRegex.source;
	      }
	      return newRegex;
	    }), flags);
	  }

	  twttr.txt.regexSupplant = regexSupplant;

	  // simple string interpolation
	  function stringSupplant(str, values) {
	    return str.replace(/#\{(\w+)\}/g, function(match, name) {
	      return values[name] || "";
	    });
	  }

	  twttr.txt.stringSupplant = stringSupplant;

	  twttr.txt.regexen.spaces_group = /\x09-\x0D\x20\x85\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000/;
	  twttr.txt.regexen.spaces = regexSupplant(/[#{spaces_group}]/);
	  twttr.txt.regexen.invalid_chars_group = /\uFFFE\uFEFF\uFFFF\u202A-\u202E/;
	  twttr.txt.regexen.invalid_chars = regexSupplant(/[#{invalid_chars_group}]/);
	  twttr.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
	  twttr.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg;
	  twttr.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/mg;

	  twttr.txt.regexen.latinAccentChars = /\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF/;

	  // Generated from unicode_regex/unicode_regex_groups.scala, same as objective c's \p{L}\p{M}
	  twttr.txt.regexen.bmpLetterAndMarks = /A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07ca-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u103f\u1050-\u108f\u109a-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u180b-\u180d\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f\u1aa7\u1ab0-\u1abe\u1b00-\u1b4b\u1b6b-\u1b73\u1b80-\u1baf\u1bba-\u1bf3\u1c00-\u1c37\u1c4d-\u1c4f\u1c5a-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u20d0-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005\u3006\u302a-\u302f\u3031-\u3035\u303b\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua672\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6e5\ua6f0\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8e0-\ua8f7\ua8fb\ua90a-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf\ua9e0-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64\uab65\uabc0-\uabea\uabec\uabed\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf870-\uf87f\uf882\uf884-\uf89f\uf8b8\uf8c1-\uf8d6\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc/;
	  twttr.txt.regexen.astralLetterAndMarks = /\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48]|\ud804[\udc00-\udc46\udc7f-\udcba\udcd0-\udce8\udd00-\udd34\udd50-\udd73\udd76\udd80-\uddc4\uddda\ude00-\ude11\ude13-\ude37\udeb0-\udeea\udf01-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc80-\udcc5\udcc7\udd80-\uddb5\uddb8-\uddc0\ude00-\ude40\ude44\ude80-\udeb7]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud808[\udc00-\udf98]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udcd0-\udcd6]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef]/;

	  // Generated from unicode_regex/unicode_regex_groups.scala, same as objective c's \p{Nd}
	  twttr.txt.regexen.bmpNumerals = /0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19/;
	  twttr.txt.regexen.astralNumerals = /\ud801[\udca0-\udca9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9]|\ud806[\udce0-\udce9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]/;

	  twttr.txt.regexen.hashtagSpecialChars = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\xb7/;

	  // A hashtag must contain at least one unicode letter or mark, as well as numbers, underscores, and select special characters.
	  twttr.txt.regexen.hashSigns = /[#＃]/;
	  twttr.txt.regexen.hashtagAlpha = regexSupplant(/(?:[#{bmpLetterAndMarks}]|(?=#{non_bmp_code_pairs})(?:#{astralLetterAndMarks}))/);
	  twttr.txt.regexen.hashtagAlphaNumeric = regexSupplant(/(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{non_bmp_code_pairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/);
	  twttr.txt.regexen.endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/);
	  twttr.txt.regexen.codePoint = /(?:[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/;
	  twttr.txt.regexen.hashtagBoundary = regexSupplant(/(?:^|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/);
	  twttr.txt.regexen.validHashtag = regexSupplant(/(#{hashtagBoundary})(#{hashSigns})(?!\uFE0F|\u20E3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi);

	  // Mention related regex collection
	  twttr.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/;
	  twttr.txt.regexen.atSigns = /[@＠]/;
	  twttr.txt.regexen.validMentionOrList = regexSupplant(
	    '(#{validMentionPrecedingChars})' +  // $1: Preceding character
	    '(#{atSigns})' +                     // $2: At mark
	    '([a-zA-Z0-9_]{1,20})' +             // $3: Screen name
	    '(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?'  // $4: List (optional)
	  , 'g');
	  twttr.txt.regexen.validReply = regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);
	  twttr.txt.regexen.endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);

	  // URL related regex collection
	  twttr.txt.regexen.validUrlPrecedingChars = regexSupplant(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/);
	  twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/;
	  twttr.txt.regexen.invalidDomainChars = stringSupplant("#{punct}#{spaces_group}#{invalid_chars_group}", twttr.txt.regexen);
	  twttr.txt.regexen.validDomainChars = regexSupplant(/[^#{invalidDomainChars}]/);
	  twttr.txt.regexen.validSubdomain = regexSupplant(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);
	  twttr.txt.regexen.validDomainName = regexSupplant(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);
	  twttr.txt.regexen.validGTLD = regexSupplant(RegExp(
	'(?:(?:' +
	    '삼성|닷컴|닷넷|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|诺基亚|联通|网络|网站|网店|网址|组织机构|移动|珠宝|点看|游戏|淡马锡|机构|書籍|时尚|新闻|政府|' +
	    '政务|手表|手机|我爱你|慈善|微博|广东|工行|家電|娱乐|天主教|大拿|大众汽车|在线|嘉里大酒店|嘉里|商标|商店|商城|公益|公司|八卦|健康|信息|佛山|企业|中文网|中信|世界|' +
	    'ポイント|ファッション|セール|ストア|コム|グーグル|クラウド|みんな|คอม|संगठन|नेट|कॉम|همراه|موقع|موبايلي|كوم|كاثوليك|شبكة|بيتك|' +
	    'بازار|العليان|ارامكو|ابوظبي|קום|сайт|рус|орг|онлайн|москва|ком|католик|дети|zuerich|zone|zippo|' +
	    'zip|zero|zara|zappos|yun|youtube|you|yokohama|yoga|yodobashi|yandex|yamaxun|yahoo|yachts|xyz|' +
	    'xxx|xperia|xin|xihuan|xfinity|xerox|xbox|wtf|wtc|wow|world|works|work|woodside|wolterskluwer|' +
	    'wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|weir|weibo|wedding|wed|website|weber|' +
	    'webcam|weatherchannel|weather|watches|watch|warman|wanggou|wang|walter|walmart|wales|vuelos|' +
	    'voyage|voto|voting|vote|volvo|volkswagen|vodka|vlaanderen|vivo|viva|vistaprint|vista|vision|' +
	    'visa|virgin|vip|vin|villas|viking|vig|video|viajes|vet|versicherung|vermögensberatung|' +
	    'vermögensberater|verisign|ventures|vegas|vanguard|vana|vacations|ups|uol|uno|university|unicom|' +
	    'uconnect|ubs|ubank|tvs|tushu|tunes|tui|tube|trv|trust|travelersinsurance|travelers|' +
	    'travelchannel|travel|training|trading|trade|toys|toyota|town|tours|total|toshiba|toray|top|' +
	    'tools|tokyo|today|tmall|tkmaxx|tjx|tjmaxx|tirol|tires|tips|tiffany|tienda|tickets|tiaa|theatre|' +
	    'theater|thd|teva|tennis|temasek|telefonica|telecity|tel|technology|tech|team|tdk|tci|taxi|tax|' +
	    'tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|systems|symantec|sydney|swiss|swiftcover|' +
	    'swatch|suzuki|surgery|surf|support|supply|supplies|sucks|style|study|studio|stream|store|' +
	    'storage|stockholm|stcgroup|stc|statoil|statefarm|statebank|starhub|star|staples|stada|srt|srl|' +
	    'spreadbetting|spot|spiegel|space|soy|sony|song|solutions|solar|sohu|software|softbank|social|' +
	    'soccer|sncf|smile|smart|sling|skype|sky|skin|ski|site|singles|sina|silk|shriram|showtime|show|' +
	    'shouji|shopping|shop|shoes|shiksha|shia|shell|shaw|sharp|shangrila|sfr|sexy|sex|sew|seven|ses|' +
	    'services|sener|select|seek|security|secure|seat|scot|scor|scjohnson|science|schwarz|schule|' +
	    'school|scholarships|schmidt|schaeffler|scb|sca|sbs|sbi|saxo|save|sas|sarl|sapo|sap|sanofi|' +
	    'sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|ryukyu|rwe|run|' +
	    'ruhr|rsvp|room|rogers|rodeo|rocks|rocher|rmit|rip|rio|ril|rightathome|ricoh|richardli|rich|' +
	    'rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|' +
	    'reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|raid|radio|' +
	    'racing|qvc|quest|quebec|qpon|pwc|pub|prudential|pru|protection|property|properties|promo|' +
	    'progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|post|porn|politie|poker|pohl|' +
	    'pnc|plus|plumbing|playstation|play|place|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|' +
	    'piaget|physio|photos|photography|photo|phone|philips|pharmacy|pfizer|pet|pccw|pay|passagens|' +
	    'party|parts|partners|pars|paris|panerai|panasonic|pamperedchef|page|ovh|ott|otsuka|osaka|' +
	    'origins|orientexpress|organic|org|orange|oracle|open|ooo|onyourside|online|onl|ong|one|omega|' +
	    'ollo|oldnavy|olayangroup|olayan|okinawa|office|off|observer|obi|nyc|ntt|nrw|nra|nowtv|nowruz|' +
	    'now|norton|northwesternmutual|nokia|nissay|nissan|ninja|nikon|nike|nico|nhk|ngo|nfl|nexus|' +
	    'nextdirect|next|news|newholland|new|neustar|network|netflix|netbank|net|nec|nba|navy|natura|' +
	    'nationwide|name|nagoya|nadex|nab|mutuelle|mutual|museum|mtr|mtpc|mtn|msd|movistar|movie|mov|' +
	    'motorcycles|moto|moscow|mortgage|mormon|mopar|montblanc|monster|money|monash|mom|moi|moe|moda|' +
	    'mobily|mobile|mobi|mma|mls|mlb|mitsubishi|mit|mint|mini|mil|microsoft|miami|metlife|meo|menu|' +
	    'men|memorial|meme|melbourne|meet|media|med|mckinsey|mcdonalds|mcd|mba|mattel|maserati|marshalls|' +
	    'marriott|markets|marketing|market|mango|management|man|makeup|maison|maif|madrid|macys|luxury|' +
	    'luxe|lupin|lundbeck|ltda|ltd|lplfinancial|lpl|love|lotto|lotte|london|lol|loft|locus|locker|' +
	    'loans|loan|lixil|living|live|lipsy|link|linde|lincoln|limo|limited|lilly|like|lighting|' +
	    'lifestyle|lifeinsurance|life|lidl|liaison|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lawyer|' +
	    'law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancome|lancia|lancaster|lamer|' +
	    'lamborghini|ladbrokes|lacaixa|kyoto|kuokgroup|kred|krd|kpn|kpmg|kosher|komatsu|koeln|kiwi|' +
	    'kitchen|kindle|kinder|kim|kia|kfh|kerryproperties|kerrylogistics|kerryhotels|kddi|kaufen|' +
	    'juniper|juegos|jprs|jpmorgan|joy|jot|joburg|jobs|jnj|jmp|jll|jlc|jio|jewelry|jetzt|jeep|jcp|jcb|' +
	    'java|jaguar|iwc|iveco|itv|itau|istanbul|ist|ismaili|iselect|irish|ipiranga|investments|intuit|' +
	    'international|intel|int|insure|insurance|institute|ink|ing|info|infiniti|industries|immobilien|' +
	    'immo|imdb|imamat|ikano|iinet|ifm|ieee|icu|ice|icbc|ibm|hyundai|hyatt|hughes|htc|hsbc|how|house|' +
	    'hotmail|hoteles|hot|hosting|host|hospital|horse|honeywell|honda|homesense|homes|homegoods|' +
	    'homedepot|holiday|holdings|hockey|hkt|hiv|hitachi|hisamitsu|hiphop|hgtv|hermes|here|helsinki|' +
	    'help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|guru|guitars|guide|guge|' +
	    'gucci|guardian|group|gripe|green|gratis|graphics|grainger|gov|got|gop|google|goog|goodyear|' +
	    'goodhands|goo|golf|goldpoint|gold|godaddy|gmx|gmo|gmbh|gmail|globo|global|gle|glass|glade|' +
	    'giving|gives|gifts|gift|ggee|george|genting|gent|gea|gdn|gbiz|garden|gap|games|game|gallup|' +
	    'gallo|gallery|gal|fyi|futbol|furniture|fund|fun|fujixerox|fujitsu|ftr|frontier|frontdoor|' +
	    'frogans|frl|fresenius|free|fox|foundation|forum|forsale|forex|ford|football|foodnetwork|food|' +
	    'foo|fly|flsmidth|flowers|florist|flir|flights|flickr|fitness|fit|fishing|fish|firmdale|' +
	    'firestone|fire|financial|finance|final|film|fido|fidelity|fiat|ferrero|ferrari|feedback|fedex|' +
	    'fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|' +
	    'expert|exchange|everbank|events|eus|eurovision|esurance|estate|esq|erni|ericsson|equipment|' +
	    'epson|epost|enterprises|engineering|engineer|energy|emerck|email|education|edu|edeka|eco|eat|' +
	    'earth|dvr|dvag|durban|dupont|duns|dunlop|duck|dubai|dtv|drive|download|dot|doosan|domains|doha|' +
	    'dog|dodge|doctor|docs|dnp|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|' +
	    'dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|' +
	    'dds|dclk|day|datsun|dating|date|data|dance|dad|dabur|cyou|cymru|cuisinella|csc|cruises|cruise|' +
	    'crs|crown|cricket|creditunion|creditcard|credit|courses|coupons|coupon|country|corsica|coop|' +
	    'cool|cookingchannel|cooking|contractors|contact|consulting|construction|condos|comsec|computer|' +
	    'compare|company|community|commbank|comcast|com|cologne|college|coffee|codes|coach|clubmed|club|' +
	    'cloud|clothing|clinique|clinic|click|cleaning|claims|cityeats|city|citic|citi|citadel|cisco|' +
	    'circle|cipriani|church|chrysler|chrome|christmas|chloe|chintai|cheap|chat|chase|channel|chanel|' +
	    'cfd|cfa|cern|ceo|center|ceb|cbs|cbre|cbn|cba|catholic|catering|cat|casino|cash|caseih|case|casa|' +
	    'cartier|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|' +
	    'cancerresearch|camp|camera|cam|calvinklein|call|cal|cafe|cab|bzh|buzz|buy|business|builders|' +
	    'build|bugatti|budapest|brussels|brother|broker|broadway|bridgestone|bradesco|box|boutique|bot|' +
	    'boston|bostik|bosch|boots|booking|book|boo|bond|bom|bofa|boehringer|boats|bnpparibas|bnl|bmw|' +
	    'bms|blue|bloomberg|blog|blockbuster|blanco|blackfriday|black|biz|bio|bingo|bing|bike|bid|bible|' +
	    'bharti|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|bcn|bcg|bbva|bbt|bbc|bayern|bauhaus|' +
	    'basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|' +
	    'bananarepublic|banamex|baidu|baby|azure|axa|aws|avianca|autos|auto|author|auspost|audio|audible|' +
	    'audi|auction|attorney|athleta|associates|asia|asda|arte|art|arpa|army|archi|aramco|aquarelle|' +
	    'apple|app|apartments|aol|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|' +
	    'americanexpress|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|alfaromeo|akdn|airtel|' +
	    'airforce|airbus|aigo|aig|agency|agakhan|afl|afamilycompany|aetna|aero|aeg|adult|ads|adac|actor|' +
	    'active|aco|accountants|accountant|accenture|academy|abudhabi|abogado|able|abc|abbvie|abbott|abb|' +
	    'abarth|aarp|aaa|onion' +
	')(?=[^0-9a-zA-Z@]|$))'));
	  twttr.txt.regexen.validCCTLD = regexSupplant(RegExp(
	'(?:(?:' +
	    '한국|香港|澳門|新加坡|台灣|台湾|中國|中国|გე|ไทย|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|' +
	    'ভাৰত|ভারত|বাংলা|भारोत|भारतम्|भारत|ڀارت|پاکستان|مليسيا|مصر|قطر|فلسطين|عمان|عراق|سورية|سودان|تونس|' +
	    'بھارت|بارت|ایران|امارات|المغرب|السعودية|الجزائر|الاردن|հայ|қаз|укр|срб|рф|мон|мкд|ею|бел|бг|ελ|' +
	    'zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|um|uk|ug|ua|tz|tw|tv|tt|tr|tp|to|tn|tm|tl|tk|' +
	    'tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|ss|sr|so|sn|sm|sl|sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|' +
	    're|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|' +
	    'mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|mf|me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|' +
	    'ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|' +
	    'gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eh|eg|ee|ec|dz|' +
	    'do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bq|' +
	    'bo|bn|bm|bl|bj|bi|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ar|aq|ao|an|am|al|ai|ag|af|ae|ad|ac' +
	')(?=[^0-9a-zA-Z@]|$))'));
	  twttr.txt.regexen.validPunycode = /(?:xn--[0-9a-z]+)/;
	  twttr.txt.regexen.validSpecialCCTLD = /(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))/;
	  twttr.txt.regexen.validDomain = regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);
	  twttr.txt.regexen.validAsciiDomain = regexSupplant(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi);
	  twttr.txt.regexen.invalidShortDomain = regexSupplant(/^#{validDomainName}#{validCCTLD}$/i);
	  twttr.txt.regexen.validSpecialShortDomain = regexSupplant(/^#{validDomainName}#{validSpecialCCTLD}$/i);
	  twttr.txt.regexen.validPortNumber = /[0-9]+/;
	  twttr.txt.regexen.cyrillicLettersAndMarks = /\u0400-\u04FF/;
	  twttr.txt.regexen.validGeneralUrlPathChars = regexSupplant(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-_~@\|&#{latinAccentChars}]/i);
	  // Allow URL paths to contain up to two nested levels of balanced parens
	  //  1. Used in Wikipedia URLs like /Primer_(film)
	  //  2. Used in IIS sessions like /S(dfd346)/
	  //  3. Used in Rdio URLs like /track/We_Up_(Album_Version_(Edited))/
	  twttr.txt.regexen.validUrlBalancedParens = regexSupplant(
	    '\\('                                   +
	      '(?:'                                 +
	        '#{validGeneralUrlPathChars}+'      +
	        '|'                                 +
	        // allow one nested level of balanced parentheses
	        '(?:'                               +
	          '#{validGeneralUrlPathChars}*'    +
	          '\\('                             +
	            '#{validGeneralUrlPathChars}+'  +
	          '\\)'                             +
	          '#{validGeneralUrlPathChars}*'    +
	        ')'                                 +
	      ')'                                   +
	    '\\)'
	  , 'i');
	  // Valid end-of-path chracters (so /foo. does not gobble the period).
	  // 1. Allow =&# for empty URL parameters and other URL-join artifacts
	  twttr.txt.regexen.validUrlPathEndingChars = regexSupplant(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i);
	  // Allow @ in a url, but only in the middle. Catch things like http://example.com/@user/
	  twttr.txt.regexen.validUrlPath = regexSupplant('(?:' +
	    '(?:' +
	      '#{validGeneralUrlPathChars}*' +
	        '(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*' +
	        '#{validUrlPathEndingChars}'+
	      ')|(?:@#{validGeneralUrlPathChars}+\/)'+
	    ')', 'i');

	  twttr.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;
	  twttr.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i;
	  twttr.txt.regexen.extractUrl = regexSupplant(
	    '('                                                            + // $1 total match
	      '(#{validUrlPrecedingChars})'                                + // $2 Preceeding chracter
	      '('                                                          + // $3 URL
	        '(https?:\\/\\/)?'                                         + // $4 Protocol (optional)
	        '(#{validDomain})'                                         + // $5 Domain(s)
	        '(?::(#{validPortNumber}))?'                               + // $6 Port number (optional)
	        '(\\/#{validUrlPath}*)?'                                   + // $7 URL Path
	        '(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?'  + // $8 Query String
	      ')'                                                          +
	    ')'
	  , 'gi');

	  twttr.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i;
	  twttr.txt.regexen.urlHasProtocol = /^https?:\/\//i;
	  twttr.txt.regexen.urlHasHttps = /^https:\/\//i;

	  // cashtag related regex
	  twttr.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
	  twttr.txt.regexen.validCashtag = regexSupplant('(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])', 'gi');

	  // These URL validation pattern strings are based on the ABNF from RFC 3986
	  twttr.txt.regexen.validateUrlUnreserved = /[a-z\u0400-\u04FF0-9\-._~]/i;
	  twttr.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i;
	  twttr.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i;
	  twttr.txt.regexen.validateUrlPchar = regexSupplant('(?:' +
	    '#{validateUrlUnreserved}|' +
	    '#{validateUrlPctEncoded}|' +
	    '#{validateUrlSubDelims}|' +
	    '[:|@]' +
	  ')', 'i');

	  twttr.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i;
	  twttr.txt.regexen.validateUrlUserinfo = regexSupplant('(?:' +
	    '#{validateUrlUnreserved}|' +
	    '#{validateUrlPctEncoded}|' +
	    '#{validateUrlSubDelims}|' +
	    ':' +
	  ')*', 'i');

	  twttr.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;
	  twttr.txt.regexen.validateUrlIpv4 = regexSupplant(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i);

	  // Punting on real IPv6 validation for now
	  twttr.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i;

	  // Also punting on IPvFuture for now
	  twttr.txt.regexen.validateUrlIp = regexSupplant('(?:' +
	    '#{validateUrlIpv4}|' +
	    '#{validateUrlIpv6}' +
	  ')', 'i');

	  // This is more strict than the rfc specifies
	  twttr.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;
	  twttr.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;
	  twttr.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;
	  twttr.txt.regexen.validateUrlDomain = regexSupplant(/(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i);

	  twttr.txt.regexen.validateUrlHost = regexSupplant('(?:' +
	    '#{validateUrlIp}|' +
	    '#{validateUrlDomain}' +
	  ')', 'i');

	  // Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences
	  twttr.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
	  twttr.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
	  twttr.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
	  twttr.txt.regexen.validateUrlUnicodeDomain = regexSupplant(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);

	  twttr.txt.regexen.validateUrlUnicodeHost = regexSupplant('(?:' +
	    '#{validateUrlIp}|' +
	    '#{validateUrlUnicodeDomain}' +
	  ')', 'i');

	  twttr.txt.regexen.validateUrlPort = /[0-9]{1,5}/;

	  twttr.txt.regexen.validateUrlUnicodeAuthority = regexSupplant(
	    '(?:(#{validateUrlUserinfo})@)?'  + // $1 userinfo
	    '(#{validateUrlUnicodeHost})'     + // $2 host
	    '(?::(#{validateUrlPort}))?'        //$3 port
	  , "i");

	  twttr.txt.regexen.validateUrlAuthority = regexSupplant(
	    '(?:(#{validateUrlUserinfo})@)?' + // $1 userinfo
	    '(#{validateUrlHost})'           + // $2 host
	    '(?::(#{validateUrlPort}))?'       // $3 port
	  , "i");

	  twttr.txt.regexen.validateUrlPath = regexSupplant(/(\/#{validateUrlPchar}*)*/i);
	  twttr.txt.regexen.validateUrlQuery = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);
	  twttr.txt.regexen.validateUrlFragment = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);

	  // Modified version of RFC 3986 Appendix B
	  twttr.txt.regexen.validateUrlUnencoded = regexSupplant(
	    '^'                               + // Full URL
	    '(?:'                             +
	      '([^:/?#]+):\\/\\/'             + // $1 Scheme
	    ')?'                              +
	    '([^/?#]*)'                       + // $2 Authority
	    '([^?#]*)'                        + // $3 Path
	    '(?:'                             +
	      '\\?([^#]*)'                    + // $4 Query
	    ')?'                              +
	    '(?:'                             +
	      '#(.*)'                         + // $5 Fragment
	    ')?$'
	  , "i");


	  // Default CSS class for auto-linked lists (along with the url class)
	  var DEFAULT_LIST_CLASS = "tweet-url list-slug";
	  // Default CSS class for auto-linked usernames (along with the url class)
	  var DEFAULT_USERNAME_CLASS = "tweet-url username";
	  // Default CSS class for auto-linked hashtags (along with the url class)
	  var DEFAULT_HASHTAG_CLASS = "tweet-url hashtag";
	  // Default CSS class for auto-linked cashtags (along with the url class)
	  var DEFAULT_CASHTAG_CLASS = "tweet-url cashtag";
	  // Options which should not be passed as HTML attributes
	  var OPTIONS_NOT_ATTRIBUTES = {'urlClass':true, 'listClass':true, 'usernameClass':true, 'hashtagClass':true, 'cashtagClass':true,
	                            'usernameUrlBase':true, 'listUrlBase':true, 'hashtagUrlBase':true, 'cashtagUrlBase':true,
	                            'usernameUrlBlock':true, 'listUrlBlock':true, 'hashtagUrlBlock':true, 'linkUrlBlock':true,
	                            'usernameIncludeSymbol':true, 'suppressLists':true, 'suppressNoFollow':true, 'targetBlank':true,
	                            'suppressDataScreenName':true, 'urlEntities':true, 'symbolTag':true, 'textWithSymbolTag':true, 'urlTarget':true,
	                            'invisibleTagAttrs':true, 'linkAttributeBlock':true, 'linkTextBlock': true, 'htmlEscapeNonEntities': true
	                            };

	  var BOOLEAN_ATTRIBUTES = {'disabled':true, 'readonly':true, 'multiple':true, 'checked':true};

	  // Simple object cloning function for simple objects
	  function clone(o) {
	    var r = {};
	    for (var k in o) {
	      if (o.hasOwnProperty(k)) {
	        r[k] = o[k];
	      }
	    }

	    return r;
	  }

	  twttr.txt.tagAttrs = function(attributes) {
	    var htmlAttrs = "";
	    for (var k in attributes) {
	      var v = attributes[k];
	      if (BOOLEAN_ATTRIBUTES[k]) {
	        v = v ? k : null;
	      }
	      if (v == null) continue;
	      htmlAttrs += " " + twttr.txt.htmlEscape(k) + "=\"" + twttr.txt.htmlEscape(v.toString()) + "\"";
	    }
	    return htmlAttrs;
	  };

	  twttr.txt.linkToText = function(entity, text, attributes, options) {
	    if (!options.suppressNoFollow) {
	      attributes.rel = "nofollow";
	    }
	    // if linkAttributeBlock is specified, call it to modify the attributes
	    if (options.linkAttributeBlock) {
	      options.linkAttributeBlock(entity, attributes);
	    }
	    // if linkTextBlock is specified, call it to get a new/modified link text
	    if (options.linkTextBlock) {
	      text = options.linkTextBlock(entity, text);
	    }
	    var d = {
	      text: text,
	      attr: twttr.txt.tagAttrs(attributes)
	    };
	    return stringSupplant("<a#{attr}>#{text}</a>", d);
	  };

	  twttr.txt.linkToTextWithSymbol = function(entity, symbol, text, attributes, options) {
	    var taggedSymbol = options.symbolTag ? "<" + options.symbolTag + ">" + symbol + "</"+ options.symbolTag + ">" : symbol;
	    text = twttr.txt.htmlEscape(text);
	    var taggedText = options.textWithSymbolTag ? "<" + options.textWithSymbolTag + ">" + text + "</"+ options.textWithSymbolTag + ">" : text;

	    if (options.usernameIncludeSymbol || !symbol.match(twttr.txt.regexen.atSigns)) {
	      return twttr.txt.linkToText(entity, taggedSymbol + taggedText, attributes, options);
	    } else {
	      return taggedSymbol + twttr.txt.linkToText(entity, taggedText, attributes, options);
	    }
	  };

	  twttr.txt.linkToHashtag = function(entity, text, options) {
	    var hash = text.substring(entity.indices[0], entity.indices[0] + 1);
	    var hashtag = twttr.txt.htmlEscape(entity.hashtag);
	    var attrs = clone(options.htmlAttrs || {});
	    attrs.href = options.hashtagUrlBase + hashtag;
	    attrs.title = "#" + hashtag;
	    attrs["class"] = options.hashtagClass;
	    if (hashtag.charAt(0).match(twttr.txt.regexen.rtl_chars)){
	      attrs["class"] += " rtl";
	    }
	    if (options.targetBlank) {
	      attrs.target = '_blank';
	    }

	    return twttr.txt.linkToTextWithSymbol(entity, hash, hashtag, attrs, options);
	  };

	  twttr.txt.linkToCashtag = function(entity, text, options) {
	    var cashtag = twttr.txt.htmlEscape(entity.cashtag);
	    var attrs = clone(options.htmlAttrs || {});
	    attrs.href = options.cashtagUrlBase + cashtag;
	    attrs.title = "$" + cashtag;
	    attrs["class"] =  options.cashtagClass;
	    if (options.targetBlank) {
	      attrs.target = '_blank';
	    }

	    return twttr.txt.linkToTextWithSymbol(entity, "$", cashtag, attrs, options);
	  };

	  twttr.txt.linkToMentionAndList = function(entity, text, options) {
	    var at = text.substring(entity.indices[0], entity.indices[0] + 1);
	    var user = twttr.txt.htmlEscape(entity.screenName);
	    var slashListname = twttr.txt.htmlEscape(entity.listSlug);
	    var isList = entity.listSlug && !options.suppressLists;
	    var attrs = clone(options.htmlAttrs || {});
	    attrs["class"] = (isList ? options.listClass : options.usernameClass);
	    attrs.href = isList ? options.listUrlBase + user + slashListname : options.usernameUrlBase + user;
	    if (!isList && !options.suppressDataScreenName) {
	      attrs['data-screen-name'] = user;
	    }
	    if (options.targetBlank) {
	      attrs.target = '_blank';
	    }

	    return twttr.txt.linkToTextWithSymbol(entity, at, isList ? user + slashListname : user, attrs, options);
	  };

	  twttr.txt.linkToUrl = function(entity, text, options) {
	    var url = entity.url;
	    var displayUrl = url;
	    var linkText = twttr.txt.htmlEscape(displayUrl);

	    // If the caller passed a urlEntities object (provided by a Twitter API
	    // response with include_entities=true), we use that to render the display_url
	    // for each URL instead of it's underlying t.co URL.
	    var urlEntity = (options.urlEntities && options.urlEntities[url]) || entity;
	    if (urlEntity.display_url) {
	      linkText = twttr.txt.linkTextWithEntity(urlEntity, options);
	    }

	    var attrs = clone(options.htmlAttrs || {});

	    if (!url.match(twttr.txt.regexen.urlHasProtocol)) {
	      url = "http://" + url;
	    }
	    attrs.href = url;

	    if (options.targetBlank) {
	      attrs.target = '_blank';
	    }

	    // set class only if urlClass is specified.
	    if (options.urlClass) {
	      attrs["class"] = options.urlClass;
	    }

	    // set target only if urlTarget is specified.
	    if (options.urlTarget) {
	      attrs.target = options.urlTarget;
	    }

	    if (!options.title && urlEntity.display_url) {
	      attrs.title = urlEntity.expanded_url;
	    }

	    return twttr.txt.linkToText(entity, linkText, attrs, options);
	  };

	  twttr.txt.linkTextWithEntity = function (entity, options) {
	    var displayUrl = entity.display_url;
	    var expandedUrl = entity.expanded_url;

	    // Goal: If a user copies and pastes a tweet containing t.co'ed link, the resulting paste
	    // should contain the full original URL (expanded_url), not the display URL.
	    //
	    // Method: Whenever possible, we actually emit HTML that contains expanded_url, and use
	    // font-size:0 to hide those parts that should not be displayed (because they are not part of display_url).
	    // Elements with font-size:0 get copied even though they are not visible.
	    // Note that display:none doesn't work here. Elements with display:none don't get copied.
	    //
	    // Additionally, we want to *display* ellipses, but we don't want them copied.  To make this happen we
	    // wrap the ellipses in a tco-ellipsis class and provide an onCopy handler that sets display:none on
	    // everything with the tco-ellipsis class.
	    //
	    // Exception: pic.twitter.com images, for which expandedUrl = "https://twitter.com/#!/username/status/1234/photo/1
	    // For those URLs, display_url is not a substring of expanded_url, so we don't do anything special to render the elided parts.
	    // For a pic.twitter.com URL, the only elided part will be the "https://", so this is fine.

	    var displayUrlSansEllipses = displayUrl.replace(/…/g, ""); // We have to disregard ellipses for matching
	    // Note: we currently only support eliding parts of the URL at the beginning or the end.
	    // Eventually we may want to elide parts of the URL in the *middle*.  If so, this code will
	    // become more complicated.  We will probably want to create a regexp out of display URL,
	    // replacing every ellipsis with a ".*".
	    if (expandedUrl.indexOf(displayUrlSansEllipses) != -1) {
	      var displayUrlIndex = expandedUrl.indexOf(displayUrlSansEllipses);
	      var v = {
	        displayUrlSansEllipses: displayUrlSansEllipses,
	        // Portion of expandedUrl that precedes the displayUrl substring
	        beforeDisplayUrl: expandedUrl.substr(0, displayUrlIndex),
	        // Portion of expandedUrl that comes after displayUrl
	        afterDisplayUrl: expandedUrl.substr(displayUrlIndex + displayUrlSansEllipses.length),
	        precedingEllipsis: displayUrl.match(/^…/) ? "…" : "",
	        followingEllipsis: displayUrl.match(/…$/) ? "…" : ""
	      };
	      for (var k in v) {
	        if (v.hasOwnProperty(k)) {
	          v[k] = twttr.txt.htmlEscape(v[k]);
	        }
	      }
	      // As an example: The user tweets "hi http://longdomainname.com/foo"
	      // This gets shortened to "hi http://t.co/xyzabc", with display_url = "…nname.com/foo"
	      // This will get rendered as:
	      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
	      //   …
	      //   <!-- There's a chance the onCopy event handler might not fire. In case that happens,
	      //        we include an &nbsp; here so that the … doesn't bump up against the URL and ruin it.
	      //        The &nbsp; is inside the tco-ellipsis span so that when the onCopy handler *does*
	      //        fire, it doesn't get copied.  Otherwise the copied text would have two spaces in a row,
	      //        e.g. "hi  http://longdomainname.com/foo".
	      //   <span style='font-size:0'>&nbsp;</span>
	      // </span>
	      // <span style='font-size:0'>  <!-- This stuff should get copied but not displayed -->
	      //   http://longdomai
	      // </span>
	      // <span class='js-display-url'> <!-- This stuff should get displayed *and* copied -->
	      //   nname.com/foo
	      // </span>
	      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
	      //   <span style='font-size:0'>&nbsp;</span>
	      //   …
	      // </span>
	      v['invisible'] = options.invisibleTagAttrs;
	      return stringSupplant("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", v);
	    }
	    return displayUrl;
	  };

	  twttr.txt.autoLinkEntities = function(text, entities, options) {
	    options = clone(options || {});

	    options.hashtagClass = options.hashtagClass || DEFAULT_HASHTAG_CLASS;
	    options.hashtagUrlBase = options.hashtagUrlBase || "https://twitter.com/#!/search?q=%23";
	    options.cashtagClass = options.cashtagClass || DEFAULT_CASHTAG_CLASS;
	    options.cashtagUrlBase = options.cashtagUrlBase || "https://twitter.com/#!/search?q=%24";
	    options.listClass = options.listClass || DEFAULT_LIST_CLASS;
	    options.usernameClass = options.usernameClass || DEFAULT_USERNAME_CLASS;
	    options.usernameUrlBase = options.usernameUrlBase || "https://twitter.com/";
	    options.listUrlBase = options.listUrlBase || "https://twitter.com/";
	    options.htmlAttrs = twttr.txt.extractHtmlAttrsFromOptions(options);
	    options.invisibleTagAttrs = options.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";

	    // remap url entities to hash
	    var urlEntities, i, len;
	    if(options.urlEntities) {
	      urlEntities = {};
	      for(i = 0, len = options.urlEntities.length; i < len; i++) {
	        urlEntities[options.urlEntities[i].url] = options.urlEntities[i];
	      }
	      options.urlEntities = urlEntities;
	    }

	    var result = "";
	    var beginIndex = 0;

	    // sort entities by start index
	    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });

	    var nonEntity = options.htmlEscapeNonEntities ? twttr.txt.htmlEscape : function(text) {
	      return text;
	    };

	    for (var i = 0; i < entities.length; i++) {
	      var entity = entities[i];
	      result += nonEntity(text.substring(beginIndex, entity.indices[0]));

	      if (entity.url) {
	        result += twttr.txt.linkToUrl(entity, text, options);
	      } else if (entity.hashtag) {
	        result += twttr.txt.linkToHashtag(entity, text, options);
	      } else if (entity.screenName) {
	        result += twttr.txt.linkToMentionAndList(entity, text, options);
	      } else if (entity.cashtag) {
	        result += twttr.txt.linkToCashtag(entity, text, options);
	      }
	      beginIndex = entity.indices[1];
	    }
	    result += nonEntity(text.substring(beginIndex, text.length));
	    return result;
	  };

	  twttr.txt.autoLinkWithJSON = function(text, json, options) {
	    // map JSON entity to twitter-text entity
	    if (json.user_mentions) {
	      for (var i = 0; i < json.user_mentions.length; i++) {
	        // this is a @mention
	        json.user_mentions[i].screenName = json.user_mentions[i].screen_name;
	      }
	    }

	    if (json.hashtags) {
	      for (var i = 0; i < json.hashtags.length; i++) {
	        // this is a #hashtag
	        json.hashtags[i].hashtag = json.hashtags[i].text;
	      }
	    }

	    if (json.symbols) {
	      for (var i = 0; i < json.symbols.length; i++) {
	        // this is a $CASH tag
	        json.symbols[i].cashtag = json.symbols[i].text;
	      }
	    }

	    // concatenate all entities
	    var entities = [];
	    for (var key in json) {
	      entities = entities.concat(json[key]);
	    }

	    // modify indices to UTF-16
	    twttr.txt.modifyIndicesFromUnicodeToUTF16(text, entities);

	    return twttr.txt.autoLinkEntities(text, entities, options);
	  };

	  twttr.txt.extractHtmlAttrsFromOptions = function(options) {
	    var htmlAttrs = {};
	    for (var k in options) {
	      var v = options[k];
	      if (OPTIONS_NOT_ATTRIBUTES[k]) continue;
	      if (BOOLEAN_ATTRIBUTES[k]) {
	        v = v ? k : null;
	      }
	      if (v == null) continue;
	      htmlAttrs[k] = v;
	    }
	    return htmlAttrs;
	  };

	  twttr.txt.autoLink = function(text, options) {
	    var entities = twttr.txt.extractEntitiesWithIndices(text, {extractUrlsWithoutProtocol: false});
	    return twttr.txt.autoLinkEntities(text, entities, options);
	  };

	  twttr.txt.autoLinkUsernamesOrLists = function(text, options) {
	    var entities = twttr.txt.extractMentionsOrListsWithIndices(text);
	    return twttr.txt.autoLinkEntities(text, entities, options);
	  };

	  twttr.txt.autoLinkHashtags = function(text, options) {
	    var entities = twttr.txt.extractHashtagsWithIndices(text);
	    return twttr.txt.autoLinkEntities(text, entities, options);
	  };

	  twttr.txt.autoLinkCashtags = function(text, options) {
	    var entities = twttr.txt.extractCashtagsWithIndices(text);
	    return twttr.txt.autoLinkEntities(text, entities, options);
	  };

	  twttr.txt.autoLinkUrlsCustom = function(text, options) {
	    var entities = twttr.txt.extractUrlsWithIndices(text, {extractUrlsWithoutProtocol: false});
	    return twttr.txt.autoLinkEntities(text, entities, options);
	  };

	  twttr.txt.removeOverlappingEntities = function(entities) {
	    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });

	    var prev = entities[0];
	    for (var i = 1; i < entities.length; i++) {
	      if (prev.indices[1] > entities[i].indices[0]) {
	        entities.splice(i, 1);
	        i--;
	      } else {
	        prev = entities[i];
	      }
	    }
	  };

	  twttr.txt.extractEntitiesWithIndices = function(text, options) {
	    var entities = twttr.txt.extractUrlsWithIndices(text, options)
	                    .concat(twttr.txt.extractMentionsOrListsWithIndices(text))
	                    .concat(twttr.txt.extractHashtagsWithIndices(text, {checkUrlOverlap: false}))
	                    .concat(twttr.txt.extractCashtagsWithIndices(text));

	    if (entities.length == 0) {
	      return [];
	    }

	    twttr.txt.removeOverlappingEntities(entities);
	    return entities;
	  };

	  twttr.txt.extractMentions = function(text) {
	    var screenNamesOnly = [],
	        screenNamesWithIndices = twttr.txt.extractMentionsWithIndices(text);

	    for (var i = 0; i < screenNamesWithIndices.length; i++) {
	      var screenName = screenNamesWithIndices[i].screenName;
	      screenNamesOnly.push(screenName);
	    }

	    return screenNamesOnly;
	  };

	  twttr.txt.extractMentionsWithIndices = function(text) {
	    var mentions = [],
	        mentionOrList,
	        mentionsOrLists = twttr.txt.extractMentionsOrListsWithIndices(text);

	    for (var i = 0 ; i < mentionsOrLists.length; i++) {
	      mentionOrList = mentionsOrLists[i];
	      if (mentionOrList.listSlug == '') {
	        mentions.push({
	          screenName: mentionOrList.screenName,
	          indices: mentionOrList.indices
	        });
	      }
	    }

	    return mentions;
	  };

	  /**
	   * Extract list or user mentions.
	   * (Presence of listSlug indicates a list)
	   */
	  twttr.txt.extractMentionsOrListsWithIndices = function(text) {
	    if (!text || !text.match(twttr.txt.regexen.atSigns)) {
	      return [];
	    }

	    var possibleNames = [],
	        slashListname;

	    text.replace(twttr.txt.regexen.validMentionOrList, function(match, before, atSign, screenName, slashListname, offset, chunk) {
	      var after = chunk.slice(offset + match.length);
	      if (!after.match(twttr.txt.regexen.endMentionMatch)) {
	        slashListname = slashListname || '';
	        var startPosition = offset + before.length;
	        var endPosition = startPosition + screenName.length + slashListname.length + 1;
	        possibleNames.push({
	          screenName: screenName,
	          listSlug: slashListname,
	          indices: [startPosition, endPosition]
	        });
	      }
	    });

	    return possibleNames;
	  };


	  twttr.txt.extractReplies = function(text) {
	    if (!text) {
	      return null;
	    }

	    var possibleScreenName = text.match(twttr.txt.regexen.validReply);
	    if (!possibleScreenName ||
	        RegExp.rightContext.match(twttr.txt.regexen.endMentionMatch)) {
	      return null;
	    }

	    return possibleScreenName[1];
	  };

	  twttr.txt.extractUrls = function(text, options) {
	    var urlsOnly = [],
	        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text, options);

	    for (var i = 0; i < urlsWithIndices.length; i++) {
	      urlsOnly.push(urlsWithIndices[i].url);
	    }

	    return urlsOnly;
	  };

	  twttr.txt.extractUrlsWithIndices = function(text, options) {
	    if (!options) {
	      options = {extractUrlsWithoutProtocol: true};
	    }
	    if (!text || (options.extractUrlsWithoutProtocol ? !text.match(/\./) : !text.match(/:/))) {
	      return [];
	    }

	    var urls = [];

	    while (twttr.txt.regexen.extractUrl.exec(text)) {
	      var before = RegExp.$2, url = RegExp.$3, protocol = RegExp.$4, domain = RegExp.$5, path = RegExp.$7;
	      var endPosition = twttr.txt.regexen.extractUrl.lastIndex,
	          startPosition = endPosition - url.length;

	      // if protocol is missing and domain contains non-ASCII characters,
	      // extract ASCII-only domains.
	      if (!protocol) {
	        if (!options.extractUrlsWithoutProtocol
	            || before.match(twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) {
	          continue;
	        }
	        var lastUrl = null,
	            asciiEndPosition = 0;
	        domain.replace(twttr.txt.regexen.validAsciiDomain, function(asciiDomain) {
	          var asciiStartPosition = domain.indexOf(asciiDomain, asciiEndPosition);
	          asciiEndPosition = asciiStartPosition + asciiDomain.length;
	          lastUrl = {
	            url: asciiDomain,
	            indices: [startPosition + asciiStartPosition, startPosition + asciiEndPosition]
	          };
	          if (path
	              || asciiDomain.match(twttr.txt.regexen.validSpecialShortDomain)
	              || !asciiDomain.match(twttr.txt.regexen.invalidShortDomain)) {
	            urls.push(lastUrl);
	          }
	        });

	        // no ASCII-only domain found. Skip the entire URL.
	        if (lastUrl == null) {
	          continue;
	        }

	        // lastUrl only contains domain. Need to add path and query if they exist.
	        if (path) {
	          lastUrl.url = url.replace(domain, lastUrl.url);
	          lastUrl.indices[1] = endPosition;
	        }
	      } else {
	        // In the case of t.co URLs, don't allow additional path characters.
	        if (url.match(twttr.txt.regexen.validTcoUrl)) {
	          url = RegExp.lastMatch;
	          endPosition = startPosition + url.length;
	        }
	        urls.push({
	          url: url,
	          indices: [startPosition, endPosition]
	        });
	      }
	    }

	    return urls;
	  };

	  twttr.txt.extractHashtags = function(text) {
	    var hashtagsOnly = [],
	        hashtagsWithIndices = twttr.txt.extractHashtagsWithIndices(text);

	    for (var i = 0; i < hashtagsWithIndices.length; i++) {
	      hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
	    }

	    return hashtagsOnly;
	  };

	  twttr.txt.extractHashtagsWithIndices = function(text, options) {
	    if (!options) {
	      options = {checkUrlOverlap: true};
	    }

	    if (!text || !text.match(twttr.txt.regexen.hashSigns)) {
	      return [];
	    }

	    var tags = [];

	    text.replace(twttr.txt.regexen.validHashtag, function(match, before, hash, hashText, offset, chunk) {
	      var after = chunk.slice(offset + match.length);
	      if (after.match(twttr.txt.regexen.endHashtagMatch))
	        return;
	      var startPosition = offset + before.length;
	      var endPosition = startPosition + hashText.length + 1;
	      tags.push({
	        hashtag: hashText,
	        indices: [startPosition, endPosition]
	      });
	    });

	    if (options.checkUrlOverlap) {
	      // also extract URL entities
	      var urls = twttr.txt.extractUrlsWithIndices(text);
	      if (urls.length > 0) {
	        var entities = tags.concat(urls);
	        // remove overlap
	        twttr.txt.removeOverlappingEntities(entities);
	        // only push back hashtags
	        tags = [];
	        for (var i = 0; i < entities.length; i++) {
	          if (entities[i].hashtag) {
	            tags.push(entities[i]);
	          }
	        }
	      }
	    }

	    return tags;
	  };

	  twttr.txt.extractCashtags = function(text) {
	    var cashtagsOnly = [],
	        cashtagsWithIndices = twttr.txt.extractCashtagsWithIndices(text);

	    for (var i = 0; i < cashtagsWithIndices.length; i++) {
	      cashtagsOnly.push(cashtagsWithIndices[i].cashtag);
	    }

	    return cashtagsOnly;
	  };

	  twttr.txt.extractCashtagsWithIndices = function(text) {
	    if (!text || text.indexOf("$") == -1) {
	      return [];
	    }

	    var tags = [];

	    text.replace(twttr.txt.regexen.validCashtag, function(match, before, dollar, cashtag, offset, chunk) {
	      var startPosition = offset + before.length;
	      var endPosition = startPosition + cashtag.length + 1;
	      tags.push({
	        cashtag: cashtag,
	        indices: [startPosition, endPosition]
	      });
	    });

	    return tags;
	  };

	  twttr.txt.modifyIndicesFromUnicodeToUTF16 = function(text, entities) {
	    twttr.txt.convertUnicodeIndices(text, entities, false);
	  };

	  twttr.txt.modifyIndicesFromUTF16ToUnicode = function(text, entities) {
	    twttr.txt.convertUnicodeIndices(text, entities, true);
	  };

	  twttr.txt.getUnicodeTextLength = function(text) {
	    return text.replace(twttr.txt.regexen.non_bmp_code_pairs, ' ').length;
	  };

	  twttr.txt.convertUnicodeIndices = function(text, entities, indicesInUTF16) {
	    if (entities.length == 0) {
	      return;
	    }

	    var charIndex = 0;
	    var codePointIndex = 0;

	    // sort entities by start index
	    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });
	    var entityIndex = 0;
	    var entity = entities[0];

	    while (charIndex < text.length) {
	      if (entity.indices[0] == (indicesInUTF16 ? charIndex : codePointIndex)) {
	        var len = entity.indices[1] - entity.indices[0];
	        entity.indices[0] = indicesInUTF16 ? codePointIndex : charIndex;
	        entity.indices[1] = entity.indices[0] + len;

	        entityIndex++;
	        if (entityIndex == entities.length) {
	          // no more entity
	          break;
	        }
	        entity = entities[entityIndex];
	      }

	      var c = text.charCodeAt(charIndex);
	      if (0xD800 <= c && c <= 0xDBFF && charIndex < text.length - 1) {
	        // Found high surrogate char
	        c = text.charCodeAt(charIndex + 1);
	        if (0xDC00 <= c && c <= 0xDFFF) {
	          // Found surrogate pair
	          charIndex++;
	        }
	      }
	      codePointIndex++;
	      charIndex++;
	    }
	  };

	  // this essentially does text.split(/<|>/)
	  // except that won't work in IE, where empty strings are ommitted
	  // so "<>".split(/<|>/) => [] in IE, but is ["", "", ""] in all others
	  // but "<<".split("<") => ["", "", ""]
	  twttr.txt.splitTags = function(text) {
	    var firstSplits = text.split("<"),
	        secondSplits,
	        allSplits = [],
	        split;

	    for (var i = 0; i < firstSplits.length; i += 1) {
	      split = firstSplits[i];
	      if (!split) {
	        allSplits.push("");
	      } else {
	        secondSplits = split.split(">");
	        for (var j = 0; j < secondSplits.length; j += 1) {
	          allSplits.push(secondSplits[j]);
	        }
	      }
	    }

	    return allSplits;
	  };

	  twttr.txt.hitHighlight = function(text, hits, options) {
	    var defaultHighlightTag = "em";

	    hits = hits || [];
	    options = options || {};

	    if (hits.length === 0) {
	      return text;
	    }

	    var tagName = options.tag || defaultHighlightTag,
	        tags = ["<" + tagName + ">", "</" + tagName + ">"],
	        chunks = twttr.txt.splitTags(text),
	        i,
	        j,
	        result = "",
	        chunkIndex = 0,
	        chunk = chunks[0],
	        prevChunksLen = 0,
	        chunkCursor = 0,
	        startInChunk = false,
	        chunkChars = chunk,
	        flatHits = [],
	        index,
	        hit,
	        tag,
	        placed,
	        hitSpot;

	    for (i = 0; i < hits.length; i += 1) {
	      for (j = 0; j < hits[i].length; j += 1) {
	        flatHits.push(hits[i][j]);
	      }
	    }

	    for (index = 0; index < flatHits.length; index += 1) {
	      hit = flatHits[index];
	      tag = tags[index % 2];
	      placed = false;

	      while (chunk != null && hit >= prevChunksLen + chunk.length) {
	        result += chunkChars.slice(chunkCursor);
	        if (startInChunk && hit === prevChunksLen + chunkChars.length) {
	          result += tag;
	          placed = true;
	        }

	        if (chunks[chunkIndex + 1]) {
	          result += "<" + chunks[chunkIndex + 1] + ">";
	        }

	        prevChunksLen += chunkChars.length;
	        chunkCursor = 0;
	        chunkIndex += 2;
	        chunk = chunks[chunkIndex];
	        chunkChars = chunk;
	        startInChunk = false;
	      }

	      if (!placed && chunk != null) {
	        hitSpot = hit - prevChunksLen;
	        result += chunkChars.slice(chunkCursor, hitSpot) + tag;
	        chunkCursor = hitSpot;
	        if (index % 2 === 0) {
	          startInChunk = true;
	        } else {
	          startInChunk = false;
	        }
	      } else if(!placed) {
	        placed = true;
	        result += tag;
	      }
	    }

	    if (chunk != null) {
	      if (chunkCursor < chunkChars.length) {
	        result += chunkChars.slice(chunkCursor);
	      }
	      for (index = chunkIndex + 1; index < chunks.length; index += 1) {
	        result += (index % 2 === 0 ? chunks[index] : "<" + chunks[index] + ">");
	      }
	    }

	    return result;
	  };

	  var MAX_LENGTH = 140;

	  // Returns the length of Tweet text with consideration to t.co URL replacement
	  // and chars outside the basic multilingual plane that use 2 UTF16 code points
	  twttr.txt.getTweetLength = function(text, options) {
	    if (!options) {
	      options = {
	          // These come from https://api.twitter.com/1.1/help/configuration.json
	          // described by https://dev.twitter.com/rest/reference/get/help/configuration
	          short_url_length: 23,
	          short_url_length_https: 23
	      };
	    }
	    var textLength = twttr.txt.getUnicodeTextLength(text),
	        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text);
	    twttr.txt.modifyIndicesFromUTF16ToUnicode(text, urlsWithIndices);

	    for (var i = 0; i < urlsWithIndices.length; i++) {
	      // Subtract the length of the original URL
	      textLength += urlsWithIndices[i].indices[0] - urlsWithIndices[i].indices[1];

	      // Add 23 characters for URL starting with https://
	      // http:// URLs still use https://t.co so they are 23 characters as well
	      if (urlsWithIndices[i].url.toLowerCase().match(twttr.txt.regexen.urlHasHttps)) {
	         textLength += options.short_url_length_https;
	      } else {
	        textLength += options.short_url_length;
	      }
	    }

	    return textLength;
	  };

	  // Check the text for any reason that it may not be valid as a Tweet. This is meant as a pre-validation
	  // before posting to api.twitter.com. There are several server-side reasons for Tweets to fail but this pre-validation
	  // will allow quicker feedback.
	  //
	  // Returns false if this text is valid. Otherwise one of the following strings will be returned:
	  //
	  //   "too_long": if the text is too long
	  //   "empty": if the text is nil or empty
	  //   "invalid_characters": if the text contains non-Unicode or any of the disallowed Unicode characters
	  twttr.txt.isInvalidTweet = function(text) {
	    if (!text) {
	      return "empty";
	    }

	    // Determine max length independent of URL length
	    if (twttr.txt.getTweetLength(text) > MAX_LENGTH) {
	      return "too_long";
	    }

	    if (twttr.txt.hasInvalidCharacters(text)) {
	      return "invalid_characters";
	    }

	    return false;
	  };

	  twttr.txt.hasInvalidCharacters = function(text) {
	    return twttr.txt.regexen.invalid_chars.test(text);
	  };

	  twttr.txt.isValidTweetText = function(text) {
	    return !twttr.txt.isInvalidTweet(text);
	  };

	  twttr.txt.isValidUsername = function(username) {
	    if (!username) {
	      return false;
	    }

	    var extracted = twttr.txt.extractMentions(username);

	    // Should extract the username minus the @ sign, hence the .slice(1)
	    return extracted.length === 1 && extracted[0] === username.slice(1);
	  };

	  var VALID_LIST_RE = regexSupplant(/^#{validMentionOrList}$/);

	  twttr.txt.isValidList = function(usernameList) {
	    var match = usernameList.match(VALID_LIST_RE);

	    // Must have matched and had nothing before or after
	    return !!(match && match[1] == "" && match[4]);
	  };

	  twttr.txt.isValidHashtag = function(hashtag) {
	    if (!hashtag) {
	      return false;
	    }

	    var extracted = twttr.txt.extractHashtags(hashtag);

	    // Should extract the hashtag minus the # sign, hence the .slice(1)
	    return extracted.length === 1 && extracted[0] === hashtag.slice(1);
	  };

	  twttr.txt.isValidUrl = function(url, unicodeDomains, requireProtocol) {
	    if (unicodeDomains == null) {
	      unicodeDomains = true;
	    }

	    if (requireProtocol == null) {
	      requireProtocol = true;
	    }

	    if (!url) {
	      return false;
	    }

	    var urlParts = url.match(twttr.txt.regexen.validateUrlUnencoded);

	    if (!urlParts || urlParts[0] !== url) {
	      return false;
	    }

	    var scheme = urlParts[1],
	        authority = urlParts[2],
	        path = urlParts[3],
	        query = urlParts[4],
	        fragment = urlParts[5];

	    if (!(
	      (!requireProtocol || (isValidMatch(scheme, twttr.txt.regexen.validateUrlScheme) && scheme.match(/^https?$/i))) &&
	      isValidMatch(path, twttr.txt.regexen.validateUrlPath) &&
	      isValidMatch(query, twttr.txt.regexen.validateUrlQuery, true) &&
	      isValidMatch(fragment, twttr.txt.regexen.validateUrlFragment, true)
	    )) {
	      return false;
	    }

	    return (unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlUnicodeAuthority)) ||
	           (!unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlAuthority));
	  };

	  function isValidMatch(string, regex, optional) {
	    if (!optional) {
	      // RegExp["$&"] is the text of the last match
	      // blank strings are ok, but are falsy, so we check stringiness instead of truthiness
	      return ((typeof string === "string") && string.match(regex) && RegExp["$&"] === string);
	    }

	    // RegExp["$&"] is the text of the last match
	    return (!string || (string.match(regex) && RegExp["$&"] === string));
	  }

	  if (typeof module != 'undefined' && module.exports) {
	    module.exports = twttr.txt;
	  }

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (twttr.txt), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }

	  if (typeof window != 'undefined') {
	    if (window.twttr) {
	      for (var prop in twttr) {
	        window.twttr[prop] = twttr[prop];
	      }
	    } else {
	      window.twttr = twttr;
	    }
	  }
	})();


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");t.b(t.v(t.f("classnames",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-widget-id=\"");t.b(t.v(t.f("widget_id",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_author",c,p,1),c,p,0,111,810,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-user-info stacklapopup-clearfix\">");t.b("\n" + i);t.b("        <a class=\"stacklapopup-user-link\"");t.b("\n" + i);t.b("           href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");t.b("\n" + i);t.b("           ");if(!t.s(t.f("original_url",c,p,1),c,p,1,0,0,"")){t.b("target=\"_blank\"");};t.b(">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-avatar");t.b("\n" + i);t.b("                 ");if(t.s(t.f("show_stackla_logo",c,p,1),c,p,0,396,410,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" no-background");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                <img src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"stacklapopup-user-top\">");t.b("\n" + i);t.b("                <span class=\"stacklapopup-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"stacklapopup-user-bottom\">");t.b("\n" + i);t.b("                <span class=\"stacklapopup-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,847,1431,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-image-wrapper-inner\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-image-loading\"");t.b("\n" + i);t.b("                 ");if(t.s(t.f("image_padding_bottom_percent",c,p,1),c,p,0,1071,1128,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding-bottom: ");t.b(t.v(t.f("image_padding_bottom_percent",c,p,0)));t.b(";\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("               <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("image_classname",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    data-max-width=\"");t.b(t.v(t.f("max_image_width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    data-max-height=\"");t.b(t.v(t.f("max_image_height",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    draggable=\"false\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_video",c,p,1),c,p,0,1467,1543,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-video-player-root\">");t.b(t.t(t.f("video_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_content",c,p,1),c,p,0,1581,4164,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("show_title",c,p,1),c,p,0,1605,1736,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-title-wrapper\">");t.b("\n" + i);t.b("            <h2 class=\"stacklapopup-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_html",c,p,1),c,p,0,1775,1903,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-html-wrapper\">");t.b("\n" + i);t.b("            <h2 class=\"stacklapopup-html\">");t.b(t.v(t.f("html",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("ecal_data",c,p,1),c,p,0,1941,3052,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <ul class=\"stacklapopup-ecal\">");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,2006,2205,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-location\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>Location:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("location",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>Start:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("startFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>End:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("endFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);if(t.s(t.f("details",c,p,1),c,p,0,2603,2804,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-ecal-details\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>Details:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("details",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("clickThroughUrl",c,p,1),c,p,0,2849,3009,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li class=\"stacklapopup-ecal-cta\">");t.b("\n" + i);t.b("                <a href=\"");t.b(t.v(t.f("clickThroughUrl",c,p,0)));t.b("\" target=\"_blank\">Add to Calendar</a>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("        </ul>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_caption",c,p,1),c,p,0,3093,3193,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-caption\">");t.b("\n" + i);t.b("            <p>");t.b(t.t(t.f("message",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_twitter_intent",c,p,1),c,p,0,3244,4135,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-twitter-intent-wrapper\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-twitter-intent stacklapopup-clearfix\">");t.b("\n" + i);t.b("                <div>");t.b("\n" + i);t.b("                    <a href=\"https://twitter.com/intent/tweet?in_reply_to=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            target=\"_blank\" class=\"stacklapopup-twitter-reply\">");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div>");t.b("\n" + i);t.b("                    <a href=\"https://twitter.com/intent/retweet?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                       target=\"_blank\" class=\"stacklapopup-twitter-retweet\">");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div>");t.b("\n" + i);t.b("                    <a href=\"https://twitter.com/intent/favorite?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                       target=\"_blank\" class=\"stacklapopup-twitter-favorite\">");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_timestamp",c,p,1),c,p,0,4206,4653,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-source-wrapper\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-source\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("original_url",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-social-source ");t.b(t.v(t.d("t.source",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("            <span class=\"stacklapopup-timestamp\">");t.b("\n" + i);t.b("                Via <a href=\"");t.b(t.v(t.f("original_url",c,p,0)));t.b("\" target=\"_blank\">");t.b(t.v(t.f("source",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("                ");t.b(t.v(t.f("timephrase",c,p,0)));t.b("\n" + i);t.b("            </span>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_tags",c,p,1),c,p,0,4692,5353,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-tags-wrapper\">");t.b("\n" + i);t.b("        <ul class=\"stacklapopup-tags stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,4819,5314,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li>");t.b("\n" + i);if(t.s(t.f("href",c,p,1),c,p,0,4862,5067,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <a href=\"");t.b(t.v(t.f("href",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                    <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                </a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("href",c,p,1),c,p,1,0,0,"")){t.b("                <span class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                    <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                </a>");t.b("\n" + i);};t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("        </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_interactions",c,p,1),c,p,0,5395,10322,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-interactions-wrapper\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-interactions stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("show_sharing",c,p,1),c,p,0,5547,7950,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-sharing ");if(!t.s(t.f("show_actions",c,p,1),c,p,1,0,0,"")){t.b("stacklapopup-sharing-solo");};t.b("\">");t.b("\n" + i);t.b("                <a class=\"stacklapopup-share-button js-stacklapopup-share-button\">");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-shareicon share\"></div><span>Share</span>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <ul class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("allow_share_to_facebook",c,p,1),c,p,0,5996,6306,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li class=\"facebook\">");t.b("\n" + i);t.b("                        <a onclick=\"StacklaFluidWidget.facebookShare(this);\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-shareicon facebook\"></div>");t.b("\n" + i);t.b("                            Share");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);});c.pop();}t.b("                    <li class=\"twitter\">");t.b("\n" + i);t.b("                        <a onclick=\"StacklaFluidWidget.twitterShare(this);\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-shareicon twitter\"></div>");t.b("\n" + i);t.b("                            Tweet");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);if(t.s(t.f("allow_share_to_pinterest",c,p,1),c,p,0,6670,6999,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li class=\"pinterest\">");t.b("\n" + i);t.b("                        <a onclick=\"StacklaFluidWidget.pinterestShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-shareicon pinterest\"></div>");t.b("\n" + i);t.b("                            Pin");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);});c.pop();}t.b("                    <li class=\"gplus\">");t.b("\n" + i);t.b("                        <a onclick=\"StacklaFluidWidget.googleShare(this);\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-shareicon gplus\"></div>");t.b("\n" + i);t.b("                            Share");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);t.b("                    <li class=\"linkedin\">");t.b("\n" + i);t.b("                        <a onclick=\"StacklaFluidWidget.linkedInShare(this);\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-shareicon linkedin\"></div>");t.b("\n" + i);t.b("                            Share");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);t.b("                    <li class=\"email\">");t.b("\n" + i);t.b("                        <a onclick=\"StacklaFluidWidget.emailShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-shareicon email\"></div>");t.b("\n" + i);t.b("                            Email");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);t.b("                </ul>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_actions",c,p,1),c,p,0,7997,9808,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-actions\">");t.b("\n" + i);t.b("                <ul class=\"stacklapopup-actions-list js-stacklapopup-actions-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("show_vote",c,p,1),c,p,0,8185,8663,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li>");t.b("\n" + i);if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,8260,8591,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-interaction-vote ");if(t.s(t.f("on",c,p,1),c,p,0,8332,8334,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                            <i class=\"stackla-icon-vote\"></i>");t.b("\n" + i);t.b("                            <span>");t.b(t.v(t.f("coount",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                    </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_likes",c,p,1),c,p,0,8713,9190,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li>");t.b("\n" + i);if(t.s(t.d("interactionData.like",c,p,1),c,p,0,8788,9118,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-interaction-like ");if(t.s(t.f("on",c,p,1),c,p,0,8860,8862,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">");t.b("\n" + i);t.b("                            <i class=\"stackla-icon-like\"></i>");t.b("\n" + i);t.b("                            <span>");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                    </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_dislikes",c,p,1),c,p,0,9244,9736,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li>");t.b("\n" + i);if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,9322,9661,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-interaction-dislike ");if(t.s(t.f("on",c,p,1),c,p,0,9397,9399,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                            <i class=\"stackla-icon-dislike\"></i>");t.b("\n" + i);t.b("                            <span>");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                    </li>");t.b("\n" + i);});c.pop();}t.b("                </ul>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_claim",c,p,1),c,p,0,9853,10276,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-claim ");if(t.s(t.f("claimed",c,p,1),c,p,0,9909,9916,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("claimed");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                <a class=\"js-claim-tile\"");t.b("\n" + i);t.b("                   ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("onclick=\"window.open('");t.b(t.v(t.d("options.claimActionUrl",c,p,0)));t.b("', '_blank', 'width=600, height=400')\"");};t.b(">");t.b("\n" + i);t.b("                   ");if(t.s(t.f("claimed",c,p,1),c,p,0,10134,10149,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("Tile Registered");});c.pop();}t.b("\n" + i);t.b("                   ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("Register Your Tile");};t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_comments",c,p,1),c,p,0,10368,11648,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-comments-wrap\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-comments-avatar\">YOU</div>");t.b("\n" + i);t.b("            <form>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-user-input-arrow\"></div>");t.b("\n" + i);t.b("                <input class=\"stacklapopup-comments-user-input\"");t.b("\n" + i);t.b("                       type=\"text\"");t.b("\n" + i);t.b("                       placeholder=\"Your name\"");t.b("\n" + i);t.b("                       ");if(t.s(t.f("disallow_comment",c,p,1),c,p,0,10833,10852,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly=\"readonly\"");});c.pop();}t.b("\n" + i);t.b("                       value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-user-textarea-arrow\"></div>");t.b("\n" + i);t.b("                <textarea class=\"stacklapopup-comments-user-textarea\" placeholder=\"Write a comment...\"></textarea>");t.b("\n" + i);t.b("                <input class=\"stacklapopup-comments-user-button\" type=\"button\" value=\"Post\" onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-user-message\">Your comment has been submitted for moderation and will appear soon!</div>");t.b("\n" + i);t.b("            </form>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <input class=\"stacklapopup-comments-load-button\" type=\"button\"");t.b("\n" + i);t.b("               value=\"Load More\" data-comment-index=\"\"");t.b("\n" + i);t.b("               onclick=\"StacklaFluidWidget.loadMoreComments(this);\"/>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_products",c,p,1),c,p,0,11690,11718,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    ");t.b(t.t(t.f("productsHtml",c,p,0)));t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <button title=\"Close (Esc)\" type=\"button\" class=\"stacklapopup-close\">×</button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{classnames}}\"\n    data-tile-id=\"{{id}}\"\n    data-widget-id=\"{{widget_id}}\">\n\n    {{#show_author}}\n    <div class=\"stacklapopup-user-info stacklapopup-clearfix\">\n        <a class=\"stacklapopup-user-link\"\n           href=\"{{author_link}}\"\n           {{^original_url}}target=\"_blank\"{{/original_url}}>\n            <div class=\"stacklapopup-avatar\n                 {{#show_stackla_logo}} no-background{{/show_stackla_logo}}\">\n                <img src=\"{{avatar}}\">\n            </div>\n            <div class=\"stacklapopup-user-top\">\n                <span class=\"stacklapopup-user-name\">{{user_name}}</span>\n            </div>\n            <div class=\"stacklapopup-user-bottom\">\n                <span class=\"stacklapopup-user-handle\">{{user_handle}}</span>\n            </div>\n        </a>\n    </div>\n    {{/show_author}}\n\n    {{#show_image}}\n    <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">\n        <div class=\"stacklapopup-image-wrapper-inner\">\n            <div class=\"stacklapopup-image-loading\"\n                 {{#image_padding_bottom_percent}}style=\"padding-bottom: {{image_padding_bottom_percent}};\"{{/image_padding_bottom_percent}}>\n               <img src=\"{{image}}\" class=\"{{image_classname}}\"\n                    data-max-width=\"{{max_image_width}}\"\n                    data-max-height=\"{{max_image_height}}\"\n                    draggable=\"false\">\n            </div>\n        </div>\n    </div>\n    {{/show_image}}\n\n    {{#show_video}}\n    <div class=\"stacklapopup-video-player-root\">{{{video_html}}}</div>\n    {{/show_video}}\n\n    {{#show_content}}\n        {{#show_title}}\n        <div class=\"stacklapopup-title-wrapper\">\n            <h2 class=\"stacklapopup-title\">{{title}}</h2>\n        </div>\n        {{/show_title}}\n\n        {{#show_html}}\n        <div class=\"stacklapopup-html-wrapper\">\n            <h2 class=\"stacklapopup-html\">{{html}}</h2>\n        </div>\n        {{/show_html}}\n\n        {{#ecal_data}}\n        <ul class=\"stacklapopup-ecal\">\n            {{#location}}\n            <li>\n                <i class=\"stackla-icon-location\"></i>&nbsp;\n                <strong>Location:</strong>&nbsp;\n                <span>{{location}}</span>\n            </li>\n            {{/location}}\n            <li>\n                <i class=\"stackla-icon-time\"></i>&nbsp;\n                <strong>Start:</strong>&nbsp;\n                <span>{{startFormat}}</span>\n            </li>\n            <li>\n                <i class=\"stackla-icon-time\"></i>&nbsp;\n                <strong>End:</strong>&nbsp;\n                <span>{{endFormat}}</span>\n            </li>\n            {{#details}}\n            <li>\n                <i class=\"stackla-icon-ecal-details\"></i>&nbsp;\n                <strong>Details:</strong>&nbsp;\n                <span>{{details}}</span>\n            </li>\n            {{/details}}\n            {{#clickThroughUrl}}\n            <li class=\"stacklapopup-ecal-cta\">\n                <a href=\"{{clickThroughUrl}}\" target=\"_blank\">Add to Calendar</a>\n            </li>\n            {{/clickThroughUrl}}\n        </ul>\n        {{/ecal_data}}\n\n        {{#show_caption}}\n        <div class=\"stacklapopup-caption\">\n            <p>{{{message}}}</p>\n        </div>\n        {{/show_caption}}\n\n        {{#show_twitter_intent}}\n        <div class=\"stacklapopup-twitter-intent-wrapper\">\n            <div class=\"stacklapopup-twitter-intent stacklapopup-clearfix\">\n                <div>\n                    <a href=\"https://twitter.com/intent/tweet?in_reply_to={{twitter_id}}\"\n                            target=\"_blank\" class=\"stacklapopup-twitter-reply\">\n                    </a>\n                </div>\n                <div>\n                    <a href=\"https://twitter.com/intent/retweet?tweet_id={{twitter_id}}\"\n                       target=\"_blank\" class=\"stacklapopup-twitter-retweet\">\n                    </a>\n                </div>\n                <div>\n                    <a href=\"https://twitter.com/intent/favorite?tweet_id={{twitter_id}}\"\n                       target=\"_blank\" class=\"stacklapopup-twitter-favorite\">\n                    </a>\n                </div>\n            </div>\n        </div>\n        {{/show_twitter_intent}}\n    {{/show_content}}\n\n    {{#show_timestamp}}\n    <div class=\"stacklapopup-source-wrapper\">\n        <div class=\"stacklapopup-source\">\n            <a href=\"{{original_url}}\" target=\"_blank\">\n                <div class=\"stacklapopup-social-source {{t.source}}\"></div>\n            </a>\n            <span class=\"stacklapopup-timestamp\">\n                Via <a href=\"{{original_url}}\" target=\"_blank\">{{source}}</a>\n                {{timephrase}}\n            </span>\n        </div>\n    </div>\n    {{/show_timestamp}}\n\n    {{#show_tags}}\n    <div class=\"stacklapopup-tags-wrapper\">\n        <ul class=\"stacklapopup-tags stacklapopup-clearfix\">\n            {{#tags}}\n            <li>\n                {{#href}}\n                <a href=\"{{href}}\" class=\"{{class_names}}\" target=\"{{target}}\">\n                    <i class=\"stackla-icon-{{type}}\"></i>\n                    {{text}}\n                </a>\n                {{/href}}\n                {{^href}}\n                <span class=\"{{class_names}}\">\n                    <i class=\"stackla-icon-{{type}}\"></i>\n                    {{text}}\n                </a>\n                {{/href}}\n            </li>\n            {{/tags}}\n        </ul>\n    </div>\n    {{/show_tags}}\n\n    {{#show_interactions}}\n    <div class=\"stacklapopup-interactions-wrapper\">\n        <div class=\"stacklapopup-interactions stacklapopup-clearfix\">\n            {{#show_sharing}}\n            <div class=\"stacklapopup-sharing {{^show_actions}}stacklapopup-sharing-solo{{/show_actions}}\">\n                <a class=\"stacklapopup-share-button js-stacklapopup-share-button\">\n                    <div class=\"stacklapopup-shareicon share\"></div><span>Share</span>\n                </a>\n                <ul class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">\n                    {{#allow_share_to_facebook}}\n                    <li class=\"facebook\">\n                        <a onclick=\"StacklaFluidWidget.facebookShare(this);\">\n                            <div class=\"stacklapopup-shareicon facebook\"></div>\n                            Share\n                        </a>\n                    </li>\n                    {{/allow_share_to_facebook}}\n                    <li class=\"twitter\">\n                        <a onclick=\"StacklaFluidWidget.twitterShare(this);\">\n                            <div class=\"stacklapopup-shareicon twitter\"></div>\n                            Tweet\n                        </a>\n                    </li>\n                    {{#allow_share_to_pinterest}}\n                    <li class=\"pinterest\">\n                        <a onclick=\"StacklaFluidWidget.pinterestShare(this, '{{share_text}}');\">\n                            <div class=\"stacklapopup-shareicon pinterest\"></div>\n                            Pin\n                        </a>\n                    </li>\n                    {{/allow_share_to_pinterest}}\n                    <li class=\"gplus\">\n                        <a onclick=\"StacklaFluidWidget.googleShare(this);\">\n                            <div class=\"stacklapopup-shareicon gplus\"></div>\n                            Share\n                        </a>\n                    </li>\n                    <li class=\"linkedin\">\n                        <a onclick=\"StacklaFluidWidget.linkedInShare(this);\">\n                            <div class=\"stacklapopup-shareicon linkedin\"></div>\n                            Share\n                        </a>\n                    </li>\n                    <li class=\"email\">\n                        <a onclick=\"StacklaFluidWidget.emailShare(this, '{{share_text}}');\">\n                            <div class=\"stacklapopup-shareicon email\"></div>\n                            Email\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            {{/show_sharing}}\n            {{#show_actions}}\n            <div class=\"stacklapopup-actions\">\n                <ul class=\"stacklapopup-actions-list js-stacklapopup-actions-list stacklapopup-clearfix\">\n                    {{#show_vote}}\n                    <li>\n                        {{#interactionData.vote}}\n                        <a class=\"stacklapopup-interaction-vote {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">\n                            <i class=\"stackla-icon-vote\"></i>\n                            <span>{{coount}}</span>\n                        </a>\n                        {{/interactionData.vote}}\n                    </li>\n                    {{/show_vote}}\n                    {{#show_likes}}\n                    <li>\n                        {{#interactionData.like}}\n                        <a class=\"stacklapopup-interaction-like {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">\n                            <i class=\"stackla-icon-like\"></i>\n                            <span>{{count}}</span>\n                        </a>\n                        {{/interactionData.like}}\n                    </li>\n                    {{/show_likes}}\n                    {{#show_dislikes}}\n                    <li>\n                        {{#interactionData.dislike}}\n                        <a class=\"stacklapopup-interaction-dislike {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">\n                            <i class=\"stackla-icon-dislike\"></i>\n                            <span>{{count}}</span>\n                        </a>\n                        {{/interactionData.dislike}}\n                    </li>\n                    {{/show_dislikes}}\n                </ul>\n            </div>\n            {{/show_actions}}\n            {{#show_claim}}\n            <div class=\"stacklapopup-claim {{#claimed}}claimed{{/claimed}}\">\n                <a class=\"js-claim-tile\"\n                   {{^claimed}}onclick=\"window.open('{{options.claimActionUrl}}', '_blank', 'width=600, height=400')\"{{/claimed}}>\n                   {{#claimed}}Tile Registered{{/claimed}}\n                   {{^claimed}}Register Your Tile{{/claimed}}\n                </a>\n            </div>\n            {{/show_claim}}\n        </div>\n    </div>\n    {{/show_interactions}}\n\n    {{#show_comments}}\n    <div class=\"stacklapopup-comments-wrap\">\n        <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">\n            <div class=\"stacklapopup-comments-avatar\">YOU</div>\n            <form>\n                <div class=\"stacklapopup-comments-user-input-arrow\"></div>\n                <input class=\"stacklapopup-comments-user-input\"\n                       type=\"text\"\n                       placeholder=\"Your name\"\n                       {{#disallow_comment}}readonly=\"readonly\"{{/disallow_comment}}\n                       value=\"{{comment_user_input}}\">\n                <div class=\"stacklapopup-comments-user-textarea-arrow\"></div>\n                <textarea class=\"stacklapopup-comments-user-textarea\" placeholder=\"Write a comment...\"></textarea>\n                <input class=\"stacklapopup-comments-user-button\" type=\"button\" value=\"Post\" onclick=\"StacklaFluidWidget.postComment(this);\">\n                <div class=\"stacklapopup-comments-user-message\">Your comment has been submitted for moderation and will appear soon!</div>\n            </form>\n        </div>\n        <input class=\"stacklapopup-comments-load-button\" type=\"button\"\n               value=\"Load More\" data-comment-index=\"\"\n               onclick=\"StacklaFluidWidget.loadMoreComments(this);\"/>\n    </div>\n    {{/show_comments}}\n\n    {{#show_products}}\n    {{{productsHtml}}}\n    {{/show_products}}\n\n    <button title=\"Close (Esc)\" type=\"button\" class=\"stacklapopup-close\">×</button>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");t.b(t.v(t.f("classnames",c,p,0)));t.b("\" data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-widget-id=\"");t.b(t.v(t.f("widget_id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div class=\"stacklapopup-panel-left\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_author",c,p,1),c,p,0,149,916,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-user-info stacklapopup-clearfix\">");t.b("\n" + i);t.b("            <a class=\"stacklapopup-user-link\"");t.b("\n" + i);t.b("               href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");t.b("\n" + i);t.b("               ");if(!t.s(t.f("original_url",c,p,1),c,p,1,0,0,"")){t.b("target=\"_blank\"");};t.b(">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-avatar");t.b("\n" + i);t.b("                     ");if(t.s(t.f("show_stackla_logo",c,p,1),c,p,0,458,472,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" no-background");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                    <img src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-top\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-bottom\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,957,1589,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-image-wrapper-inner\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-image-loading\"");t.b("\n" + i);t.b("                     ");if(t.s(t.f("image_padding_bottom_percent",c,p,1),c,p,0,1197,1254,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding-bottom: ");t.b(t.v(t.f("image_padding_bottom_percent",c,p,0)));t.b(";\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                   <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("image_classname",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        data-max-width=\"");t.b(t.v(t.f("max_image_width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        data-max-height=\"");t.b(t.v(t.f("max_image_height",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        draggable=\"false\">");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_video",c,p,1),c,p,0,1629,1713,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-video-player-root\">");t.b(t.t(t.f("video_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    </div><!-- .stacklapopup-panel-left (end) -->");t.b("\n" + i);t.b("    <div class=\"stacklapopup-panel-right\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_author",c,p,1),c,p,0,1848,2615,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-user-info stacklapopup-clearfix\">");t.b("\n" + i);t.b("            <a class=\"stacklapopup-user-link\"");t.b("\n" + i);t.b("               href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");t.b("\n" + i);t.b("               ");if(!t.s(t.f("original_url",c,p,1),c,p,1,0,0,"")){t.b("target=\"_blank\"");};t.b(">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-avatar");t.b("\n" + i);t.b("                     ");if(t.s(t.f("show_stackla_logo",c,p,1),c,p,0,2157,2171,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" no-background");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                    <img src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-top\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-bottom\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_content",c,p,1),c,p,0,2658,5521,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("show_title",c,p,1),c,p,0,2686,2833,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-title-wrapper\">");t.b("\n" + i);t.b("                <h2 class=\"stacklapopup-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_html",c,p,1),c,p,0,2876,3020,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-html-wrapper\">");t.b("\n" + i);t.b("                <h2 class=\"stacklapopup-html\">");t.b(t.v(t.f("html",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("ecal_data",c,p,1),c,p,0,3062,4301,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <ul class=\"stacklapopup-ecal\">");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,3135,3358,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <li>");t.b("\n" + i);t.b("                    <i class=\"stackla-icon-location\"></i>&nbsp;");t.b("\n" + i);t.b("                    <strong>Location:</strong>&nbsp;");t.b("\n" + i);t.b("                    <span>");t.b(t.v(t.f("location",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </li>");t.b("\n" + i);});c.pop();}t.b("                <li>");t.b("\n" + i);t.b("                    <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                    <strong>Start:</strong>&nbsp;");t.b("\n" + i);t.b("                    <span>");t.b(t.v(t.f("startFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </li>");t.b("\n" + i);t.b("                <li>");t.b("\n" + i);t.b("                    <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                    <strong>End:</strong>&nbsp;");t.b("\n" + i);t.b("                    <span>");t.b(t.v(t.f("endFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </li>");t.b("\n" + i);if(t.s(t.f("details",c,p,1),c,p,0,3800,4025,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <li>");t.b("\n" + i);t.b("                    <i class=\"stackla-icon-ecal-details\"></i>&nbsp;");t.b("\n" + i);t.b("                    <strong>Details:</strong>&nbsp;");t.b("\n" + i);t.b("                    <span>");t.b(t.v(t.f("details",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("clickThroughUrl",c,p,1),c,p,0,4074,4250,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <li class=\"stacklapopup-ecal-cta\">");t.b("\n" + i);t.b("                    <a href=\"");t.b(t.v(t.f("clickThroughUrl",c,p,0)));t.b("\" target=\"_blank\">Add to Calendar</a>");t.b("\n" + i);t.b("                </li>");t.b("\n" + i);});c.pop();}t.b("            </ul>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_caption",c,p,1),c,p,0,4346,4462,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-caption\">");t.b("\n" + i);t.b("                <p>");t.b(t.t(t.f("message",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_twitter_intent",c,p,1),c,p,0,4517,5488,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-twitter-intent-wrapper\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-twitter-intent stacklapopup-clearfix\">");t.b("\n" + i);t.b("                    <div>");t.b("\n" + i);t.b("                        <a href=\"https://twitter.com/intent/tweet?in_reply_to=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                target=\"_blank\" class=\"stacklapopup-twitter-reply\">");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                    <div>");t.b("\n" + i);t.b("                        <a href=\"https://twitter.com/intent/retweet?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                           target=\"_blank\" class=\"stacklapopup-twitter-retweet\">");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                    <div>");t.b("\n" + i);t.b("                        <a href=\"https://twitter.com/intent/favorite?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                           target=\"_blank\" class=\"stacklapopup-twitter-favorite\">");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_timestamp",c,p,1),c,p,0,5567,6062,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-source-wrapper\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-source\">");t.b("\n" + i);t.b("                <a href=\"");t.b(t.v(t.f("original_url",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-social-source ");t.b(t.v(t.d("t.source",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <span class=\"stacklapopup-timestamp\">");t.b("\n" + i);t.b("                    Via <a href=\"");t.b(t.v(t.f("original_url",c,p,0)));t.b("\" target=\"_blank\">");t.b(t.v(t.f("source",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("timephrase",c,p,0)));t.b("\n" + i);t.b("                </span>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_tags",c,p,1),c,p,0,6105,6850,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-tags-wrapper\">");t.b("\n" + i);t.b("            <ul class=\"stacklapopup-tags stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,6244,6799,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <li>");t.b("\n" + i);if(t.s(t.f("href",c,p,1),c,p,0,6295,6520,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a href=\"");t.b(t.v(t.f("href",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                        ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("href",c,p,1),c,p,1,0,0,"")){t.b("                    <span class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                        ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);};t.b("                </li>");t.b("\n" + i);});c.pop();}t.b("            </ul>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_interactions",c,p,1),c,p,0,6896,12220,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-interactions-wrapper\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-interactions stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("show_sharing",c,p,1),c,p,0,7060,9655,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-sharing ");if(!t.s(t.f("show_actions",c,p,1),c,p,1,0,0,"")){t.b("stacklapopup-sharing-solo");};t.b("\">");t.b("\n" + i);t.b("                    <a class=\"stacklapopup-share-button js-stacklapopup-share-button\">");t.b("\n" + i);t.b("                        <div class=\"stacklapopup-shareicon share\"></div><span>Share</span>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                    <ul class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("allow_share_to_facebook",c,p,1),c,p,0,7533,7871,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"facebook\">");t.b("\n" + i);t.b("                            <a onclick=\"StacklaFluidWidget.facebookShare(this);\">");t.b("\n" + i);t.b("                                <div class=\"stacklapopup-shareicon facebook\"></div>");t.b("\n" + i);t.b("                                Share");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);});c.pop();}t.b("                        <li class=\"twitter\">");t.b("\n" + i);t.b("                            <a onclick=\"StacklaFluidWidget.twitterShare(this);\">");t.b("\n" + i);t.b("                                <div class=\"stacklapopup-shareicon twitter\"></div>");t.b("\n" + i);t.b("                                Tweet");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);if(t.s(t.f("allow_share_to_pinterest",c,p,1),c,p,0,8263,8620,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"pinterest\">");t.b("\n" + i);t.b("                            <a onclick=\"StacklaFluidWidget.pinterestShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                                <div class=\"stacklapopup-shareicon pinterest\"></div>");t.b("\n" + i);t.b("                                Pin");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);});c.pop();}t.b("                        <li class=\"gplus\">");t.b("\n" + i);t.b("                            <a onclick=\"StacklaFluidWidget.googleShare(this);\">");t.b("\n" + i);t.b("                                <div class=\"stacklapopup-shareicon gplus\"></div>");t.b("\n" + i);t.b("                                Share");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);t.b("                        <li class=\"linkedin\">");t.b("\n" + i);t.b("                            <a onclick=\"StacklaFluidWidget.linkedInShare(this);\">");t.b("\n" + i);t.b("                                <div class=\"stacklapopup-shareicon linkedin\"></div>");t.b("\n" + i);t.b("                                Share");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);t.b("                        <li class=\"email\">");t.b("\n" + i);t.b("                            <a onclick=\"StacklaFluidWidget.emailShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                                <div class=\"stacklapopup-shareicon email\"></div>");t.b("\n" + i);t.b("                                Email");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);t.b("                    </ul>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_actions",c,p,1),c,p,0,9707,11658,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-actions\">");t.b("\n" + i);t.b("                    <ul class=\"stacklapopup-actions-list js-stacklapopup-actions-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("show_vote",c,p,1),c,p,0,9907,10421,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li>");t.b("\n" + i);if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,9990,10341,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"stacklapopup-interaction-vote ");if(t.s(t.f("on",c,p,1),c,p,0,10066,10068,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                                <i class=\"stackla-icon-vote\"></i>");t.b("\n" + i);t.b("                                <span>");t.b(t.v(t.f("coount",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_likes",c,p,1),c,p,0,10475,10988,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li>");t.b("\n" + i);if(t.s(t.d("interactionData.like",c,p,1),c,p,0,10558,10908,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"stacklapopup-interaction-like ");if(t.s(t.f("on",c,p,1),c,p,0,10634,10636,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">");t.b("\n" + i);t.b("                                <i class=\"stackla-icon-like\"></i>");t.b("\n" + i);t.b("                                <span>");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_dislikes",c,p,1),c,p,0,11046,11574,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li>");t.b("\n" + i);if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,11132,11491,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"stacklapopup-interaction-dislike ");if(t.s(t.f("on",c,p,1),c,p,0,11211,11213,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                                <i class=\"stackla-icon-dislike\"></i>");t.b("\n" + i);t.b("                                <span>");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}t.b("                    </ul>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_claim",c,p,1),c,p,0,11707,12162,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-claim ");if(t.s(t.f("claimed",c,p,1),c,p,0,11767,11774,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("claimed");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                    <a class=\"js-claim-tile\"");t.b("\n" + i);t.b("                       ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("onclick=\"window.open('");t.b(t.v(t.d("options.claimActionUrl",c,p,0)));t.b("', '_blank', 'width=600, height=400')\"");};t.b(">");t.b("\n" + i);t.b("                       ");if(t.s(t.f("claimed",c,p,1),c,p,0,12004,12019,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("Tile Registered");});c.pop();}t.b("\n" + i);t.b("                       ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("Register Your Tile");};t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_comments",c,p,1),c,p,0,12270,13646,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-comments-wrap\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-avatar\">YOU</div>");t.b("\n" + i);t.b("                <form>");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-comments-user-input-arrow\"></div>");t.b("\n" + i);t.b("                    <input class=\"stacklapopup-comments-user-input\"");t.b("\n" + i);t.b("                           type=\"text\"");t.b("\n" + i);t.b("                           placeholder=\"Your name\"");t.b("\n" + i);t.b("                           ");if(!t.s(t.f("has_comment_permission",c,p,1),c,p,1,0,0,"")){t.b("readonly=\"readonly\"");};t.b("\n" + i);t.b("                           value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-comments-user-textarea-arrow\"></div>");t.b("\n" + i);t.b("                    <textarea class=\"stacklapopup-comments-user-textarea\" placeholder=\"Write a comment...\"></textarea>");t.b("\n" + i);t.b("                    <input class=\"stacklapopup-comments-user-button\" type=\"button\" value=\"Post\" onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-comments-user-message\">Your comment has been submitted for moderation and will appear soon!</div>");t.b("\n" + i);t.b("                </form>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <input class=\"stacklapopup-comments-load-button\" type=\"button\"");t.b("\n" + i);t.b("                   value=\"Load More\" data-comment-index=\"\"");t.b("\n" + i);t.b("                   onclick=\"StacklaFluidWidget.loadMoreComments(this);\"/>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_products",c,p,1),c,p,0,13692,13728,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        ");t.b(t.t(t.f("productsHtml",c,p,0)));t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    </div><!-- .stacklapopup-panel-right (end) -->");t.b("\n");t.b("\n" + i);t.b("    <button title=\"Close (Esc)\" type=\"button\" class=\"stacklapopup-close\">×</button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{classnames}}\" data-tile-id=\"{{id}}\" data-widget-id=\"{{widget_id}}\">\n    <div class=\"stacklapopup-panel-left\">\n\n        {{#show_author}}\n        <div class=\"stacklapopup-user-info stacklapopup-clearfix\">\n            <a class=\"stacklapopup-user-link\"\n               href=\"{{author_link}}\"\n               {{^original_url}}target=\"_blank\"{{/original_url}}>\n                <div class=\"stacklapopup-avatar\n                     {{#show_stackla_logo}} no-background{{/show_stackla_logo}}\">\n                    <img src=\"{{avatar}}\">\n                </div>\n                <div class=\"stacklapopup-user-top\">\n                    <span class=\"stacklapopup-user-name\">{{user_name}}</span>\n                </div>\n                <div class=\"stacklapopup-user-bottom\">\n                    <span class=\"stacklapopup-user-handle\">{{user_handle}}</span>\n                </div>\n            </a>\n        </div>\n        {{/show_author}}\n\n        {{#show_image}}\n        <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">\n            <div class=\"stacklapopup-image-wrapper-inner\">\n                <div class=\"stacklapopup-image-loading\"\n                     {{#image_padding_bottom_percent}}style=\"padding-bottom: {{image_padding_bottom_percent}};\"{{/image_padding_bottom_percent}}>\n                   <img src=\"{{image}}\" class=\"{{image_classname}}\"\n                        data-max-width=\"{{max_image_width}}\"\n                        data-max-height=\"{{max_image_height}}\"\n                        draggable=\"false\">\n                </div>\n            </div>\n        </div>\n        {{/show_image}}\n\n        {{#show_video}}\n        <div class=\"stacklapopup-video-player-root\">{{{video_html}}}</div>\n        {{/show_video}}\n\n    </div><!-- .stacklapopup-panel-left (end) -->\n    <div class=\"stacklapopup-panel-right\">\n\n        {{#show_author}}\n        <div class=\"stacklapopup-user-info stacklapopup-clearfix\">\n            <a class=\"stacklapopup-user-link\"\n               href=\"{{author_link}}\"\n               {{^original_url}}target=\"_blank\"{{/original_url}}>\n                <div class=\"stacklapopup-avatar\n                     {{#show_stackla_logo}} no-background{{/show_stackla_logo}}\">\n                    <img src=\"{{avatar}}\">\n                </div>\n                <div class=\"stacklapopup-user-top\">\n                    <span class=\"stacklapopup-user-name\">{{user_name}}</span>\n                </div>\n                <div class=\"stacklapopup-user-bottom\">\n                    <span class=\"stacklapopup-user-handle\">{{user_handle}}</span>\n                </div>\n            </a>\n        </div>\n        {{/show_author}}\n\n        {{#show_content}}\n            {{#show_title}}\n            <div class=\"stacklapopup-title-wrapper\">\n                <h2 class=\"stacklapopup-title\">{{title}}</h2>\n            </div>\n            {{/show_title}}\n\n            {{#show_html}}\n            <div class=\"stacklapopup-html-wrapper\">\n                <h2 class=\"stacklapopup-html\">{{html}}</h2>\n            </div>\n            {{/show_html}}\n\n            {{#ecal_data}}\n            <ul class=\"stacklapopup-ecal\">\n                {{#location}}\n                <li>\n                    <i class=\"stackla-icon-location\"></i>&nbsp;\n                    <strong>Location:</strong>&nbsp;\n                    <span>{{location}}</span>\n                </li>\n                {{/location}}\n                <li>\n                    <i class=\"stackla-icon-time\"></i>&nbsp;\n                    <strong>Start:</strong>&nbsp;\n                    <span>{{startFormat}}</span>\n                </li>\n                <li>\n                    <i class=\"stackla-icon-time\"></i>&nbsp;\n                    <strong>End:</strong>&nbsp;\n                    <span>{{endFormat}}</span>\n                </li>\n                {{#details}}\n                <li>\n                    <i class=\"stackla-icon-ecal-details\"></i>&nbsp;\n                    <strong>Details:</strong>&nbsp;\n                    <span>{{details}}</span>\n                </li>\n                {{/details}}\n                {{#clickThroughUrl}}\n                <li class=\"stacklapopup-ecal-cta\">\n                    <a href=\"{{clickThroughUrl}}\" target=\"_blank\">Add to Calendar</a>\n                </li>\n                {{/clickThroughUrl}}\n            </ul>\n            {{/ecal_data}}\n\n            {{#show_caption}}\n            <div class=\"stacklapopup-caption\">\n                <p>{{{message}}}</p>\n            </div>\n            {{/show_caption}}\n\n            {{#show_twitter_intent}}\n            <div class=\"stacklapopup-twitter-intent-wrapper\">\n                <div class=\"stacklapopup-twitter-intent stacklapopup-clearfix\">\n                    <div>\n                        <a href=\"https://twitter.com/intent/tweet?in_reply_to={{twitter_id}}\"\n                                target=\"_blank\" class=\"stacklapopup-twitter-reply\">\n                        </a>\n                    </div>\n                    <div>\n                        <a href=\"https://twitter.com/intent/retweet?tweet_id={{twitter_id}}\"\n                           target=\"_blank\" class=\"stacklapopup-twitter-retweet\">\n                        </a>\n                    </div>\n                    <div>\n                        <a href=\"https://twitter.com/intent/favorite?tweet_id={{twitter_id}}\"\n                           target=\"_blank\" class=\"stacklapopup-twitter-favorite\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            {{/show_twitter_intent}}\n        {{/show_content}}\n\n        {{#show_timestamp}}\n        <div class=\"stacklapopup-source-wrapper\">\n            <div class=\"stacklapopup-source\">\n                <a href=\"{{original_url}}\" target=\"_blank\">\n                    <div class=\"stacklapopup-social-source {{t.source}}\"></div>\n                </a>\n                <span class=\"stacklapopup-timestamp\">\n                    Via <a href=\"{{original_url}}\" target=\"_blank\">{{source}}</a>\n                    {{timephrase}}\n                </span>\n            </div>\n        </div>\n        {{/show_timestamp}}\n\n        {{#show_tags}}\n        <div class=\"stacklapopup-tags-wrapper\">\n            <ul class=\"stacklapopup-tags stacklapopup-clearfix\">\n                {{#tags}}\n                <li>\n                    {{#href}}\n                    <a href=\"{{href}}\" class=\"{{class_names}}\" target=\"{{target}}\">\n                        <i class=\"stackla-icon-{{type}}\"></i>\n                        {{text}}\n                    </a>\n                    {{/href}}\n                    {{^href}}\n                    <span class=\"{{class_names}}\">\n                        <i class=\"stackla-icon-{{type}}\"></i>\n                        {{text}}\n                    </a>\n                    {{/href}}\n                </li>\n                {{/tags}}\n            </ul>\n        </div>\n        {{/show_tags}}\n\n        {{#show_interactions}}\n        <div class=\"stacklapopup-interactions-wrapper\">\n            <div class=\"stacklapopup-interactions stacklapopup-clearfix\">\n                {{#show_sharing}}\n                <div class=\"stacklapopup-sharing {{^show_actions}}stacklapopup-sharing-solo{{/show_actions}}\">\n                    <a class=\"stacklapopup-share-button js-stacklapopup-share-button\">\n                        <div class=\"stacklapopup-shareicon share\"></div><span>Share</span>\n                    </a>\n                    <ul class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">\n                        {{#allow_share_to_facebook}}\n                        <li class=\"facebook\">\n                            <a onclick=\"StacklaFluidWidget.facebookShare(this);\">\n                                <div class=\"stacklapopup-shareicon facebook\"></div>\n                                Share\n                            </a>\n                        </li>\n                        {{/allow_share_to_facebook}}\n                        <li class=\"twitter\">\n                            <a onclick=\"StacklaFluidWidget.twitterShare(this);\">\n                                <div class=\"stacklapopup-shareicon twitter\"></div>\n                                Tweet\n                            </a>\n                        </li>\n                        {{#allow_share_to_pinterest}}\n                        <li class=\"pinterest\">\n                            <a onclick=\"StacklaFluidWidget.pinterestShare(this, '{{share_text}}');\">\n                                <div class=\"stacklapopup-shareicon pinterest\"></div>\n                                Pin\n                            </a>\n                        </li>\n                        {{/allow_share_to_pinterest}}\n                        <li class=\"gplus\">\n                            <a onclick=\"StacklaFluidWidget.googleShare(this);\">\n                                <div class=\"stacklapopup-shareicon gplus\"></div>\n                                Share\n                            </a>\n                        </li>\n                        <li class=\"linkedin\">\n                            <a onclick=\"StacklaFluidWidget.linkedInShare(this);\">\n                                <div class=\"stacklapopup-shareicon linkedin\"></div>\n                                Share\n                            </a>\n                        </li>\n                        <li class=\"email\">\n                            <a onclick=\"StacklaFluidWidget.emailShare(this, '{{share_text}}');\">\n                                <div class=\"stacklapopup-shareicon email\"></div>\n                                Email\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                {{/show_sharing}}\n\n                {{#show_actions}}\n                <div class=\"stacklapopup-actions\">\n                    <ul class=\"stacklapopup-actions-list js-stacklapopup-actions-list stacklapopup-clearfix\">\n                        {{#show_vote}}\n                        <li>\n                            {{#interactionData.vote}}\n                            <a class=\"stacklapopup-interaction-vote {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">\n                                <i class=\"stackla-icon-vote\"></i>\n                                <span>{{coount}}</span>\n                            </a>\n                            {{/interactionData.vote}}\n                        </li>\n                        {{/show_vote}}\n                        {{#show_likes}}\n                        <li>\n                            {{#interactionData.like}}\n                            <a class=\"stacklapopup-interaction-like {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">\n                                <i class=\"stackla-icon-like\"></i>\n                                <span>{{count}}</span>\n                            </a>\n                            {{/interactionData.like}}\n                        </li>\n                        {{/show_likes}}\n                        {{#show_dislikes}}\n                        <li>\n                            {{#interactionData.dislike}}\n                            <a class=\"stacklapopup-interaction-dislike {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">\n                                <i class=\"stackla-icon-dislike\"></i>\n                                <span>{{count}}</span>\n                            </a>\n                            {{/interactionData.dislike}}\n                        </li>\n                        {{/show_dislikes}}\n                    </ul>\n                </div>\n                {{/show_actions}}\n                {{#show_claim}}\n                <div class=\"stacklapopup-claim {{#claimed}}claimed{{/claimed}}\">\n                    <a class=\"js-claim-tile\"\n                       {{^claimed}}onclick=\"window.open('{{options.claimActionUrl}}', '_blank', 'width=600, height=400')\"{{/claimed}}>\n                       {{#claimed}}Tile Registered{{/claimed}}\n                       {{^claimed}}Register Your Tile{{/claimed}}\n                    </a>\n                </div>\n                {{/show_claim}}\n            </div>\n        </div>\n        {{/show_interactions}}\n\n        {{#show_comments}}\n        <div class=\"stacklapopup-comments-wrap\">\n            <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">\n                <div class=\"stacklapopup-comments-avatar\">YOU</div>\n                <form>\n                    <div class=\"stacklapopup-comments-user-input-arrow\"></div>\n                    <input class=\"stacklapopup-comments-user-input\"\n                           type=\"text\"\n                           placeholder=\"Your name\"\n                           {{^has_comment_permission}}readonly=\"readonly\"{{/has_comment_permission}}\n                           value=\"{{comment_user_input}}\">\n                    <div class=\"stacklapopup-comments-user-textarea-arrow\"></div>\n                    <textarea class=\"stacklapopup-comments-user-textarea\" placeholder=\"Write a comment...\"></textarea>\n                    <input class=\"stacklapopup-comments-user-button\" type=\"button\" value=\"Post\" onclick=\"StacklaFluidWidget.postComment(this);\">\n                    <div class=\"stacklapopup-comments-user-message\">Your comment has been submitted for moderation and will appear soon!</div>\n                </form>\n            </div>\n            <input class=\"stacklapopup-comments-load-button\" type=\"button\"\n                   value=\"Load More\" data-comment-index=\"\"\n                   onclick=\"StacklaFluidWidget.loadMoreComments(this);\"/>\n        </div>\n        {{/show_comments}}\n\n        {{#show_products}}\n        {{{productsHtml}}}\n        {{/show_products}}\n\n    </div><!-- .stacklapopup-panel-right (end) -->\n\n    <button title=\"Close (Esc)\" type=\"button\" class=\"stacklapopup-close\">×</button>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");t.b(t.v(t.f("classnames",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-widget-id=\"");t.b(t.v(t.f("widget_id",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_author",c,p,1),c,p,0,111,1268,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-user-info-wrapper\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-user-info\">");t.b("\n" + i);if(t.s(t.f("avatar",c,p,1),c,p,0,229,599,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"stacklapopup-avatar-wrapper\">");t.b("\n" + i);t.b("                <a class=\"stacklapopup-avatar-link");if(t.s(t.f("show_stackla_logo",c,p,1),c,p,0,357,371,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" no-background");});c.pop();}t.b("\" href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");if(t.s(t.f("original_url",c,p,1),c,p,0,434,450,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                   <img class=\"stacklapopup-avatar-image\" src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("            </span>");t.b("\n" + i);});c.pop();}t.b("            <span class=\"stacklapopup-source stacklapopup-source-");t.b(t.v(t.f("source",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                <i class=\"fs fs-");t.b(t.v(t.f("source",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("            </span>");t.b("\n" + i);t.b("            <a class=\"stacklapopup-user-link\"");t.b("\n" + i);t.b("               href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");t.b("\n" + i);t.b("               ");if(t.s(t.f("original_url",c,p,1),c,p,0,874,889,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-top\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-bottom\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,1305,1889,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-image-wrapper-inner\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-image-loading\"");t.b("\n" + i);t.b("                 ");if(t.s(t.f("image_padding_bottom_percent",c,p,1),c,p,0,1529,1586,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding-bottom: ");t.b(t.v(t.f("image_padding_bottom_percent",c,p,0)));t.b(";\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("               <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("image_classname",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    data-max-width=\"");t.b(t.v(t.f("max_image_width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    data-max-height=\"");t.b(t.v(t.f("max_image_height",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    draggable=\"false\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_video",c,p,1),c,p,0,1925,2001,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-video-player-root\">");t.b(t.t(t.f("video_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_audio",c,p,1),c,p,0,2037,2618,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-audio-wrapper\">");t.b("\n" + i);t.b("        <img");t.b("\n" + i);t.b("            src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"");t.b("\n" + i);t.b("            class=\"stacklapopup-audio-image\"");t.b("\n" + i);t.b("            data-max-width=\"520\"");t.b("\n" + i);t.b("            data-max-height=\"520\"");t.b("\n" + i);t.b("            draggable=\"false\"/>");t.b("\n" + i);t.b("        <audio");t.b("\n" + i);t.b("             class=\"stacklapopup-audio video-js vjs-default-skin\"");t.b("\n" + i);t.b("             controls");t.b("\n" + i);t.b("             autoplay");t.b("\n" + i);t.b("             width=\"100%\"");t.b("\n" + i);t.b("             height=\"30\"");t.b("\n" + i);t.b("             preload=\"auto\">");t.b("\n" + i);if(t.s(t.f("audio_files",c,p,1),c,p,0,2502,2568,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("             <source src=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("         </audio>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_embed",c,p,1),c,p,0,2654,2726,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-embed-wrapper\">");t.b(t.t(t.f("embed_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_content",c,p,1),c,p,0,2764,6067,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("show_title",c,p,1),c,p,0,2788,2919,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-title-wrapper\">");t.b("\n" + i);t.b("            <h2 class=\"stacklapopup-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_html",c,p,1),c,p,0,2958,3090,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-html-wrapper\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-html\">");t.b(t.t(t.f("html",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("ecal_data",c,p,1),c,p,0,3128,4239,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <ul class=\"stacklapopup-ecal\">");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,3193,3392,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-location\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>Location:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("location",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>Start:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("startFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>End:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("endFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);if(t.s(t.f("details",c,p,1),c,p,0,3790,3991,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li>");t.b("\n" + i);t.b("                <i class=\"stackla-icon-ecal-details\"></i>&nbsp;");t.b("\n" + i);t.b("                <strong>Details:</strong>&nbsp;");t.b("\n" + i);t.b("                <span>");t.b(t.v(t.f("details",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("clickThroughUrl",c,p,1),c,p,0,4036,4196,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li class=\"stacklapopup-ecal-cta\">");t.b("\n" + i);t.b("                <a href=\"");t.b(t.v(t.f("clickThroughUrl",c,p,0)));t.b("\" target=\"_blank\">Add to Calendar</a>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("        </ul>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_caption",c,p,1),c,p,0,4280,4419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-caption\">");t.b("\n" + i);t.b("            <p class=\"stacklapopup-caption-paragraph\">");t.b(t.t(t.f("message",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_twitter_intent",c,p,1),c,p,0,4470,5314,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-twitter-intent-wrapper\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-twitter-intent\">");t.b("\n" + i);t.b("                <a href=\"https://twitter.com/intent/tweet?in_reply_to=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        target=\"_blank\" class=\"stacklapopup-twitter-reply\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-reply\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <a href=\"https://twitter.com/intent/retweet?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                   target=\"_blank\" class=\"stacklapopup-twitter-retweet\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-retweet\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <a href=\"https://twitter.com/intent/favorite?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                   target=\"_blank\" class=\"stacklapopup-twitter-favorite\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-heart\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_tags",c,p,1),c,p,0,5362,6047,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-tags-wrapper\">");t.b("\n" + i);t.b("            <div class=\"stacklapopup-tags\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,5480,5995,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("href",c,p,1),c,p,0,5510,5735,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a href=\"");t.b(t.v(t.f("href",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                        ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("href",c,p,1),c,p,1,0,0,"")){t.b("                    <span class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                        ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                    </span>");t.b("\n" + i);};});c.pop();}t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_interactions",c,p,1),c,p,0,6112,10962,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-interactions-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_actions",c,p,1),c,p,0,6190,10448,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-interactions\">");t.b("\n" + i);if(t.s(t.f("show_likes",c,p,1),c,p,0,6266,6746,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"stacklapopup-interaction-like\">");t.b("\n" + i);if(t.s(t.d("interactionData.like",c,p,1),c,p,0,6365,6688,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <a class=\"stacklapopup-interaction-link ");if(t.s(t.f("on",c,p,1),c,p,0,6429,6431,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-thumbs-up\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("            </span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_dislikes",c,p,1),c,p,0,6792,7286,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"stacklapopup-interaction-dislike\">");t.b("\n" + i);if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,6897,7225,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <a class=\"stacklapopup-interaction-link ");if(t.s(t.f("on",c,p,1),c,p,0,6961,6963,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-thumbs-down\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("            </span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_vote",c,p,1),c,p,0,7331,7813,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"stacklapopup-interaction-vote\">");t.b("\n" + i);if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,7430,7755,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <a class=\"stacklapopup-interaction-link ");if(t.s(t.f("on",c,p,1),c,p,0,7494,7496,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-triangle-up\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("            </span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_comments",c,p,1),c,p,0,7858,8344,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.comments",c,p,1),c,p,0,7900,8302,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"stacklapopup-interaction-comment ");if(t.s(t.f("on",c,p,1),c,p,0,7966,7968,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                <a class=\"stacklapopup-interaction-link js-stacklapopup-comment-button\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-comment\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);if(t.s(t.f("count",c,p,1),c,p,0,8164,8259,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("            </span>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_sharing",c,p,1),c,p,0,8393,10407,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"stacklapopup-interaction-share ");if(!t.s(t.f("show_actions",c,p,1),c,p,1,0,0,"")){t.b("stacklapopup-sharing-solo");};t.b("\">");t.b("\n" + i);t.b("                <a class=\"stacklapopup-interaction-link js-stacklapopup-share-button\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-share\"></i>");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("allow_share_to_facebook",c,p,1),c,p,0,8819,9037,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a class=\"stacklapopup-share-button facebook\" onclick=\"StacklaFluidWidget.facebookShare(this);\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-facebook\"></i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);});c.pop();}t.b("                    <a class=\"stacklapopup-share-button twitter\" onclick=\"StacklaFluidWidget.twitterShare(this);\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-twitter\"></i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);if(t.s(t.f("allow_share_to_pinterest",c,p,1),c,p,0,9309,9548,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a class=\"stacklapopup-share-button pinterest\" onclick=\"StacklaFluidWidget.pinterestShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-pinterest\"></i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);});c.pop();}t.b("                    <a class=\"stacklapopup-share-button gplus\" onclick=\"StacklaFluidWidget.googleShare(this);\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-googleplus\"></i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                    <a class=\"stacklapopup-share-button linkedin\" onclick=\"StacklaFluidWidget.linkedInShare(this);\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-linkedin\"></i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                    <a class=\"stacklapopup-share-button email\" onclick=\"StacklaFluidWidget.emailShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-envelope\"></div>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                    <a class=\"stacklapopup-share-button js-stacklapopup-share-button close\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-close\"></i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </span>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_claim",c,p,1),c,p,0,10489,10931,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-claim ");if(t.s(t.f("claimed",c,p,1),c,p,0,10541,10548,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("claimed");});c.pop();}t.b("\">");t.b("\n" + i);t.b("            <a href=\"javascript:void(0);\" class=\"stacklapopup-claim-link js-claim-tile\"");t.b("\n" + i);t.b("               ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("onclick=\"window.open('");t.b(t.v(t.d("options.claimActionUrl",c,p,0)));t.b("', '_blank', 'width=600, height=400')\"");};t.b(">");t.b("\n" + i);t.b("               ");if(t.s(t.f("claimed",c,p,1),c,p,0,10805,10820,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("Tile Registered");});c.pop();}t.b("\n" + i);t.b("               ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("Register Your Tile");};t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_comments",c,p,1),c,p,0,11008,12879,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-comments-wrap ");if(t.s(t.d("interactionData.comments.on",c,p,1),c,p,0,11084,11086,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.d("interactionData.comments.count",c,p,1),c,p,0,11239,11748,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-comments-info\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-info-title\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-comment\"></i> Comments");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <a href=\"javascript:void(0);\" class=\"stacklapopup-comments-load-button\"");t.b("\n" + i);t.b("                   value=\"Load More\" data-comment-index=\"\"");t.b("\n" + i);t.b("                   onclick=\"StacklaFluidWidget.loadMoreComments(this);\">");t.b("\n" + i);t.b("                   View more comments");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("            <form>");t.b("\n" + i);t.b("                <textarea class=\"stacklapopup-comments-user-textarea\"");t.b("\n" + i);t.b("                    placeholder=\"Enter your comment...\"></textarea>");t.b("\n" + i);t.b("                <input class=\"stacklapopup-comments-user-input\"");t.b("\n" + i);t.b("                       type=\"text\"");t.b("\n" + i);t.b("                       placeholder=\"Your name\"");t.b("\n" + i);t.b("                       ");if(t.s(t.f("disallow_comment",c,p,1),c,p,0,12131,12150,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly=\"readonly\"");});c.pop();}t.b("\n" + i);t.b("                       value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\" style=\"display: none;\">");t.b("\n" + i);t.b("                <button");t.b("\n" + i);t.b("                    type=\"button\"");t.b("\n" + i);t.b("                    class=\"stacklapopup-comments-user-button\"");t.b("\n" + i);t.b("                    style=\"display: none\"");t.b("\n" + i);t.b("                    onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-arrow-right6\"></i>");t.b("\n" + i);t.b("                </button>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-user-message\">");t.b("\n" + i);t.b("                    <i class=\"stacklapopup-comments-user-message-icon fs fs-success\"></i>");t.b("\n" + i);t.b("                    Your comment has been submitted for moderation and will appear soon!");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </form>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_footer",c,p,1),c,p,0,12919,13094,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-footer\">");t.b("\n" + i);if(t.s(t.f("show_timestamp",c,p,1),c,p,0,12985,13059,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"stacklapopup-timestamp\">");t.b(t.v(t.f("timephrase",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_products",c,p,1),c,p,0,13134,14775,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-products-wrap\">");t.b("\n" + i);t.b("        <ul class=\"stacklapopup-products\">");t.b("\n" + i);if(t.s(t.f("products",c,p,1),c,p,0,13248,14732,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li class=\"stacklapopup-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-products-item-media\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,13425,13599,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"stacklapopup-products-item-image\">");t.b("\n" + i);t.b("                        <img src=\"");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("                    <div class=\"stacklapopup-products-item-content\">");t.b("\n" + i);if(t.s(t.f("tag",c,p,1),c,p,0,13721,13981,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a href=\"");t.b(t.t(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\" class=\"stacklapopup-products-item-title-wrap\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-products-item-title\">");t.b(t.v(t.f("tag",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}if(t.s(t.f("price",c,p,1),c,p,0,14024,14135,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"stacklapopup-products-item-price\">");t.b(t.v(t.f("price",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("                        <a href=\"");t.b(t.t(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\" class=\"stacklapoup-prodcuts-item-button-wrap\">");t.b("\n" + i);t.b("                            <span class=\"stacklapopup-products-item-button\">");t.b(t.v(t.f("cta_text",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);if(t.s(t.f("description",c,p,1),c,p,0,14471,14574,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <p class=\"stacklapopup-products-item-description\">");t.b(t.v(t.f("description",c,p,0)));t.b("</p>");t.b("\n" + i);});c.pop();}t.b("                <a href=\"javascript:void(0)\" title=\"Close\" class=\"stacklapopup-products-item-close-link\">×</a>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("        </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_nav_left",c,p,1),c,p,0,14817,14988,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Previous Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-left\">");t.b("\n" + i);t.b("        <i class=\"stacklapopup-arrow-icon fs fs-arrow-left2\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_nav_right",c,p,1),c,p,0,15030,15199,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Next Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-right\">");t.b("\n" + i);t.b("        <i class=\"stacklapopup-arrow-icon fs fs-arrow-right2\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_powered_by_stackla",c,p,1),c,p,0,15252,15601,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-poweredByStackla-wrapper\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-poweredByStackla\">");t.b("\n" + i);t.b("            <a class=\"stacklapopup-poweredByStackla-link\" href=\"");t.b(t.v(t.f("powered_by_stackla_url",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                <i class=\"stacklapopup-poweredByStackla-logo\">");t.b("\n" + i);t.b("                </i>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <button title=\"Close (Esc)\" class=\"stacklapopup-close\"></button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{classnames}}\"\n    data-tile-id=\"{{id}}\"\n    data-widget-id=\"{{widget_id}}\">\n\n    {{#show_author}}\n    <div class=\"stacklapopup-user-info-wrapper\">\n        <div class=\"stacklapopup-user-info\">\n            {{#avatar}}\n            <span class=\"stacklapopup-avatar-wrapper\">\n                <a class=\"stacklapopup-avatar-link{{#show_stackla_logo}} no-background{{/show_stackla_logo}}\" href=\"{{author_link}}\"{{#original_url}} target=\"_blank\"{{/original_url}}>\n                   <img class=\"stacklapopup-avatar-image\" src=\"{{avatar}}\"/>\n                </a>\n            </span>\n            {{/avatar}}\n            <span class=\"stacklapopup-source stacklapopup-source-{{source}}\">\n                <i class=\"fs fs-{{source}}\"></i>\n            </span>\n            <a class=\"stacklapopup-user-link\"\n               href=\"{{author_link}}\"\n               {{#original_url}}target=\"_blank\"{{/original_url}}>\n                <div class=\"stacklapopup-user-top\">\n                    <span class=\"stacklapopup-user-name\">{{user_name}}</span>\n                </div>\n                <div class=\"stacklapopup-user-bottom\">\n                    <span class=\"stacklapopup-user-handle\">{{user_handle}}</span>\n                </div>\n            </a>\n        </div>\n    </div>\n    {{/show_author}}\n\n    {{#show_image}}\n    <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">\n        <div class=\"stacklapopup-image-wrapper-inner\">\n            <div class=\"stacklapopup-image-loading\"\n                 {{#image_padding_bottom_percent}}style=\"padding-bottom: {{image_padding_bottom_percent}};\"{{/image_padding_bottom_percent}}>\n               <img src=\"{{image}}\" class=\"{{image_classname}}\"\n                    data-max-width=\"{{max_image_width}}\"\n                    data-max-height=\"{{max_image_height}}\"\n                    draggable=\"false\">\n            </div>\n        </div>\n    </div>\n    {{/show_image}}\n\n    {{#show_video}}\n    <div class=\"stacklapopup-video-player-root\">{{{video_html}}}</div>\n    {{/show_video}}\n\n    {{#show_audio}}\n    <div class=\"stacklapopup-audio-wrapper\">\n        <img\n            src=\"{{image}}\"\n            class=\"stacklapopup-audio-image\"\n            data-max-width=\"520\"\n            data-max-height=\"520\"\n            draggable=\"false\"/>\n        <audio\n             class=\"stacklapopup-audio video-js vjs-default-skin\"\n             controls\n             autoplay\n             width=\"100%\"\n             height=\"30\"\n             preload=\"auto\">\n             {{#audio_files}}\n             <source src=\"{{url}}\" type=\"{{type}}\">\n             {{/audio_files}}\n         </audio>\n    </div>\n    {{/show_audio}}\n\n    {{#show_embed}}\n    <div class=\"stacklapopup-embed-wrapper\">{{{embed_html}}}</div>\n    {{/show_embed}}\n\n    {{#show_content}}\n        {{#show_title}}\n        <div class=\"stacklapopup-title-wrapper\">\n            <h2 class=\"stacklapopup-title\">{{title}}</h2>\n        </div>\n        {{/show_title}}\n\n        {{#show_html}}\n        <div class=\"stacklapopup-html-wrapper\">\n            <div class=\"stacklapopup-html\">{{{html}}}</div>\n        </div>\n        {{/show_html}}\n\n        {{#ecal_data}}\n        <ul class=\"stacklapopup-ecal\">\n            {{#location}}\n            <li>\n                <i class=\"stackla-icon-location\"></i>&nbsp;\n                <strong>Location:</strong>&nbsp;\n                <span>{{location}}</span>\n            </li>\n            {{/location}}\n            <li>\n                <i class=\"stackla-icon-time\"></i>&nbsp;\n                <strong>Start:</strong>&nbsp;\n                <span>{{startFormat}}</span>\n            </li>\n            <li>\n                <i class=\"stackla-icon-time\"></i>&nbsp;\n                <strong>End:</strong>&nbsp;\n                <span>{{endFormat}}</span>\n            </li>\n            {{#details}}\n            <li>\n                <i class=\"stackla-icon-ecal-details\"></i>&nbsp;\n                <strong>Details:</strong>&nbsp;\n                <span>{{details}}</span>\n            </li>\n            {{/details}}\n            {{#clickThroughUrl}}\n            <li class=\"stacklapopup-ecal-cta\">\n                <a href=\"{{clickThroughUrl}}\" target=\"_blank\">Add to Calendar</a>\n            </li>\n            {{/clickThroughUrl}}\n        </ul>\n        {{/ecal_data}}\n\n        {{#show_caption}}\n        <div class=\"stacklapopup-caption\">\n            <p class=\"stacklapopup-caption-paragraph\">{{{message}}}</p>\n        </div>\n        {{/show_caption}}\n\n        {{#show_twitter_intent}}\n        <div class=\"stacklapopup-twitter-intent-wrapper\">\n            <div class=\"stacklapopup-twitter-intent\">\n                <a href=\"https://twitter.com/intent/tweet?in_reply_to={{twitter_id}}\"\n                        target=\"_blank\" class=\"stacklapopup-twitter-reply\">\n                    <i class=\"fs fs-reply\"></i>\n                </a>\n                <a href=\"https://twitter.com/intent/retweet?tweet_id={{twitter_id}}\"\n                   target=\"_blank\" class=\"stacklapopup-twitter-retweet\">\n                    <i class=\"fs fs-retweet\"></i>\n                </a>\n                <a href=\"https://twitter.com/intent/favorite?tweet_id={{twitter_id}}\"\n                   target=\"_blank\" class=\"stacklapopup-twitter-favorite\">\n                    <i class=\"fs fs-heart\"></i>\n                </a>\n            </div>\n        </div>\n        {{/show_twitter_intent}}\n\n        {{#show_tags}}\n        <div class=\"stacklapopup-tags-wrapper\">\n            <div class=\"stacklapopup-tags\">\n                {{#tags}}\n                    {{#href}}\n                    <a href=\"{{href}}\" class=\"{{class_names}}\" target=\"{{target}}\">\n                        <i class=\"stackla-icon-{{type}}\"></i>\n                        {{text}}\n                    </a>\n                    {{/href}}\n                    {{^href}}\n                    <span class=\"{{class_names}}\">\n                        <i class=\"stackla-icon-{{type}}\"></i>\n                        {{text}}\n                    </span>\n                    {{/href}}\n                {{/tags}}\n            </div>\n        </div>\n        {{/show_tags}}\n\n    {{/show_content}}\n\n    {{#show_interactions}}\n    <div class=\"stacklapopup-interactions-wrapper\">\n        {{#show_actions}}\n        <div class=\"stacklapopup-interactions\">\n            {{#show_likes}}\n            <span class=\"stacklapopup-interaction-like\">\n                {{#interactionData.like}}\n                <a class=\"stacklapopup-interaction-link {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">\n                    <i class=\"fs fs-thumbs-up\"></i>\n                </a>\n                <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                {{/interactionData.like}}\n            </span>\n            {{/show_likes}}\n            {{#show_dislikes}}\n            <span class=\"stacklapopup-interaction-dislike\">\n                {{#interactionData.dislike}}\n                <a class=\"stacklapopup-interaction-link {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">\n                    <i class=\"fs fs-thumbs-down\"></i>\n                </a>\n                <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                {{/interactionData.dislike}}\n            </span>\n            {{/show_dislikes}}\n            {{#show_vote}}\n            <span class=\"stacklapopup-interaction-vote\">\n                {{#interactionData.vote}}\n                <a class=\"stacklapopup-interaction-link {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">\n                    <i class=\"fs fs-triangle-up\"></i>\n                </a>\n                <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                {{/interactionData.vote}}\n            </span>\n            {{/show_vote}}\n            {{#show_comments}}\n            {{#interactionData.comments}}\n            <span class=\"stacklapopup-interaction-comment {{#on}}on{{/on}}\">\n                <a class=\"stacklapopup-interaction-link js-stacklapopup-comment-button\">\n                    <i class=\"fs fs-comment\"></i>\n                </a>\n                {{#count}}\n                <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                {{/count}}\n            </span>\n            {{/interactionData.comments}}\n            {{/show_comments}}\n\n            {{#show_sharing}}\n            <span class=\"stacklapopup-interaction-share {{^show_actions}}stacklapopup-sharing-solo{{/show_actions}}\">\n                <a class=\"stacklapopup-interaction-link js-stacklapopup-share-button\">\n                    <i class=\"fs fs-share\"></i>\n                </a>\n                <div class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">\n                    {{#allow_share_to_facebook}}\n                    <a class=\"stacklapopup-share-button facebook\" onclick=\"StacklaFluidWidget.facebookShare(this);\">\n                        <i class=\"fs fs-facebook\"></i>\n                    </a>\n                    {{/allow_share_to_facebook}}\n                    <a class=\"stacklapopup-share-button twitter\" onclick=\"StacklaFluidWidget.twitterShare(this);\">\n                        <i class=\"fs fs-twitter\"></i>\n                    </a>\n                    {{#allow_share_to_pinterest}}\n                    <a class=\"stacklapopup-share-button pinterest\" onclick=\"StacklaFluidWidget.pinterestShare(this, '{{share_text}}');\">\n                        <i class=\"fs fs-pinterest\"></i>\n                    </a>\n                    {{/allow_share_to_pinterest}}\n                    <a class=\"stacklapopup-share-button gplus\" onclick=\"StacklaFluidWidget.googleShare(this);\">\n                        <i class=\"fs fs-googleplus\"></i>\n                    </a>\n                    <a class=\"stacklapopup-share-button linkedin\" onclick=\"StacklaFluidWidget.linkedInShare(this);\">\n                        <i class=\"fs fs-linkedin\"></i>\n                    </a>\n                    <a class=\"stacklapopup-share-button email\" onclick=\"StacklaFluidWidget.emailShare(this, '{{share_text}}');\">\n                        <div class=\"fs fs-envelope\"></div>\n                    </a>\n                    <a class=\"stacklapopup-share-button js-stacklapopup-share-button close\">\n                        <i class=\"fs fs-close\"></i>\n                    </a>\n                </div>\n            </span>\n            {{/show_sharing}}\n        </div>\n        {{/show_actions}}\n        {{#show_claim}}\n        <div class=\"stacklapopup-claim {{#claimed}}claimed{{/claimed}}\">\n            <a href=\"javascript:void(0);\" class=\"stacklapopup-claim-link js-claim-tile\"\n               {{^claimed}}onclick=\"window.open('{{options.claimActionUrl}}', '_blank', 'width=600, height=400')\"{{/claimed}}>\n               {{#claimed}}Tile Registered{{/claimed}}\n               {{^claimed}}Register Your Tile{{/claimed}}\n            </a>\n        </div>\n        {{/show_claim}}\n    </div>\n    {{/show_interactions}}\n\n    {{#show_comments}}\n    <div class=\"stacklapopup-comments-wrap {{#interactionData.comments.on}}on{{/interactionData.comments.on}}\">\n        <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">\n            {{#interactionData.comments.count}}\n            <div class=\"stacklapopup-comments-info\">\n                <div class=\"stacklapopup-comments-info-title\">\n                    <i class=\"fs fs-comment\"></i> Comments\n                </div>\n                <a href=\"javascript:void(0);\" class=\"stacklapopup-comments-load-button\"\n                   value=\"Load More\" data-comment-index=\"\"\n                   onclick=\"StacklaFluidWidget.loadMoreComments(this);\">\n                   View more comments\n                </a>\n            </div>\n            {{/interactionData.comments.count}}\n            <form>\n                <textarea class=\"stacklapopup-comments-user-textarea\"\n                    placeholder=\"Enter your comment...\"></textarea>\n                <input class=\"stacklapopup-comments-user-input\"\n                       type=\"text\"\n                       placeholder=\"Your name\"\n                       {{#disallow_comment}}readonly=\"readonly\"{{/disallow_comment}}\n                       value=\"{{comment_user_input}}\" style=\"display: none;\">\n                <button\n                    type=\"button\"\n                    class=\"stacklapopup-comments-user-button\"\n                    style=\"display: none\"\n                    onclick=\"StacklaFluidWidget.postComment(this);\">\n                    <i class=\"fs fs-arrow-right6\"></i>\n                </button>\n                <div class=\"stacklapopup-comments-user-message\">\n                    <i class=\"stacklapopup-comments-user-message-icon fs fs-success\"></i>\n                    Your comment has been submitted for moderation and will appear soon!\n                </div>\n            </form>\n        </div>\n    </div>\n    {{/show_comments}}\n\n    {{#show_footer}}\n    <div class=\"stacklapopup-footer\">\n        {{#show_timestamp}}\n        <div class=\"stacklapopup-timestamp\">{{timephrase}}</div>\n        {{/show_timestamp}}\n    </div>\n    {{/show_footer}}\n\n    {{#show_products}}\n    <div class=\"stacklapopup-products-wrap\">\n        <ul class=\"stacklapopup-products\">\n            {{#products}}\n            <li class=\"stacklapopup-products-item\" data-tag-id=\"{{id}}\">\n                <div class=\"stacklapopup-products-item-media\">\n                    {{#image_small_url}}\n                    <div class=\"stacklapopup-products-item-image\">\n                        <img src=\"{{{image_small_url}}}\"/>\n                    </div>\n                    {{/image_small_url}}\n                    <div class=\"stacklapopup-products-item-content\">\n                        {{#tag}}\n                        <a href=\"{{{custom_url}}}\" target=\"{{target}}\" class=\"stacklapopup-products-item-title-wrap\">\n                            <div class=\"stacklapopup-products-item-title\">{{tag}}</div>\n                        </a>\n                        {{/tag}}\n                        {{#price}}\n                        <div class=\"stacklapopup-products-item-price\">{{price}}</div>\n                        {{/price}}\n                        <a href=\"{{{custom_url}}}\" target=\"{{target}}\" class=\"stacklapoup-prodcuts-item-button-wrap\">\n                            <span class=\"stacklapopup-products-item-button\">{{cta_text}}</span>\n                        </a>\n                    </div>\n                </div>\n                {{#description}}\n                <p class=\"stacklapopup-products-item-description\">{{description}}</p>\n                {{/description}}\n                <a href=\"javascript:void(0)\" title=\"Close\" class=\"stacklapopup-products-item-close-link\">×</a>\n            </li>\n            {{/products}}\n        </ul>\n    </div>\n    {{/show_products}}\n\n    {{#show_nav_left}}\n    <button title=\"Previous Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-left\">\n        <i class=\"stacklapopup-arrow-icon fs fs-arrow-left2\"></i>\n    </button>\n    {{/show_nav_left}}\n    {{#show_nav_right}}\n    <button title=\"Next Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-right\">\n        <i class=\"stacklapopup-arrow-icon fs fs-arrow-right2\"></i>\n    </button>\n    {{/show_nav_right}}\n\n    {{#show_powered_by_stackla}}\n    <div class=\"stacklapopup-poweredByStackla-wrapper\">\n        <div class=\"stacklapopup-poweredByStackla\">\n            <a class=\"stacklapopup-poweredByStackla-link\" href=\"{{powered_by_stackla_url}}\" target=\"_blank\">\n                <i class=\"stacklapopup-poweredByStackla-logo\">\n                </i>\n            </a>\n        </div>\n    </div>\n    {{/show_powered_by_stackla}}\n\n    <button title=\"Close (Esc)\" class=\"stacklapopup-close\"></button>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");t.b(t.v(t.f("classnames",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-widget-id=\"");t.b(t.v(t.f("widget_id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div class=\"stacklapopup-panel\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-panel-left\">");t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,200,880,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-image-wrapper-inner\">");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-image-loading\"");t.b("\n" + i);t.b("                         ");if(t.s(t.f("image_padding_bottom_percent",c,p,1),c,p,0,456,513,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding-bottom: ");t.b(t.v(t.f("image_padding_bottom_percent",c,p,0)));t.b(";\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                       <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("image_classname",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            data-max-width=\"");t.b(t.v(t.f("max_image_width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            data-max-height=\"");t.b(t.v(t.f("max_image_height",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            draggable=\"false\">");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_audio",c,p,1),c,p,0,924,1655,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-audio-wrapper\">");t.b("\n" + i);t.b("                <img");t.b("\n" + i);t.b("                    src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    class=\"stacklapopup-audio-image\"");t.b("\n" + i);t.b("                    data-max-width=\"520\"");t.b("\n" + i);t.b("                    data-max-height=\"520\"");t.b("\n" + i);t.b("                    draggable=\"false\"/>");t.b("\n" + i);t.b("                <audio");t.b("\n" + i);t.b("                    class=\"stacklapopup-audio video-js vjs-default-skin\"");t.b("\n" + i);t.b("                    controls");t.b("\n" + i);t.b("                    autoplay");t.b("\n" + i);t.b("                    width=\"100%\"");t.b("\n" + i);t.b("                    height=\"30\"");t.b("\n" + i);t.b("                    preload=\"auto\">");t.b("\n" + i);if(t.s(t.f("audio_files",c,p,1),c,p,0,1502,1582,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <source src=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("                </audio>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_video",c,p,1),c,p,0,1699,1791,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-video-player-root\">");t.b(t.t(t.f("video_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_embed",c,p,1),c,p,0,1835,1923,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-embed-wrapper\">");t.b(t.t(t.f("embed_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("        </div><!-- .stacklapopup-panel-left (end) -->");t.b("\n" + i);t.b("        <div class=\"stacklapopup-panel-right\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_author",c,p,1),c,p,0,2070,3435,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-user-info-wrapper\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-user-info\">");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-avatar-wrapper\">");t.b("\n" + i);if(t.s(t.f("avatar",c,p,1),c,p,0,2279,2610,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-avatar-link");if(t.s(t.f("show_stackla_logo",c,p,1),c,p,0,2360,2374,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" no-background");});c.pop();}t.b("\" href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");if(t.s(t.f("original_url",c,p,1),c,p,0,2437,2453,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                           <img class=\"stacklapopup-avatar-image\" src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                    </span>");t.b("\n" + i);t.b("                    <span class=\"stacklapopup-source stacklapopup-source-");t.b(t.v(t.f("source",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        <i class=\"fs fs-");t.b(t.v(t.f("source",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                    </span>");t.b("\n" + i);t.b("                    <a class=\"stacklapopup-user-link\"");t.b("\n" + i);t.b("                       href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                       ");if(!t.s(t.f("original_url",c,p,1),c,p,1,0,0,"")){t.b("target=\"_blank\"");};t.b(">");t.b("\n" + i);t.b("                        <div class=\"stacklapopup-user-top\">");t.b("\n" + i);t.b("                            <span class=\"stacklapopup-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                        <div class=\"stacklapopup-user-bottom\">");t.b("\n" + i);t.b("                            <span class=\"stacklapopup-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_content",c,p,1),c,p,0,3482,6595,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("show_title",c,p,1),c,p,0,3514,3677,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-title-wrapper\">");t.b("\n" + i);t.b("                    <h2 class=\"stacklapopup-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_html",c,p,1),c,p,0,3724,3886,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-html-wrapper\">");t.b("\n" + i);t.b("                    <h2 class=\"stacklapopup-html\">");t.b(t.t(t.f("html",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("ecal_data",c,p,1),c,p,0,3932,5299,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <ul class=\"stacklapopup-ecal\">");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,4013,4260,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li>");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-location\"></i>&nbsp;");t.b("\n" + i);t.b("                        <strong>Location:</strong>&nbsp;");t.b("\n" + i);t.b("                        <span>");t.b(t.v(t.f("location",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);});c.pop();}t.b("                    <li>");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                        <strong>Start:</strong>&nbsp;");t.b("\n" + i);t.b("                        <span>");t.b(t.v(t.f("startFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);t.b("                    <li>");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-time\"></i>&nbsp;");t.b("\n" + i);t.b("                        <strong>End:</strong>&nbsp;");t.b("\n" + i);t.b("                        <span>");t.b(t.v(t.f("endFormat",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);if(t.s(t.f("details",c,p,1),c,p,0,4746,4995,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li>");t.b("\n" + i);t.b("                        <i class=\"stackla-icon-ecal-details\"></i>&nbsp;");t.b("\n" + i);t.b("                        <strong>Details:</strong>&nbsp;");t.b("\n" + i);t.b("                        <span>");t.b(t.v(t.f("details",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("clickThroughUrl",c,p,1),c,p,0,5048,5240,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <li class=\"stacklapopup-ecal-cta\">");t.b("\n" + i);t.b("                        <a href=\"");t.b(t.v(t.f("clickThroughUrl",c,p,0)));t.b("\" target=\"_blank\">Add to Calendar</a>");t.b("\n" + i);t.b("                    </li>");t.b("\n" + i);});c.pop();}t.b("                </ul>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_caption",c,p,1),c,p,0,5348,5519,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-caption\">");t.b("\n" + i);t.b("                    <p class=\"stacklapopup-caption-paragraph\">");t.b(t.t(t.f("message",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_twitter_intent",c,p,1),c,p,0,5578,6558,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-twitter-intent-wrapper\">");t.b("\n" + i);t.b("                    <div class=\"stacklapopup-twitter-intent\">");t.b("\n" + i);t.b("                        <a href=\"https://twitter.com/intent/tweet?in_reply_to=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                target=\"_blank\" class=\"stacklapopup-twitter-reply\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-reply\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <a href=\"https://twitter.com/intent/retweet?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                           target=\"_blank\" class=\"stacklapopup-twitter-retweet\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-retweet\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <a href=\"https://twitter.com/intent/favorite?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                           target=\"_blank\" class=\"stacklapopup-twitter-favorite\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-heart\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_tags",c,p,1),c,p,0,6640,7401,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-tags-wrapper\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-tags\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,6770,7337,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("href",c,p,1),c,p,0,6804,7049,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a href=\"");t.b(t.v(t.f("href",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                            ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("href",c,p,1),c,p,1,0,0,"")){t.b("                        <span class=\"");t.b(t.v(t.f("class_names",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            <i class=\"stackla-icon-");t.b(t.v(t.f("type",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                            ");t.b(t.v(t.f("text",c,p,0)));t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);};});c.pop();}t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_interactions",c,p,1),c,p,0,7451,13036,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-interactions-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_actions",c,p,1),c,p,0,7545,12434,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-interactions\">");t.b("\n" + i);if(t.s(t.f("show_likes",c,p,1),c,p,0,7637,8189,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"stacklapopup-interaction-like\">");t.b("\n" + i);if(t.s(t.d("interactionData.like",c,p,1),c,p,0,7752,8115,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-interaction-link ");if(t.s(t.f("on",c,p,1),c,p,0,7824,7826,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-thumbs-up\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_dislikes",c,p,1),c,p,0,8243,8809,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"stacklapopup-interaction-dislike\">");t.b("\n" + i);if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,8364,8732,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-interaction-link ");if(t.s(t.f("on",c,p,1),c,p,0,8436,8438,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-thumbs-down\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_vote",c,p,1),c,p,0,8862,9416,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"stacklapopup-interaction-vote\">");t.b("\n" + i);if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,8977,9342,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"stacklapopup-interaction-link ");if(t.s(t.f("on",c,p,1),c,p,0,9049,9051,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-triangle-up\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_comments",c,p,1),c,p,0,9469,10043,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.comments",c,p,1),c,p,0,9519,9993,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"stacklapopup-interaction-comment ");if(t.s(t.f("on",c,p,1),c,p,0,9593,9595,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                        <a class=\"stacklapopup-interaction-link js-stacklapopup-comment-button\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-comment\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);if(t.s(t.f("count",c,p,1),c,p,0,9823,9934,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span class=\"stacklapopup-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </span>");t.b("\n" + i);});c.pop();}});c.pop();}if(t.s(t.f("show_sharing",c,p,1),c,p,0,10099,12377,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"stacklapopup-interaction-share ");if(!t.s(t.f("show_actions",c,p,1),c,p,1,0,0,"")){t.b("stacklapopup-sharing-solo");};t.b("\">");t.b("\n" + i);t.b("                        <a class=\"stacklapopup-interaction-link js-stacklapopup-share-button\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-share\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <div class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("allow_share_to_facebook",c,p,1),c,p,0,10573,10823,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"stacklapopup-share-button facebook\" onclick=\"StacklaFluidWidget.facebookShare(this);\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-facebook\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}t.b("                            <a class=\"stacklapopup-share-button twitter\" onclick=\"StacklaFluidWidget.twitterShare(this);\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-twitter\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);if(t.s(t.f("allow_share_to_pinterest",c,p,1),c,p,0,11127,11398,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"stacklapopup-share-button pinterest\" onclick=\"StacklaFluidWidget.pinterestShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-pinterest\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}t.b("                            <a class=\"stacklapopup-share-button gplus\" onclick=\"StacklaFluidWidget.googleShare(this);\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-googleplus\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                            <a class=\"stacklapopup-share-button linkedin\" onclick=\"StacklaFluidWidget.linkedInShare(this);\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-linkedin\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                            <a class=\"stacklapopup-share-button email\" onclick=\"StacklaFluidWidget.emailShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\">");t.b("\n" + i);t.b("                                <div class=\"fs fs-envelope\"></div>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                            <a class=\"stacklapopup-share-button js-stacklapopup-share-button close\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-close\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                    </span>");t.b("\n" + i);});c.pop();}t.b("                </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_claim",c,p,1),c,p,0,12483,12989,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-claim ");if(t.s(t.f("claimed",c,p,1),c,p,0,12543,12550,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("claimed");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                    <a href=\"javascript:void(0);\" class=\"stacklapopup-claim-link js-claim-tile\"");t.b("\n" + i);t.b("                       ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("onclick=\"window.open('");t.b(t.v(t.d("options.claimActionUrl",c,p,0)));t.b("', '_blank', 'width=600, height=400')\"");};t.b(">");t.b("\n" + i);t.b("                       ");if(t.s(t.f("claimed",c,p,1),c,p,0,12831,12846,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("Tile Registered");});c.pop();}t.b("\n" + i);t.b("                       ");if(!t.s(t.f("claimed",c,p,1),c,p,1,0,0,"")){t.b("Register Your Tile");};t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_footer",c,p,1),c,p,0,13088,13311,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-footer\">");t.b("\n" + i);if(t.s(t.f("show_timestamp",c,p,1),c,p,0,13170,13260,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"stacklapopup-timestamp\">");t.b(t.v(t.f("timephrase",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_powered_by_stackla",c,p,1),c,p,0,13369,13787,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-poweredByStackla-wrapper\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-poweredByStackla\">");t.b("\n" + i);t.b("                    <a class=\"stacklapopup-poweredByStackla-link\" href=\"");t.b(t.v(t.f("poweredByStacklaUrl",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                        <i class=\"stacklapopup-poweredByStackla-logo\">");t.b("\n" + i);t.b("                        </i>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("        </div><!-- .stacklapopup-panel-right (end) -->");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_products",c,p,1),c,p,0,13906,15690,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-products-wrap\">");t.b("\n" + i);t.b("        <ul class=\"stacklapopup-products\">");t.b("\n" + i);if(t.s(t.f("products",c,p,1),c,p,0,14020,15647,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <li class=\"stacklapopup-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-products-item-media\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,14197,14490,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"stacklapopup-products-item-image\">");t.b("\n" + i);t.b("                         <img src=\"");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                              ");if(t.s(t.f("image_small_width",c,p,1),c,p,0,14375,14418,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"max-width: ");t.b(t.v(t.f("image_small_width",c,p,0)));t.b("px;\"");});c.pop();}t.b("/>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("                    <div class=\"stacklapopup-products-item-content\">");t.b("\n" + i);if(t.s(t.f("tag",c,p,1),c,p,0,14612,14872,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a href=\"");t.b(t.t(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\" class=\"stacklapopup-products-item-title-wrap\">");t.b("\n" + i);t.b("                            <div class=\"stacklapopup-products-item-title\">");t.b(t.v(t.f("tag",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}if(t.s(t.f("price",c,p,1),c,p,0,14915,15026,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"stacklapopup-products-item-price\">");t.b(t.v(t.f("price",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("                        <a href=\"");t.b(t.t(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\" class=\"stacklapoup-prodcuts-item-button-wrap\">");t.b("\n" + i);t.b("                            <span class=\"stacklapopup-products-item-button\">");t.b(t.v(t.f("cta_text",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);if(t.s(t.f("description",c,p,1),c,p,0,15320,15439,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <p class=\"stacklapopup-products-item-description\">");t.b(t.v(t.f("description",c,p,0)));t.b("</p>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <a href=\"javascript:void(0)\" title=\"Close\" class=\"stacklapopup-products-item-close-link\">×</a>");t.b("\n" + i);t.b("            </li>");t.b("\n" + i);});c.pop();}t.b("        </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_comments",c,p,1),c,p,0,15732,17603,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"stacklapopup-comments-wrap ");if(t.s(t.d("interactionData.comments.on",c,p,1),c,p,0,15808,15810,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("        <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.d("interactionData.comments.count",c,p,1),c,p,0,15963,16472,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"stacklapopup-comments-info\">");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-info-title\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-comment\"></i> Comments");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <a href=\"javascript:void(0);\" class=\"stacklapopup-comments-load-button\"");t.b("\n" + i);t.b("                   value=\"Load More\" data-comment-index=\"\"");t.b("\n" + i);t.b("                   onclick=\"StacklaFluidWidget.loadMoreComments(this);\">");t.b("\n" + i);t.b("                   View more comments");t.b("\n" + i);t.b("                </a>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("            <form>");t.b("\n" + i);t.b("                <textarea class=\"stacklapopup-comments-user-textarea\"");t.b("\n" + i);t.b("                    placeholder=\"Enter your comment...\"></textarea>");t.b("\n" + i);t.b("                <input class=\"stacklapopup-comments-user-input\"");t.b("\n" + i);t.b("                       type=\"text\"");t.b("\n" + i);t.b("                       placeholder=\"Your name\"");t.b("\n" + i);t.b("                       ");if(t.s(t.f("disallow_comment",c,p,1),c,p,0,16855,16874,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly=\"readonly\"");});c.pop();}t.b("\n" + i);t.b("                       value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\" style=\"display: none;\">");t.b("\n" + i);t.b("                <button");t.b("\n" + i);t.b("                    type=\"button\"");t.b("\n" + i);t.b("                    class=\"stacklapopup-comments-user-button\"");t.b("\n" + i);t.b("                    style=\"display: none\"");t.b("\n" + i);t.b("                    onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                    <i class=\"fs fs-arrow-right6\"></i>");t.b("\n" + i);t.b("                </button>");t.b("\n" + i);t.b("                <div class=\"stacklapopup-comments-user-message\">");t.b("\n" + i);t.b("                    <i class=\"stacklapopup-comments-user-message-icon fs fs-success\"></i>");t.b("\n" + i);t.b("                    Your comment has been submitted for moderation and will appear soon!");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </form>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_nav_left",c,p,1),c,p,0,17645,17816,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Previous Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-left\">");t.b("\n" + i);t.b("        <i class=\"stacklapopup-arrow-icon fs fs-arrow-left2\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_nav_right",c,p,1),c,p,0,17858,18027,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Next Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-right\">");t.b("\n" + i);t.b("        <i class=\"stacklapopup-arrow-icon fs fs-arrow-right2\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <button title=\"Close (Esc)\" class=\"stacklapopup-close\"></button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{classnames}}\"\n    data-tile-id=\"{{id}}\"\n    data-widget-id=\"{{widget_id}}\">\n    <div class=\"stacklapopup-panel\">\n        <div class=\"stacklapopup-panel-left\">\n            {{#show_image}}\n            <div class=\"stacklapopup-image-wrapper stacklapopup-js-zoom\">\n                <div class=\"stacklapopup-image-wrapper-inner\">\n                    <div class=\"stacklapopup-image-loading\"\n                         {{#image_padding_bottom_percent}}style=\"padding-bottom: {{image_padding_bottom_percent}};\"{{/image_padding_bottom_percent}}>\n                       <img src=\"{{image}}\" class=\"{{image_classname}}\"\n                            data-max-width=\"{{max_image_width}}\"\n                            data-max-height=\"{{max_image_height}}\"\n                            draggable=\"false\">\n                    </div>\n                </div>\n            </div>\n            {{/show_image}}\n\n            {{#show_audio}}\n            <div class=\"stacklapopup-audio-wrapper\">\n                <img\n                    src=\"{{image}}\"\n                    class=\"stacklapopup-audio-image\"\n                    data-max-width=\"520\"\n                    data-max-height=\"520\"\n                    draggable=\"false\"/>\n                <audio\n                    class=\"stacklapopup-audio video-js vjs-default-skin\"\n                    controls\n                    autoplay\n                    width=\"100%\"\n                    height=\"30\"\n                    preload=\"auto\">\n                    {{#audio_files}}\n                    <source src=\"{{url}}\" type=\"{{type}}\">\n                    {{/audio_files}}\n                </audio>\n            </div>\n            {{/show_audio}}\n\n            {{#show_video}}\n            <div class=\"stacklapopup-video-player-root\">{{{video_html}}}</div>\n            {{/show_video}}\n\n            {{#show_embed}}\n            <div class=\"stacklapopup-embed-wrapper\">{{{embed_html}}}</div>\n            {{/show_embed}}\n\n        </div><!-- .stacklapopup-panel-left (end) -->\n        <div class=\"stacklapopup-panel-right\">\n\n            {{#show_author}}\n            <div class=\"stacklapopup-user-info-wrapper\">\n                <div class=\"stacklapopup-user-info\">\n                    <span class=\"stacklapopup-avatar-wrapper\">\n                        {{#avatar}}\n                        <a class=\"stacklapopup-avatar-link{{#show_stackla_logo}} no-background{{/show_stackla_logo}}\" href=\"{{author_link}}\"{{#original_url}} target=\"_blank\"{{/original_url}}>\n                           <img class=\"stacklapopup-avatar-image\" src=\"{{avatar}}\"/>\n                        </a>\n                        {{/avatar}}\n                    </span>\n                    <span class=\"stacklapopup-source stacklapopup-source-{{source}}\">\n                        <i class=\"fs fs-{{source}}\"></i>\n                    </span>\n                    <a class=\"stacklapopup-user-link\"\n                       href=\"{{author_link}}\"\n                       {{^original_url}}target=\"_blank\"{{/original_url}}>\n                        <div class=\"stacklapopup-user-top\">\n                            <span class=\"stacklapopup-user-name\">{{user_name}}</span>\n                        </div>\n                        <div class=\"stacklapopup-user-bottom\">\n                            <span class=\"stacklapopup-user-handle\">{{user_handle}}</span>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            {{/show_author}}\n\n            {{#show_content}}\n                {{#show_title}}\n                <div class=\"stacklapopup-title-wrapper\">\n                    <h2 class=\"stacklapopup-title\">{{title}}</h2>\n                </div>\n                {{/show_title}}\n\n                {{#show_html}}\n                <div class=\"stacklapopup-html-wrapper\">\n                    <h2 class=\"stacklapopup-html\">{{{html}}}</h2>\n                </div>\n                {{/show_html}}\n\n                {{#ecal_data}}\n                <ul class=\"stacklapopup-ecal\">\n                    {{#location}}\n                    <li>\n                        <i class=\"stackla-icon-location\"></i>&nbsp;\n                        <strong>Location:</strong>&nbsp;\n                        <span>{{location}}</span>\n                    </li>\n                    {{/location}}\n                    <li>\n                        <i class=\"stackla-icon-time\"></i>&nbsp;\n                        <strong>Start:</strong>&nbsp;\n                        <span>{{startFormat}}</span>\n                    </li>\n                    <li>\n                        <i class=\"stackla-icon-time\"></i>&nbsp;\n                        <strong>End:</strong>&nbsp;\n                        <span>{{endFormat}}</span>\n                    </li>\n                    {{#details}}\n                    <li>\n                        <i class=\"stackla-icon-ecal-details\"></i>&nbsp;\n                        <strong>Details:</strong>&nbsp;\n                        <span>{{details}}</span>\n                    </li>\n                    {{/details}}\n                    {{#clickThroughUrl}}\n                    <li class=\"stacklapopup-ecal-cta\">\n                        <a href=\"{{clickThroughUrl}}\" target=\"_blank\">Add to Calendar</a>\n                    </li>\n                    {{/clickThroughUrl}}\n                </ul>\n                {{/ecal_data}}\n\n                {{#show_caption}}\n                <div class=\"stacklapopup-caption\">\n                    <p class=\"stacklapopup-caption-paragraph\">{{{message}}}</p>\n                </div>\n                {{/show_caption}}\n\n                {{#show_twitter_intent}}\n                <div class=\"stacklapopup-twitter-intent-wrapper\">\n                    <div class=\"stacklapopup-twitter-intent\">\n                        <a href=\"https://twitter.com/intent/tweet?in_reply_to={{twitter_id}}\"\n                                target=\"_blank\" class=\"stacklapopup-twitter-reply\">\n                            <i class=\"fs fs-reply\"></i>\n                        </a>\n                        <a href=\"https://twitter.com/intent/retweet?tweet_id={{twitter_id}}\"\n                           target=\"_blank\" class=\"stacklapopup-twitter-retweet\">\n                            <i class=\"fs fs-retweet\"></i>\n                        </a>\n                        <a href=\"https://twitter.com/intent/favorite?tweet_id={{twitter_id}}\"\n                           target=\"_blank\" class=\"stacklapopup-twitter-favorite\">\n                            <i class=\"fs fs-heart\"></i>\n                        </a>\n                    </div>\n                </div>\n                {{/show_twitter_intent}}\n            {{/show_content}}\n\n            {{#show_tags}}\n            <div class=\"stacklapopup-tags-wrapper\">\n                <div class=\"stacklapopup-tags\">\n                    {{#tags}}\n                        {{#href}}\n                        <a href=\"{{href}}\" class=\"{{class_names}}\" target=\"{{target}}\">\n                            <i class=\"stackla-icon-{{type}}\"></i>\n                            {{text}}\n                        </a>\n                        {{/href}}\n                        {{^href}}\n                        <span class=\"{{class_names}}\">\n                            <i class=\"stackla-icon-{{type}}\"></i>\n                            {{text}}\n                        </span>\n                        {{/href}}\n                    {{/tags}}\n                </div>\n            </div>\n            {{/show_tags}}\n\n            {{#show_interactions}}\n            <div class=\"stacklapopup-interactions-wrapper\">\n                {{#show_actions}}\n                <div class=\"stacklapopup-interactions\">\n                    {{#show_likes}}\n                    <span class=\"stacklapopup-interaction-like\">\n                        {{#interactionData.like}}\n                        <a class=\"stacklapopup-interaction-link {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"like\">\n                            <i class=\"fs fs-thumbs-up\"></i>\n                        </a>\n                        <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                        {{/interactionData.like}}\n                    </span>\n                    {{/show_likes}}\n                    {{#show_dislikes}}\n                    <span class=\"stacklapopup-interaction-dislike\">\n                        {{#interactionData.dislike}}\n                        <a class=\"stacklapopup-interaction-link {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"dislike\">\n                            <i class=\"fs fs-thumbs-down\"></i>\n                        </a>\n                        <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                        {{/interactionData.dislike}}\n                    </span>\n                    {{/show_dislikes}}\n                    {{#show_vote}}\n                    <span class=\"stacklapopup-interaction-vote\">\n                        {{#interactionData.vote}}\n                        <a class=\"stacklapopup-interaction-link {{#on}}on{{/on}}\" onclick=\"StacklaFluidWidget.interactionSend(this)\" data-interaction-type=\"vote\">\n                            <i class=\"fs fs-triangle-up\"></i>\n                        </a>\n                        <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                        {{/interactionData.vote}}\n                    </span>\n                    {{/show_vote}}\n                    {{#show_comments}}\n                    {{#interactionData.comments}}\n                    <span class=\"stacklapopup-interaction-comment {{#on}}on{{/on}}\">\n                        <a class=\"stacklapopup-interaction-link js-stacklapopup-comment-button\">\n                            <i class=\"fs fs-comment\"></i>\n                        </a>\n                        {{#count}}\n                        <span class=\"stacklapopup-interaction-count\">{{count}}</span>\n                        {{/count}}\n                    </span>\n                    {{/interactionData.comments}}\n                    {{/show_comments}}\n                    {{#show_sharing}}\n                    <span class=\"stacklapopup-interaction-share {{^show_actions}}stacklapopup-sharing-solo{{/show_actions}}\">\n                        <a class=\"stacklapopup-interaction-link js-stacklapopup-share-button\">\n                            <i class=\"fs fs-share\"></i>\n                        </a>\n                        <div class=\"stacklapopup-share-list js-stacklapopup-share-list stacklapopup-clearfix\">\n                            {{#allow_share_to_facebook}}\n                            <a class=\"stacklapopup-share-button facebook\" onclick=\"StacklaFluidWidget.facebookShare(this);\">\n                                <i class=\"fs fs-facebook\"></i>\n                            </a>\n                            {{/allow_share_to_facebook}}\n                            <a class=\"stacklapopup-share-button twitter\" onclick=\"StacklaFluidWidget.twitterShare(this);\">\n                                <i class=\"fs fs-twitter\"></i>\n                            </a>\n                            {{#allow_share_to_pinterest}}\n                            <a class=\"stacklapopup-share-button pinterest\" onclick=\"StacklaFluidWidget.pinterestShare(this, '{{share_text}}');\">\n                                <i class=\"fs fs-pinterest\"></i>\n                            </a>\n                            {{/allow_share_to_pinterest}}\n                            <a class=\"stacklapopup-share-button gplus\" onclick=\"StacklaFluidWidget.googleShare(this);\">\n                                <i class=\"fs fs-googleplus\"></i>\n                            </a>\n                            <a class=\"stacklapopup-share-button linkedin\" onclick=\"StacklaFluidWidget.linkedInShare(this);\">\n                                <i class=\"fs fs-linkedin\"></i>\n                            </a>\n                            <a class=\"stacklapopup-share-button email\" onclick=\"StacklaFluidWidget.emailShare(this, '{{share_text}}');\">\n                                <div class=\"fs fs-envelope\"></div>\n                            </a>\n                            <a class=\"stacklapopup-share-button js-stacklapopup-share-button close\">\n                                <i class=\"fs fs-close\"></i>\n                            </a>\n                        </div>\n                    </span>\n                    {{/show_sharing}}\n                </div>\n                {{/show_actions}}\n                {{#show_claim}}\n                <div class=\"stacklapopup-claim {{#claimed}}claimed{{/claimed}}\">\n                    <a href=\"javascript:void(0);\" class=\"stacklapopup-claim-link js-claim-tile\"\n                       {{^claimed}}onclick=\"window.open('{{options.claimActionUrl}}', '_blank', 'width=600, height=400')\"{{/claimed}}>\n                       {{#claimed}}Tile Registered{{/claimed}}\n                       {{^claimed}}Register Your Tile{{/claimed}}\n                    </a>\n                </div>\n                {{/show_claim}}\n            </div>\n            {{/show_interactions}}\n\n            {{#show_footer}}\n            <div class=\"stacklapopup-footer\">\n                {{#show_timestamp}}\n                <div class=\"stacklapopup-timestamp\">{{timephrase}}</div>\n                {{/show_timestamp}}\n            </div>\n            {{/show_footer}}\n\n            {{#show_powered_by_stackla}}\n            <div class=\"stacklapopup-poweredByStackla-wrapper\">\n                <div class=\"stacklapopup-poweredByStackla\">\n                    <a class=\"stacklapopup-poweredByStackla-link\" href=\"{{poweredByStacklaUrl}}\" target=\"_blank\">\n                        <i class=\"stacklapopup-poweredByStackla-logo\">\n                        </i>\n                    </a>\n                </div>\n            </div>\n            {{/show_powered_by_stackla}}\n\n        </div><!-- .stacklapopup-panel-right (end) -->\n    </div>\n\n    {{#show_products}}\n    <div class=\"stacklapopup-products-wrap\">\n        <ul class=\"stacklapopup-products\">\n            {{#products}}\n            <li class=\"stacklapopup-products-item\" data-tag-id=\"{{id}}\">\n                <div class=\"stacklapopup-products-item-media\">\n                    {{#image_small_url}}\n                    <div class=\"stacklapopup-products-item-image\">\n                         <img src=\"{{{image_small_url}}}\"\n                              {{#image_small_width}}style=\"max-width: {{image_small_width}}px;\"{{/image_small_width}}/>\n                    </div>\n                    {{/image_small_url}}\n                    <div class=\"stacklapopup-products-item-content\">\n                        {{#tag}}\n                        <a href=\"{{{custom_url}}}\" target=\"{{target}}\" class=\"stacklapopup-products-item-title-wrap\">\n                            <div class=\"stacklapopup-products-item-title\">{{tag}}</div>\n                        </a>\n                        {{/tag}}\n                        {{#price}}\n                        <div class=\"stacklapopup-products-item-price\">{{price}}</div>\n                        {{/price}}\n                        <a href=\"{{{custom_url}}}\" target=\"{{target}}\" class=\"stacklapoup-prodcuts-item-button-wrap\">\n                            <span class=\"stacklapopup-products-item-button\">{{cta_text}}</span>\n                        </a>\n                        {{#description}}\n                        <p class=\"stacklapopup-products-item-description\">{{description}}</p>\n                        {{/description}}\n                    </div>\n                </div>\n                <a href=\"javascript:void(0)\" title=\"Close\" class=\"stacklapopup-products-item-close-link\">×</a>\n            </li>\n            {{/products}}\n        </ul>\n    </div>\n    {{/show_products}}\n\n    {{#show_comments}}\n    <div class=\"stacklapopup-comments-wrap {{#interactionData.comments.on}}on{{/interactionData.comments.on}}\">\n        <div class=\"stacklapopup-comments-user stacklapopup-clearfix\">\n            {{#interactionData.comments.count}}\n            <div class=\"stacklapopup-comments-info\">\n                <div class=\"stacklapopup-comments-info-title\">\n                    <i class=\"fs fs-comment\"></i> Comments\n                </div>\n                <a href=\"javascript:void(0);\" class=\"stacklapopup-comments-load-button\"\n                   value=\"Load More\" data-comment-index=\"\"\n                   onclick=\"StacklaFluidWidget.loadMoreComments(this);\">\n                   View more comments\n                </a>\n            </div>\n            {{/interactionData.comments.count}}\n            <form>\n                <textarea class=\"stacklapopup-comments-user-textarea\"\n                    placeholder=\"Enter your comment...\"></textarea>\n                <input class=\"stacklapopup-comments-user-input\"\n                       type=\"text\"\n                       placeholder=\"Your name\"\n                       {{#disallow_comment}}readonly=\"readonly\"{{/disallow_comment}}\n                       value=\"{{comment_user_input}}\" style=\"display: none;\">\n                <button\n                    type=\"button\"\n                    class=\"stacklapopup-comments-user-button\"\n                    style=\"display: none\"\n                    onclick=\"StacklaFluidWidget.postComment(this);\">\n                    <i class=\"fs fs-arrow-right6\"></i>\n                </button>\n                <div class=\"stacklapopup-comments-user-message\">\n                    <i class=\"stacklapopup-comments-user-message-icon fs fs-success\"></i>\n                    Your comment has been submitted for moderation and will appear soon!\n                </div>\n            </form>\n        </div>\n    </div>\n    {{/show_comments}}\n\n    {{#show_nav_left}}\n    <button title=\"Previous Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-left\">\n        <i class=\"stacklapopup-arrow-icon fs fs-arrow-left2\"></i>\n    </button>\n    {{/show_nav_left}}\n    {{#show_nav_right}}\n    <button title=\"Next Tile\" class=\"stacklapopup-arrow stacklapopup-arrow-right\">\n        <i class=\"stacklapopup-arrow-icon fs fs-arrow-right2\"></i>\n    </button>\n    {{/show_nav_right}}\n\n    <button title=\"Close (Esc)\" class=\"stacklapopup-close\"></button>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div");t.b("\n" + i);t.b("    class=\"");t.b(t.v(t.f("classnames",c,p,0)));t.b(" ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b(" ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-wrapper ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("--");t.b(t.v(t.f("media",c,p,0)));t.b(" ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("--");t.b(t.v(t.f("source",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-widget-id=\"");t.b(t.v(t.f("widget_id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-main\">");t.b("\n" + i);if(t.s(t.f("show_media",c,p,1),c,p,0,277,3920,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-media-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,358,771,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-wrapper\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-loading\">");t.b("\n" + i);t.b("                    <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image\"");t.b("\n" + i);t.b("                        data-max-width=\"");t.b(t.v(t.f("max_image_width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        data-max-height=\"");t.b(t.v(t.f("max_image_height",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        draggable=\"false\"/>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_audio",c,p,1),c,p,0,815,1458,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-audio-wrapper\">");t.b("\n" + i);t.b("                <img");t.b("\n" + i);t.b("                    src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-audio-image\"");t.b("\n" + i);t.b("                    />");t.b("\n" + i);t.b("                <audio");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-audio video-js vjs-default-skin\"");t.b("\n" + i);t.b("                    controls");t.b("\n" + i);t.b("                    autoplay");t.b("\n" + i);t.b("                    width=\"100%\"");t.b("\n" + i);t.b("                    height=\"30\"");t.b("\n" + i);t.b("                    preload=\"auto\">");t.b("\n" + i);if(t.s(t.f("audio_files",c,p,1),c,p,0,1305,1385,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <source src=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("                </audio>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_video",c,p,1),c,p,0,1502,3744,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-wrapper\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-wrapper-inner\">");t.b("\n" + i);if(t.s(t.f("embed_url",c,p,1),c,p,0,1657,2866,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_vimeo",c,p,1),c,p,0,1691,1872,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <iframe");t.b("\n" + i);t.b("                        src=\"//player.vimeo.com/video/");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_vine",c,p,1),c,p,0,1919,2088,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <iframe");t.b("\n" + i);t.b("                        src=\"");t.b(t.v(t.f("embed_url",c,p,0)));t.b("/embed/simple\"");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_gplus",c,p,1),c,p,0,2135,2291,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <iframe");t.b("\n" + i);t.b("                        src=\"");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_youtube",c,p,1),c,p,0,2341,2590,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <iframe");t.b("\n" + i);t.b("                        src=\"//www.youtube.com/embed/");t.b(t.v(t.f("embed_url",c,p,0)));t.b("?autoplay=1\"");t.b("\n" + i);t.b("                        allowfullscreen=\"allowFullScreen\"");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_weibo",c,p,1),c,p,0,2640,2836,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <iframe");t.b("\n" + i);t.b("                            src=\"http://video.weibo.com/show?fid=");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("is_mp4",c,p,1),c,p,0,2909,3141,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <video");t.b("\n" + i);t.b("                    src=\"");t.b(t.t(t.f("mp4_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    controls");t.b("\n" + i);t.b("                    autoplay");t.b("\n" + i);t.b("                    preload=\"auto\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_unknown_video",c,p,1),c,p,0,3191,3668,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("image",c,p,1),c,p,0,3222,3641,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a href=\"");t.b(t.v(t.f("original_link",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-link\" target=\"_blank\">");t.b("\n" + i);t.b("                        <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-image\"/>");t.b("\n" + i);t.b("                        <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-play-icon-wrapper\">");t.b("\n" + i);t.b("                            <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-play-icon fs fs-play\"></i>");t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_embed",c,p,1),c,p,0,3788,3880,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-embed-wrapper\">");t.b(t.t(t.f("embed_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-text-wrapper\">");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-text\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-reference-wrapper\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-reference stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("avatar_src",c,p,1),c,p,0,4223,4819,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar\">");t.b("\n" + i);t.b("                            <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar-link\" ");if(t.s(t.f("avatar_link",c,p,1),c,p,0,4370,4408,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("href=\"");t.b(t.v(t.f("avatar_link",c,p,0)));t.b("\" target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                                <img");t.b("\n" + i);t.b("                                    onerror=\"this.style.display='none'\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar-image\"");t.b("\n" + i);t.b("                                    src=\"");t.b(t.v(t.f("avatar_src",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                    alt=\"");t.b(t.v(t.f("avatar_alt_text",c,p,0)));t.b("\"/>");t.b("\n");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-wrapper\">");t.b("\n" + i);t.b("                            <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-top\" ");if(t.s(t.f("avatar_link",c,p,1),c,p,0,4985,5023,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("href=\"");t.b(t.v(t.f("avatar_link",c,p,0)));t.b("\" target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                                <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);if(t.s(t.f("special_user_handle",c,p,1),c,p,0,5220,5520,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-bottom\" ");if(t.s(t.f("avatar_link",c,p,1),c,p,0,5305,5343,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("href=\"");t.b(t.v(t.f("avatar_link",c,p,0)));t.b("\" target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                                <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}t.b("                        </div>");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-timestamp\">");t.b(t.v(t.f("source_created_at_formatted",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-source ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-source--");t.b(t.v(t.f("source",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-source-icon fs fs-");t.b(t.v(t.f("icon_name",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-text-main\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-caption\">");t.b("\n" + i);t.b("                        ");if(t.s(t.f("emoji",c,p,1),c,p,0,6100,6113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.t(t.f("caption",c,p,0)));});c.pop();}t.b("\n" + i);t.b("                    </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_html",c,p,1),c,p,0,6186,6279,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-html\">");t.b(t.t(t.f("html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_tags",c,p,1),c,p,0,6338,6963,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tags-wrapper\">");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tags\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,6496,6875,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("href",c,p,1),c,p,0,6530,6679,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a href=\"");t.b(t.v(t.f("href",c,p,0)));t.b("\" class=\"stacklapopup-slider-tag ");t.b(t.v(t.f("class_names",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b(t.v(t.f("text",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("href",c,p,1),c,p,1,0,0,"")){t.b("                        <span class=\"stacklapopup-slider-tag ");t.b(t.v(t.f("class_names",c,p,0)));t.b("\">");t.b(t.v(t.f("text",c,p,0)));t.b("</span>");t.b("\n" + i);};});c.pop();}t.b("                        </div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("                </div>");t.b("\n");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-belt\">");t.b("\n" + i);if(t.s(t.f("show_twitter_intent",c,p,1),c,p,0,7107,8288,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-wrapper\">");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent\">");t.b("\n" + i);t.b("                            <a href=\"https://twitter.com/intent/tweet?in_reply_to=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                    target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-reply\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-reply\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                            <a href=\"https://twitter.com/intent/retweet?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-retweet\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-retweet\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                            <a href=\"https://twitter.com/intent/favorite?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-favorite\">");t.b("\n" + i);t.b("                                <i class=\"fs fs-heart\"></i>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_interactions",c,p,1),c,p,0,8355,13506,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-wrapper\">");t.b("\n" + i);if(t.s(t.d("lightbox.show_likes",c,p,1),c,p,0,8475,9074,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.like",c,p,1),c,p,0,8525,9024,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-like");if(t.s(t.f("on",c,p,1),c,p,0,8665,8668,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                            data-interaction-type=\"like\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-thumbs-up\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_dislikes",c,p,1),c,p,0,9151,9764,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,9204,9711,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-dislike");if(t.s(t.f("on",c,p,1),c,p,0,9347,9350,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                            data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-thumbs-down\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_votes",c,p,1),c,p,0,9841,10442,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,9891,10392,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-vote");if(t.s(t.f("on",c,p,1),c,p,0,10031,10034,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                            data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-triangle-up\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_sharing",c,p,1),c,p,0,10518,10772,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link-share\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-share\"></i>");t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_comments",c,p,1),c,p,0,10851,11307,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-comment");if(t.s(t.f("on",c,p,1),c,p,0,10994,10997,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            data-autoload=\"disabled\"");t.b("\n" + i);t.b("                            >");t.b("\n" + i);t.b("                            <i class=\"fs fs-comment\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("comments_count",c,p,0)));t.b("</span>");t.b("\n");t.b("\n" + i);t.b("                        </span>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n");t.b("\n" + i);if(t.s(t.d("lightbox.show_sharing",c,p,1),c,p,0,11409,13458,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-list js-");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("allow_share_to_facebook",c,p,1),c,p,0,11577,11837,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button facebook\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-facebook\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button twitter\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-twitter\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);if(t.s(t.f("allow_share_to_pinterest",c,p,1),c,p,0,12152,12414,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button pinterest\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-pinterest\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button gplus\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-googleplus\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button linkedin\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-linkedin\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button email\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <div class=\"fs fs-envelope\"></div>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                        <a");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button js-");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button close\"");t.b("\n" + i);t.b("                            target=\"_blank\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-close\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);});c.pop();}t.b("                </div>");t.b("\n");t.b("\n");t.b("\n");t.b("\n" + i);if(t.s(t.d("lightbox.show_comments",c,p,1),c,p,0,13598,16230,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-wrapper ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-wrap\">");t.b("\n" + i);t.b("                    <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-close-button\"><i class=\"fs fs-arrow-left5\"></i> Back</a>");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user stacklapopup-clearfix\">");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-title\">");t.b("\n" + i);t.b("                            <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-title-icon fs fs-comment\"></i> Comments");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                        <ul class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-list\"></ul>");t.b("\n" + i);if(t.s(t.d("interactionData.comments.count",c,p,1),c,p,0,14231,14896,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments\">");t.b("\n" + i);t.b("                            <a");t.b("\n" + i);t.b("                                href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-load-button\"");t.b("\n" + i);t.b("                                value=\"Load More\"");t.b("\n" + i);t.b("                                data-comment-index=\"\"");t.b("\n" + i);t.b("                                onclick=\"StacklaFluidWidget.loadMoreComments(this);\">");t.b("\n" + i);t.b("                                View more comments");t.b("\n" + i);t.b("                                <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-load-icon fs fs-spinner fs-spin\"/>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}t.b("                        <form class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-form\">");t.b("\n" + i);t.b("                            <textarea class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-textarea\"");t.b("\n" + i);t.b("                                placeholder=\"Your Comment...\"></textarea>");t.b("\n" + i);t.b("                            <input class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-input\"");t.b("\n" + i);t.b("                                    type=\"text\"");t.b("\n" + i);t.b("                                    placeholder=\"Your Name\"");t.b("\n" + i);t.b("                                    ");if(t.s(t.f("disallow_comment",c,p,1),c,p,0,15407,15426,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly=\"readonly\"");});c.pop();}t.b("\n" + i);t.b("                                    value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            <button");t.b("\n" + i);t.b("                                type=\"button\"");t.b("\n" + i);t.b("                                class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-button\"");t.b("\n" + i);t.b("                                onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                                Submit");t.b("\n" + i);t.b("                            </button>");t.b("\n" + i);t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-message\">");t.b("\n" + i);t.b("                                <p><i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-message-icon fs fs-success\"></i> Your comment has been submitted for moderation and will appear soon!</p>");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);t.b("                        </form>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_products",c,p,1),c,p,0,16302,18739,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-wrapper\">");t.b("\n" + i);t.b("                    <ul class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products\">");t.b("\n" + i);if(t.s(t.d("products.0",c,p,1),c,p,0,16465,16876,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,16603,16801,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-image\" style=\"background-image: url('");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("')\">");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}if(t.s(t.d("products.1",c,p,1),c,p,0,16931,17342,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,17069,17267,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-image\" style=\"background-image: url('");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("')\">");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}if(t.s(t.d("products.2",c,p,1),c,p,0,17397,17808,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,17535,17733,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-image\" style=\"background-image: url('");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("')\">");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("products_count_more_then_4",c,p,1),c,p,1,0,0,"")){if(t.s(t.d("products.3",c,p,1),c,p,0,17919,18330,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,18057,18255,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-image\" style=\"background-image: url('");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("')\">");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);});c.pop();}t.b("                        </li>");t.b("\n" + i);});c.pop();}};if(t.s(t.f("products_count_more_then_4",c,p,1),c,p,0,18457,18642,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item\">");t.b("\n" + i);t.b("                            + ");t.b(t.v(t.f("products_count_minus_3",c,p,0)));t.b(" more");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);});c.pop();}t.b("                    </ul>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);if(t.s(t.d("lightbox.show_nav",c,p,1),c,p,0,18841,19024,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Previous Tile\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-left\">");t.b("\n" + i);t.b("        <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-icon fs fs-arrow-left5\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}if(t.s(t.d("lightbox.show_nav",c,p,1),c,p,0,19073,19254,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Next Tile\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-right\">");t.b("\n" + i);t.b("        <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-icon fs fs-arrow-right5\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("lightbox.show_powered_by_stackla",c,p,1),c,p,0,19319,19684,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla-wrapper\">");t.b("\n" + i);t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla\">");t.b("\n" + i);t.b("            <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla-link\" href=\"");t.b(t.v(t.f("powered_by_stackla_url",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla-logo\">");t.b("\n" + i);t.b("                </i>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div\n    class=\"{{classnames}} {{class_prefix}} {{class_prefix}}-wrapper {{class_prefix}}--{{media}} {{class_prefix}}--{{source}}\"\n    data-id=\"{{id}}\"\n    data-tile-id=\"{{id}}\"\n    data-widget-id=\"{{widget_id}}\">\n    <div class=\"{{class_prefix}}-main\">\n        {{#show_media}}\n        <div class=\"{{class_prefix}}-media-wrapper\">\n            {{#show_image}}\n            <div class=\"{{class_prefix}}-image-wrapper\">\n                <div class=\"{{class_prefix}}-image-loading\">\n                    <img src=\"{{image}}\" class=\"{{class_prefix}}-image\"\n                        data-max-width=\"{{max_image_width}}\"\n                        data-max-height=\"{{max_image_height}}\"\n                        draggable=\"false\"/>\n                </div>\n            </div>\n            {{/show_image}}\n\n            {{#show_audio}}\n            <div class=\"{{class_prefix}}-audio-wrapper\">\n                <img\n                    src=\"{{image}}\"\n                    class=\"{{class_prefix}}-audio-image\"\n                    />\n                <audio\n                    class=\"{{class_prefix}}-audio video-js vjs-default-skin\"\n                    controls\n                    autoplay\n                    width=\"100%\"\n                    height=\"30\"\n                    preload=\"auto\">\n                    {{#audio_files}}\n                    <source src=\"{{url}}\" type=\"{{type}}\">\n                    {{/audio_files}}\n                </audio>\n            </div>\n            {{/show_audio}}\n\n            {{#show_video}}\n            <div class=\"{{class_prefix}}-video-wrapper\">\n                <div class=\"{{class_prefix}}-video-wrapper-inner\">\n                {{#embed_url}}\n                    {{#is_vimeo}}\n                    <iframe\n                        src=\"//player.vimeo.com/video/{{embed_url}}\"\n                        class=\"{{class_prefix}}-video-frame\"/>\n                    {{/is_vimeo}}\n\n                    {{#is_vine}}\n                    <iframe\n                        src=\"{{embed_url}}/embed/simple\"\n                        class=\"{{class_prefix}}-video-frame\"/>\n                    {{/is_vine}}\n\n                    {{#is_gplus}}\n                    <iframe\n                        src=\"{{embed_url}}\"\n                        class=\"{{class_prefix}}-video-frame\"/>\n                    {{/is_gplus}}\n\n                    {{#is_youtube}}\n                    <iframe\n                        src=\"//www.youtube.com/embed/{{embed_url}}?autoplay=1\"\n                        allowfullscreen=\"allowFullScreen\"\n                        class=\"{{class_prefix}}-video-frame\"/>\n                    {{/is_youtube}}\n\n                    {{#is_weibo}}\n                    <iframe\n                            src=\"http://video.weibo.com/show?fid={{embed_url}}\"\n                            class=\"{{class_prefix}}-video-frame\"/>\n                    {{/is_weibo}}\n                {{/embed_url}}\n\n                {{#is_mp4}}\n                <video\n                    src=\"{{{mp4_url}}}\"\n                    controls\n                    autoplay\n                    preload=\"auto\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_mp4}}\n\n                {{#is_unknown_video}}\n                    {{#image}}\n                    <a href=\"{{original_link}}\" class=\"{{class_prefix}}-video-link\" target=\"_blank\">\n                        <img src=\"{{image}}\" class=\"{{class_prefix}}-video-image\"/>\n                        <span class=\"{{class_prefix}}-play-icon-wrapper\">\n                            <i class=\"{{class_prefix}}-play-icon fs fs-play\"></i>\n                        </span>\n                    </a>\n                    {{/image}}\n                {{/is_unknown_video}}\n                </div>\n            </div>\n            {{/show_video}}\n\n            {{#show_embed}}\n            <div class=\"{{class_prefix}}-embed-wrapper\">{{{embed_html}}}</div>\n            {{/show_embed}}\n\n        </div>\n        {{/show_media}}\n        <div class=\"{{class_prefix}}-text-wrapper\">\n            <div class=\"{{class_prefix}}-text\">\n                <div class=\"{{class_prefix}}-reference-wrapper\">\n                    <div class=\"{{class_prefix}}-reference stacklapopup-clearfix\">\n                        {{#avatar_src}}\n                        <div class=\"{{class_prefix}}-avatar\">\n                            <a class=\"{{class_prefix}}-avatar-link\" {{#avatar_link}}href=\"{{avatar_link}}\" target=\"_blank\"{{/avatar_link}}>\n                                <img\n                                    onerror=\"this.style.display='none'\"\n                                    class=\"{{class_prefix}}-avatar-image\"\n                                    src=\"{{avatar_src}}\"\n                                    alt=\"{{avatar_alt_text}}\"/>\n\n                            </a>\n                        </div>\n                        {{/avatar_src}}\n\n                        <div class=\"{{class_prefix}}-user-wrapper\">\n                            <a class=\"{{class_prefix}}-user-top\" {{#avatar_link}}href=\"{{avatar_link}}\" target=\"_blank\"{{/avatar_link}}>\n                                <span class=\"{{class_prefix}}-user-name\">{{user_name}}</span>\n                            </a>\n                            {{#special_user_handle}}\n                            <a class=\"{{class_prefix}}-user-bottom\" {{#avatar_link}}href=\"{{avatar_link}}\" target=\"_blank\"{{/avatar_link}}>\n                                <span class=\"{{class_prefix}}-user-handle\">{{user_handle}}</span>\n                            </a>\n                            {{/special_user_handle}}\n                        </div>\n                        <div class=\"{{class_prefix}}-timestamp\">{{source_created_at_formatted}}</div>\n                        <div class=\"{{class_prefix}}-source {{class_prefix}}-source--{{source}}\">\n                            <i class=\"{{class_prefix}}-source-icon fs fs-{{icon_name}}\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"{{class_prefix}}-text-main\">\n                    <div class=\"{{class_prefix}}-caption\">\n                        {{#emoji}}{{{caption}}}{{/emoji}}\n                    </div>\n\n                    {{#show_html}}\n                    <div class=\"{{class_prefix}}-html\">{{{html}}}</div>\n                    {{/show_html}}\n\n                    {{#lightbox.show_tags}}\n                    <div class=\"{{class_prefix}}-tags-wrapper\">\n                        <div class=\"{{class_prefix}}-tags\">\n                        {{#tags}}\n                        {{#href}}\n                        <a href=\"{{href}}\" class=\"stacklapopup-slider-tag {{class_names}}\" target=\"{{target}}\">{{text}}</a>\n                        {{/href}}\n                        {{^href}}\n                        <span class=\"stacklapopup-slider-tag {{class_names}}\">{{text}}</span>\n                        {{/href}}\n                        {{/tags}}\n                        </div>\n                    </div>\n                    {{/lightbox.show_tags}}\n                </div>\n\n                <div class=\"{{class_prefix}}-belt\">\n                    {{#show_twitter_intent}}\n                    <div class=\"{{class_prefix}}-twitter-intent-wrapper\">\n                        <div class=\"{{class_prefix}}-twitter-intent\">\n                            <a href=\"https://twitter.com/intent/tweet?in_reply_to={{twitter_id}}\"\n                                    target=\"_blank\" class=\"{{class_prefix}}-twitter-intent-link {{class_prefix}}-twitter-reply\">\n                                <i class=\"fs fs-reply\"></i>\n                            </a>\n                            <a href=\"https://twitter.com/intent/retweet?tweet_id={{twitter_id}}\"\n                                target=\"_blank\" class=\"{{class_prefix}}-twitter-intent-link {{class_prefix}}-twitter-retweet\">\n                                <i class=\"fs fs-retweet\"></i>\n                            </a>\n                            <a href=\"https://twitter.com/intent/favorite?tweet_id={{twitter_id}}\"\n                                target=\"_blank\" class=\"{{class_prefix}}-twitter-intent-link {{class_prefix}}-twitter-favorite\">\n                                <i class=\"fs fs-heart\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    {{/show_twitter_intent}}\n                    {{#show_interactions}}\n                    <div class=\"{{class_prefix}}-interaction-wrapper\">\n                        {{#lightbox.show_likes}}\n                        {{#interactionData.like}}\n                        <span\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-like{{#on}} on{{/on}}\"\n                            onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                            data-interaction-type=\"like\">\n                            <i class=\"fs fs-thumbs-up\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        </span>\n                        {{/interactionData.like}}\n                        {{/lightbox.show_likes}}\n\n                        {{#lightbox.show_dislikes}}\n                        {{#interactionData.dislike}}\n                        <span\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-dislike{{#on}} on{{/on}}\"\n                            onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                            data-interaction-type=\"dislike\">\n                            <i class=\"fs fs-thumbs-down\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        </span>\n                        {{/interactionData.dislike}}\n                        {{/lightbox.show_dislikes}}\n\n                        {{#lightbox.show_votes}}\n                        {{#interactionData.vote}}\n                        <span\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-vote{{#on}} on{{/on}}\"\n                            onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                            data-interaction-type=\"vote\">\n                            <i class=\"fs fs-triangle-up\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        </span>\n                        {{/interactionData.vote}}\n                        {{/lightbox.show_votes}}\n\n                        {{#lightbox.show_sharing}}\n                        <span\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-link-share\">\n                            <i class=\"fs fs-share\"></i>\n                        </span>\n                        {{/lightbox.show_sharing}}\n\n                        {{#lightbox.show_comments}}\n                        <span\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-comment{{#on}} on{{/on}}\"\n                            data-autoload=\"disabled\"\n                            >\n                            <i class=\"fs fs-comment\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{comments_count}}</span>\n\n                        </span>\n                        {{/lightbox.show_comments}}\n                    </div>\n\n                    {{#lightbox.show_sharing}}\n                    <div class=\"{{class_prefix}}-share-list js-{{class_prefix}}-share-list stacklapopup-clearfix\">\n                        {{#allow_share_to_facebook}}\n                        <a\n                            class=\"{{class_prefix}}-share-button facebook\"\n                            target=\"_blank\">\n                            <i class=\"fs fs-facebook\"></i>\n                        </a>\n                        {{/allow_share_to_facebook}}\n                        <a\n                            class=\"{{class_prefix}}-share-button twitter\"\n                            target=\"_blank\">\n                            <i class=\"fs fs-twitter\"></i>\n                        </a>\n                        {{#allow_share_to_pinterest}}\n                        <a\n                            class=\"{{class_prefix}}-share-button pinterest\"\n                            target=\"_blank\">\n                            <i class=\"fs fs-pinterest\"></i>\n                        </a>\n                        {{/allow_share_to_pinterest}}\n                        <a\n                            class=\"{{class_prefix}}-share-button gplus\"\n                            target=\"_blank\">\n                            <i class=\"fs fs-googleplus\"></i>\n                        </a>\n                        <a\n                            class=\"{{class_prefix}}-share-button linkedin\"\n                            target=\"_blank\">\n                            <i class=\"fs fs-linkedin\"></i>\n                        </a>\n                        <a\n                            class=\"{{class_prefix}}-share-button email\"\n                            target=\"_blank\">\n                            <div class=\"fs fs-envelope\"></div>\n                        </a>\n                        <a\n                            class=\"{{class_prefix}}-share-button js-{{class_prefix}}-share-button close\"\n                            target=\"_blank\">\n                            <i class=\"fs fs-close\"></i>\n                        </a>\n                    </div>\n                    {{/lightbox.show_sharing}}\n\n                    {{/show_interactions}}\n                </div>\n\n\n\n                {{#lightbox.show_comments}}\n                <div class=\"{{class_prefix}}-comments-wrapper {{class_prefix}}-comments-wrap\">\n                    <a class=\"{{class_prefix}}-comments-close-button\"><i class=\"fs fs-arrow-left5\"></i> Back</a>\n                    <div class=\"{{class_prefix}}-comments-user stacklapopup-clearfix\">\n                        <div class=\"{{class_prefix}}-comments-title\">\n                            <i class=\"{{class_prefix}}-comments-title-icon fs fs-comment\"></i> Comments\n                        </div>\n                        <ul class=\"{{class_prefix}}-comments-list\"></ul>\n                        {{#interactionData.comments.count}}\n                        <div class=\"{{class_prefix}}-comments\">\n                            <a\n                                href=\"javascript:void(0);\"\n                                class=\"{{class_prefix}}-comments-load-button\"\n                                value=\"Load More\"\n                                data-comment-index=\"\"\n                                onclick=\"StacklaFluidWidget.loadMoreComments(this);\">\n                                View more comments\n                                <i class=\"{{class_prefix}}-comments-load-icon fs fs-spinner fs-spin\"/>\n                            </a>\n                        </div>\n                        {{/interactionData.comments.count}}\n                        <form class=\"{{class_prefix}}-comments-form\">\n                            <textarea class=\"{{class_prefix}}-comments-user-textarea\"\n                                placeholder=\"Your Comment...\"></textarea>\n                            <input class=\"{{class_prefix}}-comments-user-input\"\n                                    type=\"text\"\n                                    placeholder=\"Your Name\"\n                                    {{#disallow_comment}}readonly=\"readonly\"{{/disallow_comment}}\n                                    value=\"{{comment_user_input}}\">\n                            <button\n                                type=\"button\"\n                                class=\"{{class_prefix}}-comments-user-button\"\n                                onclick=\"StacklaFluidWidget.postComment(this);\">\n                                Submit\n                            </button>\n                            <div class=\"{{class_prefix}}-comments-user-message\">\n                                <p><i class=\"{{class_prefix}}-comments-user-message-icon fs fs-success\"></i> Your comment has been submitted for moderation and will appear soon!</p>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                {{/lightbox.show_comments}}\n\n                {{#lightbox.show_products}}\n                <div class=\"{{class_prefix}}-products-wrapper\">\n                    <ul class=\"{{class_prefix}}-products\">\n                        {{#products.0}}\n                        <li class=\"{{class_prefix}}-products-item\" data-tag-id=\"{{id}}\">\n                            {{#image_small_url}}\n                            <div class=\"{{class_prefix}}-products-item-image\" style=\"background-image: url('{{{image_small_url}}}')\">\n                            </div>\n                            {{/image_small_url}}\n                        </li>\n                        {{/products.0}}\n                        {{#products.1}}\n                        <li class=\"{{class_prefix}}-products-item\" data-tag-id=\"{{id}}\">\n                            {{#image_small_url}}\n                            <div class=\"{{class_prefix}}-products-item-image\" style=\"background-image: url('{{{image_small_url}}}')\">\n                            </div>\n                            {{/image_small_url}}\n                        </li>\n                        {{/products.1}}\n                        {{#products.2}}\n                        <li class=\"{{class_prefix}}-products-item\" data-tag-id=\"{{id}}\">\n                            {{#image_small_url}}\n                            <div class=\"{{class_prefix}}-products-item-image\" style=\"background-image: url('{{{image_small_url}}}')\">\n                            </div>\n                            {{/image_small_url}}\n                        </li>\n                        {{/products.2}}\n                        {{^products_count_more_then_4}}\n                        {{#products.3}}\n                        <li class=\"{{class_prefix}}-products-item\" data-tag-id=\"{{id}}\">\n                            {{#image_small_url}}\n                            <div class=\"{{class_prefix}}-products-item-image\" style=\"background-image: url('{{{image_small_url}}}')\">\n                            </div>\n                            {{/image_small_url}}\n                        </li>\n                        {{/products.3}}\n                        {{/products_count_more_then_4}}\n                        {{#products_count_more_then_4}}\n                        <li class=\"{{class_prefix}}-products-item\">\n                            + {{products_count_minus_3}} more\n                        </li>\n                        {{/products_count_more_then_4}}\n                    </ul>\n                </div>\n                {{/lightbox.show_products}}\n\n\n            </div>\n        </div>\n    </div>\n\n    {{#lightbox.show_nav}}\n    <button title=\"Previous Tile\" class=\"{{class_prefix}}-arrow {{class_prefix}}-arrow-left\">\n        <i class=\"{{class_prefix}}-arrow-icon fs fs-arrow-left5\"></i>\n    </button>\n    {{/lightbox.show_nav}}\n    {{#lightbox.show_nav}}\n    <button title=\"Next Tile\" class=\"{{class_prefix}}-arrow {{class_prefix}}-arrow-right\">\n        <i class=\"{{class_prefix}}-arrow-icon fs fs-arrow-right5\"></i>\n    </button>\n    {{/lightbox.show_nav}}\n\n    {{#lightbox.show_powered_by_stackla}}\n    <div class=\"{{class_prefix}}-poweredByStackla-wrapper\">\n        <div class=\"{{class_prefix}}-poweredByStackla\">\n            <a class=\"{{class_prefix}}-poweredByStackla-link\" href=\"{{powered_by_stackla_url}}\" target=\"_blank\">\n                <i class=\"{{class_prefix}}-poweredByStackla-logo\">\n                </i>\n            </a>\n        </div>\n    </div>\n    {{/lightbox.show_powered_by_stackla}}\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div");t.b("\n" + i);t.b("    class=\"");t.b(t.v(t.f("classnames",c,p,0)));t.b(" ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-content-wrapper ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-content-wrapper--");t.b(t.v(t.f("media",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-widget-id=\"");t.b(t.v(t.f("widget_id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("show_author",c,p,1),c,p,0,251,1925,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-header\">");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-wrapper\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user\">");t.b("\n" + i);if(t.s(t.f("avatar",c,p,1),c,p,0,437,857,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar\">");t.b("\n" + i);t.b("                        <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar-link");if(t.s(t.f("show_stackla_logo",c,p,1),c,p,0,580,594,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" no-background");});c.pop();}t.b("\" href=\"");t.b(t.v(t.f("author_link",c,p,0)));t.b("\"");if(t.s(t.f("original_url",c,p,1),c,p,0,657,673,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" target=\"_blank\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("                           <img class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar-image\" src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-info\">");t.b("\n" + i);if(t.s(t.f("avatar_link",c,p,1),c,p,0,970,1215,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-info-top\" href=\"");t.b(t.v(t.f("avatar_link",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-name\">");t.b(t.v(t.f("user",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("avatar_link",c,p,1),c,p,1,0,0,"")){t.b("                        <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-info-top\">");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-name\">");t.b(t.v(t.f("user_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);};if(t.s(t.f("special_user_handle",c,p,1),c,p,0,1551,1808,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-info-bottom\" href=\"");t.b(t.v(t.f("avatar_link",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-handle\">");t.b(t.v(t.f("user_handle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-body\">");t.b("\n" + i);if(t.s(t.f("show_media",c,p,1),c,p,0,2013,6079,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-media-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,2102,2673,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-wrapper\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-wrapper-inner\">");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-loading\">");t.b("\n" + i);t.b("                            <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image\"");t.b("\n" + i);t.b("                                data-max-width=\"");t.b(t.v(t.f("max_image_width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                data-max-height=\"");t.b(t.v(t.f("max_image_height",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                draggable=\"false\"/>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_video",c,p,1),c,p,0,2721,4969,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-wrapper\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-wrapper-inner\">");t.b("\n" + i);if(t.s(t.f("embed_url",c,p,1),c,p,0,2892,4203,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_vimeo",c,p,1),c,p,0,2930,3127,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <iframe");t.b("\n" + i);t.b("                            src=\"//player.vimeo.com/video/");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_vine",c,p,1),c,p,0,3178,3363,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <iframe");t.b("\n" + i);t.b("                            src=\"");t.b(t.v(t.f("embed_url",c,p,0)));t.b("/embed/simple\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_gplus",c,p,1),c,p,0,3414,3586,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <iframe");t.b("\n" + i);t.b("                            src=\"");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_youtube",c,p,1),c,p,0,3640,3909,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <iframe");t.b("\n" + i);t.b("                            src=\"//www.youtube.com/embed/");t.b(t.v(t.f("embed_url",c,p,0)));t.b("?autoplay=1\"");t.b("\n" + i);t.b("                            allowfullscreen=\"allowFullScreen\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_weibo",c,p,1),c,p,0,3963,4169,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <iframe");t.b("\n" + i);t.b("                             src=\"http://video.weibo.com/show?fid=");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                             class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("is_mp4",c,p,1),c,p,0,4250,4510,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <video");t.b("\n" + i);t.b("                        src=\"");t.b(t.t(t.f("mp4_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        controls");t.b("\n" + i);t.b("                        autoplay");t.b("\n" + i);t.b("                        preload=\"auto\"");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("is_unknown_video",c,p,1),c,p,0,4564,4881,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("image",c,p,1),c,p,0,4599,4850,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a href=\"");t.b(t.v(t.f("original_link",c,p,0)));t.b("\" class=\"unknown-video\" target=\"_blank\">");t.b("\n" + i);t.b("                            <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" width=\"100%\"/><div class=\"stacklapopup-play-icon\"></div>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_audio",c,p,1),c,p,0,5017,5763,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-audio-wrapper\">");t.b("\n" + i);t.b("                    <img");t.b("\n" + i);t.b("                        src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        alt=\"");t.b(t.v(t.f("image_alt_text",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-audio-image\"/>");t.b("\n" + i);t.b("                    <audio");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-audio-player video-js vjs-default-skin\"");t.b("\n" + i);t.b("                        controls");t.b("\n" + i);t.b("                        autoplay");t.b("\n" + i);t.b("                        width=\"100%\"");t.b("\n" + i);t.b("                        height=\"30\"");t.b("\n" + i);t.b("                        preload=\"auto\">");t.b("\n" + i);if(t.s(t.f("audio_files",c,p,1),c,p,0,5590,5678,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <source src=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("                    </audio>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_embed",c,p,1),c,p,0,5811,5911,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-embed-wrapper\">");t.b(t.t(t.f("embed_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("html",c,p,1),c,p,0,5953,6038,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-html\">");t.b(t.t(t.f("html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-text-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_quote",c,p,1),c,p,0,6182,8155,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-quote-wrapper\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-quote\">");t.b("\n" + i);if(t.s(t.f("show_title",c,p,1),c,p,0,6340,6463,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-title\">");if(t.s(t.f("emoji",c,p,1),c,p,0,6411,6422,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.t(t.f("title",c,p,0)));});c.pop();}t.b("</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_caption",c,p,1),c,p,0,6520,6751,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-caption\">");t.b("\n" + i);t.b("                            <p class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-caption-paragraph\">");if(t.s(t.f("emoji",c,p,1),c,p,0,6668,6681,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.t(t.f("caption",c,p,0)));});c.pop();}t.b("</p>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_twitter_intent",c,p,1),c,p,0,6817,8064,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-wrapper\">");t.b("\n" + i);t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent\">");t.b("\n" + i);t.b("                                <a href=\"https://twitter.com/intent/tweet?in_reply_to=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                        target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-reply\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-reply\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                                <a href=\"https://twitter.com/intent/retweet?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                   target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-retweet\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-retweet\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                                <a href=\"https://twitter.com/intent/favorite?tweet_id=");t.b(t.v(t.f("twitter_id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                                   target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-intent-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-twitter-favorite\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-heart\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_tags",c,p,1),c,p,0,8202,8781,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tags-wrapper\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tags\">");t.b("\n" + i);if(t.s(t.f("visible_tags",c,p,1),c,p,0,8356,8697,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("custom_url",c,p,1),c,p,0,8392,8519,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a href=\"");t.b(t.v(t.f("custom_url",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tag\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b(t.v(t.f("tag",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("custom_url",c,p,1),c,p,1,0,0,"")){t.b("                    <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tag\">");t.b(t.v(t.f("tag",c,p,0)));t.b("</span>");t.b("\n" + i);};});c.pop();}t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_products",c,p,1),c,p,0,8831,10807,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-wrap\">");t.b("\n" + i);t.b("                    <ul class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products\">");t.b("\n" + i);if(t.s(t.f("products",c,p,1),c,p,0,8989,10728,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <li class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item\" data-tag-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,9127,9399,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-image\">");t.b("\n" + i);t.b("                                 <img src=\"");t.b(t.t(t.f("image_small_url",c,p,0)));t.b("\" width=\"");t.b(t.v(t.f("image_small_width",c,p,0)));t.b("\" height=\"");t.b(t.v(t.f("image_small_height",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);});c.pop();}t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-content\">");t.b("\n" + i);if(t.s(t.f("tag",c,p,1),c,p,0,9541,9837,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                                <a href=\"");t.b(t.t(t.f("custom_url",c,p,0)));t.b("\" target=\"_blank\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-prodcuts-item-title-wrap\">");t.b("\n" + i);t.b("                                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-title\">");t.b(t.v(t.f("tag",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);});c.pop();}if(t.s(t.f("description",c,p,1),c,p,0,9894,10033,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                                <p class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-description\">");t.b(t.v(t.f("description",c,p,0)));t.b("</p>");t.b("\n" + i);});c.pop();}t.b("                                <a href=\"");t.b(t.t(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-prodcuts-item-button-wrap\">");t.b("\n" + i);t.b("                                    <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-button\">");t.b(t.v(t.f("cta_text",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);if(t.s(t.f("price",c,p,1),c,p,0,10368,10501,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                                <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-price\">");t.b(t.v(t.f("price",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                            </div>");t.b("\n" + i);t.b("                            <a href=\"javascript:void(0)\" title=\"Close\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-item-close-link\">×</a>");t.b("\n" + i);t.b("                        </li>");t.b("\n" + i);});c.pop();}t.b("                    </ul>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-belt\">");t.b("\n" + i);t.b("                    <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-source-icon fs fs-");t.b(t.v(t.f("icon_name",c,p,0)));t.b("\"></i>");t.b("\n" + i);t.b("                    <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-timestamp\">");t.b(t.v(t.f("source_created_at_formatted",c,p,0)));t.b("</span>");t.b("\n" + i);if(t.s(t.f("show_interactions",c,p,1),c,p,0,11106,16885,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_likes",c,p,1),c,p,0,11217,11865,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.like",c,p,1),c,p,0,11267,11815,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-like");if(t.s(t.f("on",c,p,1),c,p,0,11459,11462,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                            data-interaction-type=\"like\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-thumbs-up\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_dislikes",c,p,1),c,p,0,11924,12586,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,11977,12533,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-dislike");if(t.s(t.f("on",c,p,1),c,p,0,12172,12175,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                            data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-thumbs-down\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_votes",c,p,1),c,p,0,12645,13295,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,12695,13245,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-vote");if(t.s(t.f("on",c,p,1),c,p,0,12887,12890,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                            onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                            data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-triangle-up\"></i>");t.b("\n" + i);t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("\n" + i);if(t.s(t.f("show_sharing",c,p,1),c,p,0,13353,16439,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link-share\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-share\"></i>");t.b("\n" + i);t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-list js-");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-list stacklapopup-clearfix\">");t.b("\n" + i);if(t.s(t.f("allow_share_to_facebook",c,p,1),c,p,0,13786,14157,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button facebook\"");t.b("\n" + i);t.b("                                    target=\"_blank\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-facebook\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);});c.pop();}t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button twitter\"");t.b("\n" + i);t.b("                                    target=\"_blank\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-twitter\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);if(t.s(t.f("allow_share_to_pinterest",c,p,1),c,p,0,14583,14956,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button pinterest\"");t.b("\n" + i);t.b("                                    target=\"_blank\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-pinterest\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);});c.pop();}t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button gplus\"");t.b("\n" + i);t.b("                                    target=\"_blank\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-googleplus\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button linkedin\"");t.b("\n" + i);t.b("                                    target=\"_blank\">");t.b("\n" + i);t.b("                                    <i class=\"fs fs-linkedin\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button email\"");t.b("\n" + i);t.b("                                    target=\"_blank\">");t.b("\n" + i);t.b("                                    <div class=\"fs fs-envelope\"></div>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                                <a");t.b("\n" + i);t.b("                                    href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button js-");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button close\"");t.b("\n" + i);t.b("                                    >");t.b("\n" + i);t.b("                                    <i class=\"fs fs-cross3\"></i>");t.b("\n" + i);t.b("                                </a>");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_comments",c,p,1),c,p,0,16500,16819,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <a");t.b("\n" + i);t.b("                            href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-comment");if(t.s(t.f("on",c,p,1),c,p,0,16695,16698,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                            <i class=\"fs fs-comment\"></i>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("                </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_comments",c,p,1),c,p,0,16966,19555,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-wrap ");if(t.s(t.d("interactionData.comments.on",c,p,1),c,p,0,17058,17060,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user stacklapopup-clearfix\">");t.b("\n" + i);t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-info-title\">");t.b("\n" + i);t.b("                            <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-info-icon fs fs-comment\"></i> Comments");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);t.b("                        <ul class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-list\"></ul>");t.b("\n" + i);if(t.s(t.d("interactionData.comments.count",c,p,1),c,p,0,17523,18193,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-info\">");t.b("\n" + i);t.b("                            <a");t.b("\n" + i);t.b("                                href=\"javascript:void(0);\"");t.b("\n" + i);t.b("                                class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-load-button\"");t.b("\n" + i);t.b("                                value=\"Load More\"");t.b("\n" + i);t.b("                                data-comment-index=\"\"");t.b("\n" + i);t.b("                                onclick=\"StacklaFluidWidget.loadMoreComments(this);\">");t.b("\n" + i);t.b("                                View more comments");t.b("\n" + i);t.b("                                <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-load-icon fs fs-spinner fs-spin\"/>");t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}t.b("                        <form class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-form\">");t.b("\n" + i);t.b("                            <textarea class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-textarea\"");t.b("\n" + i);t.b("                                placeholder=\"Your Comment...\"></textarea>");t.b("\n" + i);t.b("                            <input class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-input\"");t.b("\n" + i);t.b("                                   type=\"text\"");t.b("\n" + i);t.b("                                   placeholder=\"Your Name\"");t.b("\n" + i);t.b("                                   ");if(t.s(t.f("disallow_comment",c,p,1),c,p,0,18701,18720,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly=\"readonly\"");});c.pop();}t.b("\n" + i);t.b("                                   value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            <button");t.b("\n" + i);t.b("                                type=\"button\"");t.b("\n" + i);t.b("                                class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-button\"");t.b("\n" + i);t.b("                                onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                                Submit");t.b("\n" + i);t.b("                            </button>");t.b("\n" + i);t.b("                            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-message\">");t.b("\n" + i);t.b("                                <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-message-icon fs fs-success\"></i>");t.b("\n" + i);t.b("                                <p>Your comment has been submitted for moderation and will appear soon!</p>");t.b("\n" + i);t.b("                            </div>");t.b("\n" + i);t.b("                        </form>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("show_nav_left",c,p,1),c,p,0,19642,19825,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Previous Tile\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-left\">");t.b("\n" + i);t.b("        <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-icon fs fs-arrow-left2\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_nav_right",c,p,1),c,p,0,19867,20048,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button title=\"Next Tile\" class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-right\">");t.b("\n" + i);t.b("        <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-icon fs fs-arrow-right2\"></i>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("show_powered_by_stackla",c,p,1),c,p,0,20101,20466,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla-wrapper\">");t.b("\n" + i);t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla\">");t.b("\n" + i);t.b("            <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla-link\" href=\"");t.b(t.v(t.f("powered_by_stackla_url",c,p,0)));t.b("\" target=\"_blank\">");t.b("\n" + i);t.b("                <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-poweredByStackla-logo\">");t.b("\n" + i);t.b("                </i>");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div\n    class=\"{{classnames}} {{class_prefix}}-content-wrapper {{class_prefix}}-content-wrapper--{{media}}\"\n    data-id=\"{{id}}\"\n    data-tile-id=\"{{id}}\"\n    data-widget-id=\"{{widget_id}}\">\n    <div class=\"{{class_prefix}}\">\n        {{#show_author}}\n        <div class=\"{{class_prefix}}-header\">\n            <div class=\"{{class_prefix}}-user-wrapper\">\n                <div class=\"{{class_prefix}}-user\">\n                    {{#avatar}}\n                    <div class=\"{{class_prefix}}-avatar\">\n                        <a class=\"{{class_prefix}}-avatar-link{{#show_stackla_logo}} no-background{{/show_stackla_logo}}\" href=\"{{author_link}}\"{{#original_url}} target=\"_blank\"{{/original_url}}>\n                           <img class=\"{{class_prefix}}-avatar-image\" src=\"{{avatar}}\"/>\n                        </a>\n                    </div>\n                    {{/avatar}}\n                    <div class=\"{{class_prefix}}-user-info\">\n                        {{#avatar_link}}\n                        <a class=\"{{class_prefix}}-user-info-top\" href=\"{{avatar_link}}\" target=\"_blank\">\n                            <span class=\"{{class_prefix}}-user-name\">{{user}}</span>\n                        </a>\n                        {{/avatar_link}}\n                        {{^avatar_link}}\n                        <span class=\"{{class_prefix}}-user-info-top\">\n                            <span class=\"{{class_prefix}}-user-name\">{{user_name}}</span>\n                        </a>\n                        {{/avatar_link}}\n                        {{#special_user_handle}}\n                        <a class=\"{{class_prefix}}-user-info-bottom\" href=\"{{avatar_link}}\" target=\"_blank\">\n                            <span class=\"{{class_prefix}}-user-handle\">{{user_handle}}</span>\n                        </a>\n                        {{/special_user_handle}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        {{/show_author}}\n        <div class=\"{{class_prefix}}-body\">\n            {{#show_media}}\n            <div class=\"{{class_prefix}}-media-wrapper\">\n                {{#show_image}}\n                <div class=\"{{class_prefix}}-image-wrapper\">\n                    <div class=\"{{class_prefix}}-image-wrapper-inner\">\n                        <div class=\"{{class_prefix}}-image-loading\">\n                            <img src=\"{{image}}\" class=\"{{class_prefix}}-image\"\n                                data-max-width=\"{{max_image_width}}\"\n                                data-max-height=\"{{max_image_height}}\"\n                                draggable=\"false\"/>\n                        </div>\n                    </div>\n                </div>\n                {{/show_image}}\n\n                {{#show_video}}\n                <div class=\"{{class_prefix}}-video-wrapper\">\n                    <div class=\"{{class_prefix}}-video-wrapper-inner\">\n                        {{#embed_url}}\n                        {{#is_vimeo}}\n                        <iframe\n                            src=\"//player.vimeo.com/video/{{embed_url}}\"\n                            class=\"{{class_prefix}}-video-frame\"/>\n                        {{/is_vimeo}}\n\n                        {{#is_vine}}\n                        <iframe\n                            src=\"{{embed_url}}/embed/simple\"\n                            class=\"{{class_prefix}}-video-frame\"/>\n                        {{/is_vine}}\n\n                        {{#is_gplus}}\n                        <iframe\n                            src=\"{{embed_url}}\"\n                            class=\"{{class_prefix}}-video-frame\"/>\n                        {{/is_gplus}}\n\n                        {{#is_youtube}}\n                        <iframe\n                            src=\"//www.youtube.com/embed/{{embed_url}}?autoplay=1\"\n                            allowfullscreen=\"allowFullScreen\"\n                            class=\"{{class_prefix}}-video-frame\"/>\n                        {{/is_youtube}}\n\n                        {{#is_weibo}}\n                        <iframe\n                             src=\"http://video.weibo.com/show?fid={{embed_url}}\"\n                             class=\"{{class_prefix}}-video-frame\"/>\n                        {{/is_weibo}}\n                    {{/embed_url}}\n\n                    {{#is_mp4}}\n                    <video\n                        src=\"{{{mp4_url}}}\"\n                        controls\n                        autoplay\n                        preload=\"auto\"\n                        class=\"{{class_prefix}}-video-frame\"/>\n                    {{/is_mp4}}\n\n                    {{#is_unknown_video}}\n                        {{#image}}\n                        <a href=\"{{original_link}}\" class=\"unknown-video\" target=\"_blank\">\n                            <img src=\"{{image}}\" width=\"100%\"/><div class=\"stacklapopup-play-icon\"></div>\n                        </a>\n                        {{/image}}\n                    {{/is_unknown_video}}\n                    </div>\n                </div>\n                {{/show_video}}\n\n                {{#show_audio}}\n                <div class=\"{{class_prefix}}-audio-wrapper\">\n                    <img\n                        src=\"{{image}}\"\n                        alt=\"{{image_alt_text}}\"\n                        class=\"{{class_prefix}}-audio-image\"/>\n                    <audio\n                        class=\"{{class_prefix}}-audio-player video-js vjs-default-skin\"\n                        controls\n                        autoplay\n                        width=\"100%\"\n                        height=\"30\"\n                        preload=\"auto\">\n                        {{#audio_files}}\n                        <source src=\"{{url}}\" type=\"{{type}}\">\n                        {{/audio_files}}\n                    </audio>\n                </div>\n                {{/show_audio}}\n\n                {{#show_embed}}\n                <div class=\"{{class_prefix}}-embed-wrapper\">{{{embed_html}}}</div>\n                {{/show_embed}}\n\n                {{#html}}\n                <div class=\"{{class_prefix}}-html\">{{{html}}}</div>\n                {{/html}}\n            </div>\n            {{/show_media}}\n            <div class=\"{{class_prefix}}-text-wrapper\">\n                {{#show_quote}}\n                <div class=\"{{class_prefix}}-quote-wrapper\">\n                    <div class=\"{{class_prefix}}-quote\">\n                        {{#show_title}}\n                        <div class=\"{{class_prefix}}-title\">{{#emoji}}{{{title}}}{{/emoji}}</div>\n                        {{/show_title}}\n                        {{#show_caption}}\n                        <div class=\"{{class_prefix}}-caption\">\n                            <p class=\"{{class_prefix}}-caption-paragraph\">{{#emoji}}{{{caption}}}{{/emoji}}</p>\n                        </div>\n                        {{/show_caption}}\n                        {{#show_twitter_intent}}\n                        <div class=\"{{class_prefix}}-twitter-intent-wrapper\">\n                            <div class=\"{{class_prefix}}-twitter-intent\">\n                                <a href=\"https://twitter.com/intent/tweet?in_reply_to={{twitter_id}}\"\n                                        target=\"_blank\" class=\"{{class_prefix}}-twitter-intent-link {{class_prefix}}-twitter-reply\">\n                                    <i class=\"fs fs-reply\"></i>\n                                </a>\n                                <a href=\"https://twitter.com/intent/retweet?tweet_id={{twitter_id}}\"\n                                   target=\"_blank\" class=\"{{class_prefix}}-twitter-intent-link {{class_prefix}}-twitter-retweet\">\n                                    <i class=\"fs fs-retweet\"></i>\n                                </a>\n                                <a href=\"https://twitter.com/intent/favorite?tweet_id={{twitter_id}}\"\n                                   target=\"_blank\" class=\"{{class_prefix}}-twitter-intent-link {{class_prefix}}-twitter-favorite\">\n                                    <i class=\"fs fs-heart\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        {{/show_twitter_intent}}\n                    </div>\n                </div>\n                {{/show_quote}}\n\n                {{#show_tags}}\n                <div class=\"{{class_prefix}}-tags-wrapper\">\n                    <div class=\"{{class_prefix}}-tags\">\n                    {{#visible_tags}}\n                    {{#custom_url}}\n                    <a href=\"{{custom_url}}\" class=\"{{class_prefix}}-tag\" target=\"{{target}}\">{{tag}}</a>\n                    {{/custom_url}}\n                    {{^custom_url}}\n                    <span class=\"{{class_prefix}}-tag\">{{tag}}</span>\n                    {{/custom_url}}\n                    {{/visible_tags}}\n                    </div>\n                </div>\n                {{/show_tags}}\n\n                {{#show_products}}\n                <div class=\"{{class_prefix}}-products-wrap\">\n                    <ul class=\"{{class_prefix}}-products\">\n                        {{#products}}\n                        <li class=\"{{class_prefix}}-products-item\" data-tag-id=\"{{id}}\">\n                            {{#image_small_url}}\n                            <div class=\"{{class_prefix}}-products-item-image\">\n                                 <img src=\"{{{image_small_url}}}\" width=\"{{image_small_width}}\" height=\"{{image_small_height}}\">\n                            </div>\n                            {{/image_small_url}}\n                            <div class=\"{{class_prefix}}-products-item-content\">\n                                {{#tag}}\n                                <a href=\"{{{custom_url}}}\" target=\"_blank\" class=\"{{class_prefix}}-prodcuts-item-title-wrap\">\n                                    <div class=\"{{class_prefix}}-products-item-title\">{{tag}}</div>\n                                </a>\n                                {{/tag}}\n                                {{#description}}\n                                <p class=\"{{class_prefix}}-products-item-description\">{{description}}</p>\n                                {{/description}}\n                                <a href=\"{{{custom_url}}}\" target=\"{{target}}\" class=\"{{class_prefix}}-prodcuts-item-button-wrap\">\n                                    <span class=\"{{class_prefix}}-products-item-button\">{{cta_text}}</span>\n                                </a>\n                                {{#price}}\n                                <span class=\"{{class_prefix}}-products-item-price\">{{price}}</span>\n                                {{/price}}\n                            </div>\n                            <a href=\"javascript:void(0)\" title=\"Close\" class=\"{{class_prefix}}-products-item-close-link\">×</a>\n                        </li>\n                        {{/products}}\n                    </ul>\n                </div>\n                {{/show_products}}\n\n                <div class=\"{{class_prefix}}-belt\">\n                    <i class=\"{{class_prefix}}-source-icon fs fs-{{icon_name}}\"></i>\n                    <span class=\"{{class_prefix}}-timestamp\">{{source_created_at_formatted}}</span>\n                    {{#show_interactions}}\n                    <div class=\"{{class_prefix}}-interaction-wrapper\">\n                        {{#show_likes}}\n                        {{#interactionData.like}}\n                        <a\n                            href=\"javascript:void(0);\"\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-like{{#on}} on{{/on}}\"\n                            onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                            data-interaction-type=\"like\">\n                            <i class=\"fs fs-thumbs-up\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        </a>\n                        {{/interactionData.like}}\n                        {{/show_likes}}\n\n                        {{#show_dislikes}}\n                        {{#interactionData.dislike}}\n                        <a\n                            href=\"javascript:void(0);\"\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-dislike{{#on}} on{{/on}}\"\n                            onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                            data-interaction-type=\"dislike\">\n                            <i class=\"fs fs-thumbs-down\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        </a>\n                        {{/interactionData.dislike}}\n                        {{/show_dislikes}}\n\n                        {{#show_votes}}\n                        {{#interactionData.vote}}\n                        <a\n                            href=\"javascript:void(0);\"\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-vote{{#on}} on{{/on}}\"\n                            onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                            data-interaction-type=\"vote\">\n                            <i class=\"fs fs-triangle-up\"></i>\n                            <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        </a>\n                        {{/interactionData.vote}}\n                        {{/show_votes}}\n\n                        {{#show_sharing}}\n                        <a\n                            href=\"javascript:void(0);\"\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-link-share\">\n                            <i class=\"fs fs-share\"></i>\n                            <div class=\"{{class_prefix}}-share-list js-{{class_prefix}}-share-list stacklapopup-clearfix\">\n                                {{#allow_share_to_facebook}}\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button facebook\"\n                                    target=\"_blank\">\n                                    <i class=\"fs fs-facebook\"></i>\n                                </a>\n                                {{/allow_share_to_facebook}}\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button twitter\"\n                                    target=\"_blank\">\n                                    <i class=\"fs fs-twitter\"></i>\n                                </a>\n                                {{#allow_share_to_pinterest}}\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button pinterest\"\n                                    target=\"_blank\">\n                                    <i class=\"fs fs-pinterest\"></i>\n                                </a>\n                                {{/allow_share_to_pinterest}}\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button gplus\"\n                                    target=\"_blank\">\n                                    <i class=\"fs fs-googleplus\"></i>\n                                </a>\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button linkedin\"\n                                    target=\"_blank\">\n                                    <i class=\"fs fs-linkedin\"></i>\n                                </a>\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button email\"\n                                    target=\"_blank\">\n                                    <div class=\"fs fs-envelope\"></div>\n                                </a>\n                                <a\n                                    href=\"javascript:void(0);\"\n                                    class=\"{{class_prefix}}-share-button js-{{class_prefix}}-share-button close\"\n                                    >\n                                    <i class=\"fs fs-cross3\"></i>\n                                </a>\n                            </div>\n                        </a>\n                        {{/show_sharing}}\n\n                        {{#show_comments}}\n                        <a\n                            href=\"javascript:void(0);\"\n                            class=\"{{class_prefix}}-interaction-link {{class_prefix}}-interaction-comment{{#on}} on{{/on}}\">\n                            <i class=\"fs fs-comment\"></i>\n                        </a>\n                        {{/show_comments}}\n                    </div>\n                    {{/show_interactions}}\n                </div>\n\n                {{#show_comments}}\n                <div class=\"{{class_prefix}}-comments-wrap {{#interactionData.comments.on}}on{{/interactionData.comments.on}}\">\n                    <div class=\"{{class_prefix}}-comments-user stacklapopup-clearfix\">\n                        <div class=\"{{class_prefix}}-comments-info-title\">\n                            <i class=\"{{class_prefix}}-comments-info-icon fs fs-comment\"></i> Comments\n                        </div>\n                        <ul class=\"{{class_prefix}}-comments-list\"></ul>\n                        {{#interactionData.comments.count}}\n                        <div class=\"{{class_prefix}}-comments-info\">\n                            <a\n                                href=\"javascript:void(0);\"\n                                class=\"{{class_prefix}}-comments-load-button\"\n                                value=\"Load More\"\n                                data-comment-index=\"\"\n                                onclick=\"StacklaFluidWidget.loadMoreComments(this);\">\n                                View more comments\n                                <i class=\"{{class_prefix}}-comments-load-icon fs fs-spinner fs-spin\"/>\n                            </a>\n                        </div>\n                        {{/interactionData.comments.count}}\n                        <form class=\"{{class_prefix}}-comments-form\">\n                            <textarea class=\"{{class_prefix}}-comments-user-textarea\"\n                                placeholder=\"Your Comment...\"></textarea>\n                            <input class=\"{{class_prefix}}-comments-user-input\"\n                                   type=\"text\"\n                                   placeholder=\"Your Name\"\n                                   {{#disallow_comment}}readonly=\"readonly\"{{/disallow_comment}}\n                                   value=\"{{comment_user_input}}\">\n                            <button\n                                type=\"button\"\n                                class=\"{{class_prefix}}-comments-user-button\"\n                                onclick=\"StacklaFluidWidget.postComment(this);\">\n                                Submit\n                            </button>\n                            <div class=\"{{class_prefix}}-comments-user-message\">\n                                <i class=\"{{class_prefix}}-comments-user-message-icon fs fs-success\"></i>\n                                <p>Your comment has been submitted for moderation and will appear soon!</p>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                {{/show_comments}}\n            </div>\n        </div>\n    </div>\n\n    {{#show_nav_left}}\n    <button title=\"Previous Tile\" class=\"{{class_prefix}}-arrow {{class_prefix}}-arrow-left\">\n        <i class=\"{{class_prefix}}-arrow-icon fs fs-arrow-left2\"></i>\n    </button>\n    {{/show_nav_left}}\n    {{#show_nav_right}}\n    <button title=\"Next Tile\" class=\"{{class_prefix}}-arrow {{class_prefix}}-arrow-right\">\n        <i class=\"{{class_prefix}}-arrow-icon fs fs-arrow-right2\"></i>\n    </button>\n    {{/show_nav_right}}\n\n    {{#show_powered_by_stackla}}\n    <div class=\"{{class_prefix}}-poweredByStackla-wrapper\">\n        <div class=\"{{class_prefix}}-poweredByStackla\">\n            <a class=\"{{class_prefix}}-poweredByStackla-link\" href=\"{{powered_by_stackla_url}}\" target=\"_blank\">\n                <i class=\"{{class_prefix}}-poweredByStackla-logo\">\n                </i>\n            </a>\n        </div>\n    </div>\n    {{/show_powered_by_stackla}}\n\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(37);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div");t.b("\n" + i);t.b("    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-wrapper ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-content-wrap ");t.b(t.v(t.f("layout",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-tile-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-widget-id=");t.b(t.v(t.f("widget_id",c,p,0)));t.b(">");t.b("\n" + i);t.b("    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-inner-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_media",c,p,1),c,p,0,215,3415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-media-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_image",c,p,1),c,p,0,296,455,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-loading\">");t.b("\n" + i);t.b("                <img class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_video",c,p,1),c,p,0,498,2512,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-wrapper\">");t.b("\n" + i);if(t.s(t.f("embed_url",c,p,1),c,p,0,586,1679,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_vimeo",c,p,1),c,p,0,616,781,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <iframe");t.b("\n" + i);t.b("                    src=\"//player.vimeo.com/video/");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_vine",c,p,1),c,p,0,823,976,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <iframe");t.b("\n" + i);t.b("                    src=\"");t.b(t.v(t.f("embed_url",c,p,0)));t.b("/embed/simple\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_gplus",c,p,1),c,p,0,1018,1158,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <iframe");t.b("\n" + i);t.b("                    src=\"");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_youtube",c,p,1),c,p,0,1203,1432,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <iframe");t.b("\n" + i);t.b("                    src=\"//www.youtube.com/embed/");t.b(t.v(t.f("embed_url",c,p,0)));t.b("?autoplay=1\"");t.b("\n" + i);t.b("                    allowfullscreen=\"allowFullScreen\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_weibo",c,p,1),c,p,0,1477,1649,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <iframe");t.b("\n" + i);t.b("                    src=\"http://video.weibo.com/show?fid=");t.b(t.v(t.f("embed_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}});c.pop();}if(t.s(t.f("is_mp4",c,p,1),c,p,0,1721,1953,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <video");t.b("\n" + i);t.b("                    src=\"");t.b(t.t(t.f("mp4_url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                    controls");t.b("\n" + i);t.b("                    autoplay");t.b("\n" + i);t.b("                    preload=\"auto\"");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-video-frame\"/>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_unknown_video",c,p,1),c,p,0,2002,2459,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("image",c,p,1),c,p,0,2033,2432,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-loading\">");t.b("\n" + i);t.b("                        <img class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("                        <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-link\" target=\"_blank\" href=\"");t.b(t.v(t.f("original_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                            <div class=\"fs fs-play tile-video-play\"></div>");t.b("\n" + i);t.b("                        </a>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_embed",c,p,1),c,p,0,2555,2649,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-embeded-wrapper\">");t.b(t.t(t.f("embed_html",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_audio",c,p,1),c,p,0,2692,3210,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image-loading\">");t.b("\n" + i);t.b("                <img class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-image\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <audio class=\"stacklapopup-audio-player video-js vjs-default-skin\"");t.b("\n" + i);t.b("                controls");t.b("\n" + i);t.b("                autoplay");t.b("\n" + i);t.b("                width=\"300\"");t.b("\n" + i);t.b("                height=\"30\"");t.b("\n" + i);t.b("                preload=\"auto\">");t.b("\n" + i);if(t.s(t.f("audio_files",c,p,1),c,p,0,3088,3160,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <source src=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("            </audio>");t.b("\n" + i);});c.pop();}if(t.s(t.f("shouldShowHTML",c,p,1),c,p,0,3257,3372,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-html-wrapper\">");t.b("\n" + i);t.b("                ");t.b(t.t(t.f("html",c,p,0)));t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);});c.pop();}t.b("        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-content-wrapper ");if(t.s(t.f("show_media",c,p,1),c,p,0,3499,3503,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("half");});c.pop();}t.b("\">");t.b("\n" + i);t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-main\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar-wrapper\">");t.b("\n" + i);if(t.s(t.f("avatar",c,p,1),c,p,0,3662,3759,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <img class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-avatar\" src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\"/>");t.b("\n" + i);});c.pop();}t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-name-wrapper\">");t.b("\n" + i);if(t.s(t.f("name",c,p,1),c,p,0,3868,4091,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("emoji",c,p,1),c,p,0,3903,4056,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-name\">");t.b("\n" + i);t.b("                            ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-user-handle-timephrase\">");t.b("\n" + i);if(t.s(t.f("user_handle",c,p,1),c,p,0,4223,4343,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            ");t.b(t.v(t.f("user_handle",c,p,0)));t.b("\n" + i);t.b("                            &nbsp;&bull;&nbsp;");t.b("\n" + i);});c.pop();}if(t.s(t.f("timephrase",c,p,1),c,p,0,4403,4475,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            ");t.b(t.v(t.f("timephrase",c,p,0)));t.b("\n" + i);});c.pop();}t.b("                        </div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-network\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-");t.b(t.v(t.d("network.id",c,p,0)));t.b("\" style=\"color: ");t.b(t.v(t.d("network.color",c,p,0)));t.b(";\"></div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);if(t.s(t.f("title",c,p,1),c,p,0,4783,4962,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("emoji",c,p,1),c,p,0,4810,4935,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-title\">");t.b("\n" + i);t.b("                    ");t.b(t.t(t.f("title",c,p,0)));t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}});c.pop();}if(t.s(t.f("message",c,p,1),c,p,0,5001,5184,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("emoji",c,p,1),c,p,0,5028,5157,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-message\">");t.b("\n" + i);t.b("                    ");t.b(t.t(t.f("message",c,p,0)));t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}});c.pop();}if(t.s(t.f("show_tags",c,p,1),c,p,0,5227,5893,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("myTags.0",c,p,1),c,p,0,5257,5863,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tags-wrapper\">");t.b("\n" + i);if(t.s(t.f("myTags",c,p,1),c,p,0,5349,5812,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("shouldShowTagOnly",c,p,1),c,p,0,5392,5527,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tag\">");t.b("\n" + i);t.b("                        ");t.b(t.v(t.f("tag",c,p,0)));t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("shouldShowLink",c,p,1),c,p,0,5589,5772,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-tag-clickable\" href=\"");t.b(t.v(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        ");t.b(t.v(t.f("tag",c,p,0)));t.b("\n" + i);t.b("                    </a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("                </div>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("            </div>");t.b("\n" + i);if(t.s(t.f("show_actions",c,p,1),c,p,0,5956,9271,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-actions\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-wrapper\">");t.b("\n" + i);if(t.s(t.f("show_likes",c,p,1),c,p,0,6110,6645,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-like");if(t.s(t.f("on",c,p,1),c,p,0,6207,6210,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                        onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                        data-interaction-type=\"like\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-thumbs-up\"></div>");t.b("\n" + i);if(t.s(t.d("interactionData.like",c,p,1),c,p,0,6457,6572,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_dislikes",c,p,1),c,p,0,6699,7248,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-dislike");if(t.s(t.f("on",c,p,1),c,p,0,6799,6802,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                        onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                        data-interaction-type=\"dislike\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-thumbs-down\"></div>");t.b("\n" + i);if(t.s(t.d("interactionData.dislike",c,p,1),c,p,0,7057,7172,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_vote",c,p,1),c,p,0,7301,7838,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div");t.b("\n" + i);t.b("                        class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-vote");if(t.s(t.f("on",c,p,1),c,p,0,7398,7401,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" on");});c.pop();}t.b("\"");t.b("\n" + i);t.b("                        onClick=\"StacklaFluidWidget.interactionSend(this)\"");t.b("\n" + i);t.b("                        data-interaction-type=\"vote\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-triangle-up\"></div>");t.b("\n" + i);if(t.s(t.d("interactionData.vote",c,p,1),c,p,0,7650,7765,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-count\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("                    </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_sharing",c,p,1),c,p,0,7890,8068,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-link-share\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-share\"></div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_comments",c,p,1),c,p,0,8124,8301,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-interaction-comment\">");t.b("\n" + i);t.b("                        <div class=\"fs fs-comment\"></div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);});c.pop();}t.b("                </div>");t.b("\n" + i);if(t.s(t.f("show_sharing",c,p,1),c,p,0,8376,9222,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-list\">");t.b("\n" + i);t.b("                    <div class=\"fs fs-facebook\" onclick=\"StacklaFluidWidget.facebookShare(this);\"></div>");t.b("\n" + i);t.b("                    <div class=\"fs fs-twitter\" onclick=\"StacklaFluidWidget.twitterShare(this);\"></div>");t.b("\n" + i);t.b("                    <div class=\"fs fs-pinterest\" onclick=\"StacklaFluidWidget.pinterestShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\"></div>");t.b("\n" + i);t.b("                    <div class=\"fs fs-googleplus\" onclick=\"StacklaFluidWidget.googleShare(this);\"></div>");t.b("\n" + i);t.b("                    <div class=\"fs fs-linkedin\" onclick=\"StacklaFluidWidget.linkedInShare(this);\"></div>");t.b("\n" + i);t.b("                    <div class=\"fs fs-envelope\" onclick=\"StacklaFluidWidget.emailShare(this, '");t.b(t.v(t.f("share_text",c,p,0)));t.b("');\"></div>");t.b("\n" + i);t.b("                    <div class=\"fs fs-close js-");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-share-button\"></div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_products",c,p,1),c,p,0,9319,10922,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("products.0",c,p,1),c,p,0,9347,10894,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-products-wrap\">");t.b("\n" + i);if(t.s(t.f("products",c,p,1),c,p,0,9434,10849,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product\">");t.b("\n" + i);if(t.s(t.f("image_small_url",c,p,1),c,p,0,9530,9642,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <img class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-image\" src=\"");t.b(t.v(t.f("image_small_url",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-title-wrapper\">");t.b("\n" + i);if(t.s(t.f("tag",c,p,1),c,p,0,9768,9929,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-title\">");t.b("\n" + i);t.b("                            ");t.b(t.v(t.f("tag",c,p,0)));t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("description",c,p,1),c,p,0,9978,10153,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-description\">");t.b("\n" + i);t.b("                            ");t.b(t.v(t.f("description",c,p,0)));t.b("\n" + i);t.b("                        </div>");t.b("\n" + i);});c.pop();}t.b("                        <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-cta-wrapper\">");t.b("\n" + i);if(t.s(t.f("custom_url",c,p,1),c,p,0,10288,10506,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <a class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-cta\" href=\"");t.b(t.v(t.f("custom_url",c,p,0)));t.b("\" target=\"");t.b(t.v(t.f("target",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                                ");t.b(t.v(t.f("cta_text",c,p,0)));t.b("\n" + i);t.b("                            </a>");t.b("\n" + i);});c.pop();}if(t.s(t.f("price",c,p,1),c,p,0,10560,10741,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                            <span class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-product-price\">");t.b("\n" + i);t.b("                                ");t.b(t.v(t.f("price",c,p,0)));t.b("\n" + i);t.b("                            </span>");t.b("\n" + i);});c.pop();}t.b("                        </div>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}});c.pop();}if(t.s(t.f("show_comments",c,p,1),c,p,0,10971,12979,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-wrap ");if(t.s(t.d("interactionData.comments.on",c,p,1),c,p,0,11059,11061,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("on");});c.pop();}t.b("\">");t.b("\n" + i);t.b("                <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-title\">");t.b("\n" + i);t.b("                    Comments");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <ul class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-list\"></ul>");t.b("\n" + i);t.b("                <div");t.b("\n" + i);t.b("                    class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-load-button\"");t.b("\n" + i);t.b("                    value=\"Load More\"");t.b("\n" + i);t.b("                    onclick=\"StacklaFluidWidget.loadMoreComments(this);\">");t.b("\n" + i);t.b("                    View more comments");t.b("\n" + i);t.b("                    <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-load-icon fs fs-spinner fs-spin\"/>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <form class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-submit-wrapper\">");t.b("\n" + i);t.b("                    <textarea class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-textarea\"");t.b("\n" + i);t.b("                        data-default-height=\"44\"");t.b("\n" + i);t.b("                        placeholder=\"Your Comment...\"></textarea>");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-input-wrapper\">");t.b("\n" + i);t.b("                        <input class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-input\"");t.b("\n" + i);t.b("                                type=\"text\"");t.b("\n" + i);t.b("                                placeholder=\"Your Name\"");t.b("\n" + i);t.b("                                ");if(t.s(t.f("disallow_comment",c,p,1),c,p,0,12200,12219,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly=\"readonly\"");});c.pop();}t.b("\n" + i);t.b("                                value=\"");t.b(t.v(t.f("comment_user_input",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                        <button");t.b("\n" + i);t.b("                            type=\"button\"");t.b("\n" + i);t.b("                            class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-button\"");t.b("\n" + i);t.b("                            onclick=\"StacklaFluidWidget.postComment(this);\">");t.b("\n" + i);t.b("                            Submit");t.b("\n" + i);t.b("                        </button>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                    <div class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-message\">");t.b("\n" + i);t.b("                        <i class=\"");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-comments-user-message-icon fs fs-success\"></i>");t.b("\n" + i);t.b("                        <p>Your comment has been submitted for moderation and will appear soon!</p>");t.b("\n" + i);t.b("                    </div>");t.b("\n" + i);t.b("                </form>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"fs fs-close2 stacklapopup-close ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-close\">");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);if(t.s(t.f("show_nav_left",c,p,1),c,p,0,13138,13242,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"fs fs-arrow-left5 ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-left\">");t.b("\n" + i);t.b("    </div >");t.b("\n" + i);});c.pop();}if(t.s(t.f("show_nav_right",c,p,1),c,p,0,13284,13389,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"fs fs-arrow-right5 ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow ");t.b(t.v(t.f("class_prefix",c,p,0)));t.b("-arrow-right\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div\n    class=\"{{class_prefix}}-wrapper {{class_prefix}}-content-wrap {{layout}}\"\n    data-tile-id=\"{{id}}\"\n    data-widget-id={{widget_id}}>\n    <div class=\"{{class_prefix}}-inner-wrapper\">\n        {{#show_media}}\n        <div class=\"{{class_prefix}}-media-wrapper\">\n            {{#show_image}}\n            <div class=\"{{class_prefix}}-image-loading\">\n                <img class=\"{{class_prefix}}-image\" src=\"{{image}}\"/>\n            </div>\n            {{/show_image}}\n            {{#show_video}}\n            <div class=\"{{class_prefix}}-video-wrapper\">\n                {{#embed_url}}\n                {{#is_vimeo}}\n                <iframe\n                    src=\"//player.vimeo.com/video/{{embed_url}}\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_vimeo}}\n                {{#is_vine}}\n                <iframe\n                    src=\"{{embed_url}}/embed/simple\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_vine}}\n                {{#is_gplus}}\n                <iframe\n                    src=\"{{embed_url}}\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_gplus}}\n                {{#is_youtube}}\n                <iframe\n                    src=\"//www.youtube.com/embed/{{embed_url}}?autoplay=1\"\n                    allowfullscreen=\"allowFullScreen\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_youtube}}\n                {{#is_weibo}}\n                <iframe\n                    src=\"http://video.weibo.com/show?fid={{embed_url}}\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_weibo}}\n                {{/embed_url}}\n                {{#is_mp4}}\n                <video\n                    src=\"{{{mp4_url}}}\"\n                    controls\n                    autoplay\n                    preload=\"auto\"\n                    class=\"{{class_prefix}}-video-frame\"/>\n                {{/is_mp4}}\n                {{#is_unknown_video}}\n                    {{#image}}\n                    <div class=\"{{class_prefix}}-image-loading\">\n                        <img class=\"{{class_prefix}}-image\" src=\"{{image}}\"/>\n                        <a class=\"{{class_prefix}}-image-link\" target=\"_blank\" href=\"{{original_url}}\">\n                            <div class=\"fs fs-play tile-video-play\"></div>\n                        </a>\n                    </div>\n                    {{/image}}\n                {{/is_unknown_video}}\n            </div>\n            {{/show_video}}\n            {{#show_embed}}\n            <div class=\"{{class_prefix}}-embeded-wrapper\">{{{embed_html}}}</div>\n            {{/show_embed}}\n            {{#show_audio}}\n            <div class=\"{{class_prefix}}-image-loading\">\n                <img class=\"{{class_prefix}}-image\" src=\"{{image}}\"/>\n            </div>\n            <audio class=\"stacklapopup-audio-player video-js vjs-default-skin\"\n                controls\n                autoplay\n                width=\"300\"\n                height=\"30\"\n                preload=\"auto\">\n                {{#audio_files}}\n                <source src=\"{{url}}\" type=\"{{type}}\">\n                {{/audio_files}}\n            </audio>\n            {{/show_audio}}\n            {{#shouldShowHTML}}\n            <div class=\"{{class_prefix}}-html-wrapper\">\n                {{{html}}}\n            </div>\n            {{/shouldShowHTML}}\n        </div>\n        {{/show_media}}\n        <div class=\"{{class_prefix}}-content-wrapper {{#show_media}}half{{/show_media}}\">\n            <div class=\"{{class_prefix}}-main\">\n                <div class=\"{{class_prefix}}-avatar-wrapper\">\n                    {{#avatar}}\n                    <img class=\"{{class_prefix}}-avatar\" src=\"{{avatar}}\"/>\n                    {{/avatar}}\n                    <div class=\"{{class_prefix}}-name-wrapper\">\n                        {{#name}}\n                        {{#emoji}}\n                        <div class=\"{{class_prefix}}-name\">\n                            {{name}}\n                        </div>\n                        {{/emoji}}\n                        {{/name}}\n                        <div class=\"{{class_prefix}}-user-handle-timephrase\">\n                            {{#user_handle}}\n                            {{user_handle}}\n                            &nbsp;&bull;&nbsp;\n                            {{/user_handle}}\n                            {{#timephrase}}\n                            {{timephrase}}\n                            {{/timephrase}}\n                        </div>\n                    </div>\n                    <div class=\"{{class_prefix}}-network\">\n                        <div class=\"fs fs-{{network.id}}\" style=\"color: {{network.color}};\"></div>\n                    </div>\n                </div>\n                {{#title}}\n                {{#emoji}}\n                <div class=\"{{class_prefix}}-title\">\n                    {{{title}}}\n                </div>\n                {{/emoji}}\n                {{/title}}\n                {{#message}}\n                {{#emoji}}\n                <div class=\"{{class_prefix}}-message\">\n                    {{{message}}}\n                </div>\n                {{/emoji}}\n                {{/message}}\n                {{#show_tags}}\n                {{#myTags.0}}\n                <div class=\"{{class_prefix}}-tags-wrapper\">\n                    {{#myTags}}\n                    {{#shouldShowTagOnly}}\n                    <div class=\"{{class_prefix}}-tag\">\n                        {{tag}}\n                    </div>\n                    {{/shouldShowTagOnly}}\n                    {{#shouldShowLink}}\n                    <a class=\"{{class_prefix}}-tag-clickable\" href=\"{{custom_url}}\" target=\"{{target}}\">\n                        {{tag}}\n                    </a>\n                    {{/shouldShowLink}}\n                    {{/myTags}}\n                </div>\n                {{/myTags.0}}\n                {{/show_tags}}\n            </div>\n            {{#show_actions}}\n            <div class=\"{{class_prefix}}-actions\">\n                <div class=\"{{class_prefix}}-interaction-wrapper\">\n                    {{#show_likes}}\n                    <div\n                        class=\"{{class_prefix}}-interaction-like{{#on}} on{{/on}}\"\n                        onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                        data-interaction-type=\"like\">\n                        <div class=\"fs fs-thumbs-up\"></div>\n                        {{#interactionData.like}}\n                        <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        {{/interactionData.like}}\n                    </div>\n                    {{/show_likes}}\n                    {{#show_dislikes}}\n                    <div\n                        class=\"{{class_prefix}}-interaction-dislike{{#on}} on{{/on}}\"\n                        onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                        data-interaction-type=\"dislike\">\n                        <div class=\"fs fs-thumbs-down\"></div>\n                        {{#interactionData.dislike}}\n                        <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        {{/interactionData.dislike}}\n                    </div>\n                    {{/show_dislikes}}\n                    {{#show_vote}}\n                    <div\n                        class=\"{{class_prefix}}-interaction-vote{{#on}} on{{/on}}\"\n                        onClick=\"StacklaFluidWidget.interactionSend(this)\"\n                        data-interaction-type=\"vote\">\n                        <div class=\"fs fs-triangle-up\"></div>\n                        {{#interactionData.vote}}\n                        <span class=\"{{class_prefix}}-interaction-count\">{{count}}</span>\n                        {{/interactionData.vote}}\n                    </div>\n                    {{/show_vote}}\n                    {{#show_sharing}}\n                    <div class=\"{{class_prefix}}-interaction-link-share\">\n                        <div class=\"fs fs-share\"></div>\n                    </div>\n                    {{/show_sharing}}\n                    {{#show_comments}}\n                    <div class=\"{{class_prefix}}-interaction-comment\">\n                        <div class=\"fs fs-comment\"></div>\n                    </div>\n                    {{/show_comments}}\n                </div>\n                {{#show_sharing}}\n                <div class=\"{{class_prefix}}-share-list\">\n                    <div class=\"fs fs-facebook\" onclick=\"StacklaFluidWidget.facebookShare(this);\"></div>\n                    <div class=\"fs fs-twitter\" onclick=\"StacklaFluidWidget.twitterShare(this);\"></div>\n                    <div class=\"fs fs-pinterest\" onclick=\"StacklaFluidWidget.pinterestShare(this, '{{share_text}}');\"></div>\n                    <div class=\"fs fs-googleplus\" onclick=\"StacklaFluidWidget.googleShare(this);\"></div>\n                    <div class=\"fs fs-linkedin\" onclick=\"StacklaFluidWidget.linkedInShare(this);\"></div>\n                    <div class=\"fs fs-envelope\" onclick=\"StacklaFluidWidget.emailShare(this, '{{share_text}}');\"></div>\n                    <div class=\"fs fs-close js-{{class_prefix}}-share-button\"></div>\n                </div>\n                {{/show_sharing}}\n            </div>\n            {{/show_actions}}\n            {{#show_products}}\n            {{#products.0}}\n            <div class=\"{{class_prefix}}-products-wrap\">\n                {{#products}}\n                <div class=\"{{class_prefix}}-product\">\n                    {{#image_small_url}}\n                    <img class=\"{{class_prefix}}-product-image\" src=\"{{image_small_url}}\">\n                    {{/image_small_url}}\n                    <div class=\"{{class_prefix}}-product-title-wrapper\">\n                        {{#tag}}\n                        <div class=\"{{class_prefix}}-product-title\">\n                            {{tag}}\n                        </div>\n                        {{/tag}}\n                        {{#description}}\n                        <div class=\"{{class_prefix}}-product-description\">\n                            {{description}}\n                        </div>\n                        {{/description}}\n                        <div class=\"{{class_prefix}}-product-cta-wrapper\">\n                            {{#custom_url}}\n                            <a class=\"{{class_prefix}}-product-cta\" href=\"{{custom_url}}\" target=\"{{target}}\">\n                                {{cta_text}}\n                            </a>\n                            {{/custom_url}}\n                            {{#price}}\n                            <span class=\"{{class_prefix}}-product-price\">\n                                {{price}}\n                            </span>\n                            {{/price}}\n                        </div>\n                    </div>\n                </div>\n                {{/products}}\n            </div>\n            {{/products.0}}\n            {{/show_products}}\n            {{#show_comments}}\n            <div class=\"{{class_prefix}}-comments-wrap {{#interactionData.comments.on}}on{{/interactionData.comments.on}}\">\n                <div class=\"{{class_prefix}}-comments-title\">\n                    Comments\n                </div>\n                <ul class=\"{{class_prefix}}-comments-list\"></ul>\n                <div\n                    class=\"{{class_prefix}}-comments-load-button\"\n                    value=\"Load More\"\n                    onclick=\"StacklaFluidWidget.loadMoreComments(this);\">\n                    View more comments\n                    <i class=\"{{class_prefix}}-comments-load-icon fs fs-spinner fs-spin\"/>\n                </div>\n                <form class=\"{{class_prefix}}-comments-submit-wrapper\">\n                    <textarea class=\"{{class_prefix}}-comments-user-textarea\"\n                        data-default-height=\"44\"\n                        placeholder=\"Your Comment...\"></textarea>\n                    <div class=\"{{class_prefix}}-comments-user-input-wrapper\">\n                        <input class=\"{{class_prefix}}-comments-user-input\"\n                                type=\"text\"\n                                placeholder=\"Your Name\"\n                                {{#disallow_comment}}readonly=\"readonly\"{{/disallow_comment}}\n                                value=\"{{comment_user_input}}\">\n                        <button\n                            type=\"button\"\n                            class=\"{{class_prefix}}-comments-user-button\"\n                            onclick=\"StacklaFluidWidget.postComment(this);\">\n                            Submit\n                        </button>\n                    </div>\n                    <div class=\"{{class_prefix}}-comments-user-message\">\n                        <i class=\"{{class_prefix}}-comments-user-message-icon fs fs-success\"></i>\n                        <p>Your comment has been submitted for moderation and will appear soon!</p>\n                    </div>\n                </form>\n            </div>\n            {{/show_comments}}\n        </div>\n        <div class=\"fs fs-close2 stacklapopup-close {{class_prefix}}-close\">\n        </div>\n    </div>\n    {{#show_nav_left}}\n    <div class=\"fs fs-arrow-left5 {{class_prefix}}-arrow {{class_prefix}}-arrow-left\">\n    </div >\n    {{/show_nav_left}}\n    {{#show_nav_right}}\n    <div class=\"fs fs-arrow-right5 {{class_prefix}}-arrow {{class_prefix}}-arrow-right\">\n    </div>\n    {{/show_nav_right}}\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ }
]));