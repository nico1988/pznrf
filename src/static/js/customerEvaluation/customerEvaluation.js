$(function(){
    console.log('------->customerEvaluation')
    $('ul.pagination').click(function(e){
        console.warn(e.target)
        $(e.target).parent('li.page').addClass('active').siblings().removeClass('active')
    })
})