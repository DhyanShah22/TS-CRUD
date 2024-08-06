"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const logger_1 = __importDefault(require("./logger/logger"));
const studentRoutes_1 = require("./routes/studentRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect(config_1.config.mongoUri)
    .then(() => {
    logger_1.default.info('Connected to MongoDB');
    app.listen(config_1.config.port, () => {
        logger_1.default.info(`Server running on port ${config_1.config.port}`);
    });
})
    .catch(err => {
    logger_1.default.error('Failed to connect to MongoDB', err);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', studentRoutes_1.studentRoutes);
//# sourceMappingURL=server.js.map