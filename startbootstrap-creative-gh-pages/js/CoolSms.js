// CoolSMS API를 사용하여 문자 전송
async function sendSMS() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert('모든 필드를 입력해주세요.');
        return false;
    }

    try {
        const response = await axios.post('/api/send-sms', {
            name: name,
            email: email,
            phone: phone,
            message: message
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
