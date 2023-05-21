import React, { useEffect, useCallback, useState, useRef } from "react";
const BaseUrl = `${process.env.HARPERDB_CUSTOM_FUNCTIONS_URL}`;

const requests = () => {
	const [notes, setNotes] = useState<string[]>([]);

	const get = async () => {
		const requestOptions = {
			headers: {
				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
			},
		};
		const url = BaseUrl + "/notes/";
		await fetch(url, requestOptions)
			.then((response) => response.json())
			.then((data) => setNotes(data.data))
			.catch((err) => console.log(err));
		return notes;
	};

	const post = async (note: string) => {
		const requestOptions = {
			method: "POST",
			headers: {
				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
			},
			note: note,
		};
		const url = BaseUrl + "/note/";

		await fetch(url, requestOptions)
			.then((response) => response.json())
			.catch((err) => console.log(err));
	};

  const put = async (note: string) => {
    const requestOptions = {
			method: "PUT",
			headers: {
				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
			},
			note: note,
		};
		const url = BaseUrl + "/notes/";

		await fetch(url, requestOptions)
			.then((response) => response.json())
			.catch((err) => console.log(err));
  }

  const remove = async (id: number) => {
    const requestOptions = {
			method: "PUT",
			headers: {
				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
			},
			id: id,
		};

    const url = BaseUrl + `/note/${id}`;

    await fetch(url, requestOptions)
			.then((response) => response.json())
			.catch((err) => console.log(err));
  }

	return { get, post, put, remove };
};

export default requests;
