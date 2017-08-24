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
var letter = player;

function switchPlayer() {
  if(player % 2 === 0) {
    letter = "X"
    return player = 1;
  } else if (player % 2 === 1) {
    letter = "Y"
    return player = 2;
  }
}
function checker() {
  if(box1 + box2 + box3 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box4 + box5 + box6 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box7 + box8 + box9 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box1 + box4 + box7 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box2 + box5 + box8 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box3 + box6 + box9 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box1 + box5 + box9 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if (box3 + box5 + box7 === 3) {
    alert("Player1 Wins")
    location.reload();
  } else if(box1 + box2 + box3 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box4 + box5 + box6 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box7 + box8 + box9 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box1 + box4 + box7 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box2 + box5 + box8 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box3 + box6 + box9 === 6) {
    alert("Player2 Wins")
    location.reload();
  }  else if (box1 + box5 + box9 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box3 + box5 + box7 === 6) {
    alert("Player2 Wins")
    location.reload();
  } else if (box1 + box2 + box3 + box4 + box5 + box6 + box7 + box8 + box9 === 13) {
    alert("Its A Draw")
    location.reload();
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
    $("#1").text(letter);
    box1 = player
    checker()
  });
  $("#2").click(function() {
    switchPlayer()
    $("#2").text(letter);
    box2 = player
    checker()
  });
  $("#3").click(function() {
    switchPlayer()
    $("#3").text(letter);
    box3 = player
    checker()
  });
  $("#4").click(function() {
    switchPlayer()
    $("#4").text(letter);
    box4 = player
    checker()
  });
  $("#5").click(function() {
    switchPlayer()
    $("#5").text(letter);
    box5 = player
    checker()
  });
  $("#6").click(function() {
    switchPlayer()
    $("#6").text(letter);
    box6 = player
    checker()
  });
  $("#7").click(function() {
    switchPlayer()
    $("#7").text(letter);
    box7 = player
    checker()
  });
  $("#8").click(function() {
    switchPlayer()
    $("#8").text(letter);
    box8 = player
    checker()
  });
  $("#9").click(function() {
    switchPlayer()
    $("#9").text(letter);
    box9 = player
    checker()
  });
  $("#reset").click(function() {
    location.reload();
  });
});
