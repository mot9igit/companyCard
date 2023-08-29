Ext.onReady(function () {
    companyCard.config.connector_url = OfficeConfig.actionUrl;

    var grid = new companyCard.panel.Home();
    grid.render('office-companycard-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});