/*
*showdiv() 展示a标签伸缩效果
*/
function showdiv(targetid,objN){
      var target=document.getElementById(targetid);
      var clicktext=document.getElementById(objN)
            if (target.style.display=="block"){
                target.style.display="none";
                //clicktext.innerText="Select Rig Specifications";
              } else {
                target.style.display="block";
                //clicktext.innerText='Select Rig Specifications';
            }
}
/*
* test()获取下拉框的值
*/
function test(id)
{
	var obj=document.getElementById(id);
	var val=obj.options[obj.selectedIndex].value;
	var txt=obj.options[obj.selectedIndex].text;
	//alert(txt);
	//alert(val);
	if(val=="images/SGL-TEL-CR.PNG")
	{
		//alert(1);
		var imgNode=document.createElement('img');
		imgNode.setAttribute('src','images/grid.png');
		imgNode.setAttribute("style","z-index:1;position:absolute;left:550px;top:110px;width:348px;height:450px;background:none;");
		document.getElementById('RigBuilderCustomResults').appendChild(imgNode);
		var imgNode1 = document.createElement('img');
		imgNode1.setAttribute('src','images/SGL-TEL-CR.PNG');
		imgNode1.setAttribute("style","z-index:2;position:absolute;left:550px;top:110px;width:348px;height:450px;background:none;");
		document.getElementById('RigBuilderCustomResults').appendChild(imgNode1);
	}
	if(val="images/DBL-TEL-CR.PNG")
	{
		var imgNode=document.createElement('img');
		imgNode.setAttribute('src','images/DBL-TEL-CR.PNG');
		imgNode.setAttribute("style","z-index:1;position:absolute;left:550px;top:110px;width:348px;height:450px;background:none;");
		document.getElementById('RigBuilderCustomResults').appendChild(imgNode);
	}
	if(val="images/TRP-CNT-SLR.PNG")
	{
		var imgNode=document.createElement('img');
		imgNode.setAttribute('src','images/TRP-CNT-SLR.PNG');
		imgNode.setAttribute("style","z-index:1;position:absolute;left:550px;top:110px;width:348px;height:450px;background:none;");
		document.getElementById('RigBuilderCustomResults').appendChild(imgNode);
	}
}

/*
*changetu()改变图片的src
*/
function addElementImg(obj) {
	var imgNode = document.createElement('img');
	imgNode.setAttribute('src','images/grid.png');
	document.getElementById('RigBuilderCustomResults').appendChild(imgNode);
}

/*function changetu(id)
{
	var tu=document.getElementById('tu');
	var obj=document.getElementById(id);
	var val=obj.options[obj.selectedIndex].value;
	tu.src=val.value;
	alert(val.value);
	document.getElementById('tu').style.background = 'url(images/grid.png)';
	
}*/
