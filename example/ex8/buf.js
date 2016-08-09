var buf = new Buffer(255);
var buf1 = new Buffer([10,20,30,40,50]);
var buf3 = new Buffer('www.runoob.com','utf-8');


len = buf.write("www.runoob.com");
console.log("写入字节数: " + len);

