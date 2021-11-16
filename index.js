// // Add your code here


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });

function submitData(userNameInput, userEmailInput){
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userNameInput,
            email: userEmailInput
        }),
      };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(user => document.body.innerHTML = user.id)
    .catch(error => document.body.innerHTML = error.message)
}




// document.querySelector('#users').appendChild(user.id)
