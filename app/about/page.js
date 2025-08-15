import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-6xl text-center text-red-500 font-bold mb-12 tracking-wider">
                    เร็ว แรงทะลุนรก
                </h1>
                
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-red-800/20 to-orange-800/20 p-8 rounded-lg border border-red-500/30">
                        <h2 className="text-3xl text-white font-bold mb-6 text-center">เกี่ยวกับซีรีส์หนัง</h2>
                        <p className="text-gray-300 text-lg leading-relaxed text-center">
                            เร็ว แรงทะลุนรก เป็นซีรีส์หนังแอคชั่นที่เริ่มต้นในปี 2001 
                            จากการแข่งรถสตรีทเรซิ่งสู่การผจญภัยปล้นครั้งใหญ่ทั่วโลก 
                            สิ่งที่เริ่มต้นจากเรื่องราวของการแข่งรถใต้ดิน ได้กลายเป็นมหากาพย์
                            เกี่ยวกับครอบครัว ความจงรักภักดี และภารกิจที่เป็นไปไม่ได้
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="bg-black/50 p-8 rounded-lg border border-gray-700">
                        <h2 className="text-3xl text-red-400 font-bold mb-8 text-center">ลำดับเวลาของภาพยนตร์</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก (2001)</h3>
                                    <p className="text-gray-400">ภาพยนตร์ต้นฉบับที่เริ่มต้นทุกอย่าง เน้นการแข่งรถสตรีทและปฏิบัติการสายลับ</p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว 2 แรงทะลุนรก (2003)</h3>
                                    <p className="text-gray-400">ไบรอัน โอ'คอนเนอร์ร่วมทีมกับโรมัน เพียร์ซในไมอามี่</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 4 (2009)</h3>
                                    <p className="text-gray-400">ดอมและไบรอันกลับมาร่วมทีมเพื่อแก้แค้นการตายของเลตตี้</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 5 (2011)</h3>
                                    <p className="text-gray-400">ทีมปล้นครั้งใหญ่ในรีโอ เดอ จาเนโร</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 6 (2013)</h3>
                                    <p className="text-gray-400">ทีมเผชิญหน้าโอเวน ชอว์ทั่วยุโรป</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 7 (2015)</h3>
                                    <p className="text-gray-400">เผชิญหน้าเดคการ์ด ชอว์ พร้อมกับการอำลาไบรอันของพอล วอล์กเกอร์</p>
                                </div>
                                <div className="border-l-4 border-pink-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 8 (2017)</h3>
                                    <p className="text-gray-400">ดอมถูกบังคับให้ทำงานต่อต้านครอบครัวของเขา</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="text-white font-bold">ฮ็อบส์ แอนด์ ชอว์ (2019)</h3>
                                    <p className="text-gray-400">สปินออฟฟีเจอริ่งหุ้นส่วนที่ไม่น่าจะเป็นไปได้</p>
                                </div>
                                <div className="border-l-4 border-red-400 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 9 (2021)</h3>
                                    <p className="text-gray-400">ดอมเผชิญหน้าจาค็อบ น้องชายที่แยกทางกัน</p>
                                </div>
                                <div className="border-l-4 border-cyan-500 pl-4">
                                    <h3 className="text-white font-bold">เร็ว แรงทะลุนรก 10 (2023)</h3>
                                    <p className="text-gray-400">บทล่าสุดในมหากาพย์ที่ยังคงดำเนินต่อไป</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Characters */}
                    <div className="bg-gradient-to-r from-gray-800/50 to-red-800/20 p-8 rounded-lg border border-red-400/30">
                        <h2 className="text-3xl text-red-400 font-bold mb-8 text-center">ตัวละครหลัก</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-red-600/20 p-4 rounded-lg mb-4">
                                    <h3 className="text-white font-bold text-xl">โดมินิค โตเรตโต</h3>
                                    <p className="text-gray-300">วิน ดีเซล</p>
                                </div>
                                <p className="text-gray-400">หัวใจของครอบครัว นักแข่งสตรีทที่กลายเป็นสายลับระดับโลก</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-600/20 p-4 rounded-lg mb-4">
                                    <h3 className="text-white font-bold text-xl">ไบรอัน โอ'คอนเนอร์</h3>
                                    <p className="text-gray-300">พอล วอล์กเกอร์</p>
                                </div>
                                <p className="text-gray-400">อดีตตำรวจที่กลายเป็นส่วนหนึ่งของครอบครัวดอม</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600/20 p-4 rounded-lg mb-4">
                                    <h3 className="text-white font-bold text-xl">เลตตี้ ออร์ติซ</h3>
                                    <p className="text-gray-300">มิเชล โรดริเกซ</p>
                                </div>
                                <p className="text-gray-400">หุ้นส่วนของดอมในการก่ออาชญากรรมและในชีวิต</p>
                            </div>
                        </div>
                    </div>

                    {/* Themes */}
                    <div className="bg-black/40 p-8 rounded-lg border border-yellow-500/30">
                        <h2 className="text-3xl text-yellow-400 font-bold mb-8 text-center">แก่นแท้ของเรื่อง</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl text-white font-bold mb-4">ครอบครัว</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    "ครอบครัว" ไม่ได้มีแค่สายเลือด แต่เป็นความผูกพันที่เลือกไว้ซึ่งทำให้คุณแข็งแกร่งขึ้น 
                                    ซีรีส์เน้นความจงรักภักดี ความไว้วางใจ และการยืนเคียงข้างคนที่คุณรัก
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl text-white font-bold mb-4">การไถ่บาป</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    ตัวละครมักจะได้รับโอกาสครั้งที่สอง แสดงให้เห็นว่าคนเราสามารถเปลี่ยนแปลงได้ 
                                    และการให้อภัยมีพลังมาก
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl text-white font-bold mb-4">เกียรติยศ</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    การใช้ชีวิตตามหลักการ การรักษาคำพูด และการทำในสิ่งที่ถูกต้อง 
                                    แม้ว่าจะเป็นเรื่องยาก
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl text-white font-bold mb-4">วิวัฒนาการ</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    จากการแข่งรถสตรีทสู่การช่วยชาติโลก - ซีรีส์แสดงให้เห็นว่า 
                                    คนและเรื่องราวสามารถเติบโตเกินจุดเริ่มต้นได้
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Legacy */}
                    <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-8 rounded-lg border border-red-300/30 text-center">
                        <h2 className="text-3xl text-red-300 font-bold mb-6">ผลกระทบทางวัฒนธรรม</h2>
                        <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
                            ซีรีส์ เร็ว แรงทะลุนรก กลายเป็นมากกว่าภาพยนตร์ - มันเป็นปรากฏการณ์ระดับโลกที่เฉลิมฉลอง
                            วัฒนธรรมที่หลากหลาย ฉากแอคชั่นที่น่าตื่นตาตื่นใจ และข้อความสากลที่ว่าครอบครัว
                            สำคัญกว่าทุกสิ่ง ด้วยรายได้กว่า 7 พันล้านดอลลาร์ทั่วโลก จึงเป็นหนึ่งในซีรีส์ภาพยนตร์
                            ที่ทำรายได้สูงสุดตลอดกาล
                        </p>
                        <div className="mt-8 text-6xl">🏎️💨</div>
                    </div>

                    {/* Famous Quote */}
                    <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 p-8 rounded-lg border border-orange-400/30 text-center">
                        <h2 className="text-2xl text-orange-300 font-bold mb-4">คำพูดที่โด่งดัง</h2>
                        <blockquote className="text-3xl text-white font-bold italic mb-4">
                            "ผมไม่มีเพื่อน ผมมีแต่ครอบครัว"
                        </blockquote>
                        <p className="text-gray-300">- โดมินิค โตเรตโต</p>
                    </div>
                </div>
            </div>
        </div>
    );
}