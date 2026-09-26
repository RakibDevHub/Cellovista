import {
    HardHat,
    FileCheck2,
    Plane,
    GraduationCap,
    Handshake,
    ShieldCheck,
} from "lucide-react";

export const COMPANY = {
    name: "Cellovista Group BD",
    legalName: "Cello Vista International",
    tagline: "Trusted International Recruitment Agency",
    license: "BAIRA RL-2037",
};

export const CONTACT = {
    phone: "+8801711169244",
    phoneDisplay: "+880 1711-169244",
    whatsapp: "8801711169244",
    email: "cellovistainternational@gmail.com",
    address:
        "H-80/1C, 5th Floor, Sainik Club More, Bir Uttam Ziaur Rahman Sarak, Banani, Dhaka-1213",
    facebook: "https://www.facebook.com/profile.php?id=100063520000931",
    mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Banani%2C+Dhaka+1213",
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello Cellovista Group BD! 👋\n\nI'd like to inquire about your overseas employment services.\n\n• Name: \n• Interested Country: \n• Job Category: \n\nCould you please share more details?"
);
export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}?text=${WHATSAPP_MESSAGE}`;

export const stats = [
    { number: "2037", label: "BAIRA License No." },
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Workers Placed" },
    { number: "20+", label: "Countries" },
];

export const services = [
    {
        icon: HardHat,
        title: "Skilled & Semi-Skilled Workers",
        description:
            "We recruit qualified professionals across construction, manufacturing, hospitality, healthcare, and technical trades for employers worldwide.",
    },
    {
        icon: FileCheck2,
        title: "Visa Processing & Documentation",
        description:
            "End-to-end assistance with visa applications, passport processing, medical clearances, and all legal documentation required for overseas employment.",
    },
    {
        icon: Plane,
        title: "Travel & Deployment Support",
        description:
            "We coordinate flight bookings, airport pickups, and on-arrival support to ensure a smooth transition for every worker we deploy.",
    },
    {
        icon: GraduationCap,
        title: "Pre-Departure Orientation",
        description:
            "Comprehensive briefings on destination culture, labor laws, workplace safety, and financial management for migrant workers.",
    },
    {
        icon: Handshake,
        title: "Employer Partnership",
        description:
            "We work closely with international employers to understand their manpower needs and deliver pre-screened, job-ready candidates.",
    },
    {
        icon: ShieldCheck,
        title: "Post-Deployment Support",
        description:
            "Our relationship doesn't end at deployment. We provide ongoing support to both workers and employers for successful placements.",
    },
];

export const processSteps = [
    {
        title: "Register",
        description:
            "Submit your application online or visit our Banani office to register your profile.",
    },
    {
        title: "Get Matched",
        description:
            "Our team reviews your skills and matches you with suitable overseas job opportunities.",
    },
    {
        title: "Complete Documentation",
        description:
            "We guide you through visa processing, medical tests, and all necessary paperwork.",
    },
    {
        title: "Deploy & Thrive",
        description:
            "Fly to your destination with confidence, backed by our ongoing support network.",
    },
];

export const whyUsPoints = [
    {
        title: "BAIRA Licensed Agency",
        description:
            "Fully compliant with Bangladesh government regulations (RL No. 2037).",
    },
    {
        title: "No Hidden Fees",
        description: "Transparent pricing with no surprise charges at any stage.",
    },
    {
        title: "Verified Employers Only",
        description:
            "We partner exclusively with reputable, vetted international companies.",
    },
    {
        title: "Dedicated Case Manager",
        description:
            "Every candidate gets a personal point of contact throughout the process.",
    },
];

// ⚠️ Replace with real team members before deploying
export const team = [
    {
        name: "Chairman / CEO",
        role: "Founder & Chairman",
        bio: "Leads the vision and strategic direction of Cellovista Group BD, with a focus on ethical recruitment and worker welfare.",
        image: "",
        socials: { linkedin: "", facebook: "", email: "" },
    },
    {
        name: "Managing Director",
        role: "Managing Director",
        bio: "Oversees daily operations, employer partnerships, and compliance with BAIRA and government regulations.",
        image: "",
        socials: { facebook: "", email: "" },
    },
    {
        name: "Operations Manager",
        role: "Operations Manager",
        bio: "Coordinates recruitment pipelines, deployment schedules, and post-placement support for workers.",
        image: "",
        socials: { email: "" },
    },
    {
        name: "Documentation Officer",
        role: "Documentation & Visa Officer",
        bio: "Handles visa processing, passport documentation, medical clearances, and government approvals.",
        image: "",
        socials: { email: "" },
    },
];

// ⚠️ Replace with real certificate scans
export const certificates = [
    {
        id: "baira",
        title: "BAIRA Membership",
        issuer: "Bangladesh Association of International Recruiting Agencies",
        regNo: "RL-2037",
        image: "/certificates/baira-license.jpg",
    },
    {
        id: "recruitment-license",
        title: "Recruitment License",
        issuer: "Ministry of Expatriates' Welfare & Overseas Employment",
        regNo: "RL-2037",
        image: "/certificates/recruitment-license.jpg",
    },
    {
        id: "trade-license",
        title: "Trade License",
        issuer: "Dhaka North City Corporation",
        regNo: "TRAD/DNCC/XXXXXX/2024",
        image: "/certificates/trade-license.jpg",
    },
    {
        id: "rjsc",
        title: "Certificate of Incorporation",
        issuer: "RJSC — Registrar of Joint Stock Companies",
        regNo: "C-XXXXXX/2024",
        image: "/certificates/rjsc.jpg",
    },
];

export type GalleryItem = {
    src: string;
    alt: string;
    category: "workers" | "tourists" | "office" | "events";
    featured?: boolean;
};

// ⚠️ Add real photos here
export const galleryItems: GalleryItem[] = [];

export const galleryCategories = [
    { id: "all", label: "All" },
    { id: "tourists", label: "Tourist" },
    { id: "workers", label: "Workers" },
    { id: "office", label: "Office" },
    { id: "events", label: "Events" },
] as const;

export const COMPANY_PROFILE = {
    url: "/cellovista-company-profile.pdf",
    filename: "Cellovista-Group-BD-Company-Profile.pdf",
    size: "~2.4 MB",
};

export const SERVICES_OPTIONS = [
    "General Inquiry",
    "Skilled / Semi-Skilled Worker",
    "Visa Processing & Documentation",
    "Travel & Deployment",
    "Employer Partnership",
    "Post-Deployment Support",
];