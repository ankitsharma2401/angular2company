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
var common_1 = require('@angular/common');
var EditViewCustomMessageComponent = (function () {
    function EditViewCustomMessageComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    EditViewCustomMessageComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            comment: ['', common_1.Validators.required]
        });
    };
    EditViewCustomMessageComponent = __decorate([
        core_1.Component({
            selector: 'edit-view-message',
            templateUrl: 'app/edit.view.custom.message.html',
            styleUrls: ['./css/add.css'],
            inputs: ['parentValue:passedValue']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], EditViewCustomMessageComponent);
    return EditViewCustomMessageComponent;
}());
exports.EditViewCustomMessageComponent = EditViewCustomMessageComponent;
//# sourceMappingURL=edit.view.custom.message.js.map