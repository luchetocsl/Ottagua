import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	try {
		const { email } = await request.json();

		if (!email || typeof email !== "string") {
			return new Response(JSON.stringify({ message: "Email is required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		const apiKey = import.meta.env.BREVO_API_KEY;
		if (!apiKey) {
			return new Response(
				JSON.stringify({ message: "Missing BREVO_API_KEY" }),
				{
					status: 500,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const res = await fetch(
			`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"api-key": apiKey,
				},
			}
		);

		if (res.status === 204) {
			return new Response(JSON.stringify({ ok: true }), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}

		const text = await res.text();
		const data = text ? JSON.parse(text) : {};

		if (!res.ok) {
			return new Response(
				JSON.stringify({
					message: data?.message || "Brevo error",
					code: data?.code,
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		console.error("/api/unsubscribe error:", err);
		return new Response(
			JSON.stringify({ message: "Server error" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
};
