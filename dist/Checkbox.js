"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Checkbox = react_1.forwardRef(function (_a, ref) {
    var id = _a.id, className = _a.className, type = _a.type, isDisabled = _a.isDisabled, label = _a.label, name = _a.name, defaultValue = _a.defaultValue, onChange = _a.onChange;
    className = className || "";
    type = type || "checkbox";
    var inputConfig = {
        name: name,
        id: id || type + "--" + (Math.random() * 100000000).toFixed(0),
        ref: ref,
    };
    switch (type) {
        case "switch":
            inputConfig = __assign(__assign({}, inputConfig), { className: "switch__toggle", type: "checkbox" });
            break;
        case "radio":
            inputConfig = __assign(__assign({}, inputConfig), { className: "radio__button", type: "radio" });
            break;
        default:
            inputConfig = __assign(__assign({}, inputConfig), { className: "checkbox__box", type: "checkbox" });
            break;
    }
    var labelClass = type + "__label";
    return (react_1.default.createElement("div", { className: type + " " + className },
        react_1.default.createElement("input", __assign({}, inputConfig, { defaultChecked: defaultValue, onChange: function (event) {
                return onChange && onChange(event.target.checked, event);
            }, disabled: isDisabled })),
        react_1.default.createElement("label", { className: labelClass, htmlFor: inputConfig.id }, label)));
});
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map