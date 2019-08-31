router.get('/tickerImport', (res, req) => {
  var data =  [{
 	"code": "1PAY",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "1PAY: OTC D - CTCP 1PAY"
 }, {
 	"code": "2TCORP",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "2TCORP: OTC C - CTCP Kỹ thuật Công trình Việt Nam"
 }, {
 	"code": "A15",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "A15: OTC C - Công ty cổ phần OTO 1-5"
 }, {
 	"code": "AAAI",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "AAAI: OTC C - CTCP Bảo hiểm AAA"
 }, {
 	"code": "AAFC",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "AAFC: OTC C - CTCP Xây dựng và Kiến trúc AA"
 }, {
 	"code": "AASC",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "AASC: OTC C - CTCP Chứng khoán Á - Âu"
 }, {
 	"code": "ABBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ABBANK: OTC A - Ngân hàng TMCP An Bình"
 }, {
 	"code": "ABCG",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "ABCG: OTC D - CTCP Truyền thông ABC"
 }, {
 	"code": "ABCI",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "ABCI: OTC D - CTCP Liên Doanh Quốc Tế ABC"
 }, {
 	"code": "ABFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ABFM: OTC A - CTCP Quản Lý Quỹ Đầu Tư Chứng Khoán An Bình"
 }, {
 	"code": "ABSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ABSC: OTC A - CTCP Chứng khoán An Bình"
 }, {
 	"code": "ACC245",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "ACC245: OTC D - Công ty cổ phần ACC245"
 }, {
 	"code": "ACC78",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "ACC78: OTC D - CTCP Xi măng ACC-78"
 }, {
 	"code": "ACCCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ACCCO: OTC A - CTCP Tư vấn Kiến trúc và Xây dựng Tp. Hồ Chí Minh"
 }, {
 	"code": "ACSVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ACSVN: OTC A - CTCP ACS Việt Nam"
 }, {
 	"code": "ADCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ADCC: OTC A - CTCP Xây dựng Trang trí Kiến trúc ADC"
 }, {
 	"code": "AESC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AESC: OTC A - CTCP XNK Nông sản và Thưc Phẩm Sài Gòn"
 }, {
 	"code": "AGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGC: OTC A - CTCP Cà Phê An Giang"
 }, {
 	"code": "AGD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGD: OTC A - CTCP Gò Đàng"
 }, {
 	"code": "AGJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGJC: OTC A - Tổng Công ty Cổ phần Vàng Agribank Việt Nam - AJC"
 }, {
 	"code": "AGMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGMC: OTC A - Công ty CP Cơ khí An Giang"
 }, {
 	"code": "AGPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGPC: OTC A - CTCP Cảng An Giang - AGP"
 }, {
 	"code": "AGRC",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "AGRC: OTC C - CTCP Địa ốc An Giang"
 }, {
 	"code": "Agribank",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "Agribank: OTC B - Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam"
 }, {
 	"code": "AGRIMEXCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGRIMEXCM: OTC A - CTCP XNK Nông sản Thực phẩm Cà Mau"
 }, {
 	"code": "AGTC",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "AGTC: OTC C - CTCP Du lịch An Giang - ANGIANG TOURIMEX"
 }, {
 	"code": "AGTEX28",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AGTEX28: OTC A - Công ty 28 - AGTEX"
 }, {
 	"code": "AIRSERCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AIRSERCO: OTC A - CTCP Cung ứng Dịch vụ Hàng không"
 }, {
 	"code": "ALKH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ALKH: OTC A - Công ty CP nhôm Khánh Hòa"
 }, {
 	"code": "ALP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ALP: OTC A - CTCP Đầu Tư Alphanam"
 }, {
 	"code": "ALSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ALSC: OTC A - CTCP Logistic Hàng Không (ALS)"
 }, {
 	"code": "ALSIMEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ALSIMEXCO: OTC A - CTCP Cung ứng &amp; XNK Lao động Hàng không Việt Nam"
 }, {
 	"code": "ALTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ALTC: OTC A - CTCP Âu Lạc"
 }, {
 	"code": "AMCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AMCC: OTC A - CTCP Khoáng Sản Á Châu"
 }, {
 	"code": "AMIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AMIC: OTC A - CTCP Đầu tư AMIC"
 }, {
 	"code": "AMIGO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AMIGO: OTC A - Công ty Cổ phần Công nghệ Bằng Hữu"
 }, {
 	"code": "AMPHARCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AMPHARCO: OTC A - CTCP Dược Phẩm Việt Nam - Ampharco"
 }, {
 	"code": "APC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "APC1: OTC A - CTCP An Phú"
 }, {
 	"code": "APLACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "APLACO: OTC A - CTCP Nhựa cao cấp Hàng Không"
 }, {
 	"code": "APSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "APSC: OTC A - CTCP Chứng khoán ALPHA"
 }, {
 	"code": "APYB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "APYB: OTC A - CTCP Nhựa và Khoáng sản An Phát - Yên Bái"
 }, {
 	"code": "ARTEXPORT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ARTEXPORT: OTC A - CTCP Xuất nhập khẩu Thủ công mỹ nghệ"
 }, {
 	"code": "ARTEXSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ARTEXSG: OTC A - CTCP Xuất nhập khẩu hàng tiểu thủ công nghiệp Sài Gòn"
 }, {
 	"code": "ARTEXTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ARTEXTL: OTC A - CTCP Xuất Nhập khẩu Mỹ Nghệ Thăng Long"
 }, {
 	"code": "ASAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASAC: OTC A - CTCP Tơ tằm Á Châu"
 }, {
 	"code": "ASCH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASCH: OTC A - CTCP Hóa Chất  Á Châu - ACC"
 }, {
 	"code": "ASECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASECO: OTC A - Công ty cổ phần 32"
 }, {
 	"code": "ASGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASGC: OTC A - CTCP Dịch Vụ Sân Bay"
 }, {
 	"code": "ASHIMA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASHIMA: OTC A - CTCP Thương mại Dịch vụ Cổng Vàng"
 }, {
 	"code": "ASIAGF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASIAGF: OTC A - Quỹ Đầu Tư Tăng Trưởng ACB"
 }, {
 	"code": "ASIAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASIAS: OTC A - CTCP Chứng khoán ASC"
 }, {
 	"code": "ASIAVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ASIAVN: OTC A - CTCP Quạt Việt Nam (ASIAVina)"
 }, {
 	"code": "ATSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ATSC: OTC A - CTCP Chứng khoán An Thành"
 }, {
 	"code": "AVICON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AVICON: OTC A - CTCP Công trình Hàng không"
 }, {
 	"code": "AVS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "AVS: OTC A - CTCP Chứng Khoán Âu Việt"
 }, {
 	"code": "BABANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BABANK: OTC A - Ngân hàng TMCP Bắc Á"
 }, {
 	"code": "BAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BAM: OTC A - CTCP Khoáng Sản và Luyện Kim Bắc Á"
 }, {
 	"code": "BAOKIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BAOKIM: OTC A - Công ty Cổ phần Thương mại điện tử Bảo Kim"
 }, {
 	"code": "BAROTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BAROTEX: OTC A - CTCP Thương mại và Đầu tư Barotex Việt Nam"
 }, {
 	"code": "BAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BAS: OTC A - CTCP Basa"
 }, {
 	"code": "BASEAFOOD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BASEAFOOD: OTC A - CTCP Chế biến XNK Thủy Sản Tỉnh Bà Rịa - Vũng Tàu"
 }, {
 	"code": "BATM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BATM: OTC A - CTCP Vật Tư Kỹ thuật Nông nghiệp Bình Định"
 }, {
 	"code": "BAVICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BAVICO: OTC A - Công ty Cổ phần Nhựa Bảo Vân"
 }, {
 	"code": "BAWACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BAWACO: OTC A - CTCP Cấp nước Bạc Liêu"
 }, {
 	"code": "BBCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BBCC: OTC A - CTCP Xây dựng và Sản xuất Vật liệu Xây dựng Biên Hòa"
 }, {
 	"code": "BBDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BBDC: OTC A - CTCP  Bao bì Dược"
 }, {
 	"code": "BC14",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BC14: OTC A - Công ty cổ phần Cầu số 14"
 }, {
 	"code": "BCFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BCFC: OTC A - CTCP Thực phẩm Bích Chi"
 }, {
 	"code": "BCMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BCMC: OTC A - Công ty CP Vật liệu xây dựng và khoáng sản Bình Thuận"
 }, {
 	"code": "BCRES",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BCRES: OTC A - CTCP Thương mại và Địa ốc Bình Chánh"
 }, {
 	"code": "BD10",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BD10: OTC A - CTCP Bạch Đằng 10"
 }, {
 	"code": "BDCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BDCC: OTC A - Tổng công ty xây dựng Bạch Đằng"
 }, {
 	"code": "BDHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BDHC: OTC A - CTCP Thủy điện Bình Điền"
 }, {
 	"code": "BDSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BDSG: OTC A - CTCP Đường Bình Định"
 }, {
 	"code": "BESEACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BESEACO: OTC A - CTCP Thủy sản Bến Tre"
 }, {
 	"code": "BESUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BESUCO: OTC A - CTCP Mía đường Bến Tre"
 }, {
 	"code": "BETA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BETA: OTC A - CTCP Chứng khoán Beta"
 }, {
 	"code": "BFIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BFIC: OTC A - CTCP Đầu tư Tài chính BIDV"
 }, {
 	"code": "BGMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BGMC: OTC A - CTCP Khoáng sản Bắc Giang"
 }, {
 	"code": "BHVA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BHVA: OTC A - CTCP Bảo hiểm Hùng Vương"
 }, {
 	"code": "BIANFISHCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIANFISHCO: OTC A - CTCP Thủy sản Bình An"
 }, {
 	"code": "BIBE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIBE: OTC A - Công ty CP Sách - thiết bị giáo dục Bình Dương"
 }, {
 	"code": "BICICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BICICO: OTC A - Công ty CP công nghiệp Hóa Chất và Vi Sinh"
 }, {
 	"code": "BICONSI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BICONSI: OTC A - CTCP Xây dựng Tư vấn Đầu tư Bình Dương"
 }, {
 	"code": "BIDIPHAR1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIDIPHAR1: OTC A - CTCP Dược phẩm Bidiphar1"
 }, {
 	"code": "BIGAMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIGAMEX: OTC A - CTCP May Bình Minh"
 }, {
 	"code": "BIGIMEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIGIMEXCO: OTC A - CTCP XNK Tổng hợp Bình Phước"
 }, {
 	"code": "BIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIMEX: OTC A - Công ty CP Xuất nhập khẩu Bến Tre"
 }, {
 	"code": "BIOTAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BIOTAN: OTC A - Công ty CP khoáng sản BIOTAN"
 }, {
 	"code": "BITAHACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BITAHACO: OTC A - CTCP Dịch vụ Sản xuất XNK Bình Tây"
 }, {
 	"code": "BITEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BITEX: OTC A - CTCP XNK Bình Tây"
 }, {
 	"code": "BKAV",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "BKAV: OTC B - Công ty Cổ phần BKAV"
 }, {
 	"code": "BLPG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BLPG: OTC A - CTCP Tập đoàn Y Dược Bảo Long"
 }, {
 	"code": "BMSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BMSC: OTC A - CTCP Chứng khoán Bảo Minh"
 }, {
 	"code": "BMTFICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BMTFICO: OTC A - CTCP Đầu tư và Kinh doanh Vật liệu Xây dựng FICO"
 }, {
 	"code": "BNH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BNH: OTC A - CTCP Dịch vụ Cáp treo Bà Nà"
 }, {
 	"code": "BNPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BNPHAR: OTC A - CTCP Dược phẩm Bắc Ninh"
 }, {
 	"code": "BOTPM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BOTPM: OTC A - CTCP Đầu tư Xây dựng Phú Mỹ (PMC)"
 }, {
 	"code": "BPCA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BPCA: OTC A - Công ty CP in và bao bì Bình Định"
 }, {
 	"code": "BRGG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BRGG: OTC A - Tập đoàn BRG"
 }, {
 	"code": "BRITEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BRITEC: OTC A - CTCP Tư vấn Thiết kế Cầu Lớn - Hầm"
 }, {
 	"code": "BSDN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BSDN: OTC A - CTCP LOTHAMILK"
 }, {
 	"code": "BSHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BSHC: OTC A - Công ty cổ phần  Bông Sen"
 }, {
 	"code": "BSRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BSRC: OTC A - Công ty CP Lọc – Hóa dầu Bình Sơn"
 }, {
 	"code": "BTAV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTAV: OTC A - CTCP Văn hóa Tổng hợp Bến Thành"
 }, {
 	"code": "BTCH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTCH: OTC A - Công ty CP Xây dựng và Kinh doanh nhà Bình Thuận"
 }, {
 	"code": "BTJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTJC: OTC A - Công ty CP Vàng bạc đá quý Bến Thành"
 }, {
 	"code": "BTMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTMC: OTC A - CTCP Kim khí Bắc Thái"
 }, {
 	"code": "BTNH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTNH: OTC A - CTCP Phát triển nhà Bắc Trung Nam"
 }, {
 	"code": "BTPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTPC: OTC A - CTCP Sơn Bạch Tuyết"
 }, {
 	"code": "BTPM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTPM: OTC A - CTCP Vật tư Xăng dầu Bình Thuận"
 }, {
 	"code": "BTWASECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BTWASECO: OTC A - CTCP Cấp thoát nước Bình Thuận"
 }, {
 	"code": "BUSADCO",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "BUSADCO: OTC B - CTCP Thoát nước và Phát triển đô thị tỉnh Bà Rịa – Vũng Tàu"
 }, {
 	"code": "BVBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BVBANK: OTC A - Ngân hàng TMCP Bảo Việt"
 }, {
 	"code": "BVQTTN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BVQTTN: OTC A - CTCP Bệnh viện Quốc tế Thái Nguyên"
 }, {
 	"code": "BWTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BWTC: OTC A - Công ty CP công trình giao thông tỉnh Bà Rịa - Vũng Tàu"
 }, {
 	"code": "BXD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BXD: OTC A - CTCP Vận Tải &amp; Quản Lý Bến Xe Đà Nẵng"
 }, {
 	"code": "BXNA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "BXNA: OTC A - CTCP Bến xe Nghệ An"
 }, {
 	"code": "C465",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "C465: OTC A - CTCP Cơ khí &amp; Xây dựng Công trình Giao thông 465"
 }, {
 	"code": "CAPSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CAPSC: OTC A - CTCP Chứng khoán Thủ Đô"
 }, {
 	"code": "CASEAMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CASEAMEX: OTC A - CTCP Xuất nhập khẩu Thuỷ sản Cần Thơ"
 }, {
 	"code": "CASES",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CASES: OTC A - CTCP Chế biến và Dịch vụ Thủy sản Cà Mau"
 }, {
 	"code": "CASHIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CASHIN: OTC A - Công ty cổ phần Công nghiệp Tàu thủy &amp; Vận tải Cần Thơ"
 }, {
 	"code": "CASUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CASUCO: OTC A - CTCP Mía đường Cần Thơ"
 }, {
 	"code": "CAUXAYCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CAUXAYCO: OTC A - Công ty cổ phần Cầu Xây"
 }, {
 	"code": "CAVICO",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "CAVICO: OTC D - CTCP CAVICO Thương Mại Xây Dựng"
 }, {
 	"code": "CAVICOB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CAVICOB: OTC A - CTCP Cavico Xây dựng Cầu Hầm"
 }, {
 	"code": "CAVICOHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CAVICOHP: OTC A - CTCP Cavico Xây dựng Thủy điện"
 }, {
 	"code": "CAVICOID",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CAVICOID: OTC A - CTCP Cavico Xây dựng Hạ tầng"
 }, {
 	"code": "CBV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CBV: OTC A - Công ty Cổ phần Tư vấn Biển Việt"
 }, {
 	"code": "CC14",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CC14: OTC A - CTCP Xây dựng Số 14"
 }, {
 	"code": "CC625",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CC625: OTC A - CTCP Tư vấn Xây dựng Công trình 625 (CIENCO625)"
 }, {
 	"code": "CCKN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CCKN: OTC A - Công ty cổ phần thương mại Nguyễn Kim"
 }, {
 	"code": "CCN2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CCN2: OTC A - Công ty CP Xây dựng số 2 Quảng Ninh"
 }, {
 	"code": "CDSN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CDSN: OTC A - Công ty CP dây và cáp điện Thượng Đình ( CADI-SUN)"
 }, {
 	"code": "CECICO579",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CECICO579: OTC A - CTCP Đầu tư và Xây dựng 579"
 }, {
 	"code": "CECO525",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CECO525: OTC A - CTCP Xây dựng Công trình 525"
 }, {
 	"code": "CERAMIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CERAMIC: OTC A - CTCP Gạch ốp lát Thái Bình"
 }, {
 	"code": "CERD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CERD: OTC A - CTCP Đầu tư và Phát triển Miền Trung"
 }, {
 	"code": "CFCT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CFCT: OTC A - CTCP Giám định Cà phê và Hàng Hoá Xuất nhập khẩu"
 }, {
 	"code": "CHIPSANG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CHIPSANG: OTC A - CTCP Chíp Sáng"
 }, {
 	"code": "CI501",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CI501: OTC A - Công ty CP đầu tư và xây dựng 501"
 }, {
 	"code": "CIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIC: OTC A - CTCP Đầu Tư &amp; Xây Dựng Cotec"
 }, {
 	"code": "CIC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIC1: OTC A - Công ty CP Xây Dựng Dân Dụng Công Nghiệp Số 1 - Đồng Nai"
 }, {
 	"code": "CIC8",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIC8: OTC A - CTCP Đầu tư và Xây dựng Số 8"
 }, {
 	"code": "CICC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CICC: OTC A - CTCP Tin học và Tư vấn Xây dựng"
 }, {
 	"code": "CICR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CICR: OTC A - CTCP Xây dựng và Tư vấn Đầu tư Cao su"
 }, {
 	"code": "CIE4",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIE4: OTC A - Tổng công ty Xây dựng công trình giao thông 4 (Tập Đoàn Cienco4)"
 }, {
 	"code": "CIE5",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIE5: OTC A - Tổng Công ty Xây dựng Công trình Giao thông 5"
 }, {
 	"code": "CIEN4",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "CIEN4: OTC B - Tổng Công ty Xây dựng Công trình Giao thông 4 - CTCP"
 }, {
 	"code": "CIENCO473",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIENCO473: OTC A - Công ty Cổ phần 473"
 }, {
 	"code": "CIENCO610",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CIENCO610: OTC A - CTCP Xây dựng Công trình Giao thông 610"
 }, {
 	"code": "CK120",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CK120: OTC A - CTCP Cơ khí 120"
 }, {
 	"code": "CKCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CKCS: OTC A - CTCP Cơ khí Cao su"
 }, {
 	"code": "CKG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CKG: OTC A - CTCP Tập Đoàn Tư Vấn Đầu Tư &amp; Xây Dựng Kiên Giang"
 }, {
 	"code": "CLP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CLP: OTC A - CTCP Thủy Sản Cửu Long"
 }, {
 	"code": "CLS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CLS: OTC A - CTCP Chứng Khoán Chợ Lớn"
 }, {
 	"code": "CLSEAPRO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CLSEAPRO: OTC A - CTCP Thủy sản Cửu Long"
 }, {
 	"code": "CMBG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CMBG: OTC A - Công ty cổ phần xi măng Bắc Giang"
 }, {
 	"code": "CMCHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CMCHN: OTC A - CTCP Hóa chất và Vật tư Khoa học Kỹ thuật"
 }, {
 	"code": "CMFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CMFC: OTC A - Công ty tài chính cổ phần Xi Măng (CFC)"
 }, {
 	"code": "CMID",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CMID: OTC A - CTCP Vật liệu Xây dựng và Trang trí Nội thất Tp.Hồ Chí Minh"
 }, {
 	"code": "CMSF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CMSF: OTC A - CTCP Thủy Sản Cà Mau"
 }, {
 	"code": "CMXGL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CMXGL: OTC A - CTCP Thương mại Gia Lai (COMEXIMGIALAI)"
 }, {
 	"code": "CNF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CNF: OTC A - Công ty Cổ phần Thương mại và Dịch vụ Hoàng Dương"
 }, {
 	"code": "CNTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CNTH: OTC A - CÔNG TY CỔ PHẦN CẤP NƯỚC THANH HÓA"
 }, {
 	"code": "COIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COIMEX: OTC A - CTCP Thủy sản và XNK Côn Đảo"
 }, {
 	"code": "COMA2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COMA2: OTC A - CTCP Cơ khí Xây dựng Số 2 Hà Bắc"
 }, {
 	"code": "COMA25",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COMA25: OTC A - CTCP Xây lắp và Thương mại COMA 25"
 }, {
 	"code": "COMA6",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COMA6: OTC A - CTCP Cơ khí Xây dựng Đại Mỗ"
 }, {
 	"code": "COMAEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COMAEL: OTC A - Công ty Cơ khí Xây dựng và Lắp máy điện nước"
 }, {
 	"code": "CONAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CONAC: OTC A - CTCP đầu tư xây dựng Dầu khí IDICO"
 }, {
 	"code": "COPAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COPAC: OTC A - CTCP đầu tư xây dựng và thương mại Thái Bình Dương"
 }, {
 	"code": "CORESCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CORESCO: OTC A - CTCP Đầu Tư Xây dựng Kinh doanh Nhà Bến Thành"
 }, {
 	"code": "COSACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COSACO: OTC A - CTCP Sài Gòn xây dựng"
 }, {
 	"code": "COSEVCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COSEVCO: OTC A - Tổng Công ty Miền Trung"
 }, {
 	"code": "COSEVCO75",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COSEVCO75: OTC A - CTCP Cosevco 75"
 }, {
 	"code": "COSMETIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COSMETIC: OTC A - CTCP Mỹ phẩm Sài Gòn"
 }, {
 	"code": "COTECANPHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COTECANPHA: OTC A - CTCP Xây dựng Anpha"
 }, {
 	"code": "COTECSTAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COTECSTAR: OTC A - CTCP Kỹ thuật Xây dựng Ngôi Sao"
 }, {
 	"code": "COTECSUN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COTECSUN: OTC A - CTCP Cotec Ánh Dương"
 }, {
 	"code": "COTIMEXDN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COTIMEXDN: OTC A - Công ty XNK Đà Nẵng"
 }, {
 	"code": "COTTDONA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COTTDONA: OTC A - CTCP Bông vải và Kinh doanh Tổng hợp Miền Đông"
 }, {
 	"code": "COWAELMIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COWAELMIC: OTC A - CTCP Lắp máy Điện nước và Xây dựng"
 }, {
 	"code": "COXANO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "COXANO: OTC A - CTCP Cơ khí Xây dựng Công trình Thừa Thiên Huế"
 }, {
 	"code": "CPCT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CPCT: OTC A - CTCP Viễn thông Pacific SAM & Campuchia"
 }, {
 	"code": "CPHAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CPHAC: OTC A - CTCP Đầu Tư Xây Dựng Chánh Phú Hòa"
 }, {
 	"code": "CPMW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CPMW: OTC A - Công ty Cổ phần nước khoáng Cúc Phương"
 }, {
 	"code": "CPSS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CPSS: OTC A - CTCP Dịch vụ Sản xuất Thương mại"
 }, {
 	"code": "CPVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CPVN: OTC A - Công ty cổ phần Chăn Nuôi C.P Việt Nam"
 }, {
 	"code": "CRTDH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CRTDH: OTC A - Bệnh viện Đa Khoa Tây Đô "
 }, {
 	"code": "CSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CSG: OTC A - CTCP Cáp Sài Gòn"
 }, {
 	"code": "CSHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CSHP: OTC A - CTCP Thủy Điện Cấm Sơn"
 }, {
 	"code": "CSMT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CSMT: OTC A - CTCP Cao Su Miền Trung"
 }, {
 	"code": "CSSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CSSC: OTC A - CTCP Kết cấu Thép Xây dựng "
 }, {
 	"code": "CT116",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CT116: OTC A - CTCP C�ng tr�nh Giao th�ng 116"
 }, {
 	"code": "CT18",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CT18: OTC A - Công ty Cổ phần Đầu tư Hạ tầng 18"
 }, {
 	"code": "CT423",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CT423: OTC A - CTCP Xây dựng và Thương mại 423"
 }, {
 	"code": "CT586",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CT586: OTC A - CTCP Xây dựng CTGT 586"
 }, {
 	"code": "CTBB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTBB: OTC A - CTCP Bia - Nước giải khát Cần Thơ"
 }, {
 	"code": "CTCF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTCF: OTC A - CTCP Phân bón và Hóa chất Cần Thơ"
 }, {
 	"code": "CTCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTCM: OTC A - CTCP Xi măng Công Thanh"
 }, {
 	"code": "CTCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTCO: OTC A - CTCP Phát triển Truyền thông Truyền hình"
 }, {
 	"code": "CTCT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTCT: OTC A - CTCP Xây dựng Giao thông và Vận tải Cần Thơ"
 }, {
 	"code": "CTDTST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTDTST: OTC A - Công Ty TNHH MTV Công Trình Đô Thị Sóc Trăng"
 }, {
 	"code": "CTEF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTEF: OTC A - CÔNG TY CỔ PHẦN THỰC PHẨM CJ CẦU TRE"
 }, {
 	"code": "CTIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTIN: OTC A - CTCP Viễn thông - Tin học - Bưu điện"
 }, {
 	"code": "CTM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTM: OTC A - CTCP ĐT Xây Dựng &amp; Khai Thác Mỏ Vinavico"
 }, {
 	"code": "CTMS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTMS: OTC A - CTCP Thương mại Cầu Giấy"
 }, {
 	"code": "CTPL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTPL: OTC A - CTCP Tu tạo và Phát triển nhà"
 }, {
 	"code": "CTPW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTPW: OTC A - CTCP Xây lắp Giao thông Công chính "
 }, {
 	"code": "CTSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTSC: OTC A - CTCP Dịch vụ Công nghệ Chân Trời"
 }, {
 	"code": "CTV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTV: OTC A - CTCP Đầu Tư - Sản Xuất Và Thương Mại Việt Nam"
 }, {
 	"code": "CTX1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTX1: OTC A - CTCP Constrexim Số 1 (CONFITECH)"
 }, {
 	"code": "CTX2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTX2: OTC A - CTCP Đầu tư Xây dựng và Xuất nhập khẩu Số 2"
 }, {
 	"code": "CTXD810",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTXD810: OTC A - CTCP Xây dựng Công trình Giao thông 810"
 }, {
 	"code": "CTXMEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTXMEC: OTC A - CTCP Xây lắp Cơ giới và Đầu tư Thương mại Constrexim (CONSTREXIMECO)"
 }, {
 	"code": "CTXSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CTXSG: OTC A - CTCP thương mại đầu tư và xây dựng Constrexim - Sài Gòn"
 }, {
 	"code": "CVAUNI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CVAUNI: OTC A - Trường Đại học Chu Văn An"
 }, {
 	"code": "CVHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "CVHA: OTC A - CTCP Thương mại và Dịch vụ Cát Vàng Hội An "
 }, {
 	"code": "D26",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "D26: OTC A - CTCP Quản lý và Xây dựng Đường bộ 26"
 }, {
 	"code": "DACERA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DACERA: OTC A - CTCP Gạch men Cosevco"
 }, {
 	"code": "DAGARCO",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "DAGARCO: OTC B - CTCP May Đáp Cầu (Dagarco)"
 }, {
 	"code": "DAGATEX",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "DAGATEX: OTC D - CTCP Dệt may Đông Á"
 }, {
 	"code": "DAIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DAIC: OTC A - Công ty CP đầu tư và xây dựng Delta AGF"
 }, {
 	"code": "DAILONG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DAILONG: OTC A - CTCP Truyền thông và Đầu tư tài chính Đại Long"
 }, {
 	"code": "DAKNORUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DAKNORUCO: OTC A - CTCP Cao Su DAKNORUCO"
 }, {
 	"code": "DAKPSI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DAKPSI: OTC A - CTCP Đầu tư và Phát triển Thủy điện Đăkpsi"
 }, {
 	"code": "DALICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DALICO: OTC A - CTCP Điện chiếu sáng Đà Nẵng"
 }, {
 	"code": "DALIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DALIMEX: OTC A - CTCP XNK và Thương mại Đại Long "
 }, {
 	"code": "DAMIJOSCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DAMIJOSCO: OTC A - CTCP Khoáng sản Đăk Lăk"
 }, {
 	"code": "DANAPHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DANAPHA: OTC A - CTCP Dược Danapha"
 }, {
 	"code": "DANASHIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DANASHIP: OTC A - CTCP Vận tải Biển và Thương Mại Đà Nẵng"
 }, {
 	"code": "DANASI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DANASI: OTC A - CTCP Tơ lụa và Dịch vụ Nông nghiệp Đà Nẵng"
 }, {
 	"code": "DANATEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DANATEX: OTC A - CTCP Dệt Hòa Khánh - Đà Nẵng"
 }, {
 	"code": "DARC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DARC: OTC A - CTCP Địa ốc Đông Á"
 }, {
 	"code": "DASC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DASC: OTC A - Công ty Chứng Khoán Ngân Hàng Đông Á"
 }, {
 	"code": "DATC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DATC: OTC A - CTCP Gạch ốp lát Việt Ý - DATC"
 }, {
 	"code": "DATH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DATH: OTC A - Công ty XNK Thiết bị Điện ảnh và Truyền hình"
 }, {
 	"code": "DAVACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DAVACO: OTC A - CTCP Cơ khí - Vận tải Cao su Dầu Tiếng"
 }, {
 	"code": "DBCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DBCC: OTC A - Công ty cổ phần Xi măng Đồng Bành"
 }, {
 	"code": "DBCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DBCE: OTC A - CTCP Xi măng Điện Biên"
 }, {
 	"code": "DBF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DBF: OTC A - CTCP Lương Thực Đông Bắc"
 }, {
 	"code": "DBPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DBPC: OTC A - CTCP Sơn Tổng hợp Hà nội"
 }, {
 	"code": "DCB1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DCB1: OTC A - CTCP Đầu tư - Công nghiệp DCB"
 }, {
 	"code": "DCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DCC: OTC A - CTCP Xây Dựng Công Nghiệp"
 }, {
 	"code": "DCSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DCSC: OTC A - Công ty CP Tư vấn Dịch vụ về tài sản bất động sản DATC"
 }, {
 	"code": "DCSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DCSG: OTC A - Công ty CP điện cơ Sài Gòn"
 }, {
 	"code": "DDKG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DDKG: OTC A - Công ty Cổ phần Dầu khí Dương Đông Kiên Giang"
 }, {
 	"code": "DDSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DDSC: OTC A - CTCP Chứng khoán Đông Dương"
 }, {
 	"code": "DDTPLAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DDTPLAS: OTC A - CTCP Đại Đồng Tiến"
 }, {
 	"code": "DESCON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DESCON: OTC A - CTCP Xây Dựng Công Nghiệp"
 }, {
 	"code": "DGWC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DGWC: OTC A - Công ty cổ phần Thế giới số"
 }, {
 	"code": "DHCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DHCO: OTC A - CTCP Kinh doanh Nhà Đồng Nai"
 }, {
 	"code": "DHLM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DHLM: OTC A - Công ty CP cơ khí vận tải thương mại Đại Hưng"
 }, {
 	"code": "DHPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DHPC: OTC A - CTCP Thủy điện Điện Lực Đà Nẵng"
 }, {
 	"code": "DHPL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DHPL: OTC A - CTCP Vận tải Container Đông Đô - Cảng Hải Phòng"
 }, {
 	"code": "DHSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DHSC: OTC A - CTCP Giầy Hải Dương"
 }, {
 	"code": "DIANA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DIANA: OTC A - Công ty cổ phần Diana Unicharm"
 }, {
 	"code": "DICC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DICC: OTC A - CTCP Đầu tư Phát triển Xây dựng Bê tông"
 }, {
 	"code": "DICLH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DICLH: OTC A - CTCP Đầu tư phát triển xây dựng Gạch ngói Tuynel Long Hương"
 }, {
 	"code": "DICMH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DICMH: OTC A - CTCP DIC Minh Hưng"
 }, {
 	"code": "DICTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DICTB: OTC A - CTCP Đầu tư Phát triển Xây dựng Thanh Bình"
 }, {
 	"code": "DIMAX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DIMAX: OTC A - CTCP Điện máy Thành phố Hồ Chí Minh"
 }, {
 	"code": "DINHLE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DINHLE: OTC A - Công ty Cổ phần Nhà thép Đinh Lê"
 }, {
 	"code": "DKCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DKCC: OTC A - Công ty cổ phần Đức Khải"
 }, {
 	"code": "DKHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DKHP: OTC A - CTCP Đaksrông"
 }, {
 	"code": "DLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLC: OTC A - Công ty cổ phần Du lịch Cần Thơ (CANTHO TOURIST J.S CO )"
 }, {
 	"code": "DLHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLHC: OTC A - Thủy điện ĐaM'Lo"
 }, {
 	"code": "DLSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLSC: OTC A - CTCP Thể  thao Động Lực"
 }, {
 	"code": "DLTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLTC: OTC A - CTCP Du lịch Dốc Lết"
 }, {
 	"code": "DLTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLTL: OTC A - CTCP Du lịch Thắng Lợi"
 }, {
 	"code": "DLTS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLTS: OTC A - CTCP Dịch vụ Du lịch Đà Lạt"
 }, {
 	"code": "DLTW2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLTW2: OTC A - CTCP Dược Liệu Trung ương 2"
 }, {
 	"code": "DLV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLV: OTC A - CTCP Du lịch Việt Nam Vitours (VITOURS)"
 }, {
 	"code": "DLXN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DLXN: OTC A - Công ty Cổ phần Du lịch Xô Viết Nghệ Tĩnh"
 }, {
 	"code": "DMCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DMCC: OTC A - Công ty Cổ phần Đức Mạnh"
 }, {
 	"code": "DMCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DMCS: OTC A - Công ty Cổ phần Hóa phẩm Dầu khí DMC - Miền Nam"
 }, {
 	"code": "DMDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DMDC: OTC A - Công ty CP Y dược Domedic"
 }, {
 	"code": "DNAQ",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNAQ: OTC A - CTCP Thủy sản Đông Nam"
 }, {
 	"code": "DNF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNF: OTC A - Công ty Cổ phần Lương thực Đà Nẵng (Danafood)"
 }, {
 	"code": "DNHB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNHB: OTC A - Công ty CP Ong mật Đồng Nai"
 }, {
 	"code": "DNHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNHP: OTC A - Thủy điện Đắc Nông "
 }, {
 	"code": "DNHP2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNHP2: OTC A - Thủy điện Đồng Nai 2"
 }, {
 	"code": "DNIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNIC: OTC A - CTCP Đầu Tư Xây Dựng Công Trình Đô Thị Đà Nẵng"
 }, {
 	"code": "DNSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNSC: OTC A - CTCP Chứng khoán Đà Nẵng"
 }, {
 	"code": "DNSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNSE: OTC A - CTCP Chứng khoán Đại Nam"
 }, {
 	"code": "DNT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNT: OTC A - Công ty Cổ phần Du lịch Đồng Nai (Donatours)"
 }, {
 	"code": "DNTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNTC: OTC A - CTCP Du lịch Đà Nẵng"
 }, {
 	"code": "DNTS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNTS: OTC A - Công ty Công trình Giao thông Đà Nẵng "
 }, {
 	"code": "DNTW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DNTW: OTC A - CTCP Thực phẩm và Nước giải khát Dona New Tower"
 }, {
 	"code": "DOMATCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOMATCO: OTC A - CTCP Đầu tư Xây lắp và Vật liệu Xây dựng Đông Anh"
 }, {
 	"code": "DOMENAL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOMENAL: OTC A - Công ty Cổ phần DOMENAL"
 }, {
 	"code": "DONAGAMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DONAGAMEX: OTC A - CTCP TCT May Đồng Nai"
 }, {
 	"code": "DONASTA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DONASTA: OTC A - CTCP Bến xe và Dịch vụ Vận Tải Đồng Nai "
 }, {
 	"code": "DONATRACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DONATRACO: OTC A - CTCP Sản xuất Thương mại Dịch vụ Đồng Nai"
 }, {
 	"code": "DONIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DONIMEX: OTC A - CTCP XNK Đồng Nai"
 }, {
 	"code": "DOTEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOTEC: OTC A - CTCP Viễn thông Đông Đô"
 }, {
 	"code": "DOTHICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOTHICO: OTC A - CTCP Xây dựng Đô thị và Khu Công nghiệp"
 }, {
 	"code": "DOVECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOVECO: OTC A - CTCP Thực phẩm Xuất khẩu Đồng Giao"
 }, {
 	"code": "DOVITEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOVITEC: OTC A - CÔNG TY CỔ PHẦN ĐỒNG TIẾN"
 }, {
 	"code": "DOXIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DOXIMEX: OTC A - Công ty Dệt Kim Đông Xuân"
 }, {
 	"code": "DPCL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DPCL: OTC A - Công ty CP Dược phẩm Calapharco"
 }, {
 	"code": "DPN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DPN: OTC A - ĐHCĐ CTCP Đường sắt phía Nam"
 }, {
 	"code": "DPNC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DPNC: OTC A - CTCP Xây dựng và Thương mại Đất Phương Nam"
 }, {
 	"code": "DQCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DQCC: OTC A - CÔNG TY TNHH KÍNH ĐÌNH QUỐC"
 }, {
 	"code": "DQIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DQIP: OTC A - CTCP Khu Công nghiệp Định Quán"
 }, {
 	"code": "DRAYHLING2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DRAYHLING2: OTC A - Nhà máy Thủy Điện ĐrâyHlinh II"
 }, {
 	"code": "DRAYHLING2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DRAYHLING2: OTC A - Nhà máy Thủy Điện ĐrâyHlinh II"
 }, {
 	"code": "DRSHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DRSHP: OTC A - Nhà máy Thuỷ điện Dak - Rơ - Sa"
 }, {
 	"code": "DSGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DSGC: OTC A - Công ty CP Bất động sản Đông Sài Gòn"
 }, {
 	"code": "DTCJ",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTCJ: OTC A - CTCP Xây dựng Công trình Giao Thông Đồng Tháp "
 }, {
 	"code": "DTMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTMC: OTC A - CTCP Cơ khí Đồng Tháp Hà Nội"
 }, {
 	"code": "DTMG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTMG: OTC A - CTCP Đồng Tâm"
 }, {
 	"code": "DTPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTPC: OTC A - CTCP Dược - Trang Thiết bị Y Tế Tân Phát"
 }, {
 	"code": "DTPP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTPP: OTC A - Công ty CP in và bao bì Đồng Tháp"
 }, {
 	"code": "DTSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTSC: OTC A - CTCP Công nghệ Truyền thông DTS"
 }, {
 	"code": "DTSCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DTSCO: OTC A - Công ty CP Đông Trường Sơn"
 }, {
 	"code": "DUCVIET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DUCVIET: OTC A - CTCP Tập đoàn Đức Việt"
 }, {
 	"code": "DUGACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DUGACO: OTC A - Công ty CP may Đức Giang"
 }, {
 	"code": "DVD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DVD: OTC A - CTCP Dược Phẩm Viễn Đông"
 }, {
 	"code": "DVHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DVHP: OTC A - CTCP Thép Đình Vũ - Hải Phòng"
 }, {
 	"code": "DVSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DVSC: OTC A - Công ty cổ phần Chứng khoán Đại Việt"
 }, {
 	"code": "DVTG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DVTG: OTC A - CTCP Thương mại Du lịch Địa ốc Đất Việt"
 }, {
 	"code": "DXDA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DXDA: OTC A - Công ty Cổ phần Đất Xanh Đông Á"
 }, {
 	"code": "DXNC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DXNC: OTC A - CTCP Đầu tư và Xây dựng Miền Nam"
 }, {
 	"code": "DYLS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "DYLS: OTC A - Công ty CP dược phẩm và vật tư y tế Lạng Sơn"
 }, {
 	"code": "E1SSHN30",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "E1SSHN30: OTC B - Chứng chỉ quỹ ETF SSIAM-HNX30"
 }, {
 	"code": "EABANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EABANK: OTC A - Ngân hàng TMCP Đông Á"
 }, {
 	"code": "EACC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EACC: OTC A - Công ty cổ phần kinh doanh thiết bị và truyền thông VTC"
 }, {
 	"code": "EAKRONGROU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EAKRONGROU: OTC A - Nhà máy thủy điện Eakrongrou"
 }, {
 	"code": "EAKRONGROU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EAKRONGROU: OTC A - Nhà máy thủy điện Eakrongrou"
 }, {
 	"code": "EBIT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EBIT: OTC A - CTCP Đầu tư và Thương mại Điện lực Miền Bắc "
 }, {
 	"code": "ECICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ECICO: OTC A - CTCP Công Trình Giao Thông Vinashin"
 }, {
 	"code": "ECILAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ECILAND: OTC A - CTCP Đầu tư Xây dựng Địa ốc Trường Thịnh Phát "
 }, {
 	"code": "ECISAIGON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ECISAIGON: OTC A - CTCP Sài Gòn Đầu tư Kỹ thuật Xây dựng"
 }, {
 	"code": "EDEN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EDEN: OTC A - CTCP Ê Đen"
 }, {
 	"code": "EDICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EDICO: OTC A - CTCP Phát triển hạ tầng KCN Tây Ninh"
 }, {
 	"code": "EEMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EEMC: OTC A - CTCP Chế tạo Thiết bị điện Đông Anh"
 }, {
 	"code": "EFTIPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EFTIPHAR: OTC A - CTCP Dược phẩm 3\/2"
 }, {
 	"code": "EISS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EISS: OTC A - CTCP Công nghệ thông tin EIS"
 }, {
 	"code": "ELEAD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ELEAD: OTC A - CTCP ELEAD"
 }, {
 	"code": "ELINCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ELINCO: OTC A - Công ty CP Điện tử Tin học Hóa Chất"
 }, {
 	"code": "ELS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ELS: OTC A - Công ty cổ phần thời trang Elise"
 }, {
 	"code": "EMJG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EMJG: OTC A - CTCP Tập đoàn vật liệu điện và cơ khí "
 }, {
 	"code": "EPMS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EPMS: OTC A - CTCP Khoáng sản và đầu tư Sài Gòn"
 }, {
 	"code": "ESOFT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ESOFT: OTC A - Công ty Phần mềm Esoft"
 }, {
 	"code": "EUPW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EUPW: OTC A - Công ty Cổ phần Eurowindow"
 }, {
 	"code": "EUSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EUSC: OTC A - CTCP Chứng khoán Euro Capital"
 }, {
 	"code": "EVERSTONE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EVERSTONE: OTC A - CTCP Vĩnh Cửu"
 }, {
 	"code": "EVNF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EVNF: OTC A - Công ty Tài chính Cổ phần Điện lực"
 }, {
 	"code": "EVNGENCO3",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "EVNGENCO3: OTC B - Tổng Công ty Phát điện 3 - CTCP"
 }, {
 	"code": "EXIMCON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EXIMCON: OTC A - CTCP XNK và Xây dựng Hải Phòng"
 }, {
 	"code": "EXIMLAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EXIMLAND: OTC A - CTCP Bất động sản Exim"
 }, {
 	"code": "EXPERTRAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "EXPERTRAN: OTC A - CTCP ExperTrans BPO"
 }, {
 	"code": "F88",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "F88: OTC A - Công ty Cổ phần Kinh doanh F88"
 }, {
 	"code": "FAFIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FAFIM: OTC A - CTCP Fafim Thành Phố Hồ Chí Minh"
 }, {
 	"code": "FAHASA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FAHASA: OTC A - CTCP Phát Hành Sách Tp. Hồ Chí Minh"
 }, {
 	"code": "FALCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FALCO: OTC A - CTCP Vận tải Dầu khí Việt Nam"
 }, {
 	"code": "FAST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FAST: OTC A - CTCP Phần mềm Quản lý Doanh nghiệp"
 }, {
 	"code": "FBMA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FBMA: OTC A - CTCP Vật liệu Xây dựng và Lâm sản"
 }, {
 	"code": "FBSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FBSC: OTC A - CTCP Tài chính và Phát triển Doanh nghiệp (FBS)"
 }, {
 	"code": "FBT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FBT: OTC A - CTCP XNK Lâm Thủy Sản Bến Tre"
 }, {
 	"code": "FCCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FCCS: OTC A - CTCP Giám định và Khử trùng FCC"
 }, {
 	"code": "FCMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FCMC: OTC A - CTCP Khoáng sản Fecon"
 }, {
 	"code": "FECON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FECON: OTC A - CTCP Kỹ thuật nền móng và công trình ngầm FECON"
 }, {
 	"code": "FICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FICO: OTC A - Tổng Công ty Vật liệu xây dựng số 1"
 }, {
 	"code": "FIDOPHARM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FIDOPHARM: OTC A - CTCP Dược phẩm Đông dược 5"
 }, {
 	"code": "FIMEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FIMEXCO: OTC A - CTCP Sản xuất Kinh doanh Dịch vụ và XNK Quận 1 - HCM"
 }, {
 	"code": "FINTEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FINTEC: OTC A - Công ty cổ phần phân phối thiết bị văn phòng FINTEC"
 }, {
 	"code": "FISC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FISC: OTC A - CTCP Hệ thống Thông tin FPT"
 }, {
 	"code": "FIVESTARS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FIVESTARS: OTC A - CTCP Tư vấn và Thương mại Điện tử Năm Sao"
 }, {
 	"code": "FLCG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FLCG: OTC A - Công ty cổ phần liên doanh đầu tư quốc tế FLC"
 }, {
 	"code": "FLCL",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FLCL: OTC C - Công ty Cổ phần FLC Land"
 }, {
 	"code": "FOCAL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FOCAL: OTC A - Công ty Liên doanh Sản xuất Cáp quang và Phụ kiện"
 }, {
 	"code": "FOODINCO",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FOODINCO: OTC C - Tổng CTCP Đầu tư và xuất nhập khẩu FOODINCO"
 }, {
 	"code": "FOPATRA",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FOPATRA: OTC C - CTCP Kinh doanh Bao bì Lương thực"
 }, {
 	"code": "FORMACH",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FORMACH: OTC C - Công ty Cổ phần FORMACH"
 }, {
 	"code": "FPC",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FPC: OTC C - CTCP Full Power"
 }, {
 	"code": "FPTF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FPTF: OTC A - CTCP Quản lý Quỹ  Đầu tư FPT"
 }, {
 	"code": "FPTSHOP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FPTSHOP: OTC A - CTCP Bán Lẻ Kỹ Thuật Số FPT (FPT Retail)"
 }, {
 	"code": "FRIT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FRIT: OTC A - CTCP FRIT Huế"
 }, {
 	"code": "FSCV",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FSCV: OTC C - CTCP Điện tử Tin học FSC"
 }, {
 	"code": "FSEC",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FSEC: OTC C - CTCP Linh Gas Việt Nam"
 }, {
 	"code": "FSOFT",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "FSOFT: OTC C - CTCP Phần mềm FPT"
 }, {
 	"code": "FSTG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FSTG: OTC A - CTCP Thương mại và Dịch vụ Năm Sao"
 }, {
 	"code": "FTGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "FTGC: OTC A - CTCP Thương mại FPT"
 }, {
 	"code": "GACC",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "GACC: OTC B - CTCP Gỗ An Cường"
 }, {
 	"code": "GARCO10",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GARCO10: OTC A - Tổng công ty may 10 - CTCP"
 }, {
 	"code": "GAT20",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GAT20: OTC A - Công ty cổ phần X20"
 }, {
 	"code": "GB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GB: OTC A - Ngân hàng TMCP Dầu khí Toàn cầu"
 }, {
 	"code": "GBIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GBIC: OTC A - CTCP Đầu tư và Phát triển Nhà Gia Bảo"
 }, {
 	"code": "GBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GBS: OTC A - CTCP Chứng khoán Golden Bridge Việt Nam"
 }, {
 	"code": "GDIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GDIC: OTC A - CTCP Đầu Tư Phát Triển Gia Định (GDI)"
 }, {
 	"code": "GDSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GDSC: OTC A - CTCP Tổng Bách hóa"
 }, {
 	"code": "GEDOSICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GEDOSICO: OTC A - Công ty cổ phần XNK Đồng Tháp Mười"
 }, {
 	"code": "GENIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GENIMEX: OTC A - CTCP Lâm sản &amp; XNK Tổng hợp Bình Dương"
 }, {
 	"code": "GENTRACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GENTRACO: OTC A - CTCP Gentraco"
 }, {
 	"code": "GETRACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GETRACO: OTC A - CTCP Thương mại Tổng hợp Tỉnh Bà Rịa - Vũng Tàu"
 }, {
 	"code": "GFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GFC: OTC A - CTCP Sản Xuất Thương Mại Dịch Vụ GFC"
 }, {
 	"code": "GIDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GIDC: OTC A - CTCP Phát triển Đông Dương Xanh"
 }, {
 	"code": "GIDICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GIDICO: OTC A - CTCP Xuất Nhập khẩu Gia Định"
 }, {
 	"code": "GILIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GILIMEX: OTC A - CTCP Điện máy và Kỹ thuật Công Nghệ"
 }, {
 	"code": "GIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GIMEX: OTC A - CTCP Xuất nhập khẩu Tổng hợp II"
 }, {
 	"code": "GIRIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GIRIMEX: OTC A - Công ty XNK Tổng hợp Giá Rai"
 }, {
 	"code": "GISCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GISCO: OTC A - CTCP Luyện cán thép Gia Sàng"
 }, {
 	"code": "GLCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GLCM: OTC A - CTCP Xi măng Gia Lai"
 }, {
 	"code": "GLIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GLIC: OTC A - CTCP Bảo hiểm Toàn cầu"
 }, {
 	"code": "GLSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GLSC: OTC A - CTCP Chứng khoán Sen Vàng"
 }, {
 	"code": "GMIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GMIC: OTC A - Tổng công ty cổ phần Bảo hiểm Xuân Thành"
 }, {
 	"code": "GMLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GMLC: OTC A - CTCP Gami Bất động sản (Gamiland)"
 }, {
 	"code": "GOLDEN",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "GOLDEN: OTC D - CTCP Thương mại Dịch vụ Cổng Vàng ( GOLDEN GATE)"
 }, {
 	"code": "GOSACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GOSACO: OTC A - CTCP Gosaco"
 }, {
 	"code": "GPAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GPAC: OTC A - CTCP Quản lý Quỹ Đối tác Toàn cầu"
 }, {
 	"code": "GPB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GPB: OTC A - Ngân hàng TMCP Xăng Dầu"
 }, {
 	"code": "GPFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GPFC: OTC A - Công ty CP Quản lý quỹ Dầu khí Toàn Cầu"
 }, {
 	"code": "GQTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GQTC: OTC A - Công ty CP gạch ngói Quảng Trị"
 }, {
 	"code": "GSCP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GSCP: OTC A - CTCP Thủy điện Geruco Sông Côn"
 }, {
 	"code": "GTEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GTEC: OTC A - CTCP Cơ Khí Gang Thép"
 }, {
 	"code": "GTIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GTIC: OTC A - CTCP Đầu tư Gia Tuệ"
 }, {
 	"code": "GTNG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "GTNG: OTC A - CTCP Tập đoàn Truyền thông Giao Thương N.E.T"
 }, {
 	"code": "HABACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HABACO: OTC A - CTCP Pin Hà Nội"
 }, {
 	"code": "HAC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAC1: OTC A - CTCP XNK Hà Anh"
 }, {
 	"code": "HACC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACC1: OTC A - CTCP Xây dựng số 1 Hà Nội"
 }, {
 	"code": "HACC3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACC3: OTC A - CTCP Xây dựng số 3 Hà Nội"
 }, {
 	"code": "HACC34",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACC34: OTC A - CTCP Đầu tư và Xây dựng Số 34"
 }, {
 	"code": "HACCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACCO: OTC A - CTCP Xây dựng và Thủy lợi Hải Phòng"
 }, {
 	"code": "HACHAUOSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACHAUOSC: OTC A - Công ty cổ phần Hà Châu OSC"
 }, {
 	"code": "HACHIBA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACHIBA: OTC A - Công ty CP Dệt may 29.3"
 }, {
 	"code": "HACINCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACINCO: OTC A - Công ty Đầu tư Xây dựng số 2 Hà Nội"
 }, {
 	"code": "HACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HACO: OTC A - CTCP Kiến trúc Hà Nội"
 }, {
 	"code": "HAEW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAEW: OTC A - Công ty CP Sắt tráng men nhôm Hải Phòng"
 }, {
 	"code": "HAFIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAFIC: OTC A - Công ty Tài chính cổ phần Handico"
 }, {
 	"code": "HAIAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAIAN: OTC A - Công ty CP đóng tàu Hải An"
 }, {
 	"code": "HAICATEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAICATEX: OTC A - CTCP Dệt Công nghiệp Hà Nội"
 }, {
 	"code": "HAKIPACK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAKIPACK: OTC A - CTCP Bao bì Hà Tiên"
 }, {
 	"code": "HALC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HALC: OTC A - CTCP Xây dựng và Phát triển nhà Hoàng Anh (HAGLLAND)"
 }, {
 	"code": "HALICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HALICO: OTC A - CTCP Cồn- Rượu Hà Nội"
 }, {
 	"code": "HALOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HALOCO: OTC A - CTCP Xây lắp Hải Long"
 }, {
 	"code": "HAMATCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAMATCO: OTC A - CTCP Thương mại và  Vận tải biển Hà Nội"
 }, {
 	"code": "HAMBISC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAMBISC: OTC A - CTCP Sản xuất Vật liệu và Đầu tư Xây dựng Hồng Hà"
 }, {
 	"code": "HANAKA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANAKA: OTC A - CTCP Tập đoàn HANAKA"
 }, {
 	"code": "HANDICO22",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANDICO22: OTC A - CTCP Đầu tư và Phát triển Nhà Hà Nội 22"
 }, {
 	"code": "HANDICO5",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANDICO5: OTC A -  CTCP Đầu tư Phát triển nhà Hà Nội số 5"
 }, {
 	"code": "HANDICO6",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANDICO6: OTC A - CTCP Đầu tư và Phát triển Nhà Số 6 Hà Nội"
 }, {
 	"code": "HANEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANEL: OTC A - CTCP Điện tử Chuyên dụng Hanel"
 }, {
 	"code": "HANELPAD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANELPAD: OTC A - CTCP Nhựa và Bao bì Hanel Pad"
 }, {
 	"code": "HANHUD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANHUD: OTC A - CTCP Kinh doanh Phát triển Nhà và Đô thị Hà Nội"
 }, {
 	"code": "HANOBACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANOBACO: OTC A - CTCP Bánh Mứt Kẹo Hà Nội"
 }, {
 	"code": "HANOIOPTIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANOIOPTIC: OTC A - CTCP Kính mắt  Hà Nội"
 }, {
 	"code": "HANOIOPTIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANOIOPTIC: OTC A - CTCP Kính mắt  Hà Nội"
 }, {
 	"code": "HANOIPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANOIPHAR: OTC A - CTCP Dược phẩm Hà Nội"
 }, {
 	"code": "HANSHOES",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANSHOES: OTC A - CTCP Đầu tư XNK Da giầy Hà Nội"
 }, {
 	"code": "HANVET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HANVET: OTC A - CTCP Dược và Vật tư Thú y"
 }, {
 	"code": "HAPEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAPEC: OTC A - CTCP Tư vấn Xây dựng Điện lực Hà Nội"
 }, {
 	"code": "HAPOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAPOCO: OTC A - CTCP Sứ Hải Dương"
 }, {
 	"code": "HAPROVOLKA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAPROVOLKA: OTC A - Công ty CP Rượu Hapro"
 }, {
 	"code": "HAPROWINE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAPROWINE: OTC A - CTCP Rượu vang Hapro Thảo mộc"
 }, {
 	"code": "Hapucom",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "Hapucom: OTC B - Công ty Cổ phần Đầu tư Bất động sản Hapulico"
 }, {
 	"code": "HARATOUR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HARATOUR: OTC A - CTCP Dịch vụ Du lịch Đường sắt Hà Nội"
 }, {
 	"code": "HAROCOR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAROCOR: OTC A - Tổng CTCP Hàm Rồng Thanh Hóa"
 }, {
 	"code": "HASC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HASC: OTC A - CTCP Chứng khoán Tonkin"
 }, {
 	"code": "HASO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HASO: OTC A - CTCP Xà phòng Hà Nội"
 }, {
 	"code": "HATGS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HATGS: OTC A - CTCP vận tải ô tô và dịch vụ tổng hợp Thừa Thiên Huế"
 }, {
 	"code": "HATTOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HATTOCO: OTC A - CTCP DU LỊCH HÀ TÂY"
 }, {
 	"code": "HAWEICCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAWEICCO: OTC A - CTCP Xây dựng Lắp máy Điện nước Hà Nội"
 }, {
 	"code": "HAWI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAWI: OTC A - CTCP Đầu tư Công trình Hà Nội"
 }, {
 	"code": "HAWOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HAWOCO: OTC A - CTCP Len Hà Đông"
 }, {
 	"code": "HBC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBC1: OTC A - CTCP Bao bì Hoàng Thạch "
 }, {
 	"code": "HBEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBEC: OTC A - CTCP Điện tử Hòa Bình H.B.E"
 }, {
 	"code": "HBFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBFC: OTC A - CTCP Thực phẩm Hà Bắc"
 }, {
 	"code": "HBGROUP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBGROUP: OTC A - CTCP Thương mại Đầu tư HB"
 }, {
 	"code": "HBHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBHC: OTC A - CTCP Thủy điện Hồ Bốn"
 }, {
 	"code": "HBID",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBID: OTC A - CTCP Đầu tư Phát triển Nhà và Xây dựng Hòa Bình"
 }, {
 	"code": "HBJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBJC: OTC A - Công ty cổ phần Hòa Bình"
 }, {
 	"code": "HBMIEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBMIEC: OTC A - CTCP VLXD và XNK Hồng Hà"
 }, {
 	"code": "HBSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBSC: OTC A - CTCP Chứng Khoán Hồng Bàng"
 }, {
 	"code": "HBWATER",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HBWATER: OTC A - CTCP Nước sạch Hòa Bình"
 }, {
 	"code": "HCBK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HCBK: OTC A - CTCP Bánh kẹo Hải Châu"
 }, {
 	"code": "HCIZ",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HCIZ: OTC A - CTCP đầu tư khu công nghiệp Hòa Cầm"
 }, {
 	"code": "HCSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HCSC: OTC A - CTCP Cung ứng Tàu biển Hải Phòng"
 }, {
 	"code": "HDCC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HDCC1: OTC A - CTCP Xây dựng số 1 Hải Dương"
 }, {
 	"code": "HDGC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HDGC1: OTC A - CTCP May I Hải Dương"
 }, {
 	"code": "HDIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HDIC: OTC A - CTCP Phát triển và Đầu tư Hà Nội"
 }, {
 	"code": "HDTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HDTEX: OTC A - CTCP Dệt Hà Đông - HANOSIMEX"
 }, {
 	"code": "HDVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HDVN: OTC A - CTCP Hóa dược Việt Nam"
 }, {
 	"code": "HECICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HECICO: OTC A - CTCP Đầu tư Xây lắp Điện Hải Phòng"
 }, {
 	"code": "HECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HECO: OTC A - CTCP Tư vấn Thiết kế Đường bộ"
 }, {
 	"code": "HEET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HEET: OTC A - CTCP Sách và Thiết bị Trường học Hà Tây"
 }, {
 	"code": "HEMCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HEMCO: OTC A - CTCP Học liệu Giáo dục Hà Nội"
 }, {
 	"code": "HGC40",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGC40: OTC A - CTCP May 40 Hà Nội"
 }, {
 	"code": "HGCIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGCIC: OTC A - CTCP Tư vấn Đầu tư và Xây Dựng Hương Giang"
 }, {
 	"code": "HGGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGGC: OTC A - CTCP Đá quý và Vàng Hà Nội"
 }, {
 	"code": "HGIH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGIH: OTC A - Khách sạn Quốc tế Hoàng Gia "
 }, {
 	"code": "HGRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGRC: OTC A - CTCP Cao su H�ng G�n"
 }, {
 	"code": "HGST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGST: OTC A - CTCP Sách và Thiết bị Trường học Hà Giang"
 }, {
 	"code": "HGTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HGTC: OTC A - CTCP Du lịch Hương Giang"
 }, {
 	"code": "HHBEER",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHBEER: OTC A - CTCP Bia Hồng Hà"
 }, {
 	"code": "HHBR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHBR: OTC A - CTCP Hồng Hà – Bà Rịa Vũng Tàu"
 }, {
 	"code": "HHHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHHP: OTC A - Nhà máy Thủy điện Hố Hô"
 }, {
 	"code": "HHID",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHID: OTC A - CTCP Đầu tư và Phát triển Hồng Hà"
 }, {
 	"code": "HHL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHL: OTC A - CTCP Hồng Hà Long An"
 }, {
 	"code": "HHSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHSC: OTC A - CTCP Mía đường Hiệp Hòa"
 }, {
 	"code": "HHVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HHVC: OTC A - CTCP Hữu Hưng Viglacera"
 }, {
 	"code": "HICC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HICC1: OTC A - CTCP Đầu tư và Xây dựng số 1 Hà Nội"
 }, {
 	"code": "HICORP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HICORP: OTC A - Công Ty Cổ Phần Phát Triển Hạ Tầng Hà Nội"
 }, {
 	"code": "HIDICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HIDICO: OTC A - CTCP Đầu tư Phát triển Nhà và Khu công nghiệp Đồng Tháp"
 }, {
 	"code": "HIMLAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HIMLAM: OTC A - CTCP Him Lam"
 }, {
 	"code": "HITECHCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HITECHCO: OTC A - CTCP Công nghệ cao"
 }, {
 	"code": "HK14",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HK14: OTC A - CTCP Vận tải Hành khách số 14"
 }, {
 	"code": "HKMN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HKMN: OTC A - CTCP Vận tải Hàng không miền Nam (SATSCO)"
 }, {
 	"code": "HKSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HKSC: OTC A - CTCP Dệt kim Hà Nội"
 }, {
 	"code": "HKTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HKTC: OTC A - CTCP Thương mại Hoàng Kim "
 }, {
 	"code": "HLBM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLBM: OTC A - Công ty Cơ khí tàu thuyền Hạ Long"
 }, {
 	"code": "HLCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLCC: OTC A - CTCP Xi măng Hạ Long"
 }, {
 	"code": "HLCC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLCC1: OTC A - CTCP Xi măng Hạ Long - Trạm nghiền phía Nam "
 }, {
 	"code": "HLCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLCo: OTC A - CTCP Đầu tư Bất động sản Hà Nội"
 }, {
 	"code": "HLLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLLC: OTC A - CTCP Kinh doanh Địa ốc Him Lam (HIMLAMLAND)"
 }, {
 	"code": "HLPC",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "HLPC: OTC B - CTCP Hưng Lộc Phát"
 }, {
 	"code": "HLSF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLSF: OTC A - CTCP Chế biến Thủy sản Hoàng Long"
 }, {
 	"code": "HLUECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HLUECO: OTC A - CTCP Môi trường Đô thị Hạ Long"
 }, {
 	"code": "HMCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HMCS: OTC A - Công ty CP chứng khoán SmartInvest"
 }, {
 	"code": "HMMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HMMC: OTC A - Công ty cổ phần khoáng sản luyện kim Hà Nội"
 }, {
 	"code": "HMXC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HMXC: OTC A - Công ty CP Hoàng Mai Xanh"
 }, {
 	"code": "HNBM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNBM: OTC A - CTCP Vật liệu Xây dựng Hà Nội"
 }, {
 	"code": "HNBR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNBR: OTC A - CTCP Giống Chăn nuôi - Thủy sản Hà Nam"
 }, {
 	"code": "HNCCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNCCI: OTC A - CTCP Đầu tư Xây dựng dân dụng Hà Nội"
 }, {
 	"code": "HNCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNCo: OTC A - CTCP Hữu Nghị"
 }, {
 	"code": "HNFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNFC: OTC A - CTCP Quản lý Quỹ Hữu Nghị"
 }, {
 	"code": "HNIS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNIS: OTC A - CTCP Đầu tư và Dịch vụ Hà Nội"
 }, {
 	"code": "HNNF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNNF: OTC A - CTCP Lương thực Hà Nam Ninh"
 }, {
 	"code": "HNPIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNPIC: OTC A - CTCP Đầu tư Điện lực Hà Nội"
 }, {
 	"code": "HNQB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNQB: OTC A - CTCP Bia Hà Nội - Quảng Bình"
 }, {
 	"code": "HNVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HNVC: OTC A - CTCP tập đoàn Hợp Nhất Việt Nam"
 }, {
 	"code": "HOANGHAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOANGHAC: OTC A - Công ty CP Hoàng Hạc"
 }, {
 	"code": "HOANGTHANH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOANGTHANH: OTC A - CTCP Đầu tư và Phát triển Hạ tầng Hoàng Thành"
 }, {
 	"code": "HOANGTHANH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOANGTHANH: OTC A - CTCP TRẦN HƯNG ĐẠO"
 }, {
 	"code": "HOANMY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOANMY: OTC A - CTCP Tập đoàn Y khoa Hoàn Mỹ"
 }, {
 	"code": "HOME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOME: OTC A - Công ty CP cơ khí Hồng Nam"
 }, {
 	"code": "HOMYCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOMYCO: OTC A - CTCP Hoàn Mỹ"
 }, {
 	"code": "HONGHACC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HONGHACC: OTC A - CTCP Đầu tư Xây dựng và phát triển Đô thị Hồng Hà"
 }, {
 	"code": "HONGLAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HONGLAC: OTC A - CTCP Thương mại và Du lịch Hồng Lạc "
 }, {
 	"code": "HONIZ",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HONIZ: OTC A - CTCP Khu Công nghiệp Hố Nai"
 }, {
 	"code": "HOPHARCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HOPHARCO: OTC A - CTCP Dược và Trang thiết bị Y tế Hòa Bình"
 }, {
 	"code": "HPC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPC1: OTC A - CTCP Hưng Phú"
 }, {
 	"code": "HPCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPCO: OTC A - CTCP Hóa Chất Hưng Phát Hà Bắc"
 }, {
 	"code": "HPEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPEC: OTC A - CTCP Năng lượng Hòa Phát"
 }, {
 	"code": "HPFT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPFT: OTC A - CTCP Thực phẩm Công nghệ Hải Phòng"
 }, {
 	"code": "HPH1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPH1: OTC A - CTCP Đầu tư phát triển hạ tầng thương mại Hà Nội"
 }, {
 	"code": "HPIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPIC: OTC A - Công ty CP Công nghiệp Hapulico"
 }, {
 	"code": "HPINVEST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPINVEST: OTC A - CTCP Đầu tư Hải Phát"
 }, {
 	"code": "HPL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPL: OTC A - Công ty Cổ phần Bến xe Tàu phà Cần Thơ"
 }, {
 	"code": "HPLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPLC: OTC A - CTCP Xây dựng &amp; Phát triển Đô thị Hòa Phát"
 }, {
 	"code": "HPMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPMC: OTC A - CTCP Kim khí Hải Phòng"
 }, {
 	"code": "HPMG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPMG: OTC A - CTCP Thủy tinh Hưng Phú"
 }, {
 	"code": "HPMN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPMN: OTC A - CTCP Phát triển Chăn nuôi Hòa Phát"
 }, {
 	"code": "HPMT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPMT: OTC A - CTCP đầu tư thương mại và hàng hải Hải Phòng"
 }, {
 	"code": "HPPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPPC: OTC A - CTCP Xây lắp Bưu điện Hải Phòng"
 }, {
 	"code": "HPR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPR: OTC A - CTCP Đầu Tư Xây Dựng Hồng Phát"
 }, {
 	"code": "HPS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPS: OTC A - CTCP Đá Xây Dựng Hòa Phát"
 }, {
 	"code": "HPSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPSC: OTC A - CTCP Thương mại Hải Phòng - Hanosimex"
 }, {
 	"code": "HPSCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPSCo: OTC A - CTCP Dịch vụ và Phụ tùng HYUNDAI "
 }, {
 	"code": "HPTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HPTC: OTC A - CTCP Du lịch Hải Phòng"
 }, {
 	"code": "HQMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HQMC: OTC A - CTCP Tư vấn Thương mại Dịch vụ Địa Ốc Hoàng Quân Mê Kông"
 }, {
 	"code": "HQPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HQPC: OTC A - Nhà máy Bao bì Hiệp Quang "
 }, {
 	"code": "HRFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HRFC: OTC A - CTCP Chế biến Thực phẩm Sông Hậu"
 }, {
 	"code": "HRSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HRSC: OTC A - CTCP Chứng khoán Tầm Nhìn"
 }, {
 	"code": "HSBF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HSBF: OTC A - CTCP Lương thực Hà Sơn Bình "
 }, {
 	"code": "HSIE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HSIE: OTC A - Công ty cổ phần XNK Thủy sản Hà Nội"
 }, {
 	"code": "HSSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HSSC: OTC A - Công ty cổ phần Chứng khoán Hà Nội"
 }, {
 	"code": "HSTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HSTC: OTC A - CTCP vận tải và du lịch Hương Sơn"
 }, {
 	"code": "HSUS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HSUS: OTC A - Trường Đại Học Hoa Sen"
 }, {
 	"code": "HTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTB: OTC A - CTCP Xây Dựng Huy Thắng"
 }, {
 	"code": "HTCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTCo: OTC A - CTCP Hiệp Thành"
 }, {
 	"code": "HTCORP",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "HTCORP: OTC B - CTCP ĐẦU TƯ KINH DOANH ĐỊA ỐC HƯNG THỊNH"
 }, {
 	"code": "HTDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTDC: OTC A - CTCP Kinh doanh nhà Thừa Thiên Huế"
 }, {
 	"code": "HTKGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTKGC: OTC A - CTCP Xi măng Hà Tiên - Kiên Giang "
 }, {
 	"code": "HTLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTLC: OTC A - CTCP Thương Mại Đầu Tư Hiệp Thắng Lợi"
 }, {
 	"code": "HTLTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTLTEX: OTC A - CTCP Dệt may Hoàng Thị Loan"
 }, {
 	"code": "HTRI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HTRI: OTC A - CTCP Công Nghiệp Lạnh Hưng Trí"
 }, {
 	"code": "HUAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUAC: OTC A - CTCP Tư Vấn Kiến Trúc Đô Thị Hà Nội"
 }, {
 	"code": "HUBT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUBT: OTC A - Trường Đại học Kinh doanh và Công nghệ Hà Nội"
 }, {
 	"code": "HUD8",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUD8: OTC A - CTCP Đầu tư Phát triển nhà và Đô thị HUD8"
 }, {
 	"code": "HUDCIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUDCIC: OTC A - CTCP Tư vấn đầu tư và xây dựng HUD-CIC"
 }, {
 	"code": "HUDECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUDECO: OTC A - CTCP Đầu tư và Phát triển Giáo dục HUDECO"
 }, {
 	"code": "HUDFIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUDFIC: OTC A - CTCP Phát triển nhà xã hội"
 }, {
 	"code": "HUDIME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUDIME: OTC A - CTCP Đầu tư và khai thác mỏ"
 }, {
 	"code": "HUDSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUDSE: OTC A - CTCP đầu tư phát triển nhà và đô thị HUDSE"
 }, {
 	"code": "HUEIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUEIMEX: OTC A - CTCP XNK và Đầu tư Thừa Thiên Huế"
 }, {
 	"code": "HUJOSCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUJOSCO: OTC A - CTCP Hữu Nghị Nghệ An"
 }, {
 	"code": "HUNEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUNEX: OTC A - CTCP Sản Xuất Thương mại Hữu nghị Đà Nẵng"
 }, {
 	"code": "HUTCOM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUTCOM: OTC A - CTCP Quản lý và Xây dựng Giao thông đô thị Hải Phòng"
 }, {
 	"code": "HUUTOAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUUTOAN: OTC A - Công ty cổ phần Hữu Toàn"
 }, {
 	"code": "HUVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUVC: OTC A - CTCP Ôtô Hyundai – Vinamotor"
 }, {
 	"code": "HUXEKHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HUXEKHA: OTC A - CTCP Xe khách Thừa Thiên Huế"
 }, {
 	"code": "HVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVC: OTC A - CTCP Hưng Vượng"
 }, {
 	"code": "HVCG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVCG: OTC A - CTCP Đầu tư và Công nghệ HVC"
 }, {
 	"code": "HVDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVDC: OTC A - CTCP Tư Vấn Đầu Tư và Xây Dựng HVD"
 }, {
 	"code": "HVFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVFC: OTC A - CTCP Quản lý Quỹ Hùng Việt"
 }, {
 	"code": "HVIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVIC: OTC A - CTCP Đầu tư Hà Việt"
 }, {
 	"code": "HVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVN: OTC A - TCT Hàng Không Việt Nam - CTCP"
 }, {
 	"code": "HVNC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVNC: OTC A - CTCP Hải Vân Nam"
 }, {
 	"code": "HVSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HVSC: OTC A - CTCP Chứng khoán HVS Việt Nam"
 }, {
 	"code": "HYCO42",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HYCO42: OTC A - Công ty CP xây dựng Thủy lợi 42"
 }, {
 	"code": "HYCOYB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HYCOYB: OTC A - CTCP Xây dựng Thủy lợi và Cơ Sở Hạ tầng tỉnh Yên Bái"
 }, {
 	"code": "HYG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HYG: OTC A - Tập đoàn Hà Yến"
 }, {
 	"code": "HYPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HYPC: OTC A - CTCP Nhựa Hưng Yên"
 }, {
 	"code": "HYT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "HYT: OTC A - rể"
 }, {
 	"code": "I40",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "I40: OTC A - CTCP Đầu Tư Và Xây Dựng 40"
 }, {
 	"code": "ICAP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICAP: OTC A - CTCP Công nghệ sinh học Dược phẩm ICA"
 }, {
 	"code": "iCARE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "iCARE: OTC A - CTCP Bệnh viện Máy tính Quốc Tế iCARE"
 }, {
 	"code": "ICDDN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICDDN: OTC A - CTCP Cảng Container Đồng Nai"
 }, {
 	"code": "ICDLB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICDLB: OTC A - CTCP ICD Tân Cảng - Long Bình"
 }, {
 	"code": "ICHD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICHD: OTC A - Công ty CP đầu tư và xây dựng HODECO"
 }, {
 	"code": "ICOSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICOSC: OTC A - CTCP Đầu tư Xây dựng OSC"
 }, {
 	"code": "ICPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICPC: OTC A - CTCP Hàng Gia Dụng Quốc Tế"
 }, {
 	"code": "ICTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ICTC: OTC A - Công ty CP Đầu tư xây dựng và Du lịch"
 }, {
 	"code": "IDCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IDCO: OTC A - CTCP Tư vấn Thiết kế Công nghiệp và Dân dụng"
 }, {
 	"code": "IDICMT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IDICMT: OTC A - CTCP Sản xuất và Kinh doanh Vật liệu Xây dựng IDICO"
 }, {
 	"code": "IDJE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IDJE: OTC A - CTCP Đầu tư Phát triển Giáo dục IDJ - AEC"
 }, {
 	"code": "IDPM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IDPM: OTC A - CTCP Sữa Quốc tế"
 }, {
 	"code": "IDTI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IDTI: OTC A - CTCP Thương mại và Đầu tư Phát triển Công nghệ Quốc tế (IDT)"
 }, {
 	"code": "IECL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IECL: OTC A - CTCP Xuất nhập khẩu Vĩnh Long"
 }, {
 	"code": "IEDL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IEDL: OTC A - CTCP Đầu tư Xuất Nhập Khẩu DakLak"
 }, {
 	"code": "IETCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IETCO: OTC A - CTCP Kinh doanh Thiết bị Công Nghiệp"
 }, {
 	"code": "IFMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IFMC: OTC A - CTCP Quản lý Quỹ Quốc tế"
 }, {
 	"code": "IHCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IHCC: OTC A - CTCP BỆNH VIỆN QUỐC TẾ"
 }, {
 	"code": "ILC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ILC: OTC A - CTCP Hợp tác Lao động với nước ngoài"
 }, {
 	"code": "IMCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IMCC: OTC A - CTCP Đầu tư và Sản Xuất Công nghiệp"
 }, {
 	"code": "IMEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IMEC: OTC A - CTCP Lắp máy và Xây dựng Điện"
 }, {
 	"code": "IMSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IMSC: OTC A - CTCP XNK Chuyên gia Lao động và Kỹ thuật"
 }, {
 	"code": "IMT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IMT: OTC A - Công ty Cổ phần Xuất nhập khẩu Đầu tư Thành phố Hồ Chí Minh (Imexco)"
 }, {
 	"code": "INC7",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INC7: OTC A - Công ty cổ phần In số 7"
 }, {
 	"code": "INCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INCC: OTC A - CTCP Xây Dựng Công Nghiệp"
 }, {
 	"code": "INCHEM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INCHEM: OTC A - CTCP Công nghiệp Hóa chất"
 }, {
 	"code": "INCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INCO: OTC A - CTCP Lắp máy INCO"
 }, {
 	"code": "INCOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INCOCO: OTC A - CTCP Tư vấn và Đầu tư Tràng An"
 }, {
 	"code": "INCONESS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INCONESS: OTC A - CTCP Dịch vụ hỗ trợ doanh nghiệp và Tư vấn đầu tư"
 }, {
 	"code": "INEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INEXIM: OTC A - CTCP Xuất nhập khẩu Hàng công nghiệp"
 }, {
 	"code": "INFISCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INFISCO: OTC A - CTCP Tư vấn Thiết kế và Dịch vụ Đầu tư"
 }, {
 	"code": "INLACOLAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INLACOLAND: OTC A - CTCP Đầu tư và Kinh doanh Bất động sản INLACO "
 }, {
 	"code": "INLACOLAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INLACOLAND: OTC A - CTCP Đầu tư và Kinh doanh Bất động sản INLACO "
 }, {
 	"code": "INND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INND: OTC A - CTCP In Nam Định"
 }, {
 	"code": "INST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INST: OTC A - CTCP In Sóc Trăng"
 }, {
 	"code": "INTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTC: OTC A - CTCP Thương mại Quốc Tế"
 }, {
 	"code": "INTE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTE: OTC A - CTCP Tư vấn Đầu tư Xây dựng Viễn thông Đông Dương "
 }, {
 	"code": "INTECH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTECH: OTC A - CTCP KỸ THUẬT VÀ CÔNG NGHIỆP VIỆT NAM"
 }, {
 	"code": "INTIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTIMEX: OTC A - CTCP Intimex Việt Nam"
 }, {
 	"code": "INTIMEXHCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTIMEXHCM: OTC A - Công ty Cổ phần Tập đoàn Intimex"
 }, {
 	"code": "INTIMEXHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTIMEXHN: OTC A - CTCP Sản Xuất và Thương mại Intimex Hà Nội"
 }, {
 	"code": "INTOURCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTOURCO: OTC A - CTCP Dịch vụ Du lịch Quốc tế tỉnh Bà Rịa Vũng Tàu"
 }, {
 	"code": "INTRESCOHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTRESCOHA: OTC A - CTCP Bê tông Hải Âu"
 }, {
 	"code": "INTRESCOHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INTRESCOHA: OTC A - CTCP Bê tông Hải Âu"
 }, {
 	"code": "INVESTCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INVESTCO: OTC A - CTCP  Đầu Tư và Phát Triển Xây Dựng"
 }, {
 	"code": "INVESTCOM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INVESTCOM: OTC A - CTCP Đầu tư INVESTCOM"
 }, {
 	"code": "INVESTIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INVESTIP: OTC A - CTCP Sở hữu công nghiệp INVESTIP"
 }, {
 	"code": "INVESTREAL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INVESTREAL: OTC A - CTCP Đầu tư và Kinh doanh Bất Động Sản"
 }, {
 	"code": "INVESTREAL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "INVESTREAL: OTC A - CTCP Đầu tư và Kinh doanh Bất Động Sản"
 }, {
 	"code": "IPACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IPACO: OTC A - CTCP Đầu tư Kinh doanh và Phát triển Hạ tầng KCN Phúc Hà"
 }, {
 	"code": "IRSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "IRSC: OTC A - CTCP Chứng khoán Quốc tế Hoàng Gia"
 }, {
 	"code": "ISLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ISLC: OTC A - CTCP Vận tải biển và hợp tác lao động quốc tế"
 }, {
 	"code": "ITASCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ITASCO: OTC A - CTCP Đầu tư Tài chính Thương mại Dịch vụ FICO"
 }, {
 	"code": "JSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "JSC: OTC A - CTCP ĐT & XD Cầu Đường Hà Nội"
 }, {
 	"code": "JSIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "JSIC: OTC A - CTCP Chứng khoán Nhật Bản"
 }, {
 	"code": "KAD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KAD: OTC A - Công ty CP KAD Việt Nam"
 }, {
 	"code": "KATC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KATC: OTC A - CTCP Chè Kim Anh"
 }, {
 	"code": "KBBC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KBBC: OTC A - C�ng ty Bia Kim B�i"
 }, {
 	"code": "KBHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KBHC: OTC A - Thủy điện Khe Bố"
 }, {
 	"code": "KBT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KBT: OTC A - CTCP Gạch ngói Kiên Giang"
 }, {
 	"code": "KDGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KDGC: OTC A - CTCP Địa ốc Golf Khang Điền"
 }, {
 	"code": "KDLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KDLC: OTC A - CTCP Địa Ốc Kinh Đô"
 }, {
 	"code": "KECC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KECC: OTC A - Công ty cổ phần Cơ điện và xây dựng Kontum"
 }, {
 	"code": "KEMNGHIA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KEMNGHIA: OTC A - CTCP Kềm Nghĩa"
 }, {
 	"code": "KEVS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KEVS: OTC A - CTCP Chứng khoán Maybank Kim Eng"
 }, {
 	"code": "KGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGC: OTC A - Công ty cổ phần Phat triển đô thị Kiên Giang"
 }, {
 	"code": "KGCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGCC: OTC A - CTCP Tư vấn Xây dựng Kiên Giang"
 }, {
 	"code": "KGCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGCI: OTC A - CTCP Tập đoàn Tư vấn Đầu tư và Xây dựng Kiên Giang"
 }, {
 	"code": "KGFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGFC: OTC A - CTCP Khai thác Thủy sản Kiên Giang"
 }, {
 	"code": "KGR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGR: OTC A - CTCP Tập đoàn Điện lạnh Điện máy Việt Úc"
 }, {
 	"code": "KGTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGTC: OTC A - Công ty CP kinh doanh nông sản Kiên Giang"
 }, {
 	"code": "KGTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGTL: OTC A - CTCP Cơ khí Xây dựng Giao thông Thăng Long"
 }, {
 	"code": "KGTR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGTR: OTC A - CTCP Du lịch Kiên Giang"
 }, {
 	"code": "KGWC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KGWC: OTC A - CTCP Xây dựng Giao thông Thủy lợi Kiên Giang"
 }, {
 	"code": "KHANHTAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KHANHTAN: OTC A - CTCP Khánh Tân"
 }, {
 	"code": "KHPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KHPHAR: OTC A - CTCP Dược Khánh Hòa"
 }, {
 	"code": "KIFOCAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KIFOCAN: OTC A - CTCP Thực phẩm Đóng hộp Kiên Giang"
 }, {
 	"code": "KIGICE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KIGICE: OTC A - CTCP Xi măng Kiên Giang"
 }, {
 	"code": "KIGIFAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KIGIFAC: OTC A - CTCP Nông lâm sản Kiên Giang"
 }, {
 	"code": "KIMTIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KIMTIN: OTC A - CTCP Kim Tín"
 }, {
 	"code": "KISC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KISC: OTC A - CTCP Chứng khoán KIS Việt Nam"
 }, {
 	"code": "KISIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KISIMEX: OTC A - CTCP Thủy sản Kiên Giang"
 }, {
 	"code": "KISUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KISUCO: OTC A - Công ty CP mía đường Kiên Giang"
 }, {
 	"code": "KLS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KLS: OTC A - CTCP Chứng Khoán Kim Long"
 }, {
 	"code": "KLTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KLTC: OTC A - CTCP Du lịch Kim Liên"
 }, {
 	"code": "KMF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KMF: OTC A - CTCP Mirae Fiber"
 }, {
 	"code": "KMKH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KMKH: OTC A - C�ng ty CP Kh�a Minh Khai"
 }, {
 	"code": "KNHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KNHC: OTC A - Thủy điện Krông HNăng"
 }, {
 	"code": "KOMATSU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KOMATSU: OTC A - CÔNG TY TNHH THIẾT BỊ NẶNG MARUBENI"
 }, {
 	"code": "KPIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KPIC: OTC A - CTCP Đầu Tư Sản Xuất Thương Mại Kim Phong"
 }, {
 	"code": "KRWT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KRWT: OTC A - CTCP Vận tải Thủy bộ Kiên Giang"
 }, {
 	"code": "KSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KSG: OTC A - CTCP Khoáng sản và Vật liệu Xây dựng Gia Lai"
 }, {
 	"code": "KSL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KSL: OTC A - CTCP Khai thác và chế biến khoáng sản Lào Cai"
 }, {
 	"code": "KSMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KSMC: OTC A - CTCP Khoa học Sản xuất Mỏ"
 }, {
 	"code": "KSS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KSS: OTC A - CTCP Khoáng sản Na Rì Hamico"
 }, {
 	"code": "KST10A",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KST10A: OTC A - CTCP Khách sạn Du lịch Tháng Mười"
 }, {
 	"code": "KTBX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KTBX: OTC A - CTCP Bến Xe Kon Tum"
 }, {
 	"code": "KTCF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KTCF: OTC A - CTCP Thương mại Kiên Giang"
 }, {
 	"code": "KTGR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KTGR: OTC A - CTCP Khải Toàn"
 }, {
 	"code": "KUDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KUDC: OTC A - CTCP phát triển đô thị Kiên Giang"
 }, {
 	"code": "KVSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "KVSC: OTC A - CTCP Chứng khoán Kenanga Việt Nam"
 }, {
 	"code": "LAFCHEMCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LAFCHEMCO: OTC A - CTCP Supe Phốt Phát và Hóa Chất Lâm Thao"
 }, {
 	"code": "LAGEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LAGEXIM: OTC A - CTCP May Xuất khẩu Long An"
 }, {
 	"code": "LAMICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LAMICO: OTC A - CTCP Cơ khí Chế tạo máy Long An"
 }, {
 	"code": "LANMAK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LANMAK: OTC A - CTCP đầu tư xây dựng bất động sản Lanmak"
 }, {
 	"code": "LAPACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LAPACO: OTC A - CTCP Bao bì và Thương mại Lâm Thao"
 }, {
 	"code": "LARECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LARECO: OTC A - CTCP Đầu tư Tài Nguyên và Năng lượng Lào Cai"
 }, {
 	"code": "LAVICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LAVICO: OTC A - CTCP Tư vấn Thiết kế &amp; Xây dựng LAVICO"
 }, {
 	"code": "LCHAURE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LCHAURE: OTC A - CTCP Đầu tư Tài Nguyên và Năng lượng Lai Châu"
 }, {
 	"code": "LCHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LCHP: OTC A - CTCP Thủy điện Lào Cai"
 }, {
 	"code": "LCMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LCMC: OTC A - Công ty CP Licogi 13 - Vật liệu xây dựng"
 }, {
 	"code": "LDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LDC: OTC A - LDC"
 }, {
 	"code": "LDPBP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LDPBP: OTC A - CTCP In và Phát hành Sách Lâm Đồng"
 }, {
 	"code": "LDTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LDTC: OTC A - CTCP Chè Lâm Đồng"
 }, {
 	"code": "LEGAMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LEGAMEX: OTC A - CTCP Giày Da và May Mặc Xuất Khẩu"
 }, {
 	"code": "LHCONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LHCONS: OTC A - CTCP Đầu tư Lạc Hồng"
 }, {
 	"code": "LHG_T1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LHG_T1: OTC A - Trái phiếu CTCP Long Hậu"
 }, {
 	"code": "LHPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LHPC: OTC A - CTCP Giấy tập Lệ Hoa"
 }, {
 	"code": "LI13",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LI13: OTC A - Công ty CP Licogi 13 - Cơ giới hạ tầng"
 }, {
 	"code": "LICOGI10",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI10: OTC A - CTCP Cơ giới và Xây lắp số 10"
 }, {
 	"code": "LICOGI13FC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI13FC: OTC A - CTCP LICOGI 13 – Nền móng xây dựng"
 }, {
 	"code": "LICOGI13FC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI13FC: OTC A - CTCP LICOGI 13 – Nền móng xây dựng"
 }, {
 	"code": "LICOGI14",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI14: OTC A - CTCP LICOGI 14"
 }, {
 	"code": "LICOGI15",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI15: OTC A - CTCP Xây lắp và cơ giới số 15"
 }, {
 	"code": "LICOGI161",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI161: OTC A - CTCP Licogi 16.1"
 }, {
 	"code": "LICOGI162",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI162: OTC A - CTCP Xây dựng LICOGI 16.2"
 }, {
 	"code": "LICOGI165",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI165: OTC A - CTCP Licogi 16.5"
 }, {
 	"code": "LICOGI169",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI169: OTC A - Công ty cổ phần LICOGI 16.9"
 }, {
 	"code": "LICOGI16M",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI16M: OTC A - CTCP Licogi 16 M&amp;C"
 }, {
 	"code": "LICOGI17",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI17: OTC A - CTCP LICOGI 17"
 }, {
 	"code": "LICOGI181",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI181: OTC A - CTCP Đầu tư và Xây dựng số 18.1"
 }, {
 	"code": "LICOGI185",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LICOGI185: OTC A - CTCP Đầu tư và xây dựng số 18.5"
 }, {
 	"code": "LIDOVIT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LIDOVIT: OTC A - CTCP Công nghiệp &amp; Thương mại LIDOVIT"
 }, {
 	"code": "LILAMAHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LILAMAHN: OTC A - CTCP LILAMA Hà Nội"
 }, {
 	"code": "LILAMAUDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LILAMAUDC: OTC A - CTCP Đầu tư Xây dựng và Phát triển Đô thị LILAMA"
 }, {
 	"code": "LIMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LIMC: OTC A - CTCP Quản lý Quỹ Bông Sen"
 }, {
 	"code": "LISEMCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LISEMCO: OTC A - CTCP Lisemco"
 }, {
 	"code": "LIVITRANS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LIVITRANS: OTC A - CTCP Vận tải và Thương mại Liên Việt"
 }, {
 	"code": "LIXEHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LIXEHA: OTC A - CTCP LIXEHA"
 }, {
 	"code": "LKWA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LKWA: OTC A - CTCP Cấp nước Long Khánh"
 }, {
 	"code": "LL2CONST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LL2CONST: OTC A - CTCP Xây dựng Lũng Lô 2"
 }, {
 	"code": "LMPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LMPC: OTC A - CTCP Giống gia cầm Lương Mỹ"
 }, {
 	"code": "LMRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LMRC: OTC A - CTCP Liên Minh"
 }, {
 	"code": "LMSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LMSC: OTC A - CTCP Dịch vụ Bảo vệ Long Mỹ"
 }, {
 	"code": "LNSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LNSC: OTC A - CTCP Mía đường La Ngà"
 }, {
 	"code": "LODH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LODH: OTC A - CTCP Phát triển nguồn nhân lực LOD"
 }, {
 	"code": "LOTHACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LOTHACO: OTC A - CTCP Nhựa Long Thành"
 }, {
 	"code": "LSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LSG: OTC A - CTCP Bất động sản Sài Gòn Vina"
 }, {
 	"code": "LSVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LSVC: OTC A - CTCP Xi măng Vinaconex Lương Sơn Hòa Bình"
 }, {
 	"code": "LTCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LTCo: OTC A - CTCP Long Thọ"
 }, {
 	"code": "LTRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LTRC: OTC A - CTCP Thương mại Lạng Sơn"
 }, {
 	"code": "LTSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LTSC: OTC A - CTCP Dịch vụ Viễn thông Thăng Long"
 }, {
 	"code": "LTSD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LTSD: OTC A - CTCP Luyện Thép Sông Đà"
 }, {
 	"code": "LVAI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LVAI: OTC A - CTCP Đầu tư Long Việt An"
 }, {
 	"code": "LVCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LVCC: OTC A - CTCP Tin học Lạc Việt"
 }, {
 	"code": "LVSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LVSC: OTC A - CTCP Chứng khoán Liên Việt"
 }, {
 	"code": "LXCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "LXCM: OTC A - Nhà máy Xi măng Lưu Xá"
 }, {
 	"code": "MAC115",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MAC115: OTC A - CTCP Sản xuất Vật liệu và Xây dựng Công trình 115"
 }, {
 	"code": "MACHINCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MACHINCO: OTC A - CTCP Thiết bị Phụ tùng"
 }, {
 	"code": "MACHINCO1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MACHINCO1: OTC A - CTCP Thiết bị"
 }, {
 	"code": "MAISON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MAISON: OTC A - CTCP Mai Son"
 }, {
 	"code": "MASIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MASIMEX: OTC A - CTCP Vật tư và xuất nhập khẩu"
 }, {
 	"code": "MATEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MATEXIM: OTC A - Công ty Vật tư và Thiết bị Toàn bộ"
 }, {
 	"code": "MAX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MAX: OTC A - CTCP Khai Khoáng &amp; Cơ Khí Hữu Nghị Vĩnh Sinh"
 }, {
 	"code": "MB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MB: OTC A - Ngân hàng TMCP Quân đội"
 }, {
 	"code": "MBFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MBFM: OTC A - CTCP Quản lý Quỹ đầu tư MB"
 }, {
 	"code": "MBLAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MBLAND: OTC A - Tổng công ty MBLand"
 }, {
 	"code": "MCBD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MCBD: OTC A - CTCP Gạch ngói Cao cấp "
 }, {
 	"code": "MCCONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MCCONS: OTC A - CTCP Thi Công Cơ giới và Dịch vụ"
 }, {
 	"code": "MCIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MCIM: OTC A - CTCP XUẤT NHẬP KHẨU MÁY VÀ PHỤ TÙNG"
 }, {
 	"code": "MCL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MCL: OTC A - CTCP Phát triển Nhà &amp; Sản Xuất VLXD Chí Linh"
 }, {
 	"code": "MCMI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MCMI: OTC A - CTCP Giống bò sữa Mộc Châu"
 }, {
 	"code": "MCV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MCV: OTC A - CTCP Cavico Việt Nam Khai Thác Mỏ &amp; Xây Dựng"
 }, {
 	"code": "MDBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDBANK: OTC A - Ngân hàng TMCP Phát triển Mê Kông"
 }, {
 	"code": "MDCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDCC: OTC A - CTCP Hóa chất Minh Đức"
 }, {
 	"code": "MDKC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDKC: OTC A - CTCP Dệt Mùa Đông"
 }, {
 	"code": "MDSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDSC: OTC A - CTCP Thiết bị Y tế Medinsco"
 }, {
 	"code": "MDSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDSG: OTC A - CTCP May - Diêm Sài Gòn"
 }, {
 	"code": "MDTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDTC: OTC A - CÔNG TY TNHH MTV TOYOTA MỸ ĐÌNH"
 }, {
 	"code": "MDWC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MDWC: OTC A - CTCP Gỗ Minh Dương"
 }, {
 	"code": "MEC624",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MEC624: OTC A - Công ty Vật tư Thiết bị và Xây dựng Công trình 624"
 }, {
 	"code": "MECO623",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MECO623: OTC A - CTCP Cơ khí Xây dựng Công trình 623"
 }, {
 	"code": "MECOTN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MECOTN: OTC A - CTCP Cơ điện luyện kim Thái Nguyên"
 }, {
 	"code": "MEDIPLAST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MEDIPLAST: OTC A - CTCP Nhựa Y tế Mediplast"
 }, {
 	"code": "MEGA3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MEGA3: OTC A - CTCP Dược phẩm Sông Hồng"
 }, {
 	"code": "MEINFA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MEINFA: OTC A - CTCP MEINFA"
 }, {
 	"code": "MEKONIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MEKONIMEX: OTC A - CTCP Nông sản thực phẩm Xuất khẩu Thành phố Cần Thơ"
 }, {
 	"code": "MEKOPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MEKOPHAR: OTC A - CTCP Hoá - Dược Phẩm Mekophar"
 }, {
 	"code": "MENETCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MENETCO: OTC A - CTCP Kim loại màu Nghệ Tĩnh"
 }, {
 	"code": "METALVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "METALVN: OTC A - CTCP Seoul Metal Việt Nam"
 }, {
 	"code": "METECH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "METECH: OTC A - CTCP Metech"
 }, {
 	"code": "MHBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MHBANK: OTC A - Ngân hàng Phát triển Nhà Đồng Bằng Sông Cửu Long"
 }, {
 	"code": "MHBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MHBS: OTC A - CTCP Chứng khoán NH Phát triển nhà đồng bằng sông Cửu Long"
 }, {
 	"code": "MHHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MHHC: OTC A - CTCP Phát triển Nhà Minh Hải"
 }, {
 	"code": "MHPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MHPC: OTC A - Công ty cổ phần Dược Minh Hải"
 }, {
 	"code": "MHSF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MHSF: OTC A - CTCP Thủy sản Minh Hải (Sea Minh Hải)"
 }, {
 	"code": "MIH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MIH: OTC A - CTCP XNK Khoáng Sản Hà Nam"
 }, {
 	"code": "MINEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MINEXCO: OTC A - CTCP Khoáng sản và Đầu tư Khánh Hòa"
 }, {
 	"code": "MIPEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MIPEC: OTC A - CTCP Hóa dầu Quân đội"
 }, {
 	"code": "MIRAEASSET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MIRAEASSET: OTC A - CT TNHH Chứng Khoán Mirae Asset Việt Nam"
 }, {
 	"code": "MIRAEASSET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MIRAEASSET: OTC A - CTCP Chứng Khoán Mirae Asset Việt Nam"
 }, {
 	"code": "MIREX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MIREX: OTC A - CTCP Khoáng sản và Luyên kim Việt Nam"
 }, {
 	"code": "MISA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MISA: OTC A - CTCP Misa"
 }, {
 	"code": "MITECH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MITECH: OTC A - CTCP Ứng dụng Khoa học và Công nghệ - MITEC"
 }, {
 	"code": "MKSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MKSC: OTC A - CTCP Chứng khoán Mê-kông"
 }, {
 	"code": "MKTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MKTB: OTC A - CTCP Xuất Nhập khẩu và Đầu tư Xây dựng Minh Khai Thái Bình"
 }, {
 	"code": "MKTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MKTC: OTC A - Công ty cổ phần truyền thông Mê Kông"
 }, {
 	"code": "ML",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "ML: OTC A - CTCP Mai Lan"
 }, {
 	"code": "MLHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MLHP: OTC A - CTCP Thủy điện Măng Lin"
 }, {
 	"code": "MLIG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MLIG: OTC A - CTCP Tập đoàn Mai Linh"
 }, {
 	"code": "MLTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MLTC: OTC A - CTCP Sản xuất và Thương mại Mai Linh"
 }, {
 	"code": "MNCT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MNCT: OTC A - CTCP Xây dựng Giao thông Dịch vụ Thương mại Miền Nam "
 }, {
 	"code": "MNPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MNPC: OTC A - CTCP Dược phẩm Trung ương Mediplantex"
 }, {
 	"code": "MNX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MNX: OTC A - CTCP Xuất nhập khẩu Khoáng sản (MINEXPORT)"
 }, {
 	"code": "MOMO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MOMO: OTC A - Công ty Cổ phần Dịch vụ Di Động Trực Tuyến"
 }, {
 	"code": "MOMOTA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MOMOTA: OTC A - CTCP 118"
 }, {
 	"code": "MPLG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MPLG: OTC A - Công ty TNHH Minh Phương"
 }, {
 	"code": "MPOS",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "MPOS: OTC B - Công ty Cổ phần Công nghệ MPOS Việt Nam"
 }, {
 	"code": "MPPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MPPC: OTC A - CTCP Sản xuất và Thương mại Minh Phúc"
 }, {
 	"code": "MQLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MQLC: OTC A - CTCP Minh Quang Việt Nam"
 }, {
 	"code": "MSBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MSBANK: OTC A - Ngân hàng TMCP Hàng hải Việt Nam"
 }, {
 	"code": "MSBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MSBS: OTC A - CTCP Chứng khoán KB Việt Nam"
 }, {
 	"code": "MSGS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MSGS: OTC A - CTCP Chứng khoán Morgan Stanley Hướng Việt"
 }, {
 	"code": "MTCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTCo: OTC A - CTCP Vật tư Vận tải Xây lắp Điện lực miền Trung"
 }, {
 	"code": "MTCT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTCT: OTC A - CTCP Du lịch Tà Cú"
 }, {
 	"code": "MTHD",
 	"codetype": "",
 	"stock_exchange": "OTC",
 	"name": "MTHD: OTC  - CTCP Môi trường đô thị Hải Dương"
 }, {
 	"code": "MTHG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTHG: OTC A - Tập đoàn khách sạn Mường Thanh"
 }, {
 	"code": "MTJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTJC: OTC A - CTCP Tư vấn và xây dựng công trình Miền Trung"
 }, {
 	"code": "MTLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTLC: OTC A - CTCP vật liệu xây dựng Motilen Cần Thơ"
 }, {
 	"code": "MTRS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTRS: OTC A - CTCP Khách sạn Mỹ Trà"
 }, {
 	"code": "MTS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTS: OTC A - Tổng công ty Tiên Sơn Thanh Hóa"
 }, {
 	"code": "MTTG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MTTG: OTC A - CTCP Tập đoàn Minh Tâm"
 }, {
 	"code": "MVIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MVIC: OTC A - CTCP Đầu tư Minh Việt"
 }, {
 	"code": "MWIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MWIC: OTC A - Công ty CP Đầu tư Thế Giới Di Động"
 }, {
 	"code": "MYLAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "MYLAN: OTC A - CTCP Tập đoàn Mỹ Lan"
 }, {
 	"code": "NACST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NACST: OTC A - CTCP Vận tải Biển và Thương mại Nghệ An "
 }, {
 	"code": "NAFOODS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAFOODS: OTC A - CTCP Thực phẩm"
 }, {
 	"code": "NAGACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAGACO: OTC A - CTCP May Nam Định"
 }, {
 	"code": "NAGT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAGT: OTC A - CTCP Du lịch xanh Nghệ An - VNECO"
 }, {
 	"code": "NAHDICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAHDICO: OTC A - CTCP Đầu tư và Phát triển Nhà Nghệ An"
 }, {
 	"code": "NAMABANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAMABANK: OTC A - Ngân hàng TMCP Nam Á"
 }, {
 	"code": "NAMAFOOT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAMAFOOT: OTC A - CTCP XNK Giầy dép Nam Á"
 }, {
 	"code": "NAMDO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAMDO: OTC A - CTCP Xuất nhập khẩu Lương thực Thực phẩm Hà Nội"
 }, {
 	"code": "NAMHAICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAMHAICO: OTC A - CTCP Nam Hải"
 }, {
 	"code": "NAPAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAPAS: OTC A - CTCP Thanh toán Quốc gia Việt Nam"
 }, {
 	"code": "NAPHACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAPHACO: OTC A - CTCP Dược phẩm Nam Hà"
 }, {
 	"code": "NAPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAPHAR: OTC A - CTCP Dược - Vật tư Y tế Nghệ An"
 }, {
 	"code": "NASC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NASC: OTC A - CTCP Chứng khoán Nam An"
 }, {
 	"code": "NASENCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NASENCO: OTC A - CTCP Đầu tư Xây dựng Nam Triệu"
 }, {
 	"code": "NASHICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NASHICO: OTC A - CTCP Vận tải Biển Nam Triệu"
 }, {
 	"code": "NASICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NASICO: OTC A - CÔNG TY TNHH MTV ĐÓNG TÀU NAM TRIỆU"
 }, {
 	"code": "NATC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NATC: OTC A - CTCP Thương mại Nghệ An"
 }, {
 	"code": "NATEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NATEXCO: OTC A - Tổng CTCP Dệt may Nam Định"
 }, {
 	"code": "NAWELCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NAWELCO: OTC A - CTCP Công nghiệp Vật liệu hàn Nam Triệu "
 }, {
 	"code": "NBCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NBCS: OTC A - CTCP Bê tông - Thép Ninh Bình"
 }, {
 	"code": "NBTNC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NBTNC: OTC A - CTCP Cáp treo núi bà tây ninh"
 }, {
 	"code": "NCHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NCHC: OTC A - Thủy điện Nậm Chiến"
 }, {
 	"code": "NCHP1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NCHP1: OTC A - Nhà máy Thủy điện Nậm Chiến 1"
 }, {
 	"code": "NCHP2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NCHP2: OTC A - Nhà máy Thủy điện Nậm Chiến 2"
 }, {
 	"code": "NCSF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NCSF: OTC A - Công ty Cổ phần XNK Thủy sản Năm Căn (SEANAMICO)"
 }, {
 	"code": "NCST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NCST: OTC A - CTCP Công nghệ NCS"
 }, {
 	"code": "NDHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NDHC: OTC A - Nhà máy Thủy điện Nậm Đông"
 }, {
 	"code": "NDSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NDSC: OTC A - Công ty Thép Nam Đô"
 }, {
 	"code": "NEDI3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NEDI3: OTC A - CTCP Đầu tư và Phát triển Điện miền Bắc 3"
 }, {
 	"code": "NEOC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NEOC: OTC A - CTCP Đầu tư Phát triển Công nghệ và Truyền thông"
 }, {
 	"code": "NEST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NEST: OTC A - Công ty CP Nền móng Sông Đà Thăng Long"
 }, {
 	"code": "NETPAYMENT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NETPAYMENT: OTC A - CTCP Truyền thông và Dữ liệu Thanh toán"
 }, {
 	"code": "NETPAYMENT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NETPAYMENT: OTC A - CTCP Truyền thông và Dữ liệu Thanh toán"
 }, {
 	"code": "NETV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NETV: OTC A - CTCP ĐỊNH GIA NÉT"
 }, {
 	"code": "NF17",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NF17: OTC A - CTCP Nha Trang Seafoods - F17"
 }, {
 	"code": "NGANLUONG",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "NGANLUONG: OTC B - Công ty Cổ phần Ngân Lượng"
 }, {
 	"code": "NGHIA",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "NGHIA: OTC D - Công ty Cổ phần Kềm Nghĩa"
 }, {
 	"code": "NHANACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHANACO: OTC A - CTCP Nhất Nam"
 }, {
 	"code": "NHANCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHANCO: OTC A - CTCP Alumin Nhân Cơ - TKV "
 }, {
 	"code": "NHATEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHATEXCO: OTC A - CTCP Dệt May Nha Trang"
 }, {
 	"code": "NHPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHPT: OTC A - CTCP Dự án Công nghệ Nhật Hải"
 }, {
 	"code": "NHS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHS: OTC A - CTCP Đường Ninh Hòa"
 }, {
 	"code": "NHUNGOC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHUNGOC: OTC A - Công ty Sản xuất & Thương mại XNK Như Ngọc"
 }, {
 	"code": "NHW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NHW: OTC A - CTCP Ngô Han"
 }, {
 	"code": "NIBELC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NIBELC: OTC A - CTCP Xây dựng và Cung ứng Lao động Quốc tế"
 }, {
 	"code": "NICOTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NICOTEX: OTC A - Công ty CP NICOTEX"
 }, {
 	"code": "NIDIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NIDIC: OTC A - CTCP Đầu tư và phát triển Hạ tầng Nghi Sơn"
 }, {
 	"code": "NIKKO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NIKKO: OTC A - CTCP hoá mỹ phẩm Nikko Việt Nam"
 }, {
 	"code": "NINHBAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NINHBAC: OTC A - CTCP Đầu tư Tài chính Ninh Bắc"
 }, {
 	"code": "NIS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NIS: OTC A - CTCP Dịch vụ Hạ tầng Mạng"
 }, {
 	"code": "NISACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NISACO: OTC A - CTCP Muối Ninh Thuận"
 }, {
 	"code": "NITAGREX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NITAGREX: OTC A - CTCP Xuất khẩu Nông sản Ninh Thuận"
 }, {
 	"code": "NIWACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NIWACO: OTC A - CTCP Cấp nước Ninh Thuận"
 }, {
 	"code": "NKD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NKD: OTC A - CTCP Chế Biến Thực Phẩm Kinh Đô Miền Bắc"
 }, {
 	"code": "NKDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NKDC: OTC A - CTCP Dầu thực vật Tân Bình"
 }, {
 	"code": "NKIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NKIC: OTC A - CTCP Đầu tư Nam Khang"
 }, {
 	"code": "NLADC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NLADC: OTC A - CTCP Phát triển Căn hộ Nam Long"
 }, {
 	"code": "NLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NLC: OTC A - CTCP Thủy Điện Nà Lơi"
 }, {
 	"code": "NLDR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NLDR: OTC A - CTCP Nhà hàng Ngọc Lan Đình "
 }, {
 	"code": "NLIG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NLIG: OTC A - Công ty cổ phần Đầu tư Nam Long"
 }, {
 	"code": "NLSH",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "NLSH: OTC B - CTCP Phát triển Năng lượng Sơn Hà"
 }, {
 	"code": "NPC2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NPC2: OTC A - CTCP Dược phẩm TW2"
 }, {
 	"code": "NSAC",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "NSAC: OTC B - CTCP Nông thủy sản Nghệ An"
 }, {
 	"code": "NSCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSCE: OTC A - CTCP Xi măng Nghi Sơn"
 }, {
 	"code": "NSHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSHP: OTC A - Nhiệt Điện Nông Sơn"
 }, {
 	"code": "NSHY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSHY: OTC A - CTCP Nước sạch Hưng Yên"
 }, {
 	"code": "NSIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSIC: OTC A - CTCP Chứng khoán Quốc Gia"
 }, {
 	"code": "NSIG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSIG: OTC A - CTCP Tập đoàn Quốc Tế Năm Sao"
 }, {
 	"code": "NSN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSN: OTC A - CTCP Xây Dựng 565"
 }, {
 	"code": "NSP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSP: OTC A - CTCP Nhựa Sam Phú"
 }, {
 	"code": "NSTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NSTC: OTC A - CTCP Ngọc Sương"
 }, {
 	"code": "NT2RC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NT2RC: OTC A - Công ty CP Cấu kiện bê tông Nhơn Trạch 2"
 }, {
 	"code": "NTHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTHP: OTC A - Thủy Điện Nậm Tóng"
 }, {
 	"code": "NTIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTIC: OTC A - CTCP Đầu tư Nhơn Trạch"
 }, {
 	"code": "NTIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTIP: OTC A - Công ty CP Đầu tư dầu khí Nha Trang"
 }, {
 	"code": "NTJSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTJSC: OTC A - CTCP Sản xuất Thương mại Dịch vụ Ngọc Tùng"
 }, {
 	"code": "NTPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTPC: OTC A - CTCP Nhựa Nha Trang"
 }, {
 	"code": "NTSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTSC: OTC A - CTCP Nam Trường Sơn"
 }, {
 	"code": "NTSR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTSR: OTC A - CTCP Công nghiệp Tàu Thủy và Xây dựng Nam Triệu"
 }, {
 	"code": "NTWA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NTWA: OTC A - CTCP Cấp nước Nhơn Trạch"
 }, {
 	"code": "NUTIFOOD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NUTIFOOD: OTC A - CTCP thực phẩm Dinh dưỡng Nutifood"
 }, {
 	"code": "NVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NVC: OTC A - CTCP Nam Vang"
 }, {
 	"code": "NVFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NVFC: OTC A - Công ty CP đầu tư tài chính Nam Việt"
 }, {
 	"code": "NVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NVN: OTC A - CTCP Nhà Việt Nam"
 }, {
 	"code": "NVOJSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NVOJSC: OTC A - CTCP Lọc hóa dầu Nam Việt"
 }, {
 	"code": "NVSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "NVSC: OTC A - CTCP Chứng khoán Navibank"
 }, {
 	"code": "OCB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OCB: OTC A - Ngân hàng TMCP Phương Đông"
 }, {
 	"code": "OCSI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OCSI: OTC A - CTCP Chứng khoán Đại Dương"
 }, {
 	"code": "OJBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OJBANK: OTC A - Ngân hàng Thương mại TNHH MTV Đại Dương"
 }, {
 	"code": "OSCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OSCS: OTC A - CTCP Chứng khoán Đại Tây Dương"
 }, {
 	"code": "OSVP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OSVP: OTC A - CTCP OSEVEN"
 }, {
 	"code": "OTG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OTG: OTC A - Công ty Cổ phần Otran Logistics"
 }, {
 	"code": "OTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OTL: OTC A - Công ty cổ phần Otran Logistics"
 }, {
 	"code": "OTO32",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "OTO32: OTC A - Công ty cổ phần cơ khí  Ô tô 3-2"
 }, {
 	"code": "PACKEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PACKEXIM: OTC A - CTCP Sản xuất và XNK Bao Bì"
 }, {
 	"code": "PACKSIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PACKSIMEX: OTC A - CTCP Xuất nhập khẩu Sản xuất Gia công và Bao bì"
 }, {
 	"code": "PADC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PADC: OTC A - CTCP  Đầu tư An Dương"
 }, {
 	"code": "PALC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PALC: OTC A - CTCP H�ng Kh�ng Jetstar Pacific Airlines"
 }, {
 	"code": "PAPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PAPC: OTC A - CTCP Dầu khí Đầu tư Khai thác Cảng Phước An"
 }, {
 	"code": "PAYOO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PAYOO: OTC A - Công ty Cổ phần Dịch vụ Trực tuyến Cộng Đồng Việt"
 }, {
 	"code": "PBMN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PBMN: OTC A - Công ty CP Phân bón Miền Nam"
 }, {
 	"code": "PCC3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PCC3: OTC A - Công ty Xây lắp Điện 3"
 }, {
 	"code": "PCIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PCIC: OTC A - CTCP Tư vấn và Đầu tư Xây dựng Năng lượng "
 }, {
 	"code": "PCIS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PCIS: OTC A - Công ty CP Dịch vụ Thương mại và Công nghiệp PETEC"
 }, {
 	"code": "PCSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PCSE: OTC A - CTCP Thủy sản Phước Cơ "
 }, {
 	"code": "PDG1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PDG1: OTC A - CTCP Đầu tư Bất động sản Phúc Đức"
 }, {
 	"code": "PDGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PDGC: OTC A - CTCP May Phương Đông"
 }, {
 	"code": "PDPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PDPC: OTC A - CTCP Đầu tư và Xây dựng Dầu khí Phú Đạt"
 }, {
 	"code": "PEACE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PEACE: OTC A - CTCP Du lịch Hòa Bình Việt Nam"
 }, {
 	"code": "PEACESOFT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PEACESOFT: OTC A - CTCP Giải pháp Phần mềm Hòa Bình"
 }, {
 	"code": "PECC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PECC: OTC A - Trung tâm Tư vấn Điện lực Thành phố Hồ Chí Minh"
 }, {
 	"code": "PETAJICODN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETAJICODN: OTC A - CTCP Thương mại và Vận tải Petrolimex Đà Nẵng"
 }, {
 	"code": "PETAJICODN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETAJICODN: OTC A - CTCP Thương mại và Vận tải Petrolimex Đà Nẵng"
 }, {
 	"code": "PETEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETEC: OTC A - TCT Thương mại Kỹ thuật và Đầu tư - CTCP"
 }, {
 	"code": "PETRODT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETRODT: OTC A - Công ty Xăng Dầu Đồng Tháp"
 }, {
 	"code": "PETROLIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETROLIMEX: OTC A - Tập đoàn Xăng dầu Việt Nam"
 }, {
 	"code": "PETROLIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETROLIMEX: OTC A - Tập đoàn Xăng dầu Việt Nam"
 }, {
 	"code": "PETROMAT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETROMAT: OTC A - CTCP Vật tư Xăng dầu Petec"
 }, {
 	"code": "PETROWACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PETROWACO: OTC A - CTCP Bất động sản Dầu khí"
 }, {
 	"code": "PFV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PFV: OTC A - CTCP Đầu tư và Thương mại PFV"
 }, {
 	"code": "PGBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PGBANK: OTC A - Ngân hàng TMCP Xăng dầu Petrolimex"
 }, {
 	"code": "PGID",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PGID: OTC A - CTCP Đầu tư Phát triển Nhà và Đô thị Phú Gia"
 }, {
 	"code": "PGSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PGSC: OTC A - CTCP Chứng khoán Phú Gia"
 }, {
 	"code": "PHANER",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHANER: OTC A - Công ty Cổ phần Bánh kẹo Phạm Nguyên"
 }, {
 	"code": "PHAR3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHAR3: OTC A - CTCP Dược phẩm Quận 3"
 }, {
 	"code": "PHARBACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHARBACO: OTC A - CTCP Dược phẩm Trung ương 1"
 }, {
 	"code": "PHEU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHEU: OTC A - CTCP PH Châu Âu"
 }, {
 	"code": "PHGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHGC: OTC A - CTCP Đầu tư Xây dựng Ricons"
 }, {
 	"code": "PHONGSAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHONGSAN: OTC A - Công ty Cổ phần PHONG SAN"
 }, {
 	"code": "PHPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHPC: OTC A - CTCP Cảng Phú Hữu"
 }, {
 	"code": "PHS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHS: OTC A - CTCP Chứng khoán Phú Hưng"
 }, {
 	"code": "PHT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHT: OTC A - CTCP SX &amp; TM Phúc Tiến"
 }, {
 	"code": "PHTSAWA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHTSAWA: OTC A - CTCP Cấp nước Phú Hòa Tân"
 }, {
 	"code": "PHUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHUCO: OTC A - CTCP Phú Diễn "
 }, {
 	"code": "PHUFI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHUFI: OTC A - CTCP Phước Hòa - Fico"
 }, {
 	"code": "PHULONG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHULONG: OTC A - CTCP Địa ốc Phú Long"
 }, {
 	"code": "PHUONGBAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHUONGBAC: OTC A - CTCP Đầu tư và Xây dựng Phương Bắc"
 }, {
 	"code": "PHUQUOTO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHUQUOTO: OTC A - CTCP Du lịch Phú Quốc"
 }, {
 	"code": "PHUTHAI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHUTHAI: OTC A - CTCP Tập đoàn Phú Thái"
 }, {
 	"code": "PHUTHANH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHUTHANH: OTC A - CTCP Phú Thành"
 }, {
 	"code": "PHVU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PHVU: OTC A - CTCP Đầu tư Phan Vũ"
 }, {
 	"code": "PICENZA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PICENZA: OTC A - CTCP Picenza Việt Nam"
 }, {
 	"code": "PIDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PIDC: OTC A - C�ng ty CP I.D.P"
 }, {
 	"code": "PISICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PISICO: OTC A - CTCP Chế biến Gỗ Pisico Đồng An"
 }, {
 	"code": "PLAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PLAND: OTC A - CTCP Bất động sản Petrolimex"
 }, {
 	"code": "PLASTIC4",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PLASTIC4: OTC A - CTCP Nhựa 4"
 }, {
 	"code": "PLCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PLCo: OTC A - CTCP Kho vận Petec"
 }, {
 	"code": "PLGK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PLGK: OTC A - CTCP Đầu tư Phước Long"
 }, {
 	"code": "PMBW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMBW: OTC A - CTCP Cấp nước Phú Mỹ Tỉnh Bà Rịa - Vũng Tàu"
 }, {
 	"code": "PMC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMC1: OTC A - CTCP  Tư vấn Quản lý Dự án Điện lực Dầu khí 1."
 }, {
 	"code": "PMEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMEC: OTC A - CTCP Cơ khí ngành In"
 }, {
 	"code": "PMGR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMGR: OTC A - CTCP Tập đoàn Phú Mỹ"
 }, {
 	"code": "PMMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMMC: OTC A - CTCP Hàng hải Phú Mỹ"
 }, {
 	"code": "PMTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMTC: OTC A - CTCP Sản xuất - Thương mại - Dịch vụ Phú Mỹ"
 }, {
 	"code": "PMY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PMY: OTC A - Công ty TNHH Phát triển Phú Mỹ Hưng"
 }, {
 	"code": "PN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PN: OTC A - CTCP Phương Nam"
 }, {
 	"code": "PNBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNBANK: OTC A - Ngân hàng TMCP Phương Nam"
 }, {
 	"code": "PNCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNCO: OTC A - CTCP Thương mại Phú Nhuận"
 }, {
 	"code": "PNJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNJC: OTC A - CTCP Thương mại Vàng bạc Đá quý Phương Nam - NJC"
 }, {
 	"code": "PNKC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNKC: OTC A - CTCP Sản xuất Nước khoáng Phú Ninh"
 }, {
 	"code": "PNSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNSC: OTC A - CTCP Chứng khoán Funan"
 }, {
 	"code": "PNTECHCONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNTECHCONS: OTC A - CTCP Kỹ thuật Xây dựng Phú Nhuận"
 }, {
 	"code": "PNTECHCONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PNTECHCONS: OTC A - CTCP Kỹ thuật Xây dựng Phú Nhuận"
 }, {
 	"code": "POC2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "POC2: OTC A - CTCP Điện lực 2"
 }, {
 	"code": "PORTCOAST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PORTCOAST: OTC A - CTCP Tư vấn Thiết kế Cảng - Kỹ thuật biển"
 }, {
 	"code": "POTMASCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "POTMASCO: OTC A - CTCP Vật tư Bưu Điện"
 }, {
 	"code": "POTRACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "POTRACO: OTC A - CTCP Vận tải và Dịch vụ Điện lực"
 }, {
 	"code": "PPFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PPFC: OTC A - CTCP Dệt vải Phong Phú"
 }, {
 	"code": "PPGD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PPGD: OTC A - CTCP Dệt Gia dụng Phong Phú"
 }, {
 	"code": "PPHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PPHC: OTC A - Tổng CTCP Phong Phú"
 }, {
 	"code": "PPIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PPIP: OTC A - CTCP Khu Công Nghiệp Phong Phú"
 }, {
 	"code": "PRBC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PRBC: OTC A - CTCP Cao su Power"
 }, {
 	"code": "PRCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PRCC: OTC A - CTCP Việt Pháp sản xuất thức ăn gia súc PROCONCO"
 }, {
 	"code": "PRIME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PRIME: OTC A - CTCP PRIME GROUP"
 }, {
 	"code": "PROC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PROC: OTC A - CTCP Sản xuất bao bì và hàng xuất khẩu"
 }, {
 	"code": "PROCIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PROCIMEX: OTC A - CTCP Procimex Việt Nam"
 }, {
 	"code": "PRUBF1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PRUBF1: OTC A - Quỹ Đầu tư Cân bằng Prudential  (PRUBF1 )"
 }, {
 	"code": "PTCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTCE: OTC A - CTCP Xi măng Phú Thọ"
 }, {
 	"code": "PTCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTCM: OTC A - CTCP Thương mại Dầu khí"
 }, {
 	"code": "PTCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTCO: OTC A - CTCP Dịch vụ - Xây dựng Công trình Bưu Điện"
 }, {
 	"code": "PTFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTFC: OTC A - CTCP Phúc Thịnh"
 }, {
 	"code": "PTICC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTICC: OTC A - CTCP Tư vấn Đầu tư và Xây dựng Bưu điện"
 }, {
 	"code": "PTMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTMC: OTC A - CTCP luyện kim Phú Thịnh"
 }, {
 	"code": "PTPHARCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTPHARCO: OTC A - CTCP Dược phẩm Phú Thọ"
 }, {
 	"code": "PTQT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTQT: OTC A - CTCP Phú Trường Quốc Tế"
 }, {
 	"code": "PTSCH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSCH: OTC A - Công ty cổ phần Khách sạn dầu khí PTSC"
 }, {
 	"code": "PTSCMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSCMC: OTC A - Công ty CP Dịch vụ Cơ khí hàng hải PTSC"
 }, {
 	"code": "PTSCPOS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSCPOS: OTC A - CTCP Dịch vụ Lắp đặt, Vận hành và Bảo dưỡng công trình Dầu khí biển PTSC"
 }, {
 	"code": "PTSCQN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSCQN: OTC A - CTCP Dịch vụ Dầu khí Quảng Ngãi"
 }, {
 	"code": "PTSCTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSCTH: OTC A - CTCP Cảng DVDK Tổng hợp PTSC Thanh Hoá"
 }, {
 	"code": "PTSIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSIMEX: OTC A - Công ty CP XNK vật tư kỹ thuật và Dịch vụ dầu khí"
 }, {
 	"code": "PTSN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTSN: OTC A - CTCP Vận tải & Dịch vụ Petrolimex Nghệ Tĩnh"
 }, {
 	"code": "PTTR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PTTR: OTC A - CTCP Dịch vụ Du lịch Phú Thọ"
 }, {
 	"code": "PVCB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCB: OTC A - Ngân hàng TMCP Đại chúng Việt Nam"
 }, {
 	"code": "PVCCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCCM: OTC A - CTCP Phát triển Đô thị Dầu khí"
 }, {
 	"code": "PVCFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCFC: OTC A - Công ty TNHH MTV Phân bón Dầu khí Cà Mau"
 }, {
 	"code": "PVCHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCHN: OTC A - CTCP Xây lắp Dầu khí Hà Nội"
 }, {
 	"code": "PVCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCI: OTC A - CTCP Đầu tư Xây lắp Dầu khí Việt Nam"
 }, {
 	"code": "PVCKBC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCKBC: OTC A - CTCP Đầu tư và Xây lắp Dầu khí Kinh Bắc"
 }, {
 	"code": "PVCLAND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCLAND: OTC A - CTCP Bất động sản Xây lắp Dầu khí Việt Nam"
 }, {
 	"code": "PVCME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCME: OTC A - CTCP Thi Công Cơ giới và Lắp máy Dầu khí"
 }, {
 	"code": "PVCTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVCTH: OTC A - Công ty cổ phần Xây lắp dầu khí Thanh Hóa"
 }, {
 	"code": "PVDI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVDI: OTC A - CTCP Đầu tư Khoan Dầu khí Việt Nam"
 }, {
 	"code": "PVECC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVECC: OTC A - Công ty Thiết kế và Xây dựng Dầu khí"
 }, {
 	"code": "PVF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVF: OTC A - TCT Tài Chính CP Dầu Khí Việt Nam"
 }, {
 	"code": "PVFCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVFCC: OTC A - CTCP Quản lý Quỹ đầu tư Tài chính Dầu khí"
 }, {
 	"code": "PVFCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVFCI: OTC A - CTCP Đầu tư và Kinh doanh Tài sản Việt Nam"
 }, {
 	"code": "PVFI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVFI: OTC A - CTCP Đầu tư Tài chính Công đoàn Dầu khí Việt Nam"
 }, {
 	"code": "PVGAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVGAS: OTC A - Tổng công ty khí Việt Nam"
 }, {
 	"code": "PVHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVHN: OTC A - Công ty CP xăng dầu dầu khí Hà Nội"
 }, {
 	"code": "PVID",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVID: OTC A - CTCP Đầu tư và Xây lắp khí"
 }, {
 	"code": "PVIFINANCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVIFINANCE: OTC A - CTCP Đầu tư Tài Chính Bảo hiểm Dầu khí"
 }, {
 	"code": "PVIFINANCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVIFINANCE: OTC A - CTCP Đầu tư Tài chính Bảo hiểm Dầu khí"
 }, {
 	"code": "PVMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVMC: OTC A - Công ty CP máy  - thiết bị dầu khí"
 }, {
 	"code": "PVMEDIA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVMEDIA: OTC A - CTCP Truyền thông Dầu khí Việt Nam"
 }, {
 	"code": "PVNMAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVNMAN: OTC A - CTCP Phát triển Nguồn lực và Dịch vụ Dầu khí Việt Nam"
 }, {
 	"code": "PVPDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVPDC: OTC A - Công ty Chế biến Kinh doanh các Sản phẩm Dầu mỏ"
 }, {
 	"code": "PVSH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVSH: OTC A - CTCP Đầu tư và Thương mại Dầu khí Sông Hồng"
 }, {
 	"code": "PVST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVST: OTC A - CTCP Du Lịch Dầu khí Sapa"
 }, {
 	"code": "PVTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVTB: OTC A - CTCP đầu tư và thương mại dầu khí  Thái Bình"
 }, {
 	"code": "PVTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVTEX: OTC A - CTCP Hóa dầu và Xơ sợi dầu khí"
 }, {
 	"code": "PVTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVTL: OTC A - Công ty CP Địa ốc Dầu khí Viễn Thông"
 }, {
 	"code": "PVTPACIFIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVTPACIFIC: OTC A - CTCP Vận tải Dầu khí Thái Bình Dương (PVTRANSPACIFIC)"
 }, {
 	"code": "PVTPACIFIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PVTPACIFIC: OTC A - CTCP Vận tải Dầu khí Thái Bình Dương (PVTRANSPACIFIC)"
 }, {
 	"code": "PXH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PXH: OTC A - CTCP Xây lắp Dầu khí Hà Nội"
 }, {
 	"code": "PXSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PXSC: OTC A - CTCP Chứng khoán Kiến thiết Việt Nam"
 }, {
 	"code": "PYMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PYMC: OTC A - CTCP Khoáng sản Phú Yên"
 }, {
 	"code": "PYTHIS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "PYTHIS: OTC A - CTCP Công nghệ mới Kim Tự Tháp Việt Nam"
 }, {
 	"code": "QBPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QBPC: OTC A - CTCP Cảng Quảng Bình"
 }, {
 	"code": "QFEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QFEXIM: OTC A - CTCP Lâm đặc Sản xuất khẩu Quảng Nam"
 }, {
 	"code": "QHHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QHHC: OTC A - CTCP Quê Hương - Liberty"
 }, {
 	"code": "QL13",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QL13: OTC A - Dự án Quốc lộ 13 - Bình Dương "
 }, {
 	"code": "QMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QMC: OTC A - Tập đoàn Quang Minh"
 }, {
 	"code": "QNIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QNIMEX: OTC A - CTCP Đầu tư XNK Quảng Ninh"
 }, {
 	"code": "QNPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QNPC: OTC A - Công ty CP Tân Cảng Quy Nhơn"
 }, {
 	"code": "QNSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QNSC: OTC A - CTCP Cung ứng tàu biển Quảng Ninh"
 }, {
 	"code": "QNTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QNTC: OTC A - CTCP Du lịch Quảng Ngãi"
 }, {
 	"code": "QNWD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QNWD: OTC A - CTCP Cấp thoát nước Quảng Nam"
 }, {
 	"code": "QPHG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QPHG: OTC A - CTCP Thuỷ điện Quế Phong"
 }, {
 	"code": "QSIE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QSIE: OTC A - CTCP XNK Thủy sản Quảng Ninh"
 }, {
 	"code": "QTTRAVEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QTTRAVEL: OTC A - CTCP Du lịch Quảng Trị "
 }, {
 	"code": "QUASUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "QUASUCO: OTC A - CTCP Đường Quảng Ngãi"
 }, {
 	"code": "RATRACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RATRACO: OTC A - CTCP Vận tải và Thương mại Đường sắt"
 }, {
 	"code": "RBCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RBCI: OTC A - CTCP Đầu tư Xây dựng Cao su"
 }, {
 	"code": "RCIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RCIC: OTC A - CTCP tư vấn đầu tư và xây dựng đường sắt"
 }, {
 	"code": "RCJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RCJC: OTC A - CTCP Tổng Công ty Công trình Đường Sắt"
 }, {
 	"code": "RDAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RDAC: OTC A - CTCP Xây dựng Nông nghiệp và Phát triển Nông thôn"
 }, {
 	"code": "RECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RECO: OTC A - CTCP Tư vấn Thiết kế Cầu đường"
 }, {
 	"code": "REENCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "REENCO: OTC A - CTCP Xây dựng và Đầu tư khu Du lịch Sinh thái"
 }, {
 	"code": "REM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "REM: OTC A - CTCP Tu bổ Di tích Trung ương - Vinaremon"
 }, {
 	"code": "RES10",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RES10: OTC A - CTCP Địa Ốc 10"
 }, {
 	"code": "RES3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RES3: OTC A - CTCP Xây dựng và Kinh doanh Địa Ốc III"
 }, {
 	"code": "RESCO7",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RESCO7: OTC A - CTCP Địa ốc 7"
 }, {
 	"code": "RESCO8",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RESCO8: OTC A - CTCP Địa ốc 8"
 }, {
 	"code": "RESCO9",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RESCO9: OTC A - CTCP Địa ốc 9"
 }, {
 	"code": "RESCOBT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RESCOBT: OTC A - CTCP Địa ốc Bình Tân "
 }, {
 	"code": "RHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RHC: OTC A - CTCP Thủy Điện Ry Ninh II"
 }, {
 	"code": "RKBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RKBANK: OTC A - Ngân hàng TMCP Đại Tín"
 }, {
 	"code": "RTDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RTDC: OTC A - CTCP Phát triển Phát thanh Truyền hình"
 }, {
 	"code": "RUBICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RUBICO: OTC A - CTCP Công nghiệp và XNK Cao su"
 }, {
 	"code": "RUBSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "RUBSE: OTC A - CTCP Chứng Khoán Delta"
 }, {
 	"code": "S64",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "S64: OTC A - CTCP Sông Đà 6.04"
 }, {
 	"code": "S91",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "S91: OTC A - CTCP Sông Đà 9.01"
 }, {
 	"code": "SABECOIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SABECOIN: OTC A - CTCP Đầu Tư Và Kinh Doanh Hạ Tầng KCN Sabeco"
 }, {
 	"code": "SABECOMD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SABECOMD: OTC A - CTCP Thương mại Sabeco Miền Đông"
 }, {
 	"code": "SABECOPL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SABECOPL: OTC A - CTCP bia Sài Gòn – Phủ Lý"
 }, {
 	"code": "SABECOTN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SABECOTN: OTC A - CTCP Thương mại Sabeco Tây Nguyên"
 }, {
 	"code": "SABETRAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SABETRAN: OTC A - CTCP Vận tải và Giao nhận Bia Sài Gòn"
 }, {
 	"code": "SACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SACO: OTC A - CTCP Thương Mại Dịch Vụ Sài Gòn"
 }, {
 	"code": "SADACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SADACO: OTC A - CTCP Phát triển Sản xuất Thương mại Sài Gòn"
 }, {
 	"code": "SADECCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SADECCO: OTC A - CTCP Xây dựng và Thiết kế Kiến Trúc Saigontourist"
 }, {
 	"code": "SAICOM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAICOM: OTC A - CTCP Đầu Tư và Xây dựng Bưu Chính Viễn Thông"
 }, {
 	"code": "SAIGON2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAIGON2: OTC A - CTCP May Sài Gòn 2"
 }, {
 	"code": "SAIGON3",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "SAIGON3: OTC B - CTCP May Sài Gòn 3"
 }, {
 	"code": "SAIGONNIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAIGONNIC: OTC A - CTCP Đầu tư Khu Đô Thị mới Sài Gòn"
 }, {
 	"code": "SAIGONTOURIST",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "SAIGONTOURIST: OTC B - Tổng Công ty Du lịch Sài Gòn - TNHH Một Thành Viên"
 }, {
 	"code": "SAIT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAIT: OTC A - CTCP Tự động hóa và Công nghệ thông tin Sông Đà"
 }, {
 	"code": "SAKI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAKI: OTC A - CTCP Saki"
 }, {
 	"code": "SALEAGO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SALEAGO: OTC A - CTCP May da S�i G�n"
 }, {
 	"code": "SALOG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SALOG: OTC A - CTCP Thương mại Sài Gòn Kho Vận"
 }, {
 	"code": "SAMECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAMECO: OTC A - CTCP SAMECO"
 }, {
 	"code": "SAMLAND",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "SAMLAND: OTC C - CTCP Địa ốc Sacom"
 }, {
 	"code": "SAMVI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAMVI: OTC A - CTCP Nước khoáng Samvi"
 }, {
 	"code": "SANNA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SANNA: OTC A - CTCP Nước giải khát Sanna Khánh Hòa"
 }, {
 	"code": "SAOBIEN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAOBIEN: OTC A - CTCP Thép Sao Biển"
 }, {
 	"code": "SAOTD",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "SAOTD: OTC D - CTCP SAO THÁI DƯƠNG"
 }, {
 	"code": "SAPASCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAPASCO: OTC A - CTCP Bao bì và Dịch vụ Sam Thịnh"
 }, {
 	"code": "SAPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAPT: OTC A - CTCP Kinh doanh Thủy hải sản Sài Gòn"
 }, {
 	"code": "SARAECOM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SARAECOM: OTC A - CTCP Thiết bị Tổng hợp Máy văn phòng SARA"
 }, {
 	"code": "SARAVINH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SARAVINH: OTC A - CTCP Sara Vinh"
 }, {
 	"code": "SATIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SATIC: OTC A - CTCP Gạch ngói Long Bình"
 }, {
 	"code": "SAVACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAVACO: OTC A - CTCP Sao v�ng "
 }, {
 	"code": "SAVITECH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SAVITECH: OTC A - Công ty Cổ phần Công nghệ Sài Gòn Viễn Đông"
 }, {
 	"code": "SBBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SBBS: OTC A - CTCP Chứng khoán Saigonbank Berjaya"
 }, {
 	"code": "SBC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SBC: OTC A - CTCP Vận tải và Giao nhận Bia Sài Gòn"
 }, {
 	"code": "SBFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SBFM: OTC A - Công ty CP Quản lý quỹ Sabeco"
 }, {
 	"code": "SBHHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SBHHC: OTC A - CTCP Thủy điện Sông Ba Hạ"
 }, {
 	"code": "SBHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SBHP: OTC A - CTCP Thủy điện Sông Bạc "
 }, {
 	"code": "SBOG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SBOG: OTC A - CTCP Đóng Tàu và Dịch vụ dầu khí"
 }, {
 	"code": "SCBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCBANK: OTC A - Ngân hàng TMCP Sài Gòn"
 }, {
 	"code": "SCFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCFC: OTC A - CTCP Lương thực Nam Trung Bộ"
 }, {
 	"code": "SCG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCG: OTC A - CTCP cáp treo Sông Cấm"
 }, {
 	"code": "SCHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCHP: OTC A - CTCP Cung ứng tàu biển Thương mại Du lịch &amp; Dịch vụ"
 }, {
 	"code": "SCJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCJC: OTC A - CTCP Xi măng Vicem Sông Thao"
 }, {
 	"code": "SCQC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCQC: OTC A - CTCP Kiểm định xây dựng Sài Gòn"
 }, {
 	"code": "SCSTE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SCSTE: OTC A - CTCP sàn giao dịch hàng hóa Sài gòn Thương tín"
 }, {
 	"code": "SD109",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SD109: OTC A - CTCP Sông Đà 10.9"
 }, {
 	"code": "SD10PD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SD10PD: OTC A - CTCP Sông Đà 10 Phương Đông"
 }, {
 	"code": "SD17",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SD17: OTC A - CTCP Sông Đà 17"
 }, {
 	"code": "SD702",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SD702: OTC A - CTCP Sông Đà 702"
 }, {
 	"code": "SDBP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDBP: OTC A - CTCP xây dựng Sông Đà Bình Phước"
 }, {
 	"code": "SDFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDFC: OTC A - Công ty Tài chính Cổ phần Sông Đà"
 }, {
 	"code": "SDFC_T1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDFC_T1: OTC A - Trái phiếu Công ty Tài chính Cổ phần Sông Đà ( SDFC 2010)"
 }, {
 	"code": "SDGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDGC: OTC A - CTCP Mía đường Sơn Dương"
 }, {
 	"code": "SDHL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDHL: OTC A - CTCP Thủy điện Sông Đà - Hoàng Liên"
 }, {
 	"code": "SDIDIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDIDIC: OTC A - CTCP Đầu tư Phát triển Hạ tầng Sông Đà"
 }, {
 	"code": "SDIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDIN: OTC A - CTCP Đầu tư Sài Gòn Đà Nẵng"
 }, {
 	"code": "SDLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDLC: OTC A - CTCP Sông Đà - Hoàng Long"
 }, {
 	"code": "SDNL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDNL: OTC A - CTCP Sông Đà 12 - Nguyên Lộc "
 }, {
 	"code": "SDNT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDNT: OTC A - CTCP Sông Đà - Nha Trang"
 }, {
 	"code": "SDQL2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDQL2: OTC A - CTCP BOT Quốc lộ 2"
 }, {
 	"code": "SDS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDS: OTC A - CTCP Xây lắp và Đầu tư Sông Đà"
 }, {
 	"code": "SDSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SDSC: OTC A - CTCP Xây lắp và Dịch vụ Sông Đà"
 }, {
 	"code": "SDTC",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "SDTC: OTC B - TỔNG CÔNG TY SÔNG ĐÀ - CTCP"
 }, {
 	"code": "SEABANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SEABANK: OTC A - Ngân hàng TMCP Đông Nam Á"
 }, {
 	"code": "SEABS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SEABS: OTC A - CTCP Chứng khoán Asean"
 }, {
 	"code": "SEATECCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SEATECCO: OTC A - CTCP SEATECCO"
 }, {
 	"code": "SEATECH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SEATECH: OTC A - CTCP Công nghệ  Đông Nam Á"
 }, {
 	"code": "SEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SEC: OTC A - CTCP Mía Đường - Nhiệt Điện Gia Lai"
 }, {
 	"code": "SEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SEL: OTC A - CTCP Sông Đà 11 Thăng Long"
 }, {
 	"code": "SERVICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SERVICO: OTC A - CTCP Thương mại và Dịch vụ Tổng hợp Hà Nội"
 }, {
 	"code": "SFA2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SFA2: OTC A - Quỹ đầu tư chứng khoán Sài Gòn A2"
 }, {
 	"code": "SFSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SFSC: OTC A - CTCP Giống Lâm Nghiệp Vùng Nam Bộ"
 }, {
 	"code": "SGAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGAC: OTC A - CTCP Sài Gòn Sân Bay"
 }, {
 	"code": "SGAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGAS: OTC A - CTCP Gas Sài Gòn"
 }, {
 	"code": "SGBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGBANK: OTC A - Ngân hàng TMCP Sài Gòn Công thương"
 }, {
 	"code": "SGBTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGBTB: OTC A - CTCP Tập đoàn Bia Sài Gòn - Bình Tây"
 }, {
 	"code": "SGCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGCC: OTC A - Tổng công ty Xây dựng Sài Gòn"
 }, {
 	"code": "SGCL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGCL: OTC A - CTCP Đầu tư và Địa ốc Sài Gòn Chợ Lớn"
 }, {
 	"code": "SGDN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGDN: OTC A - CTCP Bia Sài Gòn - Đồng Nai"
 }, {
 	"code": "SGFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGFM: OTC A - CTCP Quản lý Quỹ Sài Gòn"
 }, {
 	"code": "SGGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGGC: OTC A - CTCP Mắt kính Sài Gòn"
 }, {
 	"code": "SGHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGHN: OTC A - CTCP Bia Sài Gòn - Hà Nam"
 }, {
 	"code": "SGHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGHP: OTC A - CTCP Khai thác Thủy điện Sông Giang"
 }, {
 	"code": "SGIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGIC: OTC A - CTCP Quản lý Quỹ đầu tư SGI"
 }, {
 	"code": "SGIG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGIG: OTC A - Tập đoàn Đầu tư Sài Gòn"
 }, {
 	"code": "SGMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGMC: OTC A - CTCP XNK Máy Sài Gòn"
 }, {
 	"code": "SGNP",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "SGNP: OTC B - TỔNG CÔNG TY TÂN CẢNG SÀI GÒN"
 }, {
 	"code": "SGPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGPC: OTC A - CTCP Giấy Sài Gòn"
 }, {
 	"code": "SGPORT",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "SGPORT: OTC C - CTCP CẢNG SÀI GÒN - HIỆP PHƯỚC"
 }, {
 	"code": "SGRES",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGRES: OTC A - CTCP Đầu tư Xây dựng và Kinh doanh Nhà Sài Gòn"
 }, {
 	"code": "SGTD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SGTD: OTC A - CTCP Bia - NGK Sài Gòn - Tây Đô"
 }, {
 	"code": "SHBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHBS: OTC A - CTCP Chứng khoán SHB"
 }, {
 	"code": "SHC8",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHC8: OTC A - Công ty CP Sông Hồng 8"
 }, {
 	"code": "SHEN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHEN: OTC A - CTCP Năng lượng Sông Hồng"
 }, {
 	"code": "SHFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHFM: OTC A - CTCP Quản lý Quỹ đầu tư Sài Gòn - Hà Nội"
 }, {
 	"code": "SHGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHGC: OTC A - CTCP May Sông Hồng"
 }, {
 	"code": "SHINEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHINEC: OTC A - CTCP Công nghiệp Tầu thủy SHINEC"
 }, {
 	"code": "SHPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHPT: OTC A - CTCP Sản xuất và Thương mại San Hoàng"
 }, {
 	"code": "SHSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHSC: OTC A - Công ty CP thép Sông Hồng"
 }, {
 	"code": "SHTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHTC: OTC A - Công ty CP Sông Hồng - Thăng Long"
 }, {
 	"code": "SHTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHTL: OTC A - CTCP đầu tư Sông Hồng - Thăng Long"
 }, {
 	"code": "SHV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SHV: OTC A - CTCP Hải Việt"
 }, {
 	"code": "SIDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SIDC: OTC A - CTCP SONADEZI Châu Đức"
 }, {
 	"code": "SIEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SIEC: OTC A - Công ty cổ phần XNK Saigontourist"
 }, {
 	"code": "SILICOM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SILICOM: OTC A - CTCP Công nghệ Silicom"
 }, {
 	"code": "SINCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SINCO: OTC A - CTCP Chế tạo Máy Sinco"
 }, {
 	"code": "SIRE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SIRE: OTC A - CTCP Đầu tư Hạ tầng Bất động sản Sài Gòn"
 }, {
 	"code": "SISVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SISVN: OTC A - CTCP SIS Việt Nam"
 }, {
 	"code": "SJCCT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCCT: OTC A - CTCP Vàng bạc đá quý SJC - Cần thơ"
 }, {
 	"code": "SJCHCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCHCM: OTC A - CTCP Vàng bạc Đá quý Sài Gòn-SJC"
 }, {
 	"code": "SJCHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCHN: OTC A - CTCP Vàng bạc Đá quý SJC Hà Nội"
 }, {
 	"code": "SJCKH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCKH: OTC A - CTCP Vàng bạc Đá quý SJC Khánh Hội"
 }, {
 	"code": "SJCMK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCMK: OTC A - CTCP Vàng bạc Đá quý SJC Minh Khai"
 }, {
 	"code": "SJCPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCPT: OTC A - CTCP Vàng bạc Đá quý SJC Phú Thọ "
 }, {
 	"code": "SJCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJCS: OTC A - CTCP Chứng khoán SJC"
 }, {
 	"code": "SJS6",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJS6: OTC A - CTCP Vận tải Đa Phương Thức 6"
 }, {
 	"code": "SJSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SJSC: OTC A - CTCP Kim hoàn SAI GON SJC"
 }, {
 	"code": "SKS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SKS: OTC A - CTCP Công Trình Giao Thông Sông Đà"
 }, {
 	"code": "SLCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SLCM: OTC A - Nhà máy Xi măng Sơn La "
 }, {
 	"code": "SLHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SLHC: OTC A - CTCP Thủy Điện Sơn La"
 }, {
 	"code": "SLPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SLPC: OTC A - CTCP Tạp phẩm và Bảo hộ Lao động"
 }, {
 	"code": "SLSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SLSG: OTC A - CTCP Mía Đường Sơn La"
 }, {
 	"code": "SME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SME: OTC A - CTCP Chứng khoán SME"
 }, {
 	"code": "SNCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SNCS: OTC A - CTCP Xây lắp Sonacons"
 }, {
 	"code": "SNG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SNG: OTC A - CTCP Sông Đà 10.1"
 }, {
 	"code": "SNTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SNTB: OTC A - CTCP Thương mại Bia Sài Gòn Nam Trung Bộ"
 }, {
 	"code": "SODAGA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SODAGA: OTC A - CTCP May Xuất khẩu Sông Đà "
 }, {
 	"code": "SODANA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SODANA: OTC A - CTCP Sông Đà - Đất Vàng"
 }, {
 	"code": "SODIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SODIC: OTC A - CTCP Đầu tư và Thương mại Sông Đà"
 }, {
 	"code": "SOHG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SOHG: OTC A - CTCP SOMECO Hà Giang"
 }, {
 	"code": "SONADEIZI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SONADEIZI: OTC A - Tổng công ty Phát triển khu công nghiệp"
 }, {
 	"code": "SONGVIET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SONGVIET: OTC A - CTCP Sóng Việt"
 }, {
 	"code": "SOSUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SOSUCO: OTC A - CTCP Mía đường Sóc Trăng"
 }, {
 	"code": "SOTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SOTEX: OTC A - CTCP Đầu tư Phong Phú Sơn Trà"
 }, {
 	"code": "SOVICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SOVICO: OTC A - CTCP SOVICO"
 }, {
 	"code": "SPCo",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPCo: OTC A - CTCP Ống nhựa Sacom"
 }, {
 	"code": "SPHARM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPHARM: OTC A - Công ty CP Dược S.Pharm"
 }, {
 	"code": "SPILIT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPILIT: OTC A - Công ty CP Đá Spilit"
 }, {
 	"code": "SPJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPJC: OTC A - CTCP Xuất nhập khẩu Máy và Phụ Tùng"
 }, {
 	"code": "SPMI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPMI: OTC A - CTCP thủy điện Srok Phu Mieng IDICO"
 }, {
 	"code": "SPSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPSC: OTC A - CTCP Dịch vụ Dầu khí Sài Gòn"
 }, {
 	"code": "SPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPT: OTC A - CTCP Dịch vụ Bưu chính Viễn thông Sài Gòn"
 }, {
 	"code": "SPWC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SPWC: OTC A - CTCP đầu tư bê tông công nghệ cao ( SOPEWACO )"
 }, {
 	"code": "SSDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SSDC: OTC A - CTCP Phát triển Nam Sài Gòn"
 }, {
 	"code": "SSGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SSGC: OTC A - CTCP Tập đoàn S.S.G"
 }, {
 	"code": "SSHT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SSHT: OTC A - CTCP Thương mại Sabeco Sông Hậu"
 }, {
 	"code": "SSIL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SSIL: OTC A - CTCP Bất động sản SSI "
 }, {
 	"code": "SSS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SSS: OTC A - CTCP Sông Đà 6.06"
 }, {
 	"code": "SST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SST: OTC A - CTCP Thương mại Sabeco Sông Tiền"
 }, {
 	"code": "STAPIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STAPIMEX: OTC A - CTCP Thủy sản Sóc Trăng"
 }, {
 	"code": "STCL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STCL: OTC A - CTCP SaTra Đất Thành"
 }, {
 	"code": "STHB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STHB: OTC A - CTCP Sách và Thiết bị trường học Hòa Bình ( BSECO )"
 }, {
 	"code": "STHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STHC: OTC A - CTCP Sách và Thiết bị Trường học Thanh Hóa"
 }, {
 	"code": "STHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STHP: OTC A - CTCP Thủy điện Suối Tân"
 }, {
 	"code": "STONEVIETN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STONEVIETN: OTC A - CTCP Chế tác đá Việt Nam"
 }, {
 	"code": "STONEVIETNAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STONEVIETNAM: OTC A - CTCP Chế tác Đá Việt Nam"
 }, {
 	"code": "STSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STSC: OTC A - CTCP Chứng khoán STSC"
 }, {
 	"code": "STTG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STTG: OTC A - CTCP Thương mại Satra Tiền Giang"
 }, {
 	"code": "STWACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "STWACO: OTC A - CTCP Cấp nước Sóc Trăng"
 }, {
 	"code": "SUNCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SUNCO: OTC A - Công ty Thái Dương "
 }, {
 	"code": "SUNGROUP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SUNGROUP: OTC A - CTCP Tập đoàn Mặt trời"
 }, {
 	"code": "SUNHOUSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SUNHOUSE: OTC A - CTCP Tập đoàn Sunhouse"
 }, {
 	"code": "SVFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SVFC: OTC A - CTCP Việt Long Sài gòn"
 }, {
 	"code": "SVGE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SVGE: OTC A - CTCP Tư vấn Thiết kế và Giám định Xây dựng Sao Việt"
 }, {
 	"code": "SVIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SVIC: OTC A - TCT CP Bảo hiểm Sài Gòn - Hà Nội"
 }, {
 	"code": "SVS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SVS: OTC A - CTCP Chứng khoán Sao Việt"
 }, {
 	"code": "SWFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SWFC: OTC A - CTCP Nội thất Shinec"
 }, {
 	"code": "SZAB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SZAB: OTC A - CTCP Sonadezi An Bình"
 }, {
 	"code": "SZLB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SZLB: OTC A - CTCP Sonadezi Long Bình"
 }, {
 	"code": "SZTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "SZTC: OTC A - CTCP Vận tải Sonadezi"
 }, {
 	"code": "TABC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TABC: OTC A - CTCP Tràng An"
 }, {
 	"code": "TADIFICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TADIFICO: OTC A - CTCP Cơ khí Xây dựng Tân Định - FICO"
 }, {
 	"code": "TAFICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TAFICO: OTC A - CTCP Đầu tư và Xây dựng Trường An"
 }, {
 	"code": "TAHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TAHC: OTC A - CTCP Bệnh viện Đa khoa tư nhân Triều An"
 }, {
 	"code": "TAKI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TAKI: OTC A - Công ty Tam Kim"
 }, {
 	"code": "TALACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TALACO: OTC A - CTCP Nông sản Tân Lâm"
 }, {
 	"code": "TANAPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TANAPHAR: OTC A - CTCP Dược phẩm Tân Á"
 }, {
 	"code": "TANDA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TANDA: OTC A - Khách sạn Tản Đà"
 }, {
 	"code": "TANICON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TANICON: OTC A - CTCP Xây dựng Tây Ninh "
 }, {
 	"code": "TANIDECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TANIDECO: OTC A - CTCP Xây dựng và Phát triển đô thị Tây Ninh"
 }, {
 	"code": "TANIGLASS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TANIGLASS: OTC A - CTCP Kiếng Tân Bình"
 }, {
 	"code": "TANPHAT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TANPHAT: OTC A - CTCP Tấn Phát"
 }, {
 	"code": "TAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TAS: OTC A - CTCP Chứng Khoán Tràng An"
 }, {
 	"code": "TASECOTL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TASECOTL: OTC A - CTCP Dịch vụ Hàng không Thăng Long (TASECO)"
 }, {
 	"code": "TATDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TATDC: OTC A - CTCP Phát triển du lịch Tân An"
 }, {
 	"code": "TATEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TATEX: OTC A - CTCP Dệt Tân Tiến"
 }, {
 	"code": "TB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TB: OTC A - CTCP Thanh Bình"
 }, {
 	"code": "TBCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBCM: OTC A - CTCP Xây dựng cơ khí Tân Bình Tanimex"
 }, {
 	"code": "TBDK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBDK: OTC A - CTCP Thương Binh Đoàn Kết "
 }, {
 	"code": "TBHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBHC: OTC A - Thủy điện Tây Bắc"
 }, {
 	"code": "TBHT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBHT: OTC A - CTCP Du lịch Thanh Bình"
 }, {
 	"code": "TBMG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBMG: OTC A - CTCP Tập Đoàn Thạch Bàn (TBC)"
 }, {
 	"code": "TBRESCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBRESCO: OTC A - CTCP Địa ốc Tân Bình"
 }, {
 	"code": "TBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBS: OTC A - CTCP Tổng Công ty Giống cây trồng Thái Bình"
 }, {
 	"code": "TBSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBSC: OTC A - CTCP Đầu tư và Sản xuất Giày Thái Bình"
 }, {
 	"code": "TBYB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TBYB: OTC A - CTCP Xây dựng Giao thông Yên Bái "
 }, {
 	"code": "TC61",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TC61: OTC A - CTCP Xây dựng Công trình Giao thông 61"
 }, {
 	"code": "TC842",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TC842: OTC A - CTCP Xây dựng Công trình Giao thông 842"
 }, {
 	"code": "TCBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCBS: OTC A - Công ty TNHH Chứng khoán Kỹ thương"
 }, {
 	"code": "TCC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCC1: OTC A - CTCP Xây dựng Giao thông I Thái Nguyên"
 }, {
 	"code": "TCC2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCC2: OTC A - CTCP Xây dựng Giao thông II Cao Bằng"
 }, {
 	"code": "TCCG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCCG: OTC A - CTCP Thi công Cơ giới  Xây lắp"
 }, {
 	"code": "TCITY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCITY: OTC A - CTCP Đầu tư Thủ Thiêm"
 }, {
 	"code": "TCJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCJC: OTC A - CTCP Tàu Cuốc"
 }, {
 	"code": "TCLS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCLS: OTC A - CTCP Giao thông - Xây dựng Thống Nhất Lạng Sơn"
 }, {
 	"code": "TCOJCO479",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCOJCO479: OTC A - CTCP 479"
 }, {
 	"code": "TCRM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCRM: OTC A - CTCP Gốm Sứ Thái Bình "
 }, {
 	"code": "TCSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCSC: OTC A - CTCP Chứng khoán Thành Công"
 }, {
 	"code": "TCXD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TCXD: OTC A - CTCP Tầu cuốc và Xây dựng "
 }, {
 	"code": "TDBV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDBV: OTC A - CTCP Du lịch Thác Đa - Ba Vì"
 }, {
 	"code": "TDC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDC1: OTC A - CTCP Bê tông ly tâm Thủ Đức 1"
 }, {
 	"code": "TDC2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDC2: OTC A - CTCP Bê tông ly tâm Thủ Đức- Long An"
 }, {
 	"code": "TDCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDCM: OTC A - CTCP Quản lý Quỹ đầu tư Chứng khoán Thái Dương"
 }, {
 	"code": "TDDL3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDDL3: OTC A - CTCP Thủy điện - Điện lực 3"
 }, {
 	"code": "TDGROUP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDGROUP: OTC A - CTCP Đầu tư Thùy Dương"
 }, {
 	"code": "TDHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDHC: OTC A - CTCP Bệnh viện Tim Tâm Đức"
 }, {
 	"code": "TDJ",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDJ: OTC A - CTCP Thuận Đức"
 }, {
 	"code": "TDLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDLC: OTC A - Công ty Cổ phần Da Tây Đô"
 }, {
 	"code": "TDRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDRC: OTC A - CTCP Địa ốc Thảo Điền"
 }, {
 	"code": "TDVU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TDVU: OTC A - CTCP TẬP ĐOÀN VIỆT ÚC"
 }, {
 	"code": "TECCO533",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TECCO533: OTC A - CTCP Tư vấn Xây dựng 533"
 }, {
 	"code": "TECCOQN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TECCOQN: OTC A - CTCP Tư vấn giao thông Quảng Nam"
 }, {
 	"code": "TECHGEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TECHGEL: OTC A - CTCP Kỹ thuật Công nghệ Sài Gòn"
 }, {
 	"code": "TEDI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TEDI: OTC A - Tổng Công ty Tư vấn Thiết kế Giao thông Vận tải "
 }, {
 	"code": "TEDIGIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TEDIGIC: OTC A - CTCP Tư vấn Kiểm định và Địa kỹ thuật"
 }, {
 	"code": "TEDISOUTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TEDISOUTH: OTC A - CTCP Tư vấn Thiết kế Giao thông Vận tải Phía Nam"
 }, {
 	"code": "TEEOFF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TEEOFF: OTC A - CTCP Golf Việt Nam"
 }, {
 	"code": "TEXCONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TEXCONS: OTC A - Công ty Đầu tư Xây dựng An Thịnh – Vinatex"
 }, {
 	"code": "TFIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TFIC: OTC A - Công ty CP Công Nghiệp Rừng Tây Nguyên"
 }, {
 	"code": "TFPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TFPC: OTC A - CTCP Công nghệ Cáp quang và Thiết bị Bưu điện"
 }, {
 	"code": "TGAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TGAC: OTC A - CTCP Vận Tải Ô Tô Tiền Giang"
 }, {
 	"code": "TGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TGC: OTC A - CTCP Đầu tư thiết kế An Giang"
 }, {
 	"code": "THABIPHAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THABIPHAR: OTC A - CTCP Dược Vật tư Y tế Thái Bình"
 }, {
 	"code": "THACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THACO: OTC A - CTCP Ô tô Trường Hải"
 }, {
 	"code": "THAIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THAIMEX: OTC A - CTCP XNK Bình Thuận"
 }, {
 	"code": "THALOCONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THALOCONS: OTC A - CTCP Cơ giới và Xây dựng Thăng Long"
 }, {
 	"code": "THANHGAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THANHGAS: OTC A - CTCP Khí Công nghiệp Việt Nam"
 }, {
 	"code": "THANHSON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THANHSON: OTC A - CTCP Xi Măng Thanh Sơn (TSC)"
 }, {
 	"code": "THANI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THANI: OTC A - CTCP Thanh Niên"
 }, {
 	"code": "THCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THCC: OTC A - CTCP Xây lắp Thừa Thiên Huế"
 }, {
 	"code": "THCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THCE: OTC A - CTCP Gốm sứ Thanh Hà"
 }, {
 	"code": "THDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THDC: OTC A - Công ty CP Đầu tư Tấn Hưng"
 }, {
 	"code": "THEPHACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THEPHACO: OTC A - CTCP Dược Vật tư Y Tế Thanh Hóa"
 }, {
 	"code": "THFOODS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THFOODS: OTC A - CTCP Thực phẩm Thiên Hương"
 }, {
 	"code": "THFS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THFS: OTC A - CTCP Nước mắm Thanh Hương"
 }, {
 	"code": "THIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THIC: OTC A - CTCP Đầu Tư và Xây dựng Tây Hồ"
 }, {
 	"code": "THINAIPORT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THINAIPORT: OTC A - CTCP Cảng Thị Nại"
 }, {
 	"code": "THJSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THJSC: OTC A - CTCP Chế tạo máy và Sản xuất vật liệu mới Trung Hậu"
 }, {
 	"code": "THMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THMC: OTC A - CTCP khoáng Sản Tín Hoằng"
 }, {
 	"code": "THQP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THQP: OTC A - CTCP Đầu Tư và Xây lắp Tây Hồ"
 }, {
 	"code": "THSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THSC: OTC A - CTCP Mía đường Tuy Hòa "
 }, {
 	"code": "THTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THTC: OTC A - CTCP Du lịch Thanh Hóa"
 }, {
 	"code": "THTM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "THTM: OTC A - CTCP Sữa TH ( TH True Milk )"
 }, {
 	"code": "TIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIC: OTC A - CTCP Đầu Tư Điện Tây Nguyên"
 }, {
 	"code": "TICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TICO: OTC A - CTCP TICO"
 }, {
 	"code": "TIDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIDC: OTC A - CTCP Đầu tư Phát triển và xây dựng Thành Đô"
 }, {
 	"code": "TIDH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIDH: OTC A - CTCP Đầu tư phát triển nhà và xây dựng Tây Hồ"
 }, {
 	"code": "TIGICAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIGICAM: OTC A - CTCP Vật tư Nông nghiệp Tiền Giang"
 }, {
 	"code": "TIGITOUR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIGITOUR: OTC A - CTCP Du lịch Tiền Giang"
 }, {
 	"code": "TIGIVEO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIGIVEO: OTC A - CTCP Dầu Thực vật Tiền Giang"
 }, {
 	"code": "TINHVAN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TINHVAN: OTC A - CTCP Công nghệ Tinh Vân"
 }, {
 	"code": "TIOC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TIOC: OTC A - CTCP Sắt Thạch Khê"
 }, {
 	"code": "TITCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TITCO: OTC A - CTCP Sản xuất Kinh doanh Hàng xuất khẩu Tân Bình"
 }, {
 	"code": "TJIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TJIC: OTC A - CTCP Đầu tư Tam Đảo"
 }, {
 	"code": "TKCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TKCC: OTC A - CTCP Xây dựng và Kinh doanh nhà Tam Kỳ"
 }, {
 	"code": "TKEO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TKEO: OTC A - CTCP Tư vấn Đầu tư Phát triển và Xây dựng Thikeco"
 }, {
 	"code": "TKM3D",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TKM3D: OTC A - CTCP Thế kỷ mới"
 }, {
 	"code": "TKRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TKRC: OTC A - Công ty CP Cao su Tân Biên - Kampongthom"
 }, {
 	"code": "TKYC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TKYC: OTC A - CTCP Công nghiệp Mỏ Việt Bắc "
 }, {
 	"code": "TLBRICO3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLBRICO3: OTC A - CTCP Cầu 3 Thăng Long"
 }, {
 	"code": "TLC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLC: OTC A - CTCP Viễn Thông Thăng Long"
 }, {
 	"code": "TLCA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLCA: OTC A - CTCP Đúc Tân Long - Constrexim"
 }, {
 	"code": "TLCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLCC: OTC A - CTCP Xi măng Thăng Long"
 }, {
 	"code": "TLCEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLCEXCO: OTC A - CTCP Thí nghiệm và Xây dựng Thăng Long"
 }, {
 	"code": "TLCF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLCF: OTC A - CTCP Quản lý Quỹ Thăng Long"
 }, {
 	"code": "TLCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLCI: OTC A - CTCP Đầu tư và Bê tông Thịnh Liệt"
 }, {
 	"code": "TLCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLCO: OTC A - Công ty CP ĐúcTân Long"
 }, {
 	"code": "TLDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLDC: OTC A - CTCP Phát triển Tùng Lâm (Cáp treo Yên Tử)"
 }, {
 	"code": "TLFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLFC: OTC A - CTCP Ford Thăng Long"
 }, {
 	"code": "TLFI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLFI: OTC A - CTCP Sợi Trà Lý"
 }, {
 	"code": "TLG9",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLG9: OTC A - CTCP Xây dựng số 9 Thăng Long"
 }, {
 	"code": "TLGA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLGA: OTC A - CTCP May Thăng Long"
 }, {
 	"code": "TLIG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLIG: OTC A - CTCP May Quốc tế Thắng Lợi"
 }, {
 	"code": "TLJSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLJSC: OTC A - CTCP Đầu Tư và Phát Triển Nhà Trường Linh"
 }, {
 	"code": "TLMECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLMECO: OTC A - CTCP Cơ khí 4 và Xây dựng Thăng Long"
 }, {
 	"code": "TLVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLVC: OTC A - CTCP Viglacera Từ Liêm"
 }, {
 	"code": "TLXD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TLXD: OTC A - TCT Xây dựng Thăng Long"
 }, {
 	"code": "TMCB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TMCB: OTC A - CTCP Thương mại tổng hợp Cao Bằng"
 }, {
 	"code": "TMCS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TMCS: OTC A - CTCP Vận tải và đưa đón thợ mỏ VINACOMIN"
 }, {
 	"code": "TMPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TMPC: OTC A - CTCP Tập đoàn Tân Mai"
 }, {
 	"code": "TMQN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TMQN: OTC A - CTCP Thương mại Quảng Ninh"
 }, {
 	"code": "TMYY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TMYY: OTC A - CTCP Thương mại Ý Yên"
 }, {
 	"code": "TNGAR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNGAR: OTC A - CTCP May Xuất khẩu Thái Nguyên "
 }, {
 	"code": "TNGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNGC: OTC A - Tổng Công ty Tín Nghĩa"
 }, {
 	"code": "TNIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNIN: OTC A - CTCP in Thanh Niên"
 }, {
 	"code": "TNIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNIP: OTC A - CTCP Phát triển KCN Tín Nghĩa"
 }, {
 	"code": "TNJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNJC: OTC A - CTCP Kim hoàn Thanh Niên"
 }, {
 	"code": "TNJSC",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "TNJSC: OTC B - CTCP PHIM THIÊN NGÂN"
 }, {
 	"code": "TNMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNMC: OTC A - CTCP Tập đoàn Truyền thông Thanh niên"
 }, {
 	"code": "TNNP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNNP: OTC A - CTCP In Báo Thanh Niên"
 }, {
 	"code": "TNPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNPC: OTC A - CTCP In và Thương Mại Thống Nhất"
 }, {
 	"code": "TNPE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNPE: OTC A - CTCP Xăng dầu Tín Nghĩa"
 }, {
 	"code": "TNSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNSC: OTC A - CTCP Thép Thái Nguyên"
 }, {
 	"code": "TNWACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TNWACO: OTC A - CTCP Cổ phần Cấp thoát Nước Thốt Nốt"
 }, {
 	"code": "TOCHAU",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TOCHAU: OTC A - CTCP Tô Châu"
 }, {
 	"code": "TOCONTAPHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TOCONTAPHN: OTC A - CTCP Xuất nhập khẩu Tạp Phẩm"
 }, {
 	"code": "TOCONTAPHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TOCONTAPHN: OTC A - CTCP XNK Tạp phẩm Hà Nội"
 }, {
 	"code": "TOCONTAPSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TOCONTAPSG: OTC A - CTCP Đầu tư và Thương mại Tạp phẩm Sài Gòn"
 }, {
 	"code": "TOCONTAPSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TOCONTAPSG: OTC A - CTCP Đầu tư và Thương mại Tạp phẩm Sài Gòn"
 }, {
 	"code": "TODIMAX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TODIMAX: OTC A - CTCP Điện máy Miền Bắc"
 }, {
 	"code": "TONDONGA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TONDONGA: OTC A - CTCP Tôn Đông Á"
 }, {
 	"code": "TPC710",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPC710: OTC A - CTCP Xây dựng Công trình Giao thông 710"
 }, {
 	"code": "TPCD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPCD: OTC A - CTCP Phát triển Công trình Viễn thông"
 }, {
 	"code": "TPCW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPCW: OTC A - CTCP Dây và Ống đồng Trần Phú"
 }, {
 	"code": "TPDV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPDV: OTC A - CTCP Thực phẩm và Dịch vụ Tổng hợp"
 }, {
 	"code": "TPFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPFM: OTC A - CTCP Quản lý Quỹ Tín Phát"
 }, {
 	"code": "TPIG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPIG: OTC A - CTCP Tập đoàn Công nghiệp Thiên Phú"
 }, {
 	"code": "TPST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TPST: OTC A - CTCP Thủy sản và Thương mại Thuận Phước"
 }, {
 	"code": "TQI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TQI: OTC A - TQI"
 }, {
 	"code": "TRABACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRABACO: OTC A - CTCP Trà Bắc"
 }, {
 	"code": "TRABUSBD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRABUSBD: OTC A - CTCP Sản xuất, Lắp ráp và Đóng mới xe ô tô buýt"
 }, {
 	"code": "TRACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRACO: OTC A - CTCP Công trình và Thương mại Giao thông Vận tải "
 }, {
 	"code": "TRACO1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRACO1: OTC A - CTCP Vận tải số 1"
 }, {
 	"code": "TRACOMECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRACOMECO: OTC A - CTCP Cơ khí - Xây dựng Giao thông"
 }, {
 	"code": "TRADINCORP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRADINCORP: OTC A - CTCP Đầu tư và Kinh doanh Điện lực TP.Hồ Chí Minh"
 }, {
 	"code": "TRADINCORP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRADINCORP: OTC A - CTCP Đầu tư và Kinh doanh Điện lực TP.Hồ Chí Minh"
 }, {
 	"code": "TRADOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRADOCO: OTC A - CTCP Thương mại và Đại lý Dầu Tỉnh Bà Rịa - Vũng Tàu"
 }, {
 	"code": "TRAFUCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRAFUCO: OTC A - CTCP Cơ Điện Trần Phú"
 }, {
 	"code": "TRALAS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRALAS: OTC A - CTCP Sản xuất, lắp ráp và đóng mới ô tô TRA-LAS"
 }, {
 	"code": "TRANSCONCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRANSCONCO: OTC A - Công ty CP xây dựng giao thông Quảng Nam"
 }, {
 	"code": "TRANSCONCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRANSCONCO: OTC A - Công ty CP xây dựng giao thông Quảng Nam"
 }, {
 	"code": "TRANSERCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRANSERCO: OTC A - CTCP Taxi Hà Nội"
 }, {
 	"code": "TRAPICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRAPICO: OTC A - CTCP Thương mại và Xuất nhập khẩu Ánh Dương"
 }, {
 	"code": "TRASECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRASECO: OTC A - CTCP Thương mại Dịch vụ và Xây dựng "
 }, {
 	"code": "TRI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRI: OTC A - CTCP Nước giải khát Sài Gòn"
 }, {
 	"code": "TRICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRICO: OTC A - CTCP Đầu tư Thương mại và Xây dựng Giao thông I"
 }, {
 	"code": "TRUNGDO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRUNGDO: OTC A - CTCP Trung Đô"
 }, {
 	"code": "TRUNGLONG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRUNGLONG: OTC A - CTCP Trung Long"
 }, {
 	"code": "TRUNGNAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TRUNGNAM: OTC A - CTCP Đầu tư Xây dựng Trung Nam"
 }, {
 	"code": "TSHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TSHC: OTC A - CTCP Đầu tư- Xây dựng và Kinh doanh Nhà Thái Sơn"
 }, {
 	"code": "TSJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TSJC: OTC A - CTCP Trường Sơn"
 }, {
 	"code": "TSM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TSM: OTC A - CTCP Xi măng Tiên Sơn Hà Tây"
 }, {
 	"code": "TSSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TSSC: OTC A - CTCP Chứng khoán Trường Sơn"
 }, {
 	"code": "TSTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TSTH: OTC A - CTCP Giống Thủy sản Thanh Hóa"
 }, {
 	"code": "TTBD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTBD: OTC A - CTCP Tân Tân"
 }, {
 	"code": "TTCE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTCE: OTC A - CTCP Chuyển phát nhanh Tín Thành"
 }, {
 	"code": "TTCG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTCG: OTC A - CTCP Đầu tư Thành Thành Công"
 }, {
 	"code": "TTDL1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTDL1: OTC A - CTCP Trường Thành "
 }, {
 	"code": "TTDL2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTDL2: OTC A - CTCP Chế biến Gỗ Trường Thành"
 }, {
 	"code": "TTGR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTGR: OTC A - CTCP tập đoàn Trung Thủy ( TRUNGTHUYGROUP))"
 }, {
 	"code": "TTHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTHC: OTC A - CTCP Khai Thác Đá Thừa Thiên Huế"
 }, {
 	"code": "TTIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTIC: OTC A - Công ty TNHH MTV đầu tư xây dựng Trường Thịnh"
 }, {
 	"code": "TTJSCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTJSCO: OTC A - CTCP Tràng Tiền"
 }, {
 	"code": "TTMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTMC: OTC A - Trang Tien Milk Cream Joint Stock Company"
 }, {
 	"code": "TTMY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTMY: OTC A - CTCP Tân Thành Mỹ"
 }, {
 	"code": "TTPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTPC: OTC A - CTCP Đầu tư - Kiến trúc - Xây dựng Toàn Thịnh Phát"
 }, {
 	"code": "TTSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTSC: OTC A - CTCP  Sứ Thiên Thanh"
 }, {
 	"code": "TTST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTST: OTC A - CTCP Thép Tân Thuận"
 }, {
 	"code": "TTTG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTTG: OTC A - CTCP Thương mại Thuận Tiến - Tiền Giang "
 }, {
 	"code": "TTTRANS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTTRANS: OTC A - CTCP Đầu Tư và Phát Triển Vận Tải Biển Trãi Thiên"
 }, {
 	"code": "TTVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TTVC: OTC A - CTCP Thép Thép Việt"
 }, {
 	"code": "TUC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TUC: OTC A - CTCP Khu công nghiệp Nam Tân Uyên"
 }, {
 	"code": "TUDI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TUDI: OTC A - CTCP Đầu tư Phát triển Đô thị và Thương mại"
 }, {
 	"code": "TUYPHUOC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TUYPHUOC: OTC A - CTCP xây lắp điện Tuy Phước"
 }, {
 	"code": "TVFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVFM: OTC A - CTCP Quản lý Quỹ Thép Việt"
 }, {
 	"code": "TVIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVIC: OTC A - CTCP Đầu tư Tín Việt"
 }, {
 	"code": "TVJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVJC: OTC A - CTCP Tài Việt"
 }, {
 	"code": "TVPS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVPS: OTC A - CTCP Thép TVP"
 }, {
 	"code": "TVRD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVRD: OTC A - CTCP Phát triển Nông thôn Trà Vinh"
 }, {
 	"code": "TVSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVSC: OTC A - Công ty Chứng khoán Thiên Việt"
 }, {
 	"code": "TVSI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVSI: OTC A - CTCP Chứng khoán Tân Việt"
 }, {
 	"code": "TVTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TVTC: OTC A - CTCP Du lịch Trà Vinh"
 }, {
 	"code": "TWCN2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TWCN2: OTC A - CTCP Công trình Giao Thông 2"
 }, {
 	"code": "TYHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "TYHP: OTC A - CTCP Thủy điện Tiên Yên "
 }, {
 	"code": "UAMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UAMC: OTC A - CTCP Cơ khí ôtô Uông Bí"
 }, {
 	"code": "UMVC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UMVC: OTC A - CTCP United Motor Việt Nam"
 }, {
 	"code": "UNIBROS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UNIBROS: OTC A - CTCP Tứ Hải"
 }, {
 	"code": "UNICONS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UNICONS: OTC A - CTCP Đầu tư Xây dựng Uy Nam"
 }, {
 	"code": "UNIPLAST",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UNIPLAST: OTC A - CTCP Nhựa Tân Tiến"
 }, {
 	"code": "UPEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UPEXIM: OTC A - CTCP Sản xuất - Xuất nhập khẩu Lâm sản và Hàng TTCN"
 }, {
 	"code": "UPGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UPGC: OTC A - CTCP ĐẦU TƯ VCN"
 }, {
 	"code": "UTXI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "UTXI: OTC A - CTCP Chế biến Thủy sản Út Xi"
 }, {
 	"code": "VABANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VABANK: OTC A - Ngân hàng TMCP Việt Á"
 }, {
 	"code": "VAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VAC: OTC A - Tổng công ty Hàng không Việt Nam"
 }, {
 	"code": "VACOPHARM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VACOPHARM: OTC A - CTCP Dược Vacopharm"
 }, {
 	"code": "VAFACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VAFACO: OTC A - CTCP Bao bì Vafaco"
 }, {
 	"code": "VAFCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VAFCO: OTC A - CTCP Phân lân Nung chảy Văn Điển"
 }, {
 	"code": "VAFOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VAFOCO: OTC A - CTCP Thực phẩm Vạn Điểm"
 }, {
 	"code": "VALC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VALC: OTC A - CTCP Cho thuê máy bay"
 }, {
 	"code": "VANPHONG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VANPHONG: OTC A - CTCP Đầu tư và Phát triển Vân Phong"
 }, {
 	"code": "VAPOWER",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VAPOWER: OTC A - CTCP Tập đoàn Đầu tư thương mại công nghiệp Việt Á"
 }, {
 	"code": "VASC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VASC: OTC A - CTCP Giáo dục Quốc tế Việt Úc"
 }, {
 	"code": "VASS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VASS: OTC A - CTCP Bảo hiểm Viễn Đông"
 }, {
 	"code": "VATPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VATPC: OTC A - CTCP Nhiệt điện Vũng Áng 2"
 }, {
 	"code": "VBJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VBJC: OTC A - CTCP Nồi Hơi Việt Nam"
 }, {
 	"code": "VBRE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VBRE: OTC A - CTCP Bất động sản Việt Bắc"
 }, {
 	"code": "VC16",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VC16: OTC A - CTCP Vinaconex 16"
 }, {
 	"code": "VC17",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VC17: OTC A - CTCP Vinaconex 17"
 }, {
 	"code": "VC20",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VC20: OTC A - CTCP Cơ khí Xây dựng Vinaconex 20"
 }, {
 	"code": "VC36",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VC36: OTC A - CTCP Tư vấn và Đầu tư VINACONEX 36"
 }, {
 	"code": "VC45",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VC45: OTC A - CTCP Đầu Tư và Xây dựng Số 45"
 }, {
 	"code": "VCALPHA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCALPHA: OTC A - CTCP Đầu tư và Phát triển Hạ tầng Vinaconex - Alphanam"
 }, {
 	"code": "VCAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCAM: OTC A - CTCP Quản lý Quỹ  Đầu tư Chứng khoán Bản Việt"
 }, {
 	"code": "VCBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCBANK: OTC A - Ngân hàng TMCP Bản Việt"
 }, {
 	"code": "VCC1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCC1: OTC A - CTCP Bông Việt Nam"
 }, {
 	"code": "VCCPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCCPC: OTC A - CTCP xi măng Cẩm Phả"
 }, {
 	"code": "VCDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCDC: OTC A - CTCP Tư vấn Đầu tư và Thiết kế Xây dựng Việt Nam"
 }, {
 	"code": "VCEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCEC: OTC A - CTCP đầu tư xây dựng và kỹ thuật VINACONEX"
 }, {
 	"code": "VCFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCFC: OTC A - Công ty Tài chính Cổ phần Hóa chất Việt Nam"
 }, {
 	"code": "VCG_B2010",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCG_B2010: OTC A - Trái phiếu Tổng CTCP XNK Xây dựng Việt Nam ( VINACONEX BOND 2010)"
 }, {
 	"code": "VCG_SGBOND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCG_SGBOND: OTC A - Tr?i phi?u C?ng ty c? ph?n VINACONEX S?I G?N"
 }, {
 	"code": "VCH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCH: OTC A - CTCP Đầu tư và Phát triển Hạ tầng Vinaconex (Vinaconex 34)"
 }, {
 	"code": "VCHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCHC: OTC A - CTCP Thủy điện Văn Chấn"
 }, {
 	"code": "VCHT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCHT: OTC A - CTCP Đầu tư và Phát triển đô thị VinaConex-Hoàng Thành"
 }, {
 	"code": "VCIS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCIS: OTC A - CTCP Quốc tế Gốm sứ Việt"
 }, {
 	"code": "VCMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCMC: OTC A - CTCP Quản lý quỹ đầu tư chứng khoán Chiến Thắng"
 }, {
 	"code": "VCPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCPC: OTC A - CTCP Cảng Vật Cách"
 }, {
 	"code": "VCPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCPT: OTC A - CTCP Thương Cảng Vũng Tàu"
 }, {
 	"code": "VCQT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCQT: OTC A - CTCP Xây dựng và Xuất nhập khẩu Quyết Thắng"
 }, {
 	"code": "VCRND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCRND: OTC A - CTCP Tư vấn, đầu tư xây dựng và Ứng dụng công nghệ mới"
 }, {
 	"code": "VCSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCSG: OTC A - CTCP Vinaconex Sài Gòn"
 }, {
 	"code": "VCTN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCTN: OTC A - CTCP tập đoàn vật liệu chịu lửa Thái Nguyên"
 }, {
 	"code": "VCV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VCV: OTC A - CTCP Vận Tải Vinaconex"
 }, {
 	"code": "VDAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDAC: OTC A - CTCP Đầu tư và Phát triển hệ thống phân phối Việt Nam"
 }, {
 	"code": "VDAD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDAD: OTC A - CTCP Thương mại Dịch vụ VDA Đà Nẵng"
 }, {
 	"code": "VDCNET2E",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDCNET2E: OTC A - CTCP Phát triển Dịch vụ Học tập và Giải trí Trực tuyến"
 }, {
 	"code": "VDFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDFC: OTC A - CTCP sản xuất cáp quang và phụ kiện Việt Đức"
 }, {
 	"code": "VDFM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDFM: OTC A - CTCP Quản lý Quỹ đầu tư Chứng khoán Việt Long"
 }, {
 	"code": "VDQC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDQC: OTC A - CTCP Vinaconex Dung Quất"
 }, {
 	"code": "VDSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VDSE: OTC A - CTCP Chứng khoán Viễn Đông"
 }, {
 	"code": "VEAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VEAM: OTC A - TCT Máy động lực và Máy nông nghiệp Việt Nam – CTCP"
 }, {
 	"code": "VECHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VECHN: OTC A - Tổng Công ty Đầu tư và phát triển đường cao tốc Việt Nam (VEC)"
 }, {
 	"code": "VED",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VED: OTC A - CTCP Phát triển Thể thao điện tử Việt Nam"
 }, {
 	"code": "VEGE1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VEGE1: OTC A - CTCP XNK Rau quả 1"
 }, {
 	"code": "VEGETIGI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VEGETIGI: OTC A - CTCP Rau quả Tiền Giang"
 }, {
 	"code": "VESCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VESCO: OTC A - CTCP Dịch vụ Điện tử Việt"
 }, {
 	"code": "VEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VEXIM: OTC A - CTCP Đầu tư và Xuất nhập khẩu Viglacera"
 }, {
 	"code": "VF2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VF2: OTC A - Quỹ đầu tư Tăng trưởng Việt Nam"
 }, {
 	"code": "VFCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFCC: OTC A - CTCP Quản lý Quỹ Việt Cát"
 }, {
 	"code": "VFCI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFCI: OTC A - CTCP Tôn mạ màu Việt - Pháp"
 }, {
 	"code": "VFMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFMC: OTC A - CTCP Quản lý Quỹ đầu tư Việt Nam"
 }, {
 	"code": "VFMS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFMS: OTC A - CTCP Cơ khí Thép Việt Pháp"
 }, {
 	"code": "VFMVF1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFMVF1: OTC A - Quỹ Đầu Tư Chứng Khoán Việt Nam"
 }, {
 	"code": "VFMVF4",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFMVF4: OTC A - Quỹ Đầu Tư Doanh Nghiệp Hàng Đầu Việt Nam"
 }, {
 	"code": "VFMVFA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFMVFA: OTC A - Quỹ Đầu Tư Năng Động Việt Nam"
 }, {
 	"code": "VFMVN30",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFMVN30: OTC A - Quỹ ETF VFMVN30"
 }, {
 	"code": "VFSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFSC: OTC A - CTCP Chứng khoán Nhất Việt"
 }, {
 	"code": "VFTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VFTC: OTC A - CTCP Khử Trùng - Trừ Mối Việt Nam"
 }, {
 	"code": "VGFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VGFC: OTC A - CTCP May Xuất khẩu Vũng Tàu"
 }, {
 	"code": "VHBC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VHBC: OTC A - CTCP Kinh doanh và Đầu tư Việt Hà"
 }, {
 	"code": "VHMW",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VHMW: OTC A - CTCP Nước khoáng Vĩnh Hảo"
 }, {
 	"code": "VHTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VHTC: OTC A - CTCP Công nghệ Vĩnh Hưng"
 }, {
 	"code": "VIA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIA: OTC A - CTCP  Vian"
 }, {
 	"code": "VIANIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIANIMEX: OTC A - CTCP Xuất nhập khẩu và Dịch vụ Tổng hợp Nghệ An"
 }, {
 	"code": "VIBEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIBEX: OTC A - CTCP Bê tông Xây dựng Hà Nội"
 }, {
 	"code": "VICADI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VICADI: OTC A - CTCP Vật liệu Kỹ thuật Điện"
 }, {
 	"code": "VICOQT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VICOQT: OTC A - CTCP Đầu tư và Khoáng sản Vico Quảng Trị"
 }, {
 	"code": "VIDAMO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIDAMO: OTC A - CTCP dầu nhờn PV Oil"
 }, {
 	"code": "VIDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIDC: OTC A - CTCP Phát triển Đô thị quốc tế Việt Nam"
 }, {
 	"code": "VIDOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIDOCO: OTC A - CTCP Thiết kế Xây lắp Viễn Đông"
 }, {
 	"code": "VIDRED",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIDRED: OTC A - CTCP Kỹ thuật tàu Công trình Thủy Vinashin"
 }, {
 	"code": "VIETBANK",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETBANK: OTC A - Ngân hàng TMCP Việt Nam Thương Tín"
 }, {
 	"code": "VIETCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETCO: OTC A - CTCP Việt Cơ "
 }, {
 	"code": "VIETCOM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETCOM: OTC A - CTCP Công nghệ Phần mềm và Truyền thông Việt Nam"
 }, {
 	"code": "VIETFS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETFS: OTC A - CTCP Thương Mại Dịch Vụ Tư Vấn Thiết Kế Thời Trang Việt"
 }, {
 	"code": "VIETHUNG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETHUNG: OTC A - CTCP Việt Hưng"
 }, {
 	"code": "VIETNAMNET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETNAMNET: OTC A - CTCP Dịch vụ Truyền thông VietNamNet ICom"
 }, {
 	"code": "VIETNAMNET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETNAMNET: OTC A - CTCP Truyền thông VietNamNet"
 }, {
 	"code": "VIETPHAP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETPHAP: OTC A - CTCP Thép Việt Pháp"
 }, {
 	"code": "VIETRA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETRA: OTC A - Tổng Công ty Cổ phần Thương mại Xây dựng"
 }, {
 	"code": "VIETRANSDN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETRANSDN: OTC A - CTCP Giao Nhận Kho vận Ngoại thương Đà Nẵng"
 }, {
 	"code": "VIETRANSDN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETRANSDN: OTC A - CTCP Giao Nhận Kho vận Ngoại thương Đà Nẵng"
 }, {
 	"code": "VIETRANSHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETRANSHP: OTC A - CTCP Giao nhận kho vận Ngoại thương Hải Phòng"
 }, {
 	"code": "VIETRANSHP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETRANSHP: OTC A - CTCP Giao nhận kho vận Ngoại thương tại Hải Phòng"
 }, {
 	"code": "VIETRAVEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETRAVEL: OTC A - CTCP Du lịch và Tiếp thị GTVT Việt Nam - Vietravel"
 }, {
 	"code": "VIETREE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETREE: OTC A - CTCP Cơ Điện lạnh Việt Nam"
 }, {
 	"code": "VIETROSCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETROSCO: OTC A - CTCP XNK &amp; Chế biến Thủy Sản Đông lạnh số 5"
 }, {
 	"code": "VIETSO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIETSO: OTC A - CTCP Đầu tư Việt Sô"
 }, {
 	"code": "VIFON",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIFON: OTC A - CTCP Kỹ nghệ Thực phẩm Việt Nam"
 }, {
 	"code": "VIGACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIGACO: OTC A - CTCP May Việt Thắng"
 }, {
 	"code": "VIGATEXCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIGATEXCO: OTC A - CTCP Dệt may Thắng Lợi"
 }, {
 	"code": "VIGECAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIGECAM: OTC A - TCT Vật tư Nông nghiệp - CTCP"
 }, {
 	"code": "VIGER",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIGER: OTC A - CTCP Bia Rượu NGK Viger"
 }, {
 	"code": "VIGLAFICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIGLAFICO: OTC A - CTCP Ống sợi Thủy tinh VINACONEX"
 }, {
 	"code": "VIHACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIHACO: OTC A - CTCP Công nghiệp Việt Hoàng "
 }, {
 	"code": "VIHAJI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIHAJI: OTC A - CTCP Đầu tư và phát triển đô thị Việt Hưng"
 }, {
 	"code": "VIHIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIHIMEX: OTC A - CTCP Giấy Vĩnh Huê"
 }, {
 	"code": "VIID",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "VIID: OTC C - CTCP Hạ tầng và Bất động sản Việt Nam"
 }, {
 	"code": "VIJASUN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIJASUN: OTC A - CTCP Dương Việt Nhật"
 }, {
 	"code": "VILACONA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VILACONA: OTC A - CTCP Đầu tư hợp tác kinh tế Việt Lào"
 }, {
 	"code": "VILEXIM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VILEXIM: OTC A - CTCP  XNK và hợp tác Đầu tư Vilexim"
 }, {
 	"code": "VIMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIMC: OTC A - CTCP Cơ khí và Xây dựng Viglacera"
 }, {
 	"code": "VIMEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIMEC: OTC A - CTCP Thương mại Đầu tư VIMEC"
 }, {
 	"code": "VIMEDIMEX1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIMEDIMEX1: OTC A - CTCP xuất nhập y tế Việt Nam"
 }, {
 	"code": "VIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIMEX: OTC A - CTCP XNK Vĩnh Lợi"
 }, {
 	"code": "VINABICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINABICO: OTC A - CTCP Bánh kẹo Vinabico"
 }, {
 	"code": "VINABOMI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINABOMI: OTC A - CTCP Bột mì Bình An"
 }, {
 	"code": "VINACAM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINACAM: OTC A - CTCP Vinacam"
 }, {
 	"code": "VINACAP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINACAP: OTC A - CTCP Viễn thông Điện tử VINACAP"
 }, {
 	"code": "VINACICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINACICO: OTC A - CTCP Tư vấn Đầu tư và Xây dựng Việt Nam"
 }, {
 	"code": "VINACOMIN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINACOMIN: OTC A - Tập đoàn Công nghiệp Than Khoáng sản Việt Nam"
 }, {
 	"code": "VINAFOR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAFOR: OTC A - CTCP Vinafor Đà Nẵng"
 }, {
 	"code": "VINAFORSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAFORSG: OTC A - CTCP Sản xuất và XNK Lâm sản Sài Gòn"
 }, {
 	"code": "VINAGLOBAL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAGLOBAL: OTC A - CTCP Chứng khoán Toàn cầu"
 }, {
 	"code": "VINAGLOBAL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAGLOBAL: OTC A - CTCP Chứng khoán Toàn Cầu"
 }, {
 	"code": "VINAHUD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAHUD: OTC A - CTCP Đầu tư phát triển nhà và Đô thị Vinaconex"
 }, {
 	"code": "VINAKIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAKIP: OTC A - CTCP Khí cụ điện 1"
 }, {
 	"code": "VINALIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINALIMEX: OTC A - CTCP XNK Hạt điều và hàng Nông sản Thực phẩm TpHCM"
 }, {
 	"code": "VINALINES",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINALINES: OTC A - CTCP Bất động sản Vinalines "
 }, {
 	"code": "VINAMIT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAMIT: OTC A - CTCP Vinamit"
 }, {
 	"code": "VINAOIL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAOIL: OTC A - CTCP Dầu thực Vật Việt Nam"
 }, {
 	"code": "VINASC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINASC: OTC A - CTCP Chứng khoán Vina"
 }, {
 	"code": "VINATEXHCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINATEXHCM: OTC A - Công ty Thương mại Dệt may Tp Hồ Chí Minh"
 }, {
 	"code": "VINATEXHCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINATEXHCM: OTC A - CTCP Thương mại Dệt may Tp Hồ Chí Minh"
 }, {
 	"code": "VINATRA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINATRA: OTC A - CTCP Kinh doanh VINACONEX"
 }, {
 	"code": "VINATRANS1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINATRANS1: OTC A - CTCP Giao nhận Vận tải Miền Trung"
 }, {
 	"code": "VINATRANS1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINATRANS1: OTC A - CTCP Giao nhận Vận tải Miền Trung "
 }, {
 	"code": "VINAVETCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINAVETCO: OTC A - CTCP Thuốc Thú Y TW1"
 }, {
 	"code": "VINECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINECO: OTC A - Công ty VinEco"
 }, {
 	"code": "VINFAST",
 	"codetype": "D",
 	"stock_exchange": "OTC",
 	"name": "VINFAST: OTC D - Công ty TNHH Sản xuất và Kinh doanh VINFAST"
 }, {
 	"code": "VINHOME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINHOME: OTC A - CTCP VINHOMES"
 }, {
 	"code": "VINPHACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINPHACO: OTC A - CTCP Dược Phẩm Vĩnh Phúc"
 }, {
 	"code": "VINR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VINR: OTC A - CTCP Phát triển đô thị và khu công nghiệp Cao su Việt Nam"
 }, {
 	"code": "VINRETAIL",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VINRETAIL: OTC B - Vincom Retail"
 }, {
 	"code": "VIPACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIPACO: OTC A - CTCP Bao bì Công nghệ cao Vĩnh Tường"
 }, {
 	"code": "VIPCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIPCM: OTC A - Công ty CP Quản lý Quỹ Đầu tư VIPC"
 }, {
 	"code": "VIPESCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIPESCO: OTC A - CTCP Thuốc sát trùng Việt Nam"
 }, {
 	"code": "VIPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIPT: OTC A - CTCP Đầu tư Phát triển Kỹ nghệ và Xây dựng Việt Nam"
 }, {
 	"code": "VIRASIMEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIRASIMEX: OTC A - CTCP Xuất nhập khẩu Vật tư Thiết bị Đường sắt"
 }, {
 	"code": "VISC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VISC: OTC A - CTCP Chứng khoán Công nghiệp Việt Nam"
 }, {
 	"code": "VISE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VISE: OTC A - CTCP Chứng khoán Quốc tế Việt Nam"
 }, {
 	"code": "VITCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITCC: OTC A - CTCP Bê tông và Xây dựng Vĩnh Tuy"
 }, {
 	"code": "VITI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITI: OTC A - CTCP Công nghiệp Vĩnh Tường"
 }, {
 	"code": "VITOURSHN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITOURSHN: OTC A - CTCP Du lịch Việt Nam - Hà Nội"
 }, {
 	"code": "VITR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITR: OTC A - Công ty TNHH MTV Giao nhận Kho vận Ngoại thương"
 }, {
 	"code": "VITRAVICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITRAVICO: OTC A - CTCP Đầu tư - Sản xuất và Thương mại Việt Nam"
 }, {
 	"code": "VITSE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITSE: OTC A - CTCP chứng khoán VIT"
 }, {
 	"code": "VITT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VITT: OTC A - CTCP Du lịch và Thương mại Quốc tế Vinatour"
 }, {
 	"code": "VIWASEEN1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWASEEN1: OTC A - CTCP Xây dựng Cấp thoát nước Số 1"
 }, {
 	"code": "VIWASEEN11",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWASEEN11: OTC A - CTCP Khoan và Xây lắp Cấp thoát nước"
 }, {
 	"code": "VIWASEEN11",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWASEEN11: OTC A - CTCP Khoan và Xây lắp Cấp thoát nước"
 }, {
 	"code": "VIWASEEN2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWASEEN2: OTC A - CTCP Cơ khí Xây dựng Cấp thoát nước Viwaseen.2"
 }, {
 	"code": "VIWASEEN3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWASEEN3: OTC A - CTCP Viwaseen3"
 }, {
 	"code": "VIWASEEN4",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWASEEN4: OTC A - CTCP Ðiện Nước Lắp Máy Và Xây Dựng"
 }, {
 	"code": "VIWELCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VIWELCO: OTC A - CTCP Công nghiệp hàn Việt Nam"
 }, {
 	"code": "VJGR",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VJGR: OTC A - CTCP Thép Việt Nhật"
 }, {
 	"code": "VJIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VJIC: OTC A - CTCP Đầu Tư Thương Mại Việt Nhật"
 }, {
 	"code": "VJSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VJSC: OTC A - CTCP Thép Việt Nhật"
 }, {
 	"code": "VLPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VLPC: OTC A - CTCP Điện Việt - Lào"
 }, {
 	"code": "VLPORT",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VLPORT: OTC B - CTCP CẢNG VĨNH LONG"
 }, {
 	"code": "VLSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VLSC: OTC A - CTCP Thép Vạn Lợi"
 }, {
 	"code": "VMCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VMCC: OTC A - CTCP Vật tư Tổng Hợp Vĩnh Phú"
 }, {
 	"code": "VMIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VMIC: OTC A - CTCP Đầu tư Vinamotor"
 }, {
 	"code": "VMICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VMICO: OTC A - CTCP Đầu tư Việt Mỹ "
 }, {
 	"code": "VMMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VMMC: OTC A - CTCP Sữa Việt Mỹ"
 }, {
 	"code": "VNAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNAC: OTC A - CTCP Quản lý Quỹ  Đầu tư Chứng khoán Liên Minh Việt Nam"
 }, {
 	"code": "VNAI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNAI: OTC A - CTCP Bảo hiểm Hàng không"
 }, {
 	"code": "VNE10",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNE10: OTC A - CTCP xây dựng điện Vneco10 ( VNECO10 )"
 }, {
 	"code": "VNE4",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNE4: OTC A - CTCP xây dựng điện Vneco4"
 }, {
 	"code": "VNECO11",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECO11: OTC A - CTCP Xây dựng điện VNECO11"
 }, {
 	"code": "VNECO12",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECO12: OTC A - CTCP Xây dựng Điện VNECO12"
 }, {
 	"code": "VNECO5",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECO5: OTC A - CTCP Xây dựng Điện VNECO 5"
 }, {
 	"code": "VNECO6",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECO6: OTC A - CTCP Xây dựng Điện VNECO 6"
 }, {
 	"code": "VNECO7",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECO7: OTC A - CTCP Xây dựng Điện VNECO 7"
 }, {
 	"code": "VNECO8",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECO8: OTC A - CTCP Xây dựng Điện VNECO 8"
 }, {
 	"code": "VNECOCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNECOCC: OTC A - CTCP Tư vấn và Xây dựng VNECO "
 }, {
 	"code": "VNGAME",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNGAME: OTC A - CTCP VNG"
 }, {
 	"code": "VNLS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNLS: OTC A - CTCP Da Giầy Việt Nam"
 }, {
 	"code": "VNOF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNOF: OTC A - Quỹ Cơ hội Việt Nam"
 }, {
 	"code": "VNPAY",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNPAY: OTC A - CTCP Giải pháp Thanh toán Việt Nam"
 }, {
 	"code": "VNPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNPC: OTC A - CTCP Sản xuất Máy tính VNPC"
 }, {
 	"code": "VNPT",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VNPT: OTC B - VNPT"
 }, {
 	"code": "VNPTEPAY",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VNPTEPAY: OTC B - CTCP Thanh toán điện tử VNPT"
 }, {
 	"code": "VNPTLAND",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VNPTLAND: OTC B - CTCP Bất động sản Bưu chính Viễn thông Việt Nam"
 }, {
 	"code": "VNS2",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VNS2: OTC B - Tổng Công ty Mía đường II – CTCP"
 }, {
 	"code": "VNSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNSC: OTC A - CTCP Thể thao Việt Nam"
 }, {
 	"code": "VNTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNTC: OTC A - CTCP Du lịch Việt Nam tại TP Hồ Chí Minh"
 }, {
 	"code": "VNTRAVEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNTRAVEL: OTC A - CTCP Du lịch Việt Nam"
 }, {
 	"code": "VNWE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNWE: OTC A - CTCP Nước sạch và Môi trường Việt Nam"
 }, {
 	"code": "VNWIND",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VNWIND: OTC B - CTCP Điện Cơ Thống Nhất"
 }, {
 	"code": "VNWO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNWO: OTC A - CTCP Len Việt Nam"
 }, {
 	"code": "VNYP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VNYP: OTC A - CTCP Niên Giám Điện Thoại và Trang Vàng I - Việt Nam"
 }, {
 	"code": "VOCA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VOCA: OTC A - Tổng công ty công nghiệp Dầu thực vật Việt Nam"
 }, {
 	"code": "VOEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VOEC: OTC A - Tổng công ty Công nghiệp Dầu Thực Vật Việt Nam"
 }, {
 	"code": "VPBS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPBS: OTC A - CTCP Chứng khoán Ngân hàng TMCP Việt Nam Thịnh Vượng "
 }, {
 	"code": "VPCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPCC: OTC A - Nhà máy Xi măng Vĩnh Phúc "
 }, {
 	"code": "VPCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPCO: OTC A - CTCP Đầu tư Văn Phú - Invest"
 }, {
 	"code": "VPCVN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPCVN: OTC A - CTCP Bao bì Việt Nam"
 }, {
 	"code": "VPGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPGC: OTC A - CTCP Đầu tư Vạn Phúc Gia"
 }, {
 	"code": "VPGS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPGS: OTC A - CTCP Kinh doanh Kho chứa Khí hóa lỏng Vũng Tàu"
 }, {
 	"code": "VPIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPIC: OTC A - CTCP Đầu tư Việt Phát"
 }, {
 	"code": "VPJC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPJC: OTC A - CTCP VIPACO"
 }, {
 	"code": "VPL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPL: OTC A - CTCP Vinpearl"
 }, {
 	"code": "VPPT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPPT: OTC A - CTCP Sản xuất & Thương mại Việt Phát"
 }, {
 	"code": "VPTEX",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPTEX: OTC A - CTCP Dệt Vĩnh Phú"
 }, {
 	"code": "VPW2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VPW2: OTC A - Công ty Cấp Thoát Nước và Môi trường Số 2 Vĩnh Phúc"
 }, {
 	"code": "VQSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VQSC: OTC A - CTCP Chứng khoán Việt Quốc"
 }, {
 	"code": "VRGBL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VRGBL: OTC A - CTCP VRG - Bảo Lộc"
 }, {
 	"code": "VRTS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VRTS: OTC A - CTCP Dịch vụ Vận tải Đường sắt"
 }, {
 	"code": "VSAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSAC: OTC A - Công ty Cổ phần Tư vấn Biển Việt"
 }, {
 	"code": "VSCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSCO: OTC A - CTCP Chứng khoán Việt"
 }, {
 	"code": "VSD",
 	"codetype": "C",
 	"stock_exchange": "OTC",
 	"name": "VSD: OTC C - CTCP Tập đoàn VSETGROUP"
 }, {
 	"code": "VSEC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSEC: OTC A - CTCP Chứng khoán Việt Nam"
 }, {
 	"code": "VSIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSIC: OTC A - CTCP Đầu tư Vĩnh Sơn"
 }, {
 	"code": "VSII",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSII: OTC A - CTCP Phần mềm Việt Quốc tế"
 }, {
 	"code": "VSIV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSIV: OTC A - CTCP VS Industry Việt Nam"
 }, {
 	"code": "VSMS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSMS: OTC A - CTCP Chứng khoán VSM"
 }, {
 	"code": "VSSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSSC: OTC A - CTCP Xây lắp Công nghiệp Việt Sơn"
 }, {
 	"code": "VSTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VSTC: OTC A - CTCP Việt Sáng Tạo"
 }, {
 	"code": "VTAC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTAC: OTC A - CTCP Sản xuất Thương mại Xuất nhập khẩu Viễn Thông A"
 }, {
 	"code": "VTBD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTBD: OTC A - CTCP Vận tải Bình Dương"
 }, {
 	"code": "VTCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTCC: OTC A - CTCP Khóa Việt - Tiệp"
 }, {
 	"code": "VTCD",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTCD: OTC A - CTCP Tư vấn thiết kế Viettel"
 }, {
 	"code": "VTCM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTCM: OTC A - CTCP Quản lý Quỹ Việt Tín"
 }, {
 	"code": "VTDC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTDC: OTC A - CTCP Sản xuất kinh doanh thiết bị điện TTC"
 }, {
 	"code": "VTDS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTDS: OTC A - CTCP Viễn Thông - Tín Hiệu Đường sắt"
 }, {
 	"code": "VTEL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTEL: OTC A - CTCP Bất động sản Dệt may Việt Nam"
 }, {
 	"code": "VTF",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTF: OTC A - CTCP Thức Ăn Chăn Nuôi Việt Thắng"
 }, {
 	"code": "VTFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTFC: OTC A - Công ty Tài chính Cổ phần Dệt May Việt Nam"
 }, {
 	"code": "VTGA",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTGA: OTC A - CTCP May xuất khẩu Việt Thái"
 }, {
 	"code": "VTGC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTGC: OTC A - CTCP  May Việt Thịnh"
 }, {
 	"code": "VTGI",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTGI: OTC A - TCT CP Đầu tư Quốc tế Viettel"
 }, {
 	"code": "VTHJsc",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTHJsc: OTC A - CTCP Thủy điện VIWASEEN - Tây Bắc"
 }, {
 	"code": "VTIE",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTIE: OTC A - CTCP Xuất nhập khẩu Việt Trang"
 }, {
 	"code": "VTND",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTND: OTC A - CTCP Viettronics Đống Đa"
 }, {
 	"code": "VTNM",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTNM: OTC A - CTCP Vận tải và Thương mại"
 }, {
 	"code": "VTNMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTNMC: OTC A - CTCP XNK Điện tử Việt"
 }, {
 	"code": "VTPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTPC: OTC A - CTCP Xây dựng Bưu chính Viễn thông Vũng Tàu"
 }, {
 	"code": "VTPIC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTPIC: OTC A - CTCP Đầu tư Vạn Thịnh Phát"
 }, {
 	"code": "VTRC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTRC: OTC A - CTCP Kho vận và Dịch vụ Thương mại"
 }, {
 	"code": "VTSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTSC: OTC A - CTCP Chứng khoán Việt Thành"
 }, {
 	"code": "VTSHIP",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTSHIP: OTC A - CTCP dịch vụ và vận tải biển Vũng Tàu"
 }, {
 	"code": "VTTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTTH: OTC A - CTCP Vật tư Tổng hợp Tp Hồ Chí Minh"
 }, {
 	"code": "VTVBC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTVBC: OTC A - Công ty TNHH Dịch vụ Truyền hình - Viễn thông Việt Nam (VTV Broadcom)"
 }, {
 	"code": "VTVCAB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VTVCAB: OTC A - TCT Truyền hình Cáp Việt Nam"
 }, {
 	"code": "VTVTOWER",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "VTVTOWER: OTC B - CTCP Đầu tư Tháp Truyền hình Việt Nam"
 }, {
 	"code": "VVFC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VVFC: OTC A - Công Tài chính Cổ Phần Vinaconex - Viettel"
 }, {
 	"code": "VVHC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VVHC: OTC A - CTCP Viglacera Vân Hải"
 }, {
 	"code": "VVTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VVTC: OTC A - CTCP Việt Trì Viglacera"
 }, {
 	"code": "VWC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "VWC: OTC A - TCT Xây dựng Đường thủy"
 }, {
 	"code": "WACO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WACO: OTC A - CTCP Nước và Môi trường"
 }, {
 	"code": "WAREQ",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WAREQ: OTC A - CTCP Thiết bị Thủy lợi"
 }, {
 	"code": "WATRACO1",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WATRACO1: OTC A - CTCP Vận tải Thủy 1"
 }, {
 	"code": "WATRACO3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WATRACO3: OTC A - CTCP Vận tải thủy số 3"
 }, {
 	"code": "WB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WB: OTC A - Ngân hàng TMCP Phương Tây"
 }, {
 	"code": "WECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WECO: OTC A - CTCP Nước và Môi trường Bắc Bộ"
 }, {
 	"code": "WECSG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WECSG: OTC A - CTCP May Thêu Giày Dép W.E.C Sài Gòn"
 }, {
 	"code": "WEICO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WEICO: OTC A - CTCP Nước, Môi trường và Hạ tầng kỹ thuật Sài gòn"
 }, {
 	"code": "WIDT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WIDT: OTC A - CTCP Đầu tư và Phát triển Viễn thông Miền Tây"
 }, {
 	"code": "WMTC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WMTC: OTC A - CTCP Máy giặt Mitsustar Việt Nam"
 }, {
 	"code": "WOORICBV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WOORICBV: OTC A - CTCP Chứng khoán Woori CBV"
 }, {
 	"code": "WSTN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "WSTN: OTC A - CTCP Cấp thoát Nước Trà Nóc"
 }, {
 	"code": "X26",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "X26: OTC A - Công ty Cổ phần 26"
 }, {
 	"code": "X77C",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "X77C: OTC A - Nhà máy Xi măng X77 - Bộ Quốc Phòng"
 }, {
 	"code": "XD204",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XD204: OTC A - CTCP Xây dựng 204"
 }, {
 	"code": "XD2DN",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XD2DN: OTC A - CTCP Xây dựng số 2 - Đồng Nai"
 }, {
 	"code": "XDCT545",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDCT545: OTC A - CTCP Xây Dựng Công Trình 545 ( CECO 545)"
 }, {
 	"code": "XDDL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDDL: OTC A - CTCP Đầu tư Xây dựng và Kinh doanh Nhà Đăk Lăk"
 }, {
 	"code": "XDDT24",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDDT24: OTC A - CTCP Đầu tư và Xây dựng 24"
 }, {
 	"code": "XDGT1SL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDGT1SL: OTC A - CTCP Quản lý và Xây dựng Giao thông I Sơn La"
 }, {
 	"code": "XDGT2SL",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDGT2SL: OTC A - CTCP Quản lý sửa chữa và xây dựng công trình giao thông 2 Sơn La"
 }, {
 	"code": "XDKT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDKT: OTC A - CTCP Cơ điện và Xây dựng Kon Tum"
 }, {
 	"code": "XDPC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDPC: OTC A - CTCP Giấy Xuân Đức"
 }, {
 	"code": "XDTH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XDTH: OTC A - Tổng Công ty Cổ phần Xây dựng Thanh Hóa"
 }, {
 	"code": "XKTB",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XKTB: OTC A - C�ng ty CP xe kh�ch Th�i B�nh"
 }, {
 	"code": "XLXTV",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XLXTV: OTC A - CTCP Xây lắp và Xáng Trà Vinh"
 }, {
 	"code": "XMC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XMC: OTC A - CTCP Đầu Tư  &amp; Xây Dựng Xuân Mai"
 }, {
 	"code": "XMDT",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XMDT: OTC A - CTCP Xuân Mai – Đạo Tú"
 }, {
 	"code": "XMMS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XMMS: OTC A - CTCP Xi măng Mai Sơn"
 }, {
 	"code": "XTBG",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "XTBG: OTC A - Công ty CP xây lắp Thủy lợi Bắc Giang"
 }, {
 	"code": "YBCC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YBCC: OTC A - CTCP Xi măng Yên Bình"
 }, {
 	"code": "YBCC2",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YBCC2: OTC A - CTCP Xây dựng số 2 tỉnh Yên Bái"
 }, {
 	"code": "YBCC3",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YBCC3: OTC A - CTCP Xây dựng số 3 tỉnh Yên Bái"
 }, {
 	"code": "YBMS",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YBMS: OTC A - CTCP Khoáng sản Yên Bái"
 }, {
 	"code": "Yeah1",
 	"codetype": "B",
 	"stock_exchange": "OTC",
 	"name": "Yeah1: OTC B - CTCP Tập đoàn Đại sứ Trẻ"
 }, {
 	"code": "YENVIET",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YENVIET: OTC A - CTCP Yến Việt"
 }, {
 	"code": "YPHARCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YPHARCO: OTC A - CTCP Dược phẩm Yên Bái"
 }, {
 	"code": "YSC",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YSC: OTC A - CTCP Hapaco Yên Sơn"
 }, {
 	"code": "YSHOCO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YSHOCO: OTC A - CTCP Giầy Yên Viên"
 }, {
 	"code": "YSKH",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YSKH: OTC A - Công ty Yến sào Khánh Hòa"
 }, {
 	"code": "YTECO",
 	"codetype": "A",
 	"stock_exchange": "OTC",
 	"name": "YTECO: OTC A - CTCP XNK Y tế Tp Hồ Chí Minh"
 }];
  data.forEach(ticker => {
    var {code, name, stock_exchange} = ticker;
    var newTicker = new Ticker({
      code,
      stock_exchange,
      company: name,
      published: true
    });
    newTicker.save(err => {
      console.log(err); 
    });
  });
  res.end('importing');
});