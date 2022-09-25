// HTML SET UP
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);
// INPUT
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
}
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;
// OUTPUT
var output = {
  x: {
    start: -75,
    end: 75,
    current: 0,
  },
  y: {
    start: -75,
    end: 75,
    current: 0,
  },
}
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;
// MOUSE MOVEMENT
var handleMouseMove = function(event) {
  // MOUSE X INPUT
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  // MOUSE Y INPUT
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  // OUTPUT X
  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
  // OUTPUT Y
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
  // APPLY OUTPUT TO HTML
  pupilsArray.forEach(function(pupil, k) {
    pupil.style.transform = 'translate(' + output.x.current + 'px, ' + output.y.current + 'px)';
  });
  // console.log('output.x.current', output.x.current)
  // console.log('mouseY.fraction', input.mouseY.fraction)
}
var handleResize = function() {
  // X HANDLE RESIZE
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  // Y Handle resize
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}
window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)
// END OF ALL MOUSE MOVEMENT STUFF
//
// BACKGROUND COLOUR
var numBgColor = Math.floor(Math.random() * 32);
// var numBgColor = 1;
let bgColor;
switch (numBgColor) {
  case 0:
    bgColor = "F2C4DE";
    break;
  case 1:
    bgColor = "F2A477";
    break;
  case 2:
    bgColor = "A9B5D9";
    break;
  case 3:
    bgColor = "B8C6D9";
    break;
  case 4:
    bgColor = "C2E6DF";
    break;
  case 5:
    bgColor = "E5F5DC";
    break;
  case 6:
    bgColor = "F2DEA2";
    break;
  case 7:
    bgColor = "AED8F2";
    break;
  case 8:
    bgColor = "71B1D9";
    break;
  case 9:
    bgColor = "D9BCF2";
    break;
  case 10:
    bgColor = "BDD2B6";
    break;
  case 11:
    bgColor = "F0D9FF";
    break;
  case 12:
    bgColor = "B7E5DD";
    break;
  case 13:
    bgColor = "9ED2C6";
    break;
  case 14:
    bgColor = "AFB4FF";
    break;
  case 15:
    bgColor = "E1FFEE";
    break;
  case 16:
    bgColor = "A5F1E9";
    break;
  case 17:
    bgColor = "7FBCD2";
    break;
  case 18:
    bgColor = "F07DEA";
    break;
  case 19:
    bgColor = "9FC9F3";
    break;
  case 20:
    bgColor = "A084CA";
    break;
  case 21:
    bgColor = "FAF4B7";
    break;
  case 22:
    bgColor = "ECC5FB";
    break;
  case 23:
    bgColor = "AF0171";
    break;
  case 24:
    bgColor = "D2DAFF";
    break;
  case 25:
    bgColor = "C3F8FF";
    break;
  case 26:
    bgColor = "FF9494";
    break;
  case 27:
    bgColor = "FFE3E1";
    break;
  case 28:
    bgColor = "6F38C5";
    break;
  case 29:
    bgColor = "87A2FB";
    break;
  case 30:
    bgColor = "C689C6";
    break;
  case 31:
    bgColor = "DEFFC4";
}
document.body.style.backgroundColor = '#' + bgColor;
// END BACKGROUND COLOUR

//CURSOR IMAGE
var numCursorImg = Math.floor(Math.random() * 11);

let cursorImg;
switch (numCursorImg) {
  case 0:
    cursorImg = "url('cake0.png'), auto";
    break;
  case 1:
    cursorImg = "url('cake1.png'), auto";
    break;
  case 2:
    cursorImg = "url('cake2.png'), auto";
    break;
  case 3:
    cursorImg = "url('cake3.png'), auto";
    break;
  case 4:
    cursorImg = "url('cake4.png'), auto";
    break;
  case 5:
    cursorImg = "url('cake5.png'), auto";
    break;
  case 6:
    cursorImg = "url('cake6.png'), auto";
    break;
  case 7:
    cursorImg = "url('cake7.png'), auto";
    break;
  case 8:
    cursorImg = "url('cake8.png'), auto";
    break;
  case 9:
    cursorImg = "url('cake9.png'), auto";
    break;
  case 10:
    cursorImg = "url('cake10.png'), auto";
}
var list, index;
list = document.getElementsByClassName("cursor");
for (index = 0; index < list.length; ++index) {
  list[index].setAttribute("style", "cursor: " + cursorImg + ";");
}
// END CURSOR IMAGE

var eyes = document.getElementById('eyes');

document.onmousedown = function() {
  eyes.style.visibility = "hidden";

  // 'Hidden' tant que le bouton de la souris est maintenu enfoncé
}

document.onmouseup = function() {
  eyes.style.visibility = "visible";
  document.getElementById("h1").innerHTML = "Feed me";
  // 'Visible' si le bouton de la souris n'est plus enfoncé
}

// CHANGE H1 TEXT
var numChangeTxt = Math.floor(Math.random() * 121);
var txtToShow = "Feed me";
txtToShowFunc();

