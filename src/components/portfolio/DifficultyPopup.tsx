import React, { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonButton } from "./NeonButton";

interface DifficultyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DifficultyPopup: React.FC<DifficultyPopupProps> = ({ isOpen, onClose }) => {
  const [difficulty, setDifficulty] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!difficulty.trim()) return;
    
    setIsSubmitting(true);
    
    const message = `Olá, Italo! Vim do seu portfólio e minha maior dificuldade em lucrar no digital é: ${difficulty.trim()}`;
    const phone = "+5574974008239";
    const whatsappUrl = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setDifficulty("");
      onClose();
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl bg-glass-bg backdrop-blur-xl border border-glass-border p-8">
              {/* Background glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-neon-fuchsia/20 to-neon-cyan/20 blur-xl" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-text-muted hover:text-foreground hover:bg-glass-bg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-neon-cyan mb-3">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-text text-transparent bg-clip-text">
                    Vamos conversar!
                  </h3>
                  <p className="text-text-muted mt-2">
                    Me conte qual sua maior dificuldade em lucrar no digital
                  </p>
                </div>
                
                <div className="space-y-4">
                  <textarea
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ex: Não consigo gerar tráfego qualificado, tenho dificuldade para converter leads, não sei como criar um funil..."
                    className="w-full h-32 px-4 py-3 rounded-xl bg-glass-bg border border-glass-border text-foreground placeholder:text-text-muted resize-none focus:outline-none focus:border-neon-cyan/50 transition-colors"
                    maxLength={500}
                  />
                  
                  <div className="text-right text-xs text-text-faint">
                    {difficulty.length}/500
                  </div>
                  
                  <NeonButton
                    onClick={handleSubmit}
                    disabled={!difficulty.trim() || isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Enviando..." : "Enviar para WhatsApp"}
                  </NeonButton>
                </div>
                
                <p className="text-xs text-text-faint text-center">
                  Você será redirecionado para o WhatsApp com sua mensagem pronta
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};