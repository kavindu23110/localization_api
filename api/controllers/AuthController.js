/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {



register:function(req,res){
var values = req.allParams();

var user={
username:values.username,password:values.password
};
Auth.create(user).exec(function(err,result){
 if (err) {
   sails.log.debug("Some error occured " + err);
   return res.json(500, { error: "Some error occured" });
 }
 sails.log.debug("Success", JSON.stringify(result));
 return res.json(200, { success: req.allParams() });

});


}}


