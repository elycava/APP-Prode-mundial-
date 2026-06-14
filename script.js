*{
  box-sizing:border-box;
}

body{
  margin:0;
  font-family:Inter,Segoe UI,Arial,sans-serif;
  background:#f3f6fb;
  color:#111827;
}

.app{
  max-width:1180px;
  margin:auto;
  padding:18px;
}

.main-header{
  background:linear-gradient(135deg,#061b52,#0d47a1,#14b8a6);
  color:white;
  border-radius:18px;
  padding:22px 26px;
  margin-bottom:16px;
  box-shadow:0 10px 25px rgba(0,0,0,.18);
}

.main-header h1{
  margin:0;
  font-size:34px;
  font-weight:900;
  letter-spacing:.5px;
}

.main-header p{
  margin:8px 0 0;
  font-size:15px;
  opacity:.95;
}

.menu{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-bottom:18px;
  position:sticky;
  top:0;
  background:#f3f6fb;
  padding:10px 0;
  z-index:10;
}

.menu button,
.group-buttons button,
.stage-buttons button,
.calc-btn{
  border:0;
  border-radius:999px;
  padding:10px 16px;
  cursor:pointer;
  font-weight:800;
  font-size:14px;
}

.menu button{
  background:white;
  color:#0f172a;
  border:1px solid #dbe3ef;
}

.menu button.active{
  background:#e11d48;
  color:white;
  border-color:#e11d48;
}

h2{
  margin:8px 0 14px;
  font-size:24px;
}

h3{
  margin:12px 0;
  font-size:20px;
}

.match-card{
  background:white;
  border-radius:16px;
  padding:14px 16px;
  margin-bottom:12px;
  box-shadow:0 3px 12px rgba(15,23,42,.08);
  border:1px solid #e5eaf2;
}

.match-info{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  font-size:13px;
  color:#475569;
  margin-bottom:12px;
  font-weight:700;
}

.match-teams{
  display:grid;
  grid-template-columns:1fr auto 1fr;
  align-items:center;
  gap:14px;
}

.team{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:17px;
  font-weight:800;
}

.team:last-child{
  justify-content:flex-end;
  text-align:right;
}

.flag{
  width:30px;
  height:22px;
  object-fit:cover;
  border-radius:3px;
  box-shadow:0 0 0 1px #ddd;
}

.inputs-forecast{
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  color:#334155;
}

.input-goals{
  width:46px;
  height:38px;
  text-align:center;
  font-size:18px;
  font-weight:800;
  border:2px solid #2563eb;
  border-radius:10px;
  outline:none;
}

.input-goals:focus{
  border-color:#e11d48;
}

.real-result-zone{
  margin-top:12px;
  background:#fff7ed;
  border:1px solid #fed7aa;
  color:#7c2d12;
  padding:8px 10px;
  border-radius:10px;
  font-size:13px;
  font-weight:600;
}

.group-buttons,
.stage-buttons{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-bottom:14px;
}

.group-buttons button,
.stage-buttons button{
  background:#0d47a1;
  color:white;
}

.group-buttons button:hover,
.stage-buttons button:hover{
  background:#e11d48;
}

.score-box{
  background:white;
  border-radius:16px;
  padding:18px;
  max-width:420px;
  box-shadow:0 3px 12px rgba(15,23,42,.08);
  border:1px solid #e5eaf2;
}

.score-box p{
  font-size:18px;
  margin:10px 0;
}

.calc-btn{
  margin-top:14px;
  background:#e11d48;
  color:white;
}

.section{
  display:none;
}

.section.active{
  display:block;
}

@media(max-width:720px){
  .app{
    padding:10px;
  }

  .main-header h1{
    font-size:25px;
  }

  .match-teams{
    grid-template-columns:1fr;
    text-align:center;
  }

  .team,
  .team:last-child{
    justify-content:center;
    text-align:center;
  }

  .inputs-forecast{
    justify-content:center;
  }
}
