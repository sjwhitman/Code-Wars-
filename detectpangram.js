function isPangram(string){
  newStr = string.toLowerCase();

  var regex = /([a-z])(?!.*\1)/g;
  if (newStr.match(regex).length == 26) 
    return true;
    
  else 
    return false; 
}