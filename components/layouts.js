import Head from "next/head";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          href="./img/logo.png"
          alt="Rstacode Logo"
          type="image/icon type"
        />

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#FFCB2B" />
        <title>Firebase FCM API</title>
        <meta name="title" content="Firebase FCM API" />
      </Head>
      <main className="relative flex flex-col min-h-screen bg-gradient-to-bl from-slate-800 to-stone-900">
        <a
          href="https://github.com/codenashwan/fcm"
          className="w-[150px] h-[150px] fixed top-0 right-0 z-30"
        >
          <Image
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
            alt="Fork me on GitHub"
            layout="fill"
          />
        </a>

        <div className="flex-1 container p-3">{children}</div>
        <div className="flex-1 text-white text-center text-xl font-black">
          <p>Developed by Rstacode.</p>
        </div>
      </main>
    </div>
  );
}
