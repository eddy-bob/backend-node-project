const mongose = require('mongoose')
const connectDB = async () => {
    const conn = await mongose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    console.log(`mongoDB connected ${conn.conection.host}`)
}
module.exports=connectDB