function App() {
  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
    <div className="w-full max-w-md bg-gray-800" >
      <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
          <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" />
        </div>
        <div className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
          <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
        </div>
      </form>
    </div>
  </section>
//Below is an alternative sign in page from Tailwind components that needs tweaking to display correctly.
//     <div>
//     <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//   <main className="max-w-md w-full space-y-8">
//     <main>
//       <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
//       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//         Sign in to your account
//       </h2>
//       <p className="mt-2 text-center text-sm text-gray-600">
//         Or
//         <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//           start your 14-day free trial
//         </a>
//       </p>
//     </main>
//     <form className="mt-8 space-y-6" action="#" method="POST">
//       <form type="hidden" name="remember" value="true">
//       <main className="rounded-md shadow-sm -space-y-px">
//         <main>
//           <label for="email-address" className="sr-only">Email address</label>
//           <form id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
//         </form>
//         <main>
//           <label for="password" className="sr-only">Password</label>
//           <form id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
//         </form>
//       </main>

//       <main className="flex items-center justify-between">
//         <main className="flex items-center">
//           <form id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
//           <label for="remember_me" className="ml-2 block text-sm text-gray-900">
//             Remember me
//           </label>
//         </form>

//         <main className="text-sm">
//           <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//             Forgot your password?
//           </a>
//         </main>
//       </main>

//       <main>
//         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//             <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
//             </svg>
//           </span>
//           Sign in
//         </button>
//       </main>
//     </main>
//   </main>
// </main>
// </form>
// </form>
// </main>
// </main>
// </div>
  );
}

export default App;
