'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MysteriousIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const KeyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2L19 4L15 8L13 6L11 8L13 10L11 12L13 14L15 12L21 6V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12L6 15L12 9L9 6L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const fullTitle = "🧩 Málaga Quest | El Maestro del Enigma";
  const claudeUrl = "https://claude.ai/";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowDescription(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showChat && countdown > 0) {
      const timer = setTimeout(() => {
        if (countdown === 1) {
          window.open(claudeUrl, '_blank');
          setShowChat(false);
        } else {
          setCountdown(countdown - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showChat, countdown]);

  const handleStartChat = () => {
    setShowChat(true);
    setCountdown(5);
  };

  if (showChat) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="floating-particles" />

        {/* Mystical Portal Opening */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          <Card className="w-full max-w-2xl mysterious-glow bg-card/95 backdrop-blur-sm border-primary/40">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-6">
                <div className="text-6xl animate-pulse">🌀</div>
                <h2 className="text-3xl font-bold text-primary">Portal Místico Activándose...</h2>

                <div className="bg-muted/50 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg text-foreground/90 mb-4">
                    🎭 <span className="text-primary font-semibold">El Maestro del Enigma</span> te espera al otro lado del portal...
                  </p>

                  <div className="text-4xl font-bold text-accent golden-glow">
                    {countdown}
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    Se abrirá Claude para comenzar tu aventura con el Maestro del Enigma
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    onClick={() => {
                      window.open(claudeUrl, '_blank');
                      setShowChat(false);
                    }}
                    className="mysterious-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
                  >
                    🔮 Abrir Portal Ahora <ExternalLinkIcon className="w-5 h-5 ml-2" />
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => setShowChat(false)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    ← Volver al inicio
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mystical Elements */}
          <div className="mt-8 flex items-center gap-8 text-muted-foreground/60 animate-pulse">
            <div className="flex items-center gap-2">
              <MysteriousIcon className="w-6 h-6 text-primary" />
              <span className="text-sm">Conectando...</span>
            </div>
            <div className="flex items-center gap-2">
              <KeyIcon className="w-6 h-6 text-accent" />
              <span className="text-sm">Preparando misterios...</span>
            </div>
          </div>
        </div>

        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/40 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="floating-particles" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Mysterious Symbols */}
        <div className="absolute top-20 left-20 text-primary/30 mysterious-glow">
          <MysteriousIcon className="w-12 h-12 animate-pulse" />
        </div>
        <div className="absolute top-32 right-32 text-accent/40 golden-glow">
          <KeyIcon className="w-8 h-8 animate-bounce" />
        </div>
        <div className="absolute bottom-40 left-32 text-primary/20">
          <MysteriousIcon className="w-16 h-16 animate-pulse" />
        </div>

        {/* Central Card */}
        <Card className="w-full max-w-2xl mysterious-glow bg-card/90 backdrop-blur-sm border-primary/30">
          <CardContent className="p-12 text-center space-y-8">
            {/* Animated Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                {titleText}
                {titleText.length < fullTitle.length && (
                  <span className="animate-pulse text-accent">|</span>
                )}
              </h1>

              {showDescription && (
                <div className="space-y-6 animate-in fade-in duration-1000">
                  <div className="text-lg text-muted-foreground font-medium">
                    <span className="text-accent">✨</span> Creado por RED CULTURAL DE LA COSTA DEL SOL <span className="text-accent">✨</span>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg border border-primary/20 space-y-4">
                    <p className="text-foreground/90 leading-relaxed">
                      🎭 <span className="text-primary font-semibold">Habla con el Maestro del Enigma</span> y sumérgete en un escape room real por las calles de Málaga.
                    </p>
                    <p className="text-foreground/80 text-sm">
                      🤖 Powered by Claude Sonnet - La IA más avanzada • 🧠 Español + English • ⏱️ 3-6 horas • 💰 10€
                    </p>
                    <p className="text-accent/90 text-sm font-medium">
                      👣 Requiere moverse por el centro histórico para superar los misterios
                    </p>
                  </div>

                  {/* Requirements Section */}
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/30 space-y-2">
                    <h3 className="text-accent font-semibold text-sm">📋 Requisitos para jugar:</h3>
                    <ul className="text-sm text-foreground/80 space-y-1 text-left">
                      <li>• <strong>Acceso a Claude Sonnet</strong> (disponible en claude.ai)</li>
                      <li>• Estar físicamente en <strong>Málaga centro</strong></li>
                      <li>• Smartphone con internet</li>
                      <li>• Ganas de resolver misterios ancestrales 🗝️</li>
                    </ul>
                  </div>

                  {/* Chat Access Notice */}
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30 space-y-2">
                    <h3 className="text-primary font-semibold text-sm">🔮 Acceso al Maestro del Enigma:</h3>
                    <p className="text-sm text-foreground/80">
                      Interactúa directamente con el Maestro del Enigma usando Claude Sonnet, la IA más avanzada para aventuras inmersivas.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      onClick={handleStartChat}
                      className="mysterious-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                    >
                      🔮 Abrir Claude Sonnet <ExternalLinkIcon className="w-5 h-5 ml-2" />
                    </Button>

                    <div className="text-sm text-muted-foreground text-center">
                      <div>Prepárate para resolver misterios ancestrales</div>
                      <div className="text-xs text-accent mt-1">Se abrirá Claude en nueva pestaña</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Mystical Elements */}
        {showDescription && (
          <div className="mt-12 flex items-center gap-8 text-muted-foreground/60 animate-in fade-in duration-2000">
            <div className="flex items-center gap-2">
              <MysteriousIcon className="w-4 h-4 text-primary" />
              <span className="text-sm">Enigmas</span>
            </div>
            <div className="flex items-center gap-2">
              <KeyIcon className="w-4 h-4 text-accent" />
              <span className="text-sm">Misterios</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">🗝️</span>
              <span className="text-sm">Aventura</span>
            </div>
          </div>
        )}
      </div>

      {/* Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60 pointer-events-none" />
    </div>
  );
}
