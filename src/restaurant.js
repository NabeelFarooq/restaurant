// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image element
    const image = document.createElement('img');
    image.src = './restImg.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    // create and append copy element
    const copy = document.createElement('p');
    copy.textContent = "We serve best food in kashmir";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);

}

export default createRestaurantHomePage;