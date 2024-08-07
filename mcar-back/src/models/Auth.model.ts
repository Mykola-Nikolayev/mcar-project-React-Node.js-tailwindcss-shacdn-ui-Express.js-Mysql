import {db}  from "../../config/db"

import  {hash, compare} from "bcrypt";

export interface AuthInterface {
    email:     string;
    username : string;
    password : string;
}


export class AuthModel {
    static async findById(userId: number | string ){
        const [user] : any = await db.promise().query(
            ` SELECT  * FROM users WHERE id= ?`,
            [userId]
        )
        if(!user.affectedRows){
            return null;
        }
        return user[0];
    }

    static async findByEmail(email: string) {
        const [user] : any = await db.promise().query(`
            SELECT * FROM users where email=?`,
            [email]
        )
        return user[0];
    }

    static async create(data : AuthInterface) {
        const {email , password , username} = data;
        const salt = 10;
        const hashedPassword = await hash(password,salt);
        const [insertResult] : any = await db.promise().query(`
                INSERT INTO users (email, password, username) values (?,?,?)
            
        `,  [email ,hashedPassword ,username])
        const newUserId = insertResult?.insertId || 1 ;
        return AuthModel.findById(newUserId);
    }

    static async findEmailAndPassword(email: string, password : string ){
        const user = await AuthModel.findByEmail(email);
        if(!user){
            return null;
        }
        const isPasswordMatches = await compare(password, user.password);
        if(!isPasswordMatches) {
            return null;
        }
        return user;
    }

}






