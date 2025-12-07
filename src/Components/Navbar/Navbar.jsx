import React, { useState } from 'react';
import { SiNike } from "react-icons/si";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMoonOutline, IoClose } from "react-icons/io5";
// آیکون منوی همبرگری
import { FiMenu } from "react-icons/fi"; 
import { useNavigate } from 'react-router';
import ThemeButton from '../ThemeButton';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const goToSignin = () => {
        navigate("/register")
    }
    // لیست لینک‌ها برای استفاده در منوی دسکتاپ و موبایل
    const navLinks = ['HOME', 'MAN', 'WOMAN', 'KIDS', 'COLLECTIONS', 'CONTACT'];
    
    // ارتفاع کل هدر ثابت (8px + 32px + 8px + 60px) تقریباً 108px است. 
    // این ارتفاع را به عنوان padding-top به بدنه اصلی صفحه بدهید تا محتوا زیر نوبار نرود.

    return (
        // حذف کلاس 'flex' اضافه و استفاده از 'sticky' برای چسبیدن به بالا
        <header className="sticky top-0 z-50 w-full bg-white"> 

            {/* --- Top Banner --- */}
            {/* حفظ استایل اصلی: bg-gray-200, py-1, justify-between, px-8 */}
            <div className="flex w-full bg-gray-200 dark:bg-neutral-900  py-1 justify-between px-4 sm:px-8">
                {/* در موبایل، متن کوتاه شده تا جا شود */}
                <p className="font-semibold text-xs sm:text-base truncate pr-2">
                    Just Landed: The Nike App. Learn More
                </p>
                {/* لینک‌های بالا در موبایل‌های خیلی کوچک مخفی می‌شوند */}
                <div className="hidden sm:flex gap-3 md:gap-6 font-semibold whitespace-nowrap text-sm">
                    <p className='cursor-pointer' onClick={goToSignin}>Sign in</p>
                    <p className='cursor-pointer'>Join Us</p>
                    {/* در موبایل آیکون یا کلمه Help را برای صرفه‌جویی در فضا نمایش می‌دهیم */}
                    <p className='cursor-pointer hidden md:block'>Help</p>
                    <p className='cursor-pointer md:hidden'>?</p>
                </div>
            </div>

            {/* --- Main Navbar (نوار اصلی) --- */}
            {/* حفظ استایل اصلی: border-y-2 fixed z-10 border-gray-400 px-8 ... */}
            {/* کلاس fixed و top-8 (ناشی از نوار بالایی) حذف شده و به sticky منتقل می‌شود */}
            <div className="w-full border-y-2 border-gray-400 dark:border-neutral-600 dark:bg-neutral-900  px-4 sm:px-8 flex items-center justify-between h-[60px] bg-white transition-all"> 

                {/* Left Side: Logo & Mobile Menu Button */}
                <div className='flex items-center'>
                    {/* Mobile Menu Toggle Button (فقط در تبلت و موبایل دیده می‌شود) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-3xl text-black mr-4"
                    >
                        {isMenuOpen ? <IoClose /> : <FiMenu />}
                    </button>

                    {/* Logo (با حفظ border و استایل) */}
                    <div className='text-4xl lg:text-6xl border-x-2 px-3 lg:px-5 dark:border-neutral-600 border-gray-400 cursor-pointer'>
                        <SiNike />
                    </div>
                </div>


                {/* Center: Navigation Links */}
                {/* لینک‌ها در موبایل/تبلت (زیر lg) مخفی می‌شوند (hidden) و در دسکتاپ نمایش داده می‌شوند (lg:flex) */}
                <div className="hidden lg:flex">
                    <ul className='flex gap-8 xl:gap-10 *:cursor-pointer
                        *:hover:text-gray-700 *:dark:hover:text-white *:transition-transform *:duration-400 
                        *:hover:scale-112 font-semibold text-base'>
                        {navLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>


                {/* Right Side: Icons (با حفظ border و استایل) */}
                <div className='flex items-center'>
                    {/* دکمه تم - با حفظ border-x-2 برای دکمه سمت چپ */}
                    <button className='border-x-2 border-gray-400 dark:border-neutral-600 flex  lg:p-3.5'>
                        <ThemeButton />
                    </button>
                    {/* دکمه سبد خرید - با حفظ border-r-2 */}
                    <button className='border-r-2 border-gray-400 dark:border-neutral-600 p-2 lg:p-3.5'>
                        <RiShoppingBagLine className='text-2xl lg:text-3xl hover:text-gray-700 dark:hover:text-white
                        transition-transform duration-400 hover:scale-110'
                        />
                    </button>
                </div>
            </div>
            
            {/* --- Mobile Menu Drawer (منوی کشویی موبایل/تبلت) --- */}
            {/* این منو در سایز بزرگ (lg) مخفی می‌شود */}
            <div className={`lg:hidden absolute w-full bg-white border-b dark:border-neutral-600 border-gray-400 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col p-6 text-base font-semibold text-black">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className="py-3 border-b dark:border-neutral-600 border-gray-200 cursor-pointer hover:text-gray-700 transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)} 
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;