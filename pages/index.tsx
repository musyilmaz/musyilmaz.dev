import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mustafa Yilmaz</title>
        <meta name="description" content="Mustafa Yilmaz meta description" />
      </Head>
      <main className="container mx-auto flex h-screen w-screen flex-col items-start justify-start lg:py-12">
        <Header />
        <h4>hi there 👋🏼</h4>
        <h1>
          I'm <span className="text-brand-200">Mustafa</span>,
        </h1>
        <h4>Let's build the future together.</h4>
        <Footer />
      </main>
    </>
  );
}
