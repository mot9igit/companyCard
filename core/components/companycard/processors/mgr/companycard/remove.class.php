<?php

class companyCardItemRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'companyCardItem';
    public $classKey = 'companyCardItem';
    public $languageTopics = ['companycard'];
    //public $permission = 'remove';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('companycard_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var companyCardItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('companycard_item_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'companyCardItemRemoveProcessor';