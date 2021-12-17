const {db} = require('../../connector');
const bcrypt = require('bcrypt');
const saltRounds = 10; 

const resolvers = { 
    Query: { 
        getAllUsers: async () => { 
            const collection = await db.collection('users'); 
            const data = await collection.find({}).toArray();
            return data 
        }, 
    }, 
    Mutation: { 
        addUser: async (parent, args) => { 
            const collection = db.collection('users') 
            await collection.createIndex({email: 1}, {unique: true}); 
            const hashedPassword = await genHash(args.hashedPassword, saltRounds); 
            const newUser = { 
                email: args.email, 
                phone: args.phone, 
                firstName: args.firstName, 
                lastName: args.lastName, 
                hashedPassword: hashedPassword,
            }
            await collection.insertOne(newUser); 
            const result = await collection.findOne({ email: args.email })
            console.log(result)
            return result
        }, 
        login: async (parent, args) => { 
            const collection = await db.collection('users');
            const checkUser = await collection.findOne({ email: args.email }); 
            if (!checkUser) { 
                throw new Error("Invalid Login");
            }

            const passwordMatch = await bcrypt.compare(args.password, checkUser.hashedPassword); 

            if (!passwordMatch) { 
                throw new Error("Wrong password"); 
            }

            return passwordMatch

        }
    }
}

async function genHash(plainText, saltRounds) { 
    return await bcrypt.genSalt(saltRounds)
        .then( async salt => { 
            return await bcrypt.hash(plainText, salt)
        })
}

module.exports = {resolvers}