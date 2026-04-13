const express = require('express');
const app = express();

// biar semua file di folder bisa diakses
app.use(express.static(__dirname));

// jalan di port 8080
app.listen(8080, () => {
  console.log('Server jalan di http://localhost:8080');
});