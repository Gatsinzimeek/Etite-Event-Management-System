import userModel from "../Models/User.js";
import { hashPassword,comparePassword } from "../Helper/AuthHelper.js";
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
        }else{
            res.json('sucessfully')
        }
        
    }
    catch(error){

    }
}