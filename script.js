document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-menu ul");
    const dropdown = document.createElement("li");
    dropdown.innerHTML = '<a href="#">More</a><ul><li><a href="#">Link 1</a></li><li><a href="#">Link 2</a></li></ul>';
    navMenu.appendChild(dropdown);

    dropdown.addEventListener("click", function(event) {
        event.preventDefault();
        dropdown.querySelector("ul").classList.toggle("show");
    });
});
 
 
updateImages();
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    
    if (!name || !email || !age) {
      alert('Please fill in all required fields.');
      return;
    }
    
    const ageValue = parseInt(age, 10);
    if (isNaN(ageValue) || ageValue <= 0) {
      alert('Please enter a valid age.');
      return;
    }
    
  
    
    
    document.getElementById('registrationForm').submit();
  }
  function validateAppointmentForm(event) {
    event.preventDefault();  
    
 
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const appointmentDate = document.getElementById('appointmentDate').value.trim();
    
    if (fullName === '' || email === '' || phone === '' || appointmentDate === '') {
        alert('Please fill out all required fields.');
        return;
    }
     
    alert('Form submitted successfully!');
    document.getElementById('appointmentForm').reset();  
}
 
