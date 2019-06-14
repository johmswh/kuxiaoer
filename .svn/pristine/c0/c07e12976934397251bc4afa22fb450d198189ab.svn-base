
var scrollCenter = null;
var scrollInfo = null;

var allShopName = [
	"***安建立专卖店已下店",
	"***琳旗舰店已下店",
	"**咚旗舰店已下店",
	"****梦旗舰店已下店",
	"**饰旗舰店已下店",
	"****辰旗舰店已下店",
	"**郎旗舰店已下店",
	"*子童装旗舰店已下店",
	"***男装旗舰店已下店",
	"**头旗舰店已下店",
	"**ry旗舰店已下店",
	"**誉旗舰店已下店",
	"***o童装旗舰店已下店",
	"**熊童装旗舰店已下店",
	"**鹅旗舰店已下店",
	"***装旗舰店已下店",
	"***装旗舰店已下店",
	"***猫旗舰店已下店",
	"****衣旗舰店已下店",
	"****儿旗舰店已下店",
	"****去旗舰店已下店",
	"****la旗舰店已下店",
	"****马旗舰店已下店",
	"**义旗舰店已下店",
	"**a旗舰店已下店",
	"****动旗舰店已下店",
	"***珊运动旗舰店已下店",
	"***龙旗舰店已下店",
	"****母婴旗舰店已下店",
	"****宝贝旗舰店已下店",
	"**车品旗舰店已下店",
	"***之眼旗舰店已下店",
	"***士旗舰店已下店",
	"***车品旗舰店已下店",
	"***玉器珠宝旗舰店已下店",
	"***珠宝旗舰店已下店",
	"***优品旗舰店已下店",
	"**雅家居旗舰店已下店",
	"***岳家居专营店已下店",
	"**德保旗舰店已下店",
	"**佳家居旗舰店已下店",
	"**居家日用专营店已下店",
	"****日用旗舰店已下店",
	"***龙红家居旗舰店已下店",
	"***娃家居旗舰店已下店",
	"***瑞佳家居旗舰店已下店",
	"***宝奉沃专卖店已下店",
	"***奇莱鞋类专营店已下店",
	"***姚鞋类专营店已下店",
	"***迪圣狐箱包旗舰店已下店",
	"***琴户外旗舰店已下店",
	"***泊龙旗舰店已下店",
	"***made旗舰店已下店",
	"***ebaby旗舰店已下店",
	"***路普旗舰店已下店",
	"***ning朗宁旗舰店已下店",
	"****威旗舰店已下店",
	"***oo旗舰店已下店",
	"****蕾旗舰店已下店",
	"***士旗舰店已下店",
	"****诺旗舰店已下店",
	"***正官方旗舰店已下店",
	"****德保健品旗舰店已下店",
	"****美堂旗舰店已下店",
	"****士旗舰店已下店",
	"**李食品旗舰店已下店",
	"****佩旗舰店已下店",
	"****卡西旗舰店已下店",
	"****施特旗舰店已下店",
	"****新旗舰店已下店",
	"****贸易旗舰店已下店",
	"****hun旗舰店已下店",
	"****爸爸旗舰店已下店",
	"****树图书专营店已下店",
	"**活旅行运动户外旗舰店已下店",
	"****hike旗舰店已下店",
	"***光旗舰店已下店",
	"****源旗舰店已下店",
	"**枫旗舰店已下店",
	"***n旗舰店已下店",
	"****仆旗舰店已下店",
	"***氏车品旗舰店已下店",
	"***汽车用品旗舰店已下店",
	"***捷旗舰店已下店",
	"****强旗舰店已下店",
	"***友车品旗舰店已下店",
	"****之眼旗舰店已下店",
	"**士旗舰店已下店",
	"**翼车品旗舰店已下店",
	"****迪珠宝旗舰店已下店",
	"****珠宝旗舰店已下店",
	"****汐旗舰店已下店",
]

function moveTop() {
	if( scrollInfo.offsetHeight - scrollCenter.scrollTop - scrollCenter.offsetHeight <= 0){ 
		scrollCenter.scrollTop=0; 
	}else{ 
		scrollCenter.scrollTop++; 
	} 
}

function initScrollPageInfo( speed ) {
	scrollCenter = document.getElementById( "scrollCenter" );
	scrollInfo = document.getElementById( "scrollInfo" );
	var strInnerHTML = "<ul>";
	// allShopName
	for (var i = allShopName.length - 1; i >= 0; i--) {
		strInnerHTML += "<li class='one-txt-cut' ><a href='javascript:void(0)'>" + allShopName[i] + '</a></li> '
	}
	strInnerHTML += "</ul>";
	scrollInfo.innerHTML = strInnerHTML;
	
	var callMoveTopFunc = setInterval( "moveTop()", speed ); 
	scrollInfo.onmouseover = function () {
		clearInterval( callMoveTopFunc );
	}
	
	scrollInfo.onmouseout = function () {
		callMoveTopFunc = setInterval( "moveTop()", speed ); 
	}
}
