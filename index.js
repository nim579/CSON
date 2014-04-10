var fs = require('fs')
  , cs = require('coffee-script')
  , js = require('js2coffee');

var CSON = {
    VERSION: "0.0.1",
    readFile: function(path){
        if(fs.existsSync(path)){
            try{
                return cs.eval(fs.readFileSync(path));
            } catch(e){
                console.error(e);
                return null;
            }
        }
    },
    parse: function(string){
        if(typeof string === "string"){
            try{
                return cs.eval(string);
            } catch(e){
                console.error(e);
                return null;
            }
        }
    },
    stringify: function(object, space){
        if(object === Object(object)){
            if(toString.call(space) !== "[object Number]"){
                space = 4
            }
            indent = "";
            for(var i = 0; i < space; i++){
                indent += " ";
            }
            return js.build("("+JSON.stringify(object)+")", {show_src_lineno: false, indent: "  "});
        }
    }
}

module.exports = CSON