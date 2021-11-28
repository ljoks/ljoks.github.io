//Initialize skrollr
if (
  !/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
    navigator.userAgent || navigator.vendor || window.opera
  )
) {
  skrollr.init({
    forceHeight: false
  });
}

$(function() {
  $("a[href*=#]:not([href=#])").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

var populateProject = function(card) {
  var name = card.data("name");
  var date = card.data("date");
  var tag = card.data("tag");
  var desc = card.data("desc");
  // var skills = card.data("skills");
  var skills = card.data("skills").split(",");
  var purpose = card.data("purpose");
  var image = card.data("image");

  $("#projectName").html(name);
  $("#projectDesc").html(desc);
  $("#projectDates").html(date);
  $("#projectPurpose").html(purpose);
  $("#projectTag").html(tag);
  $("#projectImage").html(image);
  $("#projectImage").attr("src", "img/" + image);

  if (tag == "") {
    $("#projectTag").hide();
  }

  $("#projectSkills").html("");

  $.each(skills, function(index, value) {
    $("#projectSkills").append("<span>" + value + "</span>");
  });
};

populateProject($("#seniorProject"));

$(".card").click(function() {
  var card = $(this);

  populateProject(card);
});
