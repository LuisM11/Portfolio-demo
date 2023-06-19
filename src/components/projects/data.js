import ryd from '../../assets/ryd.png';
import portfolio from '../../assets/portfolio.png';
import notesapp from '../../assets/notesapp.png';
import springboot from './img/spring-boot.jpg'
import react from './img/react.jpg'
import gimp from './img/gimp.jpg'
import javascript from './img/javascript.jpg';
import java from './img/java.jpg'
import reactrouter from './img/react-router.jpg'
import tanstackquery from './img/tanstackquery.jpg'
import axios from './img/axios.jpg'
import reactHookForm from './img/react-hook-form.jpg'
import antd from './img/antd.jpg'
import headless from './img/headlessui.jpg'
import tailwind from './img/tailwind.jpg'
import hibernate from './img/hibernate.jpg'
import mysql from './img/mysql.jpg'
import postgres from './img/postgres.jpg'
import jwt from './img/jwt.jpg'
import ec2 from './img/ec2.jpg'
import rds from './img/rds.jpg'
import s3 from './img/s3.jpg'
import vpc from './img/vpc.jpg'

export default [
    {
        id: 1,
        es: {
            title: 'Reservas de Alojamientos',
            description: 'Relájese y disfrute es una web app donde podras filtrar alojamientos segun su tipo y localidad, luego de registrarte  podrás reservar el alojamiento teniendo en cuenta la disponibilidad del mismo. Además, el usuario admin podra agregar nuevos alojamientos con todas sus características incluyendo imágenes.',
            tags: ['MVC','Scrum','Testing','Gitflow','REST'],
            
        },
        en: {
            title: 'Housing Booking',
            description: 'Relax and enjoy is a web app where you can filter accommodations according to their type and location, after registering you can book the accommodation taking into account its availability. In addition, the admin user will be able to add new accommodations with all their characteristics including images.',
            tags: ['MVC','Scrum','Testing','Gitflow','REST'],
            
        },
        technologies: [{src:java, name:'Java'}, {src:springboot,name:'Spring boot'}, {src:hibernate,name:'Hibernate'},{src:mysql,name:'MySQL'},{src:jwt,name:'JWT'}, {src:ec2,name:'AWS EC2'}, {src:rds,name:'AWS RDS'}, {src:s3,name:'AWS S3'},{src:vpc,name:'AWS VPC'} ,{src:react,name:'React'},{src:tailwind,name:'Tailwind'},{src:reactrouter,name:'React Router'}, {src:reactHookForm,name:'Hook Form'}, {src:antd,name:'Ant Design'},   ],
        type: 'Fullstack',
        inProgress: false,
        bgColor:'bg-[#edbd3f]',
        img: ryd,
        url: 'http://relaxandenjoy-booking.s3-website.us-east-2.amazonaws.com/Home',
        repo: 'https://github.com/LuisM11/Housing-Booking-RelaxAndEnjoy'
    },
    {
        id: 2,
        es: {
            title: 'Portafolio',
            description: 'Mi portafolio personal, un sitio web totalmente adaptable a todo tipo de dispositivos, donde podrás encontrar detalles sobre mí, mis estudios, mis proyectos, mis habilidades y mi información de contacto. Este sitio web fue creado con el framework ReactJs y apoyado de varias librerías para efectos visuales y animaciones. Será desplegado en AWS con un dominio personalizado, utilizando S3, CloudFront y Route53. ',
            tags: ['React','AWS','Context API','SSL'],
            button: "Ya estas aquí!"
        },
        en: {
            title: 'Portfolio',
            description: 'My personal portfolio, a website fully adaptable to all types of screens devices, where you can find details about me, my studies, my projects, my skills and my contact information. This website was created with the ReactJs framework and supported by several libraries for visual effects and animations. It will be deployed on AWS with a custom domain, using S3, CloudFront and Route53.',
            tags: ['React','AWS','Context API','SSL'],
            button: "You're here!"
        },
        technologies: [{src:javascript, name:'Java\u00ADscript'} ,{src:react,name:'React'}, {src:tailwind,name:'Tailwind'}, {src:reactHookForm, name:'Hook Form'},{src:headless,name:'Headless UI'}, {src:s3,name:'AWS S3'}, {src:gimp,name:'Gimp'}],
        type: 'Frontend',
        inProgress: true,
        bgColor:'bg-tertiary',
        img: portfolio,
        url: null,
        repo:'https://github.com/LuisM11/portfolio'
    },
    {
        id: 3,
        es: {
            title: 'NotesApp',
            description: 'Una aplicación web para tomar notas, donde podrás crear, editar y eliminar notas. Actualmente en desarrollo, se agregarán varias funcionalidades entre ellas un login para  que cada usuario pueda gestionar sus propias notas.',
            tags: ['Springboot','REST API','React','TanstackQuery', ]
        },
        en: {
            title: 'NotesApp',
            description: 'A web application for taking notes, where you can create, edit and delete notes. Currently in development, some functionalities will be added including a login so that each user can manage their own notes',
            tags: ['Springboot','REST API','React','TanstackQuery', ]
        },
        technologies: [{src:java, name:'Java'},{src:springboot, name:'Spring boot'}, {src:hibernate,name:'Hibernate'},{src:postgres,name:'Postgres'},{src:react,name:'React'},{src:tanstackquery,name:'Tanstack Query'},{src:axios, name:'Axios'} ,{src:reactrouter,name:'React Router'}, {src:tailwind,name:'Tailwind'}, {src:antd,name:'Ant Design'}],
        type: 'Fullstack',
        inProgress: true,
        bgColor:'bg-[#374859]',
        img: notesapp,
        url: 'https://notesapp-marinb11.netlify.app',
        repo:'https://github.com/LuisM11/NotesappFront'
    },

]

export const languageData = {
    es: {
        title:'Proyectos',
        card:{title:'¡Dale un vistazo a mi GitHub!',button:'Perfil de GitHub',message:"Allí encontrarás otros proyectos más pequeños y en especial de backend como"}},
    en: {
        title:'Projects',
        card:{title:'Check out my GitHub!',button:'GitHub Profile',message:"There you will find other smaller projects and especially backend like"
        }
    }
}


