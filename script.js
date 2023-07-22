//Design part
var containerDiv = createDivWithClass('container-sm my-5');
var title1 = createH1WithId('title','DOM Manipulation Forms');

var descriptionPara = document.createElement('p');
descriptionPara.id = 'description';
descriptionPara.innerText = 'A Form Submission using HTML, CSS, DOM, and Bootstrap with Firstname, Lastname, address, pincode, gender, choice of food, state, country and on submit of the form the values append to the table using ';
document.body.append(descriptionPara);

var rowDiv1 = createDivWithClass('row');
var colDiv1 = createDivWithClass('col-sm-4');
var title2 = createH1WithId('title','Form Submission');

var formDiv = document.createElement('form');
formDiv.setAttribute('onsubmit','event.preventDefault(); onSubmit();');
formDiv.id = 'form';
document.body.append(formDiv);

var formrow1 = createDivWithClass('form-row');
var formGroup1 = createDivWithClass('form-group col-md-6');

var labelFirstName = createLabel('labelFirstName','First Name');
var inputFirstName = createInput('text','form-control','first-name','Enter Firstname');

var formGroup2 = createDivWithClass('form-group col-md-6');

var labelLastName = createLabel('labelLastName','Last Name');
var inputLastName = createInput('text','form-control','last-name','Enter Lastname');

var formGroup3 = createDivWithClass('form-group');

var labelAddress = createLabel('formControlTextarea','Address');
var textareaAddress = document.createElement('textarea');
textareaAddress.className = 'form-control';
textareaAddress.id = 'address';
textareaAddress.rows = '3';
textareaAddress.placeholder = 'Enter Address';
textareaAddress.required = 'required';
document.body.append(textareaAddress);

var formrow2 = createDivWithClass('form-row');
var formGroup4 = createDivWithClass('form-group col-md-4');
var labelCountry = createLabel('labelCountry','Country');
var inputCountry = createInput('text','form-control','inputCountry','Enter Country');
var formGroup5 = createDivWithClass('form-group col-md-4');
var labelState = createLabel('labelState','State');
var inputState = createInput('text','form-control','inputState','Enter State');
var formGroup6 = createDivWithClass('form-group col-md-4');
var labelPincode = createLabel('labelPincode','pincode');
var inputPincode = createInput('text','form-control','pincode','Enter Pincode');

var formrow3 = createDivWithClass('form-row');
var formGroup7 = createDivWithClass('form-group col-md-4');
var labelGender = createLabel('labelGender','Gender');

var formGroup8 = createDivWithClass('form-group col-md-4');
var formCheck1 = createDivWithClass('form-check form-check-inline');
var inputMale = createRadio('radio','form-check-input','radioMale','inlineRadioOptions','Male');
var labelMale = createLabelWithClass('form-check-label','inlineRadio1','Male');

var formGroup9 = createDivWithClass('form-group col-md-4');
var formCheck2 = createDivWithClass('form-check form-check-inline');
var inputFemale = createRadio('radio','form-check-input','radioFemale','inlineRadioOptions','Female');
var labelFemale = createLabelWithClass('form-check-label','inlineRadio2','Female');

var formGroup10 = createDivWithClass('form-group row');
var labelChoiceOfFood = createLabelWithClass('form-check-cof col-sm-6','choiceOfFood','Choice of Food');
var colCheckbox = createDivWithClass('col-sm-10');
var formCheck3 = createDivWithClass('form-check');
var inputCheckBox1 = createCheckbox('form-check-input','checkbox','checbox1','North Indian');
var labelCheckBox1 = createLabelWithClass('form-check-label','checbox1',' North Indian');
var formCheck4 = createDivWithClass('form-check');
var inputCheckBox2 = createCheckbox('form-check-input','checkbox','checbox2','South Indian');
var labelCheckBox2 = createLabelWithClass('form-check-label','checbox2','South Indian');
var formCheck5 = createDivWithClass('form-check');
var inputCheckBox3 = createCheckbox('form-check-input','checkbox','checbox3','Chinese');
var labelCheckBox3 = createLabelWithClass('form-check-label','checbox3','Chinese');
var formCheck6 = createDivWithClass('form-check');
var inputCheckBox4 = createCheckbox('form-check-input','checkbox','checbox4','Italian');
var labelCheckBox4 = createLabelWithClass('form-check-label','checbox4','Italian');
var formCheck7 = createDivWithClass('form-check');
var inputCheckBox5 = createCheckbox('form-check-input','checkbox','checbox5','Japanese');
var labelCheckBox5 = createLabelWithClass('form-check-label','checbox5','Japanese');

