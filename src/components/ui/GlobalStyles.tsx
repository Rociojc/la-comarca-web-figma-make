import React from 'react';

export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=MedievalSharp&display=swap');
    
    .font-medieval { font-family: 'MedievalSharp', cursive; }
    .font-lato { font-family: 'Lato', sans-serif; }
    
    .fade-in { animation: fadeIn 0.5s ease-in-out; }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Scrollbar estilizado para desktop */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #FAF9F6;
    }
    ::-webkit-scrollbar-thumb {
      background: #A8A29E;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #78716C;
    }
    
    /* Utility for hiding scrollbar but keeping functionality if needed elsewhere */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
  `}</style>
);
