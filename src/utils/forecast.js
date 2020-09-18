const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=f5f80103d83f2e5176cf06f965c78cf3&query=' + latitude + ',' + longitude + '&units=f'

    const url = 'http://api.weatherstack.com/current?access_key=f5f80103d83f2e5176cf06f965c78cf3&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback( undefined,
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees. There is a ' + body.current.precip + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast