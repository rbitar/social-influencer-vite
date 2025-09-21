import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-600">Bella Rose</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#tutorials" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Tutorials</a>
                <a href="#products" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#contact" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-900 hover:text-rose-600">
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Beauty That 
                <span className="text-rose-600 block">Inspires</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to my world of beauty! I'm Bella Rose, a passionate beauty influencer sharing makeup tutorials, skincare tips, and lifestyle content to help you feel confident and beautiful every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-700 transition-colors">
                  Watch Tutorials
                </button>
                <button className="border border-rose-600 text-rose-600 px-8 py-4 rounded-full font-medium hover:bg-rose-50 transition-colors">
                  Follow My Journey
                </button>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <i className="ri-instagram-line text-xl text-rose-600"></i>
                  <span className="text-sm text-gray-600">250K followers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-youtube-line text-xl text-rose-600"></i>
                  <span className="text-sm text-gray-600">180K subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-tiktok-line text-xl text-rose-600"></i>
                  <span className="text-sm text-gray-600">320K followers</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-300 rounded-3xl rotate-6 opacity-20"></div>
                <img 
                  src="hero-portrait.jpg" 
                  alt="Bella Rose - Beauty Influencer" 
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about empowering others through beauty and self-expression
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="content-creation.jpg" 
                alt="Content Creation Setup" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hi beautiful souls! I started my journey in the beauty world over 5 years ago with a simple passion for makeup and a desire to help others feel confident in their own skin.
                </p>
                <p>
                  What began as experimenting with different looks in my bedroom has grown into a community of amazing individuals who share the same love for beauty, self-care, and empowerment.
                </p>
                <p>
                  I believe that beauty comes from within, and makeup is just a fun way to express your creativity and enhance your natural features. My mission is to create content that's not only beautiful but also accessible and inclusive for everyone.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Tutorials Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Content Section */}
      <section id="tutorials" className="py-20 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What I Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From everyday looks to glamorous transformations, I share content that inspires and educates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-makeup-line text-2xl text-rose-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Makeup Tutorials</h3>
              <p className="text-gray-600 mb-6">Step-by-step makeup tutorials for every occasion, from natural everyday looks to bold evening glam.</p>
              <a href="#" className="text-rose-600 font-medium hover:text-rose-700 transition-colors">
                Watch Now <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-drop-line text-2xl text-rose-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skincare Routines</h3>
              <p className="text-gray-600 mb-6">Comprehensive skincare guides and product reviews to help you achieve healthy, glowing skin.</p>
              <a href="#" className="text-rose-600 font-medium hover:text-rose-700 transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shopping-bag-line text-2xl text-rose-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Reviews</h3>
              <p className="text-gray-600 mb-6">Honest reviews and recommendations for the latest beauty products and trending items.</p>
              <a href="#" className="text-rose-600 font-medium hover:text-rose-700 transition-colors">
                See Reviews <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My current favorites and must-have products that I use and recommend
            </p>
          </div>
          <div className="relative">
            <img 
              src="makeup-collection.jpg" 
              alt="Featured Makeup Collection" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Current Favorites Collection</h3>
              <p className="text-white/80 mb-4">Discover the products I can't live without</p>
              <button className="bg-rose-600 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors">
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow me on social media for daily beauty inspiration and behind-the-scenes content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a href="#" className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <i className="ri-instagram-line text-4xl text-rose-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">Daily beauty content & stories</p>
              <span className="text-rose-600 font-medium">@bellarose_beauty</span>
            </a>
            <a href="#" className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <i className="ri-youtube-line text-4xl text-rose-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube</h3>
              <p className="text-gray-600 mb-4">Detailed tutorials & vlogs</p>
              <span className="text-rose-600 font-medium">Bella Rose Beauty</span>
            </a>
            <a href="#" className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <i className="ri-tiktok-line text-4xl text-rose-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-600 mb-4">Quick tips & trending looks</p>
              <span className="text-rose-600 font-medium">@bellarose</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-rose-400 mb-4">Bella Rose</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Empowering beauty, one tutorial at a time. Thank you for being part of this amazing community!
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <i className="ri-youtube-line text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <i className="ri-tiktok-line text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <i className="ri-mail-line text-2xl"></i>
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
              <p>&copy; 2024 Bella Rose Beauty. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;