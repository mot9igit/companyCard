<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/companyCard/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/companycard')) {
            $cache->deleteTree(
                $dev . 'assets/components/companycard/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/companycard/', $dev . 'assets/components/companycard');
        }
        if (!is_link($dev . 'core/components/companycard')) {
            $cache->deleteTree(
                $dev . 'core/components/companycard/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/companycard/', $dev . 'core/components/companycard');
        }
    }
}

return true;