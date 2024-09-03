const firebaseConfig = {
    apiKey: "AIzaSyDn5l50utUfCEBpWEYX_lQO5Ar3OB0WAmc",
    authDomain: "salamom-d3246.firebaseapp.com",
    databaseURL: "https://salamom-d3246-default-rtdb.firebaseio.com",
    projectId: "salamom-d3246",
    storageBucket: "salamom-d3246.appspot.com",
    messagingSenderId: "521352537338",
    appId: "1:521352537338:web:fbccf858c76c4a843d1543"
};
firebase.initializeApp(firebaseConfig);


$(document).ready(function () {
    let select_name = document.getElementById('select_username');
    let select_year = document.getElementById('user_teacher_year');
    firebase
        .database()
        .ref(`SalaMOM/staffs`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var id = data.val().fullname;
                var get_url_pic = data.val().get_url_pic;
                if (!get_url_pic) {
                    get_url_pic = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
                }
                let t = `
           <li class="dropdown-item" data-label="${id}" data-image="${get_url_pic}">
           <img style="width: 50px;" src="${get_url_pic}" alt="image">
           ${id}</li>

                `;
                select_name.innerHTML += t;
            })
        })
    firebase
        .database()
        .ref(`SalaMOM/tools/years`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var id = data.val().yearEn;
                let t = `
                <option value="${id}">${id}</option>
                `;
                select_year.innerHTML += t;
            })
        })
    
})
//Add users
document.getElementById('btnAdd').addEventListener('click', () => {
    var user_teacher_id = document.getElementById('user_teacher_id');
    var user_username = document.getElementById('user_username');
    var user_password = document.getElementById('user_password');
    var user_url = document.getElementById('user_url');
    var user_role = document.getElementById('user_role');
    var user_teacher_year = document.getElementById('user_teacher_year');
    var user_subs = document.getElementById('selectedSubjects3');
    Swal.fire({
        text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
    });
    firebase
        .database()
        .ref(`SalaMOM/users/` + user_teacher_id.value)
        .set({
            id: user_teacher_id.value,
            user_username: user_username.value,
            user_password: user_password.value,
            user_url: user_url.value,
            user_role: user_role.value,
            user_subs: user_subs.value,
            user_teacher_year: user_teacher_year.value,
        })
    setTimeout(function () {
        document.getElementById('user_teacher_id').value = '';
        document.getElementById('user_username').value = '';
        document.getElementById('user_password').value = '';
        document.getElementById('user_url').value = '';
        document.getElementById('user_role').value = '';
        document.getElementById('user_teacher_year').value = '';
        document.getElementById('selectedSubjects3').value = '';
    }, 1500)
})
//Auto password
function generateRandomString() {
    const digits = "0123456789";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const small_letter = uppercaseLetters.toLowerCase();
    let result = "";

    // Generate two random digits
    for (let i = 0; i < 3; i++) {
        result += digits[Math.floor(Math.random() * digits.length)];
    }

    // Generate two random uppercase letters
    for (let i = 0; i < 2; i++) {
        result += small_letter[Math.floor(Math.random() * uppercaseLetters.length)];
    }

    // Shuffle the characters for a more random order (optional)
    result = result.split("").sort(() => Math.random() - 0.5).join("");

    return result;
}
//Click create new to clear the form// Random password// username with no space
const randomString = generateRandomString();
var get_name = document.getElementById('user_username');
document.getElementById('addNew').addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    var get_num = document.getElementById('user_password');
    document.getElementById('user_teacher_id').value = '';
    document.getElementById('user_username').value = '';
    document.getElementById('user_password').value = '';
    document.getElementById('user_url').value = '';
    document.getElementById('selectedSubjects3').value = '';
    document.getElementById('user_role').value = '';
    document.getElementById('user_teacher_year').value = '';
    document.getElementById('btnAdd').style.display = 'block';
    document.getElementById('btnUpdate').style.display = 'none';
    document.getElementById('btnDelete').style.display = 'none';
    get_num.value = randomString;
})
get_name.addEventListener("keypress", (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
});
//Show data in the table

