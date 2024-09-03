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

//User Profile Picture
var user_img = localStorage.getItem('user_url');
var img = $("#user_img");

img.attr("src", user_img);

//User logout
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


//បង្កើតមុខវិជ្ជាថ្មី
document.getElementById('btnAdd').addEventListener('click', () => {
    let subKh = document.getElementById('subKh').value;
    let subEn = document.getElementById('subEn').value;
    let subAbr = document.getElementById('subAbr').value;
    //Add subjects to firebase
    firebase
        .database()
        .ref(`SalaMOM/tools/subjects/` + subKh)
        .set({
            id: subKh,
            subKh: subKh,
            subEn: subEn,
            subAbr: subAbr,
        });
    $(".alert").addClass('notHidden');
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById('subKh').value = '';
        document.getElementById('subEn').value = '';
        document.getElementById('subAbr').value = '';
        setTimeout(function () {
            $(".alert").alert('close');
        }, 1500);
    };
    sleep(1000);
})
//បង្កើតថ្នាក់ថ្មី
document.getElementById('btnAdd_class_primary').addEventListener('click', () => {
    let clEn = document.getElementById('clEn').value;
    let clKh = document.getElementById('clKh').value;
    let level = 'បឋមសិក្សា';
    //Add subjects to firebase
    firebase
        .database()
        .ref(`SalaMOM/tools/class/` + `${level}/` + clKh)
        .set({
            id: clKh,
            clKh: clKh,
            clEn: clEn,
            level: level,
        });
    $(".alert").addClass('notHidden');
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById('clKh').value = '';
        document.getElementById('clEn').value = '';
        setTimeout(function () {
            $(".alert").alert('close');
        }, 1500);
    };
    sleep(1000);
})
document.getElementById('btnAdd_class_secondary').addEventListener('click', () => {
    let clEn = document.getElementById('clEn').value;
    let clKh = document.getElementById('clKh').value;
    let level = 'អនុវិទ្យាល័យ';
    //Add subjects to firebase
    firebase
        .database()
        .ref(`SalaMOM/tools/class/` + `${level}/` + clKh)
        .set({
            id: clKh,
            clKh: clKh,
            clEn: clEn,
            level: level,
        });
    $(".alert").addClass('notHidden');
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById('clKh').value = '';
        document.getElementById('clEn').value = '';
        setTimeout(function () {
            $(".alert").alert('close');
        }, 1500);
    };
    sleep(1000);
})
document.getElementById('btnAdd_class_highschool').addEventListener('click', () => {
    let clEn = document.getElementById('clEn').value;
    let clKh = document.getElementById('clKh').value;
    let level = 'វិទ្យាល័យ';
    //Add subjects to firebase
    firebase
        .database()
        .ref(`SalaMOM/tools/class/` + `${level}/` + clKh)
        .set({
            id: clKh,
            clKh: clKh,
            clEn: clEn,
            level: level,
        });
    $(".alert").addClass('notHidden');
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById('clKh').value = '';
        document.getElementById('clEn').value = '';
        setTimeout(function () {
            $(".alert").alert('close');
        }, 1500);
    };
    sleep(1000);
})
//បង្កើតឆ្នាំសិក្សាថ្មី
document.getElementById('btnAdd_year').addEventListener('click', () => {
    let yearEn = document.getElementById('yearEn').value;
    let yearKh = document.getElementById('yearKh').value;
    //Add subjects to firebase
    firebase
        .database()
        .ref(`SalaMOM/tools/years/` + yearKh)
        .set({
            id: yearKh,
            yearKh: yearKh,
            yearEn: yearEn,
        });
    $(".alert").addClass('notHidden');
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById('yearKh').value = '';
        document.getElementById('yearEn').value = '';
        setTimeout(function () {
            $(".alert").alert('close');
        }, 1500);
    };
    sleep(1000);
})
//បង្កើតម៉ោងសិក្សាថ្មី
document.getElementById('btnAdd_time').addEventListener('click', () => {
    let selectTime = document.getElementById('selectTime').value;
    let time_setting_start_at = document.getElementById('time_setting_start_at').value;
    let time_setting_end_at = document.getElementById('time_setting_end_at').value;
    let time_setting_meridiem = document.getElementById('time_setting_meridiem').value;
    let time_setting_kind = document.getElementById('time_setting_kind').value;
    //Add subjects to firebase
    firebase
        .database()
        .ref(`SalaMOM/tools/times/` + selectTime)
        .set({
            id: selectTime,
            time_setting_start_at: time_setting_start_at,
            time_setting_end_at: time_setting_end_at,
            time_setting_meridiem: time_setting_meridiem,
            time_setting_kind: time_setting_kind,
        });
    $(".alert").addClass('notHidden');
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById('selectTime').value = '';
        document.getElementById('time_setting_start_at').value = '';
        document.getElementById('time_setting_end_at').value = '';
        document.getElementById('time_setting_meridiem').value = '';
        document.getElementById('time_setting_kind').value = '';
        setTimeout(function () {
            $(".alert").alert('close');
            window.location.reload();
        }, 1500);
    };
    sleep(1000);
})
//បង្កើតមុខវិជ្ជាថ្មី
$(document).ready(function () {
    let N0 = '';
    let showSubs = document.getElementById('showSubjects');

    firebase
        .database()
        .ref(`SalaMOM/tools/subjects`)
        .once('value', function (data) {
            data.forEach(function (d) {
                let subKh = d.val().subKh;
                let subEn = d.val().subEn;
                let subAbr = d.val().subAbr;
                N0++;
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><button class="editBtn" id="${subKh}" value="${subKh}" data-en='${subEn}' data-abr='${subAbr}' data-bs-toggle="modal" data-bs-target="#add_subs">${subKh}</button></td>
                <td class='border-dark'>${subEn}</td>
                <td class='border-dark'>${subAbr}</td>
                `;
                showSubs.innerHTML += t;
                const sleep = async (milliseconds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, milliseconds);
                    });
                    let subValkh = document.getElementById(`${subKh}`);
                    document.getElementById(`${subKh}`).addEventListener('click', () => {
                        let gValkh = subValkh.value;
                        let gValen = subValkh.dataset.en;
                        let gValabr = subValkh.dataset.abr;
                        document.getElementById('subKh').value = gValkh;
                        document.getElementById('subEn').value = gValen;
                        document.getElementById('subAbr').value = gValabr;
                        let btnAdd = document.getElementById('btnAdd');
                        let btnUpdate = document.getElementById('btnUpdate');
                        let btnDelete = document.getElementById('btnDelete');

                        //Button display
                        btnAdd.style.display = 'none';
                        btnUpdate.style.display = 'block';
                        btnDelete.style.display = 'block';

                    })
                    //Update data
                    document.getElementById('btnUpdate').addEventListener('click', () => {
                        let subKh = document.getElementById('subKh').value;
                        let subEn = document.getElementById('subEn').value;
                        let subAbr = document.getElementById('subAbr').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA1').innerHTML = 'បានកែ!';
                        document.getElementById('textA2').innerHTML = 'ព័ត៍មានបានកែត្រឹមត្រូវ។';

                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('subKh').value = '';
                            document.getElementById('subEn').value = '';
                            document.getElementById('subAbr').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/subjects/` + subKh)
                            .update({
                                id: subKh,
                                subKh: subKh,
                                subEn: subEn,
                                subAbr: subAbr,
                            })
                    })
                    //Delete Data
                    document.getElementById('btnDelete').addEventListener('click', () => {
                        let subKh = document.getElementById('subKh').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA1').innerHTML = 'បានលុប!';
                        document.getElementById('textA2').innerHTML = 'ព័ត៍មានបានលុបត្រឹមត្រូវ។';
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('subKh').value = '';
                            document.getElementById('subEn').value = '';
                            document.getElementById('subAbr').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/subjects/` + subKh)
                            .remove();
                    })

                };
                sleep(1000);
                //Button display
                let btnAdd = document.getElementById('btnAdd');
                let btnUpdate = document.getElementById('btnUpdate');
                let btnDelete = document.getElementById('btnDelete');
                document.getElementById('addNew').addEventListener('click', () => {
                    document.getElementById('subKh').value = '';
                    document.getElementById('subEn').value = '';
                    document.getElementById('subAbr').value = '';
                    btnAdd.style.display = 'block';

                    if (document.getElementById('subKh').value == '') {
                        btnUpdate.style.display = 'none';
                        btnDelete.style.display = 'none';
                    }

                })
            })
        })

});

//បង្កើតថ្នាក់ថ្មី
$(document).ready(function () {
    let N0 = '';
    let showClass = document.getElementById('showClasses');
    firebase
        .database()
        .ref(`SalaMOM/tools/class/បឋមសិក្សា`)
        .once('value', function (data) {
            data.forEach(function (d) {
                let clKh = d.val().clKh;
                let clEn = d.val().clEn;
                N0++;
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><button class="editBtn" id="${clKh}" value="${clKh}" data-encl='${clEn}' data-bs-toggle="modal" data-bs-target="#add_class">${clKh}</button></td>
                <td class='border-dark'>${clEn}</td>
                `;
                showClass.innerHTML += t;
                const sleep = async (milliseconds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, milliseconds);
                    });
                    let clValkh = document.getElementById(`${clKh}`);
                    document.getElementById(`${clKh}`).addEventListener('click', () => {
                        let gValkh = clValkh.value;
                        let gValen = clValkh.dataset.encl;
                        document.getElementById('clKh').value = gValkh;
                        document.getElementById('clEn').value = gValen;
                        let btnAdd_class_primary = document.getElementById('btnAdd_class_primary');
                        let btnUpdate_class_primary = document.getElementById('btnUpdate_class_primary');
                        let btnDelete_class_primary = document.getElementById('btnDelete_class_primary');

                        let btnAdd_class_secondary = document.getElementById('btnAdd_class_secondary');
                        let btnUpdate_class_secondary = document.getElementById('btnUpdate_class_secondary');
                        let btnDelete_class_secondary = document.getElementById('btnDelete_class_secondary');

                        let btnAdd_class_highschool = document.getElementById('btnAdd_class_highschool');
                        let btnUpdate_class_highschool = document.getElementById('btnUpdate_class_highschool');
                        let btnDelete_class_highschool = document.getElementById('btnDelete_class_highschool');
                        //Button display
                        btnAdd_class_primary.style.display = 'none';
                        btnUpdate_class_primary.style.display = 'block';
                        btnDelete_class_primary.style.display = 'block';

                        btnAdd_class_secondary.style.display = 'none';
                        btnUpdate_class_secondary.style.display = 'none';
                        btnDelete_class_secondary.style.display = 'none';

                        btnAdd_class_highschool.style.display = 'none';
                        btnUpdate_class_highschool.style.display = 'none';
                        btnDelete_class_highschool.style.display = 'none';

                    })
                    //Update data
                    document.getElementById('btnUpdate_class_primary').addEventListener('click', () => {
                        let clKh = document.getElementById('clKh').value;
                        let clEn = document.getElementById('clEn').value;
                        let d = 'បឋមសិក្សា';
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA3').innerHTML = 'បានកែ!';
                        document.getElementById('textA4').innerHTML = 'ព័ត៍មានបានកែត្រឹមត្រូវ។';

                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('clKh').value = '';
                            document.getElementById('clEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/class/បឋមសិក្សា/` + clKh)
                            .update({
                                id: clKh,
                                clKh: clKh,
                                clEn: clEn,
                                level: d,
                            })
                    })
                    //Delete Data
                    document.getElementById('btnDelete_class_primary').addEventListener('click', () => {
                        let clKh = document.getElementById('clKh').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA5').innerHTML = 'បានលុប!';
                        document.getElementById('textA6').innerHTML = 'ព័ត៍មានបានលុបត្រឹមត្រូវ។';
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('clKh').value = '';
                            document.getElementById('clEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/class/` + clKh)
                            .remove();
                    })
                };
                sleep(1000);
                //Button display
                let btnAdd_class_primary = document.getElementById('btnAdd_class_primary');
                let btnUpdate_class_primary = document.getElementById('btnUpdate_class_primary');
                let btnDelete_class_primary = document.getElementById('btnDelete_class_primary');
                document.getElementById('addNewClass').addEventListener('click', () => {
                    document.getElementById('clKh').value = '';
                    document.getElementById('clEn').value = '';
                    btnAdd_class_primary.style.display = 'block';

                    if (document.getElementById('clKh').value == '') {
                        btnUpdate_class_primary.style.display = 'none';
                        btnDelete_class_primary.style.display = 'none';
                    }

                })
            })
        })
    firebase
        .database()
        .ref(`SalaMOM/tools/class/អនុវិទ្យាល័យ`)
        .once('value', function (data) {
            data.forEach(function (d) {
                let clKh = d.val().clKh;
                let clEn = d.val().clEn;
                N0++;
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><button class="editBtn" id="${clKh}" value="${clKh}" data-encl='${clEn}' data-bs-toggle="modal" data-bs-target="#add_class">${clKh}</button></td>
                <td class='border-dark'>${clEn}</td>
                `;
                showClass.innerHTML += t;
                const sleep = async (milliseconds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, milliseconds);
                    });
                    let clValkh = document.getElementById(`${clKh}`);
                    document.getElementById(`${clKh}`).addEventListener('click', () => {
                        let gValkh = clValkh.value;
                        let gValen = clValkh.dataset.encl;
                        document.getElementById('clKh').value = gValkh;
                        document.getElementById('clEn').value = gValen;
                        let btnAdd_class_secondary = document.getElementById('btnAdd_class_secondary');
                        let btnUpdate_class_secondary = document.getElementById('btnUpdate_class_secondary');
                        let btnDelete_class_secondary = document.getElementById('btnDelete_class_secondary');

                        //Button display
                        btnAdd_class_secondary.style.display = 'none';
                        btnUpdate_class_secondary.style.display = 'block';
                        btnDelete_class_secondary.style.display = 'block';

                        btnAdd_class_primary.style.display = 'none';
                        btnUpdate_class_primary.style.display = 'none';
                        btnDelete_class_primary.style.display = 'none';

                        btnAdd_class_highschool.style.display = 'none';
                        btnUpdate_class_highschool.style.display = 'none';
                        btnDelete_class_highschool.style.display = 'none';

                    })
                    //Update data
                    document.getElementById('btnUpdate_class_secondary').addEventListener('click', () => {
                        let clKh = document.getElementById('clKh').value;
                        let clEn = document.getElementById('clEn').value;
                        let d = 'អនុវិទ្យាល័យ';
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA3').innerHTML = 'បានកែ!';
                        document.getElementById('textA4').innerHTML = 'ព័ត៍មានបានកែត្រឹមត្រូវ។';

                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('clKh').value = '';
                            document.getElementById('clEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/class/អនុវិទ្យាល័យ/` + clKh)
                            .update({
                                id: clKh,
                                clKh: clKh,
                                clEn: clEn,
                                level: d,
                            })
                    })
                    //Delete Data
                    document.getElementById('btnDelete_class_secondary').addEventListener('click', () => {
                        let clKh = document.getElementById('clKh').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA5').innerHTML = 'បានលុប!';
                        document.getElementById('textA6').innerHTML = 'ព័ត៍មានបានលុបត្រឹមត្រូវ។';
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('clKh').value = '';
                            document.getElementById('clEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/class/` + clKh)
                            .remove();
                    })
                };
                sleep(1000);
                //Button display
                let btnAdd_class_secondary = document.getElementById('btnAdd_class_secondary');
                let btnUpdate_class_secondary = document.getElementById('btnUpdate_class_secondary');
                let btnDelete_class_secondary = document.getElementById('btnDelete_class_secondary');
                document.getElementById('addNewClass').addEventListener('click', () => {
                    document.getElementById('clKh').value = '';
                    document.getElementById('clEn').value = '';
                    btnAdd_class_secondary.style.display = 'block';

                    if (document.getElementById('clKh').value == '') {
                        btnUpdate_class_secondary.style.display = 'none';
                        btnDelete_class_secondary.style.display = 'none';
                    }

                })
            })
        })
    firebase
        .database()
        .ref(`SalaMOM/tools/class/វិទ្យាល័យ`)
        .once('value', function (data) {
            data.forEach(function (d) {
                let clKh = d.val().clKh;
                let clEn = d.val().clEn;
                N0++;
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><button class="editBtn" id="${clKh}" value="${clKh}" data-encl='${clEn}' data-bs-toggle="modal" data-bs-target="#add_class">${clKh}</button></td>
                <td class='border-dark'>${clEn}</td>
                `;
                showClass.innerHTML += t;
                const sleep = async (milliseconds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, milliseconds);
                    });
                    let clValkh = document.getElementById(`${clKh}`);
                    document.getElementById(`${clKh}`).addEventListener('click', () => {
                        let gValkh = clValkh.value;
                        let gValen = clValkh.dataset.encl;
                        document.getElementById('clKh').value = gValkh;
                        document.getElementById('clEn').value = gValen;
                        let btnAdd_class_highschool = document.getElementById('btnAdd_class_highschool');
                        let btnUpdate_class_highschool = document.getElementById('btnUpdate_class_highschool');
                        let btnDelete_class_highschool = document.getElementById('btnDelete_class_highschool');

                        //Button display
                        btnAdd_class_highschool.style.display = 'none';
                        btnUpdate_class_highschool.style.display = 'block';
                        btnDelete_class_highschool.style.display = 'block';

                        btnAdd_class_primary.style.display = 'none';
                        btnUpdate_class_primary.style.display = 'none';
                        btnDelete_class_primary.style.display = 'none';

                        btnAdd_class_secondary.style.display = 'none';
                        btnUpdate_class_secondary.style.display = 'none';
                        btnDelete_class_secondary.style.display = 'none';

                    })
                    //Update data
                    document.getElementById('btnUpdate_class_highschool').addEventListener('click', () => {
                        let clKh = document.getElementById('clKh').value;
                        let clEn = document.getElementById('clEn').value;
                        let d = 'វិទ្យាល័យ';
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA3').innerHTML = 'បានកែ!';
                        document.getElementById('textA4').innerHTML = 'ព័ត៍មានបានកែត្រឹមត្រូវ។';

                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('clKh').value = '';
                            document.getElementById('clEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/class/វិទ្យាល័យ/` + clKh)
                            .update({
                                id: clKh,
                                clKh: clKh,
                                clEn: clEn,
                                level: d,
                            })
                    })
                    //Delete Data
                    document.getElementById('btnDelete_class_highschool').addEventListener('click', () => {
                        let clKh = document.getElementById('clKh').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA5').innerHTML = 'បានលុប!';
                        document.getElementById('textA6').innerHTML = 'ព័ត៍មានបានលុបត្រឹមត្រូវ។';
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('clKh').value = '';
                            document.getElementById('clEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/class/` + clKh)
                            .remove();
                    })
                };
                sleep(1000);
                //Button display
                let btnAdd_class_highschool = document.getElementById('btnAdd_class_highschool');
                let btnUpdate_class_highschool = document.getElementById('btnUpdate_class_highschool');
                let btnDelete_class_highschool = document.getElementById('btnDelete_class_highschool');
                document.getElementById('addNewClass').addEventListener('click', () => {
                    document.getElementById('clKh').value = '';
                    document.getElementById('clEn').value = '';
                    btnAdd_class_highschool.style.display = 'block';

                    if (document.getElementById('clKh').value == '') {
                        btnUpdate_class_highschool.style.display = 'none';
                        btnDelete_class_highschool.style.display = 'none';
                    }

                })
            })
        })
})

