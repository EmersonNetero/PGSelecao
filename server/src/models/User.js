import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true,
            index: {
                unique: true,
            }
        },
        senha: {
            type: String,
            required: true,
        },
        adm: {
            type: Boolean,
            required: false,
        }
    },
    {
        timestamps: true
    }
);


export default mongoose.model('User', userSchema);