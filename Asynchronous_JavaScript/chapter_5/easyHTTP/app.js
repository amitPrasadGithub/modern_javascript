const http = new easyHttp();
// get posts
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
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    console.log(response);
});