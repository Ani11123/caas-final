const AWS = require('aws-sdk');
const configService = new AWS.ConfigService();

module.exports.complianceStatus = async (event) => {
  const params = { ConfigRuleNames: [] };  // Fetch all rules

  try {
    const data = await configService.describeComplianceByConfigRule(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch compliance data', details: err.message }),
    };
  }
};

