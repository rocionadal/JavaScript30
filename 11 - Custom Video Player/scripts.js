const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');
const backButton = document.getElementById('backwards');
const frontButton = document.getElementById('forwards');
const playbackSlider = document.getElementById('playbackSlider');
const volumeSlider = document.getElementById('volumeSlider');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

backButton.addEventListener('click', skip);
frontButton.addEventListener('click', skip);

playbackSlider.addEventListener('change', handleRangeUpdate);
playbackSlider.addEventListener('mousemove', handleRangeUpdate);
volumeSlider.addEventListener('change', handleRangeUpdate);
volumeSlider.addEventListener('mousemove', handleRangeUpdate); // update to only trigger the event when is click down and not click up (true or false like previous ex)

// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


