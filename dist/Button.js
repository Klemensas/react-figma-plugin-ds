"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children, className = _a.className, isSecondary = _a.isSecondary, isTertiary = _a.isTertiary, isDisabled = _a.isDisabled, onClick = _a.onClick, isDestructive = _a.isDestructive;
    className = className || "";
    var level = isTertiary ? "tertiary" : isSecondary ? "secondary" : "primary";
    var modificator = isDestructive ? "-destructive" : "";
    if (isSecondary && isTertiary) {
        console.warn("Use only one level modificator \"isSecondary\" or \"isTertiary\"");
    }
    return (react_1.default.createElement("button", { onClick: onClick, className: "button button--" + level + modificator + " " + className, disabled: isDisabled }, children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map