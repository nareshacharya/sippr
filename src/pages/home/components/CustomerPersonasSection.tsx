
import Card from '../../../components/base/Card';
import { customerPersonas } from '../../../mocks/menuData';

export default function CustomerPersonasSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Nutrition for <span className="text-[#C34479]">Every Lifestyle</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Whether you're crushing deadlines, hitting the gym, studying for exams, or keeping up with family life, 
            SIPPR has the perfect nutrition solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {customerPersonas.map((persona, index) => (
            <Card key={index} hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center order-2 lg:order-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C34479] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <i className={`${persona.icon} text-white text-lg sm:text-xl`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{persona.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{persona.description}</p>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img 
                    src={persona.image}
                    alt={persona.title}
                    className="w-full h-full object-cover object-top min-h-[200px] sm:min-h-[250px] md:min-h-64"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
