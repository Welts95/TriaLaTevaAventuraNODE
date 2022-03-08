let readlineSync = require("readline-sync");

const localitzacions = [
  {
    text: "Benvingut adventurer! Has arribat a Hyrule, un regne gobernat per un rei en el que hi mana la pau...\nFins que un dia...\nUn antic esser maligne es va aconseguir alliberar de la seva presso i va sembrar el caos per alla on passava...",
  },
  {
    text: `T'has adentrat al BOSC de LATOAN, bosc que connecta la regió de Farone amb Latoan, el teu poble natal. \nAl NORD hi ha el BOSC de FARONE.`,
    nord: 2,
    sud: 1,
    est: 1,
    oest: 1,
  },
  {
    text: "Desprès de caminar una mica has aconseguit arribar al BOSC de FARONE. \nAl NORD hi ha el PRAT de FARONE, al SUD hi ha el BOSC de LATOAN, al OEST hi ha KAKARIKO i al EST hi ha el DESERT de GERUDO.",
    nord: 3,
    sud: 1,
    oest: 4,
    est: 5,
  },
  {
    text: `Desprès d'una llarga caminata i enfrentar-te a uns quants monstres que no et volien fer res de bó, has arribat al PRAT de FARONE. \nAl NORD hi ha la CIUTADELA, al SUD hi ha el BOSC de Farone.`,
    nord: 8,
    sud: 2,
    est: 3,
    oest: 3,
  },
  {
    text: "Desprès de molt caminar has arribat al POBLE de KAKARIKO. \nAl NORD hi ha la MONTANYA de la MORT i al EST hi ha el BOSC de FARONE.",
    nord: 6,
    sud: 4,
    est: 2,
    oest: 4,
  },
  {
    text: `No t'has adonat però estàs en mig del DESERT de GERUDO. \nAl NORD hi ha el TEMPLE del TEMPS i al OEST hi ha el BOSC de FARONE.`,
    nord: 7,
    sud: 5,
    est: 5,
    oest: 2,
  },
  {
    text: `Monstres... extranys passatges... no saps com però has arribat a la MONTANYA DE LA MORT, un volcà en erupció! Quina por! Millor tornar per on has vingut. \nAl SUD hi ha KAKARIKO.`,
    nord: 6,
    sud: 4,
    est: 6,
    oest: 6,
  },
  {
    text: "Un llarg camí sota el sol del desert, moltes pases desprès has aconseguit arribar al llegendari TEMPLE del TEMPS! Pero sembla que nomès són ruines plenes de pols... (de moment) millor tornar per on has vingut. \nAl SUD hi ha el DESERT de GERUDO.",
    nord: 7,
    sud: 5,
    est: 7,
    oest: 7,
  },
  {
    text: `Majestuosa... el centre d'Hyrule... on tothom hi vol viure, has arribat a la CIUTADELA. \nAl NORD hi ha el CASTELL de HYRULE i al SUD hi ha el PRAT de FARONE.`,
    nord: 9,
    sud: 3,
    est: 8,
    oest: 8,
  },
  {
    text: `Desprès de recorrer un llarg passatge desde la ciutat, has arribat al CASTELL de HYRULE, on es troba malvat GANONDORF, el Rei Tenebre. \nEstas llest per enfrentar-te a ell? \nPrem NORD per continuar o prem SUD per tornar a la CIUTADELA.`,
    nord: 10,
    sud: 8,
    est: 9,
    oest: 9,
  },
  {
    text: "Sembla que has arribat al final del primer capítol...\nPer continuar la historia et tindrás que esperar al següent DLC...",
    nord: 11,
    sud: 11,
    est: 11,
    oest: 11,
  },
  {
    text: "Fi",
  },
];

const texts = [
  "Ara recau en tu adventurer la responsabilitat de derrotar al esser maligne i que torni la pau a Hyrule...\nEstas llest per empendre aquesta aventura? (Si o No)\n",
  `No se que has dit, estas llest per l'aventura Si o No??\n`,
  `Aquesta es la actitud... abans de continuar, com et dius adventurer? `,
  `Vaja... suposo que no seras l'indicat per salvar Hyrule. Ara sisplau, torna per on has vingut.`,
  `... Es un nom digne d'un heroi... No ens hem vist abans?`,
  "A on vols anar? (prem X per sortir)\n",
  "Sembla que no pots anar per aquesta ruta...",
  "Has decidit abandonar... Qué serà de Hyrule ara?",
  "... quin nom mes extrany. ",
  "Gràcies per jugar! :)",
];

let acabar = false;
let resposta = false;
let pregunta = null;
let nom = null;
let index = -1;

function ComprobarDireccio(nseo) {
  if (nseo === null) return false;
  nseo = ConvMinus(nseo);
  if (nseo === "nord") return 1; //NORD
  if (nseo === "sud") return 2; //SUD
  if (nseo === "oest") return 3; //EST
  if (nseo === "est") return 4; //OEST
  return false;
}
function MostraIntro() {
  return console.log(localitzacions[0].text);
}
function ConvMinus(paraula) {
  return paraula.toLowerCase();
}
function Triar() {
  return (resp = readlineSync.question(texts[0]));
}
function RespostaNula(paraula) {
  if (paraula !== "si" && paraula !== "no") {
    return true;
  } else return false;
}
function HeroiDelPassat(nom) {
  console.log(nom, texts[4]);
}
function NomQualsevol(nom) {
  console.log(nom, texts[8]);
}

while (!acabar) {
  MostraIntro();
  pregunta = Triar();
  while (!resposta) {
    if (RespostaNula(ConvMinus(pregunta))) {
      pregunta = readlineSync.question(texts[1]);
    } else {
      if (ConvMinus(pregunta) === "si") {
        nom = readlineSync.question(texts[2]);
        if (ConvMinus(nom) === "link") {
          HeroiDelPassat(nom);
        } else {
          NomQualsevol(nom);
        }
        index = 1;
        resposta = true;
      } else {
        console.log(texts[3]);
        resposta = true;
        acabar = true;
      }
    }
  }
  while (index != -1) {
    let lloc = localitzacions[index];
    console.log(lloc.text);
    let preguntalloc = readlineSync.question(texts[5]);
    if (ConvMinus(preguntalloc) === "x" && index != 11) {
      index = -1;
      acabar = true;
      console.log(texts[7], "\n", texts[9]);
    } else {
      switch (ComprobarDireccio(preguntalloc)) {
        case 1:
          index = lloc.nord;
          break;
        case 2:
          index = lloc.sud;
          break;
        case 3:
          index = lloc.oest;
          break;
        case 4:
          index = lloc.est;
          break;
        case false:
          console.log(texts[6]);
          break;
      }
      if (index === 11) {
        console.log(localitzacions[11].text, "\n", texts[9]);
        acabar = true;
        index = -1;
      }
    }
  }
}
