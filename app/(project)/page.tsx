import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Micro SaaS Template",
	description: "Landing Page",
};

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold">Landing Page</h1>
			<Link href="/login">
				<button type="button">Login</button>
			</Link>
		</div>
	);
}