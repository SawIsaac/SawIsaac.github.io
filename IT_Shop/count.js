
function count() {
    let shopString = localStorage.getItem('shop');
    if (shopString) {
        let shopArray = JSON.parse(shopString);
        if (shopArray != null) {
            $('#count_number').text(shopArray.length);
        }
    } else {
        $('#count_number').text('0');
    }
}