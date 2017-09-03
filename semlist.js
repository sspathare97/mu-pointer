function selectsem(){
	var yr=document.getElementById("yr");
	var br=document.getElementById("br");
	var sm=document.getElementById("sm");
	brold=br.selectedIndex;
	if(yr.selectedIndex==0){
		br.innerHTML="<option>Common to all</option>";
		sm.innerHTML="<option>I</option><option>II</option>";
		return;
	}
	else{
		br.innerHTML="<option>Computer Engineering(CMPN)</option><option>Information Technology(IT)</option><option>Electronics and Telecommunication(EXTC)</option>";
		br.selectedIndex=brold;
		switch(yr.selectedIndex){
			case 1:{
			sm.innerHTML="<option>III</option><option>IV</option>";
			break;
			}
			case 2:{
			sm.innerHTML="<option>V</option><option>VI</option>";
			break;
			}
			case 3:{
			sm.innerHTML="<option>VII</option><option>VIII</option>";
			break;
			}
		}
	}
}
function redirect(){
	var yr=document.getElementById("yr").selectedIndex;
	var br=document.getElementById("br").selectedIndex;
	var sm=document.getElementById("sm").selectedIndex;
	var lb,ls;
	if(yr==0){
		lb="all";
		switch(sm){
			case 0:
			ls="semi";
			break;
			case 1:
			ls="semii";
			break;
		}
	}
	else{
		switch(br){
			case 0:
			lb="cmpn";
			break;
			case 1:
			lb="it";
			break;
			case 2:
			lb="extc";
			break;
			
		}
		switch(yr){
			case 1:
			if(sm==0)
			ls="semiii";
			else
			ls="semiv";
			break;
			case 2:
			if(sm==0)
			ls="semv";
			else
			ls="semvi";
			break;
			case 3:
			if(sm==0)
			ls="semvii";
			else
			ls="semviii";
			break;
		}
	}
	window.location.href=relpath+lb+"/"+ls;
	return false;
}