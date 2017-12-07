function presses(phrase) {

  var newPhrase = phrase.split(""); 
  var pressCount = 0; 
  var buttons = [ '1','abc2','def3','ghi4','jkl5','mno6','pqrs7','tuv8','wxyz9','*',' 0','#']
  
  newPhrase.forEach(function totalPress(chara, index) {
    buttons.forEach(function findChara(bValue, buttonIndex){
    var butty = bValue.split("");
    var lowerChara = chara.toLowerCase(); 
    pressCount += butty.indexOf(lowerChara) + 1;

    });
  });
  
  return pressCount; 
}