var buttonrow = createDivWithClass('row');
var buttonDiv1 = createDivWithClass('col-sm-4');
var buttonDiv2 = createDivWithClass('col-sm-4');
var buttonDiv3 = createDivWithClass('col-sm-4');
var buttonSubmit = document.createElement("button");
buttonSubmit.type = 'submit';
buttonSubmit.className = 'btn btn-primary';
buttonSubmit.id = 'submit';
buttonSubmit.innerText ='Submit';
document.body.append(buttonSubmit);

var colDiv2 = createDivWithClass('col-sm-8');
var headingTable = createH1WithId('title','Updated Table Data');

var createTable = document.createElement('table');
createTable.className = 'table table-striped';
createTable.id = 'displayTable';
document.body.append(createTable);

var createTablehead = document.createElement('thead');
createTablehead.className = 'thead-dark';
document.body.append(createTablehead);

var createTableRow = document.createElement('tr');
document.body.append(createTableRow);

var createTableheading1 = createTableheading('First Name');
var createTableheading2 = createTableheading('Last Name');
var createTableheading3 = createTableheading('Address');
var createTableheading4 = createTableheading('Country');
var createTableheading5 = createTableheading('State');
var createTableheading6 = createTableheading('Pincode');
var createTableheading7 = createTableheading('Gender');
var createTableheading8 = createTableheading('Food');

var createTableBody= document.createElement('tbody');
document.body.append(createTableBody);

containerDiv.appendChild(title1);
containerDiv.appendChild(descriptionPara);
containerDiv.appendChild(rowDiv1);
rowDiv1.appendChild(colDiv1);
colDiv1.appendChild(title2);
colDiv1.appendChild(formDiv);  
formDiv.appendChild(formrow1);
formrow1.appendChild(formGroup1);
formGroup1.appendChild(labelFirstName);
formGroup1.appendChild(inputFirstName);
formrow1.appendChild(formGroup2);
formGroup2.appendChild(labelLastName);
formGroup2.appendChild(inputLastName);
formDiv.appendChild(formGroup3);
formGroup3.appendChild(labelAddress);
formGroup3.appendChild(textareaAddress);
formDiv.appendChild(formrow2);
formrow2.appendChild(formGroup4);
formGroup4.appendChild(labelCountry);
formGroup4.appendChild(inputCountry);
formrow2.appendChild(formGroup5);
formGroup5.appendChild(labelState);
formGroup5.appendChild(inputState);
formrow2.appendChild(formGroup6);
formGroup6.appendChild(labelPincode);
formGroup6.appendChild(inputPincode);
formDiv.appendChild(formrow3);
formrow3.appendChild(formGroup7);
formGroup7.appendChild(labelGender);
formrow3.appendChild(formGroup8);
formGroup8.appendChild(formCheck1);
formCheck1.appendChild(inputMale);
formCheck1.appendChild(labelMale);
formrow3.appendChild(formGroup9);
formGroup9.appendChild(formCheck2);
formCheck2.appendChild(inputFemale);
formCheck2.appendChild(labelFemale);
formDiv.appendChild(formGroup10);
formGroup10.appendChild(labelChoiceOfFood);
formGroup10.appendChild(colCheckbox);
colCheckbox.appendChild(formCheck3);
formCheck3.appendChild(inputCheckBox1);
formCheck3.appendChild(labelCheckBox1);
colCheckbox.appendChild(formCheck4);
formCheck4.appendChild(inputCheckBox2);
formCheck4.appendChild(labelCheckBox2);
colCheckbox.appendChild(formCheck5);
formCheck5.appendChild(inputCheckBox3);
formCheck5.appendChild(labelCheckBox3);
colCheckbox.appendChild(formCheck6);
formCheck6.appendChild(inputCheckBox4);
formCheck6.appendChild(labelCheckBox4);
colCheckbox.appendChild(formCheck7);
formCheck7.appendChild(inputCheckBox5);
formCheck7.appendChild(labelCheckBox5);
formDiv.appendChild(buttonrow);
buttonrow.appendChild(buttonDiv1);
buttonrow.appendChild(buttonDiv2);
buttonrow.appendChild(buttonDiv3);
buttonDiv2.appendChild(buttonSubmit);
rowDiv1.appendChild(colDiv2);
colDiv2.appendChild(headingTable);
colDiv2.appendChild(createTable);
createTable.appendChild(createTablehead);
createTable.appendChild(createTableBody);
createTablehead.appendChild(createTableRow);
createTableRow.appendChild(createTableheading1);
createTableRow.appendChild(createTableheading2);
createTableRow.appendChild(createTableheading3);
createTableRow.appendChild(createTableheading4);
createTableRow.appendChild(createTableheading5);
createTableRow.appendChild(createTableheading6);
createTableRow.appendChild(createTableheading7);
createTableRow.appendChild(createTableheading8);

