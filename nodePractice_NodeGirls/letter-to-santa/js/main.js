// Write all your javascript code in this file
function validateForm(e) {
    e.preventDefault();

   // var localStorageIndex = 0;
    var localStorageIndex = localStorage.length + 1;

    var name = document.letterToSanta.name.value;
    var city = document.letterToSanta.city.value;
    var goodVSnaughty = document.letterToSanta.goodVSnaughty.value;
    var description = document.letterToSanta.description.value;
    var wishImage = document.letterToSanta.wishImage.value;
    //var globalErrorCount = 0;

    function nameValidationError(name) {
        if (name == '') {
            //globalErrorCount++;
            return "Name must be filled out";
        }
        if (name.length < 2) {
            //globalErrorCount++;
            return "Really? Is your name that short, for real?";
        }
        if (name.length > 250) {
            //globalErrorCount++;
            return "Forgive me for not being with your story, but that can't be.";
        }
        // if(name.length !== onlyLetters) {
        //     alert("Make sure that you type your own name, not a game id");
        //     return false;
        // }
        var onlyLetters = /^[A-z]+$/.test(name);

        if (onlyLetters == false) {
            //globalErrorCount++;
            return "Make sure that you type your own name, not a game id";
        }
        return '';
    }

    function cityValidationError(city) {
        if (city == '') {
            //globalErrorCount++;
            return "City must be filled out";
        }
        return '';
    }

    function descriptionValidationError(description) {
        if (description == '') {
            //globalErrorCount++;
            return "Description must be filled out";
        }
        if (description.length < 2) {
            //globalErrorCount++;
            return "Really? Is your description that short, for real?";
        }
        if (description.length > 250) {
            //globalErrorCount++;
            return "Forgive me for not being with your story, but that is too long.";
        }
        if (!/^[A-z0-9]+$/.test(description)) {
            return 'Description field can have only numbers and letters';
        }
        return '';
    }

    //This is just for calling all functions together
    var errors = {
        name: nameValidationError(name),
        city: cityValidationError(city),
        description: descriptionValidationError(description)
    };

    function handleErrors(errors) {
        var errorCount = 0;
        console.log(Object.keys(errors));
        Object.keys(errors)
            .forEach(function (key) {
                if (errors[key].length) {
                    document.querySelector(`.letterToSantaForm [name="${key}"]`).classList.add('error');
                    document.querySelector(`.letterToSantaForm [name="${key}"]`).value = '';
                    document.querySelector(`.errorsBlock [class="${key}"]`).innerHTML = errors[key];
                }
                console.log(errors[key]);
                errorCount = errorCount + errors[key].length;
            });

        var onSuccessWindow = document.querySelector('.on-success');

        if (errorCount == 0) {
            console.log('Success');
            onSuccessWindow.classList.remove('hiddenWindow');
            saveDataToLocalStorage();
            document.querySelector('.letterToSantaForm').reset();
        }
        else {
            console.log('Your letter does not seem legit');
        }
    }
    //nameValidationError(name);
    handleErrors(errors);
    //console.log(name);

    console.log('localStorageIndex outer scope: '+ localStorageIndex);

    function saveDataToLocalStorage() {
        // get the data that you want to save
        // var name = document.letterToSanta.name.value;
        // var description = document.letterToSanta.description.value;
        
        console.log('localStorageIndex inner scope: '+ localStorageIndex);
        var key = 'user' + localStorageIndex; // setting a unique key for the data
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('Key is '+key);
        // saving the data as an object
        localStorage.setItem(key, JSON.stringify({
            username: name,
            giftDescription: description
        }));

        localStorageIndex = localStorageIndex + 1;
    }
}

////////////////////////// handle on-success window ////////////////////////////////////
function hideOnSuccessWindow() {
    var onSuccessWindow = document.getElementsByClassName('on-success');
    onSuccessWindow[0].classList.add('hiddenWindow');
}

function redirectToWishlist() {
    window.location.href = 'wish-list.html';
}

/////This should bring the data from the local storage on the wish page

function displayWishes() {
    var ul = document.querySelector('.wish-list');
    var li, userKey;

    for (var i = 1; i <= localStorage.length; i++) {
        li = document.createElement('li');
        userKey = 'user' + i;
        var data = JSON.parse(localStorage.getItem(userKey));

        li.appendChild(document.createTextNode(data.giftDescription));
        ul.appendChild(li);
    }
}

