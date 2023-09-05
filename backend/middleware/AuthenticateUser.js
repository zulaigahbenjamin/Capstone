import jwt from 'jsonwebtoken';

const createToken = (user) => {
  return jwt.sign(
    {
      emailAddress: user.emailAddress,
      Pwd: user.Pwd
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '3h'
    }
  );
};

export default createToken;
