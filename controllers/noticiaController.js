const axios = require('axios');
const cheerio = require('cheerio');
const Noticia = require('../models/noticiaModel');

const obtenerNoticias = async (req, res) => {
  try {
    const { data } = await axios.get('https://elpais.com');
    const $ = cheerio.load(data);
    const noticias = [];

    $('h2.c_t').each((i, el) => {
      const titulo = $(el).text().trim();
      const link = $(el).find('a').attr('href');
      if (titulo && link) {
        const noticia = new Noticia(
          titulo,
          link.startsWith('http') ? link : `https://elpais.com${link}`
        );
        noticias.push(noticia);
      }
    });

    res.render('index', { noticias });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las noticias');
  }
};

module.exports = { obtenerNoticias };
