// Home Page Picture Modal Functionality

    // Had no time to create proper modal feature, very rushed code

// Code below is for index page "Meet Our Team" section
// Each team member image has a hover transition, not accessible yet
// When clicked, modal pops up with member's image and name
// Close button on the bottom right of page
// Modal partial created, as well as html elements

// Will be reworked in the coming days, code is not DRY at ALL

const memberOne = document.getElementById('member one');
const memberTwo = document.getElementById('member two');
const memberThree = document.getElementById('member three');
const memberFour = document.getElementById('member four');
const memberFive = document.getElementById('member five');

function showModal(event) {
    document.querySelector(event).style.display = 'flex';
}

function hideModal(event) {
    document.querySelector(event).style.display = 'none';
}

function close(event) {
    const closeModal = document.querySelector(event);
    closeModal.addEventListener('click', () => {
        hideModal('.modal_popup');
        hideModal('.modal_popup .one');
        hideModal('.modal_popup .two');
        hideModal('.modal_popup .three');
        hideModal('.modal_popup .four');
        hideModal('.modal_popup .five');
    })
}

memberOne.addEventListener('click', () => {
    showModal('.modal_popup');
    showModal('.modal_popup .one');
    close('.modal_popup .one i');
});

memberTwo.addEventListener('click', () => {
    showModal('.modal_popup');
    showModal('.modal_popup .two');
    close('.modal_popup .two i');
});

memberThree.addEventListener('click', () => {
    showModal('.modal_popup');
    showModal('.modal_popup .three');
    close('.modal_popup .three i');
});

memberFour.addEventListener('click', () => {
    showModal('.modal_popup');
    showModal('.modal_popup .four');
    close('.modal_popup .four i');
});

memberFive.addEventListener('click', () => {
    showModal('.modal_popup');
    showModal('.modal_popup .five');
    close('.modal_popup .five i');
});

