let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

Music.addEventListener('click', function(){
   Nota.style.display = "block";
 Nota.style.animation = 'In .8s linear forwards';
});
      function Cerrar(){
    Nota.style.animation = 'Fin .8s linear forwards';
}

         <!-- BUSCADOR -->

   Search.addEventListener('click', function() {
  if(Fill.style.display == 'block') {
     Fill.style.display = 'none';
  } else {
     Fill.style.display = 'block';
  }
});     

        <!-- LINKS IFRAME -->

function Links(iframe) {
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var links = iframeDocument.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank');
 }
}
        <!-- Musica -->

    var videos = ['https://da.gd/SBoUUq', 'https://da.gd/aag2LL', 'https://da.gd/f9BB', 'https://da.gd/nfJ9tm', 'https://bit.ly/49D9ppk', 'https://lamovie.github.io/BASS-NATION-ONLINE/'];
    var currentVideoIndex = 0;

    function adelantarVideo() {
      currentVideoIndex++;
      if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
}
      cambiarVideo();
}
    function retrocederVideo() {
      currentVideoIndex--;
      if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
}
      cambiarVideo();
}
    function cambiarVideo() {
      Video.src = videos[currentVideoIndex];
      Video.load();
      Video.play();
}







