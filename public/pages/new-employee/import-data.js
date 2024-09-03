//Month and Times for Activity
// document.getElementById('myGradeAct').addEventListener('change', function () {
//     var gradeact = document.getElementById('myGradeAct').value;
//     localStorage.setItem('importgrade', gradeact);
//     window.location.reload();

// })
// document.getElementById('myYearAct').addEventListener('change', function () {
//     var yeareact = document.getElementById('myYearAct').value;
//     localStorage.setItem('importyear', yeareact);
//     window.location.reload();

// })

// var dbgradeAct = localStorage.getItem('importgrade'); // grade activity
// var dbyearAct = localStorage.getItem('importyear'); // year activity
// document.getElementById('myGradeAct').value = dbgradeAct;
// document.getElementById('myYearAct').value = dbyearAct;
// //Save data to firebase
// document.getElementById("alertMagWait").style.display = "none";
// $(document).on('click', '.table tbody tr td .btn-success', function () {
//     var html = '';
//     html += "<tr> <td class = 'txtcode'> </td>"
//     html += "<td class = 'txtdesc'> </td>"
//     html += "<td class = 'txtprice'> </td>"
//     html += "<td class = 'txtqty' > </td>"
//     html += "<td class = 'code'> </td>"
//     html += "<td class = 'desc'> </td>"
//     html += "<td class = 'price'> </td>"
//     html += "<td class = 'qty' > </td>"
//     html += "<td> <button type = 'button' class = 'btn btn-success'> Add </button> <button class = 'btn btn-danger' type = 'button'> Remove </button> </td>"
//     html += "</tr>"
//     $(this).parent().parent().after(html)
// })
// $(document).on('click', '.table tbody tr td .btn-danger', function () {
//     $(this).parent().parent().remove()
// })
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
                    var id = productList[i].id;
                    var user_id = productList[i].user_id;
                    var position = productList[i].position;
                    var fullname = productList[i].fullname;
                    var name_latin = productList[i].name_latin;
                    var gender = productList[i].gender;
                    var date_of_birth = productList[i].date_of_birth;
                    var phone_number = productList[i].phone_number;
                    var identity_card_number = productList[i].identity_card_number;
                    var place_of_birth = productList[i].place_of_birth;
                    var full_address = productList[i].full_address;
                    var staff_card = productList[i].staff_card;
                    var start_working_date = productList[i].start_working_date;
                    var pedagogy_certificate = productList[i].pedagogy_certificate;
                    var degree_level = productList[i].degree_level;
                    var public_entity_name = productList[i].public_entity_name;
                    var general_kindergaten = productList[i].general_kindergaten;
                    var general_primary = productList[i].general_primary;
                    var general_secondary = productList[i].general_secondary;
                    var father_name = productList[i].father_name;
                    var father_occupation = productList[i].father_occupation;
                    var mother_name = productList[i].mother_name;
                    var mother_occupation = productList[i].mother_occupation;
                    var spouse_name = productList[i].spouse_name;
                    var spouse_occupation = productList[i].spouse_occupation;
                    var tbody = document.getElementById('showTable');

                    let t = `
                    <td>${studentN0++}</td>
                    <td>${id}</td>
                    <td>${user_id}</td>
                    <td>${position}</td>
                    <td>${fullname}</td>
                    <td>${name_latin}</td>
                    <td>${gender}</td>
                    <td>${date_of_birth}</td>
                    <td>${phone_number}</td>
                    <td>${identity_card_number}</td>
                    <td>${place_of_birth}</td>
                    <td>${full_address}</td>
                    <td>${staff_card}</td>
                    <td>${start_working_date}</td>
                    <td>${pedagogy_certificate}</td>
                    <td>${degree_level}</td>
                    <td>${public_entity_name}</td>
                    <td>${general_kindergaten}</td>
                    <td>${general_primary}</td>
                    <td>${general_secondary}</td>
                    <td>${father_name}</td>
                    <td>${father_occupation}</td>
                    <td>${mother_name}</td>
                    <td>${mother_occupation}</td>
                    <td>${spouse_name}</td>
                    <td>${spouse_occupation}</td>
                    `;
                    tbody.innerHTML += t;
                    // var trow = document.createElement('tr');
                    // var td0 = document.createElement('td');
                    // var td1 = document.createElement('td');
                    // var td2 = document.createElement('td');
                    // var td3 = document.createElement('td');
                    // var td4 = document.createElement('td');
                    // var td5 = document.createElement('td');
                    // var td6 = document.createElement('td');
                    // var td7 = document.createElement('td');
                    // var td8 = document.createElement('td');
                    // var td9 = document.createElement('td');
                    // var td10 = document.createElement('td');
                    // var td11 = document.createElement('td');
                    // var td12 = document.createElement('td');
                    // var td13 = document.createElement('td');
                    // var td14 = document.createElement('td');
                    // var td15 = document.createElement('td');
                    // var td16 = document.createElement('td');
                    // var td17 = document.createElement('td');
                    // var td18 = document.createElement('td');
                    // var td19 = document.createElement('td');
                    // var td20 = document.createElement('td');
                    // var td21 = document.createElement('td');
                    // var td22 = document.createElement('td');
                    // var td23 = document.createElement('td');
                    // var td24 = document.createElement('td');
                    // var td25 = document.createElement('td');
                    // var td26 = document.createElement('td');
                    // var td27 = document.createElement('td');
                    // var td28 = document.createElement('td');
                    // var td29 = document.createElement('td');
                    // var td30 = document.createElement('td');
                    // var td31 = document.createElement('td');
                    // var td32 = document.createElement('td');
                    // var td33 = document.createElement('td');
                    // td1.contentEditable = true;
                    // td2.contentEditable = true;
                    // td3.contentEditable = true;
                    // td4.contentEditable = true;
                    // td5.contentEditable = true;
                    // td0.innerHTML = studentN0++;
                    // td1.innerHTML = id;
                    // td2.innerHTML = position;
                    // td3.innerHTML = fullname;
                    // td4.innerHTML = name_latin;
                    // td5.innerHTML = gender;
                    // trow.appendChild(td0);
                    // trow.appendChild(td1);
                    // trow.appendChild(td2);
                    // trow.appendChild(td3);
                    // trow.appendChild(td4);
                    // trow.appendChild(td5);

                    // tbody.appendChild(trow);
                }
                document.getElementById('btnRows').addEventListener('click', function () {
                    Swal.fire({
                        text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    for (i = 0; i < productList.length; i++) {
                        var id = productList[i].id;
                        var position = productList[i].position;
                        var fullname = productList[i].fullname;
                        var name_latin = productList[i].name_latin;
                        var gender = productList[i].gender;
                        var date_of_birth = productList[i].date_of_birth;
                        var phone_number = productList[i].phone_number;
                        var identity_card_number = productList[i].identity_card_number;
                        var place_of_birth = productList[i].place_of_birth;
                        var full_address = productList[i].full_address;
                        var staff_card = productList[i].staff_card;
                        var start_working_date = productList[i].start_working_date;
                        var pedagogy_certificate = productList[i].pedagogy_certificate;
                        var degree_level = productList[i].degree_level;
                        var public_entity_name = productList[i].public_entity_name;
                        var general_kindergaten = productList[i].general_kindergaten;
                        var general_primary = productList[i].general_primary;
                        var general_secondary = productList[i].general_secondary;
                        var father_name = productList[i].father_name;
                        var father_occupation = productList[i].father_occupation;
                        var mother_name = productList[i].mother_name;
                        var mother_occupation = productList[i].mother_occupation;
                        var spouse_name = productList[i].spouse_name;
                        var spouse_occupation = productList[i].spouse_occupation;

                        setTimeout(function () {
                            window.location.reload();
                        }, 2000);
                        firebase.database().ref(`SalaMOM/staffs/`+ id).update(
                            {
                                id: id,
                                fullname: fullname,
                                user_id: id,
                                position: position,
                                name_latin: name_latin,
                                gender: gender,
                                date_of_birth: date_of_birth,
                                phone_number: phone_number,
                                identity_card_number: identity_card_number,
                                place_of_birth: place_of_birth,
                                full_address: full_address,
                                staff_card: staff_card,
                                start_working_date: start_working_date,
                                pedagogy_certificate: pedagogy_certificate,
                                degree_level: degree_level,
                                public_entity_name: public_entity_name,
                                general_kindergaten: general_kindergaten,
                                general_primary: general_primary,
                                general_secondary: general_secondary,
                                father_name: father_name,
                                father_occupation: father_occupation,
                                mother_name: mother_name,
                                mother_occupation: mother_occupation,
                                spouse_name: spouse_name,
                                spouse_occupation: spouse_occupation,

                            },
                        )
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