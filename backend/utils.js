import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,   // the object we use to generate the jwt
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    //   isSeller: user.isSeller,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',   // options
    }
  );
};
