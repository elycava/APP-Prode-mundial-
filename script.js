const flag = c => `https://flagcdn.com/w40/${c}.png`;

let currentGroup = "A";
let currentStage = "R32";
let knockoutStages = {};

const rows = [
  [1,"A","Jueves 11 de Junio","16:00","México","Sudáfrica","mx","za",2,0],
  [2,"A","Jueves 11 de Junio","23:00","República de Corea","República Checa","kr","cz",2,1],
  [3,"A","Jueves 18 de Junio","13:00","República Checa","Sudáfrica","cz","za",null,null],
  [4,"A","Jueves 18 de Junio","22:00","México","República de Corea","mx","kr",null,null],
  [5,"A","Miércoles 24 de Junio","22:00","México","República Checa","mx","cz",null,null],
  [6,"A","Miércoles 24 de Junio","22:00","Sudáfrica","República de Corea","za","kr",null,null],

  [7,"B","Viernes 12 de Junio","16:00","Canadá","Bosnia y Herzegovina","ca","ba",1,1],
  [8,"B","Sábado 13 de Junio","16:00","Catar","Suiza","qa","ch",1,1],
  [9,"B","Jueves 18 de Junio","16:00","Suiza","Bosnia y Herzegovina","ch","ba",null,null],
  [10,"B","Jueves 18 de Junio","19:00","Canadá","Catar","ca","qa",null,null],
  [11,"B","Miércoles 24 de Junio","16:00","Canadá","Suiza","ca","ch",null,null],
  [12,"B","Miércoles 24 de Junio","16:00","Bosnia y Herzegovina","Catar","ba","qa",null,null],

  [13,"C","Sábado 13 de Junio","19:00","Brasil","Marruecos","br","ma",1,1],
  [14,"C","Sábado 13 de Junio","22:00","Haití","Escocia","ht","gb-sct",0,1],
  [15,"C","Viernes 19 de Junio","19:00","Escocia","Marruecos","gb-sct","ma",null,null],
  [16,"C","Viernes 19 de Junio","21:30","Brasil","Haití","br","ht",null,null],
  [17,"C","Miércoles 24 de Junio","19:00","Escocia","Brasil","gb-sct","br",null,null],
  [18,"C","Miércoles 24 de Junio","19:00","Marruecos","Haití","ma","ht",null,null],

  [19,"D","Viernes 12 de Junio","22:00","Estados Unidos","Paraguay","us","py",4,1],
  [20,"D","Domingo 14 de Junio","01:00","Australia","Turquía","au","tr",2,0],
  [21,"D","Viernes 19 de Junio","16:00","Estados Unidos","Australia","us","au",null,null],
  [22,"D","Sábado 20 de Junio","00:00","Turquía","Paraguay","tr","py",null,null],
  [23,"D","Jueves 25 de Junio","23:00","Estados Unidos","Turquía","us","tr",null,null],
  [24,"D","Jueves 25 de Junio","23:00","Paraguay","Australia","py","au",null,null],

  [25,"E","Domingo 14 de Junio","14:00","Alemania","Curazao","de","cw",7,1],
  [26,"E","Domingo 14 de Junio","20:00","Costa de Marfil","Ecuador","ci","ec",null,null],
  [27,"E","Sábado 20 de Junio","17:00","Alemania","Costa de Marfil","de","ci",null,null],
  [28,"E","Sábado 20 de Junio","21:00","Ecuador","Curazao","ec","cw",null,null],
  [29,"E","Jueves 25 de Junio","17:00","Ecuador","Alemania","ec","de",null,null],
  [30,"E","Jueves 25 de Junio","17:00","Curazao","Costa de Marfil","cw","ci",null,null],

  [31,"F","Domingo 14 de Junio","17:00","Países Bajos","Japón","nl","jp",0,0],
  [32,"F","Domingo 14 de Junio","23:00","Suecia","Túnez","se","tn",null,null],
  [33,"F","Sábado 20 de Junio","14:00","Países Bajos","Suecia","nl","se",null,null],
  [34,"F","Domingo 21 de Junio","01:00","Túnez","Japón","tn","jp",null,null],
  [35,"F","Jueves 25 de Junio","20:00","Japón","Suecia","jp","se",null,null],
  [36,"F","Jueves 25 de Junio","20:00","Túnez","Países Bajos","tn","nl",null,null],

  [37,"G","Lunes 15 de Junio","16:00","Bélgica","Egipto","be","eg",null,null],
  [38,"G","Lunes 15 de Junio","22:00","RI de Irán","Nueva Zelanda","ir","nz",null,null],
  [39,"G","Domingo 21 de Junio","16:00","Bélgica","RI de Irán","be","ir",null,null],
  [40,"G","Domingo 21 de Junio","22:00","Nueva Zelanda","Egipto","nz","eg",null,null],
  [41,"G","Sábado 27 de Junio","00:00","Egipto","RI de Irán","eg","ir",null,null],
  [42,"G","Sábado 27 de Junio","00:00","Nueva Zelanda","Bélgica","nz","be",null,null],

  [43,"H","Lunes 15 de Junio","13:00","España","Cabo Verde","es","cv",null,null],
  [44,"H","Lunes 15 de Junio","19:00","Arabia Saudí","Uruguay","sa","uy",null,null],
  [45,"H","Domingo 21 de Junio","13:00","España","Arabia Saudí","es","sa",null,null],
  [46,"H","Domingo 21 de Junio","19:00","Uruguay","Cabo Verde","uy","cv",null,null],
  [47,"H","Viernes 26 de Junio","21:00","Cabo Verde","Arabia Saudí","cv","sa",null,null],
  [48,"H","Viernes 26 de Junio","21:00","Uruguay","España","uy","es",null,null],

  [49,"I","Martes 16 de Junio","16:00","Francia","Senegal","fr","sn",null,null],
  [50,"I","Martes 16 de Junio","19:00","Irak","Noruega","iq","no",null,null],
  [51,"I","Lunes 22 de Junio","18:00","Francia","Irak","fr","iq",null,null],
  [52,"I","Lunes 22 de Junio","21:00","Noruega","Senegal","no","sn",null,null],
  [53,"I","Viernes 26 de Junio","16:00","Noruega","Francia","no","fr",null,null],
  [54,"I","Viernes 26 de Junio","16:00","Senegal","Irak","sn","iq",null,null],

  [55,"J","Martes 16 de Junio","22:00","Argentina","Argelia","ar","dz",null,null],
  [56,"J","Miércoles 17 de Junio","01:00","Austria","Jordania","at","jo",null,null],
  [57,"J","Lunes 22 de Junio","14:00","Argentina","Austria","ar","at",null,null],
  [58,"J","Martes 23 de Junio","00:00","Jordania","Argelia","jo","dz",null,null],
  [59,"J","Sábado 27 de Junio","23:00","Argelia","Austria","dz","at",null,null],
  [60,"J","Sábado 27 de Junio","23:00","Jordania","Argentina","jo","ar",null,null],

  [61,"K","Miércoles 17 de Junio","14:00","Portugal","RD Congo","pt","cd",null,null],
  [62,"K","Miércoles 17 de Junio","23:00","Uzbekistán","Colombia","uz","co",null,null],
  [63,"K","Martes 23 de Junio","14:00","Portugal","Uzbekistán","pt","uz",null,null],
  [64,"K","Martes 23 de Junio","23:00","Colombia","RD Congo","co","cd",null,null],
  [65,"K","Sábado 27 de Junio","20:30","Colombia","Portugal","co","pt",null,null],
  [66,"K","Sábado 27 de Junio","20:30","RD Congo","Uzbekistán","cd","uz",null,null],

  [67,"L","Miércoles 17 de Junio","17:00","Inglaterra","Croacia","gb-eng","hr",null,null],
  [68,"L","Miércoles 17 de Junio","20:00","Ghana","Panamá","gh","pa",null,null],
  [69,"L","Martes 23 de Junio","17:00","Inglaterra","Ghana","gb-eng","gh",null,null],
  [70,"L","Martes 23 de Junio","20:00","Panamá","Croacia","pa","hr",null,null],
  [71,"L","Sábado 27 de Junio","18:00","Panamá","Inglaterra","pa","gb-eng",null,null],
  [72,"L","Sábado 27 de Junio","20:00","Croacia","Ghana","hr","gh",null,null]
];

