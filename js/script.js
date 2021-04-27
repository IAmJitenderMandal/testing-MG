$(document).ready(function () {
  $("#map").usmap({
    stateStyles: { fill: "#f9be01" },
    stateSpecificStyles: {
      WY: { fill: "yellow" },
      NV: { fill: "teal" },
      MT: { fill: "red" },
      DC: { fill: "blue" },
      CO: { fill: "blue" },
      IL: { fill: "red" },
      TX: { fill: "green" },
      WA: { fill: "teal" },
      KS: { fill: "yellow" },
      AK: { fill: "#376f41" },
      HI: {
        fill: "#ebb91e",
      },
    },
    showLabels: true,
    mouseover: function (event, data) {
      // var hoveredElement = $(event.originalEvent.currentTarget)[0];
      // $(hoveredElement).is("div");
      // if ($(hoveredElement).is("path")) {
      //   $(hoveredElement).attr("title", "<div>" + "hello" + "</div>");
      // }

      // var offset = $(this).offset();
      $(".popover").html(
        "<span>" +
          data.name +
          "</span>" +
          '<span class="link">view more info</span>'
      );
      // var left = event.pageX;
      // var top = event.pageY;
      // var theHeight = $(".popover").height();1
      // $(".popover").show();
      // $(".popover").css("left", left + 10 + "px");
      // $(".popover").css("top", top - theHeight / 2 - 10 + "px");
    },
  });

  $("#map svg path").mouseover(function (e) {
    setTimeout(() => {
      var offset = $(this).offset();

      var left = e.pageX;
      var top = e.pageY;
      var theHeight = $(".popover").height();

      $(".popover").show();
      $(".popover").css("left", left + 0 + "px");
      $(".popover").css("top", top - theHeight / 100 + "px");
    }, 0);
  });

  $("#map").mouseover(function (e) {
    $(".popover").hide();
  });
});
