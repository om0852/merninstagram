import LoginModel from "../modules/LoginModel.js";
const getAllUser = async(req,res)=>{
try{
const data  = await LoginModel.find();
res.status(200).send(data);

}catch(error){
    console.log(error.message)
res.status(200).send(error.message)
}

}

export default getAllUser