// src/components/ComplianceStatus.js

import React, { useEffect, useState } from 'react';
import { fetchComplianceStatus } from '../services/apiService';  // Correct path for the API service

const ComplianceStatus = () => {
  const [data, setData] = useState(null);  // State to hold API response data
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State to track errors

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const getComplianceData = async () => {
      try {
        const result = await fetchComplianceStatus();  // Call the function from apiService.js
        console.log("API response:", result);  // Log the API response for debugging
        setData(result);  // Set the fetched data in state
      } catch (err) {
        console.error("Error fetching data:", err);  // Log any errors
        setError("Failed to fetch compliance data");
      }
      setLoading(false);  // Set loading to false after fetching
    };

    getComplianceData();  // Invoke the async function
  }, []);  // Empty dependency array to run the effect once on mount

  // Conditionally render the content based on loading, error, and data states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>  // Display fetched data as formatted JSON
      ) : (
        <p>No compliance data available</p>  // Fallback message if no data is fetched
      )}
    </div>
  );
};

export default ComplianceStatus;

