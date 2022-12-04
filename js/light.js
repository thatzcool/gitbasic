let pics = document.querySelectorAll(".pic");
let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightboxImage");

for(i=0;i<pics.length;i++) {
    pics[i].addEventListener("click",showLightbox);
   }

   function showLightbox() {
        let bigLocation = this.getAttribute("data-src");
        lightboxImage.setAttribute("src",bigLocation);
        lightbox.style.display = "block";
   }

   lightbox.onclick = function() {
            lightbox.style.display = "none";
   }