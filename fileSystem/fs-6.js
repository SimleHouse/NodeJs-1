/**
 * Created by talent on 2016/1/11.
 */
var fs=require('fs');
fs.readdir('../fileSystem',function(err,files){
    files.forEach(function(f){
        console.log(arguments);
        fs.stat(f,function(err,info){
            switch (info.mode) {
                case 16822:
                    console.log( '[文件夹] ' + f );
                    break;

                case 33206:
                    console.log( '[文件] ' + f );
                    break;

                default :
                    console.log( '[其他类型] ' + f );
                    break;
            }
        });
        //fs.stat(f);
    });
});