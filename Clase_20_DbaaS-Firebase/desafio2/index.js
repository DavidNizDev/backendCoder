
var admin = require("firebase-admin");

var serviceAccount = require("./db/secret_key.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

(async () => {
	try {
		const db = await admin.firestore();
		const query = db.collection('colores');
		// let id = 1;
		// let doc = await query.doc(`${id}`);
		// const response = await doc.create({ color: 'Red' });
		// id++;
		// doc = await query.doc(`${id}`);
		// await doc.create({ color: 'Blue' });
		// id++;
		// doc = await query.doc(`${id}`);
		// await doc.create({ color: 'Green' });
		// const querySnapshots = await query.get();
		// let docs = querySnapshots.docs;
		// let response = docs.map(doc => { return { id: doc.id, ...doc.data() } });
		// console.log(response);
		let id = 2;
		const doc = query.doc(`${id}`);
		let color = await doc.update({ color: 'navy' });
		console.log(color);
	} catch (e) {
		console.log(e);
	}
})();