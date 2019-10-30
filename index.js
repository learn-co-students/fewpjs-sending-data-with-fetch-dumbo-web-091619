function submitData (username, useremail) { // eslint-disable-line no-unused-vars
  const data = {
    name: username,
    email: useremail
  }
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json' // eslint-disable-line 
    },
    body: JSON.stringify(data)
  }
  return fetch('http://localhost:3000/users', config) // eslint-disable-line no-undef
    .then(response => response.json())
    .then(object => document.body.append(`${object.id} `))
    .catch(() => document.body.append('Unauthorized Access'))
}
