
const slides = [
  {
    img: "/image/Home-img/one.png",
    title: "THE LAST OF US<br>PART II",
    
    desc: "Five years after the events of The Last of Us, Ellie embarks on another journey through a post-apocalyptic America on a mission of vengeance against a mysterious militia."
  },
  {
    img: "/image/Home-img/two.svg",
    title: "CAll OF DUTY MODERN <br> WARFARE 3 ",
    desc: "Kratos and Atreus face the end of the Norse world."
  },
  {
    img: "/image/Home-img/three.jpg",
    title: "HORIZON<br>FORBIDDEN WEST",
    desc: "Explore distant lands and face massive machines."
  }
];

let index = 0;

const heroImg   = document.getElementById("hero-img");
const heroTitle = document.getElementById("hero-title");
const heroDesc  = document.getElementById("hero-desc");
const nextBtn   = document.getElementById("next");
const prevBtn   = document.getElementById("prev");

function updateSlide(){
  heroImg.src = slides[index].img;
  heroTitle.innerHTML = slides[index].title;
  heroDesc.textContent = slides[index].desc;
}

updateSlide();

nextBtn.onclick = () => {
  index = (index + 1) % slides.length;
  updateSlide();
};

prevBtn.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
};



// ==================================

/* ================== Games Data ================== */

const gamesData = {
  upcoming: [
    {
      title: "GTA 6",
      price: "$59.99",

      discount: "-20%",
      img: "/image/Home-img/GTA.jpg"
    },
    {
      title: "Reanimal",
      price: "$49.99",
      img: "/image/Home-img/Reanimal.jpg"
    },
    {
      title: "First Light",
      price: "$49.99",
      img: "/image/Home-img/First Light.webp"
    },
    {
      title: "Crimson Desert",
      price: "$49.99",
      img: "/image/Home-img/Crimson Desert.webp"
    },
    {
      title: "Fable",
      price: "$39.99",
      discount: "-15%",
      img: "/image/Home-img/Fable.jpg"
    }
  ],
// trending games
    trending: [
    { title: "Call of Duty: Modern Warfare", 
      price: "$69.99", 
      img: "/image/Home-img/call.jpg"
      },

    { title: "Spider-Man 2", 
      price: "$59.99", 
      discount: "-10%", 
      img: "/image/Home-img/SpiderMan.jpg" 
    },

    { title: "Fortnite", 
      price: "$0.00", 
      img: "/image/Home-img/fortnite.jpg" 
    },

    { title: "Valorant", 
      price: "$0.00", 
      img: "/image/Home-img/Valorant.jpeg" 
    },
    { title: "League of Legends", 
      price: "$0.00", 
      img: "/image/Home-img/league-of-legends.jpg" 
    }
  ],



    // best sellers additional items
    
    bestsellers: [

    { title: "Elden Ring", 
      price: "$49.99", 
      img: "/image/Home-img/elden.jpg" 
    },
    { title: "God of War", 
      price: "$39.99", 
      discount: "-25%", 
      img: "/image/Home-img/god-of-war.jpg" 
    },
    { title: "The Witcher 3", 
      price: "$19.99", 
      discount: "-60%", 
      img: "/image/Home-img/the-witcher-season.jpg" 
    },
    { title: "Horizon Forbidden West", 
      price: "$59.99", 
      img: "/image/Home-img/horizon.jpg" 
    },
    { title: "Resident Evil Village", 
      price: "$29.99", 
      img: "/image/Home-img/Village.jpg" 
    }

  ],

  deals: [
    { title: "Cyberpunk 2077", 
      price: "$29.99", 
      discount: "-50%", 
      img: "/image/Home-img/Cyberpunk 2077.jpg" 
    },
    { title: "The Witcher 3", 
      price: "$19.99", 
      discount: "-60%", 
      img: "/image/Home-img/the-witcher-season.jpg" 
    },
    { title: "Assassin's Creed Valhalla", 
      price: "$49.99", 
      img: "/image/Home-img/Assassin's.jpg" 
    },
    { title: "Horizon Forbidden West", 
      price: "$59.99", 
      img: "/image/Home-img/horizon.jpg" 
    },
    { title: "Resident Evil Village", 
      price: "$29.99", 
      img: "/image/Home-img/Village.jpg" 
    },
    { title: "Far Cry 6", 
      price: "$59.99", 
      img: "/image/Home-img/Far Cry 6.jpg" }
  ]
};

