const http = new easyHttp();
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
    console.log(response);
});
