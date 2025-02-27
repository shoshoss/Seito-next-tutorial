import { collection, getDocs } from "firebase/firestore";
import Table from "@/components/Table/Table";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";

export default function History() {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const querySnapshot = await getDocs(collection(db, "reports"));
		const historyData = [];
		querySnapshot.forEach((doc) => {
			// console.log(`${doc.id} => ${doc.data().comment}`);
			const date = doc
				.data()
				.date.toDate()
				.toISOString()
				.replace("T", " ")
				.slice(0, -8);
			historyData.push({
				id: doc.id,
				date: date,
				name: doc.data().name,
				task: doc.data().task,
				comment: doc.data().comment,
			});
		});
		setData(historyData);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Table data={data} />
		</>
	);
}
