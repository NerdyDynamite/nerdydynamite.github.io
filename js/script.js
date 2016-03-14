var filenames = ["images/annie.jpg", "images/fluffy.jpg", 
	"images/mel.jpg", "images/sam.jpg", "images/star.jpg"];
var names = ["Annie", "Fluffy", "Mel", "Sam", "Star"]; 
var count = [ 0, 0, 0, 0, 0 ];
var $CatSelect = $("#catSelect");
var $Pic = $("#pic");
var $Count = $("#count");

$CatSelect.append("<div class='col-md-1'>" +
		"</div>")

for (name in names) {
	$CatSelect.append("<div class='col-md-2'>"
		+ "<h2>" + names[name] + "</h2>" +
		"</div>");

	$("#catSelect div:last-child").click((function(nameCopy) {
		return function() {
			$Pic.attr("src",filenames[nameCopy]);
			$Count.text("Count: " + count[nameCopy]);

			$Pic.off("click"); // remove current event handler
			$Pic.click(function() { // update with event handler for certain cat
				count[nameCopy]++;
				$Count.text("Count: " + count[nameCopy]);
			})
		}
	})(name))

}

$CatSelect.append("<div class='col-md-1'>" +
		"</div>");

var $Count = $("#count");

