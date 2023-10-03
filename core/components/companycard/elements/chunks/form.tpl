<form action="#" class="cc_form">
    <input type="hidden" name="cc_action" value="company/edit">
    <input type="hidden" name="id" value="{$id}">
    <div class="message"></div>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Юридическое наименование / Ф.И.О. (для физ. лиц)</label>
                <input type="text" class="form-control" name="ur_name" value="{$ur_name}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">ИНН</label>
                <input type="text" class="form-control" name="inn" value="{$inn}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">ОГРН</label>
                <input type="text" class="form-control" name="ogrn" value="{$ogrn}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">КПП</label>
                <input type="text" class="form-control" name="kpp" value="{$kpp}">
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="">БИК</label>
                <input type="text" class="form-control" name="bank_bik" value="{$bank_bik}">
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="">Наименование банка</label>
                <input type="text" class="form-control" name="bank_name" value="{$bank_name}">
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="">Корреспондентский счет</label>
                <input type="text" class="form-control" name="bank_knumber" value="{$bank_knumber}">
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="">Расчетный счет</label>
                <input type="text" class="form-control" name="bank_number" value="{$bank_number}">
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Юридический адрес</label>
                <textarea type="text" class="form-control" name="address_ur">{$address_ur}</textarea>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Фактический адрес</label>
                <textarea type="text" class="form-control" name="address_fact">{$address_fact}</textarea>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">Ф.И.О. контактного лица</label>
                <input type="text" class="form-control" name="contact_name" value="{$contact_name}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">Email контактного лица</label>
                <input type="text" class="form-control" name="contact_email" value="{$contact_email}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">Телефон контактного лица</label>
                <input type="text" class="form-control" name="contact_phone" value="{$contact_phone}">
            </div>
        </div>
        {if $tks}
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Предпочитаемая транспортная компания</label>
                    <select name="tk" class="form-control">
                        <option value="">Не выбрана</option>
                        {foreach $tks as $tki}
                            <option value="{$tki['id']}" {if $tki['id'] == $tk}selected{/if}>{$tki['name']}</option>
                        {/foreach}
                    </select>
                </div>
            </div>
        {/if}
        <div class="col-md-12">
            <div class="form-group">
                <button type="submit" class="btn btn-success">Редактировать</button>
            </div>
        </div>
    </div>
</form>