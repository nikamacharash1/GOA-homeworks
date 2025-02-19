# function greet(name) {
#   if (name === "Johnny") {
#     return "Hello, my love!";  
#   } else {
#     return "Hello, " + name + "!";  
#   }
# }



# function getAverage(marks){
#   var sum = 0;
  
#   for (var i in marks)
#     sum += marks[i];
  
#   return parseInt(sum / marks.length);
# }



# function removeExclamationMarks(s) {
#   return s.split('!').join('');
# }



# function rentalCarCost(days) {
#     var dayCost = 40;
    
#     var discount = 0;
#     if(days >= 3) discount += 20;
#     if(days >= 7) discount += 30;
    
#     return dayCost * days - discount;
# }

