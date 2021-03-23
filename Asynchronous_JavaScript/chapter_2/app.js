const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

const output = document.querySelector("#output");

// load listeners
loadListener();

function loadListener() {
    button1.addEventListener('click', loadSingleCustomer);
    button2.addEventListener('click', loadMultipleCustomer);
}

function loadSingleCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    
    xhr.onload = function() {
        if(this.status === 200) {
            const customer = JSON.parse(this.responseText);
            document.querySelector("#single").appendChild(createRow(customer));
        }
    }
    
    xhr.send();
}

function loadMultipleCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
        let customers = JSON.parse(this.responseText);
        for(let X in customers) {
            document.querySelector("#multi").appendChild(createRow(customers[X]));
        }
    }
    xhr.send();
}

function createRow(customer) {
    const id = customer.id;
    const name = customer.name;

    let row = document.createElement("tr");
    row.innerHTML = 
    `
        <td>${id}</td>
        <td>${name}</td>
    `;
    return row;
}