function createDivWithClass(classValue) {
    var divElement = document.createElement('div');
    divElement.className=(classValue);
    document.body.append(divElement);
    return divElement;
}

function createH1WithId(idName,content){
    var h1Div = document.createElement('h1');
    h1Div.id = (idName);
    h1Div.innerText = (content);
    document.body.append(h1Div);
    return h1Div;
}

function createLabel(labelfor,content){
    var lable1 = document.createElement('label');
    lable1.htmlFor = (labelfor);
    lable1.innerHTML = (content);
    document.body.append(lable1);
    return lable1;
}

function createInput(typeValue,className,idValue,placeHolderName){
    var input1 = document.createElement('input');
    input1.type = (typeValue);
    input1.className = (className);
    input1.id = (idValue);
    input1.placeholder = (placeHolderName)
    input1.required = 'required';
    document.body.append(input1);
    return input1;
}

function createRadio(typeValue,className,idValue,nameattr,valueattr){
    var radio1 = document.createElement('input');
    radio1.type = (typeValue);
    radio1.className = (className);
    radio1.id = (idValue);
    radio1.name = (nameattr)
    radio1.value = (valueattr);
    radio1.required = 'required';
    document.body.append(radio1);
    return radio1;
}

function createLabelWithClass(className,labelfor,content){
    var lable2 = document.createElement('label');
    lable2.className = (className);
    lable2.htmlFor = (labelfor);
    lable2.innerHTML = (content);
    document.body.append(lable2);
    return lable2;
}

function createCheckbox(className,typeValue,idValue,valueattr){
    var checkbox1 = document.createElement('input');
    checkbox1.type = (typeValue);
    checkbox1.className = (className);
    checkbox1.id = (idValue);
    checkbox1.value = (valueattr);
    document.body.append(checkbox1);
    return checkbox1;
}

function createTableheading(content){
    var tabelheading1 = document.createElement('th');
    tabelheading1.scope = 'col';
    tabelheading1.innerHTML = (content);
    document.body.append(tabelheading1);
    return tabelheading1;
}


//Functional part
function onSubmit() {
    var checkboxes = document.querySelectorAll('input[type = checkbox]:checked');
    if (checkboxes.length < 2) {
        alert("Please select 2 or more Food Choices");
    }
    else {
        onFormSubmit();
    }
}

var selectedRow = null;

function onFormSubmit() {

    var formData = readFormData();

    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var foodarray = []
    var checkboxes = document.querySelectorAll('input[type = checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        foodarray.push(checkboxes[i].value)
    }

    const formData = {}
    formData["FirstName"] = document.getElementById("first-name").value;
    formData["LastName"] = document.getElementById("last-name").value;
    formData["Address"] = document.getElementById("address").value;
    formData["Country"] = document.getElementById("inputCountry").value;
    formData["State"] = document.getElementById("inputState").value;
    formData["Pincode"] = document.getElementById("pincode").value;
    formData["Gender"] = document.querySelector('input[type = radio]:checked').value;
    formData["Food"] = foodarray;
    console.log(formData);
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById('displayTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.LastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Country;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.State;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Pincode;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Gender;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Food;
}


function resetForm() {
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('address').value = "";
    document.getElementById('inputCountry').value = "";
    document.getElementById('inputState').value = "";
    document.getElementById('pincode').value = "";

    var checkboxes = document.querySelectorAll('input[type = checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    var radios = document.querySelectorAll('input[type = radio]:checked');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    selectedRow = null;
}
