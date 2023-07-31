import mongoose from 'mongoose';

const UserConversationSchema = new mongoose.Schema({
    UsersDetail:{
    type:[Object],
},

})
const userConversationModel = mongoose.model("userconversation",UserConversationSchema)
export default userConversationModel;