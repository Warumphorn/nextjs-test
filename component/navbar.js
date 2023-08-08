import Link from "next/link"
import Image from "next/image"

export default function navbar(){
    return (
        <nav>
            <div>
                <Image src="/logo.png" width={50} height ={50} />
            </div>
            <uL>
                <li><Link href= "/"> หน้าแรก</Link></li>
                <li><Link href= "/about"> เกี่ยวกับเรา</Link></li>
                <li><Link href= "/products"> สินค้าทัั้งหมด</Link></li>
            </uL>
        </nav>

    )

}