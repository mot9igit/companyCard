<?php

class companyCard
{
    /** @var modX $modx */
    public $modx;


    /**
     * @param modX $modx
     * @param array $config
     */
    function __construct(modX &$modx, array $config = [])
    {
        $this->modx =& $modx;

        $corePath = $this->modx->getOption('companycard_core_path', $config, $this->modx->getOption('core_path') . 'components/companycard/');
        $assetsUrl = $this->modx->getOption('companycard_assets_url', $config, $this->modx->getOption('assets_url') . 'components/companycard/');
        $assetsPath = $this->modx->getOption('companycard_assets_path', $config, $this->modx->getOption('base_path') . 'assets/components/companycard/');

        $this->config = array_merge([
            'corePath' => $corePath,
            'modelPath' => $corePath . 'model/',
            'assetsPath' => $assetsPath,
            'processorsPath' => $corePath . 'processors/',
            'actionUrl' => $assetsUrl . 'action.php',
            'version' => '0.0.1',
            'connectorUrl' => $assetsUrl . 'connector.php',
            'assetsUrl' => $assetsUrl,
            'cssUrl' => $assetsUrl . 'css/',
            'jsUrl' => $assetsUrl . 'js/',
        ], $config);

        $this->modx->addPackage('companycard', $this->config['modelPath']);
        $this->modx->lexicon->load('companycard:default');

        if ($this->pdoTools = $this->modx->getService('pdoFetch')) {
            $this->pdoTools->setConfig($this->config);
        }
    }

    /**
     * Initializes component into different contexts.
     *
     * @param string $ctx The context to load. Defaults to web.
     * @param array $scriptProperties Properties for initialization.
     *
     * @return bool
     */
    public function initialize($ctx = 'web', $scriptProperties = array())
    {
        if (isset($this->initialized[$ctx])) {
            return $this->initialized[$ctx];
        }
        $this->config = array_merge($this->config, $scriptProperties);
        $this->config['ctx'] = $ctx;
        $this->modx->lexicon->load('companycard:default');

        if ($ctx != 'mgr' && (!defined('MODX_API_MODE') || !MODX_API_MODE) && !$this->config['json_response']) {
            $config = $this->pdoTools->makePlaceholders($this->config);

            // Register CSS
            $css = trim($this->modx->getOption('companycard_frontend_css'));
            $this->modx->log(1, $css);
            if (!empty($css) && preg_match('/\.css/i', $css)) {
                if (preg_match('/\.css$/i', $css)) {
                    $css .= '?v=' . substr(md5($this->config['version']), 0, 10);
                }
                $this->modx->regClientCSS(str_replace($config['pl'], $config['vl'], $css));
            }

            // Register JS
            $js = trim($this->modx->getOption('companycard_frontend_js'));
            $this->modx->log(1, $js);
            if (!empty($js) && preg_match('/\.js/i', $js)) {
                if (preg_match('/\.js$/i', $js)) {
                    $js .= '?v=' . substr(md5($this->config['version']), 0, 10);
                }
                $this->modx->regClientScript(str_replace($config['pl'], $config['vl'], $js));


                $js_setting = array(
                    'cssUrl' => $this->config['cssUrl'] . 'web/',
                    'jsUrl' => $this->config['jsUrl'] . 'web/',
                    'actionUrl' => $this->config['actionUrl'],
                    'ctx' => $ctx
                );

                $data = json_encode($js_setting, true);
                $this->modx->regClientStartupScript(
                    '<script>companycardConfig = ' . $data . ';</script>',
                    true
                );
            }
        }
        $this->initialized[$ctx] = true;

        return $this->initialized[$ctx];
    }

    /**
     * Handle frontend requests with actions
     *
     * @param $action
     * @param array $data
     *
     * @return array|bool|string
     */
    public function handleRequest($action, $data = array())
    {
        $ctx = !empty($data['ctx'])
            ? (string)$data['ctx']
            : 'web';
        if ($ctx != 'web') {
            $this->modx->switchContext($ctx);
        }
        $isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
        $this->initialize($ctx, array('json_response' => $isAjax));
        switch ($action) {
            case 'company/edit':
                $response = $this->companyEdit($data);
                break;
        }
        return $response;
    }

    public function companyEdit($data){
        // редактируем профиль
        $object = $this->modx->getObject("companyCardItem", $data['id']);
        if($object){
            if($object->get("user_id") == $this->modx->user->get("id")){
                unset($data['id']);
                unset($data['action']);
                foreach($data as $key => $val){
                    if($val){
                        $object->set($key, $val);
                    }
                }
                if($object->save()){
                    return $this->success("Реквизиты успешно сохранены", $object->toArray());
                }else{
                    return $this->error("Ошибка сохранения реквизитов", $object->toArray());
                }
            }else{
                return $this->error("У вас нет доступа к данной организации", array());
            }
        }else{
            return $this->error("Организация не найдена", $object->toArray());
        }
    }

    /**
     * This method returns an error of the order
     *
     * @param string $message A lexicon key for error message
     * @param array $data .Additional data, for example cart status
     * @param array $placeholders Array with placeholders for lexicon entry
     *
     * @return array|string $response
     */
    public function error($message = '', $data = array(), $placeholders = array())
    {
        $response = array(
            'success' => false,
            //'message' => $this->modx->lexicon($message, $placeholders),
            'message' => $message,
            'data' => $data,
        );

        return $this->config['json_response']
            ? json_encode($response)
            : $response;
    }


    /**
     * This method returns an success of the order
     *
     * @param string $message A lexicon key for success message
     * @param array $data .Additional data, for example cart status
     * @param array $placeholders Array with placeholders for lexicon entry
     *
     * @return array|string $response
     */
    public function success($message = '', $data = array(), $placeholders = array())
    {
        $response = array(
            'success' => true,
            'message' => $this->modx->lexicon($message, $placeholders),
            'data' => $data,
        );

        return $this->config['json_response']
            ? json_encode($response)
            : $response;
    }
}