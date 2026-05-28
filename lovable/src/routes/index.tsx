import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-training.jpg";
import { ArrowRight, ArrowUpRight, Check, Phone, Sparkles, ShieldCheck, Target, Trophy, Users, BookOpen, Briefcase, HeartPulse, Wrench, BarChart3, Megaphone, Truck, Lightbulb, ScrollText, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hikma Institute — B2B Training & Consulting in Saudi Arabia" },
      { name: "description", content: "Saudi Arabia's premier B2B training partner. Bespoke, TNA-driven learning solutions aligned with your strategy and Vision 2030." },
      { property: "og:title", content: "Hikma Institute — B2B Training & Consulting" },
      { property: "og:description", content: "Training that delivers results. 60+ enterprise clients, 12 domains, ISO 9001:2015 certified." },
    ],
  }),
  component: Index,
});

const clients = ["ARAMCO","SABIC","STC","SEC","NEOM","MAADEN","ACWA","RIYAD BANK","AL RAJHI","SNB","MOBILY","ZAIN","SAUDIA","SASO","TASNEE","SPL","SIPCHEM","ALMARAI","MAWANI","HASSANA"];

const industries = [
  { label: "Oil & Gas", count: "15+" },
  { label: "Banking & Finance", count: "12+" },
  { label: "Telecom", count: "8+" },
  { label: "Government", count: "10+" },
  { label: "Healthcare", count: "7+" },
  { label: "Logistics", count: "8+" },
];

const values = [
  { title: "Partnership", body: "We work as an extension of your team, building long-term relationships based on trust and mutual success." },
  { title: "Excellence", body: "We maintain the highest standards of quality, validated through ISO 9001:2015 certification." },
  { title: "Innovation", body: "We continuously embrace technology and modern pedagogical approaches while maintaining proven principles." },
  { title: "Integrity", body: "We operate with transparency and accountability, always putting the best interests of our clients first." },
];

const domains = [
  { icon: Briefcase, title: "Corporate Training", sub: "Leaders, L&D, HR & Engineering", body: "Comprehensive workforce development for leaders, managers, HR and engineers. Aligned with QIWA and IKTVA.", chips: ["ISO", "IRCA", "Exemplar Global"] },
  { icon: Trophy, title: "Leadership Development", sub: "New Leader & Executive Programs", body: "Transform emerging leaders into strategic executives through Harvard, Yale and Stanford-partnered programs.", chips: ["LDP®", "CSM", "Innovation Leader"] },
  { icon: Wrench, title: "Oil & Gas Training", sub: "Upstream · Midstream · Downstream · HSE", body: "Specialized energy sector training covering the full value chain. Accredited by NEBOSH, JOIFF, OSHA, IADC.", chips: ["NEBOSH", "JOIFF", "PMI"] },
  { icon: HeartPulse, title: "Medical Field Training", sub: "Clinical & Emergency Programs", body: "Life-saving clinical training including ATLS, BLS, ACLS, PALS, PHTLS. Accredited by Saudi Heart Association.", chips: ["ATLS", "BLS", "ACLS"] },
  { icon: Target, title: "Project Management", sub: "PMP, CAPM & Agile Certifications", body: "PMI-authorized training for project professionals. Covers Waterfall, Agile, Scrum and Kanban.", chips: ["PMP®", "CAPM®", "PgMP®"] },
  { icon: Users, title: "Human Resources", sub: "Talent, Compliance & Saudi Labor Law", body: "Equip HR teams with the tools to attract, develop and retain talent. Includes Qiwa compliance training.", chips: ["aPHR", "PHR", "SPHR"] },
  { icon: Sparkles, title: "Sales Excellence", sub: "B2B Sales & Negotiation Mastery", body: "Proven sales methodologies from value-based selling to advanced negotiation. Gartner, Huthwaite, Sandler.", chips: ["Challenger", "SPIN", "Sandler"] },
  { icon: BarChart3, title: "Finance & Accounting", sub: "CMA, CPA & Saudi VAT Compliance", body: "Financial management training from Harvard, MIT and Yale. Includes Saudi VAT and Zakat expertise.", chips: ["CMA®", "CPA", "CFA"] },
  { icon: Truck, title: "Logistics & Supply Chain", sub: "Procurement & Operations", body: "End-to-end supply chain and procurement training with MIT and Rutgers partnerships.", chips: ["CFDP", "CSCP", "CPSM"] },
  { icon: Megaphone, title: "Marketing & Digital", sub: "Digital Marketing & Analytics", body: "Comprehensive digital marketing programs from MIT Sloan and Yale. SEO, PPC, social and automation.", chips: ["DM Pro", "DM Expert"] },
  { icon: Lightbulb, title: "Team Building & Experiential", sub: "High-Performance Team Programs", body: "Beyond trust falls — immersive experiential learning that creates genuine connection and behavior change.", chips: ["Challenges", "Simulations", "CSR"] },
  { icon: ScrollText, title: "Procurement", sub: "Strategic Sourcing & Compliance", body: "Professional procurement training covering B2B contracting, supplier research and Saudi purchasing law.", chips: ["CPP", "CIPP", "CIP"] },
];

