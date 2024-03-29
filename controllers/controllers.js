const siswa = require('../model/siswa');

const getAll = async (req, res) => {
    try {
    const data = await siswa.find();
    res.status(200).json(data);
} catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server error' });
}
}

const create = async (req, res) => {
    const data = new siswa({
      nama: req.body.nama,
      nisn: req.body.nisn,
      alamat: req.body.alamat
    });
    try {
      const save = await data.save();
      console.log(`Created new siswa: ${JSON.stringify(save)}`);
      res.status(201).json(save);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server error' });
    }
  };

  const getId = async (req, res) => {
    try {
    const data = await siswa.findById(req.params.id);
    res.status(200).json(data);
} catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server error' });
}
}

module.exports = {
    getAll,
    create,
    getId
}