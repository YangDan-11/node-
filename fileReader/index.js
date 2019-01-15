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
    let string = fs.readFileSync(tempFilePath, 'utf-8');//同步获取文件内容

    // fs.readFile(tempFilePath, function (err, data) {//异步获取文件内容
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(data.toString());
    //     }
    // });
    return string;

}
//创建文件夹写入文件
function writeFile(mdName, str) {
    fs.writeFile(docPath + '/' + mdName, str, 'utf8', function (error) {
        if (error) {
            console.log(error);
            return false
        }
        console.log('写入成功')
    })
}
function dealFile() {
    var fileList = readdirSync();
    //读取文件内容
    fileList.forEach(function (item, index) {
        var vueFilePath = componentPath + '/' + item;

        var codeString = readfile(vueFilePath);

        var mdName = item.replace(/\.vue$/, '.md');
        var str =
            "### 这是" + item + "的md文件\n\```html\n" +
            codeString + "\n\```\n";
        writeFile(mdName, str)
    })
}

dealFile();
