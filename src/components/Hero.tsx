import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import aryanbportrait from "@/assets/aryan-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 hero-gradient opacity-90"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={aryanbportrait}
            alt="Aryan Bhatnagar"
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-large border-4 border-white/20 backdrop-blur-sm"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Aryan Bhatnagar
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-blue-100 font-medium">
          Data Analyst | BI Developer | Lifelong Learner
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Turning raw data into actionable insights with Python, SQL, and advanced BI tools
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="hero-button group">
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Resume
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-smooth"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;