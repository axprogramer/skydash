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
    // let btn_login = $("#btnLogin");
    let username = $("#login_user");
    let userpassword = $("#login_password");
    let alert_wrong = $("#alert_wrong");
    let user = localStorage.getItem('setName')
    let userRole = localStorage.getItem('user_role')

    const usernameInput = document.getElementById('login_user');
    const passwordInput2 = document.getElementById('login_password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const form = document.querySelector('form');
    const btn_login = document.getElementById('btnLogin');
    console.log(userRole);
    const passwordInput = document.querySelector('#login_password');
    const passwordIcon = document.querySelector(".password-icon");
    if (user) {
        if (userRole === 'is_teacher') {
            window.location.href = './pages/tools/uer-input-score.html';
        } else {
            window.location.href = 'admin.html';    
        }
    }
    passwordIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordIcon.classList.remove("fa-eye-slash");
            passwordIcon.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            passwordIcon.classList.remove("fa-eye");
            passwordIcon.classList.add("fa-eye-slash");
        }
    });

    firebase
        .database()
        .ref(`SalaMOM/users/`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().user_username;
                var user_subs = d.val().user_subs;
                var user_url = d.val().user_url;
                var password = d.val().user_password;
                var year = d.val().user_teacher_year;
                var user_role = d.val().user_role;
                const handleLogin = (event) => {
                    event.preventDefault();
                    const username_re = usernameInput.value;
                    const password_re = passwordInput2.value;
                    const isRemembered = rememberMeCheckbox.checked;

                    if (isRemembered) {
                        localStorage.setItem('username_remember', username_re);
                        localStorage.setItem('username_password', password_re);
                    } else {
                        localStorage.removeItem('username_remember');
                        localStorage.removeItem('username_password');
                    }


                    if (username.val() == id) {

                        if (userpassword.val() == password) {
                            Swal.fire({
                                text: "សូមមេត្តារង់ចាំបន្តិច!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 3500,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading();
                                },
                            });
                            localStorage.removeItem('setName');
                            localStorage.removeItem('setSubs');
                            localStorage.removeItem('setYear');
                            localStorage.removeItem('user_role');
                            localStorage.removeItem('user_url');


                            setTimeout(function () {
                                localStorage.setItem('setName', id);
                                localStorage.setItem('setSubs', user_subs);
                                localStorage.setItem('setYear', year);
                                localStorage.setItem('user_role', user_role);
                                localStorage.setItem('user_url', user_url);

                            }, 1000)
                            setTimeout(function () {
                                if (user_role == 'is_teacher') {
                                    window.location.replace('./pages/tools/uer-input-score.html')

                                }
                                if (['admin'].includes(user_role)) {
                                    window.location.replace('./admin.html')

                                }
                                if (['is_branch_assistant', 'is_branch', 'is_accountant', 'receptionist'].includes(user_role)) {
                                    window.location.replace('./general.html')

                                }
                            }, 3700)
                        } else {
                            alert_wrong.css({
                                display: "block",
                            })
                            setTimeout(function () {
                                alert_wrong.css('display', 'none');
                            }, 2500)
                            alert_wrong.text('ព័ត៍មានដែលអ្នកបានបញ្ចូលមិនត្រឹមត្រូវនោះទេ!⚠️');
                        }
                    } else {
                        alert_wrong.css({
                            display: "block",
                        })
                        alert_wrong.text('ព័ត៍មានដែលអ្នកបានបញ្ចូលមិនត្រឹមត្រូវនោះទេ!⚠️');
                        setTimeout(function () {
                            alert_wrong.css('display', 'none');
                        }, 2500)
                    }


                }
                btn_login.addEventListener('click', handleLogin)
                form.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') { // Check if Enter key is pressed
                        handleLogin(event); // Call the login function
                    }
                });
            })
        })
})

// Pre-fill username if stored in local storage
const storedUsername = localStorage.getItem('username_remember');
const storedPassword = localStorage.getItem('username_password');
if (storedUsername) {
    document.getElementById('login_user').value = storedUsername;
    document.getElementById('login_password').value = storedPassword;
    document.getElementById('rememberMe').checked = true;
}
