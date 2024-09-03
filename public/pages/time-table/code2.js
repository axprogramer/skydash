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

