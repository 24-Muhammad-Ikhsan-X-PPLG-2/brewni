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
