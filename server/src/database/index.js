import mongoose from 'mongoose';

import config from '../config/database.js';


class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {   
                maxPoolSize: 50,
                wtimeoutMS: 2500,
                useNewUrlParser: true
            }
            )
        }
}


export default new Database();