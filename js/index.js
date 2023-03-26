// jQuery area
$(document).ready(function(){

	var characters = [
		"Itadori Yuji",
		"Fushiguro Megumi",
		"Kugisaki Nobara",
		"Panda",
		"Zenin Maki",
		"Inumaki Toge",
		"Okkotsu Yuta",
		"Hakiri Kinji",
		"Todo Aoi",
		"Kamo Noritoshi",
		"Zenin Mai",
		"Mechamaru",
		"Miwa Kasumi",
		"Nishimiya Momo",
		"Gojo Satoru",
		"Nanami Kento",
		"Yaga Masamichi",
		"Ieiri Shoko",
		"Ino Takuma",
		"Mei Mei",
		"Kusakabe Atsuya",
		"Tsukumo Yuki",
		"Geto Suguru",
		"Sukuna Ryomen",
		"Jogo",
		"Hanami",
		"Mahito",
		"Dagon",
		"Choso"
	];

	$('#search').autocomplete({
		source:characters
	});



// start characters's info
// start tokyo jujutsu high scholl characters' info
// yujiinfo
	// $('.yujimore').click(function(e){
	// 	if($(".yujimore").text() === "Read More"){
	// 		$(".dots").remove();
	// 		$(".yujispan").css("display","inline");
	// 		$(".card-footer").css("height","100%");
	// 		$(".yujimore").text("Read Less");
	// 	}else{
	// 		$(".dots").add();
	// 		$(".yujispan").css("display","none");
	// 		$(".yujimore").text("Read More");
	// 	}

	// 	e.preventDefault();
	// });

	$('.more').click(function(e){
		if($(this).text() === "Read More"){
			$(".card-footer").css("height","100%");
			$(".footer").css("height","300px");
			$(this).parent().find("b").hide();
			$(this).parent().find("span").css("display","inline");
			$(this).text("Read Less");
		}else{
			$(".card-footer").css("height","100%");
			$(".footer").css("height","300px");
			$(this).parent().find("b").show();
			$(this).parent().find("span").css("display","none");
			$(this).text("Read More");
		}

		e.preventDefault();
	});




// end cursed spirits' info


// chartjs
const ctx = document.getElementById('myChart');

  		new Chart(ctx, {
    		type: 'bar',
   			data: {
      			labels: ['Megumi Fushiguro', 'Gojo Satoru', 'Yuji Itadori', 'Suguru Geto', 'Yuta Okkotsu'],
      			datasets: [{
       				label: "Top-5 Fan-Favourite Characters'votes",
        			data: [19393, 14359, 13265, 10345, 7791],
        			// borderWidth: 1
      					}]
   				 },
    		options: {
     			scales: {
       				y: {
          				beginAtZero: true
       					}
      				}
    			}
 		});
// end characters's info
	
	$(".submit").click(function(e){
		var getname = document.getElementById("name").value;
		var getcomments = document.getElementById("comments").value;
		const getreplace = document.getElementById("replace");

		getreplace.innerText = `${getname} : ${getcomments}`;

		document.getElementById("name").value = "";
		document.getElementById("comments").value = "";

		e.preventDefault();
	});




// footer
	const autoyear = document.getElementById('autoyear');
	const getyear  = new Date().getUTCFullYear();

	autoyear.textContent = getyear;

});




// javascript area
function getdata(){
	

	document.getElementById("name").focus();
}