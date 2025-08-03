import express from 'express'
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from '../controllers/user.controller.js'
import { protecteRoute } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('./profile/:username',getUserProfile)

router.post('/sync',protecteRoute,syncUser)
router.post('/me',protecteRoute,getCurrentUser)
router.post('/follow/:targetUserId',protecteRoute,followUser)

router.put('./profile',protecteRoute,updateProfile)


export default router