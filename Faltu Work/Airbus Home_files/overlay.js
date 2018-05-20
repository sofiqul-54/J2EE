// type = 0 mobile, 1 tablet, 2 PC
var temptimevar = 1000;
var MetrixLab_OverlayTypeName = 2;
var MetrixLab_button=1;

var MODETECT = MODETECT || {};

MODETECT.device = (function() {
  'use strict';

  var device = {};

  device.phone = false;
  device.tablet = false;
  //iPhone
  device.iphone = (testNavigator(/iPhone/i, 'platform')) ? true : false;
  if(device.iphone) { device.phone = true; }
  //iPad
  device.ipad = (testNavigator(/iPad/i, 'platform')) ? true : false;
  if(device.ipad) { device.tablet = true; }
  //iPod
  device.ipod = (testNavigator(/iPod/i, 'platform')) ? true : false;
  if(device.ipod) { device.phone = true; }
  //Android device
  device.android = testNavigator(/Android/i, 'userAgent');
  if(device.android) {
    //Android v3 built as tablet-only version of the OS
    //Can definitively say it's a tablet at this point
    if(testVersion(/Android\s(\d+\.\d+)/i, 3, 'match') ) {
      device.tablet = true;
    }
    //Checking for "mobile" in userAgent string for Mobile Safari.
    //Also checking resolution here (max portrait of 800), simply because so
    //many Android tablets that are popular use Android v2.x or now v4.x
    else if(testResolution(800) && testNavigator(/Mobile/i, 'userAgent')) {
      if((testNavigator(/tablet/i, 'userAgent')) || (testNavigator(/Tablet/i, 'userAgent')))
		{
			device.tablet = true;
		}
		else
		{
			device.phone = true;
		}
    }
    //Default phone vs. tablet value? Defaulting to phone for now until I can think
    //of a better alternative approach to narrow down better.
    else {
      if((testNavigator(/tablet/i, 'userAgent')) || (testNavigator(/Tablet/i, 'userAgent')))
		{
			device.tablet = true;
		}
		else
		{
			device.phone = true;
		}
    }
  }
  //Blackberry Phone with WebKit
  device.blackberry = (testNavigator(/Blackberry/i, 'userAgent') && testNavigator(/Mobile/i, 'userAgent')) ? true : false;
  if(device.blackberry) { device.phone = true; }
  //Blackberry Playbook
  device.blackberryplaybook = testNavigator(/RIM\sTablet/i, 'userAgent');
  if(device.blackberryplaybook) { device.tablet = true; }
  //Windows Phone
  device.windowsphone = testNavigator(/Windows\sPhone/i, 'userAgent');
  if(device.windowsphone) { device.phone = true; }
  //Kindle Fire
  device.kindlefire = testNavigator(/Silk/i, 'userAgent');
  if(device.kindlefire) { device.tablet = true; }
  //other mobile
  device.othermobile = (device.phone || device.tablet || device.ipod) ? false : testResolution(320);
  if(device.othermobile) { device.phone = true; }
  //desktop user?
  device.desktop = (device.phone || device.tablet || device.ipod) ? false : true;

  //Test window.navigator object for a match
  //return - Boolean
  function testNavigator(pattern, property) {
    return pattern.test(window.navigator[property]);
  }
  
  
  //Test window.navigator object for a match
  //return - Boolean
  function testNavigator(pattern, property) {
    return pattern.test(window.navigator[property]);
  }

  //Test if maximum portrait width set in platform is less than the current screen width
  //return - Boolean
  function testResolution(maxPortraitWidth) {
    var portraitWidth = Math.min(screen.width, screen.height) / ("devicePixelRatio" in window ? window.devicePixelRatio : 1);
    if(portraitWidth <= maxPortraitWidth) {
      return true;
    }
    else {
      return false;
    }
  }

  //Test OS Version
  //param - pattern - Regex pattern
  //param - version - Integer - Major version to compare against
  //param - versionComparison - String - How version matching is done "match", "greaterThan", "lessThan"
  //return - Boolean
  function testVersion(pattern, version, versionComparison) {
    var fullVersion = pattern.exec(window.navigator.userAgent),
        majorVersion = parseInt(fullVersion[1], 10);
        
    if(versionComparison === "match" && majorVersion === version ) {
      return true;
    }
    else if(versionComparison === "greaterThan" && majorVersion > version) {
      return true;
    }
    else if(versionComparison === "lessThan" && majorVersion < version) {
      return true;
    }
    else {
      return false;
    }
  }
  
  return device;

}());

