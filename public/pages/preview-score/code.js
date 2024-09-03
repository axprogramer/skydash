m1semester
mdec
mjan
mfeb
mmarch
mapma
mjun
m1semester
m1semester
m2semester
month4s2

if (!e_moct) { e_moct = 0 };
if (!e_h_moct) { e_h_moct = 0 };

if (!pe_moct) { pe_moct = 0 };

if (!e_mnov) { e_mnov = 0 };
if (!e_h_mnov) { e_h_mnov = 0 };

if (!pe_mnov) { pe_mnov = 0 };

if (!e_mdec) { e_mdec = 0 };
if (!e_h_mdec) { e_h_mdec = 0 };

if (!pe_mdec) { pe_mdec = 0 };

if (!e_mjan) { e_mjan = 0 };
if (!e_h_mjan) { e_h_mjan = 0 };

if (!pe_mjan) { pe_mjan = 0 };

if (!e_mfeb) { e_mfeb = 0 };
if (!e_h_mfeb) { e_h_mfeb = 0 };

if (!pe_mfeb) { pe_mfeb = 0 };

if (!e_mmarch) { e_mmarch = 0 };
if (!e_h_mmarch) { e_h_mmarch = 0 };

if (!pe_mmarch) { pe_mmarch = 0 };

if (!e_mapma) { e_mapma = 0 };
if (!e_h_mapma) { e_h_mapma = 0 };

if (!pe_mapma) { pe_mapma = 0 };

if (!e_mjun) { e_mjun = 0 };
if (!e_h_mjun) { e_h_mjun = 0 };

if (!pe_mjun) { pe_mjun = 0 };

if (!e_mjul) { e_mjul = 0 };
if (!e_h_mfee_mjul) { e_h_mfee_mjul = 0 };

if (!pe_mjul) { pe_mjul = 0 };

if (!e_m1semester) { e_m1semester = 0 };
if (!e_h_m1semester) { e_h_m1semester = 0 };

if (!pe_m1semester) { pe_m1semester = 0 }

if (!e_m2semester) { e_m2semester = 0 };
if (!e_h_m2semester) { e_h_m2semester = 0 };

if (!pe_m2semester) { pe_m2semester = 0 };

