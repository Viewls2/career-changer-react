import express from "express";
const webServer = express();
const port = 3002;
const ipAddress = "127.0.0.1";

// code down below

webServer.get("/", (req, res) => {
    res.send("This is root route");
  });

webServer.get("/news", (req, res) => {
    const array = [];
    const news1 = {
        name: "news 1", 
        detail: "detail 1",
    };
    const news2 = {
        name: "news 2", 
        detail: "detail 2",
    };
    const news3 = {
        name: "news 3", 
        detail: "detail 3",
    };
    array.push(news1);
    array.push(news2);
    array.push(news3);
  res.json(array);
});

webServer.get("/user", (req, res) => {
    const result = [
            { userId: "mock-id-1" },
            { name: "mock-id-2" },
            { name: "mock-id-3" },
    ]
    
    res.json(result);
  });

webServer.get("/me", (req, res) => {
  res.json({
    name: "mock-name",
    role: "user",
    picture: "https://shorturl.at/qtFJM"
  });
});

webServer.get("/health-check", (req, res) => {
    res.send("Sever is fine");
  });

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});