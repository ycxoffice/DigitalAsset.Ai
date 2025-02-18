import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Blocks,
  Coins,
  FileText,
  Shield,
  Globe,
  Zap,
  ChevronRight,
  Code,
  Wallet,
} from "lucide-react";

const DigitalAssetLanding = () => {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(64, 224, 208, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0b1e]/80 backdrop-blur-xl border-b border-turquoise-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Blocks className="w-8 h-8 text-turquoise-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-turquoise-400 to-blue-500">
                DigitalAsset.ai
              </span>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-turquoise-500 to-blue-500 rounded-full hover:opacity-90 transition-all duration-300">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-6xl sm:text-7xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-turquoise-400 via-blue-500 to-purple-500">
                The Future of
              </span>
              <br />
              Digital Assets
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Comprehensive database of Web3 projects, blockchain networks, and
              digital assets powered by AI analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group px-8 py-4 bg-gradient-to-r from-turquoise-500 to-blue-500 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center space-x-2">
                <span>Explore Assets</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Blocks className="w-16 h-16 text-turquoise-500/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delay">
          <Code className="w-12 h-12 text-blue-500/30" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float">
          <Wallet className="w-14 h-14 text-purple-500/30" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-turquoise-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Box className="w-10 h-10" />,
                title: "Multi-Chain Analysis",
                description:
                  "Track assets across Ethereum, Solana, Avalanche, and more",
              },
              {
                icon: <Coins className="w-10 h-10" />,
                title: "Token Metrics",
                description:
                  "Real-time market cap, supply, and circulation data",
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: "Smart Contracts",
                description: "Verified contract addresses and security audits",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Use Cases",
                description: "DeFi, NFTs, Gaming, and emerging applications",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Compliance",
                description: "Global regulatory status and requirements",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "AI Insights",
                description: "Advanced analytics and trend prediction",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-turquoise-500/20 hover:border-turquoise-500/40 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-turquoise-500/20 to-blue-500/20 rounded-xl w-fit mb-4">
                  {React.cloneElement(feature.icon, {
                    className: "text-turquoise-400",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(64,224,208,0.1),transparent)] pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-bold">
                  Comprehensive
                  <span className="block text-turquoise-400">
                    Digital Asset Data
                  </span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Blockchain Network Analysis",
                    "Token Metrics & Trading Data",
                    "Smart Contract Verification",
                    "Regulatory Compliance Status",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-turquoise-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 rounded-xl p-6 border border-turquoise-500/20">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-sm text-gray-300 font-mono">
                    {`{
  "network": "Ethereum",
  "token": "DAI",
  "marketCap": "$5.2B",
  "supply": "5.2B DAI",
  "contract": "0x6b17...",
  "type": "Stablecoin"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-turquoise-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            Ready to
            <span className="text-turquoise-400"> Explore</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals tracking digital assets with
            AI-powered insights.
          </p>
          <button className="px-12 py-6 bg-gradient-to-r from-turquoise-500 to-blue-500 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto">
            <span className="text-xl font-semibold">Start Exploring</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .text-turquoise-400 {
          color: #40e0d0;
        }

        .from-turquoise-500 {
          --tw-gradient-from: #2dd4bf;
        }

        .to-turquoise-500 {
          --tw-gradient-to: #2dd4bf;
        }

        .border-turquoise-500 {
          border-color: #2dd4bf;
        }
      `}</style>
    </div>
  );
};

export default DigitalAssetLanding;
