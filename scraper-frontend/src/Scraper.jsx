import { useState } from 'react';

export default function Scraper() {
  const [url, setUrl] = useState('');

  return (
    <input
      type="text"
      placeholder="Paste product link here..."
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}