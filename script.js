//update table using json

{
	var i;
	document.getElementById("cs").value=sem.course;
	document.getElementById("yr").value=sem.year;
	selectsem();
	document.getElementById("br").value=sem.branch;
	selectsem();
	document.getElementById("sm").value=sem.sem;
	var relpath="../../";
	//update table with subject rows
	var trows="";
	for(i=0;i<sem.subjects.length;i++){
		//row start
		trows+="<tr class=\"rsptbl\">";
		if(i!=sem.subjects.length-1)
		//subject name for subject
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j0\" data-th=\"Subject\" title=\""+sem.subjects[i].name+"\"><a href=\"javascript:void(0)\"  onclick=\"alt(event)\">"+sem.subjects[i].sname+"</a></td>";
		else
		//subject name for total
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j0\" data-th=\"Subject\" title=\""+sem.subjects[i].name+"\">"+sem.subjects[i].sname+"</td>";
		//tt1
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j1\"  data-th=\"TT1\"><input "+dis(sem.subjects[i].marks[0],i,sem.subjects.length)+" class=\"Marks\" id=\"r"+parseInt(i+1)+"c1\" type=\"number\" min=\"0\" max=\""+sem.subjects[i].marks[0]+"\" maxlength=\"2\" onkeyup=\"invalid(event,"+sem.subjects[i].marks[0]+")\" /> /"+sem.subjects[i].marks[0]+"</td>";
		//tt2
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j2\"  data-th=\"TT2\"><input "+dis(sem.subjects[i].marks[0],i,sem.subjects.length)+" class=\"Marks\" id=\"r"+parseInt(i+1)+"c2\" type=\"number\" min=\"0\" max=\""+sem.subjects[i].marks[0]+"\" maxlength=\"2\" onkeyup=\"invalid(event,"+sem.subjects[i].marks[0]+")\" /> /"+sem.subjects[i].marks[0]+"</td>";
		//ttavg
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j3\"  data-th=\"TTAvg\"><input "+dis(sem.subjects[i].marks[0],i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c3\" type=\"text\" maxlength=\"2\" disabled/> /"+sem.subjects[i].marks[0]+"</td>";
		//ese
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j4\"  data-th=\"ESE\"><input "+dis(sem.subjects[i].marks[1],i,sem.subjects.length)+" class=\"Marks\" id=\"r"+parseInt(i+1)+"c4\" type=\"number\" min=\"0\" max=\""+sem.subjects[i].marks[1]+"\" maxlength=\"2\" onkeyup=\"invalid(event,"+sem.subjects[i].marks[1]+")\" /> /"+sem.subjects[i].marks[1]+"</td>";
		//theory
		trows+="<td id=\"i"+parseInt(i+1)+"j5\"  data-th=\"Theory\" class=\"Credit rsptbl\"><input "+dis(parseInt(sem.subjects[i].marks[0]+sem.subjects[i].marks[1]),i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c5\" type=\"text\" maxlength=\"2\" disabled/> /"+parseInt(sem.subjects[i].marks[0]+sem.subjects[i].marks[1])+"</td>";
		//c1
		trows+="<td id=\"i"+parseInt(i+1)+"j6\"  data-th=\"C1\" class=\"Credit rsptbl\"><input "+dis(sem.subjects[i].marks[0],i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c6\" type=\"text\" maxlength=\"2\" disabled/> /"+sem.subjects[i].marks[2]+"</td>";
		//g1
		trows+="<td id=\"i"+parseInt(i+1)+"j7\"  data-th=\"G1\" class=\"Credit rsptbl\"><input class=\"MarksC\" id=\"r"+parseInt(i+1)+"c7\" type=\"text\" maxlength=\"4\" disabled/></td>";
		//c1*g1
		trows+="<td id=\"i"+parseInt(i+1)+"j8\"  data-th=\"C1*G1\" class=\"Credit rsptbl\"><input class=\"MarksC\" id=\"r"+parseInt(i+1)+"c8\" type=\"text\" maxlength=\"4\" disabled/></td>";
		//tw
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j9\"  data-th=\"TW\"><input "+dis(sem.subjects[i].marks[3],i,sem.subjects.length)+" class=\"Marks\" id=\"r"+parseInt(i+1)+"c9\" type=\"number\" min=\"0\" max=\""+sem.subjects[i].marks[3]+"\" maxlength=\"2\" onkeyup=\"invalid(event,"+sem.subjects[i].marks[3]+")\" /> /"+sem.subjects[i].marks[3]+"</td>";
		//pra
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j10\"  data-th=\"Pract\"><input "+dis(sem.subjects[i].marks[4],i,sem.subjects.length)+" class=\"Marks\" id=\"r"+parseInt(i+1)+"c10\" type=\"number\" min=\"0\" max=\""+sem.subjects[i].marks[4]+"\" maxlength=\"2\" onkeyup=\"invalid(event,"+sem.subjects[i].marks[4]+")\" /> /"+sem.subjects[i].marks[4]+"</td>";
		//tp
		trows+="<td id=\"i"+parseInt(i+1)+"j11\"  data-th=\"TW/Pract\" class=\"Credit rsptbl\"><input "+dis(parseInt(sem.subjects[i].marks[3]+sem.subjects[i].marks[4]),i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c11\" type=\"text\" maxlength=\"2\" disabled/> /"+parseInt(sem.subjects[i].marks[3]+sem.subjects[i].marks[4])+"</td>";
		//c2
		trows+="<td id=\"i"+parseInt(i+1)+"j12\"  data-th=\"C2\" class=\"Credit rsptbl\"><input "+dis(sem.subjects[i].marks[5],i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c12\" type=\"text\" maxlength=\"2\" disabled/> /"+sem.subjects[i].marks[5]+"</td>";
		//g2
		trows+="<td id=\"i"+parseInt(i+1)+"j13\"  data-th=\"G2\" class=\"Credit rsptbl\"><input class=\"MarksC\" id=\"r"+parseInt(i+1)+"c13\" type=\"text\" maxlength=\"4\" disabled/></td>";
		//c2*g2
		trows+="<td id=\"i"+parseInt(i+1)+"j14\"  data-th=\"C2*G2\" class=\"Credit rsptbl\"><input class=\"MarksC\" id=\"r"+parseInt(i+1)+"c14\" type=\"text\" maxlength=\"4\" disabled/></td>";
		//c
		trows+="<td id=\"i"+parseInt(i+1)+"j15\"  data-th=\"C\" class=\"Credit rsptbl\"><input "+dis(parseFloat(sem.subjects[i].marks[2]+sem.subjects[i].marks[5]),i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c15\" type=\"text\" maxlength=\"2\" disabled/> /"+parseFloat(sem.subjects[i].marks[2]+sem.subjects[i].marks[5])+"</td>";
		//c*g
		trows+="<td id=\"i"+parseInt(i+1)+"j16\"  data-th=\"C*G\" class=\"Credit rsptbl\"><input class=\"MarksC\" id=\"r"+parseInt(i+1)+"c16\" type=\"text\" maxlength=\"4\" disabled/></td>";
		//tot
		trows+="<td class=\"rsptbl\" id=\"i"+parseInt(i+1)+"j17\"  data-th=\"Total\"><input "+dis(parseInt(sem.subjects[i].marks[0]+sem.subjects[i].marks[1]+sem.subjects[i].marks[3]+sem.subjects[i].marks[4]),i,sem.subjects.length)+" class=\"MarksD\" id=\"r"+parseInt(i+1)+"c17\" type=\"text\" maxlength=\"2\" disabled/> /"+parseInt(sem.subjects[i].marks[0]+sem.subjects[i].marks[1]+sem.subjects[i].marks[3]+sem.subjects[i].marks[4])+"</td>";
		//row end
		trows+="</tr>";
	}
	document.getElementById("Main").innerHTML+=trows;
	
	//focus first input 
	document.getElementById("r1c1").focus();
}

//disable 0 marks input

function dis(inp,i,tot){
if (inp==0)
return "value=\"0\" disabled ";	
else if(i==tot-1)
return " disabled ";
else	
return "";
}

//reset form

function rst(){
document.getElementById("pointer").innerHTML="";
document.getElementById("perc").innerHTML="";
document.getElementById("reslt").innerHTML="";
}

// media query event handler
var mq = window.matchMedia("(min-width: 1300px)");
if (matchMedia){
  mq.addListener(WidthChange);
  WidthChange();
}

// media query change
function WidthChange() {
	var calc= document.getElementById("calc");
	if (mq.matches)
	calc.checked=true;
	else
	calc.checked=false;
	pntcalc();
}

//visibility of pointer calculation

function pntcalc(){
	var calc= document.getElementById("calc");
	var cred = document.getElementsByClassName('Credit');
	var i;
	if(calc.checked==true){
	  for(i=0; i<cred.length; i++) {
		cred[i].style.display = "";
	  }
	  document.getElementById("Container").style.maxWidth="1270px";
	  document.getElementById("med").setAttribute("href","../../media1.css");
	}
	else{
	  for(i=0; i<cred.length; i++) {
		cred[i].style.display = "none";
	  }
	  document.getElementById("Container").style.maxWidth="620px";
	  document.getElementById("med").setAttribute("href","../../media2.css");
	}
	
}

//visibility of submit

function sbmt(){
	var sub= document.getElementById("sub");
	if(liv.checked==false){
		sub.style.display = "inline";
	}
	else{
		sub.style.display = "none";
	}
	
}	

//on input change

function invalid(event,maxn){
	
	//tab or shift tab navation
	
	if(event.keyCode==9 || event.keyCode==16)
	return false;
	
	//input validation
	
	var marks=event.srcElement || event.target;
	if(marks.value!="" && isNaN(marks.value) || marks.value<0 || marks.value>maxn || marks.value.includes(".") ){
	marks.value="";
	alert("Please enter marks within correct range");
	marks.focus();
	return false;
	}
	
	//focus next input
	
	if(marks.value.length >= marks.attributes["maxlength"].value || event.keyCode==13 && marks.value!=""){
		if(marks.value.length >= marks.attributes["maxlength"].value && parseInt(marks.value)==0)
			marks.value="0";
		var next=marks;
		while (1) {
			next = next.parentElement.nextElementSibling.firstChild;
			if(next==next.parentElement.parentElement.parentElement.lastChild.lastChild.firstChild){
				marks.blur();
				break;
			}
			if(next==next.parentElement.parentElement.lastChild.firstChild)
			next=next.parentElement.parentElement.nextElementSibling.firstChild.nextElementSibling.firstChild;
			if (next.getAttribute("disabled")!="") {
				next.focus();
				break;
			}
		}
	}
	
	//live calculation
	
	var liv= document.getElementById("liv");
	if(liv.checked==true){
		return calculate();
	}
	else{
		return false;
	}
}

//marks to grade

function markstograde(marks,maxn){
	if(marks==0 && maxn==0)
	return 1;
	if(((marks*100)/maxn)>=80)
	return "10(O)";
	if(((marks*100)/maxn)>=75)
	return "9(A)";
	if(((marks*100)/maxn)>=70)
	return "8(B)";
	if(((marks*100)/maxn)>=60)
	return "7(C)";
	if(((marks*100)/maxn)>=50)
	return "6(D)";
	if(((marks*100)/maxn)>=45)
	return "5(E)";
	if(((marks*100)/maxn)>=40)
	return "4(P)";
	else
	return "0(F)";
}

//main calculate function

function calculate(){
	var i,j;
	
	//term test averages
	for(i=1;i<sem.subjects.length;i++){
		var tt1=document.getElementById("r"+i+"c1");
		var tt2=document.getElementById("r"+i+"c2");
		var avg=document.getElementById("r"+i+"c3");
		if(isNaN(Math.round( (parseInt(tt1.value) + parseInt(tt2.value))/2 ))==false)
			avg.value= Math.round( (parseInt(tt1.value) + parseInt(tt2.value))/2 );
	}
	
	//theory
	for(i=1;i<sem.subjects.length;i++){
		var avg=document.getElementById("r"+i+"c3");
		var ese=document.getElementById("r"+i+"c4");
		var the=document.getElementById("r"+i+"c5");
		if(isNaN(parseInt(avg.value) + parseInt(ese.value))==false)
			the.value= (parseInt(avg.value) + parseInt(ese.value));
	}
	
	//tw/pract
	for(i=1;i<sem.subjects.length;i++){
		var tw=document.getElementById("r"+i+"c9");
		var pra=document.getElementById("r"+i+"c10");
		var tp=document.getElementById("r"+i+"c11");
		if(isNaN((parseInt(tw.value)+ parseInt(pra.value)))==false)
			tp.value= parseInt(tw.value)+ parseInt(pra.value);
	}
	
	//total
	for(i=1;i<sem.subjects.length;i++){
		var the=document.getElementById("r"+i+"c5");
		var tp=document.getElementById("r"+i+"c11");
		var tot=document.getElementById("r"+i+"c17");
		if(isNaN(parseInt(the.value) + parseInt(tp.value))==false)
			tot.value= (parseInt(the.value) + parseInt(tp.value));
	}
	
	//theory grade
	for(i=1;i<sem.subjects.length;i++){
		var the=document.getElementById("r"+i+"c5");
		var ese=document.getElementById("r"+i+"c4");
		var g1=document.getElementById("r"+i+"c7");
			if(isNaN((parseInt(the.value)))==false){
				if(parseInt(markstograde(parseInt(ese.value),sem.subjects[i-1].marks[1]))!=0 ){
					if(parseInt(markstograde(parseInt(ese.value),sem.subjects[i-1].marks[1]))==1)
					g1.value= 0;
					else
					g1.value= markstograde(parseInt(the.value),parseInt(sem.subjects[i-1].marks[0]+sem.subjects[i-1].marks[1]));
				}
				else
					g1.value= "0(F)";
			}
	}
	
	//tw/pract grade
	for(i=1;i<sem.subjects.length;i++){
		var tp=document.getElementById("r"+i+"c11");
		var tw=document.getElementById("r"+i+"c9");
		var pra=document.getElementById("r"+i+"c10");
		var g2=document.getElementById("r"+i+"c13");
			if(isNaN((parseInt(tp.value)))==false){
				if(parseInt(markstograde(parseInt(tw.value),sem.subjects[i-1].marks[3]))!=0 && parseInt(markstograde(parseInt(pra.value),sem.subjects[i-1].marks[4]))!=0 ){
					if(parseInt(markstograde(parseInt(tw.value),sem.subjects[i-1].marks[3]))==1 && parseInt(markstograde(parseInt(pra.value),sem.subjects[i-1].marks[4]))==1 )
					g2.value= 0;
					else
					g2.value= markstograde(parseInt(tp.value),parseInt(sem.subjects[i-1].marks[3]+sem.subjects[i-1].marks[4]));
				}
				else
				g2.value= "0(F)";
			}
	}
	
	//c1
	for(i=1;i<sem.subjects.length;i++){
		var g1=document.getElementById("r"+i+"c7");
		var c1=document.getElementById("r"+i+"c6");
		if(isNaN((parseInt(g1.value)))==false){
			if(parseInt(g1.value)!=0 )
				c1.value= sem.subjects[i-1].marks[2];
			else
				c1.value= 0;
		}	
	}
	
	//c2
	for(i=1;i<sem.subjects.length;i++){
		var g2=document.getElementById("r"+i+"c13");
		var c2=document.getElementById("r"+i+"c12");
		if(isNaN((parseInt(g2.value)))==false){
			if(parseInt(g2.value)!=0 )
				c2.value= sem.subjects[i-1].marks[5];
			else
				c2.value= 0;
		}	
	}
	
	//c
	for(i=1;i<sem.subjects.length;i++){
		var c=document.getElementById("r"+i+"c15");
		var c1=document.getElementById("r"+i+"c6");
		var c2=document.getElementById("r"+i+"c12");
		if(isNaN(parseFloat(c1.value) + parseFloat(c2.value))==false)
			c.value= (parseFloat(c1.value) + parseFloat(c2.value));
	}
	
	//c1*g1
	for(i=1;i<sem.subjects.length;i++){
		var g1=document.getElementById("r"+i+"c7");
		var c1=document.getElementById("r"+i+"c6");
		var c1xg1=document.getElementById("r"+i+"c8");
		if(isNaN((parseInt(g1.value)))==false)
			c1xg1.value= parseFloat(c1.value)*parseInt(g1.value);
	}
	
	//c2*g2
	for(i=1;i<sem.subjects.length;i++){
		var g2=document.getElementById("r"+i+"c13");
		var c2=document.getElementById("r"+i+"c12");
		var c2xg2=document.getElementById("r"+i+"c14");
		if(isNaN((parseInt(g2.value)))==false)
			c2xg2.value= parseFloat(c2.value)*parseInt(g2.value);
	}
	
	//c*g
	for(i=1;i<sem.subjects.length;i++){
		var c1xg1=document.getElementById("r"+i+"c8");
		var c2xg2=document.getElementById("r"+i+"c14");
		var cxg=document.getElementById("r"+i+"c16");
		if(isNaN(parseFloat(c1xg1.value) + parseFloat(c2xg2.value))==false)
			cxg.value= (parseFloat(c1xg1.value) + parseFloat(c2xg2.value));
	}
	
	//vertical total 
	var e=false,total;
	for(var j=1;j<18;j++){
		for(i=1;i<sem.subjects.length;i++){
			var mk=document.getElementById("r"+i+"c"+j);
			if(isNaN(parseInt(mk.value))==true){
				e=true;
				break;	
			}
		}
		if(e==false){
			total=0;
			for(i=1;i<sem.subjects.length;i++){
				var mk=document.getElementById("r"+i+"c"+j);
				total+=parseFloat(mk.value);
			}
			var tot=document.getElementById("r"+parseInt(sem.subjects.length)+"c"+j);
			tot.value=total;
		}
	}
	
	//result
	var e=false,f=false;
	for(i=1;i<sem.subjects.length;i++){
		var g1=document.getElementById("r"+i+"c7");
		var g2=document.getElementById("r"+i+"c13");
		if(isNaN(parseInt(g1.value))==true || isNaN(parseInt(g2.value))==true){
			e=true;
			break;	
		}
	}
	if(e==false){
		for(i=1;i<sem.subjects.length;i++){
			var g1=document.getElementById("r"+i+"c7");
			var g2=document.getElementById("r"+i+"c13");
			if(sem.subjects[i-1].marks[2]!=0 && parseInt(g1.value)==0 || sem.subjects[i-1].marks[5]!=0 && parseInt(g2.value)==0){
				f=true;
				break;	
			}
		}
		if(f==false)
		reslt.innerHTML= "Successful";	
		else
		reslt.innerHTML= "Unsuccessful";
	}
	
	
	var totcxg= document.getElementById("r"+parseInt(sem.subjects.length)+"c16");
	var totc= document.getElementById("r"+parseInt(sem.subjects.length)+"c15");
	var tottot= document.getElementById("r"+parseInt(sem.subjects.length)+"c17");
	var totoo=0;
	totoo+= parseInt(sem.subjects[parseInt(sem.subjects.length-1)].marks[0]);
	totoo+= parseInt(sem.subjects[parseInt(sem.subjects.length-1)].marks[1]);
	totoo+= parseInt(sem.subjects[parseInt(sem.subjects.length-1)].marks[3]);
	totoo+= parseInt(sem.subjects[parseInt(sem.subjects.length-1)].marks[4]);
	
	//final pointer
	
	if(isNaN(parseFloat(totcxg.value))==false && isNaN(parseFloat(totc.value))==false){
		if(parseFloat(totc.value)!=0 && parseFloat(totcxg.value)!=0 )
		pointer.innerHTML= parseFloat(((parseFloat(totcxg.value))/(parseFloat(totc.value)))).toFixed(2);
		else
		pointer.innerHTML= parseFloat("0.000").toFixed(2);
	}
	
	//final percentage
	
	if(isNaN(parseInt(tottot.value))==false)
	perc.innerHTML= parseFloat((parseInt(tottot.value)*100/totoo)).toFixed(2)+ "%";
	
	return false;
}

//save as excel sheet

function gentbl(){
	
	//generate a table first
  	var body = document.getElementsByTagName("body")[0];
	var tbl     = document.createElement("table");
	var tblBody = document.createElement("tbody");
	tbl.setAttribute("id","ExpTable");
	tbl.style.display="none";
	
	  // creating all cells
	  for (var i = 0; i < 10; i++) {
		  
		// creates a table row
		var row = document.createElement("tr");
		for (var j = 0; j < 18; j++) {
			
		  // creates a table cell
		  var cell = document.createElement("td");
		  //cell content
		  if(i<9){
			  if(i>=1 && j>=1){
				  if(j!=7 && j!=8 && j!=13 && j!=14 && j!=16)
					cell.innerHTML+="\'";
				  cell.innerHTML+=document.getElementById("r"+i+"c"+j).value;
			  }
			  if(document.getElementById("i"+i+"j"+j).textContent!=null)
			  cell.innerHTML+=document.getElementById("i"+i+"j"+j).textContent;
		  }
		  //last row
		  if(i==9){
			  if(j==0)
			  cell.innerHTML="Result = "+ document.getElementById("reslt").innerHTML; 
			  if(j==1)
			  cell.innerHTML="Pointer = "+ document.getElementById("pointer").innerHTML;
			  if(j==2)
			  cell.innerHTML="Percentage = "+ document.getElementById("perc").innerHTML;
		  }
		  row.appendChild(cell);
		  if(i==9){
			  cell.setAttribute("colspan","6");
			  if(j==2)
			  break;
		  }
		}
		tblBody.appendChild(row);
	  	}
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	
	//export as excel
	savex('ExpTable', 'Pointer Calculation'); 
	body.removeChild(tbl);
	
	
}

//alert cell
function alt(event){
	var src=event.srcElement || event.target;
	alert(src.parentElement.getAttribute("title"));	
}
//export as excel function

var savex = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()