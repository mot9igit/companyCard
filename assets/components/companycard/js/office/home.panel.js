companyCard.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'companycard-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('companycard_items'),
                layout: 'anchor',
                items: [{
                    html: _('companycard_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'companycard-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    companyCard.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.panel.Home, MODx.Panel);
Ext.reg('companycard-panel-home', companyCard.panel.Home);