const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nama: {
        requied: true,
        type: String
    },
    nisn: {
        requied: true,
        type: Number
    },
    alamat: {
        requied: true,
        type: String
    },
})

module.exports = mongoose.model('siswa', dataSchema) 