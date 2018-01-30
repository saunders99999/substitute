webpackJsonp([2],{

/***/ "../../../../../substitute/src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../substitute/src async recursive";

/***/ }),

/***/ "../../../../../substitute/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../substitute/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\n    <div class='panel-heading'>\n        {{title}}\n    </div>\n    <div class='panel-body'>\n        <div class='row'>\n            <div class='col-md-2'>\n                <h3><button class='btn btn-primary'\n                      (click)='increaseOnField()'>\n                      Add Field\n                    </button></h3>\n            </div>\n            <div class='col-md-2'>\n                <h3><button class='btn btn-primary'\n                        (click)='resetField()'>\n                        Reset Field\n                    </button></h3>\n            </div>\n        </div>\n        <div class='table-responsive'>\n            <table class='table'>\n                <thead>\n                    <tr>\n                        <th class=\"col-md-1\">SubCount</th>\n                        <th class=\"col-md-1\">+</th>\n                        <th class=\"col-md-1\">-</th>\n                        <th class=\"col-md-2\">Player</th>\n                        <th class=\"col-md-1\">+</th>\n                        <th class=\"col-md-1\">-</th>\n                        <th class=\"col-md-5\">OnField</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let player of players'>\n                      <th>{{player.subCount}}</th>  \n                      <th>\n                        <button class='btn btn-primary'\n                        [name]='player.id' \n                        (click)='addSub($event)'>\n                          '+'\n                        </button>\n                      </th>\n                      <th>\n                          <button class='btn btn-primary'\n                          [name]='player.id'\n                          (click)='removeSub($event)'>\n                          '-'\n                          </button>\n                      </th>\n                      <th>{{player.name}}</th>\n                      <th>\n                          <button class='btn btn-primary'\n                          [name]='player.id'\n                          (click)='addField($event)'>\n                            '+'\n                          </button>\n                        </th>\n                        <th>\n                            <button class='btn btn-primary'\n                            [name]='player.id'\n                            (click)='removeField($event)'>\n                            '-'\n                            </button>\n                        </th>\n  \n                      <th>{{player.onField}}</th>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../substitute/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'subs';
        this.players = [
            { id: 1, name: 'Alvin', subCount: 0, onField: 1 },
            { id: 2, name: 'Brady', subCount: 0, onField: 1 },
            { id: 3, name: 'Jack W', subCount: 0, onField: 1 },
            { id: 4, name: 'Jackson', subCount: 0, onField: 1 },
            { id: 5, name: 'Jahari', subCount: 0, onField: 1 },
            { id: 6, name: 'Kaelan', subCount: 0, onField: 1 },
            { id: 7, name: 'Nate', subCount: 0, onField: 1 },
            { id: 8, name: 'Ruby', subCount: 0, onField: 1 },
            { id: 9, name: 'Tyson', subCount: 0, onField: 1 },
            { id: 10, name: 'Zack', subCount: 0, onField: 1 }
        ];
    }
    AppComponent.prototype.updateProperty = function (id, prop, inc) {
        this.players.forEach(function (player) {
            if (player.id == id) {
                (inc) ? player[prop]++ : player[prop]--;
            }
        });
    };
    AppComponent.prototype.addSub = function (event) {
        this.updateProperty(event.target.name, 'subCount', true);
    };
    AppComponent.prototype.removeSub = function (event) {
        this.updateProperty(event.target.name, 'subCount', false);
    };
    AppComponent.prototype.addField = function (event) {
        this.updateProperty(event.target.name, 'onField', true);
    };
    AppComponent.prototype.removeField = function (event) {
        this.updateProperty(event.target.name, 'onField', false);
    };
    AppComponent.prototype.increaseOnField = function () {
        this.players.forEach(function (player) {
            player.onField++;
        });
    };
    AppComponent.prototype.resetField = function () {
        this.players.forEach(function (player) {
            player.onField = 0;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'subs-root',
        template: __webpack_require__("../../../../../substitute/src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../substitute/src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../substitute/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../substitute/src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../substitute/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../substitute/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../substitute/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../substitute/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../substitute/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map