//Make quick links scroll the page
$.each($('.ProjectQuickLink'), function (index, value) {
    $('#' + value.id).click(function (e) {
        var callerId = e.target.id
        var targetId = "#" + callerId.substr(0, callerId.length - 5);
        var target = $(targetId);
        if (target.length) {
            var top = target.position().top;
            $('#Wall').animate({ scrollTop: top }, 'slow');
            return false;
        }
        e.preventDefault();
    });
});

function Scroll(event, delta) {
    var top = $('#Wall').scrollTop;
    document.getElementById("Wall").scrollTop -= (delta * 75);
}

//Activate mouse scrolling
$('#Wall').bind('mousewheel', Scroll);

$('#UpArrow').click(function(e) {
    var top = $('#Wall').scrollTop;
    document.getElementById("Wall").scrollTop -= 75;
});
$('#DownArrow').click(function (e) {
    var top = $('#Wall').scrollTop;
    document.getElementById("Wall").scrollTop -= -75;
});