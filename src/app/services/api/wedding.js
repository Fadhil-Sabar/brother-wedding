export const postAttendance = async (data) => {
	try {
		const response = await fetch("/api/wedding", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || "Failed to submit attendance data");
		}

		return await response.json();
	} catch (error) {
		console.error("Error submitting attendance data:", error);
		throw error;
	}
};
