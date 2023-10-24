function songEditClass() {
  var DEBUG_MODE = false;
  var b = false;
  var v = -1;
  var _editPrimaryKey = -1;
  var Z = false;
  var _body = "";
  var _panel = null;
  var _slideTabs;
  var u = "";
  var A = 0;
  var D = "";
  var d = 0;
  var _fontFamily = [];
  var _slideNumber = 1;

  this.init = function init(bodyContent) {
    _log("Initialize Song Edit Panel");
    _fontFamily = ["Arial", "Times New Roman", "Calibri"];
    _body = bodyContent;
    _setupPanel();
    p();
    _setupSlideTabs();
    _setupEvents();
  };
  this.showEditPanel = function showEditPanel(props, ad, ae, af) {
    b = ad;
    v = ae;
    _editPrimaryKey = null;
    Z = af;
    if (af == null) {
      Z = false;
    }
    _loadProps(props);
    _panel.show();
  };
  this.setEditPrimaryKey = function setEditPrimaryKey(editPrimaryKey) {
    _editPrimaryKey = editPrimaryKey;
  };

  function _setupPanel() {
    _log("Generating Panel");
    _panel = new YAHOO.widget.Panel("panelObj", {
      width: "600px",
      fixedcenter: true,
      modal: true,
      visible: false,
      constraintoviewport: true,
    });
    _panel.render(document.body);
    _panel.setHeader("Song ADD / EDIT");
    _panel.setBody(_body);
    _panel.hide();
  }

  function _setupEvents() {
    _log("Generating Events");

    document
      .getElementById("songEdit_moveSlideLeftButtonID")
      .addEventListener("click", Y, false);
    document
      .getElementById("songEdit_moveSlideRightButtonID")
      .addEventListener("click", V, false);
    document
      .getElementById("songEdit_addSlideButtonID")
      .addEventListener("click", O, false);
    document
      .getElementById("songEdit_dupSlideButtonID")
      .addEventListener("click", t, false);
    document
      .getElementById("songEdit_deleteSlideButtonID")
      .addEventListener("click", K, false);
    document
      .getElementById("songEdit_createSlidesButtonID")
      .addEventListener("click", H, false);
    document
      .getElementById("songEdit_addCatButtonID")
      .addEventListener("click", z, false);
    document
      .getElementById("se_submitCatButtonID2")
      .addEventListener("click", a, false);
    document
      .getElementById("songnav_category2")
      .addEventListener("click", s, false);
    document
      .getElementById("se_addFontButtonID2")
      .addEventListener("click", N, false);
    document
      .getElementById("se_submitFontButtonID2")
      .addEventListener("click", L, false);
    document
      .getElementById("se_fontID2")
      .addEventListener("change", w, false);
    document
      .getElementById("se_fontID2_2")
      .addEventListener("change", Q, false);
    document
      .getElementById("se_presentID")
      .addEventListener("click", g, false);
    document
      .getElementById("songEdit_saveButtonID")
      .addEventListener("click", U, false);
    document
      .getElementById("songAsNewEdit_saveButtonID")
      .addEventListener("click", k, false);
    document
      .getElementById("songEdit_cancelButtonID")
      .addEventListener("click", C, false);

    // make it hidden
    document.getElementById("se_catTextID").style.visibility = "hidden";
    document.getElementById("se_submitCatButtonID2").style.visibility = "hidden";
    document.getElementById("se_fontTextID").style.visibility = "hidden";
    document.getElementById("se_submitFontButtonID2").style.visibility = "hidden";
  }

  function _setupSlideTabs() {
    _log("Init Slide Tabs");

    _slideTabs = new YAHOO.widget.TabView();

    _slideTabs.addTab(
      new YAHOO.widget.Tab({
        label: "1",
        content: '<textarea id="slide1" style="width: 284px" class="textareaStyle"></textarea><textarea id="slide1_2" style="width: 284px" class="textareaStyle"></textarea>',
        active: true,
      })
    );
    _slideTabs.addTab(
      new YAHOO.widget.Tab({
        label: "2",
        content: '<textarea id="slide2" style="width: 284px" class="textareaStyle"></textarea><textarea id="slide2_2" style="width: 284px" class="textareaStyle"></textarea>',
      })
    );
    _slideTabs.appendTo("se_slides");

    var ac = document.getElementById("se_fontID2").selectedIndex;
    tempFont = document.getElementById("se_fontID2").options[ac].text;
    document.getElementById("slide1").style.fontFamily = tempFont;
    document.getElementById("slide2").style.fontFamily = tempFont;

    var ac = document.getElementById("se_fontID2_2").selectedIndex;
    tempFont = document.getElementById("se_fontID2_2").options[ac].text;
    document.getElementById("slide1_2").style.fontFamily = tempFont;
    document.getElementById("slide2_2").style.fontFamily = tempFont;
  }

  function T() {
    var ac = 0;
    var ad = _slideTabs.getTab(ac);
    while (ad != null) {
      _slideTabs.removeTab(ad);
      ad = _slideTabs.getTab(ac);
    }
    _slideNumber = 1;
  }

  function aa(ac) {
    var ak = [];
    ak.push("My Songs");
    var af = false;
    if (ac != null) {
      if (!apple) {
        if (ac.match("^VV")) {
          af = true;
        }
      }
    }
    var ae = songManagerObj.get_sm_cat_records();
    if (ae.data != null) {
      var ah = ae.data.length;
      for (var ag = 0; ag < ah; ag++) {
        if (ae.data[ag].cat != null) {
          var ai = ae.data[ag].cat;
          var ad = ai.match("^VV");
          if (apple) {
            ak.push(ae.data[ag].cat);
          } else {
            if (!ad) {
              ak.push(ae.data[ag].cat);
            }
          }
        }
      }
      if (u != "") {
        ak.push(u);
      }
      ak.sort();
    }
    var aj = ak.length;
    A = 0;
    for (var ag = 0; ag < aj; ag++) {
      document.getElementById("songnav_category2").options[ag] = new Option(
        ak[ag],
        ag
      );
      if (af) {
        if (ak[ag] == "My Songs") {
          A = ag;
        }
      } else {
        if (ac == null) {
          if (ak[ag] == u) {
            A = ag;
          }
        } else {
          if (ak[ag] == ac) {
            A = ag;
          }
        }
      }
    }
    u = "";
    document.getElementById("songnav_category2").selectedIndex = A;
  }

  function p(ad, ak) {
    var al = songManagerObj.getFontList();
    var ao;
    var af = null;
    var ap = 0;
    var an = 0;
    if (al != null) {
      var am = _fontFamily.length;
      for (var ah = am - 1; ah >= 0; ah--) {
        var at = al.length;
        af = al.indexOf(_fontFamily[ah]);
        if (af != -1) {
          _fontFamily.splice(ah, 1);
        }
      }
      ao = _fontFamily.concat(al);
    } else {
      ao = _fontFamily;
    }
    ao = ao.concat(systemFontList);
    ao.sort();
    var ac = ao.length;
    clearSelectList("se_fontID2");
    clearSelectList("se_fontID2_2");
    var aj = document.createDocumentFragment();
    var ai = document.createDocumentFragment();
    var ag = document.getElementById("se_fontID2");
    var ae = document.getElementById("se_fontID2_2");
    for (var ah = 0; ah < ac; ah++) {
      var ar = document.createElement("option");
      ar.innerHTML = ao[ah];
      ar.value = ah;
      aj.appendChild(ar);
      var aq = document.createElement("option");
      aq.innerHTML = ao[ah];
      aq.value = ah;
      ai.appendChild(aq);
      if (ao[ah] == ad) {
        ap = ah;
      }
      if (ao[ah] == ak) {
        an = ah;
      }
    }
    ag.appendChild(aj);
    ae.appendChild(ai);
    document.getElementById("se_fontID2").selectedIndex = ap;
    if (ak != null) {
      document.getElementById("se_fontID2_2").selectedIndex = an;
    }
  }

  function L() {
    var ad = document.getElementById("se_fontTextID").value;
    var ac = F(ad);
    if (ac) {
      document.getElementById("se_fontTextID").style.visibility = "hidden";
      document.getElementById("se_submitFontButtonID2").style.visibility =
        "hidden";
      _fontFamily.push(ad);
      p(ad, null);
    }
  }

  function w() {
    var ag = document.getElementById("se_fontID2").selectedIndex;
    var af = document.getElementById("se_fontID2").options[ag].text;
    var ae = "";
    var ac = 0;
    var ad = _slideTabs.getTab(ac);
    while (ad != null) {
      ae = G(ad.get("content"));
      document.getElementById(ae).style.fontFamily = af;
      ac++;
      ad = _slideTabs.getTab(ac);
    }
  }

  function Q() {
    var ag = document.getElementById("se_fontID2_2").selectedIndex;
    var af = document.getElementById("se_fontID2_2").options[ag].text;
    var ae = "";
    var ac = 0;
    var ad = _slideTabs.getTab(ac);
    while (ad != null) {
      ae = G(ad.get("content"));
      ae = ae + "_2";
      document.getElementById(ae).style.fontFamily = af;
      ac++;
      ad = _slideTabs.getTab(ac);
    }
  }

  function F(ac) {
    return true;
  }

  function _loadProps(data) {
    if (data != null) {
      document.getElementById("songEdit_NameID").value = data.name;
      document.getElementById("se_copyrightID").value = data.copyright;
      document.getElementById("se_yvideoID").value = data.yvideo;

      if (specialCategory(data.catIndex)) {
        $("#songEdit_saveButtonID").hide();
      } else {
        $("#songEdit_saveButtonID").show();
      }
      aa(data.catIndex);
      p(data.font, data.font2);

      document.getElementById("se_keyID").value = data.key;
      document.getElementById("se_notesID").value = data.notes;
      document.getElementById("songEdit_Name2ID").value = data.name2;
      document.getElementById("songEdit_SongNumberID").value = data.subcat;
      document.getElementById("se_tagID").value = data.tags;
      document.getElementById("se_sequenceID").value = data.slideseq;

      T();

      var numSlides = data.slides.length;
      _log("number of slides in preload: " + numSlides);
      for (var i = 0; i < numSlides; i++) {
        var primarySlide = data.slides[i].replace(/<BR>|<br>/g, "\n");
        var secondarySlide = data.slides2[i];
        if (secondarySlide != null) {
          secondarySlide = secondarySlide.replace(/<BR>|<br>/g, "\n");
        }
        _setSlideContent(primarySlide, secondarySlide);
      }
    } else {
      document.getElementById("songEdit_NameID").value = "";
      document.getElementById("se_copyrightID").value = "";
      document.getElementById("se_yvideoID").value = "";
      aa(null);
      p(null, null);
      document.getElementById("se_keyID").value = "";
      document.getElementById("se_notesID").value = "";
      document.getElementById("songEdit_Name2ID").value = "";
      document.getElementById("songEdit_SongNumberID").value = "";
      document.getElementById("se_tagID").value = "";
      document.getElementById("se_sequenceID").value = "";
      T();
      _setSlideContent();
      _setSlideContent();
    }
  }

  function z() {
    document.getElementById("se_catTextID").value = "";
    document.getElementById("se_catTextID").style.visibility = "visible";
    document.getElementById("se_submitCatButtonID2").style.visibility = "visible";
  }

  function a() {
    var ad = document.getElementById("se_catTextID").value;
    if (specialCategory(ad)) {
      vvDialog(
        "Add Edit Song",
        "Category name starting with 'vv' are reserved."
      );
      return false;
    }
    var ac = B(ad);
    if (ac) {
      document.getElementById("se_catTextID").style.visibility = "hidden";
      document.getElementById("se_submitCatButtonID2").style.visibility =
        "hidden";
      u = ad;
      aa(null);
    }
  }

  function Y() {
    M();
    var ad = _slideTabs.get("activeIndex");
    if (ad != 0) {
      var ai = ad - 1;
      var ag = "slide" + (ad + 1);
      var ae = "slide" + (ai + 1);
      var aj = "slide" + (ad + 1) + "_2";
      var af = "slide" + (ai + 1) + "_2";
      var ah = document.getElementById(ag).value;
      document.getElementById(ag).value = document.getElementById(ae).value;
      document.getElementById(ae).value = ah;
      var ac = document.getElementById(aj).value;
      document.getElementById(aj).value = document.getElementById(af).value;
      document.getElementById(af).value = ac;
      _slideTabs.set("activeIndex", ai);
    }
  }

  function V() {
    M();
    var ah = _slideTabs.get("tabs").length;
    var ag = _slideTabs.get("activeIndex");
    _log(ag + "  " + ah);
    if (ag < ah - 1) {
      var aj = parseInt(ag) + 1;
      var af = "slide" + (ag + 1);
      var ai = "slide" + (aj + 1);
      var ac = "slide" + (ag + 1) + "_2";
      var ad = "slide" + (aj + 1) + "_2";
      var ae = document.getElementById(af).value;
      document.getElementById(af).value = document.getElementById(ai).value;
      document.getElementById(ai).value = ae;
      var ak = document.getElementById(ac).value;
      document.getElementById(ac).value = document.getElementById(ad).value;
      document.getElementById(ad).value = ak;
      _slideTabs.set("activeIndex", aj);
    }
  }

  function t() {
    M();
    var ag = _slideTabs.get("activeIndex") + 1;
    _log("Active tab Index: " + ag);
    var ac = "slide" + ag;
    var af = "slide" + ag + "_2";
    var ae = document.getElementById(ac).value;
    var ad = document.getElementById(af).value;
    _setSlideContent(ae, ad);
  }

  function O() {
    M();
    var ad = null;
    var ac = null;
    _setSlideContent(ad, ac);
  }

  function _setSlideContent(primarySlideContent, secondarySlideContent) {
    var primarySlideId = "slide" + _slideNumber;
    var secondarySlideId = "slide" + _slideNumber + "_2";

    _log("Slide ID: " + primarySlideId);

    if (_slideNumber == 1) {
      _slideTabs.addTab(
        new YAHOO.widget.Tab({
          label: _slideNumber,
          content:
            '<textarea id="' +
            primarySlideId +
            '" style="width: 284px" class="textareaStyle"></textarea><textarea id="' +
            secondarySlideId +
            '" style="width: 284px" class="textareaStyle"></textarea>',
          active: true,
        })
      );
    } else {
      _slideTabs.addTab(
        new YAHOO.widget.Tab({
          label: _slideNumber,
          content:
            '<textarea id="' +
            primarySlideId +
            '" style="width: 284px" class="textareaStyle"></textarea><textarea id="' +
            secondarySlideId +
            '" style="width: 284px" class="textareaStyle"></textarea>',
        })
      );
    }

    var ae = document.getElementById("se_fontID2").selectedIndex;
    tempFont = document.getElementById("se_fontID2").options[ae].text;
    document.getElementById(primarySlideId).style.fontFamily = tempFont;

    var ae = document.getElementById("se_fontID2_2").selectedIndex;
    tempFont = document.getElementById("se_fontID2_2").options[ae].text;
    document.getElementById(secondarySlideId).style.fontFamily = tempFont;

    if (primarySlideContent != null) {
      document.getElementById(primarySlideId).value = primarySlideContent;
    } else {
      document.getElementById(primarySlideId).value = "";
    }

    if (secondarySlideContent != null) {
      document.getElementById(secondarySlideId).value = secondarySlideContent;
    } else {
      document.getElementById(secondarySlideId).value = "";
    }

    _slideNumber++;
  }

  function H() {
    M();
    var ak = "";
    ak = ak + '<div class="style2">';
    ak =
      ak +
      '<textarea id="se_quickSlideID" rows="20" style="width: 390px" class="textareaStyle4songslide"></textarea>';
    ak =
      ak +
      '<textarea id="se_quickSlideID_2" rows="20" style="width: 390px" class="textareaStyle4songslide"></textarea><br>';
    ak = ak + "<i>Seperate the slides with 2 new lines. </i><br><br>";
    ak =
      ak +
      '<br><input type="button" id="se_generateID" value=" GENERATE SLIDES ">';
    ak =
      ak +
      '<input type="button" id="se_generateMunglishID" value=" TRANSLITERATE ">';
    ak =
      ak +
      '<input type="button" id="se_generateCancelID" value=" CANCEL "></DIV>';
    var ac = new YAHOO.widget.Panel("gpanelObj", {
      width: "800px",
      fixedcenter: true,
      modal: true,
      visible: false,
      constraintoviewport: true,
    });
    ac.render(document.body);
    ac.setHeader("Generate Slides");
    ac.setBody(ak);
    
    var windowHeight = $(window).height();
    windowHeight = windowHeight * 0.8;
    $("#se_quickSlideID").height(windowHeight);
    $("#se_quickSlideID_2").height(windowHeight);
    document
      .getElementById("se_generateID")
      .addEventListener("click", ao, false);
    document
      .getElementById("se_generateMunglishID")
      .addEventListener("click", ap, false);
    document
      .getElementById("se_generateCancelID")
      .addEventListener("click", ah, false);
    var al = document.getElementById("se_fontID2").selectedIndex;
    var ad = document.getElementById("se_fontID2").options[al].text;
    document.getElementById("se_quickSlideID").style.fontFamily = ad;
    var al = document.getElementById("se_fontID2_2").selectedIndex;
    var ad = document.getElementById("se_fontID2_2").options[al].text;
    document.getElementById("se_quickSlideID_2").style.fontFamily = ad;

    var numSlides = _slideTabs.get("tabs").length;

    var primarySlidesList = [];
    var secondarySlidesList = [];

    for (var slideIndex = 1; slideIndex <= numSlides; slideIndex++) {
      primarySlidesList.push(document.getElementById("slide" + slideIndex).value);
      secondarySlidesList.push(document.getElementById("slide" + slideIndex + "_2").value);
    }

    // write content to the textarea (primary and secondary)
    document.getElementById("se_quickSlideID").value = primarySlidesList.join("\n\n\n").trim();
    document.getElementById("se_quickSlideID_2").value = secondarySlidesList.join("\n\n\n").trim();

    ac.show();
    ac.bringToTop();

    function ao() {
      _slideNumber = 1;
      var av = document.getElementById("se_quickSlideID").value;
      var az = av.split("\n\n\n");
      var ar = az.length;
      var au = document.getElementById("se_quickSlideID_2").value;
      var at = au.split("\n\n\n");
      var ay = at.length;
      if (at[0] != null) {
        _setSlideContent(az[0], at[0]);
      } else {
        _setSlideContent(az[0], null);
      }
      var aw = _slideTabs.getTab(1);
      while (aw != null) {
        _slideTabs.removeTab(_slideTabs.get("activeTab"));
        aw = _slideTabs.getTab(1);
      }
      _slideNumber = 2;
      for (var ax = 1; ax < ar; ax++) {
        if (at[ax] != null) {
          _setSlideContent(az[ax], at[ax]);
        } else {
          _setSlideContent(az[ax], null);
        }
      }
      ah();
    }
    function ah() {
      af();
      ac.hide();
    }
    function af() {
      document
        .getElementById("se_generateID")
        .removeEventListener("click", ao, false);
      document
        .getElementById("se_generateMunglishID")
        .removeEventListener("click", ap, false);
      document
        .getElementById("se_generateCancelID")
        .removeEventListener("click", ah, false);
    }
    function ap() {
      var at = document.getElementById("se_quickSlideID").value;
      var ax = at.split("\n");
      var ar = ax.length;
      var av = new valsonachanTransliteration();
      var aw = "";
      for (var au = 0; au < ar; au++) {
        aw += av.munglishLine(ax[au]) + "\n";
      }
      av = null;
      document.getElementById("se_quickSlideID_2").value = aw;
      vvDialog(
        "Lyrics Transliteration",
        "Transliteration is only valid for Malayalam and it is not 100% accurate."
      );
    }
  }

  function K() {
    M();
    var af = _slideTabs.get("activeIndex");
    var ac = _slideTabs.get("tabs").length;
    for (var ae = 0; ae < ac; ae++) {
      V();
    }
    var ad = _slideTabs.getTab(1);
    if (ad != null) {
      _slideTabs.removeTab(_slideTabs.get("activeTab"));
      if (ac - 1 == af) {
        _slideTabs.set("activeIndex", af - 1);
      } else {
        _slideTabs.set("activeIndex", af);
      }
      _slideNumber--;
    } else {
      vvDialog("Add Edit Songs", "Can not delete the last Slide");
    }
  }

  function N() {
    document.getElementById("se_fontTextID").value = "";
    document.getElementById("se_fontTextID").style.visibility = "visible";
    document.getElementById("se_submitFontButtonID2").style.visibility =
      "visible";
  }

  function S() {
    _log("Extract data from Form");
    var ao = document.getElementById("songEdit_NameID").value;
    ao = ao.replace(/^\s+|\s+$/g, "");
    ao = ao.replace(/\s\s+/g, " ");
    if (ao == "") {
      vvDialog("Add Edit Songs", "Enter a valid Song Name");
      return false;
    } else {
      var ak = new songObj();
      ak.name = ao;
      ao = document.getElementById("songEdit_Name2ID").value;
      ao = ao.replace(/^\s+|\s+$/g, "");
      ao = ao.replace(/\s\s+/g, " ");
      ak.name2 = ao;
      var ae = new Array();
      var ah = new Array();
      var ac = "";
      var ad = 0;
      var aj = _slideTabs.getTab(ad);
      while (aj != null) {
        ac = G(aj.get("content"));
        var an = document.getElementById(ac).value;
        ae[ad] = an.replace(/\n/g, "<BR>");
        ac = ac + "_2";
        var an = document.getElementById(ac).value;
        ah[ad] = an.replace(/\n/g, "<BR>");
        if (isBlank(ah[ad])) {
          ah[ad] = "";
        }
        ad++;
        aj = _slideTabs.getTab(ad);
      }
      ak.slides = ae;
      ak.slides2 = ah;
      ak.copyright = document.getElementById("se_copyrightID").value;
      var ag = document.getElementById("se_yvideoID").value;
      var am = x(ag);
      if (am) {
        ak.yvideo = ag;
      } else {
        vvDialog("Add Edit Songs", "Enter valid You Tube video link.");
        return false;
      }
      var ai = document.getElementById("songnav_category2").selectedIndex;
      ak.catIndex =
        document.getElementById("songnav_category2").options[ai].text;
      ak.subcat = "";
      if (!specialCategory(ak.catIndex)) {
        if (
          ak.catIndex == "VV Malayalam 2021" ||
          ak.catIndex == "VV Hindi 2021"
        ) {
          var af = document.getElementById("songEdit_SongNumberID").value;
          if (af == "" || af == null) {
            ak.subcat = songNumberObj.assignSongNumber(ak.catIndex);
          } else {
            ak.subcat = af;
          }
        }
      }
      var al = document.getElementById("se_fontID2").selectedIndex;
      ak.font = document.getElementById("se_fontID2").options[al].text;
      var al = document.getElementById("se_fontID2_2").selectedIndex;
      ak.font2 = document.getElementById("se_fontID2_2").options[al].text;
      ak.timestamp = _timestampNow();
      ak.key = document.getElementById("se_keyID").value;
      ak.notes = document.getElementById("se_notesID").value;
      ak.rating = 5;
      var ap = document.getElementById("se_sequenceID").value;
      ak.slideseq = ap;
      var aq = document.getElementById("se_tagID").value;
      ak.tags = aq.toUpperCase();
      addTagList(ak.tags);
      fillTagList();
      return ak;
    }
  }

  function g() {
    _log("Process Present button");
    var ac = _slideTabs.get("activeIndex");
    var ae = new songObj();
    ae = S();
    if (ae != false) {
      var ad = new songPresentObj();
      ad.init(ae);
      ad.present(ac);
    }
  }

  function U() {
    _log("Process Save button");
    var ac = new songObj();
    ac = S();
    if (ac != false) {
      if (!b) {
        _log("Adding song..");
        songManagerObj.addSong(ac, true, false);
        b = true;
      } else {
        _log("Updating song..");
        songManagerObj.updateSong(ac, v, _editPrimaryKey, Z);
      }
      _panel.hide();
      return true;
    } else {
      _log("Extract Data failed");
      return false;
    }
  }

  function k() {
    var ac = b;
    b = false;
    if (!U()) {
      b = ac;
    }
  }

  function j() {
    var ad = new songObj();
    ad = S();
    if (ad != false) {
      for (var ac = 0; ac < 200; ac++) {
        ad.name = "Test Song_" + ac;
        if (!b) {
          songManagerObj.addSong(ad, false, false);
          b = true;
        } else {
          songManagerObj.updateSong(ad, v, _editPrimaryKey);
        }
      }
    }
  }

  function s() {
    var ac = $("#songnav_category2 option:selected").text();
    if (specialCategory(ac)) {
      $("#songEdit_saveButtonID").hide();
    } else {
      $("#songEdit_saveButtonID").show();
    }
  }

  function C() {
    var ac = "Song Add/Edit";
    var ad = "Do you want to CANCEL from Add/Edit Song panel?";
    vvConfirm(ac, ad, l);
  }

  function l() {
    _panel.hide();
  }

  function G(ad) {
    var ac = ad.split('"');
    return ac[1];
  }

  function B(ac) {
    if (ac != "_ALL") {
      return true;
    } else {
      alert("_ALL is reserved Category");
      return false;
    }
  }

  function o(ac) {
    if (ac <= 5 && ac >= 1) {
      return true;
    } else {
      return false;
    }
  }

  function r(ac) {
    return true;
  }

  function M() {
    document.getElementById("se_sequenceID").value = "";
  }

  function x(af) {
    var ae = af.replace(/ /gi, "");
    if (ae == "") {
      document.getElementById("se_yvideoID").value = "";
      return true;
    }
    var ad = ae.split("&");
    ae = ad[0];
    document.getElementById("se_yvideoID").value = ae;
    ad = ae.split("?v=");
    var ac = "https://www.youtube.com/watch";
    if (ad[0] != ac) {
      return false;
    } else {
      return true;
    }
  }

  function _timestampNow() {
    var now = new Date();
    var month = parseInt(String(now.getMonth())) + 1;
    var day = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var timestampStr = month + "/" + day + "/" + year + "  " + hours + ":" + minutes;
    _log("Timestamp: " + timestampStr);
    return timestampStr;
  }

  function _log(message) {
    if (DEBUG_MODE) {
      air.trace("[SongEdit]...." + message);
    }
  }
}
