import 'dotenv/config'
import express from 'express'
import cors from 'cors' 


const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})



