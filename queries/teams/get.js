const {dynamoDB} = require('../../credentials.js')

const getAllItems = async (data)=>{

    const params = {
        TableName:'test',
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues:{
            ":pk":'team_1235',
       
        }
    }

    const result = await dynamoDB.query(params).promise()

    return result.Items
}


getAllItems().then(item=>{
    console.log(item)
})