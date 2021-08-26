const { Principal } = require('@dfinity/principal');

const tokenIdentifier = (principal, index) => {
    const padding = Buffer.from("\x0Atid");
    const array = new Uint8Array([
        ...padding,
        ...Principal.fromText(principal).toUint8Array(),
        ...to32bits(index),
    ]);
    return Principal.fromUint8Array(array).toText();
};

const to32bits = num => {
    let b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
}

console.log(tokenIdentifier(process.argv[2], process.argv[3]));
