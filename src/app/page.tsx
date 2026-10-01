import ContactPreview from "@/components/home/ContactPreview";
import Hero from "@/components/home/Hero";
import EventsPreview from "@/components/home/EventsPreview";
import QuickLinks from "@/components/home/QuickLinks";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <QuickLinks />
      <EventsPreview />
      <ServicesPreview />
      <ResourcesPreview />
      <ContactPreview />
    </div>
  );
}
