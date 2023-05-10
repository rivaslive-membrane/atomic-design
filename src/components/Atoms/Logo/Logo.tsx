type LogoProps = {
  size?: number;
};

const Logo = ({ size }: LogoProps) => {
  return (
    <img
      src="/vite.svg"
      height={size}
      className="logo react"
      alt="React logo"
    />
  );
};

export default Logo;
