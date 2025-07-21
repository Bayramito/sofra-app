import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-primary">Sofra App</h1>
          <p className="text-muted-foreground mt-2">
            Modern yemek sipariş uygulaması
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hoş Geldiniz
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tailwind CSS v4 ile yapılandırılmış modern tasarım sistemi
            </p>
          </section>

          {/* Color Palette Demo */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Renk Paleti</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                <div className="font-medium">Primary</div>
                <div className="text-sm opacity-90">#2563eb</div>
              </div>
              <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
                <div className="font-medium">Secondary</div>
                <div className="text-sm opacity-90">#f1f5f9</div>
              </div>
              <div className="bg-accent text-accent-foreground p-4 rounded-lg">
                <div className="font-medium">Accent</div>
                <div className="text-sm opacity-90">#f59e0b</div>
              </div>
              <div className="bg-muted text-muted-foreground p-4 rounded-lg">
                <div className="font-medium">Muted</div>
                <div className="text-sm opacity-90">#f8fafc</div>
              </div>
              <div className="bg-success text-success-foreground p-4 rounded-lg">
                <div className="font-medium">Success</div>
                <div className="text-sm opacity-90">#10b981</div>
              </div>
              <div className="bg-warning text-warning-foreground p-4 rounded-lg">
                <div className="font-medium">Warning</div>
                <div className="text-sm opacity-90">#f59e0b</div>
              </div>
              <div className="bg-destructive text-destructive-foreground p-4 rounded-lg">
                <div className="font-medium">Destructive</div>
                <div className="text-sm opacity-90">#ef4444</div>
              </div>
              <div className="bg-card text-card-foreground border border-border p-4 rounded-lg">
                <div className="font-medium">Card</div>
                <div className="text-sm opacity-90">Background</div>
              </div>
            </div>
          </section>

          {/* Typography Demo */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">
              Tipografi (Inter Font)
            </h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold">Başlık 1 - Bold</h1>
                <p className="text-sm text-muted-foreground">Inter Bold, 4xl</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Başlık 2 - SemiBold</h2>
                <p className="text-sm text-muted-foreground">
                  Inter SemiBold, 3xl
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Başlık 3 - Medium</h3>
                <p className="text-sm text-muted-foreground">
                  Inter Medium, 2xl
                </p>
              </div>
              <div>
                <p className="text-lg">Normal paragraf metni - Regular</p>
                <p className="text-sm text-muted-foreground">
                  Inter Regular, lg
                </p>
              </div>
              <div>
                <p className="text-base italic">İtalik metin örneği</p>
                <p className="text-sm text-muted-foreground">
                  Inter Italic, base
                </p>
              </div>
            </div>
          </section>

          {/* Dark Mode Toggle Info */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Dark Mode</h3>
            <p className="text-muted-foreground mb-4">
              Sistem tercihinize göre otomatik olarak dark mode aktif olur.
              Tarayıcınızın dark mode ayarını değiştirerek test edebilirsiniz.
            </p>
            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                Primary Button
              </div>
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md">
                Secondary Button
              </div>
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-md">
                Accent Button
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2024 Sofra App. Tailwind CSS v4 ile geliştirilmiştir.
          </p>
        </div>
      </footer>
    </div>
  );
}
