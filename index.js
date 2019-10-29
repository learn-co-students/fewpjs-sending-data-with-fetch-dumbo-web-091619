// Add your code here

const elem = document.createElement('div');
document.body.appendChild(elem);


function submitData(name, email){
    return fetch("http://localhost:3000/users", 
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
            })
        })
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            console.log(object)
            let textNode = document.createTextNode(object["id"])
            elem.appendChild(textNode)
        })
        .catch(function(error) {
            alert("Unauthorized Access");
            elem.append(error.message);
          });
}