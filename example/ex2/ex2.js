var hello = require('./hello');
hello.world();
/*在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访 问接口，
在 main.js 中通过 require('./hello') 
加载这个模块，然后就可以直接访 问main.js 中 exports 对象的成员函数了。*/
//hello.haha();



var Hello2 = require('./hello2');
/*模块接口的唯一变化是使用 module.exports = Hello 
代替了exports.world = function(){}。 
在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。*/
var h = new Hello2();
h.setName('GAGA');
h.sayHello();