$(document).ready(function () {
    let N0 = '';
    var show_users = document.getElementById('showUsers');
    firebase
        .database()
        .ref(`SalaMOM/users/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                N0++;
                var id = d.val().id;
                var user_username = d.val().user_username;
                var user_password = d.val().user_password;
                var user_url = d.val().user_url;
                var user_role = d.val().user_role;
                var user_subs = d.val().user_subs;
                var user_teacher_year = d.val().user_teacher_year;
                const nameWithoutSpace = id.replace(/\s/g, "");
                if (!user_url) {
                    user_url = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
                }
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><img style="width: 40px;" src="${user_url}" alt="image"><button class="editBtn" id="${nameWithoutSpace}" data-bs-toggle="modal" data-bs-target="#add_users"
                data-username='${user_username}'
                data-password='${user_password}'
                data-role='${user_role}'
                data-subs='${user_subs}'
                data-year='${user_teacher_year}'
                data-name='${id}'
                data-img='${user_url}'
                >${id}</button></td>
                <td class='border-dark text-center'>${user_username}</td>
                <td class='border-dark text-center'>${user_password}</td>
                <td class='border-dark text-center'>${user_role}</td>
                <td class='border-dark text-center'>${user_subs}</td>
                <td class='border-dark text-center'>${user_teacher_year}</td>

                `;
                show_users.innerHTML += t;

                // update data
                setTimeout(function () {
                    const w = document.getElementById(`${nameWithoutSpace}`);
                    w.addEventListener('click', () => {
                        const name = w.dataset.name;
                        const username = w.dataset.username;
                        const password = w.dataset.password;
                        const role = w.dataset.role;
                        const subs = w.dataset.subs;
                        const year = w.dataset.year;
                        const user_url = w.dataset.img;
                        document.getElementById('user_teacher_id').value = name;
                        document.getElementById('user_username').value = username;
                        document.getElementById('user_password').value = password;
                        document.getElementById('user_url').value = user_url;
                        document.getElementById('selectedSubjects3').value = subs;
                        document.getElementById('user_role').value = role;
                        document.getElementById('user_teacher_year').value = year;
                        document.getElementById('btnAdd').style.display = 'none';
                        document.getElementById('btnUpdate').style.display = 'block';
                        document.getElementById('btnDelete').style.display = 'block';
    
                    })
                    document.getElementById('btnUpdate').addEventListener('click', () => {
                        var user_teacher_id = document.getElementById('user_teacher_id');
                        var user_username = document.getElementById('user_username');
                        var user_password = document.getElementById('user_password');
                        var user_url = document.getElementById('user_url');
                        var user_role = document.getElementById('user_role');
                        var user_teacher_year = document.getElementById('user_teacher_year');
                        var user_subs = document.getElementById('selectedSubjects3');
                        Swal.fire({
                            text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        firebase
                            .database()
                            .ref(`SalaMOM/users/` + user_teacher_id.value)
                            .update({
                                id: user_teacher_id.value,
                                user_username: user_username.value,
                                user_password: user_password.value,
                                user_url: user_url.value,
                                user_role: user_role.value,
                                user_subs: user_subs.value,
                                user_teacher_year: user_teacher_year.value,
                            })
                        setTimeout(function () {
                            document.getElementById('user_teacher_id').value = '';
                            document.getElementById('user_username').value = '';
                            document.getElementById('user_password').value = '';
                            document.getElementById('user_url').value = '';
                            document.getElementById('user_role').value = '';
                            document.getElementById('user_teacher_year').value = '';
                            document.getElementById('selectedSubjects3').value = '';
                            window.location.reload();
                        }, 1500)
    
                    })
                    //Remove data
                    document.getElementById('btnDelete').addEventListener('click', () => {
                        var user_teacher_id = document.getElementById('user_teacher_id');
                        Swal.fire({
                            text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        firebase
                            .database()
                            .ref(`SalaMOM/users/` + user_teacher_id.value)
                            .remove();
                        setTimeout(function () {
                            window.location.reload();
                        }, 1500)
    
                    })
                    
                },1000)
            })
        })
})

//Get subjects to show in select
$(document).ready(function () {
    let tableSubs = document.getElementById('subjectList3');
    let tableClass = document.getElementById('subjectList4');
    //subjects
    firebase
        .database()
        .ref(`SalaMOM/tools/subjects/`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var subKh = data.val().subKh;
                var subAbr = data.val().subAbr;
                var subEn = data.val().subEn;
                let t = `
           <li><a class="dropdown-item"><input type="checkbox"
           id="subject${subEn}" value="${subAbr}">
           <label for="subject-math">${subKh}</label>
           <br></a></li>
                `
                tableSubs.innerHTML += t;
            })
        })
    //class Primary
    firebase
        .database()
        .ref(`SalaMOM/tools/class/បឋមសិក្សា`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var clKh = data.val().clKh;
                var clEn = data.val().clEn;
                let t = `
           <li><a class="dropdown-item"><input type="checkbox"
           id="grade${clEn}" value="${clEn}">
           <label for="subject-math">${clKh}</label>
           <br></a></li>
                `
                tableClass.innerHTML += t;
            })
        })
    //class Secondary
    firebase
        .database()
        .ref(`SalaMOM/tools/class/អនុវិទ្យាល័យ`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var clKh = data.val().clKh;
                var clEn = data.val().clEn;
                let t = `
           <li><a class="dropdown-item"><input type="checkbox"
           id="grade${clEn}" value="${clEn}">
           <label for="subject-math">${clKh}</label>
           <br></a></li>
                `
                tableClass.innerHTML += t;
            })
        })
    //class High School
    firebase
        .database()
        .ref(`SalaMOM/tools/class/វិទ្យាល័យ`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var clKh = data.val().clKh;
                var clEn = data.val().clEn;
                let t = `
           <li><a class="dropdown-item"><input type="checkbox"
           id="grade${clEn}" value="${clEn}">
           <label for="subject-math">${clKh}</label>
           <br></a></li>
                `
                tableClass.innerHTML += t;
            })
        })
})

