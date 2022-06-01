function checkdate(){
	if(document.getElementById('changedate').checked){
		document.getElementById('datechange').value = 'Do not Allow Factory to Change Date';
	}else{
		document.getElementById('datechange').value = 'Allow factory to Change date';
	}
}

$(document).ready(function() {
	$('#page1').show();
	$('#page2').hide();
	$('#page3').hide();
	$('#page4').hide();
	$('#page5').hide();
	$('#white_bg').hide();
	$('#background').hide();
	$('#bgw').hide();
	$('#bgb').hide();
	$('#aql_bgw').hide();
	$('#aql_bgb').hide();
	$('#secondary_form').hide();
	$('#other_details').hide();


	$('#qty').on('click',function(){
		$('#aql_bgw').show(500);
		$('#aql_bgb').show(500);

	});

	$('#Inspection_Service').on('change',function(){
		var services = $(this).val();
		if (services == "Container Loading Inspection (CLI)") {
			$('#main_form').hide();
			$('#secondary_form').show();
			$('#sInspection_Service').val(services);
		}
	});
		$( "#Inspection_Date" ).datepicker({
			minDate: 1,
			numberOfMonths: 2,
			onSelect : function(selectedDate) {
			$("#Shipment_Date").prop('disabled', false);
			var serv = $('#Inspection_Service').val();
			var minutes = 1000*60;
			var hours = minutes*60;
			var days = hours*24;
			var ins = $("#today").val();
			var ship = $("#Inspection_Date").val();
			var foo_date1 = getDateFromFormat(ins, "M/d/y");
			var foo_date2 = getDateFromFormat(ship, "M/d/y");
			var diff_date = Math.round((foo_date2 - foo_date1)/days);
			if(diff_date == 1){
					alert("You are requesting a Service within 24 hours and our minimun time availability is 48 hours, but we'll do our best to perform this service. However, we may charge you additional fees for immediate inspection.");
			}
			$("#Shipment_Date").datepicker("option","minDate",selectedDate);
			}
		});

		$( "#Shipment_Date" ).datepicker({
			numberOfMonths: 2,
			onSelect : function(selectedDate) {
			$( "#Inspection_Date" ).datepicker("option","maxDate",selectedDate);
			}
			});
			
		$('#cancel_hidden').hide();
		$('#save_hidden').hide();

	$('#next1').on('click',function(){
        var ref = $('#Reference_Number').val()
        var srve = $('#Inspection_Service').val()
        var ins = $('#Inspection_Date').val()
        var sh = $('#Shipment_Date').val()

        	if(srve == ""){
				//alert('Select Inspection Service');
				$('#valid_ins_service').show();
				$('#valid_ins_service').html('Please select inspection service');
            }
			else if(ref == ""){
				$('#valid_ins_service').hide();
				$('#valid_ref_number').show();
				$('#valid_ref_number').html('Please enter reference number field is empty');
        	}
			else if(ins == ""){
				$('#valid_ins_service').hide();
				$('#valid_ref_number').hide();
				$('#valid_ins_date').show();
				$('#valid_ins_date').html('Please pick an inspection date');
            }else if(sh == ""){
				$('#valid_ins_service').hide();
				$('#valid_ref_number').hide();
				$('#valid_ins_date').hide();
				$('#valid_ship_date').show();
				$('#valid_ship_date').html('Please pick a shipment date');
			}else{
            	$('#page1').hide();
            	$('#page2').show(500);
            	$('#step1').css("color","#8d8d8d");
            	$('#legend1').css("color","#8d8d8d");
            	$('#step2').css("color","#f71d3a");
            	$('#legend2').css("color","#f71d3a");
            	$('#conf_service').val(srve);
				$('#conf_insdate').val(ins);
            }   
	});

var count = 0;
$( "#Inspection_Date" ).on('click',function(){
		if (count == 0) {
			alert('Please take note that the price for inspections during Sundays and Holidays are doubled');
			count = count + 1;
		}else{
			return false;
		}
});


$('#next2').on('click',function(){
    var facname = $('#Factory_Name').val();
    var facadd = $('#Factory_address').val();
    var country = $('#country').val();
    var city = $('#city').val();
    var cp = $('#contact_person').val();
    var cn = $('#contact_number').val();
    var email = $('#email').val();

    if(facname == ""){
    	alert('Select a Factory');
    }else if(facadd == ""){
		alert('Enter Factory Address');
    }else if(country == ""){
		alert('Pick a Country for your Factory');
    }else if(city == ""){
		alert('Enter City');
    }else if(cp == ""){
		alert('Enter the Contact Person in the Factory');
    }else if(cn == ""){
		alert('Enter the Contact Number of your Contact Person');
    }else if(email == ""){
		alert('Enter Email Address of Contact Person');
    }else if(!isValidEmailAddress(email)){
		alert('Email Format is invalid');
	}else{
		$('#page2').hide();
		$('#page3').show(500);
		$('#step3').css("color","#f71d3a");
		$('#step2').css("color","#8d8d8d");
		$('#legend3').css("color","#f71d3a");
		$('#legend2').css("color","#8d8d8d");
    }
});
function isValidEmailAddress(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
}

$('#back2').on('click',function(){
    $ ('#page2').hide();
    $('#page1').show(500);
    $('#step1').css("color","#f71d3a");
    $('#legend1').css("color","#f71d3a");
    $('#step2').css("color","#8d8d8d");
	$('#legend2').css("color","#8d8d8d");
});

$('#Factory_Name').on('change', function(event){
	event.preventDefault();
	var facname = $(this).val();
	var cid = $('#compid').val();
 	$.ajax({
		url : 'php/ajax.php',
		type : 'POST',
		datatype : 'JSON',
		data : {
				search : 1,
				factory : facname,
				compid : cid
				},
		success : function(show){
			$('#Factory_Name').val(show.flist_name);
			$('#Name_of_the_Factory').val(show.flist_name);
			$('#Factory_address').val(show.flist_address);
			$('#country').val(show.flist_country);
			$('#Factory_Country').val(show.flist_country);
			$('#city').val(show.flist_city);
			$('#contact_person').val(show.flist_contact);
			$('#contact_number').val(show.flist_cnum);
			$('#email').val(show.flist_email);
		}

		})
						
	});

$('#name_of_product').on('change', function(event){
	event.preventDefault();
	var prodname = $(this).val();
	var cid = $('option:selected',this).attr('idd');
	$.ajax({
		url : 'php/ajax.php',
		type : 'POST',
		datatype : 'JSON',
		data : {
			psearch : 1,
			product : prodname,
			compid : cid
		},
		success : function(show){
			$('#name_of_product').val(show.plist_name);
			$('#product_category').val(show.plist_category);
			$('#PO').val(show.plist_po);
			$('#unit').val(show.plist_unit);
			$('#brand').val(show.plist_brand);
			$('#color_material_finish').val(show.plist_cmf);
			$('#technical_specifications_rating').val(show.plist_spec);
			$('#shipping_mark').val(show.plist_ship);
			$('#additional_info').val(show.plist_add);
		}
	});										
});

$('#back3').on('click',function(){
    $('#page3').hide();
    $('#page2').show(500);
    $('#step2').css("color","#f71d3a");
    $('#legend2').css("color","#f71d3a");
    $('#step3').css("color","#8d8d8d");
	$('#legend3').css("color","#8d8d8d");
});

$('#next3').on('click',function(){
	var notp = $('#name_of_product').val();
    var cotp = $('#product_category').val();
    var qty = $('#qty').val();
    var unit = $('#unit').val();
    var po = $('#PO').val();
    var brand = $('#brand').val();
    var cmf = $('#color_material_finish').val();
    var tech = $('#technical_specifications_rating').val();
    var ship = $('#shipping_mark').val();
    var add = $('#additional_info').val();
    var hid = $('#hidefile').val();
    var fl = $('#file').val();

	if (notp == "") {
    	alert('Enter Product Name');
    }else if (cotp == "") {
    	alert('Enter Product Category');	
    }else if (qty == "") {
    	alert('Enter Quantity');
    }else if (unit == "") {
    	alert('Select Unit');
    }else if (po == "") {
    	alert('Enter PO Number (if not applicable please input N/A)');
    }else if (brand == "") {
   		alert('Enter Brand (if not applicable please input N/A)');
    }else if (cmf == "") {
		alert('Define Color/Material/Finish (if not applicable please input N/A)');
    }else if (tech == "") {
    	alert('Define Technical Specifications and Rating (if not applicable please input N/A)');
    }else if (ship == "") {
    	alert('Define Shipping Mark');
    }else if (add == "") {
    	alert('Enter Additional Information for the Product (if not applicable please input N/A)');
    }else if (fl =="") {
    	if (confirm("No Files are selected for upload. Are you sure you don't want to upload any file?")) {
        	$('#page3').hide();
	        $('#page4').show(500);
	        $('#step4').css("color","#f71d3a");
		    $('#legend4').css("color","#f71d3a");
		    $('#step3').css("color","#8d8d8d");
		    $('#legend3').css("color","#8d8d8d");
        }
    }else{
    	$('#page3').hide();
        $('#page4').show(500);
        $('#step4').css("color","#f71d3a");
	    $('#legend4').css("color","#f71d3a");
	    $('#step3').css("color","#8d8d8d");
	    $('#legend3').css("color","#8d8d8d");
	
    }

	var ssgen = $('#sampsize').val();
	var se  = $('#Inspection_Service').val();
	var th = $(this).val();
	var qtyqty = $('#qty').val();
	var pr = $('#name_of_product').val();
	$('#conf_qty').val(qtyqty);
	$('#conf_prod').val(pr);
	$('#Unit').val(th);
	if(ssgen <=315){
		$('#conf_manday').val(1);
	}else if(ssgen >= 316 && ssgen<=500){
		$('#conf_manday').val(2);
	}else if(ssgen >=501 && ssgen<=799){
		$('#conf_manday').val(3);
	}else if(ssgen >=800 && ssgen<=1249){
		$('#conf_manday').val(4);
	}else if(ssgen >=1250 && ssgen<=1999){
		$('#conf_manday').val(5);
	}else if(ssgen >= 2000){
		$('#conf_manday').val(6);
	}

});

$('#back4').on('click',function(){
    $('#page4').hide();
    $('#page3').show(500);
    $('#step3').css("color","#f71d3a");
	$('#legend3').css("color","#f71d3a");
	$('#step4').css("color","#8d8d8d");
	$('#legend4').css("color","#8d8d8d");
});

$('#next4').on('click',function(){
	var samples = $('#samples').val();
	var courier =  $('#courier').val();
	var tn = $('#tn').val();
	var rems = $('#rems').val();
	var date_other = $('#date_other').val();

	if (samples == "Sample was already in Factory" || samples == "Sample Already Sent to TIC-SERA" || samples == "Sample was/will be sent to Factory" ) {
			if (courier == "") {
				alert('Please select courier!');
			}else if (tn == "") {
				alert('Please enter tracking number from courier');
			}else if(date_other == ""){
				if  (confirm('Should we change the inspection schedule if samples do not arrive on time?')){
					$('#date_other').filter(function(){
						return $(this).val('Yes');
						return $(this).text() == 'Yes';
					});
				}else{
					$('#date_other').filter(function(){
						return $(this).val('No');
						return $(this).text() == 'No';
					});

				}
			}else if (rems == "") {
				alert('Please additional remarks (if not applicable please input N/A)');
			}else{
				$('#page4').hide();
			    $('#page5').show(500);
			    $('#step5').css("color","#f71d3a");
				$('#legend5').css("color","#f71d3a");
				$('#step4').css("color","#8d8d8d");
				$('#legend4').css("color","#8d8d8d");
			}


	}else{
	$('#page4').hide();
    $('#page5').show(500);
    $('#step5').css("color","#f71d3a");
	$('#legend5').css("color","#f71d3a");
	$('#step4').css("color","#8d8d8d");
	$('#legend4').css("color","#8d8d8d");

	}
    
});

$('#back5').on('click',function(){
    $('#page5').hide();
    $('#page4').show(500);
    $('#step4').css("color","#f71d3a");
	$('#legend4').css("color","#f71d3a");
	$('#step5').css("color","#8d8d8d");
	$('#legend5').css("color","#8d8d8d");
});

$('#addlist').on('click',function(){
	$('#bgw').show(500);
	$('#bgb').show(500);
})

$('#cancel_prod').on('click',function(){
	$('#bgw').hide(500);
	$('#bgb').hide(500);
});

$('#save_prod').on('click', function(event){
	event.preventDefault();
	var prodname = $('#prod_name').val();
	var prodcat = $('#prod_category').val();
	var prodpo = $('#prod_po').val();
	var prodbrand = $('#prod_brand').val();
	var produnit = $('#prod_unit').val();
	var compid = $('#compid').val();
	var prodcmf = $('#prod_color').val();
	var prodtech = $('#prod_spec').val();
	var prodship = $('#prod_ship').val();
	var prodadd = $('#prod_add').val();
									
	if(prodname == ""){
		alert('Enter Product Name');
	}else if(prodcat == ""){
		alert('Select Product Category');
	}else if(produnit == ""){
		alert('Please select Unit');
	}else if(prodpo == ""){
		alert('Enter PO Number (if not applicable please input N/A)');
	}else if(prodbrand == ""){
		alert('Enter Product Brand (if not applicable please input N/A)');
	}else if(prodcmf == ""){
		alert('Define Color/Material/Finish (if not applicable please input N/A)');
	}else if(prodtech == ""){
		alert('Define Technical Specifications/Rating (if not applicable please input N/A)');
	}else if(prodship == ""){
		alert('Define Shipping Mark (if not applicable please input N/A)');
	}else if(prodadd == ""){
		alert('Enter Additional Product Information (if not applicable please input N/A)');
	}else{
											
		$.ajax({
			url		:	'php/ajax.php',
			type	:	'POST',
			async	:	false,
			cache 	: 	false,
			data	:	{
					prodsave	: 1,
					compid : compid,
					pname  : prodname,
					pcat   : prodcat,
					punit  : produnit,
					ppo    : prodpo,
					pbrand : prodbrand,
					pcmf   : prodcmf,
					ptech  : prodtech,
					pship  : prodship,
					padd   : prodadd
					},
			success: function(result){

				var new_prod = $('#prod_name').val();
				$('#name_of_product').append('<option idd="'+compid+ '" value="'+new_prod+ '" selected>'+new_prod+'</option>');

					if (result == 0) {
						alert('New Product details has been saved!');
						$('#name_of_product').val(prodname);
   						$('#product_category').val(prodcat);
					    $('#unit').val(produnit);
					    $('#PO').val(prodpo);
					    $('#brand').val(prodbrand);
					    $('#color_material_finish').val(prodcmf);
					    $('#technical_specifications_rating').val(prodtech);
					    $('#shipping_mark').val(prodship);
					    $('#additional_info').val(prodadd);

						$('#prod_name').val("");
						$('#prod_category').val("");
						$('#prod_po').val("");
						$('#prod_brand').val("");
						$('#prod_unit').val("")
						$('#compid').val("");
						$('#prod_color').val("");
						$('#prod_spec').val("");
						$('#prod_ship').val("");
						$('#prod_add').val("");
						$('#bgw').hide(500);
						$('#bgb').hide(500);
					}else if(result == 1){
						alert('There was a problem saving the product details. Pelase try again later.');
					}else if (result == 2) {
						alert("Please fill in all fields");
					}else if(result == 3){
						alert("Product Name already exists! Please press cancel and select from the list or if you are adding a new product, give the product a different name.");
					}	
				}
		});
	}
});


$('#confirm').on('click',function(){
	var prod_qty = $('#qty1').val();
	var inslvl = $('#ins_lvl').val();
	var spelvl = $('#spe_lvl').val();
	var sampsize = $('#sampsize').val();
	var sampsizespec =$('#sampsizespec').val();
	var min = $('#min').val();
	var maj = $('#maj').val();
	var crit = $('#crit').val();
	var fn = $('#fn').val();

	if (prod_qty == "") {
		alert('Enter Product Qty');
	}else if (inslvl == "") {
		alert('Select General Inspection Level');
	}else if (spelvl == "") {
		alert('Select Special Inspection Level');
	}else if (min == "") {
		alert('Select Minor AQL');
	}else if (maj == "") {
 		alert('Select Major AQL');
	}else{
		$('#qty').val(prod_qty);
		$('#aql_bgw').hide(500);
		$('#aql_bgb').hide(500);
		$('#conf_genss').val(sampsize);
		$('#conf_spess').val(sampsizespec);
	}
});

$('#ins_lvl').on('change',function(){


	var qua = $('#qty1').val();
	var inlvl = $('#ins_lvl').val();

		if (inlvl == 'N1'){
			if (qua >= 2 && qua <= 8){
				$('#sampsize').val(2) ;
			}else if(qua >= 9 && qua <= 15){
				$('#sampsize').val(2);
			}else if(qua >= 16 && qua <= 25){
				$('#sampsize').val(3);
			}else if(qua >= 26 && qua <= 50){
				$('#sampsize').val(5);
			}else if(qua >= 51 && qua <= 90){
				$('#sampsize').val(5);
			}else if(qua >= 91 && qua <= 150){
				$('#sampsize').val(8);
			}else if(qua >= 151 && qua <= 280){
				$('#sampsize').val(13);
			}else if(qua >= 281 && qua <= 500){
				$('#sampsize').val(20);
			}else if(qua >= 501 && qua <= 1200){
				$('#sampsize').val(32);
			}else if(qua >= 1201 && qua <= 3200){
				$('#sampsize').val(50);
			}else if(qua >= 3201 && qua <= 10000){
				$('#sampsize').val(80);
			}else if(qua >= 10001 && qua <= 35000){
				$('#sampsize').val(125);
			}else if(qua >= 35001 && qua <= 150000){
				$('#sampsize').val(200);
			}else if(qua >= 150001 && qua <= 500000){
				$('#sampsize').val(315);
			}else if(qua >=500001){
				$('#sampsize').val(315);
			}else if(qua == 1){
				alert("Minimum Quantity is '2' ");
			}else{
				alert("Please enter a Quantity");
				$(this).val("");
			}

		}else if(inlvl == 'N2'){
			if (qua >= 2 && qua <= 8){
				$('#sampsize').val(2);
			}else if(qua >= 9 && qua <= 15){
				$('#sampsize').val(3);
			}else if(qua >= 16 && qua <= 25){
				$('#sampsize').val(5);
			}else if(qua >= 26 && qua <= 50){
				$('#sampsize').val(8);
			}else if(qua >= 51 && qua <= 90){
				$('#sampsize').val(13);
			}else if(qua >= 91 && qua <= 150){
				$('#sampsize').val(20);
			}else if(qua >= 151 && qua <= 280){
				$('#sampsize').val(32);
			}else if(qua >= 281 && qua <= 500){
				$('#sampsize').val(50);
			}else if(qua >= 501 && qua <= 1200){
				$('#sampsize').val(80);
			}else if(qua >= 1201 && qua <= 3200){
				$('#sampsize').val(125);
			}else if(qua >= 3201 && qua <= 10000){
				$('#sampsize').val(200);
			}else if(qua >= 10001 && qua <= 35000){
				$('#sampsize').val(315);
			}else if(qua >= 35001 && qua <= 150000){
				$('#sampsize').val(500);
			}else if(qua >= 150001 && qua <= 500000){
				$('#sampsize').val(800);
			}else if (qua >=500001){
				$('#sampsize').val(1250);
			}else if(qua == 1){
				alert("Minimum Quantity is '2' ");
			}else{
				alert("Please enter a Quantity");
				$(this).val("");
			}
		}else if(inlvl == 'N3'){
			if (qua >= 2 && qua <= 8){
				$('#sampsize').val(3);
			}else if(qua >= 9 && qua <= 15){
				$('#sampsize').val(5);
			}else if(qua >= 16 && qua <= 25){
				$('#sampsize').val(8);
			}else if(qua >= 26 && qua <= 50){
				$('#sampsize').val(13);
			}else if(qua >= 51 && qua <= 90){
				$('#sampsize').val(20);
			}else if(qua >= 91 && qua <= 150){
				$('#sampsize').val(32);
			}else if(qua >= 151 && qua <= 280){
				$('#sampsize').val(50);
			}else if(qua >= 281 && qua <= 500){
				$('#sampsize').val(80);
			}else if(qua >= 501 && qua <= 1200){
				$('#sampsize').val(125);
			}else if(qua >= 1201 && qua <= 3200){
				$('#sampsize').val(200);
			}else if(qua >= 3201 && qua <= 10000){
				$('#sampsize').val(315);
			}else if(qua >= 10001 && qua <= 35000){
				$('#sampsize').val(500);
			}else if(qua >= 35001 && qua <= 150000){
				$('#sampsize').val(800);
			}else if(qua >= 150001 && qua <= 500000){
				$('#sampsize').val(1250);
			}else if(qua >= 500001){
				$('#sampsize').val(2000);
			}else if(qua == 1){
				alert("Minimum Quantity is '2' ");
			}else{
				alert("Please enter a Quantity");
				$(this).val("");
			}
		}
});	

$('#spe_lvl').on('change',function(){
	var qua = $('#qty1').val();
	var spelvl = $('#spe_lvl').val();
	if(spelvl == 'S1'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(2);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(2);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(3);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(3);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(3);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(3);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(5);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(5);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(5);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(5);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(8);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(8);
		}else if(qua >= 500001){
			$('#sampsizespec').val(8);
		}else if(qua == 1){
			alert("Minimum quantity is '2'");
		}else{
		alert("Please enter a Quantity");
		$(this).val("");
		}
	}else if(spelvl == 'S2'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(2);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(3);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(3);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(3);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(5);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(5);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(5);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(8);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(8);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(8);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(13);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(13);
		}else if(qua >= 500001){
			$('#sampsizespec').val(13);
		}else if(qua == 1){
			alert("Minimun quanitty is '2'");
		}else{
			alert("Please enter a Quantity");
			$(this).val("");
		}
	}else if(spelvl == 'S3'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(3);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(3);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(5);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(5);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(8);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(8);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(13);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(13);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(20);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(20);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(32);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(32);
		}else if(qua >= 500001){
			$('#sampsizespec').val(50);
		}else if(qua == 1){
			alert("Minimum Quantity is '2'");
		}else{
			alert("Please enter a Quantity");
			$(this).val("");

		}
	}else if(spelvl == 'S4'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(3);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(5);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(5);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(8);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(13);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(13);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(20);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(32);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(32);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(50);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(80);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(80);
		}else if(qua >= 500001){
			$('#sampsizespec').val(125);
		}else if(qua == 1){
			alert("Minimun quantity is '2'");
		}else{
			alert("Please enter a Quantity");
			$(this).val("");
			
		}
	}
});

