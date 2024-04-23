document.addEventListener('DOMContentLoaded', function() {
  const adsContainer = document.getElementById('ads');

  // Sample advertisement data
  const advertisements = [
    { title: 'My advertisement 1', description: 'This is an example of a description ' },
    { title: 'Advertisement 2', description: 'This is the second advertisement.' },
    { title: 'Advertisement 3', description: 'This is the third advertisement.' }
  ];

  // Loop through the advertisement data and create HTML elements to display them
  advertisements.forEach(ad => {
    const adElement = document.createElement('div');
    adElement.classList.add('ad');
    adElement.innerHTML = `
      <h2>${ad.title}</h2>
      <p>${ad.description}</p>
    `;
    adsContainer.appendChild(adElement);
  });
});


//for call to action 

document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.getElementById('cta-button');

  ctaButton.addEventListener('click', function() {
    // Replace this with your desired action, such as opening a registration form
    alert('Sign up form will appear here!');
  });
});


//for user registration

document.addEventListener('DOMContentLoaded', function() {
  const signupLink = document.getElementById('signup-link');
  const registrationModal = document.getElementById('registration-modal');
  const closeButton = document.querySelector('.close');

  signupLink.addEventListener('click', function(event) {
    event.preventDefault();
    registrationModal.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    registrationModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == registrationModal) {
      registrationModal.style.display = 'none';
    }
  });
});


//for social sharing 




