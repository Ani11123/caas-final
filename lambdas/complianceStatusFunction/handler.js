const AWS = require('aws-sdk');
const configService = new AWS.ConfigService();

module.exports.complianceStatus = async (event) => {
  try {
    // Your logic to fetch compliance data from AWS Config
    const params = { ConfigRuleNames: [] };
    const data = await configService.describeComplianceByConfigRule(params).promise();

    return {
      statusCode: 200,  // Always include statusCode
      headers: {
        'Access-Control-Allow-Origin': '*',  // Allow all origins, or restrict to a specific domain
        'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',  // Specify allowed methods
      },
      body: JSON.stringify(data),  // Ensure body is a stringified JSON
    };
  } catch (error) {
    console.error("Error fetching compliance data:", error);
    return {
      statusCode: 500,  // Ensure the error status code is set
      headers: {
        'Access-Control-Allow-Origin': '*',  // Include CORS headers in the error response
        'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: JSON.stringify({
        error: 'Failed to fetch compliance data',
        details: error.message,
      }),
    };
  }
};

