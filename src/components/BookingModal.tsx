import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Info, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ARTISTS } from '../data/artists';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const BookingModal = ({ isOpen, onClose, artistName }: { isOpen: boolean, onClose: () => void, artistName?: string }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>('02:00 PM');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artist: artistName || 'Any Artist',
    style: 'Realism',
    placement: '',
    description: ''
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const summary = `
*NEW BOOKING REQUEST*
--------------------------
*Artist:* ${formData.artist}
*Date:* ${selectedDate} May 2026
*Time:* ${selectedTime}
*Client:* ${formData.name}
*Contact:* ${formData.phone}
*Style:* ${formData.style}
*Placement:* ${formData.placement}
*Details:* ${formData.description}
    `.trim();

    // Check if user is on Mobile/Tablet
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;

    try {
      // 1. Always send Email via EmailJS in the background (Lead Capture)
      if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            artist: formData.artist,
            date: `${selectedDate} May 2026`,
            time: selectedTime,
            style: formData.style,
            placement: formData.placement,
            description: formData.description,
            message_summary: summary,
            device_type: isMobile ? 'Mobile/Tablet' : 'Desktop'
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      }

      // 2. Smart Redirect Logic
      if (isMobile) {
        // Mobile users: Redirect to WhatsApp app directly
        const waUrl = `https://api.whatsapp.com/send?phone=919811611111&text=${encodeURIComponent(summary)}`;
        window.location.href = waUrl;
      } else {
        // Desktop users: Show success and offer WhatsApp as secondary
        alert('Request Sent Successfully! Our team will contact you via email. You can also follow up on WhatsApp.');
        const waUrl = `https://web.whatsapp.com/send?phone=919811611111&text=${encodeURIComponent(summary)}`;
        window.open(waUrl, '_blank');
      }

      onClose();
    } catch (error) {
      console.error('Email submission failed:', error);
      // Fallback: Always try WhatsApp if email fails
      const waUrl = `https://api.whatsapp.com/send?phone=919811611111&text=${encodeURIComponent(summary)}`;
      window.open(waUrl, '_blank');
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, title: 'Basics', icon: <User size={20} /> },
    { id: 2, title: 'Details', icon: <Info size={20} /> },
    { id: 3, title: 'Schedule', icon: <Calendar size={20} /> },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="bg-[#0D0D0D] border border-white/10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">Reserve Your Session</h2>
              <p className="text-xs text-accent uppercase tracking-widest mt-1">
                {artistName ? `Booking: ${artistName}` : 'Luxury Studio Experience'}
              </p>
            </div>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row h-[60vh]">
            {/* Sidebar Steps */}
            <div className="w-full lg:w-1/3 bg-[#080808] p-8 border-r border-white/5">
                <div className="space-y-8">
                    {steps.map((s) => (
                        <div key={s.id} className={`flex items-center gap-4 transition-all duration-500 ${step >= s.id ? 'opacity-100' : 'opacity-20'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step >= s.id ? 'bg-accent border-accent' : 'border-white/20'}`}>
                                {step > s.id ? <CheckCircle2 size={18} /> : s.icon}
                            </div>
                            <span className="text-[10px] uppercase tracking-widest font-black">{s.title}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 p-6 bg-accent/5 border border-accent/10 rounded-xl">
                    <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                        A boutique booking experience for discerning clients. Expect a response within 24 hours.
                    </p>
                </div>
            </div>

            {/* Form Content */}
            <div className="w-full lg:w-2/3 p-8 overflow-y-auto max-h-full" data-lenis-prevent>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div 
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors" 
                                        placeholder="" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors" 
                                        placeholder="" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Phone / WhatsApp</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors" 
                                    placeholder="" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div 
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Preferred Artist</label>
                                    <select 
                                        className="w-full bg-[#111] border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors appearance-none text-sm"
                                        value={formData.artist}
                                        onChange={(e) => setFormData({...formData, artist: e.target.value})}
                                    >
                                        <option>Any Artist / Studio Choice</option>
                                        {ARTISTS.map(artist => (
                                            <option key={artist.id} value={artist.name}>{artist.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Tattoo Style</label>
                                    <select 
                                        className="w-full bg-[#111] border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors appearance-none text-sm"
                                        value={formData.style}
                                        onChange={(e) => setFormData({...formData, style: e.target.value})}
                                    >
                                        <option>Realism</option>
                                        <option>Fine Line</option>
                                        <option>Traditional</option>
                                        <option>Geometric</option>
                                        <option>Minimalist</option>
                                        <option>Color Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Placement</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors" 
                                    placeholder="" 
                                    value={formData.placement}
                                    onChange={(e) => setFormData({...formData, placement: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Description</label>
                                <textarea 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent transition-colors h-32" 
                                    placeholder="" 
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div 
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Simple Calendar Grid */}
                                <div className="flex-1 space-y-4">
                                    <div className="flex justify-between items-center px-2">
                                        <h4 className="text-sm font-black uppercase tracking-widest">May 2026</h4>
                                        <div className="flex gap-2">
                                            <button className="w-6 h-6 border border-white/10 flex items-center justify-center rounded-full hover:bg-white/5 opacity-50"><ChevronLeft size={14}/></button>
                                            <button className="w-6 h-6 border border-white/10 flex items-center justify-center rounded-full hover:bg-white/5 opacity-50"><ChevronRight size={14}/></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center">
                                        {['S','M','T','W','T','F','S'].map(d => (
                                            <span key={d} className="text-[8px] font-black text-white/20 pb-2">{d}</span>
                                        ))}
                                        {Array.from({length: 31}).map((_, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => setSelectedDate(i + 1)}
                                                className={`aspect-square flex items-center justify-center rounded-lg text-[10px] font-bold transition-all
                                                    ${selectedDate === i + 1 ? 'bg-accent text-white' : 'hover:bg-white/10 text-white/60'}
                                                    ${i + 1 < 15 ? 'opacity-20 pointer-events-none' : ''}
                                                `}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Selector */}
                                <div className="w-full md:w-48 space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest px-2">Available Slots</h4>
                                    <div className="space-y-2">
                                        {['11:00 AM', '02:00 PM', '04:30 PM', '07:00 PM'].map((time) => (
                                            <button 
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`w-full py-3 rounded-lg border text-[10px] uppercase tracking-widest font-black transition-all
                                                    ${selectedTime === time ? 'bg-white text-black border-white' : 'border-white/10 text-white/40 hover:border-white/40'}
                                                `}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    <div className="space-y-4 pt-4 border-t border-white/5">
                                        <h4 className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Or Custom Time</h4>
                                        <div className="relative">
                                            <input 
                                                type="time" 
                                                value={selectedTime && selectedTime.includes(':') && !selectedTime.includes('M') ? selectedTime : ''}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                className={`w-full bg-[#111] border rounded-lg px-6 py-3 outline-none transition-colors text-sm font-bold text-white
                                                    ${selectedTime && !['11:00 AM', '02:00 PM', '04:30 PM', '07:00 PM'].includes(selectedTime) ? 'border-accent' : 'border-white/10 focus:border-accent'}
                                                `}
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-accent/5 border border-accent/10 rounded-xl flex items-center gap-4">
                                <Info size={18} className="text-accent shrink-0" />
                                <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-widest">
                                    Final date and artist availability will be confirmed by our manager via WhatsApp.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-8 border-t border-white/5 flex justify-between items-center bg-[#080808]">
                <button 
                    onClick={() => setStep(s => Math.max(1, s - 1))}
                    className={`text-[10px] uppercase tracking-[0.3em] font-black hover:text-accent transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                    Back
                </button>
                
                {step < 3 ? (
                    <button 
                        onClick={() => setStep(s => Math.min(3, s + 1))}
                        className="px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-black hover:bg-accent hover:text-white transition-all duration-500 rounded-sm"
                    >
                        Continue
                    </button>
                ) : (
                    <button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`px-12 py-4 bg-accent text-white text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 rounded-sm
                            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}
                        `}
                    >
                        {isSubmitting ? 'Processing...' : 'Submit'}
                    </button>
                )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
