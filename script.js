document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('editForm');
  const saveIcon = document.getElementById('saveIcon');

  window.toggleForm = function () {
    const card = document.getElementById('profileCard');
    const form = document.getElementById('editForm');

    card.style.display = card.style.display === 'none' ? 'flex' : 'none';
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';

    checkFormValidity();
  };

  window.previewImage = function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('profileImage').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  window.clearImage = function () {
    document.getElementById('photoInput').value = '';
    document.getElementById('profileImage').src = 'images/alternatePicture.png';
  };

  window.saveChanges = function () {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = form.querySelector('input[name="name"]').value;
  const designation = form.querySelector('input[name="designation"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const bio = form.querySelector('textarea[name="bio"]').value;
  const location = form.querySelector('input[name="location"]').value;
  const photoSrc = document.getElementById('profileImage').src;

  document.querySelector('.left-column .name').textContent = name;
  document.getElementById('profileImageDisplay').src = photoSrc;

  document.querySelector('.designation').innerHTML =
    `<img src="./Property 1=Role.png" style="width: 20px; height: 20px;" alt=""> ${designation}`;
  document.querySelector('.email').innerHTML =
    `<img src="./Property 1=Mail (1).png" style="width: 20px; height: 20px;" alt=""> ${email}`;
  document.querySelector('.bio').innerHTML =
    `<img src="./Property 1=user bio.png" style="width: 20px; height: 20px;" alt=""> ${bio}`;
  document.querySelector('.location').innerHTML =
    `<img src="./Property 1=Location.png" style="width: 20px; height: 20px;" alt=""> ${location}`;

  toggleForm(); 
};  
  function checkFormValidity() {
    saveIcon.style.display = form.checkValidity() ? 'block' : 'none';
  }

  form.addEventListener('input', checkFormValidity);
  form.addEventListener('change', checkFormValidity);

  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.checkValidity()) {
        input.reportValidity();
      }
    });
  });
});
function clearImage() {
  const fileInput = document.getElementById("photoInput");
  const previewImage = document.getElementById("profileImage");

  
  fileInput.value = "";

  
  previewImage.src = "images/alternatePicture.png"; 
}

