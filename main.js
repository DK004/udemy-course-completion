var inputs = document.getElementsByClassName('ud-real-toggle-input');
var panels = document.getElementsByClassName('ud-accordion-panel-toggler');
for(var i = 0; i < panels.length; i++) {
      var toggleId = panels[i].getAttribute('data-css-toggle-id');
  if (toggleId) {
        var statusSpan = document.getElementById(toggleId);
        if (statusSpan && !statusSpan.hasAttribute('data-checked')) {
           if(statusSpan.getAttribute('data-checked')==='checked'){
           continue;
           }else{
               panels[i].click();
           }
        } 
   
}
}
for(var i = 0; i < inputs.length; i++) {
    const ariaLabel = inputs[i].getAttribute('aria-label');
    if (ariaLabel && ariaLabel.includes("complete") && !ariaLabel.includes("incomplete")) {
        inputs[i].disabled = false;
        inputs[i].click();
    }
    
}
