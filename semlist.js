function selectsem(){
	var gp=document.getElementById("gp");
	var yr=document.getElementById("yr");
	var br=document.getElementById("br");
	var sm=document.getElementById("sm");
	gpold=gp.selectedIndex;
	brold=br.selectedIndex;
	yrold=yr.selectedIndex;
	smold=sm.selectedIndex;
	if(gp.selectedIndex==1){
		var yrtr=document.getElementById("yrtr");
		var smtr=document.getElementById("smtr");
		yrtr.style.display="none";
		smtr.style.display="none";
		br.innerHTML="<option>Computer Engineering(CMPN)</option><option>Information Technology(IT)</option><option>Electronics and Telecommunication(EXTC)</option><option>Mechanical Engineering(MECH)</option><option>Civil Engineering(CIVIL)</option><option>Electronics Engineering(ETRX)</option>";
		br.selectedIndex=brold;
		sm.selectedIndex=smold;
		return false;
	}
	else{
		var yrtr=document.getElementById("yrtr");
		var smtr=document.getElementById("smtr");
		yrtr.style.display="";
		smtr.style.display="";
	}
	if(yr.selectedIndex==0){
		br.innerHTML="<option>Common to all</option>";
		sm.innerHTML="<option>I</option><option>II</option>";
		sm.selectedIndex=smold;
		return false;
	}
	else{
		br.innerHTML="<option>Computer Engineering(CMPN)</option><option>Information Technology(IT)</option><option>Electronics and Telecommunication(EXTC)</option><option>Mechanical Engineering(MECH)</option><option>Civil Engineering(CIVIL)</option><option>Electronics Engineering(ETRX)</option>";
		br.selectedIndex=brold;
		yr.selectedIndex=yrold;
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
	sm.selectedIndex=smold;
}
function redirect(){
	var gp=document.getElementById("gp").selectedIndex;
	var yr=document.getElementById("yr").selectedIndex;
	var br=document.getElementById("br").selectedIndex;
	var sm=document.getElementById("sm").selectedIndex;
	var lb,ls;
	if(gp==1){
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
			case 3:
			lb="mech";
			break;
			case 4:
			lb="civil";
			break;
			case 5:
			lb="etrx";
			break;
			
		}
		window.location.href=relpath+lb;
		return false;
	}
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
			case 3:
			lb="mech";
			break;
			case 4:
			lb="civil";
			break;
			case 5:
			lb="etrx";
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