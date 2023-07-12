import { WaveBackground } from "@/components/WaveBackground";
import { Menu } from "@/components/Menu";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";
import { HowTo } from "@/components/HowTo";
import { ProductOffers } from "@/components/ProductOffers";

export default function HomePage() {
  return (
    <>
      <WaveBackground />
      <Menu />
      <NewsletterSubscription />
      <main>
        <HowTo />
        <ProductOffers />
      </main>
    </>
  );
}
