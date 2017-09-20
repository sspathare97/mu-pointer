//update table using json

{
	var i;
	document.getElementById("gp").value="CGPA";
	selectsem();
	document.getElementById("cs").value=branch.course;
	selectsem();
	document.getElementById("br").value=branch.branch;
	selectsem();
	var relpath="../";
	for(var i=0;i<8;i++){
		var c=document.getElementById("i"+(i+1)+"j2").firstElementChild;
		c.value=branch.sems[i];
	}
	
}
//reset form

function rst(){
	document.getElementById("Form").reset();
	document.getElementById("cgpa").innerHTML="";
	document.getElementById("perc").innerHTML="";
	for(var i=0;i<8;i++){
			var c=document.getElementById("i"+(i+1)+"j2").firstElementChild;
			c.value=branch.sems[i];
		}
		
}


//on input change

function invalid(event){
	
	//tab or shift tab navation
	
	if(event.keyCode==9 || event.keyCode==16)
	return false;
	
	//input validation
	
	var marks=event.srcElement || event.target;
	if(marks.value==""){
		marks.value="";
		marks.parentElement.nextElementSibling.nextElementSibling.firstElementChild.value="";
		var liv= document.getElementById("liv");
		if(liv.checked==true){
			return calculate();
		}
		else{
			return false;
		}
	}
	if(marks.value!="" && isNaN(marks.value) || marks.value<4 && marks.value!=1 || marks.value>10 || marks.value.length > 4){
	marks.value="";
	alert("Please enter SGPA within correct range");
	marks.focus();
	return false;
	}
	//focus next input
	
	if(marks.value.length >= 4 || event.keyCode==13 && marks.value!="" || marks.value==10){
		if(marks.value.length >= 4 && parseInt(marks.value)==0)
			marks.value="0";
		var next=marks;
		if(next==next.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild){
			marks.blur();
			return calculate();
		}
		next.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.focus();
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


//visibility of pointer calculation

function pntcalc(){
	var calc= document.getElementById("calc");
	var cred = document.getElementsByClassName('Credit');
	var i;
	if(calc.checked==true){
	  for(i=0; i<cred.length; i++) {
		cred[i].style.display = "";
	  }
	}
	else{
	  for(i=0; i<cred.length; i++) {
		cred[i].style.display = "none";
	  }
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

//calculate function
function calculate(){
	//c*g
	for(var i=0;i<8;i++){
		var sgpa=document.getElementById("i"+(i+1)+"j1").firstElementChild;
		if(sgpa.value=="")
			return false;
		var cxg=document.getElementById("i"+(i+1)+"j3").firstElementChild;
		var c=document.getElementById("i"+(i+1)+"j2").firstElementChild;
		cxg.value=Math.round(sgpa.value*c.value);
	}
	
	//cgpa
	var cg,cp;
	cg=0;cp=0,sg=0;
	for(var i=0;i<8;i++){
		var cxg=document.getElementById("i"+(i+1)+"j3").firstElementChild;
		if(cxg.value=="")
			break;
		var c=document.getElementById("i"+(i+1)+"j2").firstElementChild;
		var sgpa=document.getElementById("i"+(i+1)+"j1").firstElementChild;
		sg+=parseFloat(sgpa.value);
		cp+=parseInt(c.value);
		cg+=parseInt(cxg.value);
	}
	document.getElementById("i9j1").firstElementChild.value=sg.toFixed(2);
	document.getElementById("i9j2").firstElementChild.value=cp;
	document.getElementById("i9j3").firstElementChild.value=cg;
	var cgsp=document.getElementById("cgpa");
	cgsp.innerHTML=parseFloat(cg/cp).toFixed(2);
	
	//percentage
	var per;
	var perc=document.getElementById("perc");
	if((cg/cp).toFixed(2)<7)
	per=7.1*(cg/cp)+12;
	else
	per=7.4*(cg/cp)+12;
	perc.innerHTML=parseFloat(per).toFixed(2);
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
	  for (var i = 0; i < 11; i++) {
		  
		// creates a table row
		var row = document.createElement("tr");
		for (var j = 0; j < 4; j++) {
			
		  // creates a table cell
		  var cell = document.createElement("td");
		  //cell content
		  if(i<10){
			  if(i>=1 && j>=1)
				  cell.innerHTML+=document.getElementById("i"+i+"j"+j).firstElementChild.value;
			  if(document.getElementById("i"+i+"j"+j).textContent!=null)
			  cell.innerHTML+=document.getElementById("i"+i+"j"+j).textContent;
		  }
		  //last row
		  if(i==10){
			  if(j==0)
			  cell.innerHTML="CGPA = "+ document.getElementById("cgpa").innerHTML;
			  cell.setAttribute("colspan","2");
			  if(j==1)
			  cell.innerHTML="Percentage = "+ document.getElementById("perc").innerHTML;
			  cell.setAttribute("colspan","2");
			  if(j==2)
			  break;
		  }
		  row.appendChild(cell);
		}
		tblBody.appendChild(row);
	  	}
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	
	//export as excel
	savex('ExpTable', 'Pointer Calculation'); 
	body.removeChild(tbl);
	
	
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