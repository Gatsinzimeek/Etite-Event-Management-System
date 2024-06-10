import userModel from "../Models/User.js";
import { hashPassword,comparePassword } from "../Helper/AuthHelper.js";
import jwt from 'jsonwebtoken'
export const test = (req, res) => {
    res.send('mine');
}

// Register Endpoint

export const RegisterUser = async (req,res) => {
    try{
        const {username, password, C_pin} = req.body;
        // check if all field are required was entered
        
        if(!username || !password || !C_pin){
            return res.json({
                error: 'Fill All fields is require'
            })
        }
        // check if pin and confirmpin are equal if not send message to user
        if(password !== C_pin){
            return res.json({
                error: 'Please password must be same password'
            })
        }
        // check if pin enter are long enough

        if(password.length < 6){
            return res.json({
                error: 'password should be at least 6 characters long'
            })
        }
        // check if username is in database notify user
        const exitCredential = await userModel.findOne({username})
        if(exitCredential) {
            return res.json({
               error: 'Username is Already taken'
            })
       }
       const hashedPassword = await hashPassword(password);
       const user = await userModel.create({
        username, 
        password: hashedPassword,
       })
       return res.json(user)
    }catch (error){
        console.log(error);
        console.log('eroo')
    }
}

//Login Endpoint 

export const LoginUser = async (req,res) => {
    try{
        const {username, password} = req.body;

        if(!username || !password){
            return res.json({
                error: 'Fill All fields is require'
            })
        }
        // checking if user is in our database if not diplay message
        const user = await userModel.findOne({username});
        if(!user) {
            return res.json({
               error: 'No Username FOUND'
            })
       }

       // Checking if User's password match with one had in database
       const MatchPassword = await comparePassword(password, user.password);
       if(!MatchPassword) {
            return res.json({
            error: 'Password Does not match'
            })
        }
        if(MatchPassword){
            const token = jwt.sign({username: user.username},process.env.JWT_SECRET, {expiresIn: '1h'})
            res.cookie('token', token,{httpOnly: true, maxAge: 360000})
            
            return res.json({message: 'successfully', token});
        }
        
    }catch(error){
        console.log(error)
    }
}

//This Help function for gettin User Profile 

export const getProfile = (req,res) => {
    const token = req.cookies.token;
    
    if(token) {
        jwt.verify(token,process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
           return res.json(user)
        })
    }else{
        res.json('there is no any token write there');
    }
}

export const UpdatedUser = (req,res) => {
    res.send('Update User')
}

export const LogoutUser = (req,res) => {
    const token = req.cookies.token

    if(token){
        try{
            res.cookie('token','', {
                httpOnly: true,
                expiresIn: new Date(0),
            })
            res.json({
                message: 'User Logged Out Successful'}) 
        }catch(error){

        }
    }else{
        res.json({
            message: 'Token not found'
        })
    }
    
}