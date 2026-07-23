// src/lib/data.js
// Fallback product data (used when Supabase is not yet configured)
export const PRODUCTS = [
  // ── ROLLING SHUTTERS ────────────────────────────────────────────
  { id: 'rs-01', category: 'rolling_shutter', name: 'Motorized Rolling Shutter', description: 'Electrically operated rolling shutter with push-button or remote control. Ideal for warehouses, showrooms, and commercial spaces.', tags: ['Motorized', 'Electric', 'Remote', 'Commercial'], is_featured: true, image_url: '/product-shutter.png' },
  { id: 'rs-02', category: 'rolling_shutter', name: 'Electrically Rolling Shutter', description: 'Heavy-duty electric shutter with galvanised steel slats and smooth torsion spring mechanism. Designed for high-frequency daily use.', tags: ['Electric', 'Heavy Duty', 'Galvanised'], is_featured: false, image_url: '' },
  { id: 'rs-03', category: 'rolling_shutter', name: 'Automatic Rolling Shutter', description: 'Fully automatic shutter with sensor-based or timer operation. Integrates with access control systems.', tags: ['Automatic', 'Sensor', 'Access Control'], is_featured: false, image_url: '' },
  { id: 'rs-04', category: 'rolling_shutter', name: 'Shop Rolling Shutter', description: 'Lightweight, cost-effective rolling shutter for retail shops, kiosks, and small commercial establishments.', tags: ['Shop', 'Retail', 'Lightweight'], is_featured: false, image_url: '' },
  { id: 'rs-05', category: 'rolling_shutter', name: 'Gear Rolling Shutter', description: 'Manual gear-operated rolling shutter. Zero electricity dependency — ideal for power-cut-prone areas.', tags: ['Manual', 'Gear', 'No Electricity'], is_featured: false, image_url: '' },

  // ── SLIDING GATES ───────────────────────────────────────────────
  { id: 'sg-01', category: 'sliding_gate', name: 'Mild Steel Sliding Gate', description: 'Heavy-duty MS sliding gate for industrial complexes and large commercial premises. Custom fabricated to exact dimensions.', tags: ['MS', 'Heavy Duty', 'Custom'], is_featured: true, image_url: '' },
  { id: 'sg-02', category: 'sliding_gate', name: 'SS Automatic Sliding Gate', description: 'Stainless steel automatic sliding gate with motorised operation and remote/keypad access. Corrosion-resistant finish.', tags: ['SS', 'Automatic', 'Remote'], is_featured: false, image_url: '' },
  { id: 'sg-03', category: 'sliding_gate', name: 'MS Automatic Sliding Gate', description: 'Mild steel automatic sliding gate with rack-and-pinion drive system. Smooth, quiet, and reliable.', tags: ['MS', 'Automatic', 'Rack Pinion'], is_featured: false, image_url: '' },
  { id: 'sg-04', category: 'sliding_gate', name: 'Stainless Steel Sliding Gate', description: 'Premium stainless steel sliding gate with polished or brushed finish. Ideal for high-end facilities and hospitals.', tags: ['SS', 'Premium', 'Polished'], is_featured: false, image_url: '' },

  // ── SWING GATES ─────────────────────────────────────────────────
  { id: 'sw-01', category: 'swing_gate', name: 'Stainless Steel Automatic Swing Gate', description: 'Automated SS swing gate with hydraulic or electro-mechanical arm. Smooth, silent swing up to 180°.', tags: ['SS', 'Automatic', 'Hydraulic'], is_featured: true, image_url: '' },
  { id: 'sw-02', category: 'swing_gate', name: 'MS Automatic Swing Gate', description: 'Mild steel automatic swing gate with robust steel arm actuator. Suitable for residential and commercial use.', tags: ['MS', 'Automatic', 'Actuator'], is_featured: false, image_url: '' },
  { id: 'sw-03', category: 'swing_gate', name: 'Mild Steel Swing Gate', description: 'Manual mild steel swing gate. Sturdy construction, powder-coated finish. Available in single or double-leaf configurations.', tags: ['MS', 'Manual', 'Powder Coat'], is_featured: false, image_url: '' },
  { id: 'sw-04', category: 'swing_gate', name: 'Stainless Steel Swing Gate', description: 'Premium stainless steel manual swing gate with decorative elements. Maintenance-free and rust-proof.', tags: ['SS', 'Manual', 'Decorative'], is_featured: false, image_url: '' },
  { id: 'sw-05', category: 'swing_gate', name: 'MS Collapsible Gate', description: 'Folding/collapsible MS gate for doorways, warehouses, and narrow openings. Space-saving design.', tags: ['MS', 'Collapsible', 'Folding'], is_featured: false, image_url: '' },

  // ── PEB SHEDS ───────────────────────────────────────────────────
  { id: 'pb-01', category: 'peb_shed', name: 'Mild Steel Industrial Shed', description: 'Large-span MS industrial shed with hot-dip galvanised purlins, ridge ventilators, and corrugated roofing.', tags: ['MS', 'Industrial', 'Large Span'], is_featured: true, image_url: '/product-shed.png' },
  { id: 'pb-02', category: 'peb_shed', name: 'PEB Warehouse Shed', description: 'Pre-engineered steel warehouse with mezzanine options, loading docks, and insulated roof panels.', tags: ['PEB', 'Warehouse', 'Insulated'], is_featured: false, image_url: '' },
  { id: 'pb-03', category: 'peb_shed', name: 'PEB Factory Shed', description: 'Pre-engineered factory building with crane-compatible design, heavy-duty columns, and fire-rated cladding options.', tags: ['PEB', 'Factory', 'Crane Ready'], is_featured: false, image_url: '' },
  { id: 'pb-04', category: 'peb_shed', name: 'PEB Structural Shed', description: 'Structural steel shed with custom portal frame design. Engineered for wind and seismic loads as per IS standards.', tags: ['PEB', 'Structural', 'IS Certified'], is_featured: false, image_url: '' },
  { id: 'pb-05', category: 'peb_shed', name: 'Poultry Shed', description: 'Ventilated poultry farm shed with environment-control options, raised floor support, and corrosion-resistant cladding.', tags: ['Poultry', 'Ventilated', 'Farm'], is_featured: false, image_url: '' },
  { id: 'pb-06', category: 'peb_shed', name: 'Steel Elevated Goat Farm Shed', description: 'Raised-platform goat farming shed with slotted flooring, drainage gutters, and corrosion-resistant structural frame.', tags: ['Goat Farm', 'Elevated', 'Slotted Floor'], is_featured: false, image_url: '' },
  { id: 'pb-07', category: 'peb_shed', name: 'Tin Shed / Prefabricated Shelter', description: 'Low-cost GI tin sheet shelter for site offices, security cabins, labour camps, and temporary storage.', tags: ['Tin', 'Prefab', 'Low Cost'], is_featured: false, image_url: '' },

  // ── FABRICATION SERVICES ────────────────────────────────────────
  { id: 'fa-01', category: 'fabrication', name: 'Shed Fabrication Service', description: 'End-to-end shed fabrication — design, material supply, civil interface, erection, and commissioning.', tags: ['Full Service', 'Erection', 'Commissioning'], is_featured: true, image_url: '/product-fabrication.png' },
  { id: 'fa-02', category: 'fabrication', name: 'PEB Structures Designing Service', description: 'Structural design and detailing for pre-engineered buildings using STAAD.Pro and AutoCAD. PE-stamped drawings available.', tags: ['Design', 'STAAD.Pro', 'PE Stamped'], is_featured: false, image_url: '' },
  { id: 'fa-03', category: 'fabrication', name: 'PEB Designing Services', description: 'Full PEB design package — load calculations, 3D modelling, shop drawings, and BOM generation.', tags: ['3D Model', 'BOM', 'Shop Drawings'], is_featured: false, image_url: '' },
  { id: 'fa-04', category: 'fabrication', name: 'Industrial Shed Construction', description: 'Turnkey industrial shed construction including civil works, structural steel, roofing, flooring, and MEP rough-in.', tags: ['Turnkey', 'Civil', 'MEP'], is_featured: false, image_url: '' },
  { id: 'fa-05', category: 'fabrication', name: 'Heavy Structural Fabrication', description: 'Heavy steel structural fabrication including trusses, columns, beams, and complex assemblies for industrial projects.', tags: ['Heavy', 'Truss', 'Columns'], is_featured: false, image_url: '' },
  { id: 'fa-06', category: 'fabrication', name: 'Roof Structural Fabrication', description: 'Roof truss fabrication, purlin supply, ridge ventilator installation, and roof-sheet fixing services.', tags: ['Roof', 'Truss', 'Ventilator'], is_featured: false, image_url: '' },
  { id: 'fa-07', category: 'fabrication', name: 'Prefabricated Industrial Structure', description: 'Factory-prefabricated structural steel modules — ready for site-erection with minimal on-site welding.', tags: ['Prefab', 'Modular', 'Fast Erect'], is_featured: false, image_url: '' },
]

