import Avatar from '../../Atoms/Avatar';
import Brand from '../../Molecules/Brand';

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-1">
      <Brand />
      <Avatar src="https://image.slidesharecdn.com/bradfrost-atomicdesign-141016063737-conversion-gate02/85/brad-frost-atomic-design-webdagene-2014-1-320.jpg?cb=1667944412" />
    </div>
  );
};

export default Header;
