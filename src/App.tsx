/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Briefcase,
  Users,
  Star,
  Activity,
  Headphones,
  Mic,
  Send,
  Minus,
  Plus,
  Play,
  InfinityIcon,
  Check
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
      cursorX.set(e.clientX - 400);
      cursorY.set(e.clientY - 400);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, cursorX, cursorY]);

  const springConfig = { damping: 40, stiffness: 60 };
  const pX1 = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), springConfig);
  const pY1 = useSpring(useTransform(mouseY, [-1, 1], [-30, 30]), springConfig);
  const pX2 = useSpring(useTransform(mouseX, [-1, 1], [40, -40]), springConfig);
  const pY2 = useSpring(useTransform(mouseY, [-1, 1], [40, -40]), springConfig);
  const smoothCursorX = useSpring(cursorX, { damping: 40, stiffness: 200 });
  const smoothCursorY = useSpring(cursorY, { damping: 40, stiffness: 200 });

  return (
    <div className="fixed inset-0 z-[-15] overflow-hidden pointer-events-none transition-colors duration-1000">
      <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: 'radial-gradient(#001F3F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -left-[50%] w-[150vw] h-[150vw] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_40%)] mix-blend-multiply" />
      <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[50%] -right-[50%] w-[150vw] h-[150vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.02)_0%,transparent_40%)] mix-blend-multiply" />

      {/* Glowing cursor tracking orb */}
      <motion.div 
        style={{ x: smoothCursorX, y: smoothCursorY }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_60%)] rounded-full blur-3xl pointer-events-none"
      />

      {/* Parallax Layer 1: Tech Schematics (Phone & Grid) */}
      <motion.div style={{ x: pX1, y: pY1 }} className="absolute inset-0 opacity-40">
        <svg className="absolute top-[10%] left-[5%] w-[600px] h-auto stroke-brand-navy/10 drop-shadow-sm opacity-50" style={{ transform: 'perspective(1000px) rotateY(35deg) rotateX(15deg) rotateZ(-5deg)' }} viewBox="0 0 300 600" fill="none">
          <rect x="20" y="20" width="260" height="560" rx="40" strokeWidth="2"/>
          <path d="M110 20 L190 20" strokeWidth="6" strokeLinecap="round"/>
          <rect x="35" y="60" width="230" height="480" rx="15" strokeWidth="1"/>
          {/* Complex internal schematics */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            d="M150 540 L150 400 L80 400 L80 200" stroke="rgba(0,212,255,0.4)" strokeWidth="2"
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            d="M150 540 L150 350 L220 350 L220 150 L150 150" stroke="rgba(0,102,255,0.3)" strokeWidth="2"
          />
          <circle cx="80" cy="200" r="5" fill="rgba(0,212,255,0.4)"/>
          <circle cx="150" cy="150" r="5" fill="rgba(0,102,255,0.3)"/>
          <circle cx="220" cy="350" r="4" fill="rgba(0,31,63,0.3)"/>
          
          <rect x="50" y="80" width="200" height="40" rx="5" strokeWidth="1" strokeDasharray="4 4"/>
          <rect x="50" y="140" width="60" height="60" rx="5" strokeWidth="1"/>
          <rect x="190" y="140" width="60" height="60" rx="5" strokeWidth="1"/>
        </svg>
      </motion.div>

      {/* Parallax Layer 2: Organic Voice Graphs & Waves */}
      <motion.div style={{ x: pX2, y: pY2 }} className="absolute inset-0 opacity-50">
         <svg className="absolute bottom-[10%] right-[-10%] w-[120vw] h-[40vh] stroke-brand-navy/10" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
           {[...Array(4)].map((_, i) => (
             <motion.path 
               key={i}
               animate={{ 
                 d: [
                   `M0 150 Q ${200 + i*60} ${50 + i*30}, 400 150 T 800 150 T 1200 150`,
                   `M0 150 Q ${150 + i*40} ${250 - i*40}, 400 150 T 800 150 T 1200 150`,
                   `M0 150 Q ${200 + i*60} ${50 + i*30}, 400 150 T 800 150 T 1200 150`
                 ]
               }}
               transition={{ duration: 12 + i * 3.5, repeat: Infinity, ease: "easeInOut" }}
               strokeWidth={1 + i * 0.5}
               className={i % 2 === 0 ? "stroke-brand-cyan/20" : "stroke-brand-blue/15"}
             />
           ))}
           <motion.path 
             animate={{ strokeDashoffset: [1000, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             strokeDasharray="15 25"
             d="M0 150 L 1200 150"
             stroke="rgba(0,102,255,0.4)"
             strokeWidth="2"
           />
           {/* Pulsing indicator node on the graph */}
           <motion.circle 
             animate={{ r: [3, 8, 3], opacity: [1, 0.4, 1] }} 
             transition={{ duration: 2, repeat: Infinity }} 
             cx="400" cy="150" fill="rgba(0,212,255,0.8)" 
           />
         </svg>
      </motion.div>
    </div>
  );
};

const LogoMark = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative ${className} flex items-center justify-center group mix-blend-screen`}>
    <motion.div 
      animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.3, 0.6, 0.3] }} 
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }} 
      className="absolute inset-0 bg-brand-cyan/40 blur-[15px] rounded-full" 
    />
    
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
      <defs>
        <linearGradient id="logo-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
        <linearGradient id="logo-secondary" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#00D4FF" opacity="0.5" />
        </linearGradient>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
           <feGaussianBlur stdDeviation="3" result="blur" />
           <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Orbit 1 */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, ease: "linear", repeat: Infinity }} className="origin-center">
         <ellipse cx="50" cy="50" rx="42" ry="18" stroke="rgba(0,212,255,0.15)" strokeWidth="1" transform="rotate(30 50 50)" />
         <motion.ellipse 
           cx="50" cy="50" rx="42" ry="18" 
           stroke="url(#logo-primary)" 
           strokeWidth="2" 
           strokeDasharray="50 180" 
           strokeLinecap="round" 
           transform="rotate(30 50 50)" 
         />
      </motion.g>

      {/* Orbit 2 */}
      <motion.g animate={{ rotate: -360 }} transition={{ duration: 20, ease: "linear", repeat: Infinity }} className="origin-center">
         <ellipse cx="50" cy="50" rx="38" ry="15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" transform="rotate(-60 50 50)" />
         <motion.ellipse 
           cx="50" cy="50" rx="38" ry="15" 
           stroke="url(#logo-secondary)" 
           strokeWidth="2.5" 
           strokeDasharray="40 150" 
           strokeLinecap="round" 
           transform="rotate(-60 50 50)" 
         />
      </motion.g>
      
      {/* Outer Ring */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 25, ease: "linear", repeat: Infinity }} className="origin-center">
         <circle cx="50" cy="50" r="46" stroke="rgba(0,212,255,0.05)" strokeWidth="1" />
         <motion.circle 
           cx="50" cy="50" r="46" 
           stroke="url(#logo-primary)" 
           strokeWidth="1.5" 
           strokeDasharray="20 280" 
           strokeLinecap="round" 
         />
      </motion.g>

      {/* Center Intelligence & Voice Core */}
      <g filter="url(#logo-glow)">
        <circle cx="50" cy="50" r="10" fill="url(#logo-primary)" opacity="0.1" />
        {[...Array(5)].map((_, i) => (
          <motion.rect 
            key={i}
            x={36 + i * 6} 
            y="35" 
            width="3" 
            height="30" 
            rx="1.5"
            fill={i === 2 ? "#FFFFFF" : "url(#logo-primary)"}
            initial={{ scaleY: 0.2 }}
            animate={{ scaleY: [0.2, 1.0, 0.2] }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.15 
            }}
            style={{ transformOrigin: "50% 50%" }}
          />
        ))}
      </g>
    </svg>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer group">
          <LogoMark />
          <span className="font-display font-black tracking-tighter text-brand-navy flex flex-col items-start leading-[0.8] ml-1">
            <span className="text-2xl md:text-3xl tracking-tight text-brand-navy">CAMBRIDGE<span className="text-brand-blue">AI</span></span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-brand-navy/50">Receptionist</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-navy text-white px-8 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-brand-blue transition-all border border-brand-navy static-glow">
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-brand-navy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-navy text-white px-6 py-3 rounded-xl text-center font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-brand-cyan" />
              <span className="text-brand-navy font-black uppercase text-[10px] tracking-[0.5em] block">
                The Next Evolution
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-[min(9vw,110px)] font-black leading-[0.85] text-brand-navy mb-8 tracking-tighter">
              Never Miss <br />
              <span className="text-gradient-premium">a Call Again.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-navy/60 mb-12 max-w-lg leading-[1.4] font-medium tracking-tight">
              Elite AI Receptionists for Cambridge firms. Scale your front desk with biological-quality voice and 24/7 autonomous intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="relative bg-brand-navy text-white px-10 py-5 rounded-[20px] font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,31,63,0.15)] focus:outline-none radiant-glow-btn">
                Experience Demo
              </button>
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-14 h-14 rounded-full border border-brand-navy/10 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-cyan group-hover:border-brand-cyan static-glow bg-white relative z-10">
                    <Play className="w-5 h-5 fill-brand-navy text-brand-navy ml-1" />
                 </div>
                 <span className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-navy transition-colors">Watch Film</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center p-10 perspective-1000"
          >
            {/* 3D Glass Centerpiece */}
            <div className="relative z-10 w-full max-w-lg aspect-square glass rounded-[3rem] flex items-center justify-center overflow-hidden group shadow-[0_40px_100px_rgba(0,31,63,0.1)] border border-white/60 animate-float">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-brand-blue/5" />
               
               {/* 3D Core Aura */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[60px] group-hover:w-80 group-hover:h-80 group-hover:bg-brand-blue/20 transition-all duration-700" />

               {/* Animated Voice Wave - Refined Apple Style */}
               <div className="flex items-center gap-1.5 h-32 relative z-10">
                  {[...Array(16)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [24, Math.random() * 100 + 24, 24] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                      className="w-2 bg-gradient-to-t from-brand-navy to-brand-blue rounded-full shadow-[0_0_10px_rgba(0,102,255,0.5)]"
                    />
                  ))}
               </div>
            </div>

            {/* Premium Floating Indicator Cards */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -top-10 right-0 glass-dark text-white p-6 rounded-3xl w-64 z-20 shadow-2xl backdrop-blur-3xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-2">
                 <Zap className="w-5 h-5 text-brand-cyan" />
                 <div className="text-[10px] uppercase font-black tracking-widest text-brand-cyan">Latency</div>
              </div>
              <div className="text-4xl font-display font-black tracking-tighter">0.12<span className="text-xl text-white/50">ms</span></div>
              <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-brand-cyan" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-10 left-0 glass p-6 rounded-3xl w-72 z-20 shadow-2xl border border-white/60"
            >
              <div className="flex items-center gap-3 mb-2">
                 <Globe className="w-5 h-5 text-brand-blue" />
                 <div className="text-[10px] uppercase font-black tracking-widest text-brand-blue">Intelligence</div>
              </div>
              <div className="text-4xl font-display font-black text-brand-navy tracking-tighter">42+ <span className="text-xl text-brand-navy/50">Languages</span></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: 'Hello! I am your Cambridge AI assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
    setInputValue('');
    
    // Simple bot logic
    setTimeout(() => {
      let botResponse = "That's a great question. Let me get an expert to call you back, or you can ask about pricing or booking a demo!";
      if (inputValue.toLowerCase().includes('pricing')) botResponse = "Our managed services start from £120/month. Would you like a custom proposal?";
      if (inputValue.toLowerCase().includes('demo')) botResponse = "I can definitely help book a demo! Just leave your email or call us at +44 07759 085416.";
      
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-brand-navy/10"
          >
            {/* Header */}
            <div className="bg-brand-navy p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center">
                  <Activity className="w-5 h-5 text-brand-navy" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest">AI Concierge</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsVoiceActive(!isVoiceActive)}
                className={`p-2 rounded-full transition-all duration-300 ${isVoiceActive ? 'bg-brand-cyan text-brand-navy animate-pulse shadow-[0_0_15px_rgba(0,212,255,0.5)]' : 'bg-white/10 hover:bg-white/20'}`}
                title="Voice Chat with Agent"
              >
                <Headphones className="w-4 h-4" />
              </button>
            </div>

            {/* Voice Overlay */}
            <AnimatePresence>
              {isVoiceActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 top-20 bg-brand-navy/95 z-20 flex flex-col items-center justify-center p-10 text-center"
                >
                  <div className="relative mb-10">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-brand-cyan rounded-full"
                    />
                    <div className="w-20 h-20 rounded-full bg-brand-cyan flex items-center justify-center relative z-10">
                      <Mic className="w-10 h-10 text-brand-navy" />
                    </div>
                  </div>
                  <h3 className="text-white font-black uppercase tracking-widest text-lg mb-2">Listening...</h3>
                  <p className="text-white/60 text-xs leading-relaxed uppercase tracking-wider mb-8">
                    Connected to Cambridge Voice Hub<br/>(Retell AI enabled)
                  </p>
                  <button 
                    onClick={() => setIsVoiceActive(false)}
                    className="mt-auto editorial-btn border border-white/20 text-white hover:bg-white/10 w-full"
                  >
                    End Call
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-gray/30">
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 text-xs font-medium ${m.role === 'user' ? 'bg-brand-blue text-white rounded-2xl rounded-tr-none' : 'bg-white text-brand-navy rounded-2xl rounded-tl-none shadow-sm'}`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-brand-navy/5 flex gap-2">
              <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-brand-gray/50 rounded-xl px-4 py-2 text-xs font-bold text-brand-navy outline-none border border-transparent focus:border-brand-cyan transition-all"
              />
              <button 
                onClick={handleSend}
                className="bg-brand-navy text-white p-2 rounded-xl hover:bg-brand-blue transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-brand-navy shadow-[0_20px_40px_rgba(0,31,63,0.3)] flex items-center justify-center relative group overflow-hidden radiant-glow-btn"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-2 border-brand-cyan/20 border-dashed rounded-full scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {isOpen ? <Minus className="text-white relative z-10" /> : <MessageSquare className="text-white relative z-10" />}
        
        {/* Pulsing visual circles */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
               animate={{ scale: [1, 2], opacity: [0.5, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-full h-full rounded-full border border-brand-cyan"
             />
          </div>
        )}
      </motion.button>
    </div>
  );
};

const Features = () => {
  const feats = [
    { title: "Smart Booking", desc: "Calendar API hooks.", size: "col-span-1 md:col-span-2 row-span-2", bg: "bg-white", icon: <CheckCircle2 className="w-8 h-8 text-brand-cyan" /> },
    { title: "Language NLP", desc: "42+ Dialects.", size: "col-span-1 row-span-1", bg: "bg-brand-navy", icon: <Globe className="w-6 h-6 text-white" /> },
    { title: "Alerts", desc: "Emergency detection.", size: "col-span-1 row-span-1", bg: "glass", icon: <Zap className="w-6 h-6 text-brand-blue" /> },
    { title: "Memory", desc: "Contextual recall.", size: "col-span-1 row-span-1", bg: "bg-brand-gray", icon: <Activity className="w-6 h-6 text-brand-navy" /> },
    { title: "Lead Qual", desc: "Smart filtering.", size: "col-span-1 md:col-span-2 row-span-1", bg: "bg-brand-cyan", icon: <Star className="w-6 h-6 text-brand-navy" /> }
  ];

  return (
    <section id="features" className="py-40 relative overflow-hidden text-brand-navy">
      <div className="max-w-7xl mx-auto px-10 relative z-20">
        <div className="mb-20 grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <span className="text-brand-navy/40 font-bold uppercase text-[10px] tracking-[0.5em]">Capabilities Matrix</span>
            <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] font-black mt-6 tracking-tighter">
              Biological <br /><span className="text-gradient-premium">Intelligence.</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-brand-navy/60 font-medium leading-relaxed max-w-md">
            Not just answering calls. Processing context, understanding sentiment, and executing business logic instantly.
          </p>
        </div>

        {/* Masterpiece Master Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-6">
           {feats.map((f, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
               className={`relative p-10 rounded-[40px] overflow-hidden group flex flex-col justify-between ${f.size} ${f.bg} border border-brand-navy/5 shadow-[0_20px_40px_rgba(0,31,63,0.04)] hover:shadow-[0_40px_80px_rgba(0,212,255,0.15)] transition-all duration-700`}
             >
               <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${f.bg === 'bg-white' || f.bg === 'glass' ? 'bg-gradient-to-br from-brand-cyan/5 to-transparent' : 'bg-white/10'}`} />
               <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg ${f.bg === 'bg-white' ? 'bg-brand-navy/5' : 'bg-black/10'}`}>
                 {f.icon}
               </div>
               <div className="relative z-10">
                 <h3 className={`font-display font-black text-3xl md:text-4xl tracking-tighter mb-2 ${f.bg.includes('navy') ? 'text-white' : 'text-brand-navy'}`}>{f.title}</h3>
                 <p className={`text-lg font-medium pr-10 ${f.bg.includes('navy') ? 'text-white/60' : 'text-brand-navy/60'}`}>{f.desc}</p>
               </div>
               
               {/* Glowing Background Ring for Key Feature */}
               {i === 0 && (
                 <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-[150%] h-[150%] translate-x-1/3 absolute bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,212,255,0.8)_360deg)] rounded-full mix-blend-multiply blur-3xl" />
                 </div>
               )}
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section id="solutions" className="py-40 relative overflow-hidden text-white backdrop-blur-2xl bg-brand-navy/95 border-y border-brand-navy/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-cyan font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">The Smart Alternative</span>
            <h2 className="font-display text-5xl md:text-7xl font-black text-gradient-dark leading-[0.95] tracking-tighter">
              Stop bleeding revenue.<br />Meet your new front desk.
            </h2>
          </motion.div>
        </div>

        {/* High-End Comparison Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
           {/* Human / Old Way */}
           <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-10 md:p-14 rounded-[40px] flex flex-col justify-between opacity-80"
           >
              <div>
                <h3 className="font-display font-black text-3xl mb-12 text-white/40 uppercase tracking-tighter">Human Output</h3>
                <div className="space-y-8 border-l-2 border-white/5 pl-8">
                   <div>
                     <div className="text-3xl font-black text-white/50 tracking-tight">1</div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-2">Concurrent Caller Limit</div>
                   </div>
                   <div>
                     <div className="text-3xl font-black text-white/50 tracking-tight">40 hrs</div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-2">Active Time per Week</div>
                   </div>
                   <div>
                     <div className="text-3xl font-black text-white/50 tracking-tight">£2,200+</div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-2">Monthly Expenditure</div>
                   </div>
                </div>
              </div>
           </motion.div>

           {/* AI / New Way */}
           <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[40px] shadow-[0_0_100px_rgba(0,212,255,0.15)] flex flex-col justify-between border-brand-cyan/20 relative overflow-hidden"
           >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-cyan/20 blur-[80px] rounded-full point-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full point-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-display font-black text-5xl mb-12 text-brand-navy uppercase tracking-tighter flex items-center gap-4">
                  Cambridge AI <Shield className="w-8 h-8 text-brand-blue" strokeWidth={3} />
                </h3>
                <div className="space-y-8 border-l-4 border-brand-cyan pl-8">
                   <div>
                     <div className="text-5xl font-black text-brand-navy tracking-tighter flex items-center gap-3">
                        <InfinityIcon className="w-10 h-10 text-brand-cyan" />
                     </div>
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/50 mt-2">Simultaneous Callers</div>
                   </div>
                   <div>
                     <div className="text-5xl font-black text-brand-navy tracking-tighter">168 hrs</div>
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-cyan mt-2">100% Weekly Uptime (24/7)</div>
                   </div>
                   <div>
                     <div className="text-5xl font-black text-brand-navy tracking-tighter">£120</div>
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/50 mt-2">Monthly Subscription starting from</div>
                   </div>
                </div>
              </div>
              <div className="relative z-10 mt-12 pt-8 border-t border-brand-navy/10 flex items-center gap-3">
                 <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center text-white">
                    <Check className="w-4 h-4" strokeWidth={3} />
                 </div>
                 <span className="font-bold text-sm tracking-tight text-brand-navy uppercase">Pays for itself immediately</span>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const ForWho = () => {
  const industries = [
    { title: "Health & Clinics", details: "Dentists, Therapists, Private Practitioners", tags: ["HIPAA-grade", "Discreet"] },
    { title: "Beauty & Wellness", details: "Salons, Med-Spas, Booking Hubs", tags: ["Immediate Booking", "High Volume"] },
    { title: "Home Services", details: "Plumbers, Electricians, Cleaners", tags: ["Zero Missed Calls", "Urgency Detection"] },
    { title: "Local Business", details: "Garages, Real Estate, Retail", tags: ["FAQ Engine", "24/7"] },
  ];

  return (
    <section id="about" className="py-40 relative overflow-hidden bg-white/40 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-10 relative z-20">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">Target Architecture</span>
            <h2 className="font-display text-5xl md:text-[80px] font-black text-brand-navy mt-4 tracking-tighter leading-none">Perfectly <br/><span className="text-gradient-premium">Integrated.</span></h2>
          </div>
          <p className="max-w-md text-brand-navy/60 font-medium text-lg leading-relaxed">
             Our intelligence engine adapts dynamically to your sector's terminology and urgency requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
           {industries.map((ind, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="group relative p-12 rounded-[40px] border border-brand-navy/[0.03] bg-white shadow-[0_20px_40px_rgba(0,31,63,0.02)] hover:shadow-[0_40px_80px_rgba(0,212,255,0.08)] hover:-translate-y-1 transition-all duration-700 overflow-hidden"
             >
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[80px] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 origin-top-right mix-blend-multiply pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 blur-[80px] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 origin-bottom-left mix-blend-multiply pointer-events-none" />
               
               <h3 className="font-display font-black text-3xl md:text-5xl text-brand-navy tracking-tighter mb-4 relative z-10 transition-colors duration-500">{ind.title}</h3>
               <p className="text-xl font-medium text-brand-navy/60 mb-12 relative z-10">{ind.details}</p>
               <div className="flex gap-4 relative z-10">
                 {ind.tags.map((tag, j) => (
                   <span key={j} className="px-5 py-2.5 rounded-full border border-brand-cyan/20 text-[10px] font-black uppercase tracking-widest text-brand-cyan bg-white group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-500 shadow-sm">{tag}</span>
                 ))}
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Discovery", value: "01", text: "Mapping the neural pathways of your business. We define exact call flows." },
    { title: "Configuration", value: "02", text: "Injecting brand DNA. Voice cloning. Calendar API synchronisation." },
    { title: "Testing", value: "03", text: "Red-team simulation testing against angry, quiet, and complex callers." },
    { title: "Autonomous", value: "04", text: "System is armed. 24/7 biological-quality voice interactions commence." }
  ];

  return (
    <section id="process" className="py-40 relative overflow-hidden backdrop-blur-2xl bg-brand-navy/95 border-y border-brand-navy/10">
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] border-[1px] border-white/5 rounded-full blur-[2px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-10 right-10 w-[60vw] h-[60vw] border-[1px] border-brand-cyan/20 rounded-full blur-[2px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-20">
        <div className="text-center mb-32">
          <span className="text-white/40 font-bold uppercase text-[10px] tracking-[0.4em]">Deployment Protocol</span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter flex items-center justify-center gap-4">
             System <Zap className="w-10 h-10 text-brand-cyan" /> Ignition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {steps.map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
               className="glass-dark p-10 rounded-[30px] relative group border-white/10 hover:border-brand-cyan/50 hover:bg-brand-navy/80 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
             >
               <div className="absolute -inset-10 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />
               <div className="text-white/10 font-display font-black text-8xl tracking-tighter mb-8 group-hover:text-brand-cyan/20 transition-colors pointer-events-none">
                 {step.value}
               </div>
               <h3 className="text-white font-black uppercase tracking-widest text-lg mb-4">{step.title}</h3>
               <p className="text-white/50 text-sm font-medium leading-relaxed group-hover:text-white/80 transition-colors">{step.text}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    { 
      title: "Custom Setup", 
      price: "£799 – £1,999", 
      period: "One-time", 
      desc: "We build, train, and deploy." 
    },
    { 
      title: "Managed Service", 
      price: "£120 – £220", 
      period: "per month", 
      desc: "Unlimited calls, ongoing updates, local support." 
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-xl">
            <span className="text-brand-gold font-bold uppercase text-[10px] tracking-widest">Investment</span>
            <h2 className="font-display text-4xl md:text-7xl font-black text-brand-navy tracking-tighter mt-4">Hire Your AI. <br /><span className="text-brand-blue">Save Thousands.</span></h2>
          </div>
          <div className="bg-brand-gray p-6 border-l-4 border-brand-cyan">
             <p className="italic text-brand-navy text-sm font-bold">Pays for itself with just one recovered lead.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {tiers.map((t, i) => (
            <div key={i} className="editorial-card p-12 hover:border-brand-blue transition-all group">
              <h3 className="font-black uppercase text-xs tracking-[0.2em] text-brand-gold mb-8">{t.title}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black text-brand-navy tracking-tight">{t.price}</span>
                <span className="text-brand-navy/40 font-bold text-xs uppercase ml-3 tracking-widest shrink-0">{t.period}</span>
              </div>
              <p className="text-brand-navy/60 font-medium text-sm border-t border-brand-navy/5 pt-8">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-gray/20 backdrop-blur-2xl border-y border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-20 items-center">
          <div className="relative">
             <img 
               src="https://picsum.photos/seed/office/800/1000" 
               alt="Pawel Dusza" 
               className="w-full grayscale contrast-125"
             />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-navy flex items-center justify-center p-6">
                <span className="text-brand-gold text-xs font-black uppercase tracking-tighter text-center leading-tight">Elite Cambridge Service</span>
             </div>
          </div>
          <div className="space-y-8">
            <span className="text-brand-gold font-bold uppercase text-[10px] tracking-widest">About The Founder</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-brand-navy tracking-tighter">Locally Built. <br />Locally Supported.</h2>
            <div className="text-brand-navy space-y-4">
              <p className="font-bold underline decoration-brand-cyan underline-offset-8">Cambridge AI Receptionist is founded and managed locally.</p>
              <p className="text-brand-navy/70 leading-relaxed font-medium">
                No faceless corporations, no outsourced support. Just dedicated local expertise helping UK businesses thrive.
              </p>
            </div>
            <div className="pt-8 border-t border-brand-navy/5">
              <h4 className="font-black text-brand-navy uppercase tracking-widest">Pawel Dusza</h4>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mt-1">Founder, Cambridge AI Receptionist</p>
              <div className="mt-6 flex flex-col gap-2 text-xs font-bold text-brand-navy/60 uppercase tracking-widest">
                <p className="flex items-center gap-2">📍 Based in Huntingdon, serving the Cambridge area.</p>
                <p className="flex items-center gap-2">📞 +44 07759 085416</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LuxuryStats = () => {
  const stats = [
    { label: "Call Latency", value: "0.12ms" },
    { label: "Availability", value: "99.9%" },
    { label: "Bilingual Cap", value: "42+" },
    { label: "Cost Offset", value: "70%" },
  ];

  return (
    <section className="relative overflow-hidden bg-white/60 backdrop-blur-2xl py-12 border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-2">{s.label}</div>
              <div className="text-brand-navy font-black text-3xl">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-10">
        <div className="bg-brand-navy p-16 md:p-24 rounded-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/10 to-transparent -z-0" />
          
          <div className="relative z-10 max-w-xl text-left">
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
               Your Competitors <br />Are Already <span className="text-brand-cyan">Automating.</span>
            </h2>
            <p className="text-lg text-white/70 mb-0 font-medium leading-relaxed">
              Free your staff from repetitive calls. Capture every lead. Work smarter.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="editorial-btn bg-brand-cyan text-brand-navy hover:bg-white border border-brand-cyan radiant-glow-btn">
              See How Much You Can Save
            </button>
            <button className="editorial-btn border border-white/20 text-white hover:bg-white/10 static-glow">
              Speak to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-3">
              <LogoMark className="w-12 h-12" />
              <span className="font-display font-black tracking-tighter text-brand-navy flex flex-col items-start leading-[0.8] ml-1">
                <span className="text-2xl md:text-3xl tracking-tight text-brand-navy">CAMBRIDGE<span className="text-brand-blue">AI</span></span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-brand-navy/50">Receptionist</span>
              </span>
            </div>
          <div className="flex items-center gap-10 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-navy/50">
            <span>Oxford Analytica</span>
            <span>Tech-Vantage</span>
            <span>Globe-Sys</span>
          </div>
          <div className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest">
            © 2024 Cambridge AI Receptionist. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans min-h-screen selection:bg-brand-cyan selection:text-brand-navy">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <ProblemSolution />
      <LuxuryStats />
      <Features />
      <ForWho />
      <Process />
      <Pricing />
      <About />
      
      {/* Testimonial Quote */}
      <section className="py-32 overflow-hidden relative bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] font-black text-brand-navy/[0.03] select-none -z-10 tracking-tighter">
          ELITE
        </div>
        <div className="max-w-7xl mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="editorial-card p-16 md:p-24 rounded-3xl border border-brand-navy/5 max-w-5xl mx-auto text-left shadow-[0_50px_100px_rgba(0,31,63,0.1)] relative overflow-hidden bg-white/70"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-cyan" />
            <div className="flex justify-start gap-1 mb-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold group-hover:scale-125 transition-transform" />
              ))}
            </div>
            <p className="text-3xl md:text-5xl font-display font-black text-brand-navy mb-12 leading-[1.05] tracking-tight">
              "The professionalism is unparalleled. Our clients have no idea they're speaking to an AI. It's transformed our boutique law firm's engagement entirely."
            </p>
            <div className="flex items-center gap-6">
               <div className="w-16 h-0.5 bg-brand-navy/10" />
               <div>
                  <h4 className="font-black text-brand-navy text-xl uppercase tracking-widest">Julian Harrington</h4>
                  <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.3em] pt-2">Managing Partner, Harrington & Co.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-10 py-12 text-center">
         <button className="editorial-btn bg-brand-navy text-white hover:bg-brand-blue border border-brand-navy w-full md:w-auto px-12 py-6 text-sm shadow-[0_20px_40px_rgba(0,31,63,0.15)] radiant-glow-btn">
            Get Your Custom AI Built Today
         </button>
      </div>

      <CTA />
      <Footer />
      <Chatbot />
    </div>
  );
}

