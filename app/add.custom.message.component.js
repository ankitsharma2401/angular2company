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
var core_2 = require('@angular/core');
var AddCustomMessageComponent = (function () {
    function AddCustomMessageComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.flag = false;
        this.addFlag = new core_1.EventEmitter();
        this.childChanged = new core_1.EventEmitter();
    }
    AddCustomMessageComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            comment: ['', common_1.Validators.required]
        });
    };
    AddCustomMessageComponent.prototype.closeClicked = function () {
        this.clearText = null;
    };
    AddCustomMessageComponent.prototype.addClicked = function (event) {
        this.flag = true;
        this.addFlag.emit(this.flag);
    };
    AddCustomMessageComponent.prototype.onChange = function (value) {
        this.childChanged.emit(value);
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], AddCustomMessageComponent.prototype, "addFlag", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], AddCustomMessageComponent.prototype, "childChanged", void 0);
    AddCustomMessageComponent = __decorate([
        core_1.Component({
            selector: 'add-message',
            templateUrl: 'app/add.custom.message.html',
            styleUrls: ['./css/add.css']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], AddCustomMessageComponent);
    return AddCustomMessageComponent;
}());
exports.AddCustomMessageComponent = AddCustomMessageComponent;
//# sourceMappingURL=add.custom.message.component.js.map