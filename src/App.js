import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // Define state to store spreadsheet data
  const [data, setData] = useState([]);

  // Function to fetch spreadsheet data
  const fetchData = async () => {
    try {
      // Fetch spreadsheet data from API endpoint or local file
      const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1jpcXulYL7KHpoEBzlvvpDWT-Vb3nJ4KOLOGE1GOR6Wg/values/A1:S?key=AIzaSyCMKHQScEgPs-xCw3wgoST9CABf5vrHj8A');
      const jsonData = await response.json();
      setData(jsonData.values);
      console.log(jsonData.values);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData function when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Spreadsheet Data</h2>
      <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>

    </div>
  );

}

export default App;
