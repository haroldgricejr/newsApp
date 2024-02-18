const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error("There was an error!", error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.getElementById("news");
    for (let article of articles) {
        const articleDiv = document.createElement("div");
        articleDiv.className = "article card shadow mb-5";

        // create and append image
        const image = document.createElement("img");
        image.className = "art-image card-img-top";
        image.src = article.urlToImage;
        image.alt = "An image of the article.";
        articleDiv.appendChild(image);

        // create card body and append headline, description, link
        const cardContent = document.createElement("div");
        cardContent.className = "card-content p-3";
        articleDiv.appendChild(cardContent);

        // create and append headline to card body
        const title = document.createElement("h5");
        title.className = "art-title";
        title.textContent = article.title;
        cardContent.appendChild(title);

        // create and append description to card body
        const description = document.createElement("p");
        description.className = "art-description";
        description.textContent = article.description;
        cardContent.appendChild(description);

        // create and append link to card body
        const linkToArticle = document.createElement("a");
        linkToArticle.className = "art-url";
        linkToArticle.href = article.url;
        linkToArticle.textContent = "Read more";
        cardContent.appendChild(linkToArticle);
    
        newsDiv.appendChild(articleDiv);
    }
}