const axios = require('axios');
const { config } = require('../config/index');


const obtenerAuth = async () => {
  console.log(`Conectando a: ${config.normalizacionApi}/normalization/auth/token`);
  try{
    const response = await axios({
      url: `${config.normalizacionApi}/normalization/auth/token`,
      method: 'post',
      data: {
        "authKey": config.authKey,
      },
    });
     return response.data.response;
  }catch(error){
    console.log(error);
  }

}

const sendProducts = async (data, token) => {
  //console.log(`${config.normalizacionApi}/normalization/data-manager/normalize`);
  let source = "string"
    try{
      //generamos Header
      let headers = {
        Authorization: token,
      };
      const response = await axios({
        headers,
        url: `${config.normalizacionApi}/normalization/data-manager/normalize`,
        method: 'post',
        data: {
          source: source,
          data,
        },
      });
      return response;
    }catch(error){
      console.log(error);
    }
}

const sendData = async (data) => {
  const result = await obtenerAuth();
  console.log(`se ha generado la llave de autenticación `);
  console.log('enviando datos a normalizacion ...');
  const product = await sendProducts(data, result);
  console.log(`el estatus de la peticion fue: ${product.status} ${product.statusText}`)
}

sendData(data = { results: [{"prueba": "prueba"}]});
//module.exports = sendData;
