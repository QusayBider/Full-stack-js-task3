var register = document.querySelector(".FormRegister");
var InputName = document.querySelector("#name");
var InputDescription = document.querySelector("#description");
var InputPrice = document.querySelector("#price");

var users = [];
register.onsubmit = function (e) {
  e.preventDefault();
  var user = {
    name: InputName.value,
    description: InputDescription.value,
    price: InputPrice.value,
  };
  users.push(user);
  printTable();
};

function printTable() {
  var data = ``;
  for (var i = 0; i < users.length; i++) {
    data += `
    <tr>  
    <td>${users[i].name}</td> 
    <td>${users[i].description}</td> 
    <td>${users[i].price}</td> 
     </tr>`;
  }
  document.querySelector("tbody").innerHTML = data;
}
