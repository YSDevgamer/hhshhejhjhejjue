
import { Ingredient, FAQItem, Review } from './types';

export const PRODUCT_DATA = {
  name: "Gummies Shilajit 8 en 1 – la Vitalité Masculine, Immunité & Testostérone Naturelle",
  price: 450000,
  comparePrice: 540000,
  currency: "GNF",
  rating: 5.0,
  reviewCount: 12,
  images: [
    "https://vitamiam.shop/cdn/shop/files/xx52.jpg?v=1759401468&width=1080",
    "https://vitamiam.shop/cdn/shop/files/xx5.jpg?v=1759401468&width=1024",
    "https://vitamiam.shop/cdn/shop/files/xxx6.jpg?v=1759401468&width=1024",
    "https://vitamiam.shop/cdn/shop/files/xx7.jpg?v=1759401468&width=1024",
    "https://vitamiam.shop/cdn/shop/files/Ajouter-un-titre-_10.webp?v=1759401468&width=990"
  ]
};

export const INGREDIENTS: Ingredient[] = [
  {
    number: "01",
    title: "Shilajit pur",
    description: [
      "Riche en acide fulvique et minéraux essentiels.",
      "Aide à booster l’énergie cellulaire (ATP), réduit la fatigue chronique et améliore la récupération.",
      "Soutient la santé masculine, la vitalité et les performances physiques."
    ],
    image: "https://vitamiam.shop/cdn/shop/files/Shilajit_Benefits_for_Female_fc06609f-6ef1-49d1-aca3-714ffcdc3bd4.webp?v=1759271872&width=400"
  },
  {
    number: "02",
    title: "Ashwagandha pur",
    description: [
      "Réduit le stress et l’anxiété (diminue le cortisol).",
      "Améliore la concentration, la clarté mentale et la qualité du sommeil.",
      "Soutient la testostérone et la libido chez l’homme."
    ],
    image: "https://vitamiam.shop/cdn/shop/files/ChatGPT_Image_30_sept._2025_23_43_32.png?v=1759272227&width=1024"
  },
  {
    number: "03",
    title: "Rhodiola Rosea",
    description: [
      "Améliore la résistance au stress mental et physique.",
      "Augmente l’endurance, la concentration et la mémoire.",
      "Réduit la fatigue liée au surmenage."
    ],
    image: "https://vitamiam.shop/cdn/shop/files/Rhodiola_Extract.jpg?v=1759364027&width=1080"
  },
  {
    number: "04",
    title: "Panax Ginseng",
    description: [
      "Améliore la circulation sanguine et l’oxygénation des muscles.",
      "Boost l’énergie et la performance physique.",
      "Stimule la libido et améliore la vitalité masculine."
    ],
    image: "https://vitamiam.shop/cdn/shop/files/Panax_Ginseng.jpg?v=1759364098&width=1080"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Est-ce que ça marche vraiment ?",
    answer: "👉 Oui. Notre formule est conçue à partir d’ingrédients naturels reconnus pour stimuler la testostérone, améliorer l’énergie, la concentration et la performance masculine. Les résultats varient selon chaque personne, mais la majorité de nos clients constatent une nette amélioration dès les premières semaines."
  },
  {
    question: "En combien de temps je vais voir un résultat ?",
    answer: "⏳ Les effets varient selon chaque personne. Certains ressentent un regain d’énergie dès les premières semaines, tandis que d’autres constatent bienfaits plus visibles après 4 à 6 semaines d’utilisation régulière."
  },
  {
    question: "Est-ce que ce produit est HALAL ?",
    answer: "🕌 Oui, nos gummies sont formulés sans gélatine animale et utilisent des agents gélifiants d’origine végétale, ce qui les rend adaptés à une consommation halal."
  }
];

export const REVIEWS: Review[] = [
  {
    author: "Anouar",
    rating: 5,
    content: "Je cherchais un booster naturel de testostérone et celui-ci marche bien. Après trois semaines, je sens plus de force et plus d’endurance à la salle. Bon rapport qualité/prix.",
    date: "il y a 2 jours",
    image: "https://vitamiam.shop/cdn/shop/files/xx2.jpg?v=1759362156&width=430"
  },
  {
    author: "Rachid",
    rating: 5,
    content: "Ma femme m’a dit qu’elle sentait un vrai changement, j’ai plus d’énergie et plus de désir qu’avant. Je suis plus confiant, plus fort et même mon sommeil est meilleur. Très heureux de ce produit !",
    date: "il y a 5 jours",
    image: "https://vitamiam.shop/cdn/shop/files/WhatsApp_Image_2025-10-02_a_01.35.35_773f7d08.jpg?v=1759399535&width=3120"
  }
];
