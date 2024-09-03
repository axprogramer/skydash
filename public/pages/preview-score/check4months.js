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

var dbLevel = localStorage.getItem('preview_level');
var dbGrade = localStorage.getItem('preview_grade');
var dbMonth = localStorage.getItem('preview_month');
var dbyear = localStorage.getItem('preview_year');
var dbdivid = localStorage.getItem('preview_divid');

// var all_grade = dbGrade.replace(/^0+/, '');
var table = document.getElementById('show_data');
var show_hearder = document.getElementById('show_hearder');
var table_print = document.getElementById('show_data_print');
var show_hearder_print = document.getElementById('show_hearder_print');
var table_result = document.getElementById('show_data_result');
var show_hearder_result = document.getElementById('show_hearder_result');

var all_grade = [];
let student_rank = [];
let new_year_kh = '';
let N0 = '';
let grade_en = '';
let grade_kh = '';
let new_grade = '';
//Grade in EN
if (dbGrade == '01A') { grade_en = '1A' };
if (dbGrade == '02A') { grade_en = '2A' };
if (dbGrade == '03A') { grade_en = '3A' };
if (dbGrade == '04A') { grade_en = '4A' };
if (dbGrade == '05A') { grade_en = '5A' };
if (dbGrade == '06A') { grade_en = '6A' };
if (dbGrade == '07A') { grade_en = '7A' };
if (dbGrade == '08A') { grade_en = '8A' };
if (dbGrade == '09A') { grade_en = '9A' };
if (dbGrade == '10A') { grade_en = '10A' };
if (dbGrade == '11A') { grade_en = '11A' };
if (dbGrade == '12A') { grade_en = '12A' };

if (dbGrade == '01B') { grade_en = '1B' };
if (dbGrade == '02B') { grade_en = '2B' };
if (dbGrade == '03B') { grade_en = '3B' };
if (dbGrade == '04B') { grade_en = '4B' };
if (dbGrade == '05B') { grade_en = '5B' };
if (dbGrade == '06B') { grade_en = '6B' };
if (dbGrade == '07B') { grade_en = '7B' };
if (dbGrade == '08B') { grade_en = '8B' };
if (dbGrade == '09B') { grade_en = '9B' };
if (dbGrade == '10B') { grade_en = '10B' };
if (dbGrade == '11B') { grade_en = '11B' };
if (dbGrade == '12B') { grade_en = '12B' };

if (dbGrade == '01C') { grade_en = '1C' };
if (dbGrade == '02C') { grade_en = '2C' };
if (dbGrade == '03C') { grade_en = '3C' };
if (dbGrade == '04C') { grade_en = '4C' };
if (dbGrade == '05C') { grade_en = '5C' };
if (dbGrade == '06C') { grade_en = '6C' };
if (dbGrade == '07C') { grade_en = '7C' };
if (dbGrade == '08C') { grade_en = '8C' };
if (dbGrade == '09C') { grade_en = '9C' };
if (dbGrade == '10C') { grade_en = '10C' };
if (dbGrade == '11C') { grade_en = '11C' };
if (dbGrade == '12C') { grade_en = '12C' };

if (dbGrade == '01A') { new_grade = '១ (ក)' };
if (dbGrade == '02A') { new_grade = '២ (ក)' };
if (dbGrade == '03A') { new_grade = '៣ (ក)' };
if (dbGrade == '04A') { new_grade = '៤ (ក)' };
if (dbGrade == '05A') { new_grade = '៥ (ក)' };
if (dbGrade == '06A') { new_grade = '៦ (ក)' };
if (dbGrade == '07A') { new_grade = '៧ (ក)' };
if (dbGrade == '08A') { new_grade = '៨ (ក)' };
if (dbGrade == '09A') { new_grade = '៩ (ក)' };
if (dbGrade == '10A') { new_grade = '១០ (ក)' };
if (dbGrade == '11A') { new_grade = '១១ (ក)' };
if (dbGrade == '12A') { new_grade = '១២ (ក)' };

