
function generateID() {
    const randomID = 'ID-' + Math.floor(Math.random() * 10000);
    let ids = JSON.parse(localStorage.getItem('ids')) || [];
    ids.push(randomID);
    localStorage.setItem('ids', JSON.stringify(ids));
    alert('Generated ID: ' + randomID);
}

function checkID() {
    const inputID = document.getElementById('inputID').value;
    let ids = JSON.parse(localStorage.getItem('ids')) || [];
    const index = ids.indexOf(inputID);
    if (index !== -1) {
        document.getElementById('result').innerText = `ID exists: key-ID: ${inputID}, value-index: ${index}`;
    } else {
        document.getElementById('result').innerText = 'ID does not exist';
    }
}