var MetrixLab_OverlayWidth;
var MetrixLab_OverlayHeight;

if (MODETECT.device.desktop)
{
	MetrixLab_OverlayTypeName = 0;
}
else if (MODETECT.device.tablet)
{
	MetrixLab_OverlayTypeName = 1;	
}
else if (MODETECT.device.phone)
{
	MetrixLab_OverlayTypeName = 2;
}

//global intercept
var MetrixLab_Intercept = 1;
var MetrixLab_OverlayType = '';
var MetrixLab_PopupFolderName = '';
var MetrixLab_ProjectNumber = '';
var MetrixLab_CookieFolderName = 'p57983';
var MetrixLab_OverlayImg = "";
var MetrixLab_OverlayImg2 = "";
//var MetrixLab_OverlayWidth = '';
var MetrixLab_OverlayHeight = '';
var MetrixLab_Coordinate_YesButton = '0,0,0,0';
var MetrixLab_Coordinate_NoButton = '0,0,0,0';
var MetrixLab_Coordinate_CloseButton = '0,0,0,0';
var MetrixLab_Coordinate_PrivacyButton = '0,0,0,0';
var MetrixLab_Coordinate_MetrixButton = '0,0,0,0';
var MetrixLab_MaxMobileSeconds = 60;
var MetrixLab_ForceData=';900,2,rp';
var MetrixLab_counter;
var MetrixLab_DivStartLeft = '100';
var MetrixLab_DivStartTop = '100';
var MetrixLab_ElapsedSoFar = 0;
var MetrixLab_CookieName = "MetrixLab"+MetrixLab_CookieFolderName;
var MetrixLab_Ch = 'overlay';
var MetrixLab_InviteURL = encodeURIComponent(window.location.href);
var MetrixLab_Referrer = encodeURIComponent(document.referrer);

MetrixLab_ForceData = MetrixLab_ForceData + ";9999,1," + MetrixLab_Referrer + ";9998,1," + MetrixLab_InviteURL;

//MODETECT.device.tablet = true;
//MODETECT.device.desktop = false;
if (!MODETECT.device.desktop) //Entry for mobile/tablet
{
	MetrixLab_OverlayTypeName = 1;
}



switch(MetrixLab_OverlayTypeName)
{	
	//hemanth
	case 0:
		var MetrixLab_Intercept = 1;//1;
		var MetrixLab_OverlayType = 'exit';
		var MetrixLab_PopupFolderName = 'p57983';
		var MetrixLab_ProjectNumber = 'p57983_en';
		var MetrixLab_CookieFolderName = 'p57983';
	    var MetrixLab_OverlayImg1 = "overlay.gif";
		var MetrixLab_OverlayImg = "overlay_mobile.gif";
		var MetrixLab_OverlayImg2 = "overlay_tablet.gif";
		var MetrixLab_Coordinate_YesButton = '24,243,206,294';
		var MetrixLab_Coordinate_NoButton = '241,242,427,291';
		var MetrixLab_Coordinate_CloseButton = '397,15,430,51';
		var MetrixLab_Coordinate_PrivacyButton = '240,333,288,347';
		var MetrixLab_Coordinate_MetrixButton = '165,334,224,347';
		//MetrixLab_ForceData = '1,1';
		MetrixLab_Ch = 'pc';
		var MetrixLab_OverlayWidth = 450;
		var MetrixLab_OverlayHeight = 362;
	break;
	
	case 1:
		var MetrixLab_Intercept = 1;//1;
		var MetrixLab_OverlayType = 'entry';
		var MetrixLab_PopupFolderName = 'p57983';
		var MetrixLab_ProjectNumber = 'p57983_en';
		var MetrixLab_CookieFolderName = 'p57983';
		var MetrixLab_OverlayImg1 = "overlay.gif";
		var MetrixLab_OverlayImg = "overlay_mobile.gif";
		var MetrixLab_OverlayImg2 = "overlay_tablet.gif";
		var MetrixLab_Coordinate_YesButton = '34,187,186,228';
		var MetrixLab_Coordinate_NoButton = '215,187,369,228';
		var MetrixLab_Coordinate_CloseButton = '352,13,380,41';
		var MetrixLab_Coordinate_PrivacyButton = '212,254,253,268';
		var MetrixLab_Coordinate_MetrixButton = '148,254,201,267';
		//MetrixLab_ForceData = '1,2';
		MetrixLab_Ch = 'tab';
		var MetrixLab_OverlayWidth = 400;
		var MetrixLab_OverlayHeight = 283;		
	break;
	
	case 2:
		var MetrixLab_Intercept = 1;//1;
		var MetrixLab_OverlayType = 'entry';
		var MetrixLab_PopupFolderName = 'p57983';
		var MetrixLab_ProjectNumber = 'p57983_en';
		var MetrixLab_CookieFolderName = 'p57983';
		var MetrixLab_OverlayImg1 = "overlay.gif";
		var MetrixLab_OverlayImg = "overlay_mobile.gif";
		var MetrixLab_OverlayImg2 = "overlay_tablet.gif";
		var MetrixLab_Coordinate_YesButton = '77,216,246,262';
		var MetrixLab_Coordinate_NoButton = '76,266,246,312';
		var MetrixLab_Coordinate_CloseButton = '271,13,303,44';
		var MetrixLab_Coordinate_PrivacyButton = '174,336,217,351';
		var MetrixLab_Coordinate_MetrixButton = '103,335,160,350';
		//MetrixLab_ForceData = '1,2';
		//MetrixLab_DivStartLeft = '20';
		//MetrixLab_DivStartTop = '20';
		MetrixLab_Ch = 'mo';
		var MetrixLab_OverlayWidth = 320;
		var MetrixLab_OverlayHeight = 358;
	break;
	
}

