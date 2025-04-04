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

    // Enhanced Map section
    const mapSection = document.createElement('div');
    mapSection.classList.add('map-section');
    mapSection.style.marginTop = '2rem';
    
    const mapTitle = document.createElement('h3');
    mapTitle.textContent = 'Find Us';
    mapTitle.style.marginBottom = '1rem';
    mapSection.appendChild(mapTitle);
    
    // Create a more visually appealing map placeholder
    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.style.padding = '1rem';
    mapContainer.style.backgroundColor = '#f9f5f0';
    mapContainer.style.borderRadius = '8px';
    mapContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    
    const map = document.createElement('div');
    map.classList.add('map');
    map.style.height = '350px';
    map.style.backgroundColor = '#e6e6e6';
    map.style.borderRadius = '4px';
    map.style.position = 'relative';
    map.style.overflow = 'hidden';
    
    // Add map elements to make it look more like a real map
    const mapPin = document.createElement('div');
    mapPin.style.position = 'absolute';
    mapPin.style.top = '50%';
    mapPin.style.left = '50%';
    mapPin.style.transform = 'translate(-50%, -50%)';
    mapPin.style.width = '20px';
    mapPin.style.height = '20px';
    mapPin.style.backgroundColor = '#e74c3c';
    mapPin.style.borderRadius = '50%';
    mapPin.style.border = '3px solid #fff';
    mapPin.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
    map.appendChild(mapPin);
    
    // Add some fake map features
    const mapRoad1 = document.createElement('div');
    mapRoad1.style.position = 'absolute';
    mapRoad1.style.top = '45%';
    mapRoad1.style.left = '0';
    mapRoad1.style.width = '100%';
    mapRoad1.style.height = '10px';
    mapRoad1.style.backgroundColor = '#ddd';
    map.appendChild(mapRoad1);
    
    const mapRoad2 = document.createElement('div');
    mapRoad2.style.position = 'absolute';
    mapRoad2.style.top = '0';
    mapRoad2.style.left = '48%';
    mapRoad2.style.width = '10px';
    mapRoad2.style.height = '100%';
    mapRoad2.style.backgroundColor = '#ddd';
    map.appendChild(mapRoad2);
    
    // Add map overlay text
    const mapOverlay = document.createElement('div');
    mapOverlay.style.position = 'absolute';
    mapOverlay.style.bottom = '10px';
    mapOverlay.style.right = '10px';
    mapOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    mapOverlay.style.padding = '5px 10px';
    mapOverlay.style.borderRadius = '4px';
    mapOverlay.style.fontSize = '12px';
    mapOverlay.style.fontWeight = 'bold';
    mapOverlay.textContent = 'Gourmet Haven';
    map.appendChild(mapOverlay);
    
    mapContainer.appendChild(map);
    
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
