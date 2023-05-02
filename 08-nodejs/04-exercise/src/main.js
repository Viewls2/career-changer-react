import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3004;

// code here.
const company = [{ 
  companyId: "comp-01", 
  name: "Mock Company 01",
  taxId: "tax-000",
  employees: []
}];

webServer.get("/", (req,res)=> {
    res.send("Hello world")
});

webServer.get("/company",(req,res)=> {
  res.json(application);
});

webServer.post("/company",(req,res)=>{
  const name = req.body.anme;
  const taxId = ``
  const userId = `mock-id-${users.length}`;
  users.push({ name, age, userId });
  webServer.post();
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
