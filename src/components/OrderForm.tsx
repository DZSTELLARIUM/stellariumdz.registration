import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, WILAYAS, OCCASIONS, DELIVERY_OPTIONS } from '../constants';
import { Check } from 'lucide-react';

export default function OrderForm() {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[1].id);
  const [deliveryType, setDeliveryType] = useState(DELIVERY_OPTIONS[0].id);

  const selectedProduct = useMemo(() => 
    PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[1]
  , [selectedProductId]);

  const deliveryPrice = useMemo(() => {
    if (!selectedProduct.isPhysical) return 0;
    const option = DELIVERY_OPTIONS.find(d => d.id === deliveryType);
    return option ? option.price : 0;
  }, [selectedProduct, deliveryType]);

  const totalPrice = selectedProduct.price + deliveryPrice;

  return (
    <section id="order-form" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">أرسل طلبك الآن</h2>
        <p className="text-gray-400">سجل أسماء أحبائك في السماء بلمسة واحدة</p>
      </motion.div>

      <form 
        action="https://formspree.io/f/mwvwdgpk" 
        method="POST"
        className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2.5rem] space-y-8 shadow-xl"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="_subject" value="⭐ طلب جديد — Stellarium DZ" />
        <input type="hidden" name="_replyto" value="dzstellarium@gmail.com" />
        <input type="hidden" name="total_price" value={`${totalPrice} دج`} />
        
        {/* Product Selection */}
        <div>
          <label className="text-xs text-gray-400 mb-4 px-1 uppercase tracking-wider font-bold block">1. اختر نوع الشهادة</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="product-selector">
            {PRODUCTS.map((product) => (
              <label 
                key={product.id}
                className={`relative flex flex-col p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                  selectedProductId === product.id 
                  ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(240,192,64,0.15)]' 
                  : 'border-white/10 bg-white/5 hover:border-primary/50'
                }`}
              >
                <input 
                  type="radio" 
                  name="product_type" 
                  value={product.name}
                  checked={selectedProductId === product.id}
                  onChange={() => setSelectedProductId(product.id)}
                  className="sr-only"
                  required
                />
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl">{product.icon}</span>
                  <span className="text-primary font-mono font-bold">{product.price} دج</span>
                </div>
                <span className="font-bold text-lg">{product.name}</span>
                <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                
                {product.badge && (
                  <span className="absolute -top-2 left-3 bg-primary text-background text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {product.badge}
                  </span>
                )}
                {selectedProductId === product.id && (
                  <div className="absolute top-2 right-2 text-primary opacity-50">
                    <Check size={16} />
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Star Name */}
          <div className="space-y-1">
            <label className="text-xs text-gray-400 px-1">اسم النجمة (الذي سيظهر على الشهادة) *</label>
            <input 
              type="text" 
              name="star_name" 
              placeholder="مثال: ياسمين، أحمد حلمي..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-white placeholder:opacity-30"
              required
            />
          </div>

          {/* Occasion */}
          <div className="space-y-1">
            <label className="text-xs text-gray-400 px-1">المناسبة *</label>
            <select 
              name="occasion" 
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-white appearance-none"
              required
            >
              <option value="" disabled selected className="bg-background">اختر المناسبة</option>
              {OCCASIONS.map(occ => (
                <option key={occ.value} value={occ.label} className="bg-background">{occ.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label className="text-xs text-gray-400 px-1">الرسالة الخاصة (اختياري)</label>
          <textarea 
            name="message" 
            placeholder="اكتب رسالتك التي ستطبع على الشهادة..."
            rows={2}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all resize-none text-white placeholder:opacity-30"
          />
        </div>

        {/* Delivery Info - Conditional */}
        <AnimatePresence>
          {selectedProduct.isPhysical && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                {/* Wilaya */}
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 px-1">الولاية *</label>
                  <select 
                    name="wilaya" 
                    className="w-full bg-[#1a1c25] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white"
                    required
                  >
                    <option value="" disabled selected className="bg-background">اختر ولايتك</option>
                    {WILAYAS.map(w => (
                      <option key={w} value={w} className="bg-background">{w}</option>
                    ))}
                  </select>
                </div>

                {/* Delivery Type */}
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 px-1">نوع التوصيل</label>
                  <div className="flex flex-col gap-1">
                    {DELIVERY_OPTIONS.map(opt => (
                      <label 
                        key={opt.id}
                        className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${
                          deliveryType === opt.id ? 'text-primary' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="delivery_type" 
                          value={opt.label}
                          checked={deliveryType === opt.id}
                          onChange={() => setDeliveryType(opt.id)}
                          className="accent-primary"
                          required
                        />
                        <span>{opt.label} ({opt.price}دج)</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-400 px-1">الاسم واللقب *</label>
            <input 
              type="text" 
              name="full_name" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 px-1">رقم الهاتف *</label>
            <input 
              type="tel" 
              name="phone" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white"
              required
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-primary p-6 rounded-2xl text-background shadow-lg">
          <h3 className="font-bold mb-4 flex items-center justify-between text-lg">
            <span>📋 ملخص طلبك</span>
            <span className="text-[10px] opacity-60 font-mono">
              {new Date().getFullYear()}
            </span>
          </h3>
          <div className="text-sm space-y-2 mb-4">
            <div className="flex justify-between">
              <span>المنتج:</span>
              <span className="font-bold">{selectedProduct.name}</span>
            </div>
            <div className="flex justify-between">
              <span>سعر المنتج:</span>
              <span className="font-bold font-mono">{selectedProduct.price} دج</span>
            </div>
            {selectedProduct.isPhysical && (
              <div className="flex justify-between">
                <span>التوصيل:</span>
                <span className="font-bold font-mono">{deliveryPrice} دج</span>
              </div>
            )}
          </div>
          <div className="border-t border-background/20 pt-3 flex justify-between items-center">
            <span className="font-bold text-xl uppercase tracking-wider">المجموع:</span>
            <span className="text-3xl font-bold font-mono tracking-tighter">{totalPrice} دج</span>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-primary text-background font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(240,192,64,0.3)] hover:scale-[1.02] transition-transform text-lg"
        >
          🌟 أرسل طلبي الآن
        </motion.button>
        
        <p className="text-center text-gray-500 text-xs">
          بالنقر على "أرسل طلبي"، أنت توافق على شروط الخدمة.
        </p>
      </form>
    </section>
  );
}
