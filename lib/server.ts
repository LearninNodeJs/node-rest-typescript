import app from './app'

const PORT = 3000 || process.env.PORT
import * as http from "http"

const server = http.createServer(app)

let createServer = async ()=>{
    try{
        await server.listen(PORT)
        console.log(`Listening on Port ${PORT}`)
    }catch (e) {
        console.error("Error Loading Server",e.message)
    }
};

createServer();

export default server;