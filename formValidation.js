function toggleForm() {
    // Fill form from card
    document.querySelector('input[name="name"]').value = document.querySelector('.name').innerText;
    // Extract only the text (excluding icon and space)
    document.querySelector('input[name="designation"]').value = document.querySelector('.designation').childNodes[1].textContent.trim();
    document.querySelector('input[name="email"]').value = document.querySelector('.email').childNodes[1].textContent.trim();
    document.querySelector('input[name="location"]').value = document.querySelector('.location').childNodes[1].textContent.trim();

    document.querySelector('textarea[name="bio"]').value = document.querySelector('.bio').innerText;
    document.getElementById('profileImage').src = document.querySelector('.profile-photo').src;

    // Toggle visibility
    document.querySelector('.profile-card').style.display = 'none';
    document.getElementById('editForm').style.display = 'grid';
  }

function saveChanges() {
  const form = document.getElementById('editForm');

  if (!form.checkValidity()) {
    form.reportValidity(); // Show the built-in browser error messages
    return;
  }

  const name = form.querySelector('input[name="name"]').value;
  const designation = form.querySelector('input[name="designation"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const location = form.querySelector('input[name="location"]').value;
  const bio = form.querySelector('textarea[name="bio"]').value;
  const profileImage = document.getElementById('profileImage').src;

  // Update card values
  document.querySelector('.name').innerText = name;
  document.querySelector('.designation').innerHTML = `<i class="fas fa-briefcase"></i>${designation}`;
  document.querySelector('.email').innerHTML = `<i class="fas fa-envelope"></i>${email}`;
  document.querySelector('.location').innerHTML = `<i class="fas fa-map-marker-alt"></i>${location}`;
  document.querySelector('.bio').innerText = bio;
  document.querySelectorAll('.profile-photo').forEach(img => img.src = profileImage);

  // Hide form, show profile card
  form.style.display = 'none';
  document.querySelector('.profile-card').style.display = 'grid';
}
  function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('profileImage').src = reader.result;
  };
  if (event.target.files.length > 0) {
    reader.readAsDataURL(event.target.files[0]);
  }
}
function clearForm() {

  if (!confirm("Are you sure you want to clear all the form data?")) {
    return; // User cancelled
  }
  const form = document.getElementById("editForm");

  // Clear all input and textarea fields
  form.querySelectorAll("input[type='text'], input[type='email'], textarea").forEach(el => {
    el.value = "";
  });

  // Reset profile image to default
  const defaultImage = "../alternatePicture.png"; // Change if your default is different
  const img = document.getElementById("profileImage");
  img.src = defaultImage;

  // Also clear the file input (optional but good practice)
  const fileInput = document.getElementById("photoInput");
  if (fileInput) {
    fileInput.value = "";
  }
}