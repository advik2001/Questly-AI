// import React from 'react';

// const SpinnerLoader = () => {
//   return (
//     <div role="status">
//       <svg
//         aria-hidden="true"
//         className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-900"
//         viewBox="0 0 100 101"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Inner Circle - now black */}
//         <path
//           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 
//             100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 
//             50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
//           fill="black"
//         />

//         {/* Spinner Arc - follows inherited fill from className */}
//         <path
//           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 
//             97.0079 33.5539C95.2932 28.8227 92.871 24.3692 
//             89.8167 20.348C85.8452 15.1192 80.8826 10.7231 
//             75.2124 7.41289C69.5422 4.10268 63.2754 1.94025 
//             56.7221 1.05124C51.7666 0.367541 46.7345 0.446843 
//             41.8016 1.27873C39.3504 1.69328 37.9054 4.19778 
//             38.5425 6.62326C39.1796 9.04874 41.6528 10.4717 
//             44.1272 10.1071C47.8511 9.56116 51.6395 9.52689 
//             55.3952 10.0491C60.8643 10.7766 66.1388 12.5457 
//             70.9056 15.2552C75.6725 17.9648 79.8494 21.5619 
//             83.1916 25.841C85.5976 28.9121 87.5535 32.2912 
//             89.0106 35.8758C89.9013 38.2158 91.5423 39.6781 
//             93.9676 39.0409Z"
//           fill="currentFill"
//         />
//       </svg>
//       <span className="sr-only">Loading...</span>
//     </div>
//   );
// };

// export default SpinnerLoader;


import React from 'react';

const SpinnerLoader = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white mr-2 inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
};

export default SpinnerLoader;
