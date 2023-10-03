<?php

class companyCardTkGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'companyCardTk';
    public $classKey = 'companyCardTk';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $query = trim($this->getProperty('query'));
        if ($query) {
            $c->where([
                'name:LIKE' => "%{$query}%",
                'OR:description:LIKE' => "%{$query}%",
            ]);
        }

        return $c;
    }


    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object)
    {
        $array = $object->toArray();
        $array['actions'] = [];

        // Edit
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('companycard_tk_update'),
            //'multiple' => $this->modx->lexicon('companycard_items_update'),
            'action' => 'updateTk',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('companycard_tk_enable'),
                'multiple' => $this->modx->lexicon('companycard_tks_enable'),
                'action' => 'enableTk',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('companycard_tk_disable'),
                'multiple' => $this->modx->lexicon('companycard_tks_disable'),
                'action' => 'disableTk',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('companycard_tk_remove'),
            'multiple' => $this->modx->lexicon('companycard_tks_remove'),
            'action' => 'removeTk',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'companyCardTkGetListProcessor';