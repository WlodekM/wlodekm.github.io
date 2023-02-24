function getp(url){
    let result = ""
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
     result = (template);
    })
    .catch(function (response) {
        // "Not Found"
     result = (response.statusText);
    });
    return(result)
}
function openp(url){document.write(getp(url))}
console.log(getp('https://wlodekm.github.io/98/program.txt'))