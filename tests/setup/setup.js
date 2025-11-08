import supertest from "supertest";
import app from "../../main.js";

process.env.NODE_ENV = "test";


const request = supertest(app);

export { request };