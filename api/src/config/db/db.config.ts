import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ATLAS_CONNECTION_STRING = process.env.DATABASE_ATLAS_URI ?? '';

mongoose.connect(ATLAS_CONNECTION_STRING);
mongoose.connection.on("connected", () => {
    console.log("Conectado a la base de datos MongoDB");
});
mongoose.connection.on("error", (err) => {
    console.error("Error de conexión a la base de datos MongoDB:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Desconectado de la base de datos MongoDB");
});

process.on("SIGINT", async () => {
    await mongoose.connection.close();
    process.exit(0);
});