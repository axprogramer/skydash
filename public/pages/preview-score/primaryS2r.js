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
if (dbMonth == '2nd Semester') { get_month = 'ឆមាសទី១' };
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

export function primarys2r(datas) {
    if (dbLevel === 'បឋមសិក្សា') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == '2nd Semester Result') {
                if (primary_g_p1.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_m2semester;
                        var month4s2 = d.val().month4s2;
                        var rank = d.val().rank_m2semester;
                        if (!average) { average = 0.00 };
                        if (!month4s2) { month4s2 = 0.00 };

                        let total = parseFloat(average) + parseFloat(month4s2)
                        let get_average = total / 2
                        get_average = get_average.toFixed(2)
                        if (!get_average) { get_average = "00" }
                        let noSp = id.replace(/\s+/g, "");


                        student_rank.push({
                            id,
                            user_grade,
                            average,
                            month4s2,
                            gender,
                            total,
                            get_average,
                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            var my = parseFloat(average);
                            if (my <= 4.9) {
                                mention = "ខ្សោយ"
                            } else if (my <= 6.49) {
                                mention = "មធ្យម"
                            } else if (my <= 7.99) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 9.49) {
                                mention = "ល្អ";
                            } else if (my <= 10) {
                                mention = "ល្អណាស់";
                            }

                            let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">គោត្តនាម -នាមខ្លួន</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text-center">និទ្ទេស</th>
                                        
        
                                        `
                            let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark text-start">${id}</td>
                                        <td class="border-dark text-center"">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-average="${N0}" id="${noSp}average">${average}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-month4s2="${N0}" id="${noSp}month4s2">${month4s2}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-get_average="${N0}" id="${noSp}get_average">${get_average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average: d,
                                        });
                                })
                                document.getElementById(`${noSp}month4s2`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}month4s2`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            month4s2: d,
                                        });
                                })
                                document.getElementById(`${noSp}get_average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}get_average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average2sr: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });

                            show_hearder.innerHTML = h;
                            table.innerHTML += n;
                            show_hearder_print.innerHTML = h;
                            table_print.innerHTML += n;

                        }, 200);

                    })
                    //Sort array and get rank number
                    student_rank.sort((a, b) => {
                        if (a.get_average > b.get_average) return -1;
                        if (a.get_average < b.get_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].get_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.get_average === avg

                        );
                        for (let student of studentsWithRank) {
                            student.Rank = i + 1;
                        }
                        i += studentsWithRank.length - 1;
                    }
                    let num = "";
                    //get Data sort to new array and save to localStorage
                    student_rank.forEach((student) => {
                        var id = student.id;
                        var gender = student.gender;
                        var average = student.average;
                        var month4s2 = student.month4s2;
                        var get_average = student.get_average;
                        var rank = student.Rank;

                        if (!average) {
                            average = 0.00
                        }
                        if (!month4s2) {
                            month4s2 = 0.00
                        }
                        if (!get_average) {
                            get_average = 0.00
                        }
                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention = "ខ្សោយ"
                        } else if (my <= 6.49) {
                            mention = "មធ្យម"
                        } else if (my <= 7.99) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 9.49) {
                            mention = "ល្អ";
                        } else if (my <= 10) {
                            mention = "ល្អណាស់";
                        }
                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention_fail = "Poor"
                        } else if (my <= 6.49) {
                            mention_fail = "Average"
                        } else if (my <= 7.99) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 9.49) {
                            mention_fail = "Good";
                        } else if (my <= 10) {
                            mention_fail = "Very Good";
                        }
                        let sex = '';
                        if (gender == 'ស') { sex = 'F' };
                        if (gender == 'ប') { sex = 'M' };

                        let new_gender = '';
                        if (gender == 'ស') { new_gender = 'ស' };
                        if (gender == 'ប') { new_gender = 'ប' };

                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                average2sr: get_average,
                                rank_m2semesterresult: rank,
                            });
                        let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
                        let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table fw-bold">${month4s2}</td>
                                        <td class="border-dark text-center text_table fw-bold">${get_average}</td>
                                        <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                                        <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                                        <td class="border-dark text-center text_table"></td>
                                        <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        show_hearder_result.innerHTML = h;
                        table_result.innerHTML += n;

                    })
                }
                if (primary_g_p2.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_m2semester;
                        var month4s2 = d.val().month4s2;
                        var rank = d.val().rank_m2semester;
                        if (!average) { average = 0.00 };
                        if (!month4s2) { month4s2 = 0.00 };

                        let total = parseFloat(average) + parseFloat(month4s2)
                        let get_average = total / 2
                        get_average = get_average.toFixed(2)

                        if (!get_average) { get_average = "0.00" }

                        let noSp = id.replace(/\s+/g, "");

                        student_rank.push({
                            id,
                            user_grade,
                            average,
                            month4s2,
                            gender,
                            total,
                            get_average,
                        })


                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            var my = parseFloat(average);
                            if (my <= 4.9) {
                                mention = "ខ្សោយ"
                            } else if (my <= 6.49) {
                                mention = "មធ្យម"
                            } else if (my <= 7.99) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 9.49) {
                                mention = "ល្អ";
                            } else if (my <= 10) {
                                mention = "ល្អណាស់";
                            }

                            let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">គោត្តនាម -នាមខ្លួន</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text-center">និទ្ទេស</th>
                                        
        
                                        `
                            let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark text-start">${id}</td>
                                        <td class="border-dark text-center"">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-average="${N0}" id="${noSp}average">${average}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-month4s2="${N0}" id="${noSp}month4s2">${month4s2}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-get_average="${N0}" id="${noSp}get_average">${get_average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average: d,
                                        });
                                })
                                document.getElementById(`${noSp}month4s2`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}month4s2`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            month4s2: d,
                                        });
                                })
                                document.getElementById(`${noSp}get_average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}get_average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average2sr: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });

                            show_hearder.innerHTML = h;
                            table.innerHTML += n;
                            show_hearder_print.innerHTML = h;
                            table_print.innerHTML += n;

                        }, 200);

                    })
                    //Sort array and get rank number
                    student_rank.sort((a, b) => {
                        if (a.get_average > b.get_average) return -1;
                        if (a.get_average < b.get_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].get_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.get_average === avg

                        );
                        for (let student of studentsWithRank) {
                            student.Rank = i + 1;
                        }
                        i += studentsWithRank.length - 1;
                    }
                    let num = "";
                    //get Data sort to new array and save to localStorage
                    student_rank.forEach((student) => {
                        var id = student.id;
                        var gender = student.gender;
                        var average = student.average;
                        var month4s2 = student.month4s2;
                        var get_average = student.get_average;
                        var rank = student.Rank;

                        if (!average) {
                            average = 0.00
                        }
                        if (!month4s2) {
                            month4s2 = 0.00
                        }
                        if (!get_average) {
                            get_average = 0.00
                        }
                        num++;
                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention = "ខ្សោយ"
                        } else if (my <= 6.49) {
                            mention = "មធ្យម"
                        } else if (my <= 7.99) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 9.49) {
                            mention = "ល្អ";
                        } else if (my <= 10) {
                            mention = "ល្អណាស់";
                        }
                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention_fail = "Poor"
                        } else if (my <= 6.49) {
                            mention_fail = "Average"
                        } else if (my <= 7.99) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 9.49) {
                            mention_fail = "Good";
                        } else if (my <= 10) {
                            mention_fail = "Very Good";
                        }
                        let sex = '';
                        if (gender == 'ស') { sex = 'F' };
                        if (gender == 'ប') { sex = 'M' };

                        let new_gender = '';
                        if (gender == 'ស') { new_gender = 'ស' };
                        if (gender == 'ប') { new_gender = 'ប' };

                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                average2sr: get_average,
                                rank_m2semesterresult: rank,
                            });
                        let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
                        let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table fw-bold">${month4s2}</td>
                                        <td class="border-dark text-center text_table fw-bold">${get_average}</td>
                                        <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                                        <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                                        <td class="border-dark text-center text_table"></td>
                                        <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        show_hearder_result.innerHTML = h;
                        table_result.innerHTML += n;

                    })
                }
            }
        }
    }
    if (dbLevel === 'អនុវិទ្យាល័យ') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == '2nd Semester Result') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_m2semester;
                        var month4s2 = d.val().month4s2;
                        var rank = d.val().rank_m2semester;
                        if (!average) { average = 0.00 };
                        if (!month4s2) { month4s2 = 0.00 };

                        let total = parseFloat(average) + parseFloat(month4s2)
                        let get_average = total / 2
                        get_average = get_average.toFixed(2)
                        if (!get_average) { get_average = "00" }
                        let noSp = id.replace(/\s+/g, "");


                        student_rank.push({
                            id,
                            user_grade,
                            average,
                            month4s2,
                            gender,
                            total,
                            get_average,
                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            var my = parseFloat(average);
                            if (my <= 4.9) {
                                mention = "ខ្សោយ"
                            } else if (my <= 6.49) {
                                mention = "មធ្យម"
                            } else if (my <= 7.99) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 9.49) {
                                mention = "ល្អ";
                            } else if (my <= 10) {
                                mention = "ល្អណាស់";
                            }

                            let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">គោត្តនាម -នាមខ្លួន</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text-center">និទ្ទេស</th>
                                        
        
                                        `
                            let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark text-start">${id}</td>
                                        <td class="border-dark text-center"">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-average="${N0}" id="${noSp}average">${average}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-month4s2="${N0}" id="${noSp}month4s2">${month4s2}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-get_average="${N0}" id="${noSp}get_average">${get_average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average: d,
                                        });
                                })
                                document.getElementById(`${noSp}month4s2`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}month4s2`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            month4s2: d,
                                        });
                                })
                                document.getElementById(`${noSp}get_average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}get_average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average2sr: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });

                            show_hearder.innerHTML = h;
                            table.innerHTML += n;
                            show_hearder_print.innerHTML = h;
                            table_print.innerHTML += n;

                        }, 200);

                    })
                    //Sort array and get rank number
                    student_rank.sort((a, b) => {
                        if (a.get_average > b.get_average) return -1;
                        if (a.get_average < b.get_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].get_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.get_average === avg

                        );
                        for (let student of studentsWithRank) {
                            student.Rank = i + 1;
                        }
                        i += studentsWithRank.length - 1;
                    }
                    let num = "";
                    //get Data sort to new array and save to localStorage
                    student_rank.forEach((student) => {
                        var id = student.id;
                        var gender = student.gender;
                        var average = student.average;
                        var month4s2 = student.month4s2;
                        var get_average = student.get_average;
                        var rank = student.Rank;

                        if (!average) {
                            average = 0
                        }
                        if (!month4s2) {
                            month4s2 = 0
                        }
                        if (!get_average) {
                            get_average = 0
                        }
                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention = "ខ្សោយ"
                        } else if (my <= 6.49) {
                            mention = "មធ្យម"
                        } else if (my <= 7.99) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 9.49) {
                            mention = "ល្អ";
                        } else if (my <= 10) {
                            mention = "ល្អណាស់";
                        }
                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention_fail = "Poor"
                        } else if (my <= 6.49) {
                            mention_fail = "Average"
                        } else if (my <= 7.99) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 9.49) {
                            mention_fail = "Good";
                        } else if (my <= 10) {
                            mention_fail = "Very Good";
                        }
                        let sex = '';
                        if (gender == 'ស') { sex = 'F' };
                        if (gender == 'ប') { sex = 'M' };

                        let new_gender = '';
                        if (gender == 'ស') { new_gender = 'ស' };
                        if (gender == 'ប') { new_gender = 'ប' };

                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                average2sr: get_average,
                                rank_m2semesterresult: rank,
                            });
                        let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
                        let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table fw-bold">${month4s2}</td>
                                        <td class="border-dark text-center text_table fw-bold">${get_average}</td>
                                        <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                                        <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                                        <td class="border-dark text-center text_table"></td>
                                        <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        show_hearder_result.innerHTML = h;
                        table_result.innerHTML += n;

                    })
                }

            }
        }
    }
    if (dbLevel === 'វិទ្យាល័យ') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == '2nd Semester Result') {
                if (primary_g_p4.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_m2semester;
                        var month4s2 = d.val().month4s2;
                        var rank = d.val().rank_m2semester;
                        if (!average) { average = 0.00 };
                        if (!month4s2) { month4s2 = 0.00 };

                        let total = parseFloat(average) + parseFloat(month4s2)
                        let get_average = total / 2

                        get_average = get_average.toFixed(2)
                        if (!get_average) { get_average = "00" }
                        let noSp = id.replace(/\s+/g, "");

                        student_rank.push({
                            id,
                            user_grade,
                            average,
                            month4s2,
                            gender,
                            total,
                            get_average,
                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            var my = parseFloat(average);
                            if (my <= 4.9) {
                                mention = "ខ្សោយ"
                            } else if (my <= 6.49) {
                                mention = "មធ្យម"
                            } else if (my <= 7.99) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 9.49) {
                                mention = "ល្អ";
                            } else if (my <= 10) {
                                mention = "ល្អណាស់";
                            }

                            let h = `
                                        <th class="border-dark text-center">ល.រ</th>
                                        <th class="border-dark text-center">គោត្តនាម -នាមខ្លួន</th>
                                        <th class="border-dark text-center">ភេទ</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text-center">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text-center">និទ្ទេស</th>
                                        
        
                                        `
                            let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark text-start">${id}</td>
                                        <td class="border-dark text-center"">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-average="${N0}" id="${noSp}average">${average}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-month4s2="${N0}" id="${noSp}month4s2">${month4s2}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-get_average="${N0}" id="${noSp}get_average">${get_average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average: d,
                                        });
                                })
                                document.getElementById(`${noSp}month4s2`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}month4s2`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            month4s2: d,
                                        });
                                })
                                document.getElementById(`${noSp}get_average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}get_average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average2sr: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.month4s2);
                                    const nextCell = document.querySelector(`[data-month4s2="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                                if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex - 1}"]`);
                                    const focusedCell = document.activeElement;
                                    if (focusedCell && focusedCell.tagName === "TD") {
                                        const range = document.createRange();
                                        range.selectNodeContents(focusedCell);
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }
                                    if (nextCell) {
                                        nextCell.focus();
                                    }
                                }
                            });

                            show_hearder.innerHTML = h;
                            table.innerHTML += n;
                            show_hearder_print.innerHTML = h;
                            table_print.innerHTML += n;

                        }, 200);

                    })
                    //Sort array and get rank number
                    student_rank.sort((a, b) => {
                        if (a.get_average > b.get_average) return -1;
                        if (a.get_average < b.get_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].get_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.get_average === avg

                        );
                        for (let student of studentsWithRank) {
                            student.Rank = i + 1;
                        }
                        i += studentsWithRank.length - 1;
                    }
                    let num = "";
                    //get Data sort to new array and save to localStorage
                    student_rank.forEach((student) => {
                        var id = student.id;
                        var gender = student.gender;
                        var average = student.average;
                        var month4s2 = student.month4s2;
                        var get_average = student.get_average;
                        var rank = student.Rank;

                        if (!average) {
                            average = 0
                        }
                        if (!month4s2) {
                            month4s2 = 0
                        }
                        if (!get_average) {
                            get_average = 0
                        }
                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention = "ខ្សោយ"
                        } else if (my <= 6.49) {
                            mention = "មធ្យម"
                        } else if (my <= 7.99) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 9.49) {
                            mention = "ល្អ";
                        } else if (my <= 10) {
                            mention = "ល្អណាស់";
                        }
                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 4.9) {
                            mention_fail = "Poor"
                        } else if (my <= 6.49) {
                            mention_fail = "Average"
                        } else if (my <= 7.99) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 9.49) {
                            mention_fail = "Good";
                        } else if (my <= 10) {
                            mention_fail = "Very Good";
                        }
                        let sex = '';
                        if (gender == 'ស') { sex = 'F' };
                        if (gender == 'ប') { sex = 'M' };

                        let new_gender = '';
                        if (gender == 'ស') { new_gender = 'ស' };
                        if (gender == 'ប') { new_gender = 'ប' };

                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                average2sr: get_average,
                                rank_m2semesterresult: rank,
                            });
                        let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
                        let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table fw-bold">${month4s2}</td>
                                        <td class="border-dark text-center text_table fw-bold">${get_average}</td>
                                        <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                                        <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                                        <td class="border-dark text-center text_table"></td>
                                        <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        show_hearder_result.innerHTML = h;
                        table_result.innerHTML += n;

                    })
                }

            }
        }
    }

}
