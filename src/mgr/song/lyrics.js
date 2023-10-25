class SongLyrics {
    constructor(h, g, i, l) {
        let d = null;
        let a = null;
        let e = 0;

        this.init = c;

        function c(h, g, i, l) {
            let j;
            d = h;
            a = g;
            e = i;
            if (l === 1) {
                j = '<a href="#">' + d.slides[e] + "</a>";
            } else {
                const f = d.slides2[e];
                if (f != null) {
                    j = '<a href="#">' + f + "</a>";
                }
            }
            document.getElementById(a).innerHTML = j;
            const k = document.getElementById(a);
            k.style.padding = "10px";
            k.style.backgroundColor = highlightColor;
            k.style.borderRadius = "10px";
            document.getElementById(a).addEventListener("click", b, false);
        }

        function b() {
            const f = new vvw.song.Presenter(d);
            f.present(e);
        }

        this.init(h, g, i, l);
    }
}

vvw.provide('vvw.song').Lyrics = SongLyrics;