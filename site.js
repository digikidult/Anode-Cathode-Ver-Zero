// Keep the current section when switching languages.
document.querySelectorAll('.lang a').forEach(a=>{a.addEventListener('click',()=>{if(location.hash)a.href=a.getAttribute('href')+location.hash})});