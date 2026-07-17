-- ═══════════════════════════════════════════════════════════
-- SREE MEENAKSHI FABRICATORS — Supabase SQL Schema + Seed
-- Run this in your Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════

-- 1. PRODUCTS TABLE
create table if not exists products (
  id          uuid primary key default gen_random_uuid(),
  category    text not null,
  name        text not null,
  description text,
  tags        text[],
  is_featured boolean default false,
  image_url   text default '',
  created_at  timestamptz default now()
);

-- 2. ENQUIRIES TABLE
create table if not exists enquiries (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  phone      text not null,
  email      text,
  product    text,
  message    text,
  status     text default 'new',
  created_at timestamptz default now()
);

-- 3. TESTIMONIALS TABLE
create table if not exists testimonials (
  id           uuid primary key default gen_random_uuid(),
  author       text not null,
  company      text,
  rating       int default 5,
  content      text,
  is_published boolean default true,
  created_at   timestamptz default now()
);

-- 4. SPECS TABLE
create table if not exists specs (
  id         uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  parameter  text,
  standard   text,
  pro        text
);

-- ─── ROW LEVEL SECURITY ────────────────────────────────────
-- Products & testimonials: public read
alter table products      enable row level security;
alter table enquiries     enable row level security;
alter table testimonials  enable row level security;
alter table specs         enable row level security;

create policy "Public read products"      on products     for select using (true);
create policy "Public read testimonials"  on testimonials for select using (is_published = true);
create policy "Public read specs"         on specs        for select using (true);
create policy "Public insert enquiries"   on enquiries    for insert with check (true);

