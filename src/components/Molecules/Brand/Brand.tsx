import Logo from '../../Atoms/Logo';
import Text from '../../Atoms/Text';

const Brand = () => {
  return (
    <div className="flex items-center gap-1">
      <Logo />
      <Text variant="h2">Vite + React</Text>
    </div>
  );
};

export default Brand;
