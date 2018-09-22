var clients = document.querySelector('.clients-list'),
    clientsCount = 8,
    closeButtons = document.querySelectorAll('.button-close'),
    currentSlide = 0,
    prevButtons = document.querySelectorAll('.prev'),
    nextButtons = document.querySelectorAll('.next');



function show(element) {
    element.classList.add('active');
}

function hide(element) {
    element.classList.remove('active');
}

clients.addEventListener('click', function (e) {
    var targetId = e.target.closest('.clients-item').id;
    var popUpString = 'pop-up-';
    var popUp = document.getElementById(popUpString + targetId);

    currentSlide = targetId.split('-')[1];

    show(popUp);
});

closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        var activeElement = document.querySelector('.active');
        hide(activeElement);
    })
});

nextButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        var activeElement = document.querySelector('.active');
        var popUpString = 'pop-up-client-';
        hide(activeElement);

        if (currentSlide == clientsCount) {
            currentSlide = 1;
        }else {
            currentSlide++;
        }
        var popUp = document.getElementById(popUpString + currentSlide);
        show(popUp);
    })
});

prevButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        var activeElement = document.querySelector('.active');
        var popUpString = 'pop-up-client-';
        hide(activeElement);

        if (currentSlide == 1) {
            currentSlide = 8;
        }else {
            currentSlide--;
        }
        var popUp = document.getElementById(popUpString + currentSlide);
        show(popUp);
    })
});
