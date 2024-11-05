import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center border border-VermelhoPrincipal rounded-lg p-2 shadow-sm max-w-md w-full">
      <MagnifyingGlassIcon className="h-6 w-6 text-VermelhoPrincipal mr-2" />
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full border-none focus:outline-none "
      />
    </div>
  );
};

export default SearchBar;
