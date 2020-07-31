function formValidation()
{
var fname = document.registration.firstname;
var lname = document.registration.lastname;
var funame = document.registration.fullname;
var age1 = document.registration.age;
var uphone = document.registration.phone;
var uadd = document.registration.address;
var umsex = document.registration.gender;
var uemail = document.registration.email; 
if(allLetter1(fname))
{
if(allLetter2(lname))
{
if(allLetter3(funame))
{
if(age2(age1))
{
if(phonenumber(uphone))
{
if(alphanumeric(uadd))
{ 
if(ValidateEmail(uemail))
{
if(validsex(umsex))
{
	document.writeln("First Name is:",fname.value);
	document.write("<br />");
	document.writeln("Last Name is:",lname.value);
	document.write("<br />");
	document.writeln("Full Name is:",funame.value);
	document.write("<br />");
	document.writeln("Age is:",age1.value);
	document.write("<br />");
	document.writeln("Phone Number is:",uphone.value);
	document.write("<br />");
	document.writeln("Address is:",uadd.value);
	document.write("<br />");
	document.writeln("Email is:",uemail.value);
	document.write("<br />");
	document.writeln("Gender is:",umsex.value);
	document.write("<br />");	
}
} 
}
}
}
} 
}
}
return false;
} 
function allLetter1(fname)
{ 
var letters = /^[A-Za-z]+$/;
if(fname.value.match(letters))
{
return true;
}
else
{
alert('First name must have alphabet characters only');
fname.focus();
return false;
}
}
function allLetter2(lname)
{ 
var letters = /^[A-Za-z]+$/;
if(lname.value.match(letters))
{
return true;
}
else
{
alert('Last name must have alphabet characters only');
lname.focus();
return false;
}
}
function allLetter3(funame)
{ 
var letters = /^[A-Za-z ]+$/;
if(funame.value.match(letters))
{
return true;
}
else
{
alert('Full name must have alphabet characters only');
funame.focus();
return false;
}
}
function age2(age1)
{
var xi = age1.value;
if(xi>=18 && xi<=150)
{
return true;
}
else
{
alert("Age must be between 18 and 150.");
age1.focus();
return false;
}
}
function phonenumber(phone)
{
var phoneno = /^\d{10}$/;
if(phone.value.match(phoneno))
{
return true;
}
else
{
alert("Phone number invalid. Must be 10 digits.");
phone.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('Address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 
function validsex(umsex)
{
if(umsex[0].checked==false && umsex[1].checked==false)
{
alert("Choose gender");
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
