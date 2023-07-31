import ChatConversationModel from "../modules/ChatConversation.js";

const setChatConversation = async(req,res)=>{
try{
    console.log(req.body)
    const {SenderId,ReceiverId,id,Message} = req.body;

    const result1  = await ChatConversationModel.findOne({members:{$all:[SenderId,ReceiverId]}});
    console.log(result1)
    
if(result1){
    result1.Message.push({id,Message})
    const result  = await ChatConversationModel.updateOne({_id:result1._id},{Message:result1.Message})
    console.log(result)
    res.send("done")
}

else{

    const result = ChatConversationModel({
      members:[SenderId,ReceiverId],Message:[Message]
    })
    console.log("done");
    result.save();
    res.send("done")
}
}
catch(error){
    console.log(error.message)
res.send(error.message)
}
}
export default setChatConversation;