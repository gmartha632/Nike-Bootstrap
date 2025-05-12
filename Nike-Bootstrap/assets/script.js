// Rotating Banner Messages
const messages = [
  `Move, Shop, Customise & Celebrate With Us<br><span class="fw-normal">No matter what you feel like doing today, it’s better as a Member.</span> <a href="#" class="text-decoration-none ms-1 d-block text-dark">Join Us</a>`,
  `New Styles On Sale: Up To 40% Off<br><a href="#" class="text-decoration-none d-block text-dark">Shop All Our New Markdowns</a>`
];

let currentIndex = 0;
const messageContainer = document.getElementById("messageContainer");

function updateMessage() {
  messageContainer.innerHTML = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}

updateMessage();
setInterval(updateMessage, 10000);


  // Sample product data
  const products = [
    { name: "Jordan Flight Tee", img: "/Nike-Bootstrap/assets/img/air_jordan.webp" },
    { name: "Jordan Dri-FIT Shorts", img: "/Nike-Bootstrap/assets/img/court_vision.webp" },
    { name: "Jordan Hoodie", img: "/Nike-Bootstrap/assets/img/force_low.webp" },
    { name: "Jordan Essentials Pants", img: "/Nike-Bootstrap/assets/img/monarch_4.webp" },
    { name: "Jordan Legacy Cap", img: "/Nike-Bootstrap/assets/img/revolution_7.webp" }
  ];

  // Dynamically render products
  const container = document.getElementById("productCarousel");
  products.forEach(product => {
    const section = document.createElement("section");
    section.className = "text-center";
    section.style.minWidth = "400px";
    section.innerHTML = `
      <img src="${product.img}" class="img-fluid mb-2" alt="${product.name}">
      <p class="mb-0 small fw-semibold">${product.name}</p>
    `;
    container.appendChild(section);
  });

  // Scroll handler
  function scrollCarousel(direction) {
    container.scrollBy({ left: direction * 220, behavior: 'smooth' });
  }


  const popularProducts = [
  { name: "Nike Air Max 270", category: "Men's Shoes", mrp: "₹11,995", img: "/Nike-Bootstrap/assets/img/air_jordan.webp" },
  { name: "Nike Blazer Mid", category: "Women's Shoes", mrp: "₹9,995", img: "/Nike-Bootstrap/assets/img/court_vision.webp" },
  { name: "Nike Dri-FIT Tee", category: "Apparel", mrp: "₹2,495", img: "/Nike-Bootstrap/assets/img/force_low.webp" },
  { name: "Air Jordan 1 Low", category: "Sneakers", mrp: "₹12,995", img: "/Nike-Bootstrap/assets/img/luka78.jpg" },
  { name: "Nike Pegasus 40", category: "Running Shoes", mrp: "₹10,995", img: "/Nike-Bootstrap/assets/img/luka_77.jpg" },
  { name: "Nike Tech Fleece", category: "Jacket", mrp: "₹8,495", img: "/Nike-Bootstrap/assets/img/monarch_4.webp" },
  { name: "Nike Everyday Crew Socks", category: "Accessories", mrp: "₹995", img: "/Nike-Bootstrap/assets/img/revolution_7.webp" },
  { name: "Nike Pro Shorts", category: "Training", mrp: "₹3,495", img: "/Nike-Bootstrap/assets/img/monarch_4.webpgit " },
  { name: "Air Jordan Slides", category: "Footwear", mrp: "₹4,995", img: "/Nike-Bootstrap/assets/img/court_vision.webp" },
  { name: "Nike Court Vision", category: "Lifestyle", mrp: "₹6,495", img: "/Nike-Bootstrap/assets/img/revolution_7.webp" }
];

const popularCarousel = document.getElementById("popularCarousel");

popularProducts.forEach(product => {
  const card = document.createElement("section");
  card.className = "text-start border rounded p-2";
  card.style.minWidth = "400px";
  card.innerHTML = `
    <img src="${product.img}" class="img-fluid mb-2 rounded" alt="${product.name}">
    <h6 class="fw-semibold mb-1">${product.name}</h6>
    <p class="text-muted mb-1 small">${product.category}</p>
    <p class="fw-bold small mb-0">${product.mrp}</p>
  `;
  popularCarousel.appendChild(card);
});

function scrollPopular(direction) {
  popularCarousel.scrollBy({ left: direction * 220, behavior: 'smooth' });
}


const footerData = [
    {
      title: "Jordan Shoes",
      items: [
        "All Jordan Shoes",
        "New Jordan Shoes",
        "Jordan Lifestyle",
        "Jordan Basketball",
        "Men's Jordan Shoes",
        "Women's Jordan Shoes",
        "Kids' Jordan Shoes"
      ]
    },
    {
      title: "Jordan Clothing",
      items: [
        "All Jordan Clothing",
        "Tops & T-Shirts",
        "Jackets",
        "Trousers",
        "Shorts"
      ]
    },
    {
      title: "Jordan Gear",
      items: [
        "All Jordan Accessories",
        "Hats",
        "Socks"
      ]
    },
    {
      title: "Featured",
      items: [
        "All Jordan Products",
        "New Releases",
        "Women's Jordan",
        "Kids' Jordan",
        "Russell Westbrook",
        "Sale"
      ]
    }
  ];

  const footerContainer = document.getElementById("footer-content");

  footerData.forEach(section => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 mb-4";

    const title = document.createElement("h4");
    title.className = "fw-bold mb-3";
    title.textContent = section.title;

    const ul = document.createElement("ul");
    ul.className = "list-unstyled";

    section.items.forEach(item => {
      const li = document.createElement("li");
      li.className = "text-muted mb-1";
      li.textContent = item;
      ul.appendChild(li);
    });

    col.appendChild(title);
    col.appendChild(ul);
    footerContainer.appendChild(col);
  });


   const resourceFooterData = [
    {
      title: "Resources",
      items: [
        "Find A Store",
        "Become A Member",
        "Running Shoe Finder",
        "Product Advice",
        "Send Us Feedback"
      ]
    },
    {
      title: "Help",
      items: [
        "Get Help",
        "Order Status",
        "Delivery",
        "Returns",
        "Payment Options",
        "Contact Us On Nike.com Inquiries",
        "Contact Us On All Other Inquiries"
      ]
    },
    {
      title: "Company",
      items: [
        "About Nike",
        "News",
        "Careers",
        "Investors",
        "Sustainability",
        "Impact",
        "Report a Concern"
      ]
    }
  ];

  const resourcesContainer = document.getElementById("footer-resources");

  resourceFooterData.forEach(section => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 mb-4";

    const title = document.createElement("h4");
    title.className = "fw-bold mb-3";
    title.textContent = section.title;

    const ul = document.createElement("ul");
    ul.className = "list-unstyled";

    section.items.forEach(item => {
      const li = document.createElement("li");
      li.className = "text-muted mb-1";
      li.textContent = item;
      ul.appendChild(li);
    });

    col.appendChild(title);
    col.appendChild(ul);
    resourcesContainer.appendChild(col);
  });

