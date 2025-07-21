export function RegularMenu() {
  const menuItems = [
    {
      id: 1,
      name: "Klasik Burger",
      description: "Dana eti, marul, domates, soğan, özel sos",
      price: "₺45",
      image: "🍔",
      category: "Burger",
      rating: 4.8,
      deliveryTime: "25-30 dk",
    },
    {
      id: 2,
      name: "Margarita Pizza",
      description: "Domates sosu, mozzarella peyniri, fesleğen",
      price: "₺65",
      image: "🍕",
      category: "Pizza",
      rating: 4.9,
      deliveryTime: "30-35 dk",
    },
    {
      id: 3,
      name: "Çıtır Patates",
      description: "Altın sarısı çıtır patates kızartması",
      price: "₺25",
      image: "🍟",
      category: "Yan Ürün",
      rating: 4.6,
      deliveryTime: "20-25 dk",
    },
    {
      id: 4,
      name: "Sezar Salata",
      description: "Marul, tavuk, parmesan, kruton, sezar sos",
      price: "₺35",
      image: "🥗",
      category: "Salata",
      rating: 4.7,
      deliveryTime: "15-20 dk",
    },
    {
      id: 5,
      name: "Chicken Wings",
      description: "6 adet baharatlı tavuk kanadı",
      price: "₺40",
      image: "🍗",
      category: "Tavuk",
      rating: 4.8,
      deliveryTime: "25-30 dk",
    },
    {
      id: 6,
      name: "Çikolatalı Pasta",
      description: "Zengin çikolata soslu pasta dilimi",
      price: "₺30",
      image: "🍰",
      category: "Tatlı",
      rating: 4.9,
      deliveryTime: "20-25 dk",
    },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Düzenli Menümüz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En popüler ve lezzetli yemeklerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">{item.image}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-foreground text-lg mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {item.price}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    🕒 {item.deliveryTime}
                  </span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            Tüm Menüyü Gör
          </button>
        </div>
      </div>
    </section>
  );
}
