import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Download Our E-Commerce App</title>
        <meta
          name="description"
          content="Download our e-commerce app to enjoy the best shopping experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Our E-Commerce App</h1>
        <p className="mt-3 text-2xl">
          Download our app to enjoy the best shopping experience
        </p>

        <div className="flex mt-6 space-x-4">
          <a
            href="https://expo.dev/artifacts/eas/abKjqWtE3xhArRooFky2Wi.apk"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Download for Android
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-600">© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Home;
