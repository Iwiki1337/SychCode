let language = document.getElementById("language").getAttribute("attribute"); //0 - en // 1- ru
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .buttons').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function(){
    $('.button').click(function(event){
        $('.header_burger, .buttons').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
function windowSize(){
    if(language==1){
    if ($(window).width() < '768'){
        $(".arrowsSmall").show(10);
        $("#myBtn").hide(10);
        $("#myBtn1").hide(10);
//        $(".containerContacts").hide();
//        $(".button").find("#cont").text("\Контакты?");
        console.log($(".button_list").find("#cont").text());
    } else {
        $(".arrowsSmall").hide(10);
        $("#myBtn").show(10);
        $("#myBtn1").show(10);
        $(".containerContacts").show();
    }}else if(language==0){
        if ($(window).width() < '768'){
        $(".arrowsSmall").show(10);
        $("#myBtn").hide(10);
        $("#myBtn1").hide(10);
//        $(".containerContacts").hide();
        console.log("<768");
    } else {
        $(".arrowsSmall").hide(10);
        $("#myBtn").show(10);
        $("#myBtn1").show(10);
        $(".containerContacts").show();
    }
    }
}
function windowSizeBig(){
    if ($(window).width() < '1080'){
        $(".blockSideLeft").hide(10);
        $(".blockSideRight").hide(10);
    } else {
        $(".blockSideLeft").show(10);
        $(".blockSideRight").show(10);
    }
}
//$(window).load(windowSize);
$(window).resize(windowSize);
$(window).resize(windowSizeBig);

let logo = document.querySelector(".container");
let portfX = 0;
let show = false;





function left(){
    moreDown();
    if (portfX<=0){
        portfX =4;
    }else{
        portfX--;
    }
    switchPortf();
    console.log(portfX);
}
function right(){
    moreDown();
    if (portfX>=4){
        portfX =0;
    }else{
        portfX++;
    }
    switchPortf();
    console.log(portfX);
}

function languageEn(){
    language = 0;
    console.log(language);
}
function languageRu(){
    language = 1;
    console.log(language);
}
console.log(language);
function switchPortf(){
    let imgs = new Array;
    imgs[0]="url(sources/img/portfPic/img0.png)";
    imgs[1]="url(sources/img/portfPic/img1.png)";
    imgs[2]="url(sources/img/portfPic/img2.png)";
    imgs[3]="url(sources/img/portfPic/img3.png)";
    imgs[4]="url(sources/img/portfPic/img4.png)";
    if(language == 1){
    
    
    let titleNames = new Array;
    titleNames[0] = "Примеры сайтов";
    titleNames[1] = "Логотипы";
    titleNames[2] = "Чат-боты";
    titleNames[3] = "Приложения";
    titleNames[4] = "Графические работы";
    
    let description = new Array;
    description[0] = "Представляем работы, которые мы сделали и примеры того, что мы можем сделать для вашего сайта";
    description[1] = "Обработка логотипов, создание логотипов для вас и примеры того, что мы уже сделали";
    description[2] = "Прямые ссылки на ботов, которые были созданы нашими программистами";
    description[3] = "Приложения с различными функциями, готовы сделать для вас все виды";
    description[4] = "Работы наших графических дизайнеров.  Примеры того, что мы уже сделали";
    
    let miniBlockLeft = document.querySelector(".blockLeft");
    let bigBlock = document.querySelector(".blockBig");
    let miniBlockRight = document.querySelector(".blockRight");
    
    let leftTitle = document.getElementById("leftTitle");
    let centerTitle = document.getElementById("centerTitle");
    let rightTitle = document.getElementById("rightTitle");
    
    let leftDescription = document.getElementById("descriptionLeft");
    let centerDescription = document.getElementById("descriptionCenter");
    let rightDescription = document.getElementById("descriptionRight");
    
    
    
    let x = portfX;
    let xFirst = x;
    centerTitle.innerHTML=titleNames[x];
    centerDescription.innerHTML=description[x];
    bigBlock.style.backgroundImage = imgs[x];
    console.log(x + "x");
    if(x==0){
        xFirst = 4;
    }else{
        xFirst = x-1;
    }
    console.log(xFirst + "xfir1");
    leftTitle.innerHTML=titleNames[xFirst];
    leftDescription.innerHTML=description[xFirst];
    miniBlockLeft.style.backgroundImage = imgs[xFirst];
    xFirst=x;
    if(x==4){
        xFirst = 0;
    }else{
        xFirst = x+1;
    }
    console.log(xFirst + "xfir2");
    miniBlockRight.style.backgroundImage = imgs[xFirst];
    rightTitle.innerHTML=titleNames[xFirst];
    rightDescription.innerHTML=description[xFirst];
        
        
    }else if(language == 0){
        //eng
        
        let titleNames = new Array;
    titleNames[0] = "Examples of sites";
    titleNames[1] = "Logos";
    titleNames[2] = "Chat-bots";
    titleNames[3] = "Applications";
    titleNames[4] = "Graphic works";
    
    let description = new Array;
    description[0] = "We present the work that we have done and the examples that we can do for your site";
    description[1] = "Processing logos, creating logos for you and examples of what we have been done";
    description[2] = "links to bots that were created by our programmers. We are doing bots at every single social media";
    description[3] = "Apps with various functions. We are ready to do all kinds for you. We use various engines for applications";
    description[4] = "The orders that have been did graphic designers. Examples of what we have already done";
    
    let miniBlockLeft = document.querySelector(".blockLeft");
    let bigBlock = document.querySelector(".blockBig");
    let miniBlockRight = document.querySelector(".blockRight");
    
    let leftTitle = document.getElementById("leftTitle");
    let centerTitle = document.getElementById("centerTitle");
    let rightTitle = document.getElementById("rightTitle");
    
    let leftDescription = document.getElementById("descriptionLeft");
    let centerDescription = document.getElementById("descriptionCenter");
    let rightDescription = document.getElementById("descriptionRight");
    
    
    
    let x = portfX;
    let xFirst = x;
    centerTitle.innerHTML=titleNames[x];
    centerDescription.innerHTML=description[x];
    bigBlock.style.backgroundImage = imgs[x];
    console.log(x + "x");
    if(x==0){
        xFirst = 4;
    }else{
        xFirst = x-1;
    }
    console.log(xFirst + "xfir1");
    leftTitle.innerHTML=titleNames[xFirst];
    leftDescription.innerHTML=description[xFirst];
    miniBlockLeft.style.backgroundImage = imgs[xFirst];
    xFirst=x;
    if(x==4){
        xFirst = 0;
    }else{
        xFirst = x+1;
    }
    console.log(xFirst + "xfir2");
    miniBlockRight.style.backgroundImage = imgs[xFirst];
    rightTitle.innerHTML=titleNames[xFirst];
    rightDescription.innerHTML=description[xFirst];
    }
}
function more(){
    let portfBlock = document.querySelector(".containerPortf");
    let containerCont = document.querySelector(".containerContacts");
    let btn = document.getElementById("moreBtn");
    let examples = document.querySelector(".examples");
    if(language == 1){
    if(show == true){
        btn.innerHTML="Показать примеры работ";
        $(".examples").hide();
        examplesShow();
        show = false;
    } else{
        btn.innerHTML="Скрыть примеры работ";
        $(".examples").show();
        examplesShow();
        show = true;
    }
    }else{
        if(show == true){
        btn.innerHTML="Show examples of work";
        $(".examples").hide();
        examplesShow();
        show = false;
    } else{
        btn.innerHTML="Hide examples of work";
        $(".examples").show();
        examplesShow();
        show = true;
    }
    }
}

function moreDown(){
    let portfBlock = document.querySelector(".containerPortf");
    let containerCont = document.querySelector(".containerContacts");
    let btn = document.getElementById("moreBtn");
    let examples = document.querySelector(".examples");
    if(language==1){
    btn.innerHTML="Показать примеры работ";
        }else{
            btn.innerHTML="Show examples of work";
        }
        $(".examples").hide();
        examplesShow();
        show = false;
}

function examplesShow(){
    $(".examples").empty();
    if(language==1){
    let webEx = "<div class=\"textProc\">Наш собственный сайт сделан нами, и представлен перед вами</div>";
    let logoEx = "<div class=\"objectExample\">Лого #1</div>";
    let botsEx = "<div class=\"objectExample\">Чат-бот #1</div>";
    let appsEx = "<div class=\"objectExample\">Приложение #1</div>";
    let designEx = "<div class=\"objectExample\">Дизайн #1</div>";
        $(".examples").append("</div><center><div class=\"textProc\" style=\"font-size: 50px; margin:5px auto;\"> У нас ещё не было заказов, но вы можете стать первыми!</div></center>");
    switch(portfX){
        case 0:
            $(".examples").empty();
            $(".examples").append(webEx);
            console.log(222);
            break;
        /*case 1:
            examples.innerHTML = logoEx;
            break;
        case 2:
            examples.innerHTML = botsEx;
            break;
        case 3:
            examples.innerHTML = appsEx;
            break;
        case 4:
            examples.innerHTML = designEx;
            break;
            */
            
    }
       
        }else{
            let webEx = "<div class=\"textProc\">We have been done website that in front of you</div>";
        let logoEx = "<div class=\"objectExample\">Лого #1</div>";
        let botsEx = "<div class=\"objectExample\">Чат-бот #1</div>";
        let appsEx = "<div class=\"objectExample\">Приложение #1</div>";
        let designEx = "<div class=\"objectExample\">Дизайн #1</div>";
        switch(portfX){
            case 0:
                $(".examples").append(webEx);
                break;
            /*case 1:
                examples.innerHTML = logoEx;
                break;
            case 2:
                examples.innerHTML = botsEx;
                break;
            case 3:
                examples.innerHTML = appsEx;
                break;
            case 4:
                examples.innerHTML = designEx;
                break;*/
            default:$(".examples").append("</div><center><div class=\"textProc\" style=\"font-size: 50px; margin:auto;\"> We didn't have orders yet, but u can be first one, who order us!</div></center>");
        }
       
    }
}

window.addEventListener("scroll", function(){
   let scrollPos = window.scrollY;
    
   if(scrollPos>640);
});