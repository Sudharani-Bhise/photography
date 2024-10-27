function emailSend(){

	var userName = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var address = document.getElementById("address").value;
    var photostyle = document.getElementById("photostyle").value;
   
    

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
    "<br/> Date " + date +
    "<br/> Time " + time +
    "<br/> Address " + address +
    "<br/> Photostyle" + photostyle;
   
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sudharanibhise05@gmail.com",
    Password : "9EE38CBB44BBCF3B99CB6EFAE4E5E0186E80",
    To : "sudharanibhise05@gmail.com",
    From : "sudharanibhise05@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}