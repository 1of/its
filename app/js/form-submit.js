//form send click
$('#send-contact-btn').on('click', function(e) {
    $('#warning').text('');
});
//form submit
$('#contact-form').on('submit', function(event) {
    event.preventDefault();

    $('#warning').text('');

    var name = $('#name').val();
    var email = $('#email').val();
    var msg = $('#msg').val();
    //if numbers in name field -> return
    var hasDigit = /[0-9]/.test(name);

    if (hasDigit || name.length < 2) {
        $('#warning')
            .text('Please, enter a valid name...')
            .css({ color: 'crimson' });
        return;
    }
    if (msg.length < 2) {
        $('#warning')
            .text('Please, type your message...')
            .css({ color: 'crimson' });
        return;
    }

    //ajax to google-forms
    $.ajax({
        url:
            'https://docs.google.com/forms/d/e/1FAIpQLSeK0Fm2qtm_wh2PTNQFU-WkK6J1OOWp7O-R1VGGmtZO8Peyug/formResponse',
        data: {
            'entry.1139703929': name,
            emailAddress: email,
            'entry.38433389': msg
        },
        type: 'POST',
        dataType: 'xml',
        statusCode: {
            0: function(responce) {
                console.log(responce);
                //Success message
                $('#name')
                    .val('')
                    .attr('disabled', true)
                    .css('opacity', '0.3');
                $('#email')
                    .val('')
                    .attr('disabled', true)
                    .css('opacity', '0.3');
                $('#msg')
                    .val('')
                    .attr('disabled', true)
                    .css('opacity', '0.3');
                $('#send-contact-btn')
                    .attr('disabled', true)
                    .css('opacity', '0.3');

                $('#warning')
                    .text('Thank you! We will reply as soon as possible')
                    .css({ color: '#228B22' });
                return;
            },
            400: function(responce) {
                //Success message
                $('#warning')
                    .text('Enter a valid email...')
                    .css({ color: 'crimson' });
                return;
            }
        }
    }).done(function() {
        console.log('Success!');
    });
});