const matchesData = rows.map(r => ({
  id:r[0],
  group:r[1],
  date:r[2],
  time:r[3] + " hs",
  home:r[4],
  away:r[5],
  homeFlag:flag(r[6]),
  awayFlag:flag(r[7]),
  realHome:r[8],
  realAway:r[9]
}));

document.getElementById("app").innerHTML = `
<div class="app">
  <header class="main-header">
    <img src="mundial2026.png" class="header-img" alt="Mundial 2026">
    <div>
      <h1>FIFA WORLD CUP 2026</h1>
      <p>Prode Mundial 2026 • Fixture • Grupos • Fases • Hora Argentina</p>
    </div>
  </header>

  <nav class="menu">
    <button onclick="showSection('fixture')" class="active">Fixture</button>
    <button onclick="showSection('grupos')">Grupos</button>
    <button onclick="showSection('fases')">Fases</button>
    <button onclick="showSection('puntaje')">Puntaje</button>
  </nav>

  <section id="fixture" class="section active">
    <h2>Fixture completo</h2>
    <div id="fixture-list"></div>
  </section>

  <section id="grupos" class="section">
    <h2>Partidos por grupo</h2>
    <div id="group-buttons" class="group-buttons"></div>
    <h3 id="group-title"></h3>
    <div id="group-list"></div>
  </section>

  <section id="fases" class="section">
    <h2>Fases eliminatorias</h2>
    <div class="stage-buttons">
      <button onclick="renderStage('R32')">16avos</button>
      <button onclick="renderStage('R16')">Octavos</button>
      <button onclick="renderStage('QF')">Cuartos</button>
      <button onclick="renderStage('SF')">Semis</button>
      <button onclick="renderStage('FINAL')">Final</button>
    </div>
    <h3 id="stage-title"></h3>
    <div id="stage-list"></div>
  </section>

  <section id="puntaje" class="section">
    <h2>Mi puntaje</h2>
    <div class="score-box">
      <p>Total: <strong id="total-score">0</strong> puntos</p>
      <p>Aciertos G/E/P: <strong id="outcome-score">0</strong></p>
      <p>Resultados exactos: <strong id="exact-score">0</strong></p>
    </div>
    <button class="calc-btn" onclick="calculateScore()">Calcular puntaje</button>
  </section>
</div>
`;
const koRows = {
  R32: [
    ["K-01","16avos P1","Domingo 28 de Junio","16:00","2° Grupo A","2° Grupo B"],
    ["K-02","16avos P2","Lunes 29 de Junio","14:00","1° Grupo C","2° Grupo F"],
    ["K-03","16avos P3","Lunes 29 de Junio","17:30","1° Grupo E","3° Grupo A/B/C/D/F"],
    ["K-04","16avos P4","Lunes 29 de Junio","22:00","1° Grupo F","2° Grupo C"],
    ["K-05","16avos P5","Martes 30 de Junio","14:00","2° Grupo E","2° Grupo I"],
    ["K-06","16avos P6","Martes 30 de Junio","18:00","1° Grupo I","3° Grupo C/D/F/G/H"],
    ["K-07","16avos P7","Martes 30 de Junio","22:00","1° Grupo A","3° Grupo C/E/F/H/I"],
    ["K-08","16avos P8","Miércoles 1 de Julio","13:00","1° Grupo L","3° Grupo E/H/I/J/K"],
    ["K-09","16avos P9","Miércoles 1 de Julio","17:00","1° Grupo G","3° Grupo A/E/H/I/J"],
    ["K-10","16avos P10","Miércoles 1 de Julio","21:00","1° Grupo D","3° Grupo B/E/F/I/J"],
    ["K-11","16avos P11","Jueves 2 de Julio","16:00","1° Grupo H","2° Grupo J"],
    ["K-12","16avos P12","Jueves 2 de Julio","20:00","2° Grupo K","2° Grupo L"],
    ["K-13","16avos P13","Viernes 3 de Julio","00:00","1° Grupo B","3° Grupo E/F/G/I/J"],
    ["K-14","16avos P14","Viernes 3 de Julio","15:00","2° Grupo D","2° Grupo G"],
    ["K-15","16avos P15","Viernes 3 de Julio","19:00","1° Grupo J","2° Grupo H"],
    ["K-16","16avos P16","Viernes 3 de Julio","22:30","1° Grupo K","3° Grupo D/E/I/J/L"]
  ],
  R16: [
    ["K-17","Octavos P17","Sábado 4 de Julio","14:00","Ganador P1","Ganador P4"],
    ["K-18","Octavos P18","Sábado 4 de Julio","18:00","Ganador P3","Ganador P6"],
    ["K-19","Octavos P19","Domingo 5 de Julio","17:00","Ganador P2","Ganador P5"],
    ["K-20","Octavos P20","Domingo 5 de Julio","21:00","Ganador P7","Ganador P8"],
    ["K-21","Octavos P21","Lunes 6 de Julio","16:00","Ganador P12","Ganador P11"],
    ["K-22","Octavos P22","Lunes 6 de Julio","21:00","Ganador P10","Ganador P9"],
    ["K-23","Octavos P23","Martes 7 de Julio","13:00","Ganador P15","Ganador P14"],
    ["K-24","Octavos P24","Martes 7 de Julio","17:00","Ganador P13","Ganador P16"]
  ],
  QF: [
    ["K-25","Cuartos C1","Jueves 9 de Julio","17:00","Ganador P18","Ganador P17"],
    ["K-26","Cuartos C2","Viernes 10 de Julio","16:00","Ganador P21","Ganador P22"],
    ["K-27","Cuartos C3","Sábado 11 de Julio","18:00","Ganador P19","Ganador P20"],
    ["K-28","Cuartos C4","Sábado 11 de Julio","22:00","Ganador P23","Ganador P24"]
  ],
  SF: [
    ["K-29","Semifinal S1","Martes 14 de Julio","16:00","Ganador C1","Ganador C2"],
    ["K-30","Semifinal S2","Miércoles 15 de Julio","16:00","Ganador C3","Ganador C4"]
  ],
  FINAL: [
    ["K-31","Tercer Puesto","Sábado 18 de Julio","18:00","Perdedor S1","Perdedor S2"],
    ["K-32","Gran Final Mundial","Domingo 19 de Julio","16:00","Ganador S1","Ganador S2"]
  ]
};

