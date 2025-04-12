
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        <div className="md:col-span-3">
          <Input 
            type="text" 
            placeholder="Job title, keywords, or company" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-search w-full"
          />
        </div>
        <div className="md:col-span-3">
          <Input 
            type="text" 
            placeholder="City, state, or remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="md:col-span-1">
          <Button type="submit" className="w-full">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
