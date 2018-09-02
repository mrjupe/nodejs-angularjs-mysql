const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mahasiswa'
});

mysqlConnection.connect((err) =>{
  if(!err){
    console.log('Database connected');
  }
  else {
    console.log('Database not connect');
  }
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Running on PORT ${port}`));

app.get('/api/mahasiswa', (req, res)=>{
  mysqlConnection.query('SELECT * FROM tb_mahasiswa', (err, mahasiswa)=>{
    if(!err)
      res.send(mahasiswa);
    else
      res.send('Data mahasiswa tidak terload');

  });
});

app.get('/api/mahasiswa/detail/:npm', (req, res)=>{
  mysqlConnection.query('SELECT * FROM tb_mahasiswa WHERE npm = ?', [req.params.npm], (err, mahasiswa)=>{
    if(!err)
      res.send(mahasiswa);
    else
      res.send('Data mahasiswa tidak ditemukan');

  });
});

app.post('/api/mahasiswa/add', (req, res)=>{
  const post = {
    npm: req.body.npm,
    nama: req.body.nama,
    alamat: req.body.alamat,
    semester: req.body.semester
  }
  mysqlConnection.query('INSERT INTO tb_mahasiswa set ?', post, (err, mahasiswa)=>{
    if(!err)
      res.send('Data berhasil ditambahkan');
    else
      res.send('Data gagal ditambahkan');

  });
});

app.put('/api/mahasiswa/edit/:npm', (req, res)=>{
  mysqlConnection.query('UPDATE tb_mahasiswa SET nama = ?, alamat = ?, semester = ? WHERE npm = ?', [req.body.nama, req.body.alamat, req.body.semester, req.params.npm], (err, mahasiswa)=>{
    if(!err)
      res.send('Data berhasil diupdate');
    else
      res.send('Data gagal diupdate');

  });
});

app.delete('/api/mahasiswa/:npm', (req, res)=>{
  mysqlConnection.query('DELETE FROM tb_mahasiswa WHERE npm = ?', [req.params.npm], (err, mahasiswa)=>{
    if(!err)
      res.send('Data berhasil dihapus');
    else
      res.send('Data gagal dihapus');
    
  });
});
