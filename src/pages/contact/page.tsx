import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: 'ri-whatsapp-fill',
      title: 'WhatsApp',
      description: 'Quick and easy ordering',
      value: '+91 8309209564',
      action: 'Chat Now',
      link: 'https://wa.me/918309209564',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      buttonVariant: 'whatsapp' as const
    },
    {
      icon: 'ri-phone-fill',
      title: 'Phone',
      description: 'Speak with our team',
      value: '8309209564',
      action: 'Call Now',
      link: 'tel:8309209564',
      bgColor: 'bg-pink-50',
      iconColor: 'text-[#C34479]',
      buttonVariant: 'primary' as const
    },
    {
      icon: 'ri-mail-fill',
      title: 'Email',
      description: 'Send us a message',
      value: 'hello@sippr.in',
      action: 'Email Us',
      link: 'mailto:hello@sippr.in',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      buttonVariant: 'outline' as const
    }
  ];

  const locations = [
    {
      area: 'Banjara Hills',
      address: 'Road No. 12, Banjara Hills, Hyderabad - 500034',
      hours: '7:00 AM - 10:00 PM',
      mapLink: 'https://maps.google.com/?q=Banjara+Hills+Hyderabad'
    },
    {
      area: 'Jubilee Hills',
      address: 'Road No. 36, Jubilee Hills, Hyderabad - 500033',
      hours: '7:00 AM - 10:00 PM',
      mapLink: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad'
    },
    {
      area: 'Gachibowli',
      address: 'DLF Cyber City, Gachibowli, Hyderabad - 500032',
      hours: '7:00 AM - 10:00 PM',
      mapLink: 'https://maps.google.com/?q=Gachibowli+Hyderabad'
    }
  ];

  const faqs = [
    {
      question: 'What are your delivery hours?',
      answer: 'We deliver fresh juices from 7:00 AM to 10:00 PM daily across Hyderabad. Same-day delivery is available for orders placed before 6:00 PM.'
    },
    {
      question: 'Do you offer bulk orders for events?',
      answer: 'Yes! We cater to corporate events, parties, and wellness programs. Contact us at least 48 hours in advance for bulk orders.'
    },
    {
      question: 'How long do the juices stay fresh?',
      answer: 'Our cold-pressed juices are best consumed within 24-48 hours. We recommend refrigerating them immediately and consuming them fresh for maximum nutrition.'
    },
    {
      question: 'Do you have subscription plans?',
      answer: 'Yes, we offer weekly and monthly subscription plans with special discounts. Contact us on WhatsApp to customize your subscription.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-green-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              Get in <span className="text-[#C34479]">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              Have questions about our juices, delivery, or nutrition? We're here to help! 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`p-8 text-center ${method.bgColor} border-none hover:shadow-xl transition-all duration-300`}>
                <div className={`w-16 h-16 mx-auto mb-6 ${method.bgColor} rounded-full flex items-center justify-center`}>
                  <i className={`${method.icon} text-3xl ${method.iconColor}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-gray-800 mb-6">{method.value}</p>
                <Button 
                  variant={method.buttonVariant}
                  href={method.link}
                  className="w-full"
                >
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
                Send Us a <span className="text-[#C34479]">Message</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C34479] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C34479] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C34479] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C34479] focus:border-transparent outline-none transition-all text-sm cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="delivery">Delivery Question</option>
                    <option value="nutrition">Nutrition Information</option>
                    <option value="subscription">Subscription Plans</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C34479] focus:border-transparent outline-none transition-all resize-none text-sm"
                    placeholder="Tell us how we can help you..."
                  />
                  <p className="text-sm text-gray-500 mt-2">{formData.message.length}/500 characters</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    <i className="ri-check-line mr-2"></i>
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <i className="ri-error-warning-line mr-2"></i>
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full text-lg py-4"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160092841!2d78.24323209999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SIPPR Locations in Hyderabad"
                ></iframe>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <i className="ri-map-pin-fill text-[#C34479] mr-2"></i>
                  Our Locations
                </h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                      <h4 className="font-bold text-gray-800 mb-2">{location.area}</h4>
                      <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                      <p className="text-gray-600 text-sm mb-3">
                        <i className="ri-time-fill text-[#C34479] mr-1"></i>
                        {location.hours}
                      </p>
                      <a 
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C34479] hover:text-[#a03661] font-medium text-sm cursor-pointer"
                      >
                        Get Directions <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              Frequently Asked <span className="text-[#C34479]">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Quick answers to common questions about SIPPR
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <i className="ri-question-fill text-[#C34479] mr-2"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button 
              variant="whatsapp"
              href="https://wa.me/918309209564"
              icon={<i className="ri-whatsapp-fill"></i>}
            >
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Follow Us on <span className="text-[#C34479]">Social Media</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with daily nutrition tips, special offers, and new juice launches!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <i className="ri-instagram-fill text-3xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <i className="ri-facebook-fill text-3xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-blue-400 hover:bg-blue-500 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <i className="ri-twitter-fill text-3xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <i className="ri-youtube-fill text-3xl text-white"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
