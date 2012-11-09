#pragma strict

function Start () {

}

function Update () {

}
var getWeblink :webLink;
getWeblink =this.GetComponent("webLink");

function On_SimpleTap(gesture:Gesture){
	if(getWeblink.name == "landscape_ad_cut"){
		Application.OpenURL("http://www.rakuten.co.jp/bonomu-shop/");
	}
	
	if(getWeblink.name == "icon_weblink"){
		Application.OpenURL("https://itunes.apple.com/us/app/ojisamachigai-tanshi/id554552357?l=ja&ls=1&mt=8");
	}
}