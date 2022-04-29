AOS.init();

$('.header').on('mouseover',function(m){
    let x = m.pageX;
    let y = m.pageY;

    $('.header .pink').css({'marginLeft':x/20, 'marginBottom':y/18})
    $('.header .blue').css({'marginLeft':x/20, 'marginTop':y/18})
    $('.header .orange').css({'marginRight':x/20, 'marginBottom':y/18})
})


$('.Up').on('click',function(){
    $('html,body').stop().animate({'scrollTop':0});
});//맨 위로 이동


/*[ mousewheel ]******************************************************************************************* */

$('section').on('mousewheel',function(e,d){

    if(d>0){
        let scr = $(this).prev().offset().top;
        $('html,body').stop().animate({'scrollTop':scr});

    }else if(d<0){
        let scr = $(this).next().offset().top;
        $('html, body').stop().animate({'scrollTop':scr});
    }

});//mousewheel 효과


$('nav button').on('click',function(){
    let num = $(this).index();
    let sec = $('section').eq(num).offset().top;

    $('html, body').stop().animate({'scrollTop':sec});
});//nav button 누르면 이동

$(window).on('scroll',function(){
    let scr = $(window).scrollTop();
    let hig = $('section').height();

    if(scr >= 0 && scr < hig){
        $('nav button').eq(0).addClass('etc').siblings().removeClass();
        $('.Up').addClass('up').fadeOut();
    }
    if(scr >= hig*1 && scr < hig*2 ){
        $('nav button').eq(1).addClass('etc').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*2 && scr < hig*3 ){
        $('nav button').eq(2).addClass('design').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*3 && scr < hig*4 ){
        $('nav button').eq(3).addClass('design').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*4 && scr < hig*5 ){
        $('nav button').eq(4).addClass('web').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*5 && scr < hig*6 ){
        $('nav button').eq(5).addClass('web').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*6 && scr < hig*7 ){
        $('nav button').eq(6).addClass('video').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*7 && scr < hig*8 ){
        $('nav button').eq(7).addClass('video').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
    if(scr >= hig*8){
        $('nav button').eq(8).addClass('etc').siblings().removeClass();
        $('.Up').addClass('up').fadeIn();
    }
});//button 모양 변경


/*[ designMain ]*****************************************************************************************************************************/

let photoSrc = ["d01-hollysBn.png","d02-canonBn.jpg","d03-canonSubBn.jpg","d04-canonSubBn.jpg","d05-canonSubBn.jpg","d06-amasvinBn.jpg"];
let imgSrc = "images/";

$('.designMain .photoBox').on('click',function(e){
    e.preventDefault();
            
    $('.view').fadeIn();

    let i = $(this).index();
    let img = imgSrc + photoSrc[i];

    $('.view figure').html('<img src="'+ img +'">');

    let h4 = $(this).children().find('h4').html();
    $('.txtTop').children('h4').html(h4);

    let p = $(this).children().find('p').first().html();
    $('.txtTop').children('p').html(p);

    let point = $(this).find('.point').html();
    $('.txtBot').children('p').html(point);

    let wid = $('figure').width();
    $('.txtTop').width(wid); //너비값 이미지와 동일하게

    if(i == 0){
        $('.txtTop').css({
            'top':'35%',
            'transformTranslate':'-50%, -35%'});

        $('.txtBot').css({
            'bottom':'25%',
            'transformTranslate':'-50%, -25%'});
                
    }else if(i == 1){
        $('.txtTop').css({
            'top':'35%',
            'transformTranslate':'-50%, -35%'});

        $('.txtBot').css({
            'bottom':'29%',
            'transformTranslate':'-50%, -29%'});

    }else if(i == 2){
        $('.txtTop').css({
            'top':'32%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'22%',
            'transformTranslate':'-50%, -22%'});

    }else if(i == 3){
        $('.txtTop').css({
            'top':'32%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'22%',
            'transformTranslate':'-50%, -22%'});

    }else if(i == 4){
        $('.txtTop').css({
            'top':'32%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'22%',
            'transformTranslate':'-50%, -22%'});

    }else if(i == 5){
        $('.txtTop').css({
            'top':'32%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'22%',
            'transformTranslate':'-50%, -22%'});
    }//design txtTop, txtBot 위치 조절

});//photoBox click
$('.view i, .closeWrap, .vView i, .vView .closeWrap').on('click',function(){
    $('.view, .vView').fadeOut();
});//view와 바탕 click


/*[ designMain2 ]*****************************************************************************************************************************/

let photoSrc2 = ["d07-amasvinSubBn.jpg","d08-amasvinSubBn.jpg","d09-amasvinSubBn.jpg","d10-amasvinBn.jpg","d11-amasvinSubBn.jpg"];
$('.designMain2 .photoBox').on('click',function(e){
    e.preventDefault();
            
    $('.view').fadeIn();

    let i = $(this).index();
    let img = imgSrc + photoSrc2[i];

    $('.view figure').html('<img src="'+ img +'">');

    let h4 = $(this).children().find('h4').html();
    $('.txtTop').children('h4').html(h4);

    let p = $(this).children().find('p').first().html();
    $('.txtTop').children('p').html(p);

    let point = $(this).find('.point').html();
    $('.txtBot').children('p').html(point);

    let wid = $('figure').width();
    $('.txtTop').width(wid); //너비값 이미지와 동일하게

    if(i == 0){
        $('.txtTop').css({
            'top':'25%',
            'transformTranslate':'-50%, -25%'});

        $('.txtBot').css({
            'bottom':'15%',
            'transformTranslate':'-50%, -15%'});
                
    }else if(i == 1){
        $('.txtTop').css({
            'top':'25%',
            'transformTranslate':'-50%, -25%'});

        $('.txtBot').css({
            'bottom':'23%',
            'transformTranslate':'-50%, -23%'});

    }else if(i == 2){
        $('.txtTop').css({
            'top':'25%',
            'transformTranslate':'-50%, -25%'});

        $('.txtBot').css({
            'bottom':'15%',
            'transformTranslate':'-50%, -15%'});

    }else if(i == 3){
        $('.txtTop').css({
            'top':'32%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'25%',
            'transformTranslate':'-50%, -29%'});

    }else if(i == 4){
        $('.txtTop').css({
            'top':'25%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'22%',
            'transformTranslate':'-50%, -29%'});

    }else if(i == 5){
        $('.txtTop').css({
            'top':'32%',
            'transformTranslate':'-50%, -32%'});

        $('.txtBot').css({
            'bottom':'29%',
            'transformTranslate':'-50%, -29%'});
    }//design txtTop, txtBot 위치 조절

});//photoBox click
$('.view i, .closeWrap, .vView i, .vView .closeWrap').on('click',function(){
    $('.view, .vView').fadeOut();
});//view와 바탕 click


/*[ videoMain ]*****************************************************************************************************************************/

$('.slide').slick({
    'slidesToShow' : 3, 
    'slidesToScroll' : 1, 
    //'autoplay' : true, 
    //'autoplaySpeed' : 5000, 
    'dots' : true,
    'prevArrow' : '.prev',
    'nextArrow' : '.next',
    'centerMode' : true,
    'focusOnSelect' : true,
    'infinite' : true,
    'asNavFor' : '.conSlide'
});

$('.conSlide').slick({
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': false,
    'fade': true,
    'asNavFor' : '.slide'
});

$('.slide2').slick({
    'slidesToShow' : 3, 
    'slidesToScroll' : 1, 
    //'autoplay' : true, 
    //'autoplaySpeed' : 5000, 
    'dots' : true,
    'prevArrow' : '.prev2',
    'nextArrow' : '.next2',
    'centerMode' : true,
    'focusOnSelect' : true,
    'infinite' : true,
    'asNavFor' : '.conSlide2'
});

$('.conSlide2').slick({
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': false,
    'fade': true,
    'asNavFor' : '.slide2'
});

$('.slide .box, .slide2 .box').on('click',function(e){
    e.preventDefault();

    let key = $(this).find('.key').text();
    let iframe = '<iframe width="756" height="425" src="https://www.youtube.com/embed/' + key + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    $('.vView').fadeIn();
    $('.vView figure').html(iframe);


    let vidTit = $(this).find('.vidTit').text();
    $('.vView').find('h4').html(vidTit);

    let vidPt = $(this).find('.vidPt').text();
    $('.vView').find('span').html(vidPt);

});


/*[ footer ]*****************************************************************************************************************************/

$('.self').on('mouseover',function(){
    $('.self i').addClass('rotate');
            
}).on('mouseout',function(){
    $('.self i').removeClass('rotate');
});//footer self 마우스 회전

$('.resume').on('mouseover',function(){
    $('.resume i').addClass('rotate');

}).on('mouseout',function(){
    $('.resume i').removeClass('rotate');
});//footer resume 마우스 회전

