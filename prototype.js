//var prototype;
function student() {
  this.name = "Prabin";
  this.age = "24";
  this.email = "info@prabin.com";
}

student.prototype = {
  address: "ktm",
  getName: function() {
    return this.name;
  }
};

var std = new student();
console.log(std);

module.exports = std;
