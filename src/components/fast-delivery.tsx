export function FastDelivery() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Hızlı Teslimat
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Siparişinizi aldıktan sonra en kısa sürede kapınıza getiriyoruz.
            Taze ve sıcak yemeklerinizi bekletmiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Kolay Sipariş
            </h3>
            <p className="text-muted-foreground">
              Birkaç tıklama ile siparişinizi verin
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Hızlı Hazırlık
            </h3>
            <p className="text-muted-foreground">
              Yemekleriniz özenle hazırlanıyor
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Hızlı Teslimat
            </h3>
            <p className="text-muted-foreground">30 dakika içinde kapınızda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