var getURL=location.href;

//if true the MetrixLab_CookieFolderName name should be the same in all projects
var MetrixLab_GLOB_CookieSetup = false;
var MetrixLab_PrivacyLanguage = 'fr';
var MetrixLab_AutoCloseInterval=0;
var MetrixLab_UserID='';

var MetrixLabGLOB_cookie;
var MetrixLabGLOB_Try_count = 20;

var MetrixLab_Protocol = document.location.protocol;
var MetrixLab_width = 0;
var MetrixLab_height = 0;
try
{
	if (typeof window.innerWidth != 'undefined')
	{
	  MetrixLab_width = window.innerWidth;
	  MetrixLab_height = window.innerHeight;
	}
	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0)
	{
	   MetrixLab_width = document.documentElement.clientWidth;
	   MetrixLab_height = document.documentElement.clientHeight;
	}
	else
	{
	   MetrixLab_width = document.getElementsByTagName('body')[0].clientWidth;
	   MetrixLab_height = document.getElementsByTagName('body')[0].clientHeight;
	}
}
catch(error){}

if((MetrixLab_width > 0) &&(MetrixLab_height > 0))
{
	try
	{
		MetrixLab_DivStartLeft = (MetrixLab_width-MetrixLab_OverlayWidth)/2;
		MetrixLab_DivStartTop = (MetrixLab_height-MetrixLab_OverlayHeight)/2;
	}
	catch(error){}
}

function MetrixLab_GetCookieValue(CookieName)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==CookieName)
		{
			return unescape(y);
		}
	}
	return 0;
}

function MetrixLab_SetUserID()
{
	var Today = new Date();
	MetrixLab_UserID=''+Today.getFullYear()+'_'+(Today.getMonth()+1)+'_'+Today.getDate()+'_'+Today.getHours()+'_'+Today.getMinutes()+'_'+Today.getSeconds()+'_'+Today.getMilliseconds();	
}

function MetrixLab_isCookieEnabled()
{
    var cookieEnabled=(navigator.cookieEnabled)? true : false;
    
    if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled)
    { 
	    document.cookie="MetrixLabTestCookie";
	    cookieEnabled=(document.cookie.indexOf("MetrixLabTestCookie")!=-1)? true : false;
    }    
    return cookieEnabled;      	
}

function MetrixLab_GetRandomNumber(MetrixLab_minValue,MetrixLab_maxValue)
{
    var MetrixLab_result = 0;

    if (MetrixLab_minValue<=MetrixLab_maxValue)
    {
	    MetrixLab_result=Math.round((Math.random()*(MetrixLab_maxValue-MetrixLab_minValue+1))+MetrixLab_minValue-0.5);
	}	
	return MetrixLab_result;
}

