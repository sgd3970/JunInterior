const coolsms = require('coolsms-node-sdk').default;

const messageService = new coolsms(
  process.env.COOLSMS_API_KEY,
  process.env.COOLSMS_API_SECRET
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: '허용되지 않은 요청 방식입니다.' });
  }

  const { name, email, phone, message } = req.body;

  // ✅ 필수값 체크
  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, error: '이름, 연락처, 문의내용은 필수 항목입니다.' });
  }

  try {
    const result = await messageService.sendOne({
      to: process.env.SMS_RECEIVER_PHONE,
      from: process.env.SMS_SENDER_PHONE,
      text: `
[문의 접수]
이름: ${name}
연락처: ${phone}
${email ? `이메일: ${email}\n` : ''}
내용: ${message}`
    });

    return res.status(200).json({ success: true, result });
  } catch (err) {
    console.error('문자 전송 오류:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}