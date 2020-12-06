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
        image : 'images/SkodaSuberb_3.jpg',
        link : 'https://www.sahibinden.com/'
    },
    {
        name : 'Volkswages Beetle',
        image : 'images/wvbeetle.jpg',
        link : 'https://www.sahibinden.com/'
    }
    
];

let index=0;

document.querySelector('.card-title').textContent=models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);
