$(function () {//jquery start

    const HEADER = $('header')//t_open class 제거
    const topBanner = $('.top_banner')//hidden class 추가
    const tCloseBtn = $('.top_banner .close')//이벤트 주체
    const rightQuick = $('#right_quick')
    const rightTopBtn = $('#right_quick .tob_btn')
    const BODY = $('body')
    const mobBtn = $('.mob_btn')
    const mCloseBtn = $('.mCloseBtn')
    const mNavLst = $('.mCategory ul>li>a')
    const mSubLst = $('.mCategory dl>dt')
    const footBtn =$('footer .right')


    footBtn.on('click',function(e){
        e.preventDefault()
        if(window.innerWidth<999){

            $(this).toggleClass('On')
            $(this).children('.hidden').slideToggle()
        }
    })

    $(window).on('load resize',function(){
        footBtn.children('.hidden').removeAttr('style')
    })


    mNavLst.on('click', function () {
        $(this).siblings('dl').addClass('On')
    })

    mSubLst.on('click', function () {
        $(this).parent('dl').removeClass('On')
    })

    mobBtn.on('click', function () {
        BODY.addClass('mActive')
    })
    mCloseBtn.on('click', function () {
        BODY.removeClass('mActive')
    })


    rightTopBtn.on('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    tCloseBtn.on('click', function () {
        HEADER.removeClass('t_open')
        topBanner.addClass('hidden')
    })

    //s3_LIST


        const s3Btn = $('.btn_double>a')
        const s3ImgWrap = $('#s3 .img_wrap>div ')
        let  crt =0 
        init(crt)
        function init(i){

            s3Btn.removeClass('On')
            s3ImgWrap.removeClass('Act')
           $('.btn_double').removeClass('r')
            if(i==1){
                s3Btn.parent('.btn_double').addClass('r')
            }
            
            s3Btn.eq(i).addClass('On')
            s3ImgWrap.eq(i).addClass('Act')
        }

        s3Btn.on('click',function(e){
            e.preventDefault()
            const i = $(this).index()

            console.log(i)

            init(i)
        })


        // const LeeImg = $('#s3 .img_wrap .LEE')
        // const KidsImg = $('#s3 .img_wrap .KIDS')


        // s3Btn.on('click', function (e) {
        //     e.preventDefault()
        //     const i = $(this).index(e)//내가 누른 버튼의 순서값

        //     console.log(i);
        //     KidsImg.removeClass('on')
        //     LeeImg.eq(i).addClass('on')

        // })



    $(window).on('scroll', function () {
        let i = $(this).scrollTop()

        console.log(i);
        if (i > 0) {
            HEADER.addClass('scroll')
            rightQuick.addClass('up')
        }
        else {
            HEADER.removeClass('scroll')
            rightQuick.removeClass('up')
        }
    })




})//jquery end


const topBanner_sl = new Swiper(".tb_slider", {
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 800
});


const heroSlider = new Swiper(".hero_slider", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".arr_next",
        prevEl: ".arr_prev",
    },
});


const s2_slider = new Swiper(".s2_slider", {
    pagination: {
        el: "#s2 .swiper-pagination",
        type: "progressbar",
    },
    slidesPerView: 3,
    navigation: {
        nextEl: "#s2 .swiper-button-next",
        prevEl: "#s2 .swiper-button-prev",
    },
    loop: true
});

const s4_slider = new Swiper(".s4_slider", {
    spaceBetween: 30,
    loop: true,
});