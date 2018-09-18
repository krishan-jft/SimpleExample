module.exports = {

  addRecords : function(req , res ){
    if(req.method == 'POST'){
      let name = req.param('name');
      let empId = req.param('empId');
      let email = req.param('email');
      let password = req.param('password');
      let contact = req.param('contact');

      var employee = {
        name : name,
        empId : empId,
        email : email,
        password : password,
        contact : contact,
      };
      EmployeRecords.create(employee, function(err ){
        if(err) {
           throw err;
        }
        return res.ok();
      });
      res.view('../views/addRecord');
    }else{
      res.send('Hello wrong');
    }
  },

showRecord: function(req ,res){
  EmployeRecords.find().exec(function(err,result){
    if(err){
      return err;
    }
    let result1 = result;
      res.view('showRecords' , { data : result1});
     });
},

 updatedRecord : function (req , res) {
    console.log('upsdateRecord');

    let input = req.body;
    var employe = {
      name : input.name,
      empId : input.empId,
      email : input.email,
      password : input.password,
      contact : input.contact
    };
    console.log(employe)
 EmployeRecords.update({id : req.param('id')},employe).exec(function(err,updated){
   console.log(req.param);
   console.log(employe);
      if(err) {
  throw err;
}
   req.flash('message', 'One Record has Updated');
   res.redirect('/result');
 });
  // res.redirect('/result');
  },

  showOneRecord : function(req , res){

    EmployeRecords.find({id : req.param('id')}).exec(function(err , oneRow){
      console.log('Helooo');
      if(err){
        throw  err;
      }
      console.log('Okk Done');

      res.view('updateRecord' , { oneRow : oneRow});
    });
  },

  deleteRecord : function(req , res){
    EmployeRecords.destroy({id : req.param('id')}).exec(function (err) {
      if(err){
        throw err;
      }

      res.redirect('/result');
    });
  },
};
















