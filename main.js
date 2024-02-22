//Variáveis
const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const imgCookieClosed = document.querySelector('#screen1 img');
let randomPhrase = Math.round(Math.random() * 10)

let phrases = [
"Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
"A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
"Cada dia traz uma nova oportunidade para cultivar a gratidão e lutar pelo que se quer!",
"Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice!",
"Tudo é possível se você acredita.",
"Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
"A gratidão é um fruto de grande cultura; não se encontra entre gente vulgar.",
"Agradecer o bem que recebemos é retribuir um pouco do bem que nos foi feito.",
"O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
"Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
"Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",
"Não importa o que aconteça, nunca desista dos seus sonhos.",
"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
"Feliz de quem recebeu do céu um pedaço de pão e não precisa de agradecer a ninguém além do próprio céu.",
"Verifiquei que, aos homens, se devia agradecer o menos possível, porque o reconhecimento que lhes testemunhamos os convence, facilmente, de que estão a fazer de mais!",
"Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!"
]

//Eventos
screen2.querySelector('button').addEventListener('click', btnReset)
imgCookieClosed.addEventListener('click', OpenCookie);

//funções
function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function newPhrase(){
  document.querySelector('#screen2 p').innerText = phrases[randomPhrase]
}

function OpenCookie(){
  toggleScreen()
  newPhrase()
}

function btnReset(){
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 10)
}