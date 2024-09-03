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


const pushToArrayButton = document.getElementById("btnAdd");
document.getElementById('sleGrade').addEventListener('change', () => {
    let q = document.getElementById('sleGrade').value;
    localStorage.setItem('gUser', q);
    window.location.reload();
})
document.getElementById('sleClass').addEventListener('change', () => {
    let q = document.getElementById('sleClass').value;
    localStorage.setItem('cUser', q);
    window.location.reload();
})
let dbG = localStorage.getItem('gUser');
let dbC = localStorage.getItem('cUser');
document.getElementById('showG').textContent = dbG;
document.getElementById('showS').textContent = dbC;

const [subject] = dbG.substring(2, 10).split(" ");
const [classId] = dbG.substring(0, 2).split(" ");

const convertG = classId;
const convertSub = subject;
let sleClass = document.getElementById('sleClass');
const option = document.createElement('option');
option.value = convertSub; // Assuming you want the first element of each object as the value
option.text = convertSub; // Assuming you want the first element of each object as the text
sleClass.appendChild(option);

function pushSelectedToItemsArray() {
    var fullname = document.getElementById('nameU').value;
    var name = document.getElementById('userName').value;
    var password = document.getElementById('userPassword').value;
    var sex = document.getElementById('userSex').value;
    var dataSub = document.getElementById('getSubjects').value;
    var dataClass = document.getElementById('getClass').value;
    firebase
        .database()
        .ref(`users/userData/` + fullname)
        .set({
            id: fullname,
            fullname: fullname,
            username: name,
            password: password,
            sex: sex,
            subjects: dataSub,
            class: dataClass,
        });

}

