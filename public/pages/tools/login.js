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

$(document).ready(function () {
    let username = document.getElementById('login_user');
    let userpassword = document.getElementById('login_password');
    firebase
        .database()
        .ref(`SalaMOM/users/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().user_username;
                var user_subs = d.val().user_subs;
                var password = d.val().user_password;
                var year = d.val().user_teacher_year;
                document.getElementById('btnLogin').addEventListener('click', () => {
                    if (username.value == id) {
                        if (userpassword.value == password) {
                            localStorage.setItem('setName', id);
                            localStorage.setItem('setSubs', user_subs);
                            localStorage.setItem('setYear', year);
                            setTimeout(function () {
                                window.location.replace('../tools/uer-input-score.html')
                            },1000)
                        }
                    }
                })
            })
        })
})