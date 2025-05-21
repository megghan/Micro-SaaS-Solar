"use client";

import { useMercadoPago } from "@/app/hooks/useMercadoPago";
import { useStripe } from "@/app/hooks/useStripe";
import { useState } from "react";

export default function Payments() {
	const {
		createPaymentStripeCheckout,
		createSubscriptionStripeCheckout,
		// handleCreateStripePortal, // removido
	} = useStripe();
	const { createMercadoPagoCheckout } = useMercadoPago();

	const [loading, setLoading] = useState<string | null>(null);

	const handleClick = async (action: () => Promise<void>, label: string) => {
		setLoading(label);
		try {
			await action();
		} finally {
			setLoading(null);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-t from-purple-900 to-white gap-8">
			<h1 className="text-4xl font-bold text-purple-800">Escolha seu método de pagamento</h1>
			<p className="text-gray-700 text-center max-w-md text-lg">
				Você está a um passo de resolver sua vida energética. Selecione abaixo a forma de pagamento que melhor se encaixa para você.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
				{/* Stripe */}
				<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow border border-purple-200">
					<h2 className="text-lg font-semibold text-purple-700">Stripe</h2>
					<button
						className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition disabled:opacity-50"
						disabled={loading === "payment"}
						onClick={() =>
							handleClick(
								() => createPaymentStripeCheckout({ testeId: "123" }),
								"payment"
							)
						}
					>
						{loading === "payment" ? "Processando..." : "Pagamento único com Stripe"}
					</button>
					<button
						className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition disabled:opacity-50"
						disabled={loading === "subscription"}
						onClick={() =>
							handleClick(
								() => createSubscriptionStripeCheckout({ testeId: "123" }),
								"subscription"
							)
						}
					>
						{loading === "subscription" ? "Criando assinatura..." : "Assinatura mensal com Stripe"}
					</button>
				</div>

				{/* Mercado Pago */}
				<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow border border-purple-200">
					<h2 className="text-lg font-semibold text-purple-700">Mercado Pago</h2>
					<button
						className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition disabled:opacity-50"
						disabled={loading === "mercado"}
						onClick={() =>
							handleClick(
								() =>
									createMercadoPagoCheckout({
										testeId: "123",
										userEmail: "teste@teste.com",
									}),
								"mercado"
							)
						}
					>
						{loading === "mercado" ? "Invocando pagamento..." : "Pagar com Mercado Pago"}
					</button>
				</div>
			</div>
		</div>
	);
}
