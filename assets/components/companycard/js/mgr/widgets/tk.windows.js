companyCard.window.CreateTk = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'companycard-tk-window-create';
    }
    Ext.applyIf(config, {
        title: _('companycard_tk_create'),
        width: 550,
        autoHeight: true,
        url: companyCard.config.connector_url,
        action: 'mgr/tk/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    companyCard.window.CreateTk.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.window.CreateTk, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('companycard_tk_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_tk_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('companycard_tk_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('companycard-tk-window-create', companyCard.window.CreateTk);


companyCard.window.UpdateTk = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'companycard-tk-window-update';
    }
    Ext.applyIf(config, {
        title: _('companycard_tk_update'),
        width: 550,
        autoHeight: true,
        url: companyCard.config.connector_url,
        action: 'mgr/tk/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    companyCard.window.UpdateTk.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.window.UpdateTk, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_tk_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_tk_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('companycard_tk_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('companycard-tk-window-update', companyCard.window.UpdateTk);