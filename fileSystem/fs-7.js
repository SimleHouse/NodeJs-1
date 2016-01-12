/**
 * Created by talent on 2016/1/11.
 */
var FileData={
    name:'fileDemo',
    fileData:[
        {
            name:'imgs',
            type:'dir'
        },{
            name:'js',
            type:'dir'
        },{
            name:'css',
            type:'dir'
        },{
            name:'index.html',
            type:'file',
            content:'<html><head></head><body><h1>This is a test demo file</h1></body></html>'
        }
    ]
};
var fs=require('fs');
if(FileData.name){
    fs.mkdir(FileData.name,function(err){
        if(err){
            console.log('文件创建失败');
        }else{
            FileData.fileData.forEach(function(file){
                var path=FileData.name+'/'+file.name;
                var content=file.content||'';
                if(file.type==='dir'){
                    fs.mkdir(path);
                }else if(file.type==='file'){
                    fs.writeFile(path,content);
                }
            });
        }
    });
}

