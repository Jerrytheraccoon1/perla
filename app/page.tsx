"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Phone, MapPin, Flower2 } from 'lucide-react';

export default function PerlaPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendOrder = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.target));
    const res = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.ok) { setDone(true); e.target.reset(); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fff9fa] text-[#4a3434] font-[sans-serif]" dir="rtl">
      {/* Header / Hero */}
      <section className="h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#fce4ec] to-[#fff9fa] px-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <h1 className="text-8xl md:text-9xl font-serif text-[#d81b60] drop-shadow-sm">بيرلا</h1>
          <p className="text-center tracking-[0.5em] text-sm mt-2 text-[#880e4f] uppercase">Flower Boutique</p>
        </motion.div>
      </section>

      {/* Main Form */}
      <main className="max-w-4xl mx-auto px-6 -mt-20 pb-20">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-[#fce4ec]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Flower2 className="text-[#d81b60]" /> اطلب الآن
              </h2>
              <form onSubmit={sendOrder} className="space-y-5">
                <input name="name" placeholder="الاسم الكامل" required className="w-full p-4 rounded-2xl bg-[#fff0f3] border-none outline-none focus:ring-2 focus:ring-[#d81b60] transition-all" />
                <input name="phone" placeholder="رقم التواصل" required className="w-full p-4 rounded-2xl bg-[#fff0f3] border-none outline-none focus:ring-2 focus:ring-[#d81b60] transition-all" />
                <select name="flowerType" className="w-full p-4 rounded-2xl bg-[#fff0f3] border-none outline-none">
                  <option>باقة الروز الكلاسيكية</option>
                  <option>تنسيق بيرلا الخاص</option>
                  <option>سلة زهور الربيع</option>
                </select>
                <textarea name="address" placeholder="عنوان التوصيل (المدينة / الحي)" required className="w-full p-4 rounded-2xl bg-[#fff0f3] border-none outline-none h-32"></textarea>
                
                <button type="submit" disabled={loading} className="w-full bg-[#d81b60] text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-pink-200 hover:bg-[#ad1457] transition-all active:scale-95 flex items-center justify-center gap-3">
                  {loading ? 'جاري الإرسال...' : done ? 'تم الطلب بنجاح! ✨' : 'تأكيد الطلب'}
                </button>
              </form>
            </div>
            
            <div className="hidden md:flex flex-col justify-center items-center bg-[#fce4ec] rounded-[30px] p-8 text-center">
              <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1000" className="rounded-2xl mb-6 shadow-lg" alt="Perla" />
              <h3 className="text-xl font-bold text-[#880e4f]">زهورنا تُحاكي مشاعرك</h3>
              <p className="text-sm mt-2 opacity-70">يتم تنسيق كل باقة يدوياً لتناسب ذوقك الرفيع.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
