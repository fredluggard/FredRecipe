const content = document.querySelector('#content');
//create elements and append to parents
let nav = document.createElement('div');
nav.className = 'nav';
content.appendChild(nav);

export let wrap = document.createElement('div');
wrap.className = 'wrap';
nav.appendChild(wrap);

export let logo = document.createElement('img');
logo.className = 'logo';
logo.src = '/src/rest-deliv.jpg';
logo.href = '../dist/index.html'
wrap.appendChild(logo);

let ul = document.createElement('ul');
wrap.appendChild(ul);

export function tagCreator(name){
    let li = document.createElement('li');
    ul.appendChild(li);
    let tag = document.createElement('a');
    tag.href = '#';
    tag.innerHTML = name;
    tag.className = name
    li.appendChild(tag);

    return{
        li,
        tag
    }
};


//Function for nav bar anchor tags
export let main = document.createElement('div');
main.className = 'main';
content.appendChild(main);

export let header = document.createElement('h1');
header.textContent = "Fred's Recipe";
main.appendChild(header);

export let para = document.createElement('p');
para.textContent = "Online delivery available to all locations";
main.appendChild(para);

export let firstImage = document.createElement('img');
firstImage.src = '/src/food.png';
main.appendChild(firstImage);

export function menuCreator(imgSource, cardName, cardDes, nameClass, text){
    let menu = document.createElement('div');
    menu.className = 'menu1'
    menu.style.display = 'none'
    content.appendChild(menu);
    let foodImage = document.createElement('img');
    foodImage.src = imgSource;
    menu.appendChild(foodImage);
    let cardTitle = document.createElement('h3');
    cardTitle.textContent = cardName;
    menu.appendChild(cardTitle)
    let cardPara = document.createElement('p');
    cardPara.textContent = cardDes;
    menu.appendChild(cardPara)
    let price = document.createElement('p');
    price.className = nameClass;
    price.textContent = text;
    menu.appendChild(price)

    return{
        menu, foodImage, cardTitle, cardPara, price
    }
}
export function locator(name){
    let newLocation = document.createElement('div');
    newLocation.className = 'newLocation';
    newLocation.style.display = 'none';
    content.appendChild(newLocation);
    let imgLocation = document.createElement('img');
    imgLocation.className = 'imgLocation';
    imgLocation.src = '/src/location.jpg';
    newLocation.appendChild(imgLocation);
    let place = document.createElement('p');
    place.className = 'place';
    place.textContent = name;
    newLocation.appendChild(place)

    return{
        newLocation, imgLocation, place
    }
}

export function aboutUs(name){
    let about = document.createElement('div');
    about.className = 'about1';
    about.style.display = 'none';
    content.appendChild(about);
    let aboutTop = document.createElement('h2');
    aboutTop.className = 'aboutTop';
    aboutTop.textContent = "About Us";
    let writeup = document.createElement('p');
    writeup.className = 'writeup';
    writeup.textContent = name;
    about.appendChild(aboutTop);
    about.appendChild(writeup);

    return{
        about, writeup, aboutTop
    }
}

export function blogger(name){
    let blogUs = document.createElement('div');
    blogUs.className = 'blogUs';
    blogUs.style.display = 'none';
    content.appendChild(blogUs);
    let blogTop = document.createElement('h2');
    blogTop.className = 'blogTop';
    blogTop.textContent = "Our Blog";
    let blogUp = document.createElement('p');
    blogUp.className = 'blogUp';
    blogUp.textContent = name;
    blogUs.appendChild(blogTop);
    blogUs.appendChild(blogUp);

    return{
        blogUs, blogTop, blogUp
    }
}