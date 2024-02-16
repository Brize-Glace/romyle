const countdownDate = new Date('February 16, 2024 00:00:00').getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days == 0) {
        document.getElementById('countdown').innerText = `${hours} hours ${minutes} minutes and ${seconds} seconds`; 
        return;
    } if (hours == 0 && days == 0) {
        document.getElementById('countdown').innerText = `${minutes} minutes and ${seconds} seconds`;  
    } else {
        document.getElementById('countdown').innerText = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
    }

    

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('icon-container').style.display = 'flex';
        // document.getElementById('preOrder').style.display = 'none';
        // document.getElementsByTagName('iframe')[0].style.display = 'none';
    }
}, 1000);