import mongoose, { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    studentNumber: String,
}); 

export default mongoose.models.User || model('User', UserSchema);