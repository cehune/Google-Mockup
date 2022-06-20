/*import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children}) => {
    const {results, setResults} = useState([]);
    const {isLoading, setIsLoading} = useState(false);
    const {searchTerm, setSearchTerm} = useState('');

    const getResults = async (type) => {
        

        const response = await fetch('${baseUrl}${type}', {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'b9d2e3e743msh15c292c38a95a8fp102d5ejsnfcec15d737bd'
            }
        })

        const data = await response.json();
        setResults(data);
        
    }
    return (
        <ResultContext.Provider value ={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext); */

import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('fishing');

  const getResults = async (type) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': ''
      },
    });

    const data = await res.json();

    console.log(data);

    if (type.includes('/news')) {
        setResults(data.entries);
    } else if (type.includes('/image')) {
        setResults(data.image_results);
    } else {
        setResults(data.results);
    }


    setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);