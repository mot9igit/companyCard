<?php

class companyCardTkCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'companyCardTk';
    public $classKey = 'companyCardTk';
    public $languageTopics = ['companycard'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('companycard_tk_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('companycard_tk_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'companyCardTkCreateProcessor';