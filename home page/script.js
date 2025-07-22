// document.getElementById("gstSwitch").addEventListener("change", function () {
//   const label = document.querySelector("label[for='gstSwitch']");
//   label.innerText = this.checked ? "Incl. GST" : "Excl. GST";
// });

const categories = [
    {
        title: 'Cooking Equipment',
        img: 'image/card/cooking_equipment.png',
        description: 'Cooktops & Ranges<br>Benchtop Equipment<br>Commercial Ovens<br>Deep Fryers<br>and more...'
    },
    {
        title: 'Commercial Fridges',
        img: 'image/card/commercial.png',
        description: 'Bar Fridges<br>Upright Fridges<br>Wine Fridges<br>Workbench Fridges<br>and more...'
    },
    {
        title: 'Benchtop Equipment',
        img: 'image/card/benchtop.png',
        description: 'Contact Grills<br>Toaster<br>Induction Cooking<br>Rotisseries<br>and more...'
    },
    {
        title: 'Food Preparation Equipment',
        img: 'image/card/food.png',
        description: 'Food Processor<br>Pizza Equipment<br>Vegetable Cutter<br>Vacuum Packers<br>and more...'
    },
    {
        title: 'Cooking Equipment',
        img: 'image/card/cooking_equipment.png',
        description: 'Cooktops & Ranges<br>Benchtop Equipment<br>Commercial Ovens<br>Deep Fryers<br>and more...'
    },
    {
        title: 'Commercial Fridges',
        img: 'image/card/commercial.png',
        description: 'Bar Fridges<br>Upright Fridges<br>Wine Fridges<br>Workbench Fridges<br>and more...'
    },
    {
        title: 'Benchtop Equipment',
        img: 'image/card/benchtop.png',
        description: 'Contact Grills<br>Toaster<br>Induction Cooking<br>Rotisseries<br>and more...'
    },
    {
        title: 'Food Preparation Equipment',
        img: 'image/card/food.png',
        description: 'Food Processor<br>Pizza Equipment<br>Vegetable Cutter<br>Vacuum Packers<br>and more...'
    },
    {
        title: 'Cooking Equipment',
        img: 'image/card/cooking_equipment.png',
        description: 'Cooktops & Ranges<br>Benchtop Equipment<br>Commercial Ovens<br>Deep Fryers<br>and more...'
    },
    {
        title: 'Commercial Fridges',
        img: 'image/card/commercial.png',
        description: 'Bar Fridges<br>Upright Fridges<br>Wine Fridges<br>Workbench Fridges<br>and more...'
    },
    {
        title: 'Benchtop Equipment',
        img: 'image/card/benchtop.png',
        description: 'Contact Grills<br>Toaster<br>Induction Cooking<br>Rotisseries<br>and more...'
    },
    {
        title: 'Food Preparation Equipment',
        img: 'image/card/food.png',
        description: 'Food Processor<br>Pizza Equipment<br>Vegetable Cutter<br>Vacuum Packers<br>and more...'
    }
];

const carouselRow = document.getElementById('carouselRow');

categories.forEach(cat => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-6'; 
    col.innerHTML = `
        <div class="category-card">
            <img src="${cat.img}" alt="${cat.title}" />
            <h5>${cat.title}</h5>
            <p>${cat.description}</p>
            <a href="#">View All →</a>
        </div>
    `;
    carouselRow.appendChild(col);
});

const products = [
    { name: 'Convect Max Digital Convection Oven with Grill', price: '$1699.00 excl. GST', img: 'image/card/1.png' },
    { name: 'Convect Max Convection Oven with Grill – YXD-3AE', price: '$1450.00 excl. GST', img: 'image/card/2.png' },
    { name: 'Thermaster Wet and Dry Bain Marie Display 5x1/1GN', price: '$5799.00 excl. GST', img: 'image/card/3.png' },
    { name: 'Tyrone Fixed Head Heavy Duty 68L Spiral Mixer – SM68', price: '$6150.00 excl. GST', img: 'image/card/4.png' },
    { name: 'Bonvue Bench Top Gelato / Ice Cream Display Showcase', price: '$1933.00 excl. GST', img: 'image/card/5.png' },
];

const ProductcarouselRow = document.getElementById('productCarousel');

products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-6';
    col.innerHTML = `
        <div class="product-card">
            <span class="badge-new">New</span>
            <img src="${product.img}" alt="${product.name}">
            <h6>${product.name}</h6>
            <p>${product.price}</p>
            <button class="order-btn">Order Now →</button>
        </div>
    `;
    ProductcarouselRow.appendChild(col);
});
const brands = [
    { name: 'Brand 1', img: 'image/Shop by Brands/image (1).png' },
    { name: 'Brand 2', img: 'image/Shop by Brands/image (2).png' },
    { name: 'Brand 3', img: 'image/Shop by Brands/image (3).png' },
    { name: 'Brand 4', img: 'image/Shop by Brands/image (4).png' },
    { name: 'Brand 5', img: 'image/Shop by Brands/image.png' },
    { name: 'Brand 6', img: 'image/Shop by Brands/image (1).png' },
    { name: 'Brand 7', img: 'image/Shop by Brands/image (2).png' },
        
];

