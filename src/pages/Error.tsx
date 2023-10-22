const Error = () => {
  return (
    <>
      <section className="relative z-10 py-[120px]">
        <div className="container">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                  Oops! That page can't be found
                </h4>
                <p className="mb-8 text-lg text-white">
                  The page you are looking for it maybe deleted
                </p>
                <a
                  href="/#"
                  className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-black hover:text-primary"
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
