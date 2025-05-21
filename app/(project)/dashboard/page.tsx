import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Dashboard Solaris",
	description: "Dashboard",
};

export default async function Dashboard() {
	const session = await auth();

	if (!session) {
		redirect("/login");
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-white to-purple-50 flex flex-col">
			{/* Navbar */}
			<header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
				<h1 className="text-xl font-bold text-purple-800">Dashboard Protegido</h1>
				<div className="text-right">
					<p className="text-gray-700 text-sm">{session.user?.email}</p>
					<form action={handleAuth}>
						<button className="mt-1 text-sm text-purple-700 underline hover:text-purple-500 transition">
							Logout
						</button>
					</form>
				</div>
			</header>

			{/* Conteúdo principal */}
			<main className="flex-1 flex flex-col items-center justify-center px-8 py-16 gap-8">
				<h2 className="text-3xl font-semibold text-purple-800">Nossos Planos</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
					<div className="bg-white rounded-lg shadow-md p-6 border border-purple-200">
						<h3 className="text-xl font-bold text-purple-700 mb-2">Plano Básico</h3>
						<p className="text-gray-700 text-sm">
							Acesso limitado ao monitoramento solar. Ideal para usuários residenciais com 1 instalação.
						</p>
						<p className="mt-4 font-semibold text-purple-600">R$29,90/mês</p>
					</div>

					<div className="bg-white rounded-lg shadow-md p-6 border border-purple-300">
						<h3 className="text-xl font-bold text-purple-700 mb-2">Plano Profissional</h3>
						<p className="text-gray-700 text-sm">
							Acesso a múltiplas instalações, relatórios detalhados e integração com Power BI.
						</p>
						<p className="mt-4 font-semibold text-purple-600">R$69,90/mês</p>
					</div>

					<div className="bg-white rounded-lg shadow-md p-6 border border-purple-400">
						<h3 className="text-xl font-bold text-purple-700 mb-2">Plano Corporativo</h3>
						<p className="text-gray-700 text-sm">
							Soluções customizadas para empresas de energia e suporte dedicado com SLA de atendimento.
						</p>
						<p className="mt-4 font-semibold text-purple-600">R$199,90/mês</p>
					</div>
				</div>

				{/* Botão de pagamento */}
				<Link href="/pagamentos">
					<button className="mt-10 bg-purple-700 text-white px-8 py-4 rounded-md text-lg hover:bg-purple-600 transition">
						Ir para Pagamentos
					</button>
				</Link>
			</main>
		</div>
	);
}
