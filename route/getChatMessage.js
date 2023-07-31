import ChatConversationModel from "../modules/ChatConversation.js"

const getChatMessage = async(req,res)=>{
    try{
        console.log(req.body)
        const {SenderId,ReceiverId} = req.body;
        const result  = await ChatConversationModel.findOne({members:{$all:[SenderId,ReceiverId]}});
        console.log(result);
        if(result){

            res.send(result);
    }
        else{
            res.send([])
        }
    }
    catch(error){
res.send(error)
    }
}
export default getChatMessage;