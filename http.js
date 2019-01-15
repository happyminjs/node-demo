const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// 从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');   
console.log('Static root dir: ' + root);

//  创建服务器
var server = http.createServer((request, response) => {
    // 回调函数接收request和response对象,
    // 获取URL的path，类似'/css/bootstrap.css'
    var pathname = url.parse(request.url).pathname;
    console.log('pathname: ', pathname);
    // 获得对应的本地文件路径
    var filepath = path.join(root, pathname);
    console.log('filepath: ', filepath);

    // 获取文件状态
    fs.stat(filepath, (err, stats) => {
        if(!err && stats.isFile()){
            // 没有出错，且文件存在
            console.log('200 ' + request.method + ': ' + request.url);
            // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
            // response.writeHead(200, {'Content-Type': 'text/html'});
            response.writeHead(200);
            // 将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else if(!err && stats.isDirectory()) {
            fs.createReadStream(path.join(root, 'index.html')).pipe(response);
        }else{
            // 出错了，或者文件不存在
            console.log('404 ' + request.url);
            // 发送404响应
            response.writeHead(404);
            let file404 = path.join(root, '404.html');
            fs.createReadStream(file404).pipe(response);
            // response.end('404 Not Found!,hfwer');
        }
    })
    // 将HTTP响应的HTML内容写入response:
    // response.end('<h1>Hello world!</h1>'); // 表示请求结束，将结果返回给浏览器
});
server.listen(3001);
console.log('Server is running at http://127.0.0.1:3001/')