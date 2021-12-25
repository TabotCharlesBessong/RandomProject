
const express  = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000;

const apiKey = '13e1d10108828ace5f1f7170af02bd3f'
const baseUrl = `http://api.scrapperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Welcome to Amazon Scrapper API.')
})

// fetchinh product details
app.get('/products/:productId',()=>{
  const {productId} = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
    res.json(response)
  } catch (error) {
    res.json(error)
  }
})

app.listen(PORT,()=> console.log(`server running on port ${PORT} `))