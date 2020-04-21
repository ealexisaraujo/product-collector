const SourceLib = require('./SourceLib')
const countries = require('../utils/mocks/countriesMock.json')

class MercadoLibreLib extends SourceLib {
    _simplifyData (id, source, data, date) {
        const conditionsToReplace = { nuevo: 'new', usado: 'used', reacondicionado: 'refurbished' }
        const keyWord = data.query
        const country = countries[source].data.filter(item => item.id === data.site_id)[0].name

        const results = data.results.map(item => ({
            id,
            keyWord,
            country,
            countryState: item.address.state_name,
            currency: item.currency_id.toLowerCase(),
            condition: item.attributes.filter(item => item.id === 'ITEM_CONDITION')[0],
            model: item.attributes.filter(item => item.id === 'MODEL')[0],
            price: item.price,
            soldQuantity: item.sold_quantity,
            date,
            title: item.title.toLowerCase()
        }))

        return results.map(item => ({
            ...item,
            condition: item.condition ? this._normCondition(item.condition.value_name, conditionsToReplace) : '',
            model: item.model ? item.model.value_name.toLowerCase() : ''
        }))
    }
}

module.exports = MercadoLibreLib
