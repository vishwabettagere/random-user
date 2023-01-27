const axios = require("axios");
const {MongoClient} = require("mongodb");
const {saveRandomUsers, getAllUsers} = require("../database/connection");

const fetchUsers = async() => {
    const url = "https://randomuser.me/api/?results=20";
    try {
        const response = await axios.get(url);
        const results = response.data.results.map((user) => {
            return {
                title: user.name.title,
                firstName: user.name.first,
                lastName: user.name.last,
                gender: user.gender,
                location: {
                    streetNumber: user.location.street.number,
                    streetName: user.location.street.name,
                    city: user.location.city,
                    state: user.location.state,
                    country: user.location.country
                },
                email:user.email,
                dob:user.dob.date,
                age:user.dob.age,
                phone:user.phone,
                cell:user.cell

            }
        });
        console.log("Processed the random users => ")
        const dbRes = await saveRandomUsers(results);
        return {success: dbRes.acknowledged, insertedCount: dbRes.insertedCount};
       
    } catch (error) {
        return error;
    }
   
};

const getUsers = async () => {
    try {
        const dbRes = await getAllUsers();        
        return dbRes
    } catch (error) {
        console.log(error);
        return {message: error.message}
    }
}

module.exports = {
    fetchUsers,
    getUsers
}