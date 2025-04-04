function createContact() {
    const content = document.createElement('div');
    content.classList.add('contact-page');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactTitle.style.textAlign = 'center';
    contactTitle.style.marginBottom = '2rem';
    content.appendChild(contactTitle);

    // Contact information section
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const infoTitle = document.createElement('h3');
    infoTitle.textContent = 'Get In Touch';
    contactInfo.appendChild(infoTitle);

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');

    // Left column - Contact details
    const leftColumn = document.createElement('div');
    
    // Address
    const addressItem = document.createElement('div');
    addressItem.classList.add('contact-item');
    
    const addressTitle = document.createElement('h4');
    addressTitle.textContent = 'Address';
    addressItem.appendChild(addressTitle);
    
    const address = document.createElement('p');
    address.innerHTML = '123 Culinary Avenue<br>Foodie District<br>Gourmet City, GC 12345';
    addressItem.appendChild(address);
    leftColumn.appendChild(addressItem);
    
    // Hours
    const hoursItem = document.createElement('div');
    hoursItem.classList.add('contact-item');
    
    const hoursTitle = document.createElement('h4');
    hoursTitle.textContent = 'Hours';
    hoursItem.appendChild(hoursTitle);
    
    const hours = document.createElement('p');
    hours.innerHTML = 'Monday - Thursday: 11:30 AM - 10:00 PM<br>Friday: 11:30 AM - 11:00 PM<br>Saturday: 10:00 AM - 11:00 PM<br>Sunday: 10:00 AM - 9:00 PM';
    hoursItem.appendChild(hours);
    leftColumn.appendChild(hoursItem);

    // Right column - More contact details
    const rightColumn = document.createElement('div');
    
    // Phone
    const phoneItem = document.createElement('div');
    phoneItem.classList.add('contact-item');
    
    const phoneTitle = document.createElement('h4');
    phoneTitle.textContent = 'Phone';
    phoneItem.appendChild(phoneTitle);
    
    const phone = document.createElement('p');
    phone.textContent = '(555) 123-4567';
    phoneItem.appendChild(phone);
    rightColumn.appendChild(phoneItem);
    
    // Email
    const emailItem = document.createElement('div');
    emailItem.classList.add('contact-item');
    
    const emailTitle = document.createElement('h4');
    emailTitle.textContent = 'Email';
    emailItem.appendChild(emailTitle);
    
    const email = document.createElement('p');
    email.textContent = 'info@gourmethaven.com';
    emailItem.appendChild(email);
    rightColumn.appendChild(emailItem);
    
    // Reservations
    const reservationsItem = document.createElement('div');
    reservationsItem.classList.add('contact-item');
    
    const reservationsTitle = document.createElement('h4');
    reservationsTitle.textContent = 'Reservations';
    reservationsItem.appendChild(reservationsTitle);
    
    const reservations = document.createElement('p');
    reservations.textContent = 'For reservations, please call us or book online.';
    reservationsItem.appendChild(reservations);
    rightColumn.appendChild(reservationsItem);

    // Add columns to contact details
    contactDetails.appendChild(leftColumn);
    contactDetails.appendChild(rightColumn);
    contactInfo.appendChild(contactDetails);
    content.appendChild(contactInfo);

    // Enhanced Map section with embedded Google Map
    const mapSection = document.createElement('div');
    mapSection.classList.add('map-section');
    mapSection.style.marginTop = '2rem';
    
    const mapTitle = document.createElement('h3');
    mapTitle.textContent = 'Find Us';
    mapTitle.style.marginBottom = '1rem';
    mapSection.appendChild(mapTitle);
    
    // Create map container
    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.style.padding = '1rem';
    mapContainer.style.backgroundColor = '#f9f5f0';
    mapContainer.style.borderRadius = '8px';
    mapContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    
    // Create iframe for Google Maps
    const mapIframe = document.createElement('iframe');
    mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926158385895!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1617734684111!5m2!1sen!2sus';
    mapIframe.width = '100%';
    mapIframe.height = '350px';
    mapIframe.style.border = '0';
    mapIframe.allowFullscreen = '';
    mapIframe.loading = 'lazy';
    mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
    mapIframe.style.borderRadius = '4px';
    
    mapContainer.appendChild(mapIframe);
    
    // Add directions text
    const directions = document.createElement('div');
    directions.style.marginTop = '1rem';
    directions.style.padding = '0.5rem';
    directions.style.backgroundColor = '#fff';
    directions.style.borderRadius = '4px';
    directions.style.border = '1px solid #e6c9a8';
    
    const directionsTitle = document.createElement('h4');
    directionsTitle.textContent = 'Directions';
    directionsTitle.style.marginBottom = '0.5rem';
    directions.appendChild(directionsTitle);
    
    const directionsText = document.createElement('p');
    directionsText.innerHTML = 'Located in the heart of Foodie District, we\'re just a 5-minute walk from Central Station.<br>Parking is available on Culinary Avenue and in the nearby Public Parking Garage.';
    directions.appendChild(directionsText);
    
    mapContainer.appendChild(directions);
    mapSection.appendChild(mapContainer);
    
    content.appendChild(mapSection);

    return content;
}

export default createContact;
