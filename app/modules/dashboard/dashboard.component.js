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
var dashboard_service_1 = require("./dashboard.service");
var router_1 = require("@angular/router");
var environment_1 = require("../../environments/environment");
var apiUrl = environment_1.environment.apiUrl;
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, router) {
        this.dashboardService = dashboardService;
        this.router = router;
        this.organizationName = "Personal";
        if (sessionStorage.getItem("organizationId") == null) {
            this.router.navigate(['']);
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.LoadUser();
    };
    DashboardComponent.prototype.LoadUser = function () {
        var _this = this;
        this.dashboardService.get(apiUrl, Number(sessionStorage.getItem("organizationId"))).subscribe(function (data) {
            var obj = data["results"][0];
            _this.organizationName = obj["companyName"];
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-component',
        moduleId: module.id,
        templateUrl: 'dashboard.html'
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService, router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map