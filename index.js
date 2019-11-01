// Add your code here
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle"
//     })
// })
// .then(function(response){
//   return response.json()
// })
// .then(function(object){
//   console.log(object)
// })
// .catch(function(error){
//   alert("Bad things! Ragnarők!");
//   console.log(error.message);
// })

function submitData(name, email){
  return fetch("http://localhost:3000/users",{
    method: "POST", 
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify( {
      name, 
      email
    } )
  })
  .then(r => r.json())
  .then((response) => {
    document.body.innerHTML = response["id"]
  })
  .catch(error => {
    document.body.innerHTML = error.message
  })
}