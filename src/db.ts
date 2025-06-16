import { load } from "@tauri-apps/plugin-store";

const db = await load("db.json", { autoSave: true });
export default db;
