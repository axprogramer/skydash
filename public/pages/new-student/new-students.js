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
//Get Level value
document.getElementById('sle_level').addEventListener('change', () => {
    let v = document.getElementById('sle_level').value;
    localStorage.setItem('sle_level', v);
    window.location.reload();
})
var data_level = localStorage.getItem('sle_level');
if (data_level) {
    document.getElementById('sle_level').value = data_level;
}
//Get Grade value
document.getElementById('sle_grade').addEventListener('change', () => {
    let v = document.getElementById('sle_grade').value;
    localStorage.setItem('sle_grade', v);
    window.location.reload();
})
var data_grade = localStorage.getItem('sle_grade');
if (data_grade) {
    document.getElementById('show_grade').innerText = data_grade;
}
//Get Year value
document.getElementById('sle_year').addEventListener('change', () => {
    let v = document.getElementById('sle_year').value;
    localStorage.setItem('sle_year', v);
    window.location.reload();
})
var data_year = localStorage.getItem('sle_year');
if (data_year) {
    document.getElementById('show_year').innerText = data_year;
}
let grade = '';
if (data_grade == '01A') { grade = '1A' };
if (data_grade == '02A') { grade = '2A' };
if (data_grade == '03A') { grade = '3A' };
if (data_grade == '04A') { grade = '4A' };
if (data_grade == '05A') { grade = '5A' };
if (data_grade == '06A') { grade = '6A' };
if (data_grade == '07A') { grade = '7A' };
if (data_grade == '08A') { grade = '8A' };
if (data_grade == '09A') { grade = '9A' };
if (data_grade == '10A') { grade = '10A' };
if (data_grade == '11A') { grade = '11A' };
if (data_grade == '12A') { grade = '12A' };
if (data_grade == '01B') { grade = '1B' };
if (data_grade == '02B') { grade = '2B' };
if (data_grade == '03B') { grade = '3B' };
if (data_grade == '04B') { grade = '4B' };
if (data_grade == '05B') { grade = '5B' };
if (data_grade == '06B') { grade = '6B' };
if (data_grade == '07B') { grade = '7B' };
if (data_grade == '08B') { grade = '8B' };
if (data_grade == '09B') { grade = '9B' };
if (data_grade == '10B') { grade = '10B' };
if (data_grade == '11B') { grade = '11B' };
if (data_grade == '12B') { grade = '12B' };
if (grade) {
    document.getElementById('fill6').value = grade;
}

