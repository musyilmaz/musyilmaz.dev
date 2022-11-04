import Header from "@/components/reusable/header";

export default function Home() {
  return (
    <main className="container mx-auto flex h-screen w-screen flex-col items-start justify-start lg:py-12">
      <Header />
      <h4>hi there 👋🏼</h4>
      <h1>
        I'm <span className="text-brand-200">Mustafa</span>,
      </h1>
      <h4>Let's build the future together.</h4>
    </main>
  );
}