if (dbGrade == '01B') { new_grade = '១ (ខ)' };
if (dbGrade == '02B') { new_grade = '២ (ខ)' };
if (dbGrade == '03B') { new_grade = '៣ (ខ)' };
if (dbGrade == '04B') { new_grade = '៤ (ខ)' };
if (dbGrade == '05B') { new_grade = '៥ (ខ)' };
if (dbGrade == '06B') { new_grade = '៦ (ខ)' };
if (dbGrade == '07B') { new_grade = '៧ (ខ)' };
if (dbGrade == '08B') { new_grade = '៨ (ខ)' };
if (dbGrade == '09B') { new_grade = '៩ (ខ)' };
if (dbGrade == '10B') { new_grade = '១០ (ខ)' };
if (dbGrade == '11B') { new_grade = '១១ (ខ)' };
if (dbGrade == '12B') { new_grade = '១២ (ខ)' };

if (dbGrade == '01C') { new_grade = '១ (គ)' };
if (dbGrade == '02C') { new_grade = '២ (គ)' };
if (dbGrade == '03C') { new_grade = '៣ (គ)' };
if (dbGrade == '04C') { new_grade = '៤ (គ)' };
if (dbGrade == '05C') { new_grade = '៥ (គ)' };
if (dbGrade == '06C') { new_grade = '៦ (គ)' };
if (dbGrade == '07C') { new_grade = '៧ (គ)' };
if (dbGrade == '08C') { new_grade = '៨ (គ)' };
if (dbGrade == '09C') { new_grade = '៩ (គ)' };
if (dbGrade == '10C') { new_grade = '១០ (គ)' };
if (dbGrade == '11C') { new_grade = '១១ (គ)' };
if (dbGrade == '12C') { new_grade = '១២ (គ)' };
//Grade in Kh
if (grade_en == '1A') { grade_kh = '១ក' };
if (grade_en == '2A') { grade_kh = '២ក' };
if (grade_en == '3A') { grade_kh = '៣ក' };
if (grade_en == '4A') { grade_kh = '៤ក' };
if (grade_en == '5A') { grade_kh = '៥ក' };
if (grade_en == '6A') { grade_kh = '៦ក' };
if (grade_en == '7A') { grade_kh = '៧ក' };
if (grade_en == '8A') { grade_kh = '៨ក' };
if (grade_en == '9A') { grade_kh = '៩ក' };
if (grade_en == '10A') { grade_kh = '១០ក' };
if (grade_en == '11A') { grade_kh = '១១ក' };
if (grade_en == '12A') { grade_kh = '១២ក' };

if (grade_en == '1B') { grade_kh = '១ខ' };
if (grade_en == '2B') { grade_kh = '២ខ' };
if (grade_en == '3B') { grade_kh = '៣ខ' };
if (grade_en == '4B') { grade_kh = '៤ខ' };
if (grade_en == '5B') { grade_kh = '៥ខ' };
if (grade_en == '6B') { grade_kh = '៦ខ' };
if (grade_en == '7B') { grade_kh = '៧ខ' };
if (grade_en == '8B') { grade_kh = '៨ខ' };
if (grade_en == '9B') { grade_kh = '៩ខ' };
if (grade_en == '10B') { grade_kh = '១០ខ' };
if (grade_en == '11B') { grade_kh = '១១ខ' };
if (grade_en == '12B') { grade_kh = '១២ខ' };

if (grade_en == '1C') { grade_kh = '១គ' };
if (grade_en == '2C') { grade_kh = '២គ' };
if (grade_en == '3C') { grade_kh = '៣គ' };
if (grade_en == '4C') { grade_kh = '៤គ' };
if (grade_en == '5C') { grade_kh = '៥គ' };
if (grade_en == '6C') { grade_kh = '៦គ' };
if (grade_en == '7C') { grade_kh = '៧គ' };
if (grade_en == '8C') { grade_kh = '៨គ' };
if (grade_en == '9C') { grade_kh = '៩គ' };
if (grade_en == '10C') { grade_kh = '១០គ' };
if (grade_en == '11C') { grade_kh = '១១គ' };
if (grade_en == '12C') { grade_kh = '១២គ' };

