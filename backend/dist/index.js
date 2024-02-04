"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connection_js_1 = require("./db/connection.js");
// connections and listeners
const PORT = process.env.PORT || 5001;
(0, connection_js_1.connectToDatabase)()
    .then(() => {
    app_1.default.listen(PORT, () => console.log(`Server is running on port ${PORT} & connected to Database`));
})
    .catch((error) => {
    console.error(error);
    // Optionally, you might want to handle the error more robustly here
    // For example, you could exit the process if the database connection is critical
});
//# sourceMappingURL=index.js.map