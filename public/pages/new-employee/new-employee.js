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

///Set Selete subjects
const selectedSubjectsInput = document.getElementById("selectedSubjects");
const subjectList = document.getElementById("subjectList");
subjectList.addEventListener("change", (event) => {
    const checkedSubjects = [];
    const checkboxes = subjectList.querySelectorAll("input[type='checkbox']");
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedSubjects.push(checkbox.value);
        }
    }
    selectedSubjectsInput.value = checkedSubjects.join(" "); // Join selected values with comma
});

const selectedSubjectsInput2 = document.getElementById("selectedSubjects2");
const subjectList2 = document.getElementById("subjectList2");
subjectList2.addEventListener("change", (event) => {
    const checkedSubjects = [];
    const checkboxes = subjectList2.querySelectorAll("input[type='checkbox']");
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedSubjects.push(checkbox.value);
        }
    }
    selectedSubjectsInput2.value = checkedSubjects.join(" "); // Join selected values with comma
});
const selectedSubjectsInput3 = document.getElementById("selectedSubjects3");
const subjectList3 = document.getElementById("subjectList3");
subjectList3.addEventListener("change", (event) => {
    const checkedSubjects = [];
    const checkboxes = subjectList3.querySelectorAll("input[type='checkbox']");
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedSubjects.push(checkbox.value);
        }
    }
    selectedSubjectsInput3.value = checkedSubjects.join(" "); // Join selected values with comma
});


// ///Upload Signature
// var files = [];
// var reader = new FileReader();
// var nameBox = document.getElementById('nameBox');
// var myimg = document.getElementById('uploadedImage');
// var SelBtn = document.getElementById('seleImg');
// var extlab = document.getElementById('extlab');
// var proglab = document.getElementById('showPercent');
// var UpBtn = document.getElementById('uploadBtn');
// var showURL = document.getElementById('showURL');
// // var showCheck = document.getElementById('showCheck');

// var input = document.createElement('input');
// input.type = 'file';

// input.onchange = e => {
//     files = e.target.files;

//     var extention = GetFileExt(files[0]);
//     var name = GetFileName(files[0]);
//     nameBox.value = name;
//     extlab.innerHTML = extention;
//     reader.readAsDataURL(files[0]);
//     UploadProcess();
// }
// reader.onload = function () {
//     myimg.src = reader.result;
// }
// SelBtn.onclick = function () {
//     input.click();
// }
// function GetFileExt(file) {
//     var temp = file.name.split('.');
//     var ext = temp.slice((temp.lenth - 1), (temp.lenth));
//     return '.' + ext[1];
// }
// function GetFileName(file) {
//     var temp = file.name.split('.');
//     var fname = temp.slice(0, -1).join('.');
//     return fname;
// }
// async function UploadProcess() {
//     var ImgToUpload = files[0];
//     var ImgName = nameBox.value + extlab.innerHTML;
//     const metaData = {
//         contenType: ImgToUpload.type
//     }
//     const storage = firebase.storage().ref();
//     // const stroageRef = sRef(storage, 'StdImages/' + `${dbYear}/` + `${dbGrade}/` + ImgName);
//     // const UploadTask = uploadBytesResumable(stroageRef, ImgToUpload, metaData);
//     var UploadTask = storage.child('/SalaMOM/signatures/' + ImgName).put(ImgToUpload);

//     UploadTask.on('state-changed', (snapshot) => {
//         var progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         progess = parseFloat(progess).toFixed(0);
//         proglab.innerHTML = "Upload: " + progess + " %";
//     },
//         (error) => {
//             alert("error: image not uploaded!");
//         },
//         () => {
//             UploadTask.snapshot.ref.getDownloadURL().then((getDownloadURL) => {
//                 showURL.value = getDownloadURL;
//                 // proglab.innerHTML = `Upload completed!<img style="width: 75px;" src="./img/completedPer.gif">`;
//                 // setTimeout(function(){
//                 //     proglab.innerHTML = '';
//                 // },5000)
//             });
//         }
//     );
// }
// UpBtn.onclick = UploadProcess;

// ///Upload Staff's Pictures
// var files2 = [];
// var reader2 = new FileReader();
// var nameBox2 = document.getElementById('nameBox2');
// var myimg2 = document.getElementById('uploadedImage2');
// var SelBtn2 = document.getElementById('seleImg2');
// var extlab2 = document.getElementById('extlab2');
// var proglab2 = document.getElementById('showPercent2');
// var UpBtn2 = document.getElementById('uploadBtn2');
// var showURL2 = document.getElementById('showURL2');

