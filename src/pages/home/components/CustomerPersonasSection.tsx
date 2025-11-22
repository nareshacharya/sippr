
import Card from '../../../components/base/Card';
import { customerPersonas } from '../../../mocks/menuData';

export default function CustomerPersonasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nutrition for <span className="text-[#C34479]">Every Lifestyle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're crushing deadlines, hitting the gym, studying for exams, or keeping up with family life, 
            SIPPR has the perfect nutrition solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customerPersonas.map((persona, index) => (
            <Card key={index} hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#C34479] rounded-full flex items-center justify-center mb-4">
                    <i className={`${persona.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{persona.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{persona.description}</p>
                </div>
                <div className="relative">
                  <img 
                    src={persona.image}
                    alt={persona.title}
                    className="w-full h-full object-cover object-top min-h-64"
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
