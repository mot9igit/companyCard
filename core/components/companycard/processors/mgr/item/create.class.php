<?php

class companyCardItemCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'companyCardItem';
    public $classKey = 'companyCardItem';
    public $languageTopics = ['companycard'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('companycard_item_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('companycard_item_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'companyCardItemCreateProcessor';