function MetrixLab_SetCookie()
{
    var MetrixLab_expires = new Date();
	MetrixLab_expires.setTime(MetrixLab_expires.getTime() + (180*24*60*60*1000));//made 180 days
	document.cookie = MetrixLab_CookieName+"=1; expires=" + MetrixLab_expires.toGMTString() + "; path=/;";

	if (MetrixLab_GLOB_CookieSetup)
	{	
		MetrixLab_GLOB_setCookie();
	}
}

function MetrixLab_SetCookieElapsed(seconds)
{
	document.cookie = "Elapsedp14827" + "=" + seconds+"; path=/;";
}


function MetrixLab_ShowOverlay()
{
	try
	{
		MetrixLab_counter = window.clearInterval(MetrixLab_counter);
	}
	catch(error){};
	MetrixLab_SetUserID();
    MetrixLab_SetCookie();
    MetrixLab_LoadOverlay();
    if (MetrixLab_AutoCloseInterval>0)
    {
            setTimeout("MetrixLab_CloseBanner();",MetrixLab_AutoCloseInterval*1000);
    }
}


function MetrixLab_GLOB_setCookie()
{
	var MetrixLabGLOB_Time = new Date();
	var MetrixLabGLOB_Script = document.createElement('script');
	MetrixLabGLOB_Script.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/'+MetrixLab_PopupFolderName+'/cookie.asp?s='+MetrixLab_CookieName+'_GLOB&m=set&t='+MetrixLabGLOB_Time.getTime();
	MetrixLabGLOB_Script.type='text/javascript';
	var MetrixLabGLOB_Body = document.getElementsByTagName('body').item(0);
	MetrixLabGLOB_Body.appendChild(MetrixLabGLOB_Script); 
}



function MetrixLab_GLOB_getCookie()
{
	var MetrixLabGLOB_Time = new Date();
	var MetrixLabGLOB_Script = document.createElement('script');
	MetrixLabGLOB_Script.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/'+MetrixLab_PopupFolderName+'/cookie.asp?s='+MetrixLab_CookieName+'_GLOB&m=get&t='+MetrixLabGLOB_Time.getTime();
	MetrixLabGLOB_Script.type='text/javascript';
	var MetrixLabGLOB_Body = document.getElementsByTagName('body').item(0);
	MetrixLabGLOB_Body.appendChild(MetrixLabGLOB_Script); 
}


function MetrixLabGLOB_checkCookie()
{                
    if (typeof MetrixLabGLOB_cookie != "undefined")
    {     
		if (MetrixLabGLOB_cookie==false)     
		{                         
			//cookie not set
			MetrixLab_ShowOverlay();
		}
		else
		{
			//cookie set
		}
		
    }
	else
	{ 
		MetrixLabGLOB_Try_count--;
		if (MetrixLabGLOB_Try_count>0)
		{
			setTimeout('MetrixLabGLOB_checkCookie();',500);
		}
	}
}

function MetrixLab_CheckCookie()
{
	
	if (document.cookie.indexOf(MetrixLab_CookieName)==-1)
	{
		if (MetrixLab_GLOB_CookieSetup)
		{
			MetrixLab_GLOB_getCookie();
			MetrixLabGLOB_checkCookie();
		}
		else
		{
			MetrixLab_ShowOverlay();
			
		}
	}
	 
}

// custom cookie for web page 2 and web page 3
/*
function MetrixLab_SetCookie_page()
{
    var MetrixLab_expires = new Date();
	MetrixLab_expires.setTime(MetrixLab_expires.getTime() + (7*24*60*60*1000));
	document.cookie = "Metrixlab_test123"+"=1; expires=" + MetrixLab_expires.toGMTString() + "; path=/;";

	if (MetrixLab_GLOB_CookieSetup)
	{	
		MetrixLab_GLOB_setCookie();
	}
}

if(document.location.href.indexOf("invitation.opinionbar.com/popups/p57983/test2.html")>-1 || document.location.href.indexOf("invitation.opinionbar.com/popups/p57983/test3.html")>-1)
{
	MetrixLab_SetCookie_page();
	MetrixLab_Intercept = 0;
}*/

function MetrixLab_CheckIntercept()
{
    MetrixLab_RandomNumber = MetrixLab_GetRandomNumber(1,MetrixLab_Intercept);
    if (MetrixLab_RandomNumber==1)
    {
        MetrixLab_CheckCookie();
    }
	else
	{
		try
		{
			MetrixLab_counter = window.clearInterval(MetrixLab_counter);
		}
		catch(error){};
	}
}

