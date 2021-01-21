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
var Textarea = react_1.forwardRef(function (_a, ref) {
    var name = _a.name, className = _a.className, _b = _a.rows, rows = _b === void 0 ? 2 : _b, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange;
    className = className || "";
    return (react_1.default.createElement("textarea", { name: name, rows: rows, className: "textarea " + className, placeholder: placeholder, defaultValue: defaultValue, disabled: isDisabled, onChange: function (event) { return onChange && onChange(event.target.value, event); }, ref: ref }));
});
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map