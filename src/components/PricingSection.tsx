import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">اختر باقتك المثالية</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            باقات متنوعة تناسب ذوقك وتوصل مشاعرك بأفضل طريقة ممكنة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col h-full transition-all ${
                pkg.badge ? 'ring-1 ring-primary/50 shadow-[0_0_20px_rgba(240,192,64,0.15)] bg-primary/5' : ''
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 right-8 bg-primary text-background px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
                  {pkg.badge}
                </span>
              )}
              
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <span className="text-4xl mb-4 block">{pkg.icon}</span>
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                </div>
                <div className="text-left">
                  <span className="text-3xl font-extrabold text-primary font-mono">{pkg.price}</span>
                  <span className="text-sm text-gray-400 mr-1">دج</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-8 min-h-[3rem]">
                {pkg.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={12} className="text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  pkg.badge 
                  ? 'bg-primary text-background shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                اطلب الآن
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
