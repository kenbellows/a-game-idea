/*  Scene.js
 *  
 *  Each scene object represents one scene of the game. A scene will contain a MovieClip and event info.
 *
 */
 
function Scene(clips, events) {
  this.clips = clips
  var init = function(){};
  for (e in events) {
    if (events.hasOwnProperty(e)) {
      if (e == "init") init = events[e];
      this.addEventListener(e, events[e]);
    }
  }
  init();
}
