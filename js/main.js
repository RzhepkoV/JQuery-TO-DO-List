let list = [];

$('button.add').on('click', function() {
    if (document.querySelector('input').value == ''){
        return false;
    };
    $('.hidden-block').slideDown(function(){
    setTimeout(function(){
        $('.hidden-block').slideUp();
    }, 1500);
    list.push(document.querySelector('input').value);
    $('input').val('');
    console.log(list);
})});

$('button.show').on('click', function() {
    $('.hidden-list').empty();
    list.forEach(function(el, i) {
        $(".hidden-list").append(`<li>Задание #${i+1}: ${el}</li>`)
    });
    $('.hidden-list').show();
});
