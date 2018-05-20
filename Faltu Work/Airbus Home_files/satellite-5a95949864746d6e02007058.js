_satellite.pushAsyncScript(function(event, target, $variables){
  (function()
{
var ML_img_ServerOnline=new Image();
var MetrixLab_Protocol = document.location.protocol;
ML_img_ServerOnline.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/ServerOnline.gif';
ML_img_ServerOnline.onload=ML_ImageLoaded;
ML_img_ServerOnline.onabort=ML_ImageLoaded;
ML_img_ServerOnline.onerror=ML_ImageError;

function ML_ImageLoaded()
{
    function metrixlab_onready(el, func){
	this.args = new Array(el, func);
	this.doTry = function(){
		try{
			var el = eval(this.args[0]);
			el.onload = this.args[1];
			el.onload();
			clearInterval(this.args[2]);
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
	return this;
    }

    new metrixlab_onready("document", function(){
	var metrixlab_body = top.document.getElementsByTagName('body').item(0);
	var metrixlab_script = top.document.createElement('script');
	metrixlab_script.setAttribute('defer','defer');
	metrixlab_script.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/p57983/overlay.js';
	metrixlab_script.type='text/javascript';
	metrixlab_body.insertBefore(metrixlab_script, metrixlab_body.childNodes[0]);
    });
}
function ML_ImageAborted()
{
    
}
function ML_ImageError()
{
    
}

})()

});