export const CATEGORIES = [
  { key: 'all',              label: 'All Products' },
  { key: 'rolling_shutter',  label: 'Rolling Shutters' },
  { key: 'sliding_gate',     label: 'Sliding Gates' },
  { key: 'swing_gate',       label: 'Swing Gates' },
  { key: 'peb_shed',         label: 'PEB Sheds' },
  { key: 'fabrication',      label: 'Fabrication' },
]

export const TESTIMONIALS = [
  { id: 1, author: 'Ramesh Reddy', company: 'Reddy Cold Storage', project: '12-Bay Motorized Rolling Shutters', location: 'Medchal, Hyderabad', rating: 5, content: 'Excellent quality motorized rolling shutters installed across all 12 bays of our cold storage. Smooth operation, on-time delivery, and professional team. Highly recommended.' },
  { id: 2, author: 'Suresh Kumar', company: 'Kumar Textiles', project: '4 Automatic Security Shutters', location: 'Kukatpally, Hyderabad', rating: 5, content: 'We got 4 automatic shutters installed for our textile unit. The quality is top-notch and the after-sales support is outstanding. Will definitely use SMF again for future projects.' },
  { id: 3, author: 'Anjali Sharma', company: 'Sharma Industries', project: 'Industrial PEB Production Shed', location: 'Patancheru, Telangana', rating: 5, content: 'PEB shed construction was completed on time and within budget. The structural design team was very professional. The finished shed is exactly what we needed for our production floor.' },
  { id: 4, author: 'Mohammad Farooq', company: 'Farooq Warehousing', project: 'Heavy-Duty Motorized Sliding Gates', location: 'Uppal, Hyderabad', rating: 4, content: 'Good quality sliding gates for our warehouse complex. The MS fabrication is solid and the automatic operation is smooth. Minor delay in delivery but overall satisfied.' },
  { id: 5, author: 'Priya Nair', company: 'Nair Auto Spares', project: 'Gear-Operated Shop Rolling Shutters', location: 'LB Nagar, Hyderabad', rating: 5, content: 'Shop rolling shutters are perfect for our auto spare parts outlet. Very durable and the gear mechanism works flawlessly even after 2 years. Great value for money.' },
]

