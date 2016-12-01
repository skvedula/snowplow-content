export default function GiftCardHub_checkBalance() {
    var t = 'The current balance on Gift Card number';
    var msgNode = document.querySelector('#ctl00_mainContentPlaceHolder_lblGiftCardMessage');
    if (!document.querySelector('#ctl00_mainContentPlaceHolder_divGiftCardBalanceCheckOn > div.ngcError') && msgNode.textContent.substr(0, t.length) === t) {
		cmCreateElementTag('Check Balance', 'Gift Card');
		spCreateElementTag('Check Balance', 'Gift Card');
    }
}