import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.mock(/\/getUserInfo/, getUserInfo)

export default Mock