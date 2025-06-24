import dotenv from 'dotenv'
import secound from './app.js'
import app from './app.js'


dotenv.config()
// console.log(process.env.PORT)


// console.log(app)

const PORT = process.env.PORT || 8000



app.listen(PORT, ()=> {
  console.log(`Server is running at ${PORT}`)
})
