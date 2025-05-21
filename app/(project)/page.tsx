import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Dashboard Solaris",
	description: "Landing Page",
};


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar */}
			<header className="flex justify-between items-center px-8 py-4 shadow-md">
				<h1 className="text-2xl font-bold text-purple-800">Solaris</h1>
				<Link href="/login">
					<button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
						Login
					</button>
				</Link>
			</header>

			{/* Hero Section */}
			<main className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 py-16 bg-gradient-to-br from-white to-purple-50">
				<div className="max-w-xl space-y-6">
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
						Transforme seus dados solares em decisões inteligentes
					</h2>
					<p className="text-gray-700 text-lg">
						Com o Solaris, você monitora o desempenho dos seus painéis solares em tempo real, acessa insights poderosos e tudo conectado ao seu Power BI.
					</p>
					<Link href="/login">
						<button className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition">
							Começar agora
						</button>
					</Link>
				</div>

				{/* Simulação de imagem ou gráfico */}
				<div className="mt-12 md:mt-0 md:ml-16">
					<div className="w-[700px] h-[500px] bg-purple-200 rounded-lg shadow-inner flex items-center justify-center text-purple-800 font-bold">
						<Image src="/powerbi.png" alt="Gráfico Solar" width={680} height={480} />

					</div>
				</div>
			</main>

			{/* Footer opcional */}
			<footer className="text-center py-4 text-sm text-gray-500">
				© 2025 Solar Analytics. Todos os direitos reservados.
			</footer>
		</div>
	);
}
