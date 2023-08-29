var companyCard = function (config) {
    config = config || {};
    companyCard.superclass.constructor.call(this, config);
};
Ext.extend(companyCard, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('companycard', companyCard);

companyCard = new companyCard();