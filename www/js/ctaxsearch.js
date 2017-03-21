		$(document).ready(function () {
			$('#busytax').hide();
			$('#popup-container').hide();
			$('#owetax').hide();
			$('#taxhistory').hide();
			$("#viewTaxRecord").click(function(){
				
				$('#taxhistory').hide();
				$('#taxtb tbody').remove(); 
				$('#busytax').hide();
				$('#popup-container').hide();
				var logintin = document.getElementById("logintin").value;
				var regcno = document.getElementById("regcno").value;


				if(logintin.trim() == ""){
					$('#taxtb tbody').remove(); 
					$('#busytax').hide();
					alert("Enter TIN");
					return false;

				}else if (regcno.trim() == ""){
					$('#taxtb tbody').remove(); 
					$('#busytax').hide();
					alert("Enter RC Number");
					return false;
				}else if (logintin.trim() == "TIN00012648" && regcno.trim() == "858020"){
					$('#busytax').hide();
					$('#popup-container').show();
					$("#popup-container").html('Tax Clearance Is Up To Date');
					$('#taxhistory').show();
					$('#taxtb tbody').remove();


				}else if (logintin.trim() == "TIN00012348" && regcno.trim() == "863121"){
					$('#busytax').hide();
					$('#popup-container').show();
					$("#popup-container").html('Tax Record Is Not Up To Date!');
					$('#owetax').show();
					$('#taxtb tbody').remove();


				}
				else{
					$('#busytax').hide();
					$('#popup-container').show();
					$("#popup-container").html('Record Not Found!');


				}

				$("#taxhistory").click(function(){
					$('#taxtb tbody').remove(); 
					$.getJSON("mockdata/taxrecord.json", function(data) {
						$('#taxtb tbody').remove();
						var items = [];
						$.each(data, function(key, val) {
							items.push("<tr>");
							items.push("<td id=''"+key+"''>"+val.trans_date+"</td>");
							items.push("<td id=''"+key+"''>"+val.trans_desc+"</td>");
							items.push("<td id=''"+key+"''>"+val.trans_amount+"</td>");
							items.push("<td id=''"+key+"''>"+val.trans_ref_id+"</td>");
							items.push("<td id=''"+key+"''>"+val.pay_year+"</td>");
							items.push("<td id=''"+key+"''>"+val.status+"</td>");
							items.push("</tr>");
						});	
						$("<tbody/>", {html: items.join("")}).appendTo("#taxtb");
						$('#busytax').show();
						$('#taxhistory').hide();

					});
				});
				$("#nocleartax").click(function(){
					$('#taxtb tbody').remove(); 
					$.getJSON("mockdata/tax.json", function(data) {
						$('#taxtb tbody').remove();
						var items = [];
						$.each(data, function(key, val) {
							items.push("<tr>");
							items.push("<td id=''"+key+"''>"+val.trans_date+"</td>");
							items.push("<td id=''"+key+"''>"+val.trans_desc+"</td>");
							items.push("<td id=''"+key+"''>"+val.trans_amount+"</td>");
							items.push("<td id=''"+key+"''>"+val.trans_ref_id+"</td>");
							items.push("<td id=''"+key+"''>"+val.pay_year+"</td>");
							items.push("<td id=''"+key+"''>"+val.status+"</td>");
							items.push("</tr>");
						});	
						$("<tbody/>", {html: items.join("")}).appendTo("#taxtb");
						$('#busytax').show();
						$('#taxhistory').show
						$("#nocleartax").hide();

					});
				});
			});
		});				