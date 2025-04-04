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

    // Map placeholder
    const mapSection = document.createElement('div');
    mapSection.classList.add('map-section');
    
    const mapTitle = document.createElement('h3');
    mapTitle.textContent = 'Find Us';
    mapSection.appendChild(mapTitle);
    
    const map = document.createElement('div');
    map.classList.add('map');
    map.textContent = 'Map Placeholder - In a real application, this would be an embedded Google Map';
    mapSection.appendChild(map);
    
    content.appendChild(mapSection);

    return content;
}

export default createContact;
