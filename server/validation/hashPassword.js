import bcrypt from 'bcrypt';

async function hashPassword (saltRounds,password) {

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
  }

  export default hashPassword