import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BaseUrl = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}`;
const api: AxiosInstance = axios.create({
  baseURL: BaseUrl,
});

const setupConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_HARPERDB_API_KEY}`,
    },
    ...config,
  };
};

export const get = (
  url: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.get(url, setupConfig(config));
}

export const post = (
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.post(url, data, setupConfig(config));
}

export const put = (
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.put(url, data, setupConfig(config));
};

export const remove = (
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.delete(url, setupConfig(config));
};
// const requests = () => {
// 	const [notes, setNotes] = useState<string[]>([]);

// 	const get = async () => {
// 		const requestOptions = {
// 			headers: {
// 				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
// 			},
// 		};
// 		const url = BaseUrl + "/notes/";
// 		await fetch(url, requestOptions)
// 			.then((response) => response.json())
// 			.then((data) => setNotes(data.data))
// 			.catch((err) => console.log(err));
// 		return notes;
// 	};

// 	const post = async (note: string) => {
// 		const requestOptions = {
// 			method: "POST",
// 			headers: {
// 				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
// 			},
// 			note: note,
// 		};
// 		const url = BaseUrl + "/note/";

// 		await fetch(url, requestOptions)
// 			.then((response) => response.json())
// 			.catch((err) => console.log(err));
// 	};

//   const put = async (note: string) => {
//     const requestOptions = {
// 			method: "PUT",
// 			headers: {
// 				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
// 			},
// 			note: note,
// 		};
// 		const url = BaseUrl + "/notes/";

// 		await fetch(url, requestOptions)
// 			.then((response) => response.json())
// 			.catch((err) => console.log(err));
//   }

//   const remove = async (id: number) => {
//     const requestOptions = {
// 			method: "PUT",
// 			headers: {
// 				Autorization: `Basic ${process.env.HARPERDB_API_KEY}`,
// 			},
// 			id: id,
// 		};

//     const url = BaseUrl + `/note/${id}`;

//     await fetch(url, requestOptions)
// 			.then((response) => response.json())
// 			.catch((err) => console.log(err));
//   }

// 	return { notes, setNotes, get, post, put, remove };
// };

// export default requests;
