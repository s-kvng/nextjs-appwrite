import conf from '../conf/config';
import { Client , Account , ID} from 'appwrite';

type createUserAccount = {
    email: string,
    password: string,
    name: string
}

type loginUserAccount = {
    email: string,
    password: string
}

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

export const account = new Account(appwriteClient)

export class AppwriteService {
    //create a new record od user inside appwrite
    async createUserAccount({ email , password , name }: createUserAccount) {
        try {
           const userAccount = await account.create(ID.unique(), email , password , name);
           if (userAccount) {
            return this.login({ email, password});
           }
           else{
            return userAccount;
           }
        } catch (error: any) {
            throw new Error(error);
        }
    }


    async login({email, password} : loginUserAccount) {
        // login the user on appwrite
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async loggedIn(): Promise<boolean>{
        try {
                const data = await this.getCurrentUser();
                return Boolean(data);
        } catch (error) {
            
        }
        return false
    }

    async getCurrentUser(){
        try {
            return account.get()
        } catch (error) {
            console.log("getCurrentUser error -> ",error);
        }
        return null;
    }

    async logout(){
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.log("logout error -> ",error)
        }
    }
}

const appwriteService = new AppwriteService()
export default appwriteService