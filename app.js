console.log("deneme");

async function fetchData() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.results);
       showResult(data.results)
        // showPerson(data.results);
    } catch (error) {
        console.error('Hata:', error);
    }
}
const showResult = (persons) => {
    const card = document.querySelector(".card");
    persons.forEach((item) => {
        let {phone, gender, email, name, picture, location } = item;
        console.log(gender, email, name.first, name.last, picture.medium);

        cardImage = document.querySelector(".card-img-top");
        cardImage.src = picture.medium;
        cardImage.width = 200; // Set to your desired width
        cardImage.height = 200;
        
        cardTitle = document.querySelector(".card-title")
        cardTitle.textContent = `${name.first} ${name.last}`;

        cardText = document.querySelector(".card-text")
        cardText.textContent = `${location.country} ${location.state} ${location.country} ${location.postcode} `
        phoneT = document.querySelector(".age")
        phoneT.textContent = `Phone: ${phone}`;

        genderT = document.querySelector(".gender")
        genderT.textContent = `Gender: ${gender}`;

        emailT = document.querySelector(".email")
        emailT.textContent = `Email: ${email}`;

    });
};

// window.onload fonksiyonunu doğrudan çağırma
window.onload = () => {
    fetchData();
};



