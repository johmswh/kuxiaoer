/**
 * onKST(text,isMobile,cv)
 * 璇S鍑芥暟鐨勪綔鐢ㄦ槸鑻ュ揩鍟嗛€氱殑浠ｇ爜鍔犺浇瀹屾垚,鍒欒皟鐢ㄥ揩鍟嗛€氳嚜甯︾殑鎵撳紑鑱婂ぉ绐楀彛鐨勫嚱鏁�
 * 鍚﹀垯鐩存帴鎵撳紑閾炬帴鍦板潃,骞剁敤缃戠珯鑷繁鑾峰彇鍒扮殑鏉ユ簮鐨勫璇濈綉鍧€鍙傛暟浼犻€掔粰鑱婂ぉ绐楀彛
 * 娉�: 浼氱洿鎺ユ墦寮€閾炬帴鍦板潃鐨勬儏鍐垫槸,瀹㈡埛鍦ㄦ病鏈夌敓鎴愬揩鍟嗛€氱殑鍥炬爣鍓嶅氨鐐瑰嚮浜嗛〉闈笂鐨勫挩璇㈤摼鎺ユ椂瑙﹀彂鐨�
 * 鐢ㄦ硶涓句緥:
 *      1. <a href="javascript:void(0)" onClick="onKST();">鍦ㄧ嚎鍜ㄨ</a>;
 *		2. <a href="javascript:void(0)" onClick="onKST('zhuanti');">鍦ㄧ嚎鍜ㄨ</a>;
 *		3. <a href="javascript:void(0)" onClick="onKST('zhuanti',true,'璁垮杈撳叆鐨勪俊鎭�');">鍦ㄧ嚎鍜ㄨ</a>;
 * 
 * 鏇存柊鍐呭锛�
 * 	2018-06-13 guxi 
 * 		1銆佹坊鍔犺嚜鍔ㄨ瘑鍒槸鍚︽敮鎸乭ttps锛堥儴鍒嗚€佹棫鐨勬祻瑙堝櫒涓嶆敮鎸乭ttps鐨勮璇佹満鍒讹紝瀵艰嚧鍦ㄩ珮闃查偅杈规棤娉曢€氳繃楠岃瘉锛夛紝鍦ㄤ笉鏀寔鐨勬儏鍐典笅淇鐢熸垚浠ｇ爜鍜岄摼鎺ュ湴鍧€
 * 		2銆佷慨鏀瑰弬鏁拌鏄� -- 娣诲姞鎸囧畾鏃剁殑鏁堟灉璇存槑	
 * 
 * @param text 瀵硅瘽鏍囪瘑锛屽彲涓嶆寚瀹� 濡傛灉鎸囧畾锛屽璇濆缓绔嬬殑鏃跺€欏皢浣滀负瀵硅瘽鏍囪瘑浼犲叆
 * @param isMobile 鏄惁鏄墜鏈猴紝鍙笉鎸囧畾  濡傛灉鎸囧畾涓簍rue锛屽湪ksChatLink鏈寚瀹氫娇鐢ㄦ墜鏈洪摼鎺ュ湴鍧€鐨勬儏鍐典笅寮哄埗浣跨敤鎵嬫満瀵硅瘽绐楀彛锛屽惁鍒欑敱绯荤粺鍒ゆ柇鏄娇鐢ㄦ墜鏈哄璇濈獥鍙ｈ繕鏄疨C瀵硅瘽绐楀彛
 * @param cv  闇€浼犲叆蹇晢閫氬挩璇㈢獥鍙ｇ殑鍐呭锛屽彲涓嶆寚瀹�  濡傛灉鎸囧畾锛岃亰澶╃獥鍙ｆ垚鍔熷缓绔嬪璇濇椂浼氫互璁垮鐨勮韩浠介┈涓婂彂閫佽淇℃伅
 * @author drc
 * @since 2017-04-27
 * @version 2.1
 */