export const COMPANY_STATS = [
  { value: 2013, suffix: '',   label: 'Founded' },
  { value: 1000, suffix: '+',  label: 'Projects Delivered' },
  { value: 98,   suffix: '%',  label: 'Client Satisfaction' },
  { value: 50,   suffix: '+',  label: 'Industrial Clients' },
]

export const SERVICES = [
  {
    title: 'Custom Fabrication',
    desc: 'Bespoke steel fabrication engineered to your exact specifications.',
    icon: 'fabrication',
  },
  {
    title: 'Installation',
    desc: 'Precision on-site installation by certified structural engineers.',
    icon: 'installation',
  },
  {
    title: 'Engineering',
    desc: 'Structural design using STAAD.Pro and AutoCAD for PE-stamped drawings.',
    icon: 'engineering',
  },
  {
    title: 'Maintenance',
    desc: 'Scheduled preventive maintenance and rapid emergency response.',
    icon: 'maintenance',
  },
  {
    title: 'Consultation',
    desc: 'Expert guidance on material selection, compliance, and cost optimisation.',
    icon: 'consultation',
  },
]

export const PROJECTS = [
  {
    title: 'Medchal Industrial Complex',
    category: 'PEB Structure',
    location: 'Medchal, Telangana',
    year: '2024',
    image: '/project-warehouse.png',
  },
  {
    title: 'Patancheru Manufacturing Hub',
    category: 'Steel Fabrication',
    location: 'Patancheru, Telangana',
    year: '2023',
    image: '/project-factory.png',
  },
  {
    title: 'Kukatpally Commercial Centre',
    category: 'Rolling Shutters',
    location: 'Kukatpally, Hyderabad',
    year: '2024',
    image: '/project-commercial.png',
  },
]

export const PROJECT_VIDEOS = [
  { id: 'pv-1', src: '/project-video-1.mp4', title: 'Rolling Shutter Installation',   category: 'Rolling Shutters' },
  { id: 'pv-2', src: '/project-video-2.mp4', title: 'Motorized Shutter Operation',    category: 'Rolling Shutters' },
  { id: 'pv-3', src: '/project-video-3.mp4', title: 'Shutter Mechanism Close-up',      category: 'Fabrication' },
  { id: 'pv-4', src: '/project-video-4.mp4', title: 'Industrial Shutter Deployment',   category: 'Rolling Shutters' },
  { id: 'pv-5', src: '/project-video-5.mp4', title: 'Commercial Shutter Project',      category: 'Rolling Shutters' },
  { id: 'pv-6', src: '/project-video-6.mp4', title: 'On-Site Fabrication Work',        category: 'Fabrication' },
]