knockoutStages = Object.fromEntries(
  Object.entries(koRows).map(([stage, games]) => [
    stage,
    games.map(g => ({
      id: g[0],
      label: g[1],
      date: g[2],
      time: g[3] + " hs",
      home: g[4],
      away: g[5],
      realHome: null,
      realAway: null
    }))
  ])
);

function showSection(id){
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  document.querySelectorAll(".menu button").forEach(button => {
    button.classList.remove("active");
  });

  const selectedSection = document.getElementById(id);
  if(selectedSection) selectedSection.classList.add("active");

  const selectedButton = document.querySelector(`.menu button[onclick="showSection('${id}')"]`);
  if(selectedButton) selectedButton.classList.add("active");

  if(id === "fixture") renderFixture();
  if(id === "grupos") renderGroups();
  if(id === "fases") renderStage(currentStage);
}

function createMatchCard(match){
  const savedHome = localStorage.getItem(`p-home-${match.id}`) || "";
  const savedAway = localStorage.getItem(`p-away-${match.id}`) || "";

  const realText = match.realHome !== null && match.realAway !== null
    ? `⚽ Resultado real: ${match.home} ${match.realHome} - ${match.realAway} ${match.away}`
    : "⏳ Esperando resultado real";

  const label = match.group ? `Grupo ${match.group}` : match.label;

  return `
    <div class="match-card">
      <div class="match-info">
        <span>📅 ${match.date} - <b>${match.time}</b></span>
        <span>${label}</span>
      </div>

      <div class="match-teams">
        <div class="team">
          ${match.homeFlag ? `<img src="${match.homeFlag}" class="flag" alt="">` : ""}
          <span>${match.home}</span>
        </div>

        <div class="inputs-forecast">
          <input 
            type="number" 
            min="0" 
            class="input-goals" 
            id="p-home-${match.id}" 
            value="${savedHome}" 
            onchange="saveForecast('${match.id}')"
          >
          <span>vs</span>
          <input 
            type="number" 
            min="0" 
            class="input-goals" 
            id="p-away-${match.id}" 
            value="${savedAway}" 
            onchange="saveForecast('${match.id}')"
          >
        </div>

        <div class="team">
          ${match.awayFlag ? `<img src="${match.awayFlag}" class="flag" alt="">` : ""}
          <span>${match.away}</span>
        </div>
      </div>

      <div class="real-result-zone">${realText}</div>
    </div>
  `;
}