function MetrixLab_CheckInterceptNoCookie()
{
	
    MetrixLab_RandomNumber = MetrixLab_GetRandomNumber(1,MetrixLab_Intercept);
    if (MetrixLab_RandomNumber==1)
    {
        MetrixLab_ShowOverlay();
    }
}

function MetrixLab_GoToPrivacy()
{
	PopupPrivacy = window.open('http://www.opinionbar.com/'+MetrixLab_PrivacyLanguage+'/privacy.asp','PopupPrivacy','resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,width=750,height=450');
}

function MetrixLab_GoToMetrixLab()
{
	PopupPrivacy = window.open('http://www.MetrixLab.com/','PopupPrivacy','resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,width=750,height=450');
}

function MetrixLab_GoToWebSurvey()
{
    switch(MetrixLab_OverlayType)
    {
        case 'entry':
            MetrixLab_GoToWebSurveyEntry();
        break;
        case 'exit':
            MetrixLab_GoToWebSurveyExit();
            MetrixLab_CloseBanner();

        break;
        case 'entryexit':
            MetrixLab_GoToWebSurveyEntryExit();
        break;
    }

}

function MetrixLab_GoToWebSurvey2()
{	
    switch(MetrixLab_OverlayType)
    {
        case 'entry':
            MetrixLab_GoToWebSurveyEntry2();
        break;
        case 'exit':
            MetrixLab_GoToWebSurveyExit2();
         

        break;
        case 'entryexit':
            MetrixLab_GoToWebSurveyEntryExit();
        break;
    }
}

function MetrixLab_GoToWebSurveyEntry()
{	
    					
    		
        PopupWebSurvey = window.open('http://websurvey2.opinionbar.com/go.asp?s=p57983_en');		
   				

    MetrixLab_CloseBanner();
}

function MetrixLab_GoToWebSurveyEntry2()
{	
    //hemanth
        PopupWebSurvey = window.open('http://websurvey2.opinionbar.com/go.asp?s=p57983_en');	
  			

    MetrixLab_CloseBanner();
}

function MetrixLab_GoToWebSurveyExit()
{

   MetrixLab_SetCookie();
   MetrixLab_ShowPopupEntryExit();
   MetrixLab_CloseBanner();
}
function MetrixLab_GoToWebSurveyExit2()
{

   MetrixLab_SetCookie();
   MetrixLab_ShowPopupEntryExit2();
   MetrixLab_CloseBanner();
}
function GoTowebSurveyEntryExit()
{
   MetrixLab_SetCookie();
   MetrixLab_ShowPopupEntryExit();
   MetrixLab_CloseBanner();
}


function MetrixLab_CloseBanner()
{
    var MetrixLab_Div=document.getElementById('MetrixLab_Div');
    if (MetrixLab_Div)
    {
        MetrixLab_Div.parentNode.removeChild(MetrixLab_Div);
    }
}

