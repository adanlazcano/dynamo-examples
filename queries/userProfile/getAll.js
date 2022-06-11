const { dynamoDB } = require("../../credentials.js");

const getItems = async (_) => {
  const params = {
    TableName: "test",
//    FilterExpression:"userStatus = :a",
//    ExpressionAttributeValues:{
//        ":a":true
//    }
  };

  const result = await dynamoDB.scan(params).promise();

  return result.Items;
};

getItems().then((x) => {
  console.log(x);
});
