    //audio player
    var aud = document.getElementById('aud');
    var slider = document.getElementById("myRange");
    var vol = document.getElementById("volumeRange");
    var last_vol = vol.value;
    slider.oninput = function() {
      aud.currentTime = this.value;
    }
    vol.oninput = function() {
      aud.volume = this.value / 10;
      last_vol = vol.value;
    }
    function timeplusfive() {
      aud.currentTime += 5; 
    }
    function timesubtrackfive() {
      aud.currentTime -= 5;
    }
    function togglePlay() {
      return aud.paused ? aud.play() : aud.pause();
    }; 
    function toggleMute() {
      if (aud.muted == false){
        vol.value = 0;
        return aud.muted = true;
      }
      else{
        vol.value = last_vol;
        return aud.muted = false
      }
    }
    function durtime() {
      duration_time = parseInt(aud.duration);
      min = Math.floor(duration_time/60);
      sec = duration_time % 60;
      return min + ':' + sec;
    }
        // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
        aud.ontimeupdate = function() {myFunction()};
        function myFunction() {
            slider.max = parseInt(aud.duration);
            current_time = parseInt(aud.currentTime);
            slider.value = current_time;
            min = Math.floor(current_time/60);
            sec = current_time % 60;
            if (min < 10) {
              min = '0' + min;
            }
            if (sec < 10) {
              sec = '0' + sec;
            }
            document.getElementById("curtime").innerHTML = (min + ':' + sec + ' / ' + durtime());
          }
