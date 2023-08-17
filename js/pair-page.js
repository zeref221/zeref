window.addEventListener('DOMContentLoaded', (event) => {

  // make all external links pop open a new tab
  var elements = document.querySelectorAll("a");
  Array.prototype.forEach.call(elements, function(el, i){
    var url = el.getAttribute("href");
    if(url != undefined){
      if(url.indexOf("http") >= 0) {
        el.setAttribute("target","_blank");
        el.setAttribute("rel","noopener");
      }
    }
  })
    
  let types = [
    "Researchers",
    "Artists",
    "Sociologists",
    "Engineers",
    "Philosophers",
    "Technologists",
    "Designers"
  ]
  let pos = 0;

  setInterval(function(){
    let container = document.querySelector(".rotating-disciplines");
    if(container != null){
      Array.from(container.children).forEach(function(e){
        if(e.classList.contains("fade-out")){
          e.parentNode.removeChild(e);
        }
        if(e.classList.contains("fade-in")){
          e.classList.remove("fade-in");
          e.classList.add("fade-out");
        }
      });

      container.insertAdjacentHTML("beforeend", "<span class='rotater fade-in'>" + types[pos] + "</span>");

      pos++;
      if(pos > types.length - 1) pos = 0;
    }
  }, 2600);


  let currentPage = window.location.pathname;
  if(currentPage.indexOf("guidebook") >= 0) document.querySelector(".nav-guidebook").classList.add("selected");
  if(currentPage.indexOf("explorables") >= 0) document.querySelector(".nav-explorables").classList.add("selected");
  if(currentPage.indexOf("tools") >= 0) document.querySelector(".nav-tools").classList.add("selected");
  if(currentPage.indexOf("research") >= 0) document.querySelector(".nav-research").classList.add("selected");
  if(currentPage.indexOf("events") >= 0) document.querySelector(".nav-events").classList.add("selected");

  // // one pixel scroll hack to hide the address bars on mobile
  // setTimeout(function(){
  //   window.scrollTo(0, 1);
  // }, 0);

});

  