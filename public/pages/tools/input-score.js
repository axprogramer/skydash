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
import { highschoolInput } from "./input-highschool.js";
import { primaryInput } from "./input-primary.js";
import { secondaryInput } from "./input-secondary.js";

var user_login_name = localStorage.getItem('setName');
var user_login_subs = localStorage.getItem('setSubs');
var user_login_year = localStorage.getItem('setYear');
var user_month = localStorage.getItem('input_month');
var user_url = localStorage.getItem('user_url');
var user_img = document.getElementById('user_img');
if (user_url) {
    user_img.src = user_url;
}
var get_subs = localStorage.getItem('set_to_get_subs');
//Convert En to KH
var month = '';
var show_month = '';

$(document).ready(function () {
    const stringArray = user_login_subs.split(" ").filter(item => item);
    var sle_grade_subs = document.getElementById('sle_grade');
    var sle_class_subs = document.getElementById('sle_subs');
    var sle_month = document.getElementById('sle_month');
    //Show Class with subjects
    for (let i = 0; i < stringArray.length; i++) {
        var sb = stringArray[i];
        sle_grade_subs.innerHTML += `
        
        <option value="${sb}">${sb}</option>
        `;
    }
    sle_grade_subs.addEventListener('change', () => {
        var data = sle_grade_subs.value;
        localStorage.setItem('set_to_get_subs', data);
        window.location.reload();
    })
    // if (get_subs) {
    //     const [subject] = get_subs.substring(4, 10).split(" ");
    //     let sub = '';
    //     if (subject == 'PE') { sub = 'កីឡា' }
    //     if (subject == 'E') { sub = 'ភាសាអង់គ្លេស' }
    //     if (subject == 'ICT') { sub = 'កុំព្យូទ័រ' }
    //     if (subject == 'M') { sub = 'គណិតវិទ្យា' }
    //     if (subject == 'C') { sub = 'គីមីវិទ្យា' }
    //     if (subject == 'Ho') { sub = 'គេហៈ' }
    //     if (subject == 'Bio') { sub = 'ជីវៈវិទ្យា' }
    //     if (subject == 'H') { sub = 'ប្រវត្តិវិទ្យា' }
    //     if (subject == 'ES') { sub = 'ផែនដីវិទ្យា' }
    //     if (subject == 'G') { sub = 'ភូមិវិទ្យា' }
    //     if (subject == 'P') { sub = 'រូបវិទ្យា' }
    //     if (subject == 'Ac') { sub = 'សកម្មភាព' }
    //     if (subject == 'Bi') { sub = 'សិក្សាសីលធម៌' }
    //     if (subject == 'Mo') { sub = 'សីលធម៌-ពលរដ្ឋ' }
    //     if (subject == 'Eco') { sub = 'សេដ្ឋកិច្ច' }
    //     if (subject == 'K') { sub = 'ភាសាខ្មែរ' }
    //     if (subject == 'Sci') { sub = 'វិទ្យាសាស្ត្រ' }
    //     if (subject == 'Soc') { sub = 'សិក្សាសង្គម' }

    //     sle_class_subs.innerHTML += `
    //     <option value="${subject}">${sub}</option>
    //     `;
    // }
    //Active and pending month
    firebase
        .database()
        .ref(`/SalaMOM/tools/permitted`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().id;
                var show_add_month = d.val().show_add_month;
                var status = d.val().status;

                if (show_add_month == 'October') { month = 'តុលា' };
                if (show_add_month == 'November') { month = 'វិច្ឆិកា' };
                if (show_add_month == 'December') { month = 'ធ្នូ' };
                if (show_add_month == 'January') { month = 'មករា' };
                if (show_add_month == 'February') { month = 'កុម្ភៈ' };
                if (show_add_month == 'March') { month = 'មីនា' };
                if (show_add_month == 'April-May') { month = 'មេសា-ឧសភា' };
                if (show_add_month == 'June') { month = 'មិថុនា' };
                if (show_add_month == 'July') { month = 'កក្កដា' };
                if (show_add_month == '1st Semester') { month = 'ឆមាសទី១' };
                if (show_add_month == '2nd Semester') { month = 'ឆមាសទី២' };
                let t = `
                <option value='${show_add_month}'>${month}</option>
                `;
                if (show_add_month == 'October') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'November') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'December') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'January') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'February') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'March') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'April-May') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'June') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == 'July') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == '1st Semester') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }
                if (show_add_month == '2nd Semester') {
                    if (status == 'active') {
                        sle_month.innerHTML += t;

                    }
                }


            })
        })
    //Show month in select and in the header of table
    if (get_subs) {
        const [subject] = get_subs.substring(4, 10).split(" ");
        let sub = '';
        if (subject == 'PE') { sub = 'កីឡា' }
        if (subject == 'E') { sub = 'ភាសាអង់គ្លេស' }
        if (subject == 'ICT') { sub = 'កុំព្យូទ័រ' }
        if (subject == 'M') { sub = 'គណិតវិទ្យា' }
        if (subject == 'C') { sub = 'គីមីវិទ្យា' }
        if (subject == 'Ho') { sub = 'គេហៈ' }
        if (subject == 'Bio') { sub = 'ជីវៈវិទ្យា' }
        if (subject == 'H') { sub = 'ប្រវត្តិវិទ្យា' }
        if (subject == 'ES') { sub = 'ផែនដីវិទ្យា' }
        if (subject == 'G') { sub = 'ភូមិវិទ្យា' }
        if (subject == 'P') { sub = 'រូបវិទ្យា' }
        if (subject == 'Ac') { sub = 'សកម្មភាព' }
        if (subject == 'Bi') { sub = 'សិក្សាសីលធម៌' }
        if (subject == 'Mo') { sub = 'សីលធម៌-ពលរដ្ឋ' }
        if (subject == 'Eco') { sub = 'សេដ្ឋកិច្ច' }
        if (subject == 'K') { sub = 'ភាសាខ្មែរ' }
        if (subject == 'Sci') { sub = 'វិទ្យាសាស្ត្រ' }
        if (subject == 'Soc') { sub = 'សិក្សាសង្គម' }
        document.getElementById('sub_title').innerHTML = ` (${sub})`

    }
    var show_data = localStorage.getItem('input_month');

    if (show_data == 'October') { show_month = 'តុលា' };
    if (show_data == 'November') { show_month = 'វិច្ឆិកា' };
    if (show_data == 'December') { show_month = 'ធ្នូ' };
    if (show_data == 'January') { show_month = 'មករា' };
    if (show_data == 'February') { show_month = 'កុម្ភៈ' };
    if (show_data == 'March') { show_month = 'មីនា' };
    if (show_data == 'April-May') { show_month = 'មេសា-ឧសភា' };
    if (show_data == 'June') { show_month = 'មិថុនា' };
    if (show_data == 'July') { show_month = 'កក្កដា' };
    if (show_data == '1st Semester') { show_month = 'ឆមាសទី១' };
    if (show_data == '2nd Semester') { show_month = 'ឆមាសទី២' };

    if (['1st Semester', '2nd Semester'].includes(show_data)) {
        $("#month_title").html(`សម្រាប់៖` + `${show_month}`)

    } else {

        $("#month_title").html(`ខែ៖` + `${show_month}`)
    }
    $("#sle_month").change(function () {
        var d = $(this).val();
        console.log(d);
        localStorage.setItem("input_month", d);
        window.location.reload();
    });

})


