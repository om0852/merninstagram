import mongoose from 'mongoose';

const ChatConversationSchema  =  new mongoose.Schema({
    members:{
        type:[String]
    },
    Message:{
        type:[Object]
    }
})
const ChatConversationModel = mongoose.model("chatconversation",ChatConversationSchema)
export default ChatConversationModel;