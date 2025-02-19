
const products = [
    {
      name: "elephant",
      price: "1 200$",
      image: "https://www.bing.com/th?id=OIP.byenSyw81CvjeS10wk49sgHaET&w=178&h=102&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
      name: "flaower",
      price: "120$",
      image: "https://images.unsplash.com/photo-1721332153521-120cb0cd02d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
    },
    {
      name: "river picture",
      price: "120 000$",
      image: "https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?w=251&h=180&c=7&r=0&o=5&pid=1.7"
    }
  ];
  
  const container = document.getElementById('products-container');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = product.name;
 
    const price = document.createElement('p');
    price.classList.add('card-price');
    price.textContent = product.price;

    const button = document.createElement('button');
    button.classList.add('card-button');
    button.textContent = 'buy';

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
  
    container.appendChild(card);
  });
  