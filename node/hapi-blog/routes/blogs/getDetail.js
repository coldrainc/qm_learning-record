module.exports = (DETAIL) => ({
  method: 'GET',
  path:`/${DETAIL}`,
  handler: (request, response) => {
    response('test');
  },
  config: {
    tags: ['api', 'getDetail'],
    description: '获取详情'
  }
})