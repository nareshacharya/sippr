
export default function NutritionPhilosophySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Nutrition <span className="text-[#C34479]">Philosophy</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <i className="ri-heart-pulse-fill text-red-500 mr-2"></i>
                  Health Without Compromise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nutrition should never come at the cost of health. At SIPPR, we don't add sugar, water, 
                  preservatives or concentrate. Everything is cold-pressed or freshly made to give your body 
                  clean, real energy.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <i className="ri-rainbow-fill text-[#C34479] mr-2"></i>
                  Exciting Combinations Promise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Healthy food shouldn't be boring. SIPPR creates combinations that delight your taste buds 
                  while energizing your day. Every sip is an adventure in flavor and nutrition.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <i className="ri-leaf-fill text-green-500 mr-2"></i>
                  Pure Ingredients Promise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fresh, real, unprocessed ingredients sourced with care. No shortcuts, no artificial flavors, 
                  just nature's goodness delivered in every glass.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20juice%20bar%20with%20fresh%20fruits%20and%20vegetables%20being%20prepared%2C%20cold%20press%20machine%20in%20action%2C%20natural%20ingredients%20displayed%20beautifully%2C%20clean%20kitchen%20environment%2C%20healthy%20food%20preparation%20process&width=600&height=500&seq=31&orientation=portrait"
              alt="Fresh ingredients and cold press process"
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#C34479] text-white p-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
