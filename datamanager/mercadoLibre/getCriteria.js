const ProductsService = require('./services/productsService');
async function insertLinks() {
    const productsService = new ProductsService();
    try{
        const data = await productsService.insertLinksFromCriteria();
        if(data){
              console.log('Links saved');
            }
          else {
           console.error('error getting products')
            }
          }
    catch(error){
        console.error(`Se ha encontrado un error: ${error} `);
    }
    console.log('Se ha terminado la tarea de cargar los Links ... ');
} 
insertLinks();