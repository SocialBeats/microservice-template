import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


export default function healthRoutes(app) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // try to read the version from the .version file
    let version = "unknown";
    try {
        const versionPath = path.resolve(__dirname, "..", "..", ".version");
        if (fs.existsSync(versionPath)) {
            version = fs.readFileSync(versionPath, "utf8").trim();
            if (version === "") {
                version = "unknown";
            }
        }
    } catch (err) {
        // if it fails, we leave it as "unknown"
    }


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