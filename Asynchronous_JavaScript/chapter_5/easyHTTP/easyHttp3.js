/**
 * 
 * EasyHttp Library
 * 
 * @version 3.0.0
 */

 class EasyHttp {
     async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
     }

     async post(url, data) {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
         });

         return await response.json();
     }

     async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
         });

         return await response.json();
     }

     async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
         });

         return await response.json();
     }
 }