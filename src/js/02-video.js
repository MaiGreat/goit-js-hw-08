import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframeEl = document.querySelector('#vimeo-player');
console.log(iframeEl);

//використовуємо (створюємо) екземпляр, в який передаємо посилання 
// на ДОМ - елемент:
const player = new Player(iframeEl)

const onPlay = function (event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));


const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);