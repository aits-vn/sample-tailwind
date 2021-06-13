/* eslint-disable */
import logo from './images/logo.png';
import './Header.css'

function Header() {
  return (
    <>
		<div className="text-right p-2 pr-40 bg-yellow-400 text-sm text-gray-800">
			<p>Liên hệ hợp tác: <strong className="font-bold">1900 98 98 66</strong></p>
		</div>
		<div className="flex justify-between items-center p-4 bg-white">
			<img className="w-40 h-20 ml-44" src={logo} alt="logo"/>
			<div className="space-x-6 pr-36 text-lg text-gray-600">
				<div className="inline-block hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300">
					<a href="#">Trang chủ</a>
				</div>
				<div className="inline-block hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300">
					<a href="#">Về AITS</a>
				</div>
				<div className="inline-block hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300">
					<a href="#">Sản phẩm</a>
				</div>
				<div className="inline-block hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300">
					<a href="#">Tin tức</a>
				</div>
				<div className="inline-block hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300">
					<a href="#">Tuyển dụng</a>
				</div>
				<div className="inline-block hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300">
					<a href="#">Liên hệ</a>
				</div>
				<div class="inline-block">
					<select type="text" class="appearance-none outline-none hover:bg-yellow-400 hover:text-gray-700 px-4 py-2 w-20 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl transition duration-300 cursor-pointer">
						<option>VIE</option>
						<option>ENG</option>
					</select>
					<div className="inline-block signupselect w-4 h-4 -ml-6"></div>
				</div>
			</div>
		</div>
    </>
  );
}

export default Header;
