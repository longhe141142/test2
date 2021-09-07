const http = require("http");
const info = require("./data");
const Controller = require("./controller");
const fsPromise = require("fs").promises;
const fs = require("fs");
const path = require("path");

const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath);
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
};
const writeFIle = () => {
  try {
    mkdirSync("files");
    const FIlePath = path.join("files");

    fs.writeFileSync(
      `${FIlePath}/files-test.txt`,
      "data to write",
      (err, data) => {
        if (err) {
          res.write("success");
        } else {
          res.write("success");
        }
      }
    );
  } catch (err){
      return false
  }finally{
      return true;
  }
  
};
const deleFIle = (path) => {
  try {
    fs.unlinkSync(path);
    //file removed
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};


const PORT = process.env.PORT || 8080;
function getFormatted(object, prefix) {
  var result = "";
  Object.entries(object).forEach(([k, v], i, { length }) => {
    result += prefix + (i + 1 === length ? "└─ " : "├─ ") + k;
    if (v && typeof v === "object") {
      result += "\n";
      result += getFormatted(v, prefix + (i + 1 === length ? "   " : "│  "));
    } else {
      if (v) result += ": " + v;
      result += "\n";
    }
  });
  return result;
}
const server = http.createServer(async (req, res) => {
  if (req.url === "/api/user" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let data2 = await new Controller().getAll(info);
    getFormatted(data2, "");
    // res.write(JSON.stringify(data2))
    res.write(getFormatted(data2, ""));
    res.end();
  } else if (req.url === "/api/files" && req.method === "POST") {
    console.log("++++++++++++++++");
    let response =  writeFIle() ? { status:"SUCCESS!" } : { status:"FAILED!" }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else if (req.url === "/api/files" && req.method === "DELETE") {
    const fileName = path.join("files", "files-test.txt");
    if (deleFIle(fileName)) {
      res.end(JSON.stringify({ status: "DELETE SUCCESS!" }));
    } else {
      res.end(JSON.stringify({ status: "DELETE FAILED!" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