function MetrixLab_ShowPopupEntryExit()
{
	MetrixLab_PopupAttributes="resizable=yes,scrollbars=yes,toolbar=no,menubar=no,width=450,height=370,left="+MetrixLab_DivStartLeft+",top="+MetrixLab_DivStartTop;
	
	MetrixLab_PopupWin=open('inv.htm', 'new_window', MetrixLab_PopupAttributes);
	MetrixLab_PopupWin.document.write('<html><head><title>Opinionbar Websurvey</title></head>');
	MetrixLab_PopupWin.document.write('<body>');
	
	
	MetrixLab_PopupWin.document.write('<scr'+'ipt>');
	MetrixLab_PopupWin.document.write("var metrixlab_userid='"+MetrixLab_UserID+"';");
	MetrixLab_PopupWin.document.write("var metrixlab_ForceData='"+MetrixLab_ForceData+"';");
	
	MetrixLab_PopupWin.document.write("var MetrixLab_Ch='"+MetrixLab_Ch+"';");
	
	MetrixLab_PopupWin.document.write('</scr'+'ipt>');	
	MetrixLab_PopupWin.document.write("<script language='javascript' src='"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/exit.js'>");
	MetrixLab_PopupWin.document.write('</scr'+'ipt>');
	
	
	MetrixLab_PopupWin.document.write('</body></html>');
	
	if (navigator.userAgent.indexOf('Firefox') !=-1)
	{
		MetrixLab_PopupWin.window.open('about:blank').close();
	}
	MetrixLab_PopupWin.blur();

	try {
	window.blur();
	window.focus();
	} catch(error){}
	
}

function MetrixLab_ShowPopupEntryExit2()
{
	MetrixLab_PopupAttributes="resizable=yes,scrollbars=yes,toolbar=no,menubar=no,width=450,height=370,left="+MetrixLab_DivStartLeft+",top="+MetrixLab_DivStartTop;
	
	MetrixLab_PopupWin=open('inv.htm', 'new_window', MetrixLab_PopupAttributes);
	MetrixLab_PopupWin.document.write('<html><head><title>Opinionbar Websurvey</title></head>');
	MetrixLab_PopupWin.document.write('<body>');
	
	
	MetrixLab_PopupWin.document.write('<scr'+'ipt>');
	MetrixLab_PopupWin.document.write("var metrixlab_userid='"+MetrixLab_UserID+"';");
	MetrixLab_PopupWin.document.write("var metrixlab_ForceData='"+MetrixLab_ForceData+"';");
	
	MetrixLab_PopupWin.document.write("var MetrixLab_Ch='"+MetrixLab_Ch+"';");
	
	MetrixLab_PopupWin.document.write('</scr'+'ipt>');	
	MetrixLab_PopupWin.document.write("<script language='javascript' src='"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/exit2.js'>");
	MetrixLab_PopupWin.document.write('</scr'+'ipt>');
	
	
	MetrixLab_PopupWin.document.write('</body></html>');
	
	if (navigator.userAgent.indexOf('Firefox') !=-1)
	{
		 MetrixLab_PopupWin.window.open('about:blank').close();
	}
	MetrixLab_PopupWin.blur();

	try {
	window.blur();
	window.focus();
	} catch(error){}
	
}

function Metrixlab_SetDivVisible()
{
	document.getElementById('MetrixLab_overlay').style.display='block';
}

function metrixlab_onready(el, func){
	this.args = new Array(el, func)
	this.doTry = function(){
			try{
					var el = eval(this.args[0])
					el.onloading = this.args[1]
					el.onloading()
					clearInterval(this.args[2])
			}
			catch(e){}
	}
	this.doTry.bind = function(object){
			var method = this;
			return function(){
					method.apply(object);
			}
	}
	this.args[2] = setInterval(this.doTry.bind(this), 250);
	return this
}

    // MetrixLab_HTMLString += "<MAP name='MetrixLab_Popup_Map'>\n";
    // MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_YesButton+"' href='javascript:MetrixLab_GoToWebSurvey();' target='_self'>\n";
	 // MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_YesButton1+"' href='javascript:MetrixLab_GoToWebSurvey();' target='_self'>\n";
    // MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_NoButton+"' href='javascript:MetrixLab_CloseBanner();' target='_self'>\n";
    // MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_CloseButton+"' href='javascript:MetrixLab_CloseBanner();' target='_self'>\n";
    // MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_PrivacyButton+"' href='javascript:MetrixLab_GoToPrivacy();' target='_self'>\n";
    // MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_MetrixButton+"' href='javascript:MetrixLab_GoToMetrixLab();' target='_self'>\n";    
	// MetrixLab_HTMLString += "</MAP>\n";

function MetrixLab_LoadOverlay()
{    
    var MetrixLab_HTMLString="";
	MetrixLab_HTMLString += "<style>\n";
	MetrixLab_HTMLString += "  .classorientation{\n";
	MetrixLab_HTMLString += "     background-image:url('"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/"+MetrixLab_OverlayImg1+"');\n";
	MetrixLab_HTMLString += "     width:450px;\n";
	MetrixLab_HTMLString += "     height:362px;\n";
	MetrixLab_HTMLString += "     left:0px;\n";
	MetrixLab_HTMLString += "     right:0px;\n";
	MetrixLab_HTMLString += "     top:25%;\n";
	MetrixLab_HTMLString += "     margin:auto;\n";
	MetrixLab_HTMLString += "     -webkit-animation: myfirst 3s 1;-webkit-animation-direction: forward;animation: myfirst 3s 1;animation-direction: forward;\n";
	//MetrixLab_HTMLString += "     top:"+((MetrixLab_height-MetrixLab_OverlayHeight)/2)+"px;\n";
	MetrixLab_HTMLString += "  }\n";
	MetrixLab_HTMLString += "@-webkit-keyframes myfirst {0%{left: 0px; top: 0px;}\n100%{left: 0px; top: 25%;}}\n@keyframes myfirst {0%{left: 0px; top: 0px;}\n 100% {left: 0px; top: 25%;}}";
	MetrixLab_HTMLString += "  .classyes1{position:absolute;left:24px;top:255px;width:196px;height:50px;}\n";
	MetrixLab_HTMLString += "  .classclose{position:absolute;left:397px;top:16px;width:32px;height:32px;}\n";
	MetrixLab_HTMLString += "  .classno{position:absolute;left:241px;top:255px;width:185px;height:50px;}\n";
	MetrixLab_HTMLString += "  .classprivacy{position:absolute;left:242px;top:333px;width:45px;height:16px;}\n";
	MetrixLab_HTMLString += "  .classml{position:absolute;left:165px;top:334px;width:58px;height:12px;}\n";
	MetrixLab_HTMLString += "@media screen and (orientation:landscape) and (max-width : 1000px){\n";
	MetrixLab_HTMLString += "  .classorientation{\n";
	MetrixLab_HTMLString += "     background-image:url('"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/"+MetrixLab_OverlayImg2+"');\n";
	MetrixLab_HTMLString += "     width:350px;\n";
	MetrixLab_HTMLString += "     height:247px;\n";
	//MetrixLab_HTMLString += "     left:"+((MetrixLab_width-MetrixLab_OverlayWidth)/2)+"px;\n";
	MetrixLab_HTMLString += "     top:"+(40+((MetrixLab_height-MetrixLab_OverlayHeight)/2))+"px;\n";
	MetrixLab_HTMLString += "  }\n";
	MetrixLab_HTMLString += "  .classyes1{position:absolute;left:28px;top:171px;width:135px;height:38px;}\n";
	MetrixLab_HTMLString += "  .classno{position:absolute;left:188px;top:171px;width:135px;height:38px;}\n";
	MetrixLab_HTMLString += "  .classclose{position:absolute;left:307px;top:11px;width:26px;height:25px;}\n";
	MetrixLab_HTMLString += "  .classprivacy{position:absolute;left:187px;top:220px;width:33px;height:13px;}\n";
	MetrixLab_HTMLString += "  .classml{position:absolute;left:130px;top:220px;width:45px;height:12px;}\n";
	MetrixLab_HTMLString += "}\n";
	MetrixLab_HTMLString += "@media screen and (orientation:portrait){\n";
	MetrixLab_HTMLString += ".classorientation{\n";
	MetrixLab_HTMLString += "     background-image:url('"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/"+MetrixLab_OverlayImg+"');\n";
	MetrixLab_HTMLString += "     width:320px;\n";
	MetrixLab_HTMLString += "     height:358px;\n";
	//MetrixLab_HTMLString += "     left:"+((MetrixLab_width-MetrixLab_OverlayWidth)/2)+"px;\n";
	MetrixLab_HTMLString += "     top:"+((MetrixLab_height-MetrixLab_OverlayHeight)/2)+"px;\n";
	MetrixLab_HTMLString += "  }\n";
	//MetrixLab_HTMLString += "  #MetrixLab_overlay{position:absolute;left:42px !important;}\n";
	MetrixLab_HTMLString += "  .classyes1{position:absolute;left:75px;top:235px;width:172px;height:45px;}\n";
	MetrixLab_HTMLString += "  .classno{position:absolute;left:76px;top:284px;width:170px;height:45px;}\n";
	MetrixLab_HTMLString += "  .classclose{position:absolute;left:271px;top:13px;width:30px;height:30px;}\n";
	MetrixLab_HTMLString += "  .classprivacy{position:absolute;left:174px;top:336px;width:44px;height:14px;}\n";
	MetrixLab_HTMLString += "  .classml{position:absolute;left:103px;top:335px;width:55px;height:13px;}\n";
	MetrixLab_HTMLString += "}\n";
	MetrixLab_HTMLString += ".hand{cursor:pointer;cursor:hand;}\n";
	MetrixLab_HTMLString += "</style>\n";
    MetrixLab_HTMLString += "<div class='classorientation' id='MetrixLab_overlay' style='display:none;position:fixed; z-index:9999999;'>";    
    //MetrixLab_HTMLString += "<img onload='Metrixlab_SetDivVisible();' style='margin:0 auto;' src='"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/"+MetrixLab_OverlayImg+"' USEMAP='#MetrixLab_Popup_Map' alt='' border='0' width='"+MetrixLab_OverlayWidth+"' height='"+MetrixLab_OverlayHeight+"' name='MetrixLab_overlay_gif' id='MetrixLab_gif'>";
	MetrixLab_HTMLString += "<table border=0 cellspacing=0 cellpadding=0><tr><td>";
	MetrixLab_HTMLString += "</td></tr></table>";
    MetrixLab_HTMLString += "<div class='classyes1 hand' onclick='MetrixLab_GoToWebSurvey()' href='javascript:MetrixLab_Blank()' target='_self'></div>";
	MetrixLab_HTMLString += "<div class='classyes2 hand' onclick='MetrixLab_GoToWebSurvey()' href='javascript:MetrixLab_Blank()' target='_self'></div>";
	MetrixLab_HTMLString += "<div class='classclose hand' onclick='MetrixLab_CloseBanner()'></div>";
	MetrixLab_HTMLString += "<div class='classno hand' onclick='MetrixLab_CloseBanner()'></div>";
	MetrixLab_HTMLString += "<div class='classprivacy hand' onclick='MetrixLab_GoToPrivacy()'></div>";
	MetrixLab_HTMLString += "<div class='classml hand' onclick='MetrixLab_GoToMetrixLab()'></div>";
	MetrixLab_HTMLString += "</div>";
    
    var MetrixLab_Body=document.getElementsByTagName('body').item(0);
    var MetrixLab_Div = document.createElement('div');
    MetrixLab_Div.style.display='block';
    MetrixLab_Div.id='MetrixLab_Div';
    MetrixLab_Div.innerHTML = MetrixLab_HTMLString;
    MetrixLab_Body.appendChild(MetrixLab_Div);
	Metrixlab_SetDivVisible();

	/*$('.classorientation').css('top','0px');
	$('.classorientation').animate({top: MetrixLab_DivStartTop+'px'},3000);*/
}

function MetrixLab_SetElapsedSeconds()
{
	try
	{
		MetrixLab_ElapsedSoFar = parseInt(MetrixLab_ElapsedSoFar) + 1;
	}
	catch(error){MetrixLab_ElapsedSoFar = 0;};
	if(MetrixLab_ElapsedSoFar < MetrixLab_MaxMobileSeconds)
	{
		MetrixLab_SetCookieElapsed(MetrixLab_ElapsedSoFar);
	}
}

//PC
if(MetrixLab_OverlayTypeName == 0)
{
	if (MetrixLab_isCookieEnabled())
	{
		new metrixlab_onready("document", function(){MetrixLab_CheckIntercept()});
	}
}
else
{
	//Mobile and Tablet
	if (MetrixLab_isCookieEnabled())
	{
		new metrixlab_onready("document", function(){
			MetrixLab_ElapsedSoFar = MetrixLab_GetCookieValue("Elapsedp14827");
			try
			{
				MetrixLab_ElapsedSoFar = parseInt(MetrixLab_ElapsedSoFar);
			}
			catch(error){MetrixLab_ElapsedSoFar = 0;}
			if(parseInt(MetrixLab_ElapsedSoFar) < MetrixLab_MaxMobileSeconds)
			{
				var MetrixLab_MaxMobileSecondshelper = parseInt(MetrixLab_MaxMobileSeconds) - parseInt(MetrixLab_ElapsedSoFar);
				if (document.cookie.indexOf(MetrixLab_CookieName)==-1)
				{
					if(MetrixLab_MaxMobileSecondshelper > 0)
					{
						setTimeout("MetrixLab_CheckIntercept();",MetrixLab_MaxMobileSecondshelper*temptimevar);
						MetrixLab_counter = self.setInterval(function(){MetrixLab_SetElapsedSeconds()},1000);
					}
				}
			}
			else
			{
			
			}
		});
	}
	else
	{
		/*new metrixlab_onready("document", function(){
			setTimeout("MetrixLab_CheckInterceptNoCookie();",MetrixLab_MaxMobileSeconds*1000);
		});*/
	}
}
var ML_temp;
function swapdimensions(){
	ML_temp = MetrixLab_width;
	MetrixLab_width = MetrixLab_height;
	MetrixLab_height = ML_temp;
	document.getElementsByClassName('classorientation')[0].style.left = (40+((MetrixLab_width-MetrixLab_OverlayWidth)/2)) + "px";
	document.getElementsByClassName('classorientation')[0].style.top = (40+((MetrixLab_height-MetrixLab_OverlayHeight)/2)) + "px";
}
window.addEventListener('orientationchange', swapdimensions);