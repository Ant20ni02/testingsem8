import './App.css';
import './Table.css';
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
    <div className='container'>
      <div>
        <h2>Formulario</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHvYCu6_YT5OUR_Bu6RyZX7W0kVANlsGCl6ktYJeVZIK_4Lw/viewform?embedded=true" width="1000" height="600" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </div>
      <div>
        <h2>Datos de la hoja de cálculo</h2>
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

    </div>
  );

}

export default App;