const brandCarousel = document.getElementById('brandCarousel');

brands.forEach(brand => {
    const col = document.createElement('div');
    col.className = 'col-lg-2 col-4 mb-4';
    col.innerHTML = `
        <img src="${brand.img}" alt="${brand.name}" class="brand-img">
    `;
    brandCarousel.appendChild(col);
});


const hotDeals = [
    { 
        name: 'FED-X S/S Single Door Upright Freezer – XURF600S', 
        oldPrice: '$3549.00', 
        newPrice: '$2484.30 excl. GST',
        img: 'image/card/5.png', 
        discount: '-30%' 
    },
    { 
        name: 'Showroom Stock: Fagor 700 series ULPG 6 burner', 
        oldPrice: '$6622.80', 
        newPrice: '$3311.40 excl. GST',
        img: 'image/card/6.png', 
        discount: '-50%' 
    },
    { 
        name: 'Showroom Stock: Fagor 700 series natural gas mid grill', 
        oldPrice: '$3850.80', 
        newPrice: '$1925.40 excl. GST',
        img: 'image/card/7.png', 
        discount: '-50%' 
    },
    { 
        name: 'Ex-Showroom: Fagor 700 Series Natural Gas Pasta Cooker', 
        oldPrice: '$4661.10', 
        newPrice: '$3262.77 excl. GST',
        img: 'image/card/8.png', 
        discount: '-30%' 
    },
    { 
        name: 'Showroom Stock: Vegetable & Fruit Wedger', 
        oldPrice: '$299.00', 
        newPrice: '$149.50 excl. GST',
        img: 'image/card/9.png', 
        discount: '-50%' 
    },
];

const hotDealCarousel = document.getElementById('hotDealCarousel');

hotDeals.forEach(deal => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
        <div class="hot-deal-card">
            <span class="badge-discount">${deal.discount}<br>OFF</span>
            <img src="${deal.img}" alt="${deal.name}" class="hot-img">
            <h6>${deal.name}</h6>
            <div class="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="old-price">${deal.oldPrice}</p>
            <p class="new-price">${deal.newPrice}</p>
            <button class="add-to-cart-btn">Add to Cart 🛒</button>
        </div>
    `;
    hotDealCarousel.appendChild(col);
});


const reviews = [
    {
        name: 'Chef Emily Carter',
        location: 'Auckland, NZ',
        img: 'image/profile.png',
        stars: 5,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    },
    {
        name: 'Michael Tan',
        location: 'Auckland, NZ',
        img: 'image/profile.png',
        stars: 4,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    },
    {
        name: 'Lisa Johnson',
        location: 'Wellington, NZ',
        img: 'image/profile.png',
        stars: 5,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    },
    {
        name: 'Chef Emily Carter',
        location: 'Auckland, NZ',
        img: 'image/profile.png',
        stars: 5,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    },
    {
        name: 'Michael Tan',
        location: 'Auckland, NZ',
        img: 'image/profile.png',
        stars: 4,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    },
    {
        name: 'Lisa Johnson',
        location: 'Wellington, NZ',
        img: 'image/profile.png',
        stars: 5,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    },
    {
        name: 'John Doe',
        location: 'Sydney, AU',
        img: 'image/profile.png',
        stars: 5,
        comment: 'The commercial blender from FED Products has been a game-changer in our kitchen. We use it daily to create silky-smooth sauces and emulsions for our fine dining menu, and it handles everything with ease.'
    }
];

const reviewCarousel = document.getElementById('reviewCarousel');

reviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'col-lg-3 col-6 review-card';
    card.innerHTML = `
        <div class="review-header">
            <img src="${review.img}" alt="${review.name}">
            <div>
                <h4>${review.name}</h4>
                <small>${review.location}</small>
            </div>
        </div>
        <div class="stars" style="align-items: center; display: flex; justify-content: center;">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
        <p style="text-align: center;border-top: 1px solid #ddd; padding: 10px; border-radius: 5px;">${review.comment}</p>
        <div class="google-link"><img src="image/google.png" alt="Google Logo"><span>View on Google</span></div>
    `;
    reviewCarousel.appendChild(card);
});
const carouselWrappers = document.querySelectorAll('.carousel-wrapper');

carouselWrappers.forEach(wrapper => {
    const row = wrapper.querySelector('.row, .review-row');
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');

    const scrollAmount = 300;

    prevBtn.addEventListener('click', () => {
        row.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        row.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});




const scrollElements = document.querySelectorAll(".scroll-animate");

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function scrollHandler() {
    scrollElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", scrollHandler);
window.addEventListener("load", scrollHandler);
