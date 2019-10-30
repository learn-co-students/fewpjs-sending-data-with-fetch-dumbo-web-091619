let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

function submitData(userName, userEmail){
  let formData2 = {
    name: `${userName}`,
    email: `${userEmail}`
  };

  let configObj2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData2)
  };

  return fetch("http://localhost:3000/users", configObj2)
    .then(function(response) {
      return response.json();
    })
    .then(function(object){
      document.querySelector('body').append(`${object.id}`)
    })
    .catch(function(error) {
      document.querySelector('body').append(error.message)
    })
};

fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }
);
