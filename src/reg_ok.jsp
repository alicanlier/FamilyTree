<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Your entered info</title>
</head>
<body>
<h1>Entered info</h1><hr>
<%
request.setCharacterEncoding("utf-8");
String firstName = request.getParameter("firstName");
String familyName = request.getParameter("familyName");
String email_id = request.getParameter("email_id")+"@"+request.getParameter("email_add");
String pwd = request.getParameter("pwd");
String repwd = request.getParameter("repwd");
String yy = request.getParameter("yy");
String mm = request.getParameter("mm");
String dd = request.getParameter("dd");
String gender = request.getParameter("gender");
String country = request.getParameter("countries");
String city = request.getParameter("cities");
String town = request.getParameter("towns");
String agree = request.getParameter("agree");
%>




<hr>
</body>
</html>