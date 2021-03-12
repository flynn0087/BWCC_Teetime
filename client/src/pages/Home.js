/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div>
<<<<<<< Updated upstream
      {/* Start of navbar. */}
      <nav className="bg-gray-900">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <nav className="flex items-center">
              {/* <nav className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                ></img>
              </nav> */}
              <nav className="hidden md:block">
                <nav className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/availwash"
                    className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Available Washes
                  </a>

                  <a
                    href="/calendar"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Car Wash Calendar
                  </a>
                </nav>
              </nav>
            </nav>
          </nav>
        </nav>
      </nav>
      {/* // End of the Navbar
// Start of the Modal */}
=======
      <Navbar />
      {/* Start of the Modal */}
>>>>>>> Stashed changes
      <section className="App h-screen w-full flex justify-center items-center bg-green-500">
        <main className="h-34 w-64 pb-20 min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <main
            className="inline-block align-bottom bg-gray-300 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <main className="bg-gray-300 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <main className="sm:flex sm:items-start">
                <main className="mt-3 sm:mt-0 sm:ml-4">
<<<<<<< Updated upstream
                  <p
                    className="text-center text-lg leading-6 font-medium text-gray-900"
                    // id="modal-headline"
                  >
=======
                  <p className="text-center text-lg leading-6 font-medium text-gray-900">
>>>>>>> Stashed changes
                    Suds Scheduler App
                  </p>
                </main>
              </main>
            </main>

            <main className="bg-gray-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
<<<<<<< Updated upstream
              <p
                className="text-center text-lg leading-6 font-medium text-gray-900"
                // id="modal-headline"
              >
=======
              <p className="text-center text-lg leading-6 font-medium text-gray-900">
>>>>>>> Stashed changes
                Find Your Car Wash. Save Your Time.
              </p>
            </main>
            <main className="justify-center my-auto bg-gray-300 px-4 py-3 sm:px-6 sm:flex-row-reverse">
              <button
                type="button"
                className="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Schedule Your Car Wash
              </button>
            </main>
          </main>
        </main>
        {/* End of modal. */}
      </section>
    </div>
  );
}

export default Home;
