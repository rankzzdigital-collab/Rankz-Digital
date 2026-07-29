export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  accentColor: string;
  glowClass: string;
  badge: string;
  description: string;
  benefits: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
  duration: string;
  icon: string;
}

export interface ValueProp {
  id: string;
  title: string;
  highlightText: string;
  description: string;
  icon: string;
  statNumber: string;
  statLabel: string;
}

export interface AuditFormData {
  websiteUrl: string;
  businessName: string;
  contactName: string;
  phoneOrWhatsapp: string;
  email: string;
  primaryGoal: 'SEO Ranking' | 'Google Ads ROI' | 'Meta Ads Growth' | 'Social Media Presence' | 'Full Digital Overhaul';
  monthlyBudget: string;
  additionalNotes: string;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappUrl: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}
