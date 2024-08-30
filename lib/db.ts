import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { MongoClient, Collection } from "mongodb";

// Define the interfaces
interface UserDoc {
    _id: string;
}

interface SessionDoc {
    _id: string;
    expires_at: Date;
    user_id: string;
}

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();

const db = client.db();
export const User = db.collection("users") as Collection<UserDoc>;
export const Session = db.collection("sessions") as Collection<SessionDoc>;

const adapter = new MongodbAdapter(Session, User);