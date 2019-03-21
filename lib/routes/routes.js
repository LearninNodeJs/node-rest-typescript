"use strict";
exports.__esModule = true;
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: 'Get Working Successfully'
            });
        });
        app.route('contact')
            .get(function (req, res) {
            res.status(200).send({
                message: 'Contact Get is Successful'
            });
        });
        app.route('/add')
            .post(function (req, res) {
            res.status(200).send({
                message: 'Post Request Successful'
            });
        });
        app.route('/contact/:contactId')
            .get(function (req, res) {
            res.status(200).send({
                message: 'Get using Parameters successful'
            });
        });
        app.route('/update')
            .put(function (req, res) {
            res.status(200).send({
                message: 'Put Request Successful'
            });
        });
        app.route('/contact/:id')["delete"](function (req, res) {
            res.status(200).send({
                message: 'Delete request successful'
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
