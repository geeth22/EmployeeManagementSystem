$(document).ready(function () {

  let M = localStorage.getItem("id");
  let E = JSON.parse(M);
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/Employees/" + E,
    success: function (Employees) {
      $.each(Employees, function () {
        document.getElementById("firstname").value = Employees.firstname;
        document.getElementById("lastname").value = Employees.lastname;
        document.getElementById("email").value = Employees.email;
      })
    },
    error: function () {
      alert("error loading data");
    }
  })

  $(".btn-update").click(function (){

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

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
            type: "PUT",
            url: "http://localhost:3000/Employees/" + E,
            data: emp,
            suuccess: function () {
              
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