<th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សរសេរតាមអាន</th>
if (dbMonth == '1st Semester') {
    if (primary_g_p1.includes(dbGrade)) {

        datas.forEach((d) => {

            var id = d.val().id;
            var user_grade = d.val().user_grade;
            var gender = d.val().gender;
            var average = d.val().average_m1semester;
            var rank = d.val().rank_m1semester;

            var k_listen_m1semester = d.val().k_listen_m1semester;
            var k_speak_m1semester = d.val().k_speak_m1semester;
            var k_reading_m1semester = d.val().k_reading_m1semester;
            var k_dictation_m1semester = d.val().k_dictation_m1semester;
            var k_writing_m1semester = d.val().k_writing_m1semester;
            var k_grammar_m1semester = d.val().k_grammar_m1semester;
            var k_homework_m1semester = d.val().k_homework_m1semester;

            var math_speak_m1semester = d.val().math_speak_m1semester;
            var math_m1semester = d.val().math_m1semester;
            var math_h_m1semester = d.val().math_h_m1semester;

            var sci_m1semester = d.val().sci_m1semester;
            var sci_h_m1semester = d.val().sci_h_m1semester;

            var soc_m1semester = d.val().soc_m1semester;
            var soc_h_m1semester = d.val().soc_h_m1semester;

            var e_m1semester = d.val().e_m1semester;
            var e_h_m1semester = d.val().e_h_m1semester;

            var pe_m1semester = d.val().pe_m1semester;

            let noSp = id.replace(/\s+/g, "");

            if (!k_listen_m1semester) { k_listen_m1semester = 0 };
            if (!k_speak_m1semester) { k_speak_m1semester = 0 };
            if (!k_reading_m1semester) { k_reading_m1semester = 0 };
            if (!k_dictation_m1semester) { k_dictation_m1semester = 0 };
            if (!k_writing_m1semester) { k_writing_m1semester = 0 };
            if (!k_grammar_m1semester) { k_grammar_m1semester = 0 };
            if (!k_homework_m1semester) { k_homework_m1semester = 0 };

            if (!math_speak_m1semester) { math_speak_m1semester = 0 };
            if (!math_m1semester) { math_m1semester = 0 };
            if (!math_h_m1semester) { math_h_m1semester = 0 };

            if (!sci_m1semester) { sci_m1semester = 0 };
            if (!sci_h_m1semester) { sci_h_m1semester = 0 };

            if (!soc_m1semester) { soc_m1semester = 0 };
            if (!soc_h_m1semester) { soc_h_m1semester = 0 };

            if (!e_m1semester) { e_m1semester = 0 };
            if (!e_h_m1semester) { e_h_m1semester = 0 };

            if (!pe_m1semester) { pe_m1semester = 0 };

            //Total all score
            var total_all_score =
                parseFloat(k_listen_m1semester) +
                parseFloat(k_speak_m1semester) +
                parseFloat(k_reading_m1semester) +
                parseFloat(k_dictation_m1semester) +
                parseFloat(k_writing_m1semester) +
                parseFloat(k_homework_m1semester) +
                parseFloat(math_speak_m1semester) +
                parseFloat(math_m1semester) +
                parseFloat(math_h_m1semester) +
                parseFloat(sci_m1semester) +
                parseFloat(sci_h_m1semester) +
                parseFloat(soc_m1semester) +
                parseFloat(soc_h_m1semester) +
                parseFloat(e_m1semester) +
                parseFloat(e_h_m1semester) +
                parseFloat(pe_m1semester);
            if (!total_all_score) { total_all_score = "00" }
            //មធ្យមភាគ
            var st_average =
                parseFloat(total_all_score) / dbdivid;
            st_average = st_average.toFixed(2);

            student_rank.push({
                id,
                user_grade,
                st_average,
                total_all_score,
                gender,
                k_listen_m1semester,
                k_speak_m1semester,
                k_reading_m1semester,
                k_dictation_m1semester,
                k_writing_m1semester,
                k_homework_m1semester,
                math_speak_m1semester,
                math_m1semester,
                math_h_m1semester,
                sci_m1semester,
                sci_h_m1semester,
                soc_m1semester,
                soc_h_m1semester,
                e_m1semester,
                e_h_m1semester,
                pe_m1semester,
            })
            setTimeout(() => {
                N0++;

                //Mention average
                let mention = '';
                var my = parseFloat(average);
                if (my <= 4.9) {
                    mention = "ខ្សោយ"
                } else if (my <= 6.49) {
                    mention = "មធ្យម"
                } else if (my <= 7.99) {
                    mention = "ល្អបង្គួរ";
                } else if (my <= 9.49) {
                    mention = "ល្អ";
                } else if (my <= 10) {
                    mention = "ល្អណាស់";
                }

                let h = `
                                        <th class="border-dark">ល.រ</th>
                                        <th class="border-dark">ឈ្មោះ</th>
                                        <th class="border-dark">ភេទ</th>
                                        <th class="border-dark">ការស្តាប់</th>
                                        <th class="border-dark">ការនិយាយ</th>
                                        <th class="border-dark">អំណាន</th>
                                        <th class="border-dark">សរសេរតាមអាន</th>
                                        <th class="border-dark">តែងសេចក្តី</th>
                                        <th class="border-dark">គ.ផ្ទាល់មាត់</th>
                                        <th class="border-dark">គណិតវិទ្យា</th>
                                        <th class="border-dark">គ.កិច្ចការផ្ទះ</th>
                                        <th class="border-dark">វិទ្យាសាស្ត្រ</th>
                                        <th class="border-dark">សិក្សាសង្គម</th>
                                        <th class="border-dark">កិ.(ខ្មែរ)</th>
                                        <th class="border-dark">កិ.(វិទ្យា)</th>
                                        <th class="border-dark">កិ.(សិក្សា)</th>
                                        <th class="border-dark">កិ.(អង់គ្លេស)</th>
                                        <th class="border-dark">កីឡា</th>
                                        <th class="border-dark">អង់គ្លេស</th>
                                        <th class="border-dark">ពិន្ទុសរុប</th>
                                        <th class="border-dark">មធ្យមភាគ</th>
                                        <th class="border-dark">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark">និទ្ទេស</th>
                                        
        
                                        `
                let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark">${id}</td>
                                        <td class="border-dark text-center"">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_listen_m1semester="${N0}" id="${noSp}k_listen_m1semester">${k_listen_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_speak_m1semester="${N0}" id="${noSp}k_speak_m1semester">${k_speak_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_reading_m1semester="${N0}" id="${noSp}k_reading_m1semester">${k_reading_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_dictation_m1semester="${N0}" id="${noSp}k_dictation_m1semester">${k_dictation_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_writing_m1semester="${N0}" id="${noSp}k_writing_m1semester">${k_writing_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_speak_m1semester="${N0}" id="${noSp}math_speak_m1semester">${math_speak_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_m1semester="${N0}" id="${noSp}math_m1semester">${math_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_h_m1semester="${N0}" id="${noSp}math_h_m1semester">${math_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-sci_m1semester="${N0}" id="${noSp}sci_m1semester">${sci_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-soc_m1semester="${N0}" id="${noSp}soc_m1semester">${soc_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_homework_m1semester="${N0}" id="${noSp}k_homework_m1semester">${k_homework_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-sci_h_m1semester="${N0}" id="${noSp}sci_h_m1semester">${sci_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-soc_h_m1semester="${N0}" id="${noSp}soc_h_m1semester">${soc_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_h_m1semester="${N0}" id="${noSp}e_h_m1semester">${e_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_m1semester="${N0}" id="${noSp}pe_m1semester">${pe_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_m1semester="${N0}" id="${noSp}e_m1semester">${e_m1semester}</td>
                                        <td class="border-dark text-center fw-bold">${total_all_score}</td>
                                        <td class="border-dark text-center fw-bold">${average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                //Update data
                setTimeout(() => {
                    document.getElementById(`${noSp}e_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}pe_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}pe_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                pe_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}e_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}soc_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}soc_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                soc_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}sci_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}sci_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                sci_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_homework_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_homework_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_homework_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}soc_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}soc_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                soc_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}sci_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}sci_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                sci_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}math_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}math_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}math_speak_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_speak_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_speak_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_writing_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_writing_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_writing_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_dictation_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_dictation_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_dictation_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_reading_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_reading_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_reading_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_speak_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_speak_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_speak_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_listen_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_listen_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_listen_m1semester: d,
                            });
                    })

                }, 200);
                //Key select
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                        const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                        const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                        const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                        const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                        const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                        const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_h_m1semester);
                        const nextCell = document.querySelector(`[data-e_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_h_m1semester);
                        const nextCell = document.querySelector(`[data-e_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_h_m1semester);
                        const nextCell = document.querySelector(`[data-e_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_h_m1semester);
                        const nextCell = document.querySelector(`[data-soc_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_h_m1semester);
                        const nextCell = document.querySelector(`[data-soc_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_h_m1semester);
                        const nextCell = document.querySelector(`[data-soc_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_h_m1semester);
                        const nextCell = document.querySelector(`[data-sci_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_h_m1semester);
                        const nextCell = document.querySelector(`[data-sci_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_h_m1semester);
                        const nextCell = document.querySelector(`[data-sci_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_homework_m1semester);
                        const nextCell = document.querySelector(`[data-k_homework_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_homework_m1semester);
                        const nextCell = document.querySelector(`[data-k_homework_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_homework_m1semester);
                        const nextCell = document.querySelector(`[data-k_homework_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_m1semester);
                        const nextCell = document.querySelector(`[data-soc_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_m1semester);
                        const nextCell = document.querySelector(`[data-soc_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_m1semester);
                        const nextCell = document.querySelector(`[data-soc_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_m1semester);
                        const nextCell = document.querySelector(`[data-sci_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_m1semester);
                        const nextCell = document.querySelector(`[data-sci_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_m1semester);
                        const nextCell = document.querySelector(`[data-sci_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_h_m1semester);
                        const nextCell = document.querySelector(`[data-math_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_h_m1semester);
                        const nextCell = document.querySelector(`[data-math_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_h_m1semester);
                        const nextCell = document.querySelector(`[data-math_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                        const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                        const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                        const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_speak_m1semester);
                        const nextCell = document.querySelector(`[data-math_speak_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_speak_m1semester);
                        const nextCell = document.querySelector(`[data-math_speak_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_speak_m1semester);
                        const nextCell = document.querySelector(`[data-math_speak_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_writing_m1semester);
                        const nextCell = document.querySelector(`[data-k_writing_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_writing_m1semester);
                        const nextCell = document.querySelector(`[data-k_writing_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_writing_m1semester);
                        const nextCell = document.querySelector(`[data-k_writing_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_dictation_m1semester);
                        const nextCell = document.querySelector(`[data-k_dictation_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_dictation_m1semester);
                        const nextCell = document.querySelector(`[data-k_dictation_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_dictation_m1semester);
                        const nextCell = document.querySelector(`[data-k_dictation_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_reading_m1semester);
                        const nextCell = document.querySelector(`[data-k_reading_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_reading_m1semester);
                        const nextCell = document.querySelector(`[data-k_reading_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_reading_m1semester);
                        const nextCell = document.querySelector(`[data-k_reading_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_speak_m1semester);
                        const nextCell = document.querySelector(`[data-k_speak_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_speak_m1semester);
                        const nextCell = document.querySelector(`[data-k_speak_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_speak_m1semester);
                        const nextCell = document.querySelector(`[data-k_speak_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_listen_m1semester);
                        const nextCell = document.querySelector(`[data-k_listen_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_listen_m1semester);
                        const nextCell = document.querySelector(`[data-k_listen_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_listen_m1semester);
                        const nextCell = document.querySelector(`[data-k_listen_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });


                show_hearder.innerHTML = h;
                table.innerHTML += n;
                show_hearder_print.innerHTML = h;
                table_print.innerHTML += n;

            }, 200);

        })
        //Sort array and get rank number
        student_rank.sort((a, b) => {
            if (a.st_average > b.st_average) return -1;
            if (a.st_average < b.st_average) return 1;
            return 0;
        });

        for (let i = 0; i < student_rank.length; i++) {
            let avg = student_rank[i].st_average;


            let studentsWithRank = student_rank.filter(
                (student) => student.st_average === avg

            );
            for (let student of studentsWithRank) {
                student.Rank = i + 1;
            }
            i += studentsWithRank.length - 1;
        }
        let num = "";
        //get Data sort to new array and save to localStorage
        student_rank.forEach((student) => {
            var id = student.id;
            var gender = student.gender;
            var total_all_score = student.total_all_score;
            var average = student.st_average;
            var rank = student.Rank;
            if (!total_all_score) {

                total_all_score = total_all_score.toFixed(2);
            }

            num++;

            //Mention average
            let mention = '';
            var my = parseFloat(average);
            if (my <= 4.9) {
                mention = "ខ្សោយ"
            } else if (my <= 6.49) {
                mention = "មធ្យម"
            } else if (my <= 7.99) {
                mention = "ល្អបង្គួរ";
            } else if (my <= 9.49) {
                mention = "ល្អ";
            } else if (my <= 10) {
                mention = "ល្អណាស់";
            }
            let mention_fail = '';
            var my = parseFloat(average);
            if (my <= 4.9) {
                mention_fail = "Poor"
            } else if (my <= 6.49) {
                mention_fail = "Average"
            } else if (my <= 7.99) {
                mention_fail = "Fairly Good";
            } else if (my <= 9.49) {
                mention_fail = "Good";
            } else if (my <= 10) {
                mention_fail = "Very Good";
            }
            let sex = '';
            if (gender == 'ស្រី') { sex = 'F' };
            if (gender == 'ប្រុស') { sex = 'M' };

            let new_gender = '';
            if (gender == 'ស្រី') { new_gender = 'ស' };
            if (gender == 'ប្រុស') { new_gender = 'ប' };

            firebase
                .database()
                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                .update({
                    average_m1semester: average,
                    rank_m1semester: rank,
                });
            let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">ពិន្ទុសរុប</th>
                                        <th class="border-dark text_table">មធ្យមភាគ</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
            let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                                        <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                                        <td class="border-dark text-center text_table"></td>
                                        <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
            table_result.innerHTML += n;
            show_hearder_result.innerHTML = h;

        })
    }
    if (primary_g_p2.includes(dbGrade)) {
        datas.forEach((d) => {
            var id = d.val().id;
            var user_grade = d.val().user_grade;
            var gender = d.val().gender;
            var average = d.val().average_m1semester;
            var rank = d.val().rank_m1semester;

            var k_reading_m1semester = d.val().k_reading_m1semester;
            var k_dictation_m1semester = d.val().k_dictation_m1semester;
            var k_writing_m1semester = d.val().k_writing_m1semester;
            var k_grammar_m1semester = d.val().k_grammar_m1semester;
            var k_homework_m1semester = d.val().k_homework_m1semester;

            var math_speak_m1semester = d.val().math_speak_m1semester;
            var math_m1semester = d.val().math_m1semester;
            var math_h_m1semester = d.val().math_h_m1semester;

            var sci_m1semester = d.val().sci_m1semester;
            var sci_h_m1semester = d.val().sci_h_m1semester;

            var soc_h_m1semester = d.val().soc_h_m1semester;

            var e_m1semester = d.val().e_m1semester;
            var e_h_m1semester = d.val().e_h_m1semester;

            var pe_m1semester = d.val().pe_m1semester;
            var geor_m1semester = d.val().geor_m1semester;
            var hist_m1semester = d.val().hist_m1semester;
            var moral_m1semester = d.val().moral_m1semester;

            let noSp = id.replace(/\s+/g, "");

            if (!k_reading_m1semester) { k_reading_m1semester = 0 };
            if (!k_dictation_m1semester) { k_dictation_m1semester = 0 };
            if (!k_writing_m1semester) { k_writing_m1semester = 0 };
            if (!k_grammar_m1semester) { k_grammar_m1semester = 0 };
            if (!k_homework_m1semester) { k_homework_m1semester = 0 };

            if (!math_speak_m1semester) { math_speak_m1semester = 0 };
            if (!math_m1semester) { math_m1semester = 0 };
            if (!math_h_m1semester) { math_h_m1semester = 0 };

            if (!sci_m1semester) { sci_m1semester = 0 };
            if (!sci_h_m1semester) { sci_h_m1semester = 0 };

            if (!soc_h_m1semester) { soc_h_m1semester = 0 };

            if (!e_m1semester) { e_m1semester = 0 };
            if (!e_h_m1semester) { e_h_m1semester = 0 };

            if (!pe_m1semester) { pe_m1semester = 0 };
            if (!geor_m1semester) { geor_m1semester = 0 };
            if (!hist_m1semester) { hist_m1semester = 0 };
            if (!moral_m1semester) { moral_m1semester = 0 };
            //Total all score
            var total_all_score =
                parseFloat(k_reading_m1semester) +
                parseFloat(k_dictation_m1semester) +
                parseFloat(k_writing_m1semester) +
                parseFloat(k_grammar_m1semester) +
                parseFloat(k_homework_m1semester) +
                parseFloat(math_speak_m1semester) +
                parseFloat(math_m1semester) +
                parseFloat(math_h_m1semester) +
                parseFloat(sci_m1semester) +
                parseFloat(sci_h_m1semester) +
                parseFloat(soc_h_m1semester) +
                parseFloat(geor_m1semester) +
                parseFloat(hist_m1semester) +
                parseFloat(moral_m1semester) +
                parseFloat(e_m1semester) +
                parseFloat(e_h_m1semester) +
                parseFloat(pe_m1semester);
            if (!total_all_score) { total_all_score = "00" }
            //មធ្យមភាគ
            var st_average =
                parseFloat(total_all_score) / dbdivid;
            st_average = st_average.toFixed(2);

            student_rank.push({
                id,
                user_grade,
                st_average,
                total_all_score,
                gender,
                k_reading_m1semester,
                k_dictation_m1semester,
                k_writing_m1semester,
                k_homework_m1semester,
                math_speak_m1semester,
                math_m1semester,
                math_h_m1semester,
                sci_m1semester,
                sci_h_m1semester,
                soc_h_m1semester,
                e_m1semester,
                e_h_m1semester,
                pe_m1semester,
            })
            setTimeout(() => {
                //Mention average
                let mention = '';
                var my = parseFloat(average);
                if (my <= 4.9) {
                    mention = "ខ្សោយ"
                } else if (my <= 6.49) {
                    mention = "មធ្យម"
                } else if (my <= 7.99) {
                    mention = "ល្អបង្គួរ";
                } else if (my <= 9.49) {
                    mention = "ល្អ";
                } else if (my <= 10) {
                    mention = "ល្អណាស់";
                }

                N0++;
                let h = `
                                        <th class="border-dark">ល.រ</th>
                                        <th class="border-dark">ឈ្មោះ</th>
                                        <th class="border-dark">ភេទ</th>
                                        <th class="border-dark">អំណាន</th>
                                        <th class="border-dark">សរសេរតាមអាន</th>
                                        <th class="border-dark">តែងសេចក្តី</th>
                                        <th class="border-dark">វេយ្យាករណ៍</th>
                                        <th class="border-dark">គ.ផ្ទាល់មាត់</th>
                                        <th class="border-dark">គណិតវិទ្យា</th>
                                        <th class="border-dark">គ.កិច្ចការផ្ទះ</th>
                                        <th class="border-dark">វិទ្យាសាស្រ្ត</th>
                                        <th class="border-dark">ភូមិវិទ្យា</th>
                                        <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                                        <th class="border-dark">ពលរដ្ឋ</th>
                                        <th class="border-dark">កិ.(ខ្មែរ)</th>
                                        <th class="border-dark">កិ.(វិទ្យា)</th>
                                        <th class="border-dark">កិ.(សិក្សា)</th>
                                        <th class="border-dark">កិ.(អង់គ្លេស)</th>
                                        <th class="border-dark">កីឡា</th>
                                        <th class="border-dark">អង់គ្លេស</th>
                                        <th class="border-dark">ពិន្ទុសរុប</th>
                                        <th class="border-dark">មធ្យមភាគ</th>
                                        <th class="border-dark">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark">និទ្ទេស</th>
                                        
        
                                        `
                let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark">${id}</td>
                                        <td class="border-dark text-center">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_reading_m1semester="${N0}" id="${noSp}k_reading_m1semester">${k_reading_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_dictation_m1semester="${N0}" id="${noSp}k_dictation_m1semester">${k_dictation_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_writing_m1semester="${N0}" id="${noSp}k_writing_m1semester">${k_writing_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_grammar_m1semester="${N0}" id="${noSp}k_grammar_m1semester">${k_grammar_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_speak_m1semester="${N0}" id="${noSp}math_speak_m1semester">${math_speak_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_m1semester="${N0}" id="${noSp}math_m1semester">${math_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_h_m1semester="${N0}" id="${noSp}math_h_m1semester">${math_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-sci_m1semester="${N0}" id="${noSp}sci_m1semester">${sci_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_m1semester="${N0}" id="${noSp}geor_m1semester">${geor_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_m1semester="${N0}" id="${noSp}hist_m1semester">${hist_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-moral_m1semester="${N0}" id="${noSp}moral_m1semester">${moral_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_homework_m1semester="${N0}" id="${noSp}k_homework_m1semester">${k_homework_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-sci_h_m1semester="${N0}" id="${noSp}sci_h_m1semester">${sci_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-soc_h_m1semester="${N0}" id="${noSp}soc_h_m1semester">${soc_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_h_m1semester="${N0}" id="${noSp}e_h_m1semester">${e_h_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_m1semester="${N0}" id="${noSp}pe_m1semester">${pe_m1semester}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_m1semester="${N0}" id="${noSp}e_m1semester">${e_m1semester}</td>
                                        <td class="border-dark text-center fw-bold">${total_all_score}</td>
                                        <td class="border-dark text-center fw-bold">${average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                //Update data
                setTimeout(() => {
                    document.getElementById(`${noSp}e_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}pe_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}pe_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                pe_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}e_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}soc_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}soc_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                soc_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}sci_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}sci_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                sci_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_homework_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_homework_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_homework_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}sci_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}sci_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                sci_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}math_h_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_h_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_h_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}math_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}math_speak_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_speak_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_speak_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_grammar_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_grammar_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_grammar_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_writing_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_writing_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_writing_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_dictation_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_dictation_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_dictation_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}k_reading_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_reading_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_reading_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}geor_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}geor_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                geor_m1semester: d,
                            });
                    })
                    document.getElementById(`${noSp}hist_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}hist_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                hist_m1semester: d,
                            });
                    })

                    document.getElementById(`${noSp}moral_m1semester`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}moral_m1semester`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                moral_m1semester: d,
                            });
                    })

                }, 200);
                //Key select
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                        const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                        const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_m1semester);
                        const nextCell = document.querySelector(`[data-e_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                        const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                        const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.pe_m1semester);
                        const nextCell = document.querySelector(`[data-pe_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_h_m1semester);
                        const nextCell = document.querySelector(`[data-e_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_h_m1semester);
                        const nextCell = document.querySelector(`[data-e_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.e_h_m1semester);
                        const nextCell = document.querySelector(`[data-e_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_h_m1semester);
                        const nextCell = document.querySelector(`[data-soc_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_h_m1semester);
                        const nextCell = document.querySelector(`[data-soc_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_h_m1semester);
                        const nextCell = document.querySelector(`[data-soc_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_h_m1semester);
                        const nextCell = document.querySelector(`[data-sci_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_h_m1semester);
                        const nextCell = document.querySelector(`[data-sci_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_h_m1semester);
                        const nextCell = document.querySelector(`[data-sci_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_homework_m1semester);
                        const nextCell = document.querySelector(`[data-k_homework_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_homework_m1semester);
                        const nextCell = document.querySelector(`[data-k_homework_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_homework_m1semester);
                        const nextCell = document.querySelector(`[data-k_homework_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_m1semester);
                        const nextCell = document.querySelector(`[data-soc_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_m1semester);
                        const nextCell = document.querySelector(`[data-soc_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.soc_m1semester);
                        const nextCell = document.querySelector(`[data-soc_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_m1semester);
                        const nextCell = document.querySelector(`[data-sci_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_m1semester);
                        const nextCell = document.querySelector(`[data-sci_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.sci_m1semester);
                        const nextCell = document.querySelector(`[data-sci_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_h_m1semester);
                        const nextCell = document.querySelector(`[data-math_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_h_m1semester);
                        const nextCell = document.querySelector(`[data-math_h_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_h_m1semester);
                        const nextCell = document.querySelector(`[data-math_h_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                        const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                        const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_m1semester);
                        const nextCell = document.querySelector(`[data-math_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_speak_m1semester);
                        const nextCell = document.querySelector(`[data-math_speak_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_speak_m1semester);
                        const nextCell = document.querySelector(`[data-math_speak_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.math_speak_m1semester);
                        const nextCell = document.querySelector(`[data-math_speak_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_writing_m1semester);
                        const nextCell = document.querySelector(`[data-k_writing_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_writing_m1semester);
                        const nextCell = document.querySelector(`[data-k_writing_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_writing_m1semester);
                        const nextCell = document.querySelector(`[data-k_writing_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_dictation_m1semester);
                        const nextCell = document.querySelector(`[data-k_dictation_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_dictation_m1semester);
                        const nextCell = document.querySelector(`[data-k_dictation_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_dictation_m1semester);
                        const nextCell = document.querySelector(`[data-k_dictation_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_reading_m1semester);
                        const nextCell = document.querySelector(`[data-k_reading_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_reading_m1semester);
                        const nextCell = document.querySelector(`[data-k_reading_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_reading_m1semester);
                        const nextCell = document.querySelector(`[data-k_reading_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_grammar_m1semester);
                        const nextCell = document.querySelector(`[data-k_grammar_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_grammar_m1semester);
                        const nextCell = document.querySelector(`[data-k_grammar_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_grammar_m1semester);
                        const nextCell = document.querySelector(`[data-k_grammar_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.moral_m1semester);
                        const nextCell = document.querySelector(`[data-moral_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.moral_m1semester);
                        const nextCell = document.querySelector(`[data-moral_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.moral_m1semester);
                        const nextCell = document.querySelector(`[data-moral_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.hist_m1semester);
                        const nextCell = document.querySelector(`[data-hist_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.hist_m1semester);
                        const nextCell = document.querySelector(`[data-hist_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.hist_m1semester);
                        const nextCell = document.querySelector(`[data-hist_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.geor_m1semester);
                        const nextCell = document.querySelector(`[data-geor_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.geor_m1semester);
                        const nextCell = document.querySelector(`[data-geor_m1semester="${currentIndex + 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                    if (event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.geor_m1semester);
                        const nextCell = document.querySelector(`[data-geor_m1semester="${currentIndex - 1}"]`);
                        const focusedCell = document.activeElement;
                        if (focusedCell && focusedCell.tagName === "TD") {
                            const range = document.createRange();
                            range.selectNodeContents(focusedCell);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        if (nextCell) {
                            nextCell.focus();
                        }
                    }
                });

                show_hearder.innerHTML = h;
                table.innerHTML += n;
                show_hearder_print.innerHTML = h;
                table_print.innerHTML += n;

            }, 200);

        })
        //Sort array and get rank number
        student_rank.sort((a, b) => {
            if (a.st_average > b.st_average) return -1;
            if (a.st_average < b.st_average) return 1;
            return 0;
        });

        for (let i = 0; i < student_rank.length; i++) {
            let avg = student_rank[i].st_average;


            let studentsWithRank = student_rank.filter(
                (student) => student.st_average === avg

            );
            for (let student of studentsWithRank) {
                student.Rank = i + 1;
            }
            i += studentsWithRank.length - 1;
        }
        let num = "";
        //get Data sort to new array and save to localStorage
        student_rank.forEach((student) => {
            var id = student.id;
            var gender = student.gender;
            var total_all_score = student.total_all_score;
            var average = student.st_average;
            var rank = student.Rank;
            if (!total_all_score) {

                total_all_score = total_all_score.toFixed(2);
            }

            num++;

            //Mention average
            let mention = '';
            var my = parseFloat(average);
            if (my <= 4.9) {
                mention = "ខ្សោយ"
            } else if (my <= 6.49) {
                mention = "មធ្យម"
            } else if (my <= 7.99) {
                mention = "ល្អបង្គួរ";
            } else if (my <= 9.49) {
                mention = "ល្អ";
            } else if (my <= 10) {
                mention = "ល្អណាស់";
            }
            let mention_fail = '';
            var my = parseFloat(average);
            if (my <= 4.9) {
                mention_fail = "Poor"
            } else if (my <= 6.49) {
                mention_fail = "Average"
            } else if (my <= 7.99) {
                mention_fail = "Fairly Good";
            } else if (my <= 9.49) {
                mention_fail = "Good";
            } else if (my <= 10) {
                mention_fail = "Very Good";
            }
            let sex = '';
            if (gender == 'ស្រី') { sex = 'F' };
            if (gender == 'ប្រុស') { sex = 'M' };

            let new_gender = '';
            if (gender == 'ស្រី') { new_gender = 'ស' };
            if (gender == 'ប្រុស') { new_gender = 'ប' };

            firebase
                .database()
                .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                .update({
                    average_m1semester: average,
                    rank_m1semester: rank,
                });
            let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">ពិន្ទុសរុប</th>
                                        <th class="border-dark text_table">មធ្យមភាគ</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
            let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${total_all_score}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table" style="color:red;width:8vh;">${rank}</td>
                                        <td class="border-dark text-center text_table" style="color:red;">${mention}</td>
                                        <td class="border-dark text-center text_table"></td>
                                        <td class="border-dark text-center text_table" style="display: none;">${mention_fail}${sex}</td>
                                        `;
            table_result.innerHTML += n;
            show_hearder_result.innerHTML = h;
        })


    }
}
