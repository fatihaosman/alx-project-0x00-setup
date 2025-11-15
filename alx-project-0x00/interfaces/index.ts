export interface PillProps {
  title: string;
}

// If you also want to include ButtonProps later
export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  Styles?: string;
}
