import { Menu } from "@/components/Menu";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";
import { WaveBackground } from "@/components/WaveBackground";

export default function HomePage() {
  return (
    <>
      <WaveBackground />
      <Menu />
      <NewsletterSubscription />
    </>
  );
}
