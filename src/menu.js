function createMenu() {
    const content = document.createElement('div');
    content.classList.add('menu-page');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';
    menuTitle.style.textAlign = 'center';
    menuTitle.style.marginBottom = '2rem';
    content.appendChild(menuTitle);

    // Appetizers section
    const appetizersSection = createMenuSection('Appetizers', [
        {
            name: 'Truffle Arancini',
            price: '$12',
            description: 'Crispy risotto balls with wild mushrooms and truffle oil'
        },
        {
            name: 'Seared Scallops',
            price: '$16',
            description: 'Pan-seared scallops with cauliflower purée and bacon jam'
        },
        {
            name: 'Burrata Salad',
            price: '$14',
            description: 'Fresh burrata with heirloom tomatoes, basil, and aged balsamic'
        },
        {
            name: 'Charcuterie Board',
            price: '$18',
            description: 'Selection of artisanal cheeses and cured meats with accompaniments'
        }
    ]);
    content.appendChild(appetizersSection);

    // Main Courses section
    const mainsSection = createMenuSection('Main Courses', [
        {
            name: 'Herb-Crusted Rack of Lamb',
            price: '$32',
            description: 'With rosemary jus, roasted vegetables, and potato gratin'
        },
        {
            name: 'Pan-Seared Salmon',
            price: '$28',
            description: 'With lemon beurre blanc, asparagus, and wild rice pilaf'
        },
        {
            name: 'Mushroom Risotto',
            price: '$24',
            description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan'
        },
        {
            name: 'Filet Mignon',
            price: '$36',
            description: '8oz grass-fed beef with red wine reduction and garlic mashed potatoes'
        },
        {
            name: 'Roasted Duck Breast',
            price: '$30',
            description: 'With cherry gastrique, braised lentils, and seasonal vegetables'
        }
    ]);
    content.appendChild(mainsSection);

    // Desserts section
    const dessertsSection = createMenuSection('Desserts', [
        {
            name: 'Dark Chocolate Soufflé',
            price: '$12',
            description: 'With vanilla bean ice cream (please allow 20 minutes)'
        },
        {
            name: 'Crème Brûlée',
            price: '$10',
            description: 'Classic vanilla custard with caramelized sugar'
        },
        {
            name: 'Seasonal Fruit Tart',
            price: '$11',
            description: 'With almond frangipane and honey mascarpone'
        },
        {
            name: 'Artisanal Cheese Plate',
            price: '$14',
            description: 'Selection of fine cheeses with fruit compote and crackers'
        }
    ]);
    content.appendChild(dessertsSection);

    return content;
}

function createMenuSection(title, items) {
    const section = document.createElement('div');
    section.classList.add('menu-section');

    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemInfo = document.createElement('div');
        
        const namePrice = document.createElement('div');
        namePrice.style.display = 'flex';
        namePrice.style.justifyContent = 'space-between';
        
        const name = document.createElement('span');
        name.classList.add('menu-item-name');
        name.textContent = item.name;
        
        const price = document.createElement('span');
        price.classList.add('menu-item-price');
        price.textContent = item.price;
        
        namePrice.appendChild(name);
        namePrice.appendChild(price);
        itemInfo.appendChild(namePrice);
        
        const description = document.createElement('div');
        description.classList.add('menu-item-description');
        description.textContent = item.description;
        itemInfo.appendChild(description);
        
        menuItem.appendChild(itemInfo);
        section.appendChild(menuItem);
    });

    return section;
}

export default createMenu;
