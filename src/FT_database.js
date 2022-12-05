/**
 * 
 */
 
 //member = [0 First name, 1 Family name, 2 User ID, 3 Birthdate, 4 Gender, 
 //5 Country, 6 City, 7 Town, 8 Current address, 9 Image file]
 
var members = [
   ["Ali","Canlier", "alicanlier@gmail.com","12#4Asdf","1980/01/01", "Male","Turkey","Aksaray","Kocpinar","Korea/Daejeon", //member no: 0
   ["Yusuf Canlier","Done Canlier","Mehmet Canlier","Emine Canlier","Oruc Canlier","Ummugulsum Canlier"],
   ["Mustafa Canlier","Yusuf Canlier","","","","","","","",""], //10 siblings: members[x][11][y]
   ["Anna Canlier","H. C.","L. C.","","","","","","","",""]], //1 spouse: members[x][12][0], and 10 children: members[x][12][1-10]
   ["Yusuf","Canlier", "ycanlier@gmail.com","password","1984/08/17", "Male","Turkey","Aksaray","Kocpinar","Turkey/Istanbul", ////member no: 1
   ["Yusuf Canlier","Done Canlier","Mehmet Canlier","Emine Canlier","Oruc Canlier","Ummugulsum Canlier"],
   ["Mustafa Canlier","Ali Canlier","","","","","","","",""], //10 siblings: members[x][11][y]
   ["","","","","","","","","","",""]], //1 spouse: members[x][11][0], and 10 children: members[x][12][1-10]
   ["Mehmet","Canlier", "mcanlier@gmail.com","password","1979/08/17", "Male","Turkey","Aksaray","Kocpinar","Germany/Munich", ////member no: 2
   ["Mehmet Canlier","Emine Canlier","X Someone","Y Someone","Hikmet Canlier","Munevver Canlier"],
   ["Iraz Duran","Yasin Canlier","Busra Canlier","","","","","","",""], //10 siblings: members[x][11][y]
   ["Ayse Canlier","Himet Canlier","Ebrar Canlier","","","","","","","",""]], //1 spouse: members[x][12][0], and 10 children: members[x][12][1-10]
];

function myMember (i) {

	var dob = new Date(members[i][4]);
	//calculate month difference from current date in time
	var month_diff = Date.now() - dob.getTime();
	    
	//convert the calculated difference in date format
	var age_dt = new Date(month_diff); 
	    
	//extract year from date    
	var year = age_dt.getUTCFullYear();
	    
	//now calculate the age of the user
	var age = Math.abs(year - 1970);
	    
	//display the calculated age
	document.getElementById("member_top").innerHTML = members[i][0]+" "+members[i][1]+" ("+age+") <br>"+members[i][9];
    document.getElementById("td1").innerHTML = members[i][2];
    document.getElementById("td2").innerHTML = members[i][4];
    document.getElementById("td3").innerHTML = members[i][5];
    document.getElementById("td4").innerHTML = members[i][6];
    document.getElementById("td5").innerHTML = members[i][7];
    document.getElementById("td6").innerHTML = members[i][8];
    document.getElementById("td7").innerHTML = members[i][9];
    document.getElementById("gf_f_name").innerHTML = members[i][10][0];
    document.getElementById("gm_f_name").innerHTML = members[i][10][1];
    document.getElementById("gf_m_name").innerHTML = members[i][10][2];
    document.getElementById("gm_m_name").innerHTML = members[i][10][3];
    document.getElementById("fatherName").innerHTML = members[i][10][4];
    document.getElementById("motherName").innerHTML = members[i][10][5];
    document.getElementById("selfName").innerHTML = members[i][0]+" "+members[i][1];
    document.getElementById("sib1Name").innerHTML = members[i][11][0];
    document.getElementById("sib2Name").innerHTML = members[i][11][1];
    document.getElementById("spouseName").innerHTML = members[i][12][0];
    document.getElementById("child1Name").innerHTML = members[i][12][1];
    document.getElementById("child2Name").innerHTML = members[i][12][2];
    

}


 function myAvatar() {
    var avatar = ["AvatarMale.png","AvatarFemale.jpg"];
    if(members[i][5]==Male){
	   document.getElementById('PP').src = avatar[0];
	}else {
	   document.getElementById('PP').src = avatar[1];
	}
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /**
 var age = 23; //age라는 변수에 숫자 23을 넣어라.
 document.write("<div style='color:blue; background:yellow; font-size:14px;'>외부자바스크립트파일</div>");
 document.write("당신의 나이는 "+age+" 입니다.");
 document.write("<script src='ejs2.js'></script>");
 */