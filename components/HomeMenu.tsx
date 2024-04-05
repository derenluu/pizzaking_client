import MenuItem from './MenuItem';
import SectionHeader from './SectionHeader';

const HomeMenu = () => {
  return (
    <>
      <section className="">
        <div className="text-center mb-4">
          <SectionHeader
            subHeader="Check Out"
            mainHeader="Menu"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </section>
    </>
  );
};

export default HomeMenu;
