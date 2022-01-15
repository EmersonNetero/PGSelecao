import jwt from 'jsonwebtoken';

import User from '../models/User.js'
import { checkPassword } from '../services/auth.js'
import authConfig from '../config/auth.js'

class SessionController {
    async create(req, res) {
        const { usuario, senha } = req.body;

        const user = await User.findOne({ usuario });

        if(!user) {
            return res.status(401).json({error: "User / Password invalid. "})
        }

        if(!checkPassword(user, senha)) {
            return res.status(401).json({error: "User / Password invalid. "})
        }

        const { id } = user;
        return res.json({
            user: {
                id,
                usuario
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,

            })
        }

        )
    }
}


export default new SessionController();