var fs = require('fs');

fs.stat('input.txt',function(err,stats){
	console.log(stats.isFile());
	console.log("文件信息:   "+stats.toString());
});
