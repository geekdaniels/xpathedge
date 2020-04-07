import React from "react";
import format from 'date-fns/format';

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <p className="mb-0 text-white">
          My website <span>{format(new Date(), 'eeee, MMMM do yyyy')}</span>
        </p>
      </footer>
    </>
  );
}
