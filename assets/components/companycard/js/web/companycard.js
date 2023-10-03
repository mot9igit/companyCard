var companycard = {
    options: {
        form: '.cc_form'
    },
    initialize: function(){
        $(document).on('submit', companycard.options.form, function(e){
            e.preventDefault();
            $(companycard.options.form).find(".message").html('');
            var data = $(this).serialize();
            companycard.send(data);
        });
    },
    send: function(data){
        var response = '';
        $.ajax({
            type: "POST",
            url: companycardConfig['actionUrl'],
            dataType: 'json',
            data: data,
            success:  function(data_r) {
                if(data_r.hasOwnProperty('success')){
                    if(data_r.success){
                        $(companycard.options.form).find(".message").html('<div class="alert alert-success">' + data_r.message + '</div>');
                    }else{
                        $(companycard.options.form).find(".message").html('<div class="alert alert-error">' + data_r.message + '</div>')
                    }
                }
            }
        });
    }
}

$(document).ready(function(){
    companycard.initialize();
})