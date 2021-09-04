var links = [
    "https://www.youtube.com/embed/JCSgjzmPTo4",
    "https://www.youtube.com/embed/6CnDHW-Ko5s",
    "https://www.youtube.com/embed/2U1IyDYTqRQ",
    "https://www.youtube.com/embed/T6ebrXFBfCQ",
    "https://www.youtube.com/embed/6Hm1pNqQxq0",
    "https://www.youtube.com/embed/4r6WdaY3SOA",
    "https://www.youtube.com/embed/4r6WdaY3SOA",
    "https://www.youtube.com/embed/4r6WdaY3SOA",
    "https://www.youtube.com/embed/4r6WdaY3SOA",
    "https://www.youtube.com/embed/4r6WdaY3SOA",
    "https://www.youtube.com/embed/4r6WdaY3SOA"
];
var player,video;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        // height: '350',
        // width: '425',
        // videoId: 'OdT9z-JjtJk',
        events: {
            // 'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        currentVideoId++;
        if (currentVideoId < videoIDs.length) {
            player.loadVideoById(videoIDs[currentVideoId]);
        }
    }
}
window.vc = function (clicked) {
    video=clicked-1;
    $('#player').attr('src', links[video]);
}
function automate(event) {    
    if (event.data == YT.PlayerState.ENDED)
        $('#player').attr('src', links[video++]);
}
$('.items').on('click', function (event) {
    $(this).siblings('.items').removeClass('active');
    $(this).addClass('active');
    event.stopPropagation();
});
$("#close").on('click', function () {
    $(".desc").hide();
});
$("#sm").on('click', function () {
    $(".desc").show();
});