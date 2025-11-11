
let dayNumber = parseInt(prompt("Enter a number between 1 and 7:"));
if (dayNumber === 1) {
  alert("It's Monday!");
}
 else if (dayNumber === 2)
     {
  alert("It's Tuesday!");
} 
else if (dayNumber === 3)
     {
  alert("It's Wednesday!");
} 
else if (dayNumber === 4)
     {
  alert("It's Thursday!");
} 
else if (dayNumber === 5) 
    {
  alert("It's Friday!");
}
 else if (dayNumber === 6)
     {
  alert("It's Saturday!");
}
 else if (dayNumber === 7)
     {
  alert("It's Sunday!");
} 
else if (dayNumber > 7 && dayNumber <= 14)
     {
  alert("That day will be in the next week!");
     }
else if (dayNumber > 14 && dayNumber <= 21)
     {
  alert("That day will be in the next second week!");
     }
else if (dayNumber > 21 && dayNumber <= 28)
     {
  alert("That day will be in the third week!");
     }
else if (dayNumber > 28 && dayNumber === 31)
     {
  alert("That day will be in the fourth week!");
     }
else if (dayNumber > 31)
     {
  alert("That day is not in this month");
     }


 else {
  alert("Invalid input! Please enter a number between 1 and 7");
}
