import logo from './logo.png'
import logo_two from './logo_two.png'
import logo_three from './logo_three.png'
import hero from './hero.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import about_img from './about_img.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import profile_pic from './profile_pic.png'

import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'



import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'



export const assets ={
    logo,logo_two,logo_three,
    hero,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    verified_icon,
    info_icon,
    about_img,
    profile_pic,

}

export  const menu_list = [
    {
        menu_name:"Aspirin",
        menu_image:menu_1
    },
    {
        menu_name:"Cetrizine",
        menu_image:menu_2
    },
    {
        menu_name:"Crocin",
        menu_image:menu_3
    },
    {
        menu_name:"Digine",
        menu_image:menu_4
    },
    {
        menu_name:"Disprin",
        menu_image:menu_5
    },
    {
        menu_name:"Ibuprofen",
        menu_image:menu_6
    },
    {
        menu_name:"Paracetamol",
        menu_image:menu_7
    },
    {
        menu_name:"Sinarest",
        menu_image:menu_8
    },

]

export const specialityData =[
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors =[
    {
        _id: 'doc1',
        name: 'Dr.Anup Shukla',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anup Shukla is a dedicated general physician with 4 years of experience in providing comprehensive and patient-centered healthcare. He focuses on accurate diagnosis, preventive care, and effective treatment plans. Known for his compassionate approach, he ensures patients feel comfortable and well-informed throughout their medical journey.',
        fees: 300,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Delhi'
        }
    },
    {
    _id: 'doc2',
    name: 'Dr. Riya Malhotra',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD (Gynecology)',
    experience: '6 Years',
    about: 'Dr. Riya provides expert care in women’s health, pregnancy, and reproductive wellness.',
    fees: 500,
    address:{
        line1: 'Dwarka Sector 10',
        line2: 'New Delhi, India'
    }
},
    {
    _id: 'doc3',
    name: 'Dr. Rajesh Verma',
    image: doc3,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '8 Years',
    about: 'Dr. Rajesh focuses on providing holistic treatment and preventive healthcare solutions.',
    fees: 400,
    address:{
        line1: '12th Main Road, Indiranagar',
        line2: 'Bangalore, Karnataka'
    }
},
{
    _id: 'doc4',
    name: 'Dr. Amit Sharma',
    image: doc4,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '6 Years',
    about: 'Dr. Amit specializes in skin care treatments, acne solutions, and cosmetic dermatology.',
    fees: 500,
    address:{
        line1: 'Sector 18',
        line2: 'Noida, Uttar Pradesh'
    }
},
{
    _id: 'doc5',
    name: 'Dr. Neha Kapoor',
    image: doc5,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD (Gynecology)',
    experience: '9 Years',
    about: 'Dr. Neha specializes in women’s health, pregnancy care, and reproductive treatments.',
    fees: 600,
    address:{
        line1: 'Lajpat Nagar',
        line2: 'New Delhi, India'
    }
},
{
    _id: 'doc6',
    name: 'Dr. Rohit Mehta',
    image: doc6,
    speciality: 'Pediatricians',
    degree: 'MBBS, DCH',
    experience: '10 Years',
    about: 'Dr. Rohit is dedicated to child healthcare, vaccinations, and growth monitoring.',
    fees: 350,
    address:{
        line1: 'MG Road',
        line2: 'Pune, Maharashtra'
    }
},
{
    _id: 'doc7',
    name: 'Dr. Karan Malhotra',
    image: doc7,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '12 Years',
    about: 'Dr. Karan treats neurological disorders like migraines, epilepsy, and stroke care.',
    fees: 700,
    address:{
        line1: 'Connaught Place',
        line2: 'New Delhi, India'
    }
},
{
    _id: 'doc8',
    name: 'Dr. Sandeep Nair',
    image: doc8,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD, DM (Gastro)',
    experience: '9 Years',
    about: 'Dr. Sandeep specializes in digestive system disorders and endoscopic procedures.',
    fees: 650,
    address:{
        line1: 'Marine Drive',
        line2: 'Mumbai, Maharashtra'
    }
},
{
    _id: 'doc9',
    name: 'Dr. Pooja Singh',
    image: doc9,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'Dr. Pooja focuses on primary healthcare and preventive medicine for all age groups.',
    fees: 300,
    address:{
        line1: 'Hazratganj',
        line2: 'Lucknow, Uttar Pradesh'
    }
},
{
    _id: 'doc10',
    name: 'Dr. Vivek Gupta',
    image: doc10,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '7 Years',
    about: 'Dr. Vivek provides complete primary healthcare with focus on accurate diagnosis and prevention.',
    fees: 350,
    address:{
        line1: 'Rajendra Nagar',
        line2: 'Bhopal, Madhya Pradesh'
    }
},
{
    _id: 'doc11',
    name: 'Dr. Anjali Mehra',
    image: doc11,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '7 Years',
    about: 'Dr. Anjali is experienced in treating skin, hair, and cosmetic concerns.',
    fees: 550,
    address:{
        line1: 'Sector 22',
        line2: 'Chandigarh, India'
    }
},
{
    _id: 'doc12',
    name: 'Dr. Arjun Patel',
    image: doc12,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '6 Years',
    about: 'Dr. Arjun specializes in treating skin disorders, acne, and hair-related problems.',
    fees: 500,
    address:{
        line1: 'Satellite Road',
        line2: 'Ahmedabad, Gujarat'
    }
},
{
    _id: 'doc13',
    name: 'Dr. Sneha Iyer',
    image: doc13,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '8 Years',
    about: 'Dr. Sneha provides expert care for children, including vaccinations and nutrition guidance.',
    fees: 400,
    address:{
        line1: 'Anna Nagar',
        line2: 'Chennai, Tamil Nadu'
    }
},
{
    _id: 'doc14',
    name: 'Dr. Nikhil Joshi',
    image: doc14,
    speciality: 'Pediatricians',
    degree: 'MBBS, DCH',
    experience: '9 Years',
    about: 'Dr. Nikhil is dedicated to child health, growth monitoring, and vaccination programs.',
    fees: 400,
    address:{
        line1: 'Civil Lines',
        line2: 'Nagpur, Maharashtra'
    }
},
{
    _id: 'doc15',
    name: 'Dr. Kavita Deshmukh',
    image: doc15,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '11 Years',
    about: 'Dr. Kavita treats neurological disorders such as migraines, epilepsy, and nerve-related issues.',
    fees: 700,
    address:{
        line1: 'FC Road',
        line2: 'Pune, Maharashtra'
    }
}
]