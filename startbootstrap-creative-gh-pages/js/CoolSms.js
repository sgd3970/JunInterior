// CoolSMS API를 사용하여 문자 전송
async function sendSMS() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim(); // 선택값
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
        alert('이름, 연락처, 문의내용은 필수입니다.');
        return false;
    }

    try {
        const response = await axios.post('/api/send-sms', {
            name,
            email, // optional
            phone,
            message
        });

        if (response.data.success) {
            alert('문의가 성공적으로 전송되었습니다.');
            document.getElementById('contactForm').reset();
        } else {
            alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
    return false;
}
