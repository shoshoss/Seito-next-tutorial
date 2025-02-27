import React from "react";

export default function Table() {
	return (
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Task</th>
					<th>Comment</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2021-09-29</td>
					<td>John Doe</td>
					<td>Task 1</td>
					<td>Comment 1</td>
				</tr>
				<tr>
					<td>2021-09-30</td>
					<td>Jane Doe</td>
					<td>Task 2</td>
					<td>Comment 2</td>
				</tr>
			</tbody>
		</table>
	);
}
