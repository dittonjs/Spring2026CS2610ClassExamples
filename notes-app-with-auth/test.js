import bcrypt from 'bcrypt';
// import cypto from 'crypto';

const password = "password123";

const hash = await bcrypt.hash(password, 15);

console.log(`Hash: ${hash}`);


console.log(await bcrypt.compare("password12", hash));

// let hash = cypto.createHash('sha256').update(password + salt).digest('hex');

// for (let i = 0; i < 1000000; i++) {
//   hash = cypto.createHash('sha256').update(hash).digest('hex');
// }
// console.log(`Hash: ${hash}`);
