class SongImporter {
  constructor() {
    const o = false;
    const l = null;
    let p = null;
    let k = null;
    let a = false;
    let f = null;
    let g = null;

    this.init = function q() {
      r();
    };

    // ctor
    this.init();

    function r() {
      k = air.File.desktopDirectory;
      var t = new window.runtime.Array();
      t.push(new air.FileFilter("VerseVIEW Song DB", "*.db"));
      k.browseForOpen("Select Song DB", t);
      k.addEventListener(air.Event.SELECT, s);
    }

    function s(t) {
      _log(k.nativePath);
      p = k;
      d();
    }

    function _log(t) {
      if (o) {
        air.trace("[SongImportManager]...." + t);
      }
    }

    function d() {
      f = new air.SQLConnection();
      f.addEventListener(air.SQLEvent.OPEN, j);
      f.addEventListener(air.SQLErrorEvent.ERROR, n);
      f.openAsync(p);
    }

    function j(t) {
      _log("DB was created successfully");
      a = true;
      e();
    }

    function n(t) {
      _log("Error message:" + t.error.message);
      _log("Details (create DB):" + t.error.details);
      a = false;
    }

    function e() {
      _log(" Creating song import Manager table...");
      const createStmt = new air.SQLStatement();
      createStmt.sqlConnection = f;
      createStmt.text = "CREATE TABLE IF NOT EXISTS sm (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, cat TEXT, font TEXT, bkgndfname TEXT, key TEXT, copy TEXT, notes TEXT, lyrics TEXT )";
      createStmt.addEventListener(air.SQLEvent.RESULT, b);
      createStmt.addEventListener(air.SQLErrorEvent.ERROR, h);
      createStmt.execute();
    }

    function b() {
      createStmt.removeEventListener(air.SQLEvent.RESULT, b);
      createStmt.removeEventListener(air.SQLErrorEvent.ERROR, h);
      _log("Song Import Table created.....");
      c();
    }

    function h(t) {
      createStmt.removeEventListener(air.SQLEvent.RESULT, b);
      createStmt.removeEventListener(air.SQLErrorEvent.ERROR, h);
      _log("Error message:" + t.error.message);
      _log("Details in creating table :" + t.error.details);
    }

    function i() {
      f = null;
      a = false;
    }

    function c() {
      _log("Getting ALL Data from Song Import DB");
      var v = new air.SQLStatement();
      v.sqlConnection = f;
      var w = "SELECT * FROM sm ORDER BY name ASC";
      v.text = w;
      v.addEventListener(air.SQLEvent.RESULT, u);
      v.addEventListener(air.SQLErrorEvent.ERROR, t);
      v.execute();
      function u(x) {
        _log("Succesfuly got all data from Song Import DB");
        g = v.getResult();
        songManagerObj.addImportSongs(g);
      }
      function t(x) {
        _log("Song Import Manager data error...");
      }
    }
  }
}

vvw.provide('vvw.song').Importer = SongImporter;
