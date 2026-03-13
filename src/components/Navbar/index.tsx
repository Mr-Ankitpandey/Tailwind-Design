import Logo from '../../assets/icons/Logo.png'
import Button from '../base/Button'
import SearchIcon from '../../assets/icons/search-normal.png'
import BagIcon from '../../assets/icons/bag-2.png'
import HeartIcon from '../../assets/icons/navheart.svg'
import ProfileIcon from '../../assets/icons/profile.png'
import menuIcon from '../../assets/icons/category.svg'

const menuIcons: string[]  = ['Women', 'Men', 'New', 'Kiddies', 'Popular']

const Navbar = () => {
  return (
    <div className='flex flex-col gap-8.5 px-4.5 py-5'   id='home'>
      <div className='flex justify-between'>
        <div >
          <img className='w-43.75' src={Logo} alt='Logo' />
        </div>

        <div className='hidden lg:flex gap-8 text-[25px] border-none'>
          <a href='#home'>Home</a>
          <a href='#shop'>Shop</a>
          <a href='#spa'>Spa</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </div>

        <div className='hidden lg:flex gap-5' >
          <Button>
            <img src={BagIcon} alt="BagIcon" />
          </Button>
          <Button>
            <img src={HeartIcon} alt="HeartIcon" />
          </Button>
          <Button>
            <img src={ProfileIcon} alt="ProfileIcon" />
          </Button>
        </div>

        <Button className='block lg:hidden'>
          <img className='w-10' src={menuIcon} alt='menuIcon'/>
        </Button>
      </div>

      <div className='hidden md:flex justify-between'>
        <div className='flex gap-3'>
          {menuIcons.map((menu)=>(
            <Button className='px-2.5 py-3.75 bg-[#EFEFEF] md:text-[18px] lg:text-[25px] rounded-[5px]'>{menu}</Button>
          ))}
        </div>
        <div>
          <Button>
            <img src={SearchIcon} alt='search-logo' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
