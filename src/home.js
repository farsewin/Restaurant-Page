import restaurantImage from './assets/restaurant.jpg';

function createHome() {
    const content = document.createElement('div');
    content.classList.add('home-page');

    // Hero section
    const hero = document.createElement('div');
    hero.classList.add('hero');

    // Create and add restaurant image
    const img = new Image();
    img.src = restaurantImage;
    img.alt = 'Gourmet Haven Restaurant';
    img.classList.add('restaurant-image');
    hero.appendChild(img);

    const heroTitle = document.createElement('h2');
    heroTitle.textContent = 'Welcome to Gourmet Haven';
    hero.appendChild(heroTitle);

    const heroText = document.createElement('p');
    heroText.textContent = 'Experience culinary excellence in a warm and inviting atmosphere.';
    hero.appendChild(heroText);

    // About section
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutTitle = document.createElement('h3');
    aboutTitle.textContent = 'Our Story';
    about.appendChild(aboutTitle);

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Founded in 2010, Gourmet Haven has been serving exceptional cuisine made with locally-sourced ingredients. Our chefs blend traditional techniques with modern innovation to create unforgettable dining experiences. We believe in supporting local farmers and producers while delivering the highest quality dishes to our guests.';
    about.appendChild(aboutText);

    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours';
    hoursTitle.style.marginTop = '1.5rem';
    about.appendChild(hoursTitle);

    const hoursList = document.createElement('ul');
    hoursList.style.listStyleType = 'none';
    
    const hours = [
        'Monday: 11:30 AM - 10:00 PM',
        'Tuesday: 11:30 AM - 10:00 PM',
        'Wednesday: 11:30 AM - 10:00 PM',
        'Thursday: 11:30 AM - 10:00 PM',
        'Friday: 11:30 AM - 11:00 PM',
        'Saturday: 10:00 AM - 11:00 PM',
        'Sunday: 10:00 AM - 9:00 PM'
    ];

    hours.forEach(day => {
        const item = document.createElement('li');
        item.textContent = day;
        hoursList.appendChild(item);
    });

    about.appendChild(hoursList);

    // Append all sections to content
    content.appendChild(hero);
    content.appendChild(about);

    return content;
}

export default createHome;
