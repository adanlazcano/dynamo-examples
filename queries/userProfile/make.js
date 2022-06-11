const { dynamoDB } = require("../../credentials.js");

const addItem = async (data) => {
  const profile1 = {
    TableName: "test",
    Item: {
      PK: "user_1234",
      SK: "profile",
      name: "adan",
      address: "123 Fake"
     
    },
  };
  const profile2 = {
    TableName: "test",
    Item: {
      PK: "user_1235",
      SK: "profile",
      name: "Anton",
      address: "124 Fake"
     
    },
  };

  await dynamoDB.put(profile1).promise();
  await dynamoDB.put(profile2).promise();
};

addItem();
