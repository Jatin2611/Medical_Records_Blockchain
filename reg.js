$("#role").change(function() {
    if ($(this).val() == "Doctor") {
        $('#License_no').show();
        $('#l_no').show();
        $('#License_no').attr('required', '');
        $('#License_no').attr('data-error', 'This field is required.');
    } else {
        $('#License_no').hide();
        $('#l_no').hide();
        $('#License_no').removeAttr('required');
        $('#License_no').removeAttr('data-error');
    }
    });
$("#role").trigger("change");