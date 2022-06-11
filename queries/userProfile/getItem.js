const { dynamoDB } = require("../../credentials.js");

const getItem = async (_) => {
  const params = {
    TableName: "test",
    Key: {
      PK: "user_124",
      SK:'profile'
    },
  };

  const result = await dynamoDB.get(params).promise();

  return result.Item;
};

getItem().then((item) => {
  console.log(item);
});
