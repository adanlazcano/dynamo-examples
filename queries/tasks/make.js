const { dynamoDB } = require("../../credentials.js");

const addItem = async (data) => {
  const task1 = {
    TableName: "test",
    Item: {
      PK: "user_1234",
      SK: "task_1234",
      name: "Task 1",
    description:"Plan meeting"
    },
  };

  const task2= {
    TableName: "test",
    Item: {
      PK: "user_1234",
      SK: "task_1235",
      name: "Task 2",
    description:"Have meeting"
    },
  };
  const task3 = {
    TableName: "test",
    Item: {
      PK: "user_1235",
      SK: "task_1236",
      name: "Task 1",
 
    description:"Attend meeting"
    },
  };

  await dynamoDB.put(task1).promise();
  await dynamoDB.put(task2).promise();
  await dynamoDB.put(task3).promise();
};

addItem();