export const WHY_CHOOSE = [
  { title: 'Engineering Precision', desc: 'Every project is designed with micro-level accuracy using advanced CAD systems and precision measuring equipment.' },
  { title: 'Premium Materials', desc: 'We source exclusively from JSW, TATA, and SAIL — ensuring IS 2062 grade steel and SS 304/316 across all fabrications.' },
  { title: 'On-time Delivery', desc: 'Our manufacturing pipeline is optimised for fast turnaround without compromising quality standards.' },
  { title: 'Modern Equipment', desc: 'CNC plasma cutters, automatic roll-forming machines, and robotic CO2 welding systems power our facility.' },
  { title: 'Experienced Team', desc: 'Certified structural engineers and fabrication specialists with over a decade of industrial project experience.' },
  { title: 'Quality Assurance', desc: 'ISO 9001:2015 certified manufacturing with rigorous deflection testing and cycle testing before dispatch.' },
]

export const HOME_PRODUCTS = [
  { title: 'Storage Tanks',     desc: 'Industrial-grade stainless steel and MS storage tanks engineered for chemical, water, and fuel storage.',       image: '/product-tank.png',        link: '/products?cat=fabrication' },
  { title: 'Rolling Shutters',  desc: 'High-performance motorized and automatic rolling shutters for commercial, industrial, and retail spaces.',       image: '/product-shutter.png',     link: '/products?cat=rolling_shutter' },
  { title: 'PEB Structures',    desc: 'Pre-engineered steel buildings with crane-compatible design, insulated panels, and rapid erection timelines.',   image: '/product-peb.png',         link: '/products?cat=peb_shed' },
  { title: 'Steel Fabrication', desc: 'Heavy structural fabrication including trusses, columns, beams, and complex assemblies for industrial projects.', image: '/product-fabrication.png', link: '/products?cat=fabrication' },
  { title: 'Industrial Sheds',  desc: 'Large-span industrial sheds with galvanised purlins, ridge ventilators, and corrugated metal roofing systems.',   image: '/product-shed.png',        link: '/products?cat=peb_shed' },
]

export const PACKAGE_CATEGORIES = [
  { key: 'all',          label: 'All Packages' },
  { key: 'residential',  label: 'Residential' },
  { key: 'commercial',   label: 'Commercial' },
  { key: 'industrial',   label: 'Industrial' },
  { key: 'builder',      label: 'Builder & Developer' },
  { key: 'agricultural', label: 'Agricultural' },
  { key: 'addon',        label: 'Premium Add-Ons' },
]

