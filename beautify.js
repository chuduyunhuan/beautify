var beautify = require('js-beautify').js_beautify,
	fs = require('fs');

//文件夹读取
function readFileDir(opts){
	var path = opts.path || 'origin-scripts';
	var savePath = opts.savePath || 'processed-scripts';
	var len = 0;
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
					len++;
					console.log(fileName + ' has been saved!');
					console.log('已经处理了 ' + len + ' 个文件!');
				});
			});
		});
		console.log('一共有 ' + files.length + ' 个文件!');
	});
}
function readFileDir2(opts) {
	var path = opts.path || 'origin-scripts';
	var savePath = opts.savePath || 'processed-scripts';
	fs.readdir(path,function(err,files) {
		var callback = fileName => {
			readFile(path, fileName, function(err, data) {

			});
		};
		mapFile(files, callback);
	});
}
function mapFile(files, callback) {
	files.map(callback);
}
function readFile(path, fileName, callback) {
	fs.readFile(path + '/' + fileName, 'utf-8', callback);
}
function writeFile(savePath, fileName, data, callback) {
	fs.writeFile(savePath + '/' + fileName, data, 'utf-8', callback);
}
var CONFIG = {
	path: 'origin-scripts',
	savePath: 'processed-scripts'
};
readFileDir(CONFIG);