'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users',{
      id: {type: INTEGER, primaryKey: true, autoIncrement: true},//记录id
      userId: {type: INTEGER},//用户id
      username: {type: STRING(255), allowNull: false}, // 用户名
      email: {type: STRING(255), allowNull: false},// email 地址
      password: {type: STRING(255), allowNull: false},// 密码  
      avatarUrl: {type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg'},// 头像
      mobile: STRING(32),// 手机号,
      prefix: STRING(32),// 手机号,
      abstract:  {type: STRING(255), allowNull: true},// 自我介绍
      sex: {type: STRING(2), defaultValue: '男'}, // 值为1时是男性，值为2时是女性，默认值为0时是未知
      created_at: {type: DATE, defaultValue: NOW},// 创建时间
      updated_at: {type: DATE, defaultValue: NOW}// 更新时间
    }, {
      freezeTableName: true // 不自动将表名添加复数
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
