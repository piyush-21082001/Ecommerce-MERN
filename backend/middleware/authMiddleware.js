import jwt from 'jsonwebtoken'
import asynHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asynHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
    } catch (error) {
      res.status(401)
      throw new Error('Not Authorized, token failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not Authorized, no token')
  }
  next()
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not Authorized as Admin')
  }
}

export { protect, admin }
