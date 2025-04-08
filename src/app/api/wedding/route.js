import prisma from "../../../../lib/prisma";

export async function GET(request) {
	try {
		const weddings = await prisma.wedding.findMany({
			select: {
				message: true,
				name: true,
				confirm: true,
			},
			orderBy: {
				created_date: "asc",
			},
		});

		return new Response(JSON.stringify(weddings), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		return new Response(JSON.stringify({ message: "Failed to fetch data" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, message, confirm } = body;

		const existingWedding = await prisma.wedding.findFirst({
			where: {
				name: name,
			},
		});

		if (existingWedding) {
			return new Response(JSON.stringify({ message: "Sudah pernah submit" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		if (!name || !message || !confirm) {
			return new Response(JSON.stringify({ message: "All fields are required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		const wedding = await prisma.wedding.create({
			data: {
				name,
				message,
				confirm,
			},
		});

		return new Response(JSON.stringify(wedding), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		return new Response(JSON.stringify({ message: "Failed to create data" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
