const codec = require('./codec');

test('hexDec', () => {
    expect(codec.hexDec("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d")).toStrictEqual((new TextEncoder()).encode("I'm killing your brain like a poisonous mushroom"));
});

test('base64Enc', () => {
    expect(codec.base64Enc("")).toBe("");
    expect(codec.base64Enc("f")).toBe("Zg==");
    expect(codec.base64Enc("fo")).toBe("Zm8=");
    expect(codec.base64Enc("foo")).toBe("Zm9v");
    expect(codec.base64Enc("foob")).toBe("Zm9vYg==");
    expect(codec.base64Enc("fooba")).toBe("Zm9vYmE=");
    expect(codec.base64Enc("foobar")).toBe("Zm9vYmFy");
});
