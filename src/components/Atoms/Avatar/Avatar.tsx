type AvatarProps = {
  src: string;
};

const Avatar = ({ src }: AvatarProps) => {
  const sizeClass = `w-[45px] h-[45px]`;
  const className = `rounded-full ${sizeClass}`;
  
  return (
    <div className={className}>
      <img className={`w-full h-full object-cover rounded-full`} src={src} alt="" />
    </div>
  );
};

export default Avatar;
