"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.get = function (url, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('organizationId', JSON.stringify(id));
        params.set('customerId', '0');
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(url + 'customer', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.getCustomerByFilter = function (url, id, firstName, lastName, emailAddress, city) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('organizationId', JSON.stringify(id));
        params.set('firstName', firstName);
        params.set('lastName', lastName);
        params.set('emailAddress', emailAddress);
        params.set('city', city);
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(url + 'customer', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.getCustomerById = function (url, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('organizationId', '0');
        params.set('customerId', JSON.stringify(id));
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(url + 'customer', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.postCustomer = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url + 'customer', body, options)
            .catch(this.handleError);
    };
    CustomerService.prototype.putCustomer = function (url, id, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('customerId', JSON.stringify(id));
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.put(url + 'customer', body, options)
            .catch(this.handleError);
    };
    CustomerService.prototype.deleteCustomer = function (url, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('customerId', JSON.stringify(id));
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.delete(url + 'customer', options)
            .catch(this.handleError);
    };
    CustomerService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return Observable_1.Observable.throw(error);
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map