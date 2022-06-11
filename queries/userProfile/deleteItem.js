const {dynamoDB} = require('../../credentials.js');

const deleteItem = async _ =>{

    const params = {
        TableName:'test',
        // Key:{
        //     // PK:'user_124',
        //     SK:'profile'
        // }
    }

    await dynamoDB.delete(params).promise();
}

deleteItem()