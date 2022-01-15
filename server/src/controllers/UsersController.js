import User from '../models/User.js';

import { createPasswordHash } from "../services/auth.js"

class UserController {
    async index(req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch(err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if(!user) {
                return res.status(404).json();
            }

            return res.json(user)
        } catch (err) {
            console.error(err)
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async create(req, res) {
        try {
            const {usuario, senha} = req.body;

            const users = await User.findOne({usuario});

            if (users) {
                return res.status(422).json({ message: `User ${usuario} already exists.` })
            }
            // criptografia da senha.
            const encryptedPassword = await createPasswordHash(senha);
            const newUser = await User.create({ usuario, senha: encryptedPassword})

            return res.status(201).json(newUser)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async destroy(req, res) {
        try {
           const { id } = req.params;
           const user = await User.findById(id);
           
           if(!user) {
               return res.status(404).json();
           }
           await user.deleteOne();
           return res.status(200).json();
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}


export default new UserController();