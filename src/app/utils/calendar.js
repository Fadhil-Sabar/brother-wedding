export function generateGoogleCalendarUrl({
	title,
	description,
	location,
	startDateTime,
	endDateTime,
}) {
	const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
	const params = new URLSearchParams({
		text: title,
		details: description ?? "",
		location: location ?? "",
		dates: `${formatDate(startDateTime)}/${formatDate(endDateTime)}`,
	});

	return `${baseUrl}&${params.toString()}`;
}

function formatDate(dateStr) {
	// Google Calendar expects: YYYYMMDDTHHmmssZ (UTC)
	return new Date(dateStr).toISOString().replace(/[-:]|\.\d{3}/g, "");
}
