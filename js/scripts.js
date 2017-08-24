//Back End
var box1 = 10;
var box2 = 10;
var box3 = 10;
var box4 = 10;
var box5 = 10;
var box6 = 10;
var box7 = 10;
var box8 = 10;
var box9 = 10;
var player = 2;

function switchPlayer() {
  if(player === 2) {
    return player = 1;
  } else if (player === 1) {
    return player = 2;
  }
}
function checker() {
  if(box1 + box2 + box3 === 3) {
    alert("Player1 Wins")
  } else if (box4 + box5 + box6 === 3) {
    alert("Player1 Wins")
  } else if (box7 + box8 + box9 === 3) {
    alert("Player1 Wins")
  } else if (box1 + box4 + box7 === 3) {
    alert("Player1 Wins")
  } else if (box2 + box5 + box8 === 3) {
    alert("Player1 Wins")
  } else if (box3 + box6 + box9 === 3) {
    alert("Player1 Wins")
  }  else if (box1 + box5 + box9 === 3) {
    alert("Player1 Wins")
  } else if (box3 + box5 + box7 === 3) {
    alert("Player1 Wins")
  } else if(box1 + box2 + box3 === 6) {
    alert("Player2 Wins")
  } else if (box4 + box5 + box6 === 6) {
    alert("Player2 Wins")
  } else if (box7 + box8 + box9 === 6) {
    alert("Player2 Wins")
  } else if (box1 + box4 + box7 === 6) {
    alert("Player2 Wins")
  } else if (box2 + box5 + box8 === 6) {
    alert("Player2 Wins")
  } else if (box3 + box6 + box9 === 6) {
    alert("Player2 Wins")
  }  else if (box1 + box5 + box9 === 6) {
    alert("Player2 Wins")
  } else if (box3 + box5 + box7 === 6) {
    alert("Player2 Wins")
  }
}
// function Contact(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.addresses = [];
// }
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
//Front End
$(document).ready(function() {
  $("#1").click(function() {
    switchPlayer()
    $("#1").text(player);
    box1 = player
    checker()
  });
  $("#2").click(function() {
    switchPlayer()
    $("#2").text(player);
    box2 = player
    checker()
  });
  $("#3").click(function() {
    switchPlayer()
    $("#3").text(player);
    box3 = player
    checker()
  });
  $("#4").click(function() {
    switchPlayer()
    $("#4").text(player);
    checker()
  });
  $("#5").click(function() {
    switchPlayer()
    $("#5").text(player);
    checker()
  });
  $("#6").click(function() {
    switchPlayer()
    $("#6").text(player);
    checker()
  });
  $("#7").click(function() {
    switchPlayer()
    $("#7").text(player);
    checker()
  });
  $("#8").click(function() {
    switchPlayer()
    $("#8").text(player);
    checker()
  });
  $("#9").click(function() {
    switchPlayer()
    $("#9").text(player);
    checker()
  });
});
