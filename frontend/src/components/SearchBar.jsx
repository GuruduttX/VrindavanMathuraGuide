import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from './ui/input';
import { Card } from './ui/card';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL + "/api";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        try {
          const response = await axios.get(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
          if (response.data.success) {
            setResults(response.data.results);
            setIsOpen(true);
          }
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults(null);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const handleResultClick = (type, id) => {
    setIsOpen(false);
    setQuery("");
    setResults(null);
    navigate(`/${type}/${id}`);
  };

  const totalResults = results ? 
    (results.temples?.length || 0) + 
    (results.spiritualPlaces?.length || 0) + 
    (results.festivals?.length || 0) + 
    (results.planningGuides?.length || 0) : 0;

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search temples, spiritual places, festivals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 h-12 text-base border-gray-300"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults(null);
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-lg border-gray-200">
          {loading ? (
            <div className="p-4 text-center text-gray-600">Searching...</div>
          ) : totalResults === 0 ? (
            <div className="p-4 text-center text-gray-600">No results found for "{query}"</div>
          ) : (
            <div className="p-4">
              {/* Temples */}
              {results.temples && results.temples.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">Temples ({results.temples.length})</h3>
                  {results.temples.map((temple) => (
                    <button
                      key={temple._id}
                      onClick={() => handleResultClick('temples', temple._id)}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <p className="font-medium text-gray-900">{temple.name}</p>
                      <p className="text-sm text-gray-600">{temple.location} • {temple.deity}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Spiritual Places */}
              {results.spiritualPlaces && results.spiritualPlaces.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">Spiritual Places ({results.spiritualPlaces.length})</h3>
                  {results.spiritualPlaces.map((place) => (
                    <button
                      key={place._id}
                      onClick={() => handleResultClick('spiritual-places', place._id)}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <p className="font-medium text-gray-900">{place.name}</p>
                      <p className="text-sm text-gray-600">{place.location} • {place.type}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Festivals */}
              {results.festivals && results.festivals.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">Festivals ({results.festivals.length})</h3>
                  {results.festivals.map((festival) => (
                    <button
                      key={festival._id}
                      onClick={() => handleResultClick('festivals', festival._id)}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <p className="font-medium text-gray-900">{festival.name}</p>
                      <p className="text-sm text-gray-600 line-clamp-1">{festival.summary}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Planning Guides */}
              {results.planningGuides && results.planningGuides.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">Planning Guides ({results.planningGuides.length})</h3>
                  {results.planningGuides.map((guide) => (
                    <button
                      key={guide._id}
                      onClick={() => handleResultClick('plan-your-visit', guide._id)}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <p className="font-medium text-gray-900">{guide.title}</p>
                      <p className="text-sm text-gray-600 line-clamp-1">{guide.summary}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default SearchBar;