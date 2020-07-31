
const path = require("path");
const fsTool = require("./fsapi.js");

let Util = {
    //是否是windows
    isWindows(){
        return process.platform.indexOf('win') == -1?false:true;
    },
    //获取系统配置路径
    getConfigPath(){
        let configPath = path.resolve(__dirname, "../data.json");
        let data = fsTool.file.readFile(configPath);
        let obj = eval("("+data+")");
        return obj.configPath;
    },
    //设置系统配置路径
    setConfigPath(pathData){
        let configPath = path.resolve(__dirname, "../data.json");
        let data = fsTool.file.readFile(configPath);
        let obj = eval("("+data+")");
        obj.configPath = pathData;
        fsTool.file.writeFile(configPath,JSON.stringify(obj));
    }
}

module.exports = Util;