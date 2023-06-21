const hexCharTable:  {[key: string]: number} = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15};

function hexchar2nibble (hexchar : string): number {
    return hexCharTable[hexchar.toLowerCase()];
}

exports.hexDec = function (hex : string) {
    if (hex.length % 2 != 0) {
        throw "Hex string has invalid length!";
    }
    const buf = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        const hi = hexchar2nibble(hex[i]);
        const low = hexchar2nibble(hex[i + 1]);
        const byte = (hi << 4) | low;
        buf[i / 2] = byte;
    }
    return buf;
};

exports.base64Enc = function (buf : Uint8Array) {
    return "";
};
