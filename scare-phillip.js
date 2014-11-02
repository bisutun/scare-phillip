require('j-shellscript').globalize();

var boo = function(){
  shell('say I am an expert in jquery');
};

module.exports = function(){
  boo();
}();
