function submitData(name, email){

  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };



  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      console.log(json)
      document.body.append(json.id)
    }).catch((err) => {
      alert("Bad things! Ragnarők!");
    console.log(err.message);
    document.body.append(err.message)
    })
}