let get_month = '';
if (dbMonth == 'October') { get_month = 'តុលា' };
if (dbMonth == 'November') { get_month = 'វិច្ឆិកា' };
if (dbMonth == 'December') { get_month = 'ធ្នូ' };
if (dbMonth == 'January') { get_month = 'មករា' };
if (dbMonth == 'February') { get_month = 'កុម្ភៈ' };
if (dbMonth == 'March') { get_month = 'មីនា' };
if (dbMonth == 'April-May') { get_month = 'មេសា-ឧសភា' };
if (dbMonth == 'June') { get_month = 'មិថុនា' };
if (dbMonth == 'July') { get_month = 'កក្កដា' };
if (dbMonth == '1st Semester') { get_month = 'ឆមាសទី១' };
if (dbMonth == '2nd Semester') { get_month = 'ឆមាសទី២' };

firebase
    .database()
    .ref(`/SalaMOM/tools/class/` + dbLevel)
    .once('value', function (data) {
        data.forEach(function (d) {
            var id = d.val().id;
            var clEn = d.val().clEn;
            all_grade.push(clEn);
        })
    })
let primary_g_p1 = [
    '01A',
    '02A',
    '03A',
    '01B',
    '02B',
    '03B',
    '01C',
    '02C',
    '03C',
]
let primary_g_p2 = [
    '04A',
    '05A',
    '06A',
    '04B',
    '05B',
    '06B',
    '04C',
    '05C',
    '06C',
]

let primary_g_p3 = [
    '07A',
    '08A',
    '09A',
    '07B',
    '08B',
    '09B',
    '07C',
    '08C',
    '09C',
]
let primary_g_p4 = [
    '10A',
    '11A',
    '12A',
    '10B',
    '11B',
    '12B',
    '10C',
    '11C',
    '12C',
]

var n0 = ''
var n02 = ''

