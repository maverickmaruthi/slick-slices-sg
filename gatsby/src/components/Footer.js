import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">
        &copy; Copyright Slick's slices. {new Date().getFullYear()} all rights
        reserved.
      </p>
    </footer>
  );
}
