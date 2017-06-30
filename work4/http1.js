/**
 * Created by Administrator on 2017/6/29.
 */
var http=require('http')
var fs=require('fs')
http.createServer(function (req, res) {
    console.log(req.url)
    var url = req.url;
    switch (url){
        case '/index.html':
            fs.readFile("index.html","utf-8", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;
        case '/index.css':
            fs.readFile("index.css","utf-8", function (err,data) {
                        if(err){
                            console.log("读取失败"+err)
                        }else{
                            res.writeHead(200,{"content-type":"text/css"})
                            res.write(data)
                            res.end(" ")
                        }
                    })
            break;
        case'/index.js':
            fs.readFile("index.js","utf-8", function (err,data) {
                        if(err){
                            console.log("读取失败"+err)
                        }else{
                            res.writeHead(200,{"content-type":"text/javascript"})
                            res.write(data)
                            res.end(" ")
                        }
                    })
            break;
        case'/a.jpg':
            fs.readFile("a.jpg", function (err,data) {
                        if(err){
                            console.log("读取失败"+err)
                        }else{
                            res.writeHead(200,{"content-type":"image/jpeg"})
                            res.write(data)
                            res.end(" ")
                        }
                    })
            break;
        case '/index2.html':
            fs.readFile("index2.html","utf-8", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;
        case '/index3.html':
            fs.readFile("index3.html","utf-8", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;

    }


}).listen(2969)
