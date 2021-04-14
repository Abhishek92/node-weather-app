const request = require('request')

const forecast = ({latitude, longitude}, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=45f68da7226cd7d8b8eeea0e9eb5226e&query='+latitude+','+longitude
    console.log(url)
    request({url: url, json : true}, (error, response)=>{
        callback(response.body.current)
    })
}

module.exports = forecast