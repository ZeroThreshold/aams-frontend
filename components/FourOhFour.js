const FourOhFour = ({ error }) => {
  return (
    <div class="h-screen">
      <div class="flex h-full">
        <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
          <header class="mb-auto flex justify-center z-50 w-full py-4">
            <nav class="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <a
                class="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
                href="#"
                aria-label="Brand"
              >
                AAMS
              </a>
            </nav>
          </header>

          <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              404
            </h1>
            <h1 class="block text-2xl font-bold text-white"></h1>
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Oops, something went wrong.
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find your page.
            </p>
            <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <div class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                <div class="p-4 md:p-5">
                  <div class="flex justify-between items-center flex-col">
                    <div>
                      <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Error
                      </h3>
                    </div>
                    <div class="p-3 bg-gray-700 rounded">{error}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="mt-auto text-center py-5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p class="text-sm text-gray-500">© All Rights Reserved. 2022.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
