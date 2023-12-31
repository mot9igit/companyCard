companyCard.combo.ComboBoxDefault = function (config) {
    config = config || {};

    Ext.applyIf(config, {
        assertValue : function () {
            var val = this.getRawValue(),
                rec;
            if (this.valueField && Ext.isDefined(this.value)) {
                rec = this.findRecord(this.valueField, this.value);
            }
            /* fix for https://github.com/bezumkin/miniShop2/pull/350
            if(!rec || rec.get(this.displayField) != val){
                rec = this.findRecord(this.displayField, val);
            }*/
            if (rec && rec.get(this.displayField) != val) {
                rec = null;
            }
            if (!rec && this.forceSelection) {
                if (val.length > 0 && val != this.emptyText) {
                    this.el.dom.value = Ext.value(this.lastSelectionText, '');
                    this.applyEmptyText();
                } else {
                    this.clearValue();
                }
            } else {
                if (rec && this.valueField) {
                    if (this.value == val) {
                        return;
                    }
                    val = rec.get(this.valueField || this.displayField);
                }
                this.setValue(val);
            }
        },

    });
    companyCard.combo.ComboBoxDefault.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.combo.ComboBoxDefault, MODx.combo.ComboBox);
Ext.reg('cc-combo-combobox-default', companyCard.combo.ComboBoxDefault);

companyCard.combo.Search = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('search'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerSearch,
        onTrigger2Click: this._triggerClear,
    });
    companyCard.combo.Search.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerSearch();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(companyCard.combo.Search, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerSearch: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
Ext.reg('companycard-combo-search', companyCard.combo.Search);
Ext.reg('companycard-field-search', companyCard.combo.Search);

companyCard.combo.company_type = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore({
            id: 0
            ,fields: ['company_type','display']
            ,data: [
                ['Физ. лицо', 'Физ. лицо']
                ,['ИП','ИП']
                ,['ООО','ООО']
                ,['ОАО','ОАО']
                ,['ЗАО','ЗАО']
                ,['Другое','Другое']
            ]
        })
        ,mode: 'local'
        ,displayField: 'display'
        ,valueField: 'company_type'
    });
    companyCard.combo.company_type.superclass.constructor.call(this,config);
};
Ext.extend(companyCard.combo.company_type,MODx.combo.ComboBox);
Ext.reg('combo-company_type',companyCard.combo.company_type);

companyCard.combo.User = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'user',
        fieldLabel: config.name || 'createdby',
        hiddenName: config.name || 'createdby',
        displayField: 'fullname',
        valueField: 'id',
        anchor: '99%',
        fields: ['username', 'id', 'fullname'],
        pageSize: 20,
        typeAhead: false,
        editable: true,
        allowBlank: false,
        url: companyCard.config['connector_url'],
        baseParams: {
            action: 'mgr/system/user/getlist',
            combo: true,
        },
        tpl: new Ext.XTemplate(
            '\
            <tpl for=".">\
                <div class="x-combo-list-item">\
                    <span>\
                        <small>({id})</small>\
                        <b>{username}</b>\
                        <tpl if="fullname && fullname != username"> - {fullname}</tpl>\
                    </span>\
                </div>\
            </tpl>',
            {compiled: true}
        ),
    });
    companyCard.combo.User.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.combo.User, companyCard.combo.ComboBoxDefault);
Ext.reg('cc-combo-user', companyCard.combo.User);

companyCard.combo.tk = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        url: companyCard.config.connector_url,
        baseParams: {
            action: 'mgr/system/tk/getlist',
        },
        name: 'tk',
        hiddenName: 'tk',
        fields: ['id', 'name', 'description'],
        mode: 'remote',
        displayField: 'name',
        fieldLabel: _('companycard_tk_id'),
        valueField: 'id',
        editable: true,
        anchor: '99%',
        allowBlank: false,
        autoLoad: true,
        tpl: new Ext.XTemplate(
            '\
            <tpl for=".">\
                <div class="x-combo-list-item">\
                    <span>\
                        <small>({id})</small>\
                        <b>{name}</b>\
                    </span>\
                </div>\
            </tpl>',
            {compiled: true}
        ),
    });
    companyCard.combo.tk.superclass.constructor.call(this, config);
};
Ext.extend(companyCard.combo.tk, MODx.combo.ComboBox);
Ext.reg('cc-combo-tk', companyCard.combo.tk);