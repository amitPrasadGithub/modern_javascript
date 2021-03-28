const posts = [
    {title: 'post one', value: 'post one value'},
    {title: 'post two', value: 'post two value'}
];

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            posts.push(post);
            const error = true;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
    
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(element => {
            output += 
                `
                    <li>${element.title}</li>
                `;
                document.body.innerHTML = output;
        });
    }, 1000);
}

createPost({title: 'post three', value: 'post three value'})
    .then(getPost)
    .catch(function(err) {
        console.log(err);
    })