function navigateTo(section) {
    alert(`Navigating to ${section} section...`);
    // Here you can add actual navigation logic or link redirection
}
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    document.getElementById('greeting').innerText = greeting;
}