//Show grade and year
var sle_grade = document.getElementById('sle_grade');
var sle_year = document.getElementById('sle_year');
$(document).ready(function () {
    //Get Class
    firebase
        .database()
        .ref(`/SalaMOM/tools/class/` + `${data_level}`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var clEn = d.val().clEn;
                var clKh = d.val().clKh;
                let t = `
                <option value="${clEn}">${clKh}</option>
                `;
                sle_grade.innerHTML += t;
            })
        })
    //Get Year
    firebase
        .database()
        .ref(`/SalaMOM/tools/years/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var yearEn = d.val().yearEn;
                var yearKh = d.val().yearKh;
                let t = `
                <option value="${yearEn}">${yearEn}</option>
                `;
                sle_year.innerHTML += t;
            })
        })

})

//Save student Information
$(document).ready(function () {
    document.getElementById('addNew').addEventListener('click', () => {
        document.getElementById('fill1').value = '';
        document.getElementById('fill2').value = '';
        document.getElementById('fill3').value = '';
        document.getElementById('fill4').value = '';
        document.getElementById('fill5').value = '';
        document.getElementById('fill7').value = '';
        document.getElementById('fill8').value = '';
        document.getElementById('fill9').value = '';
        document.getElementById('fill10').value = '';
        document.getElementById('fill11').value = '';
        document.getElementById('fill12').value = '';
        document.getElementById('fill13').value = '';
        document.getElementById('fill14').value = '';
        document.getElementById('fill15').value = '';
        document.getElementById('fill16').value = '';
        document.getElementById('fill17').value = '';
        document.getElementById('fill18').value = '';
        document.getElementById('fill19').value = '';
        document.getElementById('fill20').value = '';
        document.getElementById('fill21').value = '';
        document.getElementById('fill22').value = '';
        document.getElementById('fill23').value = '';
        document.getElementById('fill24').value = '';
        document.getElementById('fill25').value = '';
        document.getElementById('fill26').value = '';
        document.getElementById('fill27').value = '';
        document.getElementById('fill28').value = '';
        document.getElementById('fill29').value = '';
        document.getElementById('fill30').value = '';

        document.getElementById('showURL').value = '';
        document.getElementById('showURL2').value = '';
        document.getElementById('uploadedImage').src = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
        document.getElementById('uploadedImage2').src = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';

        document.getElementById('btnAdd').style.display = 'block';
        document.getElementById('btnUpdate').style.display = 'none';
        document.getElementById('btnDelete').style.display = 'none';
    })
    document.getElementById('btnAdd').addEventListener('click', () => {
        var id = document.getElementById('fill2');
        var user_id = document.getElementById('fill1');
        var fullname = document.getElementById('fill2');
        var first_name = document.getElementById('fill3');
        var last_name = document.getElementById('fill4');
        var name_latin = document.getElementById('fill5');
        var user_grade = document.getElementById('fill6');
        var gender = document.getElementById('fill7');
        var date_of_birth = document.getElementById('fill8');
        var user_age = document.getElementById('fill9');
        var village = document.getElementById('fill10');
        var district = document.getElementById('fill11');
        var commune = document.getElementById('fill12');
        var province = document.getElementById('fill13');
        var place_of_birth = document.getElementById('fill14');
        var current_village = document.getElementById('fill15');
        var current_district = document.getElementById('fill16');
        var current_commune = document.getElementById('fill17');
        var current_province = document.getElementById('fill18');
        var current_address = document.getElementById('fill19');
        var father_name = document.getElementById('fill20');
        var father_occupation = document.getElementById('fill21');
        var mother_name = document.getElementById('fill22');
        var mother_occupation = document.getElementById('fill23');
        var parents_phone_number = document.getElementById('fill24');
        var user_facebook = document.getElementById('fill25');
        var user_guardian = document.getElementById('fill26');
        var guardian_occupation = document.getElementById('fill27');
        var guardian_phone_number = document.getElementById('fill28');
        var other_information = document.getElementById('fill29');
        var user_relationship = document.getElementById('fill30');
        var en_level = document.getElementById('fill31');

        var user_picture_url = document.getElementById('showURL');
        var user_identity_url = document.getElementById('showURL2');
        Swal.fire({
            text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout(function () {

            document.getElementById('fill1').value = '';
            document.getElementById('fill2').value = '';
            document.getElementById('fill3').value = '';
            document.getElementById('fill4').value = '';
            document.getElementById('fill5').value = '';
            document.getElementById('fill7').value = '';
            document.getElementById('fill8').value = '';
            document.getElementById('fill9').value = '';
            document.getElementById('fill10').value = '';
            document.getElementById('fill11').value = '';
            document.getElementById('fill12').value = '';
            document.getElementById('fill13').value = '';
            document.getElementById('fill14').value = '';
            document.getElementById('fill15').value = '';
            document.getElementById('fill16').value = '';
            document.getElementById('fill17').value = '';
            document.getElementById('fill18').value = '';
            document.getElementById('fill19').value = '';
            document.getElementById('fill20').value = '';
            document.getElementById('fill21').value = '';
            document.getElementById('fill22').value = '';
            document.getElementById('fill23').value = '';
            document.getElementById('fill24').value = '';
            document.getElementById('fill25').value = '';
            document.getElementById('fill26').value = '';
            document.getElementById('fill27').value = '';
            document.getElementById('fill28').value = '';
            document.getElementById('fill29').value = '';
            document.getElementById('fill30').value = '';
            document.getElementById('fill31').value = '';


            document.getElementById('showURL').value = '';
            document.getElementById('showURL2').value = '';
            document.getElementById('uploadedImage').src = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
            document.getElementById('uploadedImage2').src = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
        }, 1500)
        firebase
            .database()
            .ref(`/SalaMOM/classes/` + `${data_year}/` + `${grade}/` + fullname.value)
            .set({
                id: id.value,
                // user_id: user_id.value,
                fullname: fullname.value,
                // first_name: first_name.value,
                // last_name: last_name.value,
                name_latin: name_latin.value,
                gender: gender.value,
                user_grade: user_grade.value,
                en_level: en_level.value,
                // date_of_birth: date_of_birth.value,
                // user_age: user_age.value,
                // village: village.value,
                // district: district.value,
                // commune: commune.value,
                // province: province.value,
                // place_of_birth: place_of_birth.value,
                // current_village: current_village.value,
                // current_district: current_district.value,
                // current_commune: current_commune.value,
                // current_province: current_province.value,
                // current_address: current_address.value,
                // father_name: father_name.value,
                // father_occupation: father_occupation.value,
                // mother_name: mother_name.value,
                // mother_occupation: mother_occupation.value,
                // parents_phone_number: parents_phone_number.value,
                // user_facebook: user_facebook.value,
                // user_guardian: user_guardian.value,
                // guardian_occupation: guardian_occupation.value,
                // guardian_phone_number: guardian_phone_number.value,
                // other_information: other_information.value,
                // user_relationship: user_relationship.value,
                user_picture_url: user_picture_url.value,
                user_identity_url: user_identity_url.value,
            })
    })


})

//Show data in table
$(document).ready(function () {
    let table = document.getElementById('showUserdata');
    let N0 = '';
    firebase
        .database()
        .ref(`/SalaMOM/classes/` + `${data_year}/` + `${grade}/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().id;
                // var user_id = d.val().user_id;
                var fullname = d.val().fullname;
                // var first_name = d.val().first_name;
                // var last_name = d.val().last_name;
                var name_latin = d.val().name_latin;
                var gender = d.val().gender;
                var en_gender = d.val().en_gender;
                var user_grade = d.val().user_grade;
                var en_level = d.val().en_level;
                // var date_of_birth = d.val().date_of_birth;
                // var user_age = d.val().user_age;
                // var village = d.val().village;
                // var district = d.val().district;
                // var commune = d.val().commune;
                // var province = d.val().province;
                // var place_of_birth = d.val().place_of_birth;
                // var current_village = d.val().current_village;
                // var current_district = d.val().current_district;
                // var current_commune = d.val().current_commune;
                // var current_province = d.val().current_province;
                // var current_address = d.val().current_address;
                // var father_name = d.val().father_name;
                // var father_occupation = d.val().father_occupation;
                // var mother_name = d.val().mother_name;
                // var mother_occupation = d.val().mother_occupation;
                // var parents_phone_number = d.val().parents_phone_number;
                // var user_facebook = d.val().user_facebook;
                // var user_guardian = d.val().user_guardian;
                // var guardian_occupation = d.val().guardian_occupation;
                // var guardian_phone_number = d.val().guardian_phone_number;
                // var other_information = d.val().other_information;
                // var user_relationship = d.val().user_relationship;
                var user_picture_url = d.val().user_picture_url;
                var user_identity_url = d.val().user_identity_url;
                if (!name_latin) {
                    name_latin = ''
                }
                if (!en_level) {
                    en_level = ''
                }
                if (!user_picture_url) {
                    user_picture_url = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
                }
                if (!user_identity_url) {
                    user_identity_url = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
                }

                N0++;
                let nameWithoutSpace = id.replace(/\s/g, "");
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark text-center'>${user_grade}</td>
                <td class='border-dark text-center mt-0 mb-0' style="width:100px;height:80px"><img style="width:80%;height:100%" src="${user_picture_url}"></td>
                <td class='border-dark'><button class="editBtn" id="${nameWithoutSpace}st" data-bs-toggle="modal" data-bs-target="#add_student"
                data-fullname='${fullname}'
                data-name_latin='${name_latin}'
                data-gender='${gender}'
                data-user_grade='${user_grade}'
                data-en_level='${en_level}'
                data-user_picture_url='${user_picture_url}'
                data-user_identity_url='${user_identity_url}'
                data-id='${id}'                
                >${id}</button></td>
                <td class='border-dark text-center'>${name_latin}</td>
                <td class='border-dark text-center'>${gender}</td>
                <td class='border-dark text-center'>${en_gender}</td>
                <td class='border-dark text-center'>${en_level}</td>
                `;
                table.innerHTML += t;

                //Fill data in the form
                setTimeout(function () {
                    let data = document.getElementById(`${nameWithoutSpace}st`);
                    document.getElementById(`${nameWithoutSpace}st`).addEventListener('click', () => {
                        let id = data.dataset.id;
                        let fullname = data.dataset.fullname;
                        let name_latin = data.dataset.name_latin;
                        let gender = data.dataset.gender;
                        let user_grade = data.dataset.user_grade;
                        let en_level = data.dataset.en_level;
                        let user_picture_url = data.dataset.user_picture_url;
                        let user_identity_url = data.dataset.user_identity_url;

                        document.getElementById('fill2').value = fullname;
                        document.getElementById('fill5').value = name_latin;
                        document.getElementById('fill6').value = user_grade;
                        document.getElementById('fill7').value = gender;
                        document.getElementById('fill31').value = en_level;

                        document.getElementById('showURL').value = user_picture_url;
                        document.getElementById('showURL2').value = user_identity_url;
                        document.getElementById('uploadedImage').src = user_picture_url;
                        document.getElementById('uploadedImage2').src = user_identity_url;

                        document.getElementById('btnAdd').style.display = 'none';
                        document.getElementById('btnUpdate').style.display = 'block';
                        document.getElementById('btnDelete').style.display = 'block';

                    })
                    //Update the data
                    document.getElementById('btnUpdate').addEventListener('click', () => {
                        var fullname = document.getElementById('fill2');
                        var name_latin = document.getElementById('fill5');
                        var user_grade = document.getElementById('fill6');
                        var gender = document.getElementById('fill7');
                        var en_level = document.getElementById('fill31');

                        var user_picture_url = document.getElementById('showURL');
                        var user_identity_url = document.getElementById('showURL2');
                        Swal.fire({
                            text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        setTimeout(function () {
                            window.location.reload();
                        }, 1500)

                        firebase
                            .database()
                            .ref(`/SalaMOM/classes/` + `${data_year}/` + `${grade}/` + fullname.value)
                            .update({
                                id: fullname.value,
                                // user_id: user_id.value,
                                fullname: fullname.value,
                                // first_name: first_name.value,
                                // last_name: last_name.value,
                                name_latin: name_latin.value,
                                gender: gender.value,
                                user_grade: user_grade.value,
                                en_level: en_level.value,
                                // date_of_birth: date_of_birth.value,
                                // user_age: user_age.value,
                                // village: village.value,
                                // district: district.value,
                                // commune: commune.value,
                                // province: province.value,
                                // place_of_birth: place_of_birth.value,
                                // current_village: current_village.value,
                                // current_district: current_district.value,
                                // current_commune: current_commune.value,
                                // current_province: current_province.value,
                                // current_address: current_address.value,
                                // father_name: father_name.value,
                                // father_occupation: father_occupation.value,
                                // mother_name: mother_name.value,
                                // mother_occupation: mother_occupation.value,
                                // parents_phone_number: parents_phone_number.value,
                                // user_facebook: user_facebook.value,
                                // user_guardian: user_guardian.value,
                                // guardian_occupation: guardian_occupation.value,
                                // guardian_phone_number: guardian_phone_number.value,
                                // other_information: other_information.value,
                                // user_relationship: user_relationship.value,
                                user_picture_url: user_picture_url.value,
                                user_identity_url: user_identity_url.value,
                            })
                    })
                    //Remove data
                    document.getElementById('btnDelete').addEventListener('click', () => {
                        var fullname = document.getElementById('fill2');
                        Swal.fire({
                            text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        setTimeout(function () {
                            window.location.reload();
                        }, 1500)

                        firebase
                            .database()
                            .ref(`/SalaMOM/classes/` + `${data_year}/` + `${grade}/` + fullname.value)
                            .remove()

                    })

                }, 1000)
            })
        })
})



//Import Data

var ExcelToJSON = function () {

    this.parseExcel = function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });
            workbook.SheetNames.forEach(function (sheetName) {
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                var json_object = JSON.stringify(XL_row_object);
                productList = JSON.parse(json_object);
                var studentN0 = 1;
                for (i = 0; i < productList.length; i++) {
                    var id = productList[i].fullname;
                    // var user_id = productList[i].user_id;
                    var fullname = productList[i].fullname;
                    // var first_name = productList[i].first_name;
                    // var last_name = productList[i].last_name;
                    var name_latin = productList[i].name_latin;
                    // var user_grade = productList[i].user_grade;
                    var gender = productList[i].gender;
                    var en_level = productList[i].en_level;
                    // var date_of_birth = productList[i].date_of_birth;
                    // var user_age = productList[i].user_age;
                    // var village = productList[i].village;
                    // var district = productList[i].district;
                    // var commune = productList[i].commune;
                    // var province = productList[i].province;
                    // var place_of_birth = productList[i].place_of_birth;
                    // var current_village = productList[i].current_village;
                    // var current_district = productList[i].current_district;
                    // var current_commune = productList[i].current_commune;
                    // var current_province = productList[i].current_province;
                    // var current_address = productList[i].current_address;
                    // var father_name = productList[i].father_name;
                    // var father_occupation = productList[i].father_occupation;
                    // var mother_name = productList[i].mother_name;
                    // var mother_occupation = productList[i].mother_occupation;
                    // var parents_phone_number = productList[i].parents_phone_number;
                    // var user_facebook = productList[i].user_facebook;
                    // var user_guardian = productList[i].user_guardian;
                    // var guardian_occupation = productList[i].guardian_occupation;
                    // var guardian_phone_number = productList[i].guardian_phone_number;
                    // var other_information = productList[i].other_information;
                    // var user_relationship = productList[i].user_relationship;
                    if (!fullname) {
                        fullname = ''
                    }
                    if (!name_latin) {
                        name_latin = ''
                    }
                    if (!gender) {
                        gender = ''
                    }
                    if (!en_level) {
                        en_level = ''
                    }

                    var en_gender = ''
                    if (gender === 'ប') {
                        en_gender = 'M'
                    }
                    if (gender === 'ស') {
                        en_gender = 'F'
                    }
                    if (!en_gender) {
                        en_gender = ''
                    }

                    var tbody = document.getElementById('showTable');
                    let t = `
                    <td>${studentN0++}</td>
                    <td>${id}</td>
                    <td>${fullname}</td>
                    <td>${name_latin}</td>
                    <td>${data_grade}</td>
                    <td>${gender}</td>
                    <td>${en_gender}</td>
                    <td>${en_level}</td>
                    
                    `;
                    tbody.innerHTML += t;
                }
                document.getElementById('btn_upload').addEventListener('click', function () {
                    Swal.fire({
                        text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    for (i = 0; i < productList.length; i++) {
                        var id = productList[i].fullname;
                        // var user_id = productList[i].user_id;
                        var fullname = productList[i].fullname;
                        // var first_name = productList[i].first_name;
                        // var last_name = productList[i].last_name;
                        var name_latin = productList[i].name_latin;
                        // var user_grade = productList[i].user_grade;
                        var gender = productList[i].gender;
                        var en_level = productList[i].en_level;
                        // var date_of_birth = productList[i].date_of_birth;
                        // var user_age = productList[i].user_age;
                        // var village = productList[i].village;
                        // var district = productList[i].district;
                        // var commune = productList[i].commune;
                        // var province = productList[i].province;
                        // var place_of_birth = productList[i].place_of_birth;
                        // var current_village = productList[i].current_village;
                        // var current_district = productList[i].current_district;
                        // var current_commune = productList[i].current_commune;
                        // var current_province = productList[i].current_province;
                        // var current_address = productList[i].current_address;
                        // var father_name = productList[i].father_name;
                        // var father_occupation = productList[i].father_occupation;
                        // var mother_name = productList[i].mother_name;
                        // var mother_occupation = productList[i].mother_occupation;
                        // var parents_phone_number = productList[i].parents_phone_number;
                        // var user_facebook = productList[i].user_facebook;
                        // var user_guardian = productList[i].user_guardian;
                        // var guardian_occupation = productList[i].guardian_occupation;
                        // var guardian_phone_number = productList[i].guardian_phone_number;
                        // var other_information = productList[i].other_information;
                        // var user_relationship = productList[i].user_relationship;
                        if (!fullname) {
                            fullname = ''
                        }
                        if (!name_latin) {
                            name_latin = ''
                        }
                        if (!gender) {
                            gender = ''
                        }
                        if (!en_level) {
                            en_level = ''
                        }
                        var en_gender = ''
                        if (gender === 'ប') {
                            en_gender = 'M'
                        }
                        if (gender === 'ស') {
                            en_gender = 'F'
                        }
                        if (!en_gender) {
                            en_gender = ''
                        }
                            
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);

                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${data_year}/` + `${grade}/` + id)
                            .update({
                                id: id,
                                // user_id: user_id,
                                fullname: fullname,
                                // first_name: first_name,
                                // last_name: last_name,
                                name_latin: name_latin,
                                gender: gender,
                                user_grade: data_grade,
                                en_level: en_level,
                                en_gender: en_gender,
                                // date_of_birth: date_of_birth,
                                // user_age: user_age,
                                // village: village,
                                // district: district,
                                // commune: commune,
                                // province: province,
                                // place_of_birth: place_of_birth,
                                // current_village: current_village,
                                // current_district: current_district,
                                // current_commune: current_commune,
                                // current_province: current_province,
                                // current_address: current_address,
                                // father_name: father_name,
                                // father_occupation: father_occupation,
                                // mother_name: mother_name,
                                // mother_occupation: mother_occupation,
                                // parents_phone_number: parents_phone_number,
                                // user_facebook: user_facebook,
                                // user_guardian: user_guardian,
                                // guardian_occupation: guardian_occupation,
                                // guardian_phone_number: guardian_phone_number,
                                // other_information: other_information,
                                // user_relationship: user_relationship,
                            })
                    }

                })

            })
        };
        reader.onerror = function (ex) {
            console.log(ex);
        };
        reader.readAsBinaryString(file);
    };
};

function handleFileSelect(evt) {
    var files = evt.target.files;
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
}
document.getElementById('upload').addEventListener('change', handleFileSelect, false);


const searchInput = document.getElementById('stdsearchInput');
const tbody1 = document.getElementById('mystdTable');
const tbody = tbody1.querySelector('tbody');
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    const matchingRows = Array.from(tbody.querySelectorAll("tr")).filter((row) => {
        return Array.from(row.querySelectorAll("td")).some((cell) => {
            return cell.textContent.toLowerCase().includes(searchTerm);
        });
    });

    for (const row of tbody.querySelectorAll("tr")) {
        row.classList.add("hidden"); // Hide all rows initially
    }

    for (const row of matchingRows) {
        row.classList.remove("hidden"); // Show only matching rows
    }
});

//Add Profile Picture
var user_img = localStorage.getItem('user_url');
var img = $("#user_img");

img.attr("src", user_img);

//User Logout
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

