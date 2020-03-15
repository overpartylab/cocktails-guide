// Compiled using ts2gas 3.6.1 (TypeScript 3.8.3)
// import CONFIG from './config';
var COMMON = {
    RETURN_FORMAT: {
        data: '',
        info: ''
    }
};
var RECIPE = {
    BASE_LIST: [
        { key: 'all', name: 'All' },
        { key: 'vodka', name: 'Vodka 伏特加' },
        { key: 'gin', name: 'Gin 琴酒' },
        { key: 'rum', name: 'Rum 蘭姆酒' },
        { key: 'tequila', name: 'Tequila 龍舌蘭' },
        { key: 'whiskey', name: 'Whiskey 威士忌' }
    ],
    ATTACHED_LIST: [
        { key: 'all', name: 'All' },
        { key: 'coke', name: 'Coke 可樂' },
        { key: 'sprite', name: 'Sprite 雪碧' },
        { key: 'bubble', name: 'Bubble 氣泡水' },
        { key: 'grapefruit', name: 'Grapefruit 葡萄柚' },
        { key: 'cranberry', name: 'Cranberry 蔓越梅' },
        { key: 'orange', name: 'Orange 柳橙' },
        { key: 'Pineapple', name: 'pineapple 鳳梨' },
        { key: 'kiwi', name: 'Kiwi 奇異果' }
    ]
};
var CONFIG = {
    COMMON: COMMON,
    RECIPE: RECIPE
};
var RETURN_FORMAT = COMMON.RETURN_FORMAT;
var BASE_LIST = RECIPE.BASE_LIST, ATTACHED_LIST = RECIPE.ATTACHED_LIST;
// const { COMMON: RETURN_FORMAT } = CONFIG;
// const { RECIPE: { BASE_LIST, ATTACHED_LIST } } = CONFIG;
var doGet = function (e) {
    var method = e.parameter.method;
    var result = RETURN_FORMAT;
    if (method === 'getRecipeCriteriaList') {
        result.data = {
            'base_list': BASE_LIST,
            'attached_list': ATTACHED_LIST
        };
        result.info = 'success';
    }
    var JSONString = JSON.stringify(result);
    return ContentService.createTextOutput(JSONString)
        .setMimeType(ContentService.MimeType.JSON);
};
