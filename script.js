// Add event listener to the document
document.addEventListener('click', function(event) {
  // Check if the clicked element is the navigation menu
  if (event.target.classList.contains('nav ul')) {
    // Hide the navigation menu
    event.target.classList.remove('show');
  }
});

//////////////////////////////////////////////////////////////////////
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//////////////////////////////////////////////////////////////////////
function openMenu() {
  const sidebar = document.querySelector('nav ul')
  sidebar.style.display = 'block'
}

function closeMenu() {
  const sidebar = document.querySelector('nav ul')
  sidebar.style.display = 'none'
}

//////////////////////////////////////////////////////////////////////
const buttons = document.querySelectorAll('button[data-target]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const element = document.getElementById(targetId);
    element.classList.toggle('show');
  });
});

// CONTACT FORM IN CONTACT US PAGE //
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form (this is simple validation, you may need more robust validation)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      // Display success message
      document.getElementById('form-message').innerText = `Thank you ${name} for your message!🎉`;
      
      // Optionally clear the form
      document.getElementById('contact-form').reset();
    } else {
      // Display error message (this should not be necessary due to required attribute, but for safety)
      document.getElementById('form-message').innerText = 'Please fill out all fields.';
    }
  });
});