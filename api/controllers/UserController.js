/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function(req,res){
    let firstName = req.param('firstName'),
        lastName = req.param('lastName'),
        age = req.param('age');

    if(!firstName){
      return res.badRequest({error:'Nombre invalido!'});
    }

    return res.ok({firstName:firstName,lastName:lastName,age:age});
  }
};

