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
let all_kh_grade = [];
let n0 = '';
let num = '';
$(document).ready(function () {
    
    //Set select value
    document.getElementById('sle_lvl').addEventListener('change', () => {
        var d = document.getElementById('sle_lvl').value;
        localStorage.setItem('select_lvl', d);
        window.location.reload();
    })
    //Set year value
    var sle_year = $('#sle_year');
    firebase
        .database()
        .ref(`/SalaMOM/tools/years/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var yearEn = d.val().yearEn;
                var yearKh = d.val().yearKh;
                sle_year.append($("<option>").val(yearEn).text(yearKh));
                // let t = `
                // <option value="${yearEn}">${yearKh}</option>
                // `
                // sle_year.innerHTML += t;
            })
        })
    sle_year.change(function () {
        var d = $(this).val();
        localStorage.setItem('select_year', d);
        window.location.reload();
    })
    // sle_year.addEventListener('change', () => {
    // })
    let dbYear = localStorage.getItem('select_year');
    let sle_lvl = localStorage.getItem('select_lvl');
    //Get class
    if (sle_lvl) {
        if (sle_lvl == 'primary_class') {
            firebase
                .database()
                .ref(`/SalaMOM/tools/class/បឋមសិក្សា/`)
                .once('value', function (data1) {
                    data1.forEach(d => {
                        var id = d.val().clEn;
                        var g_kh = d.val().clKh;
                        var g_en = '';
                        //Grade in EN
                        if (id == '01A') { g_en = '1A' };
                        if (id == '02A') { g_en = '2A' };
                        if (id == '03A') { g_en = '3A' };
                        if (id == '04A') { g_en = '4A' };
                        if (id == '05A') { g_en = '5A' };
                        if (id == '06A') { g_en = '6A' };
                        if (id == '07A') { g_en = '7A' };
                        if (id == '08A') { g_en = '8A' };
                        if (id == '09A') { g_en = '9A' };
                        if (id == '10A') { g_en = '10A' };
                        if (id == '11A') { g_en = '11A' };
                        if (id == '12A') { g_en = '12A' };
                        if (id == '01B') { g_en = '1B' };
                        if (id == '02B') { g_en = '2B' };
                        if (id == '03B') { g_en = '3B' };
                        if (id == '04B') { g_en = '4B' };
                        if (id == '05B') { g_en = '5B' };
                        if (id == '06B') { g_en = '6B' };
                        if (id == '07B') { g_en = '7B' };
                        if (id == '08B') { g_en = '8B' };
                        if (id == '09B') { g_en = '9B' };
                        if (id == '10B') { g_en = '10B' };
                        if (id == '11B') { g_en = '11B' };
                        if (id == '12B') { g_en = '12B' };

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/2023-2024/` + `${sle_lvl}/` + g_en)
                            .update({
                                    id: g_kh,
                            })
                    })
                })
        }
        if (sle_lvl == 'secondary_class') {
            firebase
                .database()
                .ref(`/SalaMOM/tools/class/អនុវិទ្យាល័យ/`)
                .once('value', function (data2) {
                    // g1(data2);
                    data2.forEach(d => {
                        var id = d.val().clEn;
                        var g_kh = d.val().clKh;
                        var g_en = '';
                        //Grade in EN
                        if (id == '01A') { g_en = '1A' };
                        if (id == '02A') { g_en = '2A' };
                        if (id == '03A') { g_en = '3A' };
                        if (id == '04A') { g_en = '4A' };
                        if (id == '05A') { g_en = '5A' };
                        if (id == '06A') { g_en = '6A' };
                        if (id == '07A') { g_en = '7A' };
                        if (id == '08A') { g_en = '8A' };
                        if (id == '09A') { g_en = '9A' };
                        if (id == '10A') { g_en = '10A' };
                        if (id == '11A') { g_en = '11A' };
                        if (id == '12A') { g_en = '12A' };
                        if (id == '01B') { g_en = '1B' };
                        if (id == '02B') { g_en = '2B' };
                        if (id == '03B') { g_en = '3B' };
                        if (id == '04B') { g_en = '4B' };
                        if (id == '05B') { g_en = '5B' };
                        if (id == '06B') { g_en = '6B' };
                        if (id == '07B') { g_en = '7B' };
                        if (id == '08B') { g_en = '8B' };
                        if (id == '09B') { g_en = '9B' };
                        if (id == '10B') { g_en = '10B' };
                        if (id == '11B') { g_en = '11B' };
                        if (id == '12B') { g_en = '12B' };

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/2023-2024/` + `${sle_lvl}/` + g_en)
                            .update({
                                id: g_kh,
                            })
                    })

                })
            firebase
                .database()
                .ref(`/SalaMOM/tools/class/វិទ្យាល័យ/`)
                .once('value', function (data3) {
                    // g1(data3);
                    data3.forEach(d => {
                        var id = d.val().clEn;
                        var g_kh = d.val().clKh;
                        var g_en = '';
                        //Grade in EN
                        if (id == '01A') { g_en = '1A' };
                        if (id == '02A') { g_en = '2A' };
                        if (id == '03A') { g_en = '3A' };
                        if (id == '04A') { g_en = '4A' };
                        if (id == '05A') { g_en = '5A' };
                        if (id == '06A') { g_en = '6A' };
                        if (id == '07A') { g_en = '7A' };
                        if (id == '08A') { g_en = '8A' };
                        if (id == '09A') { g_en = '9A' };
                        if (id == '10A') { g_en = '10A' };
                        if (id == '11A') { g_en = '11A' };
                        if (id == '12A') { g_en = '12A' };
                        if (id == '01B') { g_en = '1B' };
                        if (id == '02B') { g_en = '2B' };
                        if (id == '03B') { g_en = '3B' };
                        if (id == '04B') { g_en = '4B' };
                        if (id == '05B') { g_en = '5B' };
                        if (id == '06B') { g_en = '6B' };
                        if (id == '07B') { g_en = '7B' };
                        if (id == '08B') { g_en = '8B' };
                        if (id == '09B') { g_en = '9B' };
                        if (id == '10B') { g_en = '10B' };
                        if (id == '11B') { g_en = '11B' };
                        if (id == '12B') { g_en = '12B' };

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/2023-2024/` + `${sle_lvl}/` + g_en)
                            .update({
                                id: g_kh,
                            })
                    })
                })
        }
    }
    firebase
        .database()
        .ref(`/SalaMOM/tools/timeTable/2023-2024/` + `${sle_lvl}`)
        .once('value', function (data4) {
            g1(data4);
        })
    
    //Get Time for Time table
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី១`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.getElementById('t1_s').innerHTML = start;
            document.getElementById('t1_e').innerHTML = end;
            document.querySelector('.merindiem1').innerHTML = meridiem;
            document.querySelector('.merindiem2').innerHTML = meridiem;
        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី២`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.getElementById('t2_s').innerHTML = start;
            document.getElementById('t2_e').innerHTML = end;
            document.querySelector('.merindiem3').innerHTML = meridiem;
            document.querySelector('.merindiem4').innerHTML = meridiem;
        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី៣`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.getElementById('t3_s').innerHTML = start;
            document.getElementById('t3_e').innerHTML = end;
            document.querySelector('.merindiem7').innerHTML = meridiem;
            document.querySelector('.merindiem8').innerHTML = meridiem;
        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី៤`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.getElementById('t4_s').innerHTML = start;
            document.getElementById('t4_e').innerHTML = end;
            document.querySelector('.merindiem9').innerHTML = meridiem;
            document.querySelector('.merindiem10').innerHTML = meridiem;
        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី៥`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.querySelector('.merindiem11').innerHTML = meridiem;
            document.querySelector('.merindiem12').innerHTML = meridiem;

            function convertTimeTo12HourFormat(time) {
                // Split the time string into hours and minutes
                const [hours, minutes] = time.split(':');
                const parsedHours = parseInt(hours);

                // Convert to 12-hour format and add AM/PM
                let newHours = parsedHours % 12;  // Get remainder for hours within 12-hour cycle
                if (newHours === 0) {
                    newHours = 12;  // Handle 12:00 as 12 PM
                }
                const amPm = parsedHours >= 12 ? 'PM' : 'AM';

                return `${newHours.toString().padStart(2, '0')}:${minutes}`;
            }

            const originalTime = start;
            const originalTime2 = end;
            const convertedTime = convertTimeTo12HourFormat(originalTime);
            const convertedTime2 = convertTimeTo12HourFormat(originalTime2);
 
            document.getElementById('t5_s').innerHTML = convertedTime;
            document.getElementById('t5_e').innerHTML = convertedTime2;

        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី៦`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.querySelector('.merindiem13').innerHTML = meridiem;
            document.querySelector('.merindiem14').innerHTML = meridiem;

            function convertTimeTo12HourFormat(time) {
                // Split the time string into hours and minutes
                const [hours, minutes] = time.split(':');
                const parsedHours = parseInt(hours);

                // Convert to 12-hour format and add AM/PM
                let newHours = parsedHours % 12;  // Get remainder for hours within 12-hour cycle
                if (newHours === 0) {
                    newHours = 12;  // Handle 12:00 as 12 PM
                }
                const amPm = parsedHours >= 12 ? 'PM' : 'AM';

                return `${newHours.toString().padStart(2, '0')}:${minutes}`;
            }

            const originalTime = start;
            const originalTime2 = end;
            const convertedTime = convertTimeTo12HourFormat(originalTime);
            const convertedTime2 = convertTimeTo12HourFormat(originalTime2);
 
            document.getElementById('t6_s').innerHTML = convertedTime;
            document.getElementById('t6_e').innerHTML = convertedTime2;

        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី៧`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.querySelector('.merindiem17').innerHTML = meridiem;
            document.querySelector('.merindiem18').innerHTML = meridiem;

            function convertTimeTo12HourFormat(time) {
                // Split the time string into hours and minutes
                const [hours, minutes] = time.split(':');
                const parsedHours = parseInt(hours);

                // Convert to 12-hour format and add AM/PM
                let newHours = parsedHours % 12;  // Get remainder for hours within 12-hour cycle
                if (newHours === 0) {
                    newHours = 12;  // Handle 12:00 as 12 PM
                }
                const amPm = parsedHours >= 12 ? 'PM' : 'AM';

                return `${newHours.toString().padStart(2, '0')}:${minutes}`;
            }

            const originalTime = start;
            const originalTime2 = end;
            const convertedTime = convertTimeTo12HourFormat(originalTime);
            const convertedTime2 = convertTimeTo12HourFormat(originalTime2);
 
            document.getElementById('t7_s').innerHTML = convertedTime;
            document.getElementById('t7_e').innerHTML = convertedTime2;

        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងទី៨`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            document.querySelector('.merindiem19').innerHTML = meridiem;
            document.querySelector('.merindiem20').innerHTML = meridiem;

            function convertTimeTo12HourFormat(time) {
                // Split the time string into hours and minutes
                const [hours, minutes] = time.split(':');
                const parsedHours = parseInt(hours);

                // Convert to 12-hour format and add AM/PM
                let newHours = parsedHours % 12;  // Get remainder for hours within 12-hour cycle
                if (newHours === 0) {
                    newHours = 12;  // Handle 12:00 as 12 PM
                }
                const amPm = parsedHours >= 12 ? 'PM' : 'AM';

                return `${newHours.toString().padStart(2, '0')}:${minutes}`;
            }

            const originalTime = start;
            const originalTime2 = end;
            const convertedTime = convertTimeTo12HourFormat(originalTime);
            const convertedTime2 = convertTimeTo12HourFormat(originalTime2);
 
            document.getElementById('t8_s').innerHTML = convertedTime;
            document.getElementById('t8_e').innerHTML = convertedTime2;

        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងចេញលេងទី១`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            var kind = data.val().time_setting_kind;
            document.getElementById('b1_s').innerHTML = start;
            document.getElementById('b1_e').innerHTML = end;
            document.querySelector('.merindiem5').innerHTML = meridiem;
            document.querySelector('.merindiem6').innerHTML = meridiem;
            function getMinutesFromTimeRange(startTime, endTime) {
                // Split the time strings into hours and minutes
                const [startHours, startMinutes] = startTime.split(':');
                const [endHours, endMinutes] = endTime.split(':');
                
                // Convert hours to minutes
                const startMinutesTotal = parseInt(startHours) * 60 + parseInt(startMinutes);
                const endMinutesTotal = parseInt(endHours) * 60 + parseInt(endMinutes);
                
                // Calculate the total minutes
                const totalMinutes = endMinutesTotal - startMinutesTotal;
                
                return totalMinutes;
            }
            
            const startTime = start;
            const endTime = end;
            
            const minutes = getMinutesFromTimeRange(startTime, endTime);
            document.getElementById('k1').innerHTML = kind;
            document.getElementById('minu1').innerHTML = minutes;

        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/times/ម៉ោងចេញលេងទី២`)
        .once('value', function (data) {
            var start = data.val().time_setting_start_at;
            var end = data.val().time_setting_end_at;
            var meridiem = data.val().time_setting_meridiem;
            var kind = data.val().time_setting_kind;
            function convertTimeTo12HourFormat(time) {
                // Split the time string into hours and minutes
                const [hours, minutes] = time.split(':');
                const parsedHours = parseInt(hours);

                // Convert to 12-hour format and add AM/PM
                let newHours = parsedHours % 12;  // Get remainder for hours within 12-hour cycle
                if (newHours === 0) {
                    newHours = 12;  // Handle 12:00 as 12 PM
                }
                const amPm = parsedHours >= 12 ? 'PM' : 'AM';

                return `${newHours.toString().padStart(2, '0')}:${minutes}`;
            }

            const originalTime = start;
            const originalTime2 = end;
            const convertedTime = convertTimeTo12HourFormat(originalTime);
            const convertedTime2 = convertTimeTo12HourFormat(originalTime2);

            document.getElementById('b2_s').innerHTML = convertedTime;
            document.getElementById('b2_e').innerHTML = convertedTime2;
            document.querySelector('.merindiem15').innerHTML = meridiem;
            document.querySelector('.merindiem16').innerHTML = meridiem;
            function getMinutesFromTimeRange(startTime, endTime) {
                // Split the time strings into hours and minutes
                const [startHours, startMinutes] = startTime.split(':');
                const [endHours, endMinutes] = endTime.split(':');
                
                // Convert hours to minutes
                const startMinutesTotal = parseInt(startHours) * 60 + parseInt(startMinutes);
                const endMinutesTotal = parseInt(endHours) * 60 + parseInt(endMinutes);
                
                // Calculate the total minutes
                const totalMinutes = endMinutesTotal - startMinutesTotal;
                
                return totalMinutes;
            }
            
            const startTime = start;
            const endTime = end;
            
            const minutes = getMinutesFromTimeRange(startTime, endTime);
            document.getElementById('k2').innerHTML = kind;
            document.getElementById('minu2').innerHTML = minutes;

        })


    //Set menu to select username and subject
    let select_name = document.getElementById('select_username');
    let select_sub = document.getElementById('select_sub');

    firebase
        .database()
        .ref(`/SalaMOM/staffs`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().id;
                var get_url_pic = d.val().get_url_pic;
                var user_short_name = d.val().user_short_name;

                let t = `
                    <li class="dropdown-item" data-label="${id}" data-image="${get_url_pic}" data-nickname="${user_short_name}">
                    <img style="width: 50px;" src="${get_url_pic}" alt="image">
                    ${id}</li>

                `;
                select_name.innerHTML += t;
            })
        })
    firebase
        .database()
        .ref(`/SalaMOM/tools/subjects/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().id;
                let subject = '';
                if (id == 'កីឡា') { subject = 'PE' }
                if (id == 'អង់គ្លេស') { subject = 'E' }
                if (id == 'កុំព្យូទ័រ') { subject = 'ICT' }
                if (id == 'គណិតវិទ្យា') { subject = 'M' }
                if (id == 'គីមីវិទ្យា') { subject = 'C' }
                if (id == 'គេហៈ') { subject = 'Ho' }
                if (id == 'ជីវៈវិទ្យា') { subject = 'Bio' }
                if (id == 'ប្រវត្តិវិទ្យា') { subject = 'H' }
                if (id == 'ផែនដីវិទ្យា') { subject = 'ES' }
                if (id == 'ភូមិវិទ្យា') { subject = 'G' }
                if (id == 'រូបវិទ្យា') { subject = 'P' }
                if (id == 'សកម្មភាព') { subject = 'Ac' }
                if (id == 'សិក្សាសីលធម៌') { subject = 'Bi' }
                if (id == 'សីលធម៌-ពលរដ្ឋ') { subject = 'Mo' }
                if (id == 'សេដ្ឋកិច្ច') { subject = 'Eco' }
                if (id == 'អក្សរសាស្ត្រខ្មែរ') { subject = 'K' }
                if (id == 'វិទ្យាសាស្ត្រ') { subject = 'Sci' }
                if (id == 'សិក្សាសង្គម') { subject = 'Soc' }
                let s = `
                    <option value="${subject}">${id}</option>
                `;
                select_sub.innerHTML += s;

            })
        })


    function g1(d1) {
        let tbl = document.getElementById('tbody_time_table');
        //Monday
        let data_row_1 = [];
        let data_row_2 = [];
        let data_row_3 = [];
        let data_row_4 = [];
        let data_row_5 = [];
        let data_row_6 = [];
        let data_row_7 = [];
        let data_row_8 = [];
        //Tuesday
        let data_row_9 = [];
        let data_row_10 = [];
        let data_row_11 = [];
        let data_row_12 = [];
        let data_row_13 = [];
        let data_row_14 = [];
        let data_row_15 = [];
        let data_row_16 = [];
        //Wednesday
        let data_row_17 = [];
        let data_row_18 = [];
        let data_row_19 = [];
        let data_row_20 = [];
        let data_row_21 = [];
        let data_row_22 = [];
        let data_row_23 = [];
        let data_row_24 = [];

        //Thursday
        let data_row_25 = [];
        let data_row_26 = [];
        let data_row_27 = [];
        let data_row_28 = [];
        let data_row_29 = [];
        let data_row_30 = [];
        let data_row_31 = [];
        let data_row_32 = [];

        //Friday
        let data_row_33 = [];
        let data_row_34 = [];
        let data_row_35 = [];
        let data_row_36 = [];
        let data_row_37 = [];
        let data_row_38 = [];
        let data_row_39 = [];
        let data_row_40 = [];

        setTimeout(() => {
            const uu = document.querySelector("#tbody_time_table");
            //Monday
            const td1 = uu.querySelectorAll('.tr1');
            const td2 = uu.querySelectorAll('.tr2');
            const td3 = uu.querySelectorAll('.tr3');
            const td4 = uu.querySelectorAll('.tr4');
            const td5 = uu.querySelectorAll('.tr5');
            const td6 = uu.querySelectorAll('.tr6');
            const td7 = uu.querySelectorAll('.tr7');
            const td8 = uu.querySelectorAll('.tr8');
            //Tuesday
            const td9 = uu.querySelectorAll('.tr9');
            const td10 = uu.querySelectorAll('.tr10');
            const td11 = uu.querySelectorAll('.tr11');
            const td12 = uu.querySelectorAll('.tr12');
            const td13 = uu.querySelectorAll('.tr13');
            const td14 = uu.querySelectorAll('.tr14');
            const td15 = uu.querySelectorAll('.tr15');
            const td16 = uu.querySelectorAll('.tr16');
            //Wednesday
            const td17 = uu.querySelectorAll('.tr17');
            const td18 = uu.querySelectorAll('.tr18');
            const td19 = uu.querySelectorAll('.tr19');
            const td20 = uu.querySelectorAll('.tr20');
            const td21 = uu.querySelectorAll('.tr21');
            const td22 = uu.querySelectorAll('.tr22');
            const td23 = uu.querySelectorAll('.tr23');
            const td24 = uu.querySelectorAll('.tr24');
    
            //Thursday
            const td25 = uu.querySelectorAll('.tr25');
            const td26 = uu.querySelectorAll('.tr26');
            const td27 = uu.querySelectorAll('.tr27');
            const td28 = uu.querySelectorAll('.tr28');
            const td29 = uu.querySelectorAll('.tr29');
            const td30 = uu.querySelectorAll('.tr30');
            const td31 = uu.querySelectorAll('.tr31');
            const td32 = uu.querySelectorAll('.tr32');
    
            //Friday
            const td33 = uu.querySelectorAll('.tr33');
            const td34 = uu.querySelectorAll('.tr34');
            const td35 = uu.querySelectorAll('.tr35');
            const td36 = uu.querySelectorAll('.tr36');
            const td37 = uu.querySelectorAll('.tr37');
            const td38 = uu.querySelectorAll('.tr38');
            const td39 = uu.querySelectorAll('.tr39');
            const td40 = uu.querySelectorAll('.tr40');
    
            //Monday
            td1.forEach(e => {
                let d = e.dataset.t;
                data_row_1.push(d);
            })
            td2.forEach(e => {
                let d = e.dataset.t;
                data_row_2.push(d);
            })
            td3.forEach(e => {
                let d = e.dataset.t;
                data_row_3.push(d);
            })
            td4.forEach(e => {
                let d = e.dataset.t;
                data_row_4.push(d);
            })
            td5.forEach(e => {
                let d = e.dataset.t;
                data_row_5.push(d);
            })
            td6.forEach(e => {
                let d = e.dataset.t;
                data_row_6.push(d);
            })
            td7.forEach(e => {
                let d = e.dataset.t;
                data_row_7.push(d);
            })
            td8.forEach(e => {
                let d = e.dataset.t;
                data_row_8.push(d);
            })
            //Tuesday
            td9.forEach(e => {
                let d = e.dataset.t;
                data_row_9.push(d);
            })
            td10.forEach(e => {
                let d = e.dataset.t;
                data_row_10.push(d);
            })
            td11.forEach(e => {
                let d = e.dataset.t;
                data_row_11.push(d);
            })
            td12.forEach(e => {
                let d = e.dataset.t;
                data_row_12.push(d);
            })
            td13.forEach(e => {
                let d = e.dataset.t;
                data_row_13.push(d);
            })
            td14.forEach(e => {
                let d = e.dataset.t;
                data_row_14.push(d);
            })
            td15.forEach(e => {
                let d = e.dataset.t;
                data_row_15.push(d);
            })
            td16.forEach(e => {
                let d = e.dataset.t;
                data_row_16.push(d);
            })
            //Wednesday
            td17.forEach(e => {
                let d = e.dataset.t;
                data_row_17.push(d);
            })
            td18.forEach(e => {
                let d = e.dataset.t;
                data_row_18.push(d);
            })
            td19.forEach(e => {
                let d = e.dataset.t;
                data_row_21.push(d);
            })
            td20.forEach(e => {
                let d = e.dataset.t;
                data_row_20.push(d);
            })
            td21.forEach(e => {
                let d = e.dataset.t;
                data_row_21.push(d);
            })
            td22.forEach(e => {
                let d = e.dataset.t;
                data_row_22.push(d);
            })
            td23.forEach(e => {
                let d = e.dataset.t;
                data_row_23.push(d);
            })
            td24.forEach(e => {
                let d = e.dataset.t;
                data_row_24.push(d);
            })
            //Thursday
            td25.forEach(e => {
                let d = e.dataset.t;
                data_row_25.push(d);
            })
            td26.forEach(e => {
                let d = e.dataset.t;
                data_row_26.push(d);
            })
            td27.forEach(e => {
                let d = e.dataset.t;
                data_row_27.push(d);
            })
            td28.forEach(e => {
                let d = e.dataset.t;
                data_row_28.push(d);
            })
            td29.forEach(e => {
                let d = e.dataset.t;
                data_row_29.push(d);
            })
            td30.forEach(e => {
                let d = e.dataset.t;
                data_row_30.push(d);
            })
            td31.forEach(e => {
                let d = e.dataset.t;
                data_row_31.push(d);
            })
            td32.forEach(e => {
                let d = e.dataset.t;
                data_row_32.push(d);
            })
            //Friday
            td33.forEach(e => {
                let d = e.dataset.t;
                data_row_33.push(d);
            })
            td34.forEach(e => {
                let d = e.dataset.t;
                data_row_34.push(d);
            })
            td35.forEach(e => {
                let d = e.dataset.t;
                data_row_35.push(d);
            })
            td36.forEach(e => {
                let d = e.dataset.t;
                data_row_36.push(d);
            })
            td37.forEach(e => {
                let d = e.dataset.t;
                data_row_37.push(d);
            })
            td38.forEach(e => {
                let d = e.dataset.t;
                data_row_38.push(d);
            })
            td39.forEach(e => {
                let d = e.dataset.t;
                data_row_39.push(d);
            })
            td40.forEach(e => {
                let d = e.dataset.t;
                data_row_40.push(d);
            })
            
        }, 1000);
        
        d1.forEach((d) => {
            var id = d.val().id;
            var nickname = d.val().nickname;
            var g_en = '';
            if (id == '១ក') { g_en = '1A' };
            if (id == '២ក') { g_en = '2A' };
            if (id == '៣ក') { g_en = '3A' };
            if (id == '៤ក') { g_en = '4A' };
            if (id == '៥ក') { g_en = '5A' };
            if (id == '៦ក') { g_en = '6A' };
            if (id == '៧ក') { g_en = '7A' };
            if (id == '៨ក') { g_en = '8A' };
            if (id == '៩ក') { g_en = '9A' };
            if (id == '១០ក') { g_en = '10A' };
            if (id == '១១ក') { g_en = '11A' };
            if (id == '១២ក') { g_en = '12A' };
            if (id == '១ខ') { g_en = '1B' };
            if (id == '២ខ') { g_en = '2B' };
            if (id == '៣ខ') { g_en = '3B' };
            if (id == '៤ខ') { g_en = '4B' };
            if (id == '៥ខ') { g_en = '5B' };
            if (id == '៦ខ') { g_en = '6B' };
            if (id == '៧ខ') { g_en = '7B' };
            if (id == '៨ខ') { g_en = '8B' };
            if (id == '៩ខ') { g_en = '9B' };
            if (id == '១០ខ') { g_en = '10B' };
            if (id == '១១ខ') { g_en = '11B' };
            if (id == '១២ខ') { g_en = '12B' };
            if(!nickname){nickname=''}
            //Monday Morning
            var img_mon_mor_t1 = d.val().img_mon_mor_t1;
            var sub_mon_mor_t1 = d.val().sub_mon_mor_t1;

            var img_mon_mor_t2 = d.val().img_mon_mor_t2;
            var sub_mon_mor_t2 = d.val().sub_mon_mor_t2;

            var img_mon_mor_t3 = d.val().img_mon_mor_t3;
            var sub_mon_mor_t3 = d.val().sub_mon_mor_t3;

            var img_mon_mor_t4 = d.val().img_mon_mor_t4;
            var sub_mon_mor_t4 = d.val().sub_mon_mor_t4;
            
            
            var tname_mon_mor_t1 = d.val().tname_mon_mor_t1;
            var tname_mon_mor_t2 = d.val().tname_mon_mor_t2;
            var tname_mon_mor_t3 = d.val().tname_mon_mor_t3;
            var tname_mon_mor_t4 = d.val().tname_mon_mor_t4;


            if (!img_mon_mor_t1) { img_mon_mor_t1 = ''; }
            if (!img_mon_mor_t2) { img_mon_mor_t2 = ''; }
            if (!img_mon_mor_t3) { img_mon_mor_t3 = ''; }
            if (!img_mon_mor_t4) { img_mon_mor_t4 = ''; }

            if (!sub_mon_mor_t1) { sub_mon_mor_t1 = ''; }
            if (!sub_mon_mor_t2) { sub_mon_mor_t2 = ''; }
            if (!sub_mon_mor_t3) { sub_mon_mor_t3 = ''; }
            if (!sub_mon_mor_t4) { sub_mon_mor_t4 = ''; }
            
            if (!tname_mon_mor_t1) { tname_mon_mor_t1 = ''; }
            if (!tname_mon_mor_t2) { tname_mon_mor_t2 = ''; }
            if (!tname_mon_mor_t3) { tname_mon_mor_t3 = ''; }
            if (!tname_mon_mor_t4) { tname_mon_mor_t4 = ''; }

            //Monday afternoon
            var img_mon_aft_t1 = d.val().img_mon_aft_t1;
            var sub_mon_aft_t1 = d.val().sub_mon_aft_t1;

            var img_mon_aft_t2 = d.val().img_mon_aft_t2;
            var sub_mon_aft_t2 = d.val().sub_mon_aft_t2;

            var img_mon_aft_t3 = d.val().img_mon_aft_t3;
            var sub_mon_aft_t3 = d.val().sub_mon_aft_t3;

            var img_mon_aft_t4 = d.val().img_mon_aft_t4;
            var sub_mon_aft_t4 = d.val().sub_mon_aft_t4;

            var tname_mon_aft_t1 = d.val().tname_mon_aft_t1;
            var tname_mon_aft_t2 = d.val().tname_mon_aft_t2;
            var tname_mon_aft_t3 = d.val().tname_mon_aft_t3;
            var tname_mon_aft_t4 = d.val().tname_mon_aft_t4;

            if (!img_mon_aft_t1) { img_mon_aft_t1 = ''; }
            if (!sub_mon_aft_t1) { sub_mon_aft_t1 = ''; }
            if (!img_mon_aft_t2) { img_mon_aft_t2 = ''; }
            if (!sub_mon_aft_t2) { sub_mon_aft_t2 = ''; }
            if (!img_mon_aft_t3) { img_mon_aft_t3 = ''; }
            if (!sub_mon_aft_t3) { sub_mon_aft_t3 = ''; }
            if (!img_mon_aft_t4) { img_mon_aft_t4 = ''; }
            if (!sub_mon_aft_t4) { sub_mon_aft_t4 = ''; }

            if (!tname_mon_aft_t1) { tname_mon_aft_t1 = ''; }
            if (!tname_mon_aft_t2) { tname_mon_aft_t2 = ''; }
            if (!tname_mon_aft_t3) { tname_mon_aft_t3 = ''; }
            if (!tname_mon_aft_t4) { tname_mon_aft_t4 = ''; }


            //Tuesday Morning
            var img_tue_mor_t1 = d.val().img_tue_mor_t1;
            var sub_tue_mor_t1 = d.val().sub_tue_mor_t1;

            var img_tue_mor_t2 = d.val().img_tue_mor_t2;
            var sub_tue_mor_t2 = d.val().sub_tue_mor_t2;

            var img_tue_mor_t3 = d.val().img_tue_mor_t3;
            var sub_tue_mor_t3 = d.val().sub_tue_mor_t3;

            var img_tue_mor_t4 = d.val().img_tue_mor_t4;
            var sub_tue_mor_t4 = d.val().sub_tue_mor_t4;

            var tname_tue_mor_t1 = d.val().tname_tue_mor_t1;
            var tname_tue_mor_t2 = d.val().tname_tue_mor_t2;
            var tname_tue_mor_t3 = d.val().tname_tue_mor_t3;
            var tname_tue_mor_t4 = d.val().tname_tue_mor_t4;

            if (!img_tue_mor_t1) { img_tue_mor_t1 = ''; }
            if (!sub_tue_mor_t1) { sub_tue_mor_t1 = ''; }
            if (!img_tue_mor_t2) { img_tue_mor_t2 = ''; }
            if (!sub_tue_mor_t2) { sub_tue_mor_t2 = ''; }
            if (!img_tue_mor_t3) { img_tue_mor_t3 = ''; }
            if (!sub_tue_mor_t3) { sub_tue_mor_t3 = ''; }
            if (!img_tue_mor_t4) { img_tue_mor_t4 = ''; }
            if (!sub_tue_mor_t4) { sub_tue_mor_t4 = ''; }

            if (!tname_tue_mor_t1) { tname_tue_mor_t1 = ''; }
            if (!tname_tue_mor_t2) { tname_tue_mor_t2 = ''; }
            if (!tname_tue_mor_t3) { tname_tue_mor_t3 = ''; }
            if (!tname_tue_mor_t4) { tname_tue_mor_t4 = ''; }


            //Tuesday Afternoon
            var img_tue_aft_t1 = d.val().img_tue_aft_t1;
            var sub_tue_aft_t1 = d.val().sub_tue_aft_t1;

            var img_tue_aft_t2 = d.val().img_tue_aft_t2;
            var sub_tue_aft_t2 = d.val().sub_tue_aft_t2;

            var img_tue_aft_t3 = d.val().img_tue_aft_t3;
            var sub_tue_aft_t3 = d.val().sub_tue_aft_t3;

            var img_tue_aft_t4 = d.val().img_tue_aft_t4;
            var sub_tue_aft_t4 = d.val().sub_tue_aft_t4;

            var tname_tue_aft_t1 = d.val().tname_tue_aft_t1;
            var tname_tue_aft_t2 = d.val().tname_tue_aft_t2;
            var tname_tue_aft_t3 = d.val().tname_tue_aft_t3;
            var tname_tue_aft_t4 = d.val().tname_tue_aft_t4;

            if (!img_tue_aft_t1) { img_tue_aft_t1 = ''; }
            if (!sub_tue_aft_t1) { sub_tue_aft_t1 = ''; }
            if (!img_tue_aft_t2) { img_tue_aft_t2 = ''; }
            if (!sub_tue_aft_t2) { sub_tue_aft_t2 = ''; }
            if (!img_tue_aft_t3) { img_tue_aft_t3 = ''; }
            if (!sub_tue_aft_t3) { sub_tue_aft_t3 = ''; }
            if (!img_tue_aft_t4) { img_tue_aft_t4 = ''; }
            if (!sub_tue_aft_t4) { sub_tue_aft_t4 = ''; }

            if (!tname_tue_aft_t1) { tname_tue_aft_t1 = ''; }
            if (!tname_tue_aft_t2) { tname_tue_aft_t2 = ''; }
            if (!tname_tue_aft_t3) { tname_tue_aft_t3 = ''; }
            if (!tname_tue_aft_t4) { tname_tue_aft_t4 = ''; }

            //Wednesday Morning
            var img_wed_mor_t1 = d.val().img_wed_mor_t1;
            var sub_wed_mor_t1 = d.val().sub_wed_mor_t1;

            var img_wed_mor_t2 = d.val().img_wed_mor_t2;
            var sub_wed_mor_t2 = d.val().sub_wed_mor_t2;

            var img_wed_mor_t3 = d.val().img_wed_mor_t3;
            var sub_wed_mor_t3 = d.val().sub_wed_mor_t3;

            var img_wed_mor_t4 = d.val().img_wed_mor_t4;
            var sub_wed_mor_t4 = d.val().sub_wed_mor_t4;

            var tname_wed_mor_t1 = d.val().tname_wed_mor_t1;
            var tname_wed_mor_t2 = d.val().tname_wed_mor_t2;
            var tname_wed_mor_t3 = d.val().tname_wed_mor_t3;
            var tname_wed_mor_t4 = d.val().tname_wed_mor_t4;

            if (!img_wed_mor_t1) { img_wed_mor_t1 = ''; }
            if (!sub_wed_mor_t1) { sub_wed_mor_t1 = ''; }
            if (!img_wed_mor_t2) { img_wed_mor_t2 = ''; }
            if (!sub_wed_mor_t2) { sub_wed_mor_t2 = ''; }
            if (!img_wed_mor_t3) { img_wed_mor_t3 = ''; }
            if (!sub_wed_mor_t3) { sub_wed_mor_t3 = ''; }
            if (!img_wed_mor_t4) { img_wed_mor_t4 = ''; }
            if (!sub_wed_mor_t4) { sub_wed_mor_t4 = ''; }

            if (!tname_wed_mor_t1) { tname_wed_mor_t1 = ''; }
            if (!tname_wed_mor_t2) { tname_wed_mor_t2 = ''; }
            if (!tname_wed_mor_t3) { tname_wed_mor_t3 = ''; }
            if (!tname_wed_mor_t4) { tname_wed_mor_t4 = ''; }

            //Wednesday Afternoon
            var img_wed_aft_t1 = d.val().img_wed_aft_t1;
            var sub_wed_aft_t1 = d.val().sub_wed_aft_t1;

            var img_wed_aft_t2 = d.val().img_wed_aft_t2;
            var sub_wed_aft_t2 = d.val().sub_wed_aft_t2;

            var img_wed_aft_t3 = d.val().img_wed_aft_t3;
            var sub_wed_aft_t3 = d.val().sub_wed_aft_t3;

            var img_wed_aft_t4 = d.val().img_wed_aft_t4;
            var sub_wed_aft_t4 = d.val().sub_wed_aft_t4;

            var tname_wed_aft_t1 = d.val().tname_wed_aft_t1;
            var tname_wed_aft_t2 = d.val().tname_wed_aft_t2;
            var tname_wed_aft_t3 = d.val().tname_wed_aft_t3;
            var tname_wed_aft_t4 = d.val().tname_wed_aft_t4;

            if (!img_wed_aft_t1) { img_wed_aft_t1 = ''; }
            if (!sub_wed_aft_t1) { sub_wed_aft_t1 = ''; }
            if (!img_wed_aft_t2) { img_wed_aft_t2 = ''; }
            if (!sub_wed_aft_t2) { sub_wed_aft_t2 = ''; }
            if (!img_wed_aft_t3) { img_wed_aft_t3 = ''; }
            if (!sub_wed_aft_t3) { sub_wed_aft_t3 = ''; }
            if (!img_wed_aft_t4) { img_wed_aft_t4 = ''; }
            if (!sub_wed_aft_t4) { sub_wed_aft_t4 = ''; }

            if (!tname_wed_aft_t1) { tname_wed_aft_t1 = ''; }
            if (!tname_wed_aft_t2) { tname_wed_aft_t2 = ''; }
            if (!tname_wed_aft_t3) { tname_wed_aft_t3 = ''; }
            if (!tname_wed_aft_t4) { tname_wed_aft_t4 = ''; }

            //Thursday Morning
            var img_thu_mor_t1 = d.val().img_thu_mor_t1;
            var sub_thu_mor_t1 = d.val().sub_thu_mor_t1;

            var img_thu_mor_t2 = d.val().img_thu_mor_t2;
            var sub_thu_mor_t2 = d.val().sub_thu_mor_t2;

            var img_thu_mor_t3 = d.val().img_thu_mor_t3;
            var sub_thu_mor_t3 = d.val().sub_thu_mor_t3;

            var img_thu_mor_t4 = d.val().img_thu_mor_t4;
            var sub_thu_mor_t4 = d.val().sub_thu_mor_t4;

            var tname_thu_mor_t1 = d.val().tname_thu_mor_t1;
            var tname_thu_mor_t2 = d.val().tname_thu_mor_t2;
            var tname_thu_mor_t3 = d.val().tname_thu_mor_t3;
            var tname_thu_mor_t4 = d.val().tname_thu_mor_t4;

            if (!img_thu_mor_t1) { img_thu_mor_t1 = ''; }
            if (!sub_thu_mor_t1) { sub_thu_mor_t1 = ''; }
            if (!img_thu_mor_t2) { img_thu_mor_t2 = ''; }
            if (!sub_thu_mor_t2) { sub_thu_mor_t2 = ''; }
            if (!img_thu_mor_t3) { img_thu_mor_t3 = ''; }
            if (!sub_thu_mor_t3) { sub_thu_mor_t3 = ''; }
            if (!img_thu_mor_t4) { img_thu_mor_t4 = ''; }
            if (!sub_thu_mor_t4) { sub_thu_mor_t4 = ''; }

            if (!tname_thu_mor_t1) { tname_thu_mor_t1 = ''; }
            if (!tname_thu_mor_t2) { tname_thu_mor_t2 = ''; }
            if (!tname_thu_mor_t3) { tname_thu_mor_t3 = ''; }
            if (!tname_thu_mor_t4) { tname_thu_mor_t4 = ''; }

            //Thursday Afternoon
            var img_thu_aft_t1 = d.val().img_thu_aft_t1;
            var sub_thu_aft_t1 = d.val().sub_thu_aft_t1;

            var img_thu_aft_t2 = d.val().img_thu_aft_t2;
            var sub_thu_aft_t2 = d.val().sub_thu_aft_t2;

            var img_thu_aft_t3 = d.val().img_thu_aft_t3;
            var sub_thu_aft_t3 = d.val().sub_thu_aft_t3;

            var img_thu_aft_t4 = d.val().img_thu_aft_t4;
            var sub_thu_aft_t4 = d.val().sub_thu_aft_t4;

            var tname_thu_aft_t1 = d.val().tname_thu_aft_t1;
            var tname_thu_aft_t2 = d.val().tname_thu_aft_t2;
            var tname_thu_aft_t3 = d.val().tname_thu_aft_t3;
            var tname_thu_aft_t4 = d.val().tname_thu_aft_t4;

            if (!img_thu_aft_t1) { img_thu_aft_t1 = ''; }
            if (!sub_thu_aft_t1) { sub_thu_aft_t1 = ''; }
            if (!img_thu_aft_t2) { img_thu_aft_t2 = ''; }
            if (!sub_thu_aft_t2) { sub_thu_aft_t2 = ''; }
            if (!img_thu_aft_t3) { img_thu_aft_t3 = ''; }
            if (!sub_thu_aft_t3) { sub_thu_aft_t3 = ''; }
            if (!img_thu_aft_t4) { img_thu_aft_t4 = ''; }
            if (!sub_thu_aft_t4) { sub_thu_aft_t4 = ''; }

            if (!tname_thu_aft_t1) { tname_thu_aft_t1 = ''; }
            if (!tname_thu_aft_t2) { tname_thu_aft_t2 = ''; }
            if (!tname_thu_aft_t3) { tname_thu_aft_t3 = ''; }
            if (!tname_thu_aft_t4) { tname_thu_aft_t4 = ''; }

            //Friday Morning
            var img_fri_mor_t1 = d.val().img_fri_mor_t1;
            var sub_fri_mor_t1 = d.val().sub_fri_mor_t1;

            var img_fri_mor_t2 = d.val().img_fri_mor_t2;
            var sub_fri_mor_t2 = d.val().sub_fri_mor_t2;

            var img_fri_mor_t3 = d.val().img_fri_mor_t3;
            var sub_fri_mor_t3 = d.val().sub_fri_mor_t3;

            var img_fri_mor_t4 = d.val().img_fri_mor_t4;
            var sub_fri_mor_t4 = d.val().sub_fri_mor_t4;

            var tname_fri_mor_t1 = d.val().tname_fri_mor_t1;
            var tname_fri_mor_t2 = d.val().tname_fri_mor_t2;
            var tname_fri_mor_t3 = d.val().tname_fri_mor_t3;
            var tname_fri_mor_t4 = d.val().tname_fri_mor_t4;

            if (!img_fri_mor_t1) { img_fri_mor_t1 = ''; }
            if (!sub_fri_mor_t1) { sub_fri_mor_t1 = ''; }
            if (!img_fri_mor_t2) { img_fri_mor_t2 = ''; }
            if (!sub_fri_mor_t2) { sub_fri_mor_t2 = ''; }
            if (!img_fri_mor_t3) { img_fri_mor_t3 = ''; }
            if (!sub_fri_mor_t3) { sub_fri_mor_t3 = ''; }
            if (!img_fri_mor_t4) { img_fri_mor_t4 = ''; }
            if (!sub_fri_mor_t4) { sub_fri_mor_t4 = ''; }

            if (!tname_fri_mor_t1) { tname_fri_mor_t1 = ''; }
            if (!tname_fri_mor_t2) { tname_fri_mor_t2 = ''; }
            if (!tname_fri_mor_t3) { tname_fri_mor_t3 = ''; }
            if (!tname_fri_mor_t4) { tname_fri_mor_t4 = ''; }

            //Friday Afternoon
            var img_fri_aft_t1 = d.val().img_fri_aft_t1;
            var sub_fri_aft_t1 = d.val().sub_fri_aft_t1;

            var img_fri_aft_t2 = d.val().img_fri_aft_t2;
            var sub_fri_aft_t2 = d.val().sub_fri_aft_t2;

            var img_fri_aft_t3 = d.val().img_fri_aft_t3;
            var sub_fri_aft_t3 = d.val().sub_fri_aft_t3;

            var img_fri_aft_t4 = d.val().img_fri_aft_t4;
            var sub_fri_aft_t4 = d.val().sub_fri_aft_t4;

            var tname_fri_aft_t1 = d.val().tname_fri_aft_t1;
            var tname_fri_aft_t2 = d.val().tname_fri_aft_t2;
            var tname_fri_aft_t3 = d.val().tname_fri_aft_t3;
            var tname_fri_aft_t4 = d.val().tname_fri_aft_t4;

            if (!img_fri_aft_t1) { img_fri_aft_t1 = ''; }
            if (!sub_fri_aft_t1) { sub_fri_aft_t1 = ''; }
            if (!img_fri_aft_t2) { img_fri_aft_t2 = ''; }
            if (!sub_fri_aft_t2) { sub_fri_aft_t2 = ''; }
            if (!img_fri_aft_t3) { img_fri_aft_t3 = ''; }
            if (!sub_fri_aft_t3) { sub_fri_aft_t3 = ''; }
            if (!img_fri_aft_t4) { img_fri_aft_t4 = ''; }
            if (!sub_fri_aft_t4) { sub_fri_aft_t4 = ''; }

            if (!tname_fri_aft_t1) { tname_fri_aft_t1 = ''; }
            if (!tname_fri_aft_t2) { tname_fri_aft_t2 = ''; }
            if (!tname_fri_aft_t3) { tname_fri_aft_t3 = ''; }
            if (!tname_fri_aft_t4) { tname_fri_aft_t4 = ''; }
            n0++;

            let l = `
            <tr>
            <th>${n0}</th>
            <th data-bs-toggle="modal" data-bs-target="#forPreview"
            data-sub_mon_mor_t1="${sub_mon_mor_t1}"
            data-sub_mon_mor_t2="${sub_mon_mor_t2}"
            data-sub_mon_mor_t3="${sub_mon_mor_t3}"
            data-sub_mon_mor_t4="${sub_mon_mor_t4}"
            data-tname_mon_mor_t1="${tname_mon_mor_t1}"
            data-tname_mon_mor_t2="${tname_mon_mor_t2}"
            data-tname_mon_mor_t3="${tname_mon_mor_t3}"
            data-tname_mon_mor_t4="${tname_mon_mor_t4}"
            data-sub_mon_aft_t1="${sub_mon_aft_t1}"
            data-sub_mon_aft_t2="${sub_mon_aft_t2}"
            data-sub_mon_aft_t3="${sub_mon_aft_t3}"
            data-sub_mon_aft_t4="${sub_mon_aft_t4}"
            data-tname_mon_aft_t1="${tname_mon_aft_t1}"
            data-tname_mon_aft_t2="${tname_mon_aft_t2}"
            data-tname_mon_aft_t3="${tname_mon_aft_t3}"
            data-tname_mon_aft_t4="${tname_mon_aft_t4}"
            data-sub_tue_mor_t1="${sub_tue_mor_t1}"
            data-sub_tue_mor_t2="${sub_tue_mor_t2}"
            data-sub_tue_mor_t3="${sub_tue_mor_t3}"
            data-sub_tue_mor_t4="${sub_tue_mor_t4}"
            data-tname_tue_mor_t1="${tname_tue_mor_t1}"
            data-tname_tue_mor_t2="${tname_tue_mor_t2}"
            data-tname_tue_mor_t3="${tname_tue_mor_t3}"
            data-tname_tue_mor_t4="${tname_tue_mor_t4}"
            data-sub_tue_aft_t1="${sub_tue_aft_t1}"
            data-sub_tue_aft_t2="${sub_tue_aft_t2}"
            data-sub_tue_aft_t3="${sub_tue_aft_t3}"
            data-sub_tue_aft_t4="${sub_tue_aft_t4}"
            data-tname_tue_aft_t1="${tname_tue_aft_t1}"
            data-tname_tue_aft_t2="${tname_tue_aft_t2}"
            data-tname_tue_aft_t3="${tname_tue_aft_t3}"
            data-tname_tue_aft_t4="${tname_tue_aft_t4}"
            data-sub_wed_mor_t1="${sub_wed_mor_t1}"
            data-sub_wed_mor_t2="${sub_wed_mor_t2}"
            data-sub_wed_mor_t3="${sub_wed_mor_t3}"
            data-sub_wed_mor_t4="${sub_wed_mor_t4}"
            data-tname_wed_mor_t1="${tname_wed_mor_t1}"
            data-tname_wed_mor_t2="${tname_wed_mor_t2}"
            data-tname_wed_mor_t3="${tname_wed_mor_t3}"
            data-tname_wed_mor_t4="${tname_wed_mor_t4}"
            data-sub_wed_aft_t1="${sub_wed_aft_t1}"
            data-sub_wed_aft_t2="${sub_wed_aft_t2}"
            data-sub_wed_aft_t3="${sub_wed_aft_t3}"
            data-sub_wed_aft_t4="${sub_wed_aft_t4}"
            data-tname_wed_aft_t1="${tname_wed_aft_t1}"
            data-tname_wed_aft_t2="${tname_wed_aft_t2}"
            data-tname_wed_aft_t3="${tname_wed_aft_t3}"
            data-tname_wed_aft_t4="${tname_wed_aft_t4}"
            data-sub_thu_mor_t1="${sub_thu_mor_t1}"
            data-sub_thu_mor_t2="${sub_thu_mor_t2}"
            data-sub_thu_mor_t3="${sub_thu_mor_t3}"
            data-sub_thu_mor_t4="${sub_thu_mor_t4}"
            data-tname_thu_mor_t1="${tname_thu_mor_t1}"
            data-tname_thu_mor_t2="${tname_thu_mor_t2}"
            data-tname_thu_mor_t3="${tname_thu_mor_t3}"
            data-tname_thu_mor_t4="${tname_thu_mor_t4}"
            data-sub_thu_aft_t1="${sub_thu_aft_t1}"
            data-sub_thu_aft_t2="${sub_thu_aft_t2}"
            data-sub_thu_aft_t3="${sub_thu_aft_t3}"
            data-sub_thu_aft_t4="${sub_thu_aft_t4}"
            data-tname_thu_aft_t1="${tname_thu_aft_t1}"
            data-tname_thu_aft_t2="${tname_thu_aft_t2}"
            data-tname_thu_aft_t3="${tname_thu_aft_t3}"
            data-tname_thu_aft_t4="${tname_thu_aft_t4}"
            data-sub_fri_mor_t1="${sub_fri_mor_t1}"
            data-sub_fri_mor_t2="${sub_fri_mor_t2}"
            data-sub_fri_mor_t3="${sub_fri_mor_t3}"
            data-sub_fri_mor_t4="${sub_fri_mor_t4}"
            data-tname_fri_mor_t1="${tname_fri_mor_t1}"
            data-tname_fri_mor_t2="${tname_fri_mor_t2}"
            data-tname_fri_mor_t3="${tname_fri_mor_t3}"
            data-tname_fri_mor_t4="${tname_fri_mor_t4}"
            data-sub_fri_aft_t1="${sub_fri_aft_t1}"
            data-sub_fri_aft_t2="${sub_fri_aft_t2}"
            data-sub_fri_aft_t3="${sub_fri_aft_t3}"
            data-sub_fri_aft_t4="${sub_fri_aft_t4}"
            data-tname_fri_aft_t1="${tname_fri_aft_t1}"
            data-tname_fri_aft_t2="${tname_fri_aft_t2}"
            data-tname_fri_aft_t3="${tname_fri_aft_t3}"
            data-tname_fri_aft_t4="${tname_fri_aft_t4}"
            id="${id}pre"
            >${id}</th>
            <th></th>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_mor_t1}" data-img="${img_mon_mor_t1}" data-sub="${sub_mon_mor_t1}" data-g="${g_en}" id="cell${n0}time1">
                <div class="cell-content" >
                    <span class="tr1" data-t="${tname_mon_mor_t1}">${sub_mon_mor_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_mor_t1}" width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_mor_t2}" data-img="${img_mon_mor_t2}" data-sub="${sub_mon_mor_t2}" data-g="${g_en}" id="cell${n0}time2">
                <div class="cell-content" >
                    <span class="tr2" data-t="${tname_mon_mor_t2}">${sub_mon_mor_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_mor_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_mor_t3}" data-img="${img_mon_mor_t3}" data-sub="${sub_mon_mor_t3}" data-g="${g_en}" id="cell${n0}time3">
                <div class="cell-content" >
                    <span class="tr3" data-t="${tname_mon_mor_t3}">${sub_mon_mor_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_mor_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}"  data-tc="${tname_mon_mor_t4}" data-img="${img_mon_mor_t4}" data-sub="${sub_mon_mor_t4}" data-g="${g_en}" id="cell${n0}time4">
                <div class="cell-content">
                    <span class="tr4" data-t="${tname_mon_mor_t4}">${sub_mon_mor_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_mor_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_aft_t1}" data-img="${img_mon_aft_t1}" data-sub="${sub_mon_aft_t1}" data-g="${g_en}" id="cell${n0}time5">
                <div class="cell-content">
                    <span class="tr5" data-t="${tname_mon_aft_t1}">${sub_mon_aft_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_aft_t1}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_aft_t2}" data-img="${img_mon_aft_t2}" data-sub="${sub_mon_aft_t2}" data-g="${g_en}" id="cell${n0}time6">
                <div class="cell-content">
                    <span class="tr6" data-t="${tname_mon_aft_t2}">${sub_mon_aft_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_aft_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_aft_t3}" data-img="${img_mon_aft_t3}" data-sub="${sub_mon_aft_t3}" data-g="${g_en}" id="cell${n0}time7">
                <div class="cell-content">
                    <span class="tr7" data-t="${tname_mon_aft_t3}">${sub_mon_aft_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_aft_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_mon_aft_t4}" data-img="${img_mon_aft_t4}" data-sub="${sub_mon_aft_t4}" data-g="${g_en}" id="cell${n0}time8">
                <div class="cell-content">
                    <span class="tr8" data-t="${tname_mon_aft_t4}">${sub_mon_aft_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_mon_aft_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_mor_t1}" data-img="${img_tue_mor_t1}" data-sub="${sub_tue_mor_t1}" data-g="${g_en}" id="cell${n0}time9">
                <div class="cell-content" >
                    <span class="tr9" data-t="${tname_tue_mor_t1}">${sub_tue_mor_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_mor_t1}" width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_mor_t2}" data-img="${img_tue_mor_t2}" data-sub="${sub_tue_mor_t2}" data-g="${g_en}" id="cell${n0}time10">
                <div class="cell-content" >
                    <span class="tr10" data-t="${tname_tue_mor_t2}">${sub_tue_mor_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_mor_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_mor_t3}" data-img="${img_tue_mor_t3}" data-sub="${sub_tue_mor_t3}" data-g="${g_en}" id="cell${n0}time11">
                <div class="cell-content" >
                    <span class="tr11" data-t="${tname_tue_mor_t3}">${sub_tue_mor_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_mor_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}"  data-tc="${tname_tue_mor_t4}" data-img="${img_tue_mor_t4}" data-sub="${sub_tue_mor_t4}" data-g="${g_en}" id="cell${n0}time12">
                <div class="cell-content">
                    <span class="tr12" data-t="${tname_tue_mor_t4}">${sub_tue_mor_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_mor_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_aft_t1}" data-img="${img_tue_aft_t1}" data-sub="${sub_tue_aft_t1}" data-g="${g_en}" id="cell${n0}time13">
                <div class="cell-content">
                    <span class="tr13" data-t="${tname_tue_aft_t1}">${sub_tue_aft_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_aft_t1}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_aft_t2}" data-img="${img_tue_aft_t2}" data-sub="${sub_tue_aft_t2}" data-g="${g_en}" id="cell${n0}time14">
                <div class="cell-content">
                    <span class="tr14" data-t="${tname_tue_aft_t2}">${sub_tue_aft_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_aft_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_aft_t3}" data-img="${img_tue_aft_t3}" data-sub="${sub_tue_aft_t3}" data-g="${g_en}" id="cell${n0}time15">
                <div class="cell-content">
                    <span class="tr15" data-t="${tname_tue_aft_t3}">${sub_tue_aft_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_aft_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_tue_aft_t4}" data-img="${img_tue_aft_t4}" data-sub="${sub_tue_aft_t4}" data-g="${g_en}" id="cell${n0}time16">
                <div class="cell-content">
                    <span class="tr16" data-t="${tname_tue_aft_t4}">${sub_tue_aft_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_tue_aft_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_mor_t1}" data-img="${img_wed_mor_t1}" data-sub="${sub_wed_mor_t1}" data-g="${g_en}" id="cell${n0}time17">
                <div class="cell-content" >
                    <span class="tr17" data-t="${tname_wed_mor_t1}">${sub_wed_mor_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_mor_t1}" width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_mor_t2}" data-img="${img_wed_mor_t2}" data-sub="${sub_wed_mor_t2}" data-g="${g_en}" id="cell${n0}time18">
                <div class="cell-content" >
                    <span class="tr18" data-t="${tname_wed_mor_t2}">${sub_wed_mor_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_mor_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_mor_t3}" data-img="${img_wed_mor_t3}" data-sub="${sub_wed_mor_t3}" data-g="${g_en}" id="cell${n0}time19">
                <div class="cell-content" >
                    <span class="tr19" data-t="${tname_wed_mor_t3}">${sub_wed_mor_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_mor_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_mor_t4}" data-img="${img_wed_mor_t4}" data-sub="${sub_wed_mor_t4}" data-g="${g_en}" id="cell${n0}time20">
                <div class="cell-content">
                    <span class="tr20" data-t="${tname_wed_mor_t4}">${sub_wed_mor_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_mor_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_aft_t1}" data-img="${img_wed_aft_t1}" data-sub="${sub_wed_aft_t1}" data-g="${g_en}" id="cell${n0}time21">
                <div class="cell-content">
                    <span class="tr21" data-t="${tname_wed_aft_t1}">${sub_wed_aft_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_aft_t1}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_aft_t2}" data-img="${img_wed_aft_t2}" data-sub="${sub_wed_aft_t2}" data-g="${g_en}" id="cell${n0}time22">
                <div class="cell-content">
                    <span class="tr22" data-t="${tname_wed_aft_t2}">${sub_wed_aft_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_aft_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_aft_t3}" data-img="${img_wed_aft_t3}" data-sub="${sub_wed_aft_t3}" data-g="${g_en}" id="cell${n0}time23">
                <div class="cell-content">
                    <span class="tr23" data-t="${tname_wed_aft_t3}">${sub_wed_aft_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_aft_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_wed_aft_t4}" data-img="${img_wed_aft_t4}" data-sub="${sub_wed_aft_t4}" data-g="${g_en}" id="cell${n0}time24">
                <div class="cell-content">
                    <span class="tr24" data-t="${tname_wed_aft_t4}">${sub_wed_aft_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_wed_aft_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_mor_t1}" data-img="${img_thu_mor_t1}" data-sub="${sub_thu_mor_t1}" data-g="${g_en}" id="cell${n0}time25">
                <div class="cell-content" >
                    <span class="tr25" data-t="${tname_thu_mor_t1}">${sub_thu_mor_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_mor_t1}" width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_mor_t2}" data-img="${img_thu_mor_t2}" data-sub="${sub_thu_mor_t2}" data-g="${g_en}" id="cell${n0}time26">
                <div class="cell-content" >
                    <span class="tr26" data-t="${tname_thu_mor_t2}">${sub_thu_mor_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_mor_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_mor_t3}" data-img="${img_thu_mor_t3}" data-sub="${sub_thu_mor_t3}" data-g="${g_en}" id="cell${n0}time27">
                <div class="cell-content" >
                    <span class="tr27" data-t="${tname_thu_mor_t3}">${sub_thu_mor_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_mor_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_mor_t4}" data-img="${img_thu_mor_t4}" data-sub="${sub_thu_mor_t4}" data-g="${g_en}" id="cell${n0}time28">
                <div class="cell-content">
                    <span class="tr28" data-t="${tname_thu_mor_t4}">${sub_thu_mor_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_mor_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_aft_t1}" data-img="${img_thu_aft_t1}" data-sub="${sub_thu_aft_t1}" data-g="${g_en}" id="cell${n0}time29">
                <div class="cell-content">
                    <span class="tr29" data-t="${tname_thu_aft_t1}">${sub_thu_aft_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_aft_t1}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_aft_t2}" data-img="${img_thu_aft_t2}" data-sub="${sub_thu_aft_t2}" data-g="${g_en}" id="cell${n0}time30">
                <div class="cell-content">
                    <span class="tr30" data-t="${tname_thu_aft_t2}">${sub_thu_aft_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_aft_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_aft_t3}" data-img="${img_thu_aft_t3}" data-sub="${sub_thu_aft_t3}" data-g="${g_en}" id="cell${n0}time31">
                <div class="cell-content">
                    <span class="tr31" data-t="${tname_thu_aft_t3}">${sub_thu_aft_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_aft_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_thu_aft_t4}" data-img="${img_thu_aft_t4}" data-sub="${sub_thu_aft_t4}" data-g="${g_en}" id="cell${n0}time32">
                <div class="cell-content">
                    <span class="tr32" data-t="${tname_thu_aft_t4}">${sub_thu_aft_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_thu_aft_t4}"
                    width="20" height="20" />
                </div>
            </td>

                        <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_mor_t1}" data-img="${img_fri_mor_t1}" data-sub="${sub_fri_mor_t1}" data-g="${g_en}" id="cell${n0}time33">
                <div class="cell-content" >
                    <span class="tr33" data-t="${tname_fri_mor_t1}">${sub_fri_mor_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_mor_t1}" width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_mor_t2}" data-img="${img_fri_mor_t2}" data-sub="${sub_fri_mor_t2}" data-g="${g_en}" id="cell${n0}time34">
                <div class="cell-content" >
                    <span class="tr34" data-t="${tname_fri_mor_t2}">${sub_fri_mor_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_mor_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_mor_t3}" data-img="${img_fri_mor_t3}" data-sub="${sub_fri_mor_t3}" data-g="${g_en}" id="cell${n0}time35">
                <div class="cell-content" >
                    <span class="tr35" data-t="${tname_fri_mor_t3}">${sub_fri_mor_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_mor_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_mor_t4}" data-img="${img_fri_mor_t4}" data-sub="${sub_fri_mor_t4}" data-g="${g_en}" id="cell${n0}time36">
                <div class="cell-content">
                    <span class="tr36" data-t="${tname_fri_mor_t4}">${sub_fri_mor_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_mor_t4}"
                    width="20" height="20" />
                </div>
            </td>

            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_aft_t1}" data-img="${img_fri_aft_t1}" data-sub="${sub_fri_aft_t1}" data-g="${g_en}" id="cell${n0}time37">
                <div class="cell-content">
                    <span class="tr37" data-t="${tname_fri_aft_t1}">${sub_fri_aft_t1}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_aft_t1}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_aft_t2}" data-img="${img_fri_aft_t2}" data-sub="${sub_fri_aft_t2}" data-g="${g_en}" id="cell${n0}time38">
                <div class="cell-content">
                    <span class="tr38" data-t="${tname_fri_aft_t2}">${sub_fri_aft_t2}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_aft_t2}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_aft_t3}" data-img="${img_fri_aft_t3}" data-sub="${sub_fri_aft_t3}" data-g="${g_en}" id="cell${n0}time39">
                <div class="cell-content">
                    <span class="tr39" data-t="${tname_fri_aft_t3}">${sub_fri_aft_t3}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_aft_t3}"
                    width="20" height="20" />
                </div>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-nickname="${nickname}" data-tc="${tname_fri_aft_t4}" data-img="${img_fri_aft_t4}" data-sub="${sub_fri_aft_t4}" data-g="${g_en}" id="cell${n0}time40">
                <div class="cell-content">
                    <span class="tr40" data-t="${tname_fri_aft_t4}">${sub_fri_aft_t4}</span>
                    <img class="img-circle" onerror="this.style.display='none';"
                    src="${img_fri_aft_t4}"
                    width="20" height="20" />
                </div>
            </td>
            </tr>
            `;

            let save_btn = document.getElementById(`save_btn`);
            setTimeout(() => {
                num++;
                //Monday
                let cck = document.getElementById(`cell${num}time1`);
                let cck2 = document.getElementById(`cell${num}time2`);
                let cck3 = document.getElementById(`cell${num}time3`);
                let cck4 = document.getElementById(`cell${num}time4`);
                let cck5 = document.getElementById(`cell${num}time5`);
                let cck6 = document.getElementById(`cell${num}time6`);
                let cck7 = document.getElementById(`cell${num}time7`);
                let cck8 = document.getElementById(`cell${num}time8`);
                //Tuesday
                let cck9 = document.getElementById(`cell${num}time9`);
                let cck10 = document.getElementById(`cell${num}time10`);
                let cck11 = document.getElementById(`cell${num}time11`);
                let cck12 = document.getElementById(`cell${num}time12`);
                let cck13 = document.getElementById(`cell${num}time13`);
                let cck14 = document.getElementById(`cell${num}time14`);
                let cck15 = document.getElementById(`cell${num}time15`);
                let cck16 = document.getElementById(`cell${num}time16`);
                //Wednesday
                let cck17 = document.getElementById(`cell${num}time17`);
                let cck18 = document.getElementById(`cell${num}time18`);
                let cck19 = document.getElementById(`cell${num}time19`);
                let cck20 = document.getElementById(`cell${num}time20`);
                let cck21 = document.getElementById(`cell${num}time21`);
                let cck22 = document.getElementById(`cell${num}time22`);
                let cck23 = document.getElementById(`cell${num}time23`);
                let cck24 = document.getElementById(`cell${num}time24`);

                //Thursday
                let cck25 = document.getElementById(`cell${num}time25`);
                let cck26 = document.getElementById(`cell${num}time26`);
                let cck27 = document.getElementById(`cell${num}time27`);
                let cck28 = document.getElementById(`cell${num}time28`);
                let cck29 = document.getElementById(`cell${num}time29`);
                let cck30 = document.getElementById(`cell${num}time30`);
                let cck31 = document.getElementById(`cell${num}time31`);
                let cck32 = document.getElementById(`cell${num}time32`);

                //Friday
                let cck33 = document.getElementById(`cell${num}time33`);
                let cck34 = document.getElementById(`cell${num}time34`);
                let cck35 = document.getElementById(`cell${num}time35`);
                let cck36 = document.getElementById(`cell${num}time36`);
                let cck37 = document.getElementById(`cell${num}time37`);
                let cck38 = document.getElementById(`cell${num}time38`);
                let cck39 = document.getElementById(`cell${num}time39`);
                let cck40 = document.getElementById(`cell${num}time40`);

                //Preview Time Table
                let preview = document.getElementById(`${id}pre`);
                preview.addEventListener('click', () => {
                    //Subjects
                    var sub_mon_mor_t1 = preview.dataset.sub_mon_mor_t1;
                    var sub_mon_mor_t2 = preview.dataset.sub_mon_mor_t2;
                    var sub_mon_mor_t3 = preview.dataset.sub_mon_mor_t3;
                    var sub_mon_mor_t4 = preview.dataset.sub_mon_mor_t4;
                    var sub_mon_aft_t1 = preview.dataset.sub_mon_aft_t1;
                    var sub_mon_aft_t2 = preview.dataset.sub_mon_aft_t2;
                    var sub_mon_aft_t3 = preview.dataset.sub_mon_aft_t3;
                    var sub_mon_aft_t4 = preview.dataset.sub_mon_aft_t4;

                    var sub_tue_mor_t1 = preview.dataset.sub_tue_mor_t1;
                    var sub_tue_mor_t2 = preview.dataset.sub_tue_mor_t2;
                    var sub_tue_mor_t3 = preview.dataset.sub_tue_mor_t3;
                    var sub_tue_mor_t4 = preview.dataset.sub_tue_mor_t4;
                    var sub_tue_aft_t1 = preview.dataset.sub_tue_aft_t1;
                    var sub_tue_aft_t2 = preview.dataset.sub_tue_aft_t2;
                    var sub_tue_aft_t3 = preview.dataset.sub_tue_aft_t3;
                    var sub_tue_aft_t4 = preview.dataset.sub_tue_aft_t4;
                    
                    var sub_wed_mor_t1 = preview.dataset.sub_wed_mor_t1;
                    var sub_wed_mor_t2 = preview.dataset.sub_wed_mor_t2;
                    var sub_wed_mor_t3 = preview.dataset.sub_wed_mor_t3;
                    var sub_wed_mor_t4 = preview.dataset.sub_wed_mor_t4;
                    var sub_wed_aft_t1 = preview.dataset.sub_wed_aft_t1;
                    var sub_wed_aft_t2 = preview.dataset.sub_wed_aft_t2;
                    var sub_wed_aft_t3 = preview.dataset.sub_wed_aft_t3;
                    var sub_wed_aft_t4 = preview.dataset.sub_wed_aft_t4;

                    var sub_thu_mor_t1 = preview.dataset.sub_thu_mor_t1;
                    var sub_thu_mor_t2 = preview.dataset.sub_thu_mor_t2;
                    var sub_thu_mor_t3 = preview.dataset.sub_thu_mor_t3;
                    var sub_thu_mor_t4 = preview.dataset.sub_thu_mor_t4;
                    var sub_thu_aft_t1 = preview.dataset.sub_thu_aft_t1;
                    var sub_thu_aft_t2 = preview.dataset.sub_thu_aft_t2;
                    var sub_thu_aft_t3 = preview.dataset.sub_thu_aft_t3;
                    var sub_thu_aft_t4 = preview.dataset.sub_thu_aft_t4;

                    var sub_fri_mor_t1 = preview.dataset.sub_fri_mor_t1;
                    var sub_fri_mor_t2 = preview.dataset.sub_fri_mor_t2;
                    var sub_fri_mor_t3 = preview.dataset.sub_fri_mor_t3;
                    var sub_fri_mor_t4 = preview.dataset.sub_fri_mor_t4;
                    var sub_fri_aft_t1 = preview.dataset.sub_fri_aft_t1;
                    var sub_fri_aft_t2 = preview.dataset.sub_fri_aft_t2;
                    var sub_fri_aft_t3 = preview.dataset.sub_fri_aft_t3;
                    var sub_fri_aft_t4 = preview.dataset.sub_fri_aft_t4;

                    //Teacher name
                    var tname_mon_mor_t1 = preview.dataset.tname_mon_mor_t1;
                    var tname_mon_mor_t2 = preview.dataset.tname_mon_mor_t2;
                    var tname_mon_mor_t3 = preview.dataset.tname_mon_mor_t3;
                    var tname_mon_mor_t4 = preview.dataset.tname_mon_mor_t4;
                    var tname_mon_aft_t1 = preview.dataset.tname_mon_aft_t1;
                    var tname_mon_aft_t2 = preview.dataset.tname_mon_aft_t2;
                    var tname_mon_aft_t3 = preview.dataset.tname_mon_aft_t3;
                    var tname_mon_aft_t4 = preview.dataset.tname_mon_aft_t4;

                    var tname_tue_mor_t1 = preview.dataset.tname_tue_mor_t1;
                    var tname_tue_mor_t2 = preview.dataset.tname_tue_mor_t2;
                    var tname_tue_mor_t3 = preview.dataset.tname_tue_mor_t3;
                    var tname_tue_mor_t4 = preview.dataset.tname_tue_mor_t4;
                    var tname_tue_aft_t1 = preview.dataset.tname_tue_aft_t1;
                    var tname_tue_aft_t2 = preview.dataset.tname_tue_aft_t2;
                    var tname_tue_aft_t3 = preview.dataset.tname_tue_aft_t3;
                    var tname_tue_aft_t4 = preview.dataset.tname_tue_aft_t4;

                    var tname_wed_mor_t1 = preview.dataset.tname_wed_mor_t1;
                    var tname_wed_mor_t2 = preview.dataset.tname_wed_mor_t2;
                    var tname_wed_mor_t3 = preview.dataset.tname_wed_mor_t3;
                    var tname_wed_mor_t4 = preview.dataset.tname_wed_mor_t4;
                    var tname_wed_aft_t1 = preview.dataset.tname_wed_aft_t1;
                    var tname_wed_aft_t2 = preview.dataset.tname_wed_aft_t2;
                    var tname_wed_aft_t3 = preview.dataset.tname_wed_aft_t3;
                    var tname_wed_aft_t4 = preview.dataset.tname_wed_aft_t4;

                    var tname_thu_mor_t1 = preview.dataset.tname_thu_mor_t1;
                    var tname_thu_mor_t2 = preview.dataset.tname_thu_mor_t2;
                    var tname_thu_mor_t3 = preview.dataset.tname_thu_mor_t3;
                    var tname_thu_mor_t4 = preview.dataset.tname_thu_mor_t4;
                    var tname_thu_aft_t1 = preview.dataset.tname_thu_aft_t1;
                    var tname_thu_aft_t2 = preview.dataset.tname_thu_aft_t2;
                    var tname_thu_aft_t3 = preview.dataset.tname_thu_aft_t3;
                    var tname_thu_aft_t4 = preview.dataset.tname_thu_aft_t4;

                    var tname_fri_mor_t1 = preview.dataset.tname_fri_mor_t1;
                    var tname_fri_mor_t2 = preview.dataset.tname_fri_mor_t2;
                    var tname_fri_mor_t3 = preview.dataset.tname_fri_mor_t3;
                    var tname_fri_mor_t4 = preview.dataset.tname_fri_mor_t4;
                    var tname_fri_aft_t1 = preview.dataset.tname_fri_aft_t1;
                    var tname_fri_aft_t2 = preview.dataset.tname_fri_aft_t2;
                    var tname_fri_aft_t3 = preview.dataset.tname_fri_aft_t3;
                    var tname_fri_aft_t4 = preview.dataset.tname_fri_aft_t4;


                    let sub_mon_mor_kh_t1 = '';
                    let sub_mon_mor_kh_t2 = '';
                    let sub_mon_mor_kh_t3 = '';
                    let sub_mon_mor_kh_t4 = '';
                    let sub_mon_aft_kh_t1 = '';
                    let sub_mon_aft_kh_t2 = '';
                    let sub_mon_aft_kh_t3 = '';
                    let sub_mon_aft_kh_t4 = '';

                    let sub_tue_mor_kh_t1 = '';
                    let sub_tue_mor_kh_t2 = '';
                    let sub_tue_mor_kh_t3 = '';
                    let sub_tue_mor_kh_t4 = '';
                    let sub_tue_aft_kh_t1 = '';
                    let sub_tue_aft_kh_t2 = '';
                    let sub_tue_aft_kh_t3 = '';
                    let sub_tue_aft_kh_t4 = '';

                    let sub_wed_mor_kh_t1 = '';
                    let sub_wed_mor_kh_t2 = '';
                    let sub_wed_mor_kh_t3 = '';
                    let sub_wed_mor_kh_t4 = '';
                    let sub_wed_aft_kh_t1 = '';
                    let sub_wed_aft_kh_t2 = '';
                    let sub_wed_aft_kh_t3 = '';
                    let sub_wed_aft_kh_t4 = '';

                    let sub_thu_mor_kh_t1 = '';
                    let sub_thu_mor_kh_t2 = '';
                    let sub_thu_mor_kh_t3 = '';
                    let sub_thu_mor_kh_t4 = '';
                    let sub_thu_aft_kh_t1 = '';
                    let sub_thu_aft_kh_t2 = '';
                    let sub_thu_aft_kh_t3 = '';
                    let sub_thu_aft_kh_t4 = '';

                    let sub_fri_mor_kh_t1 = '';
                    let sub_fri_mor_kh_t2 = '';
                    let sub_fri_mor_kh_t3 = '';
                    let sub_fri_mor_kh_t4 = '';
                    let sub_fri_aft_kh_t1 = '';
                    let sub_fri_aft_kh_t2 = '';
                    let sub_fri_aft_kh_t3 = '';
                    let sub_fri_aft_kh_t4 = '';

                    if (sub_mon_mor_t1 == 'PE') { sub_mon_mor_kh_t1 = 'កីឡា' }
                    if (sub_mon_mor_t1 == 'E') { sub_mon_mor_kh_t1 = 'អង់គ្លេស' }
                    if (sub_mon_mor_t1 == 'ICT') { sub_mon_mor_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_mon_mor_t1 == 'M') { sub_mon_mor_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_mon_mor_t1 == 'C') { sub_mon_mor_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_mon_mor_t1 == 'Ho') { sub_mon_mor_kh_t1 = 'គេហៈ' }
                    if (sub_mon_mor_t1 == 'Bio') { sub_mon_mor_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_mor_t1 == 'H') { sub_mon_mor_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_mor_t1 == 'ES') { sub_mon_mor_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_mor_t1 == 'G') { sub_mon_mor_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_mon_mor_t1 == 'P') { sub_mon_mor_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_mon_mor_t1 == 'Ac') { sub_mon_mor_kh_t1 = 'សកម្មភាព' }
                    if (sub_mon_mor_t1 == 'Bi') { sub_mon_mor_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_mor_t1 == 'Mo') { sub_mon_mor_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_mor_t1 == 'Eco') { sub_mon_mor_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_mor_t1 == 'K') { sub_mon_mor_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_mor_t1 == 'Sci') { sub_mon_mor_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_mor_t1 == 'Soc') { sub_mon_mor_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_mon_mor_t2 == 'PE') { sub_mon_mor_kh_t2 = 'កីឡា' }
                    if (sub_mon_mor_t2 == 'E') { sub_mon_mor_kh_t2 = 'អង់គ្លេស' }
                    if (sub_mon_mor_t2 == 'ICT') { sub_mon_mor_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_mon_mor_t2 == 'M') { sub_mon_mor_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_mon_mor_t2 == 'C') { sub_mon_mor_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_mon_mor_t2 == 'Ho') { sub_mon_mor_kh_t2 = 'គេហៈ' }
                    if (sub_mon_mor_t2 == 'Bio') { sub_mon_mor_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_mor_t2 == 'H') { sub_mon_mor_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_mor_t2 == 'ES') { sub_mon_mor_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_mor_t2 == 'G') { sub_mon_mor_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_mon_mor_t2 == 'P') { sub_mon_mor_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_mon_mor_t2 == 'Ac') { sub_mon_mor_kh_t2 = 'សកម្មភាព' }
                    if (sub_mon_mor_t2 == 'Bi') { sub_mon_mor_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_mor_t2 == 'Mo') { sub_mon_mor_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_mor_t2 == 'Eco') { sub_mon_mor_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_mor_t2 == 'K') { sub_mon_mor_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_mor_t2 == 'Sci') { sub_mon_mor_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_mor_t2 == 'Soc') { sub_mon_mor_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_mon_mor_t3 == 'PE') { sub_mon_mor_kh_t3 = 'កីឡា' }
                    if (sub_mon_mor_t3 == 'E') { sub_mon_mor_kh_t3 = 'អង់គ្លេស' }
                    if (sub_mon_mor_t3 == 'ICT') { sub_mon_mor_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_mon_mor_t3 == 'M') { sub_mon_mor_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_mon_mor_t3 == 'C') { sub_mon_mor_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_mon_mor_t3 == 'Ho') { sub_mon_mor_kh_t3 = 'គេហៈ' }
                    if (sub_mon_mor_t3 == 'Bio') { sub_mon_mor_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_mor_t3 == 'H') { sub_mon_mor_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_mor_t3 == 'ES') { sub_mon_mor_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_mor_t3 == 'G') { sub_mon_mor_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_mon_mor_t3 == 'P') { sub_mon_mor_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_mon_mor_t3 == 'Ac') { sub_mon_mor_kh_t3 = 'សកម្មភាព' }
                    if (sub_mon_mor_t3 == 'Bi') { sub_mon_mor_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_mor_t3 == 'Mo') { sub_mon_mor_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_mor_t3 == 'Eco') { sub_mon_mor_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_mor_t3 == 'K') { sub_mon_mor_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_mor_t3 == 'Sci') { sub_mon_mor_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_mor_t3 == 'Soc') { sub_mon_mor_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_mon_mor_t4 == 'PE') { sub_mon_mor_kh_t4 = 'កីឡា' }
                    if (sub_mon_mor_t4 == 'E') { sub_mon_mor_kh_t4 = 'អង់គ្លេស' }
                    if (sub_mon_mor_t4 == 'ICT') { sub_mon_mor_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_mon_mor_t4 == 'M') { sub_mon_mor_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_mon_mor_t4 == 'C') { sub_mon_mor_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_mon_mor_t4 == 'Ho') { sub_mon_mor_kh_t4 = 'គេហៈ' }
                    if (sub_mon_mor_t4 == 'Bio') { sub_mon_mor_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_mor_t4 == 'H') { sub_mon_mor_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_mor_t4 == 'ES') { sub_mon_mor_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_mor_t4 == 'G') { sub_mon_mor_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_mon_mor_t4 == 'P') { sub_mon_mor_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_mon_mor_t4 == 'Ac') { sub_mon_mor_kh_t4 = 'សកម្មភាព' }
                    if (sub_mon_mor_t4 == 'Bi') { sub_mon_mor_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_mor_t4 == 'Mo') { sub_mon_mor_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_mor_t4 == 'Eco') { sub_mon_mor_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_mor_t4 == 'K') { sub_mon_mor_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_mor_t4 == 'Sci') { sub_mon_mor_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_mor_t4 == 'Soc') { sub_mon_mor_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_mon_aft_t1 == 'PE') { sub_mon_aft_kh_t1 = 'កីឡា' }
                    if (sub_mon_aft_t1 == 'E') { sub_mon_aft_kh_t1 = 'អង់គ្លេស' }
                    if (sub_mon_aft_t1 == 'ICT') { sub_mon_aft_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_mon_aft_t1 == 'M') { sub_mon_aft_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_mon_aft_t1 == 'C') { sub_mon_aft_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_mon_aft_t1 == 'Ho') { sub_mon_aft_kh_t1 = 'គេហៈ' }
                    if (sub_mon_aft_t1 == 'Bio') { sub_mon_aft_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_aft_t1 == 'H') { sub_mon_aft_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_aft_t1 == 'ES') { sub_mon_aft_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_aft_t1 == 'G') { sub_mon_aft_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_mon_aft_t1 == 'P') { sub_mon_aft_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_mon_aft_t1 == 'Ac') { sub_mon_aft_kh_t1 = 'សកម្មភាព' }
                    if (sub_mon_aft_t1 == 'Bi') { sub_mon_aft_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_aft_t1 == 'Mo') { sub_mon_aft_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_aft_t1 == 'Eco') { sub_mon_aft_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_aft_t1 == 'K') { sub_mon_aft_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_aft_t1 == 'Sci') { sub_mon_aft_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_aft_t1 == 'Soc') { sub_mon_aft_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_mon_aft_t2 == 'PE') { sub_mon_aft_kh_t2 = 'កីឡា' }
                    if (sub_mon_aft_t2 == 'E') { sub_mon_aft_kh_t2 = 'អង់គ្លេស' }
                    if (sub_mon_aft_t2 == 'ICT') { sub_mon_aft_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_mon_aft_t2 == 'M') { sub_mon_aft_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_mon_aft_t2 == 'C') { sub_mon_aft_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_mon_aft_t2 == 'Ho') { sub_mon_aft_kh_t2 = 'គេហៈ' }
                    if (sub_mon_aft_t2 == 'Bio') { sub_mon_aft_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_aft_t2 == 'H') { sub_mon_aft_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_aft_t2 == 'ES') { sub_mon_aft_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_aft_t2 == 'G') { sub_mon_aft_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_mon_aft_t2 == 'P') { sub_mon_aft_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_mon_aft_t2 == 'Ac') { sub_mon_aft_kh_t2 = 'សកម្មភាព' }
                    if (sub_mon_aft_t2 == 'Bi') { sub_mon_aft_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_aft_t2 == 'Mo') { sub_mon_aft_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_aft_t2 == 'Eco') { sub_mon_aft_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_aft_t2 == 'K') { sub_mon_aft_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_aft_t2 == 'Sci') { sub_mon_aft_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_aft_t2 == 'Soc') { sub_mon_aft_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_mon_aft_t3 == 'PE') { sub_mon_aft_kh_t3 = 'កីឡា' }
                    if (sub_mon_aft_t3 == 'E') { sub_mon_aft_kh_t3 = 'អង់គ្លេស' }
                    if (sub_mon_aft_t3 == 'ICT') { sub_mon_aft_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_mon_aft_t3 == 'M') { sub_mon_aft_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_mon_aft_t3 == 'C') { sub_mon_aft_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_mon_aft_t3 == 'Ho') { sub_mon_aft_kh_t3 = 'គេហៈ' }
                    if (sub_mon_aft_t3 == 'Bio') { sub_mon_aft_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_aft_t3 == 'H') { sub_mon_aft_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_aft_t3 == 'ES') { sub_mon_aft_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_aft_t3 == 'G') { sub_mon_aft_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_mon_aft_t3 == 'P') { sub_mon_aft_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_mon_aft_t3 == 'Ac') { sub_mon_aft_kh_t3 = 'សកម្មភាព' }
                    if (sub_mon_aft_t3 == 'Bi') { sub_mon_aft_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_aft_t3 == 'Mo') { sub_mon_aft_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_aft_t3 == 'Eco') { sub_mon_aft_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_aft_t3 == 'K') { sub_mon_aft_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_aft_t3 == 'Sci') { sub_mon_aft_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_aft_t3 == 'Soc') { sub_mon_aft_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_mon_aft_t4 == 'PE') { sub_mon_aft_kh_t4 = 'កីឡា' }
                    if (sub_mon_aft_t4 == 'E') { sub_mon_aft_kh_t4 = 'អង់គ្លេស' }
                    if (sub_mon_aft_t4 == 'ICT') { sub_mon_aft_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_mon_aft_t4 == 'M') { sub_mon_aft_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_mon_aft_t4 == 'C') { sub_mon_aft_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_mon_aft_t4 == 'Ho') { sub_mon_aft_kh_t4 = 'គេហៈ' }
                    if (sub_mon_aft_t4 == 'Bio') { sub_mon_aft_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_mon_aft_t4 == 'H') { sub_mon_aft_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_mon_aft_t4 == 'ES') { sub_mon_aft_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_mon_aft_t4 == 'G') { sub_mon_aft_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_mon_aft_t4 == 'P') { sub_mon_aft_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_mon_aft_t4 == 'Ac') { sub_mon_aft_kh_t4 = 'សកម្មភាព' }
                    if (sub_mon_aft_t4 == 'Bi') { sub_mon_aft_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_mon_aft_t4 == 'Mo') { sub_mon_aft_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_mon_aft_t4 == 'Eco') { sub_mon_aft_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_mon_aft_t4 == 'K') { sub_mon_aft_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_mon_aft_t4 == 'Sci') { sub_mon_aft_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_mon_aft_t4 == 'Soc') { sub_mon_aft_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_tue_mor_t1 == 'PE') { sub_tue_mor_kh_t1 = 'កីឡា' }
                    if (sub_tue_mor_t1 == 'E') { sub_tue_mor_kh_t1 = 'អង់គ្លេស' }
                    if (sub_tue_mor_t1 == 'ICT') { sub_tue_mor_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_tue_mor_t1 == 'M') { sub_tue_mor_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_tue_mor_t1 == 'C') { sub_tue_mor_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_tue_mor_t1 == 'Ho') { sub_tue_mor_kh_t1 = 'គេហៈ' }
                    if (sub_tue_mor_t1 == 'Bio') { sub_tue_mor_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_mor_t1 == 'H') { sub_tue_mor_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_mor_t1 == 'ES') { sub_tue_mor_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_mor_t1 == 'G') { sub_tue_mor_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_tue_mor_t1 == 'P') { sub_tue_mor_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_tue_mor_t1 == 'Ac') { sub_tue_mor_kh_t1 = 'សកម្មភាព' }
                    if (sub_tue_mor_t1 == 'Bi') { sub_tue_mor_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_mor_t1 == 'Mo') { sub_tue_mor_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_mor_t1 == 'Eco') { sub_tue_mor_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_mor_t1 == 'K') { sub_tue_mor_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_mor_t1 == 'Sci') { sub_tue_mor_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_mor_t1 == 'Soc') { sub_tue_mor_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_tue_mor_t2 == 'PE') { sub_tue_mor_kh_t2 = 'កីឡា' }
                    if (sub_tue_mor_t2 == 'E') { sub_tue_mor_kh_t2 = 'អង់គ្លេស' }
                    if (sub_tue_mor_t2 == 'ICT') { sub_tue_mor_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_tue_mor_t2 == 'M') { sub_tue_mor_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_tue_mor_t2 == 'C') { sub_tue_mor_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_tue_mor_t2 == 'Ho') { sub_tue_mor_kh_t2 = 'គេហៈ' }
                    if (sub_tue_mor_t2 == 'Bio') { sub_tue_mor_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_mor_t2 == 'H') { sub_tue_mor_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_mor_t2 == 'ES') { sub_tue_mor_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_mor_t2 == 'G') { sub_tue_mor_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_tue_mor_t2 == 'P') { sub_tue_mor_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_tue_mor_t2 == 'Ac') { sub_tue_mor_kh_t2 = 'សកម្មភាព' }
                    if (sub_tue_mor_t2 == 'Bi') { sub_tue_mor_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_mor_t2 == 'Mo') { sub_tue_mor_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_mor_t2 == 'Eco') { sub_tue_mor_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_mor_t2 == 'K') { sub_tue_mor_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_mor_t2 == 'Sci') { sub_tue_mor_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_mor_t2 == 'Soc') { sub_tue_mor_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_tue_mor_t3 == 'PE') { sub_tue_mor_kh_t3 = 'កីឡា' }
                    if (sub_tue_mor_t3 == 'E') { sub_tue_mor_kh_t3 = 'អង់គ្លេស' }
                    if (sub_tue_mor_t3 == 'ICT') { sub_tue_mor_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_tue_mor_t3 == 'M') { sub_tue_mor_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_tue_mor_t3 == 'C') { sub_tue_mor_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_tue_mor_t3 == 'Ho') { sub_tue_mor_kh_t3 = 'គេហៈ' }
                    if (sub_tue_mor_t3 == 'Bio') { sub_tue_mor_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_mor_t3 == 'H') { sub_tue_mor_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_mor_t3 == 'ES') { sub_tue_mor_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_mor_t3 == 'G') { sub_tue_mor_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_tue_mor_t3 == 'P') { sub_tue_mor_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_tue_mor_t3 == 'Ac') { sub_tue_mor_kh_t3 = 'សកម្មភាព' }
                    if (sub_tue_mor_t3 == 'Bi') { sub_tue_mor_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_mor_t3 == 'Mo') { sub_tue_mor_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_mor_t3 == 'Eco') { sub_tue_mor_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_mor_t3 == 'K') { sub_tue_mor_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_mor_t3 == 'Sci') { sub_tue_mor_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_mor_t3 == 'Soc') { sub_tue_mor_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_tue_mor_t4 == 'PE') { sub_tue_mor_kh_t4 = 'កីឡា' }
                    if (sub_tue_mor_t4 == 'E') { sub_tue_mor_kh_t4 = 'អង់គ្លេស' }
                    if (sub_tue_mor_t4 == 'ICT') { sub_tue_mor_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_tue_mor_t4 == 'M') { sub_tue_mor_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_tue_mor_t4 == 'C') { sub_tue_mor_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_tue_mor_t4 == 'Ho') { sub_tue_mor_kh_t4 = 'គេហៈ' }
                    if (sub_tue_mor_t4 == 'Bio') { sub_tue_mor_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_mor_t4 == 'H') { sub_tue_mor_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_mor_t4 == 'ES') { sub_tue_mor_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_mor_t4 == 'G') { sub_tue_mor_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_tue_mor_t4 == 'P') { sub_tue_mor_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_tue_mor_t4 == 'Ac') { sub_tue_mor_kh_t4 = 'សកម្មភាព' }
                    if (sub_tue_mor_t4 == 'Bi') { sub_tue_mor_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_mor_t4 == 'Mo') { sub_tue_mor_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_mor_t4 == 'Eco') { sub_tue_mor_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_mor_t4 == 'K') { sub_tue_mor_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_mor_t4 == 'Sci') { sub_tue_mor_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_mor_t4 == 'Soc') { sub_tue_mor_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_tue_aft_t1 == 'PE') { sub_tue_aft_kh_t1 = 'កីឡា' }
                    if (sub_tue_aft_t1 == 'E') { sub_tue_aft_kh_t1 = 'អង់គ្លេស' }
                    if (sub_tue_aft_t1 == 'ICT') { sub_tue_aft_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_tue_aft_t1 == 'M') { sub_tue_aft_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_tue_aft_t1 == 'C') { sub_tue_aft_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_tue_aft_t1 == 'Ho') { sub_tue_aft_kh_t1 = 'គេហៈ' }
                    if (sub_tue_aft_t1 == 'Bio') { sub_tue_aft_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_aft_t1 == 'H') { sub_tue_aft_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_aft_t1 == 'ES') { sub_tue_aft_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_aft_t1 == 'G') { sub_tue_aft_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_tue_aft_t1 == 'P') { sub_tue_aft_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_tue_aft_t1 == 'Ac') { sub_tue_aft_kh_t1 = 'សកម្មភាព' }
                    if (sub_tue_aft_t1 == 'Bi') { sub_tue_aft_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_aft_t1 == 'Mo') { sub_tue_aft_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_aft_t1 == 'Eco') { sub_tue_aft_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_aft_t1 == 'K') { sub_tue_aft_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_aft_t1 == 'Sci') { sub_tue_aft_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_aft_t1 == 'Soc') { sub_tue_aft_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_tue_aft_t2 == 'PE') { sub_tue_aft_kh_t2 = 'កីឡា' }
                    if (sub_tue_aft_t2 == 'E') { sub_tue_aft_kh_t2 = 'អង់គ្លេស' }
                    if (sub_tue_aft_t2 == 'ICT') { sub_tue_aft_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_tue_aft_t2 == 'M') { sub_tue_aft_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_tue_aft_t2 == 'C') { sub_tue_aft_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_tue_aft_t2 == 'Ho') { sub_tue_aft_kh_t2 = 'គេហៈ' }
                    if (sub_tue_aft_t2 == 'Bio') { sub_tue_aft_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_aft_t2 == 'H') { sub_tue_aft_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_aft_t2 == 'ES') { sub_tue_aft_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_aft_t2 == 'G') { sub_tue_aft_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_tue_aft_t2 == 'P') { sub_tue_aft_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_tue_aft_t2 == 'Ac') { sub_tue_aft_kh_t2 = 'សកម្មភាព' }
                    if (sub_tue_aft_t2 == 'Bi') { sub_tue_aft_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_aft_t2 == 'Mo') { sub_tue_aft_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_aft_t2 == 'Eco') { sub_tue_aft_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_aft_t2 == 'K') { sub_tue_aft_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_aft_t2 == 'Sci') { sub_tue_aft_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_aft_t2 == 'Soc') { sub_tue_aft_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_tue_aft_t3 == 'PE') { sub_tue_aft_kh_t3 = 'កីឡា' }
                    if (sub_tue_aft_t3 == 'E') { sub_tue_aft_kh_t3 = 'អង់គ្លេស' }
                    if (sub_tue_aft_t3 == 'ICT') { sub_tue_aft_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_tue_aft_t3 == 'M') { sub_tue_aft_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_tue_aft_t3 == 'C') { sub_tue_aft_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_tue_aft_t3 == 'Ho') { sub_tue_aft_kh_t3 = 'គេហៈ' }
                    if (sub_tue_aft_t3 == 'Bio') { sub_tue_aft_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_aft_t3 == 'H') { sub_tue_aft_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_aft_t3 == 'ES') { sub_tue_aft_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_aft_t3 == 'G') { sub_tue_aft_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_tue_aft_t3 == 'P') { sub_tue_aft_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_tue_aft_t3 == 'Ac') { sub_tue_aft_kh_t3 = 'សកម្មភាព' }
                    if (sub_tue_aft_t3 == 'Bi') { sub_tue_aft_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_aft_t3 == 'Mo') { sub_tue_aft_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_aft_t3 == 'Eco') { sub_tue_aft_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_aft_t3 == 'K') { sub_tue_aft_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_aft_t3 == 'Sci') { sub_tue_aft_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_aft_t3 == 'Soc') { sub_tue_aft_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_tue_aft_t4 == 'PE') { sub_tue_aft_kh_t4 = 'កីឡា' }
                    if (sub_tue_aft_t4 == 'E') { sub_tue_aft_kh_t4 = 'អង់គ្លេស' }
                    if (sub_tue_aft_t4 == 'ICT') { sub_tue_aft_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_tue_aft_t4 == 'M') { sub_tue_aft_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_tue_aft_t4 == 'C') { sub_tue_aft_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_tue_aft_t4 == 'Ho') { sub_tue_aft_kh_t4 = 'គេហៈ' }
                    if (sub_tue_aft_t4 == 'Bio') { sub_tue_aft_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_tue_aft_t4 == 'H') { sub_tue_aft_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_tue_aft_t4 == 'ES') { sub_tue_aft_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_tue_aft_t4 == 'G') { sub_tue_aft_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_tue_aft_t4 == 'P') { sub_tue_aft_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_tue_aft_t4 == 'Ac') { sub_tue_aft_kh_t4 = 'សកម្មភាព' }
                    if (sub_tue_aft_t4 == 'Bi') { sub_tue_aft_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_tue_aft_t4 == 'Mo') { sub_tue_aft_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_tue_aft_t4 == 'Eco') { sub_tue_aft_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_tue_aft_t4 == 'K') { sub_tue_aft_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_tue_aft_t4 == 'Sci') { sub_tue_aft_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_tue_aft_t4 == 'Soc') { sub_tue_aft_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_wed_mor_t1 == 'PE') { sub_wed_mor_kh_t1 = 'កីឡា' }
                    if (sub_wed_mor_t1 == 'E') { sub_wed_mor_kh_t1 = 'អង់គ្លេស' }
                    if (sub_wed_mor_t1 == 'ICT') { sub_wed_mor_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_wed_mor_t1 == 'M') { sub_wed_mor_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_wed_mor_t1 == 'C') { sub_wed_mor_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_wed_mor_t1 == 'Ho') { sub_wed_mor_kh_t1 = 'គេហៈ' }
                    if (sub_wed_mor_t1 == 'Bio') { sub_wed_mor_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_mor_t1 == 'H') { sub_wed_mor_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_mor_t1 == 'ES') { sub_wed_mor_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_mor_t1 == 'G') { sub_wed_mor_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_wed_mor_t1 == 'P') { sub_wed_mor_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_wed_mor_t1 == 'Ac') { sub_wed_mor_kh_t1 = 'សកម្មភាព' }
                    if (sub_wed_mor_t1 == 'Bi') { sub_wed_mor_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_mor_t1 == 'Mo') { sub_wed_mor_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_mor_t1 == 'Eco') { sub_wed_mor_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_mor_t1 == 'K') { sub_wed_mor_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_mor_t1 == 'Sci') { sub_wed_mor_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_mor_t1 == 'Soc') { sub_wed_mor_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_wed_mor_t2 == 'PE') { sub_wed_mor_kh_t2 = 'កីឡា' }
                    if (sub_wed_mor_t2 == 'E') { sub_wed_mor_kh_t2 = 'អង់គ្លេស' }
                    if (sub_wed_mor_t2 == 'ICT') { sub_wed_mor_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_wed_mor_t2 == 'M') { sub_wed_mor_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_wed_mor_t2 == 'C') { sub_wed_mor_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_wed_mor_t2 == 'Ho') { sub_wed_mor_kh_t2 = 'គេហៈ' }
                    if (sub_wed_mor_t2 == 'Bio') { sub_wed_mor_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_mor_t2 == 'H') { sub_wed_mor_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_mor_t2 == 'ES') { sub_wed_mor_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_mor_t2 == 'G') { sub_wed_mor_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_wed_mor_t2 == 'P') { sub_wed_mor_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_wed_mor_t2 == 'Ac') { sub_wed_mor_kh_t2 = 'សកម្មភាព' }
                    if (sub_wed_mor_t2 == 'Bi') { sub_wed_mor_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_mor_t2 == 'Mo') { sub_wed_mor_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_mor_t2 == 'Eco') { sub_wed_mor_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_mor_t2 == 'K') { sub_wed_mor_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_mor_t2 == 'Sci') { sub_wed_mor_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_mor_t2 == 'Soc') { sub_wed_mor_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_wed_mor_t3 == 'PE') { sub_wed_mor_kh_t3 = 'កីឡា' }
                    if (sub_wed_mor_t3 == 'E') { sub_wed_mor_kh_t3 = 'អង់គ្លេស' }
                    if (sub_wed_mor_t3 == 'ICT') { sub_wed_mor_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_wed_mor_t3 == 'M') { sub_wed_mor_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_wed_mor_t3 == 'C') { sub_wed_mor_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_wed_mor_t3 == 'Ho') { sub_wed_mor_kh_t3 = 'គេហៈ' }
                    if (sub_wed_mor_t3 == 'Bio') { sub_wed_mor_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_mor_t3 == 'H') { sub_wed_mor_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_mor_t3 == 'ES') { sub_wed_mor_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_mor_t3 == 'G') { sub_wed_mor_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_wed_mor_t3 == 'P') { sub_wed_mor_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_wed_mor_t3 == 'Ac') { sub_wed_mor_kh_t3 = 'សកម្មភាព' }
                    if (sub_wed_mor_t3 == 'Bi') { sub_wed_mor_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_mor_t3 == 'Mo') { sub_wed_mor_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_mor_t3 == 'Eco') { sub_wed_mor_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_mor_t3 == 'K') { sub_wed_mor_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_mor_t3 == 'Sci') { sub_wed_mor_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_mor_t3 == 'Soc') { sub_wed_mor_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_wed_mor_t4 == 'PE') { sub_wed_mor_kh_t4 = 'កីឡា' }
                    if (sub_wed_mor_t4 == 'E') { sub_wed_mor_kh_t4 = 'អង់គ្លេស' }
                    if (sub_wed_mor_t4 == 'ICT') { sub_wed_mor_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_wed_mor_t4 == 'M') { sub_wed_mor_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_wed_mor_t4 == 'C') { sub_wed_mor_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_wed_mor_t4 == 'Ho') { sub_wed_mor_kh_t4 = 'គេហៈ' }
                    if (sub_wed_mor_t4 == 'Bio') { sub_wed_mor_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_mor_t4 == 'H') { sub_wed_mor_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_mor_t4 == 'ES') { sub_wed_mor_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_mor_t4 == 'G') { sub_wed_mor_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_wed_mor_t4 == 'P') { sub_wed_mor_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_wed_mor_t4 == 'Ac') { sub_wed_mor_kh_t4 = 'សកម្មភាព' }
                    if (sub_wed_mor_t4 == 'Bi') { sub_wed_mor_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_mor_t4 == 'Mo') { sub_wed_mor_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_mor_t4 == 'Eco') { sub_wed_mor_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_mor_t4 == 'K') { sub_wed_mor_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_mor_t4 == 'Sci') { sub_wed_mor_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_mor_t4 == 'Soc') { sub_wed_mor_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_wed_aft_t1 == 'PE') { sub_wed_aft_kh_t1 = 'កីឡា' }
                    if (sub_wed_aft_t1 == 'E') { sub_wed_aft_kh_t1 = 'អង់គ្លេស' }
                    if (sub_wed_aft_t1 == 'ICT') { sub_wed_aft_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_wed_aft_t1 == 'M') { sub_wed_aft_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_wed_aft_t1 == 'C') { sub_wed_aft_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_wed_aft_t1 == 'Ho') { sub_wed_aft_kh_t1 = 'គេហៈ' }
                    if (sub_wed_aft_t1 == 'Bio') { sub_wed_aft_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_aft_t1 == 'H') { sub_wed_aft_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_aft_t1 == 'ES') { sub_wed_aft_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_aft_t1 == 'G') { sub_wed_aft_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_wed_aft_t1 == 'P') { sub_wed_aft_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_wed_aft_t1 == 'Ac') { sub_wed_aft_kh_t1 = 'សកម្មភាព' }
                    if (sub_wed_aft_t1 == 'Bi') { sub_wed_aft_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_aft_t1 == 'Mo') { sub_wed_aft_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_aft_t1 == 'Eco') { sub_wed_aft_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_aft_t1 == 'K') { sub_wed_aft_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_aft_t1 == 'Sci') { sub_wed_aft_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_aft_t1 == 'Soc') { sub_wed_aft_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_wed_aft_t2 == 'PE') { sub_wed_aft_kh_t2 = 'កីឡា' }
                    if (sub_wed_aft_t2 == 'E') { sub_wed_aft_kh_t2 = 'អង់គ្លេស' }
                    if (sub_wed_aft_t2 == 'ICT') { sub_wed_aft_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_wed_aft_t2 == 'M') { sub_wed_aft_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_wed_aft_t2 == 'C') { sub_wed_aft_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_wed_aft_t2 == 'Ho') { sub_wed_aft_kh_t2 = 'គេហៈ' }
                    if (sub_wed_aft_t2 == 'Bio') { sub_wed_aft_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_aft_t2 == 'H') { sub_wed_aft_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_aft_t2 == 'ES') { sub_wed_aft_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_aft_t2 == 'G') { sub_wed_aft_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_wed_aft_t2 == 'P') { sub_wed_aft_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_wed_aft_t2 == 'Ac') { sub_wed_aft_kh_t2 = 'សកម្មភាព' }
                    if (sub_wed_aft_t2 == 'Bi') { sub_wed_aft_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_aft_t2 == 'Mo') { sub_wed_aft_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_aft_t2 == 'Eco') { sub_wed_aft_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_aft_t2 == 'K') { sub_wed_aft_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_aft_t2 == 'Sci') { sub_wed_aft_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_aft_t2 == 'Soc') { sub_wed_aft_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_wed_aft_t3 == 'PE') { sub_wed_aft_kh_t3 = 'កីឡា' }
                    if (sub_wed_aft_t3 == 'E') { sub_wed_aft_kh_t3 = 'អង់គ្លេស' }
                    if (sub_wed_aft_t3 == 'ICT') { sub_wed_aft_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_wed_aft_t3 == 'M') { sub_wed_aft_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_wed_aft_t3 == 'C') { sub_wed_aft_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_wed_aft_t3 == 'Ho') { sub_wed_aft_kh_t3 = 'គេហៈ' }
                    if (sub_wed_aft_t3 == 'Bio') { sub_wed_aft_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_aft_t3 == 'H') { sub_wed_aft_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_aft_t3 == 'ES') { sub_wed_aft_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_aft_t3 == 'G') { sub_wed_aft_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_wed_aft_t3 == 'P') { sub_wed_aft_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_wed_aft_t3 == 'Ac') { sub_wed_aft_kh_t3 = 'សកម្មភាព' }
                    if (sub_wed_aft_t3 == 'Bi') { sub_wed_aft_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_aft_t3 == 'Mo') { sub_wed_aft_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_aft_t3 == 'Eco') { sub_wed_aft_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_aft_t3 == 'K') { sub_wed_aft_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_aft_t3 == 'Sci') { sub_wed_aft_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_aft_t3 == 'Soc') { sub_wed_aft_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_wed_aft_t4 == 'PE') { sub_wed_aft_kh_t4 = 'កីឡា' }
                    if (sub_wed_aft_t4 == 'E') { sub_wed_aft_kh_t4 = 'អង់គ្លេស' }
                    if (sub_wed_aft_t4 == 'ICT') { sub_wed_aft_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_wed_aft_t4 == 'M') { sub_wed_aft_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_wed_aft_t4 == 'C') { sub_wed_aft_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_wed_aft_t4 == 'Ho') { sub_wed_aft_kh_t4 = 'គេហៈ' }
                    if (sub_wed_aft_t4 == 'Bio') { sub_wed_aft_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_wed_aft_t4 == 'H') { sub_wed_aft_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_wed_aft_t4 == 'ES') { sub_wed_aft_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_wed_aft_t4 == 'G') { sub_wed_aft_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_wed_aft_t4 == 'P') { sub_wed_aft_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_wed_aft_t4 == 'Ac') { sub_wed_aft_kh_t4 = 'សកម្មភាព' }
                    if (sub_wed_aft_t4 == 'Bi') { sub_wed_aft_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_wed_aft_t4 == 'Mo') { sub_wed_aft_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_wed_aft_t4 == 'Eco') { sub_wed_aft_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_wed_aft_t4 == 'K') { sub_wed_aft_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_wed_aft_t4 == 'Sci') { sub_wed_aft_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_wed_aft_t4 == 'Soc') { sub_wed_aft_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_thu_mor_t1 == 'PE') { sub_thu_mor_kh_t1 = 'កីឡា' }
                    if (sub_thu_mor_t1 == 'E') { sub_thu_mor_kh_t1 = 'អង់គ្លេស' }
                    if (sub_thu_mor_t1 == 'ICT') { sub_thu_mor_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_thu_mor_t1 == 'M') { sub_thu_mor_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_thu_mor_t1 == 'C') { sub_thu_mor_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_thu_mor_t1 == 'Ho') { sub_thu_mor_kh_t1 = 'គេហៈ' }
                    if (sub_thu_mor_t1 == 'Bio') { sub_thu_mor_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_mor_t1 == 'H') { sub_thu_mor_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_mor_t1 == 'ES') { sub_thu_mor_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_mor_t1 == 'G') { sub_thu_mor_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_thu_mor_t1 == 'P') { sub_thu_mor_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_thu_mor_t1 == 'Ac') { sub_thu_mor_kh_t1 = 'សកម្មភាព' }
                    if (sub_thu_mor_t1 == 'Bi') { sub_thu_mor_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_mor_t1 == 'Mo') { sub_thu_mor_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_mor_t1 == 'Eco') { sub_thu_mor_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_mor_t1 == 'K') { sub_thu_mor_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_mor_t1 == 'Sci') { sub_thu_mor_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_mor_t1 == 'Soc') { sub_thu_mor_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_thu_mor_t2 == 'PE') { sub_thu_mor_kh_t2 = 'កីឡា' }
                    if (sub_thu_mor_t2 == 'E') { sub_thu_mor_kh_t2 = 'អង់គ្លេស' }
                    if (sub_thu_mor_t2 == 'ICT') { sub_thu_mor_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_thu_mor_t2 == 'M') { sub_thu_mor_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_thu_mor_t2 == 'C') { sub_thu_mor_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_thu_mor_t2 == 'Ho') { sub_thu_mor_kh_t2 = 'គេហៈ' }
                    if (sub_thu_mor_t2 == 'Bio') { sub_thu_mor_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_mor_t2 == 'H') { sub_thu_mor_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_mor_t2 == 'ES') { sub_thu_mor_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_mor_t2 == 'G') { sub_thu_mor_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_thu_mor_t2 == 'P') { sub_thu_mor_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_thu_mor_t2 == 'Ac') { sub_thu_mor_kh_t2 = 'សកម្មភាព' }
                    if (sub_thu_mor_t2 == 'Bi') { sub_thu_mor_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_mor_t2 == 'Mo') { sub_thu_mor_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_mor_t2 == 'Eco') { sub_thu_mor_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_mor_t2 == 'K') { sub_thu_mor_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_mor_t2 == 'Sci') { sub_thu_mor_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_mor_t2 == 'Soc') { sub_thu_mor_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_thu_mor_t3 == 'PE') { sub_thu_mor_kh_t3 = 'កីឡា' }
                    if (sub_thu_mor_t3 == 'E') { sub_thu_mor_kh_t3 = 'អង់គ្លេស' }
                    if (sub_thu_mor_t3 == 'ICT') { sub_thu_mor_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_thu_mor_t3 == 'M') { sub_thu_mor_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_thu_mor_t3 == 'C') { sub_thu_mor_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_thu_mor_t3 == 'Ho') { sub_thu_mor_kh_t3 = 'គេហៈ' }
                    if (sub_thu_mor_t3 == 'Bio') { sub_thu_mor_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_mor_t3 == 'H') { sub_thu_mor_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_mor_t3 == 'ES') { sub_thu_mor_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_mor_t3 == 'G') { sub_thu_mor_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_thu_mor_t3 == 'P') { sub_thu_mor_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_thu_mor_t3 == 'Ac') { sub_thu_mor_kh_t3 = 'សកម្មភាព' }
                    if (sub_thu_mor_t3 == 'Bi') { sub_thu_mor_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_mor_t3 == 'Mo') { sub_thu_mor_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_mor_t3 == 'Eco') { sub_thu_mor_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_mor_t3 == 'K') { sub_thu_mor_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_mor_t3 == 'Sci') { sub_thu_mor_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_mor_t3 == 'Soc') { sub_thu_mor_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_thu_mor_t4 == 'PE') { sub_thu_mor_kh_t4 = 'កីឡា' }
                    if (sub_thu_mor_t4 == 'E') { sub_thu_mor_kh_t4 = 'អង់គ្លេស' }
                    if (sub_thu_mor_t4 == 'ICT') { sub_thu_mor_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_thu_mor_t4 == 'M') { sub_thu_mor_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_thu_mor_t4 == 'C') { sub_thu_mor_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_thu_mor_t4 == 'Ho') { sub_thu_mor_kh_t4 = 'គេហៈ' }
                    if (sub_thu_mor_t4 == 'Bio') { sub_thu_mor_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_mor_t4 == 'H') { sub_thu_mor_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_mor_t4 == 'ES') { sub_thu_mor_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_mor_t4 == 'G') { sub_thu_mor_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_thu_mor_t4 == 'P') { sub_thu_mor_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_thu_mor_t4 == 'Ac') { sub_thu_mor_kh_t4 = 'សកម្មភាព' }
                    if (sub_thu_mor_t4 == 'Bi') { sub_thu_mor_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_mor_t4 == 'Mo') { sub_thu_mor_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_mor_t4 == 'Eco') { sub_thu_mor_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_mor_t4 == 'K') { sub_thu_mor_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_mor_t4 == 'Sci') { sub_thu_mor_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_mor_t4 == 'Soc') { sub_thu_mor_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_thu_aft_t1 == 'PE') { sub_thu_aft_kh_t1 = 'កីឡា' }
                    if (sub_thu_aft_t1 == 'E') { sub_thu_aft_kh_t1 = 'អង់គ្លេស' }
                    if (sub_thu_aft_t1 == 'ICT') { sub_thu_aft_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_thu_aft_t1 == 'M') { sub_thu_aft_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_thu_aft_t1 == 'C') { sub_thu_aft_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_thu_aft_t1 == 'Ho') { sub_thu_aft_kh_t1 = 'គេហៈ' }
                    if (sub_thu_aft_t1 == 'Bio') { sub_thu_aft_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_aft_t1 == 'H') { sub_thu_aft_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_aft_t1 == 'ES') { sub_thu_aft_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_aft_t1 == 'G') { sub_thu_aft_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_thu_aft_t1 == 'P') { sub_thu_aft_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_thu_aft_t1 == 'Ac') { sub_thu_aft_kh_t1 = 'សកម្មភាព' }
                    if (sub_thu_aft_t1 == 'Bi') { sub_thu_aft_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_aft_t1 == 'Mo') { sub_thu_aft_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_aft_t1 == 'Eco') { sub_thu_aft_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_aft_t1 == 'K') { sub_thu_aft_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_aft_t1 == 'Sci') { sub_thu_aft_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_aft_t1 == 'Soc') { sub_thu_aft_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_thu_aft_t2 == 'PE') { sub_thu_aft_kh_t2 = 'កីឡា' }
                    if (sub_thu_aft_t2 == 'E') { sub_thu_aft_kh_t2 = 'អង់គ្លេស' }
                    if (sub_thu_aft_t2 == 'ICT') { sub_thu_aft_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_thu_aft_t2 == 'M') { sub_thu_aft_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_thu_aft_t2 == 'C') { sub_thu_aft_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_thu_aft_t2 == 'Ho') { sub_thu_aft_kh_t2 = 'គេហៈ' }
                    if (sub_thu_aft_t2 == 'Bio') { sub_thu_aft_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_aft_t2 == 'H') { sub_thu_aft_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_aft_t2 == 'ES') { sub_thu_aft_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_aft_t2 == 'G') { sub_thu_aft_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_thu_aft_t2 == 'P') { sub_thu_aft_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_thu_aft_t2 == 'Ac') { sub_thu_aft_kh_t2 = 'សកម្មភាព' }
                    if (sub_thu_aft_t2 == 'Bi') { sub_thu_aft_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_aft_t2 == 'Mo') { sub_thu_aft_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_aft_t2 == 'Eco') { sub_thu_aft_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_aft_t2 == 'K') { sub_thu_aft_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_aft_t2 == 'Sci') { sub_thu_aft_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_aft_t2 == 'Soc') { sub_thu_aft_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_thu_aft_t3 == 'PE') { sub_thu_aft_kh_t3 = 'កីឡា' }
                    if (sub_thu_aft_t3 == 'E') { sub_thu_aft_kh_t3 = 'អង់គ្លេស' }
                    if (sub_thu_aft_t3 == 'ICT') { sub_thu_aft_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_thu_aft_t3 == 'M') { sub_thu_aft_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_thu_aft_t3 == 'C') { sub_thu_aft_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_thu_aft_t3 == 'Ho') { sub_thu_aft_kh_t3 = 'គេហៈ' }
                    if (sub_thu_aft_t3 == 'Bio') { sub_thu_aft_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_aft_t3 == 'H') { sub_thu_aft_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_aft_t3 == 'ES') { sub_thu_aft_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_aft_t3 == 'G') { sub_thu_aft_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_thu_aft_t3 == 'P') { sub_thu_aft_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_thu_aft_t3 == 'Ac') { sub_thu_aft_kh_t3 = 'សកម្មភាព' }
                    if (sub_thu_aft_t3 == 'Bi') { sub_thu_aft_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_aft_t3 == 'Mo') { sub_thu_aft_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_aft_t3 == 'Eco') { sub_thu_aft_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_aft_t3 == 'K') { sub_thu_aft_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_aft_t3 == 'Sci') { sub_thu_aft_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_aft_t3 == 'Soc') { sub_thu_aft_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_thu_aft_t4 == 'PE') { sub_thu_aft_kh_t4 = 'កីឡា' }
                    if (sub_thu_aft_t4 == 'E') { sub_thu_aft_kh_t4 = 'អង់គ្លេស' }
                    if (sub_thu_aft_t4 == 'ICT') { sub_thu_aft_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_thu_aft_t4 == 'M') { sub_thu_aft_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_thu_aft_t4 == 'C') { sub_thu_aft_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_thu_aft_t4 == 'Ho') { sub_thu_aft_kh_t4 = 'គេហៈ' }
                    if (sub_thu_aft_t4 == 'Bio') { sub_thu_aft_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_thu_aft_t4 == 'H') { sub_thu_aft_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_thu_aft_t4 == 'ES') { sub_thu_aft_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_thu_aft_t4 == 'G') { sub_thu_aft_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_thu_aft_t4 == 'P') { sub_thu_aft_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_thu_aft_t4 == 'Ac') { sub_thu_aft_kh_t4 = 'សកម្មភាព' }
                    if (sub_thu_aft_t4 == 'Bi') { sub_thu_aft_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_thu_aft_t4 == 'Mo') { sub_thu_aft_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_thu_aft_t4 == 'Eco') { sub_thu_aft_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_thu_aft_t4 == 'K') { sub_thu_aft_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_thu_aft_t4 == 'Sci') { sub_thu_aft_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_thu_aft_t4 == 'Soc') { sub_thu_aft_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_fri_mor_t1 == 'PE') { sub_fri_mor_kh_t1 = 'កីឡា' }
                    if (sub_fri_mor_t1 == 'E') { sub_fri_mor_kh_t1 = 'អង់គ្លេស' }
                    if (sub_fri_mor_t1 == 'ICT') { sub_fri_mor_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_fri_mor_t1 == 'M') { sub_fri_mor_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_fri_mor_t1 == 'C') { sub_fri_mor_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_fri_mor_t1 == 'Ho') { sub_fri_mor_kh_t1 = 'គេហៈ' }
                    if (sub_fri_mor_t1 == 'Bio') { sub_fri_mor_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_mor_t1 == 'H') { sub_fri_mor_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_mor_t1 == 'ES') { sub_fri_mor_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_mor_t1 == 'G') { sub_fri_mor_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_fri_mor_t1 == 'P') { sub_fri_mor_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_fri_mor_t1 == 'Ac') { sub_fri_mor_kh_t1 = 'សកម្មភាព' }
                    if (sub_fri_mor_t1 == 'Bi') { sub_fri_mor_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_mor_t1 == 'Mo') { sub_fri_mor_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_mor_t1 == 'Eco') { sub_fri_mor_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_mor_t1 == 'K') { sub_fri_mor_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_mor_t1 == 'Sci') { sub_fri_mor_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_mor_t1 == 'Soc') { sub_fri_mor_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_fri_mor_t2 == 'PE') { sub_fri_mor_kh_t2 = 'កីឡា' }
                    if (sub_fri_mor_t2 == 'E') { sub_fri_mor_kh_t2 = 'អង់គ្លេស' }
                    if (sub_fri_mor_t2 == 'ICT') { sub_fri_mor_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_fri_mor_t2 == 'M') { sub_fri_mor_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_fri_mor_t2 == 'C') { sub_fri_mor_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_fri_mor_t2 == 'Ho') { sub_fri_mor_kh_t2 = 'គេហៈ' }
                    if (sub_fri_mor_t2 == 'Bio') { sub_fri_mor_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_mor_t2 == 'H') { sub_fri_mor_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_mor_t2 == 'ES') { sub_fri_mor_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_mor_t2 == 'G') { sub_fri_mor_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_fri_mor_t2 == 'P') { sub_fri_mor_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_fri_mor_t2 == 'Ac') { sub_fri_mor_kh_t2 = 'សកម្មភាព' }
                    if (sub_fri_mor_t2 == 'Bi') { sub_fri_mor_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_mor_t2 == 'Mo') { sub_fri_mor_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_mor_t2 == 'Eco') { sub_fri_mor_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_mor_t2 == 'K') { sub_fri_mor_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_mor_t2 == 'Sci') { sub_fri_mor_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_mor_t2 == 'Soc') { sub_fri_mor_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_fri_mor_t3 == 'PE') { sub_fri_mor_kh_t3 = 'កីឡា' }
                    if (sub_fri_mor_t3 == 'E') { sub_fri_mor_kh_t3 = 'អង់គ្លេស' }
                    if (sub_fri_mor_t3 == 'ICT') { sub_fri_mor_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_fri_mor_t3 == 'M') { sub_fri_mor_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_fri_mor_t3 == 'C') { sub_fri_mor_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_fri_mor_t3 == 'Ho') { sub_fri_mor_kh_t3 = 'គេហៈ' }
                    if (sub_fri_mor_t3 == 'Bio') { sub_fri_mor_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_mor_t3 == 'H') { sub_fri_mor_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_mor_t3 == 'ES') { sub_fri_mor_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_mor_t3 == 'G') { sub_fri_mor_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_fri_mor_t3 == 'P') { sub_fri_mor_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_fri_mor_t3 == 'Ac') { sub_fri_mor_kh_t3 = 'សកម្មភាព' }
                    if (sub_fri_mor_t3 == 'Bi') { sub_fri_mor_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_mor_t3 == 'Mo') { sub_fri_mor_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_mor_t3 == 'Eco') { sub_fri_mor_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_mor_t3 == 'K') { sub_fri_mor_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_mor_t3 == 'Sci') { sub_fri_mor_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_mor_t3 == 'Soc') { sub_fri_mor_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_fri_mor_t4 == 'PE') { sub_fri_mor_kh_t4 = 'កីឡា' }
                    if (sub_fri_mor_t4 == 'E') { sub_fri_mor_kh_t4 = 'អង់គ្លេស' }
                    if (sub_fri_mor_t4 == 'ICT') { sub_fri_mor_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_fri_mor_t4 == 'M') { sub_fri_mor_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_fri_mor_t4 == 'C') { sub_fri_mor_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_fri_mor_t4 == 'Ho') { sub_fri_mor_kh_t4 = 'គេហៈ' }
                    if (sub_fri_mor_t4 == 'Bio') { sub_fri_mor_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_mor_t4 == 'H') { sub_fri_mor_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_mor_t4 == 'ES') { sub_fri_mor_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_mor_t4 == 'G') { sub_fri_mor_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_fri_mor_t4 == 'P') { sub_fri_mor_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_fri_mor_t4 == 'Ac') { sub_fri_mor_kh_t4 = 'សកម្មភាព' }
                    if (sub_fri_mor_t4 == 'Bi') { sub_fri_mor_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_mor_t4 == 'Mo') { sub_fri_mor_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_mor_t4 == 'Eco') { sub_fri_mor_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_mor_t4 == 'K') { sub_fri_mor_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_mor_t4 == 'Sci') { sub_fri_mor_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_mor_t4 == 'Soc') { sub_fri_mor_kh_t4 = 'សិក្សាសង្គម' }

                    if (sub_fri_aft_t1 == 'PE') { sub_fri_aft_kh_t1 = 'កីឡា' }
                    if (sub_fri_aft_t1 == 'E') { sub_fri_aft_kh_t1 = 'អង់គ្លេស' }
                    if (sub_fri_aft_t1 == 'ICT') { sub_fri_aft_kh_t1 = 'កុំព្យូទ័រ' }
                    if (sub_fri_aft_t1 == 'M') { sub_fri_aft_kh_t1 = 'គណិតវិទ្យា' }
                    if (sub_fri_aft_t1 == 'C') { sub_fri_aft_kh_t1 = 'គីមីវិទ្យា' }
                    if (sub_fri_aft_t1 == 'Ho') { sub_fri_aft_kh_t1 = 'គេហៈ' }
                    if (sub_fri_aft_t1 == 'Bio') { sub_fri_aft_kh_t1 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_aft_t1 == 'H') { sub_fri_aft_kh_t1 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_aft_t1 == 'ES') { sub_fri_aft_kh_t1 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_aft_t1 == 'G') { sub_fri_aft_kh_t1 = 'ភូមិវិទ្យា' }
                    if (sub_fri_aft_t1 == 'P') { sub_fri_aft_kh_t1 = 'រូបវិទ្យា' }
                    if (sub_fri_aft_t1 == 'Ac') { sub_fri_aft_kh_t1 = 'សកម្មភាព' }
                    if (sub_fri_aft_t1 == 'Bi') { sub_fri_aft_kh_t1 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_aft_t1 == 'Mo') { sub_fri_aft_kh_t1 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_aft_t1 == 'Eco') { sub_fri_aft_kh_t1 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_aft_t1 == 'K') { sub_fri_aft_kh_t1 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_aft_t1 == 'Sci') { sub_fri_aft_kh_t1 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_aft_t1 == 'Soc') { sub_fri_aft_kh_t1 = 'សិក្សាសង្គម' }

                    if (sub_fri_aft_t2 == 'PE') { sub_fri_aft_kh_t2 = 'កីឡា' }
                    if (sub_fri_aft_t2 == 'E') { sub_fri_aft_kh_t2 = 'អង់គ្លេស' }
                    if (sub_fri_aft_t2 == 'ICT') { sub_fri_aft_kh_t2 = 'កុំព្យូទ័រ' }
                    if (sub_fri_aft_t2 == 'M') { sub_fri_aft_kh_t2 = 'គណិតវិទ្យា' }
                    if (sub_fri_aft_t2 == 'C') { sub_fri_aft_kh_t2 = 'គីមីវិទ្យា' }
                    if (sub_fri_aft_t2 == 'Ho') { sub_fri_aft_kh_t2 = 'គេហៈ' }
                    if (sub_fri_aft_t2 == 'Bio') { sub_fri_aft_kh_t2 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_aft_t2 == 'H') { sub_fri_aft_kh_t2 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_aft_t2 == 'ES') { sub_fri_aft_kh_t2 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_aft_t2 == 'G') { sub_fri_aft_kh_t2 = 'ភូមិវិទ្យា' }
                    if (sub_fri_aft_t2 == 'P') { sub_fri_aft_kh_t2 = 'រូបវិទ្យា' }
                    if (sub_fri_aft_t2 == 'Ac') { sub_fri_aft_kh_t2 = 'សកម្មភាព' }
                    if (sub_fri_aft_t2 == 'Bi') { sub_fri_aft_kh_t2 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_aft_t2 == 'Mo') { sub_fri_aft_kh_t2 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_aft_t2 == 'Eco') { sub_fri_aft_kh_t2 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_aft_t2 == 'K') { sub_fri_aft_kh_t2 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_aft_t2 == 'Sci') { sub_fri_aft_kh_t2 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_aft_t2 == 'Soc') { sub_fri_aft_kh_t2 = 'សិក្សាសង្គម' }

                    if (sub_fri_aft_t3 == 'PE') { sub_fri_aft_kh_t3 = 'កីឡា' }
                    if (sub_fri_aft_t3 == 'E') { sub_fri_aft_kh_t3 = 'អង់គ្លេស' }
                    if (sub_fri_aft_t3 == 'ICT') { sub_fri_aft_kh_t3 = 'កុំព្យូទ័រ' }
                    if (sub_fri_aft_t3 == 'M') { sub_fri_aft_kh_t3 = 'គណិតវិទ្យា' }
                    if (sub_fri_aft_t3 == 'C') { sub_fri_aft_kh_t3 = 'គីមីវិទ្យា' }
                    if (sub_fri_aft_t3 == 'Ho') { sub_fri_aft_kh_t3 = 'គេហៈ' }
                    if (sub_fri_aft_t3 == 'Bio') { sub_fri_aft_kh_t3 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_aft_t3 == 'H') { sub_fri_aft_kh_t3 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_aft_t3 == 'ES') { sub_fri_aft_kh_t3 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_aft_t3 == 'G') { sub_fri_aft_kh_t3 = 'ភូមិវិទ្យា' }
                    if (sub_fri_aft_t3 == 'P') { sub_fri_aft_kh_t3 = 'រូបវិទ្យា' }
                    if (sub_fri_aft_t3 == 'Ac') { sub_fri_aft_kh_t3 = 'សកម្មភាព' }
                    if (sub_fri_aft_t3 == 'Bi') { sub_fri_aft_kh_t3 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_aft_t3 == 'Mo') { sub_fri_aft_kh_t3 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_aft_t3 == 'Eco') { sub_fri_aft_kh_t3 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_aft_t3 == 'K') { sub_fri_aft_kh_t3 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_aft_t3 == 'Sci') { sub_fri_aft_kh_t3 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_aft_t3 == 'Soc') { sub_fri_aft_kh_t3 = 'សិក្សាសង្គម' }

                    if (sub_fri_aft_t4 == 'PE') { sub_fri_aft_kh_t4 = 'កីឡា' }
                    if (sub_fri_aft_t4 == 'E') { sub_fri_aft_kh_t4 = 'អង់គ្លេស' }
                    if (sub_fri_aft_t4 == 'ICT') { sub_fri_aft_kh_t4 = 'កុំព្យូទ័រ' }
                    if (sub_fri_aft_t4 == 'M') { sub_fri_aft_kh_t4 = 'គណិតវិទ្យា' }
                    if (sub_fri_aft_t4 == 'C') { sub_fri_aft_kh_t4 = 'គីមីវិទ្យា' }
                    if (sub_fri_aft_t4 == 'Ho') { sub_fri_aft_kh_t4 = 'គេហៈ' }
                    if (sub_fri_aft_t4 == 'Bio') { sub_fri_aft_kh_t4 = 'ជីវៈវិទ្យា' }
                    if (sub_fri_aft_t4 == 'H') { sub_fri_aft_kh_t4 = 'ប្រវត្តិវិទ្យា' }
                    if (sub_fri_aft_t4 == 'ES') { sub_fri_aft_kh_t4 = 'ផែនដីវិទ្យា' }
                    if (sub_fri_aft_t4 == 'G') { sub_fri_aft_kh_t4 = 'ភូមិវិទ្យា' }
                    if (sub_fri_aft_t4 == 'P') { sub_fri_aft_kh_t4 = 'រូបវិទ្យា' }
                    if (sub_fri_aft_t4 == 'Ac') { sub_fri_aft_kh_t4 = 'សកម្មភាព' }
                    if (sub_fri_aft_t4 == 'Bi') { sub_fri_aft_kh_t4 = 'សិក្សាសីលធម៌' }
                    if (sub_fri_aft_t4 == 'Mo') { sub_fri_aft_kh_t4 = 'សីលធម៌-ពលរដ្ឋ' }
                    if (sub_fri_aft_t4 == 'Eco') { sub_fri_aft_kh_t4 = 'សេដ្ឋកិច្ច' }
                    if (sub_fri_aft_t4 == 'K') { sub_fri_aft_kh_t4 = 'អក្សរសាស្ត្រខ្មែរ' }
                    if (sub_fri_aft_t4 == 'Sci') { sub_fri_aft_kh_t4 = 'វិទ្យាសាស្ត្រ' }
                    if (sub_fri_aft_t4 == 'Soc') { sub_fri_aft_kh_t4 = 'សិក្សាសង្គម' }

                    document.getElementById('sb_mon_mor_t1').innerHTML = sub_mon_mor_kh_t1;
                    document.getElementById('sb_tue_mor_t1').innerHTML = sub_tue_mor_kh_t1;
                    document.getElementById('sb_wed_mor_t1').innerHTML = sub_wed_mor_kh_t1;
                    document.getElementById('sb_thu_mor_t1').innerHTML = sub_thu_mor_kh_t1;
                    document.getElementById('sb_fri_mor_t1').innerHTML = sub_fri_mor_kh_t1;

                    document.getElementById('tn_mon_mor_t1').innerHTML = tname_mon_mor_t1;
                    document.getElementById('tn_tue_mor_t1').innerHTML = tname_tue_mor_t1;
                    document.getElementById('tn_wed_mor_t1').innerHTML = tname_wed_mor_t1;
                    document.getElementById('tn_thu_mor_t1').innerHTML = tname_thu_mor_t1;
                    document.getElementById('tn_fri_mor_t1').innerHTML = tname_fri_mor_t1;

                    document.getElementById('sb_mon_mor_t2').innerHTML = sub_mon_mor_kh_t2;
                    document.getElementById('sb_tue_mor_t2').innerHTML = sub_tue_mor_kh_t2;
                    document.getElementById('sb_wed_mor_t2').innerHTML = sub_wed_mor_kh_t2;
                    document.getElementById('sb_thu_mor_t2').innerHTML = sub_thu_mor_kh_t2;
                    document.getElementById('sb_fri_mor_t2').innerHTML = sub_fri_mor_kh_t2;

                    document.getElementById('tn_mon_mor_t2').innerHTML = tname_mon_mor_t2;
                    document.getElementById('tn_tue_mor_t2').innerHTML = tname_tue_mor_t2;
                    document.getElementById('tn_wed_mor_t2').innerHTML = tname_wed_mor_t2;
                    document.getElementById('tn_thu_mor_t2').innerHTML = tname_thu_mor_t2;
                    document.getElementById('tn_fri_mor_t2').innerHTML = tname_fri_mor_t2;

                    document.getElementById('sb_mon_mor_t3').innerHTML = sub_mon_mor_kh_t3;
                    document.getElementById('sb_tue_mor_t3').innerHTML = sub_tue_mor_kh_t3;
                    document.getElementById('sb_wed_mor_t3').innerHTML = sub_wed_mor_kh_t3;
                    document.getElementById('sb_thu_mor_t3').innerHTML = sub_thu_mor_kh_t3;
                    document.getElementById('sb_fri_mor_t3').innerHTML = sub_fri_mor_kh_t3;

                    document.getElementById('tn_mon_mor_t3').innerHTML = tname_mon_mor_t3;
                    document.getElementById('tn_tue_mor_t3').innerHTML = tname_tue_mor_t3;
                    document.getElementById('tn_wed_mor_t3').innerHTML = tname_wed_mor_t3;
                    document.getElementById('tn_thu_mor_t3').innerHTML = tname_thu_mor_t3;
                    document.getElementById('tn_fri_mor_t3').innerHTML = tname_fri_mor_t3;
                    
                    document.getElementById('sb_mon_mor_t4').innerHTML = sub_mon_mor_kh_t4;
                    document.getElementById('sb_tue_mor_t4').innerHTML = sub_tue_mor_kh_t4;
                    document.getElementById('sb_wed_mor_t4').innerHTML = sub_wed_mor_kh_t4;
                    document.getElementById('sb_thu_mor_t4').innerHTML = sub_thu_mor_kh_t4;
                    document.getElementById('sb_fri_mor_t4').innerHTML = sub_fri_mor_kh_t4;

                    document.getElementById('tn_mon_mor_t4').innerHTML = tname_mon_mor_t4;
                    document.getElementById('tn_tue_mor_t4').innerHTML = tname_tue_mor_t4;
                    document.getElementById('tn_wed_mor_t4').innerHTML = tname_wed_mor_t4;
                    document.getElementById('tn_thu_mor_t4').innerHTML = tname_thu_mor_t4;
                    document.getElementById('tn_fri_mor_t4').innerHTML = tname_fri_mor_t4;

                    document.getElementById('sb_mon_aft_t1').innerHTML = sub_mon_aft_kh_t1;
                    document.getElementById('sb_tue_aft_t1').innerHTML = sub_tue_aft_kh_t1;
                    document.getElementById('sb_wed_aft_t1').innerHTML = sub_wed_aft_kh_t1;
                    document.getElementById('sb_thu_aft_t1').innerHTML = sub_thu_aft_kh_t1;
                    document.getElementById('sb_fri_aft_t1').innerHTML = sub_fri_aft_kh_t1;

                    document.getElementById('tn_mon_aft_t1').innerHTML = tname_mon_aft_t1;
                    document.getElementById('tn_tue_aft_t1').innerHTML = tname_tue_aft_t1;
                    document.getElementById('tn_wed_aft_t1').innerHTML = tname_wed_aft_t1;
                    document.getElementById('tn_thu_aft_t1').innerHTML = tname_thu_aft_t1;
                    document.getElementById('tn_fri_aft_t1').innerHTML = tname_fri_aft_t1;

                    document.getElementById('sb_mon_aft_t2').innerHTML = sub_mon_aft_kh_t2;
                    document.getElementById('sb_tue_aft_t2').innerHTML = sub_tue_aft_kh_t2;
                    document.getElementById('sb_wed_aft_t2').innerHTML = sub_wed_aft_kh_t2;
                    document.getElementById('sb_thu_aft_t2').innerHTML = sub_thu_aft_kh_t2;
                    document.getElementById('sb_fri_aft_t2').innerHTML = sub_fri_aft_kh_t2;

                    document.getElementById('tn_mon_aft_t2').innerHTML = tname_mon_aft_t2;
                    document.getElementById('tn_tue_aft_t2').innerHTML = tname_tue_aft_t2;
                    document.getElementById('tn_wed_aft_t2').innerHTML = tname_wed_aft_t2;
                    document.getElementById('tn_thu_aft_t2').innerHTML = tname_thu_aft_t2;
                    document.getElementById('tn_fri_aft_t2').innerHTML = tname_fri_aft_t2;

                    document.getElementById('sb_mon_aft_t3').innerHTML = sub_mon_aft_kh_t3;
                    document.getElementById('sb_tue_aft_t3').innerHTML = sub_tue_aft_kh_t3;
                    document.getElementById('sb_wed_aft_t3').innerHTML = sub_wed_aft_kh_t3;
                    document.getElementById('sb_thu_aft_t3').innerHTML = sub_thu_aft_kh_t3;
                    document.getElementById('sb_fri_aft_t3').innerHTML = sub_fri_aft_kh_t3;

                    document.getElementById('tn_mon_aft_t3').innerHTML = tname_mon_aft_t3;
                    document.getElementById('tn_tue_aft_t3').innerHTML = tname_tue_aft_t3;
                    document.getElementById('tn_wed_aft_t3').innerHTML = tname_wed_aft_t3;
                    document.getElementById('tn_thu_aft_t3').innerHTML = tname_thu_aft_t3;
                    document.getElementById('tn_fri_aft_t3').innerHTML = tname_fri_aft_t3;

                    document.getElementById('sb_mon_aft_t4').innerHTML = sub_mon_aft_kh_t4;
                    document.getElementById('sb_tue_aft_t4').innerHTML = sub_tue_aft_kh_t4;
                    document.getElementById('sb_wed_aft_t4').innerHTML = sub_wed_aft_kh_t4;
                    document.getElementById('sb_thu_aft_t4').innerHTML = sub_thu_aft_kh_t4;
                    document.getElementById('sb_fri_aft_t4').innerHTML = sub_fri_aft_kh_t4;

                    document.getElementById('tn_mon_aft_t4').innerHTML = tname_mon_aft_t4;
                    document.getElementById('tn_tue_aft_t4').innerHTML = tname_tue_aft_t4;
                    document.getElementById('tn_wed_aft_t4').innerHTML = tname_wed_aft_t4;
                    document.getElementById('tn_thu_aft_t4').innerHTML = tname_thu_aft_t4;
                    document.getElementById('tn_fri_aft_t4').innerHTML = tname_fri_aft_t4;
                    let subjects = [

                    ].concat(
                        sub_mon_mor_kh_t1,
                        sub_mon_mor_kh_t2,
                        sub_mon_mor_kh_t3,
                        sub_mon_mor_kh_t4,
                        sub_mon_aft_kh_t1,
                        sub_mon_aft_kh_t2,
                        sub_mon_aft_kh_t3,
                        sub_mon_aft_kh_t4,

                        sub_tue_mor_kh_t1,
                        sub_tue_mor_kh_t2,
                        sub_tue_mor_kh_t3,
                        sub_tue_mor_kh_t4,
                        sub_tue_aft_kh_t1,
                        sub_tue_aft_kh_t2,
                        sub_tue_aft_kh_t3,
                        sub_tue_aft_kh_t4,

                        sub_wed_mor_kh_t1,
                        sub_wed_mor_kh_t2,
                        sub_wed_mor_kh_t3,
                        sub_wed_mor_kh_t4,
                        sub_wed_aft_kh_t1,
                        sub_wed_aft_kh_t2,
                        sub_wed_aft_kh_t3,
                        sub_wed_aft_kh_t4,

                        sub_thu_mor_kh_t1,
                        sub_thu_mor_kh_t2,
                        sub_thu_mor_kh_t3,
                        sub_thu_mor_kh_t4,
                        sub_thu_aft_kh_t1,
                        sub_thu_aft_kh_t2,
                        sub_thu_aft_kh_t3,
                        sub_thu_aft_kh_t4,

                        sub_fri_mor_kh_t1,
                        sub_fri_mor_kh_t2,
                        sub_fri_mor_kh_t3,
                        sub_fri_mor_kh_t4,
                        sub_fri_aft_kh_t1,
                        sub_fri_aft_kh_t2,
                        sub_fri_aft_kh_t3,
                        sub_fri_aft_kh_t4,
                    )
                function countSubjects(subjects) {
                const subjectCounts = {}; // Object to store subject counts

                subjects.forEach(subject => {
                    subjectCounts[subject] = (subjectCounts[subject] || 0) + 1;
                });

                return subjectCounts;
                    }

                    const counts = countSubjects(subjects);
                    const subjectCountsElement = document.getElementById('subjectCounts');
                    subjectCountsElement.textContent = ''; // Clear any existing content

                    for (const subject in counts) {
                        subjectCountsElement.innerHTML += `
                <tr class="mytr" style="vertical-align: top">
                    <td class="p-0 pr-2">
                        <span class="pl-4">- ${subject}:</span>
                    </td>
                    <td class="p-0">
                        <span class="pr-4">
                            ${counts[subject]} ម៉ោង
                        </span>
                    </td>
                </tr>     
                `;
                    }    

                })
                //Monday Morning
                cck.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck.dataset.g;
                    var t_name = cck.dataset.tc;
                    var img_url = cck.dataset.img;
                    var sub = cck.dataset.sub;
                    
                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        
                        if (data_row_1.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_mor_t1: id,
                                        img_mon_mor_t1: img_value.value,
                                        sub_mon_mor_t1: sb,
                                        tname_mon_mor_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_mor_t1: id,
                                        img_mon_mor_t1: img_value.value,
                                        sub_mon_mor_t1: sb,
                                        tname_mon_mor_t1: user_value.value,
                                    })
                                    if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_mor_t1: id,
                                            img_mon_mor_t1: img_value.value,
                                            sub_mon_mor_t1: sb,
                                            tname_mon_mor_t1: user_value.value,
                                        })
                                    
                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                        .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t1: id,
                                img_mon_mor_t1: img_value.value,
                                sub_mon_mor_t1: sb,
                                tname_mon_mor_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/`+ user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_mor_t1: id,
                                img_mon_mor_t1: img_value.value,
                                sub_mon_mor_t1: sb,
                                tname_mon_mor_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_mor_t1: id,
                                    img_mon_mor_t1: img_value.value,
                                    sub_mon_mor_t1: sb,
                                    tname_mon_mor_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t1: null,
                                img_mon_mor_t1: null,
                                sub_mon_mor_t1: null,
                                tname_mon_mor_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_mor_t1: null,
                                img_mon_mor_t1: null,
                                sub_mon_mor_t1: null,
                                tname_mon_mor_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_mor_t1: null,
                                    img_mon_mor_t1: null,
                                    sub_mon_mor_t1: null,
                                    tname_mon_mor_t1: null,
                                })
                        }
                        window.location.reload();

                    })
                    
                })
                cck2.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck2.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck2.dataset.g;
                    var t_name = cck2.dataset.tc;
                    var img_url = cck2.dataset.img;
                    var sub = cck2.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck2;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_2.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_mor_t2: id,
                                        img_mon_mor_t2: img_value.value,
                                        sub_mon_mor_t2: sb,
                                        tname_mon_mor_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_mor_t2: id,
                                        img_mon_mor_t2: img_value.value,
                                        sub_mon_mor_t2: sb,
                                        tname_mon_mor_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_mor_t2: id,
                                            img_mon_mor_t2: img_value.value,
                                            sub_mon_mor_t2: sb,
                                            tname_mon_mor_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck2;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t2: id,
                                img_mon_mor_t2: img_value.value,
                                sub_mon_mor_t2: sb,
                                tname_mon_mor_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_mor_t2: id,
                                img_mon_mor_t2: img_value.value,
                                sub_mon_mor_t2: sb,
                                tname_mon_mor_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_mor_t2: id,
                                    img_mon_mor_t2: img_value.value,
                                    sub_mon_mor_t2: sb,
                                    tname_mon_mor_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck2;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t2: null,
                                img_mon_mor_t2: null,
                                sub_mon_mor_t2: null,
                                tname_mon_mor_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_mor_t2: null,
                                img_mon_mor_t2: null,
                                sub_mon_mor_t2: null,
                                tname_mon_mor_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_mor_t2: null,
                                    img_mon_mor_t2: null,
                                    sub_mon_mor_t2: null,
                                    tname_mon_mor_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck3.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck3.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck3.dataset.g;
                    var t_name = cck3.dataset.tc;
                    var img_url = cck3.dataset.img;
                    var sub = cck3.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck3;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_3.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_mor_t3: id,
                                        img_mon_mor_t3: img_value.value,
                                        sub_mon_mor_t3: sb,
                                        tname_mon_mor_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_mor_t3: id,
                                        img_mon_mor_t3: img_value.value,
                                        sub_mon_mor_t3: sb,
                                        tname_mon_mor_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_mor_t3: id,
                                            img_mon_mor_t3: img_value.value,
                                            sub_mon_mor_t3: sb,
                                            tname_mon_mor_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck3;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t3: id,
                                img_mon_mor_t3: img_value.value,
                                sub_mon_mor_t3: sb,
                                tname_mon_mor_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_mor_t3: id,
                                img_mon_mor_t3: img_value.value,
                                sub_mon_mor_t3: sb,
                                tname_mon_mor_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_mor_t3: id,
                                    img_mon_mor_t3: img_value.value,
                                    sub_mon_mor_t3: sb,
                                    tname_mon_mor_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck3;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t3: null,
                                img_mon_mor_t3: null,
                                sub_mon_mor_t3: null,
                                tname_mon_mor_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_mor_t3: null,
                                img_mon_mor_t3: null,
                                sub_mon_mor_t3: null,
                                tname_mon_mor_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_mor_t3: null,
                                    img_mon_mor_t3: null,
                                    sub_mon_mor_t3: null,
                                    tname_mon_mor_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                
                cck4.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck4.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck4.dataset.g;
                    var t_name = cck4.dataset.tc;
                    var img_url = cck4.dataset.img;
                    var sub = cck4.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck4;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_4.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_mor_t4: id,
                                        img_mon_mor_t4: img_value.value,
                                        sub_mon_mor_t4: sb,
                                        tname_mon_mor_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_mor_t4: id,
                                        img_mon_mor_t4: img_value.value,
                                        sub_mon_mor_t4: sb,
                                        tname_mon_mor_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_mor_t4: id,
                                            img_mon_mor_t4: img_value.value,
                                            sub_mon_mor_t4: sb,
                                            tname_mon_mor_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck4;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t4: id,
                                img_mon_mor_t4: img_value.value,
                                sub_mon_mor_t4: sb,
                                tname_mon_mor_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_mor_t4: id,
                                img_mon_mor_t4: img_value.value,
                                sub_mon_mor_t4: sb,
                                tname_mon_mor_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_mor_t4: id,
                                    img_mon_mor_t4: img_value.value,
                                    sub_mon_mor_t4: sb,
                                    tname_mon_mor_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck4;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_mor_t4: null,
                                img_mon_mor_t4: null,
                                sub_mon_mor_t4: null,
                                tname_mon_mor_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_mor_t4: null,
                                img_mon_mor_t4: null,
                                sub_mon_mor_t4: null,
                                tname_mon_mor_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_mor_t4: null,
                                    img_mon_mor_t4: null,
                                    sub_mon_mor_t4: null,
                                    tname_mon_mor_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                
                //Monday Afternoon
                cck5.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck5.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck5.dataset.g;
                    var t_name = cck5.dataset.tc;
                    var img_url = cck5.dataset.img;
                    var sub = cck5.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck5;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_5.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_aft_t1: id,
                                        img_mon_aft_t1: img_value.value,
                                        sub_mon_aft_t1: sb,
                                        tname_mon_aft_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_aft_t1: id,
                                        img_mon_aft_t1: img_value.value,
                                        sub_mon_aft_t1: sb,
                                        tname_mon_aft_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_aft_t1: id,
                                            img_mon_aft_t1: img_value.value,
                                            sub_mon_aft_t1: sb,
                                            tname_mon_aft_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck5;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t1: id,
                                img_mon_aft_t1: img_value.value,
                                sub_mon_aft_t1: sb,
                                tname_mon_aft_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_aft_t1: id,
                                img_mon_aft_t1: img_value.value,
                                sub_mon_aft_t1: sb,
                                tname_mon_aft_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_aft_t1: id,
                                    img_mon_aft_t1: img_value.value,
                                    sub_mon_aft_t1: sb,
                                    tname_mon_aft_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck5;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t1: null,
                                img_mon_aft_t1: null,
                                sub_mon_aft_t1: null,
                                tname_mon_aft_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_aft_t1: null,
                                img_mon_aft_t1: null,
                                sub_mon_aft_t1: null,
                                tname_mon_aft_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_aft_t1: null,
                                    img_mon_aft_t1: null,
                                    sub_mon_aft_t1: null,
                                    tname_mon_aft_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                
                cck6.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck6.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck6.dataset.g;
                    var t_name = cck6.dataset.tc;
                    var img_url = cck6.dataset.img;
                    var sub = cck6.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck6;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_6.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_aft_t2: id,
                                        img_mon_aft_t2: img_value.value,
                                        sub_mon_aft_t2: sb,
                                        tname_mon_aft_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_aft_t2: id,
                                        img_mon_aft_t2: img_value.value,
                                        sub_mon_aft_t2: sb,
                                        tname_mon_aft_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_aft_t2: id,
                                            img_mon_aft_t2: img_value.value,
                                            sub_mon_aft_t2: sb,
                                            tname_mon_aft_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck6;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t2: id,
                                img_mon_aft_t2: img_value.value,
                                sub_mon_aft_t2: sb,
                                tname_mon_aft_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_aft_t2: id,
                                img_mon_aft_t2: img_value.value,
                                sub_mon_aft_t2: sb,
                                tname_mon_aft_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_aft_t2: id,
                                    img_mon_aft_t2: img_value.value,
                                    sub_mon_aft_t2: sb,
                                    tname_mon_aft_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck6;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t2: null,
                                img_mon_aft_t2: null,
                                sub_mon_aft_t2: null,
                                tname_mon_aft_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_aft_t2: null,
                                img_mon_aft_t2: null,
                                sub_mon_aft_t2: null,
                                tname_mon_aft_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_aft_t2: null,
                                    img_mon_aft_t2: null,
                                    sub_mon_aft_t2: null,
                                    tname_mon_aft_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck7.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck7.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck7.dataset.g;
                    var t_name = cck7.dataset.tc;
                    var img_url = cck7.dataset.img;
                    var sub = cck7.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck7;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_7.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_aft_t3: id,
                                        img_mon_aft_t3: img_value.value,
                                        sub_mon_aft_t3: sb,
                                        tname_mon_aft_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_aft_t3: id,
                                        img_mon_aft_t3: img_value.value,
                                        sub_mon_aft_t3: sb,
                                        tname_mon_aft_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_aft_t3: id,
                                            img_mon_aft_t3: img_value.value,
                                            sub_mon_aft_t3: sb,
                                            tname_mon_aft_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck7;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t3: id,
                                img_mon_aft_t3: img_value.value,
                                sub_mon_aft_t3: sb,
                                tname_mon_aft_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_aft_t3: id,
                                img_mon_aft_t3: img_value.value,
                                sub_mon_aft_t3: sb,
                                tname_mon_aft_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_aft_t3: id,
                                    img_mon_aft_t3: img_value.value,
                                    sub_mon_aft_t3: sb,
                                    tname_mon_aft_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck7;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t3: null,
                                img_mon_aft_t3: null,
                                sub_mon_aft_t3: null,
                                tname_mon_aft_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_aft_t3: null,
                                img_mon_aft_t3: null,
                                sub_mon_aft_t3: null,
                                tname_mon_aft_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_aft_t3: null,
                                    img_mon_aft_t3: null,
                                    sub_mon_aft_t3: null,
                                    tname_mon_aft_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck8.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck8.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck8.dataset.g;
                    var t_name = cck8.dataset.tc;
                    var img_url = cck8.dataset.img;
                    var sub = cck8.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck8;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_8.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_mon_aft_t4: id,
                                        img_mon_aft_t4: img_value.value,
                                        sub_mon_aft_t4: sb,
                                        tname_mon_aft_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_mon_aft_t4: id,
                                        img_mon_aft_t4: img_value.value,
                                        sub_mon_aft_t4: sb,
                                        tname_mon_aft_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_mon_aft_t4: id,
                                            img_mon_aft_t4: img_value.value,
                                            sub_mon_aft_t4: sb,
                                            tname_mon_aft_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck8;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t4: id,
                                img_mon_aft_t4: img_value.value,
                                sub_mon_aft_t4: sb,
                                tname_mon_aft_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_mon_aft_t4: id,
                                img_mon_aft_t4: img_value.value,
                                sub_mon_aft_t4: sb,
                                tname_mon_aft_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_mon_aft_t4: id,
                                    img_mon_aft_t4: img_value.value,
                                    sub_mon_aft_t4: sb,
                                    tname_mon_aft_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck8;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_mon_aft_t4: null,
                                img_mon_aft_t4: null,
                                sub_mon_aft_t4: null,
                                tname_mon_aft_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_mon_aft_t4: null,
                                img_mon_aft_t4: null,
                                sub_mon_aft_t4: null,
                                tname_mon_aft_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_mon_aft_t4: null,
                                    img_mon_aft_t4: null,
                                    sub_mon_aft_t4: null,
                                    tname_mon_aft_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                
                //Tuesday Morning
                cck9.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck9.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck9.dataset.g;
                    var t_name = cck9.dataset.tc;
                    var img_url = cck9.dataset.img;
                    var sub = cck9.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck9;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_9.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_mor_t1: id,
                                        img_tue_mor_t1: img_value.value,
                                        sub_tue_mor_t1: sb,
                                        tname_tue_mor_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_mor_t1: id,
                                        img_tue_mor_t1: img_value.value,
                                        sub_tue_mor_t1: sb,
                                        tname_tue_mor_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_mor_t1: id,
                                            img_tue_mor_t1: img_value.value,
                                            sub_tue_mor_t1: sb,
                                            tname_tue_mor_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck9;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t1: id,
                                img_tue_mor_t1: img_value.value,
                                sub_tue_mor_t1: sb,
                                tname_tue_mor_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_mor_t1: id,
                                img_tue_mor_t1: img_value.value,
                                sub_tue_mor_t1: sb,
                                tname_tue_mor_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_mor_t1: id,
                                    img_tue_mor_t1: img_value.value,
                                    sub_tue_mor_t1: sb,
                                    tname_tue_mor_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck9;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t1: null,
                                img_tue_mor_t1: null,
                                sub_tue_mor_t1: null,
                                tname_tue_mor_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_mor_t1: null,
                                img_tue_mor_t1: null,
                                sub_tue_mor_t1: null,
                                tname_tue_mor_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_mor_t1: null,
                                    img_tue_mor_t1: null,
                                    sub_tue_mor_t1: null,
                                    tname_tue_mor_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck10.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck10.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck10.dataset.g;
                    var t_name = cck10.dataset.tc;
                    var img_url = cck10.dataset.img;
                    var sub = cck10.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck10;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_10.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_mor_t2: id,
                                        img_tue_mor_t2: img_value.value,
                                        sub_tue_mor_t2: sb,
                                        tname_tue_mor_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_mor_t2: id,
                                        img_tue_mor_t2: img_value.value,
                                        sub_tue_mor_t2: sb,
                                        tname_tue_mor_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_mor_t2: id,
                                            img_tue_mor_t2: img_value.value,
                                            sub_tue_mor_t2: sb,
                                            tname_tue_mor_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck10;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t2: id,
                                img_tue_mor_t2: img_value.value,
                                sub_tue_mor_t2: sb,
                                tname_tue_mor_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_mor_t2: id,
                                img_tue_mor_t2: img_value.value,
                                sub_tue_mor_t2: sb,
                                tname_tue_mor_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_mor_t2: id,
                                    img_tue_mor_t2: img_value.value,
                                    sub_tue_mor_t2: sb,
                                    tname_tue_mor_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck10;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t2: null,
                                img_tue_mor_t2: null,
                                sub_tue_mor_t2: null,
                                tname_tue_mor_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_mor_t2: null,
                                img_tue_mor_t2: null,
                                sub_tue_mor_t2: null,
                                tname_tue_mor_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_mor_t2: null,
                                    img_tue_mor_t2: null,
                                    sub_tue_mor_t2: null,
                                    tname_tue_mor_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck11.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var sub_value = $('#select_sub');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck11.dataset.nickname;
                    nickname.value = t_nickname;
                    var data_g = cck11.dataset.g;
                    var t_name = cck11.dataset.tc;
                    var img_url = cck11.dataset.img;
                    var sub = cck11.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck11;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_11.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_mor_t3: id,
                                        img_tue_mor_t3: img_value.value,
                                        sub_tue_mor_t3: sb,
                                        tname_tue_mor_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_mor_t3: id,
                                        img_tue_mor_t3: img_value.value,
                                        sub_tue_mor_t3: sb,
                                        tname_tue_mor_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_mor_t3: id,
                                            img_tue_mor_t3: img_value.value,
                                            sub_tue_mor_t3: sb,
                                            tname_tue_mor_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck11;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t3: id,
                                img_tue_mor_t3: img_value.value,
                                sub_tue_mor_t3: sb,
                                tname_tue_mor_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_mor_t3: id,
                                img_tue_mor_t3: img_value.value,
                                sub_tue_mor_t3: sb,
                                tname_tue_mor_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_mor_t3: id,
                                    img_tue_mor_t3: img_value.value,
                                    sub_tue_mor_t3: sb,
                                    tname_tue_mor_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck11;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t3: null,
                                img_tue_mor_t3: null,
                                sub_tue_mor_t3: null,
                                tname_tue_mor_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_mor_t3: null,
                                img_tue_mor_t3: null,
                                sub_tue_mor_t3: null,
                                tname_tue_mor_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_mor_t3: null,
                                    img_tue_mor_t3: null,
                                    sub_tue_mor_t3: null,
                                    tname_tue_mor_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck12.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck12.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck12.dataset.g;
                    var t_name = cck12.dataset.tc;
                    var img_url = cck12.dataset.img;
                    var sub = cck12.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck12;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_12.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_mor_t4: id,
                                        img_tue_mor_t4: img_value.value,
                                        sub_tue_mor_t4: sb,
                                        tname_tue_mor_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_mor_t4: id,
                                        img_tue_mor_t4: img_value.value,
                                        sub_tue_mor_t4: sb,
                                        tname_tue_mor_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_mor_t4: id,
                                            img_tue_mor_t4: img_value.value,
                                            sub_tue_mor_t4: sb,
                                            tname_tue_mor_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck12;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t4: id,
                                img_tue_mor_t4: img_value.value,
                                sub_tue_mor_t4: sb,
                                tname_tue_mor_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_mor_t4: id,
                                img_tue_mor_t4: img_value.value,
                                sub_tue_mor_t4: sb,
                                tname_tue_mor_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_mor_t4: id,
                                    img_tue_mor_t4: img_value.value,
                                    sub_tue_mor_t4: sb,
                                    tname_tue_mor_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck12;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_mor_t4: null,
                                img_tue_mor_t4: null,
                                sub_tue_mor_t4: null,
                                tname_tue_mor_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_mor_t4: null,
                                img_tue_mor_t4: null,
                                sub_tue_mor_t4: null,
                                tname_tue_mor_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_mor_t4: null,
                                    img_tue_mor_t4: null,
                                    sub_tue_mor_t4: null,
                                    tname_tue_mor_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Tuesday Afternoon
                cck13.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck13.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck13.dataset.g;
                    var t_name = cck13.dataset.tc;
                    var img_url = cck13.dataset.img;
                    var sub = cck13.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck13;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_13.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_aft_t1: id,
                                        nickname: nickname.value,
                                        img_tue_aft_t1: img_value.value,
                                        sub_tue_aft_t1: sb,
                                        tname_tue_aft_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_aft_t1: id,
                                        img_tue_aft_t1: img_value.value,
                                        sub_tue_aft_t1: sb,
                                        tname_tue_aft_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_aft_t1: id,
                                            img_tue_aft_t1: img_value.value,
                                            sub_tue_aft_t1: sb,
                                            tname_tue_aft_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck13;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t1: id,
                                img_tue_aft_t1: img_value.value,
                                sub_tue_aft_t1: sb,
                                tname_tue_aft_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_aft_t1: id,
                                img_tue_aft_t1: img_value.value,
                                sub_tue_aft_t1: sb,
                                tname_tue_aft_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_aft_t1: id,
                                    img_tue_aft_t1: img_value.value,
                                    sub_tue_aft_t1: sb,
                                    tname_tue_aft_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck13;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t1: null,
                                img_tue_aft_t1: null,
                                sub_tue_aft_t1: null,
                                tname_tue_aft_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_aft_t1: null,
                                img_tue_aft_t1: null,
                                sub_tue_aft_t1: null,
                                tname_tue_aft_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_aft_t1: null,
                                    img_tue_aft_t1: null,
                                    sub_tue_aft_t1: null,
                                    tname_tue_aft_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck14.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck14.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck14.dataset.g;
                    var t_name = cck14.dataset.tc;
                    var img_url = cck14.dataset.img;
                    var sub = cck14.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck14;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_14.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_aft_t2: id,
                                        img_tue_aft_t2: img_value.value,
                                        sub_tue_aft_t2: sb,
                                        tname_tue_aft_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_aft_t2: id,
                                        img_tue_aft_t2: img_value.value,
                                        sub_tue_aft_t2: sb,
                                        tname_tue_aft_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_aft_t2: id,
                                            img_tue_aft_t2: img_value.value,
                                            sub_tue_aft_t2: sb,
                                            tname_tue_aft_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck14;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t2: id,
                                img_tue_aft_t2: img_value.value,
                                sub_tue_aft_t2: sb,
                                tname_tue_aft_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_aft_t2: id,
                                img_tue_aft_t2: img_value.value,
                                sub_tue_aft_t2: sb,
                                tname_tue_aft_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_aft_t2: id,
                                    img_tue_aft_t2: img_value.value,
                                    sub_tue_aft_t2: sb,
                                    tname_tue_aft_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck14;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t2: null,
                                img_tue_aft_t2: null,
                                sub_tue_aft_t2: null,
                                tname_tue_aft_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_aft_t2: null,
                                img_tue_aft_t2: null,
                                sub_tue_aft_t2: null,
                                tname_tue_aft_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_aft_t2: null,
                                    img_tue_aft_t2: null,
                                    sub_tue_aft_t2: null,
                                    tname_tue_aft_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck15.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck15.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck15.dataset.g;
                    var t_name = cck15.dataset.tc;
                    var img_url = cck15.dataset.img;
                    var sub = cck15.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck15;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_15.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_aft_t3: id,
                                        img_tue_aft_t3: img_value.value,
                                        sub_tue_aft_t3: sb,
                                        tname_tue_aft_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_aft_t3: id,
                                        img_tue_aft_t3: img_value.value,
                                        sub_tue_aft_t3: sb,
                                        tname_tue_aft_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_aft_t3: id,
                                            img_tue_aft_t3: img_value.value,
                                            sub_tue_aft_t3: sb,
                                            tname_tue_aft_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck15;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t3: id,
                                img_tue_aft_t3: img_value.value,
                                sub_tue_aft_t3: sb,
                                tname_tue_aft_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_aft_t3: id,
                                img_tue_aft_t3: img_value.value,
                                sub_tue_aft_t3: sb,
                                tname_tue_aft_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_aft_t3: id,
                                    img_tue_aft_t3: img_value.value,
                                    sub_tue_aft_t3: sb,
                                    tname_tue_aft_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck15;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t3: null,
                                img_tue_aft_t3: null,
                                sub_tue_aft_t3: null,
                                tname_tue_aft_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_aft_t3: null,
                                img_tue_aft_t3: null,
                                sub_tue_aft_t3: null,
                                tname_tue_aft_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_aft_t3: null,
                                    img_tue_aft_t3: null,
                                    sub_tue_aft_t3: null,
                                    tname_tue_aft_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck16.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck16.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck16.dataset.g;
                    var t_name = cck16.dataset.tc;
                    var img_url = cck16.dataset.img;
                    var sub = cck16.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck16;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_16.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_tue_aft_t4: id,
                                        img_tue_aft_t4: img_value.value,
                                        sub_tue_aft_t4: sb,
                                        tname_tue_aft_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_tue_aft_t4: id,
                                        img_tue_aft_t4: img_value.value,
                                        sub_tue_aft_t4: sb,
                                        tname_tue_aft_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_tue_aft_t4: id,
                                            img_tue_aft_t4: img_value.value,
                                            sub_tue_aft_t4: sb,
                                            tname_tue_aft_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck16;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t4: id,
                                img_tue_aft_t4: img_value.value,
                                sub_tue_aft_t4: sb,
                                tname_tue_aft_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_tue_aft_t4: id,
                                img_tue_aft_t4: img_value.value,
                                sub_tue_aft_t4: sb,
                                tname_tue_aft_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_tue_aft_t4: id,
                                    img_tue_aft_t4: img_value.value,
                                    sub_tue_aft_t4: sb,
                                    tname_tue_aft_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck16;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_tue_aft_t4: null,
                                img_tue_aft_t4: null,
                                sub_tue_aft_t4: null,
                                tname_tue_aft_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_tue_aft_t4: null,
                                img_tue_aft_t4: null,
                                sub_tue_aft_t4: null,
                                tname_tue_aft_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_tue_aft_t4: null,
                                    img_tue_aft_t4: null,
                                    sub_tue_aft_t4: null,
                                    tname_tue_aft_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Wednesday Morning
                cck17.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck17.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck17.dataset.g;
                    var t_name = cck17.dataset.tc;
                    var img_url = cck17.dataset.img;
                    var sub = cck17.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck17;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_17.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_mor_t1: id,
                                        img_wed_mor_t1: img_value.value,
                                        sub_wed_mor_t1: sb,
                                        tname_wed_mor_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_mor_t1: id,
                                        img_wed_mor_t1: img_value.value,
                                        sub_wed_mor_t1: sb,
                                        tname_wed_mor_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_mor_t1: id,
                                            img_wed_mor_t1: img_value.value,
                                            sub_wed_mor_t1: sb,
                                            tname_wed_mor_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck17;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t1: id,
                                img_wed_mor_t1: img_value.value,
                                sub_wed_mor_t1: sb,
                                tname_wed_mor_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_mor_t1: id,
                                img_wed_mor_t1: img_value.value,
                                sub_wed_mor_t1: sb,
                                tname_wed_mor_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_mor_t1: id,
                                    img_wed_mor_t1: img_value.value,
                                    sub_wed_mor_t1: sb,
                                    tname_wed_mor_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck17;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t1: null,
                                img_wed_mor_t1: null,
                                sub_wed_mor_t1: null,
                                tname_wed_mor_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_mor_t1: null,
                                img_wed_mor_t1: null,
                                sub_wed_mor_t1: null,
                                tname_wed_mor_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_mor_t1: null,
                                    img_wed_mor_t1: null,
                                    sub_wed_mor_t1: null,
                                    tname_wed_mor_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck18.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck18.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck18.dataset.g;
                    var t_name = cck18.dataset.tc;
                    var img_url = cck18.dataset.img;
                    var sub = cck18.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck18;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_18.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_mor_t2: id,
                                        img_wed_mor_t2: img_value.value,
                                        sub_wed_mor_t2: sb,
                                        tname_wed_mor_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_mor_t2: id,
                                        img_wed_mor_t2: img_value.value,
                                        sub_wed_mor_t2: sb,
                                        tname_wed_mor_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_mor_t2: id,
                                            img_wed_mor_t2: img_value.value,
                                            sub_wed_mor_t2: sb,
                                            tname_wed_mor_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck18;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t2: id,
                                img_wed_mor_t2: img_value.value,
                                sub_wed_mor_t2: sb,
                                tname_wed_mor_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_mor_t2: id,
                                img_wed_mor_t2: img_value.value,
                                sub_wed_mor_t2: sb,
                                tname_wed_mor_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_mor_t2: id,
                                    img_wed_mor_t2: img_value.value,
                                    sub_wed_mor_t2: sb,
                                    tname_wed_mor_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck18;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t2: null,
                                img_wed_mor_t2: null,
                                sub_wed_mor_t2: null,
                                tname_wed_mor_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_mor_t2: null,
                                img_wed_mor_t2: null,
                                sub_wed_mor_t2: null,
                                tname_wed_mor_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_mor_t2: null,
                                    img_wed_mor_t2: null,
                                    sub_wed_mor_t2: null,
                                    tname_wed_mor_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck19.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck19.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck19.dataset.g;
                    var t_name = cck19.dataset.tc;
                    var img_url = cck19.dataset.img;
                    var sub = cck19.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck19;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_19.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_mor_t3: id,
                                        img_wed_mor_t3: img_value.value,
                                        sub_wed_mor_t3: sb,
                                        tname_wed_mor_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        grade_wed_mor_t3: id,
                                        nickname: nickname.value,
                                        img_wed_mor_t3: img_value.value,
                                        sub_wed_mor_t3: sb,
                                        tname_wed_mor_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            grade_wed_mor_t3: id,
                                            nickname: nickname.value,
                                            img_wed_mor_t3: img_value.value,
                                            sub_wed_mor_t3: sb,
                                            tname_wed_mor_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck19;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t3: id,
                                img_wed_mor_t3: img_value.value,
                                sub_wed_mor_t3: sb,
                                tname_wed_mor_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_mor_t3: id,
                                img_wed_mor_t3: img_value.value,
                                sub_wed_mor_t3: sb,
                                tname_wed_mor_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_mor_t3: id,
                                    img_wed_mor_t3: img_value.value,
                                    sub_wed_mor_t3: sb,
                                    tname_wed_mor_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck19;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t3: null,
                                img_wed_mor_t3: null,
                                sub_wed_mor_t3: null,
                                tname_wed_mor_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_mor_t3: null,
                                img_wed_mor_t3: null,
                                sub_wed_mor_t3: null,
                                tname_wed_mor_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_mor_t3: null,
                                    img_wed_mor_t3: null,
                                    sub_wed_mor_t3: null,
                                    tname_wed_mor_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck20.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck20.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck20.dataset.g;
                    var t_name = cck20.dataset.tc;
                    var img_url = cck20.dataset.img;
                    var sub = cck20.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck20;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_20.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_mor_t4: id,
                                        img_wed_mor_t4: img_value.value,
                                        sub_wed_mor_t4: sb,
                                        tname_wed_mor_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_mor_t4: id,
                                        img_wed_mor_t4: img_value.value,
                                        sub_wed_mor_t4: sb,
                                        tname_wed_mor_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_mor_t4: id,
                                            img_wed_mor_t4: img_value.value,
                                            sub_wed_mor_t4: sb,
                                            tname_wed_mor_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck20;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t4: id,
                                img_wed_mor_t4: img_value.value,
                                sub_wed_mor_t4: sb,
                                tname_wed_mor_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_mor_t4: id,
                                img_wed_mor_t4: img_value.value,
                                sub_wed_mor_t4: sb,
                                tname_wed_mor_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_mor_t4: id,
                                    img_wed_mor_t4: img_value.value,
                                    sub_wed_mor_t4: sb,
                                    tname_wed_mor_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck20;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_mor_t4: null,
                                img_wed_mor_t4: null,
                                sub_wed_mor_t4: null,
                                tname_wed_mor_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_mor_t4: null,
                                img_wed_mor_t4: null,
                                sub_wed_mor_t4: null,
                                tname_wed_mor_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_mor_t4: null,
                                    img_wed_mor_t4: null,
                                    sub_wed_mor_t4: null,
                                    tname_wed_mor_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Wednesday Afternoon
                cck21.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck21.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck21.dataset.g;
                    var t_name = cck21.dataset.tc;
                    var img_url = cck21.dataset.img;
                    var sub = cck21.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck21;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_21.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_aft_t1: id,
                                        img_wed_aft_t1: img_value.value,
                                        sub_wed_aft_t1: sb,
                                        tname_wed_aft_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_aft_t1: id,
                                        img_wed_aft_t1: img_value.value,
                                        sub_wed_aft_t1: sb,
                                        tname_wed_aft_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_aft_t1: id,
                                            img_wed_aft_t1: img_value.value,
                                            sub_wed_aft_t1: sb,
                                            tname_wed_aft_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck21;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t1: id,
                                img_wed_aft_t1: img_value.value,
                                sub_wed_aft_t1: sb,
                                tname_wed_aft_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_aft_t1: id,
                                img_wed_aft_t1: img_value.value,
                                sub_wed_aft_t1: sb,
                                tname_wed_aft_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_aft_t1: id,
                                    img_wed_aft_t1: img_value.value,
                                    sub_wed_aft_t1: sb,
                                    tname_wed_aft_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck21;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t1: null,
                                img_wed_aft_t1: null,
                                sub_wed_aft_t1: null,
                                tname_wed_aft_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_aft_t1: null,
                                img_wed_aft_t1: null,
                                sub_wed_aft_t1: null,
                                tname_wed_aft_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_aft_t1: null,
                                    img_wed_aft_t1: null,
                                    sub_wed_aft_t1: null,
                                    tname_wed_aft_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck22.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck22.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck22.dataset.g;
                    var t_name = cck22.dataset.tc;
                    var img_url = cck22.dataset.img;
                    var sub = cck22.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck22;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_22.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_aft_t2: id,
                                        img_wed_aft_t2: img_value.value,
                                        sub_wed_aft_t2: sb,
                                        tname_wed_aft_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_aft_t2: id,
                                        img_wed_aft_t2: img_value.value,
                                        sub_wed_aft_t2: sb,
                                        tname_wed_aft_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_aft_t2: id,
                                            img_wed_aft_t2: img_value.value,
                                            sub_wed_aft_t2: sb,
                                            tname_wed_aft_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck22;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t2: id,
                                img_wed_aft_t2: img_value.value,
                                sub_wed_aft_t2: sb,
                                tname_wed_aft_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_aft_t2: id,
                                img_wed_aft_t2: img_value.value,
                                sub_wed_aft_t2: sb,
                                tname_wed_aft_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_aft_t2: id,
                                    img_wed_aft_t2: img_value.value,
                                    sub_wed_aft_t2: sb,
                                    tname_wed_aft_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck22;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t2: null,
                                img_wed_aft_t2: null,
                                sub_wed_aft_t2: null,
                                tname_wed_aft_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_aft_t2: null,
                                img_wed_aft_t2: null,
                                sub_wed_aft_t2: null,
                                tname_wed_aft_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_aft_t2: null,
                                    img_wed_aft_t2: null,
                                    sub_wed_aft_t2: null,
                                    tname_wed_aft_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck23.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck23.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck23.dataset.g;
                    var t_name = cck23.dataset.tc;
                    var img_url = cck23.dataset.img;
                    var sub = cck23.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck23;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_23.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_aft_t3: id,
                                        img_wed_aft_t3: img_value.value,
                                        sub_wed_aft_t3: sb,
                                        tname_wed_aft_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_aft_t3: id,
                                        img_wed_aft_t3: img_value.value,
                                        sub_wed_aft_t3: sb,
                                        tname_wed_aft_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_aft_t3: id,
                                            img_wed_aft_t3: img_value.value,
                                            sub_wed_aft_t3: sb,
                                            tname_wed_aft_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck23;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t3: id,
                                img_wed_aft_t3: img_value.value,
                                sub_wed_aft_t3: sb,
                                tname_wed_aft_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_aft_t3: id,
                                img_wed_aft_t3: img_value.value,
                                sub_wed_aft_t3: sb,
                                tname_wed_aft_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_aft_t3: id,
                                    img_wed_aft_t3: img_value.value,
                                    sub_wed_aft_t3: sb,
                                    tname_wed_aft_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck23;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t3: null,
                                img_wed_aft_t3: null,
                                sub_wed_aft_t3: null,
                                tname_wed_aft_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_aft_t3: null,
                                img_wed_aft_t3: null,
                                sub_wed_aft_t3: null,
                                tname_wed_aft_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_aft_t3: null,
                                    img_wed_aft_t3: null,
                                    sub_wed_aft_t3: null,
                                    tname_wed_aft_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck24.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck24.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck24.dataset.g;
                    var t_name = cck24.dataset.tc;
                    var img_url = cck24.dataset.img;
                    var sub = cck24.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck24;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_24.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_wed_aft_t4: id,
                                        img_wed_aft_t4: img_value.value,
                                        sub_wed_aft_t4: sb,
                                        tname_wed_aft_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_wed_aft_t4: id,
                                        img_wed_aft_t4: img_value.value,
                                        sub_wed_aft_t4: sb,
                                        tname_wed_aft_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_wed_aft_t4: id,
                                            img_wed_aft_t4: img_value.value,
                                            sub_wed_aft_t4: sb,
                                            tname_wed_aft_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck24;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t4: id,
                                img_wed_aft_t4: img_value.value,
                                sub_wed_aft_t4: sb,
                                tname_wed_aft_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_wed_aft_t4: id,
                                img_wed_aft_t4: img_value.value,
                                sub_wed_aft_t4: sb,
                                tname_wed_aft_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_wed_aft_t4: id,
                                    img_wed_aft_t4: img_value.value,
                                    sub_wed_aft_t4: sb,
                                    tname_wed_aft_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck24;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_wed_aft_t4: null,
                                img_wed_aft_t4: null,
                                sub_wed_aft_t4: null,
                                tname_wed_aft_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_wed_aft_t4: null,
                                img_wed_aft_t4: null,
                                sub_wed_aft_t4: null,
                                tname_wed_aft_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_wed_aft_t4: null,
                                    img_wed_aft_t4: null,
                                    sub_wed_aft_t4: null,
                                    tname_wed_aft_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Thunesday Morning
                cck25.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck25.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck25.dataset.g;
                    var t_name = cck25.dataset.tc;
                    var img_url = cck25.dataset.img;
                    var sub = cck25.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck25;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_25.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_mor_t1: id,
                                        img_thu_mor_t1: img_value.value,
                                        sub_thu_mor_t1: sb,
                                        tname_thu_mor_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_mor_t1: id,
                                        img_thu_mor_t1: img_value.value,
                                        sub_thu_mor_t1: sb,
                                        tname_thu_mor_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_mor_t1: id,
                                            img_thu_mor_t1: img_value.value,
                                            sub_thu_mor_t1: sb,
                                            tname_thu_mor_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck25;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t1: id,
                                img_thu_mor_t1: img_value.value,
                                sub_thu_mor_t1: sb,
                                tname_thu_mor_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_mor_t1: id,
                                img_thu_mor_t1: img_value.value,
                                sub_thu_mor_t1: sb,
                                tname_thu_mor_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_mor_t1: id,
                                    img_thu_mor_t1: img_value.value,
                                    sub_thu_mor_t1: sb,
                                    tname_thu_mor_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck25;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t1: null,
                                img_thu_mor_t1: null,
                                sub_thu_mor_t1: null,
                                tname_thu_mor_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_mor_t1: null,
                                img_thu_mor_t1: null,
                                sub_thu_mor_t1: null,
                                tname_thu_mor_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_mor_t1: null,
                                    img_thu_mor_t1: null,
                                    sub_thu_mor_t1: null,
                                    tname_thu_mor_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck26.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck26.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck26.dataset.g;
                    var t_name = cck26.dataset.tc;
                    var img_url = cck26.dataset.img;
                    var sub = cck26.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck26;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_26.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_mor_t2: id,
                                        img_thu_mor_t2: img_value.value,
                                        sub_thu_mor_t2: sb,
                                        tname_thu_mor_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_mor_t2: id,
                                        img_thu_mor_t2: img_value.value,
                                        sub_thu_mor_t2: sb,
                                        tname_thu_mor_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_mor_t2: id,
                                            img_thu_mor_t2: img_value.value,
                                            sub_thu_mor_t2: sb,
                                            tname_thu_mor_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck26;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t2: id,
                                img_thu_mor_t2: img_value.value,
                                sub_thu_mor_t2: sb,
                                tname_thu_mor_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_mor_t2: id,
                                img_thu_mor_t2: img_value.value,
                                sub_thu_mor_t2: sb,
                                tname_thu_mor_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_mor_t2: id,
                                    img_thu_mor_t2: img_value.value,
                                    sub_thu_mor_t2: sb,
                                    tname_thu_mor_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck26;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t2: null,
                                img_thu_mor_t2: null,
                                sub_thu_mor_t2: null,
                                tname_thu_mor_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_mor_t2: null,
                                img_thu_mor_t2: null,
                                sub_thu_mor_t2: null,
                                tname_thu_mor_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_mor_t2: null,
                                    img_thu_mor_t2: null,
                                    sub_thu_mor_t2: null,
                                    tname_thu_mor_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck27.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck27.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck27.dataset.g;
                    var t_name = cck27.dataset.tc;
                    var img_url = cck27.dataset.img;
                    var sub = cck27.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck27;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_27.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_mor_t3: id,
                                        img_thu_mor_t3: img_value.value,
                                        sub_thu_mor_t3: sb,
                                        tname_thu_mor_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_mor_t3: id,
                                        img_thu_mor_t3: img_value.value,
                                        sub_thu_mor_t3: sb,
                                        tname_thu_mor_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_mor_t3: id,
                                            img_thu_mor_t3: img_value.value,
                                            sub_thu_mor_t3: sb,
                                            tname_thu_mor_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck27;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t3: id,
                                img_thu_mor_t3: img_value.value,
                                sub_thu_mor_t3: sb,
                                tname_thu_mor_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_mor_t3: id,
                                img_thu_mor_t3: img_value.value,
                                sub_thu_mor_t3: sb,
                                tname_thu_mor_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_mor_t3: id,
                                    img_thu_mor_t3: img_value.value,
                                    sub_thu_mor_t3: sb,
                                    tname_thu_mor_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck27;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t3: null,
                                img_thu_mor_t3: null,
                                sub_thu_mor_t3: null,
                                tname_thu_mor_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_mor_t3: null,
                                img_thu_mor_t3: null,
                                sub_thu_mor_t3: null,
                                tname_thu_mor_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_mor_t3: null,
                                    img_thu_mor_t3: null,
                                    sub_thu_mor_t3: null,
                                    tname_thu_mor_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck28.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck28.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck28.dataset.g;
                    var t_name = cck28.dataset.tc;
                    var img_url = cck28.dataset.img;
                    var sub = cck28.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck28;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_28.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_mor_t4: id,
                                        img_thu_mor_t4: img_value.value,
                                        sub_thu_mor_t4: sb,
                                        tname_thu_mor_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_mor_t4: id,
                                        img_thu_mor_t4: img_value.value,
                                        sub_thu_mor_t4: sb,
                                        tname_thu_mor_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_mor_t4: id,
                                            img_thu_mor_t4: img_value.value,
                                            sub_thu_mor_t4: sb,
                                            tname_thu_mor_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck28;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t4: id,
                                img_thu_mor_t4: img_value.value,
                                sub_thu_mor_t4: sb,
                                tname_thu_mor_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_mor_t4: id,
                                img_thu_mor_t4: img_value.value,
                                sub_thu_mor_t4: sb,
                                tname_thu_mor_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_mor_t4: id,
                                    img_thu_mor_t4: img_value.value,
                                    sub_thu_mor_t4: sb,
                                    tname_thu_mor_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck28;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_mor_t4: null,
                                img_thu_mor_t4: null,
                                sub_thu_mor_t4: null,
                                tname_thu_mor_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_mor_t4: null,
                                img_thu_mor_t4: null,
                                sub_thu_mor_t4: null,
                                tname_thu_mor_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_mor_t4: null,
                                    img_thu_mor_t4: null,
                                    sub_thu_mor_t4: null,
                                    tname_thu_mor_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Thunesday Afternoon
                cck29.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck29.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck29.dataset.g;
                    var t_name = cck29.dataset.tc;
                    var img_url = cck29.dataset.img;
                    var sub = cck29.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck29;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_29.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_aft_t1: id,
                                        img_thu_aft_t1: img_value.value,
                                        sub_thu_aft_t1: sb,
                                        tname_thu_aft_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_aft_t1: id,
                                        img_thu_aft_t1: img_value.value,
                                        sub_thu_aft_t1: sb,
                                        tname_thu_aft_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_aft_t1: id,
                                            img_thu_aft_t1: img_value.value,
                                            sub_thu_aft_t1: sb,
                                            tname_thu_aft_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck29;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t1: id,
                                img_thu_aft_t1: img_value.value,
                                sub_thu_aft_t1: sb,
                                tname_thu_aft_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_aft_t1: id,
                                img_thu_aft_t1: img_value.value,
                                sub_thu_aft_t1: sb,
                                tname_thu_aft_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_aft_t1: id,
                                    img_thu_aft_t1: img_value.value,
                                    sub_thu_aft_t1: sb,
                                    tname_thu_aft_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck29;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t1: null,
                                img_thu_aft_t1: null,
                                sub_thu_aft_t1: null,
                                tname_thu_aft_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_aft_t1: null,
                                img_thu_aft_t1: null,
                                sub_thu_aft_t1: null,
                                tname_thu_aft_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_aft_t1: null,
                                    img_thu_aft_t1: null,
                                    sub_thu_aft_t1: null,
                                    tname_thu_aft_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck30.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck30.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck30.dataset.g;
                    var t_name = cck30.dataset.tc;
                    var img_url = cck30.dataset.img;
                    var sub = cck30.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck30;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_30.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_aft_t2: id,
                                        img_thu_aft_t2: img_value.value,
                                        sub_thu_aft_t2: sb,
                                        tname_thu_aft_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_aft_t2: id,
                                        img_thu_aft_t2: img_value.value,
                                        sub_thu_aft_t2: sb,
                                        tname_thu_aft_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_aft_t2: id,
                                            img_thu_aft_t2: img_value.value,
                                            sub_thu_aft_t2: sb,
                                            tname_thu_aft_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck30;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t2: id,
                                img_thu_aft_t2: img_value.value,
                                sub_thu_aft_t2: sb,
                                tname_thu_aft_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_aft_t2: id,
                                img_thu_aft_t2: img_value.value,
                                sub_thu_aft_t2: sb,
                                tname_thu_aft_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_aft_t2: id,
                                    img_thu_aft_t2: img_value.value,
                                    sub_thu_aft_t2: sb,
                                    tname_thu_aft_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck30;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t2: null,
                                img_thu_aft_t2: null,
                                sub_thu_aft_t2: null,
                                tname_thu_aft_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_aft_t2: null,
                                img_thu_aft_t2: null,
                                sub_thu_aft_t2: null,
                                tname_thu_aft_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_aft_t2: null,
                                    img_thu_aft_t2: null,
                                    sub_thu_aft_t2: null,
                                    tname_thu_aft_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck31.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck31.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck31.dataset.g;
                    var t_name = cck31.dataset.tc;
                    var img_url = cck31.dataset.img;
                    var sub = cck31.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck31;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_31.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_aft_t3: id,
                                        img_thu_aft_t3: img_value.value,
                                        sub_thu_aft_t3: sb,
                                        tname_thu_aft_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_aft_t3: id,
                                        img_thu_aft_t3: img_value.value,
                                        sub_thu_aft_t3: sb,
                                        tname_thu_aft_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_aft_t3: id,
                                            img_thu_aft_t3: img_value.value,
                                            sub_thu_aft_t3: sb,
                                            tname_thu_aft_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck31;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t3: id,
                                img_thu_aft_t3: img_value.value,
                                sub_thu_aft_t3: sb,
                                tname_thu_aft_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_aft_t3: id,
                                img_thu_aft_t3: img_value.value,
                                sub_thu_aft_t3: sb,
                                tname_thu_aft_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_aft_t3: id,
                                    img_thu_aft_t3: img_value.value,
                                    sub_thu_aft_t3: sb,
                                    tname_thu_aft_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck31;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t3: null,
                                img_thu_aft_t3: null,
                                sub_thu_aft_t3: null,
                                tname_thu_aft_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_aft_t3: null,
                                img_thu_aft_t3: null,
                                sub_thu_aft_t3: null,
                                tname_thu_aft_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_aft_t3: null,
                                    img_thu_aft_t3: null,
                                    sub_thu_aft_t3: null,
                                    tname_thu_aft_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck32.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck32.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck32.dataset.g;
                    var t_name = cck32.dataset.tc;
                    var img_url = cck32.dataset.img;
                    var sub = cck32.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck32;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_32.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_thu_aft_t4: id,
                                        img_thu_aft_t4: img_value.value,
                                        sub_thu_aft_t4: sb,
                                        tname_thu_aft_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_thu_aft_t4: id,
                                        img_thu_aft_t4: img_value.value,
                                        sub_thu_aft_t4: sb,
                                        tname_thu_aft_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_thu_aft_t4: id,
                                            img_thu_aft_t4: img_value.value,
                                            sub_thu_aft_t4: sb,
                                            tname_thu_aft_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck32;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t4: id,
                                img_thu_aft_t4: img_value.value,
                                sub_thu_aft_t4: sb,
                                tname_thu_aft_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_thu_aft_t4: id,
                                img_thu_aft_t4: img_value.value,
                                sub_thu_aft_t4: sb,
                                tname_thu_aft_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_thu_aft_t4: id,
                                    img_thu_aft_t4: img_value.value,
                                    sub_thu_aft_t4: sb,
                                    tname_thu_aft_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck32;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_thu_aft_t4: null,
                                img_thu_aft_t4: null,
                                sub_thu_aft_t4: null,
                                tname_thu_aft_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_thu_aft_t4: null,
                                img_thu_aft_t4: null,
                                sub_thu_aft_t4: null,
                                tname_thu_aft_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_thu_aft_t4: null,
                                    img_thu_aft_t4: null,
                                    sub_thu_aft_t4: null,
                                    tname_thu_aft_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Friday Morning
                cck33.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck33.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck33.dataset.g;
                    var t_name = cck33.dataset.tc;
                    var img_url = cck33.dataset.img;
                    var sub = cck33.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck33;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_33.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_mor_t1: id,
                                        img_fri_mor_t1: img_value.value,
                                        sub_fri_mor_t1: sb,
                                        tname_fri_mor_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_mor_t1: id,
                                        img_fri_mor_t1: img_value.value,
                                        sub_fri_mor_t1: sb,
                                        tname_fri_mor_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_mor_t1: id,
                                            img_fri_mor_t1: img_value.value,
                                            sub_fri_mor_t1: sb,
                                            tname_fri_mor_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck33;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t1: id,
                                img_fri_mor_t1: img_value.value,
                                sub_fri_mor_t1: sb,
                                tname_fri_mor_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_mor_t1: id,
                                img_fri_mor_t1: img_value.value,
                                sub_fri_mor_t1: sb,
                                tname_fri_mor_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_mor_t1: id,
                                    img_fri_mor_t1: img_value.value,
                                    sub_fri_mor_t1: sb,
                                    tname_fri_mor_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck33;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t1: null,
                                img_fri_mor_t1: null,
                                sub_fri_mor_t1: null,
                                tname_fri_mor_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_mor_t1: null,
                                img_fri_mor_t1: null,
                                sub_fri_mor_t1: null,
                                tname_fri_mor_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_mor_t1: null,
                                    img_fri_mor_t1: null,
                                    sub_fri_mor_t1: null,
                                    tname_fri_mor_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck34.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck34.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck34.dataset.g;
                    var t_name = cck34.dataset.tc;
                    var img_url = cck34.dataset.img;
                    var sub = cck34.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck34;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_34.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_mor_t2: id,
                                        img_fri_mor_t2: img_value.value,
                                        sub_fri_mor_t2: sb,
                                        tname_fri_mor_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_mor_t2: id,
                                        img_fri_mor_t2: img_value.value,
                                        sub_fri_mor_t2: sb,
                                        tname_fri_mor_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_mor_t2: id,
                                            img_fri_mor_t2: img_value.value,
                                            sub_fri_mor_t2: sb,
                                            tname_fri_mor_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck34;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t2: id,
                                img_fri_mor_t2: img_value.value,
                                sub_fri_mor_t2: sb,
                                tname_fri_mor_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_mor_t2: id,
                                img_fri_mor_t2: img_value.value,
                                sub_fri_mor_t2: sb,
                                tname_fri_mor_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_mor_t2: id,
                                    img_fri_mor_t2: img_value.value,
                                    sub_fri_mor_t2: sb,
                                    tname_fri_mor_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck34;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t2: null,
                                img_fri_mor_t2: null,
                                sub_fri_mor_t2: null,
                                tname_fri_mor_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_mor_t2: null,
                                img_fri_mor_t2: null,
                                sub_fri_mor_t2: null,
                                tname_fri_mor_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_mor_t2: null,
                                    img_fri_mor_t2: null,
                                    sub_fri_mor_t2: null,
                                    tname_fri_mor_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })
                cck35.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck35.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck35.dataset.g;
                    var t_name = cck35.dataset.tc;
                    var img_url = cck35.dataset.img;
                    var sub = cck35.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck35;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_35.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_mor_t3: id,
                                        img_fri_mor_t3: img_value.value,
                                        sub_fri_mor_t3: sb,
                                        tname_fri_mor_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_mor_t3: id,
                                        img_fri_mor_t3: img_value.value,
                                        sub_fri_mor_t3: sb,
                                        tname_fri_mor_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_mor_t3: id,
                                            img_fri_mor_t3: img_value.value,
                                            sub_fri_mor_t3: sb,
                                            tname_fri_mor_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck35;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t3: id,
                                img_fri_mor_t3: img_value.value,
                                sub_fri_mor_t3: sb,
                                tname_fri_mor_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_mor_t3: id,
                                img_fri_mor_t3: img_value.value,
                                sub_fri_mor_t3: sb,
                                tname_fri_mor_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_mor_t3: id,
                                    img_fri_mor_t3: img_value.value,
                                    sub_fri_mor_t3: sb,
                                    tname_fri_mor_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck35;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t3: null,
                                img_fri_mor_t3: null,
                                sub_fri_mor_t3: null,
                                tname_fri_mor_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_mor_t3: null,
                                img_fri_mor_t3: null,
                                sub_fri_mor_t3: null,
                                tname_fri_mor_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_mor_t3: null,
                                    img_fri_mor_t3: null,
                                    sub_fri_mor_t3: null,
                                    tname_fri_mor_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck36.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck36.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck36.dataset.g;
                    var t_name = cck36.dataset.tc;
                    var img_url = cck36.dataset.img;
                    var sub = cck36.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck36;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_36.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_mor_t4: id,
                                        img_fri_mor_t4: img_value.value,
                                        sub_fri_mor_t4: sb,
                                        tname_fri_mor_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_mor_t4: id,
                                        img_fri_mor_t4: img_value.value,
                                        sub_fri_mor_t4: sb,
                                        tname_fri_mor_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_mor_t4: id,
                                            img_fri_mor_t4: img_value.value,
                                            sub_fri_mor_t4: sb,
                                            tname_fri_mor_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck36;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t4: id,
                                img_fri_mor_t4: img_value.value,
                                sub_fri_mor_t4: sb,
                                tname_fri_mor_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_mor_t4: id,
                                img_fri_mor_t4: img_value.value,
                                sub_fri_mor_t4: sb,
                                tname_fri_mor_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_mor_t4: id,
                                    img_fri_mor_t4: img_value.value,
                                    sub_fri_mor_t4: sb,
                                    tname_fri_mor_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck36;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_mor_t4: null,
                                img_fri_mor_t4: null,
                                sub_fri_mor_t4: null,
                                tname_fri_mor_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_mor_t4: null,
                                img_fri_mor_t4: null,
                                sub_fri_mor_t4: null,
                                tname_fri_mor_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_mor_t4: null,
                                    img_fri_mor_t4: null,
                                    sub_fri_mor_t4: null,
                                    tname_fri_mor_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                //Friday Afternoon
                cck37.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck37.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck37.dataset.g;
                    var t_name = cck37.dataset.tc;
                    var img_url = cck37.dataset.img;
                    var sub = cck37.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck37;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_37.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_aft_t1: id,
                                        img_fri_aft_t1: img_value.value,
                                        sub_fri_aft_t1: sb,
                                        tname_fri_aft_t1: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_aft_t1: id,
                                        img_fri_aft_t1: img_value.value,
                                        sub_fri_aft_t1: sb,
                                        tname_fri_aft_t1: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_aft_t1: id,
                                            img_fri_aft_t1: img_value.value,
                                            sub_fri_aft_t1: sb,
                                            tname_fri_aft_t1: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck37;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t1: id,
                                img_fri_aft_t1: img_value.value,
                                sub_fri_aft_t1: sb,
                                tname_fri_aft_t1: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_aft_t1: id,
                                img_fri_aft_t1: img_value.value,
                                sub_fri_aft_t1: sb,
                                tname_fri_aft_t1: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_aft_t1: id,
                                    img_fri_aft_t1: img_value.value,
                                    sub_fri_aft_t1: sb,
                                    tname_fri_aft_t1: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck37;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t1: null,
                                img_fri_aft_t1: null,
                                sub_fri_aft_t1: null,
                                tname_fri_aft_t1: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_aft_t1: null,
                                img_fri_aft_t1: null,
                                sub_fri_aft_t1: null,
                                tname_fri_aft_t1: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_aft_t1: null,
                                    img_fri_aft_t1: null,
                                    sub_fri_aft_t1: null,
                                    tname_fri_aft_t1: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck38.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck38.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck38.dataset.g;
                    var t_name = cck38.dataset.tc;
                    var img_url = cck38.dataset.img;
                    var sub = cck38.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck38;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_38.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_aft_t2: id,
                                        img_fri_aft_t2: img_value.value,
                                        sub_fri_aft_t2: sb,
                                        tname_fri_aft_t2: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_aft_t2: id,
                                        img_fri_aft_t2: img_value.value,
                                        sub_fri_aft_t2: sb,
                                        tname_fri_aft_t2: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_aft_t2: id,
                                            img_fri_aft_t2: img_value.value,
                                            sub_fri_aft_t2: sb,
                                            tname_fri_aft_t2: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck38;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t2: id,
                                img_fri_aft_t2: img_value.value,
                                sub_fri_aft_t2: sb,
                                tname_fri_aft_t2: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_aft_t2: id,
                                img_fri_aft_t2: img_value.value,
                                sub_fri_aft_t2: sb,
                                tname_fri_aft_t2: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_aft_t2: id,
                                    img_fri_aft_t2: img_value.value,
                                    sub_fri_aft_t2: sb,
                                    tname_fri_aft_t2: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck38;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t2: null,
                                img_fri_aft_t2: null,
                                sub_fri_aft_t2: null,
                                tname_fri_aft_t2: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_aft_t2: null,
                                img_fri_aft_t2: null,
                                sub_fri_aft_t2: null,
                                tname_fri_aft_t2: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_aft_t2: null,
                                    img_fri_aft_t2: null,
                                    sub_fri_aft_t2: null,
                                    tname_fri_aft_t2: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck39.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck39.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck39.dataset.g;
                    var t_name = cck39.dataset.tc;
                    var img_url = cck39.dataset.img;
                    var sub = cck39.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck39;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_39.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_aft_t3: id,
                                        img_fri_aft_t3: img_value.value,
                                        sub_fri_aft_t3: sb,
                                        tname_fri_aft_t3: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_aft_t3: id,
                                        img_fri_aft_t3: img_value.value,
                                        sub_fri_aft_t3: sb,
                                        tname_fri_aft_t3: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_aft_t3: id,
                                            img_fri_aft_t3: img_value.value,
                                            sub_fri_aft_t3: sb,
                                            tname_fri_aft_t3: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck39;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t3: id,
                                img_fri_aft_t3: img_value.value,
                                sub_fri_aft_t3: sb,
                                tname_fri_aft_t3: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_aft_t3: id,
                                img_fri_aft_t3: img_value.value,
                                sub_fri_aft_t3: sb,
                                tname_fri_aft_t3: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_aft_t3: id,
                                    img_fri_aft_t3: img_value.value,
                                    sub_fri_aft_t3: sb,
                                    tname_fri_aft_t3: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck39;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t3: null,
                                img_fri_aft_t3: null,
                                sub_fri_aft_t3: null,
                                tname_fri_aft_t3: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_aft_t3: null,
                                img_fri_aft_t3: null,
                                sub_fri_aft_t3: null,
                                tname_fri_aft_t3: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_aft_t3: null,
                                    img_fri_aft_t3: null,
                                    sub_fri_aft_t3: null,
                                    tname_fri_aft_t3: null,
                                })
                        }
                        window.location.reload();

                    })

                })

                cck40.addEventListener('click', () => {
                    var user_value = document.getElementById('user_teacher_id');
                    var img_value = document.getElementById('user_url');
                    var nickname = document.getElementById('user_nickname');
                    var t_nickname = cck40.dataset.nickname;
                    nickname.value = t_nickname;

                    var data_g = cck40.dataset.g;
                    var t_name = cck40.dataset.tc;
                    var img_url = cck40.dataset.img;
                    var sub = cck40.dataset.sub;

                    user_value.value = t_name;
                    img_value.value = img_url;
                    sub_value.val(sub);


                    save_btn.innerHTML = `
                    <button type="button" id="btn_del"
                    class="btn btn-danger btn-sm">លុប</button>
                    
                    <button type="button" id="btn_save"
                    class="btn btn-success btn-sm">បញ្ចូល</button>

                    <button type="button" id="btn_update"
                    class="btn btn-warning btn-sm">កែ</button>
                    `;
                    //Add data
                    document.getElementById('btn_save').addEventListener('click', () => {
                        var u = cck40;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();

                        if (data_row_40.includes(user_value.value)) {
                            Swal.fire({
                                text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1600,
                            });

                        } else {
                            if (sb) {
                                set_sb.innerHTML = sub_value.val();
                                im.src = img_value.value;
                                im.style.display = 'block';
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                                    .update({
                                        grade_fri_aft_t4: id,
                                        img_fri_aft_t4: img_value.value,
                                        sub_fri_aft_t4: sb,
                                        tname_fri_aft_t4: user_value.value,
                                    })
                                firebase
                                    .database()
                                    .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                                    .update({
                                        id: user_value.value,
                                        nickname: nickname.value,
                                        grade_fri_aft_t4: id,
                                        img_fri_aft_t4: img_value.value,
                                        sub_fri_aft_t4: sb,
                                        tname_fri_aft_t4: user_value.value,
                                    })
                                if (sb == 'E') {
                                    firebase
                                        .database()
                                        .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                        .update({
                                            id: user_value.value,
                                            nickname: nickname.value,
                                            grade_fri_aft_t4: id,
                                            img_fri_aft_t4: img_value.value,
                                            sub_fri_aft_t4: sb,
                                            tname_fri_aft_t4: user_value.value,
                                        })

                                }
                                window.location.reload();
                            } else {
                                Swal.fire({
                                    text: "សូមជ្រើសរើសមុខវិជ្ជា!",
                                    icon: "info",
                                    showConfirmButton: false,
                                    timer: 1600,
                                });

                            }
                        }

                    })
                    //Update Data
                    document.getElementById('btn_update').addEventListener('click', () => {
                        var u = cck40;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = sub_value.val();
                        im.src = img_value.value;
                        im.style.display = 'block';
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t4: id,
                                img_fri_aft_t4: img_value.value,
                                sub_fri_aft_t4: sb,
                                tname_fri_aft_t4: user_value.value,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: nickname.value,
                                grade_fri_aft_t4: id,
                                img_fri_aft_t4: img_value.value,
                                sub_fri_aft_t4: sb,
                                tname_fri_aft_t4: user_value.value,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: nickname.value,
                                    grade_fri_aft_t4: id,
                                    img_fri_aft_t4: img_value.value,
                                    sub_fri_aft_t4: sb,
                                    tname_fri_aft_t4: user_value.value,
                                })
                        }
                        window.location.reload();
                    })
                    //Delete Data
                    document.getElementById('btn_del').addEventListener('click', () => {
                        var u = cck40;
                        var set_sb = u.querySelector('div span');
                        var p = u.querySelector('div');
                        var im = p.querySelector('img');
                        var sb = sub_value.val();
                        set_sb.innerHTML = '';
                        im.src = '';

                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                            .update({
                                grade_fri_aft_t4: null,
                                img_fri_aft_t4: null,
                                sub_fri_aft_t4: null,
                                tname_fri_aft_t4: null,
                            })
                        firebase
                            .database()
                            .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_teacher/` + `${sle_lvl}/` + user_value.value)
                            .update({
                                id: user_value.value,
                                nickname: null,
                                grade_fri_aft_t4: null,
                                img_fri_aft_t4: null,
                                sub_fri_aft_t4: null,
                                tname_fri_aft_t4: null,
                            })
                        if (sb == 'E') {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `by_english/` + `${sle_lvl}/` + user_value.value)
                                .update({
                                    id: user_value.value,
                                    nickname: null,
                                    grade_fri_aft_t4: null,
                                    img_fri_aft_t4: null,
                                    sub_fri_aft_t4: null,
                                    tname_fri_aft_t4: null,
                                })
                        }
                        window.location.reload();

                    })

                })








                // cck2.addEventListener('click', () => {
                //     var user_value = document.getElementById('user_teacher_id');
                //     var img_value = document.getElementById('user_url');
                //     var sub_value = $('#select_sub');

                //     var data_g = cck2.dataset.g;
                //     var t_name = cck2.dataset.tc;
                //     var img_url = cck2.dataset.img;
                //     var sub = cck2.dataset.sub;
                //     user_value.value = t_name;
                //     img_value.value = img_url;
                //     sub_value.val(sub);

                //     save_btn.innerHTML = `
                //     <button type="button" id="btn_save"
                //         class="btn btn-primary">Save
                //     changes</button>
                //     `;
                //     document.getElementById('btn_save').addEventListener('click', () => {
                //         var u = cck2;
                //         var set_sb = u.querySelector('div');
                //         var im = u.querySelector('img');
                //         var sb = sub_value.val();
                //         set_sb.innerHTML = sub_value.val();
                //         im.src = img_value.value;
                //         if (data_row_2.includes(user_value.value)) {
                //             alert('ឈ្មោះដូចគ្នា')
                //         } else {
                //             firebase
                //                 .database()
                //                 .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                //                 .update({
                //                     grade_mon_mor_t2: id,
                //                     img_mon_mor_t2: img_value.value,
                //                     sub_mon_mor_t2: sb,
                //                     tname_mon_mor_t2: user_value.value,
                //                 })
                //         }

                //     })
                // })
                // cck3.addEventListener('click', () => {
                //     var user_value = document.getElementById('user_teacher_id');
                //     var img_value = document.getElementById('user_url');
                //     var sub_value = $('#select_sub');

                //     var data_g = cck3.dataset.g;
                //     var t_name = cck3.dataset.tc;
                //     var img_url = cck3.dataset.img;
                //     var sub = cck3.dataset.sub;
                //     user_value.value = t_name;
                //     img_value.value = img_url;
                //     sub_value.val(sub);

                //     save_btn.innerHTML = `
                //     <button type="button" id="btn_save"
                //         class="btn btn-primary">Save
                //     changes</button>
                //     `;
                //     document.getElementById('btn_save').addEventListener('click', () => {
                //         var u = cck3;
                //         var set_sb = u.querySelector('div');
                //         var im = u.querySelector('img');
                //         var sb = sub_value.val();
                //         set_sb.innerHTML = sub_value.val();
                //         im.src = img_value.value;
                //         im.src = img_value.value;
                //         if (data_row_3.includes(user_value.value)) {
                //             alert('ឈ្មោះដូចគ្នា')
                //         } else {
                //             firebase
                //                 .database()
                //                 .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                //                 .update({
                //                     grade_mon_mor_t3: id,
                //                     img_mon_mor_t3: img_value.value,
                //                     sub_mon_mor_t3: sb,
                //                     tname_mon_mor_t3: user_value.value,
                //                 })
                //         }

                //     })
                // })
                // cck4.addEventListener('click', () => {
                //     var user_value = document.getElementById('user_teacher_id');
                //     var img_value = document.getElementById('user_url');
                //     var sub_value = $('#select_sub');

                //     var data_g = cck4.dataset.g;
                //     var t_name = cck4.dataset.tc;
                //     var img_url = cck4.dataset.img;
                //     var sub = cck4.dataset.sub;
                //     user_value.value = t_name;
                //     img_value.value = img_url;
                //     sub_value.val(sub);

                //     save_btn.innerHTML = `
                //     <button type="button" id="btn_save"
                //         class="btn btn-primary">Save
                //     changes</button>
                //     `;
                //     document.getElementById('btn_save').addEventListener('click', () => {
                //         var u = cck4;
                //         var set_sb = u.querySelector('div');
                //         var im = u.querySelector('img');
                //         var sb = sub_value.val();
                //         set_sb.innerHTML = sub_value.val();
                //         im.src = img_value.value;
                //         im.src = img_value.value;
                //         if (data_row_4.includes(user_value.value)) {
                //             alert('ឈ្មោះដូចគ្នា')
                //         } else {
                //             firebase
                //                 .database()
                //                 .ref(`/SalaMOM/tools/timeTable/` + `${dbYear}/` + `${sle_lvl}/` + `${data_g}`)
                //                 .update({
                //                     grade_mon_mor_t4: id,
                //                     img_mon_mor_t4: img_value.value,
                //                     sub_mon_mor_t4: sb,
                //                     tname_mon_mor_t4: user_value.value,
                //                 })
                //         }
                //     })
                // })
            }, 1000);

            tbl.innerHTML += l;
        })


    }

    //Select username and img url
    const dropdownContent = document.querySelector('.dropdown-content');
    const selectedLabelInput = document.getElementById('user_teacher_id');
    const imageUrlInput = document.getElementById('user_url');
    const user_nickname = document.getElementById('user_nickname');


    dropdownContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const label = event.target.dataset.label;
            const nickname = event.target.dataset.nickname;
            const imageUrl = event.target.dataset.image;
            selectedLabelInput.value = label;
            imageUrlInput.value = imageUrl;
            user_nickname.value = nickname;
            dropdownContent.classList.remove('show');
        }
    });



})


