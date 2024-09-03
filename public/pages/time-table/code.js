if (dbMonth == 'December') {
    if (primary_g_p3.includes(dbGrade)) {

        datas.forEach((d) => {

            var id = d.val().id;
            var user_grade = d.val().user_grade;
            var gender = d.val().gender;
            var average = d.val().average_mdec;
            var rank = d.val().rank_mdec;

            var k_mdec = d.val().k_mdec;
            var mo_mdec = d.val().mo_mdec;
            var hist_mdec = d.val().hist_mdec;
            var geor_mdec = d.val().geor_mdec;
            var math_mdec = d.val().math_mdec;
            var phy_mdec = d.val().phy_mdec;
            var chem_mdec = d.val().chem_mdec;
            var bio_mdec = d.val().bio_mdec;
            var earth_mdec = d.val().earth_mdec;
            var e_mdec = d.val().e_mdec;
            var ict_mdec = d.val().ict_mdec;
            var hom_mdec = d.val().hom_mdec;
            var pe_mdec = d.val().pe_mdec;


            let noSp = id.replace(/\s+/g, "");

            if (!k_mdec) { k_mdec = 0 };
            if (!mo_mdec) { mo_mdec = 0 };
            if (!hist_mdec) { hist_mdec = 0 };
            if (!geor_mdec) { geor_mdec = 0 };
            if (!math_mdec) { math_mdec = 0 };
            if (!phy_mdec) { phy_mdec = 0 };
            if (!chem_mdec) { chem_mdec = 0 };
            if (!bio_mdec) { bio_mdec = 0 };
            if (!earth_mdec) { earth_mdec = 0 };
            if (!e_mdec) { e_mdec = 0 };
            if (!ict_mdec) { ict_mdec = 0 };
            if (!hom_mdec) { hom_mdec = 0 };
            if (!pe_mdec) { pe_mdec = 0 };

            //Total all score
            var total_all_score =
                parseFloat(k_mdec) +
                parseFloat(mo_mdec) +
                parseFloat(hist_mdec) +
                parseFloat(geor_mdec) +
                parseFloat(math_mdec) +
                parseFloat(phy_mdec) +
                parseFloat(chem_mdec) +
                parseFloat(bio_mdec) +
                parseFloat(earth_mdec) +
                parseFloat(e_mdec) +
                parseFloat(ict_mdec) +
                parseFloat(hom_mdec) +
                parseFloat(pe_mdec);

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
                k_mdec,
                mo_mdec,
                hist_mdec,
                geor_mdec,
                math_mdec,
                phy_mdec,
                chem_mdec,
                bio_mdec,
                earth_mdec,
                e_mdec,
                ict_mdec,
                hom_mdec,
                pe_mdec,

            })
            setTimeout(() => {
                N0++;

                //Mention average
                let mention = '';
                let session = '';
                var my = parseFloat(average);
                if (my <= 24.99) {
                    mention = "ខ្សោយ"
                } else if (my <= 25) {
                    mention = "មធ្យម"
                } else if (my <= 33) {
                    mention = "ល្អបង្គួរ";
                } else if (my <= 40) {
                    mention = "ល្អ";
                }

                if (my >= 25) {
                    session = "ជាប់"
                } else {
                    session = "ធ្លាក់"
                }
                let h = `
                    <th class="border-dark">ល.រ</th>
                    <th class="border-dark">ឈ្មោះ</th>
                    <th class="border-dark">ភេទ</th>
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
                                        `
                let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mdec="${N0}" id="${noSp}k_mdec">${k_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mdec="${N0}" id="${noSp}mo_mdec">${mo_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mdec="${N0}" id="${noSp}hist_mdec">${hist_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mdec="${N0}" id="${noSp}geor_mdec">${geor_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mdec="${N0}" id="${noSp}math_mdec">${math_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mdec="${N0}" id="${noSp}phy_mdec">${phy_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mdec="${N0}" id="${noSp}chem_mdec">${chem_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mdec="${N0}" id="${noSp}bio_mdec">${bio_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mdec="${N0}" id="${noSp}earth_mdec">${earth_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mdec="${N0}" id="${noSp}e_mdec">${e_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mdec="${N0}" id="${noSp}ict_mdec">${ict_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mdec="${N0}" id="${noSp}hom_mdec">${hom_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mdec="${N0}" id="${noSp}pe_mdec">${pe_mdec}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                    <td class="border-dark text-center" style="color:blue;">${session}</td>
                                        `;
                //Update data
                setTimeout(() => {
                    document.getElementById(`${noSp}k_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}mo_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}mo_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                mo_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}hist_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}hist_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                hist_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}geor_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}geor_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                geor_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}math_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}phy_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}phy_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                phy_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}chem_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}chem_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                chem_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}bio_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}bio_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                bio_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}earth_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}earth_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                earth_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}e_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}ict_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}ict_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                ict_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}hom_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}hom_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                hom_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}pe_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}pe_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                pe_mdec: d,
                            });
                    })

                }, 200);
                //Key select
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_mdec);
                        const nextCell = document.querySelector(`[data-k_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.k_mdec);
                        const nextCell = document.querySelector(`[data-k_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.k_mdec);
                        const nextCell = document.querySelector(`[data-k_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                        const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                        const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                        const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                        const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                        const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                        const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                        const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                        const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                        const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.math_mdec);
                        const nextCell = document.querySelector(`[data-math_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.math_mdec);
                        const nextCell = document.querySelector(`[data-math_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.math_mdec);
                        const nextCell = document.querySelector(`[data-math_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                        const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                        const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                        const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                        const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                        const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                        const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                        const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                        const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                        const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                        const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                        const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                        const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.e_mdec);
                        const nextCell = document.querySelector(`[data-e_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.e_mdec);
                        const nextCell = document.querySelector(`[data-e_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.e_mdec);
                        const nextCell = document.querySelector(`[data-e_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                        const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                        const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                        const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                        const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                        const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                        const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                        const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                        const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                        const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex - 1}"]`);
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
            if (my <= 24.99) {
                mention = "ខ្សោយ"
            } else if (my <= 25) {
                mention = "មធ្យម"
            } else if (my <= 33) {
                mention = "ល្អបង្គួរ";
            } else if (my <= 40) {
                mention = "ល្អ";
            }

            let mention_fail = '';
            var my = parseFloat(average);
            if (my <= 24.99) {
                mention_fail = "Poor"
            } else if (my <= 25) {
                mention_fail = "Average"
            } else if (my <= 33) {
                mention_fail = "Fairly Good";
            } else if (my <= 40) {
                mention_fail = "Good";
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
                    average_mdec: average,
                    rank_mdec: rank,
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
            var average = d.val().average_mdec;
            var rank = d.val().rank_mdec;

            var k_mdec = d.val().k_mdec;
            var mo_mdec = d.val().mo_mdec;
            var hist_mdec = d.val().hist_mdec;
            var geor_mdec = d.val().geor_mdec;
            var math_mdec = d.val().math_mdec;
            var phy_mdec = d.val().phy_mdec;
            var chem_mdec = d.val().chem_mdec;
            var bio_mdec = d.val().bio_mdec;
            var earth_mdec = d.val().earth_mdec;
            var e_mdec = d.val().e_mdec;
            var ict_mdec = d.val().ict_mdec;
            var hom_mdec = d.val().hom_mdec;
            var pe_mdec = d.val().pe_mdec;


            let noSp = id.replace(/\s+/g, "");

            if (!k_mdec) { k_mdec = 0 };
            if (!mo_mdec) { mo_mdec = 0 };
            if (!hist_mdec) { hist_mdec = 0 };
            if (!geor_mdec) { geor_mdec = 0 };
            if (!math_mdec) { math_mdec = 0 };
            if (!phy_mdec) { phy_mdec = 0 };
            if (!chem_mdec) { chem_mdec = 0 };
            if (!bio_mdec) { bio_mdec = 0 };
            if (!earth_mdec) { earth_mdec = 0 };
            if (!e_mdec) { e_mdec = 0 };
            if (!ict_mdec) { ict_mdec = 0 };
            if (!hom_mdec) { hom_mdec = 0 };
            if (!pe_mdec) { pe_mdec = 0 };

            //Total all score
            var total_all_score =
                parseFloat(k_mdec) +
                parseFloat(mo_mdec) +
                parseFloat(hist_mdec) +
                parseFloat(geor_mdec) +
                parseFloat(math_mdec) +
                parseFloat(phy_mdec) +
                parseFloat(chem_mdec) +
                parseFloat(bio_mdec) +
                parseFloat(earth_mdec) +
                parseFloat(e_mdec) +
                parseFloat(ict_mdec) +
                parseFloat(hom_mdec) +
                parseFloat(pe_mdec);
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
                k_mdec,
                mo_mdec,
                hist_mdec,
                geor_mdec,
                math_mdec,
                phy_mdec,
                chem_mdec,
                bio_mdec,
                earth_mdec,
                e_mdec,
                ict_mdec,
                hom_mdec,
                pe_mdec,
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
                    <th class="border-dark">ភាសាខ្មែរ</th>
                    <th class="border-dark">សីលធម៌</th>
                    <th class="border-dark">ប្រវត្តិវិទ្យា</th>
                    <th class="border-dark">ភូមិវិទ្យា</th>
                    <th class="border-dark">គណិតវិទ្យា</th>
                    <th class="border-dark">រូបវិទ្យា</th>
                    <th class="border-dark">គីមីវិទ្យា</th>
                    <th class="border-dark">ជិវវិទ្យា</th>
                    <th class="border-dark">ផែនដីវិទ្យា</th>
                    <th class="border-dark">អង់គ្លេស</th>
                    <th class="border-dark">កុំព្យូទ័រ</th>
                    <th class="border-dark">គេហវិទ្យា</th>
                    <th class="border-dark">កីឡា</th>
                    <th class="border-dark">ពិន្ទុសរុប</th>
                    <th class="border-dark">មធ្យមភាគ</th>
                    <th class="border-dark">ចំណាត់ថ្នាក់</th>
                    <th class="border-dark">និទ្ទេស</th>
                    <th class="border-dark">លទ្ធផល</th>
        
                                        `
                let n = `
                    <td class="border-dark text-center">${N0}</td>
                    <td class="border-dark">${id}</td>
                    <td class="border-dark text-center"">${gender}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-k_mdec="${N0}" id="${noSp}k_mdec">${k_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-mo_mdec="${N0}" id="${noSp}mo_mdec">${mo_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hist_mdec="${N0}" id="${noSp}hist_mdec">${hist_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-geor_mdec="${N0}" id="${noSp}geor_mdec">${geor_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-math_mdec="${N0}" id="${noSp}math_mdec">${math_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-phy_mdec="${N0}" id="${noSp}phy_mdec">${phy_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-chem_mdec="${N0}" id="${noSp}chem_mdec">${chem_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-bio_mdec="${N0}" id="${noSp}bio_mdec">${bio_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-earth_mdec="${N0}" id="${noSp}earth_mdec">${earth_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-e_mdec="${N0}" id="${noSp}e_mdec">${e_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-ict_mdec="${N0}" id="${noSp}ict_mdec">${ict_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-hom_mdec="${N0}" id="${noSp}hom_mdec">${hom_mdec}</td>
                    <td class="border-dark text-center" contenteditable onclick="selectText(this)" data-pe_mdec="${N0}" id="${noSp}pe_mdec">${pe_mdec}</td>
                    <td class="border-dark text-center fw-bold">${total_all_score}</td>
                    <td class="border-dark text-center fw-bold">${average}</td>
                    <td class="border-dark text-center" style="color:red;">${rank}</td>
                    <td class="border-dark text-center" style="color:red;">${mention}</td>
                `;
                //Update data
                setTimeout(() => {
                    document.getElementById(`${noSp}e_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}pe_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}pe_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                pe_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}e_h_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}e_h_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                e_h_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}soc_h_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}soc_h_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                soc_h_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}sci_h_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}sci_h_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                sci_h_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}k_homework_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_homework_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_homework_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}sci_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}sci_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                sci_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}math_h_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_h_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_h_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}math_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}math_speak_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}math_speak_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                math_speak_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}k_grammar_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_grammar_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_grammar_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}k_writing_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_writing_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_writing_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}k_dictation_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_dictation_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_dictation_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}k_reading_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}k_reading_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                k_reading_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}geor_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}geor_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                geor_mdec: d,
                            });
                    })
                    document.getElementById(`${noSp}hist_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}hist_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                hist_mdec: d,
                            });
                    })

                    document.getElementById(`${noSp}moral_mdec`).addEventListener('input', () => {
                        var d = document.getElementById(`${noSp}moral_mdec`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${dbyear}/` + `${grade_en}/` + id)
                            .update({
                                moral_mdec: d,
                            });
                    })

                }, 200);
                //Key select
                table.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.k_mdec);
                        const nextCell = document.querySelector(`[data-k_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.k_mdec);
                        const nextCell = document.querySelector(`[data-k_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.k_mdec);
                        const nextCell = document.querySelector(`[data-k_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                        const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                        const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.mo_mdec);
                        const nextCell = document.querySelector(`[data-mo_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                        const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                        const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hist_mdec);
                        const nextCell = document.querySelector(`[data-hist_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                        const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                        const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.geor_mdec);
                        const nextCell = document.querySelector(`[data-geor_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.math_mdec);
                        const nextCell = document.querySelector(`[data-math_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.math_mdec);
                        const nextCell = document.querySelector(`[data-math_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.math_mdec);
                        const nextCell = document.querySelector(`[data-math_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                        const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                        const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.phy_mdec);
                        const nextCell = document.querySelector(`[data-phy_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                        const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                        const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.chem_mdec);
                        const nextCell = document.querySelector(`[data-chem_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                        const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                        const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.bio_mdec);
                        const nextCell = document.querySelector(`[data-bio_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                        const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                        const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.earth_mdec);
                        const nextCell = document.querySelector(`[data-earth_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.e_mdec);
                        const nextCell = document.querySelector(`[data-e_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.e_mdec);
                        const nextCell = document.querySelector(`[data-e_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.e_mdec);
                        const nextCell = document.querySelector(`[data-e_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                        const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                        const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.ict_mdec);
                        const nextCell = document.querySelector(`[data-ict_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                        const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                        const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.hom_mdec);
                        const nextCell = document.querySelector(`[data-hom_mdec="${currentIndex - 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                        const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                        const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex + 1}"]`);
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
                        const currentIndex = parseInt(currentCell.dataset.pe_mdec);
                        const nextCell = document.querySelector(`[data-pe_mdec="${currentIndex - 1}"]`);
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
            if (my <= 24.99) {
                mention = "ខ្សោយ"
            } else if (my <= 25) {
                mention = "មធ្យម"
            } else if (my <= 33) {
                mention = "ល្អបង្គួរ";
            } else if (my <= 40) {
                mention = "ល្អ";
            }

            let mention_fail = '';
            var my = parseFloat(average);
            if (my <= 24.99) {
                mention_fail = "Poor"
            } else if (my <= 25) {
                mention_fail = "Average"
            } else if (my <= 33) {
                mention_fail = "Fairly Good";
            } else if (my <= 40) {
                mention_fail = "Good";
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
                    average_mdec: average,
                    rank_mdec: rank,
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
