companyCard.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'companycard-panel-home',
            renderTo: 'companycard-panel-home-div'
        }]
    });
    companyCard.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.page.Home, MODx.Component);
Ext.reg('companycard-page-home', companyCard.page.Home);