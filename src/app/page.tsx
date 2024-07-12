"use client";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col-reverse lg:flex-row items-center justify-center flex-1 px-10 lg:px-20 text-center   gap-10">
        <div className="w-full max-w-md justify-start">
          <h1 className="text-3xl font-bold lg:text-start">
            Welcome to Our E-Commerce App
          </h1>
          <p className="mt-3 text-xl lg:text-start">
            Download our app to enjoy the best shopping experience
          </p>

          <div className="flex mt-6 space-x-4 justify-center lg:justify-start">
            <a
              href="https://expo.dev/artifacts/eas/abKjqWtE3xhArRooFky2Wi.apk"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Download for Android
            </a>
          </div>
        </div>
        <div>
          <div className="mt-10 w-full max-w-4xl">
            <div className="mt-4 aspect-w-16 aspect-h-9">
              <video
                src="https://firebasestorage.googleapis.com/v0/b/k-store-app.appspot.com/o/Advanced%20Mobile%20App%20Promo_free.mp4?alt=media&token=1e41f35d-babf-4439-91d3-a688716b1804"
                controls
                className="rounded-xl  w-full h-80"
               prefix="https://firebasestorage.googleapis.com/v0/b/k-store-app.appspot.com/o/sdsad.png?alt=media&token=7ad011a6-5f0e-4db9-a757-df791b2d5d29"
                loop
                poster="https://firebasestorage.googleapis.com/v0/b/k-store-app.appspot.com/o/sdsad.png?alt=media&token=7ad011a6-5f0e-4db9-a757-df791b2d5d29"
              ></video>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-600">© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Home;
