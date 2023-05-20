function showCompatibilityAlert() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      var alertElement = document.createElement('div');
      alertElement.className = 'compatibility-alert';
      alertElement.innerHTML = 'Este sitio web solo es compatible con computadoras.';
      document.body.insertBefore(alertElement, document.body.firstChild);
    }
  }
  
  window.onload = function() {
    showCompatibilityAlert();
  };