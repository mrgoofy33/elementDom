/** 
 * @fileOverview DOM関連の独自オブジェクト用ファイル
 * 
 * @author mrgoofy33
 * @version 1.0.0
 */

/**
 * @class DOM関連の独自オブジェクト
 */

var elementDom = {};

/**
 * Element生成 AttributeをHashで受け取り設定する
 * @param {String} tagName 生成したいElementのタグ名
 * @param {String} attrHash 生成したいElementのAttribute(ハッシュ)
 * @return {Object} 生成されたElementオブジェクト
 */
elementDom.createElementAttribute = function(tagName, attrHash){
    var element = document.createElement(tagName);
    for (var h in attrHash) {
        element[h] = attrHash[h];
    }
    return element
};

/**
 * appendChildを配列でも受け取り可能にする(再帰的関数)
 * @param {Object} parent 子要素を追加したい親要素
 * @param {Object,Array} child 追加したい子要素
 * @return {Object} 子要素が追加された親要素
 */
elementDom.appendChildren = function(parent, child){
    /* 子要素が配列かを判定 */
    if (child instanceof Array) {
        /* 親要素を保持 */
        var nextParent = parent;
        for (var i=0, l=child.length; i<l; i++) {
            /* 子要素[i]が配列かを判定 */
            if (child[i] instanceof Array) {
                /* 子要素[i]をchildとして再起呼び出し */
                /* 親候補に子要素[i]を追加 */
                this.appendChildren(nextParent, child[i]);
            }else{
                /* 子要素[i]をchildとして再起呼び出し */
                this.appendChildren(parent, child[i]);
                /* 子要素[i]を親候補として保存 */
                nextParent = child[i];
            }
        }
    }else{
        /* 配列以外の場合はそのまま追加 */
        parent.appendChild(child);
    }
    return parent;
};
