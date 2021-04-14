const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

app.set('view engine', 'hbs')

app.get('', (req, res)=>{
    res.render('index', {
        title: 'WeatherApp',
        name: 'Abhishek'
    })
})

app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error: "Address not provided"
        })
    }
    geocode(req.query.address, (data)=>{
        
     forecast(data, (forecastData)=>{
         res.send(forecastData)
     })
    })
})

app.listen(3000, ()=>{
    console.log('Starting server')
})