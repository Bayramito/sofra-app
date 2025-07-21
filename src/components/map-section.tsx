"use client";

export function MapSection() {
  // Fonksiyonlar
  const handleGetDirections = () => {
    // Google Maps'te yol tarifi aç
    const address = "KapanaPlovdiv Center, ul. Zhelezarska 13, 4000 Plovdiv";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      "_blank"
    );
  };

  const handleCall = () => {
    // Telefon numarasını ara
    window.open("tel:+359888343459", "_self");
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lezzetli yemeklerimizi yerinde tatmak için restoranımıza uğrayın
            veya online sipariş vererek kapınıza kadar getirelim.
          </p>
        </div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="space-y-4">
            <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.275583369147!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOMKwNTgnNDIuMiJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sofra Restaurant Location"
                className="absolute inset-0"
              />
            </div>

            {/* Map Controls */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleGetDirections}
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <span className="mr-2">📍</span>
                Yol Tarifi Al
              </button>
              <button
                onClick={handleCall}
                className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors cursor-pointer"
              >
                <span className="mr-2">📞</span>
                Ara
              </button>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Adres
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    KapanaPlovdiv Center
                    <br />
                    ul. "Zhelezarska" 13
                    <br />
                    4000 Plovdiv
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    İletişim
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📞 +359 888 343 459</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Pazartesi - Pazar:</span>
                      <span>09:00 - 24:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Online Sipariş Avantajları
            </h3>
            <p className="text-muted-foreground">
              Restoranımıza gelmeden online sipariş vererek %10 indirim kazanın
              ve özel kampanyalardan ilk siz haberdar olun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
