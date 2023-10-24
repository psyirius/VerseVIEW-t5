import * as xml from "./utils/xml";

class Config {
    protected constructor(doc: XMLDocument) {

    }

    static load(path: string) {
        const doc = xml.parse(path);
        return new this(doc);
    }

    save() {
        // TODO: impl
    }
}

export {}