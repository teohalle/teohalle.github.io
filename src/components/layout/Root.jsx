import Navbar from './Navbar';
import GradientOrb from '../ui/GradientOrb';

export default function Root({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
        style={{ backgroundImage: 'url("/noise.svg")' }}
      />
      
      {/* Background Animated Orbs */}
      <GradientOrb color="purple" top="-10%" left="-10%" size="600px" />
      <GradientOrb color="blue" bottom="-10%" right="-10%" size="600px" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {children}
      </main>
    </div>
  );
}