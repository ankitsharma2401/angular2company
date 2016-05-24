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
var core_1 = require('@angular/core');
var add_custom_message_component_1 = require('./add.custom.message.component');
var edit_view_custom_message_1 = require('./edit.view.custom.message');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>My First Angular 2 App</h1>\n  \n  <nav>\n  <a data-toggle=\"modal\" data-target=\"#myModal\">Add Custom Message</a>\n  <a data-toggle=\"modal\" data-target=\"#editViewModal\">Edit/View Custom Message</a>\n  </nav>\n  {{addMessage}}\n<add-message (childChanged)=\"addMessage=$event\"></add-message>\n<edit-view-message [passedValue]=\"addMessage\"></edit-view-message>\n\n  ",
            directives: [add_custom_message_component_1.AddCustomMessageComponent, router_deprecated_1.ROUTER_DIRECTIVES, edit_view_custom_message_1.EditViewCustomMessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map