//បង្កើតឆ្នាំសិក្សាថ្មី
$(document).ready(function () {
    let N0 = '';
    let showYear = document.getElementById('showYear');

    firebase
        .database()
        .ref(`SalaMOM/tools/years`)
        .once('value', function (data) {
            data.forEach(function (d) {
                let yearKh = d.val().yearKh;
                let yearEn = d.val().yearEn;
                N0++;
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><button class="editBtn" id="${yearKh}" value="${yearKh}" data-enyear='${yearEn}' data-bs-toggle="modal" data-bs-target="#add_year">${yearKh}</button></td>
                <td class='border-dark'>${yearEn}</td>
                `;
                showYear.innerHTML += t;
                const sleep = async (milliseconds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, milliseconds);
                    });
                    let clValkh = document.getElementById(`${yearKh}`);
                    document.getElementById(`${yearKh}`).addEventListener('click', () => {
                        let gValkh = clValkh.value;
                        let gValen = clValkh.dataset.enyear;
                        document.getElementById('yearKh').value = gValkh;
                        document.getElementById('yearEn').value = gValen;
                        let btnAdd_year = document.getElementById('btnAdd_year');
                        let btnUpdate_year = document.getElementById('btnUpdate_year');
                        let btnDelete_year = document.getElementById('btnDelete_year');

                        //Button display
                        btnAdd_year.style.display = 'none';
                        btnUpdate_year.style.display = 'block';
                        btnDelete_year.style.display = 'block';

                    })
                    //Update data
                    document.getElementById('btnUpdate_year').addEventListener('click', () => {
                        let yearKh = document.getElementById('yearKh').value;
                        let yearEn = document.getElementById('yearEn').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA5').innerHTML = 'បានកែ!';
                        document.getElementById('textA6').innerHTML = 'ព័ត៍មានបានកែត្រឹមត្រូវ។';

                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('yearKh').value = '';
                            document.getElementById('yearEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/years/` + yearKh)
                            .update({
                                id: yearKh,
                                yearKh: yearKh,
                                yearEn: yearEn,
                            })
                    })
                    //Delete Data
                    document.getElementById('btnDelete_year').addEventListener('click', () => {
                        let yearKh = document.getElementById('yearKh').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA5').innerHTML = 'បានលុប!';
                        document.getElementById('textA6').innerHTML = 'ព័ត៍មានបានលុបត្រឹមត្រូវ។';
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('yearKh').value = '';
                            document.getElementById('yearEn').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/years/` + yearKh)
                            .remove();
                    })

                };
                sleep(1000);
                //Button display
                let btnAdd_year = document.getElementById('btnAdd_year');
                let btnUpdate_year = document.getElementById('btnUpdate_year');
                let btnDelete_year = document.getElementById('btnDelete_year');
                document.getElementById('addNewYear').addEventListener('click', () => {
                    document.getElementById('clKh').value = '';
                    document.getElementById('clEn').value = '';
                    btnAdd_year.style.display = 'block';

                    if (document.getElementById('clKh').value == '') {
                        btnUpdate_year.style.display = 'none';
                        btnDelete_year.style.display = 'none';
                    }

                })
            })
        })
})
//បង្កើតម៉ោងសិក្សាថ្មី
$(document).ready(function () {
    let N0 = '';
    let showTimes = document.getElementById('showTimes');

    firebase
        .database()
        .ref(`SalaMOM/tools/times`)
        .once('value', function (data) {
            data.forEach(function (d) {
                let id = d.val().id;
                let time_setting_start_at = d.val().time_setting_start_at;
                let time_setting_end_at = d.val().time_setting_end_at;
                let time_setting_meridiem = d.val().time_setting_meridiem;
                let time_setting_kind = d.val().time_setting_kind;
                N0++;
                let t = `
                <td class='border-dark text-center'>${N0}</td>
                <td class='border-dark'><button class="editBtn" id="${id}" data-bs-toggle="modal" data-bs-target="#add_time"
                data-start='${time_setting_start_at}'
                data-end='${time_setting_end_at}'
                data-meridiem='${time_setting_meridiem}'
                data-kind='${time_setting_kind}'
                 >${id}</button></td>
                <td class='border-dark'>${time_setting_start_at}</td>
                <td class='border-dark'>${time_setting_end_at}</td>
                <td class='border-dark'>${time_setting_meridiem}</td>
                <td class='border-dark'>${time_setting_kind}</td>
                `;
                showTimes.innerHTML += t;
                const sleep = async (milliseconds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, milliseconds);
                    });
                    let clValkh = document.getElementById(`${id}`);
                    document.getElementById(`${id}`).addEventListener('click', () => {
                        let uID = id;
                        let start = clValkh.dataset.start;
                        let end = clValkh.dataset.end;
                        let meridiem = clValkh.dataset.meridiem;
                        let kind = clValkh.dataset.kind;
                        console.log(uID, start, end, meridiem, kind);
                        document.getElementById('selectTime').value = uID;
                        document.getElementById('time_setting_start_at').value = start;
                        document.getElementById('time_setting_end_at').value = end;
                        document.getElementById('time_setting_meridiem').value = meridiem;
                        document.getElementById('time_setting_kind').value = kind;
                        let btnAdd_time = document.getElementById('btnAdd_time');
                        let btnUpdate_time = document.getElementById('btnUpdate_time');
                        let btnDelete_time = document.getElementById('btnDelete_time');

                        //Button display
                        btnAdd_time.style.display = 'none';
                        btnUpdate_time.style.display = 'block';
                        btnDelete_time.style.display = 'block';

                    })
                    //Update data
                    document.getElementById('btnUpdate_time').addEventListener('click', () => {
                        let selectTime = document.getElementById('selectTime').value;
                        let time_setting_start_at = document.getElementById('time_setting_start_at').value;
                        let time_setting_end_at = document.getElementById('time_setting_end_at').value;
                        let time_setting_meridiem = document.getElementById('time_setting_meridiem').value;
                        let time_setting_kind = document.getElementById('time_setting_kind').value;

                        $(".alert").addClass('notHidden');
                        document.getElementById('textA7').innerHTML = 'បានកែ!';
                        document.getElementById('textA8').innerHTML = 'ព័ត៍មានបានកែត្រឹមត្រូវ។';

                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('selectTime').value = '';
                            document.getElementById('time_setting_start_at').value = '';
                            document.getElementById('time_setting_end_at').value = '';
                            document.getElementById('time_setting_meridiem').value = '';
                            document.getElementById('time_setting_kind').value = '';
                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/times/` + selectTime)
                            .update({
                                id: selectTime,
                                time_setting_start_at: time_setting_start_at,
                                time_setting_end_at: time_setting_end_at,
                                time_setting_meridiem: time_setting_meridiem,
                                time_setting_kind: time_setting_kind,

                            })
                    })
                    //Delete Data
                    document.getElementById('btnDelete_time').addEventListener('click', () => {
                        let selectTime = document.getElementById('selectTime').value;
                        $(".alert").addClass('notHidden');
                        document.getElementById('textA7').innerHTML = 'បានលុប!';
                        document.getElementById('textA8').innerHTML = 'ព័ត៍មានបានលុបត្រឹមត្រូវ។';
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById('selectTime').value = '';
                            document.getElementById('time_setting_start_at').value = '';
                            document.getElementById('time_setting_end_at').value = '';
                            document.getElementById('time_setting_meridiem').value = '';
                            document.getElementById('time_setting_kind').value = '';

                            setTimeout(function () {
                                $(".alert").alert('close');
                                window.location.reload();
                            }, 1000);
                        };
                        sleep(800);

                        firebase
                            .database()
                            .ref(`SalaMOM/tools/times/` + selectTime)
                            .remove();
                    })

                };
                sleep(1000);
                //Button display
                let btnAdd_time = document.getElementById('btnAdd_time');
                let btnUpdate_time = document.getElementById('btnUpdate_time');
                let btnDelete_time = document.getElementById('btnDelete_time');
                document.getElementById('addNewtime').addEventListener('click', () => {
                    document.getElementById('selectTime').value = '';
                    document.getElementById('time_setting_start_at').value = '';
                    document.getElementById('time_setting_end_at').value = '';
                    document.getElementById('time_setting_meridiem').value = '';
                    document.getElementById('time_setting_kind').value = '';

                    btnAdd_time.style.display = 'block';

                    if (document.getElementById('time_setting_start_at').value == '') {
                        btnUpdate_time.style.display = 'none';
                        btnDelete_time.style.display = 'none';
                    }

                })
            })
        })
})

