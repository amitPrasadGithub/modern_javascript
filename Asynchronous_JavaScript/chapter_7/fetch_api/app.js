const get_text = document.querySelector("#get-text");
const get_json = document.querySelector("#get-json");
const get_api_data = document.querySelector("#get-api-data");
const output_div = document.querySelector("#output");

loadListner();

function loadListner() {
    get_text.addEventListener('click', getText);
    get_json.addEventListener('click', getJSON);
    get_api_data.addEventListener('click', getAPIData);
}

function getText() {
    fetch('text.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(response) {
            document.querySelector("#output").textContent = response;
        });
}
function getJSON() {
    fetch('json.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let output = '';
            response.forEach(element => {
                output += `<li>${element.name}</li>`;
            });
            output_div.innerHTML = output;
        })
}

function getAPIData() {
    fetch('https://api.github.com/users')
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(response) {
            let output = '';
            response.forEach(element => {
                output += `<li>${element.login}</li>`;
            });
            output_div.innerHTML = output;
        })
}