function renderFixture(){
  const container = document.getElementById("fixture-list");
  if(!container) return;
  container.innerHTML = matchesData.map(createMatchCard).join("");
}

function renderGroups(){
  const container = document.getElementById("group-buttons");
  if(!container) return;

  container.innerHTML = "ABCDEFGHIJKL"
    .split("")
    .map(group => `<button onclick="selectGroup('${group}')">Grupo ${group}</button>`)
    .join("");

  selectGroup(currentGroup);
}

function selectGroup(group){
  currentGroup = group;

  const title = document.getElementById("group-title");
  const list = document.getElementById("group-list");

  if(title) title.innerText = `Grupo ${group}`;
  if(list) {
    list.innerHTML = matchesData
      .filter(match => match.group === group)
      .map(createMatchCard)
      .join("");
  }
}

function renderStage(stage){
  currentStage = stage;

  const titles = {
    R32: "Dieciseisavos de Final",
    R16: "Octavos de Final",
    QF: "Cuartos de Final",
    SF: "Semifinales",
    FINAL: "Final y Tercer Puesto"
  };

  const title = document.getElementById("stage-title");
  const list = document.getElementById("stage-list");

  if(title) title.innerText = titles[stage] || "";
  if(list) list.innerHTML = knockoutStages[stage].map(createMatchCard).join("");
}

