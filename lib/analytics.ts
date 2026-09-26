type GTagEvent = {
    action: string;
    category: string;
    label?: string;
    value?: number;
};

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export function track({ action, category, label, value }: GTagEvent) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
}