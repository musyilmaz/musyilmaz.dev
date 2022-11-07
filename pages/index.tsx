import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import Head from "next/head";
import HomePage from "@/components/pages/homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mustafa Yilmaz</title>
        <meta name="description" content="Mustafa Yilmaz meta description" />
      </Head>
      <main className="container mx-auto flex h-screen w-screen flex-col items-start justify-start lg:py-12">
        <Header />
        <HomePage />
        <Footer />
      </main>
    </>
  );
}
