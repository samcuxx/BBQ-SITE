document.getElementById("Email-collector").addEventListener("submit",event =>{
  event.preventDefault
  let formData = new FormData(event.target)

  const userFirstName = formData.get("first-name")
  const userEmailAddress = formData.get("email-address")

  console.log(userFirstName)


  let updatedHtmlContent = `
  <h2>Congratulations, ${userFirstName}</h2>
   
  <p>You are on your way to becoming a BBQ Master
  </p>
  
  <p class="fine-print">We'll never share your information without your permission</p>
  
  <p>Your Email is ${userEmailAddress}
  </p>

  `

let mainContent =  document.getElementById("main-content")
mainContent.innerHTML = updatedHtmlContent

  
})