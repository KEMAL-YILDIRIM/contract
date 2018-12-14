const _validColor = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;

const Color = {
    RgbToHex: (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1
            ? '0' + hex
            : hex
    }).join(''),
    HexToRgb: (colorCode) => {
        const [,
            short,
            long] = String(colorCode).match(_validColor) || [];

        if (long) {
            const value = Number.parseInt(long, 16);
            return [
                value >> 16,
                (value >> 8) & 0xFF,
                value & 0xFF
            ];
        } else if (short) {
            return Array
                .from(short, s => Number.parseInt(s, 16))
                .map(n => (n << 4) | n);
        } else {
            console.log('Not a valid hex color code.')
            return false;
        }
    },
    RgbaToHex: (r, g, b, a) => '#' + [r, g, b, a]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')
}

export default Color;