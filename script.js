var curnum;
var value;
var numlist = [];
var mean = 0;
var sd = 0;

window.onload = function() {
  value = '';
  document.getElementById('curnum').innerHTML = "Type Number";
}

function anum(choice) {

  curnum = choice;
  value += curnum;
  document.getElementById('curnum').innerHTML = value;

}

function add() {
  numlist.push(parseFloat(value))
  value = '';

  document.getElementById('curnum').innerHTML = "‎ ‎ ‎ ";

}

function equals() {
  numlist.push(parseFloat(value));

  if (value != undefined) {
    document.getElementById('curnum').innerHTML = value;
  } else {
    document.getElementById('curnum').innerHTML = "‎ ‎ ";
  }




  for (let i = 0; i < numlist.length; i++) {
    mean = mean + parseFloat(numlist[i])
  }
  mean = parseFloat(mean / numlist.length)

  //alert("Average: " + mean)

  for (let i = 0; i < numlist.length; i++) {
    sd += (Math.pow(Math.abs(numlist[i] - mean), 2))
  }

  sd /= numlist.length
  sd = Math.sqrt(sd)

  //alert("Standard Deviation: " + parseFloat(sd))

  document.getElementById('curnum').innerHTML = "‎Average/Mean: " + mean;
  document.getElementById('sdtext').innerHTML = "Standard Deviation: " + sd;
  document.getElementById('curtex').innerHTML = "Your Results:";

}

function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  mean = 0;
  sd = 0;
  document.getElementById('curnum').innerHTML = "Type Number";
  document.getElementById('sdtext').innerHTML = " ";

}

function seeset() {
  alert("Your set currently has: " + numlist)
}


function boranum() {
  var borcurnum = parseFloat(prompt("Enter Number: "));
  numlist.push(parseFloat(borcurnum))
}
