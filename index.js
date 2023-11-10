const express = require("express");

const app = express();

app.get("/",(req,res)=>{
	console.log("Hello there from Docker");
	res.send({
		message: "Hello from Docker"
	})
});

app.listen(3000,()=>{
	console.log("Server started")
});
