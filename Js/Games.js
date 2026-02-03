document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("gamesGrid");
  const categoryFilter = document.getElementById("categoryFilter");
  const applyBtn = document.querySelector(".apply-filter");

  const modal = document.getElementById("games-modal");
  const modalImg = document.getElementById("games-img");
  const modalTitle = document.getElementById("games-title");
  const modalDesc = document.getElementById("games-desc");
  const modalVideo = document.getElementById("games-video");
  const closeBtn = document.getElementById("games-close");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function addToCart(game){
    if(cart.find(item => item.title === game.title)){
      alert("Game already in cart!");
      return;
    }
    cart.push(game);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Game added to cart ✅");
  }

const gamesData = [
  { 
    title: "GTA 6", 
    price: "$59.99", 
    discount: "-20%", 
    img: "../image/Home-img/GTA.jpg", 
    desc: "Step into the vibrant world of Vice City with new characters, missions, and a massive open world full of possibilities. \nExperience a story full of crime, ambition, and unexpected twists. \nEngage in high-speed chases, epic heists, and dynamic city life.",
    video: "https://www.youtube.com/embed/QdBZY2fkU-0",
    category: ["Action","Open World"]
  },
  { 
    title: "Reanimal", 
    price: "$49.99", 
    img: "../image/Home-img/Reanimal.jpg", 
    desc: "Survive a twisted nightmare island filled with puzzles and monsters, either solo or with a partner. \nUncover the dark secrets behind the island while facing challenging enemies. \nUse strategy, stealth, and courage to escape alive.",
    video: "https://www.youtube.com/embed/Bpi4lx9Lsl4",
    category: ["Adventure","Story"]
  },
  { 
    title: "First Light", 
    price: "$49.99", 
    img: "../image/Home-img/First Light.webp", 
    desc: "Play as young James Bond before he became 007. \nExperience stealth missions, thrilling chases, and spy gadgets. \nNavigate dangerous enemies and uncover hidden conspiracies.",
    video: "https://www.youtube.com/embed/ladCeM1wZqc",
    category: ["Action","Story"]
  },
  { 
    title: "Crimson Desert", 
    price: "$49.99", 
    img: "../image/Home-img/Crimson Desert.webp", 
    desc: "Explore a war-torn fantasy continent with deep lore and epic quests. \nEngage in dynamic combat with powerful weapons and skills. \nBuild alliances, fight enemies, and shape the world around you.",
    video: "https://www.youtube.com/embed/R59mT0IFKeI?si=3X6MIV5z29WQQCfX",
    category: ["RPG","Action"]
  },
  { 
    title: "Fable", 
    price: "$39.99", 
    discount: "-15%", 
    img: "../image/Home-img/Fable.jpg", 
    desc: "Dive into a whimsical fantasy world filled with magic, humor, and choice. \nEmbark on quests that shape your destiny and character. \nInteract with quirky characters and explore enchanting lands.",
    video: "https://www.youtube.com/embed/_4zJJSEm1ag?si=l41WWrwAUTiCGXIO",
    category: ["RPG","Adventure"]
  },
  { 
    title: "Call of Duty", 
    price: "$69.99", 
    img: "../image/Home-img/Call.jpg", 
    desc: "Experience intense combat and historical battles in this latest COD installment. \nEngage in cinematic missions across iconic war zones. \nTeam up with allies and dominate the battlefield.",
    video: "https://www.youtube.com/embed/dummy1",
    category: ["Shooter","Action"]
  },
  { 
    title: "Call of Duty: Modern Warfare 2", 
    price: "$69.99", 
    img: "../image/Home-img/call.jpg", 
    desc: "Step into modern warfare action with cinematic story missions. \nMaster advanced weapons, tactics, and multiplayer combat. \nTake down enemies in high-stakes operations around the globe.",
    video: "https://www.youtube.com/embed/dummy2",
    category: ["Shooter","Action"]
  },
  { 
    title: "Spider-Man: Miles Morales", 
    price: "$59.99", 
    discount: "-10%", 
    img: "../image/Home-img/SpiderMan.jpg", 
    desc: "Swing through New York City as Miles Morales and fight crime. \nUnlock new powers and abilities unique to Miles. \nFace dangerous villains and protect the city from chaos.",
    video: "https://www.youtube.com/embed/dummy3",
    category: ["Action","Open World"]
  },
  { 
    title: "Horizon Forbidden West", 
    price: "$69.99", 
    img: "../image/Home-img/horizon.jpg", 
    desc: "Explore distant lands, face massive machines, and uncover ancient secrets. \nSolve environmental puzzles and upgrade your skills. \nMeet fascinating characters and survive challenging battles.",
    video: "https://www.youtube.com/embed/dummy4",
    category: ["Action","Open World"]
  },
  { 
    title: "Elden Ring", 
    price: "$49.99", 
    img: "../image/Home-img/elden.jpg", 
    desc: "Embark on an epic journey through the Lands Between, facing challenging bosses. \nExplore vast open worlds and uncover hidden lore. \nCustomize your character and master a variety of combat styles.",
    video: "https://www.youtube.com/embed/dummy5",
    category: ["RPG","Adventure"]
  },
  { 
    title: "God of War: Ragnarok", 
    price: "$59.99", 
    discount: "-20%", 
    img: "../image/Home-img/god-of-war.jpg", 
    desc: "Kratos returns with Atreus to face gods and monsters in Norse mythology. \nExperience breathtaking combat and cinematic storytelling. \nSolve puzzles and uncover the fate of gods and men.",
    video: "https://www.youtube.com/embed/dummy6",
    category: ["Action","Story"]
  },
  { 
    title: "Cyberpunk 2077", 
    price: "$29.99", 
    discount: "-50%", 
    img: "../image/Home-img/Cyberpunk 2077.jpg", 
    desc: "Explore Night City, a futuristic metropolis full of cybernetic enhancements and crime. \nTake on missions that challenge your hacking and combat skills. \nInteract with citizens, corporations, and criminal factions.",
    video: "https://www.youtube.com/embed/dummy7",
    category: ["RPG","Action"]
  },
  { 
    title: "The Witcher 3: Wild Hunt", 
    price: "$19.99", 
    discount: "-60%", 
    img: "../image/Home-img/the-witcher-season.jpg", 
    desc: "Play as Geralt of Rivia in an open world filled with monsters, quests, and choices. \nMake moral decisions that affect the world around you. \nHunt dangerous beasts and forge your legend in the Continent.",
    video: "https://www.youtube.com/embed/dummy8",
    category: ["RPG","Open World"]
  },
  { 
    title: "Resident Evil Village", 
    price: "$49.99", 
    img: "../image/Home-img/Village.jpg", 
    desc: "Horror survival in a mysterious village with terrifying creatures. \nSolve chilling puzzles while escaping deadly enemies. \nUncover dark secrets behind the village and its inhabitants.",
    video: "https://www.youtube.com/embed/dummy9",
    category: ["Horror","Survival"]
  },
  { 
    title: "Assassin's Creed Valhalla", 
    price: "$59.99", 
    img: "../image/Home-img/Assassin's.jpg", 
    desc: "Lead the Viking invasion of England and explore a vast open world. \nEngage in brutal battles and build your settlement. \nForm alliances and make choices that shape your journey.",
    video: "https://www.youtube.com/embed/dummy10",
    category: ["Action","Open World"]
  },
  { 
    title: "Far Cry 6", 
    price: "$49.99", 
    img: "../image/Home-img/far cry 6.jpg", 
    desc: "Liberate a tropical island from a brutal dictator in this open-world shooter. \nUse guerrilla tactics and powerful weapons to survive. \nMeet compelling characters and face moral dilemmas.",
    video: "https://www.youtube.com/embed/dummy11",
    category: ["Action","Open World"]
  },
  { 
    title: "Death Stranding", 
    price: "$39.99", 
    img: "../image/Home-img/death stranding.jpg", 
    desc: "Deliver packages across a mysterious post-apocalyptic landscape. \nEncounter strange phenomena and unique characters. \nUnravel the story while reconnecting fragmented societies.",
    video: "https://www.youtube.com/embed/dummy12",
    category: ["Action","Story"]
  },
  { 
    title: "Red Dead Redemption 2", 
    price: "$59.99", 
    img: "../image/Home-img/Red Dead Redemption 2.jpg", 
    desc: "Experience the life of an outlaw in the dying Wild West. \nEngage in epic gunfights, horseback chases, and heists. \nForge relationships and make choices that shape your story.",
    video: "https://www.youtube.com/embed/dummy13",
    category: ["Action","Open World"]
  },
  { 
    title: "Battlefield 2042", 
    price: "$69.99", 
    img: "../image/Home-img/Battlefield 2042.jpg", 
    desc: "Massive multiplayer battles in a near-future war setting. \nCommand vehicles, weapons, and squads in dynamic combat. \nParticipate in large-scale operations that change the battlefield.",
    video: "https://www.youtube.com/embed/dummy14",
    category: ["Shooter","Action"]
  },
  { 
    title: "Dying Light 2", 
    price: "$49.99", 
    img: "../image/Home-img/Dying Light 2.jpg", 
    desc: "Parkour your way through a zombie-infested city and make tough choices. \nEngage in fast-paced combat with melee and ranged weapons. \nSurvive in a world that evolves based on your actions.",
    video: "https://www.youtube.com/embed/dummy15",
    category: ["Action","Survival"]
  },
  { 
    title: "Mortal Kombat 11", 
    price: "$39.99", 
    img: "../image/Home-img/Mortal Kombat 11.jpeg", 
    desc: "Fight legendary warriors in brutal battles with cinematic fatalities. \nMaster combos, special moves, and character abilities. \nCompete in tournaments or enjoy a rich story mode.",
    video: "https://www.youtube.com/embed/dummy16",
    category: ["Fighting"]
  },
  { 
    title: "FIFA 23", 
    price: "$59.99", 
    img: "../image/Home-img/FIFA 23.jpg", 
    desc: "Play the latest football season with all the teams and leagues. \nExperience realistic gameplay, tactics, and stadiums. \nCompete online or in career mode to become a legend.",
    video: "https://www.youtube.com/embed/dummy17",
    category: ["Sports"]
  },
  { 
    title: "NBA 2K23", 
    price: "$59.99", 
    img: "../image/Home-img/NBA 2K23.jpg", 
    desc: "Experience realistic basketball gameplay with updated rosters. \nCustomize your MyPlayer and climb the ranks. \nCompete online in leagues or tournaments for glory.",
    video: "https://www.youtube.com/embed/dummy18",
    category: ["Sports"]
  },
  { 
    title: "Minecraft", 
    price: "$26.99", 
    img: "../image/Home-img/minecraft.jpg", 
    desc: "Build, explore, and survive in an endless blocky world. \nGather resources, craft items, and create your own structures. \nExplore infinite worlds with friends or solo adventures.",
    video: "https://www.youtube.com/embed/dummy19",
    category: ["Casual","Creative"]
  },
  { 
    title: "Among Us", 
    price: "$4.99", 
    img: "../image/Home-img/Among Us.jpg", 
    desc: "Work with your crew to complete tasks while finding the imposter. \nUse strategy and communication to survive. \nUncover lies and deceit in a fun multiplayer environment.",
    video: "https://www.youtube.com/embed/dummy20",
    category: ["Casual","Multiplayer"]
  },
  { 
    title: "Valorant", 
    price: "$0", 
    img: "../image/Home-img/valorant.jpg", 
    desc: "Competitive tactical shooter with unique agents and abilities. \nPlan strategies and work with your team to dominate. \nMaster precise shooting, abilities, and map control.",
    video: "https://www.youtube.com/embed/dummy21",
    category: ["Shooter","Multiplayer"]
  },
  { 
    title: "League of Legends", 
    price: "$0", 
    img: "../image/Home-img/league-of-legends.jpg", 
    desc: "Classic MOBA with a huge roster of champions and competitive play. \nCoordinate with your team to destroy the enemy nexus. \nUnlock champions, skins, and master strategic gameplay.",
    video: "https://www.youtube.com/embed/dummy22",
    category: ["Multiplayer","MOBA"]
  }
];

  function renderGames(list){
    grid.innerHTML = "";

    list.forEach(game => {
      const card = document.createElement("div");
      card.classList.add("game-card");
      card.innerHTML = `
        <img src="${game.img}" alt="${game.title}">
        <div class="game-info">
          <h4>${game.title}</h4>
          <div class="price">
            <span class="new">${game.price}</span>
            ${game.discount ? `<span class="discount">${game.discount}</span>` : ""}
          </div>
        </div>
        <button class="add-cart">+</button>
      `;

      // Add to cart
      card.querySelector(".add-cart").addEventListener("click", e => {
        e.stopPropagation();
        addToCart({ title: game.title, price: Number(game.price.replace("$","")), img: game.img });
      });

      // Open modal
      card.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = game.img;
        modalTitle.innerText = game.title;
        modalDesc.innerText = game.desc;
        modalVideo.src = game.video;
      });

      grid.appendChild(card);
    });
  }

  // Initial render
  renderGames(gamesData);

  // Apply filter
  applyBtn.addEventListener("click", () => {
    const selected = categoryFilter.value;
    if(selected === "All") return renderGames(gamesData);

    const filtered = gamesData.filter(game => game.category.includes(selected));
    renderGames(filtered);
  });

  // Modal close
  closeBtn.addEventListener("click", () => { modal.classList.remove("active"); modalVideo.src=""; });
  window.addEventListener("click", e => { if(e.target===modal){ modal.classList.remove("active"); modalVideo.src=""; } });

});
