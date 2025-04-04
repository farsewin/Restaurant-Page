import './style.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

// Cache DOM elements
const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

// Function to clear content
function clearContent() {
    contentDiv.innerHTML = '';
}

// Function to set active button
function setActiveButton(button) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
}

// Event listeners for tab switching
homeBtn.addEventListener('click', () => {
    clearContent();
    contentDiv.appendChild(createHome());
    setActiveButton(homeBtn);
});

menuBtn.addEventListener('click', () => {
    clearContent();
    contentDiv.appendChild(createMenu());
    setActiveButton(menuBtn);
});

contactBtn.addEventListener('click', () => {
    clearContent();
    contentDiv.appendChild(createContact());
    setActiveButton(contactBtn);
});

// Initialize with home page
contentDiv.appendChild(createHome());
