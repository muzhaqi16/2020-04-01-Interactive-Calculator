$(document).ready(function () {
    let billTotal = "";
    const billTotalEl = $("#billTotal");
    //add on click for calculate
    $('#btn-calculate').on('click', () => {
        calculate();
    })
    $('#btn-decrease').on('click', () => {
        const splitEl = $('#splitNumber');
        let splitNumber = parseInt(splitEl.text());
        if (splitNumber > 0) {
            splitNumber--;
        }
        splitEl.text(splitNumber);
    })
    $('#btn-increase').on('click', () => {
        const splitEl = $('#splitNumber');
        let splitNumber = parseInt(splitEl.text());
        if (splitNumber < 100) {
            splitNumber++;
        }
        splitEl.text(splitNumber);
    })
    $('.number').on('click', function () {
        billTotal += $(this).val();
        billTotalEl.val(billTotal);
    })
    $('.backspace').on('click', function () {
        billTotal = billTotal.substring(0, billTotal.length - 1);
        billTotalEl.val(billTotal);
    })

});
calculate = () => {
    const billSubTotal = parseInt($("#billTotal").val());
    const tip = parseInt($('#tipPercentage').val());
    let total = billSubTotal + (billSubTotal * (tip / 100));
    const split = parseInt($('#splitNumber').text());
    if (split > 1) {
        total = total / split;
    }
    $('#splitTotal').text("$ " + total.toFixed(2));
}