import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
	try {
		if (connection.isConnected) return;
		const db = await mongoose.connect(process.env.MONGODB_URI);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		throw new Error(error);
	}
};

//second option
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
/* import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise; */

//third option
/* import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongooseClientPromise) {
    clientPromise = mongoose.connect(uri, options).then((mongoose) => {
      console.log('Connected to MongoDB');
      return mongoose;
    });
    global._mongooseClientPromise = clientPromise;
  }
  clientPromise = global._mongooseClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = mongoose.connect(uri, options).then((mongoose) => {
    console.log('Connected to MongoDB');
    return mongoose;
  });
}

// Export a module-scoped Mongoose client promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise; */