// const subjectMenu = document.getElementById('subject-menu');
// const teacherMenu = document.getElementById('teacher-menu');
// const subjectSelect = document.getElementById('subject-select');
// const teacherSelect = document.getElementById('teacher-select');

// function showMenu(cell, menu) {
//     const cellRect = cell.getBoundingClientRect();
//     menu.style.display = "block";
//     menu.style.left = cellRect.left + "px";
//     menu.style.top = cellRect.bottom + "px";
// }

// function hideMenu(menu) {
//     menu.style.display = "none";
// }

// function setDetails(cell) {
//     const selectedSubject = subjectSelect.value;
//     const selectedTeacher = teacherSelect.value;
//     cell.textContent = `${selectedSubject} - ${selectedTeacher}`;
//     hideMenu(subjectMenu);
//     hideMenu(teacherMenu);

//     // Save data to localStorage
//     const cellId = cell.dataset.cellId;
//     localStorage.setItem(`cell-${cellId}`, cell.textContent);
// }

// function loadSchedule() {
//     for (let i = 1; i <= 10; i++) { // Adjust loop for more cells
//         const cellId = `cell-${i}`;
//         const savedData = localStorage.getItem(cellId);
//         if (savedData) {
//             document.querySelector(`td[data-cell-id="${i}"]`).textContent = savedData;
//         }
//     }
// }

