"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const weatherRoutes_js_1 = tslib_1.__importDefault(require("./routes/weatherRoutes.js"));
// We will create an express app
const app = (0, express_1.default)();
// The port that the express server will listen on
const PORT = 3000;
app.use(express_1.default.json());
//our new route
app.use('/api/weather', weatherRoutes_js_1.default);
// Start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map