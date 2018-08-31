var HlsSupported = null;
var hls_ls_html = document.getElementById('hlsplayer');

function load_hls(){
    var video = document.querySelector('#hlsplayer');

          if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource('https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8');
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
              video.play();
            });
          }

          plyr.setup(video);
        }


function create_hls_player() {
    
    const hls_livestream = document.createElement('video');
                hls_livestream.setAttribute("id", "hlsplayer");
                hls_livestream.setAttribute("preload", "none");
                hls_livestream.setAttribute("autoplay", "true");
                hls_livestream.setAttribute("crossorigin", "anonymous");
    
    
    
    
    
}