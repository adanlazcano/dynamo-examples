const {dynamoDB} = require('../../credentials.js')

const getAllItems = async (data)=>{

    const params = {
        TableName:'test',
        IndexName:'GSI1-SK-index',
        KeyConditionExpression: 'GSI1 = :gsi AND begins_with(SK,:sk)',
        ExpressionAttributeValues:{
            ":gsi":'user_1234',
            ":sk":"teamMember"
       
        }
    }

    const result = await dynamoDB.query(params).promise()

    return result.Items
}


getAllItems().then(item=>{
    console.log(item)
})