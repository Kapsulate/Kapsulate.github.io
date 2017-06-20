
function set_language(lang) {
	$("#go-english").removeClass("active");
	$("#go-basque").removeClass("active");
	$("#go-spanish").removeClass("active");
	$("#go-german").removeClass("active");
	$("#go-" + lang).addClass("active");

	$("#english").hide();
	$("#basque").hide();
	$("#spanish").hide();
	$("#german").hide();
	$("#" + lang).show();
}

$("#go-english").click(function(event){
	set_language("english");
});
$("#go-basque").click(function(event){
	set_language("basque");
});
$("#go-spanish").click(function(event){
	set_language("spanish");
});
$("#go-german").click(function(event){
	set_language("german");
});
