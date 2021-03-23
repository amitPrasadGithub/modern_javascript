const button = document.querySelector("#button");
const output = document.querySelector("#output");

var check = 0;
// load event listener
loadEventListener();

function loadEventListener() {
    button.addEventListener('click', function(e) {
        loadData(e);
    });
}

function loadData(e) {
    const xhr = new XMLHttpRequest();

    console.log('Called...');

    // OPEN
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function() {
        console.log(this.readyState);
        if(this.status == 200) {
            output.textContent = this.responseText;
        }
    }
    
/*    
    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        check++;
        if(this.status === 200 && this.readyState == 4) {
            console.log(this.responseText);
        }
    }
*/    
    xhr.send();
}