const {dynamoDB} = require('../../credentials.js')

const getAllItems = async (data)=>{

    const params = {
        TableName:'test',
        KeyConditionExpression: 'PK = :pk AND begins_with(SK,:sk)',
        ExpressionAttributeValues:{
            ":pk":'user_1234',
            ":sk":'task'
        }
    }

    const result = await dynamoDB.query(params).promise()

    return result.Items
}


getAllItems().then(item=>{
    console.log(item)
})