var http = require('http');
http.createServer(function (req, res) {
  res.writeHead('200', {'Content-Type': 'text/html'});
  //Đọc file index và trả về dữ liệu
  fs.readFile('index.html', 'utf8', function (err, data) {
      //nếu nỗi thì thông báo
      if (err) throw err;
      //không lỗi thì render data
      res.end(data);
  })
}).listen(8888);