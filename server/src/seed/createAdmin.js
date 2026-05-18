require("dotenv").config();

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Admin = require("../models/admin.model");

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((error) => {

    console.log(error);

});

const createAdmin = async () => {

    try {

        const existingAdmin = await Admin.findOne({

            email: "admin@medoc.com"

        });

        if(existingAdmin){

            console.log("Admin already exists");

            process.exit();

        }

        const hashedPassword = await bcrypt.hash(

            "MedocAdmin@2026",

            10

        );

        await Admin.create({

            name: "Admin",

            email: "admin@medoc.com",

            password: hashedPassword

        });

        console.log("Admin created successfully");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit();

    }

};

createAdmin();