pushToArrayButton.addEventListener("click", pushSelectedToItemsArray);
let n0 = 0;
function sotre() {
    let tbody = document.getElementById('showUser');
    let sleGrade = document.getElementById('sleGrade');
    const subjects = [{ 'subject': 'Math' }, { 'subject': 'English' }, { 'subject': 'Literature' }];
    const allowedSubjects = ['Math', 'English', 'PE'];

    const allowedRows = subjects.filter(subject => allowedSubjects.includes(subject.subject));
    const tbody2 = document.getElementById('testBody');

    //Show users
    firebase.database().ref(`users/userData`)
        .once('value', function (uu) {
            uu.forEach(function (pp) {
                var id = pp.val().id;
                var fullname = pp.val().fullname;
                var username = pp.val().username;
                var sex = pp.val().sex;
                var password = pp.val().password;
                var sub = pp.val().subjects;
                var cla = pp.val().class;
                n0++;
                let m = `
                <td class="border-dark">${n0}</td>
                <td class="border-dark">${fullname}</td>
                <td class="border-dark">${sex}</td>
                <td class="border-dark">${username}</td>
                <td class="border-dark">${password}</td>
                <td class="border-dark">${sub}</td>
                <td class="border-dark">${cla}</td>
                
                `
                tbody.innerHTML += m;
                //Convert String classes to array
                // const stringArray = cla.match(/(\d+[A-Z])/g);
                const stringArray = cla.split(" ").filter(item => item);

                //Create Options
                //Array Class
                for (const item of stringArray) {
                    const option = document.createElement('option');
                    let kh = item;
                    if (kh == '5A') { kh = '៥ក' };
                    if (kh == '5B') { kh = '៥ខ' };
                    if (kh == '6A') { kh = '៦ក' };
                    option.value = item; // Assuming you want the first element of each object as the value
                    option.text = kh; // Assuming you want the first element of each object as the text
                    sleGrade.appendChild(option);
                }

                //Convert String subjects to array
                // const subShow = sub.split(" ");
                // for (const item of subShow) {
                //     const option = document.createElement('option');
                //     option.value = item; // Assuming you want the first element of each object as the value
                //     option.text = item; // Assuming you want the first element of each object as the text
                //     sleClass.appendChild(option);
                // }

            })
        })

    ///Show Stdents Data and input Data
    const trT = document.getElementById('tableTEst');
    const tbodyT = document.getElementById('testBody');
    firebase
        .database()
        .ref(`users/G5/2023-2024/` + `${convertG}`)
        .once('value', function (data) {
            data.forEach(function (d) {
                var name = d.val().fullname;
                var sMath = d.val().sMath;
                var sEn = d.val().sEn;
                var sLit = d.val().sLit;
                var sPE = d.val().sPE;

                if (!sMath) { sMath = '0' };
                if (!sEn) { sEn = '0' };
                if (!sPE) { sPE = '0' };
                if (!sLit) { sLit = '0' };
                let add = '';
                let tt = `
                    <th class="table-bordered border-dark text-center">Fullname</th>
                `;
                let t1 = `
                    <th class="table-bordered border-dark text-center">${dbC}</th>
                `
                trT.innerHTML = tt + t1;

                let k = `
                    <td class="border-dark text-start">${name}</td>
                    `;
                if (dbC == 'English') {
                    add = `
                        <td class="border-dark text-center" contenteditable id="${name}en" onclick="selectText(this)">${sEn}</td>
                    `;
                    const sleep = async (milliseconds) => {
                        await new Promise((resolve) => {
                            return setTimeout(resolve, milliseconds);
                        });
                        document.getElementById(`${name}en`).addEventListener('input', () => {
                            var d = document.getElementById(`${name}en`).innerHTML;
                            firebase
                                .database()
                                .ref(`users/G5/2023-2024/` + `${dbG}/` + name)
                                .update({
                                    sEn: d,
                                });
                        })
                    };
                    sleep(1000);
                }
                tbodyT.innerHTML += k + add;

                const trTspc = document.getElementById('tableSpc');
                const tbodyTspc = document.getElementById('testBodySpc');

                //Special Class
                if (dbG == '6APE') {
                    trT.classList.add('hidden');
                    tbodyT.classList.add('hidden');
                    if (convertSub == dbC) {
                        trT.classList.add('hidden');
                        tbodyT.classList.add('hidden');
                        let tt = `
                        <th class="table-bordered border-dark text-center">Fullname</th>
                    `;
                        let t1 = `
                        <th class="table-bordered border-dark text-center">${dbC}</th>
                    `
                        trTspc.innerHTML = tt + t1;
                        let k = `
                        <td class="border-dark text-start">${name}</td>
                        `;
                        add = `
                            <td class="border-dark text-center" contenteditable id="${name}pe" onclick="selectText(this)">${sPE}</td>
                        `;
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById(`${name}pe`).addEventListener('input', () => {
                                var d = document.getElementById(`${name}pe`).innerHTML;
                                firebase
                                    .database()
                                    .ref(`users/G5/2023-2024/` + `${convertG}/` + name)
                                    .update({
                                        sPE: d,
                                    });
                            })
                        };
                        sleep(1000);
                        tbodyTspc.innerHTML += k + add;
                    }

                }
                if (dbG == '5APE') {
                    trT.classList.add('hidden');
                    tbodyT.classList.add('hidden');
                    if (convertSub == dbC) {
                        trT.classList.add('hidden');
                        tbodyT.classList.add('hidden');
                        let tt = `
                        <th class="table-bordered border-dark text-center">Fullname</th>
                    `;
                        let t1 = `
                        <th class="table-bordered border-dark text-center">${dbC}</th>
                    `
                        trTspc.innerHTML = tt + t1;
                        let k = `
                        <td class="border-dark text-start">${name}</td>
                        `;
                        add = `
                            <td class="border-dark text-center" contenteditable id="${name}pe" onclick="selectText(this)">${sPE}</td>
                        `;
                        const sleep = async (milliseconds) => {
                            await new Promise((resolve) => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById(`${name}pe`).addEventListener('input', () => {
                                var d = document.getElementById(`${name}pe`).innerHTML;
                                firebase
                                    .database()
                                    .ref(`users/G5/2023-2024/` + `${convertG}/` + name)
                                    .update({
                                        sPE: d,
                                    });
                            })
                        };
                        sleep(1000);
                        tbodyTspc.innerHTML += k + add;
                    }

                }

            })
        })

}
sotre();

// This function gets the values of the checked checkboxes and shows them in an input element
function showValueSub() {
    // Get all the checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id="checkB"]');
    // Initialize an empty array to store the values
    var values = [];
    // Loop through the checkboxes
    for (var i = 0; i < checkboxes.length; i++) {
        // If the checkbox is checked, push its value to the array
        if (checkboxes[i].checked) {
            values.push(checkboxes[i].value);
        }
    }
    // Get the input element
    var input = document.getElementById("getSubjects");
    // Set the value of the input to the joined array
    input.value = values.join(" ");
}
function showValueClass() {
    // Get all the checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id="checkC"]');
    // Initialize an empty array to store the values
    var values = [];
    // Loop through the checkboxes
    for (var i = 0; i < checkboxes.length; i++) {
        // If the checkbox is checked, push its value to the array
        if (checkboxes[i].checked) {
            values.push(checkboxes[i].value);
        }
    }
    // Get the input element
    var input = document.getElementById("getClass");
    // Set the value of the input to the joined array
    input.value = values.join(" ");
}
//select textContent auto in the <td>
function selectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
//Split string to get Subject and Class
// const originalString = "6APEuyr";

// const [subject] = originalString.substring(2,10).split(" ");
// const [classId] = originalString.substring(0,2).split(" ");

// // console.log(classId); // Output: 6A
// // console.log(subject); // Output: PE