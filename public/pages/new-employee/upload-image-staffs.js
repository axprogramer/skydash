var db_grade = localStorage.getItem('sle_grade');
var db_year = localStorage.getItem('sle_year');

const cloudName = "salamomschool"; // Replace with your Cloudinary cloud name
const uploadPreset = "mom_img"; // Replace with your upload preset name
const targetFolder = `Staff_pictures/`;

const uploadButton = document.getElementById("uploadButton");
const imageFile = document.getElementById("imageFile");
const uploadedImage = document.getElementById("uploadedImage");
const showURL = document.querySelector('#showURL');
const uploadProgress = document.getElementById("uploadProgress");
const progressContainer = document.getElementById("progressContainer");

const uploadButton2 = document.getElementById("uploadButton2");
const imageFile2 = document.getElementById("imageFile2");
const uploadedImage2 = document.getElementById("uploadedImage2");
const showURL2 = document.querySelector('#showURL2');
const uploadProgress2 = document.getElementById("uploadProgress2");
const progressContainer2 = document.getElementById("progressContainer2");

const name_en = document.getElementById('fill4');

//ជ្រើសរើសរូបថត
uploadButton.addEventListener("click", function () {
    imageFile.click(); // Simulate a click on the hidden file input
});
progressContainer.textContent = ``;
imageFile.addEventListener("change", function () {
    const file = this.files[0];
    
    if (!file) {
        return;
    }
    const set_name = `${name_en.value}`
    const customPublicId = file.name.split('.')[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", targetFolder);
    formData.append("public_id", set_name);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded * 100) / e.total);
            progressContainer.textContent = `Uploading... ${percentComplete}%`;
        }
    });

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            uploadedImage.src = data.secure_url;
            showURL.value = data.secure_url;
            progressContainer.textContent = "Upload complete!";
            setTimeout(function () {
                progressContainer.textContent = ``;

            }, 1000)
        } else {
            console.error("Error uploading image:", xhr.statusText);
            alert("Failed to upload image. Please try again.");
            progressContainer.textContent = "Upload failed.";
        }
    };

    xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/upload`);
    xhr.send(formData);
});

//ជ្រើសរើសរូបសំបុត្រកំណើត
uploadButton2.addEventListener("click", function () {
    imageFile2.click(); // Simulate a click on the hidden file input
});
progressContainer2.textContent = ``;
imageFile2.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
        return;
    }
    const set_name = `${name_en.value}_signture`

    const customPublicId = file.name.split('.')[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", targetFolder);
    formData.append("public_id", set_name);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded * 100) / e.total);
            progressContainer2.textContent = `Uploading... ${percentComplete}%`;
        }
    });

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            uploadedImage2.src = data.secure_url;
            showURL2.value = data.secure_url;
            progressContainer2.textContent = "Upload complete!";
            setTimeout(function () {
                progressContainer2.textContent = ``;

            }, 1000)
        } else {
            console.error("Error uploading image:", xhr.statusText);
            alert("Failed to upload image. Please try again.");
            progressContainer2.textContent = "Upload failed.";
        }
    };

    xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/upload`);
    xhr.send(formData);
});
