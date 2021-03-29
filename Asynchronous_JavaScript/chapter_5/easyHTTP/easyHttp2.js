/**
 * 
 * EasyHttp Library
 * 
 * @version 2.0.0
 */

 class EasyHttp {
     get(url) {
         return new Promise((resolve, reject) => {
                fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(response) {
                    resolve(response);
                })
                .catch(function(err) {
                    reject(err);
                })
         });

     }

     post(url, data) {
        return new Promise((resolve, reject) =>  {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) =>  {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => resolve('user deleted'))
                .catch(err => reject(err));
        })
    }
 }