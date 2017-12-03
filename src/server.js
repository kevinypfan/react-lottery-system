import express from 'express'
import renderer from './helpers/renderer'

const app = express()
app.use(express.static('dist'))
app.get('*', (req, res) => {

  res.send(renderer())
})

app.listen(3000, () => {
  console.log('start my app port 3000')
})