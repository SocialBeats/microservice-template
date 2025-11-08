import path from "path";
import { fileURLToPath } from "url";
import { getVersion } from "../utils/versionUtils.js";


export default function healthRoutes(app) {

    const version = getVersion();

    app.get("/api/v1/health", (req, res) => {
        res.status(200).json({
            status: "ok",
            message: "Health check successful",
            version,
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV,
        });
    });
}
