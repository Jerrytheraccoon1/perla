import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, address, flowerType } = await req.json();
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = `🌸 *طلب جديد من بيرلا* 🌸\n\n👤 *الاسم:* ${name}\n📞 *الهاتف:* ${phone}\n💐 *النوع:* ${flowerType}\n📍 *العنوان:* ${address}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    });

    return NextResponse.json({ message: 'Success' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
