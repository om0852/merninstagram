import userConversationModel from "../modules/UserConversation.js";

const getUserConversation  =async (req,res)=>{
try{
    console.log(req.body)
const {Id} = req.body;
if(Id){
    const  result =  await userConversationModel.find({UsersDetail:{ $elemMatch: { $or: [{SenderId:Id}]} } });
    res.send(result);
}
else{
    res.send(null)
}
}
catch(error){
    res.send(error.message)
}

}
export default getUserConversation;