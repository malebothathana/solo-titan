 
// awareness.js

// --- Awareness Section Data Loader ---

function getAwarenessCards() {
  return [
    {
      title: "Proper Waste Sorting",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      topics: [
        "General Waste: Non-recyclable household waste",
        "Recyclable: Paper, plastic, glass, and metal",
        "Hazardous: Batteries, chemicals, and electronic waste"
      ]
    },
    {
      title: "Health Hazards of Unmanaged Waste",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop",
      topics: [
        "Spread of diseases through contaminated water and soil",
        "Air pollution from burning waste",
        "Attraction of pests and vermin",
        "Contamination of food sources",
        "Respiratory problems from toxic fumes"
      ]
    },
    {
      title: "Environmental Impact",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
      topics: [
        "Water pollution affecting marine life",
        "Soil contamination reducing agricultural productivity",
        "Greenhouse gas emissions contributing to climate change",
        "Destruction of natural habitats",
        "Accumulation of non-biodegradable materials"
      ]
    }
  ];
}

module.exports = {
  getAwarenessCards
};

// --- TEST CASES ---
//
// ✅ should return 3 awareness cards
// ✅ each card should have title, image, and topics
// ✅ each card should have at least 3 topics
// ✅ images should be valid HTTPS URLs
