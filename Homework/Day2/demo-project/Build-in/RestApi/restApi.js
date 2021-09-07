const http = require("http");
const info = require("./data") 
const Controller = require("./controller")

const PORT = process.env.PORT || 8080;
function getFormatted(object, prefix) {
    var result = '';
    Object.entries(object).forEach(([k, v], i, { length }) => {
        result += prefix + (i + 1 === length ? '└─ ' : '├─ ') + k;
        if (v && typeof v === 'object') {
            result += '\n';
            result += getFormatted(v, prefix + (i + 1 === length ? '   ': '│  '));
        } else {
            if (v) result += ': ' + v;
            result += '\n';
        }
    });
    return result;
}
const server = http.createServer(async (req, res) => {
    if (req.url === "/api/user" && req.method === "GET") {
        
        res.writeHead(200, { "Content-Type": "application/json" });
        let data2 = await new Controller().getAll(info);
        getFormatted(data2,'')
        // res.write(JSON.stringify(data2))
        res.write(getFormatted(data2,''))
        res.end();
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});