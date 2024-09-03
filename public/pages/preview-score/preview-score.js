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
import { app } from './secondary.js'
import { primary } from './primary.js'
import { primarys1r } from './primaryS1r.js'
import { primarys2r } from './primaryS2r.js'
import { highschool } from './highschool.js'
import { annualyear } from './annualyear.js'
import { fourmonths1, fourmonths2 } from './check4months.js'
//User Profile Picture
var user_img = localStorage.getItem('user_url');
var img = $("#user_img");

img.attr("src", user_img);

//User logout account
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
//select textContent auto in the <td>

function selectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

//Get levels/grades/months
$(document).ready(function () {
    var dbLevel = localStorage.getItem('preview_level');
    var dbGrade = localStorage.getItem('preview_grade');
    var dbMonth = localStorage.getItem('preview_month');
    var dbyear = localStorage.getItem('preview_year');
    var dbdivid = localStorage.getItem('preview_divid');

    let new_year_kh = localStorage.getItem('preview_yearkh');

    var sle_l = `
    <option value="បឋមសិក្សា">បឋមសិក្សា</option>
    <option value="អនុវិទ្យាល័យ">អនុវិទ្យាល័យ</option>
    <option value="វិទ្យាល័យ">វិទ្យាល័យ</option>
    `;
    $('#sle_level').append(sle_l);
    $('#sle_level').change(function () {
        var level = $(this).val();
        localStorage.setItem('preview_level', level);
        window.location.reload();
    })
    $('#sle_grade').change(function () {
        var grade = $('#sle_grade').val();
        localStorage.setItem('preview_grade', grade);
        window.location.reload();
    })
    $('#sle_month').change(function () {
        var month = $('#sle_month').val();

        localStorage.setItem('preview_month', month);
        window.location.reload();
    })
    $('#sle_year').change(function (e) {
        var year = $('#sle_year').val();
        var yearkh = e.target.selectedOptions[0].dataset.kh

        localStorage.setItem('preview_year', year);
        localStorage.setItem('preview_yearkh', yearkh);
        window.location.reload();
    })
    $('#sle_divid').change(function () {
        var divid = $('#sle_divid').val();
        localStorage.setItem('preview_divid', divid);
        window.location.reload();
    })
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
    if (dbMonth == '1st Semester Result') { get_month = 'ប្រចាំឆមាសទី១' };
    if (dbMonth == '2nd Semester Result') { get_month = 'ប្រចាំឆមាសទី២' };
    if (dbMonth == 'fourmonths1') { get_month = 'ពិន្ទុ៤ខែឆមាសទី១' };
    if (dbMonth == 'fourmonths2') { get_month = 'ពិន្ទុ៤ខែឆមាសទី២' };
    if (dbMonth == 'Annual Year') { get_month = 'ប្រចាំឆ្នាំ' };


    $('#show_level').html(dbLevel);
    $('#show_grade').html(grade_kh);
    $('#show_month').html(get_month);
    $('#show_year').html(dbyear);
    $('#show_divid').html(dbdivid);
    $('#sle_divid').val(dbdivid);
    //set style css
    $('#show_level, #show_grade, #show_month,#show_year,#show_divid').css({
        color: 'darkblue',
        textDecoration: 'underline',
    });

    //Load Levels
    var all_grade = [];
    firebase
        .database()
        .ref(`/SalaMOM/tools/class/` + dbLevel)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().id;
                var clEn = d.val().clEn;
                all_grade.push(clEn);
                let sle_g = `
                    <option value="${clEn}">${id}</option>
                `;
                $('#sle_grade').append(sle_g);
            })
        })
    //Load Year
    firebase
        .database()
        .ref(`/SalaMOM/tools/years`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var yearEn = d.val().yearEn;
                var yearKh = d.val().yearKh;
                // new_year_kh = yearKh;
                let sle_y = `
                    <option value="${yearEn}" data-kh="${yearKh}">${yearEn}</option>
                `;
                $('#sle_year').append(sle_y);
            })
        })

    let N0 = '';

    //Show data in table
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
    var table = document.getElementById('show_data');
    var show_hearder = document.getElementById('show_hearder');
    var table_print = document.getElementById('show_data_print');
    var show_hearder_print = document.getElementById('show_hearder_print');
    var table_result = document.getElementById('show_data_result');
    var show_hearder_result = document.getElementById('show_hearder_result');

    let student_rank = [];

    let showMonth;
    if (get_month === "ឆមាសទី១") {
        showMonth = "ចំណាត់ថ្នាក់ប្រឡង " + get_month
    }
    if (get_month === "វិច្ឆិកា") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "ធ្នូ") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "មករា") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "កុម្ភៈ") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "មីនា") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "មេសា-ឧសភា") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "មិថុនា") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }
    if (get_month === "កក្កដា") {
        showMonth = "ចំណាត់ថ្នាក់ប្រចាំខែ " + get_month
    }

    if (get_month === "ឆមាសទី២") {
        showMonth = "ចំណាត់ថ្នាក់ប្រឡង " + get_month
    }
    if (get_month === "ប្រចាំឆមាសទី១") {
        showMonth = "ចំណាត់ថ្នាក់ " + get_month
    }
    if (get_month === "ប្រចាំឆមាសទី២") {
        showMonth = "ចំណាត់ថ្នាក់" + get_month
    }
    if (get_month === "ប្រចាំឆមាសទី២") {
        showMonth = "ចំណាត់ថ្នាក់" + get_month
    }
    if (get_month === "ប្រចាំឆ្នាំ") {
        showMonth = "ចំណាត់ថ្នាក់" + get_month
    }


    firebase
        .database()
        .ref(`/SalaMOM/classes/` + `${dbyear}/` + `${grade_en}`)
        .once('value', function (data) {
            fourmonths1(data)
            fourmonths2(data)
            // myData(data)
            // myData2(data)
            app(data)
            primary(data)
            primarys1r(data)
            primarys2r(data)
            highschool(data)
            annualyear(data)

            // data.forEach(function (d) {


            //     //Data for Secondary Class
            //     if (dbLevel == 'អនុវិទ្យាល័យ') {
            //         if (all_grade.includes(dbGrade)) {
            //             // console.log(id, user_grade);

            //         }
            //     }

            //     //Data for Highschool
            //     if (dbLevel == 'វិទ្យាល័យ') {
            //         if (all_grade.includes(dbGrade)) {
            //             // console.log(id, user_grade);

            //         }
            //     }

            // })
        })
    //Show data in table

    //Save to Excel
    function saveToExcelResult(type, fn, dl) {
        var elt = document.getElementById("showData");
        var wb = XLSX.utils.table_to_book(elt, { sheet: `${grade_kh}-${get_month} ` });
        return dl
            ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
            : XLSX.writeFile(wb, fn || `លទ្ធផល/${grade_kh}/ ` + `${get_month}.` + (type || "xlsx"));
    }
    $('#btn_save').click(function () {
        saveToExcelResult();
    })
    //Print Result
    // function printDiv() {
    //     const printContent = document.getElementById('print_result');
    //     const newWindow = window.open();
    //     newWindow.document.write(`
    //     <html>
    //     <head>
    //     <title>លទ្ធផល-${grade_kh} ខែ${get_month}</title>
    //     <style>
    //     @media print {
    //         @page {
    //             size: landscape;
    //             margin-top: 3mm;
    //             margin-right: 4mm;
    //             margin-bottom: 3mm;
    //             margin-left: 4mm;
    //         }
    //         }
    //         @font-face {
    //         font-family: "KhOSSiemreap";
    //         src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1710682946/fonts/01a09003da4063952afa7734f4f393af.ttf");
    //         font-weight: normal
    //         }
    //         * {
    //         font-family: KhOSSiemreap
    //         }
    //         body { 
    //             -webkit-print-color-adjust: exact; } 
    //         table { 
    //             width: 100%;
    //             border-collapse: collapse; } 
    //         th, td { 
    //             border: 1px solid black; 
    //             color: black; 
    //             text-align: center; 
    //             padding:5px }
    //         #show_data_print td:nth-child(2){
    //             text-align: left;
    //             width: 10rem;
    //             padding: 5px;
    //         }
    //     </style>
    //     </head><body>`);
    //     newWindow.document.write(printContent.outerHTML);
    //     newWindow.document.write('</body></html>');
    //     newWindow.document.close();
    //     newWindow.focus();
    //     setTimeout(() => {
    //         newWindow.print();
    //     }, 500);
    //     // newWindow.close();

    // }
    function printDiv() {
        const printContent = document.getElementById('print_result');
        const newWindow = window.open();
        newWindow.document.write(`
        <html>
        <head>
        <title>លទ្ធផល-${grade_kh} ខែ${get_month}</title>
        <style>
        @media print {
            @page {
                margin-top: 3mm;
                margin-right: 4mm;
                margin-bottom: 3mm;
                margin-left: 4mm;
            }
            }
            @font-face {
            font-family: "KhOSSiemreap";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1710682946/fonts/01a09003da4063952afa7734f4f393af.ttf");
            font-weight: normal
            }
            * {
            font-family: KhOSSiemreap;
            font-size: 0.8vw;

            }
            body { 
                -webkit-print-color-adjust: exact; } 
            table { 
                width: 100%;
                border-collapse: collapse; } 
            th, td { 
                border: 1px solid black; 
                color: black; 
                text-align: center; 
                padding:5px }
            #show_data_print td:nth-child(2){
                text-align: left;
                width: 10rem;
                padding: 5px;
            }
        </style>
        </head><body>`);
        newWindow.document.write(printContent.outerHTML);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.focus();
        setTimeout(() => {
            newWindow.print();
        }, 500);
        // newWindow.close();

    }

    function print_result() {
        const printContent = document.getElementById('print_result_all');
        const newWindow = window.open();
        newWindow.document.write(`
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>លទ្ធផល-${grade_kh} ${showMonth}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

        <style>
        @media print {
           @media print {
            @page {
                size: A4;
                margin-top: 3mm;
                margin-right: 4mm;
                margin-bottom: 3mm;
                margin-left: 4mm;
                transform: scale(0.1);
            }
            body {
                transform: scale(0.95); /* Adjust scaling as needed */
            }
        }

        @font-face {
            font-family: "KhOSSiemreap";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1710682946/fonts/01a09003da4063952afa7734f4f393af.ttf");
            font-weight: normal
        }
        @font-face {
            font-family: "kh moul";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1711085952/fonts/kh%20moul.TTF");
            font-weight: normal
        }

        * {
            font-family: KhOSSiemreap
        }
        .pavachana {
            font-family: kh moul
        }
        body {
            -webkit-print-color-adjust: exact;
        }

        table {
            border-collapse: collapse;
            line-height: 1;
            padding: 20dvh;

        }

        th,
        td {
            border: 0px solid black;
            color: black;
            text-align: center;
            padding: 8px;
        }

        #show_data_print td:nth-child(2) {
            text-align: left;
            width: 10vh;
            padding: 20dvh;
        }
        .head_table{
            font-size: 1.6vw;
            line-height: 1;
            padding: 20dvh;
        }
        .text_table{
            font-size: 1.6vw;
            line-height: 1;
            padding: 20dvh;
        }
        .line_limit{
            width: 28vh;
        }
        .line_limit2{
            width: 20vh;
        }
            }
        </style>
        </head>
        <body>
            <div>
        <table class="table table-borderless head_table">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th class="pavachana">ព្រះរាជាណាចក្រកម្ពុជា</th>
                </tr>
                <tr>
                    <th class="text-start">មន្ទីអប់រំយុវជន និង កីឡា រាជធានីភ្នំពេញ</th>
                    <th></th>
                    <th class="pavachana">ជាតិ សាសនា ព្រះមហាក្សត្រ</th>
                </tr>
                <tr>
                    <th class="text-start line_limit">ការិយាល័យអប់រំយុវជន និងកីឡានៃរដ្ឋបាលខណ្ឌសែនសុខ</th>
                    <th></th>
                    <th><img src="https://res.cloudinary.com/salamomschool/image/upload/v1711107157/fonts/takteng.png.png" style="width: 10vh;" alt="image"></th>
                </tr>
                <tr>
                    <th class="text-start">សាលាបឋមសិក្សា៖ មុំ</th>
                    <th class="line_limit2">${showMonth}</th>
                    <th></th>
                </tr>
                <tr>
                    <th class="text-start">ថ្នាក់ទី ${new_grade}</th>
                    <th>ឆ្នាំសិក្សា ${new_year_kh}</th>
                </tr>
            </thead>
            </table>
        </div>

        `);
        newWindow.document.write(printContent.outerHTML);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.focus();
        setTimeout(() => {
            newWindow.print();
        }, 1000);
        // newWindow.close();

    }
    $('#btn_print').click(function () {
        printDiv();
    })
    $('#btn_print_result').click(function () {
        print_result();
    })
    //Get total students
    var all_st = '';
    setTimeout(() => {
        var ss = document.getElementById("result_all");
        var tbodyRowCount = ss.tBodies[0].rows.length;

        tbodyRowCount = tbodyRowCount.toString().padStart(2, "0");

        all_st = tbodyRowCount;
    }, 2500);
    setTimeout(() => {
        var show = document.getElementById("st_all");
        var failSM = 0;
        var failSF = 0;
        var num_male = 0;
        var num_female = 0;

        var failM = "PoorM";
        var failF = "PoorF";
        var male = 'ប';
        var female = 'ស';
        //Fail male
        $("#show_data_result td").each(function (ind, obj) {
            if (failM == $.trim($(obj).text())) failSM++;
        });
        //Fail Female
        $("#show_data_result td").each(function (ind, obj) {
            if (failF == $.trim($(obj).text())) failSF++;
        });
        //Total male
        $("#show_data_result td").each(function (ind, obj) {
            if (male == $.trim($(obj).text())) num_male++;
        });
        //Total female
        $("#show_data_result td").each(function (ind, obj) {
            if (female == $.trim($(obj).text())) num_female++;
        });
        failSM = failSM.toString().padStart(2, '0')
        failSF = failSF.toString().padStart(2, '0')
        num_male = num_male.toString().padStart(2, '0')
        num_female = num_female.toString().padStart(2, '0')

        //Total Fail students
        let total_fail_st = parseFloat(failSM) + parseFloat(failSF);
        total_fail_st = total_fail_st.toString().padStart(2, '0')
        //Total Pass students
        var total_pass_st = parseFloat(all_st) - parseFloat(total_fail_st)
        total_pass_st = total_pass_st.toString().padStart(2, '0')
        //Total Pass female students
        var total_pass_female = parseFloat(num_female) - parseFloat(failSF);
        total_pass_female = total_pass_female.toString().padStart(2, '0')

        //Khmer total female
        function convertToKhmerNumeral(number) {
            if (number < 0) {
                return "-" + convertToKhmerNumeral(Math.abs(number)); // Handle negative numbers
            }
            const khmerDigits = {
                0: "០",
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩"
            };

            if (number < 10) {
                return khmerDigits[number]; // Use dictionary for single digits
            } else {
                const tensDigit = Math.floor(number / 10);
                const onesDigit = number % 10;
                return khmerDigits[tensDigit] + khmerDigits[onesDigit]; // Combine digits
            }
        }

        let set_num_total_female = parseFloat(num_female);
        let num_kh_total_female = convertToKhmerNumeral(set_num_total_female);
        num_kh_total_female = num_kh_total_female.toString().padStart(2, '0')
        num_female = num_kh_total_female;

        let set_fail_st = parseFloat(total_fail_st);
        let num_kh_fail_st = convertToKhmerNumeral(set_fail_st);
        num_kh_fail_st = num_kh_fail_st.toString().padStart(2, '0')
        total_fail_st = num_kh_fail_st;

        let set_fail_female = parseFloat(failSF);
        let num_kh_fail_female = convertToKhmerNumeral(set_fail_female);
        num_kh_fail_female = num_kh_fail_female.toString().padStart(2, '0')
        failSF = num_kh_fail_female;

        let set_total_pass_female = parseFloat(total_pass_st);
        let num_kh_total_pass_st = convertToKhmerNumeral(set_total_pass_female);
        num_kh_total_pass_st = num_kh_total_pass_st.toString().padStart(2, '0')
        total_pass_st = num_kh_total_pass_st;

        let set_total_pas_female = parseFloat(total_pass_female);
        let num_kh_total_pass_female = convertToKhmerNumeral(set_total_pas_female);
        num_kh_total_pass_female = num_kh_total_pass_female.toString().padStart(2, '0')
        total_pass_female = num_kh_total_pass_female;

        let set_total_all = parseFloat(all_st);
        let num_kh_total_all = convertToKhmerNumeral(set_total_all);
        num_kh_total_all = num_kh_total_all.toString().padStart(2, '0')
        all_st = num_kh_total_all;
        show.innerHTML = all_st;

        $('#st_female').html(num_female)
        $('#total_fail_st').html(total_fail_st)
        $('#total_fail_female').html(failSF)
        $('#st_pass').html(total_pass_st)
        $('#st_pass_female').html(total_pass_female)

        $('#total_pass_all').html(all_st)
        $('#total_female').html(num_female)
        $('#total_pass_st').html(total_pass_st)
        $('#total_pass_female').html(total_pass_female)
        $('#total_fail_std').html(total_fail_st)
        $('#total_fail_female_st').html(failSF)
    }, 3000);

    //Set date for printing
    $('#sle_date').on("change", function () {
        var d = $(this).val()
        function convertToKhmerNumeral(number) {
            if (number < 0) {
                return "-" + convertToKhmerNumeral(Math.abs(number)); // Handle negative numbers
            }
            const khmerDigits = {
                0: "០",
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩"
            };

            if (number < 10) {
                return khmerDigits[number]; // Use dictionary for single digits
            } else {
                const tensDigit = Math.floor(number / 10);
                const onesDigit = number % 10;
                return khmerDigits[tensDigit] + khmerDigits[onesDigit]; // Combine digits
            }
        }

        function convertYear(number) {
            if (number < 0) {
                return "-" + convertYear(Math.abs(number)); // Handle negative numbers
            }

            const khmerDigits = {
                0: "០",
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩"
            };

            // Handle numbers of any digit length:
            let result = "";
            while (number > 0) {
                const digit = number % 10;
                result = khmerDigits[digit] + result; // Append digits in reverse order
                number = Math.floor(number / 10);
            }

            return result;
        }
        if (d) {
            let date = new Date(d);
            let year = date.getFullYear();
            let day = date.getDate();
            let month = date.getMonth();

            if (month == 0) { month = 'មករា' };
            if (month == 1) { month = 'កុម្ភៈ' };
            if (month == 2) { month = 'មីនា' };
            if (month == 3) { month = 'មេសា' };
            if (month == 4) { month = 'ឧសភា' };
            if (month == 5) { month = 'មិថុនា' };
            if (month == 6) { month = 'កក្កដា' };
            if (month == 7) { month = 'សីហា' };
            if (month == 8) { month = 'កញ្ញា' };
            if (month == 9) { month = 'តុលា' };
            if (month == 10) { month = 'វិច្ឆិកា' };
            if (month == 11) { month = 'ធ្នូ' };
            let get_day_kh = convertToKhmerNumeral(day);
            get_day_kh = get_day_kh.toString().padStart(2, '0')
            let get_year_kh = convertYear(year);
            localStorage.setItem('get_day_kh', get_day_kh);
            localStorage.setItem('month', month);
            localStorage.setItem('get_year_kh', get_year_kh);
            $('#get_date_num').html(get_day_kh);
            $('#get_month').html(month);
            $('#get_year').html(get_year_kh);


        }

    });
    let d1 = localStorage.getItem('get_day_kh');
    let d2 = localStorage.getItem('month');
    let d3 = localStorage.getItem('get_year_kh');

    if (d1) {
        $('#get_date_num').html(d1);
    }
    if (d2) {
        $('#get_month').html(d2);
    }
    if (d3) {
        $('#get_year').html(d3);
    }
})

const searchInput = document.getElementById('inputsearchInput');
const tbody1 = document.getElementById('showData');
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