const programFilters = [
  ["All Programs", 28], ["Leadership", 3], ["HR", 3], ["Sales", 3], ["Finance", 2], ["Project Mgmt", 2],
  ["Oil & Gas", 3], ["Medical", 3], ["Marketing", 2], ["Supply Chain", 2], ["Team Building", 2], ["Soft Skills", 3],
] as const;

const programs = [
  { featured: true, title: "Leadership Development Program (LDP)®", cat: "Leadership", level: "Advanced", body: "A transformative program that equips emerging and mid-level leaders with the strategic mindset, emotional intelligence and practical tools to lead high-performing teams.", duration: "5 Days", mode: "In-Person · Blended", cert: "LDP® Certificate", topics: ["Authentic Leadership", "Emotional Intelligence", "Strategic Thinking", "+5 more"] },
  { title: "New Leader Accelerator", cat: "Leadership", level: "Foundation", body: "For newly promoted managers. Essential skills and frameworks to transition from individual contributor to people leader.", duration: "3 Days", mode: "In-Person · Virtual · Blended", cert: "Certified New Leader", topics: ["Leadership Transition", "Setting Goals", "Delegation", "+5 more"] },
  { featured: true, title: "Executive Leadership & Strategy", cat: "Leadership", level: "Executive", body: "Sharpens strategic acumen and equips senior leaders to drive organisational transformation aligned with Vision 2030.", duration: "3 Days", mode: "In-Person · Blended", cert: "Certified Strategic Manager", topics: ["Corporate Strategy", "Innovation Leadership", "Board Communication", "+5 more"] },
  { featured: true, title: "SHRM-CP Certification Prep", cat: "Human Resources", level: "Intermediate", body: "Comprehensive prep for the SHRM Certified Professional exam, covering all SHRM BoCK competencies for the Saudi & GCC HR landscape.", duration: "5 Days", mode: "In-Person · Virtual · Blended", cert: "SHRM-CP", topics: ["Leadership & Navigation", "Ethical Practice", "Business Acumen", "+6 more"] },
  { title: "HR Business Partner Masterclass", cat: "Human Resources", level: "Advanced", body: "Transition HR from an administrative function to a strategic business partner role driving measurable outcomes.", duration: "3 Days", mode: "In-Person · Blended", cert: "HRBP Certified", topics: ["HRBP Mindset", "HR Analytics", "Workforce Planning", "+5 more"] },
  { title: "Recruitment & Talent Acquisition", cat: "Human Resources", level: "Intermediate", body: "Full talent acquisition lifecycle from workforce planning to onboarding, with a focus on Saudisation and Qiwa.", duration: "2 Days", mode: "In-Person · Virtual", cert: "TA Practitioner", topics: ["Workforce Planning", "Competency Frameworks", "LinkedIn Recruiting", "+5 more"] },
  { featured: true, title: "B2B Sales Mastery", cat: "Sales", level: "Intermediate", body: "Transforms sales professionals from product-pushers to trusted business advisors using consultative, value-based selling.", duration: "3 Days", mode: "In-Person · Blended", cert: "Certified B2B Sales Professional", topics: ["Consultative Framework", "Prospecting", "SPIN Selling", "+6 more"] },
  { title: "Advanced Negotiation Mastery", cat: "Sales", level: "Advanced", body: "Based on Northwestern's Kellogg research. Psychological and tactical skills to negotiate complex deals with confidence.", duration: "2 Days", mode: "In-Person · Virtual", cert: "Certified Negotiation Professional", topics: ["Negotiation Psychology", "BATNA", "Creating Value", "+5 more"] },
  { title: "Challenger Sale Certification", cat: "Sales", level: "Advanced", body: "The #1 predictor of B2B sales success — teach, tailor and take control of the customer conversation.", duration: "2 Days", mode: "In-Person · Blended", cert: "Challenger Sale Certified", topics: ["Five Seller Profiles", "Teaching Pitch", "Tailoring", "+4 more"] },
];

