module.exports = {
  tableName : 'employee',
  attributes: {
    empId : {
      type : 'string',
      required : true,
    },
    name : {
      type : 'string',
    },
    email : {
      type: 'email',
      required: true,
    },
    password :{
      type: 'string',
      required : true,
    },
    contact : {
      type : 'string',
    },
  }
};
