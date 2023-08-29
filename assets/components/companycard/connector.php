<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
} else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var companyCard $companyCard */
$companyCard = $modx->getService('companyCard', 'companyCard', MODX_CORE_PATH . 'components/companycard/model/');
$modx->lexicon->load('companycard:default');

// handle request
$corePath = $modx->getOption('companycard_core_path', null, $modx->getOption('core_path') . 'components/companycard/');
$path = $modx->getOption('processorsPath', $companyCard->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest([
    'processors_path' => $path,
    'location' => '',
]);