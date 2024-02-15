import  i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n.use(initReactI18next).init({
    resources :{
        en :{
            translation :{
                welcome:"welcome to my app",
                sub_title:"this is really good i love this app",
                Header:"About Us",
                words:"Hello there! We're here to help"

            }
        },
        Ki : {
            translation :{
                welcome:"ikaze kuri porogaramu yanjye",
                sub_title:"ibi nibyiza rwose nkunda iyi porogaramu",
                Header:"Ibyerekeye Twebwe",
                words:"Mwaramutse hano! Turi hano kugirango dufashe"
            }
        },
        fr :{
            translation :{
                welcome:"bienvenue sur mon application",
                sub_title:"c'est vraiment bien j'adore cette application",
                Header:"À propos de nous",
                words:"Bonjour! Nous sommes là pour vous aider"
            }
        }
    },
    lng : 'en',
})