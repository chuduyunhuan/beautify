var beautify = require('js-beautify').js_beautify,
	fs = require('fs');

//文件夹读取
function readFileDir(opts){
	var path = opts.path || 'origin-scripts';
	var savePath = opts.savePath || 'processed-scripts';
	fs.readdir(path,function(err,files){
		files.map(function(fileName){
			fs.readFile(path + '/' + fileName, 'utf-8', function(err, data) {
				if(err) throw err;
				var beautifyData = beautify(data, {
					indent_size: 4,
					indent_with_tabs: true,
					indent_level: 0
				});
				fs.writeFile(savePath + '/' + fileName, beautifyData, 'utf-8', (err) => {
					if (err) throw err;
					console.log(fileName + ' has been saved!');
				});
			});
		});
	});
}

var CONFIG = {
	path: 'origin-scripts',
	savePath: 'processed-scripts'
};
readFileDir(CONFIG);