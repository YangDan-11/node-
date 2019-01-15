const path = require('path')
const fs = require("fs");
const docPath = path.join(__dirname, '../src/docs');
const componentPath = path.join(__dirname, '../src/entry/index/components');

//获取components下所有文件夹名，并筛选出.vue后缀的文件
function readdirSync() {
    var data = fs.readdirSync(componentPath);
    var fileList = []
    data.forEach(function (item, index) {
        var str = /\.vue$/;
        var reg = new RegExp(str);
        if (reg.test(item)) {
            fileList.push(item)
        }
    })
    return fileList;
};
//读取文件内容
function readfile(tempFilePath) {
    try{
        let string = fs.readFileSync(tempFilePath, 'utf-8');//同步获取文件内容
        return string;
    }catch(e){
        throw(e);
    }
    
    // fs.readFile(tempFilePath, function (err, data) {//异步获取文件内容
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(data.toString());
    //     }
    // });
    

}
//异步创建文件夹写入文件
function writeFile(mdName, str) {
    fs.writeFile(docPath + '/' + mdName, str, 'utf8', function (error) {
        if (error) {
            console.log(error);
            return false
        }
        console.log('写入成功')
    })
}

var template = "### 这是{{{item}}}的md文件\n\```html\n"+
"{{{codeString}}} \n\```\n";

function dealFile() {
    var fileList = readdirSync();
    //读取文件内容
    fileList.forEach(function (item, index) {
        var vueFilePath = componentPath + '/' + item;
        var codeString = readfile(vueFilePath);
        var mdName = item.replace(/\.vue$/, '.md');
        template = template.replace('{{{item}}}',item);
        var str = template.replace('{{{codeString}}}',codeString);
        writeFile(mdName, str)
    })
}

dealFile();
