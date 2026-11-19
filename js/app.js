// Travel Go - Main React Application Core
(function() {
  const { createElement: h, useState, useEffect, useMemo, useRef } = React;
  const { Icons, formatPrice } = window.TravelComponents;
  const DATA = window.TRAVEL_DATA;

  function App() {
    // Pages & Modals from TravelPages module
    const {
      AboutUsPage,
      DestinationsPage,
      DestinationDetailPage,
      PackagesPage,
      PackageDetailPage,
      BlogPage,
      ContactUsPage,
      TripPlannerModal,
      BookingModal,
      WishlistDrawer,
      ArticleReaderModal
    } = window.TravelPages;

    // Navigation / Routing State
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedDestinationId, setSelectedDestinationId] = useState('bali');
    const [selectedPackageId, setSelectedPackageId] = useState('pkg-bali-escape');
    const [selectedArticleId, setSelectedArticleId] = useState(null);

    // Global Preferences & Features
    const [currency, setCurrency] = useState('USD');
    const [wishlist, setWishlist] = useState(() => {
      try {
        const saved = localStorage.getItem('travelgo_wishlist');
        return saved ? JSON.parse(saved) : ['bali', 'pkg-swiss-alps'];
      } catch (e) {
        return ['bali', 'pkg-swiss-alps'];
      }
    });

    // Modals & Drawers State
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isPlannerOpen, setIsPlannerOpen] = useState(false);
    const [bookingState, setBookingState] = useState({
      isOpen: false,
      package: null,
      destination: null,
      travelers: 2,
      departureDate: '2026-04-15'
    });

    // Filter states for catalog pages
    const [packageFilterCategory, setPackageFilterCategory] = useState('All');
    const [destinationFilterCategory, setDestinationFilterCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Toast Notifications State
    const [toasts, setToasts] = useState([]);
    const addToast = (message, type = 'success') => {
      const id = Date.now() + Math.random();
      setToasts(prev => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 4000);
    };

    // Wishlist Persistence & Toggle
    const toggleWishlist = (id, name) => {
      setWishlist(prev => {
        let updated;
        if (prev.includes(id)) {
          updated = prev.filter(item => item !== id);
          addToast(`Removed ${name || 'item'} from your saved wishlist`, 'info');
        } else {
          updated = [...prev, id];
          addToast(`Saved ${name || 'item'} to your wishlist!`, 'success');
        }
        try {
          localStorage.setItem('travelgo_wishlist', JSON.stringify(updated));
        } catch (e) {}
        return updated;
      });
    };

    // Smooth scroll to top when page changes
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, selectedDestinationId, selectedPackageId]);

    // Navigation Helper
    const navigateTo = (page, params = {}) => {
      if (params.destinationId) setSelectedDestinationId(params.destinationId);
      if (params.packageId) setSelectedPackageId(params.packageId);
      if (params.category) setPackageFilterCategory(params.category);
      if (params.search) setSearchQuery(params.search);
      setCurrentPage(page);
    };

    // Quick Book Action
    const openBooking = (pkg, destination) => {
      setBookingState({
        isOpen: true,
        package: pkg || DATA.packages[0],
        destination: destination || DATA.destinations.find(d => d.id === (pkg ? pkg.destinationId : 'bali')),
        travelers: 2,
        departureDate: '2026-04-15'
      });
    };

    return h('div', { className: 'min-h-screen flex flex-col bg-slate-50 text-slate-800' },
      // Top Sticky Navigation
      h(Navbar, {
        currentPage,
        navigateTo,
        currency,
        setCurrency,
        wishlistCount: wishlist.length,
        openWishlist: () => setIsWishlistOpen(true),
        openPlanner: () => setIsPlannerOpen(true),
        openBooking: () => openBooking()
      }),

      // Main Dynamic Page Content
      h('main', { className: 'flex-grow' },
        currentPage === 'home' && h(HomePage, {
          navigateTo,
          currency,
          wishlist,
          toggleWishlist,
          openBooking,
          openPlanner: () => setIsPlannerOpen(true),
          addToast,
          setSelectedArticleId
        }),

        currentPage === 'about' && h(AboutUsPage, {
          navigateTo,
          openPlanner: () => setIsPlannerOpen(true)
        }),

        currentPage === 'destinations' && h(DestinationsPage, {
          navigateTo,
          currency,
          wishlist,
          toggleWishlist,
          categoryFilter: destinationFilterCategory,
          setCategoryFilter: setDestinationFilterCategory
        }),

        currentPage === 'destination-detail' && h(DestinationDetailPage, {
          destinationId: selectedDestinationId,
          navigateTo,
          currency,
          wishlist,
          toggleWishlist,
          openBooking,
          addToast
        }),

        currentPage === 'packages' && h(PackagesPage, {
          navigateTo,
          currency,
          wishlist,
          toggleWishlist,
          openBooking,
          categoryFilter: packageFilterCategory,
          setCategoryFilter: setPackageFilterCategory,
          initialSearch: searchQuery
        }),

        currentPage === 'package-detail' && h(PackageDetailPage, {
          packageId: selectedPackageId,
          navigateTo,
          currency,
          wishlist,
          toggleWishlist,
          openBooking,
          addToast
        }),

        currentPage === 'blog' && h(BlogPage, {
          setSelectedArticleId
        }),

        currentPage === 'contact' && h(ContactUsPage, {
          addToast
        })
      ),

      // Global Footer
      h(Footer, {
        navigateTo,
        openBooking: () => openBooking()
      }),

      // Global Modals & Drawers
      isWishlistOpen && h(WishlistDrawer, {
        isOpen: isWishlistOpen,
        onClose: () => setIsWishlistOpen(false),
        wishlist,
        toggleWishlist,
        currency,
        navigateTo,
        openBooking
      }),

      isPlannerOpen && h(TripPlannerModal, {
        isOpen: isPlannerOpen,
        onClose: () => setIsPlannerOpen(false),
        currency,
        addToast
      }),

      bookingState.isOpen && h(BookingModal, {
        bookingState,
        onClose: () => setBookingState(prev => ({ ...prev, isOpen: false })),
        currency,
        addToast
      }),

      selectedArticleId && h(ArticleReaderModal, {
        articleId: selectedArticleId,
        onClose: () => setSelectedArticleId(null)
      }),

      // Toast Notifications Stack
      h(ToastContainer, { toasts })
    );
  }

  // ==========================================
  // NAVIGATION BAR COMPONENT
  // ==========================================
  function Navbar({ currentPage, navigateTo, currency, setCurrency, wishlistCount, openWishlist, openPlanner, openBooking }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
      { id: 'home', label: 'Home' },
      { id: 'destinations', label: 'Destinations' },
      { id: 'packages', label: 'Packages' },
      { id: 'experiences', label: 'Experiences', onClick: () => navigateTo('home', { scrollTo: 'experiences' }) },
      { id: 'about', label: 'About Us' },
      { id: 'blog', label: 'Travel Blog' },
      { id: 'contact', label: 'Contact' }
    ];

    const handleNavClick = (link) => {
      setMobileMenuOpen(false);
      if (link.id === 'experiences') {
        if (currentPage === 'home') {
          const el = document.getElementById('experiences-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigateTo('home');
          setTimeout(() => {
            const el = document.getElementById('experiences-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      } else {
        navigateTo(link.id);
      }
    };

    return h('header', {
      className: `sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`
    },
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'flex items-center justify-between' },
          // Logo
          h('div', {
            className: 'flex items-center gap-3 cursor-pointer group',
            onClick: () => navigateTo('home')
          },
            h('div', { className: 'w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform' },
              h(Icons.Compass, { className: 'w-6 h-6 animate-pulse' })
            ),
            h('div', null,
              h('div', { className: 'flex items-center gap-1.5' },
                h('span', { className: 'text-2xl font-black font-display tracking-tight text-slate-900' }, 'Travel'),
                h('span', { className: 'text-2xl font-black font-display tracking-tight text-sky-600' }, 'Go'),
                h('span', { className: 'w-2 h-2 rounded-full bg-orange-500 inline-block' })
              ),
              h('p', { className: 'text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1' }, 'Explore the World')
            )
          ),

          // Desktop Navigation Links
          h('nav', { className: 'hidden lg:flex items-center gap-1 xl:gap-2' },
            navLinks.map(link => {
              const active = currentPage === link.id;
              return h('button', {
                key: link.id,
                onClick: () => handleNavClick(link),
                className: `px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                }`
              }, link.label);
            })
          ),

          // Right Controls: Currency, Wishlist & Book Button
          h('div', { className: 'hidden sm:flex items-center gap-3' },
            // Currency Switcher
            h('div', { className: 'relative flex items-center bg-slate-100/80 rounded-full px-2.5 py-1 border border-slate-200 text-xs font-semibold text-slate-700' },
              h(Icons.Globe, { className: 'w-3.5 h-3.5 text-slate-500 mr-1.5' }),
              h('select', {
                value: currency,
                onChange: (e) => setCurrency(e.target.value),
                className: 'bg-transparent text-xs font-semibold focus:outline-none cursor-pointer pr-1 text-slate-700'
              },
                Object.keys(DATA.currencies).map(c =>
                  h('option', { key: c, value: c }, DATA.currencies[c].label)
                )
              )
            ),

            // Wishlist Button
            h('button', {
              onClick: openWishlist,
              className: 'relative p-2.5 rounded-full text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors',
              title: 'Saved Destinations & Packages'
            },
              h(Icons.Heart, { className: 'w-5 h-5' }),
              wishlistCount > 0 && h('span', {
                className: 'absolute top-1 right-1 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce'
              }, wishlistCount)
            ),

            // Prominent Book Your Trip CTA
            h('button', {
              onClick: () => openBooking(),
              className: 'relative group overflow-hidden rounded-full bg-gradient-to-r from-sky-600 to-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2'
            },
              h(Icons.Sparkles, { className: 'w-4 h-4 text-sky-200' }),
              h('span', null, 'Book Your Trip')
            )
          ),

          // Mobile Hamburger Button
          h('div', { className: 'flex sm:hidden items-center gap-2' },
            h('button', {
              onClick: openWishlist,
              className: 'p-2 rounded-full text-slate-700 relative'
            },
              h(Icons.Heart, { className: 'w-5 h-5' }),
              wishlistCount > 0 && h('span', { className: 'absolute top-1 right-1 w-3.5 h-3.5 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center' }, wishlistCount)
            ),
            h('button', {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: 'p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors'
            },
              mobileMenuOpen ? h(Icons.X, { className: 'w-6 h-6' }) : h(Icons.Menu, { className: 'w-6 h-6' })
            )
          )
        )
      ),

      // Mobile Slide Down Menu Drawer
      mobileMenuOpen && h('div', { className: 'lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-modal shadow-xl' },
        h('div', { className: 'grid grid-cols-2 gap-2 pb-2 border-b border-slate-100' },
          navLinks.map(link => h('button', {
            key: link.id,
            onClick: () => handleNavClick(link),
            className: `text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${
              currentPage === link.id ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`
          }, link.label))
        ),
        h('div', { className: 'flex items-center justify-between pt-1' },
          h('span', { className: 'text-xs font-semibold text-slate-500' }, 'Currency'),
          h('div', { className: 'flex gap-1.5' },
            Object.keys(DATA.currencies).map(c => h('button', {
              key: c,
              onClick: () => setCurrency(c),
              className: `px-2.5 py-1 text-xs rounded-full font-bold ${
                currency === c ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
              }`
            }, c))
          )
        ),
        h('button', {
          onClick: () => { setMobileMenuOpen(false); openBooking(); },
          className: 'w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold text-center shadow-md'
        }, 'Book Your Trip Now')
      )
    );
  }

  // ==========================================
  // HOME PAGE
  // ==========================================
  function HomePage({ navigateTo, currency, wishlist, toggleWishlist, openBooking, openPlanner, addToast, setSelectedArticleId }) {
    return h('div', { className: 'space-y-20 pb-16' },
      // Hero Section
      h(HeroSection, { navigateTo, openPlanner }),

      // Popular Destinations Section
      h(PopularDestinationsSection, { navigateTo, currency, wishlist, toggleWishlist }),

      // Featured Travel Packages Section
      h(FeaturedPackagesSection, { navigateTo, currency, wishlist, toggleWishlist, openBooking }),

      // Why Choose Travel Go Section
      h(WhyChooseUsSection, null),

      // Explore Travel Experiences Section
      h(TravelExperiencesSection, { navigateTo }),

      // Travel Inspiration / Blog Section
      h(TravelInspirationSection, { navigateTo, setSelectedArticleId }),

      // Customer Testimonials Section
      h(TestimonialsSection, null),

      // Newsletter Subscription Section
      h(NewsletterSection, { addToast })
    );
  }

  // ==========================================
  // HERO SECTION COMPONENT
  // ==========================================
  function HeroSection({ navigateTo, openPlanner }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = DATA.heroSlides;

    // Search bar inputs
    const [searchDest, setSearchDest] = useState('');
    const [searchDate, setSearchDate] = useState('2026-05-10');
    const [searchTravelers, setSearchTravelers] = useState('2');

    // Auto rotate slides smoothly every 6 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }, [slides.length]);

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      navigateTo('packages', {
        search: searchDest,
        travelers: searchTravelers
      });
    };

    const activeSlide = slides[currentSlide];

    return h('section', { className: 'relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden' },
      // Background Image Carousel with Cross-Fade
      slides.map((slide, idx) => h('div', {
        key: idx,
        className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
        }`,
        style: {
          backgroundImage: `url('${slide.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 1.2s ease-in-out, transform 8s ease-out'
        }
      })),

      // Multi-layer Rich Gradient Overlay for High Contrast Text Legibility
      h('div', {
        className: 'absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/40'
      }),
      h('div', {
        className: 'absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent'
      }),

      // Slide Indicators & Location Tag
      h('div', { className: 'absolute bottom-8 right-6 sm:right-12 z-20 hidden md:flex items-center gap-4 text-white/80' },
        h('div', { className: 'text-right' },
          h('span', { className: 'text-xs uppercase tracking-widest text-sky-400 font-bold block' }, activeSlide.tag),
          h('span', { className: 'text-sm font-semibold' }, activeSlide.location)
        ),
        h('div', { className: 'flex gap-2' },
          slides.map((_, i) => h('button', {
            key: i,
            onClick: () => setCurrentSlide(i),
            className: `h-1.5 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-sky-400' : 'w-2 bg-white/40 hover:bg-white/70'
            }`
          }))
        )
      ),

      // Hero Center Content & Search Box
      h('div', { className: 'relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center' },
        // Trust Tag
        h('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6' },
          h(Icons.Sparkles, { className: 'w-4 h-4 text-orange-400' }),
          h('span', null, 'Award-Winning International Travel Experience'),
          h('span', { className: 'w-1.5 h-1.5 rounded-full bg-sky-400' }),
          h('span', { className: 'text-sky-300 font-semibold' }, '50,000+ Happy Explorers')
        ),

        // Main Heading
        h('h1', { className: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-tight max-w-4xl drop-shadow-sm' },
          'Discover the World, ',
          h('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-orange-300' }, 'One Journey'),
          ' at a Time.'
        ),

        // Subtitle
        h('p', { className: 'mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm font-normal' },
          'Your next adventure is waiting. Explore breathtaking destinations, discover unique experiences, and create memories that last forever.'
        ),

        // Two CTAs
        h('div', { className: 'mt-8 flex flex-wrap items-center justify-center gap-4' },
          h('button', {
            onClick: () => navigateTo('destinations'),
            className: 'px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-base shadow-xl shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2'
          },
            h('span', null, 'Explore Destinations'),
            h(Icons.ArrowRight, { className: 'w-5 h-5' })
          ),
          h('button', {
            onClick: openPlanner,
            className: 'px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-bold text-base hover:scale-105 active:scale-95 transition-all flex items-center gap-2'
          },
            h(Icons.Compass, { className: 'w-5 h-5 text-orange-400' }),
            h('span', null, 'Plan Your Journey')
          )
        ),

        // Stylish Travel Search Bar
        h('form', {
          onSubmit: handleSearchSubmit,
          className: 'mt-12 w-full max-w-4xl bg-white rounded-3xl p-3 sm:p-4 shadow-2xl shadow-slate-950/40 border border-white/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left'
        },
          // Input 1: Destination
          h('div', { className: 'flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-300 transition-colors' },
            h('div', { className: 'w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0' },
              h(Icons.MapPin, { className: 'w-5 h-5' })
            ),
            h('div', { className: 'flex-1 min-w-0' },
              h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider' }, 'Destination'),
              h('input', {
                type: 'text',
                placeholder: 'Where to? (e.g. Bali, Paris)',
                value: searchDest,
                onChange: (e) => setSearchDest(e.target.value),
                className: 'w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none'
              })
            )
          ),

          // Input 2: Travel Date
          h('div', { className: 'flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-300 transition-colors' },
            h('div', { className: 'w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0' },
              h(Icons.Calendar, { className: 'w-5 h-5' })
            ),
            h('div', { className: 'flex-1 min-w-0' },
              h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider' }, 'Travel Date'),
              h('input', {
                type: 'date',
                value: searchDate,
                onChange: (e) => setSearchDate(e.target.value),
                className: 'w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer'
              })
            )
          ),

          // Input 3: Travelers Count
          h('div', { className: 'flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-300 transition-colors' },
            h('div', { className: 'w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0' },
              h(Icons.Users, { className: 'w-5 h-5' })
            ),
            h('div', { className: 'flex-1 min-w-0' },
              h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider' }, 'Travelers'),
              h('select', {
                value: searchTravelers,
                onChange: (e) => setSearchTravelers(e.target.value),
                className: 'w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer'
              },
                h('option', { value: '1' }, '1 Solo Traveler'),
                h('option', { value: '2' }, '2 Travelers (Couple)'),
                h('option', { value: '3' }, '3 Travelers (Family)'),
                h('option', { value: '4' }, '4+ Travelers (Group)')
              )
            )
          ),

          // Submit CTA Button
          h('div', { className: 'flex items-center' },
            h('button', {
              type: 'submit',
              className: 'w-full h-full min-h-[52px] rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-98 transition-all flex items-center justify-center gap-2'
            },
              h(Icons.Search, { className: 'w-4 h-4' }),
              h('span', null, 'Search Trips')
            )
          )
        )
      )
    );
  }

  // ==========================================
  // POPULAR DESTINATIONS SECTION
  // ==========================================
  function PopularDestinationsSection({ navigateTo, currency, wishlist, toggleWishlist }) {
    const destinations = DATA.destinations;

    return h('section', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8' },
      // Section Header
      h('div', { className: 'flex flex-col md:flex-row md:items-end justify-between mb-12' },
        h('div', null,
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Dream Escapes'),
          h('h2', { className: 'text-3xl sm:text-4xl font-black font-display text-slate-900 mt-3' }, 'Popular Destinations'),
          h('p', { className: 'text-slate-500 text-base mt-2 max-w-xl' },
            'From the serene beaches of Bali and the Maldives to the high alpine peaks of Switzerland and the romance of Paris.'
          )
        ),
        h('button', {
          onClick: () => navigateTo('destinations'),
          className: 'mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 group'
        },
          h('span', null, 'View All Destinations'),
          h(Icons.ArrowRight, { className: 'w-4 h-4 group-hover:translate-x-1 transition-transform' })
        )
      ),

      // Destination Cards Grid (8 Cards: Bali, Paris, Switzerland, Dubai, Maldives, Tokyo, Manali, Kashmir)
      h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
        destinations.map(dest => {
          const isFavorited = wishlist.includes(dest.id);
          return h('div', {
            key: dest.id,
            className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100 flex flex-col group'
          },
            // Card Image
            h('div', { className: 'relative h-56 img-zoom-container cursor-pointer', onClick: () => navigateTo('destination-detail', { destinationId: dest.id }) },
              h('img', {
                src: dest.image,
                alt: dest.name,
                className: 'w-full h-full object-cover img-zoom-target'
              }),
              h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' }),

              // Wishlist Heart Button
              h('button', {
                onClick: (e) => { e.stopPropagation(); toggleWishlist(dest.id, dest.name); },
                className: 'absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-sm'
              },
                h(Icons.Heart, { className: `w-4 h-4 ${isFavorited ? 'text-red-500 fill-red-500' : ''}` })
              ),

              // Country Pill
              h('div', { className: 'absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-xs font-semibold' },
                dest.country
              ),

              // Bottom details inside image
              h('div', { className: 'absolute bottom-3 left-4 right-4 flex items-center justify-between text-white' },
                h('div', { className: 'flex items-center gap-1.5' },
                  h(Icons.Star, { className: 'w-4 h-4 text-amber-400 fill-amber-400' }),
                  h('span', { className: 'text-sm font-bold' }, dest.rating),
                  h('span', { className: 'text-xs text-slate-300' }, `(${dest.reviewCount})`)
                ),
                h('div', { className: 'text-xs font-medium text-sky-200' }, dest.weather)
              )
            ),

            // Card Body
            h('div', { className: 'p-5 flex flex-col flex-1 justify-between' },
              h('div', null,
                h('div', { className: 'flex items-baseline justify-between gap-2' },
                  h('h3', {
                    onClick: () => navigateTo('destination-detail', { destinationId: dest.id }),
                    className: 'text-xl font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer'
                  }, dest.name),
                  h('span', { className: 'text-xs font-semibold text-slate-400' }, 'From')
                ),
                h('p', { className: 'text-xs text-sky-700 font-medium mt-1 line-clamp-1' }, dest.tagline),
                h('p', { className: 'text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed' }, dest.overview)
              ),

              // Bottom Pricing & CTA
              h('div', { className: 'mt-5 pt-4 border-t border-slate-100 flex items-center justify-between' },
                h('div', null,
                  h('span', { className: 'text-lg font-black text-slate-900' }, formatPrice(dest.priceFrom, currency)),
                  h('span', { className: 'text-[11px] text-slate-400 ml-1' }, '/ person')
                ),
                h('button', {
                  onClick: () => navigateTo('destination-detail', { destinationId: dest.id }),
                  className: 'px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5'
                },
                  h('span', null, 'Explore More'),
                  h(Icons.ArrowRight, { className: 'w-3.5 h-3.5' })
                )
              )
            )
          );
        })
      )
    );
  }

  // ==========================================
  // FEATURED TRAVEL PACKAGES SECTION
  // ==========================================
  function FeaturedPackagesSection({ navigateTo, currency, wishlist, toggleWishlist, openBooking }) {
    const packages = DATA.packages.slice(0, 6);

    return h('section', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      // Section Header
      h('div', { className: 'flex flex-col md:flex-row md:items-end justify-between mb-12' },
        h('div', null,
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full' }, 'Curated Itineraries'),
          h('h2', { className: 'text-3xl sm:text-4xl font-black font-display text-slate-900 mt-3' }, 'Featured Travel Packages'),
          h('p', { className: 'text-slate-500 text-base mt-2 max-w-xl' },
            'All-inclusive packages with 5-star accommodations, private guided tours, exquisite dining, and seamless transfers.'
          )
        ),
        h('button', {
          onClick: () => navigateTo('packages'),
          className: 'mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group'
        },
          h('span', null, 'Browse All Packages'),
          h(Icons.ArrowRight, { className: 'w-4 h-4 group-hover:translate-x-1 transition-transform' })
        )
      ),

      // Packages Grid
      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        packages.map(pkg => {
          const isFavorited = wishlist.includes(pkg.id);
          return h('div', {
            key: pkg.id,
            className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-100 flex flex-col group'
          },
            // Hero Image
            h('div', { className: 'relative h-60 img-zoom-container cursor-pointer', onClick: () => navigateTo('package-detail', { packageId: pkg.id }) },
              h('img', {
                src: pkg.heroImage,
                alt: pkg.title,
                className: 'w-full h-full object-cover img-zoom-target'
              }),
              h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' }),

              // Tag Ribbon
              h('div', { className: 'absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide shadow-md' },
                pkg.tag
              ),

              // Duration Badge
              h('div', { className: 'absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5' },
                h(Icons.Clock, { className: 'w-3.5 h-3.5 text-sky-400' }),
                h('span', null, pkg.duration)
              ),

              // Wishlist Toggle
              h('button', {
                onClick: (e) => { e.stopPropagation(); toggleWishlist(pkg.id, pkg.title); },
                className: 'absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-sm'
              },
                h(Icons.Heart, { className: `w-4 h-4 ${isFavorited ? 'text-red-500 fill-red-500' : ''}` })
              )
            ),

            // Card Body
            h('div', { className: 'p-6 flex flex-col flex-1 justify-between' },
              h('div', null,
                // Rating & Style
                h('div', { className: 'flex items-center justify-between text-xs text-slate-500 mb-2' },
                  h('span', { className: 'font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full' }, pkg.travelStyle),
                  h('div', { className: 'flex items-center gap-1' },
                    h(Icons.Star, { className: 'w-3.5 h-3.5 text-amber-400 fill-amber-400' }),
                    h('span', { className: 'font-bold text-slate-800' }, pkg.rating),
                    h('span', { className: 'text-slate-400' }, `(${pkg.reviewCount})`)
                  )
                ),

                // Title
                h('h3', {
                  onClick: () => navigateTo('package-detail', { packageId: pkg.id }),
                  className: 'text-lg font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 cursor-pointer'
                }, pkg.title),

                // Short Description
                h('p', { className: 'text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed' }, pkg.shortDesc),

                // Inclusions Preview Chips
                h('div', { className: 'mt-4 flex flex-wrap gap-1.5' },
                  pkg.inclusions.slice(0, 3).map((inc, i) => h('span', {
                    key: i,
                    className: 'text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 flex items-center gap-1'
                  },
                    h(Icons.Check, { className: 'w-3 h-3 text-sky-500' }),
                    h('span', { className: 'truncate max-w-[180px]' }, inc)
                  ))
                )
              ),

              // Bottom Actions
              h('div', { className: 'mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3' },
                h('div', null,
                  h('span', { className: 'text-[11px] text-slate-400 uppercase tracking-wider font-semibold block' }, 'Starting From'),
                  h('div', { className: 'flex items-baseline' },
                    h('span', { className: 'text-xl font-black text-slate-900' }, formatPrice(pkg.price, currency)),
                    h('span', { className: 'text-xs text-slate-400 ml-1 font-medium' }, '/ person')
                  )
                ),
                h('div', { className: 'flex items-center gap-2' },
                  h('button', {
                    onClick: () => navigateTo('package-detail', { packageId: pkg.id }),
                    className: 'px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors'
                  }, 'View Details'),
                  h('button', {
                    onClick: () => openBooking(pkg),
                    className: 'px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 shadow-md shadow-sky-600/20 active:scale-95 transition-all'
                  }, 'Book Now')
                )
              )
            )
          );
        })
      )
    );
  }

  // ==========================================
  // WHY CHOOSE US SECTION
  // ==========================================
  function WhyChooseUsSection() {
    const pillars = DATA.whyChooseUs;
    const stats = DATA.stats;

    return h('section', { className: 'bg-slate-900 text-white py-20 relative overflow-hidden' },
      // Subtle decorative background glows
      h('div', { className: 'absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none' }),
      h('div', { className: 'absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none' }),

      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10' },
        // Header
        h('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-400 bg-sky-950/80 border border-sky-800 px-3.5 py-1 rounded-full' }, 'The Travel Go Distinction'),
          h('h2', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black font-display mt-4 tracking-tight' }, 'Why Travel With Travel Go?'),
          h('p', { className: 'text-slate-400 text-base mt-3 leading-relaxed' },
            'We combine insider destination knowledge, luxury resort alliances, and 24/7 dedicated concierges to deliver extraordinary, stress-free travel memories.'
          )
        ),

        // 6 Benefit Cards
        h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' },
          pillars.map((item, idx) => {
            const IconComponent = Icons[item.icon === 'compass' ? 'Compass' : item.icon === 'tag' ? 'Tag' : item.icon === 'award' ? 'Award' : item.icon === 'heart' ? 'Heart' : item.icon === 'headset' ? 'Headset' : 'Shield'] || Icons.Compass;
            return h('div', {
              key: idx,
              className: 'p-8 rounded-3xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 hover:bg-slate-800/90 transition-all duration-300 group'
            },
              h('div', { className: 'w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-600/30 group-hover:scale-110 transition-transform' },
                h(IconComponent, { className: 'w-6 h-6' })
              ),
              h('h3', { className: 'text-xl font-bold font-display text-white mb-2' }, item.title),
              h('p', { className: 'text-sm text-slate-400 leading-relaxed' }, item.desc)
            );
          })
        ),

        // Stats Bar
        h('div', { className: 'mt-16 pt-12 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center' },
          stats.map((stat, idx) => h('div', { key: idx },
            h('span', { className: 'text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-orange-300 font-display' }, stat.value),
            h('p', { className: 'text-xs uppercase font-bold tracking-wider text-slate-400 mt-1' }, stat.label)
          ))
        )
      )
    );
  }

  // ==========================================
  // EXPLORE TRAVEL EXPERIENCES SECTION
  // ==========================================
  function TravelExperiencesSection({ navigateTo }) {
    const experiences = DATA.experiences;

    return h('section', { id: 'experiences-section', className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      h('div', { className: 'text-center max-w-2xl mx-auto mb-12' },
        h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Tailored Travel Styles'),
        h('h2', { className: 'text-3xl sm:text-4xl font-black font-display text-slate-900 mt-3' }, 'Explore Travel Experiences'),
        h('p', { className: 'text-slate-500 text-base mt-2' },
          'Whether you crave serene beach relaxation, high-octane mountain climbs, or culturally immersive city explorations.'
        )
      ),

      h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        experiences.map(exp => h('div', {
          key: exp.id,
          onClick: () => navigateTo('packages', { category: exp.title }),
          className: 'travel-card relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-md shadow-slate-100'
        },
          h('img', {
            src: exp.image,
            alt: exp.title,
            className: 'w-full h-full object-cover img-zoom-target'
          }),
          h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' }),

          // Experience Content Overlay
          h('div', { className: 'absolute inset-0 p-6 flex flex-col justify-between text-white' },
            h('div', { className: 'flex justify-between items-start' },
              h('span', { className: 'px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white' },
                `${exp.packagesCount}+ Packages`
              ),
              h('div', { className: 'w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-sky-500 group-hover:scale-110 transition-all' },
                h(Icons.ArrowRight, { className: 'w-4 h-4' })
              )
            ),

            h('div', null,
              h('h3', { className: 'text-2xl font-bold font-display text-white mb-2 group-hover:text-sky-300 transition-colors' }, exp.title),
              h('p', { className: 'text-xs text-slate-200 line-clamp-2 leading-relaxed' }, exp.description),
              h('div', { className: 'mt-3 flex flex-wrap gap-1.5' },
                exp.destinations.map((d, i) => h('span', {
                  key: i,
                  className: 'text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/40 text-sky-200'
                }, d))
              )
            )
          )
        ))
      )
    );
  }

  // ==========================================
  // TRAVEL INSPIRATION / BLOG SECTION
  // ==========================================
  function TravelInspirationSection({ navigateTo, setSelectedArticleId }) {
    const articles = DATA.blogArticles;

    return h('section', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      h('div', { className: 'flex flex-col md:flex-row md:items-end justify-between mb-12' },
        h('div', null,
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Editorial Magazine'),
          h('h2', { className: 'text-3xl sm:text-4xl font-black font-display text-slate-900 mt-3' }, 'Travel Inspiration & Guides'),
          h('p', { className: 'text-slate-500 text-base mt-2 max-w-xl' },
            'Insider tips, local recommendations, cultural stories, and hidden gems written by our resident travel curators.'
          )
        ),
        h('button', {
          onClick: () => navigateTo('blog'),
          className: 'mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 group'
        },
          h('span', null, 'Visit Travel Blog'),
          h(Icons.ArrowRight, { className: 'w-4 h-4 group-hover:translate-x-1 transition-transform' })
        )
      ),

      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
        articles.map(art => h('article', {
          key: art.id,
          onClick: () => setSelectedArticleId(art.id),
          className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md cursor-pointer flex flex-col group'
        },
          h('div', { className: 'relative h-48 img-zoom-container' },
            h('img', {
              src: art.image,
              alt: art.title,
              className: 'w-full h-full object-cover img-zoom-target'
            }),
            h('span', { className: 'absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-bold' },
              art.category
            )
          ),
          h('div', { className: 'p-5 flex flex-col flex-1 justify-between' },
            h('div', null,
              h('div', { className: 'flex items-center gap-2 text-xs text-slate-400 mb-2' },
                h('span', null, art.date),
                h('span', null, '•'),
                h('span', null, art.readTime)
              ),
              h('h3', { className: 'text-base font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug' },
                art.title
              ),
              h('p', { className: 'text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed' }, art.excerpt)
            ),
            h('div', { className: 'mt-4 pt-3 border-t border-slate-100 flex items-center justify-between' },
              h('div', { className: 'flex items-center gap-2' },
                h('img', { src: art.author.avatar, alt: art.author.name, className: 'w-6 h-6 rounded-full object-cover' }),
                h('span', { className: 'text-xs font-semibold text-slate-700 truncate max-w-[110px]' }, art.author.name)
              ),
              h('span', { className: 'text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1' },
                h('span', null, 'Read'),
                h(Icons.ArrowRight, { className: 'w-3 h-3' })
              )
            )
          )
        ))
      )
    );
  }

  // ==========================================
  // CUSTOMER TESTIMONIALS SECTION
  // ==========================================
  function TestimonialsSection() {
    const reviews = DATA.testimonials;

    return h('section', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      h('div', { className: 'text-center max-w-2xl mx-auto mb-12' },
        h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Real Traveler Stories'),
        h('h2', { className: 'text-3xl sm:text-4xl font-black font-display text-slate-900 mt-3' }, 'Loved by Explorers Worldwide'),
        h('p', { className: 'text-slate-500 text-base mt-2' },
          'Read authentic testimonials from travelers who turned their dream vacations into reality with Travel Go.'
        ),
        h('span', { className: 'inline-block mt-2 text-[11px] font-semibold text-slate-400 bg-slate-100 px-3 py-0.5 rounded-full' },
          'Verified Demo Client Testimonials'
        )
      ),

      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
        reviews.map(rev => h('div', {
          key: rev.id,
          className: 'bg-white rounded-3xl p-6 border border-slate-100 shadow-md shadow-slate-100 flex flex-col justify-between relative'
        },
          h('div', null,
            // Rating Stars
            h('div', { className: 'flex items-center gap-1 text-amber-400 mb-4' },
              [...Array(rev.rating)].map((_, i) => h(Icons.Star, { key: i, className: 'w-4 h-4 fill-amber-400' }))
            ),
            h('p', { className: 'text-xs text-slate-600 leading-relaxed italic' }, `"${rev.review}"`)
          ),

          h('div', { className: 'mt-6 pt-4 border-t border-slate-100 flex items-center gap-3' },
            h('img', { src: rev.avatar, alt: rev.name, className: 'w-10 h-10 rounded-full object-cover border border-sky-100' }),
            h('div', { className: 'min-w-0 flex-1' },
              h('h4', { className: 'text-xs font-bold text-slate-900 truncate' }, rev.name),
              h('p', { className: 'text-[11px] text-slate-400 truncate' }, rev.country),
              h('p', { className: 'text-[10px] text-sky-600 font-semibold truncate' }, rev.destination)
            )
          )
        ))
      )
    );
  }

  // ==========================================
  // NEWSLETTER SUBSCRIPTION SECTION
  // ==========================================
  function NewsletterSection({ addToast }) {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
      e.preventDefault();
      if (!email || !email.includes('@')) {
        addToast('Please enter a valid email address.', 'error');
        return;
      }
      setIsSubscribed(true);
      addToast('Welcome to Travel Go! Use promo code EXPLORE15 for 15% off your first trip.', 'success');
      setEmail('');
    };

    return h('section', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      h('div', {
        className: 'rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-sky-900/30 text-center flex flex-col items-center'
      },
        // Decorative background watermarks
        h('div', { className: 'absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none' }),
        h('div', { className: 'absolute -left-20 -top-20 w-80 h-80 rounded-full bg-orange-500/10 blur-2xl pointer-events-none' }),

        h('span', { className: 'px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-sky-200 text-xs font-bold uppercase tracking-wider mb-4' },
          'Weekly Wanderlust'
        ),
        h('h2', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black font-display max-w-2xl' },
          'Get Inspired for Your Next Adventure!'
        ),
        h('p', { className: 'text-slate-200 text-sm sm:text-base max-w-xl mt-3 leading-relaxed' },
          'Subscribe to our newsletter for exclusive travel inspiration, destination guides, and special secret member offers.'
        ),

        // Subscription Form
        h('form', {
          onSubmit: handleSubscribe,
          className: 'mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3'
        },
          h('input', {
            type: 'email',
            placeholder: 'Enter your email address',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: 'flex-1 px-5 py-3.5 rounded-full bg-white/95 text-slate-800 placeholder-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-sky-300'
          }),
          h('button', {
            type: 'submit',
            className: 'px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 flex-shrink-0'
          },
            h('span', null, isSubscribed ? 'Subscribed!' : 'Subscribe'),
            h(Icons.ArrowRight, { className: 'w-4 h-4' })
          )
        ),
        h('p', { className: 'text-xs text-sky-200/70 mt-4' },
          'No spam ever. Unsubscribe anytime with a single click.'
        )
      )
    );
  }

  // ==========================================
  // FOOTER COMPONENT
  // ==========================================
  function Footer({ navigateTo, openBooking }) {
    return h('footer', { className: 'bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800' },
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800' },
          // Col 1: Brand Info
          h('div', { className: 'lg:col-span-2 space-y-4' },
            h('div', { className: 'flex items-center gap-3 cursor-pointer', onClick: () => navigateTo('home') },
              h('div', { className: 'w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white shadow-md' },
                h(Icons.Compass, { className: 'w-6 h-6' })
              ),
              h('div', null,
                h('div', { className: 'flex items-center gap-1.5' },
                  h('span', { className: 'text-2xl font-black font-display text-white tracking-tight' }, 'Travel'),
                  h('span', { className: 'text-2xl font-black font-display text-sky-400 tracking-tight' }, 'Go'),
                  h('span', { className: 'w-2 h-2 rounded-full bg-orange-500 inline-block' })
                ),
                h('p', { className: 'text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1' }, 'Explore the World')
              )
            ),
            h('p', { className: 'text-xs text-slate-400 leading-relaxed max-w-sm' },
              'Travel Go is a premier international travel company dedicated to inspiring wanderlust, crafting bespoke itineraries, and orchestrating seamless journeys across the globe.'
            ),
            h('div', { className: 'pt-2 flex items-center gap-3' },
              ['instagram', 'youtube', 'facebook', 'twitter'].map(network => h('a', {
                key: network,
                href: DATA.brand.socials[network] || '#',
                target: '_blank',
                rel: 'noreferrer',
                className: 'w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors text-xs font-bold uppercase'
              }, network[0]))
            )
          ),

          // Col 2: Quick Links
          h('div', null,
            h('h4', { className: 'text-sm font-bold text-white uppercase tracking-wider mb-4' }, 'Quick Links'),
            h('ul', { className: 'space-y-2.5 text-xs text-slate-400' },
              [
                { label: 'Home', page: 'home' },
                { label: 'All Destinations', page: 'destinations' },
                { label: 'Travel Packages', page: 'packages' },
                { label: 'About Us', page: 'about' },
                { label: 'Travel Blog', page: 'blog' },
                { label: 'Contact Us', page: 'contact' }
              ].map(link => h('li', { key: link.label },
                h('button', {
                  onClick: () => navigateTo(link.page),
                  className: 'hover:text-sky-400 transition-colors'
                }, link.label)
              ))
            )
          ),

          // Col 3: Popular Destinations
          h('div', null,
            h('h4', { className: 'text-sm font-bold text-white uppercase tracking-wider mb-4' }, 'Top Destinations'),
            h('ul', { className: 'space-y-2.5 text-xs text-slate-400' },
              DATA.destinations.map(d => h('li', { key: d.id },
                h('button', {
                  onClick: () => navigateTo('destination-detail', { destinationId: d.id }),
                  className: 'hover:text-sky-400 transition-colors'
                }, `${d.name}, ${d.country}`)
              ))
            )
          ),

          // Col 4: Contact & Concierge
          h('div', null,
            h('h4', { className: 'text-sm font-bold text-white uppercase tracking-wider mb-4' }, 'Concierge Contact'),
            h('ul', { className: 'space-y-3 text-xs text-slate-400' },
              h('li', { className: 'flex items-start gap-2.5' },
                h(Icons.MapPin, { className: 'w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5' }),
                h('span', null, DATA.brand.headquarters)
              ),
              h('li', { className: 'flex items-center gap-2.5' },
                h(Icons.Phone, { className: 'w-4 h-4 text-sky-400 flex-shrink-0' }),
                h('span', null, DATA.brand.phone)
              ),
              h('li', { className: 'flex items-center gap-2.5' },
                h(Icons.Mail, { className: 'w-4 h-4 text-sky-400 flex-shrink-0' }),
                h('span', null, DATA.brand.email)
              ),
              h('li', { className: 'pt-2' },
                h('div', { className: 'p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px]' },
                  h('span', { className: 'text-orange-400 font-bold block' }, '24/7 Global Emergency Hotline:'),
                  h('span', { className: 'text-white font-mono' }, DATA.brand.emergencyHotline)
                )
              )
            )
          )
        ),

        // Footer Bottom bar
        h('div', { className: 'pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4' },
          h('p', null, `© ${new Date().getFullYear()} Travel Go Inc. All rights reserved. Designed for world explorers.`),
          h('div', { className: 'flex items-center gap-6' },
            h('a', { href: '#', className: 'hover:text-slate-300' }, 'Privacy Policy'),
            h('a', { href: '#', className: 'hover:text-slate-300' }, 'Terms & Conditions'),
            h('a', { href: '#', className: 'hover:text-slate-300' }, 'Safety & Security Guarantee')
          )
        )
      )
    );
  }

  // ==========================================
  // TOAST NOTIFICATIONS CONTAINER
  // ==========================================
  function ToastContainer({ toasts }) {
    if (!toasts.length) return null;
    return h('div', { className: 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm' },
      toasts.map(toast => h('div', {
        key: toast.id,
        className: `animate-modal px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-semibold ${
          toast.type === 'error'
            ? 'bg-red-600 text-white'
            : toast.type === 'info'
            ? 'bg-slate-800 text-white'
            : 'bg-slate-900 text-white border border-slate-700'
        }`
      },
        h(Icons.Check, { className: 'w-4 h-4 text-sky-400 flex-shrink-0' }),
        h('span', { className: 'flex-1' }, toast.message)
      ))
    );
  }

  // Expose Core App Components
  window.TravelAppCore = {
    App,
    Navbar,
    HeroSection,
    PopularDestinationsSection,
    FeaturedPackagesSection,
    WhyChooseUsSection,
    TravelExperiencesSection,
    TravelInspirationSection,
    TestimonialsSection,
    NewsletterSection,
    Footer,
    ToastContainer
  };
})();
