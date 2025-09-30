console.log("hello");

console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const mobNo = document.getElementById("mobNo");
const date = document.getElementById("date");
const allError = document.querySelector(".allError");
const SubmitBtn = document.getElementById("SubmitBtn")
const msg = document.getElementById("msg");

let obj = {}

function cheakFirstName() {
    const firstNameError = document.getElementById("firstNameError");
    let value = fname.value;
    firstNameError.style.color = "red"
    if (value == "") {
        firstNameError.innerHTML = "fields are required."
        return false
    } else if (value[0] >= 0 || value[0] <= 9) {
        firstNameError.innerHTML = "enter correct name."
        return false
    } else if (value.length < 2) {
        firstNameError.innerHTML = "enter correct name."
        return false
    } else {
        firstNameError.innerHTML = "";
        obj.firstName = value;
        // console.log(obj)
        return true
    }
}
function cheakLastName() {
    const lastNameError = document.getElementById("lastNameError")
    let value = lname.value;
    lastNameError.style.color = "red"
    if (value == "") {
        lastNameError.innerHTML = "fields are required."
        return false
    } else if (value[0] >= 0 || value[0] <= 9) {
        lastNameError.innerHTML = "enter correct name."
        return false
    } else if (value.length < 2) {
        lastNameError.innerHTML = "enter correct name."
        return false
    } else {
        lastNameError.innerHTML = "";
        // console.log("err");

        obj.lastName = value;
        // console.log(obj)
        return true
    }
}

function cheakEmail() {
    let value = email.value;
    const emailError = document.getElementById("emailError");
    emailError.style.color = "red"
    let newValue = value.split()
    if (value == "") {
        emailError.innerHTML = "fields are required."
        return false
    }
    else if (value[0] >= 0 || value[0] <= 9) {
        emailError.innerHTML = "please enter correct email."
        return false
    }
    else if (newValue.includes("@")) {
        emailError.innerHTML = "please enter correct email."
        return false
    }
    else if (newValue.includes(".")) {
        emailError.innerHTML = "please enter correct email."
        return false
    } else {
        emailError.innerHTML = ""
        obj.Email = value;
        // console.log(obj)
        return true
    }
}
function cheakPhoneNumber() {
    const mobNoError = document.getElementById("mobNoError");
    mobNoError.style.color = "red"
    let value = mobNo.value;
    if (value == "") {
        mobNoError.innerHTML = 'field is requiered'
        return false;
    }
    else if (value.length !== 10) {
        mobNoError.innerHTML = 'please enter correct number.'
        return false;
    }
    for (let a of value) {
        if (isNaN(a)) {
            mobNoError.innerHTML = 'please enter correct number.'
            return false;
        } else {
            mobNoError.innerHTML = "";
            obj.Phone = value;
            // console.log(obj)
            return true;
        }
    }
}
function cheakDateOfBirth() {
    let value = date.value;
    const dateError = document.getElementById("dateError");
    dateError.style.color = "red"
    if (value == "") {
        dateError.innerHTML = 'field is requiered'
        return false;
    } else {
        dateError.innerHTML = ''
        obj.DOB = value;
        // console.log(obj)
        return true;
    }
}
function cheakGender() {
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const other = document.getElementById("other");
    const genderError = document.getElementById('genderError');
    genderError.style.color = "red"
    // console.log(maleValue)
    if (male.checked) {
        obj.Gender = male.value;
        genderError.innerHTML = ""
        return true;
    } else if (female.checked) {
        obj.Gender = female.value;
        genderError.innerHTML = ""
        return true;
    } else if (other.checked) {
        obj.Gender = other.value;
        genderError.innerHTML = ""
        return true;
    }
    else {
        genderError.innerHTML = "field are required"
        return false;
    }
}
let hobbies = []
function checkHobby() {
    hobbies = [];
    const otherHobby = document.getElementById("otherHobby");
    const bike = document.getElementById("bike");
    const watching = document.getElementById("watching");
    const books = document.getElementById("books");
    const cricket = document.getElementById("cricket");
    const hobbyError = document.getElementById("hobbyError");
    hobbyError.style.color = "red"
    if (bike.checked) {
        hobbies.push(bike.value)
    } if (watching.checked) {
        hobbies.push(watching.value)
    } if (books.checked) {
        hobbies.push(books.value)
    } if (cricket.checked) {
        hobbies.push(cricket.value)
    } if (otherHobby.checked) {
        hobbies.push(otherHobby.value)
    }
    if (hobbies.length > 0) {
        obj.Hobbies = hobbies;
        hobbyError.innerHTML = ""
        // console.log(obj)
        return true
    } else {
        hobbyError.innerHTML = "fields are required"
        return false
    }
    // console.log(hobbies)
}

function cheakMassage() {
    let value = msg.value;
    const msgError = document.getElementById("msgError");
    msgError.style.color = "red"
    if (value == "") {
        msgError.innerHTML = "fields are required"
        return false
    } else {
        msgError.innerHTML = "";
        obj.Massage = value;
        // console.log(obj)
        return true;
    }
}

let term = []
function turmAndCondition() {
    term = [];
    const subscribe = document.getElementById("subscribe");
    const conditions = document.getElementById("conditions");
    const receive = document.getElementById("receive")
    const optionsErorr = document.getElementById("optionsErorr");
    optionsErorr.style.color = "red"
    if (subscribe.checked) {
        term.push(subscribe.value)
    } if (conditions.checked) {
        term.push(conditions.value)
    } if (receive.checked) {
        term.push(receive.value)
    } if (term.length > 0) {
        obj.condition = term;
        optionsErorr.innerHTML = ""
        return true
    }
    else {
        optionsErorr.innerHTML = "fields are required"
        return false
    }
}

SubmitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    let fname = false;
    let lname = false;
    let dob = false;
    let hobbie = false;
    let email = false;
    let phone = false;
    let gen = false;
    let msg = false;
    let turm = false
    if (cheakFirstName()) {
        fname = true;
    } else {
        fname = false;
    }
    if (cheakLastName()) {
        lname = true;
    } else {
        lname = false;
    }
    if (cheakDateOfBirth()) {
        dob = true;
    } else {
        dob = false;
    }
    if (checkHobby()) {
        hobbie = true;
    } else {
        hobbie = false;
    }
    if (cheakMassage()) {
        msg = true;
    } else {
        msg = false;
    }
    if (cheakEmail()) {
        email = true;
    } else {
        email = false;
    }
    if (cheakPhoneNumber()) {
        phone = true;
    } else {
        phone = false;
    }
    if (turmAndCondition()) {
        turm = true;
    } else {
        turm = false;
    } if (cheakGender()) {
        gen = true;
    } else {
        gen = false
    }
    if (msg && phone && email && hobbie && dob && lname && fname && turm) {
        localStorage.setItem("user", JSON.stringify(obj))
        console.log(obj)
    }

})