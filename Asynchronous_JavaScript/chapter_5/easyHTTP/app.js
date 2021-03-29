// const http = new easyHttp();
// // get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//     console.log(response);
// });


let data = {
    title: 'title one',
    body: 'body one'
};
// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response) {
//     console.log(response);
// });

// update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response) {
//     console.log(response);
// })

// delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
//     console.log(response);
// });

/**
 * EasyHttp2.js
 */
let data2 = {
    name: 'amit',
    username: 'amit',
    email: 'amit.prasad'
}
const http2 = new EasyHttp();
// http2.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
//     response.forEach(element => {
//         console.log(element.name);
//     })
// });

// POST request
// http2.post('https://jsonplaceholder.typicode.com/users', data2)
//     .then(response => console.log(response.email));
//     .catch(err => console.log(err));

// PUT request
// http2.post('https://jsonplaceholder.typicode.com/users', data2)
//     .then(response => console.log(response.email))
//     .catch(err => console.log(err));
    
// DELETE request
// http2.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

/**
 * EasyHttp3.js
 */

 const http3 = new EasyHttp();
 http3.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => {
            response.forEach(element => {
                console.log(element.name);
            })
        })
        .catch(err => console.log(err));

const data3 = {
    name: 'amit',
    username: 'amitprasad',
    email: 'amit.prasad@gmail.com'
}        
http3.post('https://jsonplaceholder.typicode.com/users/', data3)
        .then(response => console.log(response.email))
        .catch(err => {
            console.log(err);
        })

http3.post('https://jsonplaceholder.typicode.com/users/', data3)
        .then(response => console.log(response.email))
        .catch(err => {
            console.log(err);
        })        
http3.delete('https://jsonplaceholder.typicode.com/users/1')
        .then(response => console.log(response))
        .catch(err => console.log(err));