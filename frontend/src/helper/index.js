const API = "http://127.0.0.1:8000/ml_modules";

export const FertilizerSuggestionAPI = (data) => {
	return fetch("http://127.0.0.1:8000/ml_modules/fertilizer_recommend/", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const cropRecommendAPI = (data) => {
	return fetch("http://127.0.0.1:8000/ml_modules/crop_recommend/", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.catch((err) => console.log(err));
};
