import { db } from "@/app/lib/firebase";
//import { resend } from "@/app/lib/resend";
import "server-only";

import type Stripe from "stripe";

export async function handleStripeSubscription(
	event: Stripe.CheckoutSessionCompletedEvent,
) {
	if (event.data.object.payment_status === "paid") {
		console.log(
			"Subscription created! Send email to user about subscription creation. Welcome message",
		);

		const metadata = event.data.object.metadata;
		const userEmail =
			event.data.object.customer_email ||
			event.data.object.customer_details?.email;

		const userId = metadata?.userId;

		if (!userId || !userEmail) {
			console.error("User id or email not found");
			return;
		}

		await db.collection("users").doc(userId).update({
			stripeSubscriptionid: event.data.object.subscription,
			subscriptionStatus: "active",
		});

		const { data, error } = await resend.emails.send({
			from: "Acme <dev.guilhermebrasil@gmail.com>",
			to: [userEmail],
			subject: "Assinatura ativada com sucesso!",
			text: "Assinatura ativada com sucesso!",
		});

		if (error) {
			console.error(error);
		}

		console.log(data);
	}
}