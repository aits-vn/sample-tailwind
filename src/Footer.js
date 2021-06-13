/* eslint-disable */
import location from './images/location.png'
import calling from './images/calling.png'
import message from './images/message.png'
import logo2 from './images/logo2.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import youtube from './images/youtube.png'
import './Footer.css'

function Footer() {
  return (
	<>
		<div className="relative">
			<div className="absolute hinhcau w-96 h-96 top-0 right-0 transform -translate-x-16 translate-y-40 scale-125"></div>
			<div className="flex justify-center items-center bg-yellow-400 rounded-tl-full rounded-tr-full">
				<span className="p-5 text-2xl text-gray-700 font-medium tracking-wider">Tìm hiểu rõ hơn về chúng tôi và cùng hợp tác</span>
			</div>
			<div className="bg-green-900">
				<div className="container flex justify-around items-center mx-auto text-center">
					<div className="py-4 pr-4 w-1/5">
						<span className="inline-block mb-2 text-xl text-yellow-400 font-medium tracking-wider">MIỀN BẮC</span>
						<div className="flex text-left">
							<img className="inline-block h-4" src={location}/>
							<span className="ml-2 text-sm text-white tracking-wide">Số 412 Nguyễn Văn Cừ, Phường Bồ Đề, Quận Long Biên, TP Hà Nội</span>
						</div>
					</div>
					<span className="text-gray-400 text-4xl font-thin transform -translate-y-6 rotate-12 select-none">/</span>
					<div className="py-4 px-2 w-1/5">
						<span className="inline-block mb-2 text-xl text-yellow-400 font-medium tracking-wider">MIỀN TRUNG</span>
						<div className="flex text-left">
							<img className="inline-block h-4" src={location}/>
							<span className="ml-2 text-sm text-white tracking-wide">Tầng 2, Tòa nhà Trực thăng Miền Trung Sân bay Quốc tế Đà Nẵng, TP Đà Nẵng</span>
						</div>
					</div>
					<span className="text-gray-400 text-4xl font-thin transform -translate-y-6 rotate-12 select-none">/</span>
					<div className="py-4 px-6 w-1/4">
						<span className="inline-block mb-2 text-xl text-yellow-400 font-medium tracking-wider">MIỀN NAM</span>
						<div className="flex text-left">
							<img className="inline-block h-4" src={location}/>
							<span className="ml-2 text-sm text-white tracking-wide">Tầng 3, Tòa nhà VPCN Phía Nam, TCT HKVN, Số 49 Trường Sơn, Q. Tân Bình, TP HCM</span>
						</div>
					</div>
					<span className="text-gray-400 text-4xl font-thin transform -translate-y-6 rotate-12 select-none">/</span>
					<div className="py-4 px-6 w-1/5">
						<span className="inline-block mb-2 text-xl text-yellow-400 font-medium tracking-wider">HOTLINE</span>
						<div className="flex justify-around">
							<div>
								<img className="inline-block h-4" src={calling}/>
								<span className="ml-2 text-sm text-white tracking-wide">1900 98 98 66</span>
							</div>
							<div>
								<img className="inline-block h-4" src={message}/>
								<span className="ml-2 text-sm text-white tracking-wide">Ext: 9511</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-indigo-900">
				<div className="container mx-auto">
					<div className="flex justify-start items-baseline pt-8 pb-6 border-b border-gray-500">
						<img className="inline-block w-20" src={logo2} alt="" />
						<span className="ml-6 text-white font-semibold text-base">Công ty Cổ phần Tin học - Viễn thông Hàng không</span>
					</div>
					<div className="grid grid-cols-4 mt-8 pb-6 text-gray-400 border-b border-gray-500">
						<div className="space-y-2 w-4/6">
							<span className="block mb-6 text-lg text-yellow-400 font-semibold tracking-wider">DANH MỤC</span>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Trang chủ</a>
							</div>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Văn hóa doanh nghiệp</a>
							</div>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Tuyển dụng</a>
							</div>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Sản phẩm dịch vụ</a>
							</div>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Tin tức</a>
							</div>
						</div>
						<div className="space-y-2 w-4/6">
							<span className="block mb-6 text-lg text-yellow-400 font-semibold tracking-wider">SẢN PHẨM</span>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Dịch vụ Công nghệ Thông tin</a>
							</div>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Dịch vụ Xử lý dữ liệu</a>
							</div>
							<div className="border-b border-gray-600 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition duration-300">
								<a className="inline-block text-base mb-1 tracking-wider" href="#">Tư vấn Chuyển giao Công nghệ</a>
							</div>
						</div>
						<div className="space-y-6 w-4/6">
							<span className="block mb-6 text-lg text-yellow-400 font-semibold tracking-wider">KẾT NỐI VỚI CHÚNG TÔI</span>
							<div className="flex justify-between items-center">
								<a href="#"><img className="h-8" src={facebook} alt="" /></a>
								<a href="#"><img className="h-8" src={instagram} alt="" /></a>
								<a href=""><img className="h-10" src={youtube} alt="" /></a>
							</div>
							<div className="flex justify-between items-center text-white text-base">
								<div>
									<img className="inline-block" src={calling}/>
									<span className="ml-2">1900 98 98 66</span>
								</div>
								<div>
									<img className="inline-block" src={message}/>
									<span className="ml-2">Ext: 9511</span>
								</div>
							</div>
						</div>
						<div className="z-10">
							<span className="block mb-2 text-lg text-yellow-400 font-semibold tracking-wider">VIDEO AITS</span>
							<video controls="1">
								<source src="/aits.mp4" type="video/mp4"/>
							</video>
						</div>
					</div>
					<div className="pt-4 pb-16">
						<span className="text-white text-sm">&copy; 2021 Bản quyền bởi Công ty Cổ phần Tin học - Viễn thông Hàng không</span>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

export default Footer;
