    // 启动
    命令行到跟目录，执行  node http.js即可启动node服务
    有配置默认index.html，和404.html


------
### 一、vscode本地环境配置
新建根目录的index.js文件，然后选择Debug页卡，点击齿轮配置，选择node.js，会自动创建.vscode文件夹和launch.json文件。具体可看下图：
![配置](/imgs/config.png)![配置](/imgs/config2.png)![配置](/imgs/config3.png)

    launch.json参数解释：
    configurations.program： 启动入口文件

##### 异步的实现
    1、回调函数
    2、定时器：setTimeout、setInterval
    在js中会优先执行同步代码，例如：
```
    setTimeout(() => {
        console.log(1000000);
    },0);
    console.log(1111);

    // 输出
    // 1111
    // 1000000
```
--------------
### 二、模块化、
### 三、fs文件操作
##### 读写文件
node自带文件操作模块fs，只需使用时引入即可，有方法
readFile/writeFile/stat以及对应的同步方法readFileSync、writeFileSync/statSync;
读文件、写文件、文件状态（是否文件、是否路径、大小、创建时间、修改时间）
##### 流读写文件
```
    const fs = require('fs');
    // 打开一个流
    const rs = rs.createReadStream('sample.txt', 'utf-8');
        rs.on('data', function (chunk) {
        console.log('DATA:')
        console.log(chunk);
    });
    rs.on('end', function () {
        console.log('END');
    });
    rs.on('error', function (err) {
        console.log('ERROR: ' + err);
    });
    // data事件可能会有多次，每次传递的chunk是流的一部分数据。
    // 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
    var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
    ws1.write('使用Stream写入文本数据...\n');
    ws1.write('END.');
    ws1.end();
    var ws2 = fs.createWriteStream('output2.txt');
    ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
    ws2.write(new Buffer('END.', 'utf-8'));
    ws2.end();
```
### 四、http创建服务
> request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
> response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

常用插件：
url ： url.parse('url') 解析为一个url对象
path： var workDir = path.resolve('.') /  path.join(workDir, 'pub', 'index.html');