// var input2 = document.createElement('input');
// input2.type = 'file';

// input2.onchange = e => {
//     files = e.target.files;

//     var extention2 = GetFileExt2(files[0]);
//     var name2 = GetFileName2(files[0]);
//     nameBox2.value = name2;
//     extlab2.innerHTML = extention2;
//     reader2.readAsDataURL(files[0]);
//     UploadProcess2();
// }
// reader2.onload = function () {
//     myimg2.src = reader2.result;
// }
// SelBtn2.onclick = function () {
//     input2.click();
// }
// function GetFileExt2(file) {
//     var temp = file.name.split('.');
//     var ext = temp.slice((temp.lenth - 1), (temp.lenth));
//     return '.' + ext[1];
// }
// function GetFileName2(file) {
//     var temp = file.name.split('.');
//     var fname = temp.slice(0, -1).join('.');
//     return fname;
// }
// async function UploadProcess2() {
//     var ImgToUpload = files[0];
//     var ImgName = nameBox2.value + extlab2.innerHTML;
//     const metaData = {
//         contenType: ImgToUpload.type
//     }
//     const storage = firebase.storage().ref();
//     // const stroageRef = sRef(storage, 'StdImages/' + `${dbYear}/` + `${dbGrade}/` + ImgName);
//     // const UploadTask = uploadBytesResumable(stroageRef, ImgToUpload, metaData);
//     var UploadTask = storage.child('/SalaMOM/Staffs/' + ImgName).put(ImgToUpload);

//     UploadTask.on('state-changed', (snapshot) => {
//         var progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         progess = parseFloat(progess).toFixed(0);
//         proglab2.innerHTML = "Upload: " + progess + " %";
//     },
//         (error) => {
//             alert("error: image not uploaded!");
//         },
//         () => {
//             UploadTask.snapshot.ref.getDownloadURL().then((getDownloadURL) => {
//                 showURL2.value = getDownloadURL;
//                 // proglab.innerHTML = `Upload completed!<img style="width: 75px;" src="./img/completedPer.gif">`;
//                 // setTimeout(function(){
//                 //     proglab.innerHTML = '';
//                 // },5000)
//             });
//         }
//     );
// }
// UpBtn.onclick = UploadProcess;

//Save staffs' information to Firebase