$('#qty1').on('keyup',function(){
	var qua = $(this).val();
	var spelvl = $('#spe_lvl').val();
	var inlvl = $('#ins_lvl').val();
	
	if (inlvl == "") {
	}else{
		if (inlvl == 'N1'){
			if (qua >= 2 && qua <= 8){
				$('#sampsize').val(2) ;
			}else if(qua >= 9 && qua <= 15){
				$('#sampsize').val(2);
			}else if(qua >= 16 && qua <= 25){
				$('#sampsize').val(3);
			}else if(qua >= 26 && qua <= 50){
				$('#sampsize').val(5);
			}else if(qua >= 51 && qua <= 90){
				$('#sampsize').val(5);
			}else if(qua >= 91 && qua <= 150){
				$('#sampsize').val(8);
			}else if(qua >= 151 && qua <= 280){
				$('#sampsize').val(13);
			}else if(qua >= 281 && qua <= 500){
				$('#sampsize').val(20);
			}else if(qua >= 501 && qua <= 1200){
				$('#sampsize').val(32);
			}else if(qua >= 1201 && qua <= 3200){
				$('#sampsize').val(50);
			}else if(qua >= 3201 && qua <= 10000){
				$('#sampsize').val(80);
			}else if(qua >= 10001 && qua <= 35000){
				$('#sampsize').val(125);
			}else if(qua >= 35001 && qua <= 150000){
				$('#sampsize').val(200);
			}else if(qua >= 150001 && qua <= 500000){
				$('#sampsize').val(315);
			}else if(qua >=500001){
				$('#sampsize').val(315);
			}

		}else if(inlvl == 'N2'){
			if (qua >= 2 && qua <= 8){
				$('#sampsize').val(2);
			}else if(qua >= 9 && qua <= 15){
				$('#sampsize').val(3);
			}else if(qua >= 16 && qua <= 25){
				$('#sampsize').val(5);
			}else if(qua >= 26 && qua <= 50){
				$('#sampsize').val(8);
			}else if(qua >= 51 && qua <= 90){
				$('#sampsize').val(13);
			}else if(qua >= 91 && qua <= 150){
				$('#sampsize').val(20);
			}else if(qua >= 151 && qua <= 280){
				$('#sampsize').val(32);
			}else if(qua >= 281 && qua <= 500){
				$('#sampsize').val(50);
			}else if(qua >= 501 && qua <= 1200){
				$('#sampsize').val(80);
			}else if(qua >= 1201 && qua <= 3200){
				$('#sampsize').val(125);
			}else if(qua >= 3201 && qua <= 10000){
				$('#sampsize').val(200);
			}else if(qua >= 10001 && qua <= 35000){
				$('#sampsize').val(315);
			}else if(qua >= 35001 && qua <= 150000){
				$('#sampsize').val(500);
			}else if(qua >= 150001 && qua <= 500000){
				$('#sampsize').val(800);
			}else if (qua >=500001){
				$('#sampsize').val(1250);
			}
		}else if(inlvl == 'N3'){
			if (qua >= 2 && qua <= 8){
				$('#sampsize').val(3);
			}else if(qua >= 9 && qua <= 15){
				$('#sampsize').val(5);
			}else if(qua >= 16 && qua <= 25){
				$('#sampsize').val(8);
			}else if(qua >= 26 && qua <= 50){
				$('#sampsize').val(13);
			}else if(qua >= 51 && qua <= 90){
				$('#sampsize').val(20);
			}else if(qua >= 91 && qua <= 150){
				$('#sampsize').val(32);
			}else if(qua >= 151 && qua <= 280){
				$('#sampsize').val(50);
			}else if(qua >= 281 && qua <= 500){
				$('#sampsize').val(80);
			}else if(qua >= 501 && qua <= 1200){
				$('#sampsize').val(125);
			}else if(qua >= 1201 && qua <= 3200){
				$('#sampsize').val(200);
			}else if(qua >= 3201 && qua <= 10000){
				$('#sampsize').val(315);
			}else if(qua >= 10001 && qua <= 35000){
				$('#sampsize').val(500);
			}else if(qua >= 35001 && qua <= 150000){
				$('#sampsize').val(800);
			}else if(qua >= 150001 && qua <= 500000){
				$('#sampsize').val(1250);
			}else if(qua >= 500001){
				$('#sampsize').val(2000);
			}
		}
	}

	if (spelvl =="") {

	}else{
		if(spelvl == 'S1'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(2);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(2);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(3);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(3);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(3);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(3);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(5);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(5);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(5);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(5);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(8);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(8);
		}else if(qua >= 500001){
			$('#sampsizespec').val(8);
		}
	}else if(spelvl == 'S2'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(2);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(3);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(3);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(3);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(5);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(5);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(5);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(8);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(8);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(8);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(13);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(13);
		}else if(qua >= 500001){
			$('#sampsizespec').val(13);
		}
	}else if(spelvl == 'S3'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(3);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(3);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(5);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(5);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(8);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(8);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(13);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(13);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(20);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(20);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(32);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(32);
		}else if(qua >= 500001){
			$('#sampsizespec').val(50);
		}
	}else if(spelvl == 'S4'){
		if (qua >= 2 && qua <= 8){
			$('#sampsizespec').val(2);
		}else if(qua >= 9 && qua <= 15){
			$('#sampsizespec').val(2);
		}else if(qua >= 16 && qua <= 25){
			$('#sampsizespec').val(3);
		}else if(qua >= 26 && qua <= 50){
			$('#sampsizespec').val(5);
		}else if(qua >= 51 && qua <= 90){
			$('#sampsizespec').val(5);
		}else if(qua >= 91 && qua <= 150){
			$('#sampsizespec').val(8);
		}else if(qua >= 151 && qua <= 280){
			$('#sampsizespec').val(13);
		}else if(qua >= 281 && qua <= 500){
			$('#sampsizespec').val(13);
		}else if(qua >= 501 && qua <= 1200){
			$('#sampsizespec').val(20);
		}else if(qua >= 1201 && qua <= 3200){
			$('#sampsizespec').val(32);
		}else if(qua >= 3201 && qua <= 10000){
			$('#sampsizespec').val(32);
		}else if(qua >= 10001 && qua <= 35000){
			$('#sampsizespec').val(50);
		}else if(qua >= 35001 && qua <= 150000){
			$('#sampsizespec').val(80);
		}else if(qua >= 150001 && qua <= 500000){
			$('#sampsizespec').val(80);
		}else if(qua >= 500001){
			$('#sampsizespec').val(125);
		}
	}

	}
});


