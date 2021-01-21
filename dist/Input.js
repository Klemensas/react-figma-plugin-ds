"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var _1 = require("./");
var InputComponent = react_1.forwardRef(function (_a, ref) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? "" : _b, type = _a.type, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange;
    return (react_1.default.createElement("input", { name: name, type: type, className: className, placeholder: placeholder, defaultValue: defaultValue, disabled: isDisabled, onChange: function (event) { return onChange && onChange(event.target.value, event); }, ref: ref }));
});
var Input = react_1.forwardRef(function (_a, ref) {
    var name = _a.name, className = _a.className, type = _a.type, icon = _a.icon, _b = _a.iconColor, iconColor = _b === void 0 ? "black3" : _b, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange;
    className = className || "";
    type = type || "text";
    var inputClass = "input__field";
    if (icon) {
        return (react_1.default.createElement("div", { className: "input input--with-icon" },
            react_1.default.createElement(_1.Icon, { name: icon, color: iconColor, isDisabled: isDisabled }),
            react_1.default.createElement(InputComponent, { name: name, className: inputClass + " " + className, type: type, defaultValue: defaultValue, placeholder: placeholder, isDisabled: isDisabled, onChange: onChange, ref: ref })));
    }
    else {
        return (react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement(InputComponent, { name: name, className: inputClass + " " + className, type: type, defaultValue: defaultValue, placeholder: placeholder, isDisabled: isDisabled, onChange: onChange, ref: ref })));
    }
});
exports.default = Input;
//# sourceMappingURL=Input.js.map