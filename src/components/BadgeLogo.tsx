import { images } from '../data';

type BadgeLogoProps = {
  className?: string;
};

export default function BadgeLogo({ className = '' }: BadgeLogoProps) {
  return (
    <span className={`badge-logo ${className}`.trim()} aria-hidden="true">
      <img src={images.logo} alt="" />
    </span>
  );
}