export const PACKAGES = [
  // ── RESIDENTIAL COLLECTION ───────────────────────────────────
  {
    id: 'pkg-01',
    collection: 'residential',
    name: 'Dream Home Steel Package',
    badge: 'Best Seller',
    icon: 'home',
    perfectFor: 'Independent Homes & Villas',
    inclusions: [
      'Designer Main Gate',
      'Balcony Railings',
      'Staircase Railings',
      'Window Safety Grills',
      'Utility Gate',
      'Car Parking Shed',
      'Premium Powder Coating',
      'Installation',
    ],
    outcome: 'Complete home steel work, one design language, increased property value, 10+ years durability.',
  },
  {
    id: 'pkg-02',
    collection: 'residential',
    name: 'Signature Entrance Package',
    badge: null,
    icon: 'gate',
    perfectFor: 'Premium Gates',
    inclusions: [
      'Designer Sliding Gate / Swing Gate',
      'Automation Ready',
      'Premium Hardware',
      'Powder Coating',
      'Installation',
    ],
    outcome: "Your home's first impression.",
  },
  {
    id: 'pkg-03',
    collection: 'residential',
    name: 'Outdoor Living Package',
    badge: null,
    icon: 'outdoor',
    perfectFor: 'Terraces, Gardens & Parking',
    inclusions: [
      'Pergola',
      'Terrace Canopy',
      'Car Parking Shed',
      'Outdoor Railings',
      'Utility Structure',
    ],
    outcome: 'Transform unused outdoor space into a functional and stylish area.',
  },

  // ── COMMERCIAL COLLECTION ────────────────────────────────────
  {
    id: 'pkg-04',
    collection: 'commercial',
    name: 'Business Security Package',
    badge: 'Popular',
    icon: 'shield',
    perfectFor: 'Shops, Showrooms, Warehouses',
    inclusions: [
      'Automatic Rolling Shutter',
      'Security Gate',
      'Safety Grills',
      'Emergency Exit Door',
    ],
    outcome: 'Protect your business while maintaining a professional appearance.',
  },
  {
    id: 'pkg-05',
    collection: 'commercial',
    name: 'Retail Frontage Package',
    badge: null,
    icon: 'storefront',
    perfectFor: 'Modern Retail Stores',
    inclusions: [
      'Polycarbonate Rolling Shutter',
      'Glass-Compatible Entrance',
      'Premium Steel Work',
      'Branding Frame',
    ],
    outcome: 'Modern storefront that attracts customers while staying secure.',
  },

  // ── INDUSTRIAL COLLECTION ────────────────────────────────────
  {
    id: 'pkg-06',
    collection: 'industrial',
    name: 'Warehouse Ready Package',
    badge: 'Popular',
    icon: 'warehouse',
    perfectFor: 'Warehouses, Distribution Centers, Storage Facilities',
    inclusions: [
      'PEB Structure',
      'Roofing',
      'Steel Columns',
      'Structural Fabrication',
      'Installation',
    ],
    outcome: 'Move your operations into a ready-to-use warehouse faster.',
  },
  {
    id: 'pkg-07',
    collection: 'industrial',
    name: 'Factory Expansion Package',
    badge: null,
    icon: 'factory',
    perfectFor: 'Manufacturing Units & Plants',
    inclusions: [
      'Industrial Shed',
      'Mezzanine Floor',
      'Loading Bay',
      'Staircase',
      'Structural Fabrication',
    ],
    outcome: 'Expand manufacturing capacity with minimal downtime.',
  },
  {
    id: 'pkg-08',
    collection: 'industrial',
    name: 'Turnkey Industrial Infrastructure Package',
    badge: 'Premium',
    icon: 'turnkey',
    perfectFor: 'Complete Industrial Projects',
    inclusions: [
      'Site Inspection',
      'Structural Design',
      'Engineering Drawings',
      'Fabrication',
      'Manufacturing',
      'Transportation',
      'Installation',
      'Final Handover',
    ],
    outcome: 'One contractor. One timeline. One warranty.',
  },

  // ── BUILDER & DEVELOPER COLLECTION ───────────────────────────
  {
    id: 'pkg-09',
    collection: 'builder',
    name: 'Apartment Steel Solutions',
    badge: null,
    icon: 'building',
    perfectFor: 'Builders, Apartment Developers, Gated Communities',
    inclusions: [
      'Entrance Gate',
      'Balcony Railings',
      'Stair Railings',
      'Utility Gates',
      'Terrace Railings',
      'Common Area Steel Works',
    ],
    outcome: 'Uniform premium finish across the entire project.',
  },
  {
    id: 'pkg-10',
    collection: 'builder',
    name: 'Construction Partner Package',
    badge: 'Partnership',
    icon: 'partner',
    perfectFor: 'Annual Partnership for Builders',
    inclusions: [
      'Priority Manufacturing',
      'Dedicated Project Manager',
      'Site Visits',
      'BOQ Assistance',
      'Structural Consultation',
      'Fabrication',
      'Installation',
    ],
    outcome: 'Your long-term fabrication partner for every project.',
  },

  // ── AGRICULTURAL COLLECTION ──────────────────────────────────
  {
    id: 'pkg-11',
    collection: 'agricultural',
    name: 'Smart Farm Package',
    badge: null,
    icon: 'farm',
    perfectFor: 'Farms & Agricultural Properties',
    inclusions: [
      'Dairy Shed',
      'Equipment Shed',
      'Storage Shed',
      'Boundary Gate',
    ],
    outcome: 'Protect machinery, livestock, and harvest with durable steel structures.',
  },
]

export const PACKAGE_ADDONS = [
  {
    id: 'addon-01',
    name: 'Automation Upgrade',
    icon: 'automation',
    items: ['Remote Control', 'Motorized Gates', 'Smart Sensors', 'Mobile App Ready'],
  },
  {
    id: 'addon-02',
    name: 'Luxury Finish Package',
    icon: 'finish',
    items: ['Powder Coating', 'Matte Finish', 'Wood Finish', 'Textured Finish', 'Premium Color Selection'],
  },
  {
    id: 'addon-03',
    name: 'Architectural Upgrade',
    icon: 'architecture',
    items: ['CNC Laser Cutting', 'Decorative Panels', 'Glass + Steel Combination', 'Stainless Steel Accents'],
  },
  {
    id: 'addon-04',
    name: 'Express Delivery Package',
    icon: 'express',
    items: ['Priority fabrication and installation for urgent commercial or residential projects'],
  },
]
