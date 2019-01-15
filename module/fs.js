const fs = require('fs');
// 读文件
function read(path = '', options = 'utf-8'){
    fs.readFile(path,options,(err, data) => {
        if(err){
            console.log(111);
            return err;
        }else{
            console.log(data);
            return data
        }
    })
}
function readSync(path = '', options = 'utf-8'){
    try{
        return fs.readFileSync(path, options);
    }catch(err){
        return err;
    }
}
// 写文件
function write(path = '', data = ''){
    fs.writeFile(path, data,(err) => {
        if(err){
            console.log(err);
        }else{
            console.log('ok');
        }
    })
}
function writeSync(path = '', data = ''){
    fs.writeFileSync(path, data);
}
// 获取文件信息
function state(path){
    fs.stat(path, (err, stat) => {
        if(err){
            console.log(err);
        }else{
            // 是否是文件:
            console.log('isFile: ' + stat.isFile());
            // 是否是目录:
            console.log('isDirectory: ' + stat.isDirectory());
            if (stat.isFile()) {
                // 文件大小:
                console.log('size: ' + stat.size);
                // 创建时间, Date对象:
                console.log('birth time: ' + stat.birthtime);
                // 修改时间, Date对象:
                console.log('modified time: ' + stat.mtime);
            }
        }
    })
}
function stateSync(path){
    return fs.statSync(path);
}
// 文件后边插入数据
function append(path, data){
    fs.appendFile(path, data, (err) => {
        if(err){
            console.log(err);
        }
    })
}
function appendSync(path, data){
    fs.appendFileSync(path, data);
}
// 删除文件
function remove(path){
    fs.unlink(path, (err) => {
        if(err){
            console.log(err);
        }
    })
}
function removeSync(path){
    fs.unlinkSync(path);
}
// 创建文件夹
function mkdir(name){
    fs.mkdir(name, (err) => {
        if(err){
            console.log(err);
        }
    })
}
function mkdirSync(name){
    fs.makdirSync(name);
}
// 修改文件名、文件夹名
function rename(oldPath,newPath){
    fs.rename(oldPath,newPath,(err) => {
        if(err){
            console.log(err);
        }
    })
}
function renameSync(oldPath,newPath){
    fs.renameSync(oldPath,newPath);
}
module.exports = {
    read,readSync,write,writeSync,state,stateSync,append,appendSync,remove,removeSync,mkdir,mkdirSync,rename,renameSync
}

