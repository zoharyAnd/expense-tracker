import React from 'react';

export interface Props {
  variant: string;
}

const Spinner = ({ variant }: Props) => {
  return (
    <div className={`spinner-grow text-${variant}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
