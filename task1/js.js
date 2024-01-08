 var vid = document.getElementById("vid");
 var progress = document.getElementById("progress");
 var  fullScreen = document.getElementById("fullScreen");

// ==================================================================
        function playVid(){
            vid.play();
        }
// ==================================================================
        function stopVid(){
            vid.pause();
        }
// ==================================================================
        function jumpBackward(){
            
            var video = document.querySelector('video');
            video.currentTime -= 5;
        }
// ===================================================================
        function jumpForward(){
            var video = document.querySelector('video');
            video.currentTime += 5;
// ===================================================================
        }
        function jumpToEnd() {
            var video = document.querySelector('video');
            video.currentTime = video.duration;
        }
// ===================================================================
        function jumpToStart() {
        var video = document.querySelector('video');
        video.currentTime = 0;
        }
// ===================================================================
        
        function volumeControl() {
        vid.volume = volume.value;

        
        if (vid.volume > 0) {
            mute.textContent = "Mute";
        } else {
            mute.textContent = "Unmute";
        }
        }
        function muteVideo() {
        if (vid.volume > 0) {
            
            oldVolume = vid.volume;
            vid.volume = 0;
            volume.value = 0;
            mute.textContent = "Unmute";
        } else {
            
            vid.volume = oldVolume;
            volume.value = oldVolume;
            mute.textContent = "Mute";
    }
    }
    volume.addEventListener("input", function () {
    volumeControl();
    });
// ===================================================================
     function updateVideoTime() {
            var time = vid.duration * (range.value / 100);
            vid.currentTime = time;
        }
        
     function setProgressMax() {
            progress.max = vid.duration;
        }
        function updateProgress() {
            progress.value = vid.currentTime;
        }
        function updateVideoTime() {
            vid.currentTime = progress.value;
        }

        vid.addEventListener("loadedmetadata", function(){
        setProgressMax()
        });
        vid.addEventListener("timeupdate", function(){
        updateProgress()
        });
        progress.addEventListener("input", function(){
        updateVideoTime()
        });
// ===================================================================
        function updateTimer() {
                var currentMinutes = Math.floor(vid.currentTime / 60);
                var currentSeconds = Math.floor(vid.currentTime % 60);
                var totalMinutes = Math.floor(vid.duration / 60);
                var totalSeconds = Math.floor(vid.duration % 60);

                var formattedCurrentTime = (currentMinutes < 10 ? '0' : '') + currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;
                var formattedTotalTime = (totalMinutes < 10 ? '0' : '') + totalMinutes + ':' + (totalSeconds < 10 ? '0' : '') + totalSeconds;

                currentTime.textContent = formattedCurrentTime;
                totalTime.textContent = formattedTotalTime;

                requestAnimationFrame(updateTimer);
            }
            updateTimer();
// ===================================================================
            function fullScreenVideo(){
                if (vid.requestFullscreen) {
                  vid.requestFullscreen();
                } else if (vid.mozRequestFullScreen) {
                  vid.mozRequestFullScreen();
                } else if (vid.webkitRequestFullscreen) {
                  vid.webkitRequestFullscreen();
                } else if (vid.msRequestFullscreen) {
                  vid.msRequestFullscreen();
                }
              }
              fullScreen.addEventListener("click" , function(){
                fullScreenVideo()
              })