/* ================== Create Cards ================== */

document.querySelectorAll(".games-section").forEach(section => {
  const type = section.dataset.section;
  const slider = section.querySelector(".games-slider");
  const left = section.querySelector(".s-arrow.left");
  const right = section.querySelector(".s-arrow.right");

  gamesData[type].forEach(game => {
    slider.innerHTML += `
      <div class="game-card">
        <img src="${game.img}">
        <div class="game-info">
          <h4>${game.title}</h4>
          <div class="price">
            <span class="new">${game.price}</span>
            ${game.discount ? `<span class="discount">${game.discount}</span>` : ""}
          </div>
        </div>
        <button class="add-cart">+</button>
      </div>
    `;
  });

  /* Slider arrows */
  right.addEventListener("click", () => {
    slider.scrollLeft += 300;
  });

  left.addEventListener("click", () => {
    slider.scrollLeft -= 300;
  });
});





// ================== ADD TO CART BUTTONS ==================
document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // يمنع فتح المودال

    const card = button.closest(".game-card");
    const title = card.querySelector("h4").innerText;
    const priceText = card.querySelector(".new").innerText;
    const price = Number(priceText.replace("$", ""));
    const img = card.querySelector("img").src;

    addToCart({ title, price, img });
  });
});






// ===================



/* ================== Modal ================== */
const modal = document.getElementById("game-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalVideo = document.getElementById("modal-video");
const closeBtn = modal.querySelector(".close");

// Data 
const gameDetails = {
  "GTA 6": {
    desc: "GTA 6 – Your City, Your Story Step into Vice City, a vibrant world full of life, danger, and endless possibilities. Play as two unforgettable characters in a thrilling story of crime, loyalty, and betrayal. Drive fast cars, plan daring heists, and explore a massive open world where every choice matters. With stunning graphics, realistic AI, and a world that truly feels alive, GTA 6 isn’t just a game—it’s an epic adventure waiting for you. " ,
    video: "https://www.youtube.com/embed/QdBZY2fkU-0"
  },
  "Reanimal": {
    desc: "REANIMAL is an atmospheric survival-horror adventure where you and another player (or AI partner) take control of a brother and sister trying to escape a twisted, nightmare island filled with monsters and environmental puzzles. You’ll work together to survive, explore fragmented worlds, unlock paths, and save your friends. It combines horror tension with cinematic platforming and exploration.",
    video: "https://www.youtube.com/embed/Bpi4lx9Lsl4"
  },
  "First Light": {
    desc: "In 007: First Light, you play as a young James Bond before he was “007”. The game features stealth, spy tactics, action sequences with gadgets, driving, and story missions. It’s being developed by the Hitman creators (IO Interactive), so expect deep open-ended levels and creative ways to approach missions.",
    video: "https://www.youtube.com/embed/ladCeM1wZqc"
  },
  "Crimson Desert": {
    desc: "Crimson Desert is a cinematic open-world action-adventure from the makers of Black Desert Online. You play as Kliff Macduff, a mercenary navigating a war-torn fantasy continent with rich lore, dynamic combat, and exploration. The world is huge with quests, bosses, and side activities — think deep story + action + exploration all in one.",
    video: "https://www.youtube.com/embed/R59mT0IFKeI?si=3X6MIV5z29WQQCfX"
  },
  "Fable": {
    desc: "The Fable reboot brings the classic whimsical fantasy world back with humor, magic, and player choice. You’ll explore forests, towns, and dungeons, battle creatures, and make decisions that shape your character’s destiny. It’s developed by Playground Games (known for Forza Horizon) but rebooted as a story-driven open world full of charm, quests, and fantasy action.",
    video: "https://www.youtube.com/embed/_4zJJSEm1ag?si=l41WWrwAUTiCGXIO"
  },
  // trending games details

  "Call of Duty: Modern Warfare": {
    desc: "Step into the heart of modern combat. Experience cinematic campaigns, intense multiplayer, and strategic warfare action.",
    video: "https://www.youtube.com/embed/TXsyxHqA8-A"
  },
  "Spider-Man 2": {
    desc: "Swing through New York, fight iconic villains, and experience a story-driven superhero adventure with amazing graphics.",
    video: "https://www.youtube.com/embed/CHcY6HbVjic"
  },
  "Fortnite": {
    desc: "Join the battle royale sensation! Build, fight, and survive in this fast-paced multiplayer adventure.",
    video: "https://www.youtube.com/embed/2gUtfBmw86Y?si=xxCBKv4V1Ct-2oV1"
  },
  "Valorant": {
    desc: "Tactical FPS with unique agents and abilities. Team up, strategize, and compete in high-stakes battles.",
    video: "https://www.youtube.com/embed/1Cn_1hL2ZbA"
  },
  "League of Legends": {
    desc: "Epic MOBA battles await! Choose your champion, team up, and dominate the battlefield in strategic matches.",
    video: "https://www.youtube.com/embed/6a2JzLh-vGM"
  },
  // deals games details

  "Cyberpunk 2077": {
    desc: "Cyberpunk 2077 – Dive into Night City, a futuristic world of cybernetic enhancements, heists, and epic adventures. Shape your story in a living open world.",
    video: "https://www.youtube.com/embed/qIcTM8WXFjk"
  },
  "The Witcher 3": {
    desc: "The Witcher 3 – Play as Geralt of Rivia, a monster hunter navigating a massive open world full of quests, choices, and legendary stories.",
    video: "https://www.youtube.com/embed/c0i88t0Kacs"
  },
  "Assassin's Creed Valhalla": {
    desc: "Assassin's Creed Valhalla – Lead your Viking clan to glory in England, raid villages, build settlements, and experience epic Norse mythology.",
    video: "https://www.youtube.com/embed/ssrNcwxALS4"
  },
  "Horizon Forbidden West": {
    desc: "Horizon Forbidden West – Explore vibrant landscapes, battle massive machines, and uncover secrets in a breathtaking post-apocalyptic world.",
    video: "https://www.youtube.com/embed/wZkCw9rD3f0"
  },
  "Resident Evil Village": {
    desc: "Resident Evil Village – Survive terrifying encounters, unravel dark mysteries, and experience horror and action in a beautifully sinister village.",
    video: "https://www.youtube.com/embed/HOGzAkgw8FI"
  },
  "Far Cry 6": {
    desc: "Far Cry 6 – Fight against oppression in a tropical paradise. Engage in explosive action, guerrilla warfare, and epic adventures.",
    video: "https://www.youtube.com/embed/_Q3ih0cx0o0"
  }
};


/* عند الضغط على أي كارد */
document.querySelectorAll(".game-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h4").innerText;
    modal.style.display = "block";
    modalImg.src = card.querySelector("img").src;
    modalTitle.innerText = title;
    modalDesc.innerText = gameDetails[title]?.desc || "No description available.";
    modalVideo.src = gameDetails[title]?.video || "";
  });
});

/* عند الضغط على زر الإغلاق */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = ""; // لإيقاف الفيديو عند الإغلاق
});

/* عند الضغط خارج المحتوى */
window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
    modalVideo.src = "";
  }
});




// ==========================



