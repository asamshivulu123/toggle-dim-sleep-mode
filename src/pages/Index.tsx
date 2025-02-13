
import { DimToggle } from "@/components/DimToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <DimToggle />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="glass-effect p-8 rounded-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-sm text-white/80 bg-white/10 mb-4">
              Welcome
            </span>
            <h1 className="text-4xl font-bold mb-4 text-white">
              Experience Focused Design
            </h1>
            <p className="text-lg text-white/80">
              Toggle the dim mode in the top right corner to experience a calmer interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
