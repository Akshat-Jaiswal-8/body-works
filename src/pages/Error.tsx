interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <>
      <section className='relative z-10 py-[120px]'>
        <div className='container'>
          <div className='flex -mx-4'>
            <div className='w-full px-4'>
              <div className='mx-auto max-w-[400px] text-center'>
                <h2 className='mb-2 text-[50px] font-bold leading-none text-amber-700 dark:text-white sm:text-[80px] md:text-[100px]'>
                  404
                </h2>
                <h4 className='mb-3 text-[22px] font-semibold leading-tight text-amber-700 dark:text-white'>
                  Oops! That page can't be found
                </h4>
                <p className='mb-8 text-lg text-amber-700 dark:text-white'>
                  {message ? message : 'The page you are looking for it maybe deleted '}
                </p>
                <a
                  href='/#'
                  className='inline-block px-8 py-3 text-base font-semibold text-center text-amber-700  transition dark:text-amber-700 border border-amber-700 dark:border-white rounded-lg  hover:bg-amber-700 hover:text-white dark:hover:bg-white dark:hover:text-black'
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
