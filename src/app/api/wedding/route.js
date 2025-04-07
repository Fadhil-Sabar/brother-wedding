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
		console.log(err.stack, " error stack");
		return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, message, confirm } = body;

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
		console.log(err.stack, " error stack");
		return new Response(JSON.stringify({ error: "Failed to create data" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
