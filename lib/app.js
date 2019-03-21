"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var morgan = require("morgan");
var cors = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.routesProvider = new routes_1.Routes();
        this.app = express();
        this.config();
        this.routesProvider.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
    };
    return App;
}());
exports["default"] = new App().app;
