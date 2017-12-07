function songDecoder(song){
  
  var newArr = song.split("WUB").filter(function removeSpaces(element){   
      return element > " "; 
  });

  return newArr.join(" ").trim(); 
}