function txtToShowFunc() {
  switch (numChangeTxt) {
    case 0:
      txtToShow = "Ash say meow ";
      break;
    case 1:
      txtToShow = "Food idiot ";
      break;
    case 2:
      txtToShow = "It looks like you died last year";
      break;
    case 3:
      txtToShow = "I need to draw myself a life line";
      break;
    case 4:
      txtToShow = "Chlod ";
      break;
    case 5:
      txtToShow = "Iriz trapped in bubble";
      break;
    case 6:
      txtToShow = "just extend your nose ";
      break;
    case 7:
      txtToShow = "i spent all my energy on scrolling with my nose ";
      break;
    case 8:
      txtToShow = "'e is before g.' - 'no, g is after e' ";
      break;
    case 9:
      txtToShow = "my parents will have grandparents from my sister ";
      break;
    case 10:
      txtToShow = "everyday i love using hand cream ";
      break;
    case 11:
      txtToShow = "everyday i love you ";
      break;
    case 12:
      txtToShow = "anyone can type cough... couth ";
      break;
    case 13:
      txtToShow = "chole took the alphabet ";
      break;
    case 14:
      txtToShow = "To Ash xxx";
      break;
    case 15:
      txtToShow = "you eat Koreans?";
      break;
    case 16:
      txtToShow = "i feel bad about this";
      break;
    case 17:
      txtToShow = "ye men - sos";
      break;
    case 18:
      txtToShow = "i bet those children have oversized helmets - sos";
      break;
    case 19:
      txtToShow = "box of internet = little searchy box thingy - sos";
      break;
    case 20:
      txtToShow = "Dc. duh";
      break;
    case 21:
      txtToShow = "USS - United States Suck";
      break;
    case 22:
      txtToShow = "petrol cats";
      break;
    case 23:
      txtToShow = "energy efficient raccoon  ";
      break;
    case 24:
      txtToShow = "'is that a white snowman?'(looking at some yellow dots)";
      break;
    case 25:
      txtToShow = "Je deteste l'anglais";
      break;
    case 26:
      txtToShow = "Hedgehog drowning pool";
      break;
    case 27:
      txtToShow = "The yellow poster will haunt you in your dreams with questionable pictures ";
      break;
    case 28:
      txtToShow = "Imagine";
      break;
    case 29:
      txtToShow = "I'm a visual learner";
      break;
    case 30:
      txtToShow = "I will blow you away";
      break;
    case 31:
      txtToShow = "Wait your couch is pink?!";
      break;
    case 32:
      txtToShow = "I am always right, even if the sky is purple and full of hedgehogs... Don't look at the sky";
      break;
    case 33:
      txtToShow = "That's going to be my...owwww";
      break;
    case 34:
      txtToShow = "Mind controlling beanie";
      break;
    case 35:
      txtToShow = "Negative body image";
      break;
    case 36:
      txtToShow = "My lungs on fire";
      break;
    case 37:
      txtToShow = "Every scarf should come with a instruction sheet";
      break;
    case 38:
      txtToShow = "Where’s your tab button ";
      break;
    case 39:
      txtToShow = "i do hope it mentions my increasingly amazing personality";
      break;
    case 40:
      txtToShow = "like a star in the sky";
      break;
    case 41:
      txtToShow = "sandpaper stick";
      break;
    case 42:
      txtToShow = "buy 300 get $500 off";
      break;
    case 43:
      txtToShow = "i ate without my tounge";
      break;
    case 44:
      txtToShow = "Meerkats look like submarines which are bad as they blew up stuff in ww2";
      break;
    case 45:
      txtToShow = "NeuTrOnS aRe UsElEsS...";
      break;
    case 46:
      txtToShow = "Hopefully they won't notice that I…";
      break;
    case 47:
      txtToShow = "What day is Friday? Friday?";
      break;
    case 48:
      txtToShow = "I want to be a mushroom when I grow up";
      break;
    case 49:
      txtToShow = "Hackar - Transformatar - Spyar ";
      break;
    case 50:
      txtToShow = "I'm Spiderman! Splear ";
      break;
    case 51:
      txtToShow = "Stupid bored idiots ";
      break;
    case 52:
      txtToShow = "Tiny Spidey";
      break;
    case 53:
      txtToShow = "Interesting facts: there are cat photos ";
      break;
    case 54:
      txtToShow = "Iriz is attracted to her DVC classroom";
      break;
    case 55:
      txtToShow = "Earlier then early";
      break;
    case 56:
      txtToShow = "were the women punished worse then the female?";
      break;
    case 57:
      txtToShow = "Do you consider that the cell phone reception is weak cause New Zealand is weak?";
      break;
    case 58:
      txtToShow = "i knock you out with a sycamore tree";
      break;
    case 59:
      txtToShow = "i still have did you know";
      break;
    case 60:
      txtToShow = "i dont have it, i kidnapped it";
      break;
    case 61:
      txtToShow = "quails fault";
      break;
    case 62:
      txtToShow = "Strategically wake them up";
      break;
    case 63:
      txtToShow = "you dont deserve a mouse";
      break;
    case 64:
      txtToShow = "i didn't know the sound button would turn the volume up";
      break;
    case 65:
      txtToShow = "Mining at home";
      break;
    case 66:
      txtToShow = "Fada";
      break;
    case 67:
      txtToShow = "Hi guys, today we're going to be mining at home...!";
      break;
    case 68:
      txtToShow = "Deep fried tranatula";
      break;
    case 69:
      txtToShow = "And you can feel the crunchyness in the legs";
      break;
    case 70:
      txtToShow = "Evil fingers";
      break;
    case 71:
      txtToShow = "What are you";
      break;
    case 72:
      txtToShow = "'Get the thingy', 'What thingy', 'This thingy?', 'Yeah, that thingy.'";
      break;
    case 73:
      txtToShow = "China is very hot";
      break;
    case 74:
      txtToShow = "I want to be rich, pretty and awful ";
      break;
    case 75:
      txtToShow = "Orphaned squared";
      break;
    case 76:
      txtToShow = "I shouldn't turn the other way on the bus cause...";
      break;
    case 77:
      txtToShow = "I get you good vodka";
      break;
    case 78:
      txtToShow = "Are you pregnant?";
      break;
    case 79:
      txtToShow = "Pretty comes with a price";
      break;
    case 80:
      txtToShow = "Finger waggle of shame";
      break;
    case 81:
      txtToShow = "Dam they're stretchy";
      break;
    case 82:
      txtToShow = "Good quality skin";
      break;
    case 83:
      txtToShow = "I can sell this on the black market";
      break;
    case 84:
      txtToShow = "I'm trying to be good at somthing and you're not helping";
      break;
    case 85:
      txtToShow = "Rainbow on a budget ";
      break;
    case 86:
      txtToShow = "Complicated creatures ";
      break;
    case 87:
      txtToShow = "Is the German dude German? ";
      break;
    case 88:
      txtToShow = "I laugh at stupid things (ash)";
      break;
    case 89:
      txtToShow = "I'm not that stupid... oh no I sanded my phone!";
      break;
    case 90:
      txtToShow = "How many bananas can you eat on a empty stomach?... 100?";
      break;
    case 91:
      txtToShow = "I though we had English";
      break;
    case 92:
      txtToShow = "I will do it on Tuesday ";
      break;
    case 93:
      txtToShow = "Ice cream for lunch ";
      break;
    case 94:
      txtToShow = "Desktop goose ";
      break;
    case 95:
      txtToShow = "Birthdays for 2 year Olds";
      break;
    case 96:
      txtToShow = "Inglish ";
      break;
    case 97:
      txtToShow = "Homemade astronauts ";
      break;
    case 98:
      txtToShow = "Homemade Australian";
      break;
    case 99:
      txtToShow = "Hollow full stop ";
      break;
    case 100:
      txtToShow = "Ice wall - 23 dads tall";
      break;
    case 101:
      txtToShow = "Sticky bones";
      break;
    case 102:
      txtToShow = "Fisio";
      break;
    case 103:
      txtToShow = "<《[{('Shut up!?')}]》>";
      break;
    case 104:
      txtToShow = "What was the tallest mountain before Mt Everest was discovered? ... Mt mountain? ";
      break;
    case 105:
      txtToShow = "Vertically long";
      break;
    case 106:
      txtToShow = "The water goes bloop";
      break;
    case 107:
      txtToShow = "Underwater swimming pool";
      break;
    case 108:
      txtToShow = "Google, how do I not laugh?";
      break;
    case 109:
      txtToShow = "we have a dinosaur among us";
      break;
    case 110:
      txtToShow = "Æ shut up";
      break;
    case 111:
      txtToShow = "Sea water - salt water";
      break;
    case 112:
      txtToShow = "Childhood friends";
      break;
    case 113:
      txtToShow = "I'm winning at my assessment ";
      break;
    case 114:
      txtToShow = "How many dead people are in your basement ";
      break;
    case 115:
      txtToShow = "Fix the hole in the crotch";
      break;
    case 116:
      txtToShow = "So when I die I will turn green";
      break;
    case 117:
      txtToShow = "Keeping secrets to yourself is illegal ";
      break;
    case 118:
      txtToShow = "Ca va ennuyeux ";
      break;
    case 119:
      txtToShow = "yaaaassssss queeen";
      break;
    case 120:
      txtToShow = "Left Hand Side";
      break;
    // case 121:
    //   txtToShow = "";
    //   break;
    // case 122:
    //   txtToShow = "";
    //   break;
    // case 123:
    //   txtToShow = "";
    //   break;
    // case 124:
    //   txtToShow = "";
    //   break;
    // case 125:
    //   txtToShow = "";
    //   break;
    // case 126:
    //   txtToShow = "";
    //   break;
    // case 127:
    //   txtToShow = "";
    //   break;
    // case 128:
    //   txtToShow = "";
    //   break;
    // case 129:
    //   txtToShow = "";
    //   break;

    case 120:
      txtToShow = "Iris, where you goin?";
  }
}

document.getElementById("mouth").addEventListener("mouseout", changeTxtFunc, false);

function changeTxtFunc() {
  numChangeTxt = Math.floor(Math.random() * 121);
  txtToShowFunc();
  document.getElementById("h1").innerHTML = txtToShow;
}
