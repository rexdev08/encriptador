export class Encriptador {

    static attrs = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

    static desencriptar(text) {
        for (let attr in this.attrs) {
            text = text.replaceAll(this.attrs[attr], attr)
        }

        return text;
    }

    static encriptar(text) {

        for (let attr in this.attrs) {
            text = text.replaceAll(attr, this.attrs[attr])
        }
        return text;

    }
}


