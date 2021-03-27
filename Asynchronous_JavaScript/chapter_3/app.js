const button = document.querySelector("#get-jokes");
const number = document.querySelector("#number");
const ul = document.querySelector(".jokes");
const URL = 'http://api.icndb.com/jokes/random/';

// load Listeners
loadListers();

function loadListers() {
    button.addEventListener('click', getJokes);
}

function getJokes(e) {
    let num = number.value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${URL+num}`,true);
    
    xhr.onload = function() {
        if(this.status === 200) {
            let response = JSON.parse(this.response);
            let val = response.value;
            ul.textContent = '';
/*            
            for(let X in val) {
                ul.innerHTML += 
                `
                    <li>${val[X].joke}</li>
                `;
            }
*/
/*           
            val.forEach(function(element) {
                ul.innerHTML += 
                `
                    <li>${element.joke}</li>
                `;
            });
*/            
            response.value.forEach(element => {
                ul.innerHTML += 
                `
                    <li>${element.joke}</li>
                `;
            });
        }
    }

    xhr.send();
    e.preventDefault();
}