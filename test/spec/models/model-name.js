(function() {
	'use strict';

	var root = this;

	root.define([
		'models/model-name'
		],
		function( ModelName ) {

			describe('ModelName Model', function () {

				it('should be an instance of ModelName Model', function () {
					var model-name = new ModelName();
					expect( model-name ).to.be.an.instanceof( ModelName );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );