$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-btn').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newUrlImage = $('#new-url').val()
        const newItem = $('<li style="display:none"></li>')
        $(`<img src="${newUrlImage}" />`).appendTo(newItem)
        $(`
            <div class="overlay-img">
                <a href="${newUrlImage}" target="_blank" title="See in Full Size">
                    Full size Image
                </a>
            </div>
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#new-url').val('')
    })
})