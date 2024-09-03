//ជីវៈវិទ្យា
if (sb == 'Bio') {
    firebase
        .database()
        .ref(`/SalaMOM/classes/` + `${user_login_year}/` + grade)
        .once('value', function (data) {
            data.forEach(function (d) {
                var id = d.val().id;
                var name = d.val().name;
                var bio_moct = d.val().bio_moct;
                if (!bio_moct) { bio_moct = 0 }
                var no_space = id.replace(/\s/g, "");
                N0++;
                let t = `
                                    <tr class="frezze">
                                    <td class="border-dark text-center">ល.រ</td>
                                    <td class="border-dark text-center">ឈ្មោះពេញ</td>
                                    <td class="border-dark text-center">${sub}</td>
                                    </tr>
                                    
                                    `;
                table.innerHTML = t;
                let e = `
                                    <td class='border-dark text-center'>${N0}</td>
                                    <td class='border-dark text-start'>${id}</td>
                                    <td class='border-dark text-center' id="${no_space}bio" contenteditable onclick="selectText(this)" data-bio_moct1="${N0}">${bio_moct}</td>
                                    `;
                tbody_data.innerHTML += e;
                const sleep = async (millisbionds) => {
                    await new Promise((resolve) => {
                        return setTimeout(resolve, millisbionds);
                    });
                    document.getElementById(`${no_space}bio`).addEventListener('input', () => {
                        var d = document.getElementById(`${no_space}bio`).innerHTML;
                        firebase
                            .database()
                            .ref(`SalaMOM/classes/` + `${user_login_year}/` + `${grade}/` + id)
                            .update({
                                bio_moct: d,
                            });
                    })

                    document.getElementById('showData').addEventListener("keydown", (event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            const currentCell = event.target;
                            const currentIndex = parseInt(currentCell.dataset.bio_moct1);
                            const nextCell = document.querySelector(`[data-bio_moct1="${currentIndex + 1}"]`);
                            const focusedCell = document.activeElement;
                            if (focusedCell && focusedCell.tagName === "TD") {
                                const text = focusedCell.textContent;
                                const range = document.createRange();
                                range.selectNodbiontents(focusedCell);
                                const selection = window.getSelection();
                                selection.removeAllRanges();
                                selection.addRange(range);
                            }
                            if (nextCell) {
                                nextCell.focus();
                                if (nextCell.textContent == 0) {
                                    nextCell.textContent = '';
                                }
                            }
                        }
                    });
                    document.getElementById('showData').addEventListener("keydown", (event) => {
                        if (event.key === "ArrowDown") {
                            event.preventDefault();
                            const currentCell = event.target;
                            const currentIndex = parseInt(currentCell.dataset.bio_moct1);
                            const nextCell = document.querySelector(`[data-bio_moct1="${currentIndex + 1}"]`);
                            const focusedCell = document.activeElement;
                            if (focusedCell && focusedCell.tagName === "TD") {
                                const text = focusedCell.textContent;
                                const range = document.createRange();
                                range.selectNodbiontents(focusedCell);
                                const selection = window.getSelection();
                                selection.removeAllRanges();
                                selection.addRange(range);
                            }
                            if (nextCell) {
                                nextCell.focus();
                                if (nextCell.textContent == 0) {
                                    nextCell.textContent = '';
                                }
                            }
                        }
                    });
                    document.getElementById('showData').addEventListener("keydown", (event) => {
                        if (event.key === "ArrowUp") {
                            event.preventDefault();
                            const currentCell = event.target;
                            const currentIndex = parseInt(currentCell.dataset.bio_moct1);
                            const nextCell = document.querySelector(`[data-bio_moct1="${currentIndex - 1}"]`);
                            const focusedCell = document.activeElement;
                            if (focusedCell && focusedCell.tagName === "TD") {
                                const text = focusedCell.textContent;
                                const range = document.createRange();
                                range.selectNodbiontents(focusedCell);
                                const selection = window.getSelection();
                                selection.removeAllRanges();
                                selection.addRange(range);
                            }
                            if (nextCell) {
                                nextCell.focus();
                                if (nextCell.textContent == 0) {
                                    nextCell.textContent = '';
                                }
                            }
                        }
                    });
                };
                sleep(1000);
            })
        })

}

eco_moct
eco_m2semester