function storeData() {
    //Get all values from the form
    var id = document.getElementById('fill1');//អត្តលេខ
    var position = document.getElementById('fill2');//ភារកិច្ច
    var fullname = document.getElementById('fill3');//គោត្តនាមនិងនាម
    var name_latin = document.getElementById('fill4');//អក្សរឡាតាំង
    var gender = document.getElementById('fill5');//ភេទ
    var date_of_birth = document.getElementById('fill6');//ថ្ងៃខែឆ្នាំកំណើត
    var phone_number = document.getElementById('fill7');//ទូរស័ព្ឌ
    var identity_card_number = document.getElementById('fill8');//លេខអត្តសញ្ញាណប័ណ្ណ
    var get_url = document.getElementById('showURL2');//កែតម្រូវហត្ថលេខា
    var signature_img = document.getElementById('uploadedImage');//កែតម្រូវហត្ថលេខារូបភាព
    var get_url_pic = document.getElementById('showURL');//ជ្រើសរើសរូបថត
    var staffs_img = document.getElementById('uploadedImage2');//ជ្រើសរើសរូបថតpic
    var province = document.getElementById('fill11');//ខេត្ត/ក្រុង
    var district = document.getElementById('fill12');//ស្រុក/ខណ្ឌ
    var commune = document.getElementById('fill13');//ឃុំ/សង្កាត់
    var village = document.getElementById('fill14');//ភូមិ
    var place_of_birth = document.getElementById('fill15');//ឬវាយបញ្ជូលទីកន្លែងកំណើត
    var current_province = document.getElementById('fill16');//ខេត្ត/ក្រុងទីលំនៅ
    var current_district = document.getElementById('fill17');//ស្រុក/ខណ្ឌទីលំនៅ
    var current_commune = document.getElementById('fill18');//ឃុំ/សង្កាត់ទីលំនៅ
    var current_village = document.getElementById('fill19');//ភូមិទីលំនៅ
    var full_address = document.getElementById('fill20');//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
    var staff_card = document.getElementById('fill21');//លេខកាត
    var start_working_date = document.getElementById('fill22');//ថ្ងៃខែចូលបម្រើការងារ
    var pedagogy_certificate = document.getElementById('fill23');//សញ្ញាបត្រគរុកោសល្យ
    var degree_level = document.getElementById('fill24');//កម្រិតវប្បធម៌
    var public_entity_name = document.getElementById('fill25');//អង្គភាពរដ្ឋ
    var general_kindergaten = document.getElementById('selectedSubjects');//មត្តេយ្យសិក្សា
    var general_primary = document.getElementById('selectedSubjects2');//បឋមសិក្សា
    var general_secondary = document.getElementById('selectedSubjects3');//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
    var father_name = document.getElementById('fill29');//ឈ្មោះឪពុក
    var father_occupation = document.getElementById('fill30');//មុខរបរ
    var mother_name = document.getElementById('fill31');//ឈ្មោះម្តាយ
    var mother_occupation = document.getElementById('fill32');//មុខរបរ
    var spouse_name = document.getElementById('fill33');//ឈ្មោះប្តី/ប្រព្ធ
    var spouse_occupation = document.getElementById('fill34');//មុខរបរ
    var user_short_name = document.getElementById('fill35');//មុខរបរ
    firebase
        .database()
        .ref(`/SalaMOM/staffs/` + fullname.value)
        .set({
            id: fullname.value,
            fullname: fullname.value,
            user_short_name: user_short_name.value,
            user_id: id.value,
            position: position.value,
            name_latin: name_latin.value,
            gender: gender.value,
            date_of_birth: date_of_birth.value,
            phone_number: phone_number.value,
            identity_card_number: identity_card_number.value,
            get_url: get_url.value,
            get_url_pic: get_url_pic.value,
            province: province.value,
            district: district.value,
            commune: commune.value,
            village: village.value,
            place_of_birth: place_of_birth.value,
            current_province: current_province.value,
            current_district: current_district.value,
            current_commune: current_commune.value,
            current_village: current_village.value,
            full_address: full_address.value,
            staff_card: staff_card.value,
            start_working_date: start_working_date.value,
            pedagogy_certificate: pedagogy_certificate.value,
            degree_level: degree_level.value,
            public_entity_name: public_entity_name.value,
            general_kindergaten: general_kindergaten.value,
            general_primary: general_primary.value,
            general_secondary: general_secondary.value,
            father_name: father_name.value,
            father_occupation: father_occupation.value,
            mother_name: mother_name.value,
            mother_occupation: mother_occupation.value,
            spouse_name: spouse_name.value,
            spouse_occupation: spouse_occupation.value,
        })
            Swal.fire({
                text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
    setTimeout(function () {
        document.getElementById('fill1').value = '';//អត្តលេខ
        document.getElementById('fill2').value = '';//ភារកិច្ច
        document.getElementById('fill3').value = '';//គោត្តនាមនិងនាម
        document.getElementById('fill4').value = '';//អក្សរឡាតាំង
        document.getElementById('fill5').value = '';//ភេទ
        document.getElementById('fill6').value = '';//ថ្ងៃខែឆ្នាំកំណើត
        document.getElementById('fill7').value = '';//ទូរស័ព្ឌ
        document.getElementById('fill8').value = '';//លេខអត្តសញ្ញាណប័ណ្ណ
        document.getElementById('showURL2').value = '';//កែតម្រូវហត្ថលេខា
        document.getElementById('uploadedImage').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//កែតម្រូវហត្ថលេខារូបភាព
        document.getElementById('showURL').value = '';//ជ្រើសរើសរូបថត
        document.getElementById('uploadedImage2').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//ជ្រើសរើសរូបថតpic
        document.getElementById('fill11').value = '';//ខេត្ត/ក្រុង
        document.getElementById('fill12').value = '';//ស្រុក/ខណ្ឌ
        document.getElementById('fill13').value = '';//ឃុំ/សង្កាត់
        document.getElementById('fill14').value = '';//ភូមិ
        document.getElementById('fill15').value = '';//ឬវាយបញ្ជូលទីកន្លែងកំណើត
        document.getElementById('fill16').value = '';//ខេត្ត/ក្រុងទីលំនៅ
        document.getElementById('fill17').value = '';//ស្រុក/ខណ្ឌទីលំនៅ
        document.getElementById('fill18').value = '';//ឃុំ/សង្កាត់ទីលំនៅ
        document.getElementById('fill19').value = '';//ភូមិទីលំនៅ
        document.getElementById('fill20').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
        document.getElementById('fill21').value = '';//លេខកាត
        document.getElementById('fill22').value = '';//ថ្ងៃខែចូលបម្រើការងារ
        document.getElementById('fill23').value = '';//សញ្ញាបត្រគរុកោសល្យ
        document.getElementById('fill24').value = '';//កម្រិតវប្បធម៌
        document.getElementById('fill25').value = '';//អង្គភាពរដ្ឋ
        document.getElementById('selectedSubjects').value = '';//មត្តេយ្យសិក្សា
        document.getElementById('selectedSubjects2').value = '';//បឋមសិក្សា
        document.getElementById('selectedSubjects3').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
        document.getElementById('fill29').value = '';//ឈ្មោះឪពុក
        document.getElementById('fill30').value = '';//មុខរបរ
        document.getElementById('fill31').value = '';//ឈ្មោះម្តាយ
        document.getElementById('fill32').value = '';//មុខរបរ
        document.getElementById('fill33').value = '';//ឈ្មោះប្តី/ប្រព្ធ
        document.getElementById('fill34').value = '';//មុខរបរ
        document.getElementById('fill35').value = '';//មុខរបរ
    },1500)
}

document.getElementById('btnAdd').addEventListener('click', storeData);

document.getElementById('addNew').addEventListener('click', () => {
    document.getElementById('btnUpdate').style.display = 'none';
    document.getElementById('btnDelete').style.display = 'none';
    document.getElementById('btnAdd').style.display = 'block';

    document.getElementById('fill1').value = '';//អត្តលេខ
    document.getElementById('fill2').value = '';//ភារកិច្ច
    document.getElementById('fill3').value = '';//គោត្តនាមនិងនាម
    document.getElementById('fill4').value = '';//អក្សរឡាតាំង
    document.getElementById('fill5').value = '';//ភេទ
    document.getElementById('fill6').value = '';//ថ្ងៃខែឆ្នាំកំណើត
    document.getElementById('fill7').value = '';//ទូរស័ព្ឌ
    document.getElementById('fill8').value = '';//លេខអត្តសញ្ញាណប័ណ្ណ
    document.getElementById('showURL2').value = '';//កែតម្រូវហត្ថលេខា
    document.getElementById('uploadedImage').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//កែតម្រូវហត្ថលេខារូបភាព
    document.getElementById('showURL').value = '';//ជ្រើសរើសរូបថត
    document.getElementById('uploadedImage2').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//ជ្រើសរើសរូបថតpic
    document.getElementById('fill11').value = '';//ខេត្ត/ក្រុង
    document.getElementById('fill12').value = '';//ស្រុក/ខណ្ឌ
    document.getElementById('fill13').value = '';//ឃុំ/សង្កាត់
    document.getElementById('fill14').value = '';//ភូមិ
    document.getElementById('fill15').value = '';//ឬវាយបញ្ជូលទីកន្លែងកំណើត
    document.getElementById('fill16').value = '';//ខេត្ត/ក្រុងទីលំនៅ
    document.getElementById('fill17').value = '';//ស្រុក/ខណ្ឌទីលំនៅ
    document.getElementById('fill18').value = '';//ឃុំ/សង្កាត់ទីលំនៅ
    document.getElementById('fill19').value = '';//ភូមិទីលំនៅ
    document.getElementById('fill20').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
    document.getElementById('fill21').value = '';//លេខកាត
    document.getElementById('fill22').value = '';//ថ្ងៃខែចូលបម្រើការងារ
    document.getElementById('fill23').value = '';//សញ្ញាបត្រគរុកោសល្យ
    document.getElementById('fill24').value = '';//កម្រិតវប្បធម៌
    document.getElementById('fill25').value = '';//អង្គភាពរដ្ឋ
    document.getElementById('selectedSubjects').value = '';//មត្តេយ្យសិក្សា
    document.getElementById('selectedSubjects2').value = '';//បឋមសិក្សា
    document.getElementById('selectedSubjects3').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
    document.getElementById('fill29').value = '';//ឈ្មោះឪពុក
    document.getElementById('fill30').value = '';//មុខរបរ
    document.getElementById('fill31').value = '';//ឈ្មោះម្តាយ
    document.getElementById('fill32').value = '';//មុខរបរ
    document.getElementById('fill33').value = '';//ឈ្មោះប្តី/ប្រព្ធ
    document.getElementById('fill34').value = '';//មុខរបរ
    document.getElementById('fill35').value = '';//មុខរបរ

})
$(document).ready(function () {
    var table_show = document.getElementById('showUserdata');
    var N0 = '';
    firebase
        .database()
        .ref(`SalaMOM/staffs/`)
        .once('value', function (d) {
            d.forEach(function (data) {
                var id = data.val().id;
                var fullname = data.val().fullname;
                var user_short_name = data.val().user_short_name;
                var user_id = data.val().user_id;
                var position = data.val().position;
                var name_latin = data.val().name_latin;
                var gender = data.val().gender;
                var date_of_birth = data.val().date_of_birth;
                var phone_number = data.val().phone_number;
                var identity_card_number = data.val().identity_card_number;
                var get_url = data.val().get_url;
                var get_url_pic = data.val().get_url_pic;
                var province = data.val().province;
                var district = data.val().district;
                var commune = data.val().commune;
                var village = data.val().village;
                var place_of_birth = data.val().place_of_birth;
                var current_province = data.val().current_province;
                var current_district = data.val().current_district;
                var current_commune = data.val().current_commune;
                var current_village = data.val().current_village;
                var full_address = data.val().full_address;
                var staff_card = data.val().staff_card;
                var start_working_date = data.val().start_working_date;
                var pedagogy_certificate = data.val().pedagogy_certificate;
                var degree_level = data.val().degree_level;
                var public_entity_name = data.val().public_entity_name;
                var general_kindergaten = data.val().general_kindergaten;
                var general_primary = data.val().general_primary;
                var general_secondary = data.val().general_secondary;
                var father_name = data.val().father_name;
                var father_occupation = data.val().father_occupation;
                var mother_name = data.val().mother_name;
                var mother_occupation = data.val().mother_occupation;
                var spouse_name = data.val().spouse_name;
                var spouse_occupation = data.val().spouse_occupation;
                const nameWithoutSpace = fullname.replace(/\s/g, "");
                if (!get_url) {
                    get_url = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
                }
                if (!get_url_pic) {
                    get_url_pic = 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png';
                }
                
                N0++;
                let t = `
                    <td class='border-dark text-center'>${N0}</td>
                    <td class='border-dark text-start'>
                    <button class="editBtn" data-bs-toggle="modal" data-bs-target="#add_staffs"
                        data-id="${id}"
                        data-fullname="${fullname}"
                        data-short_name="${user_short_name}"
                        data-position="${position}"
                        data-name_latin="${name_latin}"
                        data-gender="${gender}"
                        data-date_of_birth="${date_of_birth}"
                        data-phone_number="${phone_number}"
                        data-identity_card_number="${identity_card_number}"
                        data-get_url="${get_url}"
                        data-get_url_pic="${get_url_pic}"
                        data-province="${province}"
                        data-district="${district}"
                        data-commune="${commune}"
                        data-village="${village}"
                        data-place_of_birth="${place_of_birth}"
                        data-current_province="${current_province}"
                        data-current_district="${current_district}"
                        data-current_commune="${current_commune}"
                        data-current_village="${current_village}"
                        data-full_address="${full_address}"
                        data-staff_card="${staff_card}"
                        data-start_working_date="${start_working_date}"
                        data-pedagogy_certificate="${pedagogy_certificate}"
                        data-degree_level="${degree_level}"
                        data-public_entity_name="${public_entity_name}"
                        data-general_kindergaten="${general_kindergaten}"
                        data-general_primary="${general_primary}"
                        data-general_secondary="${general_secondary}"
                        data-father_name="${father_name}"
                        data-father_occupation="${father_occupation}"
                        data-mother_name="${mother_name}"
                        data-mother_occupation="${mother_occupation}"
                        data-spouse_name="${spouse_name}"
                        data-spouse_occupation="${spouse_occupation}"
                        id="${nameWithoutSpace}">${fullname}</button></td>
                    <td class='border-dark text-start'>${name_latin}</td>
                    <td class='border-dark text-center'>${gender}</td>
                    <td class='border-dark text-center'>${position}</td>
                    <td class='border-dark text-center'>${phone_number}</td>
                `;
                table_show.innerHTML += t;
                setTimeout(function () {
                    let q = document.getElementById(`${nameWithoutSpace}`);
                    document.getElementById(`${nameWithoutSpace}`).addEventListener('click', () => {
                        document.getElementById('btnAdd').style.display = 'none';
                        document.getElementById('btnUpdate').style.display = 'block';
                        document.getElementById('btnDelete').style.display = 'block';

                        document.getElementById('fill1').value = q.dataset.id;
                        document.getElementById('fill2').value = q.dataset.position;
                        document.getElementById('fill3').value = q.dataset.fullname;
                        document.getElementById('fill4').value = q.dataset.name_latin;
                        document.getElementById('fill5').value = q.dataset.gender;
                        document.getElementById('fill6').value = q.dataset.date_of_birth;
                        document.getElementById('fill7').value = q.dataset.phone_number;
                        document.getElementById('fill8').value = q.dataset.identity_card_number;
                        document.getElementById('uploadedImage2').src = q.dataset.get_url;
                        document.getElementById('uploadedImage').src = q.dataset.get_url_pic;
                        document.getElementById('showURL2').value = q.dataset.get_url;
                        document.getElementById('showURL').value = q.dataset.get_url_pic;
                        document.getElementById('fill11').value = q.dataset.province;
                        document.getElementById('fill12').value = q.dataset.district;
                        document.getElementById('fill13').value = q.dataset.commune;
                        document.getElementById('fill14').value = q.dataset.village;
                        document.getElementById('fill15').value = q.dataset.place_of_birth;
                        document.getElementById('fill16').value = q.dataset.current_province;
                        document.getElementById('fill17').value = q.dataset.current_district;
                        document.getElementById('fill18').value = q.dataset.current_commune;
                        document.getElementById('fill19').value = q.dataset.current_village;
                        document.getElementById('fill20').value = q.dataset.full_address;
                        document.getElementById('fill21').value = q.dataset.staff_card;
                        document.getElementById('fill22').value = q.dataset.start_working_date;
                        document.getElementById('fill23').value = q.dataset.pedagogy_certificate;
                        document.getElementById('fill24').value = q.dataset.degree_level;
                        document.getElementById('fill25').value = q.dataset.public_entity_name;
                        document.getElementById('selectedSubjects').value = q.dataset.general_kindergaten;
                        document.getElementById('selectedSubjects2').value = q.dataset.general_primary
                        document.getElementById('selectedSubjects3').value = q.dataset.general_secondary;
                        document.getElementById('fill29').value = q.dataset.father_name;
                        document.getElementById('fill30').value = q.dataset.father_occupation;
                        document.getElementById('fill31').value = q.dataset.mother_name;
                        document.getElementById('fill32').value = q.dataset.mother_occupation;
                        document.getElementById('fill33').value = q.dataset.spouse_name;
                        document.getElementById('fill34').value = q.dataset.spouse_occupation;
                        document.getElementById('fill35').value = q.dataset.short_name;

                    })
                    //Update data
                    document.getElementById(`btnUpdate`).addEventListener('click', () => {
                        Swal.fire({
                            text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });

                        var id = document.getElementById('fill1');//អត្តលេខ
                        var position = document.getElementById('fill2');//ភារកិច្ច
                        var fullname = document.getElementById('fill3');//គោត្តនាមនិងនាម
                        var name_latin = document.getElementById('fill4');//អក្សរឡាតាំង
                        var gender = document.getElementById('fill5');//ភេទ
                        var date_of_birth = document.getElementById('fill6');//ថ្ងៃខែឆ្នាំកំណើត
                        var phone_number = document.getElementById('fill7');//ទូរស័ព្ឌ
                        var identity_card_number = document.getElementById('fill8');//លេខអត្តសញ្ញាណប័ណ្ណ
                        var get_url = document.getElementById('showURL2');//កែតម្រូវហត្ថលេខា
                        var get_url_pic = document.getElementById('showURL');//ជ្រើសរើសរូបថត
                        var province = document.getElementById('fill11');//ខេត្ត/ក្រុង
                        var district = document.getElementById('fill12');//ស្រុក/ខណ្ឌ
                        var commune = document.getElementById('fill13');//ឃុំ/សង្កាត់
                        var village = document.getElementById('fill14');//ភូមិ
                        var place_of_birth = document.getElementById('fill15');//ឬវាយបញ្ជូលទីកន្លែងកំណើត
                        var current_province = document.getElementById('fill16');//ខេត្ត/ក្រុងទីលំនៅ
                        var current_district = document.getElementById('fill17');//ស្រុក/ខណ្ឌទីលំនៅ
                        var current_commune = document.getElementById('fill18');//ឃុំ/សង្កាត់ទីលំនៅ
                        var current_village = document.getElementById('fill19');//ភូមិទីលំនៅ
                        var full_address = document.getElementById('fill20');//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
                        var staff_card = document.getElementById('fill21');//លេខកាត
                        var start_working_date = document.getElementById('fill22');//ថ្ងៃខែចូលបម្រើការងារ
                        var pedagogy_certificate = document.getElementById('fill23');//សញ្ញាបត្រគរុកោសល្យ
                        var degree_level = document.getElementById('fill24');//កម្រិតវប្បធម៌
                        var public_entity_name = document.getElementById('fill25');//អង្គភាពរដ្ឋ
                        var general_kindergaten = document.getElementById('selectedSubjects');//មត្តេយ្យសិក្សា
                        var general_primary = document.getElementById('selectedSubjects2');//បឋមសិក្សា
                        var general_secondary = document.getElementById('selectedSubjects3');//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
                        var father_name = document.getElementById('fill29');//ឈ្មោះឪពុក
                        var father_occupation = document.getElementById('fill30');//មុខរបរ
                        var mother_name = document.getElementById('fill31');//ឈ្មោះម្តាយ
                        var mother_occupation = document.getElementById('fill32');//មុខរបរ
                        var spouse_name = document.getElementById('fill33');//ឈ្មោះប្តី/ប្រព្ធ
                        var spouse_occupation = document.getElementById('fill34');//មុខរបរ
                        var user_short_name = document.getElementById('fill35');//មុខរបរ
                        firebase
                            .database()
                            .ref(`/SalaMOM/staffs/` + fullname.value)
                            .update({
                                id: fullname.value,
                                fullname: fullname.value,
                                user_short_name: user_short_name.value,
                                user_id: id.value,
                                position: position.value,
                                name_latin: name_latin.value,
                                gender: gender.value,
                                date_of_birth: date_of_birth.value,
                                phone_number: phone_number.value,
                                identity_card_number: identity_card_number.value,
                                get_url: get_url.value,
                                get_url_pic: get_url_pic.value,
                                province: province.value,
                                district: district.value,
                                commune: commune.value,
                                village: village.value,
                                place_of_birth: place_of_birth.value,
                                current_province: current_province.value,
                                current_district: current_district.value,
                                current_commune: current_commune.value,
                                current_village: current_village.value,
                                full_address: full_address.value,
                                staff_card: staff_card.value,
                                start_working_date: start_working_date.value,
                                pedagogy_certificate: pedagogy_certificate.value,
                                degree_level: degree_level.value,
                                public_entity_name: public_entity_name.value,
                                general_kindergaten: general_kindergaten.value,
                                general_primary: general_primary.value,
                                general_secondary: general_secondary.value,
                                father_name: father_name.value,
                                father_occupation: father_occupation.value,
                                mother_name: mother_name.value,
                                mother_occupation: mother_occupation.value,
                                spouse_name: spouse_name.value,
                                spouse_occupation: spouse_occupation.value,
                            })
                        setTimeout(function () {
                                document.getElementById('fill1').value = '';//អត្តលេខ
                                document.getElementById('fill2').value = '';//ភារកិច្ច
                                document.getElementById('fill3').value = '';//គោត្តនាមនិងនាម
                                document.getElementById('fill4').value = '';//អក្សរឡាតាំង
                                document.getElementById('fill5').value = '';//ភេទ
                                document.getElementById('fill6').value = '';//ថ្ងៃខែឆ្នាំកំណើត
                                document.getElementById('fill7').value = '';//ទូរស័ព្ឌ
                                document.getElementById('fill8').value = '';//លេខអត្តសញ្ញាណប័ណ្ណ
                                document.getElementById('showURL2').value = '';//កែតម្រូវហត្ថលេខា
                                document.getElementById('uploadedImage').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//កែតម្រូវហត្ថលេខារូបភាព
                                document.getElementById('showURL').value = '';//ជ្រើសរើសរូបថត
                                document.getElementById('uploadedImage2').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//ជ្រើសរើសរូបថតpic
                                document.getElementById('fill11').value = '';//ខេត្ត/ក្រុង
                                document.getElementById('fill12').value = '';//ស្រុក/ខណ្ឌ
                                document.getElementById('fill13').value = '';//ឃុំ/សង្កាត់
                                document.getElementById('fill14').value = '';//ភូមិ
                                document.getElementById('fill15').value = '';//ឬវាយបញ្ជូលទីកន្លែងកំណើត
                                document.getElementById('fill16').value = '';//ខេត្ត/ក្រុងទីលំនៅ
                                document.getElementById('fill17').value = '';//ស្រុក/ខណ្ឌទីលំនៅ
                                document.getElementById('fill18').value = '';//ឃុំ/សង្កាត់ទីលំនៅ
                                document.getElementById('fill19').value = '';//ភូមិទីលំនៅ
                                document.getElementById('fill20').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
                                document.getElementById('fill21').value = '';//លេខកាត
                                document.getElementById('fill22').value = '';//ថ្ងៃខែចូលបម្រើការងារ
                                document.getElementById('fill23').value = '';//សញ្ញាបត្រគរុកោសល្យ
                                document.getElementById('fill24').value = '';//កម្រិតវប្បធម៌
                                document.getElementById('fill25').value = '';//អង្គភាពរដ្ឋ
                                document.getElementById('selectedSubjects').value = '';//មត្តេយ្យសិក្សា
                                document.getElementById('selectedSubjects2').value = '';//បឋមសិក្សា
                                document.getElementById('selectedSubjects3').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
                                document.getElementById('fill29').value = '';//ឈ្មោះឪពុក
                                document.getElementById('fill30').value = '';//មុខរបរ
                                document.getElementById('fill31').value = '';//ឈ្មោះម្តាយ
                                document.getElementById('fill32').value = '';//មុខរបរ
                                document.getElementById('fill33').value = '';//ឈ្មោះប្តី/ប្រព្ធ
                                document.getElementById('fill34').value = '';//មុខរបរ
                                document.getElementById('fill35').value = '';//មុខរបរ
                                window.location.reload();
                        }, 1500);

                    })
                    //Remove data
                    document.getElementById('btnDelete').addEventListener('click', () => {
                        var fullname = document.getElementById('fill3');//គោត្តនាមនិងនាម
                        Swal.fire({
                            text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        firebase
                            .database()
                            .ref(`/SalaMOM/staffs/` + fullname.value)
                            .remove();
                        setTimeout(function () {
                                document.getElementById('fill1').value = '';//អត្តលេខ
                                document.getElementById('fill2').value = '';//ភារកិច្ច
                                document.getElementById('fill3').value = '';//គោត្តនាមនិងនាម
                                document.getElementById('fill4').value = '';//អក្សរឡាតាំង
                                document.getElementById('fill5').value = '';//ភេទ
                                document.getElementById('fill6').value = '';//ថ្ងៃខែឆ្នាំកំណើត
                                document.getElementById('fill7').value = '';//ទូរស័ព្ឌ
                                document.getElementById('fill8').value = '';//លេខអត្តសញ្ញាណប័ណ្ណ
                                document.getElementById('showURL2').value = '';//កែតម្រូវហត្ថលេខា
                                document.getElementById('uploadedImage').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//កែតម្រូវហត្ថលេខារូបភាព
                                document.getElementById('showURL2').value = '';//ជ្រើសរើសរូបថត
                                document.getElementById('uploadedImage').src = 'https://salaarean.com//assets/no_image-9ed3c451b5efe6f9616f35f518759dfba51fec9a9cfb9cb0c00da8d49476e6af.png';//ជ្រើសរើសរូបថតpic
                                document.getElementById('fill11').value = '';//ខេត្ត/ក្រុង
                                document.getElementById('fill12').value = '';//ស្រុក/ខណ្ឌ
                                document.getElementById('fill13').value = '';//ឃុំ/សង្កាត់
                                document.getElementById('fill14').value = '';//ភូមិ
                                document.getElementById('fill15').value = '';//ឬវាយបញ្ជូលទីកន្លែងកំណើត
                                document.getElementById('fill16').value = '';//ខេត្ត/ក្រុងទីលំនៅ
                                document.getElementById('fill17').value = '';//ស្រុក/ខណ្ឌទីលំនៅ
                                document.getElementById('fill18').value = '';//ឃុំ/សង្កាត់ទីលំនៅ
                                document.getElementById('fill19').value = '';//ភូមិទីលំនៅ
                                document.getElementById('fill20').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
                                document.getElementById('fill21').value = '';//លេខកាត
                                document.getElementById('fill22').value = '';//ថ្ងៃខែចូលបម្រើការងារ
                                document.getElementById('fill23').value = '';//សញ្ញាបត្រគរុកោសល្យ
                                document.getElementById('fill24').value = '';//កម្រិតវប្បធម៌
                                document.getElementById('fill25').value = '';//អង្គភាពរដ្ឋ
                                document.getElementById('selectedSubjects').value = '';//មត្តេយ្យសិក្សា
                                document.getElementById('selectedSubjects2').value = '';//បឋមសិក្សា
                                document.getElementById('selectedSubjects3').value = '';//ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន
                                document.getElementById('fill29').value = '';//ឈ្មោះឪពុក
                                document.getElementById('fill30').value = '';//មុខរបរ
                                document.getElementById('fill31').value = '';//ឈ្មោះម្តាយ
                                document.getElementById('fill32').value = '';//មុខរបរ
                                document.getElementById('fill33').value = '';//ឈ្មោះប្តី/ប្រព្ធ
                                document.getElementById('fill34').value = '';//មុខរបរ
                                document.getElementById('fill35').value = '';//មុខរបរ
                                window.location.reload();
                        }, 1500);
                    })


                }, 1000)
            })
        })

})

const searchInput = document.getElementById("searchInput");
const tbody = document.querySelector("table tbody");

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

//Add Profile Picture
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
