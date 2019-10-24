var express = require('express');
var db = require('./../../models/db.js');
var router = express.Router();

router.get('/adminreg',function(req, res){
    res.render('admin/reg');
});

router.post('/adminreg',function(req, res){
    var sql = "insert into admin values('','admin','"+ req.body.name+"', '"+req.body.email+"','"+ req.body.username+"','"+ req.body.password+"')";
	db.execute(sql, function(status){

		if(status){
			res.redirect('/admin/adminreg');
		}else{
            // res.redirect('/emp/addemp');
            res.send('mistake');
		}
	});
});

router.get('/adminhome',function(req, res){
    res.render('admin/home');
});

router.get('/removeCustomer',(req, res)=>{
	var sql = "select * from customer";
	db.getResults(sql, function(results){
		if(req.cookies['username'] != null){
			res.render('admin/removeCustomer', {user: results});
		}else{
			res.redirect('admin/home');
		}
	});

        // res.render('admin/removeCustomer');
});


module.exports = router;

