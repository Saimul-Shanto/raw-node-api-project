/*
 *Title: Uptime Monitoring Application
 *Description: A RESTFul API to monitor up or down time of user defined links
 *Author: Md Saimul Haque Shanto
 * Date: 11/10/2024
 * 
 */

//dependencies
const http=require("http");

// app object - module scaffolding
const app={};

//configuration
app.config={
    port:3000,
};

// create server
app.createServer=()=>{
    const server =http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}`);
    });

};

//handle request response
app.handleReqRes=(req,res)=>{
    //response handle
    res.end("hello nigga");
}

// start the server
app.createServer();