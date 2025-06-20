import React from 'react';

const Loading = ({isLoading}) => {
   return (
      (isLoading && (
         <div className="fixed flex items-center justify-center top-0 right-0 bottom-0 left-0" style={{ backgroundColor: "rgb(184 184 185 / 50%)" }}
         >
         <div className="w-[80px] h-[80px]  transition-all bg-transparent rounded-full animate-spin border border-4 border-purple-400 border-t-transparent"></div>
         </div>
      ))
   );
};

export default Loading;