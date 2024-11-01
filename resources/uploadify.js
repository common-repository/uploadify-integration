/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/*
SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com

mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/

SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilzén and Mammon Media and is released under the MIT License:
http://www.opensource.org/licenses/mit-license.php
 
SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
http://www.opensource.org/licenses/mit-license.php
*/

var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(a){this.initSWFUpload(a)}}SWFUpload.prototype.initSWFUpload=function(b){try{this.customSettings={};this.settings=b;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo()}catch(a){delete SWFUpload.instances[this.movieName];throw a}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(a){if(typeof(a)!=="string"||a.match(/^https?:\/\//i)||a.match(/^\//)){return a}var c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var b=window.location.pathname.lastIndexOf("/");if(b<=0){path="/"}else{path=window.location.pathname.substr(0,b)+"/"}return path+a};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(b,a){this.settings[b]=(this.settings[b]==undefined)?a:this.settings[b]};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+new Date().getTime()}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)}delete this.ensureDefault};SWFUpload.prototype.loadFlash=function(){var a,b;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added"}a=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(a==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id}b=document.createElement("div");b.innerHTML=this.getFlashHTML();a.parentNode.replaceChild(b.firstChild,a);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement()}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")};SWFUpload.prototype.getFlashVars=function(){var b=this.buildParamString();var a=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(a),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(b),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName)}if(this.movieElement===null){throw"Could not find Flash element"}return this.movieElement};SWFUpload.prototype.buildParamString=function(){var c=this.settings.post_params;var b=[];if(typeof(c)==="object"){for(var a in c){if(c.hasOwnProperty(a)){b.push(encodeURIComponent(a.toString())+"="+encodeURIComponent(c[a].toString()))}}}return b.join("&amp;")};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var a=null;a=this.getMovieElement();if(a&&typeof(a.CallFunction)==="unknown"){for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(e){}}try{a.parentNode.removeChild(a)}catch(b){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true}catch(d){return false}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",(this.settings.button_placeholder?"Set":"Not Set"),"\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""))};SWFUpload.prototype.addSetting=function(b,c,a){if(c==undefined){return(this.settings[b]=a)}else{return(this.settings[b]=c)}};SWFUpload.prototype.getSetting=function(a){if(this.settings[a]!=undefined){return this.settings[a]}return""};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue)}return returnValue};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")};SWFUpload.prototype.startUpload=function(a){this.callFlash("StartUpload",[a])};SWFUpload.prototype.cancelUpload=function(a,b){if(b!==false){b=true}this.callFlash("CancelUpload",[a,b])};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")};SWFUpload.prototype.setStats=function(a){this.callFlash("SetStats",[a])};SWFUpload.prototype.getFile=function(a){if(typeof(a)==="number"){return this.callFlash("GetFileByIndex",[a])}else{return this.callFlash("GetFile",[a])}};SWFUpload.prototype.addFileParam=function(a,b,c){return this.callFlash("AddFileParam",[a,b,c])};SWFUpload.prototype.removeFileParam=function(a,b){this.callFlash("RemoveFileParam",[a,b])};SWFUpload.prototype.setUploadURL=function(a){this.settings.upload_url=a.toString();this.callFlash("SetUploadURL",[a])};SWFUpload.prototype.setPostParams=function(a){this.settings.post_params=a;this.callFlash("SetPostParams",[a])};SWFUpload.prototype.addPostParam=function(a,b){this.settings.post_params[a]=b;this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.removePostParam=function(a){delete this.settings.post_params[a];this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.setFileTypes=function(a,b){this.settings.file_types=a;this.settings.file_types_description=b;this.callFlash("SetFileTypes",[a,b])};SWFUpload.prototype.setFileSizeLimit=function(a){this.settings.file_size_limit=a;this.callFlash("SetFileSizeLimit",[a])};SWFUpload.prototype.setFileUploadLimit=function(a){this.settings.file_upload_limit=a;this.callFlash("SetFileUploadLimit",[a])};SWFUpload.prototype.setFileQueueLimit=function(a){this.settings.file_queue_limit=a;this.callFlash("SetFileQueueLimit",[a])};SWFUpload.prototype.setFilePostName=function(a){this.settings.file_post_name=a;this.callFlash("SetFilePostName",[a])};SWFUpload.prototype.setUseQueryString=function(a){this.settings.use_query_string=a;this.callFlash("SetUseQueryString",[a])};SWFUpload.prototype.setRequeueOnError=function(a){this.settings.requeue_on_error=a;this.callFlash("SetRequeueOnError",[a])};SWFUpload.prototype.setHTTPSuccess=function(a){if(typeof a==="string"){a=a.replace(" ","").split(",")}this.settings.http_success=a;this.callFlash("SetHTTPSuccess",[a])};SWFUpload.prototype.setAssumeSuccessTimeout=function(a){this.settings.assume_success_timeout=a;this.callFlash("SetAssumeSuccessTimeout",[a])};SWFUpload.prototype.setDebugEnabled=function(a){this.settings.debug_enabled=a;this.callFlash("SetDebugEnabled",[a])};SWFUpload.prototype.setButtonImageURL=function(a){if(a==undefined){a=""}this.settings.button_image_url=a;this.callFlash("SetButtonImageURL",[a])};SWFUpload.prototype.setButtonDimensions=function(c,a){this.settings.button_width=c;this.settings.button_height=a;var b=this.getMovieElement();if(b!=undefined){b.style.width=c+"px";b.style.height=a+"px"}this.callFlash("SetButtonDimensions",[c,a])};SWFUpload.prototype.setButtonText=function(a){this.settings.button_text=a;this.callFlash("SetButtonText",[a])};SWFUpload.prototype.setButtonTextPadding=function(b,a){this.settings.button_text_top_padding=a;this.settings.button_text_left_padding=b;this.callFlash("SetButtonTextPadding",[b,a])};SWFUpload.prototype.setButtonTextStyle=function(a){this.settings.button_text_style=a;this.callFlash("SetButtonTextStyle",[a])};SWFUpload.prototype.setButtonDisabled=function(a){this.settings.button_disabled=a;this.callFlash("SetButtonDisabled",[a])};SWFUpload.prototype.setButtonAction=function(a){this.settings.button_action=a;this.callFlash("SetButtonAction",[a])};SWFUpload.prototype.setButtonCursor=function(a){this.settings.button_cursor=a;this.callFlash("SetButtonCursor",[a])};SWFUpload.prototype.queueEvent=function(b,c){if(c==undefined){c=[]}else{if(!(c instanceof Array)){c=[c]}}var a=this;if(typeof this.settings[b]==="function"){this.eventQueue.push(function(){this.settings[b].apply(this,c)});setTimeout(function(){a.executeNextEvent()},0)}else{if(this.settings[b]!==null){throw"Event handler "+b+" is unknown or is not a function"}}};SWFUpload.prototype.executeNextEvent=function(){var a=this.eventQueue?this.eventQueue.shift():null;if(typeof(a)==="function"){a.apply(this)}};SWFUpload.prototype.unescapeFilePostParams=function(c){var e=/[$]([0-9a-f]{4})/i;var f={};var d;if(c!=undefined){for(var a in c.post){if(c.post.hasOwnProperty(a)){d=a;var b;while((b=e.exec(d))!==null){d=d.replace(b[0],String.fromCharCode(parseInt("0x"+b[1],16)))}f[d]=c.post[a]}}c.post=f}return c};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(a){return false}};SWFUpload.prototype.flashReady=function(){var a=this.getMovieElement();if(!a){this.debug("Flash called back ready but the flash movie can't be found.");return}this.cleanUp(a);this.queueEvent("swfupload_loaded_handler")};SWFUpload.prototype.cleanUp=function(a){try{if(this.movieElement&&typeof(a.CallFunction)==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(b){}}}}catch(d){}window.__flash__removeCallback=function(e,f){try{if(e){e[f]=null}}catch(g){}}};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")};SWFUpload.prototype.fileQueued=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("file_queued_handler",a)};SWFUpload.prototype.fileQueueError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("file_queue_error_handler",[a,c,b])};SWFUpload.prototype.fileDialogComplete=function(b,c,a){this.queueEvent("file_dialog_complete_handler",[b,c,a])};SWFUpload.prototype.uploadStart=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("return_upload_start_handler",a)};SWFUpload.prototype.returnUploadStart=function(a){var b;if(typeof this.settings.upload_start_handler==="function"){a=this.unescapeFilePostParams(a);b=this.settings.upload_start_handler.call(this,a)}else{if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function"}}if(b===undefined){b=true}b=!!b;this.callFlash("ReturnUploadStart",[b])};SWFUpload.prototype.uploadProgress=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_progress_handler",[a,c,b])};SWFUpload.prototype.uploadError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_error_handler",[a,c,b])};SWFUpload.prototype.uploadSuccess=function(b,a,c){b=this.unescapeFilePostParams(b);this.queueEvent("upload_success_handler",[b,a,c])};SWFUpload.prototype.uploadComplete=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("upload_complete_handler",a)};SWFUpload.prototype.debug=function(a){this.queueEvent("debug_handler",a)};SWFUpload.prototype.debugMessage=function(c){if(this.settings.debug){var a,d=[];if(typeof c==="object"&&typeof c.name==="string"&&typeof c.message==="string"){for(var b in c){if(c.hasOwnProperty(b)){d.push(b+": "+c[b])}}a=d.join("\n")||"";d=a.split("\n");a="EXCEPTION: "+d.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(a)}else{SWFUpload.Console.writeLine(c)}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(d){var b,a;try{b=document.getElementById("SWFUpload_Console");if(!b){a=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(a);b=document.createElement("textarea");b.id="SWFUpload_Console";b.style.fontFamily="monospace";b.setAttribute("wrap","off");b.wrap="off";b.style.overflow="auto";b.style.width="700px";b.style.height="350px";b.style.margin="5px";a.appendChild(b)}b.value+=d+"\n";b.scrollTop=b.scrollHeight-b.clientHeight}catch(c){alert("Exception: "+c.name+" Message: "+c.message)}};

/*
Uploadify v3.0.0
Copyright (c) 2010 Ronnie Garcia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


jQuery.extend(jQuery.fn,{
	uploadify:function(options,swfUploadOptions) {
		jQuery(this).each(function() {
			var clone    = jQuery(this).clone();
			var settings = jQuery.extend({
				// Required Settings
				id       : jQuery(this).attr('id'),
				swf      : wp_localized.relative_url + '/resources/uploadify.swf',
				uploader : 'uploadify.php',						
				// Options
				auto : false,
				buttonClass     : '',
				buttonCursor    : 'hand',
				buttonImage     : false,
				buttonText      : 'Upload',
				cancelImage     : wp_localized.relative_url + '/resources/cancel.png',
				preUploadCallback : false,
				debug           : false,
				fileObjName     : 'Filedata',
				fileSizeLimit   : 0,
				fileTypeDesc    : 'All Files (*.*)',
				fileTypeExts    : '*.*',
				height          : 30,
				method          : 'post',
				multi           : false,
				queueID         : false,
				queueSizeLimit  : 999,
				removeCompleted : true,
				removeTimeout   : 3,
				requeueErrors   : true,
				postData        : {},
				preventCaching  : true,
				progressData    : 'percentage',
				// simUploadLimit  : 1, // Not possible with swfUpload
				successTimeout  : 30,
				transparent     : true,
				uploadLimit     : 999,
				uploaderType    : 'html5', // the other option is 'flash'
				width           : 120,
				
				// Events
				skipDefault      : [],
				onClearQueue     : function() {},
				onDialogOpen     : function() {},
				onDialogClose    : function() {},
				onInit           : function() {},
				onQueueComplete  : function() {},
				onSelectError    : function() {},
				onSelect         : function() {},
				onSWFReady       : function() {},
				onUploadCancel   : function() {},
				onUploadComplete : function() {},
				onUploadError    : function() {},
				onUploadProgress : function() {},
				onUploadStart    : function() {}
			}, options);
			
			var swfUploadSettings = {
				assume_success_timeout   : settings.successTimeout,
				button_placeholder_id    : settings.id,
				button_image_url         : settings.buttonImage,
				button_width             : settings.width,
				button_height            : settings.height,
				button_text              : null,
				button_text_style        : null,
				button_text_top_padding  : 0,
				button_text_left_padding : 0,
				button_action            : (settings.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE),
				button_disabled          : false,
				button_cursor            : (settings.buttonCursor == 'arrow' ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND),
				button_window_mode       : (settings.transparent && !settings.buttonImage ? SWFUpload.WINDOW_MODE.TRANSPARENT : SWFUpload.WINDOW_MODE.OPAQUE),
				debug                    : settings.debug,						
				requeue_on_error         : settings.requeueErrors,
				file_post_name           : settings.fileObjName,
				file_size_limit          : settings.fileSizeLimit,
				file_types               : settings.fileTypeExts,
				file_types_description   : settings.fileTypeDesc,
				file_queue_limit         : settings.queueSizeLimit,
				file_upload_limit        : settings.uploadLimit,
				flash_url                : settings.swf,					
				prevent_swf_caching      : settings.preventCaching,
				post_params              : settings.postData,
				upload_url               : settings.uploader,
				use_query_string         : (settings.method == 'get'),
				
				// Event Handlers 
				file_dialog_complete_handler : onDialogClose,
				file_dialog_start_handler    : onDialogOpen,
				file_queued_handler          : onSelect,
				file_queue_error_handler     : onSelectError,
				flash_ready_handler          : settings.onSWFReady,
				upload_complete_handler      : onUploadComplete,
				upload_error_handler         : onUploadError,
				upload_progress_handler      : onUploadProgress,
				upload_start_handler         : onUploadStart,
				upload_success_handler       : onUploadSuccess
			}
			if (swfUploadOptions) {
				swfUploadSettings = jQuery.extend(swfUploadSettings,swfUploadOptions);
			}
			swfUploadSettings = jQuery.extend(swfUploadSettings,settings);
			
			// Create the swfUpload instance
			window['uploadify_' + settings.id] = new SWFUpload(swfUploadSettings);
			var swfuploadify = window['uploadify_' + settings.id];
			swfuploadify.original = clone;
			
			// Wrap the uploadify instance
			var wrapper = jQuery('<div />',{
				id      : settings.id,
				'class' : 'uploadify',
				css     : {
					'height'   : settings.height + 'px',
					'position' : 'relative',
					'width'    : settings.width + 'px'
				}
			});
			jQuery('#' + swfuploadify.movieName).wrap(wrapper);
			
			// Create the file queue
			if (!settings.queueID) {
				var queue = jQuery('<div />', {
					id      : settings.id + '_queue',
					'class' : 'uploadifyQueue'
				});
				jQuery('#' + settings.id).after(queue);
				swfuploadify.settings.queueID = settings.queueID = settings.id + '_queue';
			}
			
			// Create some queue related objects and variables
			swfuploadify.queue = {
				files              : {}, // The files in the queue
				filesSelected      : 0, // The number of files selected in the last select operation
				filesQueued        : 0, // The number of files added to the queue in the last select operation
				filesReplaced      : 0, // The number of files replaced in the last select operation
				filesCancelled     : 0, // The number of files that were cancelled instead of replaced
				filesErrored       : 0, // The number of files that caused error in the last select operation
				averageSpeed       : 0, // The average speed of the uploads in KB
				queueLength        : 0, // The number of files in the queue
				queueSize          : 0, // The size in bytes of the entire queue
				uploadSize         : 0, // The size in bytes of the upload queue
				queueBytesUploaded : 0, // The size in bytes that have been uploaded for the current upload queue
				uploadQueue        : [], // The files currently to be uploaded
				errorMsg           : 'Some files were not added to the queue:'
			};
			
			// Create the button
			if (!settings.buttonImage) {
				var button = jQuery('<div />', {
					id      : settings.id + '_button',
					'class' : 'uploadifyButton ' + settings.buttonClass,
					html    : '<span class="uploadifyButtonText">' + settings.buttonText + '</span>'
				});
				jQuery('#' + settings.id).append(button);
				jQuery('#' + swfuploadify.movieName).css({position: 'absolute', 'z-index': 1});
			} else {
				jQuery('#' + swfuploadify.movieName).addClass(settings.buttonClass);
			}
			
			// -----------------------------
			// Begin Event Handler Functions
			// -----------------------------
			
			// Triggered once when file dialog is closed
			function onDialogClose(filesSelected,filesQueued,queueLength) {
				var stats                     = swfuploadify.getStats();
				swfuploadify.queue.filesErrored  = filesSelected - filesQueued;
				swfuploadify.queue.filesSelected = filesSelected;
				swfuploadify.queue.filesQueued   = filesQueued - swfuploadify.queue.filesCancelled;
				swfuploadify.queue.queueLength   = queueLength;
				if (jQuery.inArray('onDialogClose',swfuploadify.settings.skipDefault) < 0) {
					if (swfuploadify.queue.filesErrored > 0) {
						alert(swfuploadify.queue.errorMsg);
					}
				}
				if (swfuploadify.settings.onDialogClose) swfuploadify.settings.onDialogClose(swfuploadify.queue);
				if (swfuploadify.settings.auto) jQuery('#' + swfuploadify.settings.id).uploadifyUpload('*');
			}
			
			function onDialogOpen() {
				// Reset some queue info
				swfuploadify.queue.errorMsg       = 'Some files were not added to the queue:';
				swfuploadify.queue.filesReplaced  = 0;
				swfuploadify.queue.filesCancelled = 0;
				if (swfuploadify.settings.onDialogOpen) swfuploadify.settings.onDialogOpen();
			}
			
			// Triggered once for each file added to the queue
			function onSelect(file) {
				if (jQuery.inArray('onSelect',swfuploadify.settings.skipDefault) < 0) {
					// Check if a file with the same name exists in the queue
					var queuedFile = {};
					for (var n in swfuploadify.queue.files) {
						queuedFile = swfuploadify.queue.files[n];
						if (queuedFile.name == file.name) {
							var replaceQueueItem = confirm('The file named "' + file.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
							if (!replaceQueueItem) {
								swfuploadify.cancelUpload(file.id);
								swfuploadify.queue.filesCancelled++;
								return false;
							} else {
								jQuery('#' + queuedFile.id).remove();
								swfuploadify.cancelUpload(queuedFile.id);
								swfuploadify.queue.filesReplaced++;
							}
						}
					}
					
					// Get the size of the file
					var fileSize = Math.round(file.size / 1024);
					var suffix   = 'KB';
					if (fileSize > 1000) {
						fileSize = Math.round(fileSize / 1000);
						suffix   = 'MB';
					}
					var fileSizeParts = fileSize.toString().split('.');
					fileSize = fileSizeParts[0];
					if (fileSizeParts.length > 1) {
						fileSize += '.' + fileSizeParts[1].substr(0,2);
					}
					fileSize += suffix;
					
					// Truncate the filename if it's too long
					var fileName = file.name;
					if (fileName.length > 25) {
						fileName = fileName.substr(0,25) + '...';
					}
					
					// Add the file item to the queue
					jQuery('#' + swfuploadify.settings.queueID).append('<div id="' + file.id + '" class="uploadifyQueueItem">\
						<div class="cancel">\
							<a href="javascript:jQuery(\'#' + swfuploadify.settings.id + '\').uploadifyCancel(\'' + file.id + '\')"><img src="' + swfuploadify.settings.cancelImage + '" border="0" /></a>\
						</div>\
						<span class="fileName">' + fileName + ' (' + fileSize + ')</span><span class="data"></span>\
						<div class="uploadifyProgress">\
							<div class="uploadifyProgressBar"><!--Progress Bar--></div>\
						</div>\
					</div>');
					swfuploadify.queue.queueSize += file.size;
				}
				swfuploadify.queue.files[file.id] = file;
				if (swfuploadify.settings.onSelect) swfuploadify.settings.onSelect(file);
			}
			
			// Triggered when a file is not added to the queue
			function onSelectError(file,errorCode,errorMsg) {
				if (jQuery.inArray('onSelectError',swfuploadify.settings.skipDefault) < 0) {
					switch(errorCode) {
						case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
							if (swfuploadify.settings.queueSizeLimit > errorMsg) {
								swfuploadify.queue.errorMsg += '\nThe number of files selected exceeds the remaining upload limit (' + errorMsg + ').';
							} else {
								swfuploadify.queue.errorMsg += '\nThe number of files selected exceeds the queue size limit (' + swfuploadify.settings.queueSizeLimit + ').';
							}
							break;
						case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
							swfuploadify.queue.errorMsg += '\nThe file "' + file.name + '" exceeds the size limit (' + swfuploadify.settings.fileSizeLimit / 1048   + 'M).';
							break;
						case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
							swfuploadify.queue.errorMsg += '\nThe file "' + file.name + '" is empty.';
							break;
						case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
							swfuploadify.queue.errorMsg += '\nThe file "' + file.name + '" is not an accepted file type (' + swfuploadify.settings.fileTypeDesc + ').';
							break;
					}
				}
				if (errorCode != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
					delete swfuploadify.queue.files[file.id];
				}
				if (swfuploadify.settings.onSelectError) swfuploadify.settings.onSelectError(file,errorCode,errorMsg);
			}
			
			// Triggered when all the files in the queue have been processed
			function onQueueComplete() {
				var stats = swfuploadify.getStats();
				if (swfuploadify.settings.onQueueComplete) swfuploadify.settings.onQueueComplete(stats);
			}
			
			// Triggered when a file upload successfully completes
			function onUploadComplete(file) {
				var stats = swfuploadify.getStats();
				swfuploadify.queue.queueLength = stats.files_queued;
				if (swfuploadify.queue.uploadQueue[0] == '*') {
					if (swfuploadify.queue.queueLength > 0) {
						swfuploadify.startUpload();
					} else {
						swfuploadify.queue.uploadQueue = [];
						if (swfuploadify.settings.onQueueComplete) swfuploadify.settings.onQueueComplete(stats);
					}
				} else {
					if (swfuploadify.queue.uploadQueue.length > 0) {
						swfuploadify.startUpload(swfuploadify.queue.uploadQueue.shift());
					} else {
						swfuploadify.queue.uploadQueue = [];
						if (swfuploadify.settings.onQueueComplete) setting.onQueueComplete(stats);
					}
				}
				if (jQuery.inArray('onUploadComplete',swfuploadify.settings.skipDefault) < 0) {
					if (swfuploadify.settings.removeCompleted) {
						switch (file.filestatus) {
							case SWFUpload.FILE_STATUS.COMPLETE:
								if (jQuery('#' + file.id)) {
									swfuploadify.queue.queueSize -= file.size;
									delete swfuploadify.queue.files[file.id]
									jQuery('#' + file.id).fadeOut(100,function() {
										jQuery(this).remove();
									});
								}										
								break;
							case SWFUpload.FILE_STATUS.ERROR:
								if (!swfuploadify.settings.requeueErrors) {
									setTimeout(function() {
										if (jQuery('#' + file.id)) {
											swfuploadify.queue.queueSize -= file.size;
											delete swfuploadify.queue.files[file.id];
											jQuery('#' + file.id).fadeOut(500,function() {
												jQuery(this).remove();
											});
										}
									},swfuploadify.settings.removeTimeout * 1000);
								}
								break;
						}
					}
				}
				if (swfuploadify.settings.onUploadComplete) swfuploadify.settings.onUploadComplete(file,swfuploadify.queue);
			}
			
			// Triggered when a file upload returns an error
			function onUploadError(file,errorCode,errorMsg) {
				var errorString = 'Error';
				if (errorCode != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && errorCode != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
					jQuery('#' + file.id).addClass('uploadifyError');
				}
				jQuery('#' + file.id).find('.uploadifyProgressBar').css('width','1px');
				switch(errorCode) {
					case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
						errorString = 'HTTP Error (' + errorMsg + ')';
						break;
					case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
						errorString = 'Missing Upload URL';
						break;
					case SWFUpload.UPLOAD_ERROR.IO_ERROR:
						errorString = 'IO Error';
						break;
					case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
						errorString = 'Security Error';
						break;
					case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
						alert('The upload limit has been reached (' + errorMsg + ').');
						errorString = 'Exceeds Upload Limit';
						break;
					case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
						errorString = 'Failed';
						break;
					case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
						break;
					case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
						errorString = 'Validation Error';
						break;
					case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
						errorString = 'Cancelled';
						swfuploadify.queue.queueSize -= file.size;
						if (file.status == SWFUpload.FILE_STATUS.IN_PROGRESS || jQuery.inArray(file.id,swfuploadify.queue.uploadQueue) >= 0) {
							swfuploadify.queue.uploadSize -= file.size;
						}
						delete swfuploadify.queue.files[file.id];
						break;
					case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
						errorString = 'Stopped';
						break;
				}
				if (errorCode != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && file.status != SWFUpload.FILE_STATUS.COMPLETE) {
					jQuery('#' + file.id).find('.data').html(' - ' + errorString);
				}
				if (swfuploadify.settings.onUploadError) swfuploadify.settings.onUploadError(file,errorCode,errorMsg,errorString,swfuploadify.queue);
			}
			
			// Triggered periodically during a file upload
			function onUploadProgress(file,fileBytesLoaded,fileTotalBytes) {
				var timer                = new Date();
				var newTime              = timer.getTime();
				var lapsedTime           = newTime - swfuploadify.timer;
				swfuploadify.timer       = newTime;
				var lapsedBytes          = fileBytesLoaded - swfuploadify.bytesLoaded;
				swfuploadify.bytesLoaded = fileBytesLoaded;
				var queueBytesLoaded     = swfuploadify.queue.queueBytesUploaded + fileBytesLoaded;
				var percentage           = Math.round(fileBytesLoaded / fileTotalBytes * 100);
				
				// Calculate the average speed
				var mbs = 0;
				var kbs = (lapsedBytes / 1024) / (lapsedTime / 1000);
				kbs     = Math.floor(kbs * 10) / 10;
				if (swfuploadify.queue.averageSpeed > 0) {
					swfuploadify.queue.averageSpeed = (swfuploadify.queue.averageSpeed + kbs) / 2;
				} else {
					swfuploadify.queue.averageSpeed = kbs;
				}
				if (kbs > 1000) {
					mbs = (kbs * .001);
					swfuploadify.queue.averageSpeed = mbs;
				}
				var suffix = 'KB/s';
				if (mbs > 0) {
					suffix = 'MB/s';
				}
				
				if (jQuery.inArray('onUploadProgress',swfuploadify.settings.skipDefault) < 0) {
					if (swfuploadify.settings.progressData == 'percentage') {
						jQuery('#' + file.id).find('.data').html(' - ' + percentage + '%');
					} else if (swfuploadify.settings.progressData == 'speed') {
						jQuery('#' + file.id).find('.data').html(' - ' + percentage + suffix);
					}
					jQuery('#' + file.id).find('.uploadifyProgressBar').css('width',percentage + '%');
				}
				if (swfuploadify.settings.onUploadProgress) swfuploadify.settings.onUploadProgress(file,fileBytesLoaded,fileTotalBytes,queueBytesLoaded,swfuploadify.queue.uploadSize);
			}
			
			// Triggered right before a file is uploaded
			function onUploadStart(file) {
				var timer                = new Date();
				swfuploadify.timer       = timer.getTime();
				swfuploadify.bytesLoaded = 0;
				if (swfuploadify.queue.uploadQueue.length == 0) {
					swfuploadify.queue.uploadSize = file.size;
				}
				if (swfuploadify.settings.preUploadCallback !== false) {
					swfuploadify.settings.preUploadCallback( file );
				}
				if (swfuploadify.settings.onUploadStart) swfuploadify.settings.onUploadStart(file); 
			}
			
			// Triggered when a file upload returns a successful code
			function onUploadSuccess(file,data,response) {
				swfuploadify.queue.queueBytesUploaded += file.size;
				jQuery('#' + file.id).find('.data').html(' - Complete');
				if (swfuploadify.settings.onUploadSuccess) swfuploadify.settings.onUploadSuccess(file,data,response); 
			}
			
			// ---------------------------
			// End Event Handler Functions
			// ---------------------------
		});
	},
	
	// Cancel a file upload and remove it from the queue
	uploadifyCancel:function(fileID) {
		var id           = jQuery(this).selector.replace('#','');
		var swfuploadify = window['uploadify_' + id];
		var delay        = -1;
		if (arguments[0]) {
			if (arguments[0] == '*') {
				jQuery('#' + swfuploadify.settings.queueID).find('.uploadifyQueueItem').each(function() {
					delay++;
					swfuploadify.cancelUpload(jQuery(this).attr('id'));
					jQuery(this).delay(100 * delay).fadeOut(500,function() {
						jQuery(this).remove();
						
					});
				});
				swfuploadify.queue.queueSize = 0;
			} else {
				for (var n = 0; n < arguments.length; n++) {
					swfuploadify.cancelUpload(arguments[n]);
					jQuery('#' + arguments[n]).delay(100 * n).fadeOut(500,function() {
						jQuery(this).remove();
					});
				}
			}
		} else {
			jQuery('#' + swfuploadify.settings.queueID).find('.uploadifyQueueItem').get(0).fadeOut(500,function() {
				jQuery(this).remove();
				swfuploadify.cancelUpload(jQuery(this).attr('id'));
			});
		}
	},
	
	// Get rid of the instance of Uploadify
	uploadifyDestroy:function() {
		var id           = jQuery(this).selector.replace('#','');
		var swfuploadify = window['uploadify_' + id];
		swfuploadify.destroy();
		jQuery('#' + id + '_queue').remove();
		jQuery('#' + id).replaceWith(swfuploadify.original);
		delete window['uploadify_' + id];
	},
	
	// Disable the select button
	uploadifyDisable:function(isDisabled) {
		var id           = jQuery(this).selector.replace('#','');
		var swfuploadify = window['uploadify_' + id];
		swfuploadify.setButtonDisabled(isDisabled);
	},
	
	// Update or retrieve a setting
	uploadifySettings:function(name,value,resetObjects) {
		var id           = jQuery(this).selector.replace('#','');
		var swfuploadify = window['uploadify_' + id];
		if (typeof(arguments[0]) == 'object') {
			for (var n in value) {
				setData(n,value[n]);
			}
		}
		if (arguments.length == 1) {
			return swfuploadify.settings[name];
		} else {
			setData(name,value,resetObjects);
		}
		
		function setData(settingName,settingValue,resetObjects) {
			switch (settingName) {
				case 'uploader':
					swfuploadify.setUploadURL(settingValue);
					break;
				case 'postData':
					if (!resetObjects) {
						value = jQuery.extend(swfuploadify.settings.postData,settingValue);
					}
					swfuploadify.setPostParams(settingValue);
					break;
				case 'method':
					if (settingValue == 'get') {
						swfuploadify.setUseQueryString(true);
					} else {
						swfuploadify.setUseQueryString(false);
					}
					break;
				case 'fileObjName':
					swfuploadify.setFilePostName(settingValue);
					break;
				case 'fileTypeExts':
					swfuploadify.setFileTypes(settingValue,swfuploadify.settings.fileTypeDesc);
					break;
				case 'fileTypeDesc':
					swfuploadify.setFileTypes(swfuploadify.settings.fileTypeExts,settingValue);
					break;
				case 'fileSizeLimit':
					swfuploadify.setFileSizeLimit(settingValue);
					break;
				case 'uploadLimit':
					swfuploadify.setFileUploadLimit(settingValue);
					break;
				case 'queueSizeLimit':
					swfuploadify.setFileQueueLimit(settingValue);
					break;
				case 'buttonImage':
					jQuery('#' + swfuploadify.settings.id + '_button').remove();
					swfuploadify.setButtonImageURL(settingValue);
					break;
				case 'buttonCursor':
					if (settingValue == 'arrow') {
						swfuploadify.setButtonCursor(SWFUpload.CURSOR.ARROW);
					} else {
						swfuploadify.setButtonCursor(SWFUpload.CURSOR.HAND);
					}
					break;
				case 'buttonText':
					jQuery('#' + swfuploadify.settings.id + '_button').find('.uploadifyButtonText').html(settingValue);
					break;
				case 'width':
					swfuploadify.setButtonDimensions(settingValue,swfuploadify.settings.height);
					break;
				case 'height':
					swfuploadify.setButtonDimensions(swfuploadify.settings.width,settingValue);
					break;
				case 'multi':
					if (settingValue) {
						swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES);
					} else {
						swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE);
					}
					break;
			}
			swfuploadify.settings[settingName] = value;
		}
	},
	
	// Stop the current upload and requeue what is in progress
	uploadifyStop:function() {
		var id           = jQuery(this).selector.replace('#','');
		var swfuploadify = window['uploadify_' + id];
		swfuploadify.stopUpload();
	},
	
	// Upload the first file, a select number of files, or all the files in the queue
	uploadifyUpload:function() {
		var id           = jQuery(this).selector.replace('#','');
		var swfuploadify = window['uploadify_' + id];
		
		// Reset the queue information
		swfuploadify.queue.averageSpeed  = 0;
		swfuploadify.queue.uploadSize    = 0;
		swfuploadify.queue.bytesUploaded = 0;
		swfuploadify.queue.uploadQueue   = [];
		
		if (arguments[0]) {
			if (arguments[0] == '*') {
				swfuploadify.queue.uploadSize = swfuploadify.queue.queueSize;
				swfuploadify.queue.uploadQueue.push('*');
				swfuploadify.startUpload();
			} else {
				for (var n = 0; n < arguments.length; n++) {
					swfuploadify.queue.uploadSize += swfuploadify.queue.files[arguments[n]].size;
					swfuploadify.queue.uploadQueue.push(arguments[n]);
				}
				swfuploadify.startUpload(swfuploadify.queue.uploadQueue.shift());
			}
		} else {
			swfuploadify.startUpload();
		}
	}
});

jQuery( document ).ready( function( $ ) {
	// apply uploadify to upload areas
	$( '.uploadify' ).each( function( index, value ) {
	
		var wrapper = $( '#' + $( this ).attr( 'id' ) + '-wrapper' );
		var parentId = $( '.parentId', wrapper ).val();
		var inputname = $( '.inputName', wrapper ).val();
		var metatype = $('.metaType', wrapper ).val();
		var uploadmode = $('.uploadMode', wrapper ).val();
		var path = $('.path', wrapper ).val();
		var url = $('.url', wrapper ).val();
	
		var select_multiple = false;
		if ( 'multiple' == uploadmode ) select_multiple = true;
	
		if (swfobject.hasFlashPlayerVersion("6.0.0")) { // flash support?

			$( this ).uploadify( {
				//uploader : wp_localized.relative_url + '/fc/fc.upload.php',
				uploader :  wp_localized.ajax_url,
				fileTypeExts : $( '.fileTypeExts', wrapper ).val(),
				fileTypeDesc : $( '.fileTypeDesc', wrapper ).val(),
				buttonText :  $( '.buttonText', wrapper ).val(),
				fileSizeLimit : $( '.fileSizeLimit', wrapper ).val() * 1048,
				auto : true,
				multi : select_multiple,
				postData: {
					action : 'uploadify_upload',
					logged_in_cookie : wp_localized.logged_in_cookie,
					session_id : wp_localized.session_id,
					parentId : parentId,
					inputname : inputname,
					metatype : metatype,
					uploadmode : uploadmode,
					path : path,
					url : url
				},
				onUploadSuccess : function( file, data, response ) {
					$( '.uploadify-files-wrapper', wrapper ).html( data );
				}
			} );
		} else {
			wrapper.html( '<a style="font-weight:bold;" href="http://get.adobe.com/flashplayer/">This uploader requires Adobe Flash Player</a></p>' );
		}
	} );

	// listener to remove files
	$( '.uploadify-remove' ).live( 'click', function( event ) {
	
		var fileWrapper = $( '.uploadify-file' ).has( this );
		var uploadedWrapper = fileWrapper.parent();
		var mainWrapper = uploadedWrapper.parent();
	
		var parentId = $( '.parentId', mainWrapper ).val();
		var inputName = $( '.inputName', mainWrapper ).val();
		var fileId = $( '.fileid', fileWrapper ).val();
		var metaType = $( '.metaType', mainWrapper ).val();
		
		fileWrapper.remove();
		
		$.ajax( {
			url : wp_localized.ajax_url,
			type : 'POST',
			data : {
				action : 'remove_uploadify_file',
				fileId : fileId,
				parentId : parentId,
				inputName : inputName,
				metaType : metaType
			}
		} );
	} );
	
} );
