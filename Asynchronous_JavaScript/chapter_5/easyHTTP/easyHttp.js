function easyHttp() {
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ', `Error: ${self.http.status}`);
        }
    }
    
    this.http.send();
}

easyHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json');
    let self = this;
    this.http.onload = function() {
        if(self.http.status == 201) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ', `${self.http.status}`);
        }
    }
    
    this.http.send(JSON.stringify(data));
};

easyHttp.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('content-type', 'application/json');
    let self = this;
    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, self.http.responseText);
        }
        else {
            callback('Error: ', `${self.http.status}`);
        }
    }
    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    this.http.setRequestHeader('content-type', 'application/json');
    let self = this;

    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, 'Post Deleted');
        }
        else {
            callback('Error: ', `${self.http.status}`);
        }
    }

    this.http.send();
}