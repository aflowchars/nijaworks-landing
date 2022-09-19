import Head from "next/head";
import Image from "next/future/image";

import Hero from "../layouts/home/Hero";
import Client from "../layouts/home/Client";
import About from "../layouts/home/About";
import Service from "../layouts/home/Service";
import Portfolio from "../layouts/home/Portfolio";

export default function Home() {
  return (
    <div className="nijaworks">
      <Head>
        <title>Nija Works | Outstanding Design Solution</title>
        <meta name="description" content="Outstanding Design Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Client />

      <About />

      <Service />

      <Portfolio />
    </div>
  );
}