// document.getElementById('close').addEventListener('click', function (event) {
//     // const clickedCell = document.getElementById('close'); // Get clicked cell element
//     // if (!clickedCell) { // Hide menu if clicked outside a cell
//     hideMenu(subjectMenu);
//     hideMenu(teacherMenu);
//     // }

// });
// let my_table = document.getElementById('tbody_time_table');

// setTimeout(() => {
//     let existingSubjects = document.querySelectorAll("#tbody_time_table td:nth-child(3)");
//     let dkd = document.querySelectorAll('#tbody_time_table');
//     let ii = dkd.querySelector('div');
//     let my_td = my_table.querySelector('td');
//     // let dd = existingSubjects.querySelector('div');

//     console.log(ii);
//     // my_td.addEventListener('click', () => {
//     //     let d = my_td.querySelector('div').textContent;
//     //     console.log(d);
//     // })
//     // my_table.querySelectorAll('td').forEach(cell => {
//     //     console.log(cell);
//     //     cell.addEventListener('click', function () {
//     //         // Show subject menu first
//     //         var kk = cell.innerHTML;
//     //         showMenu(this, subjectMenu);
//     //         subjectSelect.value = ""; // Reset subject selection on click
    
    
//     //         // Optional: Close menu on Esc key press (if needed)
//     //         // document.addEventListener('keydown', function (event) {
//     //         //     if (event.key === "Escape") {
//     //         //         hideMenu(subjectMenu);
//     //         //         hideMenu(teacherMenu);
//     //         //     }
//     //         // });
//     //         document.getElementById('btn_submit').addEventListener('click', () => {
//     //             setDetails(cell);
    
//     //         })
//     //         // Selecting subject shows teacher menu
//     //         subjectSelect.addEventListener('change', function () {
//     //             if (subjectSelect.value) { // Only show teacher menu if subject selected
//     //                 showMenu(cell, teacherMenu);
//     //             }
//     //         });
//     //     });
//     // });
    
// }, 1000);

// Call loadSchedule on page load to restore saved data
// window.addEventListener('load', loadSchedule);