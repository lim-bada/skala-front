function checkGrade() {
    // 과목명을 배열에 저장
    var subjects = ["HTML", "CSS", "JavaScript"];

    // 총점
    var total = 0;

    // 과목 수만큼 반복
    for (var i = 0; i < subjects.length; i++) {
        var input = prompt(
            subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)"
        );

        // 취소 버튼을 누른 경우
        if (input === null) {
            alert("성적 계산을 취소합니다.");
            return;
        }

        var score = Number(input);

        // 숫자가 아니거나 범위를 벗어난 경우
        if (
            !Number.isFinite(score) ||
            score < 0 ||
            score > 100
        ) {
            alert("0부터 100 사이의 숫자를 입력해 주세요.");
            return;
        }

        total = total + score;
    }

    // 평균 계산
    var average = total / subjects.length;

    // 합격 여부 판정
    var result = "";

    if (average >= 60) {
        result = "🎉 합격입니다! 우수자로 선정되었습니다.";
    } else {
        result = "❌ 불합격입니다. 다음 기회에 힘내세요!";
    }

    // 결과 출력
    alert(
        "====== 📊 성적 결과표 ======\n" +
        "• 총점: " + total + "점\n" +
        "• 평균: " + average.toFixed(1) + "점\n" +
        "---------------------------\n" +
        "• 결과: " + result
    );
}