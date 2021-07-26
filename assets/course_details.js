window.vc=function(clicked)
{
    $('#player').attr('src',clicked);
}
$('.items').on('click', function(event){
    $(this).siblings('.items').removeClass('active');
    $(this).addClass('active');
    event.stopPropagation();
})