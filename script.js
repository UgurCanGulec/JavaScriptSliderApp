//MODELS 
var models=[
    {
        name : 'Audi E-Tron',
        image : 'images/audi-e-tron-sportback.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Fiat Panda',
        image : 'images/fiatPanda.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Mazda CX3',
        image : 'images/Mazda_CX-3.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Mazda 3',
        image : 'images/mazda3.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Mercedes CLA 200',
        image : 'images/mercedesCla200.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Skoda SUPERB',
        image : 'images/SkodaSuperb_3.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Volkswages Beetle',
        image : 'images/wvbeetle.jpg',
        link : 'https://www.sahibinden.com/'
    }
    
];

var settings={
    duration : 4000,
    random : false
}


//UI VARRIABLES
var cardImage=document.querySelector('.card-img-top');
var cardTitle=document.querySelector('.card-title');
var cardLink=document.querySelector('.card-link');
var leftButton=document.querySelector('.fa-arrow-circle-left');
var rightButton=document.querySelector('.fa-arrow-circle-right')
var allButtons=document.querySelectorAll('.arrow');


var index=0;
var slideCount=models.length;
var interval;

//*-*-*-*-*-*-*-*-*-*-*-*-*MAIN*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

init(settings);

leftButton.addEventListener('click',function(){
    index = index == 0 ? slideCount-1 : index-1 ;
    showSlide(index);
});

rightButton.addEventListener('click',function(){
    index = index == slideCount-1 ? 0 : index+1 ;
    showSlide(index);
});

allButtons.forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});
allButtons.forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});

//*-*-*-*-*-*-*-*-*-*-*-*-*MAIN*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

function init(settings){
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            do {
                index=Math.floor(Math.random()*slideCount);

            } while (index==prev);
            prev=index;

        }else{
            if(index==slideCount-1){
                index=0;
            }
            showSlide(index);
            index++;
            
        }
        showSlide(index);
    },settings.duration);

}

function showSlide(index){
    
    cardImage.setAttribute('src',models[index].image);
    cardTitle.textContent=models[index].name;
    cardLink.setAttribute('href',models[index].link);

}



