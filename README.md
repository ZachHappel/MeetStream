# MeetStream
During my internship at Cold Spring Harbor Laboratory, the world's leading institution for molecular genetics and biology research, I created this live streaming website for the Meeting and Courses program.

Using Video.js, this site attempts to display an HLS livestream. If the browser does not support HLS, the site uses a fallback and instead displays an MPEG-DASH stream using Plyr.

In order to support both HLS and MPEG-DASH (using only open source players,) I had to utilize both Video.js and Plyr.

The VOD option that is featured along the sidebar is displayed using minature Plyr players in which the YouTube video is embedded. When selected, the YouTube video is loaded within the large Plyr player.

In order to make the transition betweent VOD and livestream seamless, CSS is utilized to hide and unhide the respective video elements -- depending on the option selected. The same method is used when displaying live streams and switching between players when a filetype is not supported within the browser.

Using JavaScript, I programmed both automatic playback and looping playlist functionalities. Once a livestream is loaded, the stream automatically begins to play; the same goes for the VOD's. The only difference is that when the VOD ends, the next video on the playlist is automatically loaded and begins to play. The programming takes note of the current video's position within the playlist and as such, when a video is selected from the sidebar, the next video is always accurate. Additionally, the site will loop the playlist.


This site was created for both ease of access to content, as well as the automatic playback of live streams. Televisions on campus now display this website so live streams can be displayed when live, and VOD can be displayed otherwise -- all without user interaction. 
