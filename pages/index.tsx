import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Music Review App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <h1>Music Review App</h1>
      </div>
    </div>
  );
}
