// 生成电话号码的函数
function generatePhoneNumber(country) {
    switch (country) {
        case 'china':
            return generateChinesePhoneNumber();
        case 'india':
            return generateIndianPhoneNumber();
        case 'us':
            return generateUSPhoneNumber();
        case 'indonesia':
            return generateIndonesianPhoneNumber();
        case 'brazil':
            return generateBrazilianPhoneNumber();
        case 'nigeria':
            return generateNigerianPhoneNumber();
        case 'japan':
            return generateJapanesePhoneNumber();
        case 'russia':
            return generateRussianPhoneNumber();
        case 'bangladesh':
            return generateBangladeshiPhoneNumber();
        case 'mexico':
            return generateMexicanPhoneNumber();
        default:
            return 'Invalid country code';
    }
}

// 生成中国手机号
function generateChinesePhoneNumber() {
    const prefixes = [
        '130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
        '150', '151', '152', '153', '155', '156', '157', '158', '159',
        '170', '176', '177', '178',
        '180', '181', '182', '183', '184', '185', '186', '187', '188', '189'
    ];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return prefix + suffix;
}

// 生成印度手机号
function generateIndianPhoneNumber() {
    const prefixes = ['7', '8', '9'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    return prefix + suffix;
}

// 生成美国手机号
function generateUSPhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${areaCode}-${prefix}-${lineNumber}`;
}

// 生成印度尼西亚手机号
function generateIndonesianPhoneNumber() {
    const prefixes = ['811', '812', '813', '821', '822', '823', '851', '852', '853'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return prefix + suffix;
}

// 生成巴西手机号
function generateBrazilianPhoneNumber() {
    const areaCode = Math.floor(Math.random() * 90) + 10;
    const prefix = '9';
    const number = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return `(${areaCode}) ${prefix}${number}`;
}

// 生成尼日利亚手机号
function generateNigerianPhoneNumber() {
    const prefixes = ['703', '706', '803', '806', '810', '813', '816', '903', '906'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return prefix + suffix;
}

// 生成日本手机号
function generateJapanesePhoneNumber() {
    const prefixes = ['070', '080', '090'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const middlePart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const lastPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${middlePart}-${lastPart}`;
}

// 生成俄罗斯手机号
function generateRussianPhoneNumber() {
    const prefixes = ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return `+7${prefix}${suffix}`;
}

// 生成孟加拉国手机号
function generateBangladeshiPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return prefix + suffix;
}

// 生成墨西哥手机号
function generateMexicanPhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const firstPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const secondPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${areaCode}-${firstPart}-${secondPart}`;
}

// 导出函数供其他文件使用
module.exports = generatePhoneNumber;
console.log(generatePhoneNumber('china'));