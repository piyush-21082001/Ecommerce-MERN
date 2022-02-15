import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  // in jwt sign we pass a payload for identification and a secret key for signature verification and lastly any other options
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateToken
