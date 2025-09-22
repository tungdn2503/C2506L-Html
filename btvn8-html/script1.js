function calculateElectricBill(kwh) {
    if (kwh <= 50) {
        return kwh * 1500;
    } else if (kwh <= 100) {
        return 50 * 1500 + (kwh - 50) * 2000;
    } else {
        return 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
    }
}
function showBill() {
    const kwh = Number(document.getElementById("kwhInput").value);
    const resultEl = document.getElementById("result");
    const total = calculateElectricBill(kwh);
    resultEl.textContent = `Số kWh: ${kwh} - Tiền điện phải trả: ${total.toLocaleString()} đ`;
}