//បញ្ជាក់ខែបញ្ចូលពិន្ទុ
const selectedSubjectsInput2 = document.getElementById("show_add_month");
const subjectList2 = document.getElementById("sle_add_month");
subjectList2.addEventListener("change", (event) => {
    const checkedSubjects = [];
    const checkboxes = subjectList2.querySelectorAll("input[type='checkbox'][id='month-math']");
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedSubjects.push(checkbox.value);
        }
    }
    selectedSubjectsInput2.value = checkedSubjects.join(" "); // Join selected values with comma
});

$("#sle_status").change(function () {
    var d = $(this).val();
    localStorage.setItem("sle_status", d);
});
$("#sle_status").val(localStorage.getItem('sle_status'));

$(document).ready(function () {
    var N0 = '';
    var table = document.getElementById('allow_month');
    $("#push_month").click(function () {
        var status = $("#sle_status").val();
        var show_add_month = $("#show_add_month").val();
        $(document).ready(function () {
            firebase
                .database()
                .ref(`/SalaMOM/tools/permitted/` + show_add_month)
                .set({
                    id: show_add_month,
                    show_add_month: show_add_month,
                    status: status,
                })
            window.location.reload();
        })
    });
    $(document).ready(function () {
        let color_status = '';

        firebase
            .database()
            .ref(`/SalaMOM/tools/permitted/`)
            .once('value', function (data) {
                data.forEach(function (d) {
                    var id = d.val().id;
                    var show_add_month = d.val().show_add_month;
                    var status = d.val().status;
                    var nospace = id.replace(/\s/g, "");
                    if (status == 'active') {
                        color_status = `<span style="color: white;background-color:green;padding:5px;text-transform: uppercase;">${status}</span>`;
                    } else {
                        
                        color_status = `<span style="color: white;background-color:orange;padding:5px;text-transform: uppercase;">${status}</span>`;
                    }
                    N0++;
                    let t = `
                            <td class="text-center border-dark">${N0}</td>
                            <td class="text-center border-dark"
                            id="${nospace}"
                            data-month="${show_add_month}"
                            data-status="${status}"
                            >${id}</td>
                            <td class="text-center border-dark">${color_status}</td>
                            <td class="text-center border-dark" style="color:red;" id="${nospace}de"><i class="mdi mdi-delete"></i></td>
                            `;
                    table.innerHTML += t;
                    
                    setTimeout(function () {
                        var nospace = id.replace(/\s/g, "");
                        var data = document.getElementById(`${nospace}`);
                        var data_dele = document.getElementById(`${nospace}de`);
                        data.addEventListener('click', () => {
                            var id = data.id;
                            var show_add_month = data.dataset.month;
                            var status = data.dataset.status;
                            $("#sle_status").val(status);
                            $("#show_add_month").val(show_add_month);
                            
                        })
                        data_dele.addEventListener('click', () => {
                            firebase
                                .database()
                                .ref(`/SalaMOM/tools/permitted/` + id)
                                .remove();
                            
                            window.location.reload();
                        })
                    }, 1000)
                })
            })
    })

});
