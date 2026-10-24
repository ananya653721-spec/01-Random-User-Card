let userImage = document.getElementById("userImage");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userAge = document.getElementById("userAge");
let userCountry = document.getElementById("userCountry");
let getUser = document.getElementById("getUser");

function getRandomUser() {

    // API CALL - DATA AANE ME TIME LAGEGA
    fetch("https://dummyjson.com/users")

        // PROMISE RESOLVE HUA - RESPONSE OBJECT MILA
        .then(function(response) {
            return response.json();
        })

        // JSON DATA MIL GAYA
        .then(function(data) {

            let users = data.users;

            // RANDOM USER SELECT
            let randomIndex = Math.floor(Math.random() * users.length);

            // RANDOM USER
            let user = users[randomIndex];

            // HTML ME DATA DISPLAY
            userImage.src = user.image;
            userName.textContent = user.firstName + " " + user.lastName;
            userEmail.textContent = user.email;
            userAge.textContent = "Age: " + user.age;
            userCountry.textContent = "Country: " + user.address.country;
        })

        // PROMISE REJECT HUA TOH
        .catch(function(error) {
            console.log("Error:", error);
        });
}

// BUTTON CLICK
getUser.addEventListener("click", getRandomUser);

// PAGE LOAD HOTE HI EK USER
getRandomUser();