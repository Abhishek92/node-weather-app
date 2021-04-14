const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYWJoaXNoZWtrb3RpeWFsIiwiYSI6ImNrbmVyZmFkczBibnkycXBldHhkOHQ5MHMifQ.E3stBvbEA43-oqfS2JJ5vw'
    request({url: url, json : true}, (error, response)=>{
        const data = {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1]
        }
        callback(data)
    })
}

module.exports = geocode