//Set Grade and Subject together

const gradeInputs = document.querySelectorAll('#selection input[type="checkbox"][id^="grade"]');
const subjectInputs = document.querySelectorAll('#selection input[type="checkbox"][id^="subject"]');
const btn = document.getElementById('add');

const input1 = document.getElementById('selectedSubjects3');
const input2 = document.getElementById('getInput');

function addSelected() {
    let selectedValues = [];

    const grades = document.querySelectorAll('input[id^="grade"]');
    for (const grade of grades) {
        if (grade.checked) {
            selectedValues.push(grade.value);
        }
    }

    const subjects = document.querySelectorAll('input[id^="subject"]');
    for (const subject of subjects) {
        if (subject.checked) {
            selectedValues.push(subject.value);
        }
    }

    if (selectedValues.length === 0) {
        Swal.fire({
            text: "សូមជ្រើសរើសយ៉ាងហោចឲ្យបាន១មុខ!",
            icon: "error",
            showConfirmButton: false,
            timer: 2500,
        });

        return;
    }

    const combinedValue = selectedValues.join('-');

    // Append the newly selected value to the existing input, if any
    input1.value = input1.value ? `${input1.value} ${combinedValue}` : combinedValue;

    // Clear the checkbox selections
    grades.forEach(checkbox => checkbox.checked = false);
    subjects.forEach(checkbox => checkbox.checked = false);

    // Update input2 with the latest value from input1
    // input2.value = input1.value;
}

btn.addEventListener('click', addSelected);

//Select username and img url
const dropdownContent = document.querySelector('.dropdown-content');
const selectedLabelInput = document.getElementById('user_teacher_id');
const imageUrlInput = document.getElementById('user_url');


dropdownContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const label = event.target.dataset.label;
        const imageUrl = event.target.dataset.image;
        selectedLabelInput.value = label;
        imageUrlInput.value = imageUrl;
        dropdownContent.classList.remove('show');
    }
});

var user_img = localStorage.getItem('user_url');
var img = $("#user_img");

img.attr("src", user_img);

$("#user_logout").click(function () {
    Swal.fire({
        text: "សូមមេត្តារង់ចាំបន្តិច!",
        icon: "warning",
        showConfirmButton: false,
        timer: 3500,
        didOpen: () => {
            Swal.showLoading();
        },
    });
    localStorage.removeItem('setName');
    localStorage.removeItem('setSubs');
    localStorage.removeItem('setYear');
    localStorage.removeItem('input_month');
    localStorage.removeItem('user_url');

    localStorage.removeItem('set_to_get_subs');
    localStorage.removeItem('user_role');
    setTimeout(() => {
        window.location.replace('../../index.html')
    }, 3600);
})