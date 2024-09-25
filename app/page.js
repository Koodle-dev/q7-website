import { AboutUsSectionComponent } from "@/components/about-us-section";
import { ContactFormSectionComponent } from "@/components/contact-form-section";
import { HeroSectionComponent } from "@/components/hero-section";
import { PackagesSectionComponent } from "@/components/packages-section";
import { ServicesSectionComponent } from "@/components/services-section";
import { TestimonialsSectionComponent } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <AboutUsSectionComponent />
      <ServicesSectionComponent />
      <PackagesSectionComponent />
      <TestimonialsSectionComponent />
      <ContactFormSectionComponent />
    </div>
  );
}
