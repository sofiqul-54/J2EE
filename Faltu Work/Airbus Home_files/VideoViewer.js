
/*!************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
if(typeof s7viewers == "undefined"){
	s7viewers = {};
}else if(typeof s7viewers != "object"){
	throw new Error("Cannot initialize a root 's7viewers' package. s7viewers is not an object");
}

if(!s7viewers.VideoViewer){
	(function(){
		var s7sdk;
		s7viewers.VideoViewer = function (inObj) {
			this.sdkBasePath = 'js/VideoViewer/';
			this.viewerFileName = "VideoViewer.js";
			this.cssSrcURL = "VideoViewer.css";
			this.utilsFilePath = "js/s7sdk/utils/Utils.js";
			this.containerId = null;
			this.params = {};
			this.handlers = [];
			this.onInitComplete = null;
			this.onInitFail = null;
			this.initializationComplete = false;
			this.initCalled = false;
			this.firstMediasetParsed = false;
			this.isDisposed = false;
			this.utilsScriptElm = null;
			this.fixinputmarker = null;
			
			if (typeof inObj == "object"){
				if (inObj.containerId) {
					this.setContainerId(inObj.containerId);
				}
				if (inObj.params) {
					for(var param in inObj.params) {
						if(inObj.params.hasOwnProperty(param) && inObj.params.propertyIsEnumerable(param)) {
							this.setParam(param,inObj.params[param]);
						}
					}
				}
				if (inObj.handlers) {
					this.setHandlers(inObj.handlers);
				}
				if (inObj.localizedTexts) {
					this.setLocalizedTexts(inObj.localizedTexts);
				}
			}		
		};
		
		s7viewers.VideoViewer.cssClassName = "s7videoviewer";

		s7viewers.VideoViewer.prototype.modifiers = {
		};

		s7viewers.VideoViewer.prototype.setContainerId = function (inElemId) {
			if (this.isDisposed) return;
			this.containerId = inElemId || null;
		};
		
		s7viewers.VideoViewer.getCodeBase = function() {
			var contentUrl = "";
			var viewerPath = "";
			var scriptTags = null;
			if (document.scripts){
				scriptTags = document.scripts;
			} else {
				scriptTags = document.getElementsByTagName("script");
			}

			for(var i=0; i<scriptTags.length;i++){
				var src = scriptTags[i].src;
				var result = /^\s*(http[s]?:\/\/[^\/]*)?(.*)(\/(js|js_orig)\/VideoViewer\.js)/.exec(src);
				if (result && result.length == 5) {
					if ( typeof result[1] !== 'undefined' ) {
						contentUrl = result[1];
					}
					contentUrl += result[2];
					viewerPath = src;
					break;
				 }
			}
			if ((contentUrl != '') && (contentUrl.lastIndexOf('/') != contentUrl.length - 1)) {
				contentUrl += '/';
			}
			
			var codebaseRegEx = /\/etc\/dam\/viewers\//;
			s7viewers.VideoViewer.codebase = {"contentUrl": contentUrl, "isDAM": codebaseRegEx.test(viewerPath)};
			
		};
		s7viewers.VideoViewer.getCodeBase();
		
		s7viewers.VideoViewer.prototype.getContentUrl = function () {
			return s7viewers.VideoViewer.codebase.contentUrl;
		};

		s7viewers.VideoViewer.prototype.includeViewer = function () {
			s7sdk.Util.lib.include("s7sdk.common.Button");
			s7sdk.Util.lib.include("s7sdk.common.Container");
			s7sdk.Util.lib.include("s7sdk.event.Event");
			s7sdk.Util.lib.include("s7sdk.video.VideoControls");
			s7sdk.Util.lib.include("s7sdk.video.VideoPlayer");
			s7sdk.Util.lib.include("s7sdk.common.ControlBar");
			s7sdk.Util.lib.include("s7sdk.set.MediaSet");
			s7sdk.Util.lib.include("s7sdk.share.Share");

			this.s7params = new s7sdk.ParameterManager(null, null, {"asset" : "MediaSet.asset" },this.getContentUrl() + this.cssSrcURL);
			var viewerName = ""; 
			if (this.s7params.params.config && (typeof(this.s7params.params.config) == "string")) {
				viewerName = ",";
				if (this.s7params.params.config.indexOf("/") > -1) {
					viewerName += this.s7params.params.config.split('/')[1];
				} else 
					viewerName += this.s7params.params.config;
			}
			this.s7params.setViewer("506,5.7.1" + viewerName);

			for(var prm in this.params){
				if (prm != "localizedTexts"){
					this.s7params.push(prm, this.params[prm]);
				}else{
					this.s7params.setLocalizedTexts(this.params[prm]);
				}
			}

			this.trackingManager = new s7sdk.TrackingManager();

			this.mediaSet = null;
			this.container = null; 
			this.videoplayer = null;
			this.controls = null;
			this.playPauseButton = null;
			this.videoScrubber = null;
			this.videoTime = null;
			this.mutableVolume = null;
			this.fullScreenButton = null;
			this.closedCaptionButton = null
			this.storedPlayingState = false;
			
			this.socialShare = null;
			this.emailShare = null;
			this.embedShare = null;
			this.linkShare = null;
			this.twitterShare = null;
			this.facebookShare = null;
			this.captionButtonPosition = null;
			this.volumeButtonPosition = null;
			this.videoTimePosition = null;
			this.isCaption = true;
			this.curCaption = null;
			this.storedCaptionEnabled = null;
			this.isNavigation = null;
            this.isPosterImage = null;
			this.fixTrackCSS = false;
			this.controlsDivID = null;
			this.storedSocialShareDisplayProp = null;
			
			this.supportsInline = null;
			
			this.isOrientationMarkerForcedChanged = false;
			
			var self = this;

			function initViewer(){
				
				self.s7params.push("aemmode",  s7viewers.VideoViewer.codebase.isDAM  ? "1" : "0");
				
				var containerDivID = self.containerId + "_container";
				controlsDivID = self.containerId + "_controls";
				self.s7params.push("autoplay", "0");
				self.s7params.push("singleclick", "playPause");
				self.s7params.push("iconeffect", "1,-1,0.3,0");
				self.s7params.push('bearing', 'fit-vertical');
				self.s7params.push("initialbitrate", "1400");

			/*get fixinputmarker*/
			var fixinputmarkerParam = self.getParam("fixinputmarker");
			if (fixinputmarkerParam) {
				self.fixinputmarker = (fixinputmarkerParam == "s7touchinput" || fixinputmarkerParam == "s7mouseinput") ? self.fixinputmarker = fixinputmarkerParam : null;
			};
			
			var urlParam = self.getURLParameter("fixinputmarker");
			if (urlParam){
				self.fixinputmarker = (urlParam == "s7touchinput" || urlParam == "s7mouseinput") ? self.fixinputmarker = urlParam : null;;
			};
			/*some code...*/
			if (self.fixinputmarker){
				if(self.fixinputmarker === "s7mouseinput"){
					self.addClass(self.containerId,"s7mouseinput");
				}else if(self.fixinputmarker === "s7touchinput"){
					self.addClass(self.containerId,"s7touchinput");
				}
			}else{
				// Create a viewer Container
				if (s7sdk.browser.supportsTouch()){
					self.addClass(self.containerId,"s7touchinput");
				}else{
					self.addClass(self.containerId,"s7mouseinput");
				}
			}

				self.parseMods();
				
				self.container = new s7sdk.common.Container(self.containerId, self.s7params, containerDivID);
				if(self.container.isInLayout()){
					completeInitViewer();
				} else {
					self.container.addEventListener(s7sdk.event.ResizeEvent.ADDED_TO_LAYOUT, completeInitViewer, false);
				}
			}
			
			function completeInitViewer(){
				
				self.container.removeEventListener(s7sdk.event.ResizeEvent.ADDED_TO_LAYOUT, completeInitViewer, false);			
				
				// work-around for webkit issue with applying height:100% to the containing element
				var containerDiv = document.getElementById(self.containerId);
				var tempMinHeight = containerDiv.style.minHeight;
				containerDiv.style.minHeight = "1px";

				var testdiv = document.createElement("div");
				testdiv.style.position = "relative";
				testdiv.style.width = "100%";
				testdiv.style.height = "100%";
				containerDiv.appendChild(testdiv);
				var emptyViewerHeight = testdiv.offsetHeight;
				if (testdiv.offsetHeight <= 1){
					containerDiv.style.height = "100%";
					emptyViewerHeight = testdiv.offsetHeight;
				}
				containerDiv.removeChild(testdiv);
				containerDiv.style.minHeight = tempMinHeight;

				var responsive = false;
				switch(self.s7params.get("responsive", "auto")){
					case "fit":
						responsive = false;
						break;
					case "constrain":
						responsive = true;
						break;
					default :
						responsive = emptyViewerHeight == 0;
						break;
				}
				self.updateCSSMarkers();
				self.updateOrientationMarkers();
				if(self.container.isFixedSize()) { // free
					self.viewerMode = "fixed";
				} else {
					if(responsive) { // restrict
						self.viewerMode = "ratio";
					} else {
						self.viewerMode = "free";
					}
				}

				// Create MediaSet
				self.mediaSet = new s7sdk.MediaSet(null, self.s7params, self.containerId+"_mediaSet");
				// Create the VideoPlayer
				self.videoplayer = new s7sdk.video.VideoPlayer(self.container, self.s7params, self.containerId + "_videoPlayer");
				self.trackingManager.attach(self.videoplayer);
				// Create the ControlBar
				self.controls = new s7sdk.common.ControlBar(self.container, self.s7params, controlsDivID);
				self.controls.setCSS(".s7controlbar", "visibility", "hidden");

				self.controls.attachView(self.videoplayer, false);
				// Create the PlayPauseButton
				self.playPauseButton = new s7sdk.common.PlayPauseButton(controlsDivID, self.s7params, self.containerId + "_playPauseButton");
				// Create the VideoScrubber
				self.videoScrubber = new s7sdk.video.VideoScrubber(controlsDivID, self.s7params, self.containerId + "_videoScrubber");
				//check if css contains 'width:310px' || 'width:365px' style for track of VideoScrubber (fixed issue S7-5594, S7-6006).
				self.fixTrackCSS = 
					(s7sdk.Util.getStyle(self.videoScrubber.component.track, "width") == "310px") || 
					(s7sdk.Util.getStyle(self.videoScrubber.component.track, "width") == "365px");
				// Create the VideoTime
				self.videoTime = new s7sdk.VideoTime(controlsDivID, self.s7params, self.containerId + "_videoTime");
				// Create the MutableVolume
				self.mutableVolume = new s7sdk.video.MutableVolume(controlsDivID, self.s7params, self.containerId + "_mutableVolume");
				// Create the FullScreenButton
				self.fullScreenButton = new s7sdk.common.FullScreenButton(controlsDivID, self.s7params, self.containerId + "_fullScreenButton");
				// Create the ClosedCaptionButton
				self.closedCaptionButton = new s7sdk.common.ClosedCaptionButton(controlsDivID, self.s7params, self.containerId + "_closedCaptionButton");
				self.closedCaptionButton.addEventListener("click", clickClosedCaptionButton);
				self.closedCaptionButton.setSelected(self.videoplayer.getCaptionEnabled());
				self.videoplayer.setCaptionEnabled(self.videoplayer.getCaptionEnabled());
				self.storedCaptionEnabled = self.videoplayer.getCaptionEnabled();
				self.captionButtonPosition = getDeepCSS(document.getElementById(self.containerId + "_closedCaptionButton"), "right");
				self.captionButtonPosition =  Number(self.captionButtonPosition.substring(0, self.captionButtonPosition.length - 2));
				self.volumeButtonPosition = getDeepCSS(document.getElementById(self.containerId + "_mutableVolume"), "right");
				self.volumeButtonPosition =  Number(self.volumeButtonPosition.substring(0, self.volumeButtonPosition.length - 2));
				self.videoTimePosition = getDeepCSS(document.getElementById(self.containerId + "_videoTime"), "right");
				self.videoTimePosition =  Number(self.videoTimePosition.substring(0, self.videoTimePosition.length - 2));
				if (!self.s7params.get("caption")) {
					self.isCaption = false;
				} else {
					self.curCaption = self.s7params.params.caption;
				}
				if (self.s7params.get("navigation")) {
					self.isNavigation = self.s7params.get("navigation"); // needed for embedshare to include navigation data
				}
				
				// Create SocialShare
				self.socialShare = new s7sdk.share.SocialShare(self.container, self.s7params, self.containerId + "_socialShare");
				if (s7sdk.browser.device.name != "iphone") {
					self.controls.attach(self.socialShare);
				}
				self.emailShare = new s7sdk.share.EmailShare(self.containerId + "_socialShare", self.s7params, self.containerId + "_emailShare");
				self.embedShare = new s7sdk.share.EmbedShare(self.containerId + "_socialShare", self.s7params, self.containerId + "_embedShare");
				self.linkShare = new s7sdk.share.LinkShare(self.containerId + "_socialShare", self.s7params, self.containerId + "_linkShare");
				self.twitterShare = new s7sdk.share.TwitterShare(self.containerId + "_socialShare", self.s7params, self.containerId + "_twitterShare");
				self.facebookShare = new s7sdk.share.FacebookShare(self.containerId + "_socialShare", self.s7params, self.containerId + "_facebookShare"); 
				self.emailShare.addEventListener(s7sdk.event.SocialEvent.NOTF_SOCIAL_ACTIVATED, onSocialActivated, false);
				self.embedShare.addEventListener(s7sdk.event.SocialEvent.NOTF_SOCIAL_ACTIVATED, onSocialActivated, false);
				self.linkShare.addEventListener(s7sdk.event.SocialEvent.NOTF_SOCIAL_ACTIVATED, onSocialActivated, false);
				self.twitterShare.addEventListener(s7sdk.event.SocialEvent.NOTF_SOCIAL_ACTIVATED, onSocialActivated, false);
				self.facebookShare.addEventListener(s7sdk.event.SocialEvent.NOTF_SOCIAL_ACTIVATED, onSocialActivated, false);
				/* This block is to disable auto-hide of socialShare panel if mouse cursor is over it.*/
				self.socialShare.addEventListener("mouseover", function(event) { 
					self.controls.allowAutoHide(false);
				});
				self.socialShare.addEventListener("mouseout", function(event) { 
					self.controls.allowAutoHide(true);
				});

				// Pass parameters to Social elements
				self.linkShare.setContentUrl(document.URL); 
				self.emailShare.setOriginUrl(window.location.hostname);
				self.emailShare.setContentUrl(document.URL);
				self.supportsInline = self.videoplayer.supportsInline();
				
				self.socialShare.addTrackedComponent(self.controls);

				// ====================================== Event Listeners ====================================== //
				
				// Add MediaSet event listeners
				self.mediaSet.addEventListener(s7sdk.AssetEvent.NOTF_SET_PARSED, onSetParsed, false);
				// Add Container event listeners
				self.container.addEventListener(s7sdk.event.ResizeEvent.COMPONENT_RESIZE, onContainerResize,false);
				self.container.addEventListener(s7sdk.event.ResizeEvent.FULLSCREEN_RESIZE, onContainerFullScreen,false);
				self.container.addEventListener(s7sdk.event.ResizeEvent.REMOVED_FROM_LAYOUT, onRemovedFromLayout, false);
				self.container.addEventListener(s7sdk.event.ResizeEvent.ADDED_TO_LAYOUT, onAddedToLayout, false);
				self.container.addEventListener(s7sdk.event.ResizeEvent.SIZE_MARKER_CHANGE, onContainerSizeMarkerChange,false);	
				// Add VideoPlayer event listeners
				self.videoplayer.addEventListener(s7sdk.event.CapabilityStateEvent.NOTF_VIDEO_CAPABILITY_STATE, onVideoCapabilityStateChange, false);
				self.videoplayer.addEventListener(s7sdk.event.VideoEvent.NOTF_DURATION, onVideoDuration, false);
				self.videoplayer.addEventListener(s7sdk.event.VideoEvent.NOTF_LOAD_PROGRESS, onVideoLoadProgress, false);
				self.videoplayer.addEventListener(s7sdk.event.VideoEvent.NOTF_CURRENT_TIME, onVideoCurrentTime, false);
				self.videoplayer.addEventListener(s7sdk.event.VideoEvent.NOTF_NAVIGATION, onVideoNavigation, false);
				// Add PlayPauseButton event listeners
				self.playPauseButton.addEventListener("click", onPlayPauseButtonClick);
				// Add VideoScrubber event listeners
				//self.videoScrubber.addEventListener(s7viewers.s7sdk.SliderEvent.NOTF_SLIDER_DOWN, onNotifyScrubberEvent, false);
				//self.videoScrubber.addEventListener(s7viewers.s7sdk.SliderEvent.NOTF_SLIDER_MOVE, onNotifyScrubberEvent, false);
				self.videoScrubber.addEventListener(s7sdk.SliderEvent.NOTF_SLIDER_UP, onNotifyScrubberEvent, false);
				// Add MutableVolume event listeners
				self.mutableVolume.addEventListener("click", onMuteButtonClick);
				self.mutableVolume.addEventListener(s7sdk.SliderEvent.NOTF_SLIDER_DOWN, onVolumeDown, false);
				self.mutableVolume.addEventListener(s7sdk.SliderEvent.NOTF_SLIDER_MOVE, onVolumeMove, false);
				self.mutableVolume.addEventListener(s7sdk.SliderEvent.NOTF_SLIDER_UP, onVolumeMove, false);
				// Add FullScreenButton event listeners
				self.fullScreenButton.addEventListener("click", onFullScreenButtonClick);
				// Add tracking callback
				self.trackingManager.setCallback(proxyTrack);
				if ((typeof(AppMeasurementBridge) == "function") && (self.isConfig2Exist == true)){
					self.appMeasurementBridge = new AppMeasurementBridge(self.trackingParams);
					self.appMeasurementBridge.setVideoPlayer(self.videoplayer);
				}
				if(self.viewerMode == "ratio"){
					containerDiv.style.height = "auto";                
				}
                if(self.container.getWidth()>0 && self.container.getHeight()>0) resizeViewer(self.container.getWidth(), self.container.getHeight());
				// ====================================== Event Handlers ====================================== //
				function proxyTrack(objID, compClass, instName, timeStamp, eventInfo) {
					if (self.appMeasurementBridge) {
						self.appMeasurementBridge.track(objID, compClass, instName, timeStamp, eventInfo);
					}
					if (self.handlers["trackEvent"]) {
                        if (typeof window.s7sdk == "undefined") {
                            window.s7sdk = s7sdk;
                        }
						self.handlers["trackEvent"](objID, compClass, instName, timeStamp, eventInfo)
					}
					if ("s7ComponentEvent" in window) {
						s7ComponentEvent(objID, compClass, instName, timeStamp, eventInfo);
					}
				}

				function onSocialActivated (event) {
						self.videoplayer.pause();
				}	
				
				// MediaSet Event Handlers
				function onSetParsed(event) {
					var mediasetDesc = event.s7event.asset;
					
					// just in case, check what is returned is of type MediaSetDesc
					if (mediasetDesc instanceof s7sdk.MediaSetDesc) {
						if(self.viewerMode == "ratio"){
							var itm = mediasetDesc.items[0];
							var assetRatio = itm.width/itm.height;
							self.container.setModifier({ "aspect": assetRatio });
						}
						if (mediasetDesc.type == s7sdk.ItemDescType.VIDEO_SET || mediasetDesc.type == s7sdk.ItemDescType.VIDEO_GROUP) {
							// MBR set
							self.videoplayer.setItem(mediasetDesc);
						}
						else {
							// single video
							self.videoplayer.setItem(mediasetDesc.items[0]);
						}
						if (self.curCaption) {
							self.videoplayer.setModifier({ "caption": self.curCaption });
						}
						if (self.isNavigation) {
							self.videoplayer.setModifier({ "navigation": self.isNavigation });
						}
                        if (self.isPosterImage) {
							self.videoplayer.setModifier({ "posterimage": self.isPosterImage });
						}
					}
					else
						throw new Error("Failed to get meta data for video: " + event.s7event.asset);
					handleButtonsVisibility();
					
					resizeViewer(self.container.getWidth(), self.container.getHeight());

					if (self.emailShare) self.emailShare.setThumbnail(event.s7event.asset.name);
					if (self.embedShare) self.embedShare.setEmbedCode(getTemplateForViewer());
					if ((self.handlers["initComplete"] != null) && (typeof self.handlers["initComplete"] == "function") && !self.firstMediasetParsed){
                        if (typeof window.s7sdk == "undefined") {
                            window.s7sdk = s7sdk;
						}
						self.handlers["initComplete"]();
					}
					self.firstMediasetParsed = true;
					self.controls.setCSS(".s7controlbar", "visibility", "inherit");
				}

				// Container Event Handlers
				function onContainerResize(event) {
					if((typeof(event.target) == 'undefined') || (event.target == document.getElementById(self.containerId+"_container"))) {
						if(!self.container.isInLayout()){
							return;
						}					
						resizeViewer(event.s7event.w, event.s7event.h);
						self.fullScreenButton.setSelected(self.container.isFullScreen());
					}
				}
				function onContainerFullScreen(event) {
					resizeViewer(event.s7event.w, event.s7event.h);
					self.fullScreenButton.setSelected(self.container.isFullScreen());
					//When viewer goes full screen, onFullScreenEnter call back should be executed; 
					//when viewer backs to normal mode, onFullScreenExit should be called.
					if (!self.container.isFullScreen()){
						self.onFullScreenExit(event);
					} else {
						self.onFullScreenEnter(event);
					}					
				}

				function onContainerSizeMarkerChange(event) {
					self.updateCSSMarkers();
				}

				function onAddedToLayout(event){
					if (s7sdk.browser.device.name != "desktop"){
						//
					}else{
						if (self.storedPlayingState) {
							self.videoplayer.play();
							self.storedPlayingState = false;
						}
					}
				}
				function onRemovedFromLayout(event){
					if (s7sdk.browser.device.name != "desktop"){
						//
					}else{
						//
					}
					if (self.videoplayer.getCapabilityState().hasCapability(s7sdk.VideoCapabilityState.PAUSE)) {
						self.storedPlayingState = true;
						s7sdk.Logger.log(s7sdk.Logger.INFO, "Pause video");
						self.videoplayer.pause();
					}
				}
				// VideoPlayer Event Handlers
				function onVideoCapabilityStateChange(event){
					//self.playPauseButton.setSelected(event.s7event.state.hasCapability(s7viewers.s7sdk.VideoCapabilityState.PLAY));	
					var cap = event.s7event.state;
					if (cap.hasCapability(s7sdk.VideoCapabilityState.PAUSE)) {
						self.playPauseButton.setSelected(false);
					}
					else if (cap.hasCapability(s7sdk.VideoCapabilityState.PLAY) || cap.hasCapability(s7sdk.VideoCapabilityState.REPLAY)) {
						// pause or stop
						self.playPauseButton.setSelected(true);
					}				
					self.playPauseButton.enableReplay(cap.hasCapability(s7sdk.VideoCapabilityState.REPLAY));
				}
				function onVideoDuration(event){
					self.videoTime.setDuration(event.s7event.data);					
					self.videoScrubber.setDuration(event.s7event.data);
				}
				function onVideoLoadProgress(event){
					self.videoScrubber.setLoadedPosition(event.s7event.data);
				}
				function onVideoCurrentTime(event){
					self.videoTime.setPlayedTime(event.s7event.data);
					self.videoScrubber.setPlayedTime(event.s7event.data);
				}
				function onVideoNavigation(event) {
					self.videoScrubber.setNavigation(event.s7event.data);
				}
				// PlayPauseButton Event handlers
				function onPlayPauseButtonClick(event) { 
					if (!self.playPauseButton.isSelected()) {
						// IF the video is over, restart from the beginning
						var rem = self.videoplayer.getDuration() - self.videoplayer.getCurrentTime();	// Time remaining
						if (rem <= 1){
							self.videoplayer.seek(0);
						}
						self.videoplayer.play();
					}
					else {
						self.videoplayer.pause();
					}
				}
				// VideoScrubber Event Handlers
				function onNotifyScrubberEvent(event) {
					self.videoplayer.seek(event.s7event.position * self.videoplayer.getDuration());
				}
				// MutableVolume Event Handlers
				function onMuteButtonClick(event) {
					if(self.mutableVolume.isSelected()){
						self.videoplayer.mute();
					}else{
						self.videoplayer.unmute();
						self.videoplayer.setVolume(self.mutableVolume.getPosition());
					}
				}
				function onVolumeDown(event){
					self.videoplayer.unmute();	// Make sure the player isn't muted as soon as the user start to change volume
				}
				function onVolumeMove(event){
					self.videoplayer.setVolume(event.s7event.position);
				}
				// FullScreenButton Event Handlers
				function onFullScreenButtonClick(event) { 
					if (!self.container.isFullScreen()){
						self.container.requestFullScreen();
					}
					else {
						self.container.cancelFullScreen();
					}					
				}
				// Add ClosedCaption enable/disable feature.
				function clickClosedCaptionButton() {
					self.videoplayer.setCaptionEnabled(self.closedCaptionButton.isSelected());
				}			
				
				// Generate template for EmbedShare
				function getTemplateForViewer() {
					// NOTE: The following use of .component is a work-around for retrieving modifier values from core component.  This should be fixed in future releases	to retrieve values use an API on the control level.
					var tempStr = "";
					if (self.s7params.params.style !="" && self.s7params.params.style != undefined) tempStr = '    videoViewer.setParam("style", "'+ self.s7params.params.style +'"); \n';
					if (self.isCaption && self.curCaption != "" && self.curCaption != undefined) tempStr += '    videoViewer.setParam("caption", "'+ self.curCaption+'"); \n';
					if (self.isNavigation && self.isNavigation != "" && self.isNavigation != undefined) tempStr += '    videoViewer.setParam("navigation", "'+ self.isNavigation+'"); \n';
					var config = "";
					if (self.s7params.params.config !="" && self.s7params.params.config != undefined) {
						config = '    videoViewer.setParam("config", "'+ self.s7params.params.config +'"); \n';
					}
					var config2 = "";
					if (self.s7params.params.config2 != "" && self.s7params.params.config2 != undefined) 
						config2 = '		videoViewer.setParam("config2", "' + self.s7params.params.config2 + '"); \n';
					
					var template =
								'<'+'script language="javascript" type="text/javascript" src="' + (s7viewers.VideoViewer.codebase.contentUrl +"js/"+ self.viewerFileName) + '"><'+'/script> \n'+     
								'<'+'div id="' +self.containerId+ '"><'+'/div> \n'+
								'<'+'script type="text/javascript"> \n'+
								'    var videoViewer = new s7viewers.VideoViewer(); \n'+
								'    videoViewer.setParam("videoserverurl", "' + makeAbsolutePath(self.videoplayer.component.videoServerUrl) + '"); \n'+
								'    videoViewer.setParam("serverurl", "'+ makeAbsolutePath(self.videoplayer.component.serverUrl) +'"); \n'+
								'    videoViewer.setParam("contenturl", "' + makeAbsolutePath(self.s7params.get("contenturl","/is/content")) + '"); \n'+
								tempStr +
								'    videoViewer.' + (self.mediaSet.component.asset != "" ? 'setAsset("' + self.mediaSet.component.asset : 'setVideo("' + self.videoplayer.getCurrentAsset() ) + '"); \n'+
								'    videoViewer.setParam("stagesize", "$EMBED_WIDTH$,$EMBED_HEIGHT$"); \n'+
								'	 videoViewer.setParam("emailurl", "' + makeAbsolutePath(self.emailShare.component.emailurl) + '"); \n'+
								config +
								config2 +
								'	 videoViewer.setContainerId("' +self.containerId+ '"); \n'+
								'	 videoViewer.init(); \n'+
								'<'+'/script> \n';
					return template;
				}

				function makeAbsolutePath(url) {
					if (url && ((url.indexOf("http://") == 0) || (url.indexOf("https://") == 0))) {
						return url;
					}

					var absUrl = document.location.protocol + "//" + document.location.host;

					if (!url || url.indexOf('/') != 0) {
						absUrl += "/";
					}

					if (url) {
						absUrl += url;
					}
					return absUrl;
				}

				// ====================================== UI Layout Helper Functions ====================================== //
				
				// UI Layout Helper Functions
				
				function resizeViewer(w,h){
					self.updateOrientationMarkers();
					self.videoplayer.resize(w, h);
					self.controls.resize(w, self.controls.getHeight());
					updateControlsWidth(w);
				}
				function updateControlsWidth(w) {
					if (self.supportsInline != true){
						return;
					}

					var videoControlsObj = document.getElementById(self.containerId + "_controls");
					var prevState = s7sdk.Util.getStyle(videoControlsObj, "display");
					videoControlsObj.style.display  = 'block';
					
					self.videoTime.autoSize();

					var bcr_playPauseButton = document.getElementById(self.containerId + "_playPauseButton").getBoundingClientRect();
					var bcr_videoTime = document.getElementById(self.containerId + "_videoTime").getBoundingClientRect();
					var bcr_videoScrubber = document.getElementById(self.containerId + "_videoScrubber").getBoundingClientRect();
					self.videoScrubber.resize(bcr_videoTime.left - bcr_playPauseButton.right - 10, (bcr_videoScrubber.bottom - bcr_videoScrubber.top));				

					videoControlsObj.style.display  = prevState;
					
					handleFullScreen();
					handleButtonsVisibility();
				}
				function handleFullScreen () {
					if (self.container.isPopup() && !self.container.isFixedSize() &&!self.container.supportsNativeFullScreen()) {
						self.fullScreenButton.setCSS(".s7fullscreenbutton", "display", "none");
					}
				}
				function handleButtonsVisibility () {

					var volFlag = self.videoplayer.supportsVolumeControl();
					var videoTimeRight;
					var bcr_playPauseButton = document.getElementById(self.containerId + "_playPauseButton").getBoundingClientRect();
					var videoTimeRight;
					if(!volFlag && !self.isCaption) {
						self.mutableVolume.setCSS(".s7mutablevolume", "display", "none");

						self.closedCaptionButton.setCSS(".s7closedcaptionbutton", "display", "none");
						videoTimeRight = self.volumeButtonPosition;
					}
					else {
						if(!volFlag) {
							self.mutableVolume.setCSS(".s7mutablevolume", "display", "none");
							videoTimeRight = self.captionButtonPosition;
							self.closedCaptionButton.setCSS(".s7closedcaptionbutton", "right", self.volumeButtonPosition + "px");
						}
						if(!self.isCaption) {
							self.closedCaptionButton.setCSS(".s7closedcaptionbutton", "display", "none");
							videoTimeRight = self.captionButtonPosition;
						}
						else {
							self.closedCaptionButton.setCSS(".s7closedcaptionbutton", "display", "block");
							if (!volFlag) {
								videoTimeRight = self.captionButtonPosition;
							}
							else {
								videoTimeRight = self.videoTimePosition;
							}
						}
					}
					self.videoTime.setCSS(".s7videotime", "right", videoTimeRight + "px");
					//resize track of VideoScrubber if css contains 'width'=310px for it (fixed issue S7-5594).
					if (self.fixTrackCSS)
						self.videoScrubber.setCSS('.s7videoscrubber .s7track','width', (document.getElementById(self.containerId + "_videoTime").getBoundingClientRect().left - bcr_playPauseButton.right - 10) + "px");

					self.videoScrubber.resize(document.getElementById(self.containerId + "_videoTime").getBoundingClientRect().left - bcr_playPauseButton.right - 10, document.getElementById(self.containerId + "_videoScrubber").getBoundingClientRect().height);			
				}

				// Helper for getting computed CSS Styles
				function getDeepCSS (element, css){
					var dv, sty, val;
					if(element && element.style){
						css= css.toLowerCase();
						sty= css.replace(/\-([a-z])/g, function(a, b){
							return b.toUpperCase();
						});
						val= element.style[sty];
						if(!val){
							dv= document.defaultView || window;
							if(dv.getComputedStyle){
								val= dv.getComputedStyle(element,'').getPropertyValue(css);
							}
							else if(element.currentStyle){
								val= element.currentStyle[sty];
							}
						}
					}
					return val || '';
				}
				
				if(self.supportsInline){
					// If the platform supports inline playback (embedded on the page), update the controlbar layout.
					var cW = self.container.getWidth();
					updateControlsWidth(cW);
				}
				else
				{
					// IF inline playback isn't available (iPhone, etc.), hide the controlbar.
					self.controls.setCSS(".s7controlbar", "display", "none");
				}
				
				if ((self.onInitComplete != null) && (typeof self.onInitComplete == "function")){
					self.onInitComplete();
				}
				if(!self.s7params.get("asset", null, "MediaSet")) {
					handleButtonsVisibility();
					if (self.embedShare) self.embedShare.setEmbedCode(getTemplateForViewer());
					if ((self.handlers["initComplete"] != null) && (typeof self.handlers["initComplete"] == "function")){
						self.handlers["initComplete"]();
					}
					self.controls.setCSS(".s7controlbar", "visibility", "inherit");
				}
			} // End initViewer()

			this.s7params.addEventListener(s7sdk.Event.SDK_READY, function(){ self.initSiteCatalyst(self.s7params,initViewer); },false);
			this.s7params.init();	
		};

		s7viewers.VideoViewer.prototype.setParam = function(key, def){
			if (this.isDisposed) return;
			this.params[key] = def;	
		};

		s7viewers.VideoViewer.prototype.getParam = function(key){
			var keyLC = key.toLowerCase();
            for (var paramsKey in this.params) {
                if (paramsKey.toLowerCase() == keyLC) {
                    return this.params[paramsKey];
                }
            }
            return null; 
		};

		s7viewers.VideoViewer.prototype.setParams = function(inParams){
			if (this.isDisposed) return;
			var params = inParams.split("&");
			for (var i = 0; i < params.length; i++) {
				var pair = params[i].split("=");
				if (pair.length > 1) {
					this.setParam(pair[0],decodeURIComponent(params[i].split("=")[1]));
				}
			}
		};
		
		s7viewers.VideoViewer.prototype.s7sdkUtilsAvailable = function(){
			if (s7viewers.VideoViewer.codebase.isDAM) {
				return typeof(s7viewers.s7sdk) != "undefined";
			} else {
				return (typeof(s7classic) != "undefined") && (typeof(s7classic.s7sdk) != "undefined");
			}
		};
		
		s7viewers.VideoViewer.prototype.resize = function(w, h){
			this.container.resize(w, h);
		};
		
		s7viewers.VideoViewer.prototype.init = function(){
			if (this.isDisposed) return;
			if (this.initCalled) return;
			this.initCalled = true;
			if (this.initializationComplete) return this;

			// Make sure the viewer container has a CSS class name above the basic videoplayer and SDK component names
			var containerDiv = document.getElementById(this.containerId);
			if (containerDiv){
				if (containerDiv.className != ""){
					if (containerDiv.className.indexOf(s7viewers.VideoViewer.cssClassName) != -1){
						//
					}else{
						containerDiv.className += " "+s7viewers.VideoViewer.cssClassName;
					}	
				}else{
					containerDiv.className = s7viewers.VideoViewer.cssClassName;
				}
			}
			this.s7sdkNamespace = s7viewers.VideoViewer.codebase.isDAM ? "s7viewers" : "s7classic";
			var utilSrcPath = this.getContentUrl() + this.sdkBasePath + "js/s7sdk/utils/Utils.js?namespace="+this.s7sdkNamespace;
			var allScripts = null;
			if (document.scripts){
				allScripts = document.scripts;
			}else{
				allScripts = document.getElementsByTagName("script");
			}

			if (this.s7sdkUtilsAvailable()){
				s7sdk = (s7viewers.VideoViewer.codebase.isDAM ? s7viewers.s7sdk : s7classic.s7sdk);
				s7sdk.Util.init(); 
				this.includeViewer(); 
				this.initializationComplete = true; 
			}else if (!this.s7sdkUtilsAvailable() && (s7viewers.VideoViewer.codebase.isDAM ? s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED : s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED)){
				var selfRef = this;
				var utilsWaitId = setInterval(
					function() {
						if (selfRef.s7sdkUtilsAvailable()) {
							clearInterval(utilsWaitId);
							s7sdk = (s7viewers.VideoViewer.codebase.isDAM ? s7viewers.s7sdk : s7classic.s7sdk);
							s7sdk.Util.init(); 
							selfRef.includeViewer();
							selfRef.initializationComplete = true;  
						}
					}, 100
				);
			}else{
				this.utilsScriptElm = document.createElement("script");
				this.utilsScriptElm.setAttribute("language", "javascript");
				this.utilsScriptElm.setAttribute("type", "text/javascript");

				var headElem = document.getElementsByTagName("head")[0];
				var self = this;

				function cleanupAndInitUtils() {
					if (!self.utilsScriptElm.executed) { 
						self.utilsScriptElm.executed = true;
						s7sdk = (s7viewers.VideoViewer.codebase.isDAM ? s7viewers.s7sdk : s7classic.s7sdk);					
						if (self.s7sdkUtilsAvailable() && s7sdk.Util){
							s7sdk.Util.init(); 
							self.includeViewer();  
							self.initializationComplete = true;
							self.utilsScriptElm.onreadystatechange = null;
							self.utilsScriptElm.onload = null;
							self.utilsScriptElm.onerror = null;
						}
					}  
				}

				if (typeof(self.utilsScriptElm.readyState) != "undefined") {
					self.utilsScriptElm.onreadystatechange =  function() {
						if (self.utilsScriptElm.readyState == "loaded") {
							headElem.appendChild(self.utilsScriptElm);
						} else if (self.utilsScriptElm.readyState == "complete") {
							cleanupAndInitUtils();
						}
					};
					self.utilsScriptElm.setAttribute("src", utilSrcPath);
				} else {
					self.utilsScriptElm.onload = function() {
						cleanupAndInitUtils();
					};
					self.utilsScriptElm.onerror = function() {
					};
					self.utilsScriptElm.setAttribute("src", utilSrcPath);
					headElem.appendChild(self.utilsScriptElm);
					self.utilsScriptElm.setAttribute("data-src", self.utilsScriptElm.getAttribute("src"));
					self.utilsScriptElm.setAttribute("src", "?namespace="+this.s7sdkNamespace);
				}
				if(s7viewers.VideoViewer.codebase.isDAM) {
					s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED = true;
				}else {
					s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED = true;	
				}
			}
			
			return this;
		};

		s7viewers.VideoViewer.prototype.getDomScriptTag = function(jsFileNameOrPath){
			var scriptTags;
			if (document.scripts){
				scriptTags = document.scripts;
			}else{
				scriptTags = document.getElementsByTagName("script");
			}
			for (var i = 0; i < scriptTags.length; i++){ 
				if (scriptTags[i] && scriptTags[i].getAttribute("src") != null && scriptTags[i].getAttribute("src").indexOf(jsFileNameOrPath) != -1){
					return scriptTags[i];
					break;
				}
			}
			return null;
		};
		
		s7viewers.VideoViewer.prototype.getDomain = function(inUrl) {
			var res = /(^http[s]?:\/\/[^\/]+)/i.exec(inUrl);
			if (res == null) {
				return '';
			} else {
				return res[1];
			}
		};

		/**
		 * @private
		 * The second parameter could be the caption or a JSON object contain pairs of values to
		 * specify the caption, navigation, etc.
		 */
		s7viewers.VideoViewer.prototype.setAsset = function(inAsset, inObj) {
			if (this.isDisposed) return;
			var inCaption = null, inNavigation = null, inPosterImage = null;
			// check if second parameter is present
			if (inObj) {
				// check for type, cannot use s7sdk before initialization in embed share usage
				if (Object.prototype.toString.apply(inObj) === '[object String]') {
					inCaption = inObj;
				} else if (typeof inObj == "object"){
					if (inObj.caption) {
						inCaption = inObj.caption;
					} 
					if (inObj.navigation) {
						inNavigation = inObj.navigation
					}			
					if (inObj.posterimage) {
						inPosterImage = inObj.posterimage
					}
				}
			}
			
			if (this.mediaSet){
				this.mediaSet.setAsset(inAsset);
				if (inCaption){
					this.isCaption = true;
					this.curCaption = inCaption + ",1";
					this.videoplayer.setCaption(inCaption);
					this.videoplayer.setCaptionEnabled(this.storedCaptionEnabled);
				}
				else {
					this.isCaption = false;
					this.curCaption = null;
					this.videoplayer.setCaptionEnabled(false);//disable caption because caption may be active from previous video
				}

				this.isNavigation = (inNavigation)? inNavigation : null;			

                this.isPosterImage =(inPosterImage)? inPosterImage : null;                
				this.closedCaptionButton.setSelected(this.storedCaptionEnabled);
				if(this.emailShare) this.emailShare.setThumbnail(inAsset);
				
			}else{
				this.setParam("asset", inAsset);
			}
		};
		
		s7viewers.VideoViewer.prototype.setVideo = function(inVideo, inObj) {
			if (this.isDisposed) return;
			var inCaption = null, inNavigation = null, inPosterImage=null;
			// check if second parameter is present
			if (inObj) {
				// check for type, cannot use s7sdk before initialization in embed share usage
				if (Object.prototype.toString.apply(inObj) === '[object String]') {
					inCaption = inObj;
				} else if (typeof inObj == "object"){
					if (inObj.caption) {
						inCaption = inObj.caption;
					} 
					if (inObj.navigation) {
						inNavigation = inObj.navigation
					}			
                    if (inObj.posterimage) {
						inPosterImage = inObj.posterimage
					}
				}
			}
			
			if (this.videoplayer){
				this.videoplayer.setVideo(inVideo);
				if (inCaption){
					this.isCaption = true;
					this.curCaption = inCaption + ",1";
					this.videoplayer.setCaption(inCaption);
					this.videoplayer.setCaptionEnabled(this.storedCaptionEnabled);
				}
				else {
					this.isCaption = false;
					this.curCaption = null;
					this.videoplayer.setCaptionEnabled(false);//disable caption because caption may be active from previous video
				}

				this.isNavigation = (inNavigation)? inNavigation : null;			

                this.isPosterImage = (inPosterImage)? inPosterImage : null;	
				this.closedCaptionButton.setSelected(this.storedCaptionEnabled);
				if(this.emailShare) this.emailShare.setThumbnail(inVideo);
				
			}else{
				this.setParam("video", inVideo);
			}
		};	
		
		s7viewers.VideoViewer.prototype.setLocalizedTexts = function(inText) {
			if (this.isDisposed) return;
			if (this.s7params){
				this.s7params.setLocalizedTexts(inText);
			}else{
				this.setParam("localizedTexts", inText);
			}
		};


		s7viewers.VideoViewer.prototype.initSiteCatalyst = function(params,inCallback) {
			//integrate SiteCatalyst logging
			//strip modifier from asset and take the very first entry from the image list, and the first element in combination from that entry
			if(params.get("asset", null, "MediaSet")){
				var siteCatalystAsset = params.get("asset", null, "MediaSet").split(',')[0].split(':')[0];
				this.isConfig2Exist = false;
				if (siteCatalystAsset.indexOf('/') != -1) {
					var company = s7sdk.MediaSetParser.findCompanyNameInAsset(siteCatalystAsset);
					var config2 = params.get("config2");
					this.isConfig2Exist = (config2 != '' && typeof config2 != "undefined");
					if (this.isConfig2Exist){
						this.trackingParams = {
							siteCatalystCompany: company,
							config2: config2,
							isRoot: params.get("serverurl"),
                            contentUrl: this.getContentUrl()
                        };
						var jsp_src =this.getContentUrl()+'../../AppMeasurementBridge.js?company=' + company + (config2 == '' ? '' : '&preset=' + config2);
						if (params.get("serverurl", null)) {
							jsp_src += "&isRoot=" + params.get("serverurl");
						}
						var elem = document.createElement("script");
						elem.setAttribute("language", "javascript");
						elem.setAttribute("type", "text/javascript");
						elem.setAttribute("src", jsp_src);

						var elems = document.getElementsByTagName("head");
						elem.onload = elem.onerror = function() {  
							if (!elem.executed) { 
								elem.executed = true;  
								if (typeof inCallback == "function"){
									inCallback();
								}
								elem.onreadystatechange = null;
								elem.onload = null;
								elem.onerror = null;
							}  
						};  

						elem.onreadystatechange = function() {  
							if (elem.readyState == "complete" || elem.readyState == "loaded") {  
								setTimeout(function() { 
									if (!elem.executed) { 
										elem.executed = true;  
										if (typeof inCallback == "function"){
											inCallback();
										}
									}  
									elem.onreadystatechange = null;
									elem.onload = null;
									elem.onerror = null;
								}, 0);
							}  
						};
						elems[0].appendChild(elem);
					}else{
						if (typeof inCallback == "function"){
							inCallback();
						}
					}	
				}
			}
			else {
				if (typeof inCallback == "function"){
					inCallback();
				}			
			}
		};

		s7viewers.VideoViewer.prototype.onFullScreenEnter = function(event) {
		 //callback template
			this.storedSocialShareDisplayProp = s7sdk.Util.getStyle(this.socialShare.getObj(), "display");
			this.socialShare.setCSS(".s7socialshare", "display", "none");
		};

		s7viewers.VideoViewer.prototype.onFullScreenExit = function(event) {
		 //callback template
			this.socialShare.setCSS(".s7socialshare", "display", this.storedSocialShareDisplayProp);
		};

		s7viewers.VideoViewer.prototype.getComponent = function(inId) {
			if (this.isDisposed) return;
			switch(inId){
				case "container":
					return this.container || null;
				case "mediaSet":
					return this.mediaSet || null;
				case "videoPlayer":
					return this.videoplayer || null;
				case "controls":
					return this.controls || null;
				case "videoScrubber":
					return this.videoScrubber || null;
				case "videoTime":
					return this.videoTime || null;
				case "mutableVolume":
					return this.mutableVolume || null;
				case "playPauseButton":
					return this.playPauseButton || null;
				case "closedCaptionButton":
					return this.closedCaptionButton || null;
				case "fullScreenButton":
					return this.fullScreenButton || null;
				case "twitterShare":
					return this.twitterShare || null;
				case "facebookShare":
					return this.facebookShare || null;
				case "linkShare":
					return this.linkShare || null;
				case "socialShare":
					return this.socialShare || null;
				case "emailShare":
					return this.emailShare || null;
				case "embedShare":
					return this.embedShare || null;
				case "parameterManager":
					return this.s7params || null;
				default:
					return null;
			}
		};

		s7viewers.VideoViewer.prototype.setHandlers = function(inObj) {
			if (this.isDisposed || this.initCalled) return;
			this.handlers = [];
			for (var i in inObj) {
				if (!inObj.hasOwnProperty(i)) continue;
				if (typeof inObj[i] != "function") continue;
				this.handlers[i] = inObj[i];
			}
		};
		
		s7viewers.VideoViewer.prototype.getModifiers = function() {
			return this.modifiers;
		};

		s7viewers.VideoViewer.prototype.setModifier = function(modifierObject) {
			if (this.isDisposed) return;
			var modName, modDesc, modObj, modVal, parsedModifier, i;
			for(modName in modifierObject) {
				if(!this.modifiers.hasOwnProperty(modName)) {
					continue;
				}
				modDesc = this.modifiers[modName];
				
				try {
					modVal = modifierObject[modName];

					if (modDesc.parseParams === false) {
						parsedModifier = new s7sdk.Modifier([modVal  != "" ? modVal : modDesc.defaults[0]]);
					} else {
						parsedModifier = s7sdk.Modifier.parse(modVal, modDesc.defaults, modDesc.ranges);
					}

					if(parsedModifier.values.length == 1) {
						this[modName] = parsedModifier.values[0];
						this.setModifierInternal(modName);
					}
					else if(parsedModifier.values.length > 1) {
						modObj = {};
						for(i = 0; i < parsedModifier.values.length; i++) {
							modObj[modDesc.params[i]] = parsedModifier.values[i];
						}
						this[modName] = modObj;
						this.setModifierInternal(modName);
					}
				}
				catch(error) {
					throw new Error("Unable to process modifier: '"+ modName + "'. " + error);
				}
			}
		};

		s7viewers.VideoViewer.prototype.setModifierInternal = function(modName) {
			switch (modName) {
				default :
					break;				
			}
		};

		s7viewers.VideoViewer.prototype.parseMods = function () {
			var modName, modDesc, modObj, modVal, parsedModifier, i;
			
			for(modName in this.modifiers) {
				if(!this.modifiers.hasOwnProperty(modName)) {
					continue;
				}
				modDesc = this.modifiers[modName];
				
				try {
					modVal = this.s7params.get(modName, "");

					if (modDesc.parseParams === false) {
						parsedModifier = new s7sdk.Modifier([modVal  != "" ? modVal : modDesc.defaults[0]]);
					} else {
						parsedModifier = s7sdk.Modifier.parse(modVal, modDesc.defaults, modDesc.ranges);
					}

					if(parsedModifier.values.length == 1) {
						this[modName] = parsedModifier.values[0];
					}
					else if(parsedModifier.values.length > 1) {
						modObj = {};
						for(i = 0; i < parsedModifier.values.length; i++) {
							modObj[modDesc.params[i]] = parsedModifier.values[i];
						}
						this[modName] = modObj;
					}
				}
				catch(error) {
					throw new Error("Unable to process modifier: '"+ modName + "'. " + error);
				}
			}
		};

		/**
		 * @private
		 */
		s7viewers.VideoViewer.prototype.updateCSSMarkers = function (){
			var sizeMarker = this.container.getSizeMarker();
			var newclass;
			if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_NONE){
				return;
			}		
			if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_LARGE){
				newclass = "s7size_large";
			}else{
				if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_SMALL){
					newclass = "s7size_small";
				}else if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_MEDIUM){
					newclass = "s7size_medium";
				}
			}
			if (this.containerId) {
				this.setNewSizeMarker(this.containerId, newclass);
			}
			this.reloadInnerComponents();
		};
		
		s7viewers.VideoViewer.prototype.reloadInnerComponents = function () {
			var regCompArr = this.s7params.getRegisteredComponents();
			for(var i=0; i < regCompArr.length; i++){
				if (regCompArr[i] && regCompArr[i].restrictedStylesInvalidated()){
					regCompArr[i].reload();
				}
			}
		};
		
		s7viewers.VideoViewer.prototype.setNewSizeMarker = function (elm, inClass) {
			var cls = document.getElementById(elm).className;
			var re = /^(.*)(s7size_small|s7size_medium|s7size_large)(.*)$/gi;
			var newcls;
			if(cls.match(re)){
				newcls = cls.replace(re,  "$1" + inClass + "$3");
			} else {
				newcls = cls + " " + inClass;
			}
			if(cls != newcls){
				document.getElementById(elm).className = newcls;
			}
		};

		s7viewers.VideoViewer.prototype.dispose = function () {
			if (this.appMeasurementBridge) {
				this.appMeasurementBridge.dispose();
				this.appMeasurementBridge = null;
			}
			if (this.trackingManager){
				this.trackingManager.dispose();
				this.trackingManager = null;
			}
			if (this.videoplayer){
				this.videoplayer.dispose();
				this.videoplayer = null;
			}
			if (this.facebookShare){
				this.facebookShare.dispose();
				this.facebookShare = null;
			}
			if (this.twitterShare){
				this.twitterShare.dispose();
				this.twitterShare = null;
			}
			if (this.linkShare){
				this.linkShare.dispose();
				this.linkShare = null;
			}
			if (this.embedShare){
				this.embedShare.dispose();
				this.embedShare = null;
			}
			if (this.emailShare){
				this.emailShare.dispose();
				this.emailShare = null;
			}
			if (this.socialShare){
				this.socialShare.dispose();
				this.socialShare = null;
			}
			if (this.closedCaptionButton){
				this.closedCaptionButton.dispose();
				this.closedCaptionButton = null;
			}
			if (this.fullScreenButton){
				this.fullScreenButton.dispose();
				this.fullScreenButton = null;
			}
			if (this.mutableVolume){
				this.mutableVolume.dispose();
				this.mutableVolume = null;
			}
			if (this.videoTime){
				this.videoTime.dispose();
				this.videoTime = null;
			}
			if (this.videoScrubber){
				this.videoScrubber.dispose();
				this.videoScrubber = null;
			}
			if (this.playPauseButton){
				this.playPauseButton.dispose();
				this.playPauseButton = null;
			}
			if (this.controls){
				this.controls.dispose();
				this.controls = null;
			}		
			if (this.mediaSet){
				this.mediaSet.dispose();
				this.mediaSet = null;
			}
			if (this.s7params){
				this.s7params.dispose();
				this.s7params = null;
			}
			if (this.container){
				var classes = [s7viewers.VideoViewer.cssClassName,"s7touchinput","s7mouseinput","s7size_large","s7size_small","s7size_medium"];
				var cls = document.getElementById(this.containerId).className.split(' ');
				for(var i=0; i<classes.length;i++){
					var idx = cls.indexOf(classes[i]);
					if(idx != -1) { 
						cls.splice(idx, 1);
					}
				}
				document.getElementById(this.containerId).className = cls.join(' ');
				this.container.dispose();
				this.container = null;
			}
			this.params = {};
			this.handlers = [];
			this.isDisposed = true;
		};

		/**
		 * @private
		 */	
		s7viewers.VideoViewer.prototype.updateOrientationMarkers = function (){
			if(!this.isOrientationMarkerForcedChanged){
				var newclass;
				if (window.innerWidth > window.innerHeight){
					newclass = "s7device_landscape";
				}else{
					newclass = "s7device_portrait";
				}			
				if (document.getElementById(this.containerId).className.indexOf(newclass) == -1) {
					this.setNewOrientationMarker(this.containerId, newclass);
					this.reloadInnerComponents();
				}
			}
		};
		
		s7viewers.VideoViewer.prototype.setNewOrientationMarker = function (elm, inClass) {
			var cls = document.getElementById(elm).className;
			var re = /^(.*)(s7device_landscape|s7device_portrait)(.*)$/gi;
			var newcls;
			if(cls.match(re)){
				newcls = cls.replace(re,  "$1" + inClass + "$3");
			} else {
				newcls = cls + " " + inClass;
			}
			if(cls != newcls){
				document.getElementById(elm).className = newcls;
			}
		};

		s7viewers.VideoViewer.prototype.forceDeviceOrientationMarker = function (marker){
			switch (marker){
				case "s7device_portrait":
				case "s7device_landscape":
					this.isOrientationMarkerForcedChanged = true;
					if (this.containerId) {
						this.setNewOrientationMarker(this.containerId, marker);
					}
					this.reloadInnerComponents();
					break;
				case null:
					this.isOrientationMarkerForcedChanged = false;
					this.updateOrientationMarkers();
					break;
				default:
					break;
			}
		};

		s7viewers.VideoViewer.prototype.getURLParameter = function (name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=([^&;]+?)(&|#|;|$)','gi').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
		};

		s7viewers.VideoViewer.prototype.addClass = function (elm, inClass) {
			var cls = document.getElementById(elm).className.split(' ');
			if(cls.indexOf(inClass) == -1) {
				cls[cls.length] = inClass;
				document.getElementById(elm).className = cls.join(' ');
			}
		};

	})();
}
