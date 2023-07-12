import { WaveBackground } from "@/components/WaveBackground";
import { Menu } from "@/components/Menu";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";
import { HowTo } from "@/components/HowTo";

export default function HomePage() {
  return (
    <>
      <WaveBackground />
      <Menu />
      <NewsletterSubscription />
      <main>
        <HowTo />
      </main>
    </>
  );
}
