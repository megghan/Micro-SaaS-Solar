import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
	const session = await auth();

	if (session) {
		redirect("/dashboard");
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-100 to-white flex items-center justify-center">
			<div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full border border-purple-100">
				<h1 className="text-3xl font-extrabold mb-4 text-purple-800 text-center">Entrar no Solaris</h1>
				<p className="text-gray-600 mb-8 text-center">
					Acesse seu painel com uma conta Google
				</p>

				<form action={handleAuth}>
					<button
						type="submit"
						className="w-full py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300"
					>
						Entrar com Google
					</button>
				</form>
			</div>
		</div>
	);
}
