import userConversationModel from "../modules/UserConversation.js";

const setUserConversation  =async (req,res)=>{
try{
    console.log(req.body)
    const {SenderId,ReceiverId,ProfilePhoto,RProfilePhoto,RUserName,UserName} = req.body;
const  result1 =  await userConversationModel.findOne({UsersDetail:{ $elemMatch: { $or: [{SenderId,ReceiverId}]} } });

if(result1===null){
    const  result =  await userConversationModel({UsersDetail:{SenderId:SenderId,ProfilePhoto,UserName,ReceiverId:ReceiverId,RProfilePhoto,RUserName}})
    result.save();
    res.status(200).send(result);
}
else{
    res.status(200).send("om")
}
}
catch(error){
    console.log(error.message)
    res.status(200).send(error.message)
}

}
export default setUserConversation;