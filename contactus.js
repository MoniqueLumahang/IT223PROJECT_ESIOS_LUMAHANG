// document.addEventListener('DOMContentLoaded', function() {
//   // Get the necessary DOM elements
//   const submitBtn = document.querySelector('.submit-btn');
//   const responseContainer = document.querySelector('.response');

//   // Check if the necessary elements are found in the DOM
//   if (submitBtn && responseContainer) {
//     // Add event listener to the submit button
//     submitBtn.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent form submission

//       // Get the user's name from the input field
//       const fullNameInput = document.querySelector('.fullname');
//       const userName = fullNameInput.value;

//       // Update the response container with a personalized message
//       responseContainer.innerHTML = `
//         <p>Thank you, ${userName}, for reaching out to us!</p>
//         <p>
//         <br>
//           Dear ${userName},
//           <br>
//           Thank you for contacting M&L Furnishings! We appreciate your interest and are here to address any questions or concerns you may have about our furniture products. Our dedicated team is committed to providing exceptional service and helping you make informed decisions. Please share your specific inquiries, and we'll promptly assist you.
//           <br>
//           <br>
//           Warm regards,
//           <br>
//           M&L Furnishings
//         </p>
//       `;

//       // Show the response container
//       responseContainer.style.display = 'block';

//       // Reset the form
//       fullNameInput.value = '';
//     });
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
  // Get the necessary DOM elements
  const submitBtn = document.querySelector('.submit-btn');
  const responseContainer = document.querySelector('.response');

  // Add event listener to the submit button
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's name from the input field
    const fullNameInput = document.querySelector('.fullname');
    const userName = fullNameInput.value.trim(); // Remove leading/trailing whitespace

    // Check if a name has been entered
    if (userName !== '') {
      // Update the response container with a personalized message
      responseContainer.innerHTML = `
        <p>Thank you, ${userName}, for reaching out to us!</p>
        <p>
        <br>
          Dear ${userName},
          Thank you for contacting M&L Furnishings! We appreciate your interest and are here to address any questions or concerns you may have about our furniture products. Our dedicated team is committed to providing exceptional service and helping you make informed decisions. Please share your specific inquiries, and we'll promptly assist you.
          <br>
          <br>
          Warm regards,
          <br>
          M&L Furnishings
        </p>
      `;

      // Show the response container
      responseContainer.style.display = 'block';

      // Reset the form
      fullNameInput.value = '';
    }
  });
});
