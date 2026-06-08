async function buildCardsWhyChooseUs(cardsContainer, cardEl) {
  const items = [
    {
      icon: "assets/svg/coffe-cup-warna.svg",
      title: "SUSTAINABLE CUPS",
      desc: "Eco-friendly cups for a better planet. Sip coffee, save nature.",
    },
    {
      icon: "assets/svg/coffe-cup-warna-2.svg",
      title: "ORGANIC BEANS",
      desc: "Sourced from trusted organic farms. Naturally grown.",
    },
    {
      icon: "assets/svg/donut.svg",
      title: "LOCAL PARTNERSHIPS",
      desc: "Supporting nearby farmers and small suppliers.",
    },
    {
      icon: "assets/svg/cup-kuning.svg",
      title: "FRESHLY ROASTED",
      desc: "Roasted in-house for peak aroma and taste.",
    },
    {
      icon: "assets/svg/coffees-warna.svg",
      title: "REUSABLE MUGS",
      desc: "Encouraging refill culture and waste reduction.",
    },
    {
      icon: "assets/svg/open-sign.svg",
      title: "FAIR TRADE FOCUS",
      desc: "Supporting coffee farmers through fair and ethical trade practices.",
    },
    {
      icon: "assets/svg/barista.svg",
      title: "SKILLED BARISTAS",
      desc: "Crafted by trained baristas passionate about every cup.",
    },
    {
      icon: "assets/svg/electric.svg",
      title: "FAST & FRIENDLY SERVICE",
      desc: "Quick preparation without compromising quality.",
    },
  ];

  items.forEach((val) => {
    const card = cardEl.content.cloneNode(true);
    card.querySelectorAll("img")[1].src = val.icon;
    card.querySelector("h2").textContent = val.title;
    card.querySelector("p").textContent = val.desc;
    cardsContainer.appendChild(card);
  });
}
/**
 *
 * @param {Element} cardWrapper
 * @param {HTMLTemplateElement} cardMenu
 * @param {string} menu
 */
async function buildCardsMenu(cardWrapper, cardMenu, menu) {
  const items = {
    0: [
      {
        title: "Cafe De Olla",
        imgUrl: "/assets/img/menu/cafe-de-olla.webp",
        price: "$18",
        desc: "Traditional Mexican coffee with cinnamon and sweet cane sugar flavors.",
      },
      {
        title: "Carajillo",
        imgUrl: "/assets/img/menu/carajillo.webp",
        price: "$8",
        desc: "A smooth coffee drink mixed with liqueur, sweet and refreshing.",
      },
      {
        title: "Cafe De Chiapas",
        imgUrl: "/assets/img/menu/cafe-de-chiapas.webp",
        price: "$9",
        desc: "Premium Mexican coffee with chocolate notes, mild acidity, and a rich aroma.",
      },
    ],
    1: [
      {
        title: "Kyoto Blend Coffee",
        imgUrl: "/assets/img/menu/kyoto-blend-coffee.webp",
        price: "$15",
        desc: "Smooth Japanese coffee with balanced sweetness and a clean finish.",
      },
      {
        title: "Hokkaido Milk Coffee",
        imgUrl: "/assets/img/menu/hokkaido-milk-coffee.webp",
        price: "$12",
        desc: "Rich coffee blended with creamy Hokkaido milk for a mellow taste.",
      },
      {
        title: "Uji Matcha Coffee",
        imgUrl: "/assets/img/menu/uji-matcha-coffee.webp",
        price: "$18",
        desc: "A unique blend of coffee and Uji matcha with earthy and smooth flavors.",
      },
    ],
    2: [
      {
        title: "Espresso",
        imgUrl: "/assets/img/menu/espresso.webp",
        price: "$8",
        desc: "A bold and concentrated Italian coffee with a rich aroma.",
      },
      {
        title: "Cappuccino",
        imgUrl: "/assets/img/menu/cappuccino.webp",
        price: "$12",
        desc: "Classic Italian coffee topped with steamed milk and foam.",
      },
      {
        title: "Caffè Macchiato",
        imgUrl: "/assets/img/menu/macchiato.webp",
        price: "$10",
        desc: "Espresso with a touch of milk, smooth and full-bodied.",
      },
    ],
    3: [
      {
        title: "Matcha Latte",
        imgUrl: "/assets/img/menu/matcha-latte.webp",
        price: "$9",
        desc: "Creamy green tea latte with a smooth and earthy flavor.",
      },
      {
        title: "Hot Chocolate",
        imgUrl: "/assets/img/menu/hot-chocolate.webp",
        price: "$8",
        desc: "Rich and comforting chocolate drink with a velvety texture.",
      },
      {
        title: "Mango Smoothie",
        imgUrl: "/assets/img/menu/mango-smoothie.webp",
        price: "$11",
        desc: "Refreshing tropical drink made with ripe mangoes and ice.",
      },
    ],
  };
  items[menu].map((item) => {
    const card = cardMenu.content.cloneNode(true);
    const p = card.querySelectorAll("p");
    p[0].textContent = item.title;
    card.querySelector("img").src = item.imgUrl;
    p[1].textContent = item.desc;
    p[2].textContent = item.price;
    cardWrapper.appendChild(card);
  });
}