// var table = document.getElementById('tablecheck4months1');
var table2 = document.getElementById('tablecheck4months2');
export function fourmonths1(data) {
    if (dbLevel === 'បឋមសិក្សា') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == 'fourmonths1') {
                if (primary_g_p1.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `
                        

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;
                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)

                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }

                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });

                }
                if (primary_g_p2.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;
                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)
                        if (!allaverage) {
                            allaverage= 0.00
                        }
                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }
                        console.log(allaverage);

                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });

                }
            }
            if (dbMonth == 'fourmonths2') {
                if (primary_g_p1.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;

                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }

                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)

                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mmarch;
                        var average2 = d.val().average_mapma;
                        var average3 = d.val().average_mjun;
                        var average4 = d.val().average_mjul;

                        n02++
                        let num2 = 4;

                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                            <th class="border-dark text-center">ល.រ</th>
                            <th class="border-dark text-center">ឈ្មោះ</th>
                            <th class="border-dark text-center">ភេទ</th>
                            <th class="border-dark text-center">មីនា</th>
                            <th class="border-dark text-center">មេសា-ឧសភា</th>
                            <th class="border-dark text-center">មិថុនា</th>
                            <th class="border-dark text-center">កក្កដា</th>
                            <th class="border-dark text-center">ពិន្ទុសរុប</th>
                            <th class="border-dark text-center">មធ្យមភាគ</th>
                            <th class="border-dark text-center">តួចែក</th>
                        
                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'

                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n02;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = `${noSp}s2`
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table2.appendChild(tableRow);
                        table.appendChild(tableRow)

                        var name = document.getElementById(`${noSp}s2`);
                        var nextCell = name.nextElementSibling;
                        var s1 = nextCell.nextElementSibling;
                        var s2 = s1.nextElementSibling;
                        var s3 = s2.nextElementSibling;
                        var s4 = s3.nextElementSibling;

                        if (s1.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num2 -= 1
                        }
                        var allaverage = total / num2;
                        allaverage = allaverage.toFixed(2)

                        cell9.textContent = allaverage;
                        cell10.textContent = num2;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s2: allaverage,
                                });

                        }
                        show_hearder.innerHTML = h;

                    });

                }
                if (primary_g_p2.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;

                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }

                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)

                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mmarch;
                        var average2 = d.val().average_mapma;
                        var average3 = d.val().average_mjun;
                        var average4 = d.val().average_mjul;

                        n02++
                        let num2 = 4;

                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                            <th class="border-dark text-center">ល.រ</th>
                            <th class="border-dark text-center">ឈ្មោះ</th>
                            <th class="border-dark text-center">ភេទ</th>
                            <th class="border-dark text-center">មីនា</th>
                            <th class="border-dark text-center">មេសា-ឧសភា</th>
                            <th class="border-dark text-center">មិថុនា</th>
                            <th class="border-dark text-center">កក្កដា</th>
                            <th class="border-dark text-center">ពិន្ទុសរុប</th>
                            <th class="border-dark text-center">មធ្យមភាគ</th>
                            <th class="border-dark text-center">តួចែក</th>
                        
                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'

                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n02;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = `${noSp}s2`
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table2.appendChild(tableRow);
                        table.appendChild(tableRow)

                        var name = document.getElementById(`${noSp}s2`);
                        var nextCell = name.nextElementSibling;
                        var s1 = nextCell.nextElementSibling;
                        var s2 = s1.nextElementSibling;
                        var s3 = s2.nextElementSibling;
                        var s4 = s3.nextElementSibling;

                        if (s1.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num2 -= 1
                        }
                        var allaverage = total / num2;
                        allaverage = allaverage.toFixed(2)

                        cell9.textContent = allaverage;
                        cell10.textContent = num2;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s2: allaverage,
                                });

                        }
                        show_hearder.innerHTML = h;

                    });

                }
            }
        }
    }
    if (dbLevel === 'អនុវិទ្យាល័យ') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == 'fourmonths1') {
                if (primary_g_p3.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;
                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)

                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }


                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });

                }
            }
            if (dbMonth == 'fourmonths2') {
                if (primary_g_p3.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;
                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)

                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }

                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mmarch;
                        var average2 = d.val().average_mapma;
                        var average3 = d.val().average_mjun;
                        var average4 = d.val().average_mjul;

                        n02++
                        let num2 = 4;

                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                            <th class="border-dark text-center">ល.រ</th>
                            <th class="border-dark text-center">ឈ្មោះ</th>
                            <th class="border-dark text-center">ភេទ</th>
                            <th class="border-dark text-center">មីនា</th>
                            <th class="border-dark text-center">មេសា-ឧសភា</th>
                            <th class="border-dark text-center">មិថុនា</th>
                            <th class="border-dark text-center">កក្កដា</th>
                            <th class="border-dark text-center">ពិន្ទុសរុប</th>
                            <th class="border-dark text-center">មធ្យមភាគ</th>
                            <th class="border-dark text-center">តួចែក</th>
                        
                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'

                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n02;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = `${noSp}s2`
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table2.appendChild(tableRow);
                        table.appendChild(tableRow)

                        var name = document.getElementById(`${noSp}s2`);
                        var nextCell = name.nextElementSibling;
                        var s1 = nextCell.nextElementSibling;
                        var s2 = s1.nextElementSibling;
                        var s3 = s2.nextElementSibling;
                        var s4 = s3.nextElementSibling;
                        var allaverage = total / num2;
                        allaverage = allaverage.toFixed(2)

                        if (s1.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num2 -= 1
                        }

                        cell9.textContent = allaverage;
                        cell10.textContent = num2;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s2: allaverage,
                                });

                        }
                        show_hearder.innerHTML = h;

                    });

                }
            }
        }
    }
    if (dbLevel === 'វិទ្យាល័យ') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == 'fourmonths1') {
                if (primary_g_p4.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;
                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)


                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }

                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });

                }
            }
            if (dbMonth == 'fourmonths2') {
                if (primary_g_p4.includes(dbGrade)) {
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mnov;
                        var average2 = d.val().average_mdec;
                        var average3 = d.val().average_mjan;
                        var average4 = d.val().average_mfeb;

                        n0++
                        var num = 4;
                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">ឈ្មោះ</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">វិច្ឆិកា</th>
                                        <th class="border-dark text-center">ធ្នូ</th>
                                        <th class="border-dark text-center">មករា</th>
                                        <th class="border-dark text-center">កុម្ភៈ</th>
                                        <th class="border-dark text-center">ពិន្ទុសរុប</th>
                                        <th class="border-dark text-center">មធ្យមភាគ</th>
                                        <th class="border-dark text-center">តួចែក</th>
                                        
        
                                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'
                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n0;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = noSp
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table.appendChild(tableRow);
                        table.appendChild(tableRow)
                        var name = document.getElementById(`${noSp}`);
                        const nextCell = name.nextElementSibling;
                        const s1 = nextCell.nextElementSibling;
                        const s2 = s1.nextElementSibling;
                        const s3 = s2.nextElementSibling;
                        const s4 = s3.nextElementSibling;
                        var allaverage = total / num;
                        allaverage = allaverage.toFixed(2)

                        if (s1.textContent == 0.00) {
                            num -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num -= 1
                        }


                        cell9.textContent = allaverage;
                        cell10.textContent = num;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s1: allaverage,
                                });

                        }

                        show_hearder.innerHTML = h;
                    });
                    data.forEach(d => {
                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var gender = d.val().gender;
                        var average1 = d.val().average_mmarch;
                        var average2 = d.val().average_mapma;
                        var average3 = d.val().average_mjun;
                        var average4 = d.val().average_mjul;

                        n02++
                        let num2 = 4;

                        var noSp = fullname.replace(/\s+/g, "")
                        if (!average1) {
                            average1 = '0.00'
                        }
                        if (!average2) {
                            average2 = '0.00'
                        }
                        if (!average3) {
                            average3 = '0.00'
                        }
                        if (!average4) {
                            average4 = '0.00'
                        }

                        var total =
                            parseFloat(average1) +
                            parseFloat(average2) +
                            parseFloat(average3) +
                            parseFloat(average4);
                        total = total.toFixed(2)


                        const tableRow = document.createElement("tr");

                        // Create table data elements
                        const cell1 = document.createElement("td");
                        const cell2 = document.createElement("td");
                        const cell3 = document.createElement("td");
                        const cell4 = document.createElement("td");
                        const cell5 = document.createElement("td");
                        const cell6 = document.createElement("td");
                        const cell7 = document.createElement("td");
                        const cell8 = document.createElement("td");
                        const cell9 = document.createElement("td");
                        const cell10 = document.createElement("td");
                        const cell11 = document.createElement("td");
                        const cell12 = document.createElement("td");

                        let h = `
                            <th class="border-dark text-center">ល.រ</th>
                            <th class="border-dark text-center">ឈ្មោះ</th>
                            <th class="border-dark text-center">ភេទ</th>
                            <th class="border-dark text-center">មីនា</th>
                            <th class="border-dark text-center">មេសា-ឧសភា</th>
                            <th class="border-dark text-center">មិថុនា</th>
                            <th class="border-dark text-center">កក្កដា</th>
                            <th class="border-dark text-center">ពិន្ទុសរុប</th>
                            <th class="border-dark text-center">មធ្យមភាគ</th>
                            <th class="border-dark text-center">តួចែក</th>
                        
                        `

                        // Set content for the cells (optional)
                        cell1.className = 'border-dark text-center'
                        cell2.className = 'border-dark text-start'
                        cell3.className = 'border-dark text-center'
                        cell4.className = 'border-dark text-center'
                        cell5.className = 'border-dark text-center'
                        cell6.className = 'border-dark text-center'
                        cell7.className = 'border-dark text-center'
                        cell8.className = 'border-dark text-center'
                        cell9.className = 'border-dark text-center'
                        cell10.className = 'border-dark text-center'
                        cell11.className = 'border-dark text-center'
                        cell12.className = 'border-dark text-center'

                        cell10.style.color = 'red'
                        cell10.style.fontWeight = 'bold'

                        cell1.textContent = n02;
                        cell2.textContent = fullname;
                        cell3.textContent = gender;
                        cell4.textContent = average1;
                        cell5.textContent = average2;
                        cell6.textContent = average3;
                        cell7.textContent = average4;
                        cell8.textContent = total;
                        cell2.id = `${noSp}s2`
                        // Append the cells to the row
                        tableRow.appendChild(cell1);
                        tableRow.appendChild(cell2);
                        tableRow.appendChild(cell3);
                        tableRow.appendChild(cell4);
                        tableRow.appendChild(cell5);
                        tableRow.appendChild(cell6);
                        tableRow.appendChild(cell7);
                        tableRow.appendChild(cell8);
                        tableRow.appendChild(cell9);
                        tableRow.appendChild(cell10);
                        // table2.appendChild(tableRow);
                        table.appendChild(tableRow)

                        var name = document.getElementById(`${noSp}s2`);
                        var nextCell = name.nextElementSibling;
                        var s1 = nextCell.nextElementSibling;
                        var s2 = s1.nextElementSibling;
                        var s3 = s2.nextElementSibling;
                        var s4 = s3.nextElementSibling;
                        var allaverage = total / num2;
                        allaverage = allaverage.toFixed(2)

                        if (s1.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s2.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s3.textContent == 0.00) {
                            num2 -= 1
                        }
                        if (s4.textContent == 0.00) {
                            num2 -= 1
                        }

                        cell9.textContent = allaverage;
                        cell10.textContent = num2;
                        if (id) {
                            firebase
                                .database()
                                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                                .update({
                                    month4s2: allaverage,
                                });

                        }
                        show_hearder.innerHTML = h;

                    });

                }
            }
        }
    }

}
export function fourmonths2(data) {
    data.forEach(d => {
        var id = d.val().id;
        var fullname = d.val().fullname;
        var gender = d.val().gender;
        var average1 = d.val().average_mmarch;
        var average2 = d.val().average_mapma;
        var average3 = d.val().average_mjun;
        var average4 = d.val().average_mjul;

        n02++
        let num2 = 4;

        var noSp = fullname.replace(/\s+/g, "")
        if (!average1) {
            average1 = '0.00'
        }
        if (!average2) {
            average2 = '0.00'
        }
        if (!average3) {
            average3 = '0.00'
        }
        if (!average4) {
            average4 = '0.00'
        }

        var total =
            parseFloat(average1) +
            parseFloat(average2) +
            parseFloat(average3) +
            parseFloat(average4);
        total = total.toFixed(2)


        const tableRow = document.createElement("tr");

        // Create table data elements
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");
        const cell5 = document.createElement("td");
        const cell6 = document.createElement("td");
        const cell7 = document.createElement("td");
        const cell8 = document.createElement("td");
        const cell9 = document.createElement("td");
        const cell10 = document.createElement("td");
        const cell11 = document.createElement("td");
        const cell12 = document.createElement("td");

        // Set content for the cells (optional)
        cell1.className = 'border-dark text-center'
        cell2.className = 'border-dark text-start'
        cell3.className = 'border-dark text-center'
        cell4.className = 'border-dark text-center'
        cell5.className = 'border-dark text-center'
        cell6.className = 'border-dark text-center'
        cell7.className = 'border-dark text-center'
        cell8.className = 'border-dark text-center'
        cell9.className = 'border-dark text-center'
        cell10.className = 'border-dark text-center'
        cell11.className = 'border-dark text-center'
        cell12.className = 'border-dark text-center'

        cell10.style.color = 'red'
        cell10.style.fontWeight = 'bold'

        cell1.textContent = n02;
        cell2.textContent = fullname;
        cell3.textContent = gender;
        cell4.textContent = average1;
        cell5.textContent = average2;
        cell6.textContent = average3;
        cell7.textContent = average4;
        cell8.textContent = total;
        cell2.id = `${noSp}s2`
        // Append the cells to the row
        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);
        tableRow.appendChild(cell6);
        tableRow.appendChild(cell7);
        tableRow.appendChild(cell8);
        tableRow.appendChild(cell9);
        tableRow.appendChild(cell10);
        table2.appendChild(tableRow);
        var name = document.getElementById(`${noSp}s2`);
        var nextCell = name.nextElementSibling;
        var s1 = nextCell.nextElementSibling;
        var s2 = s1.nextElementSibling;
        var s3 = s2.nextElementSibling;
        var s4 = s3.nextElementSibling;
        var allaverage = total / num2;
        allaverage = allaverage.toFixed(2)

        if (s1.textContent == 0.00) {
            num2 -= 1
        }
        if (s2.textContent == 0.00) {
            num2 -= 1
        }
        if (s3.textContent == 0.00) {
            num2 -= 1
        }
        if (s4.textContent == 0.00) {
            num2 -= 1
        }

        cell9.textContent = allaverage;
        cell10.textContent = num2;
        if (id) {
            firebase
                .database()
                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${dbGrade.replace(/^0+/, '')}/` + id)
                .update({
                    month4s2: allaverage,
                });

        }

    });

}
