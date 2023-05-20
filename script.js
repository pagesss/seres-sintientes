function showCompatibilityAlert() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      var alertElement = document.createElement('div');
      alertElement.className = 'compatibility-alert';
      alertElement.innerHTML = 'Este sitio web solo es compatible con computadoras.';
      document.body.insertBefore(alertElement, document.body.firstChild);
    }
  }