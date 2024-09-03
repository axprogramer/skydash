const englishTableContainer = document.getElementById('englishTableContainer');
const peTableContainer = document.getElementById('peTableContainer');

const classSelect = document.getElementById('classSelect');
classSelect.addEventListener('change',()=>{
    var d = classSelect.value;
})
function createEnglishTable(className) {
    // Clear table container
    englishTableContainer.innerHTML = '';

    // Create table
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Headers
    const headerRow = document.createElement('tr');
    const headers = ['Student Name', 'English Score'];
    for (const header of headers) {
        const headerCell = document.createElement('th');
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    }
    tableBody.appendChild(headerRow);

    // Sample student data (replace with your actual data)
    const students = [
        { name: 'John Doe', score: 85 },
        { name: 'Jane Smith', score: 90 },
        // ...more students
    ];

    // Add student rows
    for (const student of students) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        const scoreCell = document.createElement('td');
        const scoreInput = document.createElement('input');
        scoreInput.type = 'number';
        scoreInput.min = 0;
        scoreInput.max = 100;
        scoreInput.value = student.score || ''; // Set initial value if available

        // Input validation (optional)
        scoreInput.addEventListener('input', () => {
            const newValue = Number(scoreInput.value);
            if (isNaN(newValue) || newValue < 0 || newValue > 100) {
                scoreInput.classList.add('error');
                scoreInput.title = 'Please enter a valid score between 0 and 100.';
            } else {
                scoreInput.classList.remove('error');
                scoreInput.title = '';
            }
        });

        scoreCell.appendChild(scoreInput);
        row.appendChild(scoreCell);

        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);

    // Add table to container
    englishTableContainer.appendChild(table);
}
createEnglishTable();
function createPETable(className) {
    // Clear table container
    peTableContainer.innerHTML = '';
    var className = '5A';
    if (className === '6A') {
        // Create table
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');

        // Headers
        const headerRow = document.createElement('tr');
        const headers = ['Student Name', 'PE Score'];
        for (const header of headers) {
            const headerCell = document.createElement('th');
            headerCell.textContent = header;
            headerRow.appendChild(headerCell);
        }
        tableBody.appendChild(headerRow);

        // Sample student data (replace with your actual data)
        const students = [
            { name: 'Sok', score: 57 },
            { name: 'Nana', score: 87 },
            { name: 'Smey', score: 99 },
            // ...more students
        ];

        // Add student rows
        for (const student of students) {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = student.name;
            row.appendChild(nameCell);

            const scoreCell = document.createElement('td');
            const scoreInput = document.createElement('input');
            scoreInput.type = 'number';
            scoreInput.min = 0;
            scoreInput.max = 100;
            scoreInput.value = student.score || ''; // Set initial value if available

            // Input validation (optional)
            scoreInput.addEventListener('input', () => {
                const newValue = Number(scoreInput.value);
                if (isNaN(newValue) || newValue < 0 || newValue > 100) {
                    scoreInput.classList.add('error');
                    scoreInput.title = 'Please enter a valid score between 0 and 100.';
                } else {
                    scoreInput.classList.remove('error');
                    scoreInput.title = '';
                }
            });

            scoreCell.appendChild(scoreInput);
            row.appendChild(scoreCell);

            tableBody.appendChild(row);
        }

        table.appendChild(tableBody);
        peTableContainer.appendChild(table);
        englishTableContainer.classList.add('hidden');
    } else {
        // Hide PE table if not 6A
        peTableContainer.classList.add('hidden');
    }
}
createPETable();
// Initially create tables for 
//T-A (5A/5B) show input data only 5A/5B

function extract6APEPart(inputString) {
    if (!inputString || inputString.length !== 4) {
        return { error: "Invalid input. Please provide a 4-character string like '6APE'." };
    }

    const extractedValues = {};

    // Check if the first two characters are "6A"
    if (inputString.substring(0, 2) === inputString) {
        extractedValues.class = inputString;

        // Check if the last two characters are "PE"
        if (inputString.substring(2, 4) === "PE") {
            extractedValues.subject = "PE";
        } else {
            extractedValues.error = "Invalid subject part. Expected 'PE' after '6A'."
        }
    } else {
        extractedValues.error = "Invalid class part. Expected '6A' at the beginning."
    }

    return extractedValues;
}

// Example usage:
const inputString = "5APE";
const extractedValues = extract6APEPart(inputString);

if (extractedValues.error) {
    console.error(extractedValues.error);
} else {
    console.log(`Class: ${extractedValues.class}`);
    console.log(`Subject: ${extractedValues.subject}`); // Output: Subject: PE
}
