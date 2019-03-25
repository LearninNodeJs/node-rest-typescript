import * as express from "express"
import * as bodyParser from "body-parser"
import {Routes} from "./routes/routes"
import * as morgan from "morgan"
import * as cors from "cors"
import *  as mongoose from "mongoose"

require('dotenv').config()

class App {
    public app: express.Application;
    public routesProvider: Routes = new Routes()
    public mongoDatabaseURL: string = process.env.MONGO_DB

    constructor() {
        this.app = express()
        this.config()
        this.routesProvider.routes(this.app)
        this.connectMongo()

    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(morgan('dev'))
        this.app.use(cors())
    }

    private async connectMongo():mongoose.connect {
        let connection;
        try {
            connection = await mongoose.connect(this.mongoDatabaseURL,{useNewUrlParser:true})
            console.log("Mongo Connected Successfully")
        } catch (e) {
            console.error("Failed to Load Mongoose: ",e.message)
        }
        return connection;
    }
}

export default new App().app