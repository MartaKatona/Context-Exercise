var Robot = function (name) {
  this.name = name;

}

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");


// #1
console.log('invoke add(0,1) returns: ', add(0,1));

// #2
console.log('invoke add() using call () returns: ', add.call(voltron,2,3));

// #3
console.log('invoke add() using apply () returns: ', add.apply(optimus,[20,30]));

// #4
var calculate = add.bind(bender);
console.log('invoke calculat using bind ', calculate('drinking','beer'));