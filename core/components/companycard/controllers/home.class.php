<?php

/**
 * The home manager controller for companyCard.
 *
 */
class companyCardHomeManagerController extends modExtraManagerController
{
    /** @var companyCard $companyCard */
    public $companyCard;


    /**
     *
     */
    public function initialize()
    {
        $corePath = $this->modx->getOption('companycard_core_path', array(), $this->modx->getOption('core_path') . 'components/companycard/');
        $this->companyCard = $this->modx->getService('companyCard', 'companyCard', $corePath . 'model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['companycard:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('companycard');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->companyCard->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/companycard.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/widgets/cards.grid.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/widgets/cards.windows.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/widgets/tk.grid.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/widgets/tk.windows.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->companyCard->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        companyCard.config = ' . json_encode($this->companyCard->config) . ';
        companyCard.config.connector_url = "' . $this->companyCard->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "companycard-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="companycard-panel-home-div"></div>';

        return '';
    }
}