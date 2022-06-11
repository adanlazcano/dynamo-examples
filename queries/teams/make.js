const { dynamoDB } = require("../../credentials.js");

const addItem = async (data) => {
  const teamMember1 = {
    TableName: "test",
    Item: {
      PK: "team_1234",
      SK: "teamMember_1234",
      GSI1:"user_1234",
    role:'supervisor'
    },
  };

  
  const teamMember2 = {
    TableName: "test",
    Item: {
      PK: "team_1235",
      SK: "teamMember_1235",
      GSI1:"user_1234",
    role:'role'
    },
  };

  
  const teamMember3 = {
    TableName: "test",
    Item: {
      PK: "team_1235",
      SK: "teamMember_1236",
      GSI1:"user_1235",
    role:'supervisor'
    },
  };

  
  const team1 = {
    TableName: "test",
    Item: {
      PK: "team_1234",
      SK: "meta",
      name:"Team blue"
    },
  };
  const team2 = {
    TableName: "test",
    Item: {
      PK: "team_1235",
      SK: "meta",
      name:"Team green"
    },
  };

  

  await dynamoDB.put(teamMember1).promise();
  await dynamoDB.put(teamMember2).promise();
  await dynamoDB.put(teamMember3).promise();
  await dynamoDB.put(team1).promise();
  await dynamoDB.put(team2).promise();

};

addItem();
