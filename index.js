const http = require("http");
const PORT = 5001;

const server = http.createServer((req, res) => {
  res.send("Server is runnig");
});

server.listen(PORT);
console.log(`Server is listening to port ${PORT}`);
