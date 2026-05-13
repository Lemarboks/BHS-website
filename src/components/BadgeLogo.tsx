import badgeLogo from '../assets/images/bhs-badge.png';

type BadgeLogoProps = {
  className?: string;
};

export default function BadgeLogo({ className = '' }: BadgeLogoProps) {
  return (
    <span className={`badge-logo ${className}`.trim()} aria-hidden="true">
      <img src={badgeLogo} alt="" />
    </span>
  );
}
