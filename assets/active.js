$(document).ready(function () {
    $('#btn-mobile').on('click', function () {
        $('#menu-mobile').toggleClass('active');
        $('#btn-mobile').find('i').toggleClass('fa-x'); // Corrigido de toggLeClass para toggleClass
    });
});