const methodology = [
  { n: "01", kicker: "Deep Diagnostic", title: "Training Needs Analysis", body: "We go beyond surface-level assessments to identify skill gaps, performance barriers and strategic priorities — so training is targeted where it delivers the most impact." },
  { n: "02", kicker: "Customized Architecture", title: "Bespoke Program Design", body: "Every program is purpose-built. Blended learning journeys combining international content, local regulatory requirements and your company's culture." },
  { n: "03", kicker: "Expert Facilitation", title: "World-Class Delivery", body: "Our facilitators are seasoned industry practitioners. Delivery in-person, virtual or blended — at your location, our centre or worldwide." },
  { n: "04", kicker: "Demonstrable Results", title: "Measurement & ROI", body: "Rigorous pre- and post-training assessments, detailed reports and ROI analysis. Every initiative linked to your KPIs." },
];

const deliverables = ["Training Objectives", "Participants & Timesheets", "Pre & Post Assessment", "Lessons Learnt & Best Practices", "Recommendations & Way Forward", "Certificates", "Invoices & ROI Analysis"];

const advantages = [
  { stat: "100%", label: "Customized", title: "Bespoke TNA", body: "Deep analysis ensuring training is targeted where it's needed most." },
  { stat: "12+", label: "Domains", title: "Experiential Learning", body: "Programs designed for engagement that translates into on-the-job behavior change." },
  { stat: "50+", label: "Certifications", title: "Global Standards", body: "World-class content and certifications from leading universities and professional bodies." },
  { stat: "60+", label: "Enterprise Clients", title: "Local Expertise", body: "Unparalleled understanding of Qiwa, IKTVA and local content compliance." },
];

const comparison: Array<[string, string]> = [
  ["Customized, TNA-driven solutions", "Off-the-shelf, generic courses"],
  ["Focus on measurable ROI & business impact", "Focus on course completion only"],
  ["End-to-end partnership (analysis to impact)", "Transactional, one-off training events"],
  ["Blended learning journeys", "Traditional, lecture-based training"],
  ["Global standards with deep local insight", "Generic global or purely local providers"],
  ["World-class, experienced facilitators", "Inexperienced or junior trainers"],
];

const experiential = [
  { n: "01", title: "Indoor & Outdoor Leadership Challenges", body: "Complex problem-solving simulations and high-ropes courses — designed to test leadership, decision-making and resilience under pressure." },
  { n: "02", title: "Business Simulations & Gamification", body: "Run a virtual company, make strategic decisions and see the financial impact in a risk-free environment." },
  { n: "03", title: "Creative & Innovation Workshops", body: "Design thinking methodologies to break mental barriers and generate innovative solutions to real-world problems." },
  { n: "04", title: "Corporate Social Responsibility Activities", body: "Meaningful team experiences where employees give back to the community while building shared purpose." },
];

