import { useState } from 'react';

import classes from './index.module.scss';

export function Search({
  onSearchChange,
  placeholder,
  type,
}: {
  placeholder: string;
  onSearchChange: (query: string) => void;
  type: 'text' | 'number';
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        className={classes.container}
      />
    </div>
  );
}
