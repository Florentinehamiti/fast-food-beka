const menu = [
  {
    id: 1,
    title: "Hamburger",
    category: "HAMBURGER",
    price: 1.50,
    img:
      "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    desc: `Pleskavice, sallate, sos, keqap, majonez.`,
  },
  {
    id: 2,
    title: "Hamburger Pule",
    category: "HAMBURGER",
    price: 1.50,
    img:
    "https://www.allrecipes.com/thmb/KRCORzIcKGWQmO3opp96Nwfbf-U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-natasha-s-chicken-burgers-93b117251a96447ab544a7e50313b64b",
    desc: `Mish pule, sallate, sos, keqap, majonez. `,
  },
  {
    id: 3,
    title: "File pule gjyse porcioni",
    category: "MISH",
    price: 1.50,
    img:
      "https://boldbistro.al/wp-content/uploads/2022/10/Fileto-Pule2.png",
    desc: `Mish pule, sallate. `,
  },
  {
    id: 4,
    title: "File pule",
    category: "MISH",
    price: 3.00,
    img:
      "https://boldbistro.al/wp-content/uploads/2022/10/Fileto-Pule2.png",
    desc: `Mish pule, sallate. `,
  },
  {
    id: 5,
    title: "Qebapa gjyse porcioni",
    category: "MISH",
    price: 1.50,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXswilj1uE0oIloJ2vZrcITZCtNE_cbeslA&s",
    desc: `Qebapa, sallate, sos. `,
  },
  {
    id: 6,
    title: "Qebapa",
    category: "MISH",
    price: 3.00,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXswilj1uE0oIloJ2vZrcITZCtNE_cbeslA&s",
    desc: `Qebapa, sallate, sos. `,
  },
  {
    id: 7,
    title: "Suxhuk gjyse porcioni",
    category: "MISH",
    price: 1.50,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetcdnoOKJfdHuG2vWLNSx7UKgKZE8NNFHBA&s",
    desc: `Suxhuk, sallate, sos. `,
  },
  {
    id: 8,
    title: "Suxhuk",
    category: "MISH",
    price: 3.00,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetcdnoOKJfdHuG2vWLNSx7UKgKZE8NNFHBA&s",
    desc: `Suxhuk, sallate, sos. `,
  },
  {
    id: 9,
    title: "Jogurt",
    category: "PIJE",
    price: 0.50,
    img:
      "https://www.osm-bochnia.com.pl/sites/default/files/produkty/jogurt.png",
    desc: `Jogurt i fresket.`,
  },
  {
    id: 10,
    title: "Coca Cola",
    category: "PIJE",
    price: 1.00,
    img:
      "https://assets.wakefern.com/is/image/wakefern/4900005341-001?$Mi9Product_detail$",
    desc: `Pije e fresket.`,
  },
  {
    id: 11,
    title: "Fanta",
    category: "PIJE",
    price: 1.00,
    img:
    "https://www.deeliver.co.za/cdn/shop/files/fanta-orange-300ml-can.jpg?v=1686689418",
    desc: `Fanta exotic `,
  },
  {
    id: 12,
    title: "Uje i thjeshte",
    category: "PIJE",
    price: 0.50,
    img:
      "https://e-baa.com/new/public/uploads/all/Q1DH7LDHM6ksV77w4r3U5vnGdlaQnGhfmg9mtfB6.webp",
    desc: `Uje i thjeshte i fresket. `,
  },
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
(values, item) => {
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
},
["TE-GJITHA"]
);

const categoryList = () => {
const categoryBtns = categories
  .map((category) => {

    if(category == 'TE-GJITHA'){
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>TE GJITHA</button>`;
    }else{
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    }
  })
  .join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = document.querySelectorAll(".btn-item");


filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "TE-GJITHA") {
      menuList(menu);
    } else {
      menuList(menuCategory);
    }
  });
});
};

const menuList = (menuItems) => {
let displayMenu = menuItems.map((item) => {
  return `<div class="menu-items col-lg-6 col-sm-12">
          <img
            src=${item.img}
            alt=${item.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}€</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
          </div>
        </div>
  `;
});
displayMenu = displayMenu.join("");
section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();