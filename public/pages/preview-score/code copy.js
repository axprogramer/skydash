export function primarys1r(datas) {
    if (dbLevel === 'បឋមសិក្សា') {
        if (all_grade.includes(dbGrade)) {
            if (dbMonth == '1st Semester Result') {
                if (primary_g_p1.includes(dbGrade)) {

                    datas.forEach((d) => {

                        var id = d.val().id;
                        var user_grade = d.val().user_grade;
                        var gender = d.val().gender;
                        var average = d.val().averagaverage;
                        var month4s1 = d.val().month4s1;
                        var rank = d.val().rank_m1semester;

                        let total = parseFloat(average) + Pass(month4s1)
                        let get_average = total / 2
                        get_average = get_average.toFixed(2)
                        if (!get_average) { get_average = "00" }
                        let noSp = id.replace(/\s+/g, "");

                        if (!average) { average = 0 };
                        if (!month4s1) { month4s1 = 0 };

                        student_rank.push({
                            id,
                            user_grade,
                            average,
                            month4s1,
                            gender,
                            total,
                            get_average,
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
                                        <th class="border-dark">គោត្តនាម -នាមខ្លួន</th>
                                        <th class="border-dark">ភេទ</th>
                                        <th class="border-dark">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark">និទ្ទេស</th>
                                        
        
                                        `
                            let n = `
                                        <td class="border-dark text-center">${N0}</td>
                                        <td class="border-dark">${id}</td>
                                        <td class="border-dark text-center"">${gender}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-average="${N0}" id="${noSp}average">${average}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-month4s1="${N0}" id="${noSp}month4s1">${month4s1}</td>
                                        <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-get_average="${N0}" id="${noSp}get_average">${get_average}</td>
                                        <td class="border-dark text-center" style="color:red;">${rank}</td>
                                        <td class="border-dark text-center" style="color:red;">${mention}</td>
                                        `;
                            //Update data
                            setTimeout(() => {
                                document.getElementById(`${noSp}average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            average: d,
                                        });
                                })
                                document.getElementById(`${noSp}month4s1`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}month4s1`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            month4s1: d,
                                        });
                                })
                                document.getElementById(`${noSp}get_average`).addEventListener('input', () => {
                                    var d = document.getElementById(`${noSp}get_average`).innerHTML;
                                    firebase
                                        .database()
                                        .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                                        .update({
                                            get_average: d,
                                        });
                                })

                            }, 200);
                            //Key select
                            table.addEventListener("keydown", (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    const currentCell = event.target;
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.average);
                                    const nextCell = document.querySelector(`[data-average="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.month4s1);
                                    const nextCell = document.querySelector(`[data-month4s1="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.month4s1);
                                    const nextCell = document.querySelector(`[data-month4s1="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.month4s1);
                                    const nextCell = document.querySelector(`[data-month4s1="${currentIndex - 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex + 1}"]`);
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
                                    const currentIndex = parseInt(currentCell.dataset.get_average);
                                    const nextCell = document.querySelector(`[data-get_average="${currentIndex - 1}"]`);
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
                        if (a.get_average > b.get_average) return -1;
                        if (a.get_average < b.get_average) return 1;
                        return 0;
                    });

                    for (let i = 0; i < student_rank.length; i++) {
                        let avg = student_rank[i].get_average;


                        let studentsWithRank = student_rank.filter(
                            (student) => student.get_average === avg

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
                        var average = student.average;
                        var month4s1 = student.month4s1;
                        var get_average = student.get_average;
                        var rank = student.Rank;

                        if (!average) {
                            average = 0
                        }
                        if (!month4s1) {
                            month4s1 = 0
                        }
                        if (!get_average) {
                            get_average = 0
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
                        if (gender == 'ស') { sex = 'F' };
                        if (gender == 'ប') { sex = 'M' };

                        let new_gender = '';
                        if (gender == 'ស') { new_gender = 'ស' };
                        if (gender == 'ប') { new_gender = 'ប' };

                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                averagaverage: average,
                                rank_m1semester: rank,
                            });
                        let h = `
                                        <th class="border-dark text_table">ល.រ</th>
                                        <th class="border-dark text_table" style="width:15vh;">គោត្តនាម-នាម</th>
                                        <th class="border-dark text_table">ភេទ</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រឡងឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគខែប្រចាំឆមាស</th>
                                        <th class="border-dark text_table">មធ្យមភាគប្រចាំឆមាស</th>
                                        <th class="border-dark text_table" style="width:8vh;">ចំណាត់ថ្នាក់</th>
                                        <th class="border-dark text_table">និទ្ទេស</th>
                                        <th class="border-dark text_table">ផ្សេងៗ</th>
        
                                        `;
                        let n = `
                                        <td class="border-dark text-center text_table">${num}</td>
                                        <td class="border-dark text-start text_table" style="width:15vh;">${id}</td>
                                        <td class="border-dark text-center text_table">${new_gender}</td>
                                        <td class="border-dark text-center text_table fw-bold">${average}</td>
                                        <td class="border-dark text-center text_table fw-bold">${month4s1}</td>
                                        <td class="border-dark text-center text_table fw-bold">${get_average}</td>
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


        }
    }

}
