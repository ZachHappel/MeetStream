const controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="restart">
        <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Restart</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="rewind">
        <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
    </button>
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fast-forward">
        <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
    </button>
    <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
    </button>
    <div class="plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>
    <button type="button" class="plyr__control" data-plyr="captions">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fullscreen">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
    </button>
</div>
`;




 // ------------------------------------ \\
// ****  Written by Zacharie Happel  **** \\                                                                                                     .    \\ -------------------------------------  //  


// What you need to know........................


//MPEG-Dash is played through the Video.js player
//HLS is played through Plyr in conjunction with HLS.js

//Access the functionality of MPEG-Dash player using 'ls.player.(something)'
//      Ex: ls.player.pause()

//Access the functionality of HLS player using 'hls_livestream.(something)'
//      Ex: hls_livestream.pause()


// To delete either player...
// MPEG-Dash (video.js): ls.dispose() 

const main_player = new Plyr('.plyr');
const player2 = new Plyr('#player2');
const player3 = new Plyr('#player3');
const player4 = new Plyr('#player4');
const player5 = new Plyr('#player5');
const player6 = new Plyr('#player6');
const player7 = new Plyr('#player7');
const player8 = new Plyr('#player8');
const player9 = new Plyr('#player9');
const player10 = new Plyr('#player10');
const player11 = new Plyr('#player11');
const player12 = new Plyr('#player12');
const player13 = new Plyr('#player13');
const player14 = new Plyr('#player14');
const player15 = new Plyr('#player15');
const player16 = new Plyr('#player16');
const player17 = new Plyr('#player17');
const player18 = new Plyr('#player18');
const player19 = new Plyr('#player19');



const livestr = document.getElementById('plyrply')
const hls_livestream = document.getElementById('hlsplayer');


window.player = main_player;
window.ls = livestr;
window.hls = hls_livestream;

var upper = document.querySelector('.upper');
var videos = upper.querySelectorAll('.playlist--list #vid');
console.log(videos);
var i; 
var active = null;









var overlay = document.getElementById('nav-overlay');
var main_player_html = document.getElementById('plyr-contain');
var hls_ls_html = document.getElementById('hlsplayer');    //the Hls livestream player
var livestream = document.getElementById('plyrply');

var vod_inner = document.getElementById('plyr-contain');
var vod_outer = document.getElementById('player-container');
var hls_inner = document.getElementById('hls-inner');
var hls_outer = document.getElementById('hls-container');

if (HlsSupported == true) {
    console.log('Boop!');
    

}




for(i = 1; i < videos.length; i++) {
	videos[i].onclick = changeVideo;
}



setSource( getId(videos[0]), config_Video(videos[0]) );
console.log(getId(videos[0]));
console.log(videos[0].getAttribute('video_id'));
function changeVideo(e) {
    setSource( getId(e.target), config_Video(e.target), true );
}





function setSource(selected, sourceVideo, play) {
	if(active !== selected) {
		active = selected;
		main_player.source = {
			type: 'video',
			title: 'test',
			sources: sourceVideo
		};
        console.log('Done')

		for(var i = 1; i < videos.length; i++) {
			if(Number(videos[i].getAttribute('data-id')) === selected) {
				videos[i].className = 'active';
			} else {
				videos[i].className = '';
			}
		}

		if(play) {
			main_player.play();
		}
	} else {
        console.log('False');
        console.log(sourceVideo);
	}
    
    setTimeout(function() {
            start_video_playback()
        }, 5000);
    
}

function start_video_playback() {
    console.log('playing');
    main_player.play();
}


document.querySelector('.plyr').addEventListener('ended', nextVideo);



function nextVideo(e) {
    alert("finished");
	var next = active + 1;
    console.log(active);
    console.log(next);
    if (next === videos.length-1) {
        active = 0;
        next = 0;
        setSource( getId(videos[next]), config_Video(videos[next]), true );
    }
	if(next < videos.length) {
        console.log(next);
        console.log(videos.length);
        console.log('^ next and video length');

		setSource( getId(videos[next]), config_Video(videos[next]), true );
	}
}


function config_Video(el){
    
    var obj = [{
        src: el.getAttribute('video_id'),
        provider: 'youtube',
    }];
    console.log(el);
    console.log('EL^');
    console.log(el.getAttribute('video_id'));
    console.log('from config ^^');
    console.log(el);
    return obj;
    
    
}





function getId(el) {
	return Number(el.getAttribute('data-id'));
}





player2.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: '7MjMLgULsFE',
                provider: 'youtube',
        },
        
        
    ],
};




player3.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'RJvpu8nYzFg',
                provider: 'youtube',
        },
        
        
    ],
};



player4.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'XC4xAj_awOI',
                provider: 'youtube',
        },
        
        
    ],
};



player5.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'lZQjpl8HtzM',
                provider: 'youtube',
        },
        
        
    ],
};




player6.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'kzikXHAOL9s',
                provider: 'youtube',
        },
        
        
    ],
};




player7.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: '22zJrc08YPM',
                provider: 'youtube',
        },
        
        
    ],
};



player8.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'cjmfRO5pvX4',
                provider: 'youtube',
        },
        
        
    ],
};



player9.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'BuBC9mtKlxU',
                provider: 'youtube',
        },
        
        
    ],
};



player10.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'oHvKI-X-6_A',
                provider: 'youtube',
        },
        
        
    ],
};



player11.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'Cwl5d2nQA7k',
                provider: 'youtube',
        },
        
        
    ],
};



player12.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'In7n6EDfAxg',
                provider: 'youtube',
        },
        
        
    ],
};



player13.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'GESt8gyTJsQ',
                provider: 'youtube',
        },
        
        
    ],
};



player14.source = {
    type: 'video',
    title: 'Example title',
    sources: [
        {
                src: 'XC4xAj_awOI',
                provider: 'youtube',
        },
        
        
    ],
};



function change_to_Video(){
    player.source = {
        type: 'video',
        title: 'Example title 2',
        sources: [
           {
            src: 'media/nambia1.mp4',
            type: 'video/mp4',
            },
        ],
    };
  
}


function toggle_play(Cont_ID){
    ContID.stop();
    player.play();
}



function youtube1() {
    var ytvid = 'AhiaNJ2y5Ds';
    load_YoutubeVideo(ytvid);
    player1.play();
    player1.stop();
    player.play();
    
    
    
}

function loadVideo(VidID){
    
    alert('Vid Container Selected');
    
}





function load_YoutubeVideo(VidID, dataid){
    console.log(VidID);
    console.log('Vid ID^^');
    
    console.log(dataid);
    console.log('Data ID ^^');
    
    active = Number(dataid);
    main_player.source = {
        type: 'video',
        title: 'Youtube Video',
        sources: [
                {
            src: VidID,
            provider: 'youtube',
                },
            ],
        };
   
    
    
    
}



function newload_YoutubeVideo(dataid){
    
    active = dataid;
    setSource( getId(videos[Number(dataid)]), config_Video(videos[Number(dataid)]), true );
    console.log('New Youtube video successfuly loaded into player');
    
    
}

function ck_stream() {
    
    console.log(main_player.failed);
    console.log('If livestream live^');
    
}







function load_ls() {
    
    if (HlsSupported == true) {
        
        vod_inner.style.display = 'none';
        vod_outer.style.display = 'none';
        
        //hls_livestream.load();  // Set HLS livestream to beginning
        hls_ls_html.style.display = 'block'; // Display HLS livestream 
        hls_inner.style.display = 'block';  //Display HLS outer container
        hls_outer.style.display = 'block'; // Display HLS inner container
        setTimeout(function() {
            hls_livestream.play(); //Play HLS livestream
            console.log('HLS Live Stream Playing');
        }, 5000);
        
    } else {
        vod_inner.style.display = 'block';
        vod_outer.style.display = 'block';
        ls.player.currentTime(0); // Set MPEG-Dash livestream to beginning        
        livestream.style.display = 'block'; // Display MPEG-Dash livestream
        setTimeout(function() {
            ls.player.play(); // Play MPEG-Dash livestream
            console.log('MPEG-DASH Live Stream Playing');
        }, 5000);
        
    }
    
    main_player.pause(); // Pause VOD playback
    main_player_html.style.display = 'none'; // Hide VOD player
    overlay.style.display = 'block'; // Restore the overlay on the nav bar
    console.log('Pausing video playback and restoring livestream to time = 0, autoplay will commence in 5 seconds.')
    
    
    
    
    
    
    
    
}

function load_mpd_ls() {
    try {
        
        main_player.source = {
        type: 'video',
        title: 'Example title',
        height: 560,
        width: 315,
        sources: [
            {
                    src: 'http://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd',
                    type: 'application/dash+xm',
            },


                ],
             };
            }
    catch(err) {
        console.log('Error MPEG-D');
    }
    
    ck_stream();
    
}










function load_mpd() {
    
 
    main_player.source = {
        type: 'video',
        title: 'Live Stream',
        sources: [
                {
            src: 'https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd',
            type: 'application/dash+xml',
                },
            ],
        }; 
    
    
    
}




function exitLS() {
     
    var button = document.getElementById('exitLS'); // The "Exit Livestream" Button
    var actual_plyrplayer = document.getElementById('actual_plyr');
    
    
    
    if (HlsSupported == true) {
        hls_inner.style.display = 'none';
        hls_outer.style.display = 'none';
        hls_livestream.pause();  // Pause HLS Livestream
        hls_ls_html.style.display = 'none';  // Hide the HLS livestream 
        
    }  else {
        
        ls.player.pause();   // Pause MPEG-Dash Livestream
        livestream.style.display = 'none';  //Hide MPEG-Dash livestream
        
        
        
    }
    vod_outer.style.display = 'block';
    vod_inner.style.display = 'block';
    main_player.restart();  // Restart VOD player
    overlay.style.display = "none";  //Hide Nav-bar Overlay that prevents interaction
    main_player_html.style.display = 'block'; //Display VOD player
        
    active = 2;  // Set active to video we will load ---- May not be necessary\
    setSource( getId(videos[Number('2')]), config_Video(videos[Number('2')]), true );  // Set the video to the first in the playlist (which is number 2)
    console.log('New video loaded successfuly');
    return false; // Instate changes and make sure they don't undo themselves
        
}



function test1_hls(){
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
    
	// Expose player so it can be used from the console











