				$(document).ready(function () {
					$('#busy').hide();
					$('#popup-container').hide();
					$("#btnCSearch").click(function () {
						$('#table1 tbody').remove(); 
						$('#busy').hide();
						$('#popup-container').hide();
						var cname = document.getElementById("cname").value;
						var regcno = document.getElementById("regcno").value;


						if(cname.trim() == ""){
							$('#table1 tbody').remove();
							$('#busy').hide();
							alert("Enter Company name");
							return false;

						}else if (regcno.trim() == ""){
							$('#table1 tbody').remove();
							$('#busy').hide();
							alert("Enter RC Number");
							return false;
						}else if (cname.trim() == "TRIUNE BUILT-TECH SOLUTIONS LIMITED" && regcno.trim() == "863121"){
							$.getJSON("mockdata/company.json", function(data) {
								var items = [];
								$.each(data, function(key, val) {
									items.push("<tr>");
									/*items.push("<td id=''"+key+"''>"+val.id+"</td>");*/
									items.push("<td id=''"+key+"''>"+val.crcno+"</td>");
									items.push("<td id=''"+key+"''>"+val.cname+"</td>");
									/*items.push("<td id=''"+key+"''>"+val.incorporation_no+"</td>");*/
									items.push("<td id=''"+key+"''>"+val.tin_no+"</td>");
									items.push("<td id=''"+key+"''>"+val.caddress+"</td>");
									items.push("<td id=''"+key+"''>"+val.cregdate+"</td>");
									items.push("</tr>");
								});	
								$("<tbody/>", {html: items.join("")}).appendTo("#table1");
								//$('#table1 th').css('background-Color','#c1272d');
								$('#busy').show();
								$("#viewTaxRecordOwe").hide();

							});
							}else if (cname.trim() == "MESSRS ALTEQ QUANTEQ SPV LIMITED" && regcno.trim() == "858020"){
							$.getJSON("mockdata/companys.json", function(data) {
								var items = [];
								$.each(data, function(key, val) {
									items.push("<tr>");
									/*items.push("<td id=''"+key+"''>"+val.id+"</td>");*/
									items.push("<td id=''"+key+"''>"+val.crcno+"</td>");
									items.push("<td id=''"+key+"''>"+val.cname+"</td>");
									/*items.push("<td id=''"+key+"''>"+val.incorporation_no+"</td>");*/
									items.push("<td id=''"+key+"''>"+val.tin_no+"</td>");
									items.push("<td id=''"+key+"''>"+val.caddress+"</td>");
									items.push("<td id=''"+key+"''>"+val.cregdate+"</td>");
									items.push("</tr>");
								});	
								$("<tbody/>", {html: items.join("")}).appendTo("#table1");
								//$('#table1 th').css('background-Color','#c1272d');
								$('#busy').show();
								$("#viewTaxRecord").hide();

							});

						}else{
							$('#busy').hide();
							$('#popup-container').show();
							$("#popup-container").html('Record Does Not Exist');
							/*$("#popup-container").html('Record Does Not Exist').css('background-Color','#c1272d');*/
							
						}

						$("#viewTaxRecord").click(function(){

							/*window.location="ctaxsearch.html";*/
							window.location="ctaxsearchNew.html";
						});
						$("#viewTaxRecordOwe").click(function(){

							/*window.location="ctaxsearch.html";*/
							window.location="ctaxsearchOwe.html";
						});
					});
				});


