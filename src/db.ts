import lodash from "lodash";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { Customer } from "./types";

type Data = {
  customers: Customer[];
};

// Extend Low class with a new `chain` field
class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this["data"]> = lodash.chain(this).get("data");
}

const defaultData: Data = {
  customers: [],
};

const adapter = new JSONFile<Data>(`db.json`);

const db = new LowWithLodash(adapter, defaultData);
await db.read();

export default db;
