function navbar_remove_all_active() {
  $('#content_navbar li').each(function() {
    $("#"+this.id).removeClass("active");
  });
}

