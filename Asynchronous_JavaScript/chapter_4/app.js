const posts = [
    {title: 'post one', value: 'post one value'},
    {title: 'post two', value: 'post two value'}
];

function createPost(post, callback) {
    posts.push(post);
    setTimeout(function(){
        callback();
    }, 2000);
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

createPost({title: 'post three', value: 'post three value'}, getPost);