-- ─── SEED PRODUCTS ─────────────────────────────────────────
insert into products (category, name, description, tags, is_featured) values
-- Rolling Shutters
('rolling_shutter', 'Motorized Rolling Shutter',    'Electrically operated rolling shutter with push-button or remote control. Ideal for warehouses, showrooms, and commercial spaces.', array['Motorized','Electric','Remote','Commercial'], true),
('rolling_shutter', 'Electrically Rolling Shutter', 'Heavy-duty electric shutter with galvanised steel slats and smooth torsion spring mechanism. Designed for high-frequency daily use.', array['Electric','Heavy Duty','Galvanised'], false),
('rolling_shutter', 'Automatic Rolling Shutter',    'Fully automatic shutter with sensor-based or timer operation. Integrates with access control systems.', array['Automatic','Sensor','Access Control'], false),
('rolling_shutter', 'Shop Rolling Shutter',         'Lightweight, cost-effective rolling shutter for retail shops, kiosks, and small commercial establishments.', array['Shop','Retail','Lightweight'], false),
('rolling_shutter', 'Gear Rolling Shutter',         'Manual gear-operated rolling shutter. Zero electricity dependency — ideal for power-cut-prone areas.', array['Manual','Gear','No Electricity'], false),
-- Sliding Gates
('sliding_gate', 'Mild Steel Sliding Gate',       'Heavy-duty MS sliding gate for industrial complexes. Custom fabricated to exact dimensions.', array['MS','Heavy Duty','Custom'], true),
('sliding_gate', 'SS Automatic Sliding Gate',     'Stainless steel automatic sliding gate with motorised operation and remote/keypad access.', array['SS','Automatic','Remote'], false),
('sliding_gate', 'MS Automatic Sliding Gate',     'Mild steel automatic sliding gate with rack-and-pinion drive system.', array['MS','Automatic','Rack Pinion'], false),
('sliding_gate', 'Stainless Steel Sliding Gate',  'Premium stainless steel sliding gate with polished or brushed finish.', array['SS','Premium','Polished'], false),
-- Swing Gates
('swing_gate', 'Stainless Steel Automatic Swing Gate', 'Automated SS swing gate with hydraulic or electro-mechanical arm. Smooth, silent swing up to 180°.', array['SS','Automatic','Hydraulic'], true),
('swing_gate', 'MS Automatic Swing Gate',             'Mild steel automatic swing gate with robust steel arm actuator.', array['MS','Automatic','Actuator'], false),
('swing_gate', 'Mild Steel Swing Gate',               'Manual mild steel swing gate. Powder-coated finish. Available in single or double-leaf.', array['MS','Manual','Powder Coat'], false),
('swing_gate', 'Stainless Steel Swing Gate',          'Premium stainless steel manual swing gate. Maintenance-free and rust-proof.', array['SS','Manual','Decorative'], false),
('swing_gate', 'MS Collapsible Gate',                 'Folding/collapsible MS gate for doorways, warehouses, and narrow openings.', array['MS','Collapsible','Folding'], false),
-- PEB Sheds
('peb_shed', 'Mild Steel Industrial Shed',       'Large-span MS industrial shed with galvanised purlins and corrugated roofing.', array['MS','Industrial','Large Span'], true),
('peb_shed', 'PEB Warehouse Shed',               'Pre-engineered steel warehouse with mezzanine options and insulated roof panels.', array['PEB','Warehouse','Insulated'], false),
('peb_shed', 'PEB Factory Shed',                 'Pre-engineered factory building with crane-compatible design and fire-rated cladding.', array['PEB','Factory','Crane Ready'], false),
('peb_shed', 'PEB Structural Shed',              'Structural steel shed with custom portal frame, engineered for wind and seismic loads.', array['PEB','Structural','IS Certified'], false),
('peb_shed', 'Poultry Shed',                     'Ventilated poultry farm shed with environment-control and corrosion-resistant cladding.', array['Poultry','Ventilated','Farm'], false),
('peb_shed', 'Steel Elevated Goat Farm Shed',    'Raised-platform goat farming shed with slotted flooring and drainage gutters.', array['Goat Farm','Elevated','Slotted Floor'], false),
('peb_shed', 'Tin Shed / Prefabricated Shelter', 'Low-cost GI tin sheet shelter for site offices, security cabins, and temporary storage.', array['Tin','Prefab','Low Cost'], false),
-- Fabrication
('fabrication', 'Shed Fabrication Service',           'End-to-end shed fabrication — design, material supply, erection, and commissioning.', array['Full Service','Erection','Commissioning'], true),
('fabrication', 'PEB Structures Designing Service',   'Structural design and detailing for pre-engineered buildings using STAAD.Pro and AutoCAD.', array['Design','STAAD.Pro','PE Stamped'], false),
('fabrication', 'Industrial Shed Construction',       'Turnkey industrial shed construction including civil works, structural steel, and roofing.', array['Turnkey','Civil','MEP'], false),
('fabrication', 'Heavy Structural Fabrication',       'Heavy steel structural fabrication including trusses, columns, beams, and complex assemblies.', array['Heavy','Truss','Columns'], false),
('fabrication', 'Roof Structural Fabrication',        'Roof truss fabrication, purlin supply, ridge ventilator installation, and roof-sheet fixing.', array['Roof','Truss','Ventilator'], false),
('fabrication', 'Prefabricated Industrial Structure', 'Factory-prefabricated steel modules — ready for site-erection with minimal on-site welding.', array['Prefab','Modular','Fast Erect'], false);

-- ─── SEED TESTIMONIALS ──────────────────────────────────────
insert into testimonials (author, company, rating, content) values
('Ramesh Reddy',    'Reddy Cold Storage, Medchal',   5, 'Excellent quality motorized rolling shutters installed across all 12 bays. Smooth operation, on-time delivery, and professional team. Highly recommended.'),
('Suresh Kumar',    'Kumar Textiles, Kukatpally',     5, '4 automatic shutters installed for our textile unit. Quality is top-notch and after-sales support is outstanding. Will use SMF again.'),
('Anjali Sharma',   'Sharma Industries, Patancheru',  5, 'PEB shed construction completed on time and within budget. Structural design team was very professional. Exactly what we needed.'),
('Mohammad Farooq', 'Farooq Warehousing, Uppal',      4, 'Good quality sliding gates for our warehouse complex. MS fabrication is solid and automatic operation is smooth. Overall satisfied.'),
('Priya Nair',      'Nair Auto Spares, LB Nagar',     5, 'Shop rolling shutters are perfect for our outlet. Very durable and gear mechanism works flawlessly even after 2 years. Great value.');
