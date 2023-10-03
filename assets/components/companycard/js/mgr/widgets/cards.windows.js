companyCard.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'companycard-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('companycard_item_create'),
        width: 550,
        autoHeight: true,
        url: companyCard.config.connector_url,
        action: 'mgr/companycard/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    companyCard.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_city'),
            name: 'city',
            id: config.id + '-city',
            anchor: '99%',
            allowBlank: true,
        },{
            xtype: 'combo-company_type',
            fieldLabel: _('companycard_item_company_type'),
            name: 'company_type',
            id: config.id + '-company_type',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_contact_name'),
            name: 'name',
            id: config.id + '-contact_name',
            anchor: '99%',
            allowBlank: true,
        },{
            xtype: 'cc-combo-user',
            fieldLabel: _('companycard_item_user_id'),
            name: 'user_id',
            anchor: '99%',
            id: config.id + '-user_id',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_contact_email'),
            name: 'contact_email',
            id: config.id + '-contact_email',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_contact_phone'),
            name: 'contact_phone',
            id: config.id + '-contact_phone',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_item_address_ur'),
            name: 'address_ur',
            id: config.id + '-address_ur',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_item_address_fact'),
            name: 'address_fact',
            id: config.id + '-address_fact',
            anchor: '99%',
            height: 150,
        },{
            xtype: 'cc-combo-tk',
            fieldLabel: _('companycard_item_tk'),
            name: 'tk',
            id: config.id + '-tk',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('companycard_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('companycard-item-window-create', companyCard.window.CreateItem);


companyCard.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'companycard-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('companycard_item_update'),
        width: 550,
        autoHeight: true,
        url: companyCard.config.connector_url,
        action: 'mgr/companycard/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    companyCard.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_city'),
            name: 'city',
            id: config.id + '-city',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'cc-combo-user',
            fieldLabel: _('companycard_item_user_id'),
            name: 'user_id',
            anchor: '99%',
            id: config.id + '-user_id',
            allowBlank: false
        },{
            xtype: 'combo-company_type',
            fieldLabel: _('companycard_item_company_type'),
            name: 'company_type',
            id: config.id + '-company_type',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_ur_name'),
            name: 'ur_name',
            id: config.id + '-ur_name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_inn'),
            name: 'inn',
            id: config.id + '-inn',
            anchor: '99%'
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_kpp'),
            name: 'kpp',
            id: config.id + '-kpp',
            anchor: '99%'
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_ogrn'),
            name: 'ogrn',
            id: config.id + '-ogrn',
            anchor: '99%'
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_bank_knumber'),
            name: 'bank_knumber',
            id: config.id + '-bank_knumber',
            anchor: '99%'
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_bank_name'),
            name: 'bank_name',
            id: config.id + '-bank_name',
            anchor: '99%'
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_bank_number'),
            name: 'bank_number',
            id: config.id + '-bank_number',
            anchor: '99%'
        },{
            xtype: 'textfield',
            fieldLabel: _('companycard_item_bank_bik'),
            name: 'bank_bik',
            id: config.id + '-bank_bik',
            anchor: '99%'
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_contact_name'),
            name: 'contact_name',
            id: config.id + '-contact_name',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_contact_email'),
            name: 'contact_email',
            id: config.id + '-contact_email',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('companycard_item_contact_phone'),
            name: 'contact_phone',
            id: config.id + '-contact_phone',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_item_address_ur'),
            name: 'address_ur',
            id: config.id + '-address_ur',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_item_address_fact'),
            name: 'address_fact',
            id: config.id + '-address_fact',
            anchor: '99%',
            height: 150,
        },{
            xtype: 'cc-combo-tk',
            fieldLabel: _('companycard_item_tk'),
            name: 'tk',
            id: config.id + '-tk',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('companycard_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('companycard_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('companycard-item-window-update', companyCard.window.UpdateItem);