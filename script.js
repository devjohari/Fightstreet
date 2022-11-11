let healthp = document.getElementById("healthr");
let healthe = document.getElementById("healthk");
let result = document.getElementById("result");
let play = document.getElementById("play");

class player {
   constructor(name, attack, heal) {
      this.name = name;
      this.health = 100;
      this.attack = attack;
      this.heal = heal;
   }

   strike(enemy) {
      enemy.health -= Math.ceil(Math.random() * this.attack);
   }

   gain() {
      if (this.health < 100) {
         this.health += Math.ceil(Math.random() * this.heal);
      } else {
         this.health = 100;
      }
   }
}

class games {
   constructor() {
      this.isover = 1;
   }
   play() {
      this.isover = 0;
      result.innerText = "FIGHT!";
      console.log("beginning");
      Ryu.health = 100;
      Ken.health = 100;
      healthp.innerText = `Health : ${100}`;
      healthe.innerText = `Health : ${100}`;
   }
   checkover() {
      if (this.isover == 1) {
         return false;
      } else {
         return true;
      }
   }
   declarewinner(player, enemy) {
      if (enemy.health <= 0) {
         result.innerText = `${player.name} wins!`;
         document.getElementById("v").play();
         console.log(player.name);
      } else {
         result.innerText = `${enemy.name} wins!`;
         document.getElementById("v").play();
         console.log(enemy.name);
      }
   }

   reset() {
      Ryu.health = `Health : ${100}`;
      Ken.health = `Health : ${100}`;
      healthp.innerText = Ryu.health;
      healthe.innerText = Ken.health;
   }
}

let Ryu = new player("Ryu", 7, 7);
let Ken = new player("Ken", 7, 7);
let game = new games();

play.addEventListener("click", function (e) {
   game.play();
});

document.addEventListener("keypress", function yo(e) {
   if (e.key == "q" && game.checkover()) {
      document.getElementById("qp").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ryu, Ken);
      } else {
         Ryu.strike(Ken);
         console.log(Ken.health);
         healthe.innerText = `Health : ${Ken.health}`;
      }
   }
});

document.addEventListener("keypress", function (e) {
   if (e.key == "a" && game.checkover()) {
      document.getElementById("qh").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ryu, Ken);
      } else {
         Ryu.gain();
         console.log(Ryu.health);
         healthp.innerText = `Health : ${Ryu.health}`;
      }
   }
});

document.addEventListener("keypress", function (e) {
   if (e.key == "p" && game.checkover()) {
      document.getElementById("fp").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ken, Ryu);
      } else {
         Ken.strike(Ryu);
         healthp.innerText = `Health : ${Ryu.health}`;
      }
   }
});

document.addEventListener("keypress", function (e) {
   if (e.key == "l" && game.checkover()) {
      document.getElementById("fh").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ken, Ryu);
      } else {
         Ken.gain();
         console.log(Ken.health);
         healthe.innerText = `Health : ${Ken.health}`;
      }
   }
});
document.getElementById("attackr").addEventListener("click", function () {
   if (game.checkover()) {
      document.getElementById("qp").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ryu, Ken);
      } else {
         Ryu.strike(Ken);
         console.log(Ken.health);
         healthe.innerText = `Health : ${Ken.health}`;
      }
   }
});

document.getElementById("healr").addEventListener("click", function () {
   if (game.checkover()) {
      document.getElementById("qh").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ryu, Ken);
      } else {
         Ryu.gain();
         console.log(Ryu.health);
         healthp.innerText = `Health : ${Ryu.health}`;
      }
   }
});

document.getElementById("attackk").addEventListener("click", function () {
   if (game.checkover()) {
      document.getElementById("fp").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ken, Ryu);
      } else {
         Ken.strike(Ryu);
         healthp.innerText = `Health : ${Ryu.health}`;
      }
   }
});

document.getElementById("healk").addEventListener("click", function () {
   if (game.checkover()) {
      document.getElementById("fh").play();
      if (Ryu.health <= 0 || Ken.health <= 0) {
         game.isover = 1;
         game.declarewinner(Ken, Ryu);
      } else {
         Ken.gain();
         console.log(Ken.health);
         healthe.innerText = `Health : ${Ken.health}`;
      }
   }
});

document.addEventListener("keypress", function (e) {
   if (e.key == "Enter") {
      game.play();
   }
});

document.addEventListener("keypress", function (e) {
   if (e.key == "r") {
      game.reset();
   }
});

document.getElementById("sim").addEventListener("click", function (e) {
   while (Ryu.health > 0 && Ken.health > 0 && game.checkover()) {
      Ryu.health -= Math.floor(Math.random() * Ken.attack);
      Ken.health -= Math.floor(Math.random() * Ryu.attack);
   }
   if (Ken.health <= 0 && game.checkover()) {
      result.innerText = "Ryu wins!";
      game.isover = 1;
      document.getElementById("v").play();
   } else if (Ryu.health <= 0 && game.checkover()) {
      result.innerText = "Ken wins!";
      game.isover = 1;
      document.getElementById("v").play();
   }
});