$('#new_fac').on('click',function(){
	$('#background').show(500);
	$('#white_bg').show(500);
});

$('#cancel_fac').on('click',function(){
	$('#white_bg').hide(500);
	$('#background').hide(500);
});
	var cc = 0;
$('#contact_number').on('click',function(){
	
	if (cc == 0) {
		alert('You can add multiple contact numbers for this field, just use a comma to separate each number.');
		cc = cc + 1;
	}else{
		return false;
	}
});

$('#save_fac').on('click', function(event){
	event.preventDefault();
	var factory = $('#Name_of_Factory').val();
	var factory_address = $('#factory_add').val();
	var factory_country = $('#factory_country option:selected').val();
	var factory_city = $('#factory_city').val();
	var factory_cperson = $('#factory_contact_person').val();
	var factory_cnumber = $('#factory_contact_number').val();
	var factory_email = $('#factory_email').val();
	var id = $('#compid').val();

	if (factory == "") {
		$('#add_fact_name').show();
		$('#add_fact_name').html('Please enter factory name.');
	}else if(factory_address == ""){
		alert('Enter Factory Address');
	}else if(factory_country == ""){
		alert('Select Factory Country');
	}else if(factory_city == ""){
		alert('Enter Factory City');
	}else if(factory_cperson == ""){
		alert('Enter factory Contact Person');
	}else if(factory_cnumber == ""){
		alert('Enter contact Number of Contact Person');
	}else if(factory_email == ""){
		alert('Enter Email Address of contact Person');
	}else if(!isValidEmailAddress(factory_email)){
		alert('Email format is invalid!');
	}else{
		$.ajax({
			url		:	'php/ajax.php',
			type	:	'POST',
			async	:	false,
			cache 	: 	false,
			data	:	{
						buttonsave	: 1,
						factoryname	: factory,
						address		: factory_address,
						country		: factory_country,
						city		: factory_city,
						contact		: factory_cperson,
						number		: factory_cnumber,
						email		: factory_email,
						id			: id
						},
			success: function(result){
				var new_factory = $('#Name_of_Factory').val();
				$('#Factory_Name').append('<option value="'+new_factory+ '" selected>'+new_factory+'</option>');
					if (result == 0){
						alert('New Factory details has been saved!');
						
						$('#Factory_address').val(factory_address);
						$('#country').val(factory_country);
						$('#city').val(factory_city);
						$('#contact_person').val(factory_cperson);
						$('#contact_number').val(factory_cnumber);
						$('#email').val(factory_email);
						$('#background').hide(500);
						$('#white_bg').hide(500);
						$('#Name_of_Factory').val("");
						$('#factory_add').val("");
						$('#factory_country').val("");
						$('#factory_city').val("");
						$('#factory_contact_person').val("");
						$('#factory_contact_number').val("");
						$('#factory_email').val("");
					}else if(result == 1){
						alert('There was a problemt saving the factory details. Please try again.');
					}else if(result == 2){
						alert('Please fill in all fields');
					}
			}
			});
	}
});


