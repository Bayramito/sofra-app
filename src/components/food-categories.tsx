export function FoodCategories() {
  const categories = [
    {
      id: 1,
      name: "Burger",
      emoji: "🍔",
      description: "Lezzetli burgerler",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      name: "Pizza",
      emoji: "🍕",
      description: "Taze pizzalar",
      color: "from-red-400 to-pink-500",
    },
    {
      id: 3,
      name: "Patates Kızartması",
      emoji: "🍟",
      description: "Çıtır patates",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 4,
      name: "Salata",
      emoji: "🥗",
      description: "Sağlıklı salatalar",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 5,
      name: "İçecek",
      emoji: "🥤",
      description: "Soğuk içecekler",
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 6,
      name: "Tatlı",
      emoji: "🍰",
      description: "Lezzetli tatlılar",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            En İyi Teslimat Kategorileri
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Farklı lezzetler ve kategorilerde yemeklerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="text-2xl">{category.emoji}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
