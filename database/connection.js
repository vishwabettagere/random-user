const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function saveRandomUsers(users) {
    try {
      const database = client.db("randomUsers");
      const haiku = database.collection("userInfo");
    
      const result = await haiku.insertMany(users);
      console.log(`A document was inserted with the _id: ${result}`);
      return result;
    } finally {
      await client.close();
    }
}

async function getAllUsers() {
    try {
      const database = client.db("randomUsers");
      const haiku = database.collection("userInfo");
     
      const result = haiku.find({});
      let resultArray = []
      await result.forEach((item)=> {
        resultArray.push(item)

    })
      return resultArray;
    } finally {
      await client.close();
    }
}

module.exports = {saveRandomUsers, getAllUsers};