$('#prod_name').on('focusout',function(){
	var prodname = $('#prod_name').val();
	var compid = $('#compid').val();
	$.ajax({
			url		:	'php/ajax_check.php',
			type	:	'POST',
			cache 	: 	false,
			async	:	false,
			data	:	{
						check	: 1,
						compid	: compid,
						pname 	: prodname
						},
			success: function(result){
				if (result==1) {
					alert('Product Name Already Exists! Please rename the product or give the product name a prefix');
					$('#save_prod').prop('disabled','disabled');
				}else{
					$("#save_prod").removeAttr('disabled');
				}	
			}
			});

});

$('#Name_of_Factory').on('focusout',function(){
	var factory = $('#Name_of_Factory').val();
	var compid = $('#compid').val();
	$.ajax({
			url		:	'php/ajax_check.php',
			type	:	'POST',
			cache 	: 	false,
			async	:	false,
			data	:	{
						check_fac	: 1,
						compid	: compid,
						fname 	: factory
						},
			success: function(result){
				if (result==1) {
					alert('Factory Name Already Exists! Please rename the factory or give the factory name a prefix');
					$('#save_fac').prop('disabled','disabled');
				}else{
					 $("#save_fac").removeAttr('disabled');
				}	
			}
			});

});

$('#samples').on('change',function () {
	var sample = $(this).val();
	if (sample == 'No Sample') {
		$('#other_details').hide(500);
	}else{
		$('#other_details').show(500);
	}
			
})

});

