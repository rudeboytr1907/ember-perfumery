# Ember Parfüm

Ücretsiz Vercel üzerinde yayınlanabilecek tek sayfalık parfüm katalog sitesi.

## Parfüm ekleme

Ürünler `app/page.tsx` içindeki `perfumes` listesinde tutulur. Yeni parfüm eklemek için listedeki örneklerden birini kopyalayıp değerleri değiştirin.

WhatsApp numarası da aynı dosyada `whatsappNumber` alanındadır. Numara ülke koduyla ve başında `+` olmadan yazılmalıdır.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Ücretsiz yayınlama

1. Projeyi GitHub'a yükleyin.
2. Vercel hesabı açın ve GitHub hesabınızı bağlayın.
3. Vercel'de `Add New Project` seçip bu repoyu seçin.
4. Framework otomatik `Next.js` görünür. Ek ayar yapmadan `Deploy` seçin.

`.next` ve `node_modules` klasörlerini GitHub'a yüklemeyin; bu proje için `.gitignore` zaten onları dışarıda bırakır.
