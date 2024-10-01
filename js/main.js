document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    var learnMoreModal = new bootstrap.Modal(document.getElementById('learnMoreModal'));
    learnMoreModal.show(); 
  });
});