function saveForecast(id){
  const homeInput = document.getElementById(`p-home-${id}`);
  const awayInput = document.getElementById(`p-away-${id}`);

  if(homeInput) localStorage.setItem(`p-home-${id}`, homeInput.value);
  if(awayInput) localStorage.setItem(`p-away-${id}`, awayInput.value);
}

function resultType(home, away){
  if(home > away) return "G";
  if(home < away) return "P";
  return "E";
}

function calculateScore(){
  let total = 0;
  let outcomeHits = 0;
  let exactHits = 0;

  const allMatches = [
    ...matchesData,
    ...Object.values(knockoutStages).flat()
  ];

  allMatches.forEach(match => {
    if(match.realHome === null || match.realAway === null) return;

    const predictedHome = localStorage.getItem(`p-home-${match.id}`);
    const predictedAway = localStorage.getItem(`p-away-${match.id}`);

    if(
      predictedHome === null ||
      predictedAway === null ||
      predictedHome === "" ||
      predictedAway === ""
    ) return;

    const ph = parseInt(predictedHome, 10);
    const pa = parseInt(predictedAway, 10);

    if(resultType(ph, pa) === resultType(match.realHome, match.realAway)){
      total += 1;
      outcomeHits += 1;
    }

    if(ph === match.realHome && pa === match.realAway){
      total += 1;
      exactHits += 1;
    }
  });

  const totalEl = document.getElementById("total-score");
  const outcomeEl = document.getElementById("outcome-score");
  const exactEl = document.getElementById("exact-score");

  if(totalEl) totalEl.innerText = total;
  if(outcomeEl) outcomeEl.innerText = outcomeHits;
  if(exactEl) exactEl.innerText = exactHits;
}

renderFixture();
