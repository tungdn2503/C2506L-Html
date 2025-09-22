function getGrade(score) {
    if (score >= 85) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "D";
    }
}

function showGrade() {
    const score = Number(document.getElementById("scoreInput").value);
    const resultEl = document.getElementById("result");
    const grade = getGrade(score);
    resultEl.textContent = `Điểm: ${score} - Xếp loại: ${grade}`;
}