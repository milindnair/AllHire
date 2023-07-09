let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})
function addToInbox(button) {
    console.log('addToInbox() called!');
    // Get the parent container of the clicked button
    const container = button.closest('.emp_container');

    // Extract the required details from the container
    const name = container.querySelector('h3').textContent;
    const location = container.querySelector('h4').textContent;
    const picture = container.querySelector('img').getAttribute('src');
    const employmentElements = container.querySelectorAll('div[style*="border: 1px solid black;"]');
    const employment = Array.from(employmentElements).map(el => el.textContent);
    const companyCount = container.querySelector('h3:last-child').textContent.match(/\d+/)[0];

    // Create a dynamic container object
    const containerObj = {
        containerId: container.id,
        name: name,
        location: location,
        picture: picture,
        employment: employment,
        companyCount: companyCount
    };

    // Save the container object to LocalStorage
    saveToLocalStorage(containerObj);

    button.disabled = true;
  button.textContent = 'Already Added';

    // Optional: Provide feedback or perform additional actions
    alert('Container with ID ' + containerObj.containerId + ' added to inbox!');
}

function saveToLocalStorage(containerObj) {
    // Get existing inbox items from LocalStorage
    let inboxItems = localStorage.getItem('inboxItems');

    if (inboxItems) {
        // Parse existing inbox items from JSON
        inboxItems = JSON.parse(inboxItems);
    } else {
        // Initialize an empty array for inbox items
        inboxItems = [];
    }

    // Add the new container object to the inbox items array
    inboxItems.push(containerObj);

    // Save the updated inbox items to LocalStorage
    localStorage.setItem('inboxItems', JSON.stringify(inboxItems));
}