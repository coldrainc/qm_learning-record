const GROUP_NAME = 'blogs'
const DETAIL = 'detail'
const Joi = require('joi')
const getList = require('./getList');
const getDetail = require('./getDetail');
const { paginationDefine } = require('../../utils/router-helper')
const models = require('../../models')

module.exports = [
  getList(GROUP_NAME, { paginationDefine, models }),
  getDetail(DETAIL)
]