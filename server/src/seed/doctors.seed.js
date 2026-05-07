const mongoose = require("mongoose");
const Doctor = require("../models/doctor.model");
const bcrypt = require("bcrypt");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const seedDoctors = async () => {

  try {

    const hashedPassword = await bcrypt.hash("doctor123", 10);

    const doctors = [

      {
        name: 'Dr.Anup Shukla',
        email: 'doctor1@gmail.com',
        password: hashedPassword,
        image: 'doc1.png',
        specialization: 'General Physician',
        degree: 'MBBS',
        experience: 4,
        about: 'Dr. Anup Shukla is a dedicated general physician.',
        fees: 300,
        address:{
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, Delhi'
        }
      },

      {
        name: 'Dr. Riya Malhotra',
        email: 'doctor2@gmail.com',
        password: hashedPassword,
        image: 'doc2.png',
        specialization: 'Gynecologist',
        degree: 'MBBS, MD (Gynecology)',
        experience: 6,
        about: 'Expert women healthcare specialist.',
        fees: 500,
        address:{
          line1: 'Dwarka Sector 10',
          line2: 'New Delhi, India'
        }
      },

      {
        name: 'Dr. Rajesh Verma',
        email: 'doctor3@gmail.com',
        password: hashedPassword,
        image: 'doc3.png',
        specialization: 'General Physician',
        degree: 'MBBS, MD',
        experience: 8,
        about: 'Holistic treatment specialist.',
        fees: 400,
        address:{
          line1: '12th Main Road, Indiranagar',
          line2: 'Bangalore, Karnataka'
        }
      },

      {
        name: 'Dr. Amit Sharma',
        email: 'doctor4@gmail.com',
        password: hashedPassword,
        image: 'doc4.png',
        specialization: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: 6,
        about: 'Advanced skincare specialist.',
        fees: 500,
        address:{
          line1: 'Sector 18',
          line2: 'Noida, Uttar Pradesh'
        }
      },

      {
        name: 'Dr. Neha Kapoor',
        email: 'doctor5@gmail.com',
        password: hashedPassword,
        image: 'doc5.png',
        specialization: 'Gynecologist',
        degree: 'MBBS, MD (Gynecology)',
        experience: 9,
        about: 'Pregnancy and reproductive care specialist.',
        fees: 600,
        address:{
          line1: 'Lajpat Nagar',
          line2: 'New Delhi, India'
        }
      },

      {
        name: 'Dr. Rohit Mehta',
        email: 'doctor6@gmail.com',
        password: hashedPassword,
        image: 'doc6.png',
        specialization: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: 10,
        about: 'Comprehensive child healthcare expert.',
        fees: 350,
        address:{
          line1: 'MG Road',
          line2: 'Pune, Maharashtra'
        }
      },

      {
        name: 'Dr. Karan Malhotra',
        email: 'doctor7@gmail.com',
        password: hashedPassword,
        image: 'doc7.png',
        specialization: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: 12,
        about: 'Neurological disorder specialist.',
        fees: 700,
        address:{
          line1: 'Connaught Place',
          line2: 'New Delhi, India'
        }
      },

      {
        name: 'Dr. Sandeep Nair',
        email: 'doctor8@gmail.com',
        password: hashedPassword,
        image: 'doc8.png',
        specialization: 'Gastroenterologist',
        degree: 'MBBS, MD, DM (Gastro)',
        experience: 9,
        about: 'Digestive system specialist.',
        fees: 650,
        address:{
          line1: 'Marine Drive',
          line2: 'Mumbai, Maharashtra'
        }
      },

      {
        name: 'Dr. Pooja Singh',
        email: 'doctor9@gmail.com',
        password: hashedPassword,
        image: 'doc9.png',
        specialization: 'General Physician',
        degree: 'MBBS',
        experience: 5,
        about: 'Primary healthcare specialist.',
        fees: 300,
        address:{
          line1: 'Hazratganj',
          line2: 'Lucknow, Uttar Pradesh'
        }
      },

      {
        name: 'Dr. Vivek Gupta',
        email: 'doctor10@gmail.com',
        password: hashedPassword,
        image: 'doc10.png',
        specialization: 'General Physician',
        degree: 'MBBS, MD',
        experience: 7,
        about: 'Preventive healthcare specialist.',
        fees: 350,
        address:{
          line1: 'Rajendra Nagar',
          line2: 'Bhopal, Madhya Pradesh'
        }
      },

      {
        name: 'Dr. Kamini Mehra',
        email: 'doctor11@gmail.com',
        password: hashedPassword,
        image: 'doc11.png',
        specialization: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: 7,
        about: 'Skin and hair treatment specialist.',
        fees: 550,
        address:{
          line1: 'Sector 22',
          line2: 'Chandigarh, India'
        }
      },

      {
        name: 'Dr. Arjun Patel',
        email: 'doctor12@gmail.com',
        password: hashedPassword,
        image: 'doc12.png',
        specialization: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: 6,
        about: 'Skin disorder and hair specialist.',
        fees: 500,
        address:{
          line1: 'Satellite Road',
          line2: 'Ahmedabad, Gujarat'
        }
      },

      {
        name: 'Dr. Sneha Iyer',
        email: 'doctor13@gmail.com',
        password: hashedPassword,
        image: 'doc13.png',
        specialization: 'Pediatricians',
        degree: 'MBBS, MD (Pediatrics)',
        experience: 8,
        about: 'Expert pediatric healthcare provider.',
        fees: 400,
        address:{
          line1: 'Anna Nagar',
          line2: 'Chennai, Tamil Nadu'
        }
      },

      {
        name: 'Dr. Nikhil Joshi',
        email: 'doctor14@gmail.com',
        password: hashedPassword,
        image: 'doc14.png',
        specialization: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: 9,
        about: 'Growth monitoring and vaccination expert.',
        fees: 400,
        address:{
          line1: 'Civil Lines',
          line2: 'Nagpur, Maharashtra'
        }
      },

      {
        name: 'Dr. Kavita Deshmukh',
        email: 'doctor15@gmail.com',
        password: hashedPassword,
        image: 'doc15.png',
        specialization: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: 11,
        about: 'Neurology and nerve disorder specialist.',
        fees: 700,
        address:{
          line1: 'FC Road',
          line2: 'Pune, Maharashtra'
        }
      }

    ];

    await Doctor.deleteMany();

    await Doctor.insertMany(doctors);

    console.log("Doctors Seeded Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedDoctors();