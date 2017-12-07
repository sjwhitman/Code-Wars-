var countBits = function(n) {
var binary = (n.toString(2)).split(""); 
var counter = 0; 
binary.forEach(function (element){
  if (element == 1)
    counter++
});
return counter; 
};