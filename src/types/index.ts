export interface Particle {
  x: number;
  y: number;
  radius: number;
  type: 'light' | 'lantern';
  speedY: number;
  glow: string;
}

export interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
} 