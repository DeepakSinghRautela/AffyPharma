export interface Product {
  id: string;
  name: string;
  category: string;
  strength: string;
  packing: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  // ================= INJECTABLES =================
  {
    id: "inj-01",
    name: "Ceftriaxone Injection",
    category: "Injectables",
    strength: "1 g",
    packing: "Vial",
    image: "https://images.unsplash.com/photo-1582719478185-2f8b1c1e6c4a?auto=format&fit=crop&w=600&q=80",
    description: "Broad spectrum cephalosporin antibiotic injection used for severe bacterial infections."
  },
  {
    id: "inj-02",
    name: "Meropenem Injection",
    category: "Injectables",
    strength: "500 mg",
    packing: "Vial",
    image: "https://images.unsplash.com/photo-1582719201952-ea63ac1671dc?auto=format&fit=crop&w=600&q=80",
    description: "Carbapenem antibiotic injection for life-threatening infections."
  },
  {
    id: "inj-03",
    name: "Pantoprazole Injection",
    category: "Injectables",
    strength: "40 mg",
    packing: "Vial",
    image: "https://images.unsplash.com/photo-1582719368251-3f3a3c2c6e2d?auto=format&fit=crop&w=600&q=80",
    description: "Proton pump inhibitor injection used to reduce gastric acid secretion."
  },
  {
    id: "inj-04",
    name: "Ondansetron Injection",
    category: "Injectables",
    strength: "4 mg",
    packing: "Ampoule",
    image: "https://images.unsplash.com/photo-1603398938378-e54b1c0c0f09?auto=format&fit=crop&w=600&q=80",
    description: "Antiemetic injection used to prevent nausea and vomiting."
  },

  // ================= TABLETS =================
  {
    id: "tab-01",
    name: "Paracetamol Tablets",
    category: "Tablets",
    strength: "500 mg",
    packing: "10x10 Blister",
    image: "https://images.unsplash.com/photo-1582719478170-2f8b1c1e6c4b?auto=format&fit=crop&w=600&q=80",
    description: "Analgesic and antipyretic tablet used for pain and fever."
  },
  {
    id: "tab-02",
    name: "Ibuprofen Tablets",
    category: "Tablets",
    strength: "400 mg",
    packing: "10x10 Blister",
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=600&q=80",
    description: "Non-steroidal anti-inflammatory drug used to relieve pain and inflammation."
  },
  {
    id: "tab-03",
    name: "Amlodipine Tablets",
    category: "Tablets",
    strength: "5 mg",
    packing: "10x10 Blister",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    description: "Calcium channel blocker used to treat high blood pressure."
  },

  // ================= CAPSULES =================
  {
    id: "cap-01",
    name: "Amoxicillin Capsules",
    category: "Capsules",
    strength: "250 mg",
    packing: "10x10 Blister",
    image: "https://images.unsplash.com/photo-1582719478188-2f8b1c1e6c4d?auto=format&fit=crop&w=600&q=80",
    description: "Penicillin antibiotic capsule used to treat bacterial infections."
  },
  {
    id: "cap-02",
    name: "Omeprazole Capsules",
    category: "Capsules",
    strength: "20 mg",
    packing: "10x10 Blister",
    image: "https://images.unsplash.com/photo-1603398938482-47c7c8c04a3e?auto=format&fit=crop&w=600&q=80",
    description: "Proton pump inhibitor capsule used for acid reflux and ulcers."
  },

  // ================= SYRUPS =================
  {
    id: "syr-01",
    name: "Cough Syrup",
    category: "Syrups",
    strength: "100 ml",
    packing: "Bottle",
    image: "https://images.unsplash.com/photo-1582719478191-2f8b1c1e6c4e?auto=format&fit=crop&w=600&q=80",
    description: "Used for relief from dry and productive cough."
  },
  {
    id: "syr-02",
    name: "Paracetamol Syrup",
    category: "Syrups",
    strength: "125 mg / 5 ml",
    packing: "Bottle",
    image: "https://images.unsplash.com/photo-1620916566548-ec8c2fbd8c47?auto=format&fit=crop&w=600&q=80",
    description: "Pediatric analgesic syrup for fever and pain."
  },

  // ================= OINTMENTS =================
  {
    id: "oint-01",
    name: "Diclofenac Gel",
    category: "Ointments",
    strength: "30 g",
    packing: "Tube",
    image: "https://images.unsplash.com/photo-1582719478195-2f8b1c1e6c4f?auto=format&fit=crop&w=600&q=80",
    description: "Topical anti-inflammatory gel for pain relief."
  },
  {
    id: "oint-02",
    name: "Clotrimazole Cream",
    category: "Ointments",
    strength: "15 g",
    packing: "Tube",
    image: "https://images.unsplash.com/photo-1603398938424-10c1e6a8e2b3?auto=format&fit=crop&w=600&q=80",
    description: "Antifungal cream used to treat skin infections."
  }
];
