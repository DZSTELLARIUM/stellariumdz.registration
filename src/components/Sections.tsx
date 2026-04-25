import { motion } from 'motion/react';
import { Star, Settings, Send, StarIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 shadow-sm">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Star size={14} className="text-background fill-background" />
          </div>
          <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">خدمة تسمية النجوم الأولى في الجزائر</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
          اجعل اسمك يلمع <br />
          <span className="text-primary glow-text" style={{ fontFamily: 'Georgia, serif' }}>بين النجوم</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-tajawal">
          وثّق ذكرياتك أو أهدِ أحباءك قطعة من السماء. شهادات فنية فريدة تعيش للأبد في قلوبهم وفي الفضاء.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-background px-10 py-4 rounded-xl font-bold text-lg shadow-[0_4px_20px_rgba(240,192,64,0.3)] hover:shadow-[0_10px_30px_rgba(240,192,64,0.5)] transition-all"
          >
            سمِّ نجمتك الآن
          </motion.button>
          
          <motion.button
             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
             whileTap={{ scale: 0.95 }}
             onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-md transition-all shadow-sm"
          >
            اكتشف الباقات
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export function ImagePreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-white/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2074&auto=format&fit=crop" 
            alt="Star Certificate Preview" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 grayscale-[0.5] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4">
             <span className="text-primary text-4xl mb-4">📜</span>
             <h3 className="text-3xl md:text-5xl font-bold mb-4 glow-text font-amiri italic">شهادة فخرية فاخرة</h3>
             <p className="text-gray-400 text-sm max-w-xl mx-auto uppercase tracking-tighter">مثال للشهادة المطبوعة والجاهزة للعرض</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: "✨",
      title: "اختر نجمتك",
      desc: "نترجم مشاعرك إلى إحداثيات فلكية دقيقة لنجم حقيقي في السماء."
    },
    {
      icon: "🎨",
      title: "خصص شهادتك",
      desc: "اختر الاسم والمناسبة وأضف رسالة تلمس الروح لتطبع بأناقة."
    },
    {
      icon: "🚚",
      title: "استلم هديتك",
      desc: "توصيل سريع لباب منزلك أو عبر الإيميل لتبدأ رحلتك الفضائية."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text tracking-tight">كيف يعمل Stellarium؟</h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center hover:bg-white/[0.08] transition-colors"
            >
              <div className="text-5xl mb-8 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const reviews = [
    { name: "سارة .ب", city: "العاصمة", text: "أجمل هدية طلبتها في حياتي، الجودة ممتازة والتوصيل كان أسرع مما توقعت. شكراً لتعاملكم الراقي." },
    { name: "محمد .ل", city: "وهران", text: "فكرة عبقرية، اللوحة المضيئة في الظلام خيال! كل من يراها يسألني عنها. فخور بكم." },
    { name: "ريم .ج", city: "قسنطينة", text: "دقة في التفاصيل واحترافية كبيرة. الشهادة مطبوعة بجودة رهيبة. بالتوفيق ان شاء الله." }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">أصداء النجوم</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">ثقة أكثر من 500+ عميل سعيد في الجزائر</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between"
               >
                  <div className="flex gap-1 mb-6">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-primary fill-primary" />)}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-10 leading-relaxed">"{rev.text}"</p>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                        {rev.name[0]}
                     </div>
                     <div>
                        <h4 className="font-bold text-sm">{rev.name}</h4>
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider">{rev.city}</span>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-background/50 backdrop-blur-md text-center relative z-10">
       <div className="max-w-7xl mx-auto">
          <div className="mb-10">
             <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-background text-lg">⭐</span>
                </div>
                <span className="text-primary text-2xl font-bold font-amiri tracking-wider">STELLARIUM DZ</span>
             </div>
             <p className="text-gray-500 text-sm">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-xs mb-10 font-bold uppercase tracking-widest">
             <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
             <a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a>
             <a href="mailto:dzstellarium@gmail.com" className="hover:text-primary transition-colors">الدعم الفني</a>
          </div>
          <div className="text-[10px] text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-60">
             تنبيه: الخدمة المقدمة هي خدمة فنية عاطفية رمزية وليست تسجيلاً رسمياً في سجلات الاتحاد الفلكي الدولي (IAU). الاتحاد هو الجهة العلمية الوحيدة المخولة بتسمية الأجرام السماوية رسمياً.
          </div>
       </div>
    </footer>
  );
}
