import { collection, getDocs } from "firebase/firestore";
import Table from "@/components/Table/Table";
import { useEffect } from "react";
import { db } from "@/lib/firebaseConfig";

export default function History() {
	const fetchData = async () => {
		const querySnapshot = await getDocs(collection(db, "reports"));
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data().comment}`);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Table />
		</>
	);
}
