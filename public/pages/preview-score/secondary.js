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

export function app(datas) {
    if (dbLevel === 'អនុវិទ្យាល័យ') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == 'October') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var fullname = d.val().fullname;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_moct;
                        var rank = d.val().rank_moct;

                        var k_moct = d.val().k_moct;
                        var mo_moct = d.val().mo_moct;
                        var hist_moct = d.val().hist_moct;
                        var geor_moct = d.val().geor_moct;
                        var math_moct = d.val().math_moct;
                        var phy_moct = d.val().phy_moct;
                        var chem_moct = d.val().chem_moct;
                        var bio_moct = d.val().bio_moct;
                        var earth_moct = d.val().earth_moct;
                        var e_moct = d.val().e_moct;
                        var ict_moct = d.val().ict_moct;
                        var hom_moct = d.val().hom_moct;
                        var pe_moct = d.val().pe_moct;
                        var dic_moct = d.val().dic_moct;
                        var ke_moct = d.val().ke_moct;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_moct) { k_moct = 0 };
                        if (!mo_moct) { mo_moct = 0 };
                        if (!hist_moct) { hist_moct = 0 };
                        if (!geor_moct) { geor_moct = 0 };
                        if (!math_moct) { math_moct = 0 };
                        if (!phy_moct) { phy_moct = 0 };
                        if (!chem_moct) { chem_moct = 0 };
                        if (!bio_moct) { bio_moct = 0 };
                        if (!earth_moct) { earth_moct = 0 };
                        if (!e_moct) { e_moct = 0 };
                        if (!ict_moct) { ict_moct = 0 };
                        if (!hom_moct) { hom_moct = 0 };
                        if (!pe_moct) { pe_moct = 0 };
                        if (!dic_moct) { dic_moct = 0 };
                        if (!ke_moct) { ke_moct = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_moct) +
                            parseFloat(mo_moct) +
                            parseFloat(hist_moct) +
                            parseFloat(geor_moct) +
                            parseFloat(math_moct) +
                            parseFloat(phy_moct) +
                            parseFloat(chem_moct) +
                            parseFloat(bio_moct) +
                            parseFloat(earth_moct) +
                            parseFloat(e_moct) +
                            parseFloat(ict_moct) +
                            parseFloat(hom_moct) +
                            parseFloat(dic_moct) +
                            parseFloat(ke_moct) +
                            parseFloat(pe_moct);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            fullname,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_moct,
                            mo_moct,
                            hist_moct,
                            geor_moct,
                            math_moct,
                            phy_moct,
                            chem_moct,
                            bio_moct,
                            earth_moct,
                            e_moct,
                            ict_moct,
                            hom_moct,
                            pe_moct,
                            dic_moct,
                            ke_moct,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សរសេរតាមអាន</th>
                    <th class="border-dark">តែងសេចក្តី</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_moct="${N0}" id="${noSp}k_moct">${k_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-dic_moct="${N0}" id="${noSp}dic_moct">${dic_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ke_moct="${N0}" id="${noSp}ke_moct">${ke_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_moct="${N0}" id="${noSp}mo_moct">${mo_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_moct="${N0}" id="${noSp}hist_moct">${hist_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_moct="${N0}" id="${noSp}geor_moct">${geor_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_moct="${N0}" id="${noSp}math_moct">${math_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_moct="${N0}" id="${noSp}phy_moct">${phy_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_moct="${N0}" id="${noSp}chem_moct">${chem_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_moct="${N0}" id="${noSp}bio_moct">${bio_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_moct="${N0}" id="${noSp}earth_moct">${earth_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_moct="${N0}" id="${noSp}e_moct">${e_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_moct="${N0}" id="${noSp}ict_moct">${ict_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_moct="${N0}" id="${noSp}hom_moct">${hom_moct}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_moct="${N0}" id="${noSp}pe_moct">${pe_moct}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}dic_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}dic_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            dic_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}ke_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ke_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ke_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_moct: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_moct`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_moct`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_moct: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_moct);
                                    const nextCell = document.querySelector(`[data-k_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_moct);
                                    const nextCell = document.querySelector(`[data-k_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_moct);
                                    const nextCell = document.querySelector(`[data-k_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_moct);
                                    const nextCell = document.querySelector(`[data-dic_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_moct);
                                    const nextCell = document.querySelector(`[data-dic_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_moct);
                                    const nextCell = document.querySelector(`[data-dic_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_moct);
                                    const nextCell = document.querySelector(`[data-ke_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_moct);
                                    const nextCell = document.querySelector(`[data-ke_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_moct);
                                    const nextCell = document.querySelector(`[data-ke_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_moct);
                                    const nextCell = document.querySelector(`[data-mo_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_moct);
                                    const nextCell = document.querySelector(`[data-mo_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_moct);
                                    const nextCell = document.querySelector(`[data-mo_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_moct);
                                    const nextCell = document.querySelector(`[data-hist_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_moct);
                                    const nextCell = document.querySelector(`[data-hist_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_moct);
                                    const nextCell = document.querySelector(`[data-hist_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_moct);
                                    const nextCell = document.querySelector(`[data-geor_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_moct);
                                    const nextCell = document.querySelector(`[data-geor_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_moct);
                                    const nextCell = document.querySelector(`[data-geor_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_moct);
                                    const nextCell = document.querySelector(`[data-math_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_moct);
                                    const nextCell = document.querySelector(`[data-math_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_moct);
                                    const nextCell = document.querySelector(`[data-math_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_moct);
                                    const nextCell = document.querySelector(`[data-phy_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_moct);
                                    const nextCell = document.querySelector(`[data-phy_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_moct);
                                    const nextCell = document.querySelector(`[data-phy_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_moct);
                                    const nextCell = document.querySelector(`[data-chem_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_moct);
                                    const nextCell = document.querySelector(`[data-chem_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_moct);
                                    const nextCell = document.querySelector(`[data-chem_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_moct);
                                    const nextCell = document.querySelector(`[data-bio_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_moct);
                                    const nextCell = document.querySelector(`[data-bio_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_moct);
                                    const nextCell = document.querySelector(`[data-bio_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_moct);
                                    const nextCell = document.querySelector(`[data-earth_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_moct);
                                    const nextCell = document.querySelector(`[data-earth_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_moct);
                                    const nextCell = document.querySelector(`[data-earth_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_moct);
                                    const nextCell = document.querySelector(`[data-e_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_moct);
                                    const nextCell = document.querySelector(`[data-e_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_moct);
                                    const nextCell = document.querySelector(`[data-e_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_moct);
                                    const nextCell = document.querySelector(`[data-ict_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_moct);
                                    const nextCell = document.querySelector(`[data-ict_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_moct);
                                    const nextCell = document.querySelector(`[data-ict_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_moct);
                                    const nextCell = document.querySelector(`[data-hom_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_moct);
                                    const nextCell = document.querySelector(`[data-hom_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_moct);
                                    const nextCell = document.querySelector(`[data-hom_moct="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_moct);
                                    const nextCell = document.querySelector(`[data-pe_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_moct);
                                    const nextCell = document.querySelector(`[data-pe_moct="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_moct);
                                    const nextCell = document.querySelector(`[data-pe_moct="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average";
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_moct: average,
                                rank_moct: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'November') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mnov;
                        var rank = d.val().rank_mnov;

                        var k_mnov = d.val().k_mnov;
                        var mo_mnov = d.val().mo_mnov;
                        var hist_mnov = d.val().hist_mnov;
                        var geor_mnov = d.val().geor_mnov;
                        var math_mnov = d.val().math_mnov;
                        var phy_mnov = d.val().phy_mnov;
                        var chem_mnov = d.val().chem_mnov;
                        var bio_mnov = d.val().bio_mnov;
                        var earth_mnov = d.val().earth_mnov;
                        var e_mnov = d.val().e_mnov;
                        var ict_mnov = d.val().ict_mnov;
                        var hom_mnov = d.val().hom_mnov;
                        var pe_mnov = d.val().pe_mnov;
                        var dic_mnov = d.val().dic_mnov;
                        var ke_mnov = d.val().ke_mnov;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mnov) { k_mnov = 0 };
                        if (!mo_mnov) { mo_mnov = 0 };
                        if (!hist_mnov) { hist_mnov = 0 };
                        if (!geor_mnov) { geor_mnov = 0 };
                        if (!math_mnov) { math_mnov = 0 };
                        if (!phy_mnov) { phy_mnov = 0 };
                        if (!chem_mnov) { chem_mnov = 0 };
                        if (!bio_mnov) { bio_mnov = 0 };
                        if (!earth_mnov) { earth_mnov = 0 };
                        if (!e_mnov) { e_mnov = 0 };
                        if (!ict_mnov) { ict_mnov = 0 };
                        if (!hom_mnov) { hom_mnov = 0 };
                        if (!pe_mnov) { pe_mnov = 0 };
                        if (!dic_mnov) { dic_mnov = 0 };
                        if (!ke_mnov) { ke_mnov = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mnov) +
                            parseFloat(mo_mnov) +
                            parseFloat(hist_mnov) +
                            parseFloat(geor_mnov) +
                            parseFloat(math_mnov) +
                            parseFloat(phy_mnov) +
                            parseFloat(chem_mnov) +
                            parseFloat(bio_mnov) +
                            parseFloat(earth_mnov) +
                            parseFloat(e_mnov) +
                            parseFloat(ict_mnov) +
                            parseFloat(hom_mnov) +
                            parseFloat(dic_mnov) +
                            parseFloat(ke_mnov) +
                            parseFloat(pe_mnov);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mnov,
                            mo_mnov,
                            hist_mnov,
                            geor_mnov,
                            math_mnov,
                            phy_mnov,
                            chem_mnov,
                            bio_mnov,
                            earth_mnov,
                            e_mnov,
                            ict_mnov,
                            hom_mnov,
                            pe_mnov,
                            dic_mnov,
                            ke_mnov,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សរសេរតាមអាន</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mnov="${N0}" id="${noSp}k_mnov">${k_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-dic_mnov="${N0}" id="${noSp}dic_mnov">${dic_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ke_mnov="${N0}" id="${noSp}ke_mnov">${ke_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mnov="${N0}" id="${noSp}mo_mnov">${mo_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mnov="${N0}" id="${noSp}hist_mnov">${hist_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mnov="${N0}" id="${noSp}geor_mnov">${geor_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mnov="${N0}" id="${noSp}math_mnov">${math_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mnov="${N0}" id="${noSp}phy_mnov">${phy_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mnov="${N0}" id="${noSp}chem_mnov">${chem_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mnov="${N0}" id="${noSp}bio_mnov">${bio_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mnov="${N0}" id="${noSp}earth_mnov">${earth_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mnov="${N0}" id="${noSp}e_mnov">${e_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mnov="${N0}" id="${noSp}ict_mnov">${ict_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mnov="${N0}" id="${noSp}hom_mnov">${hom_mnov}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mnov="${N0}" id="${noSp}pe_mnov">${pe_mnov}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}dic_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}dic_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            dic_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}ke_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ke_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ke_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mnov: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mnov`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mnov`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mnov: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mnov);
                                    const nextCell = document.querySelector(`[data-k_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mnov);
                                    const nextCell = document.querySelector(`[data-k_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mnov);
                                    const nextCell = document.querySelector(`[data-k_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_mnov);
                                    const nextCell = document.querySelector(`[data-dic_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_mnov);
                                    const nextCell = document.querySelector(`[data-dic_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_mnov);
                                    const nextCell = document.querySelector(`[data-dic_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_mnov);
                                    const nextCell = document.querySelector(`[data-ke_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_mnov);
                                    const nextCell = document.querySelector(`[data-ke_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_mnov);
                                    const nextCell = document.querySelector(`[data-ke_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mnov);
                                    const nextCell = document.querySelector(`[data-mo_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mnov);
                                    const nextCell = document.querySelector(`[data-mo_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mnov);
                                    const nextCell = document.querySelector(`[data-mo_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mnov);
                                    const nextCell = document.querySelector(`[data-hist_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mnov);
                                    const nextCell = document.querySelector(`[data-hist_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mnov);
                                    const nextCell = document.querySelector(`[data-hist_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mnov);
                                    const nextCell = document.querySelector(`[data-geor_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mnov);
                                    const nextCell = document.querySelector(`[data-geor_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mnov);
                                    const nextCell = document.querySelector(`[data-geor_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mnov);
                                    const nextCell = document.querySelector(`[data-math_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mnov);
                                    const nextCell = document.querySelector(`[data-math_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mnov);
                                    const nextCell = document.querySelector(`[data-math_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mnov);
                                    const nextCell = document.querySelector(`[data-phy_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mnov);
                                    const nextCell = document.querySelector(`[data-phy_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mnov);
                                    const nextCell = document.querySelector(`[data-phy_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mnov);
                                    const nextCell = document.querySelector(`[data-chem_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mnov);
                                    const nextCell = document.querySelector(`[data-chem_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mnov);
                                    const nextCell = document.querySelector(`[data-chem_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mnov);
                                    const nextCell = document.querySelector(`[data-bio_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mnov);
                                    const nextCell = document.querySelector(`[data-bio_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mnov);
                                    const nextCell = document.querySelector(`[data-bio_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mnov);
                                    const nextCell = document.querySelector(`[data-earth_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mnov);
                                    const nextCell = document.querySelector(`[data-earth_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mnov);
                                    const nextCell = document.querySelector(`[data-earth_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mnov);
                                    const nextCell = document.querySelector(`[data-e_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mnov);
                                    const nextCell = document.querySelector(`[data-e_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mnov);
                                    const nextCell = document.querySelector(`[data-e_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mnov);
                                    const nextCell = document.querySelector(`[data-ict_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mnov);
                                    const nextCell = document.querySelector(`[data-ict_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mnov);
                                    const nextCell = document.querySelector(`[data-ict_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mnov);
                                    const nextCell = document.querySelector(`[data-hom_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mnov);
                                    const nextCell = document.querySelector(`[data-hom_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mnov);
                                    const nextCell = document.querySelector(`[data-hom_mnov="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mnov);
                                    const nextCell = document.querySelector(`[data-pe_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mnov);
                                    const nextCell = document.querySelector(`[data-pe_mnov="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mnov);
                                    const nextCell = document.querySelector(`[data-pe_mnov="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mnov: average,
                                rank_mnov: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'December') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mdec;
                        var rank = d.val().rank_mdec;

                        var k_mdec = d.val().k_mdec;
                        var mo_mdec = d.val().mo_mdec;
                        var hist_mdec = d.val().hist_mdec;
                        var geor_mdec = d.val().geor_mdec;
                        var math_mdec = d.val().math_mdec;
                        var phy_mdec = d.val().phy_mdec;
                        var chem_mdec = d.val().chem_mdec;
                        var bio_mdec = d.val().bio_mdec;
                        var earth_mdec = d.val().earth_mdec;
                        var e_mdec = d.val().e_mdec;
                        var ict_mdec = d.val().ict_mdec;
                        var hom_mdec = d.val().hom_mdec;
                        var pe_mdec = d.val().pe_mdec;
                        var dic_mdec = d.val().dic_mdec;
                        var ke_mdec = d.val().pe_mdec;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mdec) { k_mdec = 0 };
                        if (!mo_mdec) { mo_mdec = 0 };
                        if (!hist_mdec) { hist_mdec = 0 };
                        if (!geor_mdec) { geor_mdec = 0 };
                        if (!math_mdec) { math_mdec = 0 };
                        if (!phy_mdec) { phy_mdec = 0 };
                        if (!chem_mdec) { chem_mdec = 0 };
                        if (!bio_mdec) { bio_mdec = 0 };
                        if (!earth_mdec) { earth_mdec = 0 };
                        if (!e_mdec) { e_mdec = 0 };
                        if (!ict_mdec) { ict_mdec = 0 };
                        if (!hom_mdec) { hom_mdec = 0 };
                        if (!pe_mdec) { pe_mdec = 0 };
                        if (!dic_mdec) { dic_mdec = 0 };
                        if (!ke_mdec) { ke_mdec = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mdec) +
                            parseFloat(mo_mdec) +
                            parseFloat(hist_mdec) +
                            parseFloat(geor_mdec) +
                            parseFloat(math_mdec) +
                            parseFloat(phy_mdec) +
                            parseFloat(chem_mdec) +
                            parseFloat(bio_mdec) +
                            parseFloat(earth_mdec) +
                            parseFloat(e_mdec) +
                            parseFloat(ict_mdec) +
                            parseFloat(hom_mdec) +
                            parseFloat(dic_mdec) +
                            parseFloat(ke_mdec) +
                            parseFloat(pe_mdec);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mdec,
                            mo_mdec,
                            hist_mdec,
                            geor_mdec,
                            math_mdec,
                            phy_mdec,
                            chem_mdec,
                            bio_mdec,
                            earth_mdec,
                            e_mdec,
                            ict_mdec,
                            hom_mdec,
                            pe_mdec,
                            dic_mdec,
                            ke_mdec,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សរសេរតាមអាន</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mdec="${N0}" id="${noSp}k_mdec">${k_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-dic_mdec="${N0}" id="${noSp}dic_mdec">${dic_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ke_mdec="${N0}" id="${noSp}ke_mdec">${ke_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mdec="${N0}" id="${noSp}mo_mdec">${mo_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mdec="${N0}" id="${noSp}hist_mdec">${hist_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mdec="${N0}" id="${noSp}geor_mdec">${geor_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mdec="${N0}" id="${noSp}math_mdec">${math_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mdec="${N0}" id="${noSp}phy_mdec">${phy_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mdec="${N0}" id="${noSp}chem_mdec">${chem_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mdec="${N0}" id="${noSp}bio_mdec">${bio_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mdec="${N0}" id="${noSp}earth_mdec">${earth_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mdec="${N0}" id="${noSp}e_mdec">${e_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mdec="${N0}" id="${noSp}ict_mdec">${ict_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mdec="${N0}" id="${noSp}hom_mdec">${hom_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mdec="${N0}" id="${noSp}pe_mdec">${pe_mdec}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}dic_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}dic_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            dic_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}ke_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ke_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ke_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mdec: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mdec`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mdec`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mdec: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mdec);
                                    const nextCell = document.querySelector(`[data-k_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mdec);
                                    const nextCell = document.querySelector(`[data-k_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mdec);
                                    const nextCell = document.querySelector(`[data-k_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_mdec);
                                    const nextCell = document.querySelector(`[data-dic_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_mdec);
                                    const nextCell = document.querySelector(`[data-dic_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_mdec);
                                    const nextCell = document.querySelector(`[data-dic_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_mdec);
                                    const nextCell = document.querySelector(`[data-ke_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_mdec);
                                    const nextCell = document.querySelector(`[data-ke_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_mdec);
                                    const nextCell = document.querySelector(`[data-ke_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                                    const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                                    const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                                    const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                                    const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                                    const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                                    const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                                    const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                                    const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                                    const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mdec);
                                    const nextCell = document.querySelector(`[data-math_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mdec);
                                    const nextCell = document.querySelector(`[data-math_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mdec);
                                    const nextCell = document.querySelector(`[data-math_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                                    const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                                    const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                                    const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                                    const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                                    const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                                    const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                                    const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                                    const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                                    const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                                    const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                                    const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                                    const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mdec);
                                    const nextCell = document.querySelector(`[data-e_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mdec);
                                    const nextCell = document.querySelector(`[data-e_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mdec);
                                    const nextCell = document.querySelector(`[data-e_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                                    const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                                    const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                                    const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                                    const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                                    const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                                    const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                                    const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                                    const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                                    const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mdec: average,
                                rank_mdec: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'January') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mjan;
                        var rank = d.val().rank_mjan;

                        var k_mjan = d.val().k_mjan;
                        var mo_mjan = d.val().mo_mjan;
                        var hist_mjan = d.val().hist_mjan;
                        var geor_mjan = d.val().geor_mjan;
                        var math_mjan = d.val().math_mjan;
                        var phy_mjan = d.val().phy_mjan;
                        var chem_mjan = d.val().chem_mjan;
                        var bio_mjan = d.val().bio_mjan;
                        var earth_mjan = d.val().earth_mjan;
                        var e_mjan = d.val().e_mjan;
                        var ict_mjan = d.val().ict_mjan;
                        var hom_mjan = d.val().hom_mjan;
                        var pe_mjan = d.val().pe_mjan;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mjan) { k_mjan = 0 };
                        if (!mo_mjan) { mo_mjan = 0 };
                        if (!hist_mjan) { hist_mjan = 0 };
                        if (!geor_mjan) { geor_mjan = 0 };
                        if (!math_mjan) { math_mjan = 0 };
                        if (!phy_mjan) { phy_mjan = 0 };
                        if (!chem_mjan) { chem_mjan = 0 };
                        if (!bio_mjan) { bio_mjan = 0 };
                        if (!earth_mjan) { earth_mjan = 0 };
                        if (!e_mjan) { e_mjan = 0 };
                        if (!ict_mjan) { ict_mjan = 0 };
                        if (!hom_mjan) { hom_mjan = 0 };
                        if (!pe_mjan) { pe_mjan = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mjan) +
                            parseFloat(mo_mjan) +
                            parseFloat(hist_mjan) +
                            parseFloat(geor_mjan) +
                            parseFloat(math_mjan) +
                            parseFloat(phy_mjan) +
                            parseFloat(chem_mjan) +
                            parseFloat(bio_mjan) +
                            parseFloat(earth_mjan) +
                            parseFloat(e_mjan) +
                            parseFloat(ict_mjan) +
                            parseFloat(hom_mjan) +
                            parseFloat(pe_mjan);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mjan,
                            mo_mjan,
                            hist_mjan,
                            geor_mjan,
                            math_mjan,
                            phy_mjan,
                            chem_mjan,
                            bio_mjan,
                            earth_mjan,
                            e_mjan,
                            ict_mjan,
                            hom_mjan,
                            pe_mjan,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mjan="${N0}" id="${noSp}k_mjan">${k_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mjan="${N0}" id="${noSp}mo_mjan">${mo_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mjan="${N0}" id="${noSp}hist_mjan">${hist_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mjan="${N0}" id="${noSp}geor_mjan">${geor_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mjan="${N0}" id="${noSp}math_mjan">${math_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mjan="${N0}" id="${noSp}phy_mjan">${phy_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mjan="${N0}" id="${noSp}chem_mjan">${chem_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mjan="${N0}" id="${noSp}bio_mjan">${bio_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mjan="${N0}" id="${noSp}earth_mjan">${earth_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mjan="${N0}" id="${noSp}e_mjan">${e_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mjan="${N0}" id="${noSp}ict_mjan">${ict_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mjan="${N0}" id="${noSp}hom_mjan">${hom_mjan}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mjan="${N0}" id="${noSp}pe_mjan">${pe_mjan}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mjan: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mjan`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mjan`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mjan: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mjan);
                                    const nextCell = document.querySelector(`[data-k_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mjan);
                                    const nextCell = document.querySelector(`[data-k_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mjan);
                                    const nextCell = document.querySelector(`[data-k_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjan);
                                    const nextCell = document.querySelector(`[data-mo_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjan);
                                    const nextCell = document.querySelector(`[data-mo_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjan);
                                    const nextCell = document.querySelector(`[data-mo_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjan);
                                    const nextCell = document.querySelector(`[data-hist_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjan);
                                    const nextCell = document.querySelector(`[data-hist_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjan);
                                    const nextCell = document.querySelector(`[data-hist_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjan);
                                    const nextCell = document.querySelector(`[data-geor_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjan);
                                    const nextCell = document.querySelector(`[data-geor_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjan);
                                    const nextCell = document.querySelector(`[data-geor_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjan);
                                    const nextCell = document.querySelector(`[data-math_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjan);
                                    const nextCell = document.querySelector(`[data-math_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjan);
                                    const nextCell = document.querySelector(`[data-math_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjan);
                                    const nextCell = document.querySelector(`[data-phy_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjan);
                                    const nextCell = document.querySelector(`[data-phy_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjan);
                                    const nextCell = document.querySelector(`[data-phy_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjan);
                                    const nextCell = document.querySelector(`[data-chem_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjan);
                                    const nextCell = document.querySelector(`[data-chem_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjan);
                                    const nextCell = document.querySelector(`[data-chem_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjan);
                                    const nextCell = document.querySelector(`[data-bio_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjan);
                                    const nextCell = document.querySelector(`[data-bio_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjan);
                                    const nextCell = document.querySelector(`[data-bio_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjan);
                                    const nextCell = document.querySelector(`[data-earth_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjan);
                                    const nextCell = document.querySelector(`[data-earth_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjan);
                                    const nextCell = document.querySelector(`[data-earth_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjan);
                                    const nextCell = document.querySelector(`[data-e_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjan);
                                    const nextCell = document.querySelector(`[data-e_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjan);
                                    const nextCell = document.querySelector(`[data-e_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjan);
                                    const nextCell = document.querySelector(`[data-ict_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjan);
                                    const nextCell = document.querySelector(`[data-ict_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjan);
                                    const nextCell = document.querySelector(`[data-ict_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjan);
                                    const nextCell = document.querySelector(`[data-hom_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjan);
                                    const nextCell = document.querySelector(`[data-hom_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjan);
                                    const nextCell = document.querySelector(`[data-hom_mjan="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjan);
                                    const nextCell = document.querySelector(`[data-pe_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjan);
                                    const nextCell = document.querySelector(`[data-pe_mjan="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjan);
                                    const nextCell = document.querySelector(`[data-pe_mjan="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mjan: average,
                                rank_mjan: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'February') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mfeb;
                        var rank = d.val().rank_mfeb;

                        var k_mfeb = d.val().k_mfeb;
                        var mo_mfeb = d.val().mo_mfeb;
                        var hist_mfeb = d.val().hist_mfeb;
                        var geor_mfeb = d.val().geor_mfeb;
                        var math_mfeb = d.val().math_mfeb;
                        var phy_mfeb = d.val().phy_mfeb;
                        var chem_mfeb = d.val().chem_mfeb;
                        var bio_mfeb = d.val().bio_mfeb;
                        var earth_mfeb = d.val().earth_mfeb;
                        var e_mfeb = d.val().e_mfeb;
                        var ict_mfeb = d.val().ict_mfeb;
                        var hom_mfeb = d.val().hom_mfeb;
                        var pe_mfeb = d.val().pe_mfeb;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mfeb) { k_mfeb = 0 };
                        if (!mo_mfeb) { mo_mfeb = 0 };
                        if (!hist_mfeb) { hist_mfeb = 0 };
                        if (!geor_mfeb) { geor_mfeb = 0 };
                        if (!math_mfeb) { math_mfeb = 0 };
                        if (!phy_mfeb) { phy_mfeb = 0 };
                        if (!chem_mfeb) { chem_mfeb = 0 };
                        if (!bio_mfeb) { bio_mfeb = 0 };
                        if (!earth_mfeb) { earth_mfeb = 0 };
                        if (!e_mfeb) { e_mfeb = 0 };
                        if (!ict_mfeb) { ict_mfeb = 0 };
                        if (!hom_mfeb) { hom_mfeb = 0 };
                        if (!pe_mfeb) { pe_mfeb = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mfeb) +
                            parseFloat(mo_mfeb) +
                            parseFloat(hist_mfeb) +
                            parseFloat(geor_mfeb) +
                            parseFloat(math_mfeb) +
                            parseFloat(phy_mfeb) +
                            parseFloat(chem_mfeb) +
                            parseFloat(bio_mfeb) +
                            parseFloat(earth_mfeb) +
                            parseFloat(e_mfeb) +
                            parseFloat(ict_mfeb) +
                            parseFloat(hom_mfeb) +
                            parseFloat(pe_mfeb);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mfeb,
                            mo_mfeb,
                            hist_mfeb,
                            geor_mfeb,
                            math_mfeb,
                            phy_mfeb,
                            chem_mfeb,
                            bio_mfeb,
                            earth_mfeb,
                            e_mfeb,
                            ict_mfeb,
                            hom_mfeb,
                            pe_mfeb,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mfeb="${N0}" id="${noSp}k_mfeb">${k_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mfeb="${N0}" id="${noSp}mo_mfeb">${mo_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mfeb="${N0}" id="${noSp}hist_mfeb">${hist_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mfeb="${N0}" id="${noSp}geor_mfeb">${geor_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mfeb="${N0}" id="${noSp}math_mfeb">${math_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mfeb="${N0}" id="${noSp}phy_mfeb">${phy_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mfeb="${N0}" id="${noSp}chem_mfeb">${chem_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mfeb="${N0}" id="${noSp}bio_mfeb">${bio_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mfeb="${N0}" id="${noSp}earth_mfeb">${earth_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mfeb="${N0}" id="${noSp}e_mfeb">${e_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mfeb="${N0}" id="${noSp}ict_mfeb">${ict_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mfeb="${N0}" id="${noSp}hom_mfeb">${hom_mfeb}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mfeb="${N0}" id="${noSp}pe_mfeb">${pe_mfeb}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mfeb: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mfeb`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mfeb`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mfeb: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mfeb);
                                    const nextCell = document.querySelector(`[data-k_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mfeb);
                                    const nextCell = document.querySelector(`[data-k_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mfeb);
                                    const nextCell = document.querySelector(`[data-k_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mfeb);
                                    const nextCell = document.querySelector(`[data-mo_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mfeb);
                                    const nextCell = document.querySelector(`[data-mo_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mfeb);
                                    const nextCell = document.querySelector(`[data-mo_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mfeb);
                                    const nextCell = document.querySelector(`[data-hist_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mfeb);
                                    const nextCell = document.querySelector(`[data-hist_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mfeb);
                                    const nextCell = document.querySelector(`[data-hist_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mfeb);
                                    const nextCell = document.querySelector(`[data-geor_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mfeb);
                                    const nextCell = document.querySelector(`[data-geor_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mfeb);
                                    const nextCell = document.querySelector(`[data-geor_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mfeb);
                                    const nextCell = document.querySelector(`[data-math_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mfeb);
                                    const nextCell = document.querySelector(`[data-math_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mfeb);
                                    const nextCell = document.querySelector(`[data-math_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mfeb);
                                    const nextCell = document.querySelector(`[data-phy_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mfeb);
                                    const nextCell = document.querySelector(`[data-phy_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mfeb);
                                    const nextCell = document.querySelector(`[data-phy_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mfeb);
                                    const nextCell = document.querySelector(`[data-chem_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mfeb);
                                    const nextCell = document.querySelector(`[data-chem_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mfeb);
                                    const nextCell = document.querySelector(`[data-chem_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mfeb);
                                    const nextCell = document.querySelector(`[data-bio_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mfeb);
                                    const nextCell = document.querySelector(`[data-bio_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mfeb);
                                    const nextCell = document.querySelector(`[data-bio_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mfeb);
                                    const nextCell = document.querySelector(`[data-earth_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mfeb);
                                    const nextCell = document.querySelector(`[data-earth_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mfeb);
                                    const nextCell = document.querySelector(`[data-earth_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mfeb);
                                    const nextCell = document.querySelector(`[data-e_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mfeb);
                                    const nextCell = document.querySelector(`[data-e_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mfeb);
                                    const nextCell = document.querySelector(`[data-e_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mfeb);
                                    const nextCell = document.querySelector(`[data-ict_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mfeb);
                                    const nextCell = document.querySelector(`[data-ict_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mfeb);
                                    const nextCell = document.querySelector(`[data-ict_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mfeb);
                                    const nextCell = document.querySelector(`[data-hom_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mfeb);
                                    const nextCell = document.querySelector(`[data-hom_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mfeb);
                                    const nextCell = document.querySelector(`[data-hom_mfeb="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mfeb);
                                    const nextCell = document.querySelector(`[data-pe_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mfeb);
                                    const nextCell = document.querySelector(`[data-pe_mfeb="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mfeb);
                                    const nextCell = document.querySelector(`[data-pe_mfeb="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mfeb: average,
                                rank_mfeb: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'March') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mmarch;
                        var rank = d.val().rank_mmarch;

                        var k_mmarch = d.val().k_mmarch;
                        var mo_mmarch = d.val().mo_mmarch;
                        var hist_mmarch = d.val().hist_mmarch;
                        var geor_mmarch = d.val().geor_mmarch;
                        var math_mmarch = d.val().math_mmarch;
                        var phy_mmarch = d.val().phy_mmarch;
                        var chem_mmarch = d.val().chem_mmarch;
                        var bio_mmarch = d.val().bio_mmarch;
                        var earth_mmarch = d.val().earth_mmarch;
                        var e_mmarch = d.val().e_mmarch;
                        var ict_mmarch = d.val().ict_mmarch;
                        var hom_mmarch = d.val().hom_mmarch;
                        var pe_mmarch = d.val().pe_mmarch;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mmarch) { k_mmarch = 0 };
                        if (!mo_mmarch) { mo_mmarch = 0 };
                        if (!hist_mmarch) { hist_mmarch = 0 };
                        if (!geor_mmarch) { geor_mmarch = 0 };
                        if (!math_mmarch) { math_mmarch = 0 };
                        if (!phy_mmarch) { phy_mmarch = 0 };
                        if (!chem_mmarch) { chem_mmarch = 0 };
                        if (!bio_mmarch) { bio_mmarch = 0 };
                        if (!earth_mmarch) { earth_mmarch = 0 };
                        if (!e_mmarch) { e_mmarch = 0 };
                        if (!ict_mmarch) { ict_mmarch = 0 };
                        if (!hom_mmarch) { hom_mmarch = 0 };
                        if (!pe_mmarch) { pe_mmarch = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mmarch) +
                            parseFloat(mo_mmarch) +
                            parseFloat(hist_mmarch) +
                            parseFloat(geor_mmarch) +
                            parseFloat(math_mmarch) +
                            parseFloat(phy_mmarch) +
                            parseFloat(chem_mmarch) +
                            parseFloat(bio_mmarch) +
                            parseFloat(earth_mmarch) +
                            parseFloat(e_mmarch) +
                            parseFloat(ict_mmarch) +
                            parseFloat(hom_mmarch) +
                            parseFloat(pe_mmarch);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mmarch,
                            mo_mmarch,
                            hist_mmarch,
                            geor_mmarch,
                            math_mmarch,
                            phy_mmarch,
                            chem_mmarch,
                            bio_mmarch,
                            earth_mmarch,
                            e_mmarch,
                            ict_mmarch,
                            hom_mmarch,
                            pe_mmarch,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mmarch="${N0}" id="${noSp}k_mmarch">${k_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mmarch="${N0}" id="${noSp}mo_mmarch">${mo_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mmarch="${N0}" id="${noSp}hist_mmarch">${hist_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mmarch="${N0}" id="${noSp}geor_mmarch">${geor_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mmarch="${N0}" id="${noSp}math_mmarch">${math_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mmarch="${N0}" id="${noSp}phy_mmarch">${phy_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mmarch="${N0}" id="${noSp}chem_mmarch">${chem_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mmarch="${N0}" id="${noSp}bio_mmarch">${bio_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mmarch="${N0}" id="${noSp}earth_mmarch">${earth_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mmarch="${N0}" id="${noSp}e_mmarch">${e_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mmarch="${N0}" id="${noSp}ict_mmarch">${ict_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mmarch="${N0}" id="${noSp}hom_mmarch">${hom_mmarch}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mmarch="${N0}" id="${noSp}pe_mmarch">${pe_mmarch}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mmarch: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mmarch`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mmarch`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mmarch: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mmarch);
                                    const nextCell = document.querySelector(`[data-k_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mmarch);
                                    const nextCell = document.querySelector(`[data-k_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mmarch);
                                    const nextCell = document.querySelector(`[data-k_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mmarch);
                                    const nextCell = document.querySelector(`[data-mo_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mmarch);
                                    const nextCell = document.querySelector(`[data-mo_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mmarch);
                                    const nextCell = document.querySelector(`[data-mo_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mmarch);
                                    const nextCell = document.querySelector(`[data-hist_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mmarch);
                                    const nextCell = document.querySelector(`[data-hist_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mmarch);
                                    const nextCell = document.querySelector(`[data-hist_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mmarch);
                                    const nextCell = document.querySelector(`[data-geor_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mmarch);
                                    const nextCell = document.querySelector(`[data-geor_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mmarch);
                                    const nextCell = document.querySelector(`[data-geor_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mmarch);
                                    const nextCell = document.querySelector(`[data-math_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mmarch);
                                    const nextCell = document.querySelector(`[data-math_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mmarch);
                                    const nextCell = document.querySelector(`[data-math_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mmarch);
                                    const nextCell = document.querySelector(`[data-phy_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mmarch);
                                    const nextCell = document.querySelector(`[data-phy_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mmarch);
                                    const nextCell = document.querySelector(`[data-phy_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mmarch);
                                    const nextCell = document.querySelector(`[data-chem_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mmarch);
                                    const nextCell = document.querySelector(`[data-chem_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mmarch);
                                    const nextCell = document.querySelector(`[data-chem_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mmarch);
                                    const nextCell = document.querySelector(`[data-bio_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mmarch);
                                    const nextCell = document.querySelector(`[data-bio_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mmarch);
                                    const nextCell = document.querySelector(`[data-bio_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mmarch);
                                    const nextCell = document.querySelector(`[data-earth_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mmarch);
                                    const nextCell = document.querySelector(`[data-earth_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mmarch);
                                    const nextCell = document.querySelector(`[data-earth_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mmarch);
                                    const nextCell = document.querySelector(`[data-e_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mmarch);
                                    const nextCell = document.querySelector(`[data-e_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mmarch);
                                    const nextCell = document.querySelector(`[data-e_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mmarch);
                                    const nextCell = document.querySelector(`[data-ict_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mmarch);
                                    const nextCell = document.querySelector(`[data-ict_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mmarch);
                                    const nextCell = document.querySelector(`[data-ict_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mmarch);
                                    const nextCell = document.querySelector(`[data-hom_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mmarch);
                                    const nextCell = document.querySelector(`[data-hom_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mmarch);
                                    const nextCell = document.querySelector(`[data-hom_mmarch="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mmarch);
                                    const nextCell = document.querySelector(`[data-pe_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mmarch);
                                    const nextCell = document.querySelector(`[data-pe_mmarch="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mmarch);
                                    const nextCell = document.querySelector(`[data-pe_mmarch="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mmarch: average,
                                rank_mmarch: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'April-May') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mapma;
                        var rank = d.val().rank_mapma;

                        var k_mapma = d.val().k_mapma;
                        var mo_mapma = d.val().mo_mapma;
                        var hist_mapma = d.val().hist_mapma;
                        var geor_mapma = d.val().geor_mapma;
                        var math_mapma = d.val().math_mapma;
                        var phy_mapma = d.val().phy_mapma;
                        var chem_mapma = d.val().chem_mapma;
                        var bio_mapma = d.val().bio_mapma;
                        var earth_mapma = d.val().earth_mapma;
                        var e_mapma = d.val().e_mapma;
                        var ict_mapma = d.val().ict_mapma;
                        var hom_mapma = d.val().hom_mapma;
                        var pe_mapma = d.val().pe_mapma;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mapma) { k_mapma = 0 };
                        if (!mo_mapma) { mo_mapma = 0 };
                        if (!hist_mapma) { hist_mapma = 0 };
                        if (!geor_mapma) { geor_mapma = 0 };
                        if (!math_mapma) { math_mapma = 0 };
                        if (!phy_mapma) { phy_mapma = 0 };
                        if (!chem_mapma) { chem_mapma = 0 };
                        if (!bio_mapma) { bio_mapma = 0 };
                        if (!earth_mapma) { earth_mapma = 0 };
                        if (!e_mapma) { e_mapma = 0 };
                        if (!ict_mapma) { ict_mapma = 0 };
                        if (!hom_mapma) { hom_mapma = 0 };
                        if (!pe_mapma) { pe_mapma = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mapma) +
                            parseFloat(mo_mapma) +
                            parseFloat(hist_mapma) +
                            parseFloat(geor_mapma) +
                            parseFloat(math_mapma) +
                            parseFloat(phy_mapma) +
                            parseFloat(chem_mapma) +
                            parseFloat(bio_mapma) +
                            parseFloat(earth_mapma) +
                            parseFloat(e_mapma) +
                            parseFloat(ict_mapma) +
                            parseFloat(hom_mapma) +
                            parseFloat(pe_mapma);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mapma,
                            mo_mapma,
                            hist_mapma,
                            geor_mapma,
                            math_mapma,
                            phy_mapma,
                            chem_mapma,
                            bio_mapma,
                            earth_mapma,
                            e_mapma,
                            ict_mapma,
                            hom_mapma,
                            pe_mapma,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mapma="${N0}" id="${noSp}k_mapma">${k_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mapma="${N0}" id="${noSp}mo_mapma">${mo_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mapma="${N0}" id="${noSp}hist_mapma">${hist_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mapma="${N0}" id="${noSp}geor_mapma">${geor_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mapma="${N0}" id="${noSp}math_mapma">${math_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mapma="${N0}" id="${noSp}phy_mapma">${phy_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mapma="${N0}" id="${noSp}chem_mapma">${chem_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mapma="${N0}" id="${noSp}bio_mapma">${bio_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mapma="${N0}" id="${noSp}earth_mapma">${earth_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mapma="${N0}" id="${noSp}e_mapma">${e_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mapma="${N0}" id="${noSp}ict_mapma">${ict_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mapma="${N0}" id="${noSp}hom_mapma">${hom_mapma}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mapma="${N0}" id="${noSp}pe_mapma">${pe_mapma}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mapma: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mapma`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mapma`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mapma: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mapma);
                                    const nextCell = document.querySelector(`[data-k_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mapma);
                                    const nextCell = document.querySelector(`[data-k_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mapma);
                                    const nextCell = document.querySelector(`[data-k_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mapma);
                                    const nextCell = document.querySelector(`[data-mo_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mapma);
                                    const nextCell = document.querySelector(`[data-mo_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mapma);
                                    const nextCell = document.querySelector(`[data-mo_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mapma);
                                    const nextCell = document.querySelector(`[data-hist_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mapma);
                                    const nextCell = document.querySelector(`[data-hist_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mapma);
                                    const nextCell = document.querySelector(`[data-hist_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mapma);
                                    const nextCell = document.querySelector(`[data-geor_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mapma);
                                    const nextCell = document.querySelector(`[data-geor_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mapma);
                                    const nextCell = document.querySelector(`[data-geor_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mapma);
                                    const nextCell = document.querySelector(`[data-math_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mapma);
                                    const nextCell = document.querySelector(`[data-math_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mapma);
                                    const nextCell = document.querySelector(`[data-math_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mapma);
                                    const nextCell = document.querySelector(`[data-phy_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mapma);
                                    const nextCell = document.querySelector(`[data-phy_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mapma);
                                    const nextCell = document.querySelector(`[data-phy_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mapma);
                                    const nextCell = document.querySelector(`[data-chem_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mapma);
                                    const nextCell = document.querySelector(`[data-chem_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mapma);
                                    const nextCell = document.querySelector(`[data-chem_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mapma);
                                    const nextCell = document.querySelector(`[data-bio_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mapma);
                                    const nextCell = document.querySelector(`[data-bio_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mapma);
                                    const nextCell = document.querySelector(`[data-bio_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mapma);
                                    const nextCell = document.querySelector(`[data-earth_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mapma);
                                    const nextCell = document.querySelector(`[data-earth_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mapma);
                                    const nextCell = document.querySelector(`[data-earth_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mapma);
                                    const nextCell = document.querySelector(`[data-e_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mapma);
                                    const nextCell = document.querySelector(`[data-e_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mapma);
                                    const nextCell = document.querySelector(`[data-e_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mapma);
                                    const nextCell = document.querySelector(`[data-ict_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mapma);
                                    const nextCell = document.querySelector(`[data-ict_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mapma);
                                    const nextCell = document.querySelector(`[data-ict_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mapma);
                                    const nextCell = document.querySelector(`[data-hom_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mapma);
                                    const nextCell = document.querySelector(`[data-hom_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mapma);
                                    const nextCell = document.querySelector(`[data-hom_mapma="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mapma);
                                    const nextCell = document.querySelector(`[data-pe_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mapma);
                                    const nextCell = document.querySelector(`[data-pe_mapma="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mapma);
                                    const nextCell = document.querySelector(`[data-pe_mapma="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mapma: average,
                                rank_mapma: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'June') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mjun;
                        var rank = d.val().rank_mjun;

                        var k_mjun = d.val().k_mjun;
                        var mo_mjun = d.val().mo_mjun;
                        var hist_mjun = d.val().hist_mjun;
                        var geor_mjun = d.val().geor_mjun;
                        var math_mjun = d.val().math_mjun;
                        var phy_mjun = d.val().phy_mjun;
                        var chem_mjun = d.val().chem_mjun;
                        var bio_mjun = d.val().bio_mjun;
                        var earth_mjun = d.val().earth_mjun;
                        var e_mjun = d.val().e_mjun;
                        var ict_mjun = d.val().ict_mjun;
                        var hom_mjun = d.val().hom_mjun;
                        var pe_mjun = d.val().pe_mjun;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mjun) { k_mjun = 0 };
                        if (!mo_mjun) { mo_mjun = 0 };
                        if (!hist_mjun) { hist_mjun = 0 };
                        if (!geor_mjun) { geor_mjun = 0 };
                        if (!math_mjun) { math_mjun = 0 };
                        if (!phy_mjun) { phy_mjun = 0 };
                        if (!chem_mjun) { chem_mjun = 0 };
                        if (!bio_mjun) { bio_mjun = 0 };
                        if (!earth_mjun) { earth_mjun = 0 };
                        if (!e_mjun) { e_mjun = 0 };
                        if (!ict_mjun) { ict_mjun = 0 };
                        if (!hom_mjun) { hom_mjun = 0 };
                        if (!pe_mjun) { pe_mjun = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mjun) +
                            parseFloat(mo_mjun) +
                            parseFloat(hist_mjun) +
                            parseFloat(geor_mjun) +
                            parseFloat(math_mjun) +
                            parseFloat(phy_mjun) +
                            parseFloat(chem_mjun) +
                            parseFloat(bio_mjun) +
                            parseFloat(earth_mjun) +
                            parseFloat(e_mjun) +
                            parseFloat(ict_mjun) +
                            parseFloat(hom_mjun) +
                            parseFloat(pe_mjun);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mjun,
                            mo_mjun,
                            hist_mjun,
                            geor_mjun,
                            math_mjun,
                            phy_mjun,
                            chem_mjun,
                            bio_mjun,
                            earth_mjun,
                            e_mjun,
                            ict_mjun,
                            hom_mjun,
                            pe_mjun,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mjun="${N0}" id="${noSp}k_mjun">${k_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mjun="${N0}" id="${noSp}mo_mjun">${mo_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mjun="${N0}" id="${noSp}hist_mjun">${hist_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mjun="${N0}" id="${noSp}geor_mjun">${geor_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mjun="${N0}" id="${noSp}math_mjun">${math_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mjun="${N0}" id="${noSp}phy_mjun">${phy_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mjun="${N0}" id="${noSp}chem_mjun">${chem_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mjun="${N0}" id="${noSp}bio_mjun">${bio_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mjun="${N0}" id="${noSp}earth_mjun">${earth_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mjun="${N0}" id="${noSp}e_mjun">${e_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mjun="${N0}" id="${noSp}ict_mjun">${ict_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mjun="${N0}" id="${noSp}hom_mjun">${hom_mjun}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mjun="${N0}" id="${noSp}pe_mjun">${pe_mjun}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mjun: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mjun`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mjun`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mjun: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mjun);
                                    const nextCell = document.querySelector(`[data-k_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mjun);
                                    const nextCell = document.querySelector(`[data-k_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mjun);
                                    const nextCell = document.querySelector(`[data-k_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjun);
                                    const nextCell = document.querySelector(`[data-mo_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjun);
                                    const nextCell = document.querySelector(`[data-mo_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjun);
                                    const nextCell = document.querySelector(`[data-mo_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjun);
                                    const nextCell = document.querySelector(`[data-hist_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjun);
                                    const nextCell = document.querySelector(`[data-hist_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjun);
                                    const nextCell = document.querySelector(`[data-hist_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjun);
                                    const nextCell = document.querySelector(`[data-geor_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjun);
                                    const nextCell = document.querySelector(`[data-geor_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjun);
                                    const nextCell = document.querySelector(`[data-geor_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjun);
                                    const nextCell = document.querySelector(`[data-math_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjun);
                                    const nextCell = document.querySelector(`[data-math_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjun);
                                    const nextCell = document.querySelector(`[data-math_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjun);
                                    const nextCell = document.querySelector(`[data-phy_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjun);
                                    const nextCell = document.querySelector(`[data-phy_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjun);
                                    const nextCell = document.querySelector(`[data-phy_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjun);
                                    const nextCell = document.querySelector(`[data-chem_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjun);
                                    const nextCell = document.querySelector(`[data-chem_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjun);
                                    const nextCell = document.querySelector(`[data-chem_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjun);
                                    const nextCell = document.querySelector(`[data-bio_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjun);
                                    const nextCell = document.querySelector(`[data-bio_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjun);
                                    const nextCell = document.querySelector(`[data-bio_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjun);
                                    const nextCell = document.querySelector(`[data-earth_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjun);
                                    const nextCell = document.querySelector(`[data-earth_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjun);
                                    const nextCell = document.querySelector(`[data-earth_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjun);
                                    const nextCell = document.querySelector(`[data-e_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjun);
                                    const nextCell = document.querySelector(`[data-e_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjun);
                                    const nextCell = document.querySelector(`[data-e_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjun);
                                    const nextCell = document.querySelector(`[data-ict_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjun);
                                    const nextCell = document.querySelector(`[data-ict_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjun);
                                    const nextCell = document.querySelector(`[data-ict_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjun);
                                    const nextCell = document.querySelector(`[data-hom_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjun);
                                    const nextCell = document.querySelector(`[data-hom_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjun);
                                    const nextCell = document.querySelector(`[data-hom_mjun="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjun);
                                    const nextCell = document.querySelector(`[data-pe_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjun);
                                    const nextCell = document.querySelector(`[data-pe_mjun="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjun);
                                    const nextCell = document.querySelector(`[data-pe_mjun="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mjun: average,
                                rank_mjun: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == 'July') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_mjul;
                        var rank = d.val().rank_mjul;

                        var k_mjul = d.val().k_mjul;
                        var mo_mjul = d.val().mo_mjul;
                        var hist_mjul = d.val().hist_mjul;
                        var geor_mjul = d.val().geor_mjul;
                        var math_mjul = d.val().math_mjul;
                        var phy_mjul = d.val().phy_mjul;
                        var chem_mjul = d.val().chem_mjul;
                        var bio_mjul = d.val().bio_mjul;
                        var earth_mjul = d.val().earth_mjul;
                        var e_mjul = d.val().e_mjul;
                        var ict_mjul = d.val().ict_mjul;
                        var hom_mjul = d.val().hom_mjul;
                        var pe_mjul = d.val().pe_mjul;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_mjul) { k_mjul = 0 };
                        if (!mo_mjul) { mo_mjul = 0 };
                        if (!hist_mjul) { hist_mjul = 0 };
                        if (!geor_mjul) { geor_mjul = 0 };
                        if (!math_mjul) { math_mjul = 0 };
                        if (!phy_mjul) { phy_mjul = 0 };
                        if (!chem_mjul) { chem_mjul = 0 };
                        if (!bio_mjul) { bio_mjul = 0 };
                        if (!earth_mjul) { earth_mjul = 0 };
                        if (!e_mjul) { e_mjul = 0 };
                        if (!ict_mjul) { ict_mjul = 0 };
                        if (!hom_mjul) { hom_mjul = 0 };
                        if (!pe_mjul) { pe_mjul = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_mjul) +
                            parseFloat(mo_mjul) +
                            parseFloat(hist_mjul) +
                            parseFloat(geor_mjul) +
                            parseFloat(math_mjul) +
                            parseFloat(phy_mjul) +
                            parseFloat(chem_mjul) +
                            parseFloat(bio_mjul) +
                            parseFloat(earth_mjul) +
                            parseFloat(e_mjul) +
                            parseFloat(ict_mjul) +
                            parseFloat(hom_mjul) +
                            parseFloat(pe_mjul);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_mjul,
                            mo_mjul,
                            hist_mjul,
                            geor_mjul,
                            math_mjul,
                            phy_mjul,
                            chem_mjul,
                            bio_mjul,
                            earth_mjul,
                            e_mjul,
                            ict_mjul,
                            hom_mjul,
                            pe_mjul,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mjul="${N0}" id="${noSp}k_mjul">${k_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mjul="${N0}" id="${noSp}mo_mjul">${mo_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mjul="${N0}" id="${noSp}hist_mjul">${hist_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mjul="${N0}" id="${noSp}geor_mjul">${geor_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mjul="${N0}" id="${noSp}math_mjul">${math_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mjul="${N0}" id="${noSp}phy_mjul">${phy_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mjul="${N0}" id="${noSp}chem_mjul">${chem_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mjul="${N0}" id="${noSp}bio_mjul">${bio_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mjul="${N0}" id="${noSp}earth_mjul">${earth_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mjul="${N0}" id="${noSp}e_mjul">${e_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mjul="${N0}" id="${noSp}ict_mjul">${ict_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mjul="${N0}" id="${noSp}hom_mjul">${hom_mjul}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mjul="${N0}" id="${noSp}pe_mjul">${pe_mjul}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_mjul: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_mjul`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_mjul`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_mjul: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_mjul);
                                    const nextCell = document.querySelector(`[data-k_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mjul);
                                    const nextCell = document.querySelector(`[data-k_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_mjul);
                                    const nextCell = document.querySelector(`[data-k_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjul);
                                    const nextCell = document.querySelector(`[data-mo_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjul);
                                    const nextCell = document.querySelector(`[data-mo_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_mjul);
                                    const nextCell = document.querySelector(`[data-mo_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjul);
                                    const nextCell = document.querySelector(`[data-hist_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjul);
                                    const nextCell = document.querySelector(`[data-hist_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_mjul);
                                    const nextCell = document.querySelector(`[data-hist_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjul);
                                    const nextCell = document.querySelector(`[data-geor_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjul);
                                    const nextCell = document.querySelector(`[data-geor_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_mjul);
                                    const nextCell = document.querySelector(`[data-geor_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjul);
                                    const nextCell = document.querySelector(`[data-math_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjul);
                                    const nextCell = document.querySelector(`[data-math_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_mjul);
                                    const nextCell = document.querySelector(`[data-math_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjul);
                                    const nextCell = document.querySelector(`[data-phy_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjul);
                                    const nextCell = document.querySelector(`[data-phy_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_mjul);
                                    const nextCell = document.querySelector(`[data-phy_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjul);
                                    const nextCell = document.querySelector(`[data-chem_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjul);
                                    const nextCell = document.querySelector(`[data-chem_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_mjul);
                                    const nextCell = document.querySelector(`[data-chem_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjul);
                                    const nextCell = document.querySelector(`[data-bio_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjul);
                                    const nextCell = document.querySelector(`[data-bio_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_mjul);
                                    const nextCell = document.querySelector(`[data-bio_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjul);
                                    const nextCell = document.querySelector(`[data-earth_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjul);
                                    const nextCell = document.querySelector(`[data-earth_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_mjul);
                                    const nextCell = document.querySelector(`[data-earth_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjul);
                                    const nextCell = document.querySelector(`[data-e_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjul);
                                    const nextCell = document.querySelector(`[data-e_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_mjul);
                                    const nextCell = document.querySelector(`[data-e_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjul);
                                    const nextCell = document.querySelector(`[data-ict_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjul);
                                    const nextCell = document.querySelector(`[data-ict_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_mjul);
                                    const nextCell = document.querySelector(`[data-ict_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjul);
                                    const nextCell = document.querySelector(`[data-hom_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjul);
                                    const nextCell = document.querySelector(`[data-hom_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_mjul);
                                    const nextCell = document.querySelector(`[data-hom_mjul="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjul);
                                    const nextCell = document.querySelector(`[data-pe_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjul);
                                    const nextCell = document.querySelector(`[data-pe_mjul="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_mjul);
                                    const nextCell = document.querySelector(`[data-pe_mjul="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_mjul: average,
                                rank_mjul: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == '1st Semester') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_m1semester;
                        var rank = d.val().rank_m1semester;

                        var k_m1semester = d.val().k_m1semester;
                        var mo_m1semester = d.val().mo_m1semester;
                        var hist_m1semester = d.val().hist_m1semester;
                        var geor_m1semester = d.val().geor_m1semester;
                        var math_m1semester = d.val().math_m1semester;
                        var phy_m1semester = d.val().phy_m1semester;
                        var chem_m1semester = d.val().chem_m1semester;
                        var bio_m1semester = d.val().bio_m1semester;
                        var earth_m1semester = d.val().earth_m1semester;
                        var e_m1semester = d.val().e_m1semester;
                        var ict_m1semester = d.val().ict_m1semester;
                        var hom_m1semester = d.val().hom_m1semester;
                        var pe_m1semester = d.val().pe_m1semester;
                        var dic_m1semester = d.val().dic_m1semester;
                        var ke_m1semester = d.val().ke_m1semester;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_m1semester) { k_m1semester = 0 };
                        if (!mo_m1semester) { mo_m1semester = 0 };
                        if (!hist_m1semester) { hist_m1semester = 0 };
                        if (!geor_m1semester) { geor_m1semester = 0 };
                        if (!math_m1semester) { math_m1semester = 0 };
                        if (!phy_m1semester) { phy_m1semester = 0 };
                        if (!chem_m1semester) { chem_m1semester = 0 };
                        if (!bio_m1semester) { bio_m1semester = 0 };
                        if (!earth_m1semester) { earth_m1semester = 0 };
                        if (!e_m1semester) { e_m1semester = 0 };
                        if (!ict_m1semester) { ict_m1semester = 0 };
                        if (!hom_m1semester) { hom_m1semester = 0 };
                        if (!pe_m1semester) { pe_m1semester = 0 };
                        if (!dic_m1semester) { dic_m1semester = 0 };
                        if (!ke_m1semester) { ke_m1semester = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_m1semester) +
                            parseFloat(mo_m1semester) +
                            parseFloat(hist_m1semester) +
                            parseFloat(geor_m1semester) +
                            parseFloat(math_m1semester) +
                            parseFloat(phy_m1semester) +
                            parseFloat(chem_m1semester) +
                            parseFloat(bio_m1semester) +
                            parseFloat(earth_m1semester) +
                            parseFloat(e_m1semester) +
                            parseFloat(ict_m1semester) +
                            parseFloat(hom_m1semester) +
                            parseFloat(dic_m1semester) +
                            parseFloat(ke_m1semester) +
                            parseFloat(pe_m1semester);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_m1semester,
                            mo_m1semester,
                            hist_m1semester,
                            geor_m1semester,
                            math_m1semester,
                            phy_m1semester,
                            chem_m1semester,
                            bio_m1semester,
                            earth_m1semester,
                            e_m1semester,
                            ict_m1semester,
                            hom_m1semester,
                            pe_m1semester,
                            dic_m1semester,
                            ke_m1semester,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my <= 25) {
                                mention = "មធ្យម"
                            } else if (my <= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my <= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សរសេរតាមអាន</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_m1semester="${N0}" id="${noSp}k_m1semester">${k_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-dic_m1semester="${N0}" id="${noSp}dic_m1semester">${dic_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ke_m1semester="${N0}" id="${noSp}ke_m1semester">${ke_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_m1semester="${N0}" id="${noSp}mo_m1semester">${mo_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_m1semester="${N0}" id="${noSp}hist_m1semester">${hist_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_m1semester="${N0}" id="${noSp}geor_m1semester">${geor_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_m1semester="${N0}" id="${noSp}math_m1semester">${math_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_m1semester="${N0}" id="${noSp}phy_m1semester">${phy_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_m1semester="${N0}" id="${noSp}chem_m1semester">${chem_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_m1semester="${N0}" id="${noSp}bio_m1semester">${bio_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_m1semester="${N0}" id="${noSp}earth_m1semester">${earth_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_m1semester="${N0}" id="${noSp}e_m1semester">${e_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_m1semester="${N0}" id="${noSp}ict_m1semester">${ict_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_m1semester="${N0}" id="${noSp}hom_m1semester">${hom_m1semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_m1semester="${N0}" id="${noSp}pe_m1semester">${pe_m1semester}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}dic_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}dic_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            dic_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}ke_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ke_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ke_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_m1semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_m1semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_m1semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_m1semester: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_m1semester);
                                    const nextCell = document.querySelector(`[data-k_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_m1semester);
                                    const nextCell = document.querySelector(`[data-k_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_m1semester);
                                    const nextCell = document.querySelector(`[data-k_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_m1semester);
                                    const nextCell = document.querySelector(`[data-dic_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_m1semester);
                                    const nextCell = document.querySelector(`[data-dic_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_m1semester);
                                    const nextCell = document.querySelector(`[data-dic_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_m1semester);
                                    const nextCell = document.querySelector(`[data-ke_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_m1semester);
                                    const nextCell = document.querySelector(`[data-ke_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_m1semester);
                                    const nextCell = document.querySelector(`[data-ke_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_m1semester);
                                    const nextCell = document.querySelector(`[data-mo_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_m1semester);
                                    const nextCell = document.querySelector(`[data-mo_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_m1semester);
                                    const nextCell = document.querySelector(`[data-mo_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_m1semester);
                                    const nextCell = document.querySelector(`[data-hist_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_m1semester);
                                    const nextCell = document.querySelector(`[data-hist_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_m1semester);
                                    const nextCell = document.querySelector(`[data-hist_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_m1semester);
                                    const nextCell = document.querySelector(`[data-geor_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_m1semester);
                                    const nextCell = document.querySelector(`[data-geor_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_m1semester);
                                    const nextCell = document.querySelector(`[data-geor_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                                    const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                                    const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                                    const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_m1semester);
                                    const nextCell = document.querySelector(`[data-phy_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_m1semester);
                                    const nextCell = document.querySelector(`[data-phy_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_m1semester);
                                    const nextCell = document.querySelector(`[data-phy_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_m1semester);
                                    const nextCell = document.querySelector(`[data-chem_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_m1semester);
                                    const nextCell = document.querySelector(`[data-chem_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_m1semester);
                                    const nextCell = document.querySelector(`[data-chem_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_m1semester);
                                    const nextCell = document.querySelector(`[data-bio_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_m1semester);
                                    const nextCell = document.querySelector(`[data-bio_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_m1semester);
                                    const nextCell = document.querySelector(`[data-bio_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_m1semester);
                                    const nextCell = document.querySelector(`[data-earth_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_m1semester);
                                    const nextCell = document.querySelector(`[data-earth_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_m1semester);
                                    const nextCell = document.querySelector(`[data-earth_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                                    const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                                    const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                                    const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_m1semester);
                                    const nextCell = document.querySelector(`[data-ict_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_m1semester);
                                    const nextCell = document.querySelector(`[data-ict_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_m1semester);
                                    const nextCell = document.querySelector(`[data-ict_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_m1semester);
                                    const nextCell = document.querySelector(`[data-hom_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_m1semester);
                                    const nextCell = document.querySelector(`[data-hom_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_m1semester);
                                    const nextCell = document.querySelector(`[data-hom_m1semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                                    const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                                    const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                                    const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_m1semester: average,
                                rank_m1semester: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

            if (dbMonth == '2nd Semester') {
                if (primary_g_p3.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().average_m2semester;
                        var rank = d.val().rank_m2semester;

                        var k_m2semester = d.val().k_m2semester;
                        var mo_m2semester = d.val().mo_m2semester;
                        var hist_m2semester = d.val().hist_m2semester;
                        var geor_m2semester = d.val().geor_m2semester;
                        var math_m2semester = d.val().math_m2semester;
                        var phy_m2semester = d.val().phy_m2semester;
                        var chem_m2semester = d.val().chem_m2semester;
                        var bio_m2semester = d.val().bio_m2semester;
                        var earth_m2semester = d.val().earth_m2semester;
                        var e_m2semester = d.val().e_m2semester;
                        var ict_m2semester = d.val().ict_m2semester;
                        var hom_m2semester = d.val().hom_m2semester;
                        var pe_m2semester = d.val().pe_m2semester;
                        var dic_m2semester = d.val().dic_m2semester;
                        var ke_m2semester = d.val().ke_m2semester;


                        let noSp = id.replace(/\s+/g, "");

                        if (!k_m2semester) { k_m2semester = 0 };
                        if (!mo_m2semester) { mo_m2semester = 0 };
                        if (!hist_m2semester) { hist_m2semester = 0 };
                        if (!geor_m2semester) { geor_m2semester = 0 };
                        if (!math_m2semester) { math_m2semester = 0 };
                        if (!phy_m2semester) { phy_m2semester = 0 };
                        if (!chem_m2semester) { chem_m2semester = 0 };
                        if (!bio_m2semester) { bio_m2semester = 0 };
                        if (!earth_m2semester) { earth_m2semester = 0 };
                        if (!e_m2semester) { e_m2semester = 0 };
                        if (!ict_m2semester) { ict_m2semester = 0 };
                        if (!hom_m2semester) { hom_m2semester = 0 };
                        if (!pe_m2semester) { pe_m2semester = 0 };
                        if (!dic_m2semester) { dic_m2semester = 0 };
                        if (!ke_m2semester) { ke_m2semester = 0 };

                        //Total all score
                        var total_all_score =
                            parseFloat(k_m2semester) +
                            parseFloat(mo_m2semester) +
                            parseFloat(hist_m2semester) +
                            parseFloat(geor_m2semester) +
                            parseFloat(math_m2semester) +
                            parseFloat(phy_m2semester) +
                            parseFloat(chem_m2semester) +
                            parseFloat(bio_m2semester) +
                            parseFloat(earth_m2semester) +
                            parseFloat(e_m2semester) +
                            parseFloat(ict_m2semester) +
                            parseFloat(hom_m2semester) +
                            parseFloat(dic_m2semester) +
                            parseFloat(ke_m2semester) +
                            parseFloat(pe_m2semester);

                        if (!total_all_score) { total_all_score = "00" }
                        //មធ្យមភាគ
                        var st_average =
                            parseFloat(total_all_score) / dbdivid;
                        st_average = st_average.toFixed(2);

                        student_rank.push({
                            id,
                            user_grade,
                            st_average,
                            total_all_score,
                            gender,
                            k_m2semester,
                            mo_m2semester,
                            hist_m2semester,
                            geor_m2semester,
                            math_m2semester,
                            phy_m2semester,
                            chem_m2semester,
                            bio_m2semester,
                            earth_m2semester,
                            e_m2semester,
                            ict_m2semester,
                            hom_m2semester,
                            pe_m2semester,
                            dic_m2semester,
                            ke_m2semester,

                        })
                        setTimeout(() => {
                            N0++;

                            //Mention average
                            let mention = '';
                            let session = '';
                            var my = parseFloat(average);
                            if (my <= 24.99) {
                                mention = "ខ្សោយ"
                            } else if (my >= 25) {
                                mention = "មធ្យម"
                            } else if (my >= 33) {
                                mention = "ល្អបង្គួរ";
                            } else if (my >= 40) {
                                mention = "ល្អ";
                            }

                            if (my >= 25) {
                                session = "ជាប់"
                            } else {
                                session = "ធ្លាក់"
                            }
                            let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សរសេរតាមអាន</th>
                    <th class="border-dark">តែងសេចក្តី</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                            let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_m2semester="${N0}" id="${noSp}k_m2semester">${k_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-dic_m2semester="${N0}" id="${noSp}dic_m2semester">${dic_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ke_m2semester="${N0}" id="${noSp}ke_m2semester">${ke_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_m2semester="${N0}" id="${noSp}mo_m2semester">${mo_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_m2semester="${N0}" id="${noSp}hist_m2semester">${hist_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_m2semester="${N0}" id="${noSp}geor_m2semester">${geor_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_m2semester="${N0}" id="${noSp}math_m2semester">${math_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_m2semester="${N0}" id="${noSp}phy_m2semester">${phy_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_m2semester="${N0}" id="${noSp}chem_m2semester">${chem_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_m2semester="${N0}" id="${noSp}bio_m2semester">${bio_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_m2semester="${N0}" id="${noSp}earth_m2semester">${earth_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_m2semester="${N0}" id="${noSp}e_m2semester">${e_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_m2semester="${N0}" id="${noSp}ict_m2semester">${ict_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_m2semester="${N0}" id="${noSp}hom_m2semester">${hom_m2semester}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_m2semester="${N0}" id="${noSp}pe_m2semester">${pe_m2semester}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}k_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}k_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            k_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}dic_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}dic_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            dic_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}ke_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ke_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ke_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}mo_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}mo_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            mo_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}hist_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hist_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hist_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}geor_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}geor_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            geor_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}math_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}math_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            math_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}phy_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}phy_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            phy_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}chem_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}chem_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            chem_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}bio_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}bio_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            bio_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}earth_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}earth_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            earth_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}e_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}e_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            e_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}ict_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}ict_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            ict_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}hom_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}hom_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            hom_m2semester: d,
                                        });
                                })
                                document.getElementById(`${noSp}pe_m2semester`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}pe_m2semester`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            pe_m2semester: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.k_m2semester);
                                    const nextCell = document.querySelector(`[data-k_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_m2semester);
                                    const nextCell = document.querySelector(`[data-k_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.k_m2semester);
                                    const nextCell = document.querySelector(`[data-k_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_m2semester);
                                    const nextCell = document.querySelector(`[data-dic_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_m2semester);
                                    const nextCell = document.querySelector(`[data-dic_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.dic_m2semester);
                                    const nextCell = document.querySelector(`[data-dic_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_m2semester);
                                    const nextCell = document.querySelector(`[data-ke_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_m2semester);
                                    const nextCell = document.querySelector(`[data-ke_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ke_m2semester);
                                    const nextCell = document.querySelector(`[data-ke_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_m2semester);
                                    const nextCell = document.querySelector(`[data-mo_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_m2semester);
                                    const nextCell = document.querySelector(`[data-mo_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.mo_m2semester);
                                    const nextCell = document.querySelector(`[data-mo_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_m2semester);
                                    const nextCell = document.querySelector(`[data-hist_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_m2semester);
                                    const nextCell = document.querySelector(`[data-hist_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hist_m2semester);
                                    const nextCell = document.querySelector(`[data-hist_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_m2semester);
                                    const nextCell = document.querySelector(`[data-geor_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_m2semester);
                                    const nextCell = document.querySelector(`[data-geor_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.geor_m2semester);
                                    const nextCell = document.querySelector(`[data-geor_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_m2semester);
                                    const nextCell = document.querySelector(`[data-math_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_m2semester);
                                    const nextCell = document.querySelector(`[data-math_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.math_m2semester);
                                    const nextCell = document.querySelector(`[data-math_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_m2semester);
                                    const nextCell = document.querySelector(`[data-phy_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_m2semester);
                                    const nextCell = document.querySelector(`[data-phy_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.phy_m2semester);
                                    const nextCell = document.querySelector(`[data-phy_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_m2semester);
                                    const nextCell = document.querySelector(`[data-chem_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_m2semester);
                                    const nextCell = document.querySelector(`[data-chem_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.chem_m2semester);
                                    const nextCell = document.querySelector(`[data-chem_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_m2semester);
                                    const nextCell = document.querySelector(`[data-bio_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_m2semester);
                                    const nextCell = document.querySelector(`[data-bio_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.bio_m2semester);
                                    const nextCell = document.querySelector(`[data-bio_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_m2semester);
                                    const nextCell = document.querySelector(`[data-earth_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_m2semester);
                                    const nextCell = document.querySelector(`[data-earth_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.earth_m2semester);
                                    const nextCell = document.querySelector(`[data-earth_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_m2semester);
                                    const nextCell = document.querySelector(`[data-e_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_m2semester);
                                    const nextCell = document.querySelector(`[data-e_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.e_m2semester);
                                    const nextCell = document.querySelector(`[data-e_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_m2semester);
                                    const nextCell = document.querySelector(`[data-ict_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_m2semester);
                                    const nextCell = document.querySelector(`[data-ict_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.ict_m2semester);
                                    const nextCell = document.querySelector(`[data-ict_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_m2semester);
                                    const nextCell = document.querySelector(`[data-hom_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_m2semester);
                                    const nextCell = document.querySelector(`[data-hom_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.hom_m2semester);
                                    const nextCell = document.querySelector(`[data-hom_m2semester="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_m2semester);
                                    const nextCell = document.querySelector(`[data-pe_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_m2semester);
                                    const nextCell = document.querySelector(`[data-pe_m2semester="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.pe_m2semester);
                                    const nextCell = document.querySelector(`[data-pe_m2semester="${currentIndex - 1}"]`);
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
                        if (a.st_average > b.st_average) return -1;
                        if (a.st_average < b.st_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].st_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.st_average === avg

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
                        var total_all_score = student.total_all_score;
                        var average = student.st_average;
                        var rank = student.Rank;
                        if (!total_all_score) {

                            total_all_score = total_all_score.toFixed(2);
                        }

                        num++;

                        //Mention average
                        let mention = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention = "ខ្សោយ"
                        } else if (my <= 25) {
                            mention = "មធ្យម"
                        } else if (my <= 33) {
                            mention = "ល្អបង្គួរ";
                        } else if (my <= 40) {
                            mention = "ល្អ";
                        }

                        let mention_fail = '';
                        var my = parseFloat(average);
                        if (my <= 24.99) {
                            mention_fail = "Poor"
                        } else if (my <= 25) {
                            mention_fail = "Average"
                        } else if (my <= 33) {
                            mention_fail = "Fairly Good";
                        } else if (my <= 40) {
                            mention_fail = "Good";
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
                                average_m2semester: average,
                                rank_m2semester: rank,
                            });
                        let h = `
                <th class="border-dark text_table">ល.រ</th>
                <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                <th class="border-dark text_table">ភេទ</th>
                <th class="border-dark text_table">ពិន្ទុសរុប</th>
                <th class="border-dark text_table">មធ្យមភាគ</th>
                <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                <th class="border-dark text_table">និទ្ទេស</th>
                <th class="border-dark text_table">ផ្សេងៗ</th>
        
                `;
                        let n = `
                <td class="border-dark text-center text_table">${num}</td>
                <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                <td class="border-dark text-center text_table">${new_gender}</td>
                <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                <td class="border-dark text-center text_table fw-bold">${average}</td>
                <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                <td class="border-dark text-center text_table"></td>
                <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
                        table_result.innerHTML += n;
                        show_hearder_result.innerHTML = h;

                    })
                }
            }

        }
    }

}
