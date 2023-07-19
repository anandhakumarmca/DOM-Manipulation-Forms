let selectedRow = null;

function onSubmit() {
    let checkboxes = document.querySelectorAll('input[type = checkbox]:checked')
    if (checkboxes.length < 2) {
        alert("Please select 2 or more Food Choices")
    }
    else {
        onFormSubmit()
    }
}

function onFormSubmit() {

    var formData = readFormData()

    if (selectedRow == null) {
        insertNewRecord(formData)
    }
    resetForm()
}

function readFormData() {
    let foodarray = []
    let checkboxes = document.querySelectorAll('input[type = checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        foodarray.push(checkboxes[i].value)
    }

    const formData = {}
    formData["FirstName"] = document.getElementById("first-name").value
    formData["LastName"] = document.getElementById("last-name").value
    formData["Address"] = document.getElementById("address").value
    formData["Country"] = document.getElementById("inputCountry").value
    formData["State"] = document.getElementById("inputState").value
    formData["Zip"] = document.getElementById("pincode").value
    formData["Gender"] = document.querySelector('input[type = radio]:checked').value;
    formData["Food"] = foodarray
    // console.log(formData)
    return formData
}


function insertNewRecord(data) {
    let table = document.getElementById('displayTable').getElementsByTagName('tbody')[0]
    let newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.FirstName
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.LastName
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.Address
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.Zip
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.Gender
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = data.Food
    cell7 = newRow.insertCell(6)
    cell7.innerHTML = data.State
    cell8 = newRow.insertCell(7)
    cell8.innerHTML = data.Country
}


function resetForm() {
    document.getElementById('first-name').value = ""
    document.getElementById('last-name').value = ""
    document.getElementById('address').value = ""
    document.getElementById('inputCountry').value = ""
    document.getElementById('inputState').value = ""
    document.getElementById('pincode').value = ""

    let checkboxes = document.querySelectorAll('input[type = checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false
    }

    let radios = document.querySelectorAll('input[type = radio]:checked')
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false
    }

    selectedRow = null
}
