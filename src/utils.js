import {fileURLToPath} from 'url';
import {dirname} from 'path';
import bcrypt from 'bcrypt';
import passport from 'passport';
import nodemailer from 'nodemailer';
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

export default __dirname

export const hashPassword = (password) => bcrypt.hashSync(password,bcrypt.genSaltSync(10))
export const validatePassword = (password, hashPassword) =>bcrypt.compareSync(password, hashPassword)


export const passportCallError = (estrategia) =>{
    return function (req,res,next){
        passport.authenticate(estrategia,function(err,user,info,status){
            if(err) {return next(err)} 
            if(!user) { 
                res.setHeader('Content-type', 'application/json');
                return res.status(401).json({
                    error: info.message?info.message:info.toString()
                })
            } 
            req.user=user; 
            return next()
        })(req,res,next);
    }
}

export const uniqueTicketCode = (user)=>{

    const nameCode = user.first_name.slice(0,2).toUpperCase()
    const lastnameCode = user.last_name.slice(0,2).toUpperCase()
    const dateTimeCode = new Date().toISOString().replace(/[-:.TZ]/g, '')

    const uniqueCode = `${nameCode}${lastnameCode}${dateTimeCode}`

    return uniqueCode
}

const transporter=nodemailer.createTransport(
    {
        service:"gmail",
        port:"587", 
        auth:{
            user: config.GMAIL_EMAIL, 
            pass: config.GMAIL_PASS
        }
    }
)

export const sendEmail=async(de,para,asunto,mensaje)=>{
    return await transporter.sendMail(
        {
            from:de,
            to:para,
            subject:asunto,
            html:mensaje,
        }
    )
}

//future development
// export const ROLES = Object.freeze({
//     admin: 'admin',
//     user: 'user',
//     premium: 'premium_user',
//     public: 'public'
// });
