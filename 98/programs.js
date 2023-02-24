function getp(url){
fetch(url)
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        return(template);
    })
    .catch(function (response) {
        // "Not Found"
        return(response.statusText);
    });
}
function openp(url){document.write(getp(url))}
console.log(getp('https://wlodekm.github.io/98/program.txt'))