//select textContent auto in the <td>
function selectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

//Input score
var N0 = '';
$(document).ready(function () {
    var table = document.getElementById('show_hearder')
    var tbody_data = document.getElementById('show_footer')
    if (get_subs) {
        var [s] = get_subs.substring(0, 3).split(" ");
        var [sb] = get_subs.substring(4, 10).split(" ");
    }
    let grade = '';
    let grade_kh = '';
    //Grade in EN
    if (s == '01A') { grade = '1A' };
    if (s == '02A') { grade = '2A' };
    if (s == '03A') { grade = '3A' };
    if (s == '04A') { grade = '4A' };
    if (s == '05A') { grade = '5A' };
    if (s == '06A') { grade = '6A' };
    if (s == '07A') { grade = '7A' };
    if (s == '08A') { grade = '8A' };
    if (s == '09A') { grade = '9A' };
    if (s == '10A') { grade = '10A' };
    if (s == '11A') { grade = '11A' };
    if (s == '12A') { grade = '12A' };

    if (s == '01B') { grade = '1B' };
    if (s == '02B') { grade = '2B' };
    if (s == '03B') { grade = '3B' };
    if (s == '04B') { grade = '4B' };
    if (s == '05B') { grade = '5B' };
    if (s == '06B') { grade = '6B' };
    if (s == '07B') { grade = '7B' };
    if (s == '08B') { grade = '8B' };
    if (s == '09B') { grade = '9B' };
    if (s == '10B') { grade = '10B' };
    if (s == '11B') { grade = '11B' };
    if (s == '12B') { grade = '12B' };

    if (s == '01C') { grade = '1C' };
    if (s == '02C') { grade = '2C' };
    if (s == '03C') { grade = '3C' };
    if (s == '04C') { grade = '4C' };
    if (s == '05C') { grade = '5C' };
    if (s == '06C') { grade = '6C' };
    if (s == '07C') { grade = '7C' };
    if (s == '08C') { grade = '8C' };
    if (s == '09C') { grade = '9C' };
    if (s == '10C') { grade = '10C' };
    if (s == '10C') { grade = '10C' };
    if (s == '11C') { grade = '11C' };
    if (s == '12C') { grade = '12C' };
    //Grade in Kh
    if (grade == '1A') { grade_kh = '១ក' };
    if (grade == '2A') { grade_kh = '២ក' };
    if (grade == '3A') { grade_kh = '៣ក' };
    if (grade == '4A') { grade_kh = '៤ក' };
    if (grade == '5A') { grade_kh = '៥ក' };
    if (grade == '6A') { grade_kh = '៦ក' };
    if (grade == '7A') { grade_kh = '៧ក' };
    if (grade == '8A') { grade_kh = '៨ក' };
    if (grade == '9A') { grade_kh = '៩ក' };
    if (grade == '10A') { grade_kh = '១០ក' };
    if (grade == '11A') { grade_kh = '១១ក' };
    if (grade == '12A') { grade_kh = '១២ក' };

    if (grade == '1B') { grade_kh = '១ខ' };
    if (grade == '2B') { grade_kh = '២ខ' };
    if (grade == '3B') { grade_kh = '៣ខ' };
    if (grade == '4B') { grade_kh = '៤ខ' };
    if (grade == '5B') { grade_kh = '៥ខ' };
    if (grade == '6B') { grade_kh = '៦ខ' };
    if (grade == '7B') { grade_kh = '៧ខ' };
    if (grade == '8B') { grade_kh = '៨ខ' };
    if (grade == '9B') { grade_kh = '៩ខ' };
    if (grade == '10B') { grade_kh = '១០ខ' };
    if (grade == '10C') { grade_kh = '១០គ' };
    if (grade == '11B') { grade_kh = '១១ខ' };
    if (grade == '12B') { grade_kh = '១២ខ' };

    if (grade == '1C') { grade_kh = '១គ' };
    if (grade == '2C') { grade_kh = '២គ' };
    if (grade == '3C') { grade_kh = '៣គ' };
    if (grade == '4C') { grade_kh = '៤គ' };
    if (grade == '5C') { grade_kh = '៥គ' };
    if (grade == '6C') { grade_kh = '៦គ' };
    if (grade == '7C') { grade_kh = '៧គ' };
    if (grade == '8C') { grade_kh = '៨គ' };
    if (grade == '9C') { grade_kh = '៩គ' };
    if (grade == '10C') { grade_kh = '១០គ' };
    if (grade == '11C') { grade_kh = '១១គ' };
    if (grade == '12C') { grade_kh = '១២គ' };

    document.getElementById('grade_title').innerHTML = grade_kh;
    let sub = '';
    if (sb == 'PE') { sub = 'កីឡា' }
    if (sb == 'E') { sub = 'ភាសាអង់គ្លេស' }
    if (sb == 'ICT') { sub = 'កុំព្យូទ័រ' }
    if (sb == 'M') { sub = 'គណិតវិទ្យា' }
    if (sb == 'C') { sub = 'គីមីវិទ្យា' }
    if (sb == 'Ho') { sub = 'គេហៈ' }
    if (sb == 'Bio') { sub = 'ជីវៈវិទ្យា' }
    if (sb == 'H') { sub = 'ប្រវត្តិវិទ្យា' }
    if (sb == 'ES') { sub = 'ផែនដីវិទ្យា' }
    if (sb == 'G') { sub = 'ភូមិវិទ្យា' }
    if (sb == 'P') { sub = 'រូបវិទ្យា' }
    if (sb == 'Ac') { sub = 'សកម្មភាព' }
    if (sb == 'Bi') { sub = 'សិក្សាសីលធម៌' }
    if (sb == 'Mo') { sub = 'សីលធម៌-ពលរដ្ឋ' }
    if (sb == 'Eco') { sub = 'សេដ្ឋកិច្ច' }
    if (sb == 'K') { sub = 'អក្សរសាស្ត្រខ្មែរ' }
    if (sb == 'Sci') { sub = 'វិទ្យាសាស្ត្រ' }
    if (sb == 'Soc') { sub = 'សិក្សាសង្គម' }

    //បញ្ចូលពិន្ទុសម្រាប់បឋមសិក្សា ថ្នាក់ទី១ដល់ទី៦

    firebase
        .database()
        .ref(`SalaMOM/tools/class/បឋមសិក្សា`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var primary_grade = d.val().clEn;
                if (primary_grade.includes(s)) {
                    primaryInput();
                }
            })
        })
    firebase
        .database()
        .ref(`SalaMOM/tools/class/អនុវិទ្យាល័យ`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var secondary_grade = d.val().clEn;

                if (secondary_grade.includes(s)) {
                    secondaryInput()
                }

            })
        })
    firebase
        .database()
        .ref(`SalaMOM/tools/class/វិទ្យាល័យ`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var highschool_grade = d.val().clEn;

                if (highschool_grade.includes(s)) {
                    highschoolInput()
                }

            })
        })

})


