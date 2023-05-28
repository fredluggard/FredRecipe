import {
    tagCreator, wrap, logo, main, menuCreator, locator, aboutUs, blogger
} from './homePage'

let line1 = tagCreator('Menu')
let line2 = tagCreator('Locations')
let line3 = tagCreator('About')
let line4 = tagCreator('Blog')
let order = document.createElement('a');
order.className = 'order';
order.href = '#';
order.textContent = 'Order Online';
wrap.appendChild(order);

let menuHeader = document.createElement('h1');
menuHeader.textContent = 'Our Amazing Recipes';
menuHeader.style.display = 'none';
content.appendChild(menuHeader);

let newMenu1 = menuCreator('/src/beans.jfif', 'Beans Pottage', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt quidem nobis harum dicta vero natus commodi sapiente ipsam!', 'price', '$4.99');

let newMenu2 = menuCreator('/src/coconut.jpg', 'Coconut Rice', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt quidem nobis harum dicta vero natus commodi sapiente ipsam!', 'price', '$5.45');

let newMenu3 = menuCreator('/src/egwusi.jpg', 'Pounded Yam and Egwusi Soup', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt quidem nobis harum dicta vero natus commodi sapiente ipsam!', 'price', '$6.44');

let newMenu4 = menuCreator('/src/jollof.jpg', 'Jollof Rice', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt quidem nobis harum dicta vero natus commodi sapiente ipsam!', 'price', '$6.35');

let newMenu5 = menuCreator('/src/stew.jpg', 'Rice and Stew', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt quidem nobis harum dicta vero natus commodi sapiente ipsam!', 'price', '$5.57');

let newMenu6 = menuCreator('/src/vege.jpg', 'Vegetabe Rice', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt quidem nobis harum dicta vero natus commodi sapiente ipsam!', 'price', '$5.78');

let location1 = locator('University of Nigeria Nsukka Nsukka Local Government Area, 400241, Nsukka +2348140925886');

let location2 = locator("Opposite Onyi's Lodge Obiagu, Enugu +2345678909877");

let show = aboutUs('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae recusandae aliquam, neque aut id dolores illum nesciunt laborum labore maxime suscipit quas ea dolore vero optio voluptatum molestias? Aperiam minima labore atque tempore? Esse aperiam dolores pariatur? Minima deleniti, maiores illum praesentium voluptate exercitationem assumenda non veniam? Hic repellendus commodi libero est exercitationem ex maiores voluptas blanditiis placeat sint harum sed doloremque eum delectus quisquam molestiae corrupti, accusamus asperiores molestias at? Soluta sapiente placeat laboriosam, tempore optio dicta! Suscipit nobis quis quod vero praesentium qui eius, quaerat nam ratione eum eos, ullam laborum numquam libero hic accusantium maiores molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae recusandae aliquam, neque aut id dolores illum nesciunt laborum labore maxime suscipit quas ea dolore vero optio voluptatum molestias? Aperiam minima labore atque tempore? Esse aperiam dolores pariatur? Minima deleniti, maiores illum praesentium voluptate exercitationem assumenda non veniam? Hic repellendus commodi libero est exercitationem ex maiores voluptas blanditiis placeat sint harum sed doloremque eum delectus quisquam molestiae corrupti, accusamus asperiores molestias at? Soluta sapiente placeat laboriosam, tempore optio dicta! Suscipit nobis quis quod vero praesentium qui eius, quaerat nam ratione eum eos, ullam laborum numquam libero hic accusantium maiores molestiae.');

let ourBlog = blogger('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae recusandae aliquam, neque aut id dolores illum nesciunt laborum labore maxime suscipit quas ea dolore vero optio voluptatum molestias? Aperiam minima labore atque tempore? Esse aperiam dolores pariatur? Minima deleniti, maiores illum praesentium voluptate exercitationem assumenda non veniam? Hic repellendus commodi libero est exercitationem ex maiores voluptas blanditiis placeat sint harum sed doloremque eum delectus quisquam molestiae corrupti, accusamus asperiores molestias at? Soluta sapiente placeat laboriosam, tempore optio dicta! Suscipit nobis quis quod vero praesentium qui eius, quaerat nam ratione eum eos, ullam laborum numquam libero hic accusantium maiores molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae recusandae aliquam, neque aut id dolores illum nesciunt laborum labore maxime suscipit quas ea dolore vero optio voluptatum molestias? Aperiam minima labore atque tempore? Esse aperiam dolores pariatur? Minima deleniti, maiores illum praesentium voluptate exercitationem assumenda non veniam? Hic repellendus commodi libero est exercitationem ex maiores voluptas blanditiis placeat sint harum sed doloremque eum delectus quisquam molestiae corrupti, accusamus asperiores molestias at? Soluta sapiente placeat laboriosam, tempore optio dicta! Suscipit nobis quis quod vero praesentium qui eius, quaerat nam ratione eum eos, ullam laborum numquam libero hic accusantium maiores molestiae Aperiam minima labore atque tempore? Esse aperiam dolores pariatur? Minima deleniti, maiores illum praesentium voluptate exercitationem assumenda non veniam? Hic repellendus commodi libero est exercitationem ex maiores voluptas blanditiis placeat sint harum sed doloremque eum delectus quisquam molestiae corrupti, accusamus asperiores molestias at? Soluta sapiente placeat laboriosam, tempore optio dicta! Suscipit nobis quis quod vero praesentium qui eius, quaerat nam ratione eum eos, ullam laborum numquam libero hic accusantium maiores molestiae Esse aperiam dolores pariatur? Minima deleniti, maiores illum praesentium voluptate exercitationem assumenda non veniam? Hic repellendus commodi libero est exercitationem ex maiores voluptas blanditiis placeat sint harum sed doloremque eum delectus quisquam molestiae corrupti, accusamus asperiores molestias at? Soluta sapiente placeat laboriosam, tempore optio dicta! Suscipit nobis.');



function changeMenu(event){
    event.preventDefault();
    if (main.classList.contains('main')) {
        main.style.display = 'none';
        show.about.style.display = 'none';
        ourBlog.blogUs.style.display = 'none'
        location1.newLocation.style.display = 'none';
        location2.newLocation.style.display = 'none';
        menuHeader.style.display = 'block';
        newMenu1.menu.style.display = 'grid';
        newMenu2.menu.style.display = 'grid';
        newMenu3.menu.style.display = 'grid';
        newMenu4.menu.style.display = 'grid';
        newMenu5.menu.style.display = 'grid';
        newMenu6.menu.style.display = 'grid';
    }
}

function home(event){
    event.preventDefault();
    main.style.display = 'grid';
    menuHeader.style.display = 'none';
    show.about.style.display = 'none';
    ourBlog.blogUs.style.display = 'none'
    newMenu1.menu.style.display = 'none';
    newMenu2.menu.style.display = 'none';
    newMenu3.menu.style.display = 'none';
    newMenu4.menu.style.display = 'none';
    newMenu5.menu.style.display = 'none';
    newMenu6.menu.style.display = 'none';
    location1.newLocation.style.display = 'none';
    location2.newLocation.style.display = 'none';
}

function locationChange(event){
    event.preventDefault();
    if (location1.newLocation.classList.contains('newLocation')) {
        location1.newLocation.style.display = 'grid';
        location2.newLocation.style.display = 'grid';
        main.style.display = 'none';
        menuHeader.style.display = 'none';
        show.about.style.display = 'none';
        ourBlog.blogUs.style.display = 'none'
        newMenu1.menu.style.display = 'none';
        newMenu2.menu.style.display = 'none';
        newMenu3.menu.style.display = 'none';
        newMenu4.menu.style.display = 'none';
        newMenu5.menu.style.display = 'none';
        newMenu6.menu.style.display = 'none';
    }
}

function aboutChanger(event){
    event.preventDefault();
    if (aboutChange.classList.contains('About')) {
        show.about.style.display = 'grid';
        location1.newLocation.style.display = 'none';
        location2.newLocation.style.display = 'none';
        main.style.display = 'none';
        ourBlog.blogUs.style.display = 'none'
        menuHeader.style.display = 'none';
        newMenu1.menu.style.display = 'none';
        newMenu2.menu.style.display = 'none';
        newMenu3.menu.style.display = 'none';
        newMenu4.menu.style.display = 'none';
        newMenu5.menu.style.display = 'none';
        newMenu6.menu.style.display = 'none';
    }
}

function blogChanger(event){
    event.preventDefault();
    if (blogChange.classList.contains('Blog')) {
        ourBlog.blogUs.style.display = 'grid';
        show.about.style.display = 'none';
        location1.newLocation.style.display = 'none';
        location2.newLocation.style.display = 'none';
        main.style.display = 'none';
        menuHeader.style.display = 'none';
        newMenu1.menu.style.display = 'none';
        newMenu2.menu.style.display = 'none';
        newMenu3.menu.style.display = 'none';
        newMenu4.menu.style.display = 'none';
        newMenu5.menu.style.display = 'none';
        newMenu6.menu.style.display = 'none';
    }
}


// For the nav bar
logo.addEventListener('click', home);
let changer = document.querySelector('.Menu');
changer.addEventListener('click', changeMenu);
let locate = document.querySelector('.Locations');
locate.addEventListener('click', locationChange);
let aboutChange = document.querySelector('.About');
aboutChange.addEventListener('click', aboutChanger);
let blogChange = document.querySelector('.Blog');
blogChange.addEventListener('click', blogChanger);
let orderOn = document.querySelector('.order');
orderOn.addEventListener('click', changeMenu)



