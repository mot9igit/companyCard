<?php
/** @var modX $modx */
/** @var array $scriptProperties */
/** @var companyCard $companyCard */
$corePath = $modx->getOption('companycard_core_path', array(), $modx->getOption('core_path') . 'components/companycard/');
$companyCard = $modx->getService('companyCard', 'companyCard', $corePath . 'model/');
if (!$companyCard) {
    return 'Could not load companycard class!';
}

$companyCard->initialize($modx->resource->get("context_key"));

if (!$modx->loadClass('pdofetch', MODX_CORE_PATH . 'components/pdotools/model/pdotools/', false, true)) {
    return 'Could not load pdoFetch class!';
}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

// Do your snippet code here. This demo grabs 5 items from our custom table.
$tpl = $modx->getOption('tpl', $scriptProperties, 'tpl.companyCard.form');
$toPlaceholder = $modx->getOption('toPlaceholder', $scriptProperties, false);

// Build query
$c = $modx->newQuery('companyCardItem');
$c->where(['active' => 1, 'user_id' => $modx->user->get("id")]);
$c->limit(1);
$items = $modx->getCollection('companyCardItem', $c);

// Iterate through items
$list = [];
/** @var companyCardItem $item */
foreach ($items as $item) {
    $i = $item->toArray();
    $i["tks"] = array();
    $items = $modx->getCollection('companyCardTk', array("active" => 1));
    foreach($items as $item){
        $i["tks"][] = $item->toArray();
    }
    $out = $pdoFetch->getChunk($tpl, $i);
}



// Output
if (!empty($toPlaceholder)) {
    // If using a placeholder, output nothing and set output to specified placeholder
    $modx->setPlaceholder($toPlaceholder, $out);

    return '';
}
// By default just return output
return $out;