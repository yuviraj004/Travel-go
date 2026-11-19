// Travel Go - Complete Pages Implementation
(function() {
  const { createElement: h, useState, useEffect, useMemo } = React;
  const { Icons, formatPrice } = window.TravelComponents;
  const DATA = window.TRAVEL_DATA;

  // ==========================================
  // PAGE 2: ABOUT US PAGE
  // ==========================================
  function AboutUsPage({ navigateTo, openPlanner }) {
    return h('div', { className: 'space-y-20 pb-20' },
      // Hero
      h('div', { className: 'relative py-24 bg-slate-900 text-white overflow-hidden' },
        h('div', {
          className: 'absolute inset-0 opacity-25',
          style: {
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        }),
        h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent' }),
        h('div', { className: 'max-w-5xl mx-auto px-4 text-center relative z-10' },
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-400 bg-sky-950 border border-sky-800 px-3.5 py-1 rounded-full' },
            'Our Heritage & Philosophy'
          ),
          h('h1', { className: 'text-4xl sm:text-5xl lg:text-6xl font-black font-display mt-4 tracking-tight' },
            'We Believe Travel Transforms Lives.'
          ),
          h('p', { className: 'mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed' },
            'Founded with a passion for authentic discovery, Travel Go connects curious explorers to earth’s most extraordinary landscapes and cultures with uncompromising luxury and care.'
          )
        )
      ),

      // Brand Story Section
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' },
          h('div', { className: 'space-y-6' },
            h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' },
              'The Travel Go Story'
            ),
            h('h2', { className: 'text-3xl sm:text-4xl font-bold font-display text-slate-900' },
              'From a Himalayan Trail to a Global Travel Movement'
            ),
            h('p', { className: 'text-slate-600 text-sm leading-relaxed' },
              'Travel Go was born over a decade ago when a small group of expedition leaders and luxury travel consultants noticed a glaring gap: travel was either rigid, impersonal tourist packages, or chaotic do-it-yourself logistics.'
            ),
            h('p', { className: 'text-slate-600 text-sm leading-relaxed' },
              'We set out to create something different: bespoke journeys where every detail is orchestrated by passionate destination curators, accompanied by 24/7 personalized care, and committed to empowering the local communities we visit.'
            ),
            h('div', { className: 'grid grid-cols-2 gap-4 pt-4' },
              h('div', { className: 'p-4 rounded-2xl bg-sky-50/80 border border-sky-100' },
                h('span', { className: 'text-2xl font-black text-sky-700 font-display' }, '120+'),
                h('p', { className: 'text-xs font-semibold text-slate-600 mt-0.5' }, 'Curated Global Destinations')
              ),
              h('div', { className: 'p-4 rounded-2xl bg-orange-50/80 border border-orange-100' },
                h('span', { className: 'text-2xl font-black text-orange-600 font-display' }, '99.4%'),
                h('p', { className: 'text-xs font-semibold text-slate-600 mt-0.5' }, 'Client Satisfaction Rate')
              )
            )
          ),
          h('div', { className: 'relative' },
            h('div', { className: 'rounded-3xl overflow-hidden shadow-2xl border-4 border-white' },
              h('img', {
                src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
                alt: 'Travel Go Experience',
                className: 'w-full h-[440px] object-cover'
              })
            ),
            h('div', { className: 'absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white shadow-xl border border-slate-100 max-w-xs hidden sm:block' },
              h('div', { className: 'flex items-center gap-2 text-amber-500 mb-1' },
                [...Array(5)].map((_, i) => h(Icons.Star, { key: i, className: 'w-4 h-4 fill-amber-500' }))
              ),
              h('p', { className: 'text-xs font-bold text-slate-800' }, '"Travel Go created memories my family will cherish for eternity."')
            )
          )
        )
      ),

      // 4 Travel Pillars
      h('div', { className: 'bg-white py-16 border-y border-slate-100' },
        h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          h('div', { className: 'text-center max-w-2xl mx-auto mb-12' },
            h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Our Values'),
            h('h2', { className: 'text-3xl font-bold font-display text-slate-900 mt-2' }, 'The Pillars of Our Travel Philosophy')
          ),
          h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
            [
              { icon: 'compass', title: 'Authenticity First', desc: 'We take you beyond standard tourist traps to connect with real local cultures and traditions.' },
              { icon: 'award', title: 'Curated Excellence', desc: 'Every luxury boutique hotel, private catamaran, and mountain guide is personally inspected.' },
              { icon: 'shield', title: 'Sustainable Tourism', desc: 'We actively preserve natural ecosystems and ensure tourism dollars benefit local communities.' },
              { icon: 'headset', title: 'Unconditional Care', desc: 'From lost luggage to sudden itinerary tweaks, our 24/7 concierge is your guardian angel.' }
            ].map((pillar, idx) => h('div', {
              key: idx,
              className: 'p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-all text-center flex flex-col items-center'
            },
              h('div', { className: 'w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4' },
                h(Icons.Compass, { className: 'w-6 h-6' })
              ),
              h('h3', { className: 'text-base font-bold text-slate-900 mb-1' }, pillar.title),
              h('p', { className: 'text-xs text-slate-500 leading-relaxed' }, pillar.desc)
            ))
          )
        )
      ),

      // Meet The Team
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'text-center max-w-2xl mx-auto mb-12' },
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full' }, 'Leadership'),
          h('h2', { className: 'text-3xl font-bold font-display text-slate-900 mt-2' }, 'Meet Our Curators & Specialists')
        ),
        h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
          DATA.team.map((member, i) => h('div', {
            key: i,
            className: 'bg-white rounded-3xl p-5 border border-slate-100 shadow-sm text-center flex flex-col items-center group'
          },
            h('div', { className: 'w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-sky-100 group-hover:scale-105 transition-transform' },
              h('img', { src: member.avatar, alt: member.name, className: 'w-full h-full object-cover' })
            ),
            h('h3', { className: 'text-base font-bold text-slate-900' }, member.name),
            h('p', { className: 'text-xs text-sky-600 font-semibold mt-0.5' }, member.role),
            h('p', { className: 'text-xs text-slate-500 mt-2 leading-relaxed' }, member.bio)
          ))
        )
      ),

      // Bottom CTA Banner
      h('div', { className: 'max-w-5xl mx-auto px-4' },
        h('div', { className: 'rounded-3xl bg-gradient-to-r from-sky-600 to-sky-500 text-white p-8 sm:p-12 text-center shadow-xl flex flex-col items-center' },
          h('h2', { className: 'text-2xl sm:text-3xl font-bold font-display' }, 'Ready to Design Your Custom Dream Itinerary?'),
          h('p', { className: 'text-sky-100 text-sm mt-2 max-w-md' },
            'Speak with our destination specialists today and let us tailor a journey tailored exclusively to your vision.'
          ),
          h('button', {
            onClick: openPlanner,
            className: 'mt-6 px-8 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-md hover:bg-sky-50 active:scale-95 transition-all'
          }, 'Plan Your Journey With Us')
        )
      )
    );
  }

  // ==========================================
  // PAGE 3: DESTINATIONS CATALOG PAGE
  // ==========================================
  function DestinationsPage({ navigateTo, currency, wishlist, toggleWishlist, categoryFilter, setCategoryFilter }) {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('popular');

    const categories = ['All', 'Beach Holidays', 'Mountain Adventures', 'Luxury Escapes', 'Cultural Exploration', 'Romantic Getaways'];

    const filteredDestinations = useMemo(() => {
      let list = DATA.destinations.filter(d => {
        const matchesCategory = categoryFilter === 'All' || d.category === categoryFilter;
        const matchesSearch = !search ||
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.country.toLowerCase().includes(search.toLowerCase()) ||
          d.overview.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (sortBy === 'price-low') {
        list.sort((a, b) => a.priceFrom - b.priceFrom);
      } else if (sortBy === 'price-high') {
        list.sort((a, b) => b.priceFrom - a.priceFrom);
      } else if (sortBy === 'rating') {
        list.sort((a, b) => b.rating - a.rating);
      }
      return list;
    }, [categoryFilter, search, sortBy]);

    return h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8' },
      // Header
      h('div', { className: 'text-center max-w-3xl mx-auto' },
        h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Global Atlas'),
        h('h1', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 mt-2' }, 'Explore All Destinations'),
        h('p', { className: 'text-slate-500 text-sm mt-2' },
          'Discover world-class destinations curated for luxury, cultural depth, natural wonder, and unforgettable moments.'
        )
      ),

      // Filter & Search Controls
      h('div', { className: 'bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 space-y-4' },
        h('div', { className: 'flex flex-col md:flex-row gap-4 items-center justify-between' },
          // Search Input
          h('div', { className: 'relative w-full md:w-96' },
            h(Icons.Search, { className: 'w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2' }),
            h('input', {
              type: 'text',
              placeholder: 'Search by city, country or keyword...',
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: 'w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-sky-500'
            })
          ),

          // Sort Dropdown
          h('div', { className: 'flex items-center gap-2 w-full md:w-auto justify-end text-xs' },
            h('span', { className: 'text-slate-400 font-bold' }, 'Sort by:'),
            h('select', {
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value),
              className: 'px-3 py-2 rounded-full bg-slate-50 border border-slate-200 font-semibold text-slate-700 focus:outline-none'
            },
              h('option', { value: 'popular' }, 'Most Popular'),
              h('option', { value: 'rating' }, 'Highest Rated'),
              h('option', { value: 'price-low' }, 'Price: Low to High'),
              h('option', { value: 'price-high' }, 'Price: High to Low')
            )
          )
        ),

        // Category Pills
        h('div', { className: 'flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar' },
          categories.map(cat => h('button', {
            key: cat,
            onClick: () => setCategoryFilter(cat),
            className: `px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              categoryFilter === cat
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`
          }, cat))
        )
      ),

      // Results Count
      h('div', { className: 'flex justify-between items-center text-xs text-slate-500 font-semibold px-1' },
        h('span', null, `Showing ${filteredDestinations.length} destinations`),
        search && h('button', {
          onClick: () => { setSearch(''); setCategoryFilter('All'); },
          className: 'text-sky-600 hover:underline'
        }, 'Reset filters')
      ),

      // Destinations Grid
      filteredDestinations.length === 0
        ? h('div', { className: 'text-center py-20 bg-white rounded-3xl border border-slate-100' },
            h(Icons.MapPin, { className: 'w-10 h-10 text-slate-300 mx-auto mb-3' }),
            h('h3', { className: 'text-lg font-bold text-slate-800' }, 'No destinations match your criteria'),
            h('p', { className: 'text-xs text-slate-400 mt-1' }, 'Try clearing filters or searching for something else.'),
            h('button', {
              onClick: () => { setSearch(''); setCategoryFilter('All'); },
              className: 'mt-4 px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-xs font-bold'
            }, 'Reset All Filters')
          )
        : h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
            filteredDestinations.map(dest => {
              const isFavorited = wishlist.includes(dest.id);
              return h('div', {
                key: dest.id,
                className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100 flex flex-col group'
              },
                // Image
                h('div', {
                  className: 'relative h-56 img-zoom-container cursor-pointer',
                  onClick: () => navigateTo('destination-detail', { destinationId: dest.id })
                },
                  h('img', { src: dest.image, alt: dest.name, className: 'w-full h-full object-cover img-zoom-target' }),
                  h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' }),
                  h('button', {
                    onClick: (e) => { e.stopPropagation(); toggleWishlist(dest.id, dest.name); },
                    className: 'absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-sm'
                  },
                    h(Icons.Heart, { className: `w-4 h-4 ${isFavorited ? 'text-red-500 fill-red-500' : ''}` })
                  ),
                  h('div', { className: 'absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-xs font-semibold' },
                    dest.country
                  ),
                  h('div', { className: 'absolute bottom-3 left-4 right-4 flex items-center justify-between text-white' },
                    h('div', { className: 'flex items-center gap-1.5' },
                      h(Icons.Star, { className: 'w-4 h-4 text-amber-400 fill-amber-400' }),
                      h('span', { className: 'text-sm font-bold' }, dest.rating),
                      h('span', { className: 'text-xs text-slate-300' }, `(${dest.reviewCount})`)
                    ),
                    h('div', { className: 'text-xs font-medium text-sky-200' }, dest.weather)
                  )
                ),

                // Content
                h('div', { className: 'p-5 flex flex-col flex-1 justify-between' },
                  h('div', null,
                    h('h3', {
                      onClick: () => navigateTo('destination-detail', { destinationId: dest.id }),
                      className: 'text-xl font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer'
                    }, dest.name),
                    h('p', { className: 'text-xs text-sky-700 font-medium mt-1 line-clamp-1' }, dest.tagline),
                    h('p', { className: 'text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed' }, dest.overview)
                  ),
                  h('div', { className: 'mt-5 pt-4 border-t border-slate-100 flex items-center justify-between' },
                    h('div', null,
                      h('span', { className: 'text-xs text-slate-400 block -mb-1' }, 'From'),
                      h('span', { className: 'text-lg font-black text-slate-900' }, formatPrice(dest.priceFrom, currency))
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
  // PAGE 4: DESTINATION DETAILS PAGE
  // ==========================================
  function DestinationDetailPage({ destinationId, navigateTo, currency, wishlist, toggleWishlist, openBooking, addToast }) {
    const dest = DATA.destinations.find(d => d.id === destinationId) || DATA.destinations[0];
    const isFavorited = wishlist.includes(dest.id);

    // Filter packages matching this destination
    const destinationPackages = DATA.packages.filter(p => p.destinationId === dest.id);

    // Quick Inquiry Form State
    const [inquiryName, setInquiryName] = useState('');
    const [inquiryEmail, setInquiryEmail] = useState('');
    const [inquiryDate, setInquiryDate] = useState('2026-06-01');
    const [inquiryTravelers, setInquiryTravelers] = useState('2');

    const handleInquirySubmit = (e) => {
      e.preventDefault();
      if (!inquiryName || !inquiryEmail) {
        addToast('Please complete your name and email.', 'error');
        return;
      }
      addToast(`Thank you ${inquiryName}! Our ${dest.name} travel designer will contact you within 2 hours.`, 'success');
      setInquiryName('');
      setInquiryEmail('');
    };

    return h('div', { className: 'space-y-12 pb-20' },
      // Hero Header with Gallery
      h('div', { className: 'relative h-[55vh] min-h-[420px] bg-slate-950 text-white flex items-end' },
        h('img', {
          src: dest.image,
          alt: dest.name,
          className: 'absolute inset-0 w-full h-full object-cover opacity-60'
        }),
        h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' }),

        // Hero Content
        h('div', { className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full' },
          // Breadcrumbs
          h('div', { className: 'flex items-center gap-2 text-xs text-sky-300 font-semibold mb-4' },
            h('button', { onClick: () => navigateTo('home'), className: 'hover:text-white' }, 'Home'),
            h('span', null, '/'),
            h('button', { onClick: () => navigateTo('destinations'), className: 'hover:text-white' }, 'Destinations'),
            h('span', null, '/'),
            h('span', { className: 'text-white font-bold' }, dest.name)
          ),

          h('div', { className: 'flex flex-col sm:flex-row sm:items-end justify-between gap-4' },
            h('div', null,
              h('div', { className: 'flex items-center gap-2' },
                h('span', { className: 'px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider' },
                  dest.country
                ),
                h('div', { className: 'flex items-center gap-1 text-amber-400 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold' },
                  h(Icons.Star, { className: 'w-3.5 h-3.5 fill-amber-400' }),
                  h('span', null, `${dest.rating} (${dest.reviewCount} reviews)`)
                )
              ),
              h('h1', { className: 'text-4xl sm:text-5xl font-black font-display text-white mt-2' }, dest.name),
              h('p', { className: 'text-slate-200 text-sm sm:text-base max-w-xl mt-1' }, dest.tagline)
            ),

            h('div', { className: 'flex items-center gap-3' },
              h('button', {
                onClick: () => toggleWishlist(dest.id, dest.name),
                className: `px-4 py-2.5 rounded-full backdrop-blur-md text-xs font-bold flex items-center gap-2 transition-all ${
                  isFavorited ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`
              },
                h(Icons.Heart, { className: `w-4 h-4 ${isFavorited ? 'fill-white' : ''}` }),
                h('span', null, isFavorited ? 'Saved in Wishlist' : 'Save to Wishlist')
              )
            )
          )
        )
      ),

      // Quick Facts Bar
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm' },
          [
            { label: 'Best Time to Visit', val: dest.bestTimeToVisit, icon: Icons.Calendar },
            { label: 'Ideal Trip Duration', val: dest.idealDuration, icon: Icons.Clock },
            { label: 'Average Climate', val: dest.weather, icon: Icons.Compass },
            { label: 'Starting Price', val: `${formatPrice(dest.priceFrom, currency)} / person`, icon: Icons.Tag }
          ].map((item, i) => h('div', { key: i, className: 'flex items-center gap-3' },
            h('div', { className: 'w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0' },
              h(item.icon, { className: 'w-5 h-5' })
            ),
            h('div', null,
              h('span', { className: 'text-[11px] text-slate-400 font-semibold block uppercase' }, item.label),
              h('span', { className: 'text-xs sm:text-sm font-bold text-slate-800' }, item.val)
            )
          ))
        )
      ),

      // Main Content Split: Overview & Highlights vs Inquiry Form
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-10' },
          // Left 2 Columns: Overview, Highlights, Top Attractions, Tips
          h('div', { className: 'lg:col-span-2 space-y-10' },
            // Overview
            h('div', { className: 'bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4' },
              h('h2', { className: 'text-2xl font-bold font-display text-slate-900' }, `About ${dest.name}`),
              h('p', { className: 'text-slate-600 text-sm leading-relaxed' }, dest.overview)
            ),

            // Photo Gallery
            h('div', { className: 'space-y-4' },
              h('h3', { className: 'text-xl font-bold font-display text-slate-900' }, 'Photo Gallery'),
              h('div', { className: 'grid grid-cols-2 sm:grid-cols-4 gap-3' },
                dest.gallery.map((imgUrl, i) => h('div', {
                  key: i,
                  className: 'h-36 rounded-2xl overflow-hidden shadow-sm img-zoom-container'
                },
                  h('img', { src: imgUrl, alt: `${dest.name} photo ${i+1}`, className: 'w-full h-full object-cover img-zoom-target' })
                ))
              )
            ),

            // Key Highlights Checklist
            h('div', { className: 'bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4' },
              h('h3', { className: 'text-xl font-bold font-display text-slate-900' }, 'Curated Highlights & Signature Experiences'),
              h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
                dest.highlights.map((hl, i) => h('div', {
                  key: i,
                  className: 'flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100'
                },
                  h(Icons.Check, { className: 'w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5' }),
                  h('span', { className: 'text-xs font-semibold text-slate-700 leading-snug' }, hl)
                ))
              )
            ),

            // Top Attractions
            h('div', { className: 'space-y-4' },
              h('h3', { className: 'text-xl font-bold font-display text-slate-900' }, 'Top Must-Visit Attractions'),
              h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
                dest.topAttractions.map((att, i) => h('div', {
                  key: i,
                  className: 'p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-sky-200 transition-colors'
                },
                  h('h4', { className: 'text-sm font-bold text-slate-900' }, att.name),
                  h('p', { className: 'text-xs text-slate-500 mt-1 leading-relaxed' }, att.desc)
                ))
              )
            ),

            // Insider Local Tips
            h('div', { className: 'bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 space-y-4' },
              h('div', { className: 'flex items-center gap-2 text-sky-800' },
                h(Icons.Sparkles, { className: 'w-5 h-5 text-orange-500' }),
                h('h3', { className: 'text-lg font-bold font-display' }, 'Insider Local Tips & Etiquette')
              ),
              h('ul', { className: 'space-y-2' },
                dest.localTips.map((tip, i) => h('li', {
                  key: i,
                  className: 'text-xs text-slate-700 flex items-start gap-2'
                },
                  h('span', { className: 'text-sky-500 font-bold' }, '•'),
                  h('span', null, tip)
                ))
              )
            )
          ),

          // Right Column: Interactive Inquiry Form & Packages Link
          h('div', { className: 'space-y-6' },
            // Interactive Custom Itinerary Request Form
            h('div', { className: 'sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 space-y-5' },
              h('div', null,
                h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full' }, 'Tailored Concierge'),
                h('h3', { className: 'text-xl font-bold font-display text-slate-900 mt-2' }, `Plan a Trip to ${dest.name}`),
                h('p', { className: 'text-xs text-slate-500 mt-1' }, 'Get a personalized day-by-day itinerary designed around your budget.')
              ),

              h('form', { onSubmit: handleInquirySubmit, className: 'space-y-3.5' },
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Full Name'),
                  h('input', {
                    type: 'text',
                    placeholder: 'e.g. Eleanor Vance',
                    value: inquiryName,
                    onChange: (e) => setInquiryName(e.target.value),
                    className: 'w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                  })
                ),
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Email Address'),
                  h('input', {
                    type: 'email',
                    placeholder: 'eleanor@example.com',
                    value: inquiryEmail,
                    onChange: (e) => setInquiryEmail(e.target.value),
                    className: 'w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                  })
                ),
                h('div', { className: 'grid grid-cols-2 gap-2' },
                  h('div', null,
                    h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Travel Date'),
                    h('input', {
                      type: 'date',
                      value: inquiryDate,
                      onChange: (e) => setInquiryDate(e.target.value),
                      className: 'w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none'
                    })
                  ),
                  h('div', null,
                    h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Guests'),
                    h('select', {
                      value: inquiryTravelers,
                      onChange: (e) => setInquiryTravelers(e.target.value),
                      className: 'w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none'
                    },
                      h('option', { value: '1' }, '1 Traveler'),
                      h('option', { value: '2' }, '2 Travelers'),
                      h('option', { value: '4' }, '4+ Family')
                    )
                  )
                ),
                h('button', {
                  type: 'submit',
                  className: 'w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/25 active:scale-95 transition-all'
                }, 'Request Free Custom Proposal')
              ),

              h('div', { className: 'pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-[11px]' },
                h(Icons.Shield, { className: 'w-3.5 h-3.5 text-sky-500' }),
                h('span', null, '100% Free Consultation • No Obligation')
              )
            )
          )
        )
      ),

      // Curated Packages for this Destination
      destinationPackages.length > 0 && h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8' },
        h('div', { className: 'mb-8' },
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full' }, 'Instant Booking'),
          h('h3', { className: 'text-2xl font-bold font-display text-slate-900 mt-2' }, `Featured Travel Packages in ${dest.name}`)
        ),
        h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
          destinationPackages.map(pkg => h('div', {
            key: pkg.id,
            className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md flex flex-col justify-between'
          },
            h('div', { className: 'relative h-48 cursor-pointer', onClick: () => navigateTo('package-detail', { packageId: pkg.id }) },
              h('img', { src: pkg.heroImage, alt: pkg.title, className: 'w-full h-full object-cover' }),
              h('span', { className: 'absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-bold' }, pkg.duration)
            ),
            h('div', { className: 'p-5 flex-1 flex flex-col justify-between' },
              h('div', null,
                h('h4', {
                  onClick: () => navigateTo('package-detail', { packageId: pkg.id }),
                  className: 'text-base font-bold text-slate-900 hover:text-sky-600 cursor-pointer'
                }, pkg.title),
                h('p', { className: 'text-xs text-slate-500 mt-1 line-clamp-2' }, pkg.shortDesc)
              ),
              h('div', { className: 'mt-4 pt-3 border-t border-slate-100 flex items-center justify-between' },
                h('div', null,
                  h('span', { className: 'text-lg font-black text-slate-900' }, formatPrice(pkg.price, currency)),
                  h('span', { className: 'text-[11px] text-slate-400 ml-1' }, '/ person')
                ),
                h('button', {
                  onClick: () => openBooking(pkg),
                  className: 'px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold'
                }, 'Book Now')
              )
            )
          ))
        )
      )
    );
  }

  // ==========================================
  // PAGE 5: PACKAGES CATALOG PAGE
  // ==========================================
  function PackagesPage({ navigateTo, currency, wishlist, toggleWishlist, openBooking, categoryFilter, setCategoryFilter, initialSearch = '' }) {
    const [search, setSearch] = useState(initialSearch);
    const [durationFilter, setDurationFilter] = useState('All');
    const [sortBy, setSortBy] = useState('bestseller');

    const categories = ['All', 'Beach Holidays', 'Mountain Adventures', 'Luxury Escapes', 'Cultural Exploration', 'Romantic Getaways'];

    const filteredPackages = useMemo(() => {
      let list = DATA.packages.filter(pkg => {
        const matchesCategory = categoryFilter === 'All' || pkg.travelStyle === categoryFilter;
        const matchesSearch = !search ||
          pkg.title.toLowerCase().includes(search.toLowerCase()) ||
          pkg.destinationName.toLowerCase().includes(search.toLowerCase()) ||
          pkg.country.toLowerCase().includes(search.toLowerCase());

        let matchesDuration = true;
        if (durationFilter === 'short') matchesDuration = pkg.days <= 5;
        if (durationFilter === 'medium') matchesDuration = pkg.days >= 6 && pkg.days <= 7;
        if (durationFilter === 'long') matchesDuration = pkg.days >= 8;

        return matchesCategory && matchesSearch && matchesDuration;
      });

      if (sortBy === 'price-low') {
        list.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        list.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating') {
        list.sort((a, b) => b.rating - a.rating);
      }

      return list;
    }, [categoryFilter, search, durationFilter, sortBy]);

    return h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8' },
      // Header
      h('div', { className: 'text-center max-w-3xl mx-auto' },
        h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full' }, 'All-Inclusive Journeys'),
        h('h1', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 mt-2' }, 'Curated Travel Packages'),
        h('p', { className: 'text-slate-500 text-sm mt-2' },
          'Handcrafted itineraries featuring private guides, 5-star accommodations, local dining, and comprehensive on-trip support.'
        )
      ),

      // Filter & Controls Bar
      h('div', { className: 'bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4' },
        h('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 items-center' },
          // Search
          h('div', { className: 'relative md:col-span-2' },
            h(Icons.Search, { className: 'w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2' }),
            h('input', {
              type: 'text',
              placeholder: 'Search package or destination (e.g. Bali, Paris, Swiss Alps)...',
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: 'w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-sky-500'
            })
          ),

          // Sort
          h('div', { className: 'flex items-center gap-2 justify-end text-xs' },
            h('span', { className: 'text-slate-400 font-bold' }, 'Sort by:'),
            h('select', {
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value),
              className: 'px-3 py-2 rounded-full bg-slate-50 border border-slate-200 font-semibold text-slate-700 focus:outline-none'
            },
              h('option', { value: 'bestseller' }, 'Recommended'),
              h('option', { value: 'rating' }, 'Highest Rated'),
              h('option', { value: 'price-low' }, 'Price: Low to High'),
              h('option', { value: 'price-high' }, 'Price: High to Low')
            )
          )
        ),

        // Style Pills
        h('div', { className: 'flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar' },
          categories.map(cat => h('button', {
            key: cat,
            onClick: () => setCategoryFilter(cat),
            className: `px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              categoryFilter === cat
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`
          }, cat))
        ),

        // Duration Filter Pills
        h('div', { className: 'pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold' },
          h('span', { className: 'text-slate-400 mr-2' }, 'Duration:'),
          [
            { id: 'All', label: 'All Durations' },
            { id: 'short', label: '1 - 5 Days' },
            { id: 'medium', label: '6 - 7 Days' },
            { id: 'long', label: '8+ Days' }
          ].map(d => h('button', {
            key: d.id,
            onClick: () => setDurationFilter(d.id),
            className: `px-3 py-1 rounded-full text-xs ${
              durationFilter === d.id ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`
          }, d.label))
        )
      ),

      // Counter
      h('div', { className: 'flex justify-between items-center text-xs text-slate-500 font-semibold px-1' },
        h('span', null, `Showing ${filteredPackages.length} packages`),
        (search || categoryFilter !== 'All' || durationFilter !== 'All') && h('button', {
          onClick: () => { setSearch(''); setCategoryFilter('All'); setDurationFilter('All'); },
          className: 'text-sky-600 hover:underline'
        }, 'Clear all filters')
      ),

      // Packages Grid
      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        filteredPackages.map(pkg => {
          const isFavorited = wishlist.includes(pkg.id);
          return h('div', {
            key: pkg.id,
            className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-100 flex flex-col group'
          },
            // Hero Image
            h('div', { className: 'relative h-60 img-zoom-container cursor-pointer', onClick: () => navigateTo('package-detail', { packageId: pkg.id }) },
              h('img', { src: pkg.heroImage, alt: pkg.title, className: 'w-full h-full object-cover img-zoom-target' }),
              h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' }),
              h('div', { className: 'absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide shadow-md' },
                pkg.tag
              ),
              h('div', { className: 'absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5' },
                h(Icons.Clock, { className: 'w-3.5 h-3.5 text-sky-400' }),
                h('span', null, pkg.duration)
              ),
              h('button', {
                onClick: (e) => { e.stopPropagation(); toggleWishlist(pkg.id, pkg.title); },
                className: 'absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-sm'
              },
                h(Icons.Heart, { className: `w-4 h-4 ${isFavorited ? 'text-red-500 fill-red-500' : ''}` })
              )
            ),

            // Body
            h('div', { className: 'p-6 flex flex-col flex-1 justify-between' },
              h('div', null,
                h('div', { className: 'flex items-center justify-between text-xs text-slate-500 mb-2' },
                  h('span', { className: 'font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full' }, pkg.travelStyle),
                  h('div', { className: 'flex items-center gap-1' },
                    h(Icons.Star, { className: 'w-3.5 h-3.5 text-amber-400 fill-amber-400' }),
                    h('span', { className: 'font-bold text-slate-800' }, pkg.rating),
                    h('span', { className: 'text-slate-400' }, `(${pkg.reviewCount})`)
                  )
                ),
                h('h3', {
                  onClick: () => navigateTo('package-detail', { packageId: pkg.id }),
                  className: 'text-lg font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 cursor-pointer'
                }, pkg.title),
                h('p', { className: 'text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed' }, pkg.shortDesc),
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
                  h('span', { className: 'text-[11px] text-slate-400 uppercase tracking-wider font-semibold block' }, 'From'),
                  h('div', { className: 'flex items-baseline' },
                    h('span', { className: 'text-xl font-black text-slate-900' }, formatPrice(pkg.price, currency)),
                    h('span', { className: 'text-xs text-slate-400 ml-1 font-medium' }, '/ person')
                  )
                ),
                h('div', { className: 'flex items-center gap-2' },
                  h('button', {
                    onClick: () => navigateTo('package-detail', { packageId: pkg.id }),
                    className: 'px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors'
                  }, 'Details'),
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
  // PAGE 6: PACKAGE DETAILS PAGE
  // ==========================================
  function PackageDetailPage({ packageId, navigateTo, currency, wishlist, toggleWishlist, openBooking, addToast }) {
    const pkg = DATA.packages.find(p => p.id === packageId) || DATA.packages[0];
    const isFavorited = wishlist.includes(pkg.id);

    // Interactive booking calculation state
    const [travelers, setTravelers] = useState(2);
    const [departureDate, setDepartureDate] = useState('2026-05-15');
    const [addons, setAddons] = useState({
      insurance: false,
      transfer: false,
      suiteUpgrade: false
    });

    const [activeItineraryDay, setActiveItineraryDay] = useState(1);

    const toggleAddon = (key) => {
      setAddons(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // Calculate dynamic pricing
    const baseTotal = pkg.price * travelers;
    const addonTotal = (addons.insurance ? 85 * travelers : 0) +
                       (addons.transfer ? 120 : 0) +
                       (addons.suiteUpgrade ? 250 * pkg.nights : 0);
    const grandTotal = baseTotal + addonTotal;

    return h('div', { className: 'space-y-12 pb-20' },
      // Top Hero
      h('div', { className: 'relative h-[50vh] min-h-[400px] bg-slate-950 text-white flex items-end' },
        h('img', {
          src: pkg.heroImage,
          alt: pkg.title,
          className: 'absolute inset-0 w-full h-full object-cover opacity-60'
        }),
        h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' }),

        h('div', { className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full' },
          h('div', { className: 'flex items-center gap-2 text-xs text-sky-300 font-semibold mb-3' },
            h('button', { onClick: () => navigateTo('home'), className: 'hover:text-white' }, 'Home'),
            h('span', null, '/'),
            h('button', { onClick: () => navigateTo('packages'), className: 'hover:text-white' }, 'Packages'),
            h('span', null, '/'),
            h('span', { className: 'text-white font-bold' }, pkg.destinationName)
          ),

          h('div', { className: 'flex flex-col sm:flex-row sm:items-end justify-between gap-4' },
            h('div', null,
              h('div', { className: 'flex items-center gap-2 mb-2' },
                h('span', { className: 'px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold' }, pkg.tag),
                h('span', { className: 'px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium' }, pkg.duration),
                h('div', { className: 'flex items-center gap-1 text-amber-400 bg-black/40 px-2.5 py-1 rounded-full text-xs font-bold' },
                  h(Icons.Star, { className: 'w-3.5 h-3.5 fill-amber-400' }),
                  h('span', null, `${pkg.rating} (${pkg.reviewCount} reviews)`)
                )
              ),
              h('h1', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white' }, pkg.title),
              h('p', { className: 'text-slate-200 text-sm max-w-2xl mt-1' }, pkg.shortDesc)
            ),

            h('div', { className: 'flex items-center gap-3' },
              h('button', {
                onClick: () => toggleWishlist(pkg.id, pkg.title),
                className: `px-4 py-2.5 rounded-full backdrop-blur-md text-xs font-bold flex items-center gap-2 transition-all ${
                  isFavorited ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`
              },
                h(Icons.Heart, { className: `w-4 h-4 ${isFavorited ? 'fill-white' : ''}` }),
                h('span', null, isFavorited ? 'Saved' : 'Save Package')
              )
            )
          )
        )
      ),

      // Package Content Split
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-10' },
          // Left 2 Columns: Itinerary Accordion, Inclusions, Reviews
          h('div', { className: 'lg:col-span-2 space-y-10' },
            // Day by Day Itinerary Accordion
            h('div', { className: 'bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6' },
              h('div', { className: 'flex items-center justify-between' },
                h('div', null,
                  h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Step-by-Step Schedule'),
                  h('h3', { className: 'text-2xl font-bold font-display text-slate-900 mt-2' }, 'Day-by-Day Comprehensive Itinerary')
                ),
                h('span', { className: 'text-xs font-bold text-slate-400' }, `${pkg.days} Days`)
              ),

              h('div', { className: 'space-y-3' },
                pkg.itinerary.map(item => {
                  const isOpen = activeItineraryDay === item.day;
                  return h('div', {
                    key: item.day,
                    className: `rounded-2xl border transition-all ${
                      isOpen ? 'border-sky-300 bg-sky-50/30' : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                    }`
                  },
                    h('button', {
                      onClick: () => setActiveItineraryDay(isOpen ? null : item.day),
                      className: 'w-full px-5 py-4 flex items-center justify-between text-left'
                    },
                      h('div', { className: 'flex items-center gap-3.5' },
                        h('div', { className: `w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center ${
                          isOpen ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-700'
                        }` }, `D${item.day}`),
                        h('h4', { className: 'text-sm font-bold text-slate-800' }, item.title)
                      ),
                      isOpen ? h(Icons.ChevronUp, { className: 'w-4 h-4 text-sky-600' }) : h(Icons.ChevronDown, { className: 'w-4 h-4 text-slate-400' })
                    ),
                    isOpen && h('div', { className: 'px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-sky-100 pt-3 animate-modal pl-16' },
                      item.desc
                    )
                  );
                })
              )
            ),

            // Inclusions vs Exclusions
            h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-6' },
              // Inclusions
              h('div', { className: 'bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4' },
                h('div', { className: 'flex items-center gap-2 text-emerald-600' },
                  h(Icons.Check, { className: 'w-5 h-5' }),
                  h('h4', { className: 'text-base font-bold text-slate-900' }, "What's Included")
                ),
                h('ul', { className: 'space-y-2.5' },
                  pkg.inclusions.map((inc, i) => h('li', {
                    key: i,
                    className: 'text-xs text-slate-600 flex items-start gap-2'
                  },
                    h(Icons.Check, { className: 'w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5' }),
                    h('span', null, inc)
                  ))
                )
              ),

              // Exclusions
              h('div', { className: 'bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4' },
                h('div', { className: 'flex items-center gap-2 text-red-500' },
                  h(Icons.X, { className: 'w-5 h-5' }),
                  h('h4', { className: 'text-base font-bold text-slate-900' }, "What's Not Included")
                ),
                h('ul', { className: 'space-y-2.5' },
                  pkg.exclusions.map((exc, i) => h('li', {
                    key: i,
                    className: 'text-xs text-slate-600 flex items-start gap-2'
                  },
                    h(Icons.X, { className: 'w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5' }),
                    h('span', null, exc)
                  ))
                )
              )
            ),

            // Traveler Reviews Breakdown
            h('div', { className: 'bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6' },
              h('h3', { className: 'text-xl font-bold font-display text-slate-900' }, 'Trip Satisfaction Ratings'),
              h('div', { className: 'grid grid-cols-2 sm:grid-cols-4 gap-4 text-center' },
                [
                  { label: 'Overall Value', score: '4.9/5' },
                  { label: 'Tour Guides', score: '5.0/5' },
                  { label: 'Hotel Luxury', score: '4.8/5' },
                  { label: 'Meals & Dining', score: '4.9/5' }
                ].map((crit, i) => h('div', { key: i, className: 'p-3 rounded-2xl bg-slate-50' },
                  h('span', { className: 'text-lg font-black text-sky-600' }, crit.score),
                  h('p', { className: 'text-[11px] font-semibold text-slate-500 mt-1' }, crit.label)
                ))
              )
            )
          ),

          // Right Column: Interactive Sticky Booking Box & Total Calculator
          h('div', null,
            h('div', { className: 'sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6' },
              // Pricing Header
              h('div', { className: 'flex items-baseline justify-between pb-4 border-b border-slate-100' },
                h('div', null,
                  h('span', { className: 'text-[11px] text-slate-400 uppercase font-bold' }, 'Base Package Price'),
                  h('div', { className: 'flex items-baseline' },
                    h('span', { className: 'text-3xl font-black text-slate-900' }, formatPrice(pkg.price, currency)),
                    h('span', { className: 'text-xs text-slate-500 ml-1 font-medium' }, '/ traveler')
                  )
                ),
                h('span', { className: 'px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold' }, 'Best Price Guaranteed')
              ),

              // Date & Travelers Selector
              h('div', { className: 'space-y-3.5' },
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Departure Date'),
                  h('input', {
                    type: 'date',
                    value: departureDate,
                    onChange: (e) => setDepartureDate(e.target.value),
                    className: 'w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none'
                  })
                ),

                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Number of Travelers'),
                  h('div', { className: 'flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200' },
                    h('button', {
                      onClick: () => setTravelers(Math.max(1, travelers - 1)),
                      className: 'w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100'
                    }, '-'),
                    h('span', { className: 'text-xs font-bold text-slate-800' }, `${travelers} ${travelers === 1 ? 'Adult' : 'Adults'}`),
                    h('button', {
                      onClick: () => setTravelers(travelers + 1),
                      className: 'w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100'
                    }, '+')
                  )
                )
              ),

              // Add-On Options
              h('div', { className: 'pt-2 space-y-2' },
                h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider' }, 'Optional Premium Add-ons'),
                [
                  { key: 'transfer', label: 'VIP Airport Limousine Transfer', price: 120 },
                  { key: 'insurance', label: 'Comprehensive Medical & Trip Insurance', price: 85, perPerson: true },
                  { key: 'suiteUpgrade', label: 'Suite Room Upgrade (Ocean/Mountain View)', price: 250, perNight: true }
                ].map(item => h('label', {
                  key: item.key,
                  className: 'flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer text-xs'
                },
                  h('input', {
                    type: 'checkbox',
                    checked: addons[item.key],
                    onChange: () => toggleAddon(item.key),
                    className: 'mt-0.5 rounded text-sky-600 focus:ring-0'
                  }),
                  h('div', { className: 'flex-1' },
                    h('span', { className: 'font-semibold text-slate-800 block leading-tight' }, item.label),
                    h('span', { className: 'text-[11px] text-sky-600 font-bold' },
                      `+${formatPrice(item.price, currency)} ${item.perPerson ? '/ person' : item.perNight ? '/ night' : ''}`
                    )
                  )
                ))
              ),

              // Total Calculation Summary
              h('div', { className: 'pt-4 border-t border-slate-100 space-y-2 text-xs' },
                h('div', { className: 'flex justify-between text-slate-500' },
                  h('span', null, `Base Fare (${travelers}x ${formatPrice(pkg.price, currency)})`),
                  h('span', { className: 'font-semibold' }, formatPrice(baseTotal, currency))
                ),
                addonTotal > 0 && h('div', { className: 'flex justify-between text-slate-500' },
                  h('span', null, 'Selected Add-ons'),
                  h('span', { className: 'font-semibold' }, formatPrice(addonTotal, currency))
                ),
                h('div', { className: 'flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100' },
                  h('span', null, 'Total Estimated Amount:'),
                  h('span', { className: 'text-sky-600 text-lg' }, formatPrice(grandTotal, currency))
                )
              ),

              // Book Now CTA
              h('button', {
                onClick: () => openBooking(pkg),
                className: 'w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-bold text-sm shadow-xl shadow-sky-600/30 active:scale-95 transition-all flex items-center justify-center gap-2'
              },
                h(Icons.Sparkles, { className: 'w-4 h-4 text-sky-200' }),
                h('span', null, 'Proceed to Book This Trip')
              ),

              h('p', { className: 'text-[11px] text-center text-slate-400' },
                'Instant confirmation • Free cancellation up to 30 days prior'
              )
            )
          )
        )
      )
    );
  }

  // ==========================================
  // PAGE 7: BLOG / MAGAZINE PAGE
  // ==========================================
  function BlogPage({ setSelectedArticleId }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');

    const categories = ['All', 'Destination Guides', 'Travel Tips', 'Food & Culture', 'Inspiration'];

    const filtered = useMemo(() => {
      return DATA.blogArticles.filter(art => {
        const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
        const matchesSearch = !search ||
          art.title.toLowerCase().includes(search.toLowerCase()) ||
          art.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    }, [activeCategory, search]);

    const featured = DATA.blogArticles[0];

    return h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12' },
      // Header
      h('div', { className: 'text-center max-w-3xl mx-auto' },
        h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Traveler Journal'),
        h('h1', { className: 'text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 mt-2' }, 'Travel Go Magazine'),
        h('p', { className: 'text-slate-500 text-sm mt-2' },
          'Stories, itineraries, local cuisine secrets, and destination dispatches from our global writers.'
        )
      ),

      // Hero Cover Article
      featured && h('div', {
        onClick: () => setSelectedArticleId(featured.id),
        className: 'relative rounded-3xl overflow-hidden bg-slate-900 text-white cursor-pointer group shadow-xl'
      },
        h('div', { className: 'h-[440px] relative' },
          h('img', { src: featured.image, alt: featured.title, className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' }),
          h('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' }),
          h('div', { className: 'absolute bottom-8 left-8 right-8 max-w-3xl' },
            h('span', { className: 'px-3.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider' }, 'Cover Story'),
            h('h2', { className: 'text-2xl sm:text-3xl lg:text-4xl font-black font-display mt-3 leading-tight group-hover:text-sky-300 transition-colors' },
              featured.title
            ),
            h('p', { className: 'text-slate-300 text-sm mt-2 line-clamp-2' }, featured.excerpt),
            h('div', { className: 'mt-4 flex items-center gap-3 text-xs text-slate-300' },
              h('span', { className: 'font-semibold text-white' }, featured.author.name),
              h('span', null, '•'),
              h('span', null, featured.date),
              h('span', null, '•'),
              h('span', null, featured.readTime)
            )
          )
        )
      ),

      // Category filter pills & Search
      h('div', { className: 'flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm' },
        h('div', { className: 'flex items-center gap-2 overflow-x-auto w-full sm:w-auto hide-scrollbar' },
          categories.map(cat => h('button', {
            key: cat,
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`
          }, cat))
        ),

        h('div', { className: 'relative w-full sm:w-72' },
          h(Icons.Search, { className: 'w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2' }),
          h('input', {
            type: 'text',
            placeholder: 'Search articles...',
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: 'w-full pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500'
          })
        )
      ),

      // Grid of Articles
      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        filtered.map(art => h('article', {
          key: art.id,
          onClick: () => setSelectedArticleId(art.id),
          className: 'travel-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md cursor-pointer flex flex-col group'
        },
          h('div', { className: 'relative h-52 img-zoom-container' },
            h('img', { src: art.image, alt: art.title, className: 'w-full h-full object-cover img-zoom-target' }),
            h('span', { className: 'absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold' },
              art.category
            )
          ),
          h('div', { className: 'p-6 flex flex-col flex-1 justify-between' },
            h('div', null,
              h('div', { className: 'flex items-center gap-2 text-xs text-slate-400 mb-2' },
                h('span', null, art.date),
                h('span', null, '•'),
                h('span', null, art.readTime)
              ),
              h('h3', { className: 'text-lg font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug' },
                art.title
              ),
              h('p', { className: 'text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed' }, art.excerpt)
            ),
            h('div', { className: 'mt-6 pt-4 border-t border-slate-100 flex items-center justify-between' },
              h('div', { className: 'flex items-center gap-2.5' },
                h('img', { src: art.author.avatar, alt: art.author.name, className: 'w-7 h-7 rounded-full object-cover' }),
                h('div', null,
                  h('span', { className: 'text-xs font-bold text-slate-800 block' }, art.author.name),
                  h('span', { className: 'text-[10px] text-slate-400' }, art.author.role)
                )
              ),
              h('span', { className: 'text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1' },
                h('span', null, 'Read Story'),
                h(Icons.ArrowRight, { className: 'w-3.5 h-3.5' })
              )
            )
          )
        ))
      )
    );
  }

  // ==========================================
  // PAGE 8: CONTACT US PAGE
  // ==========================================
  function ContactUsPage({ addToast }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [destination, setDestination] = useState('Bali, Indonesia');
    const [message, setMessage] = useState('');
    const [activeFaq, setActiveFaq] = useState(0);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !message) {
        addToast('Please fill in all required fields.', 'error');
        return;
      }
      addToast(`Thank you ${name}! Your inquiry (Ref #TG-${Math.floor(100000 + Math.random() * 900000)}) has been received.`, 'success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    };

    return h('div', { className: 'space-y-16 pb-20' },
      // Hero Header
      h('div', { className: 'relative py-20 bg-slate-900 text-white overflow-hidden text-center' },
        h('div', { className: 'max-w-4xl mx-auto px-4 relative z-10' },
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-400 bg-sky-950 border border-sky-800 px-3.5 py-1 rounded-full' }, 'Connect With Us'),
          h('h1', { className: 'text-4xl sm:text-5xl font-black font-display mt-3' }, 'We Are Here to Assist Your Journey'),
          h('p', { className: 'text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto' },
            'Have questions about a travel package or looking for a customized private itinerary? Our destination specialists are available 24/7.'
          )
        )
      ),

      // Split Form & Contact Info
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-12' },
          // Form Column (2 Cols)
          h('div', { className: 'lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6' },
            h('div', null,
              h('h2', { className: 'text-2xl font-bold font-display text-slate-900' }, 'Send Us a Message'),
              h('p', { className: 'text-xs text-slate-500 mt-1' }, 'Fill out the form below and an expert travel concierge will respond within 2 hours.')
            ),

            h('form', { onSubmit: handleSubmit, className: 'space-y-4' },
              h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Full Name *'),
                  h('input', {
                    type: 'text',
                    placeholder: 'Alexander Vance',
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    required: true,
                    className: 'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                  })
                ),
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Email Address *'),
                  h('input', {
                    type: 'email',
                    placeholder: 'vance@example.com',
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    required: true,
                    className: 'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                  })
                )
              ),

              h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Phone Number'),
                  h('input', {
                    type: 'tel',
                    placeholder: '+1 (555) 000-0000',
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    className: 'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                  })
                ),
                h('div', null,
                  h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Destination of Interest'),
                  h('select', {
                    value: destination,
                    onChange: (e) => setDestination(e.target.value),
                    className: 'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                  },
                    DATA.destinations.map(d => h('option', { key: d.id, value: `${d.name}, ${d.country}` }, `${d.name}, ${d.country}`)),
                    h('option', { value: 'Other' }, 'Other Destination / Custom Tour')
                  )
                )
              ),

              h('div', null,
                h('label', { className: 'block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1' }, 'Your Travel Wishlist & Message *'),
                h('textarea', {
                  rows: 4,
                  placeholder: 'Tell us about your desired travel dates, party size, travel style, or special occasions...',
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  required: true,
                  className: 'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-sky-500'
                })
              ),

              h('button', {
                type: 'submit',
                className: 'px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-600/25 active:scale-95 transition-all'
              }, 'Send Inquiry')
            )
          ),

          // Right Column: Worldwide Offices & 24/7 Hotline
          h('div', { className: 'space-y-6' },
            // Hotline Card
            h('div', { className: 'p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-3' },
              h('div', { className: 'flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider' },
                h(Icons.Headset, { className: 'w-4 h-4' }),
                h('span', null, '24/7 Global Traveler Hotline')
              ),
              h('p', { className: 'text-xl font-bold font-mono text-white' }, DATA.brand.emergencyHotline),
              h('p', { className: 'text-xs text-slate-400 leading-relaxed' },
                'For travelers currently in-country or needing urgent concierge assistance.'
              )
            ),

            // Regional Offices
            h('div', { className: 'bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4' },
              h('h3', { className: 'text-sm font-bold uppercase tracking-wider text-slate-900' }, 'Our Global Offices'),
              [
                { city: 'New York (Headquarters)', address: '750 Fifth Avenue, Suite 2800, New York, NY 10019', phone: '+1 (800) 872-8354' },
                { city: 'London', address: '18 Berkeley Square, Mayfair, London W1J 6DA, UK', phone: '+44 20 7946 0920' },
                { city: 'Dubai', address: 'DIFC Gate Precinct 4, Level 5, Dubai, UAE', phone: '+971 4 362 7000' },
                { city: 'Mumbai', address: 'Bandra Kurla Complex, G-Block, Mumbai 400051', phone: '+91 22 6123 4567' }
              ].map((office, idx) => h('div', { key: idx, className: 'pb-3 border-b border-slate-100 last:border-0 last:pb-0 text-xs' },
                h('h4', { className: 'font-bold text-slate-800' }, office.city),
                h('p', { className: 'text-slate-500 mt-0.5' }, office.address),
                h('p', { className: 'text-sky-600 font-semibold mt-0.5' }, office.phone)
              ))
            )
          )
        )
      ),

      // FAQ Accordion
      h('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'text-center mb-8' },
          h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full' }, 'Got Questions?'),
          h('h2', { className: 'text-3xl font-bold font-display text-slate-900 mt-2' }, 'Frequently Asked Questions')
        ),

        h('div', { className: 'space-y-3' },
          DATA.faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return h('div', {
              key: idx,
              className: 'bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm'
            },
              h('button', {
                onClick: () => setActiveFaq(isOpen ? null : idx),
                className: 'w-full px-6 py-4 flex items-center justify-between text-left'
              },
                h('span', { className: 'text-sm font-bold text-slate-800' }, faq.q),
                isOpen ? h(Icons.ChevronUp, { className: 'w-4 h-4 text-sky-600' }) : h(Icons.ChevronDown, { className: 'w-4 h-4 text-slate-400' })
              ),
              isOpen && h('div', { className: 'px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-50 pt-2 animate-modal' },
                faq.a
              )
            );
          })
        )
      )
    );
  }

  // ==========================================
  // MODAL 1: TRIP PLANNER WIZARD MODAL
  // ==========================================
  function TripPlannerModal({ isOpen, onClose, currency, addToast }) {
    const [step, setStep] = useState(1);
    const [destination, setDestination] = useState('Bali, Indonesia');
    const [style, setStyle] = useState('Luxury Escapes');
    const [duration, setDuration] = useState('7 - 10 Days');
    const [guests, setGuests] = useState('2');
    const [budget, setBudget] = useState('$2,000 - $3,500');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFinish = (e) => {
      e.preventDefault();
      addToast(`Custom Trip Request submitted! Our travel designer will reach out to ${email || 'you'} shortly.`, 'success');
      onClose();
    };

    if (!isOpen) return null;

    return h('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm' },
      h('div', { className: 'bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-modal relative' },
        // Close Button
        h('button', {
          onClick: onClose,
          className: 'absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200'
        }, h(Icons.X, { className: 'w-4 h-4' })),

        // Header
        h('div', { className: 'mb-6' },
          h('span', { className: 'text-[10px] uppercase font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full' },
            `Step ${step} of 3`
          ),
          h('h3', { className: 'text-xl font-bold font-display text-slate-900 mt-2' }, 'Plan Your Custom Journey'),
          h('p', { className: 'text-xs text-slate-500 mt-0.5' }, 'Tell us your dream preferences and we will curate a personalized travel itinerary.')
        ),

        // Wizard Step 1: Destination & Style
        step === 1 && h('div', { className: 'space-y-4' },
          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Where do you want to explore?'),
            h('select', {
              value: destination,
              onChange: (e) => setDestination(e.target.value),
              className: 'w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
            },
              DATA.destinations.map(d => h('option', { key: d.id, value: `${d.name}, ${d.country}` }, `${d.name}, ${d.country}`))
            )
          ),
          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Preferred Travel Style'),
            h('div', { className: 'grid grid-cols-2 gap-2' },
              ['Beach Holidays', 'Mountain Adventures', 'Luxury Escapes', 'Cultural Exploration', 'Wildlife Adventures', 'Romantic Getaways'].map(st => h('button', {
                key: st,
                type: 'button',
                onClick: () => setStyle(st),
                className: `p-2.5 rounded-xl text-xs font-bold text-left border ${
                  style === st ? 'bg-sky-50 border-sky-500 text-sky-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`
              }, st))
            )
          ),
          h('button', {
            type: 'button',
            onClick: () => setStep(2),
            className: 'w-full py-3.5 rounded-xl bg-sky-600 text-white font-bold text-xs uppercase tracking-wider'
          }, 'Next: Dates & Budget')
        ),

        // Wizard Step 2: Duration & Budget
        step === 2 && h('div', { className: 'space-y-4' },
          h('div', { className: 'grid grid-cols-2 gap-3' },
            h('div', null,
              h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Ideal Duration'),
              h('select', {
                value: duration,
                onChange: (e) => setDuration(e.target.value),
                className: 'w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
              },
                h('option', { value: '3 - 5 Days' }, '3 - 5 Days'),
                h('option', { value: '7 - 10 Days' }, '7 - 10 Days'),
                h('option', { value: '11 - 14 Days' }, '11 - 14 Days'),
                h('option', { value: '15+ Days' }, '15+ Days Extended')
              )
            ),
            h('div', null,
              h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Party Size'),
              h('select', {
                value: guests,
                onChange: (e) => setGuests(e.target.value),
                className: 'w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
              },
                h('option', { value: '1' }, '1 Solo Traveler'),
                h('option', { value: '2' }, '2 Travelers (Couple)'),
                h('option', { value: '3-4' }, '3-4 Travelers (Family)'),
                h('option', { value: '5+' }, '5+ Group')
              )
            )
          ),
          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Target Budget Per Person'),
            h('select', {
              value: budget,
              onChange: (e) => setBudget(e.target.value),
              className: 'w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
            },
              h('option', { value: '$1,000 - $2,000' }, '$1,000 - $2,000 (Smart Luxury)'),
              h('option', { value: '$2,000 - $3,500' }, '$2,000 - $3,500 (Signature Five-Star)'),
              h('option', { value: '$3,500 - $6,000' }, '$3,500 - $6,000 (Ultra Luxury VIP)'),
              h('option', { value: '$6,000+' }, '$6,000+ (Private Jet & Villa)')
            )
          ),
          h('div', { className: 'flex gap-2' },
            h('button', {
              type: 'button',
              onClick: () => setStep(1),
              className: 'w-1/3 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs'
            }, 'Back'),
            h('button', {
              type: 'button',
              onClick: () => setStep(3),
              className: 'w-2/3 py-3.5 rounded-xl bg-sky-600 text-white font-bold text-xs uppercase tracking-wider'
            }, 'Next: Contact Info')
          )
        ),

        // Wizard Step 3: Contact Details
        step === 3 && h('form', { onSubmit: handleFinish, className: 'space-y-4' },
          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Your Full Name *'),
            h('input', {
              type: 'text',
              placeholder: 'Eleanor Vance',
              value: name,
              onChange: (e) => setName(e.target.value),
              required: true,
              className: 'w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
            })
          ),
          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1.5' }, 'Email Address *'),
            h('input', {
              type: 'email',
              placeholder: 'eleanor@example.com',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true,
              className: 'w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
            })
          ),
          h('div', { className: 'p-3 rounded-xl bg-sky-50 text-[11px] text-sky-800' },
            `Trip Summary: ${destination} • ${duration} • ${style} • ${budget}`
          ),
          h('div', { className: 'flex gap-2' },
            h('button', {
              type: 'button',
              onClick: () => setStep(2),
              className: 'w-1/3 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs'
            }, 'Back'),
            h('button', {
              type: 'submit',
              className: 'w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md'
            }, 'Submit Custom Request')
          )
        )
      )
    );
  }

  // ==========================================
  // MODAL 2: BOOKING CHECKOUT MODAL
  // ==========================================
  function BookingModal({ bookingState, onClose, currency, addToast }) {
    const pkg = bookingState.package || DATA.packages[0];

    const [checkoutStep, setCheckoutStep] = useState(1);
    const [travelers, setTravelers] = useState(bookingState.travelers || 2);
    const [travelDate, setTravelDate] = useState(bookingState.departureDate || '2026-05-15');
    const [leadName, setLeadName] = useState('');
    const [leadEmail, setLeadEmail] = useState('');
    const [leadPhone, setLeadPhone] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [bookingRef, setBookingRef] = useState('');

    const total = pkg.price * travelers;

    const handleConfirmBooking = (e) => {
      e.preventDefault();
      const ref = `TG-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setCheckoutStep(3); // Receipt confirmation step
      addToast(`Booking Confirmed! Reference ID: ${ref}`, 'success');
    };

    return h('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm' },
      h('div', { className: 'bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl animate-modal relative max-h-[90vh] overflow-y-auto' },
        // Close Button
        h('button', {
          onClick: onClose,
          className: 'absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200'
        }, h(Icons.X, { className: 'w-4 h-4' })),

        // STEP 1: TRIP DETAILS CONFIRMATION
        checkoutStep === 1 && h('div', { className: 'space-y-5' },
          h('div', null,
            h('span', { className: 'text-[10px] uppercase font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full' }, 'Step 1 of 2: Trip Overview'),
            h('h3', { className: 'text-2xl font-bold font-display text-slate-900 mt-2' }, 'Book Your Adventure'),
            h('p', { className: 'text-xs text-slate-500' }, 'Review your package details before entering traveler names.')
          ),

          // Package Card Preview
          h('div', { className: 'flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-center' },
            h('img', { src: pkg.heroImage, alt: pkg.title, className: 'w-20 h-20 rounded-xl object-cover flex-shrink-0' }),
            h('div', { className: 'min-w-0' },
              h('span', { className: 'text-[10px] uppercase font-bold text-orange-500' }, pkg.destinationName),
              h('h4', { className: 'text-sm font-bold text-slate-900 line-clamp-1' }, pkg.title),
              h('p', { className: 'text-xs text-slate-500' }, `${pkg.duration} • 5-Star Accommodations`),
              h('span', { className: 'text-xs font-black text-sky-600 mt-1 block' }, `${formatPrice(pkg.price, currency)} / traveler`)
            )
          ),

          // Date & Guests
          h('div', { className: 'grid grid-cols-2 gap-3' },
            h('div', null,
              h('label', { className: 'block text-xs font-bold text-slate-700 mb-1' }, 'Departure Date'),
              h('input', {
                type: 'date',
                value: travelDate,
                onChange: (e) => setTravelDate(e.target.value),
                className: 'w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
              })
            ),
            h('div', null,
              h('label', { className: 'block text-xs font-bold text-slate-700 mb-1' }, 'Guests'),
              h('select', {
                value: travelers,
                onChange: (e) => setTravelers(Number(e.target.value)),
                className: 'w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
              },
                [1, 2, 3, 4, 5, 6].map(n => h('option', { key: n, value: n }, `${n} ${n === 1 ? 'Traveler' : 'Travelers'}`))
              )
            )
          ),

          // Pricing Summary
          h('div', { className: 'p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between' },
            h('div', null,
              h('span', { className: 'text-xs text-slate-500' }, `Total (${travelers} travelers)`),
              h('div', { className: 'text-2xl font-black text-slate-900' }, formatPrice(total, currency))
            ),
            h('span', { className: 'text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full' }, 'Taxes & Fees Included')
          ),

          h('button', {
            type: 'button',
            onClick: () => setCheckoutStep(2),
            className: 'w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-600/20 active:scale-95 transition-all'
          }, 'Continue to Guest Details')
        ),

        // STEP 2: GUEST DETAILS & PAYMENT SIMULATION
        checkoutStep === 2 && h('form', { onSubmit: handleConfirmBooking, className: 'space-y-4' },
          h('div', null,
            h('span', { className: 'text-[10px] uppercase font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full' }, 'Step 2 of 2: Lead Traveler'),
            h('h3', { className: 'text-2xl font-bold font-display text-slate-900 mt-2' }, 'Guest Information'),
            h('p', { className: 'text-xs text-slate-500' }, 'Enter contact information for booking confirmations and voucher delivery.')
          ),

          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1' }, 'Full Legal Name *'),
            h('input', {
              type: 'text',
              placeholder: 'Eleanor Vance',
              value: leadName,
              onChange: (e) => setLeadName(e.target.value),
              required: true,
              className: 'w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
            })
          ),

          h('div', { className: 'grid grid-cols-2 gap-3' },
            h('div', null,
              h('label', { className: 'block text-xs font-bold text-slate-700 mb-1' }, 'Email Address *'),
              h('input', {
                type: 'email',
                placeholder: 'vance@example.com',
                value: leadEmail,
                onChange: (e) => setLeadEmail(e.target.value),
                required: true,
                className: 'w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
              })
            ),
            h('div', null,
              h('label', { className: 'block text-xs font-bold text-slate-700 mb-1' }, 'Mobile Phone *'),
              h('input', {
                type: 'tel',
                placeholder: '+1 (555) 000-0000',
                value: leadPhone,
                onChange: (e) => setLeadPhone(e.target.value),
                required: true,
                className: 'w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
              })
            )
          ),

          h('div', null,
            h('label', { className: 'block text-xs font-bold text-slate-700 mb-1' }, 'Special Requests (Dietary, Honeymoon, Accessibility)'),
            h('textarea', {
              rows: 2,
              placeholder: 'e.g. Vegetarian meals, anniversary surprise in room...',
              value: specialRequests,
              onChange: (e) => setSpecialRequests(e.target.value),
              className: 'w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold'
            })
          ),

          // Simulated Payment Method Badge
          h('div', { className: 'p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between' },
            h('div', { className: 'flex items-center gap-2' },
              h(Icons.Shield, { className: 'w-4 h-4 text-emerald-600' }),
              h('span', { className: 'font-bold text-slate-700' }, 'Secure Demo Checkout (No Real Charge)')
            ),
            h('span', { className: 'font-mono font-bold text-sky-600' }, formatPrice(total, currency))
          ),

          h('div', { className: 'flex gap-2' },
            h('button', {
              type: 'button',
              onClick: () => setCheckoutStep(1),
              className: 'w-1/3 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs'
            }, 'Back'),
            h('button', {
              type: 'submit',
              className: 'w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md'
            }, 'Confirm & Place Booking')
          )
        ),

        // STEP 3: BOOKING CONFIRMATION RECEIPT
        checkoutStep === 3 && h('div', { className: 'text-center space-y-6 py-4 animate-modal' },
          h('div', { className: 'w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md' },
            h(Icons.Check, { className: 'w-8 h-8' })
          ),
          h('div', null,
            h('span', { className: 'text-xs uppercase font-extrabold tracking-widest text-emerald-600' }, 'Booking Confirmed!'),
            h('h3', { className: 'text-2xl font-bold font-display text-slate-900 mt-1' }, 'You Are Going on an Adventure!'),
            h('p', { className: 'text-xs text-slate-500 mt-1 max-w-sm mx-auto' },
              `Your reservation for ${pkg.title} has been received. A full travel confirmation voucher has been dispatched to ${leadEmail || 'your email'}.`
            )
          ),

          // Receipt Voucher
          h('div', { className: 'p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs font-mono' },
            h('div', { className: 'flex justify-between border-b border-slate-200 pb-2 font-bold text-slate-800' },
              h('span', null, 'Booking Reference:'),
              h('span', { className: 'text-sky-600' }, bookingRef)
            ),
            h('div', { className: 'flex justify-between' },
              h('span', { className: 'text-slate-500' }, 'Lead Traveler:'),
              h('span', { className: 'text-slate-800 font-semibold' }, leadName || 'Valued Explorer')
            ),
            h('div', { className: 'flex justify-between' },
              h('span', { className: 'text-slate-500' }, 'Departure:'),
              h('span', { className: 'text-slate-800 font-semibold' }, travelDate)
            ),
            h('div', { className: 'flex justify-between' },
              h('span', { className: 'text-slate-500' }, 'Party Size:'),
              h('span', { className: 'text-slate-800 font-semibold' }, `${travelers} Travelers`)
            ),
            h('div', { className: 'flex justify-between border-t border-slate-200 pt-2 font-bold text-sm text-slate-900' },
              h('span', null, 'Total Paid:'),
              h('span', { className: 'text-sky-600' }, formatPrice(total, currency))
            )
          ),

          h('button', {
            onClick: onClose,
            className: 'w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider'
          }, 'Close & Return to Travel Go')
        )
      )
    );
  }

  // ==========================================
  // MODAL 3: WISHLIST SLIDE-OUT DRAWER
  // ==========================================
  function WishlistDrawer({ isOpen, onClose, wishlist, toggleWishlist, currency, navigateTo, openBooking }) {
    if (!isOpen) return null;

    // Collect destinations & packages currently in wishlist
    const savedDestinations = DATA.destinations.filter(d => wishlist.includes(d.id));
    const savedPackages = DATA.packages.filter(p => wishlist.includes(p.id));

    return h('div', { className: 'fixed inset-0 z-50 overflow-hidden' },
      h('div', {
        onClick: onClose,
        className: 'absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity'
      }),

      h('div', { className: 'fixed inset-y-0 right-0 max-w-full flex pl-10' },
        h('div', { className: 'w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-modal' },
          // Header
          h('div', { className: 'p-6 border-b border-slate-100 flex items-center justify-between' },
            h('div', { className: 'flex items-center gap-2' },
              h(Icons.Heart, { className: 'w-5 h-5 text-red-500 fill-red-500' }),
              h('h3', { className: 'text-lg font-bold font-display text-slate-900' }, 'Saved Wishlist'),
              h('span', { className: 'text-xs font-bold text-slate-400' }, `(${wishlist.length})`)
            ),
            h('button', { onClick: onClose, className: 'p-2 rounded-full hover:bg-slate-100 text-slate-400' },
              h(Icons.X, { className: 'w-5 h-5' })
            )
          ),

          // Scrollable Body
          h('div', { className: 'p-6 flex-1 overflow-y-auto space-y-6' },
            wishlist.length === 0
              ? h('div', { className: 'text-center py-20 text-slate-400' },
                  h(Icons.Heart, { className: 'w-12 h-12 mx-auto mb-3 opacity-30' }),
                  h('p', { className: 'text-sm font-bold text-slate-600' }, 'Your wishlist is empty'),
                  h('p', { className: 'text-xs text-slate-400 mt-1' }, 'Click the heart icon on any destination or package to save it here.')
                )
              : h('div', { className: 'space-y-4' },
                  // Saved Destinations
                  savedDestinations.map(d => h('div', {
                    key: d.id,
                    className: 'flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-between'
                  },
                    h('div', {
                      className: 'flex items-center gap-3 cursor-pointer min-w-0',
                      onClick: () => { onClose(); navigateTo('destination-detail', { destinationId: d.id }); }
                    },
                      h('img', { src: d.image, alt: d.name, className: 'w-14 h-14 rounded-xl object-cover flex-shrink-0' }),
                      h('div', { className: 'min-w-0' },
                        h('h4', { className: 'text-xs font-bold text-slate-900 truncate' }, d.name),
                        h('p', { className: 'text-[11px] text-slate-400 truncate' }, d.country),
                        h('span', { className: 'text-xs font-black text-sky-600' }, formatPrice(d.priceFrom, currency))
                      )
                    ),
                    h('button', {
                      onClick: () => toggleWishlist(d.id, d.name),
                      className: 'p-2 text-slate-400 hover:text-red-500'
                    }, h(Icons.X, { className: 'w-4 h-4' }))
                  )),

                  // Saved Packages
                  savedPackages.map(p => h('div', {
                    key: p.id,
                    className: 'flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-between'
                  },
                    h('div', {
                      className: 'flex items-center gap-3 cursor-pointer min-w-0',
                      onClick: () => { onClose(); navigateTo('package-detail', { packageId: p.id }); }
                    },
                      h('img', { src: p.heroImage, alt: p.title, className: 'w-14 h-14 rounded-xl object-cover flex-shrink-0' }),
                      h('div', { className: 'min-w-0' },
                        h('h4', { className: 'text-xs font-bold text-slate-900 truncate' }, p.title),
                        h('p', { className: 'text-[11px] text-slate-400 truncate' }, p.duration),
                        h('span', { className: 'text-xs font-black text-sky-600' }, formatPrice(p.price, currency))
                      )
                    ),
                    h('div', { className: 'flex items-center gap-1' },
                      h('button', {
                        onClick: () => { onClose(); openBooking(p); },
                        className: 'px-2.5 py-1 rounded-lg bg-sky-600 text-white text-[11px] font-bold'
                      }, 'Book'),
                      h('button', {
                        onClick: () => toggleWishlist(p.id, p.title),
                        className: 'p-1.5 text-slate-400 hover:text-red-500'
                      }, h(Icons.X, { className: 'w-4 h-4' }))
                    )
                  ))
                )
          ),

          // Drawer Footer
          h('div', { className: 'p-6 border-t border-slate-100' },
            h('button', {
              onClick: () => { onClose(); navigateTo('destinations'); },
              className: 'w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider'
            }, 'Continue Exploring')
          )
        )
      )
    );
  }

  // ==========================================
  // MODAL 4: BLOG ARTICLE READER MODAL
  // ==========================================
  function ArticleReaderModal({ articleId, onClose }) {
    const art = DATA.blogArticles.find(a => a.id === articleId) || DATA.blogArticles[0];

    return h('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm' },
      h('div', { className: 'bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl animate-modal relative max-h-[90vh] overflow-y-auto space-y-6' },
        // Close Button
        h('button', {
          onClick: onClose,
          className: 'absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200'
        }, h(Icons.X, { className: 'w-4 h-4' })),

        // Hero Image
        h('div', { className: 'h-64 rounded-2xl overflow-hidden' },
          h('img', { src: art.image, alt: art.title, className: 'w-full h-full object-cover' })
        ),

        // Metadata
        h('div', { className: 'space-y-2' },
          h('span', { className: 'px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold' }, art.category),
          h('h2', { className: 'text-2xl sm:text-3xl font-black font-display text-slate-900' }, art.title),
          h('div', { className: 'flex items-center gap-3 pt-1 text-xs text-slate-500' },
            h('img', { src: art.author.avatar, alt: art.author.name, className: 'w-7 h-7 rounded-full object-cover' }),
            h('span', { className: 'font-semibold text-slate-800' }, art.author.name),
            h('span', null, '•'),
            h('span', null, art.date),
            h('span', null, '•'),
            h('span', null, art.readTime)
          )
        ),

        // Content
        h('div', { className: 'text-slate-600 text-sm leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4' },
          art.content
        ),

        // Close action
        h('div', { className: 'pt-4 border-t border-slate-100 flex justify-end' },
          h('button', {
            onClick: onClose,
            className: 'px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs'
          }, 'Back to Articles')
        )
      )
    );
  }

  // Expose Pages & Modals
  window.TravelPages = {
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
  };
})();