var onKST = (function(){
	/*
	 * 鍙傛暟璁惧畾 -- 閾炬帴鍦板潃  
	 * 		璇锋浛鎹㈡垚"鐢熸垚浠ｇ爜 - 閾炬帴鍦板潃" 涓殑閾炬帴鍦板潃,涓嶈鍘诲叾浠栧湴鏂瑰鍒�  
	 * 		寤鸿澶嶅埗PC鐢熸垚浠ｇ爜涓殑閾炬帴鍦板潃锛岄偅鏍蜂細鏍规嵁璁惧鑷€傚簲浣跨敤鐨勬墜鏈哄璇濈獥鍙ｈ繕鏄疨C瀵硅瘽绐楀彛
	 */
	//var ksChatLink = 'https://test.kuaishang.cn/bs/im.htm?&cas=1061___168168&fi=1136';
	if(!ksChatLink){
		window.ksChatLink = '';
	}
	/*
	 * 鍙傛暟璁惧畾 -- 濉叆鍜ㄨ鍐呭杈撳叆妗唅d  
	 *		鑻ラ渶瑕佸垯鏀惧紑骞跺～鍐欏搴旂殑ID锛岃繖鏃跺€� 鈥滀笉浼犲叆鎴栬€呬紶鍏v鍙傛暟涓虹┖鈥� 鐨勬椂鍊欎細鑷姩鑾峰彇瀵瑰簲杈撳叆妗嗕腑鐨勫唴瀹逛綔涓篶v鍙傛暟浣跨敤 -- cv 鈥滈渶浼犲叆蹇晢閫氬挩璇㈢獥鍙ｇ殑鍐呭鈥�
	 */
	//var cvInputId = '';

	/*
	 * 鍙傛暟璁惧畾 -- 鑷畾涔夋槸鍚︽柊绐楀彛涓墦寮€鑱婂ぉ绐楀彛  
	 * 		鑻ュ己琛屾墦寮€鏂扮獥鍙�,鍒欐斁寮€璁剧疆,涓嶈缃垯鎵嬫満涓嶆墦寮€鏂扮獥鍙�,pc鎵撳紑鏂扮獥鍙�,姝よ缃彧瀵瑰綋鍓嶈嚜瀹氫箟浜嬩欢鏈夋晥
	 * 		鑻ユ兂鍏ㄥ眬鐢熸晥,鍖呮嫭蹇晢閫氶粯璁ょ殑鎵撳紑鑱婂ぉ绐楀彛浜嬩欢,鍒欏皢姝ゅ彉閲弅sUserDefinedOpenNewChatWin瀹氫箟鍦╧s.j鍓嶅嵆鍙紝濡傛灉褰撳墠鏂囦欢涓缃紝鍙斁寮€鍚庣Щ鍔ㄨ嚦搴曢儴鎴栬€呴《閮�
	 */
	//var ksUserDefinedOpenNewChatWin=true;
	
	return eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9(){E=F.1M==\'u:\';9 11(){3(!E&&(w s==\'M\')){3(5.6(\'u\')===0){5=5.L(/^u/,\'K\')}4 a=7.W(\'G\');3(a.y){4 b,i=0;X((b=a[i++])){4 c=b.P;3(c.6(\'u\')===0&&c.6(".Q.")>0){3(c.6("1j/1k.R")>0){1L}4 d=7.13(\'G\');4 e=[\'15\',\'19\'];1J(4 j=0;j<e.y;j++){4 v=b.1H(e[j]);3(v){d.U(e[j],v)}}d.P=c.L(/^u/,\'K\');b.V.10(d);b.V.1F(b)}}}4 f=7.W(\'a\');3(f.y){4 b,i=0;X((b=f[i++])){4 c=b.A;3(c.6(\'u\')===0&&c.6(".Q.")>0){b.A=c.L(/^u/,\'K\')}}}E=H}}3(!E&&(w s==\'M\')){4 n=5.6(\'/1a/\');3(n>0){4 o=7.13(\'G\');o.U("15","1E/1D");o.U("19","1B-8");o.1y=9(){1x(11,1N)};4 q=5.Y(0,n).L(/^K:/,\'u:\')+\'/1a/R/1w/1j/1k.R\';o.P=q;7.W(\'G\')[0].V.10(o)}}z 9(h,i,j){3(!j&&(w 12==\'1r\')){4 k=7.1q(12);3(k&&k.16){j=k.16}}9 17(a,b){3(!a)z 18;z S T("(^|&)"+b+"=([^&]*)(&|$)","i").1p(a)}9 1c(a,b){4 c=a.6(\'?\');3(c==-1)z\'\';a=a.1n(c+1,a.y);4 d=S T("(^|&)"+b+"=([^&]*)(&|$)","i");4 r=a.1g(d);3(r!=1h)z 1i(r[2]);z\'\'}3(i&&5.6(\'x=1\')==-1){3(5.6(\'?\')==-1){5+=\'?x=1\'}t{5+=\'&x=1\'}}4 l,O=5;4 m=5.1A("?");m.1o("");3(w 1b!=\'M\'&&1b==H){l=H}t 3(17(m[1],\'x\')){l=18}t{l=H}9 J(){4 a=\'\';I{4 b=1c(5,\'1s\');3(b){4 c=\'\';4 d=7.1t.1g(S T(\'(^| )\'+b+\'1u\'+b+\'=([^;]*)(;|$)\'));3(d!=1h){c=1i(d[2])}3(c){a+=\'&1v=\'+c}}}N(e){}4 f="";I{3(1m.7.D.y>0){f=1m.7.D}}N(e){f=7.D}3(!f||f.y==0){f=7.D}a+=\'&1z=\'+C(B.F.A);3(f)a+=\'&1C=\'+C(f);3(h)a+=\'&1f=\'+C(h);3(j)a+=\'&1e=\'+C(j);3(i){3(5.6("x=1")==-1){a+=\'&x=1\'}}3(5.6(\'?\')==-1){a=\'?\'+a.Y(1)}5+=a;3(!l){B.F.A=5}t{4 g=B.1G(5,\'1l\');3(g){I{g.1I()}N(e){}}t{B.F.A=5}}}3(w s!=\'M\'){4 p={};3(h)p[\'1f\']=h;3(j)p[\'1e\']=j;3(i)p[\'x\']=1;3(l)p[\'1K\']=\'1l\';I{3(w s.Z==\'9\'){3(l&&O.6(\'Q\')==-1&&!s.14){s.14=O}s.Z(p)}t 3(w s.1d==\'9\'){s.1d(p)}t{J()}}N(e){J()}}t{J()}}})();',62,112,'|||if|var|ksChatLink|indexOf|document||function|||||||||||||||||||KS|else|https||typeof|ism|length|return|href|window|encodeURIComponent|referrer|onKSTHttpsSupport|location|script|true|try|ksOpenLink|http|replace|undefined|catch|_ksChatLink|src|kuaishang|js|new|RegExp|setAttribute|parentNode|getElementsByTagName|while|substring|openChatWin|appendChild|checkHttpsSupport|cvInputId|createElement|customUrl|type|value|checkQueryString|false|charset|bs|ksUserDefinedOpenNewChatWin|getQueryString|openChatLink|cv|sText|match|null|unescape|code|checkHttps|_blank|opener|substr|push|test|getElementById|string|cas|cookie|_KS_|vi|online|setTimeout|onerror|dp|split|utf|ref|javascript|text|removeChild|open|getAttribute|focus|for|oTarget|continue|protocol|500'.split('|'),0,{}));
})();