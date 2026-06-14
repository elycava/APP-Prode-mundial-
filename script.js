const flag = c => `https://flagcdn.com/w40/${c}.png`;

let currentGroup = "A";
let currentStage = "R32";

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

const knockoutStages = {
  R32:[
    ["K-01","16avos P1","Domingo 28 de Junio","16:00","2° Grupo A","2° Grupo B"],
    ["K-02","16avos P2","Lunes 29 de Junio","14:00","1° Grupo C","2° Grupo F"],
    ["K-03","16avos P3","Lunes 29 de Junio","17:30","1° Grupo E","3° Grupo A/B/C/D/F"],
    ["K-04","16avos P4","Lunes 29 de Junio","22:00","1° Grupo F","2° Grupo C"]
  ],
  R16:[
    ["K-17","Octavos P17","Sábado 4 de Julio","14:00","Ganador P1","Ganador P4"],
    ["K-18","Octavos P18","Sábado 4 de Julio","18:00","Ganador P3","Ganador P6"]
  ],
  QF:[
    ["K-25","Cuartos C1","Jueves 9 de Julio","17:00","Ganador P18","Ganador P17"]
  ],
  SF:[
    ["K-29","Semifinal S1","Martes 14 de Julio","16:00","Ganador C1","Ganador C2"],
    ["K-30","Semifinal S2","Miércoles 15 de Julio","16:00","Ganador C3","Ganador C4"]
  ],
  FINAL:[
    ["K-31","Tercer Puesto","Sábado 18 de Julio","18:00","Perdedor S1","Perdedor S2"],
    ["K-32","Gran Final Mundial","Domingo 19 de Julio","16:00","Ganador S1","Ganador S2"]
  ]
};

Object.keys(knockoutStages).forEach(stage => {
  knockoutStages[stage] = knockoutStages[stage].map(x => ({
    id:x[0],
    label:x[1],
    date:x[2],
    time:x[3] + " hs",
    home:x[4],
    away:x[5],
    realHome:null,
    realAway:null
  }));
});

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

function showSection(id){
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".menu button").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  const btn = document.querySelector(`.menu button[onclick="showSection('${id}')"]`);
  if(btn) btn.classList.add("active");

  if(id === "fixture") renderFixture();
  if(id === "grupos") renderGroups();
  if(id === "fases") renderStage(currentStage);
}

function card(m){
  const ph = localStorage.getItem(`p-home-${m.id}`) || "";
  const pa = localStorage.getItem(`p-away-${m.id}`) || "";
  const real = m.realHome !== null
    ? `⚽ Resultado real: ${m.home} ${m.realHome} - ${m.realAway} ${m.away}`
    : "⏳ Esperando resultado real";

  return `
  <div class="match-card">
    <div class="match-info">
      <span>📅 ${m.date} - <b>${m.time}</b></span>
      <span>${m.group ? "Grupo " + m.group : m.label}</span>
    </div>

    <div class="match-teams">
      <div class="team">
        ${m.homeFlag ? `<img src="${m.homeFlag}" class="flag">` : ""}
        <span>${m.home}</span>
      </div>

      <div class="inputs-forecast">
        <input type="number" min="0" class="input-goals" id="p-home-${m.id}" value="${ph}" onchange="saveForecast('${m.id}')">
        <span>vs</span>
        <input type="number" min="0" class="input-goals" id="p-away-${m.id}" value="${pa}" onchange="saveForecast('${m.id}')">
      </div>

      <div class="team">
        ${m.awayFlag ? `<img src="${m.awayFlag}" class="flag">` : ""}
        <span>${m.away}</span>
      </div>
    </div>

    <div class="real-result-zone">${real}</div>
  </div>`;
}

function renderFixture(){
  document.getElementById("fixture-list").innerHTML = matchesData.map(card).join("");
}

function renderGroups(){
  document.getElementById("group-buttons").innerHTML =
    "ABCDEFGHIJKL".split("").map(g => `<button onclick="selectGroup('${g}')">Grupo ${g}</button>`).join("");
  selectGroup(currentGroup);
}

function selectGroup(g){
  currentGroup = g;
  document.getElementById("group-title").innerText = `Grupo ${g}`;
  document.getElementById("group-list").innerHTML = matchesData.filter(m => m.group === g).map(card).join("");
}

function renderStage(stage){
  currentStage = stage;
  const titles = {R32:"Dieciseisavos",R16:"Octavos",QF:"Cuartos",SF:"Semifinales",FINAL:"Final y tercer puesto"};
  document.getElementById("stage-title").innerText = titles[stage];
  document.getElementById("stage-list").innerHTML = knockoutStages[stage].map(card).join("");
}

function saveForecast(id){
  localStorage.setItem(`p-home-${id}`, document.getElementById(`p-home-${id}`).value);
  localStorage.setItem(`p-away-${id}`, document.getElementById(`p-away-${id}`).value);
}

function result(h,a){
  if(h > a) return "G";
  if(h < a) return "P";
  return "E";
}

function calculateScore(){
  let total = 0;
  let outcome = 0;
  let exact = 0;

  const all = [...matchesData, ...Object.values(knockoutStages).flat()];

  all.forEach(m => {
    if(m.realHome === null) return;

    const ph = localStorage.getItem(`p-home-${m.id}`);
    const pa = localStorage.getItem(`p-away-${m.id}`);

    if(ph === null || pa === null || ph === "" || pa === "") return;

    const a = parseInt(ph);
    const b = parseInt(pa);

    if(result(a,b) === result(m.realHome,m.realAway)){
      total++;
      outcome++;
    }

    if(a === m.realHome && b === m.realAway){
      total++;
      exact++;
    }
  });

  document.getElementById("total-score").innerText = total;
  document.getElementById("outcome-score").innerText = outcome;
  document.getElementById("exact-score").innerText = exact;
}

renderFixture();
