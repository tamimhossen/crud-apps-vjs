let crudTable = document.getElementById("crudTable");
let tableBody = document.getElementById("tableBody");
let name = document.getElementById("name");
let age = document.getElementById("age");
let address = document.getElementById("address");
let email = document.getElementById("email");
let peopleList = [];

function AddData() {
    peopleList.push({
        name: name.value,
        age: age.value,
        address: address.value,
        email: email.value
    });
    console.log(peopleList);

    let html = '';
    peopleList.forEach(function (value, index, peopleList)  {
        html += "<tr>";
        html += "<td>" + value.name + "</td>";
        html += "<td>" + value.age + "</td>";
        html += "<td>" + value.address + "</td>";
        html += "<td>" + value.email + "</td>";
        html += '<td> <button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button> <button onclick="updateeData(' + index + ')" class="btn btn-warning">Update</button> </td>';
        html += "</tr>";
                
    });

    tableBody.innerHTML = html;
}

