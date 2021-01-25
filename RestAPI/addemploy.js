$(document).ready(function () {
  
  $(".btn-add").click(function (){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;

    var fnameRGX = /^[A-Za-z]{3,}$/;
    var lnameRGX = /^[A-Za-z]{3,}$/;
    var emailRGX = /^([a-zA-Z0-9_.$*&!+-]+)@([a-zA-Z]+).([a-zA-Z]{2,})$/;

    if (fnameRGX.test(firstname) == false) {
      alert("enter valid name");
      return false;
    }
    else {
      if (lnameRGX.test(lastname) == false) {
        alert("enter valid email");
        return false;
      }
      else {
        if (emailRGX.test(email) == false) {
          alert("enter valid phone number");
          return false;
        }
        else {
          var emp = {
            firstname: firstname,
            lastname: lastname,
            email: email
          };
          console.log(emp)
          $.ajax({
            type: "POST",
            url: "http://localhost:3000/Employees",
            data: emp,
            suuccess: function () {
              console.log("Data added successfully")
            },
            error: function () {
              alert('error loading data')
            }
          });
        }
      }
    }
    window.location = "dashboard.html";
  })
})




