class SongPresenter {
    constructor(f) {
        this.init = c;
        this.present = e;
        let d = new vvw.song.Song();

        function c(f) {
            d = f;
        }
        function a() {
            var f = d.slides2;
            if (f[0] == null) {
                return true;
            }
            f = f[0].replace(/ /g, "");
            if (f == "") {
                return true;
            } else {
                return false;
            }
        }
        function e(g) {
            p_text1_arr = d.slides;
            p_text2_arr = d.slides2;
            p_text1_font = d.font;
            p_text2_font = d.font2;
            if (vvConfigObj.get_p_showTitle()) {
                p_title = d.name;
            } else {
                p_title = "";
            }
            p_footnote = d.copyright;
            if (g == null) {
                p_current_index = 0;
            } else {
                p_current_index = g;
            }
            p_last_index = d.slides.length - 1;
            p_bkgnd_filename = graphicsObj.getBkgndFilename();
            p_bkgnd_motion = graphicsObj.getMotionFlag();
            p_bkgnd_color = "blue";
            p_font_color = vvConfigObj.get_p_textColor();
            p_font_color2 = vvConfigObj.get_p_textColor2();
            p_ver1ScaleFactor = 2;
            p_ver2ScaleFactor = 2;
            var h = a();
            var f = vvConfigObj.get_song_primaryOnly();
            if (f == "true" || h) {
                p_text_orientation = "2";
            } else {
                if (vvConfigObj.get_song_text_orientation() == "0") {
                    p_text_orientation = "0";
                } else {
                    p_text_orientation = "1";
                }
            }
            presentation();
        }
        function b() {
            var h = new Array();
            var g = d.slides.length;
            for (var f = 0; f < g; f++) {
                h[f] = "";
            }
            return h;
        }

        this.init(f)
    }
}

vvw.provide('vvw.song').Presenter = SongPresenter;
