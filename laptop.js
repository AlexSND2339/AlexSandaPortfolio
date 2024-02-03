window.addEventListener("scroll", function(){
  let header = this.document.querySelector("header");
  header.classList.toggle("sticky",this.window.scrollY > 0)
})


