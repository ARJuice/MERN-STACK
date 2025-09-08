// Minimal JS: handle sign-in redirect (no validation required)
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('signin-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Redirect to gallery home regardless of input
      window.location.href = 'gallery.html';
    });
  }
});
