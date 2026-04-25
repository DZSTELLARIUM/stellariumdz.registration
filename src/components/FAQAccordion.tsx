import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'هل فعلاً نجمة مسمّاة باسمي في السماء؟',
    a: 'نعم، يتم اختيار نجم حقيقي موجود في السماء وتخصيص شهادة باسمك مع إحداثياته الفلكية الحقيقية التي يمكنك التحقق منها. لكن المهم أن تعلم أن هذه الخدمة رمزية وعاطفية — وهي ليست تسجيلاً رسمياً من الاتحاد الفلكي الدولي (IAU). الجهة الوحيدة التي تملك صلاحية التسمية العلمية الرسمية للنجوم هي IAU وهي لا تبيع أسماء النجوم. ما نقدمه هو هدية فريدة ومعنوية تبقى ذكرى جميلة للأبد — تماماً كما أن كثيراً من أعظم الهدايا في العالم قيمتها في معناها لا في وثيقتها.'
  },
  {
    q: 'كيف أرى نجمتي في السماء؟',
    a: 'ستجد على شهادتك الإحداثيات الفلكية الدقيقة لنجمتك. حمّل تطبيق Stellarium أو Sky Map مجاناً على هاتفك، ووجّه الكاميرا نحو السماء ليأخذك التطبيق مباشرة إلى نجمتك! كما تحتوي شهادتك على QR Code يأخذك لصفحة تحقق تعرض موقع النجمة.'
  },
  {
    q: 'كم يستغرق استلام الطلب؟',
    a: 'الشهادة الرقمية PDF تصلك عبر الإيميل خلال ساعة واحدة من تأكيد الطلب. أما اللوحات المطبوعة (الإطار أو المضيئة) فتستغرق من يومين إلى 5 أيام عمل حسب الولاية.'
  },
  {
    q: 'هل يمكنني اختيار أي اسم للنجمة؟',
    a: 'نعم بالكامل! أي اسم تريده — اسم شخص عزيز، اسمان معاً، أو عبارة قصيرة. النجمة ستُسجَّل بالاسم الذي تختاره أنت بالضبط.'
  },
  {
    q: 'ما الفرق بين الشهادة العادية والمضيئة في الظلام؟',
    a: 'الشهادة المضيئة تُطبع بحبر فسفوري خاص يشحن من الضوء ثم يتوهج ويضيء في الظلام كالنجوم الحقيقية — تجربة بصرية مذهلة تجعل الهدية أكثر سحراً وخصوصية.'
  },
  {
    q: 'ما طرق الدفع المتاحة؟',
    a: 'الدفع يكون عند الاستلام للطلبات المادية (إطار أو مضيئة). للشهادة الرقمية PDF يمكن الدفع عبر CCP أو بريد الجزائر أو أي وسيلة نتفق عليها. تواصل معنا عبر الإيميل لأي استفسار: dzstellarium@gmail.com'
  }
];

export default function FAQAccordion() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text">الأسئلة الشائعة</h2>
        <p className="text-gray-400">كل ما تود معرفته عن نجمتك الخاصة</p>
      </motion.div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => (
          <motion.details
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-2xl overflow-hidden border border-white/10"
          >
            <summary className="flex justify-between items-center p-5 cursor-pointer list-none text-sm md:text-base font-bold transition-colors group-open:text-primary">
              <span className="flex items-center gap-2">
                <span className="opacity-50 font-mono text-[10px]">0{index + 1}</span>
                {faq.q}
              </span>
              <ChevronDown className="text-primary group-open:rotate-180 transition-transform w-4 h-4" />
            </summary>
            <div className="px-6 pb-5 pt-0 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