const universities = ["Harvard University", "Yale University", "Stanford University", "MIT", "University of Pennsylvania", "University of Michigan", "Northwestern", "Rice University", "University of Illinois"];

/* ============================ COMPONENTS ============================ */

function PillButton({ children, href = "#", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark" | "light" }) {
  const base = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:gap-3";
  const styles = variant === "dark"
    ? "bg-foreground text-background hover:bg-foreground/90"
    : "bg-card text-foreground border border-border hover:bg-muted";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
      {children}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-bold">H</div>
          <span className="text-lg font-bold tracking-tight">Hikma Institute</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="hover:text-muted-foreground">About</a>
          <a href="#domains" className="hover:text-muted-foreground">Domains</a>
          <a href="#programs" className="hover:text-muted-foreground">Programs</a>
          <a href="#approach" className="hover:text-muted-foreground">Approach</a>
          <a href="#contact" className="hover:text-muted-foreground">Contact</a>
        </nav>
        <PillButton href="#contact">Request Consultation</PillButton>
      </div>
    </header>
  );
}

function Hero() {
  const stats = [
    { value: "60+", label: "Enterprise Clients" },
    { value: "ISO", label: "9001:2015 Certified" },
    { value: "12", label: "Training Domains" },
    { value: "100%", label: "Customized" },
  ];
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 flex justify-center"><Eyebrow>Saudi Arabia's Premier B2B Training Partner</Eyebrow></div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
          Training that<br />delivers results.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We transform your workforce into a measurable competitive advantage through bespoke, TNA-driven learning solutions aligned with your strategic objectives and Saudi Vision 2030.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillButton href="#contact">Schedule a Consultation</PillButton>
          <PillButton href="#programs" variant="light">Explore Programs</PillButton>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm">
          <img src={heroImage} alt="Executive training session at Hikma Institute" width={1280} height={1280} className="aspect-[16/9] w-full object-cover" />
        </div>

        {stats.map((s, i) => {
          const positions = [
            "-left-4 top-12 md:-left-12",
            "-right-4 top-32 md:-right-10",
            "-left-2 bottom-16 md:-left-16",
            "-right-4 bottom-8 md:-right-16",
          ];
          const floats = i % 2 === 0 ? "float-slow" : "float-slower";
          return (
            <div key={s.label} className={`absolute ${positions[i]} ${floats} hidden rounded-2xl border border-border bg-card px-5 py-3 shadow-lg md:block`}>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TrustedBy() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Eyebrow>Trusted By</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl">60+ leading enterprises across the Kingdom</h2>
        <p className="mt-3 text-sm text-muted-foreground">Approved Vendor — QIWA & IKTVA Compliant</p>
      </div>
      <div className="relative mt-12 overflow-hidden">
        <div className="marquee gap-4 px-4">
          {row.map((c, i) => (
            <div key={i} className="shrink-0 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold tracking-wide">
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3 px-6">
        {industries.map((i) => (
          <div key={i.label} className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
            <span className="font-bold">{i.count}</span>
            <span className="text-muted-foreground">{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>About Hikma Institute</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Wisdom as the keystone of corporate excellence.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>
              At Hikma Institute, we don't just teach — we ignite curiosity, empower minds and sculpt futures. Our name, "Hikma," embodies wisdom, insight and the pursuit of excellence. Since 2020 we have been at the forefront of corporate learning and development in the region.
            </p>
            <p>
              We specialise in bespoke training solutions meticulously designed to align with your business objectives, ensuring every initiative delivers sustainable growth and a demonstrable return on investment. We are an approved vendor in <span className="font-semibold text-foreground">60+ leading companies</span> across the Kingdom.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <ShieldCheck className="h-5 w-5" />
                <div className="mt-3 text-sm font-semibold text-foreground">ISO 9001:2015 Certified</div>
                <div className="text-xs text-muted-foreground">Quality Management System</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <GraduationCap className="h-5 w-5" />
                <div className="mt-3 text-sm font-semibold text-foreground">Established 2020</div>
                <div className="text-xs text-muted-foreground">Kingdom of Saudi Arabia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-6">
              <div className="text-lg font-bold">{v.title}</div>
              <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-foreground p-8 text-background">
            <div className="text-xs uppercase tracking-wider opacity-70">Our Vision</div>
            <div className="mt-3 text-2xl font-bold">Illuminating pathways, transforming futures.</div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Our Mission</div>
            <div className="mt-3 text-2xl font-bold">Empowering minds, nurturing excellence, elevating futures.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Domains() {
  return (
    <section id="domains" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Training Programs</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">Comprehensive training across every domain.</h2>
          <p className="mt-4 text-muted-foreground">
            From technical certifications to leadership transformation — 12 domains, all customised to your objectives and aligned with Saudi Vision 2030.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {domains.map(({ icon: Icon, ...d }) => (
            <div key={d.title} className="group flex flex-col rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{d.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{d.sub}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {d.chips.map((c) => (
                  <span key={c} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our Programs</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold md:text-6xl">World-class training, built for your business.</h2>
          <p className="mt-4 text-muted-foreground">
            Browse 28 B2B training programs across 11 domains. Every program is customisable and can be delivered at your premises, our centre, or virtually.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {programFilters.map(([label, count], i) => (
            <button key={label} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${i === 0 ? "bg-foreground text-background" : "border border-border bg-card hover:bg-muted"}`}>
              {label} <span className="opacity-60">{count}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="flex flex-col rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                {p.featured && <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">★ Featured</span>}
                <span className="rounded-full border border-border px-3 py-1 text-xs">{p.cat}</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">{p.level}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
                <div><div className="text-muted-foreground">Duration</div><div className="mt-0.5 font-semibold">{p.duration}</div></div>
                <div><div className="text-muted-foreground">Delivery</div><div className="mt-0.5 font-semibold">{p.mode}</div></div>
                <div className="col-span-2"><div className="text-muted-foreground">Certification</div><div className="mt-0.5 font-semibold">{p.cert}</div></div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.topics.map((t) => (<span key={t} className="rounded-full bg-muted px-2.5 py-1 text-[11px]">{t}</span>))}
              </div>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all">
                View Program Details <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <PillButton href="#contact">Load More Programs</PillButton>
          <p className="text-sm text-muted-foreground">19 more programs available</p>
        </div>

        <div className="mt-16 rounded-[2rem] bg-foreground p-10 text-background md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-3xl font-bold md:text-4xl">Can't find what you're looking for?</h3>
              <p className="mt-3 max-w-xl text-sm opacity-80">
                We design bespoke training programs from scratch. Tell us your objectives and we'll build the perfect learning journey for your team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground">Request a Custom Program <ArrowRight className="h-4 w-4" /></a>
              <a href="tel:920014205" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold"><Phone className="h-4 w-4" /> Call: 9200 14205</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section id="approach" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our Methodology</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">The Hikma TNA-to-ROI framework.</h2>
          <p className="mt-4 text-muted-foreground">
            Effective training is a strategic intervention designed to address identified needs and produce measurable business outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {methodology.map((m) => (
            <div key={m.n} className="rounded-3xl border border-border bg-background p-6">
              <div className="text-5xl font-bold tracking-tighter text-muted-foreground/40">{m.n}</div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{m.kicker}</div>
              <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-border bg-background p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Every Engagement Includes</div>
              <h3 className="mt-3 text-2xl font-bold">Comprehensive training reports.</h3>
              <p className="mt-3 text-sm text-muted-foreground">Full transparency and accountability for every initiative, with detailed documentation that demonstrates value to your leadership team.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d} className="flex items-center gap-3 rounded-2xl bg-muted px-4 py-3">
                  <Check className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyHikma() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The Hikma Advantage</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">Why choose Hikma as your strategic partner.</h2>
          <p className="mt-4 text-muted-foreground">
            Choosing a training partner is a critical decision. It's about finding someone who understands your business, shares your commitment to excellence and delivers measurable results.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="rounded-3xl border border-border bg-card p-6">
              <div className="text-5xl font-bold tracking-tighter">{a.stat}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{a.label}</div>
              <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border">
          <div className="grid grid-cols-2 bg-foreground text-background">
            <div className="px-6 py-5 text-sm font-bold">Hikma Institute</div>
            <div className="px-6 py-5 text-sm font-bold opacity-70">Industry Standard</div>
          </div>
          {comparison.map(([a, b], i) => (
            <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
              <div className="flex items-start gap-3 px-6 py-5 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> {a}
              </div>
              <div className="px-6 py-5 text-sm text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  const items = [
    { title: "QIWA Partner", body: "Seamless training compliance reporting" },
    { title: "IKTVA Aligned", body: "In-Kingdom Total Value Add compliance" },
    { title: "Saudi Labor Law", body: "Full compliance training programs" },
    { title: "Local Content", body: "Applicable to all local content programs" },
  ];
  return (
    <section className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Saudi Market Expertise</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">Your Qiwa & IKTVA partner.</h2>
            <p className="mt-4 text-muted-foreground">
              We recognise the significance of compliance and the power of informed training decisions. We handle your Qiwa training-related requirements and ensure full alignment with IKTVA and local content programs.
            </p>
            <div className="mt-7"><PillButton href="#contact">Discuss Compliance Needs</PillButton></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border border-border bg-background p-5">
                <ShieldCheck className="h-5 w-5" />
                <div className="mt-3 text-sm font-bold">{i.title}</div>
                <div className="text-xs text-muted-foreground">{i.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experiential() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Experiential Learning</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">Beyond trust falls — building high-performance teams.</h2>
          <p className="mt-4 text-muted-foreground">
            Effective team building creates shared experiences that foster genuine connection, improve communication and build the foundation for collaborative, high-performing culture.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {experiential.map((e) => (
            <div key={e.n} className="rounded-3xl border border-border bg-card p-7">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold tracking-tighter text-muted-foreground/60">{e.n}</span>
                <h3 className="text-xl font-bold">{e.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnerships() {
  return (
    <section className="border-y border-border bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <Eyebrow>Global Network</Eyebrow>
        <h2 className="mt-5 text-3xl font-bold md:text-5xl">World-class partnerships, local expertise.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Our worldwide associations bring global best practices to the Saudi market.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {universities.map((u) => (
            <span key={u} className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold">{u}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[2rem] bg-foreground p-10 text-background md:grid-cols-[1fr_1fr] md:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-80">
              <span className="h-1.5 w-1.5 rounded-full bg-background" /> Contact
            </div>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">Let's design your team's next breakthrough.</h2>
            <p className="mt-4 text-sm opacity-80">
              Schedule a consultation with our team. We'll diagnose your training needs and design a bespoke program aligned with your strategy and Vision 2030.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="tel:920014205" className="flex items-center gap-3 opacity-90 hover:opacity-100"><Phone className="h-4 w-4" /> 9200 14205</a>
              <div className="flex items-center gap-3 opacity-90"><BookOpen className="h-4 w-4" /> Riyadh, Kingdom of Saudi Arabia</div>
              <div className="flex items-center gap-3 opacity-90"><ShieldCheck className="h-4 w-4" /> ISO 9001:2015 · QIWA · IKTVA</div>
            </div>
          </div>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="w-full rounded-2xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30" placeholder="Full name" />
              <input className="w-full rounded-2xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30" placeholder="Company" />
            </div>
            <input className="w-full rounded-2xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30" placeholder="Work email" />
            <input className="w-full rounded-2xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30" placeholder="Phone" />
            <textarea rows={4} className="w-full rounded-2xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30" placeholder="Tell us about your training objectives" />
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:gap-3">
              Request Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background text-sm font-bold">H</div>
          <span className="font-bold">Hikma Institute</span>
          <span className="text-sm text-muted-foreground">— Training & Consulting</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Hikma Institute. All rights reserved.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Domains />
        <Programs />
        <Methodology />
        <WhyHikma />
        <Compliance />
        <Experiential />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
