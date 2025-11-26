export interface PillProps {
  title: string;
}

// If you also want to include ButtonProps later
export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  styles?: string; //optional, nott a must we pass it
}



// What are Props?
// Props = data passed into a component.
// Example:
// username
// age
// image
// rating
// Props allow components to be reusable.
