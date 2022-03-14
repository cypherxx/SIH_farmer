const API = "http://127.0.0.1:8000/ml_modules";

export const FertilizerSuggestionAPI = (data) => {
	let formData = new FormData();
	formData.append("temp", data.temp);
	formData.append("moisture", data.moisture);
	formData.append("humidity", data.humidity);
	formData.append("soil_type", data.soil_type);
	formData.append("crop_type", data.crop_type);
	formData.append("nitrogen", data.nitrogen);
	formData.append("phosphorous", data.phosphorus);
	formData.append("potassium", data.potassium);
	console.log("Formdata", formData);
	return fetch("http://127.0.0.1:8000/ml_modules/fertilizer_recommend/", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "multipart/form-data",
		},
		body: formData,
	})
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const cropRecommendAPI = (data) => {
	let formData = new FormData();
	formData.append("temp", data.temp);
	formData.append("humidity", data.humidity);
	formData.append("nitrogen", data.nitrogen);
	formData.append("phosphorous", data.phosphorus);
	formData.append("potassium", data.potassium);
	formData.append("ph", data.ph);
	formData.append("rainfall", data.rainfall);
	return fetch("http://127.0.0.1:8000/ml_modules/crop_recommend/", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: formData,
	})
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.catch((err) => console.log(err));
};
