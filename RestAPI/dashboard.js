$(document).ready(function () {
  var $Employee = $('#Employee');

  function AddEmploy(value) {
    $Employee.append(`<tr>
                         <td>${value.firstname}</td>
                         <td>${value.lastname}</td>
                         <td>${value.email}</td>
                         <td><button id="${value.id}" type="button" class="btn-edit">edit</button></td>
                         <td><button id="${value.id}" type="button" class="btn-delete">delete</button></td>
         </tr>`)
  }


  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/Employees",
    success: function (Employee) {
      $.each(Employee, function (index, value) {
        AddEmploy(value)
      })
    },
    error: function () {
      alert('error loading data')
    }
  });

  $Employee.on('click', 'button.btn-edit', function (value) {
    let id = value.target.id;
    localStorage.setItem("id",JSON.stringify(id));
    let m = localStorage.getItem("id");
    let e = JSON.parse(m);
    console.log("id",e)
    window.location = "editemploy.html"
  })



  $Employee.on('click', 'button.btn-delete', function (value) {
    let id = value.target.id;
    $.ajax({
      type: 'DELETE',
      url: "http://localhost:3000/Employees/" + id,
      success: function () {
        $(this).closest('tr').remove();
        console.log("removed");
      },
      error: function () {
        console.log('error deleting data')
      }
    })
  })
});
