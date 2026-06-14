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

[31,"F","Domingo 14 de Junio","17:00","Países Bajos","Japón","nl","jp",null,null],
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
[59,"J","Sábado 27 de Junio","23:00","Argelia","Austria
