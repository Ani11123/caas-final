import React, { useEffect, useState } from 'react';
import { fetchComplianceStatus } from '../services/apiService';

const ComplianceStatus = () => {
  const [complianceData, setComplianceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplianceStatus().then(data => {
      setComplianceData(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return loading ? <p>Loading...</p> : <pre>{JSON.stringify(complianceData, null, 2)}</pre>;
};

export default ComplianceStatus;

