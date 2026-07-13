import { ImageIcon } from "lucide-react";

const GRADIENTS = [
  "from-powder-pink via-rose-milk to-vanilla-dust",
  "from-vanilla-dust via-sand to-powder-pink",
  "from-rose-milk via-powder-pink to-sand",
  "from-sand via-vanilla-dust to-rose-milk",
];

type PlaceholderImageProps = {
  label: string;
  className?: string;
  variant?: number;
};

export default function PlaceholderImage({ label, className = "", variant = 0 }: PlaceholderImageProps) {
  const gradient = GRADIENTS[variant % GRADIENTS.length];

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 border-2 border-dashed border-white/50" aria-hidden="true" />
      <ImageIcon className="h-7 w-7 text-ink/40" aria-hidden="true" />
      <p className="max-w-[85%] text-xs font-medium text-ink/60">
        Replace photo: <span className="italic">{label}</span>
      </p>
    </div>
  );
}
