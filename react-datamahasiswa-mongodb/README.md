<h1 align="center">Hi 👋, I'm Frans Bachtiar</h1>
<h3 align="center">The most important thing is not what we know but what things we are willing to learn</h3>

<h5>Enpoint dari rest api https://fransbchtr-api.vercel.app</h5>
## API Reference

| Method | Endpoint     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `POST`      | `https://fransbchtr-api.vercel.app/auth/v1/register` | **Required**. sebelum untuk login harus register agar bisa login |
| `POST`      | `https://fransbchtr-api.vercel.app/auth/v1/login` | **Required**. sebelum untuk masuk halaman utama harus login agar bisa mengakses data mahasiswa |
| `GET`      | `https://fransbchtr-api.vercel.app/mahasiswa` | **Required**. Untuk Mengakses semua data mahasiswa |
| `GET`      | `https://fransbchtr-api.vercel.app/mahasiswa/{mahasiswaId}` | **Required**. Untuk Mengakses data mahasiswa sesuai keinginan kita/berdasarkan id  |
| `PUT`      | `https://fransbchtr-api.vercel.app/mahasiswa/{mahasiswaId}` | **Required**. Ambil Id mahasiswa terlebih dahulu untuk mengubah datanya  |
| `Delete`      | `https://fransbchtr-api.vercel.app/mahasiswa/{mahasiswaId}` | **Required**. Menghapus Data Mahasiswa Sesuai Keinginan Kita  |


<h5>****note untuk menjalankan program ini</h5>
<h5>npm install</h5>
<h5>buat .env</h5>
## API Reference

| Nama Url{.env} | Endpoint     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `REACT_APP_MHS_API`      | `https://fransbchtr-api.vercel.app` | **Required**. Simpan REST API DI ENV agar rest api kita tidak public ke users karena rest api cukup programmer dan dev saja yang boleh menggunakannya |

<h5>selesai setup tersebut, lalu jalankan printah npm run frans-go</h5>

