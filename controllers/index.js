var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	models:function(req,res){
		res.render('models');
	},
	products:function(req,res){
		res.render('products');
	},
	aggregate:function(req,res){
		res.render('aggregate');
	},
	washyEquip:function(req,res){
		res.render('washyEquip');
	},
	capital:function(req,res){
		res.render('capital');
	},
	screenersScrubbers:function(req,res){
		res.render('screenersScrubbers');
	},
	coreCrushers:function(req,res){
		res.render('core-crushers');
	},
	washyPlantsDewater:function(req,res){
		res.render('washyPlantsDewater');
	},
	bucketSystems:function(req,res) {
		res.render('BucketSystems');
	},
	contactUs: function(req,res){
		res.render('contactUs');
	},
	investors:function(req,res){
		res.render('investors');
	},
	about:function(req,res){
		res.render('about');
	},
	newsPage:function(req,res){
		res.render('newsPage');
	},
	financing:function(req,res){
		res.render('financing');
	}
};

module.exports = indexController;