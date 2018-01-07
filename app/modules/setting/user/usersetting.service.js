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
var UserSettingService = (function () {
    function UserSettingService(http) {
        this.http = http;
    }
    UserSettingService.prototype.get = function (url, id) {
        console.log(id);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('organizationId', JSON.stringify(id));
        params.set('userId', '0');
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(url + 'usersetting', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserSettingService.prototype.getUserById = function (url, userId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('organizationId', '0');
        params.set('userId', JSON.stringify(userId));
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(url + 'usersetting', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserSettingService.prototype.post = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url + 'usersetting', body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserSettingService.prototype.put = function (url, userId, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('userId', JSON.stringify(userId));
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.put(url + 'usersetting', body, options)
            .catch(this.handleError);
    };
    UserSettingService.prototype.delete = function (url, userId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var params = new http_1.URLSearchParams();
        params.set('userId', JSON.stringify(userId));
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.delete(url + 'usersetting', options)
            .catch(this.handleError);
    };
    UserSettingService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return Observable_1.Observable.throw(error);
    };
    return UserSettingService;
}());
UserSettingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserSettingService);
exports.UserSettingService = UserSettingService;
//# sourceMappingURL=usersetting.service.js.map