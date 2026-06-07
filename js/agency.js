(function($) {
  "use strict";

  var sectionHashes = [];

  function getPageScrollTop() {
    return Math.max(
      window.pageYOffset || 0,
      document.documentElement.scrollTop || 0,
      document.body.scrollTop || 0
    );
  }

  function setPageScroll(top) {
    window.scrollTo({ top: top, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = top;
    document.body.scrollTop = top;
  }

  function scrollToHash(hash) {
    if (!hash || hash === "#") {
      return;
    }

    if (hash === "#page-top") {
      setPageScroll(0);
    } else {
      var target = document.getElementById(hash.slice(1));
      if (!target) {
        return;
      }
      target.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" });
    }

    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", hash);
    } else {
      window.location.hash = hash;
    }

    updateActiveNav();
    navbarCollapse();
    toggleScrollTop();
  }

  function updateActiveNav() {
    var currentHash = null;
    var scrollTop = getPageScrollTop() + ($("#mainNav").outerHeight() || 0) + 60;

    sectionHashes.forEach(function(hash) {
      var section = document.getElementById(hash.slice(1));
      if (section && section.offsetTop <= scrollTop) {
        currentHash = hash;
      }
    });

    var navLinks = $("#mainNav .nav-link");
    navLinks.removeClass("active");

    if (currentHash) {
      navLinks.filter(function() {
        return this.getAttribute("href") === currentHash;
      }).addClass("active");
    }
  }

  function navbarCollapse() {
    if (getPageScrollTop() > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

  function toggleScrollTop() {
    if (getPageScrollTop() > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  }

  function handleScroll() {
    navbarCollapse();
    updateActiveNav();
    toggleScrollTop();
  }

  $("#mainNav a.js-scroll-trigger[href^='#']").each(function() {
    var hash = this.getAttribute("href");
    if (hash !== "#page-top" && document.getElementById(hash.slice(1))) {
      sectionHashes.push(hash);
    }
  });

  $("a.js-scroll-trigger[href^='#']").on("click", function(event) {
    var hash = this.getAttribute("href");
    var hasTarget = hash === "#page-top" || !!document.getElementById(hash.slice(1));

    if (!hasTarget) {
      return;
    }

    event.preventDefault();

    var menuIsOpen = $(".navbar-collapse").hasClass("show");
    $(".navbar-collapse").collapse("hide");

    window.setTimeout(function() {
      scrollToHash(hash);
    }, menuIsOpen ? 180 : 0);
  });

  handleScroll();
  $(window).on("scroll", handleScroll);
  $("body").on("scroll", handleScroll);
  $(document).on("scroll", handleScroll);
})(jQuery);
