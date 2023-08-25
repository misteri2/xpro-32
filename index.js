const express = require("express");
const port = 4000

let apialienvault = "d14c66dd4ebbb00ddf5130f07af1edd00b9e26bc3c7b635fffffc1e489acffcc";
const app = express;

app.post('/',(request, response) => {
    response.send("Server Berhasil Terhubung Dengan Baik dan Aman.");
});

app.listen(4000,()=>{
    console.log("Server Running Done 4000", port);
});

app.put('/home',(request, response) => {
    request.send(apialienvault);
});